// =========================================================
// FSRS Practice — "Repaso Inteligente" module
// Uses the FSRS engine to decide WHAT to review and WHEN.
// =========================================================

(function () {
    'use strict';

    // --- DOM Setup ---
    const startBtn = document.getElementById('start-fsrs-btn');
    const fsrsDueCount = document.getElementById('fsrs-due-count');

    // --- Update the due count badge on the dashboard ---
    function updateFSRSDueBadge() {
        const allIds = irregularVerbs.map(v => v.id);
        const stats = FSRS.getFSRSStats(allIds);
        if (fsrsDueCount) {
            fsrsDueCount.textContent = `${stats.dueCount} verbos pendientes`;
        }
    }

    // Call on load and expose globally so dashboard refresh can call it
    window.updateFSRSDueBadge = updateFSRSDueBadge;
    updateFSRSDueBadge();

    // --- Show the FSRS practice view ---
    function showFSRSPractice() {
        dashboardView.classList.add('hidden');
        progressView.classList.add('hidden');
        if (typeof bridgeView !== 'undefined') bridgeView.classList.add('hidden');
        exerciseView.classList.remove('hidden');
        state.currentView = 'fsrsPractice';
        document.getElementById('exercise-title').textContent = 'Repaso Inteligente (FSRS)';
        setActiveNav(null);
        startFSRSSession();
    }

    startBtn.addEventListener('click', showFSRSPractice);

    // --- Session state ---
    let fsrsSession = {
        queue: [],       // Array of verb objects to review
        currentIdx: 0,
        score: 0,
        total: 0
    };

    // --- Start a new FSRS review session ---
    function startFSRSSession() {
        state.score = 0;
        state.currentIndex = 0;
        state.checked = false;
        updateScore();

        const allIds = irregularVerbs.map(v => v.id);
        const dueItems = FSRS.getDueVerbs(allIds);

        // Take up to 15 verbs per session
        const sessionSize = Math.min(15, dueItems.length);
        const selected = dueItems.slice(0, sessionSize);

        // Map back to full verb objects
        fsrsSession.queue = selected.map(item => {
            const verb = irregularVerbs.find(v => v.id === item.verbId);
            return { ...verb, fsrsInfo: item };
        }).filter(Boolean);

        fsrsSession.currentIdx = 0;
        fsrsSession.score = 0;
        fsrsSession.total = fsrsSession.queue.length;

        if (fsrsSession.queue.length === 0) {
            exerciseContainer.innerHTML = `
                <div class="verb-practice-container" style="text-align:center;gap:1.5rem;">
                    <div style="font-size:3rem;">🎉</div>
                    <h3 style="font-size:1.5rem;">¡Todo al día!</h3>
                    <p style="color:var(--text-secondary);">No tienes verbos pendientes de repaso. Vuelve más tarde o practica con otros ejercicios.</p>
                    <button class="check-btn" id="fsrs-home-btn">🏠 Volver al Inicio</button>
                </div>`;
            document.getElementById('fsrs-home-btn').addEventListener('click', showDashboard);
            return;
        }

        state.shuffledVerbs = fsrsSession.queue;
        renderFSRSCard();
    }

    // --- Render a single FSRS review card ---
    function renderFSRSCard() {
        state.checked = false;
        const verb = fsrsSession.queue[fsrsSession.currentIdx];
        const total = fsrsSession.total;
        const idx = fsrsSession.currentIdx;

        // Get FSRS info for this verb
        const info = FSRS.getVerbFSRSInfo(verb.id);
        const isNew = info.state === 'new';

        // State badge
        const stateLabels = {
            new: { emoji: '🆕', text: 'Nuevo' },
            learning: { emoji: '📖', text: 'Aprendiendo' },
            review: { emoji: '🔄', text: 'Repaso' },
            relearning: { emoji: '⚠️', text: 'Reaprendiendo' }
        };
        const st = stateLabels[info.state] || stateLabels.new;

        // Retention bar color
        const retColor = info.retrievability > 70 ? '#10b981' : info.retrievability > 40 ? '#f59e0b' : '#ef4444';

        exerciseContainer.innerHTML = `
            <div class="verb-practice-container">
                <div class="verb-top-row" style="margin-bottom:1rem; width:100%; max-width:550px;">
                    <div class="verb-progress">${idx + 1} / ${total}</div>
                    <div class="verb-badges">
                        <span class="type-tag ${verb.isRegular ? 'tag-regular' : 'tag-irregular'}">${verb.isRegular ? 'Regular' : 'Irregular'}</span>
                        <span class="mastery-tag" style="background:rgba(99,102,241,0.2); color:#818cf8;">${st.emoji} ${st.text}</span>
                    </div>
                </div>

                ${!isNew ? `
                <div style="width:100%; max-width:550px; margin-bottom:1.5rem;">
                    <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.3rem;">
                        <span>Retención: ${info.retrievability}%</span>
                        <span>Estabilidad: ${info.stability}d</span>
                    </div>
                    <div style="width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden;">
                        <div style="width:${info.retrievability}%; height:100%; background:${retColor}; border-radius:3px; transition:width 0.5s;"></div>
                    </div>
                </div>` : ''}

                <div class="verb-display">${verb.present}</div>

                <div class="input-group">
                    <div class="input-field">
                        <label for="fsrs-input-past">📝 Past Tense</label>
                        <input type="text" id="fsrs-input-past" class="verb-input" placeholder="e.g. went" autocomplete="off" spellcheck="false" />
                    </div>
                    <div class="input-field">
                        <label for="fsrs-input-spanish">🇲🇽 Significado</label>
                        <input type="text" id="fsrs-input-spanish" class="verb-input" placeholder="e.g. ir" autocomplete="off" spellcheck="false" />
                    </div>
                </div>

                <div class="action-buttons">
                    <button class="check-btn" id="fsrs-check-btn">✓ Verificar</button>
                </div>

                <div class="feedback-message" id="fsrs-feedback"></div>

                <!-- FSRS Rating buttons (hidden until checked) -->
                <div id="fsrs-rating-area" style="display:none; width:100%; max-width:550px;">
                    <p style="text-align:center; color:var(--text-secondary); margin-bottom:0.75rem; font-size:0.95rem;">
                        ¿Qué tan fácil fue? <span style="font-size:0.8rem; opacity:0.7;">(esto programa tu próximo repaso)</span>
                    </p>
                    <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:0.5rem;">
                        <button class="fsrs-rate-btn" data-rating="1" style="background:linear-gradient(135deg,#ef4444,#dc2626); border:none; color:white; padding:0.7rem 0.4rem; border-radius:10px; cursor:pointer; font-size:0.85rem; font-weight:600; transition:transform 0.15s, box-shadow 0.15s;">
                            😵 Olvidé<br><small id="fsrs-int-again" style="opacity:0.8;">—</small>
                        </button>
                        <button class="fsrs-rate-btn" data-rating="2" style="background:linear-gradient(135deg,#f59e0b,#d97706); border:none; color:white; padding:0.7rem 0.4rem; border-radius:10px; cursor:pointer; font-size:0.85rem; font-weight:600; transition:transform 0.15s, box-shadow 0.15s;">
                            😓 Difícil<br><small id="fsrs-int-hard" style="opacity:0.8;">—</small>
                        </button>
                        <button class="fsrs-rate-btn" data-rating="3" style="background:linear-gradient(135deg,#10b981,#059669); border:none; color:white; padding:0.7rem 0.4rem; border-radius:10px; cursor:pointer; font-size:0.85rem; font-weight:600; transition:transform 0.15s, box-shadow 0.15s;">
                            😊 Bien<br><small id="fsrs-int-good" style="opacity:0.8;">—</small>
                        </button>
                        <button class="fsrs-rate-btn" data-rating="4" style="background:linear-gradient(135deg,#6366f1,#4f46e5); border:none; color:white; padding:0.7rem 0.4rem; border-radius:10px; cursor:pointer; font-size:0.85rem; font-weight:600; transition:transform 0.15s, box-shadow 0.15s;">
                            🤩 Fácil<br><small id="fsrs-int-easy" style="opacity:0.8;">—</small>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Focus first input
        document.getElementById('fsrs-input-past').focus();

        // Enter key handling
        const onEnter = (e) => { if (e.key === 'Enter') handleFSRSCheck(); };
        document.getElementById('fsrs-input-past').addEventListener('keydown', onEnter);
        document.getElementById('fsrs-input-spanish').addEventListener('keydown', onEnter);
        document.getElementById('fsrs-check-btn').addEventListener('click', handleFSRSCheck);

        // Rating buttons
        document.querySelectorAll('.fsrs-rate-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const rating = parseInt(e.currentTarget.dataset.rating);
                handleFSRSRate(verb.id, rating);
            });
            // Hover effect
            btn.addEventListener('mouseenter', (e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
            });
            btn.addEventListener('mouseleave', (e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
            });
        });
    }

    // --- Check the user's answer ---
    function handleFSRSCheck() {
        if (state.checked) return;
        state.checked = true;

        const verb = fsrsSession.queue[fsrsSession.currentIdx];
        const pastInput = document.getElementById('fsrs-input-past');
        const spanishInput = document.getElementById('fsrs-input-spanish');
        const feedback = document.getElementById('fsrs-feedback');
        const checkBtn = document.getElementById('fsrs-check-btn');
        const ratingArea = document.getElementById('fsrs-rating-area');

        const acceptedPast = verb.past.split('/').map(v => normalize(v));
        const acceptedSpanish = verb.spanish.split('/').map(v => normalize(v));

        const pastCorrect = acceptedPast.some(a => a === normalize(pastInput.value));
        const spanishCorrect = acceptedSpanish.some(a => a === normalize(spanishInput.value));

        pastInput.classList.toggle('correct', pastCorrect);
        pastInput.classList.toggle('incorrect', !pastCorrect);
        spanishInput.classList.toggle('correct', spanishCorrect);
        spanishInput.classList.toggle('incorrect', !spanishCorrect);

        pastInput.disabled = true;
        spanishInput.disabled = true;

        if (!pastCorrect) pastInput.value = verb.past;
        if (!spanishCorrect) spanishInput.value = verb.spanish;

        const allCorrect = pastCorrect && spanishCorrect;

        if (allCorrect) {
            feedback.textContent = '🎉 ¡Correcto!';
            feedback.className = 'feedback-message success';
            fsrsSession.score++;
            state.score++;
            updateScore();
        } else {
            feedback.textContent = '❌ Revisa las respuestas correctas arriba.';
            feedback.className = 'feedback-message error';
        }

        // Hide check button, show rating area
        checkBtn.style.display = 'none';
        ratingArea.style.display = 'block';

        // Show preview intervals by running the scheduler directly
        const card = FSRS.getCardForVerb(verb.id);
        const scheduler = FSRS.createScheduler();
        const preview = scheduler.repeat(card, new Date());
        const fmt = (d) => d === 0 ? 'Ahora' : d === 1 ? '1 día' : `${d} días`;
        document.getElementById('fsrs-int-again').textContent = fmt(preview[FSRS.Rating.AGAIN].card.scheduled_days);
        document.getElementById('fsrs-int-hard').textContent = fmt(preview[FSRS.Rating.HARD].card.scheduled_days);
        document.getElementById('fsrs-int-good').textContent = fmt(preview[FSRS.Rating.GOOD].card.scheduled_days);
        document.getElementById('fsrs-int-easy').textContent = fmt(preview[FSRS.Rating.EASY].card.scheduled_days);
    }

    // --- Handle the user's FSRS rating ---
    function handleFSRSRate(verbId, rating) {
        // Apply the rating to the FSRS engine
        FSRS.rateVerb(verbId, rating);

        // Also sync with the existing mastery system for compatibility
        if (rating === FSRS.Rating.AGAIN) {
            setVerbStatus(verbId, 'learning');
        } else if (rating >= FSRS.Rating.GOOD) {
            setVerbStatus(verbId, 'known');
        }

        // Update global stats
        const globalStats = loadStats();
        globalStats.totalAnswered++;
        if (rating >= FSRS.Rating.GOOD) {
            globalStats.totalCorrect++;
            globalStats.streak++;
            if (globalStats.streak > globalStats.bestStreak) globalStats.bestStreak = globalStats.streak;
        } else {
            globalStats.streak = 0;
        }
        saveStats(globalStats);

        // Move to next card
        fsrsSession.currentIdx++;
        if (fsrsSession.currentIdx >= fsrsSession.total) {
            showFSRSResults();
        } else {
            renderFSRSCard();
        }
    }

    // --- Show session results ---
    function showFSRSResults() {
        const allIds = irregularVerbs.map(v => v.id);
        const stats = FSRS.getFSRSStats(allIds);
        const globalStats = loadStats();
        globalStats.totalSessions++;
        saveStats(globalStats);
        saveHistory({
            date: new Date().toISOString(),
            score: fsrsSession.score,
            total: fsrsSession.total
        });

        const pct = fsrsSession.total > 0 ? Math.round((fsrsSession.score / fsrsSession.total) * 100) : 0;
        let emoji = '😅';
        if (pct === 100) emoji = '🏆';
        else if (pct >= 80) emoji = '🎉';
        else if (pct >= 60) emoji = '👍';

        exerciseContainer.innerHTML = `
            <div class="verb-practice-container results-container">
                <div class="result-emoji">${emoji}</div>
                <h3 class="result-title">¡Sesión FSRS Completada!</h3>
                <p class="result-score">${fsrsSession.score} / ${fsrsSession.total} correctas &mdash; ${pct}%</p>

                <div style="background:rgba(99,102,241,0.1); border:1px solid rgba(99,102,241,0.3); border-radius:12px; padding:1.2rem; width:100%; max-width:450px; margin-bottom:1.5rem;">
                    <h4 style="margin:0 0 0.75rem 0; color:#818cf8; font-size:1rem;">🧠 Estado de Memoria</h4>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; font-size:0.9rem;">
                        <div style="text-align:center;">
                            <div style="font-size:1.5rem; font-weight:700; color:var(--text-primary);">${stats.avgRetention}%</div>
                            <div style="color:var(--text-secondary); font-size:0.8rem;">Retención media</div>
                        </div>
                        <div style="text-align:center;">
                            <div style="font-size:1.5rem; font-weight:700; color:var(--text-primary);">${stats.dueCount}</div>
                            <div style="color:var(--text-secondary); font-size:0.8rem;">Pendientes</div>
                        </div>
                        <div style="text-align:center;">
                            <div style="font-size:1.5rem; font-weight:700; color:var(--text-primary);">${stats.reviewCount}</div>
                            <div style="color:var(--text-secondary); font-size:0.8rem;">En repaso</div>
                        </div>
                        <div style="text-align:center;">
                            <div style="font-size:1.5rem; font-weight:700; color:var(--text-primary);">${stats.newCount}</div>
                            <div style="color:var(--text-secondary); font-size:0.8rem;">Nuevos</div>
                        </div>
                    </div>
                </div>

                <div class="action-buttons" style="margin-top: 1rem;">
                    <button class="check-btn" id="fsrs-restart-btn">🔄 Otra sesión</button>
                    <button class="next-btn" id="fsrs-home-btn">🏠 Inicio</button>
                </div>
            </div>
        `;

        document.getElementById('fsrs-restart-btn').addEventListener('click', () => {
            showFSRSPractice();
        });
        document.getElementById('fsrs-home-btn').addEventListener('click', showDashboard);
    }

})();
