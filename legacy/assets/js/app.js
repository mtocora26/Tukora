// =========================================
// DATA - Irregular Verbs
// =========================================
const irregularVerbs = [
    // --- 1-10 ---
    { id: "go",        present: "go",        past: "went",       spanish: "ir" },
    { id: "come",      present: "come",      past: "came",       spanish: "venir" },
    { id: "do",        present: "do",        past: "did",        spanish: "hacer" },
    { id: "make",      present: "make",      past: "made",       spanish: "hacer / fabricar" },
    { id: "have",      present: "have",      past: "had",        spanish: "tener / haber" },
    { id: "take",      present: "take",      past: "took",       spanish: "tomar / llevar" },
    { id: "get",       present: "get",       past: "got",        spanish: "obtener / conseguir" },
    { id: "give",      present: "give",      past: "gave",       spanish: "dar" },
    { id: "say",       present: "say",       past: "said",       spanish: "decir" },
    { id: "tell",      present: "tell",      past: "told",       spanish: "decir / contar" },
    // --- 11-20 ---
    { id: "buy",       present: "buy",       past: "bought",     spanish: "comprar" },
    { id: "sell",      present: "sell",      past: "sold",       spanish: "vender" },
    { id: "bring",     present: "bring",     past: "brought",    spanish: "traer" },
    { id: "keep",      present: "keep",      past: "kept",       spanish: "mantener / guardar" },
    { id: "cut",       present: "cut",       past: "cut",        spanish: "cortar" },
    { id: "open",      present: "open",      past: "opened",     spanish: "abrir", isRegular: true },
    { id: "close",     present: "close",     past: "closed",     spanish: "cerrar", isRegular: true },
    { id: "start",     present: "start",     past: "started",    spanish: "comenzar / arrancar", isRegular: true },
    { id: "finish",    present: "finish",    past: "finished",   spanish: "terminar", isRegular: true },
    { id: "stop",      present: "stop",      past: "stopped",    spanish: "parar / detener", isRegular: true },
    // --- 21-30 ---
    { id: "begin",     present: "begin",     past: "began",      spanish: "comenzar" },
    { id: "watch",     present: "watch",     past: "watched",    spanish: "ver / mirar", isRegular: true },
    { id: "look",      present: "look",      past: "looked",     spanish: "mirar / buscar", isRegular: true },
    { id: "see",       present: "see",       past: "saw",        spanish: "ver" },
    { id: "hear",      present: "hear",      past: "heard",      spanish: "escuchar / oír" },
    { id: "feel",      present: "feel",      past: "felt",       spanish: "sentir" },
    { id: "run",       present: "run",       past: "ran",        spanish: "correr" },
    { id: "walk",      present: "walk",      past: "walked",     spanish: "caminar", isRegular: true },
    { id: "eat",       present: "eat",       past: "ate",        spanish: "comer" },
    { id: "drink",     present: "drink",     past: "drank",      spanish: "beber / tomar" },
    // --- 31-40 ---
    { id: "sleep",     present: "sleep",     past: "slept",      spanish: "dormir" },
    { id: "write",     present: "write",     past: "wrote",      spanish: "escribir" },
    { id: "read",      present: "read",      past: "read",       spanish: "leer" },
    { id: "speak",     present: "speak",     past: "spoke",      spanish: "hablar" },
    { id: "know",      present: "know",      past: "knew",       spanish: "saber / conocer" },
    { id: "think",     present: "think",     past: "thought",    spanish: "pensar" },
    { id: "learn",     present: "learn",     past: "learned",    spanish: "aprender", isRegular: true },
    { id: "help",      present: "help",      past: "helped",     spanish: "ayudar", isRegular: true },
    { id: "work",      present: "work",      past: "worked",     spanish: "trabajar", isRegular: true },
    { id: "play",      present: "play",      past: "played",     spanish: "jugar / tocar", isRegular: true },
    // --- 41-50 ---
    { id: "study",     present: "study",     past: "studied",    spanish: "estudiar", isRegular: true },
    { id: "drive",     present: "drive",     past: "drove",      spanish: "manejar / conducir" },
    { id: "ride",      present: "ride",      past: "rode",       spanish: "montar / andar en" },
    { id: "build",     present: "build",     past: "built",      spanish: "construir" },
    { id: "break",     present: "break",     past: "broke",      spanish: "romper" },
    { id: "clean",     present: "clean",     past: "cleaned",    spanish: "limpiar", isRegular: true },
    { id: "cook",      present: "cook",      past: "cooked",     spanish: "cocinar", isRegular: true },
    { id: "fix",       present: "fix",       past: "fixed",      spanish: "arreglar / reparar", isRegular: true },
    { id: "ask",       present: "ask",       past: "asked",      spanish: "preguntar", isRegular: true },
    { id: "answer",    present: "answer",    past: "answered",   spanish: "responder / contestar", isRegular: true },
    // --- 51-60 ---
    { id: "celebrate", present: "celebrate", past: "celebrated", spanish: "celebrar", isRegular: true },
    { id: "carry",     present: "carry",     past: "carried",    spanish: "cargar / llevar", isRegular: true },
    { id: "choose",    present: "choose",    past: "chose",      spanish: "elegir / escoger" },
    { id: "meet",      present: "meet",      past: "met",        spanish: "conocer / encontrarse" },
    { id: "call",      present: "call",      past: "called",     spanish: "llamar", isRegular: true },
    { id: "arrive",    present: "arrive",    past: "arrived",    spanish: "llegar", isRegular: true },
    { id: "leave",     present: "leave",     past: "left",       spanish: "salir / dejar" },
    { id: "wait",      present: "wait",      past: "waited",     spanish: "esperar", isRegular: true },
    { id: "happen",    present: "happen",    past: "happened",   spanish: "pasar / ocurrir", isRegular: true },
    { id: "remember",  present: "remember",  past: "remembered", spanish: "recordar", isRegular: true },
];

// =========================================
// DATA - Sentences
// =========================================
const sentenceExercises = [
    // Affirmative
    { template: "Yesterday, I {blank} to the park.", verb: "go", baseVerb: "go", pastTense: "went", answers: ["went"], spanish: "Ayer fui al parque." },
    { template: "They {blank} a new car last week.", verb: "buy", baseVerb: "buy", pastTense: "bought", answers: ["bought"], spanish: "Ellos compraron un auto nuevo la semana pasada." },
    { template: "We {blank} a great time at the party.", verb: "have", baseVerb: "have", pastTense: "had", answers: ["had"], spanish: "Tuvimos un gran momento en la fiesta." },
    { template: "The dog {blank} all the food.", verb: "eat", baseVerb: "eat", pastTense: "ate", answers: ["ate"], spanish: "El perro se comió toda la comida." },
    { template: "She {blank} me a beautiful gift.", verb: "give", baseVerb: "give", pastTense: "gave", answers: ["gave"], spanish: "Ella me dio un hermoso regalo." },
    { template: "He {blank} a letter to his friend.", verb: "write", baseVerb: "write", pastTense: "wrote", answers: ["wrote"], spanish: "Él escribió una carta a su amigo." },
    { template: "They {blank} a new house.", verb: "build", baseVerb: "build", pastTense: "built", answers: ["built"], spanish: "Ellos construyeron una casa nueva." },
    { template: "I {blank} my phone yesterday.", verb: "break", baseVerb: "break", pastTense: "broke", answers: ["broke"], spanish: "Rompí mi teléfono ayer." },
    { template: "We {blank} our homework early.", verb: "finish", baseVerb: "finish", pastTense: "finished", answers: ["finished"], spanish: "Nosotros terminamos nuestra tarea temprano." },
    { template: "She {blank} very happy.", verb: "feel", baseVerb: "feel", pastTense: "felt", answers: ["felt"], spanish: "Ella se sintió muy feliz." },
    { template: "He {blank} to me.", verb: "speak", baseVerb: "speak", pastTense: "spoke", answers: ["spoke"], spanish: "Él me habló." },
    { template: "I {blank} a shower this morning.", verb: "take", baseVerb: "take", pastTense: "took", answers: ["took"], spanish: "Tomé una ducha esta mañana." },
    { template: "She {blank} her keys on the table.", verb: "leave", baseVerb: "leave", pastTense: "left", answers: ["left"], spanish: "Ella dejó sus llaves en la mesa." },
    { template: "He {blank} me a secret.", verb: "tell", baseVerb: "tell", pastTense: "told", answers: ["told"], spanish: "Él me contó un secreto." },
    
    // Negative
    { template: "She {blank} the movie last night.", verb: "not / see", baseVerb: "see", pastTense: "saw", answers: ["didn't see", "did not see"], spanish: "Ella no vio la película anoche." },
    { template: "I {blank} about the test.", verb: "not / know", baseVerb: "know", pastTense: "knew", answers: ["didn't know", "did not know"], spanish: "Yo no sabía sobre el examen." },
    { template: "He {blank} any money.", verb: "not / have", baseVerb: "have", pastTense: "had", answers: ["didn't have", "did not have"], spanish: "Él no tenía nada de dinero." },
    { template: "They {blank} English at school.", verb: "not / learn", baseVerb: "learn", pastTense: "learned", answers: ["didn't learn", "did not learn"], spanish: "Ellos no aprendieron inglés en la escuela." },
    { template: "We {blank} to the beach.", verb: "not / go", baseVerb: "go", pastTense: "went", answers: ["didn't go", "did not go"], spanish: "Nosotros no fuimos a la playa." },
    { template: "I {blank} anything.", verb: "not / say", baseVerb: "say", pastTense: "said", answers: ["didn't say", "did not say"], spanish: "No dije nada." },
    { template: "She {blank} the window.", verb: "not / open", baseVerb: "open", pastTense: "opened", answers: ["didn't open", "did not open"], spanish: "Ella no abrió la ventana." },
    { template: "He {blank} his room.", verb: "not / clean", baseVerb: "clean", pastTense: "cleaned", answers: ["didn't clean", "did not clean"], spanish: "Él no limpió su cuarto." },
    { template: "They {blank} me with the bags.", verb: "not / help", baseVerb: "help", pastTense: "helped", answers: ["didn't help", "did not help"], spanish: "Ellos no me ayudaron con las bolsas." },
    { template: "I {blank} well last night.", verb: "not / sleep", baseVerb: "sleep", pastTense: "slept", answers: ["didn't sleep", "did not sleep"], spanish: "No dormí bien anoche." },
    { template: "We {blank} the game.", verb: "not / win", baseVerb: "win", pastTense: "won", answers: ["didn't win", "did not win"], spanish: "Nosotros no ganamos el juego." },
    { template: "I {blank} the answer.", verb: "not / remember", baseVerb: "remember", pastTense: "remembered", answers: ["didn't remember", "did not remember"], spanish: "No recordé la respuesta." },
    { template: "She {blank} the email.", verb: "not / send", baseVerb: "send", pastTense: "sent", answers: ["didn't send", "did not send"], spanish: "Ella no envió el correo." },

    // Questions
    { template: "{blank} breakfast this morning?", verb: "you / eat", baseVerb: "eat", pastTense: "ate", answers: ["Did you eat", "did you eat"], spanish: "¿Comiste el desayuno esta mañana?" },
    { template: "What time {blank} home?", verb: "he / come", baseVerb: "come", pastTense: "came", answers: ["did he come", "Did he come"], spanish: "¿A qué hora llegó él a casa?" },
    { template: "{blank} the book I gave you?", verb: "you / read", baseVerb: "read", pastTense: "read", answers: ["Did you read", "did you read"], spanish: "¿Leíste el libro que te di?" },
    { template: "Where {blank} my keys?", verb: "you / put", baseVerb: "put", pastTense: "put", answers: ["did you put", "Did you put"], spanish: "¿Dónde pusiste mis llaves?" },
    { template: "Why {blank} that?", verb: "she / say", baseVerb: "say", pastTense: "said", answers: ["did she say", "Did she say"], spanish: "¿Por qué dijo ella eso?" },
    { template: "{blank} your homework?", verb: "you / do", baseVerb: "do", pastTense: "did", answers: ["Did you do", "did you do"], spanish: "¿Hiciste tu tarea?" },
    { template: "What {blank} for dinner?", verb: "she / make", baseVerb: "make", pastTense: "made", answers: ["did she make", "Did she make"], spanish: "¿Qué hizo ella para cenar?" },
    { template: "{blank} my glasses?", verb: "you / see", baseVerb: "see", pastTense: "saw", answers: ["Did you see", "did you see"], spanish: "¿Viste mis lentes?" },
    { template: "Where {blank} after school?", verb: "they / go", baseVerb: "go", pastTense: "went", answers: ["did they go", "Did they go"], spanish: "¿A dónde fueron después de la escuela?" },
    { template: "When {blank}?", verb: "the movie / start", baseVerb: "start", pastTense: "started", answers: ["did the movie start", "Did the movie start"], spanish: "¿Cuándo empezó la película?" },
    { template: "How {blank}?", verb: "it / happen", baseVerb: "happen", pastTense: "happened", answers: ["did it happen", "Did it happen"], spanish: "¿Cómo pasó?" },
    { template: "{blank} your friend?", verb: "you / meet", baseVerb: "meet", pastTense: "met", answers: ["Did you meet", "did you meet"], spanish: "¿Te encontraste con tu amigo?" },
    { template: "Why {blank} that dress?", verb: "she / choose", baseVerb: "choose", pastTense: "chose", answers: ["did she choose", "Did she choose"], spanish: "¿Por qué eligió ese vestido?" },
    { template: "When {blank}?", verb: "they / arrive", baseVerb: "arrive", pastTense: "arrived", answers: ["did they arrive", "Did they arrive"], spanish: "¿Cuándo llegaron?" }
];

// =========================================
// DATA - Reading Comprehension
// =========================================
const readingExercises = [
    {
        title: "A Trip to the Mountains",
        text: `Last weekend, Sarah and Tom <b>went</b> to the mountains. They <b>woke up</b> early on Saturday and <b>drove</b> for three hours. When they <b>arrived</b>, they <b>set up</b> their tent. Tom <b>tried</b> to make a fire, but he <b>didn't have</b> any dry wood. Sarah <b>found</b> some branches and they finally <b>made</b> a warm fire. At night, they <b>heard</b> a strange noise. They <b>didn't sleep</b> well because they <b>were</b> scared. In the morning, they <b>saw</b> bear footprints near the tent! They <b>packed</b> their things quickly and <b>went</b> back home.`,
        questions: [
            { q: "¿A dónde fueron Sarah y Tom el fin de semana pasado?", options: ["A la playa", "A las montañas", "A la ciudad"], correct: 1 },
            { q: "¿Por qué Tom no pudo hacer fuego al principio?", options: ["No quería", "No tenía madera seca", "No tenía fósforos"], correct: 1 },
            { q: "¿Qué escucharon por la noche?", options: ["Un ruido extraño", "Una canción hermosa", "Un río"], correct: 0 },
            { q: "¿Qué verbo está en forma NEGATIVA en el texto?", options: ["didn't sleep", "woke up", "were"], correct: 0 }
        ]
    },
    {
        title: "The Missing Wallet",
        text: `Yesterday, Mark <b>went</b> to the supermarket. He <b>bought</b> milk, eggs, and bread. When he <b>went</b> to the cashier to pay, he <b>looked</b> in his pocket, but he <b>didn't find</b> his wallet. He <b>felt</b> very nervous. He <b>asked</b> the cashier to wait and he <b>ran</b> outside. He <b>looked</b> inside his car, but the wallet <b>wasn't</b> there. Then, he <b>remembered</b> something. He <b>left</b> it on the kitchen table! Mark <b>called</b> his wife and she <b>brought</b> the wallet to the supermarket. He finally <b>paid</b> for the groceries.`,
        questions: [
            { q: "¿Qué compró Mark en el supermercado?", options: ["Leche, huevos y pan", "Manzanas y plátanos", "Agua y jugo"], correct: 0 },
            { q: "¿Qué pasó cuando fue a pagar?", options: ["Pagó con efectivo", "No encontró su billetera", "Se le cayó el dinero"], correct: 1 },
            { q: "¿Dónde dejó Mark su billetera?", options: ["En su auto", "En la oficina", "En la mesa de la cocina"], correct: 2 },
            { q: "¿Cuál de estos verbos irregulares significa 'trajo' (pasado de traer)?", options: ["bought", "brought", "thought"], correct: 1 }
        ]
    }
];

// =========================================
// LOCAL STORAGE — Persistence Layer
// =========================================
const LS_KEY_MASTERY  = 'ep_verb_mastery';   // { verbId: 'known' | 'learning' | 'new' }
const LS_KEY_STATS    = 'ep_global_stats';   // { totalSessions, totalCorrect, totalAnswered, streak }
const LS_KEY_HISTORY  = 'ep_session_history'; // [{ date, score, total }] last 10
const LS_KEY_LISTS    = 'ep_verb_lists';     // [{ id: 'list_1', name: 'Clase X', verbs: ['go', 'see'] }]
const LS_KEY_ACTIVE_POOL = 'ep_active_pool'; // 'all' | 'learning' | 'list_1'

function loadMastery() {
    try { return JSON.parse(localStorage.getItem(LS_KEY_MASTERY)) || {}; }
    catch { return {}; }
}
function saveMastery(data) {
    localStorage.setItem(LS_KEY_MASTERY, JSON.stringify(data));
}

function loadStats() {
    try {
        return JSON.parse(localStorage.getItem(LS_KEY_STATS)) || {
            totalSessions: 0, totalCorrect: 0, totalAnswered: 0, streak: 0, bestStreak: 0
        };
    } catch { return { totalSessions: 0, totalCorrect: 0, totalAnswered: 0, streak: 0, bestStreak: 0 }; }
}
function saveStats(data) {
    localStorage.setItem(LS_KEY_STATS, JSON.stringify(data));
}

function loadHistory() {
    try { return JSON.parse(localStorage.getItem(LS_KEY_HISTORY)) || []; }
    catch { return []; }
}
function saveHistory(entry) {
    const history = loadHistory();
    history.unshift(entry);
    if (history.length > 10) history.pop();
    localStorage.setItem(LS_KEY_HISTORY, JSON.stringify(history));
}

function loadLists() {
    try { return JSON.parse(localStorage.getItem(LS_KEY_LISTS)) || []; }
    catch { return []; }
}
function saveLists(lists) {
    localStorage.setItem(LS_KEY_LISTS, JSON.stringify(lists));
}
function getActivePoolId() {
    return localStorage.getItem(LS_KEY_ACTIVE_POOL) || 'all';
}
function setActivePoolId(id) {
    localStorage.setItem(LS_KEY_ACTIVE_POOL, id);
}

function getActivePool(baseArray, isSentence = false) {
    const activeId = getActivePoolId();
    if (activeId === 'all') return [...baseArray];
    
    if (activeId === 'learning') {
        const mastery = loadMastery();
        if (isSentence) {
            return baseArray.filter(s => (mastery[s.baseVerb] || 'new') === 'learning');
        } else {
            return baseArray.filter(v => (mastery[v.id || v.verbId] || 'new') === 'learning');
        }
    }
    
    // Custom List
    const lists = loadLists();
    const list = lists.find(l => l.id === activeId);
    if (list) {
        if (isSentence) {
            return baseArray.filter(s => list.verbs.includes(s.baseVerb));
        } else {
            return baseArray.filter(v => list.verbs.includes(v.id || v.verbId));
        }
    }
    
    return [...baseArray];
}

// =========================================
// STATE
// =========================================
let state = {
    score: 0,
    currentIndex: 0,
    shuffledVerbs: [],
    checked: false,
    sessionStreak: 0,   // consecutive correct in this session
    practiceMode: 'all', // 'all' | 'learning'
    currentView: 'dashboard', // 'dashboard' | 'exercise' | 'progress'
    sentencePhase: 1,   // 1: complete sentence, 2: past tense bonus
    totalPossibleScore: 0
};

// =========================================
// UTILS
// =========================================
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function normalize(str) {
    return str.trim().toLowerCase();
}

function getMasteryLabel(status) {
    if (status === 'known')    return { label: '✅ Ya me la sé', cls: 'tag-known' };
    if (status === 'learning') return { label: '📖 Me falta',    cls: 'tag-learning' };
    return                            { label: '🆕 Sin revisar', cls: 'tag-new' };
}

function getVerbStatus(verbId) {
    const mastery = loadMastery();
    return mastery[verbId] || 'new';
}

function setVerbStatus(verbId, status) {
    const mastery = loadMastery();
    mastery[verbId] = status;
    saveMastery(mastery);
}

// =========================================
// DOM REFERENCES
// =========================================
const dashboardView     = document.getElementById('dashboard-view');
const exerciseView      = document.getElementById('exercise-view');
const progressView      = document.getElementById('progress-view');
const exerciseContainer = document.getElementById('exercise-container');
const scoreEl           = document.getElementById('score');
const backBtn           = document.getElementById('back-to-dashboard');
const startAllBtn       = document.querySelector('#card-irregular-verbs .start-btn');
const startLearningBtn  = document.querySelector('#card-irregular-verbs .start-learning-btn');
const startFlashcardsBtn= document.getElementById('start-flashcards-btn');
const startSentencesBtn = document.getElementById('start-sentences-btn');
const startReadingBtn   = document.getElementById('start-reading-btn');
const startBridgeBtn    = document.getElementById('start-bridge-btn');
const startTimeAttackBtn= document.getElementById('start-time-attack-btn');
const navBtnDashboard   = document.getElementById('nav-dashboard');
const navBtnProgress    = document.getElementById('nav-progress');
const bridgeView        = document.getElementById('bridge-view');
const bridgeBackBtn     = document.getElementById('bridge-back-btn');

// Lists Modals DOM
const globalPoolSelect   = document.getElementById('global-pool-select');
const createListBtn      = document.getElementById('create-list-btn');
const manageListsBtn     = document.getElementById('manage-lists-btn');
const listModal          = document.getElementById('list-modal');
const listNameInput      = document.getElementById('list-name-input');
const listVerbsContainer = document.getElementById('list-verbs-container');
const listCancelBtn      = document.getElementById('list-cancel-btn');
const listSaveBtn        = document.getElementById('list-save-btn');
const listSelectAllBtn   = document.getElementById('list-select-all-btn');
const manageListsModal   = document.getElementById('manage-lists-modal');
const manageListsContainer=document.getElementById('manage-lists-container');
const manageListsCloseBtn= document.getElementById('manage-lists-close-btn');

let editingListId = null;

// =========================================
// VIEW MANAGEMENT
// =========================================
function showDashboard() {
    exerciseView.classList.add('hidden');
    progressView.classList.add('hidden');
    bridgeView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
    state.currentView = 'dashboard';
    
    // Stop any active timer
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
    
    state.score = 0;
    updateScore();
    updateDashboardStats();
    updateGlobalPoolSelect();
    setActiveNav('dashboard');
    // Refresh FSRS due count if module is loaded
    if (typeof updateFSRSDueBadge === 'function') updateFSRSDueBadge();
}

function showExercise(mode = 'all') {
    state.practiceMode = mode;
    dashboardView.classList.add('hidden');
    progressView.classList.add('hidden');
    exerciseView.classList.remove('hidden');
    state.currentView = 'exercise';
    document.getElementById('exercise-title').textContent = 'Práctica Escrita';
    setActiveNav(null);
    startIrregularVerbsExercise(mode);
}

function showFlashcards() {
    dashboardView.classList.add('hidden');
    progressView.classList.add('hidden');
    exerciseView.classList.remove('hidden');
    state.currentView = 'flashcards';
    document.getElementById('exercise-title').textContent = 'Flashcards Inversas';
    setActiveNav(null);
    startFlashcardsExercise();
}

function showSentences() {
    dashboardView.classList.add('hidden');
    progressView.classList.add('hidden');
    exerciseView.classList.remove('hidden');
    state.currentView = 'sentences';
    document.getElementById('exercise-title').textContent = 'Completar Oraciones';
    setActiveNav(null);
    startSentencesExercise();
}

function showReading() {
    dashboardView.classList.add('hidden');
    progressView.classList.add('hidden');
    bridgeView.classList.add('hidden');
    exerciseView.classList.remove('hidden');
    state.currentView = 'reading';
    document.getElementById('exercise-title').textContent = 'Lectura Comprensiva';
    setActiveNav(null);
    startReadingExercise();
}

function showBridge() {
    dashboardView.classList.add('hidden');
    progressView.classList.add('hidden');
    exerciseView.classList.add('hidden');
    bridgeView.classList.remove('hidden');
    state.currentView = 'bridge';
    setActiveNav(null);
    startBridgeExercise();
}

function showTimeAttack() {
    dashboardView.classList.add('hidden');
    progressView.classList.add('hidden');
    exerciseView.classList.remove('hidden');
    state.currentView = 'timeattack';
    document.getElementById('exercise-title').textContent = 'Contrarreloj: 60 Segundos';
    setActiveNav(null);
    startTimeAttackExercise();
}

function showProgress() {
    dashboardView.classList.add('hidden');
    exerciseView.classList.add('hidden');
    bridgeView.classList.add('hidden');
    progressView.classList.remove('hidden');
    state.currentView = 'progress';
    setActiveNav('progress');
    renderProgressView();
}

function setActiveNav(which) {
    navBtnDashboard.classList.toggle('active', which === 'dashboard');
    navBtnProgress.classList.toggle('active',  which === 'progress');
}

function updateScore() {
    scoreEl.textContent = state.score;
}

// =========================================
// DASHBOARD STATS BADGES
// =========================================
function updateDashboardStats() {
    const mastery = loadMastery();
    const stats   = loadStats();

    const knownCount    = Object.values(mastery).filter(v => v === 'known').length;
    const learningCount = Object.values(mastery).filter(v => v === 'learning').length;
    const total         = irregularVerbs.length;
    const pct           = total > 0 ? Math.round((knownCount / total) * 100) : 0;

    document.getElementById('stat-known').textContent    = knownCount;
    document.getElementById('stat-learning').textContent = learningCount;
    document.getElementById('stat-sessions').textContent = stats.totalSessions;
    document.getElementById('stat-streak').textContent   = stats.bestStreak;

    // Accuracy ring (CSS custom property)
    const ring = document.getElementById('mastery-ring');
    if (ring) {
        ring.style.setProperty('--pct', pct);
        document.getElementById('mastery-pct').textContent = pct + '%';
    }

    // Disable "Me falta" button if no learning verbs
    startLearningBtn.disabled = learningCount === 0;
    startLearningBtn.title    = learningCount === 0 ? 'No tienes verbos marcados como "Me falta"' : '';
}

// =========================================
// IRREGULAR VERBS EXERCISE
// =========================================
function startIrregularVerbsExercise(mode = 'all') {
    state.score          = 0;
    state.currentIndex   = 0;
    state.sessionStreak  = 0;
    state.checked        = false;

    let pool = getActivePool(irregularVerbs);
    
    // If they specifically clicked "Practicar los que me faltan", intersect that with the current pool
    if (mode === 'learning') {
        const mastery = loadMastery();
        pool = pool.filter(v => (mastery[v.id] || 'new') === 'learning');
    }

    if (pool.length === 0) {
        exerciseContainer.innerHTML = `
            <div class="verb-practice-container" style="text-align:center;gap:1.5rem;">
                <div style="font-size:3rem;">🎉</div>
                <h3 style="font-size:1.5rem;">¡No hay verbos aquí!</h3>
                <p style="color:var(--text-secondary);">El conjunto que seleccionaste está vacío o ya lo dominas.</p>
                <button class="check-btn" id="home-btn">🏠 Volver al Inicio</button>
            </div>`;
        document.getElementById('home-btn').addEventListener('click', showDashboard);
        return;
    }

    state.shuffledVerbs = shuffle(pool);
    updateScore();
    renderVerbCard();
}

function renderVerbCard() {
    state.checked = false;
    const verb  = state.shuffledVerbs[state.currentIndex];
    const total = state.shuffledVerbs.length;
    const status = getVerbStatus(verb.id);
    const { label: masteryLabel, cls: masteryCls } = getMasteryLabel(status);

    exerciseContainer.innerHTML = `
        <div class="verb-practice-container">
            <div class="verb-top-row">
                <div class="verb-progress">${state.currentIndex + 1} / ${total}</div>
                <div class="verb-badges">
                    <span class="type-tag ${verb.isRegular ? 'tag-regular' : 'tag-irregular'}">${verb.isRegular ? 'Regular' : 'Irregular'}</span>
                    <span class="mastery-tag ${masteryCls}" id="mastery-tag">${masteryLabel}</span>
                </div>
            </div>

            <div class="verb-display">${verb.present}</div>

            <div class="input-group">
                <div class="input-field">
                    <label for="input-past">📝 Past Tense (in English)</label>
                    <input
                        type="text"
                        id="input-past"
                        class="verb-input"
                        placeholder="e.g. went"
                        autocomplete="off"
                        spellcheck="false"
                    />
                </div>
                <div class="input-field">
                    <label for="input-spanish">🇲🇽 Meaning (in Spanish)</label>
                    <input
                        type="text"
                        id="input-spanish"
                        class="verb-input"
                        placeholder="e.g. ir"
                        autocomplete="off"
                        spellcheck="false"
                    />
                </div>
            </div>

            <div class="action-buttons">
                <button class="check-btn" id="check-btn">✓ Verificar</button>
                <button class="next-btn"  id="next-btn">Siguiente →</button>
            </div>

            <div class="feedback-message" id="feedback-message"></div>

            <div class="mastery-buttons" id="mastery-buttons" style="display:none;">
                <p class="mastery-prompt">¿Cómo te fue con este verbo?</p>
                <div class="mastery-btn-row">
                    <button class="mastery-btn btn-known"    id="btn-known">✅ Ya me la sé</button>
                    <button class="mastery-btn btn-learning" id="btn-learning">📖 Me falta</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('input-past').focus();

    document.getElementById('input-past').addEventListener('keydown',    e => { if (e.key === 'Enter') handleCheckOrNext(); });
    document.getElementById('input-spanish').addEventListener('keydown', e => { if (e.key === 'Enter') handleCheckOrNext(); });
    document.getElementById('check-btn').addEventListener('click', handleCheckOrNext);
    document.getElementById('next-btn').addEventListener('click', goToNextVerb);

    document.getElementById('btn-known').addEventListener('click', () => {
        setVerbStatus(verb.id, 'known');
        updateMasteryTag('known');
    });
    document.getElementById('btn-learning').addEventListener('click', () => {
        setVerbStatus(verb.id, 'learning');
        updateMasteryTag('learning');
    });
}

function updateMasteryTag(status) {
    const { label, cls } = getMasteryLabel(status);
    const tag = document.getElementById('mastery-tag');
    tag.textContent = label;
    tag.className   = `mastery-tag ${cls}`;

    // Briefly animate tag
    tag.style.transform = 'scale(1.15)';
    setTimeout(() => { tag.style.transform = 'scale(1)'; }, 200);
}

function handleCheckOrNext() {
    if (state.checked) {
        goToNextVerb();
        return;
    }
    checkAnswers();
}

function checkAnswers() {
    state.checked = true;
    const verb        = state.shuffledVerbs[state.currentIndex];
    const pastInput   = document.getElementById('input-past');
    const spanishInput= document.getElementById('input-spanish');
    const feedback    = document.getElementById('feedback-message');
    const checkBtn    = document.getElementById('check-btn');
    const masteryBtns = document.getElementById('mastery-buttons');

    const acceptedPast    = verb.past.split('/').map(v => normalize(v));
    const acceptedSpanish = verb.spanish.split('/').map(v => normalize(v));

    const pastCorrect    = acceptedPast.some(a => a === normalize(pastInput.value));
    const spanishCorrect = acceptedSpanish.some(a => a === normalize(spanishInput.value));

    pastInput.classList.toggle('correct',   pastCorrect);
    pastInput.classList.toggle('incorrect', !pastCorrect);
    spanishInput.classList.toggle('correct',   spanishCorrect);
    spanishInput.classList.toggle('incorrect', !spanishCorrect);

    pastInput.disabled    = true;
    spanishInput.disabled = true;

    if (!pastCorrect)    pastInput.value    = verb.past;
    if (!spanishCorrect) spanishInput.value = verb.spanish;

    const allCorrect = pastCorrect && spanishCorrect;

    // Update streak & stats
    const globalStats = loadStats();
    globalStats.totalAnswered++;
    if (allCorrect) {
        state.score++;
        state.sessionStreak++;
        globalStats.totalCorrect++;
        globalStats.streak++;
        if (globalStats.streak > globalStats.bestStreak) globalStats.bestStreak = globalStats.streak;
        feedback.textContent = `🎉 ¡Correcto! Racha: ${globalStats.streak} 🔥`;
        feedback.className   = 'feedback-message success';
        // Auto-upgrade to known if they get it right and it was 'new'
        const cur = getVerbStatus(verb.id);
        if (cur === 'new') setVerbStatus(verb.id, 'known');
    } else {
        globalStats.streak = 0;
        feedback.textContent = '❌ ¡Casi! Revisa las respuestas correctas arriba.';
        feedback.className   = 'feedback-message error';
        // Auto-mark as learning if wrong
        setVerbStatus(verb.id, 'learning');
    }
    saveStats(globalStats);
    updateMasteryTag(getVerbStatus(verb.id));

    // Show mastery buttons
    masteryBtns.style.display = 'flex';

    checkBtn.textContent = 'Siguiente →';
    updateScore();
}

function goToNextVerb() {
    state.currentIndex++;
    if (state.currentIndex >= state.shuffledVerbs.length) {
        showResults();
    } else {
        renderVerbCard();
    }
}

function showResults() {
    if (state.currentView === 'bridge') {
        bridgeView.classList.add('hidden');
        exerciseView.classList.remove('hidden');
    }

    let total = state.shuffledVerbs.length;
    if (state.currentView === 'sentences' && state.totalPossibleScore > 0) {
        total = state.totalPossibleScore;
    } else if (state.currentView === 'reading') {
        total = state.currentStory.questions.length;
    } else if (state.currentView === 'bridge') {
        total = state.bridgeVerbs.length * 2;
    }
    
    const pct   = Math.round((state.score / total) * 100);
    const globalStats = loadStats();
    globalStats.totalSessions++;
    saveStats(globalStats);
    saveHistory({ date: new Date().toISOString(), score: state.score, total });

    let emoji = '😅';
    if (pct === 100) emoji = '🏆';
    else if (pct >= 80) emoji = '🎉';
    else if (pct >= 60) emoji = '👍';

    exerciseContainer.innerHTML = `
        <div class="verb-practice-container results-container">
            <div class="result-emoji">${emoji}</div>
            <h3 class="result-title">¡Sesión Completada!</h3>
            <p class="result-score">${state.score} / ${total} correctas &mdash; ${pct}%</p>
            <div class="result-stats">
                <div class="result-stat"><span class="rs-value">${globalStats.bestStreak}</span><span class="rs-label">Mejor racha</span></div>
                <div class="result-stat"><span class="rs-value">${globalStats.totalSessions}</span><span class="rs-label">Sesiones</span></div>
                <div class="result-stat"><span class="rs-value">${globalStats.totalAnswered > 0 ? Math.round((globalStats.totalCorrect/globalStats.totalAnswered)*100) : 0}%</span><span class="rs-label">Precisión total</span></div>
            </div>
            <div class="action-buttons" style="margin-top: 2rem;">
                <button class="check-btn" id="restart-btn">🔄 Jugar de nuevo</button>
                <button class="next-btn"  id="home-btn">🏠 Inicio</button>
            </div>
            <button class="progress-link-btn" id="see-progress-btn">Ver mi progreso →</button>
        </div>
    `;

    document.getElementById('restart-btn').addEventListener('click', () => {
        if(state.currentView === 'flashcards') startFlashcardsExercise();
        else if(state.currentView === 'flashcardsNormal') startFlashcardsNormalExercise();
        else if(state.currentView === 'sentences') startSentencesExercise();
        else if(state.currentView === 'reading') startReadingExercise();
        else if(state.currentView === 'bridge') showBridge();
        else if(state.currentView === 'pc-sentences') startPCSentencesExercise();
        else if(state.currentView === 'pc-reading') startPCReadingExercise();
        else if(state.currentView === 'pc-flashcards') startPCFlashcardsExercise();
        else if(state.currentView === 'pc-waswere') startPCWasWereExercise();
        else startIrregularVerbsExercise(state.practiceMode);
    });
    document.getElementById('home-btn').addEventListener('click', showDashboard);
    document.getElementById('see-progress-btn').addEventListener('click', showProgress);
}

// =========================================
// FLASHCARDS EXERCISE
// =========================================
function startFlashcardsExercise() {
    state.score          = 0;
    state.currentIndex   = 0;
    state.checked        = false;

    const pool = getActivePool(irregularVerbs);
    if (pool.length === 0) {
        exerciseContainer.innerHTML = `
            <div class="verb-practice-container" style="text-align:center;gap:1.5rem;">
                <h3 style="font-size:1.5rem;">¡No hay verbos en este conjunto!</h3>
                <button class="check-btn" id="fc-home-btn">🏠 Volver al Inicio</button>
            </div>`;
        document.getElementById('fc-home-btn').addEventListener('click', showDashboard);
        return;
    }

    state.shuffledVerbs  = shuffle(pool);
    updateScore();
    renderFlashcard();
}

function renderFlashcard() {
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
                    <!-- FRONT: Past Tense -->
                    <div class="flashcard-face flashcard-front">
                        <span class="fc-label">Past Tense</span>
                        <div class="fc-word">${verb.past}</div>
                        <div class="flip-hint">↺ Haz click para voltear</div>
                    </div>
                    <!-- BACK: Present & Spanish -->
                    <div class="flashcard-face flashcard-back">
                        <span class="fc-label">Present & Meaning</span>
                        <div class="fc-word-secondary">${verb.present}</div>
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
            renderFlashcard();
        }
    });

    document.getElementById('fc-btn-known').addEventListener('click', () => {
        setVerbStatus(verb.id, 'known');
        updateMasteryTag('known');
        state.score++; 
        updateScore();
        nextBtn.click();
    });
    
    document.getElementById('fc-btn-learning').addEventListener('click', () => {
        setVerbStatus(verb.id, 'learning');
        updateMasteryTag('learning');
        nextBtn.click();
    });
}

// =========================================
// SENTENCES EXERCISE
// =========================================
function startSentencesExercise() {
    const countSelect = document.getElementById('sentences-count-select');
    const limit = countSelect ? countSelect.value : '10';

    state.score = 0;
    state.currentIndex = 0;
    state.sentencePhase = 1;
    
    // Use the global pool
    let pool = getActivePool(sentenceExercises, true);
    
    if (pool.length === 0) {
        exerciseContainer.innerHTML = `
            <div class="verb-practice-container" style="text-align:center;gap:1.5rem;">
                <div style="font-size:3rem;">🎉</div>
                <h3 style="font-size:1.5rem;">¡No hay oraciones aquí!</h3>
                <p style="color:var(--text-secondary);">El conjunto seleccionado está vacío o ya lo dominas.</p>
                <button class="check-btn" id="home-btn" style="margin-top: 1rem;">🏠 Volver al Inicio</button>
            </div>`;
        document.getElementById('home-btn').addEventListener('click', showDashboard);
        return;
    }

    pool = shuffle(pool);

    if (limit !== 'all') {
        const num = parseInt(limit, 10);
        pool = pool.slice(0, num);
    }

    state.shuffledVerbs = pool;
    
    // Calculate total possible score including bonuses
    state.totalPossibleScore = pool.reduce((acc, curr) => {
        const isNegOrQ = curr.verb.includes('not /') || curr.template.includes('?');
        return acc + (isNegOrQ ? 2 : 1);
    }, 0);

    updateScore();
    renderSentenceCard();
}

function renderSentenceCard() {
    state.checked = false;
    const exercise = state.shuffledVerbs[state.currentIndex];
    const total = state.shuffledVerbs.length;

    let typeBadge = '';
    let typeClass = '';
    let isNegOrQ = false;
    if (exercise.verb.includes('not /')) {
        typeBadge = 'Negativa';
        typeClass = 'tag-learning'; // orange
        isNegOrQ = true;
    } else if (exercise.template.includes('?')) {
        typeBadge = 'Pregunta';
        typeClass = 'tag-irregular'; // purple
        isNegOrQ = true;
    } else {
        typeBadge = 'Afirmativa';
        typeClass = 'tag-known'; // green
    }

    if (state.sentencePhase === 1) {
        const sentenceHtml = exercise.template.replace('{blank}', '<input type="text" id="sentence-input" class="verb-input inline-input" autocomplete="off" spellcheck="false" placeholder="...">');

        exerciseContainer.innerHTML = `
            <div class="verb-practice-container" style="max-width: 650px;">
                <div class="verb-top-row">
                    <div class="verb-progress">${state.currentIndex + 1} / ${total}</div>
                    <div class="verb-badges">
                        <span class="type-tag ${typeClass}">${typeBadge}</span>
                    </div>
                </div>

                <div class="sentence-display">
                    ${sentenceHtml}
                </div>
                
                <div style="text-align: center; color: var(--text-secondary); margin-bottom: 0.5rem; font-size: 1.1rem;">
                    (Verbo: <strong style="color: var(--accent-secondary);">${exercise.verb}</strong>)
                </div>
                
                <div style="text-align: center; color: var(--text-secondary); margin-bottom: 2.5rem; font-style: italic;">
                    "${exercise.spanish}"
                </div>

                <div class="action-buttons">
                    <button class="check-btn" id="sen-check-btn">✓ Verificar</button>
                    <button class="next-btn"  id="sen-next-btn" style="display:none;">Siguiente →</button>
                </div>

                <div class="feedback-message" id="sen-feedback"></div>
            </div>
        `;

        const input = document.getElementById('sentence-input');
        input.focus();
        
        input.addEventListener('keydown', e => { if (e.key === 'Enter') handleSentenceCheck(); });
        document.getElementById('sen-check-btn').addEventListener('click', handleSentenceCheck);
        
        document.getElementById('sen-next-btn').addEventListener('click', () => {
            goToNextSentenceOrPhase(isNegOrQ);
        });
    } else if (state.sentencePhase === 2) {
        // Phase 2: Bonus question for the past tense
        exerciseContainer.innerHTML = `
            <div class="verb-practice-container" style="max-width: 650px;">
                <div class="verb-top-row">
                    <div class="verb-progress">${state.currentIndex + 1} / ${total}</div>
                    <div class="verb-badges">
                        <span class="type-tag tag-known" style="background: rgba(34, 197, 94, 0.2);">✨ Bonus de Memoria</span>
                    </div>
                </div>
                
                <div class="sentence-display" style="font-size: 1.8rem; font-weight: 600; margin-bottom: 1rem;">
                    ¿Cuál es el pasado de <span style="color: var(--accent-secondary);">${exercise.baseVerb}</span>?
                </div>

                <div class="input-group" style="margin-top: 1rem; align-items: center; width: 100%;">
                    <input
                        type="text"
                        id="sen-input-past"
                        class="verb-input"
                        placeholder="Escribe el pasado..."
                        autocomplete="off"
                        spellcheck="false"
                        style="text-align: center; font-size: 1.5rem; padding: 1rem; width: 80%;"
                    />
                </div>

                <div class="action-buttons" style="margin-top: 2rem;">
                    <button class="check-btn" id="sen-check-btn">✓ Verificar</button>
                    <button class="next-btn"  id="sen-next-btn" style="display:none;">Siguiente Oración →</button>
                </div>

                <div class="feedback-message" id="sen-feedback" style="margin-top: 1rem;"></div>
            </div>
        `;

        const inputPast = document.getElementById('sen-input-past');
        inputPast.focus();
        inputPast.addEventListener('keydown', e => { if (e.key === 'Enter') handleSentenceCheckPhase2(); });
        document.getElementById('sen-check-btn').addEventListener('click', handleSentenceCheckPhase2);
        
        document.getElementById('sen-next-btn').addEventListener('click', () => {
            state.sentencePhase = 1;
            state.currentIndex++;
            if (state.currentIndex >= state.shuffledVerbs.length) {
                showResults();
            } else {
                renderSentenceCard();
            }
        });
    }
}

function handleSentenceCheck() {
    const exercise = state.shuffledVerbs[state.currentIndex];
    const isNegOrQ = exercise.verb.includes('not /') || exercise.template.includes('?');

    if (state.checked) {
        goToNextSentenceOrPhase(isNegOrQ);
        return;
    }
    
    state.checked = true;
    const input = document.getElementById('sentence-input');
    const feedback = document.getElementById('sen-feedback');
    const checkBtn = document.getElementById('sen-check-btn');
    const nextBtn = document.getElementById('sen-next-btn');

    const val = normalize(input.value);
    const isCorrect = exercise.answers.map(a => normalize(a)).includes(val);

    input.disabled = true;

    if (isCorrect) {
        state.score++;
        input.classList.add('correct');
        feedback.textContent = '🎉 ¡Correcto!';
        feedback.className = 'feedback-message success';
    } else {
        input.classList.add('incorrect');
        input.value = exercise.answers[0];
        feedback.textContent = '❌ Incorrecto. Revisa la respuesta correcta.';
        feedback.className = 'feedback-message error';
    }

    updateScore();
    
    checkBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    
    if (isNegOrQ) {
        nextBtn.textContent = 'Bonus: Pasado →';
        nextBtn.style.background = 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))';
        nextBtn.style.color = 'white';
        nextBtn.style.border = 'none';
    } else {
        nextBtn.textContent = 'Siguiente →';
    }
}

function handleSentenceCheckPhase2() {
    if (state.checked) {
        state.sentencePhase = 1;
        state.currentIndex++;
        if (state.currentIndex >= state.shuffledVerbs.length) {
            showResults();
        } else {
            renderSentenceCard();
        }
        return;
    }
    
    state.checked = true;
    const exercise = state.shuffledVerbs[state.currentIndex];
    const input = document.getElementById('sen-input-past');
    const feedback = document.getElementById('sen-feedback');
    const checkBtn = document.getElementById('sen-check-btn');
    const nextBtn = document.getElementById('sen-next-btn');

    const val = normalize(input.value);
    
    const acceptedPast = exercise.pastTense.split('/').map(v => normalize(v));
    const isCorrect = acceptedPast.some(a => a === val);

    input.disabled = true;

    if (isCorrect) {
        state.score++; // Score for bonus
        input.classList.add('correct');
        feedback.textContent = '🎉 ¡Excelente!';
        feedback.className = 'feedback-message success';
    } else {
        input.classList.add('incorrect');
        input.value = exercise.pastTense;
        feedback.textContent = '❌ El pasado correcto es: ' + exercise.pastTense;
        feedback.className = 'feedback-message error';
    }

    updateScore();
    
    checkBtn.style.display = 'none';
    nextBtn.style.display = 'block';
}

function goToNextSentenceOrPhase(isNegOrQ) {
    if (isNegOrQ) {
        state.sentencePhase = 2;
        renderSentenceCard();
    } else {
        state.sentencePhase = 1;
        state.currentIndex++;
        if (state.currentIndex >= state.shuffledVerbs.length) {
            showResults();
        } else {
            renderSentenceCard();
        }
    }
}

// =========================================
// READING EXERCISE
// =========================================
function startReadingExercise() {
    state.score = 0;
    state.currentStory = readingExercises[Math.floor(Math.random() * readingExercises.length)];
    state.currentIndex = 0; // Question index for reading
    renderReadingCard();
}

function renderReadingCard() {
    state.checked = false;
    const story = state.currentStory;
    const qIndex = state.currentIndex;
    const question = story.questions[qIndex];
    const totalQ = story.questions.length;

    exerciseContainer.innerHTML = `
        <div class="verb-practice-container" style="max-width: 800px; width: 100%;">
            <div class="reading-story-box" style="background: rgba(0,0,0,0.15); border: 1px solid var(--border-color); border-radius: 12px; padding: 2rem; margin-bottom: 2rem; text-align: left;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--accent-primary); text-align: center;">${story.title}</h3>
                <p style="font-size: 1.15rem; line-height: 1.8; color: var(--text-primary);">${story.text}</p>
            </div>

            <div class="verb-top-row" style="margin-bottom: 1rem; justify-content: center;">
                <div class="verb-progress" style="font-size: 1rem;">Pregunta ${qIndex + 1} / ${totalQ}</div>
            </div>

            <div class="sentence-display" style="font-size: 1.3rem; margin-bottom: 1.5rem; font-weight: 600;">
                ${question.q}
            </div>

            <div class="options-grid" style="display: flex; flex-direction: column; gap: 0.8rem; width: 100%;">
                ${question.options.map((opt, i) => `
                    <button class="reading-option-btn" data-idx="${i}" style="
                        background: rgba(255,255,255,0.05); 
                        border: 2px solid var(--border-color); 
                        padding: 1rem 1.5rem; 
                        font-size: 1.1rem; 
                        border-radius: 10px; 
                        color: var(--text-primary);
                        cursor: pointer;
                        transition: all 0.2s;
                        text-align: left;
                    ">${opt}</button>
                `).join('')}
            </div>
            
            <div class="feedback-message" id="rd-feedback" style="min-height: 2rem; margin-top: 1rem;"></div>

            <div class="action-buttons" style="margin-top: 1rem;">
                <button class="next-btn" id="rd-next-btn" style="display:none; width: 100%; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); color: white; border: none;">Siguiente →</button>
            </div>
        </div>
    `;

    const optionBtns = document.querySelectorAll('.reading-option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => { if(!btn.disabled) btn.style.background = 'rgba(255,255,255,0.1)' });
        btn.addEventListener('mouseleave', () => { if(!btn.disabled) btn.style.background = 'rgba(255,255,255,0.05)' });
        
        btn.addEventListener('click', function() {
            if (state.checked) return;
            state.checked = true;
            
            optionBtns.forEach(b => b.disabled = true);
            const selectedIdx = parseInt(this.getAttribute('data-idx'));
            const isCorrect = selectedIdx === question.correct;
            
            const feedback = document.getElementById('rd-feedback');
            
            if (isCorrect) {
                state.score++;
                updateScore();
                this.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                this.style.borderColor = 'var(--green)';
                feedback.textContent = '🎉 ¡Correcto!';
                feedback.className = 'feedback-message success';
            } else {
                this.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                this.style.borderColor = 'var(--red)';
                feedback.textContent = '❌ Incorrecto.';
                feedback.className = 'feedback-message error';
                
                // highlight correct option
                optionBtns.forEach(b => {
                    if (parseInt(b.getAttribute('data-idx')) === question.correct) {
                        b.style.borderColor = 'var(--green)';
                        b.style.color = 'var(--green)';
                        b.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                    }
                });
            }
            
            const nextBtn = document.getElementById('rd-next-btn');
            nextBtn.style.display = 'block';
            if (qIndex + 1 === totalQ) {
                nextBtn.textContent = 'Ver Resultados 🏆';
            }
        });
    });

    document.getElementById('rd-next-btn').addEventListener('click', () => {
        state.currentIndex++;
        if (state.currentIndex >= story.questions.length) {
            showResults();
        } else {
            renderReadingCard();
        }
    });
}

// =========================================
// TIME ATTACK EXERCISE (2 Phases)
// =========================================
function generatePastOptions(correctVerb) {
    // Basic rules to generate plausible wrong options for past tense
    const present = correctVerb.present;
    let wrong1 = present + 'ed';
    if (present.endsWith('e')) wrong1 = present + 'd';
    if (present.endsWith('y')) wrong1 = present.slice(0, -1) + 'ied';
    
    let wrong2 = present + 'en';
    if (correctVerb.past === wrong1) {
        // If it's actually regular, make a fake irregular
        wrong1 = present.substring(0, present.length-1) + 'ught';
        wrong2 = present.substring(0, present.length-2) + 'ang';
    } else if (correctVerb.past === wrong1 || correctVerb.past === wrong2) {
        wrong1 = present + 't';
        wrong2 = present.substring(0, present.length-1) + 'o' + present.slice(-1);
    }
    
    // Fallback if generated are same as correct
    if (wrong1 === correctVerb.past) wrong1 = 'to ' + present;
    if (wrong2 === correctVerb.past) wrong2 = present + 'ing';

    return shuffle([correctVerb.past, wrong1, wrong2]);
}

function startTimeAttackExercise() {
    state.score         = 0;
    state.currentIndex  = 0;
    
    const pool = getActivePool(irregularVerbs);
    if (pool.length === 0) {
        exerciseContainer.innerHTML = `
            <div class="verb-practice-container" style="text-align:center;gap:1.5rem;">
                <h3 style="font-size:1.5rem;">¡No hay verbos aquí!</h3>
                <button class="check-btn" id="ta-home-btn">🏠 Volver al Inicio</button>
            </div>`;
        document.getElementById('ta-home-btn').addEventListener('click', showDashboard);
        return;
    }
    
    state.shuffledVerbs = shuffle(pool);
    state.timeLeft      = 90; // Increased to 90 seconds
    state.taPhase       = 1; // 1: write present, 2: select past
    
    updateScore();
    renderTimeAttackCard();
    
    // Start Timer
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
        state.timeLeft--;
        const timerEl = document.getElementById('ta-timer');
        if (timerEl) {
            timerEl.textContent = state.timeLeft;
            if (state.timeLeft <= 10) timerEl.style.color = '#ef4444'; // Red color when <= 10s
        }
        
        if (state.timeLeft <= 0) {
            clearInterval(state.timerInterval);
            state.timerInterval = null;
            showTimeAttackResults();
        }
    }, 1000);
}

function renderTimeAttackCard() {
    if (state.currentIndex >= state.shuffledVerbs.length || state.timeLeft <= 0) {
        clearInterval(state.timerInterval);
        showTimeAttackResults();
        return;
    }

    const verb = state.shuffledVerbs[state.currentIndex];

    // Phase 1: Write Present
    if (state.taPhase === 1) {
        exerciseContainer.innerHTML = `
            <div class="verb-practice-container">
                <div class="verb-top-row" style="justify-content: center; margin-bottom: 1.5rem;">
                    <div class="ta-timer-box" style="font-size: 2rem; font-weight: 700; background: rgba(0,0,0,0.2); padding: 0.5rem 1.5rem; border-radius: 12px; border: 2px solid var(--border-color);">
                        ⏱️ <span id="ta-timer">${state.timeLeft}</span>s
                    </div>
                </div>

                <div class="fc-label" style="text-align: center;">Fase 1: Escribe en PRESENTE</div>
                <div class="verb-display" style="font-size: 3rem; color: var(--accent-secondary);">${verb.spanish}</div>

                <div class="input-group" style="margin-top: 1rem;">
                    <input
                        type="text"
                        id="ta-input"
                        class="verb-input"
                        placeholder="Escribe en inglés..."
                        autocomplete="off"
                        spellcheck="false"
                        style="text-align: center; font-size: 1.5rem; padding: 1.2rem;"
                    />
                </div>
                
                <div class="action-buttons" style="margin-top: 1rem;">
                    <button class="next-btn" id="ta-skip-btn" style="width: 100%; font-size: 0.9rem;">No lo sé (Saltar a Fase 2) →</button>
                </div>

                <div class="feedback-message" id="ta-feedback" style="min-height: 2rem;"></div>
            </div>
        `;

        const input = document.getElementById('ta-input');
        input.focus();

        const moveToPhase2 = () => {
            state.taPhase = 2;
            renderTimeAttackCard();
        };

        document.getElementById('ta-skip-btn').addEventListener('click', moveToPhase2);

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const val = normalize(input.value);
                if (val === '') return;

                const accepted = verb.present.split('/').map(v => normalize(v));
                if (accepted.some(a => a === val)) {
                    // Correct! Show green and move to Phase 2 immediately
                    input.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                    setTimeout(moveToPhase2, 150);
                } else {
                    // Wrong! Show red, show answer, then move to phase 2
                    input.classList.add('incorrect');
                    input.value = verb.present; // Show correct answer
                    document.getElementById('ta-feedback').textContent = '❌ Respuesta correcta arriba.';
                    document.getElementById('ta-feedback').className = 'feedback-message error';
                    
                    setTimeout(moveToPhase2, 1000); // 1 second to see the correct answer
                }
            }
        });
    } 
    // Phase 2: Select Past
    else {
        const options = generatePastOptions(verb);
        
        exerciseContainer.innerHTML = `
            <div class="verb-practice-container">
                <div class="verb-top-row" style="justify-content: center; margin-bottom: 1.5rem;">
                    <div class="ta-timer-box" style="font-size: 2rem; font-weight: 700; background: rgba(0,0,0,0.2); padding: 0.5rem 1.5rem; border-radius: 12px; border: 2px solid var(--border-color);">
                        ⏱️ <span id="ta-timer">${state.timeLeft}</span>s
                    </div>
                </div>

                <div class="fc-label" style="text-align: center;">Fase 2: Elige el PASADO</div>
                <div class="verb-display" style="font-size: 2.5rem; color: var(--text-primary); margin-bottom: 0.5rem;">${verb.present}</div>
                <div style="text-align: center; color: var(--text-secondary); margin-bottom: 2rem;">(${verb.spanish})</div>

                <div class="options-grid" style="display: flex; flex-direction: column; gap: 1rem; width: 100%; max-width: 400px;">
                    ${options.map(opt => `
                        <button class="ta-option-btn" data-val="${opt}" style="
                            background: rgba(255,255,255,0.05); 
                            border: 2px solid var(--border-color); 
                            padding: 1.2rem; 
                            font-size: 1.3rem; 
                            border-radius: 12px; 
                            color: var(--text-primary);
                            cursor: pointer;
                            transition: all 0.2s;
                        ">${opt}</button>
                    `).join('')}
                </div>
                
                <div class="feedback-message" id="ta-feedback" style="min-height: 2rem; margin-top: 1.5rem;"></div>
            </div>
        `;
        
        const optionBtns = document.querySelectorAll('.ta-option-btn');
        optionBtns.forEach(btn => {
            // Hover effect via JS since CSS isn't easily inline for hover
            btn.addEventListener('mouseenter', () => { if(!btn.disabled) btn.style.background = 'rgba(255,255,255,0.1)' });
            btn.addEventListener('mouseleave', () => { if(!btn.disabled) btn.style.background = 'rgba(255,255,255,0.05)' });
            
            btn.addEventListener('click', function() {
                // Disable all buttons to prevent double clicking
                optionBtns.forEach(b => b.disabled = true);
                
                const selectedVal = this.getAttribute('data-val');
                const acceptedPast = verb.past.split('/').map(v => normalize(v));
                
                if (acceptedPast.some(a => a === normalize(selectedVal))) {
                    // Correct!
                    state.score++;
                    updateScore();
                    this.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                    this.style.borderColor = 'var(--green)';
                    
                    setTimeout(() => {
                        state.currentIndex++;
                        state.taPhase = 1;
                        renderTimeAttackCard();
                    }, 300);
                } else {
                    // Wrong!
                    this.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                    this.style.borderColor = 'var(--red)';
                    
                    // Highlight correct one
                    optionBtns.forEach(b => {
                        if (acceptedPast.some(a => a === normalize(b.getAttribute('data-val')))) {
                            b.style.borderColor = 'var(--green)';
                            b.style.color = 'var(--green)';
                        }
                    });
                    
                    document.getElementById('ta-feedback').textContent = '❌ Incorrecto.';
                    document.getElementById('ta-feedback').className = 'feedback-message error';
                    
                    setTimeout(() => {
                        state.currentIndex++;
                        state.taPhase = 1;
                        renderTimeAttackCard();
                    }, 1200);
                }
            });
        });
    }
}

function showTimeAttackResults() {
    const total = state.currentIndex; // How many verbs fully completed (both phases)
    
    // Save to global stats
    const globalStats = loadStats();
    globalStats.totalSessions++;
    globalStats.totalAnswered += total;
    globalStats.totalCorrect += state.score;
    saveStats(globalStats);
    saveHistory({ date: new Date().toISOString(), score: state.score, total: total, type: 'timeattack' }); 

    let emoji = '🥵';
    let title = '¡Tiempo agotado!';
    if (state.score >= 20) { emoji = '⚡'; title = '¡Velocidad de la luz!'; }
    else if (state.score >= 10) { emoji = '🔥'; title = '¡Buen ritmo!'; }

    exerciseContainer.innerHTML = `
        <div class="verb-practice-container results-container">
            <div class="result-emoji">${emoji}</div>
            <h3 class="result-title">${title}</h3>
            <p class="result-score">${state.score} aciertos en 90s</p>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">(Completaste ${total} verbos)</p>
            <div class="action-buttons">
                <button class="check-btn" id="ta-restart-btn">🔄 Jugar de nuevo</button>
                <button class="next-btn"  id="home-btn">🏠 Inicio</button>
            </div>
        </div>
    `;

    document.getElementById('ta-restart-btn').addEventListener('click', startTimeAttackExercise);
    document.getElementById('home-btn').addEventListener('click', showDashboard);
}

// =========================================
// THE BRIDGE EXERCISE (Drag & Drop)
// =========================================
function startBridgeExercise() {
    let pool = getActivePool(irregularVerbs);
    
    // Optionally filter out known verbs if they are playing the 'all' pool
    if (getActivePoolId() === 'all') {
        const mastery = loadMastery();
        pool = pool.filter(v => (mastery[v.id] || 'new') !== 'known');
    }

    if (pool.length === 0) {
        // All verbs are known — show a congratulatory message
        document.getElementById('bridge-pool').innerHTML = '';
        document.getElementById('bridge-targets').innerHTML = `
            <div style="text-align:center; padding: 2rem;">
                <div style="font-size:3rem; margin-bottom:1rem;">🏆</div>
                <h3 style="font-size:1.5rem; margin-bottom:0.5rem;">¡Ya dominas todos los verbos!</h3>
                <p style="color:var(--text-secondary);">No quedan verbos sin aprender. Sigue practicando con los demás modos.</p>
                <button class="check-btn" id="bridge-all-done-btn" style="margin-top:1.5rem;">🏠 Volver al inicio</button>
            </div>`;
        document.getElementById('bridge-next-btn').style.display = 'none';
        document.getElementById('bridge-all-done-btn').addEventListener('click', showDashboard);
        return;
    }

    state.score = 0;
    state.bridgeVerbs = shuffle(pool);
    state.bridgeRoundIndex = 0;
    document.getElementById('bridge-score').textContent = 0;

    renderBridgeRound();
}

function renderBridgeRound() {
    const VERBS_PER_ROUND = 4;
    const start = state.bridgeRoundIndex * VERBS_PER_ROUND;
    const roundVerbs = state.bridgeVerbs.slice(start, start + VERBS_PER_ROUND);

    if (roundVerbs.length === 0) {
        // No more verbs — session complete
        showResults();
        return;
    }

    const pool = document.getElementById('bridge-pool');
    const targets = document.getElementById('bridge-targets');
    const nextBtn = document.getElementById('bridge-next-btn');
    const feedback = document.getElementById('bridge-feedback');

    nextBtn.style.display = 'none';
    feedback.textContent = '';
    feedback.className = 'feedback-message';

    // Build draggable chips: one for PAST and one for SPANISH per verb
    const chips = [];
    roundVerbs.forEach(v => {
        chips.push({ verbId: v.id, type: 'past',    text: v.past,    label: '🕰️' });
        chips.push({ verbId: v.id, type: 'spanish', text: v.spanish, label: '🇲🇽' });
    });
    const shuffledChips = shuffle(chips);

    // ── Pool HTML ──
    pool.innerHTML = shuffledChips.map(c => `
        <div
            class="bridge-chip"
            id="chip-${c.verbId}-${c.type}"
            draggable="true"
            data-verb-id="${c.verbId}"
            data-type="${c.type}"
            style="
                display:inline-flex; align-items:center; gap:0.4rem;
                background: linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.25));
                border: 2px solid rgba(168,85,247,0.5);
                border-radius: 999px;
                padding: 0.55rem 1.1rem;
                font-size: 1rem; font-weight: 600;
                cursor: grab;
                user-select: none;
                transition: transform 0.15s, box-shadow 0.15s;
                color: var(--text-primary);
            "
        >${c.label} ${c.text}</div>
    `).join('');

    // ── Target rows HTML ──
    targets.innerHTML = roundVerbs.map(v => `
        <div class="bridge-row" style="
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0.8rem;
            align-items: center;
            background: rgba(0,0,0,0.15);
            border-radius: 14px;
            padding: 1rem 1.2rem;
            border: 1px solid var(--border-color);
        ">
            <!-- Present label (fixed) -->
            <div style="text-align:center;">
                <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:0.3rem;">PRESENTE</div>
                <div style="font-size:1.35rem; font-weight:700; color:var(--accent-primary);">${v.present}</div>
            </div>

            <!-- Past drop zone -->
            <div
                class="bridge-drop-zone"
                id="drop-${v.id}-past"
                data-verb-id="${v.id}"
                data-type="past"
                style="
                    min-height: 52px;
                    border: 2px dashed rgba(99,102,241,0.5);
                    border-radius: 10px;
                    display:flex; align-items:center; justify-content:center;
                    font-size:0.85rem; color:var(--text-secondary);
                    transition: background 0.2s, border-color 0.2s;
                    cursor:default;
                "
            ><span class="dz-hint">🕰️ pasado</span></div>

            <!-- Spanish drop zone -->
            <div
                class="bridge-drop-zone"
                id="drop-${v.id}-spanish"
                data-verb-id="${v.id}"
                data-type="spanish"
                style="
                    min-height: 52px;
                    border: 2px dashed rgba(16,185,129,0.5);
                    border-radius: 10px;
                    display:flex; align-items:center; justify-content:center;
                    font-size:0.85rem; color:var(--text-secondary);
                    transition: background 0.2s, border-color 0.2s;
                    cursor:default;
                "
            ><span class="dz-hint">🇲🇽 español</span></div>
        </div>
    `).join('');

    // Track which zones are filled: { "verbId-type": chipEl }
    const filled = {};
    let correctCount = 0;
    const totalSlots = roundVerbs.length * 2;

    // ── Drag events on chips ──
    pool.querySelectorAll('.bridge-chip').forEach(chip => {
        chip.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', chip.id);
            chip.style.opacity = '0.45';
        });
        chip.addEventListener('dragend', () => {
            chip.style.opacity = '1';
        });
        // Touch support (basic tap-select then tap-drop)
        chip.addEventListener('click', () => bridgeTouchSelect(chip));
    });

    // ── Drop zone events ──
    targets.querySelectorAll('.bridge-drop-zone').forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault();
            zone.style.background = 'rgba(255,255,255,0.07)';
        });
        zone.addEventListener('dragleave', () => {
            zone.style.background = '';
        });
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.style.background = '';
            const chipId = e.dataTransfer.getData('text/plain');
            handleBridgeDrop(chipId, zone, filled, roundVerbs, () => {
                correctCount++;
                checkBridgeRoundComplete(correctCount, totalSlots, roundVerbs, nextBtn, feedback);
            }, () => {
                // wrong placement — nothing extra needed, chip returns to pool
            });
        });
        zone.addEventListener('click', () => bridgeTouchDrop(zone, filled, roundVerbs, () => {
            correctCount++;
            checkBridgeRoundComplete(correctCount, totalSlots, roundVerbs, nextBtn, feedback);
        }));
    });

    // Next round button
    nextBtn.textContent = start + VERBS_PER_ROUND >= state.bridgeVerbs.length
        ? 'Ver Resultados 🏆'
        : 'Siguiente Ronda →';

    nextBtn.onclick = () => {
        state.bridgeRoundIndex++;
        renderBridgeRound();
    };
}

// Tap-to-select / tap-to-drop for mobile
let _bridgeSelectedChip = null;
function bridgeTouchSelect(chip) {
    // If already selected, deselect
    if (_bridgeSelectedChip === chip) {
        chip.style.outline = '';
        _bridgeSelectedChip = null;
        return;
    }
    // Deselect previous
    if (_bridgeSelectedChip) _bridgeSelectedChip.style.outline = '';
    _bridgeSelectedChip = chip;
    chip.style.outline = '3px solid var(--accent-primary)';
}

function bridgeTouchDrop(zone, filled, roundVerbs, onCorrect) {
    if (!_bridgeSelectedChip) return;
    const chip = _bridgeSelectedChip;
    _bridgeSelectedChip = null;
    chip.style.outline = '';
    handleBridgeDrop(chip.id, zone, filled, roundVerbs, onCorrect, () => {});
}

function handleBridgeDrop(chipId, zone, filled, roundVerbs, onCorrect, onWrong) {
    const chip = document.getElementById(chipId);
    if (!chip) return;

    const chipVerbId = chip.dataset.verbId;
    const chipType   = chip.dataset.type;
    const zoneVerbId = zone.dataset.verbId;
    const zoneType   = zone.dataset.type;
    const zoneKey    = `${zoneVerbId}-${zoneType}`;

    // Zone already filled correctly — ignore
    if (zone.dataset.locked === 'true') return;

    // Type must match (past→past, spanish→spanish)
    if (chipType !== zoneType) {
        // Wrong type: flash red briefly
        zone.style.background = 'rgba(239,68,68,0.15)';
        zone.style.borderColor = '#ef4444';
        setTimeout(() => {
            zone.style.background = '';
            zone.style.borderColor = '';
        }, 600);
        return;
    }

    // Check correct verb
    const isCorrect = chipVerbId === zoneVerbId;

    // Place the chip visually inside the zone
    chip.style.cursor = 'default';
    chip.setAttribute('draggable', false);
    chip.style.fontSize = '0.9rem';
    chip.style.padding = '0.4rem 0.8rem';
    zone.innerHTML = '';
    zone.appendChild(chip);

    if (isCorrect) {
        zone.style.background   = 'rgba(34,197,94,0.15)';
        zone.style.borderColor  = '#22c55e';
        zone.style.borderStyle  = 'solid';
        chip.style.borderColor  = '#22c55e';
        chip.style.background   = 'linear-gradient(135deg, rgba(34,197,94,0.3), rgba(16,185,129,0.3))';
        zone.dataset.locked = 'true';
        // Mark as learning if new, to help the Bridge focus filter
        const cur = getVerbStatus(chipVerbId);
        if (cur === 'new') setVerbStatus(chipVerbId, 'learning');
        onCorrect();
    } else {
        // Wrong verb: show red, then return chip to pool after a moment
        zone.style.background  = 'rgba(239,68,68,0.15)';
        zone.style.borderColor = '#ef4444';
        chip.style.borderColor = '#ef4444';

        setTimeout(() => {
            // Return chip to pool
            zone.innerHTML = `<span class="dz-hint">${zoneType === 'past' ? '🕰️ pasado' : '🇲🇽 español'}</span>`;
            zone.style.background  = '';
            zone.style.borderColor = '';
            chip.style.borderColor = '';
            chip.style.background  = 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.25))';
            chip.setAttribute('draggable', true);
            chip.style.cursor = 'grab';
            document.getElementById('bridge-pool').appendChild(chip);
        }, 700);
        onWrong();
    }
}

function checkBridgeRoundComplete(correctCount, totalSlots, roundVerbs, nextBtn, feedback) {
    state.score = (state.bridgeRoundIndex * 0) + correctCount; // accumulate across rounds via state
    // Update running score display
    const globalScore = (state.bridgeRoundIndex * roundVerbs.length * 2) + correctCount;
    document.getElementById('bridge-score').textContent = globalScore;

    if (correctCount >= totalSlots) {
        // All slots in this round filled correctly
        feedback.textContent = '🎉 ¡Ronda completada! Todos los pares correctos.';
        feedback.className = 'feedback-message success';

        // Mark verbs as known
        roundVerbs.forEach(v => setVerbStatus(v.id, 'known'));

        nextBtn.style.display = 'block';

        // Update state.score for showResults
        state.score = globalScore;
        state.shuffledVerbs = state.bridgeVerbs; // so showResults has correct total
    }
}

// =========================================
// PROGRESS VIEW
// =========================================
function renderProgressView() {
    const mastery = loadMastery();
    const stats   = loadStats();
    const history = loadHistory();

    const known    = irregularVerbs.filter(v => (mastery[v.id] || 'new') === 'known');
    const learning = irregularVerbs.filter(v => (mastery[v.id] || 'new') === 'learning');
    const newVerbs = irregularVerbs.filter(v => (mastery[v.id] || 'new') === 'new');

    const pct = irregularVerbs.length > 0 ? Math.round((known.length / irregularVerbs.length) * 100) : 0;

    const historyHTML = history.length === 0
        ? '<p class="no-history">Aún no tienes sesiones guardadas.</p>'
        : history.map(h => {
            const d = new Date(h.date);
            const fmt = d.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
            const p = Math.round((h.score / h.total) * 100);
            return `<div class="history-item"><span class="hi-date">${fmt}</span><span class="hi-score">${h.score}/${h.total} (${p}%)</span></div>`;
        }).join('');

    const renderGroup = (title, verbs, cls) => {
        if (verbs.length === 0) return '';
        return `
            <div class="verb-group">
                <h4 class="verb-group-title ${cls}">${title} <span class="group-count">${verbs.length}</span></h4>
                <div class="verb-chips">
                    ${verbs.map(v => `
                        <div class="verb-chip" data-id="${v.id}">
                            <div class="chip-content">
                                <div class="chip-header">
                                    <span class="chip-present">${v.present}</span>
                                    <span class="chip-type ${v.isRegular ? 'chip-type-reg' : 'chip-type-irreg'}">${v.isRegular ? 'Reg' : 'Irreg'}</span>
                                </div>
                                <span class="chip-past">${v.past}</span>
                            </div>
                            <div class="chip-actions">
                                <button class="chip-btn chip-known"    onclick="setStatusFromProgress('${v.id}','known')">✅</button>
                                <button class="chip-btn chip-learning" onclick="setStatusFromProgress('${v.id}','learning')">📖</button>
                                <button class="chip-btn chip-reset"    onclick="setStatusFromProgress('${v.id}','new')">🔄</button>
                            </div>
                        </div>`).join('')}
                </div>
            </div>`;
    };

    document.getElementById('progress-container').innerHTML = `
        <div class="progress-page">
            <div class="progress-summary-row">
                <div class="progress-ring-wrap">
                    <svg class="progress-ring-svg" viewBox="0 0 100 100">
                        <circle class="ring-bg"    cx="50" cy="50" r="40" />
                        <circle class="ring-fill"  cx="50" cy="50" r="40"
                            stroke-dasharray="${2.513 * pct} ${251.3 - 2.513 * pct}"
                            stroke-dashoffset="62.8" />
                    </svg>
                    <div class="ring-label">
                        <span class="ring-pct">${pct}%</span>
                        <span class="ring-sub">dominados</span>
                    </div>
                </div>

                <div class="global-stats-grid">
                    <div class="gs-card"><span class="gs-val">${known.length}</span><span class="gs-lbl">✅ Ya me la sé</span></div>
                    <div class="gs-card"><span class="gs-val">${learning.length}</span><span class="gs-lbl">📖 Me falta</span></div>
                    <div class="gs-card"><span class="gs-val">${stats.totalSessions}</span><span class="gs-lbl">📅 Sesiones</span></div>
                    <div class="gs-card"><span class="gs-val">${stats.bestStreak}</span><span class="gs-lbl">🔥 Mejor racha</span></div>
                    <div class="gs-card"><span class="gs-val">${stats.totalAnswered > 0 ? Math.round((stats.totalCorrect/stats.totalAnswered)*100) : 0}%</span><span class="gs-lbl">🎯 Precisión</span></div>
                    <div class="gs-card"><span class="gs-val">${stats.totalCorrect}</span><span class="gs-lbl">✔ Correctas</span></div>
                </div>
            </div>

            <div class="history-section">
                <h3 class="section-title">📅 Historial reciente</h3>
                <div class="history-list">${historyHTML}</div>
            </div>

            <div class="verb-list-section">
                <h3 class="section-title">📚 Todos los verbos</h3>
                <p class="verb-list-hint">Haz click en los íconos para cambiar el estado de cada verbo.</p>
                ${renderGroup('✅ Ya me la sé', known, 'title-known')}
                ${renderGroup('📖 Me falta', learning, 'title-learning')}
                ${renderGroup('🆕 Sin revisar', newVerbs, 'title-new')}
            </div>

            <div class="reset-section">
                <button class="reset-btn" id="reset-all-btn">🗑 Reiniciar todo mi progreso</button>
            </div>
        </div>
    `;

    document.getElementById('reset-all-btn').addEventListener('click', () => {
        if (confirm('¿Seguro que quieres borrar todo tu progreso? Esta acción no se puede deshacer.')) {
            localStorage.removeItem(LS_KEY_MASTERY);
            localStorage.removeItem(LS_KEY_STATS);
            localStorage.removeItem(LS_KEY_HISTORY);
            renderProgressView();
        }
    });
}

function setStatusFromProgress(verbId, status) {
    setVerbStatus(verbId, status);
    renderProgressView();
}

// =========================================
// EVENT LISTENERS
// =========================================
startAllBtn.addEventListener('click',      () => showExercise('all'));
startLearningBtn.addEventListener('click', () => showExercise('learning'));
startFlashcardsBtn.addEventListener('click', showFlashcards);
startSentencesBtn.addEventListener('click', showSentences);
startReadingBtn.addEventListener('click', showReading);
startBridgeBtn.addEventListener('click', showBridge);
startTimeAttackBtn.addEventListener('click', showTimeAttack);
backBtn.addEventListener('click', showDashboard);
bridgeBackBtn.addEventListener('click', showDashboard);
navBtnDashboard.addEventListener('click', showDashboard);
navBtnProgress.addEventListener('click', showProgress);

// =========================================
// CUSTOM LISTS MANAGEMENT
// =========================================
function updateGlobalPoolSelect() {
    const val = getActivePoolId();
    globalPoolSelect.innerHTML = `
        <option value="all">🌐 Todos los verbos (Cualquiera)</option>
        <option value="learning">📖 Solo verbos "Me falta"</option>
    `;
    const lists = loadLists();
    lists.forEach(l => {
        const opt = document.createElement('option');
        opt.value = l.id;
        opt.textContent = `📑 Lista: ${l.name} (${l.verbs.length} verbos)`;
        globalPoolSelect.appendChild(opt);
    });
    globalPoolSelect.value = val;
}

globalPoolSelect.addEventListener('change', (e) => {
    setActivePoolId(e.target.value);
});

manageListsBtn.addEventListener('click', () => {
    renderManageListsModal();
    manageListsModal.classList.remove('hidden');
});
manageListsCloseBtn.addEventListener('click', () => {
    manageListsModal.classList.add('hidden');
    updateGlobalPoolSelect();
});

createListBtn.addEventListener('click', () => {
    openEditListModal();
});
listCancelBtn.addEventListener('click', () => {
    listModal.classList.add('hidden');
});

function openEditListModal(listId = null) {
    editingListId = listId;
    let name = '';
    let selectedIds = [];
    
    if (listId) {
        const lists = loadLists();
        const l = lists.find(x => x.id === listId);
        if (l) { name = l.name; selectedIds = l.verbs; }
    }
    
    document.getElementById('list-modal-title').textContent = listId ? 'Editar Lista' : 'Crear Lista';
    listNameInput.value = name;
    
    // Render checkboxes
    listVerbsContainer.innerHTML = '';
    irregularVerbs.forEach(v => {
        const isChecked = selectedIds.includes(v.id);
        const div = document.createElement('div');
        div.style.padding = '0.4rem';
        div.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.gap = '0.5rem';
        div.innerHTML = `
            <input type="checkbox" id="chk-${v.id}" value="${v.id}" ${isChecked ? 'checked' : ''} style="accent-color: var(--primary-color);">
            <label for="chk-${v.id}" style="cursor:pointer; flex:1;">${v.present} - ${v.spanish}</label>
        `;
        listVerbsContainer.appendChild(div);
    });
    
    listModal.classList.remove('hidden');
}

listSelectAllBtn.addEventListener('click', () => {
    const checks = listVerbsContainer.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(checks).every(c => c.checked);
    checks.forEach(c => c.checked = !allChecked);
    listSelectAllBtn.textContent = allChecked ? "Seleccionar Todos" : "Deseleccionar Todos";
});

listSaveBtn.addEventListener('click', () => {
    const name = listNameInput.value.trim();
    if (!name) return alert('Por favor ingresa un nombre para la lista.');
    
    const checks = listVerbsContainer.querySelectorAll('input[type="checkbox"]:checked');
    const selectedIds = Array.from(checks).map(c => c.value);
    
    if (selectedIds.length === 0) return alert('Selecciona al menos un verbo.');
    
    const lists = loadLists();
    if (editingListId) {
        const idx = lists.findIndex(x => x.id === editingListId);
        if (idx !== -1) {
            lists[idx].name = name;
            lists[idx].verbs = selectedIds;
        }
    } else {
        lists.push({
            id: 'list_' + Date.now(),
            name: name,
            verbs: selectedIds
        });
    }
    
    saveLists(lists);
    listModal.classList.add('hidden');
    updateGlobalPoolSelect();
    
    // If we came from the manage modal, refresh it
    if (!manageListsModal.classList.contains('hidden')) {
        renderManageListsModal();
    }
});

function renderManageListsModal() {
    const lists = loadLists();
    manageListsContainer.innerHTML = '';
    
    if (lists.length === 0) {
        manageListsContainer.innerHTML = '<p style="color:var(--text-secondary); text-align:center;">No tienes listas personalizadas creadas.</p>';
        return;
    }
    
    lists.forEach(l => {
        const item = document.createElement('div');
        item.style.background = 'rgba(0,0,0,0.2)';
        item.style.padding = '1rem';
        item.style.borderRadius = '8px';
        item.style.border = '1px solid var(--border-color)';
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'center';
        
        item.innerHTML = `
            <div>
                <h4 style="margin:0 0 0.25rem 0;">${l.name}</h4>
                <div style="font-size:0.85rem; color:var(--text-secondary);">${l.verbs.length} verbos</div>
            </div>
            <div style="display:flex; gap:0.5rem;">
                <button class="list-edit-btn" data-id="${l.id}" style="background:none; border:none; color:var(--primary-color); cursor:pointer; font-size:1.2rem;" title="Editar">✏️</button>
                <button class="list-del-btn" data-id="${l.id}" style="background:none; border:none; color:#ef4444; cursor:pointer; font-size:1.2rem;" title="Eliminar">🗑</button>
            </div>
        `;
        manageListsContainer.appendChild(item);
    });
    
    manageListsContainer.querySelectorAll('.list-edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => openEditListModal(e.target.dataset.id));
    });
    
    manageListsContainer.querySelectorAll('.list-del-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (confirm('¿Eliminar esta lista?')) {
                const id = e.target.dataset.id;
                const newLists = loadLists().filter(x => x.id !== id);
                saveLists(newLists);
                if (getActivePoolId() === id) setActivePoolId('all');
                renderManageListsModal();
            }
        });
    });
}

// =========================================
// TENSE BLOCK TOGGLES
// =========================================
document.querySelectorAll('.tense-header').forEach(header => {
    header.addEventListener('click', () => {
        header.closest('.tense-block').classList.toggle('collapsed');
    });
});

// Initial dashboard render
showDashboard();
