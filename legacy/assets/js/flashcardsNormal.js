// assets/js/flashcardsNormal.js

document.getElementById('start-flashcards-normal-btn').addEventListener('click', showFlashcardsNormal);

function showFlashcardsNormal() {
    dashboardView.classList.add('hidden');
    progressView.classList.add('hidden');
    if (typeof bridgeView !== 'undefined') bridgeView.classList.add('hidden');
    exerciseView.classList.remove('hidden');
    state.currentView = 'flashcardsNormal';
    document.getElementById('exercise-title').textContent = 'Flashcards Normales';
    setActiveNav(null);
    startFlashcardsNormalExercise();
}

function startFlashcardsNormalExercise() {
    state.score          = 0;
    state.currentIndex   = 0;
    state.checked        = false;

    const pool = getActivePool(irregularVerbs);
    if (pool.length === 0) {
        exerciseContainer.innerHTML = `
            <div class="verb-practice-container" style="text-align:center;gap:1.5rem;">
                <h3 style="font-size:1.5rem;">¡No hay verbos en este conjunto!</h3>
                <button class="check-btn" id="fcn-home-btn">🏠 Volver al Inicio</button>
            </div>`;
        document.getElementById('fcn-home-btn').addEventListener('click', showDashboard);
        return;
    }

    state.shuffledVerbs  = shuffle(pool);
    updateScore();
    renderFlashcardNormal();
}

function renderFlashcardNormal() {
    const verb  = state.shuffledVerbs[state.currentIndex];
    const total = state.shuffledVerbs.length;
    const status = getVerbStatus(verb.id);
    const { label: masteryLabel, cls: masteryCls } = getMasteryLabel(status);

    exerciseContainer.innerHTML = `
        <div class="verb-practice-container">
            <div class="verb-top-row" style="margin-bottom: 2rem; width: 100%; max-width: 500px;">
                <div class="verb-progress">${state.currentIndex + 1} / ${total}</div>
                <div class="verb-badges">
                    <span class="type-tag ${verb.isRegular ? 'tag-regular' : 'tag-irregular'}">${verb.isRegular ? 'Regular' : 'Irregular'}</span>
                    <span class="mastery-tag ${masteryCls}" id="mastery-tag">${masteryLabel}</span>
                </div>
            </div>

            <div class="flashcard-container" id="flashcard-container">
                <div class="flashcard" id="flashcard">
                    <!-- FRONT: Present -->
                    <div class="flashcard-face flashcard-front">
                        <span class="fc-label">Present</span>
                        <div class="fc-word">${verb.present}</div>
                        <div class="flip-hint">↺ Haz click para voltear</div>
                    </div>
                    <!-- BACK: Past & Spanish -->
                    <div class="flashcard-face flashcard-back">
                        <span class="fc-label">Past & Meaning</span>
                        <div class="fc-word-secondary">${verb.past}</div>
                        <div class="fc-spanish">${verb.spanish}</div>
                    </div>
                </div>
            </div>

            <div class="action-buttons" style="max-width: 500px;">
                <button class="next-btn" id="fc-next-btn" style="width: 100%; display:none;">Siguiente Verbo →</button>
            </div>
            
            <div class="mastery-buttons" id="fc-mastery-buttons" style="display:none; max-width: 500px;">
                <p class="mastery-prompt">¿Te acordabas de este verbo?</p>
                <div class="mastery-btn-row">
                    <button class="mastery-btn btn-known"    id="fc-btn-known">✅ Sí me la sé</button>
                    <button class="mastery-btn btn-learning" id="fc-btn-learning">📖 No me acordaba</button>
                </div>
            </div>
        </div>
    `;

    const cardContainer = document.getElementById('flashcard-container');
    const card = document.getElementById('flashcard');
    const masteryBtns = document.getElementById('fc-mastery-buttons');
    const nextBtn = document.getElementById('fc-next-btn');
    const btnKnown = document.getElementById('fc-btn-known');
    const btnLearning = document.getElementById('fc-btn-learning');

    cardContainer.addEventListener('click', () => {
        card.classList.toggle('flipped');
        if (card.classList.contains('flipped')) {
            masteryBtns.style.display = 'flex';
            nextBtn.style.display = 'block';
        }
    });

    nextBtn.addEventListener('click', () => {
        state.currentIndex++;
        if (state.currentIndex >= state.shuffledVerbs.length) {
            showResults();
        } else {
            renderFlashcardNormal();
        }
    });

    btnKnown.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent card flip
        if(btnKnown.disabled) return;
        setVerbStatus(verb.id, 'known');
        const updated = getMasteryLabel('known');
        const tag = document.getElementById('mastery-tag');
        tag.textContent = updated.label;
        tag.className = 'mastery-tag ' + updated.cls;
        state.score++; 
        updateScore();
        btnKnown.disabled = true;
        btnLearning.disabled = true;
    });

    btnLearning.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent card flip
        if(btnLearning.disabled) return;
        setVerbStatus(verb.id, 'learning');
        const updated = getMasteryLabel('learning');
        const tag = document.getElementById('mastery-tag');
        tag.textContent = updated.label;
        tag.className = 'mastery-tag ' + updated.cls;
        btnKnown.disabled = true;
        btnLearning.disabled = true;
    });
}
