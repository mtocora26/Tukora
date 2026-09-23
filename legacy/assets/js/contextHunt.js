// =============================================
// CONTEXT HUNT — Game Logic
// 3 Modes (Repaso, Aprender, Detective)
// 3 Practice Types (Past, Present, Mixed)
// =============================================

// ── Shared LocalStorage key (same as main app) ─────────────────
const LS_MASTERY_KEY = 'ep_verb_mastery'; // { verbId: 'known'|'learning'|'new' }
const LS_CH_STATS    = 'ch_stats';

function loadMastery() {
    try { return JSON.parse(localStorage.getItem(LS_MASTERY_KEY)) || {}; }
    catch { return {}; }
}
function saveMastery(mastery) {
    localStorage.setItem(LS_MASTERY_KEY, JSON.stringify(mastery));
}
function loadChStats() {
    try { return JSON.parse(localStorage.getItem(LS_CH_STATS)) || { bestScore: 0, totalGames: 0, totalCorrect: 0 }; }
    catch { return { bestScore: 0, totalGames: 0, totalCorrect: 0 }; }
}
function saveChStats(s) { localStorage.setItem(LS_CH_STATS, JSON.stringify(s)); }

// ── Rounds data (extended to support both tenses) ────────────────
const roundsData = [
    {
        verbId: 'sleep', emoji: '😴',
        hintPast: 'Yesterday, she ________ on the sofa.', pastCorrect: 'Slept',
        hintPres: 'I like to ________ on the sofa.',      presCorrect: 'Sleep',
        optionsPast: ['Slept', 'Ran', 'Thought'],       optionsPres: ['Sleep', 'Run', 'Think'],
        revealPast: '¡Correcto! Ella DURMIÓ 💤',       revealPres: '¡Correcto! DORMIR 💤'
    },
    {
        verbId: 'run', emoji: '🏃',
        hintPast: 'He ________ as fast as he could.', pastCorrect: 'Ran',
        hintPres: 'I want to ________ every morning.',presCorrect: 'Run',
        optionsPast: ['Slept', 'Ran', 'Drove'],       optionsPres: ['Sleep', 'Run', 'Drive'],
        revealPast: '¡Correcto! Él CORRIÓ 🏃',       revealPres: '¡Correcto! CORRER 🏃'
    },
    {
        verbId: 'eat', emoji: '🍕',
        hintPast: 'They ________ the whole pizza.',   pastCorrect: 'Ate',
        hintPres: 'We want to ________ pizza now.',   presCorrect: 'Eat',
        optionsPast: ['Drank', 'Ate', 'Cooked'],      optionsPres: ['Drink', 'Eat', 'Cook'],
        revealPast: '¡Correcto! Ellos COMIERON 🍕',  revealPres: '¡Correcto! COMER 🍕'
    },
    {
        verbId: 'think', emoji: '🧠',
        hintPast: 'She ________ about the problem.',  pastCorrect: 'Thought',
        hintPres: 'I need to ________ about this.',   presCorrect: 'Think',
        optionsPast: ['Thought', 'Slept', 'Ran'],     optionsPres: ['Think', 'Sleep', 'Run'],
        revealPast: '¡Correcto! Ella PENSÓ 🧠',      revealPres: '¡Correcto! PENSAR 🧠'
    },
    {
        verbId: 'write', emoji: '✍️',
        hintPast: 'He ________ a letter to his friend.', pastCorrect: 'Wrote',
        hintPres: 'I have to ________ a letter.',        presCorrect: 'Write',
        optionsPast: ['Read', 'Wrote', 'Said'],          optionsPres: ['Read', 'Write', 'Say'],
        revealPast: '¡Correcto! Él ESCRIBIÓ ✍️',       revealPres: '¡Correcto! ESCRIBIR ✍️'
    },
    {
        verbId: 'drive', emoji: '🚗',
        hintPast: 'She ________ to the supermarket.', pastCorrect: 'Drove',
        hintPres: 'I can ________ a car.',            presCorrect: 'Drive',
        optionsPast: ['Drove', 'Walked', 'Ran'],      optionsPres: ['Drive', 'Walk', 'Run'],
        revealPast: '¡Correcto! Ella MANEJÓ 🚗',      revealPres: '¡Correcto! MANEJAR 🚗'
    },
    {
        verbId: 'study', emoji: '📚',
        hintPast: 'He ________ all night for the exam.', pastCorrect: 'Studied',
        hintPres: 'We need to ________ for the exam.',   presCorrect: 'Study',
        optionsPast: ['Studied', 'Slept', 'Played'],     optionsPres: ['Study', 'Sleep', 'Play'],
        revealPast: '¡Correcto! Él ESTUDIÓ 📚',        revealPres: '¡Correcto! ESTUDIAR 📚'
    },
    {
        verbId: 'hear', emoji: '🎵',
        hintPast: 'They ________ their favorite song.', pastCorrect: 'Heard',
        hintPres: 'Can you ________ that song?',        presCorrect: 'Hear',
        optionsPast: ['Heard', 'Saw', 'Felt'],          optionsPres: ['Hear', 'See', 'Feel'],
        revealPast: '¡Correcto! Ellos ESCUCHARON 🎵', revealPres: '¡Correcto! ESCUCHAR 🎵'
    },
    {
        verbId: 'drink', emoji: '💧',
        hintPast: 'After the run, she ________ water.', pastCorrect: 'Drank',
        hintPres: 'I want to ________ some water.',     presCorrect: 'Drink',
        optionsPast: ['Ate', 'Drank', 'Bought'],        optionsPres: ['Eat', 'Drink', 'Buy'],
        revealPast: '¡Correcto! Ella BEBIÓ 💧',       revealPres: '¡Correcto! BEBER 💧'
    },
    {
        verbId: 'build', emoji: '🏠',
        hintPast: 'They ________ a beautiful house.',   pastCorrect: 'Built',
        hintPres: 'They plan to ________ a house.',     presCorrect: 'Build',
        optionsPast: ['Built', 'Bought', 'Made'],       optionsPres: ['Build', 'Buy', 'Make'],
        revealPast: '¡Correcto! Ellos CONSTRUYERON 🏠', revealPres: '¡Correcto! CONSTRUIR 🏠'
    },
    {
        verbId: 'give', emoji: '🎁',
        hintPast: 'He ________ her a beautiful gift.', pastCorrect: 'Gave',
        hintPres: 'I want to ________ you a gift.',    presCorrect: 'Give',
        optionsPast: ['Took', 'Gave', 'Sold'],         optionsPres: ['Take', 'Give', 'Sell'],
        revealPast: '¡Correcto! Él DIO 🎁',          revealPres: '¡Correcto! DAR 🎁'
    },
    {
        verbId: 'leave', emoji: '🔑',
        hintPast: 'She ________ her keys on the table.', pastCorrect: 'Left',
        hintPres: 'Don\'t ________ your keys here.',     presCorrect: 'Leave',
        optionsPast: ['Left', 'Put', 'Kept'],            optionsPres: ['Leave', 'Put', 'Keep'],
        revealPast: '¡Correcto! Ella DEJÓ 🔑',         revealPres: '¡Correcto! DEJAR 🔑'
    },
    {
        verbId: 'read', emoji: '📖',
        hintPast: 'I ________ three chapters before bed.', pastCorrect: 'Read',
        hintPres: 'I like to ________ before bed.',        presCorrect: 'Read',
        optionsPast: ['Read', 'Wrote', 'Learned'],         optionsPres: ['Read', 'Write', 'Learn'],
        revealPast: '¡Correcto! Yo LEÍ 📖',              revealPres: '¡Correcto! LEER 📖'
    },
    {
        verbId: 'buy', emoji: '🛒',
        hintPast: 'Mom ________ groceries this morning.', pastCorrect: 'Bought',
        hintPres: 'We need to ________ groceries.',       presCorrect: 'Buy',
        optionsPast: ['Sold', 'Bought', 'Took'],          optionsPres: ['Sell', 'Buy', 'Take'],
        revealPast: '¡Correcto! Mamá COMPRÓ 🛒',        revealPres: '¡Correcto! COMPRAR 🛒'
    },
    {
        verbId: 'say', emoji: '📣',
        hintPast: 'The teacher ________ "Good morning!".', pastCorrect: 'Said',
        hintPres: 'What did you just ________?',           presCorrect: 'Say',
        optionsPast: ['Said', 'Told', 'Spoke'],            optionsPres: ['Say', 'Tell', 'Speak'],
        revealPast: '¡Correcto! La profesora DIJO 📣',   revealPres: '¡Correcto! DECIR 📣'
    },
    {
        verbId: 'fix', emoji: '🔧',
        hintPast: 'He ________ the broken bicycle.', pastCorrect: 'Fixed',
        hintPres: 'Can you ________ my bicycle?',    presCorrect: 'Fix',
        optionsPast: ['Fixed', 'Built', 'Broke'],    optionsPres: ['Fix', 'Build', 'Break'],
        revealPast: '¡Correcto! Él ARREGLÓ 🔧',    revealPres: '¡Correcto! ARREGLAR 🔧'
    },
    {
        verbId: 'celebrate', emoji: '🎉',
        hintPast: 'They ________ her birthday last Saturday.', pastCorrect: 'Celebrated',
        hintPres: 'We are going to ________ her birthday.',    presCorrect: 'Celebrate',
        optionsPast: ['Celebrated', 'Finished', 'Started'],    optionsPres: ['Celebrate', 'Finish', 'Start'],
        revealPast: '¡Correcto! Ellos CELEBRARON 🎉',        revealPres: '¡Correcto! CELEBRAR 🎉'
    },
    {
        verbId: 'break', emoji: '💔',
        hintPast: 'He accidentally ________ the window.', pastCorrect: 'Broke',
        hintPres: 'Be careful, don\'t ________ the window.',presCorrect: 'Break',
        optionsPast: ['Fixed', 'Cut', 'Broke'],           optionsPres: ['Fix', 'Cut', 'Break'],
        revealPast: '¡Correcto! Él ROMPIÓ 💔',          revealPres: '¡Correcto! ROMPER 💔'
    },
    {
        verbId: 'meet', emoji: '🤝',
        hintPast: 'I ________ an old friend at the café.', pastCorrect: 'Met',
        hintPres: 'Let\'s ________ at the café.',          presCorrect: 'Meet',
        optionsPast: ['Saw', 'Met', 'Called'],             optionsPres: ['See', 'Meet', 'Call'],
        revealPast: '¡Correcto! Me ENCONTRÉ 🤝',         revealPres: '¡Correcto! ENCONTRARSE 🤝'
    },
    {
        verbId: 'play', emoji: '🌙',
        hintPast: 'The kids ________ the game until midnight.', pastCorrect: 'Played',
        hintPres: 'The kids want to ________ a game.',          presCorrect: 'Play',
        optionsPast: ['Played', 'Studied', 'Watched'],          optionsPres: ['Play', 'Study', 'Watch'],
        revealPast: '¡Correcto! Los niños JUGARON 🌙',        revealPres: '¡Correcto! JUGAR 🌙'
    }
];

// ── Mode config ──────────────────────────────────────────────────
const MODE_CONFIG = {
    repaso:    { label: '🔍 Repaso',    hasTimer: false, hintImmediate: true,  autoAdvanceMs: 3000, showStars: false, badgeClass: 'badge--repaso'    },
    aprender:  { label: '📚 Aprender',  hasTimer: false, hintImmediate: true,  autoAdvanceMs: 3000, showStars: false, badgeClass: 'badge--aprender'  },
    detective: { label: '⚡ Detective',  hasTimer: true,  hintImmediate: false, autoAdvanceMs: 2200, showStars: true,  badgeClass: 'badge--detective' }
};

const ROUND_TIME     = 10;
const HINT_DELAY_MS  = 5000;
const QUICK_BONUS_MS = 3000;
const MAX_ROUNDS     = 10;

// ── State ────────────────────────────────────────────────────────
let gs = {
    practiceType: 'past', // 'past' | 'present' | 'mixed'
    mode:         'aprender',
    pool:         [],
    idx:          0,
    score:        0,
    stars:        0,
    timerVal:     ROUND_TIME,
    interval:     null,
    hintTimer:    null,
    answered:     false,
    roundStart:   0,
};

// ── DOM ──────────────────────────────────────────────────────────
const startOverlay      = document.getElementById('ch-start-overlay');
const noLearningOverlay = document.getElementById('ch-no-learning-overlay');
const resultsOverlay    = document.getElementById('ch-results-overlay');
const gameArea          = document.getElementById('ch-game-area');

const progressBar       = document.getElementById('ch-progress-bar');
const timerRow          = document.getElementById('ch-timer-row');
const roundCounter      = document.getElementById('ch-round-counter');
const qtypeBadge        = document.getElementById('ch-qtype-badge');
const arcFill           = document.getElementById('ch-arc-fill');
const timerNum          = document.getElementById('ch-timer-num');

const imageZone         = document.getElementById('ch-image-zone');
const emojiCard         = document.getElementById('ch-emoji-card');
const imgEl             = document.getElementById('ch-img');
const hintEl            = document.getElementById('ch-hint');
const feedbackEl        = document.getElementById('ch-feedback');
const optionBtns        = [
    document.getElementById('ch-opt-0'),
    document.getElementById('ch-opt-1'),
    document.getElementById('ch-opt-2'),
];

const scoreEl           = document.getElementById('ch-score');
const starsPill         = document.getElementById('ch-stars');
const modeBadge         = document.getElementById('ch-mode-badge');

// Results
const resEmoji          = document.getElementById('ch-res-emoji');
const resTitle          = document.getElementById('ch-res-title');
const resSub            = document.getElementById('ch-res-sub');
const resScore          = document.getElementById('ch-res-score');
const resStars          = document.getElementById('ch-res-stars');
const resStarsCard      = document.getElementById('ch-res-stars-card');
const resBest           = document.getElementById('ch-res-best');
const resTotalGames     = document.getElementById('ch-res-total-games');

// Practice Type Tabs
const tabPast    = document.getElementById('ch-ptype-past');
const tabPresent = document.getElementById('ch-ptype-present');
const tabMixed   = document.getElementById('ch-ptype-mixed');
const tabs = [tabPast, tabPresent, tabMixed];

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        gs.practiceType = tab.dataset.type;
    });
});

// Mode selection buttons
document.getElementById('ch-mode-repaso').addEventListener('click',    () => startGame('repaso'));
document.getElementById('ch-mode-aprender').addEventListener('click',  () => startGame('aprender'));
document.getElementById('ch-mode-detective').addEventListener('click', () => startGame('detective'));

document.getElementById('ch-no-learning-back').addEventListener('click', () => {
    noLearningOverlay.classList.add('hidden');
    startOverlay.classList.remove('hidden');
});
document.getElementById('ch-restart-btn').addEventListener('click',      () => startGame(gs.mode));
document.getElementById('ch-change-mode-btn').addEventListener('click',  () => {
    resultsOverlay.classList.add('hidden');
    gameArea.style.display = 'none';
    startOverlay.classList.remove('hidden');
});
document.getElementById('ch-home-btn').addEventListener('click', () => { window.location.href = 'index.html'; });

// ── Arc helpers ──────────────────────────────────────────────────
const ARC_R = 30;
const ARC_C = 2 * Math.PI * ARC_R; // ≈ 188.5

function setArc(val, max) {
    const dash = Math.max(0, (val / max)) * ARC_C;
    arcFill.style.strokeDasharray = `${dash} ${ARC_C}`;
    const danger = val <= 3;
    arcFill.classList.toggle('danger', danger);
    timerNum.classList.toggle('danger', danger);
}

// ── Speech synthesis ────────────────────────────────────────────
function speak(word) {
    if (!window.speechSynthesis) return;
    const utt = new SpeechSynthesisUtterance(word);
    utt.lang = 'en-US';
    utt.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
}

// ── Game flow ────────────────────────────────────────────────────
function startGame(mode) {
    gs.mode = mode;
    const cfg = MODE_CONFIG[mode];

    // Build the pool
    let basePool = [...roundsData];
    
    // Apply global active pool
    const activePoolId = localStorage.getItem('ep_active_pool') || 'all';
    if (activePoolId === 'learning') {
        const mastery = loadMastery();
        basePool = basePool.filter(r => (mastery[r.verbId] || 'new') === 'learning');
    } else if (activePoolId !== 'all') {
        try {
            const lists = JSON.parse(localStorage.getItem('ep_verb_lists')) || [];
            const list = lists.find(l => l.id === activePoolId);
            if (list) {
                basePool = basePool.filter(r => list.verbs.includes(r.verbId));
            }
        } catch {}
    }

    // "Repaso" mode forces 'learning' filter even if global is 'all'
    if (mode === 'repaso' && activePoolId !== 'learning') {
        const mastery = loadMastery();
        basePool = basePool.filter(r => (mastery[r.verbId] || 'new') === 'learning');
    }

    if (basePool.length === 0) {
        startOverlay.classList.add('hidden');
        noLearningOverlay.classList.remove('hidden');
        document.querySelector('#ch-no-learning-overlay h2').textContent = '¡No hay verbos disponibles!';
        document.querySelector('#ch-no-learning-overlay p').textContent = 'El filtro o lista que has seleccionado está vacío.';
        return;
    }

    // Process pool into specific questions based on practice type
    let questionPool = [];
    basePool.forEach(r => {
        if (gs.practiceType === 'past' || gs.practiceType === 'mixed') {
            questionPool.push({
                ...r,
                qType: 'past',
                hint: r.hintPast,
                correct: r.pastCorrect,
                options: r.optionsPast,
                reveal: r.revealPast
            });
        }
        if (gs.practiceType === 'present' || gs.practiceType === 'mixed') {
            questionPool.push({
                ...r,
                qType: 'present',
                hint: r.hintPres,
                correct: r.presCorrect,
                options: r.optionsPres,
                reveal: r.revealPres
            });
        }
    });

    // Shuffle and cap at MAX_ROUNDS
    gs.pool     = shuffle(questionPool).slice(0, MAX_ROUNDS);
    gs.idx      = 0;
    gs.score    = 0;
    gs.stars    = 0;
    gs.answered = false;

    // Show/hide overlays
    startOverlay.classList.add('hidden');
    resultsOverlay.classList.add('hidden');
    gameArea.style.display = 'flex';

    // Mode badge
    modeBadge.textContent  = cfg.label;
    modeBadge.className    = `ch-mode-badge ${cfg.badgeClass}`;

    // Timer row
    timerRow.style.display = cfg.hasTimer ? 'flex' : 'none';

    // Stars pill
    starsPill.style.display = cfg.showStars ? 'flex' : 'none';
    resStarsCard.style.display = cfg.showStars ? 'flex' : 'none';

    updateScoreDisplay();
    showRound();
}

function showRound() {
    const round = gs.pool[gs.idx];
    const cfg   = MODE_CONFIG[gs.mode];
    gs.answered  = false;
    gs.roundStart = Date.now();

    // Progress
    const pct = (gs.idx / gs.pool.length) * 100;
    progressBar.style.width   = pct + '%';
    roundCounter.textContent  = `${gs.idx + 1} / ${gs.pool.length}`;

    // Question Type Badge
    if (round.qType === 'past') {
        qtypeBadge.innerHTML = '🕐 Elige el Past Simple';
        qtypeBadge.className = 'ch-qtype-badge qtype--past';
    } else {
        qtypeBadge.innerHTML = '🔄 Elige el Presente';
        qtypeBadge.className = 'ch-qtype-badge qtype--present';
    }

    // Image/Emoji
    imageZone.className = 'ch-image-zone';
    if (round.image) {
        imgEl.src = round.image;
        imgEl.style.display  = 'block';
        emojiCard.style.display = 'none';
    } else {
        emojiCard.textContent   = round.emoji;
        emojiCard.style.display = 'flex';
        imgEl.style.display     = 'none';
    }

    // Hint
    hintEl.innerHTML = buildHintHTML(round.hint);
    if (cfg.hintImmediate) {
        hintEl.classList.remove('invisible');
    } else {
        hintEl.classList.add('invisible');
        clearTimeout(gs.hintTimer);
        gs.hintTimer = setTimeout(() => {
            if (!gs.answered) hintEl.classList.remove('invisible');
        }, HINT_DELAY_MS);
    }

    // Feedback
    feedbackEl.textContent = '';
    feedbackEl.className   = 'ch-feedback';

    // Options (shuffle order)
    const opts = shuffle([...round.options]);
    const lbl = round.qType === 'past' ? 'Past Simple' : 'Presente';
    optionBtns.forEach((btn, i) => {
        btn.innerHTML  = `<span class="ch-opt-label">${lbl}</span>${opts[i]}`;
        btn.className  = 'ch-option';
        btn.disabled   = false;
        btn.dataset.verb = opts[i];
    });

    // Timer
    if (cfg.hasTimer) startTimer();
}

function buildHintHTML(hint) {
    return hint.replace('________', '<span class="blank">________</span>');
}

function startTimer() {
    clearInterval(gs.interval);
    gs.timerVal = ROUND_TIME;
    timerNum.textContent = gs.timerVal;
    setArc(gs.timerVal, ROUND_TIME);

    gs.interval = setInterval(() => {
        gs.timerVal--;
        timerNum.textContent = gs.timerVal;
        setArc(gs.timerVal, ROUND_TIME);
        if (gs.timerVal <= 0) {
            clearInterval(gs.interval);
            if (!gs.answered) timeOut();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(gs.interval);
    clearTimeout(gs.hintTimer);
}

// ── Answer handling ──────────────────────────────────────────────
optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (gs.answered) return;
        handleAnswer(btn.dataset.verb, btn);
    });
});

function handleAnswer(chosen, btnEl) {
    gs.answered = true;
    stopTimer();

    const round   = gs.pool[gs.idx];
    const cfg     = MODE_CONFIG[gs.mode];
    const elapsed = Date.now() - gs.roundStart;
    const isRight = chosen === round.correct;

    // Style buttons
    optionBtns.forEach(b => {
        b.disabled = true;
        if (b.dataset.verb === round.correct) {
            b.className = 'ch-option correct';
        } else if (b === btnEl && !isRight) {
            b.className = 'ch-option wrong';
        } else {
            b.className = 'ch-option dimmed';
        }
    });

    // Image zone reaction
    imageZone.classList.add(isRight ? 'correct' : 'wrong');

    // Update Mastery logic
    const mastery = loadMastery();
    const currentStatus = mastery[round.verbId] || 'new';

    if (isRight) {
        gs.score++;
        feedbackEl.textContent = round.reveal;
        feedbackEl.className   = 'ch-feedback correct';
        speak(round.correct);

        if (currentStatus === 'new' || currentStatus === 'learning') {
            mastery[round.verbId] = 'known';
            saveMastery(mastery);
        }

        // Quick-answer star (Detective only)
        if (cfg.showStars && elapsed <= QUICK_BONUS_MS) {
            gs.stars++;
            spawnStar();
        }
    } else {
        feedbackEl.textContent = `❌ Era: ${round.correct} — ${round.reveal.replace('¡Correcto! ', '')}`;
        feedbackEl.className   = 'ch-feedback wrong';
        
        mastery[round.verbId] = 'learning';
        saveMastery(mastery);
    }

    // Always reveal hint + correct answer after answering
    hintEl.classList.remove('invisible');
    hintEl.innerHTML = round.hint.replace('________',
        `<span class="blank blank--answer">${round.correct}</span>`);

    updateScoreDisplay();

    // Auto-advance
    setTimeout(() => nextRound(), cfg.autoAdvanceMs);
}

function timeOut() {
    gs.answered = true;
    clearTimeout(gs.hintTimer);

    const round = gs.pool[gs.idx];
    optionBtns.forEach(b => {
        b.disabled  = true;
        b.className = b.dataset.verb === round.correct ? 'ch-option correct' : 'ch-option dimmed';
    });

    feedbackEl.textContent = `⏰ ¡Tiempo! Era: ${round.correct}`;
    feedbackEl.className   = 'ch-feedback wrong';
    imageZone.classList.add('wrong');
    hintEl.classList.remove('invisible');
    hintEl.innerHTML = round.hint.replace('________',
        `<span class="blank blank--answer">${round.correct}</span>`);

    setTimeout(() => nextRound(), MODE_CONFIG[gs.mode].autoAdvanceMs);
}

function nextRound() {
    gs.idx++;
    if (gs.idx >= gs.pool.length) {
        endGame();
    } else {
        showRound();
    }
}

// ── End game ────────────────────────────────────────────────────
function endGame() {
    stopTimer();
    gameArea.style.display = 'none';
    progressBar.style.width = '100%';

    const stats = loadChStats();
    stats.totalGames++;
    stats.totalCorrect += gs.score;
    if (gs.score > stats.bestScore) stats.bestScore = gs.score;
    saveChStats(stats);

    const total = gs.pool.length;
    const pct   = Math.round((gs.score / total) * 100);

    let emoji = '😅', title = '¡Sigue intentando!';
    if (pct === 100)     { emoji = '🏆'; title = '¡Detective Experto!'; }
    else if (pct >= 80)  { emoji = '🎉'; title = '¡Caso casi resuelto!'; }
    else if (pct >= 60)  { emoji = '🕵️'; title = '¡Buen trabajo, detective!'; }
    else if (pct >= 40)  { emoji = '🔍'; title = '¡Sigue investigando!'; }

    resEmoji.textContent = emoji;
    resTitle.textContent = title;
    resSub.textContent   = pct >= 70
        ? 'Excelente trabajo. Tu memoria visual está mejorando.'
        : 'Practica más y pronto dominarás todos los verbos.';

    resScore.textContent      = `${gs.score} / ${total}`;
    resStars.textContent      = gs.stars;
    resBest.textContent       = stats.bestScore;
    resTotalGames.textContent = stats.totalGames;

    resultsOverlay.classList.remove('hidden');
}

// ── Helpers ──────────────────────────────────────────────────────
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function updateScoreDisplay() {
    scoreEl.textContent  = gs.score;
    starsPill.textContent = `⭐ ${gs.stars}`;
}

function spawnStar() {
    const el = document.createElement('div');
    el.className = 'ch-star-burst';
    el.textContent = '⭐';
    el.style.left = (Math.random() * 80 + 10) + 'vw';
    el.style.top  = (Math.random() * 40 + 20) + 'vh';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 800);
}

// ── Init start screen ────────────────────────────────────────────
(function initStartScreen() {
    const mastery = loadMastery();
    const learningCount = Object.values(mastery).filter(v => v === 'learning').length;
    const repasoCountEl = document.getElementById('ch-repaso-count');
    if (repasoCountEl) {
        if (learningCount === 0) {
            repasoCountEl.textContent = 'Sin verbos "Me falta" aún';
            repasoCountEl.style.background = 'rgba(239,68,68,0.15)';
            repasoCountEl.style.color = '#ef4444';
            document.getElementById('ch-mode-repaso').style.opacity = '0.6';
        } else {
            repasoCountEl.textContent = `${learningCount} verbo${learningCount !== 1 ? 's' : ''} por repasar`;
        }
    }
    // Arc init
    arcFill.style.strokeDasharray = `${ARC_C} ${ARC_C}`;
    setArc(ROUND_TIME, ROUND_TIME);
})();
