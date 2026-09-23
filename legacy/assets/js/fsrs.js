// =========================================================
// FSRS — Free Spaced Repetition Scheduler (v5)
// Pure vanilla JS implementation — zero dependencies
// Based on: https://github.com/open-spaced-repetition/fsrs4anki
// =========================================================

const FSRS = (() => {
    'use strict';

    // ---------------------------------------------------
    // Default FSRS-5 parameters (w0..w18)
    // These are the "universal" defaults from the FSRS paper.
    // They work well without personal optimization.
    // ---------------------------------------------------
    const DEFAULT_W = [
        0.4072, // w0  — initial stability for Again
        1.1829, // w1  — initial stability for Hard
        3.1262, // w2  — initial stability for Good
        15.4722,// w3  — initial stability for Easy
        7.2102, // w4  — difficulty weight
        0.5316, // w5  — difficulty base
        1.0651, // w6  — stability growth factor
        0.0046, // w7  — retrievability weight on S
        1.5418, // w8  — stability growth exponent
        0.1466, // w9  — difficulty dampening
        1.0014, // w10 — success stability modifier
        2.0762, // w11 — fail stability base
        0.0110, // w12 — fail difficulty factor
        0.3468, // w13 — fail stability multiplier
        1.0127, // w14 — hard penalty
        0.0000, // w15 — easy bonus (not used in v5)
        2.5211, // w16 — short-term stability factor
        0.2149, // w17 — stability after forget
        0.6687  // w18 — difficulty after forget
    ];

    // Desired retention rate (probability of recall when due)
    const DEFAULT_DESIRED_RETENTION = 0.9;

    // FSRS constants
    const DECAY = -0.5;
    const FACTOR = 19 / 81; // (0.9^(1/DECAY) - 1)

    // Card states
    const State = Object.freeze({
        NEW:        0,
        LEARNING:   1,
        REVIEW:     2,
        RELEARNING: 3
    });

    // Ratings: 1=Again, 2=Hard, 3=Good, 4=Easy
    const Rating = Object.freeze({
        AGAIN: 1,
        HARD:  2,
        GOOD:  3,
        EASY:  4
    });

    // ---------------------------------------------------
    // Card factory — creates a fresh (new) card
    // ---------------------------------------------------
    function createEmptyCard(now = new Date()) {
        return {
            due:            now.toISOString(),
            stability:      0,
            difficulty:     0,
            elapsed_days:   0,
            scheduled_days: 0,
            reps:           0,
            lapses:         0,
            state:          State.NEW,
            last_review:    null
        };
    }

    // ---------------------------------------------------
    // Core math functions
    // ---------------------------------------------------

    /** Retrievability: probability of recall after `elapsed` days */
    function retrievability(elapsed_days, stability) {
        if (stability <= 0) return 0;
        return Math.pow(1 + FACTOR * elapsed_days / stability, DECAY);
    }

    /** Next interval (days) given stability and desired retention */
    function nextInterval(stability, desiredRetention) {
        return Math.max(
            1,
            Math.round(
                (stability / FACTOR) * (Math.pow(desiredRetention, 1 / DECAY) - 1)
            )
        );
    }

    /** Clamp difficulty to [1, 10] */
    function clampD(d) {
        return Math.min(10, Math.max(1, d));
    }

    // ---------------------------------------------------
    // FSRS Scheduler
    // ---------------------------------------------------
    function createScheduler(params = {}) {
        const w = params.w || DEFAULT_W;
        const desiredRetention = params.desiredRetention || DEFAULT_DESIRED_RETENTION;

        // --- Initial difficulty for a new card ---
        function initDifficulty(rating) {
            // D0(G) = w5 - exp(w4 * (G - 1)) + 1
            return clampD(w[5] - Math.exp(w[4] * (rating - 1)) + 1);
        }

        // --- Initial stability for a new card ---
        function initStability(rating) {
            // S0(G) = w[G-1]
            return Math.max(0.01, w[rating - 1]);
        }

        // --- Next difficulty after a review ---
        function nextDifficulty(d, rating) {
            // D' = w5 - exp(w4 * (G - 1)) + 1
            const newD = w[5] - Math.exp(w[4] * (rating - 1)) + 1;
            // Linear damping with mean reversion
            // D'' = D - w[9] * (D - D')
            return clampD(d - w[9] * (d - newD));
        }

        // --- Next stability after a SUCCESSFUL review (rating >= 2) ---
        function nextRecallStability(d, s, r, rating) {
            const hardPenalty = (rating === Rating.HARD) ? w[14] : 1;
            const easyBonus = (rating === Rating.EASY) ? w[15] : 0;

            // S'_r = S * (1 + exp(w6) * (11 - D) * S^(-w7) * (exp((1-R)*w8) - 1) * hardPenalty + easyBonus)
            return s * (
                1 +
                Math.exp(w[6]) *
                (11 - d) *
                Math.pow(s, -w[7]) *
                (Math.exp((1 - r) * w[8]) - 1) *
                hardPenalty
            );
        }

        // --- Next stability after a LAPSE (Again) ---
        function nextForgetStability(d, s, r) {
            // S'_f = w11 * D^(-w12) * ((S+1)^w13 - 1) * exp((1-R)*w14)
            return Math.max(
                0.01,
                w[11] *
                Math.pow(d, -w[12]) *
                (Math.pow(s + 1, w[13]) - 1) *
                Math.exp((1 - r) * w[17])
            );
        }

        // --- Main scheduling function ---
        function repeat(card, now = new Date()) {
            if (typeof now === 'string') now = new Date(now);
            const cardCopy = JSON.parse(JSON.stringify(card));

            // Calculate elapsed days since last review
            let elapsed = 0;
            if (cardCopy.last_review) {
                const lastReview = new Date(cardCopy.last_review);
                elapsed = Math.max(0, (now - lastReview) / (1000 * 60 * 60 * 24));
            }
            cardCopy.elapsed_days = elapsed;

            // Current retrievability
            const r = (cardCopy.state === State.NEW)
                ? 0
                : retrievability(elapsed, cardCopy.stability);

            // Generate results for each possible rating
            const results = {};

            for (const ratingKey of Object.keys(Rating)) {
                const rating = Rating[ratingKey];
                const next = JSON.parse(JSON.stringify(cardCopy));
                next.reps++;
                next.last_review = now.toISOString();

                if (cardCopy.state === State.NEW) {
                    // First review ever
                    next.difficulty = initDifficulty(rating);
                    next.stability = initStability(rating);

                    if (rating === Rating.AGAIN) {
                        next.state = State.LEARNING;
                        next.scheduled_days = 0;
                        next.due = now.toISOString(); // review again soon
                        next.lapses++;
                    } else {
                        next.state = State.REVIEW;
                        const interval = nextInterval(next.stability, desiredRetention);
                        next.scheduled_days = interval;
                        const dueDate = new Date(now);
                        dueDate.setDate(dueDate.getDate() + interval);
                        next.due = dueDate.toISOString();
                    }
                } else {
                    // Subsequent reviews
                    next.difficulty = nextDifficulty(cardCopy.difficulty, rating);

                    if (rating === Rating.AGAIN) {
                        next.stability = nextForgetStability(
                            next.difficulty,
                            cardCopy.stability,
                            r
                        );
                        next.state = State.RELEARNING;
                        next.scheduled_days = 0;
                        next.due = now.toISOString();
                        next.lapses++;
                    } else {
                        next.stability = nextRecallStability(
                            next.difficulty,
                            cardCopy.stability,
                            r,
                            rating
                        );
                        next.state = State.REVIEW;
                        const interval = nextInterval(next.stability, desiredRetention);
                        next.scheduled_days = interval;
                        const dueDate = new Date(now);
                        dueDate.setDate(dueDate.getDate() + interval);
                        next.due = dueDate.toISOString();
                    }
                }

                results[rating] = {
                    card: next,
                    log: {
                        rating,
                        state: cardCopy.state,
                        due: cardCopy.due,
                        stability: cardCopy.stability,
                        difficulty: cardCopy.difficulty,
                        elapsed_days: elapsed,
                        last_review: cardCopy.last_review,
                        scheduled_days: next.scheduled_days,
                        review: now.toISOString()
                    }
                };
            }

            return results;
        }

        return { repeat, retrievability, nextInterval };
    }

    // ---------------------------------------------------
    // LocalStorage persistence for FSRS card states
    // ---------------------------------------------------
    const LS_KEY_FSRS_CARDS = 'ep_fsrs_cards';
    const LS_KEY_FSRS_LOGS  = 'ep_fsrs_logs';

    function loadFSRSCards() {
        try { return JSON.parse(localStorage.getItem(LS_KEY_FSRS_CARDS)) || {}; }
        catch { return {}; }
    }

    function saveFSRSCards(cards) {
        localStorage.setItem(LS_KEY_FSRS_CARDS, JSON.stringify(cards));
    }

    function loadFSRSLogs() {
        try { return JSON.parse(localStorage.getItem(LS_KEY_FSRS_LOGS)) || []; }
        catch { return []; }
    }

    function saveFSRSLog(logEntry) {
        const logs = loadFSRSLogs();
        logs.push(logEntry);
        // Keep last 500 logs to avoid localStorage bloat
        if (logs.length > 500) logs.splice(0, logs.length - 500);
        localStorage.setItem(LS_KEY_FSRS_LOGS, JSON.stringify(logs));
    }

    /**
     * Get or create the FSRS card for a verb.
     */
    function getCardForVerb(verbId) {
        const cards = loadFSRSCards();
        if (!cards[verbId]) {
            cards[verbId] = createEmptyCard();
            saveFSRSCards(cards);
        }
        return cards[verbId];
    }

    /**
     * Apply a rating to a verb's card and persist.
     * Returns the updated card.
     */
    function rateVerb(verbId, rating, now = new Date()) {
        const cards = loadFSRSCards();
        const card = cards[verbId] || createEmptyCard();
        const scheduler = createScheduler();
        const results = scheduler.repeat(card, now);
        const result = results[rating];

        // Save updated card
        cards[verbId] = result.card;
        saveFSRSCards(cards);

        // Save review log
        saveFSRSLog({ verbId, ...result.log });

        return result.card;
    }

    /**
     * Get all verbs that are due for review (due <= now).
     * Returns an array of verbIds sorted by urgency (most overdue first).
     */
    function getDueVerbs(allVerbIds, now = new Date()) {
        const cards = loadFSRSCards();
        const scheduler = createScheduler();
        const due = [];

        for (const verbId of allVerbIds) {
            const card = cards[verbId];
            if (!card) {
                // Never reviewed → always due
                due.push({ verbId, overdue: Infinity, retrievability: 0, isNew: true });
                continue;
            }

            const dueDate = new Date(card.due);
            if (dueDate <= now) {
                // Calculate how overdue
                const elapsed = (now - dueDate) / (1000 * 60 * 60 * 24);
                const r = card.stability > 0
                    ? scheduler.retrievability(
                        (now - new Date(card.last_review)) / (1000 * 60 * 60 * 24),
                        card.stability
                    )
                    : 0;
                due.push({ verbId, overdue: elapsed, retrievability: r, isNew: false });
            }
        }

        // Sort: new cards first, then lowest retrievability (most forgotten)
        due.sort((a, b) => {
            if (a.isNew && !b.isNew) return -1;
            if (!a.isNew && b.isNew) return 1;
            return a.retrievability - b.retrievability;
        });

        return due;
    }

    /**
     * Get summary stats for the FSRS system.
     */
    function getFSRSStats(allVerbIds, now = new Date()) {
        const cards = loadFSRSCards();
        const scheduler = createScheduler();
        let newCount = 0, learningCount = 0, reviewCount = 0, dueCount = 0;
        let totalR = 0, reviewedCount = 0;

        for (const verbId of allVerbIds) {
            const card = cards[verbId];
            if (!card || card.state === State.NEW) {
                newCount++;
                continue;
            }

            if (card.state === State.LEARNING || card.state === State.RELEARNING) {
                learningCount++;
            } else {
                reviewCount++;
            }

            const dueDate = new Date(card.due);
            if (dueDate <= now) dueCount++;

            // Calculate current retrievability
            if (card.last_review && card.stability > 0) {
                const elapsed = (now - new Date(card.last_review)) / (1000 * 60 * 60 * 24);
                totalR += scheduler.retrievability(elapsed, card.stability);
                reviewedCount++;
            }
        }

        return {
            newCount,
            learningCount,
            reviewCount,
            dueCount: dueCount + newCount, // new cards are always "due"
            avgRetention: reviewedCount > 0 ? Math.round((totalR / reviewedCount) * 100) : 0
        };
    }

    /**
     * Get detailed info for a single verb's FSRS state.
     */
    function getVerbFSRSInfo(verbId, now = new Date()) {
        const cards = loadFSRSCards();
        const card = cards[verbId];
        const scheduler = createScheduler();

        if (!card || card.state === State.NEW) {
            return {
                state: 'new',
                stability: 0,
                difficulty: 0,
                retrievability: 0,
                dueIn: 0,
                isDue: true,
                nextIntervals: null
            };
        }

        const elapsed = card.last_review
            ? (now - new Date(card.last_review)) / (1000 * 60 * 60 * 24)
            : 0;
        const r = card.stability > 0 ? scheduler.retrievability(elapsed, card.stability) : 0;
        const dueDate = new Date(card.due);
        const dueIn = Math.max(0, Math.round((dueDate - now) / (1000 * 60 * 60 * 24)));

        // Preview next intervals for each rating
        const preview = scheduler.repeat(card, now);
        const nextIntervals = {
            again: preview[Rating.AGAIN].card.scheduled_days,
            hard:  preview[Rating.HARD].card.scheduled_days,
            good:  preview[Rating.GOOD].card.scheduled_days,
            easy:  preview[Rating.EASY].card.scheduled_days
        };

        return {
            state: ['new', 'learning', 'review', 'relearning'][card.state],
            stability: Math.round(card.stability * 10) / 10,
            difficulty: Math.round(card.difficulty * 10) / 10,
            retrievability: Math.round(r * 100),
            dueIn,
            isDue: dueDate <= now,
            reps: card.reps,
            lapses: card.lapses,
            nextIntervals
        };
    }

    // ---------------------------------------------------
    // Public API
    // ---------------------------------------------------
    return {
        State,
        Rating,
        createScheduler,
        createEmptyCard,
        retrievability,

        // Persistence helpers
        getCardForVerb,
        rateVerb,
        getDueVerbs,
        getFSRSStats,
        getVerbFSRSInfo,
        loadFSRSCards,
        saveFSRSCards
    };
})();
