// =========================================
// PAST CONTINUOUS MODULE
// =========================================

// --- Data: Sentence Exercises ---
const pcSentenceExercises = [
    // Affirmative
    { template: "I {blank} TV when you called.", verb: "watch", answers: ["was watching"], spanish: "Yo estaba viendo la tele cuando llamaste." },
    { template: "She {blank} dinner at 7 PM.", verb: "cook", answers: ["was cooking"], spanish: "Ella estaba cocinando la cena a las 7 PM." },
    { template: "They {blank} in the park all morning.", verb: "play", answers: ["were playing"], spanish: "Ellos estaban jugando en el parque toda la mañana." },
    { template: "He {blank} a book when I arrived.", verb: "read", answers: ["was reading"], spanish: "Él estaba leyendo un libro cuando llegué." },
    { template: "We {blank} to music during the trip.", verb: "listen", answers: ["were listening"], spanish: "Estábamos escuchando música durante el viaje." },
    { template: "The kids {blank} in the pool.", verb: "swim", answers: ["were swimming"], spanish: "Los niños estaban nadando en la piscina." },
    { template: "I {blank} for my exam all night.", verb: "study", answers: ["was studying"], spanish: "Estuve estudiando para mi examen toda la noche." },
    { template: "She {blank} on the phone when I saw her.", verb: "talk", answers: ["was talking"], spanish: "Ella estaba hablando por teléfono cuando la vi." },
    { template: "The dog {blank} in the yard.", verb: "run", answers: ["was running"], spanish: "El perro estaba corriendo en el patio." },
    { template: "They {blank} English at that time.", verb: "learn", answers: ["were learning"], spanish: "Ellos estaban aprendiendo inglés en ese momento." },
    // Negative
    { template: "I {blank} when the earthquake happened.", verb: "not / sleep", answers: ["wasn't sleeping", "was not sleeping"], spanish: "Yo no estaba durmiendo cuando pasó el terremoto." },
    { template: "They {blank} attention to the teacher.", verb: "not / pay", answers: ["weren't paying", "were not paying"], spanish: "Ellos no estaban poniendo atención al profesor." },
    { template: "She {blank} at the party last night.", verb: "not / dance", answers: ["wasn't dancing", "was not dancing"], spanish: "Ella no estaba bailando en la fiesta anoche." },
    { template: "We {blank} anything important.", verb: "not / do", answers: ["weren't doing", "were not doing"], spanish: "No estábamos haciendo nada importante." },
    { template: "He {blank} when I called him.", verb: "not / work", answers: ["wasn't working", "was not working"], spanish: "Él no estaba trabajando cuando lo llamé." },
    // Questions
    { template: "{blank} when I called?", verb: "you / study", answers: ["Were you studying", "were you studying"], spanish: "¿Estabas estudiando cuando llamé?" },
    { template: "What {blank} at 9 PM?", verb: "she / do", answers: ["was she doing", "Was she doing"], spanish: "¿Qué estaba haciendo ella a las 9 PM?" },
    { template: "{blank} outside when it started raining?", verb: "they / play", answers: ["Were they playing", "were they playing"], spanish: "¿Estaban jugando afuera cuando empezó a llover?" },
    { template: "Why {blank} so loud?", verb: "he / sing", answers: ["was he singing", "Was he singing"], spanish: "¿Por qué estaba cantando tan fuerte?" },
    { template: "{blank} to the radio?", verb: "you / listen", answers: ["Were you listening", "were you listening"], spanish: "¿Estabas escuchando la radio?" },
];

// --- Data: Reading ---
const pcReadingExercises = [
    {
        title: "A Rainy Afternoon",
        text: `It <b>was raining</b> hard outside. Sarah <b>was sitting</b> by the window and <b>was reading</b> a novel. Her brother Tom <b>was playing</b> video games in his room. Their mom <b>was cooking</b> lunch in the kitchen. Suddenly, the power went out! Sarah <b>wasn't expecting</b> that. Tom <b>was winning</b> his game, so he got really upset. They all went to the living room and <b>were talking</b> by candlelight until the power came back.`,
        questions: [
            { q: "¿Qué estaba haciendo Sarah junto a la ventana?", options: ["Estaba cocinando", "Estaba leyendo una novela", "Estaba jugando"], correct: 1 },
            { q: "¿Qué estaba haciendo Tom cuando se fue la luz?", options: ["Estaba ganando su juego", "Estaba durmiendo", "Estaba cocinando"], correct: 0 },
            { q: "¿Qué hicieron todos en la sala?", options: ["Jugaron videojuegos", "Cocinaron juntos", "Hablaron con velas"], correct: 2 },
            { q: "¿Cuál de estas frases usa el pasado continuo en negativo?", options: ["was raining", "wasn't expecting", "were talking"], correct: 1 }
        ]
    },
    {
        title: "The Surprise Party",
        text: `Last Saturday, Maria's friends <b>were planning</b> a surprise party for her. Carlos <b>was decorating</b> the living room with balloons. Ana <b>was baking</b> a chocolate cake. Pedro <b>was buying</b> drinks at the store. Meanwhile, Maria <b>was walking</b> home from work. She <b>wasn't suspecting</b> anything unusual. When she opened the door, everyone shouted "Surprise!" Maria <b>was smiling</b> and <b>was crying</b> at the same time because she was so happy.`,
        questions: [
            { q: "¿Qué estaba haciendo Carlos?", options: ["Comprando bebidas", "Decorando la sala", "Horneando un pastel"], correct: 1 },
            { q: "¿Qué estaba haciendo Maria mientras preparaban la fiesta?", options: ["Estaba caminando a casa del trabajo", "Estaba comprando un regalo", "Estaba durmiendo"], correct: 0 },
            { q: "¿Qué significa 'was baking'?", options: ["Estaba comprando", "Estaba horneando", "Estaba decorando"], correct: 1 },
            { q: "¿'wasn't suspecting' es una forma...?", options: ["Afirmativa", "Negativa del pasado continuo", "Pregunta"], correct: 1 }
        ]
    }
];

// --- Data: Was/Were Quiz ---
const wasWereExercises = [
    { subject: "I", answer: "was" },
    { subject: "You", answer: "were" },
    { subject: "He", answer: "was" },
    { subject: "She", answer: "was" },
    { subject: "It", answer: "was" },
    { subject: "We", answer: "were" },
    { subject: "They", answer: "were" },
    { subject: "The cat", answer: "was" },
    { subject: "My friends", answer: "were" },
    { subject: "The teacher", answer: "was" },
    { subject: "Tom and I", answer: "were" },
    { subject: "The students", answer: "were" },
    { subject: "My mom", answer: "was" },
    { subject: "The dogs", answer: "were" },
    { subject: "Everybody", answer: "was" },
];

// --- Data: Flashcards ---
const pcFlashcards = [
    { front: "¿Cuándo se usa WAS?", back: "Con I, He, She, It\n(sujetos singulares)" },
    { front: "¿Cuándo se usa WERE?", back: "Con You, We, They\n(sujetos plurales y 'you')" },
    { front: "Estructura AFIRMATIVA", back: "Sujeto + was/were + verbo-ING\nEj: She was reading." },
    { front: "Estructura NEGATIVA", back: "Sujeto + wasn't/weren't + verbo-ING\nEj: They weren't playing." },
    { front: "Estructura PREGUNTA", back: "Was/Were + sujeto + verbo-ING?\nEj: Were you studying?" },
    { front: "Regla -ING: verbos con -e final", back: "Se quita la -e y se agrega -ing\nmake → making, write → writing" },
    { front: "Regla -ING: verbos CVC cortos", back: "Se duplica la última consonante\nrun → running, sit → sitting" },
    { front: "Regla -ING: verbos con -ie", back: "Se cambia -ie por -y + ing\ndie → dying, lie → lying" },
    { front: "¿Para qué se usa el Past Continuous?", back: "1. Acción en progreso en el pasado\n2. Dos acciones simultáneas\n3. Acción interrumpida (when + Past Simple)" },
    { front: "Ejemplo: acción interrumpida", back: "I was sleeping WHEN the phone rang.\n(Continuo = acción larga, Simple = interrupción)" },
];

// =========================================
// PC: Sentence Exercise
// =========================================
function startPCSentencesExercise() {
    const countSel = document.getElementById('pc-sentences-count-select');
    const limit = countSel ? countSel.value : '10';

    state.score = 0;
    state.currentIndex = 0;
    state.checked = false;
    state.currentView = 'pc-sentences';

    let pool = shuffle([...pcSentenceExercises]);
    if (limit !== 'all') pool = pool.slice(0, parseInt(limit, 10));

    state.shuffledVerbs = pool;
    state.totalPossibleScore = pool.length;

    document.getElementById('exercise-title').textContent = 'Past Continuous: Completar Oraciones';
    updateScore();
    renderPCSentenceCard();
}

function renderPCSentenceCard() {
    state.checked = false;
    const ex = state.shuffledVerbs[state.currentIndex];
    const total = state.shuffledVerbs.length;

    let typeBadge = '', typeClass = '';
    if (ex.verb.includes('not /')) { typeBadge = 'Negativa'; typeClass = 'tag-learning'; }
    else if (ex.template.includes('?')) { typeBadge = 'Pregunta'; typeClass = 'tag-irregular'; }
    else { typeBadge = 'Afirmativa'; typeClass = 'tag-known'; }

    const sentenceHtml = ex.template.replace('{blank}',
        '<input type="text" id="pc-sen-input" class="verb-input inline-input" autocomplete="off" spellcheck="false" placeholder="was/were + -ing">');

    exerciseContainer.innerHTML = `
        <div class="verb-practice-container" style="max-width: 650px;">
            <div class="verb-top-row">
                <div class="verb-progress">${state.currentIndex + 1} / ${total}</div>
                <div class="verb-badges">
                    <span class="type-tag" style="background:rgba(16,185,129,0.2);color:#10b981;border:1px solid rgba(16,185,129,0.4);">Past Continuous</span>
                    <span class="type-tag ${typeClass}">${typeBadge}</span>
                </div>
            </div>
            <div class="sentence-display">${sentenceHtml}</div>
            <div style="text-align:center;color:var(--text-secondary);margin-bottom:0.5rem;font-size:1.1rem;">
                (Verbo: <strong style="color:#10b981;">${ex.verb}</strong>)
            </div>
            <div style="text-align:center;color:var(--text-secondary);margin-bottom:2.5rem;font-style:italic;">"${ex.spanish}"</div>
            <div class="action-buttons">
                <button class="check-btn" id="pc-sen-check" style="background:linear-gradient(135deg,#10b981,#06b6d4);">✓ Verificar</button>
                <button class="next-btn" id="pc-sen-next" style="display:none;">Siguiente →</button>
            </div>
            <div class="feedback-message" id="pc-sen-feedback"></div>
        </div>`;

    const input = document.getElementById('pc-sen-input');
    input.focus();
    input.addEventListener('keydown', e => { if (e.key === 'Enter') handlePCSenCheck(); });
    document.getElementById('pc-sen-check').addEventListener('click', handlePCSenCheck);
    document.getElementById('pc-sen-next').addEventListener('click', () => {
        state.currentIndex++;
        if (state.currentIndex >= state.shuffledVerbs.length) showResults();
        else renderPCSentenceCard();
    });
}

function handlePCSenCheck() {
    if (state.checked) { state.currentIndex++; state.currentIndex >= state.shuffledVerbs.length ? showResults() : renderPCSentenceCard(); return; }
    state.checked = true;
    const ex = state.shuffledVerbs[state.currentIndex];
    const input = document.getElementById('pc-sen-input');
    const feedback = document.getElementById('pc-sen-feedback');
    const val = normalize(input.value);
    const correct = ex.answers.map(a => normalize(a)).includes(val);
    input.disabled = true;
    if (correct) { state.score++; input.classList.add('correct'); feedback.textContent = '🎉 ¡Correcto!'; feedback.className = 'feedback-message success'; }
    else { input.classList.add('incorrect'); input.value = ex.answers[0]; feedback.textContent = '❌ Incorrecto.'; feedback.className = 'feedback-message error'; }
    updateScore();
    document.getElementById('pc-sen-check').style.display = 'none';
    document.getElementById('pc-sen-next').style.display = 'block';
}

// =========================================
// PC: Reading Exercise
// =========================================
function startPCReadingExercise() {
    state.score = 0;
    state.currentIndex = 0;
    state.currentView = 'pc-reading';
    state.currentStory = pcReadingExercises[Math.floor(Math.random() * pcReadingExercises.length)];
    document.getElementById('exercise-title').textContent = 'Past Continuous: Lectura Comprensiva';
    renderPCReadingCard();
}

function renderPCReadingCard() {
    state.checked = false;
    const story = state.currentStory;
    const qIdx = state.currentIndex;
    const q = story.questions[qIdx];
    const totalQ = story.questions.length;

    exerciseContainer.innerHTML = `
        <div class="verb-practice-container" style="max-width:800px;width:100%;">
            <div style="background:rgba(0,0,0,0.15);border:1px solid var(--border-color);border-radius:12px;padding:2rem;margin-bottom:2rem;text-align:left;">
                <h3 style="font-size:1.5rem;margin-bottom:1rem;color:#10b981;text-align:center;">${story.title}</h3>
                <p style="font-size:1.15rem;line-height:1.8;">${story.text}</p>
            </div>
            <div class="verb-progress" style="margin-bottom:1rem;">Pregunta ${qIdx+1} / ${totalQ}</div>
            <div class="sentence-display" style="font-size:1.3rem;margin-bottom:1.5rem;font-weight:600;">${q.q}</div>
            <div style="display:flex;flex-direction:column;gap:0.8rem;width:100;">
                ${q.options.map((o,i) => `<button class="pc-rd-opt" data-idx="${i}" style="background:rgba(255,255,255,0.05);border:2px solid var(--border-color);padding:1rem 1.5rem;font-size:1.1rem;border-radius:10px;color:var(--text-primary);cursor:pointer;transition:all 0.2s;text-align:left;">${o}</button>`).join('')}
            </div>
            <div class="feedback-message" id="pc-rd-fb" style="min-height:2rem;margin-top:1rem;"></div>
            <div class="action-buttons" style="margin-top:1rem;"><button class="next-btn" id="pc-rd-next" style="display:none;width:100%;background:linear-gradient(135deg,#10b981,#06b6d4);color:white;border:none;">Siguiente →</button></div>
        </div>`;

    document.querySelectorAll('.pc-rd-opt').forEach(btn => {
        btn.addEventListener('click', function() {
            if (state.checked) return;
            state.checked = true;
            document.querySelectorAll('.pc-rd-opt').forEach(b => b.disabled = true);
            const idx = parseInt(this.dataset.idx);
            const fb = document.getElementById('pc-rd-fb');
            if (idx === q.correct) {
                state.score++; updateScore();
                this.style.backgroundColor = 'rgba(34,197,94,0.2)'; this.style.borderColor = 'var(--green)';
                fb.textContent = '🎉 ¡Correcto!'; fb.className = 'feedback-message success';
            } else {
                this.style.backgroundColor = 'rgba(239,68,68,0.2)'; this.style.borderColor = 'var(--red)';
                fb.textContent = '❌ Incorrecto.'; fb.className = 'feedback-message error';
                document.querySelectorAll('.pc-rd-opt').forEach(b => { if (parseInt(b.dataset.idx) === q.correct) { b.style.borderColor = 'var(--green)'; b.style.color = 'var(--green)'; }});
            }
            const next = document.getElementById('pc-rd-next');
            next.style.display = 'block';
            if (qIdx + 1 === totalQ) next.textContent = 'Ver Resultados 🏆';
        });
    });
    document.getElementById('pc-rd-next').addEventListener('click', () => {
        state.currentIndex++;
        if (state.currentIndex >= state.currentStory.questions.length) showResults();
        else renderPCReadingCard();
    });
}

// =========================================
// PC: Flashcards
// =========================================
function startPCFlashcardsExercise() {
    state.score = 0; state.currentIndex = 0; state.currentView = 'pc-flashcards';
    state.shuffledVerbs = shuffle([...pcFlashcards]);
    document.getElementById('exercise-title').textContent = 'Past Continuous: Flashcards de Reglas';
    updateScore(); renderPCFlashcard();
}

function renderPCFlashcard() {
    const card = state.shuffledVerbs[state.currentIndex];
    const total = state.shuffledVerbs.length;
    exerciseContainer.innerHTML = `
        <div class="verb-practice-container">
            <div class="verb-progress" style="margin-bottom:2rem;">${state.currentIndex+1} / ${total}</div>
            <div class="flashcard-container" id="pc-fc-container">
                <div class="flashcard" id="pc-fc">
                    <div class="flashcard-face flashcard-front" style="border-color:rgba(16,185,129,0.3);">
                        <span class="fc-label">Pregunta</span>
                        <div class="fc-word" style="font-size:1.8rem;">${card.front}</div>
                        <div class="flip-hint">↺ Click para voltear</div>
                    </div>
                    <div class="flashcard-face flashcard-back" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.3);">
                        <span class="fc-label">Respuesta</span>
                        <div class="fc-word" style="font-size:1.4rem;white-space:pre-line;">${card.back}</div>
                    </div>
                </div>
            </div>
            <div class="mastery-buttons" id="pc-fc-btns" style="display:none;">
                <p class="mastery-prompt">¿Lo sabías?</p>
                <div class="mastery-btn-row">
                    <button class="mastery-btn btn-known" id="pc-fc-yes">✅ Sí</button>
                    <button class="mastery-btn btn-learning" id="pc-fc-no">📖 No</button>
                </div>
            </div>
        </div>`;
    const container = document.getElementById('pc-fc-container');
    const fc = document.getElementById('pc-fc');
    container.addEventListener('click', () => {
        fc.classList.toggle('flipped');
        if (fc.classList.contains('flipped')) document.getElementById('pc-fc-btns').style.display = 'flex';
    });
    const goNext = () => { state.currentIndex++; state.currentIndex >= state.shuffledVerbs.length ? showResults() : renderPCFlashcard(); };
    document.getElementById('pc-fc-yes').addEventListener('click', () => { state.score++; updateScore(); goNext(); });
    document.getElementById('pc-fc-no').addEventListener('click', goNext);
}

// =========================================
// PC: Was vs Were
// =========================================
function startPCWasWereExercise() {
    state.score = 0; state.currentIndex = 0; state.currentView = 'pc-waswere';
    state.shuffledVerbs = shuffle([...wasWereExercises]);
    state.totalPossibleScore = state.shuffledVerbs.length;
    document.getElementById('exercise-title').textContent = 'Past Continuous: Was vs Were';
    updateScore(); renderWasWereCard();
}

function renderWasWereCard() {
    state.checked = false;
    const ex = state.shuffledVerbs[state.currentIndex];
    const total = state.shuffledVerbs.length;
    exerciseContainer.innerHTML = `
        <div class="verb-practice-container">
            <div class="verb-progress" style="margin-bottom:2rem;">${state.currentIndex+1} / ${total}</div>
            <div class="verb-display" style="font-size:2.5rem;margin-bottom:1rem;">${ex.subject}</div>
            <p style="text-align:center;color:var(--text-secondary);margin-bottom:2rem;font-size:1.2rem;">_____ + playing</p>
            <div style="display:flex;gap:1rem;width:100%;max-width:400px;">
                <button class="ww-btn" data-val="was" style="flex:1;padding:1.2rem;font-size:1.5rem;font-weight:700;border-radius:12px;border:2px solid rgba(16,185,129,0.4);background:rgba(16,185,129,0.1);color:#10b981;cursor:pointer;transition:all 0.2s;">WAS</button>
                <button class="ww-btn" data-val="were" style="flex:1;padding:1.2rem;font-size:1.5rem;font-weight:700;border-radius:12px;border:2px solid rgba(6,182,212,0.4);background:rgba(6,182,212,0.1);color:#06b6d4;cursor:pointer;transition:all 0.2s;">WERE</button>
            </div>
            <div class="feedback-message" id="ww-fb" style="margin-top:1.5rem;"></div>
        </div>`;
    document.querySelectorAll('.ww-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (state.checked) return;
            state.checked = true;
            document.querySelectorAll('.ww-btn').forEach(b => b.disabled = true);
            const fb = document.getElementById('ww-fb');
            if (this.dataset.val === ex.answer) {
                state.score++; updateScore();
                this.style.borderColor = 'var(--green)'; this.style.background = 'rgba(34,197,94,0.2)';
                fb.textContent = '🎉 ¡Correcto!'; fb.className = 'feedback-message success';
            } else {
                this.style.borderColor = 'var(--red)'; this.style.background = 'rgba(239,68,68,0.2)';
                document.querySelectorAll('.ww-btn').forEach(b => { if (b.dataset.val === ex.answer) { b.style.borderColor = 'var(--green)'; b.style.background = 'rgba(34,197,94,0.2)'; }});
                fb.textContent = '❌ Incorrecto.'; fb.className = 'feedback-message error';
            }
            setTimeout(() => {
                state.currentIndex++;
                if (state.currentIndex >= state.shuffledVerbs.length) showResults();
                else renderWasWereCard();
            }, 800);
        });
    });
}

// =========================================
// PC: Show functions & Event Listeners
// =========================================
function showPCSentences() {
    dashboardView.classList.add('hidden'); progressView.classList.add('hidden'); bridgeView.classList.add('hidden');
    exerciseView.classList.remove('hidden'); setActiveNav(null); startPCSentencesExercise();
}
function showPCReading() {
    dashboardView.classList.add('hidden'); progressView.classList.add('hidden'); bridgeView.classList.add('hidden');
    exerciseView.classList.remove('hidden'); setActiveNav(null); startPCReadingExercise();
}
function showPCFlashcards() {
    dashboardView.classList.add('hidden'); progressView.classList.add('hidden'); bridgeView.classList.add('hidden');
    exerciseView.classList.remove('hidden'); setActiveNav(null); startPCFlashcardsExercise();
}
function showPCWasWere() {
    dashboardView.classList.add('hidden'); progressView.classList.add('hidden'); bridgeView.classList.add('hidden');
    exerciseView.classList.remove('hidden'); setActiveNav(null); startPCWasWereExercise();
}

document.getElementById('start-pc-sentences-btn').addEventListener('click', showPCSentences);
document.getElementById('start-pc-reading-btn').addEventListener('click', showPCReading);
document.getElementById('start-pc-flashcards-btn').addEventListener('click', showPCFlashcards);
document.getElementById('start-pc-waswere-btn').addEventListener('click', showPCWasWere);
