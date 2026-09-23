// Simulacro ICFES Inglés - Data & Logic
const ICFES_QUESTIONS_BASE = [
    // === PARTE 1: SIGNS AND NOTICES ===
    {
        part: 1,
        partTitle: "Signs and Notices",
        partDesc: "Preguntas de emparejamiento entre avisos y los lugares donde se encontrarían.",
        id: 1,
        quote: "Customers who bought electronic devices can ask for technical support at Desk 4.",
        questionText: "¿Dónde verías este aviso?",
        options: [
            "Restaurant",
            "Electronics Store",
            "Hospital",
            "School"
        ],
        correctIndex: 1, // B
        tema: "Relative Clauses",
        nivel: "A2",
        retroalimentacion: "Las expresiones 'electronic devices' y 'technical support' indican claramente una tienda de tecnología (Electronics Store)."
    },
    {
        part: 1,
        partTitle: "Signs and Notices",
        partDesc: "Preguntas de emparejamiento entre avisos y los lugares donde se encontrarían.",
        id: 2,
        quote: "Animals that are sleeping should not be disturbed.",
        questionText: "¿Dónde verías este aviso?",
        options: [
            "Library",
            "Museum",
            "Zoo",
            "Airport"
        ],
        correctIndex: 2, // C
        tema: "Relative Clauses",
        nivel: "A2",
        retroalimentacion: "La presencia de animales indica que el aviso pertenece a un zoológico (Zoo)."
    },
    {
        part: 1,
        partTitle: "Signs and Notices",
        partDesc: "Preguntas de emparejamiento entre avisos y los lugares donde se encontrarían.",
        id: 3,
        quote: "Students who arrive after 8:00 a.m. must report to the principal's office.",
        questionText: "¿Dónde verías este aviso?",
        options: [
            "School",
            "Bank",
            "Hotel",
            "Gym"
        ],
        correctIndex: 0, // A
        tema: "Relative Clauses",
        nivel: "A2",
        retroalimentacion: "Los estudiantes (students) y la oficina del director (principal's office) son elementos característicos de una escuela (School)."
    },
    {
        part: 1,
        partTitle: "Signs and Notices",
        partDesc: "Preguntas de emparejamiento entre avisos y los lugares donde se encontrarían.",
        id: 4,
        quote: "Passengers waiting for Flight 207 should proceed to Gate 8.",
        questionText: "¿Dónde verías este aviso?",
        options: [
            "Cinema",
            "Airport",
            "Hospital",
            "Restaurant"
        ],
        correctIndex: 1, // B
        tema: "Vocabulary in Context",
        nivel: "A2",
        retroalimentacion: "Las palabras 'flight' (vuelo) y 'gate' (puerta de embarque) son vocabulario típico de un aeropuerto (Airport)."
    },
    {
        part: 1,
        partTitle: "Signs and Notices",
        partDesc: "Preguntas de emparejamiento entre avisos y los lugares donde se encontrarían.",
        id: 5,
        quote: "Visitors who were running in the corridors will be asked to leave.",
        questionText: "¿Dónde verías este aviso?",
        options: [
            "Hospital",
            "Park",
            "Supermarket",
            "Stadium"
        ],
        correctIndex: 0, // A
        tema: "Past Progressive",
        nivel: "A2",
        retroalimentacion: "En un hospital es de suma importancia mantener el orden, el silencio y la tranquilidad en los pasillos (corridors)."
    },

    // === PARTE 2: DEFINITIONS ===
    {
        part: 2,
        partTitle: "Definitions",
        partDesc: "Lee la definición de la izquierda y selecciona la palabra correcta a la derecha.",
        id: 6,
        quote: "",
        questionText: "To move from one place to another using a vehicle.",
        options: [
            "Ride",
            "Drive",
            "Cook",
            "Read"
        ],
        correctIndex: 1, // B
        tema: "Vocabulary",
        nivel: "A2",
        retroalimentacion: "'Drive' significa conducir un vehículo de motor."
    },
    {
        part: 2,
        partTitle: "Definitions",
        partDesc: "Lee la definición de la izquierda y selecciona la palabra correcta a la derecha.",
        id: 7,
        quote: "",
        questionText: "To put something together to create a structure.",
        options: [
            "Build",
            "Break",
            "Fix",
            "Carry"
        ],
        correctIndex: 0, // A
        tema: "Vocabulary",
        nivel: "A2",
        retroalimentacion: "'Build' significa construir o edificar una estructura."
    },
    {
        part: 2,
        partTitle: "Definitions",
        partDesc: "Lee la definición de la izquierda y selecciona la palabra correcta a la derecha.",
        id: 8,
        quote: "",
        questionText: "To stop having something because it goes away.",
        options: [
            "Keep",
            "Choose",
            "Lose",
            "Bring"
        ],
        correctIndex: 2, // C
        tema: "Vocabulary",
        nivel: "A2",
        retroalimentacion: "'Lose' significa perder o dejar de tener algo."
    },
    {
        part: 2,
        partTitle: "Definitions",
        partDesc: "Lee la definición de la izquierda y selecciona la palabra correcta a la derecha.",
        id: 9,
        quote: "",
        questionText: "A person who prepares and serves meals.",
        options: [
            "Pilot",
            "Driver",
            "Cook",
            "Student"
        ],
        correctIndex: 2, // C
        tema: "Vocabulary",
        nivel: "A2",
        retroalimentacion: "'Cook' hace referencia a un cocinero o chef que prepara comidas."
    },
    {
        part: 2,
        partTitle: "Definitions",
        partDesc: "Lee la definición de la izquierda y selecciona la palabra correcta a la derecha.",
        id: 10,
        quote: "",
        questionText: "To stay in a place until something happens.",
        options: [
            "Wait",
            "Arrive",
            "Leave",
            "Meet"
        ],
        correctIndex: 0, // A
        tema: "Vocabulary",
        nivel: "A2",
        retroalimentacion: "'Wait' significa esperar o permanecer en un lugar hasta que ocurra un evento."
    },

    // === PARTE 3: SHORT CONVERSATIONS ===
    {
        part: 3,
        partTitle: "Short Conversations",
        partDesc: "Completa los diálogos cotidianos seleccionando la opción más adecuada.",
        id: 11,
        quote: "— What were your friends doing yesterday afternoon?",
        questionText: "Completa el diálogo:",
        options: [
            "They played soccer.",
            "They were playing soccer.",
            "They play soccer.",
            "They are playing soccer."
        ],
        correctIndex: 1, // B
        tema: "Past Progressive",
        nivel: "A2",
        retroalimentacion: "La pregunta usa el pasado continuo ('were doing'), por lo cual la respuesta lógica debe responderse en el mismo tiempo gramatical ('were playing')."
    },
    {
        part: 3,
        partTitle: "Short Conversations",
        partDesc: "Completa los diálogos cotidianos seleccionando la opción más adecuada.",
        id: 12,
        quote: "— Did your brother fix the bicycle?",
        questionText: "Completa el diálogo:",
        options: [
            "Yes, he did.",
            "Yes, he was.",
            "Yes, he does.",
            "Yes, he fixing it."
        ],
        correctIndex: 0, // A
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "Las preguntas de respuesta corta formuladas con el auxiliar de pasado simple 'Did' se responden usando 'did' en la afirmación o negación."
    },
    {
        part: 3,
        partTitle: "Short Conversations",
        partDesc: "Completa los diálogos cotidianos seleccionando la opción más adecuada.",
        id: 13,
        quote: "— Who is the man who called you?",
        questionText: "Completa el diálogo:",
        options: [
            "He my uncle.",
            "He was uncle.",
            "He is my uncle.",
            "He uncle."
        ],
        correctIndex: 2, // C
        tema: "Relative Clauses",
        nivel: "A2",
        retroalimentacion: "La respuesta requiere el sujeto 'He', el verbo copulativo 'is' y el determinante 'my uncle' para estar gramaticalmente completa."
    },
    {
        part: 3,
        partTitle: "Short Conversations",
        partDesc: "Completa los diálogos cotidianos seleccionando la opción más adecuada.",
        id: 14,
        quote: "— Why were you late?",
        questionText: "Completa el diálogo:",
        options: [
            "Because I miss the bus.",
            "Because I missed the bus.",
            "Because I missing the bus.",
            "Because I am miss the bus."
        ],
        correctIndex: 1, // B
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "La razón del retraso es un evento completamente terminado en el pasado, por lo cual se requiere el verbo regular en pasado simple: 'missed'."
    },
    {
        part: 3,
        partTitle: "Short Conversations",
        partDesc: "Completa los diálogos cotidianos seleccionando la opción más adecuada.",
        id: 15,
        quote: "— What happened while you were studying?",
        questionText: "Completa el diálogo:",
        options: [
            "My friend arrived.",
            "My friend arrive.",
            "My friend arriving.",
            "My friend arrives."
        ],
        correctIndex: 0,
        tema: "Past Simple vs Past Progressive",
        nivel: "B1",
        retroalimentacion: "Una acción en progreso en el pasado (were studying) es interrumpida por una acción puntual en pasado simple (arrived)."
    },

    // === PARTE 4: COMPLETE THE TEXT ===
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_beach_trip",
        situationTitle: "Viaje a la Playa",
        id: 16,
        quote: "Last Sunday, my family and I <b><u>[16]</u></b> to the beach. While my father (17) the car, my sister was listening to music.<br>When we (18) there, we saw many people. My mother (19) lunch while my brother and I (20) in the water.<br>Later, we (21) volleyball and (22) some cold drinks. Before leaving, we (23) many photos and (24) a wonderful day.",
        questionText: "Selecciona la opción correcta para el espacio (16):",
        options: ["went", "go", "going", "goes"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "'Last Sunday' indica una acción terminada en el pasado. El pasado del verbo irregular 'go' es 'went'."
    },

    // === PARTE 4: SITUACION 3 - THE SCHOOL FESTIVAL ===
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 16,
        quote: "Last month, our school organized a cultural festival. Many students <b><u>[16]</u></b> decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (16):",
        options: ["decorated", "were decorating", "decorate"],
        correctIndex: 1,
        tema: "Past Progressive",
        nivel: "A2",
        retroalimentacion: "Dos acciones estaban ocurriendo simultáneamente durante los preparativos del festival. Por eso se utiliza pasado progresivo."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 17,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I <b><u>[17]</u></b> near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (17):",
        options: ["walked", "walk", "was walking"],
        correctIndex: 2,
        tema: "Past Simple vs Past Progressive",
        nivel: "B1",
        retroalimentacion: "La caminata estaba en progreso cuando otra acción la interrumpió."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 18,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly <b><u>[18]</u></b> my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (18):",
        options: ["shouted", "was shouting", "shouts"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "Es una acción puntual que interrumpe una acción en desarrollo."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 19,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers <b><u>[19]</u></b> chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (19):",
        options: ["arranged", "arrange", "were arranging"],
        correctIndex: 2,
        tema: "Past Progressive",
        nivel: "A2",
        retroalimentacion: "Los profesores estaban organizando las sillas mientras otras actividades ocurrían simultáneamente."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 20,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students <b><u>[20]</u></b> music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (20):",
        options: ["tested", "was testing", "were testing"],
        correctIndex: 2,
        tema: "Past Progressive",
        nivel: "B1",
        retroalimentacion: "La acción estaba en proceso durante los preparativos. Aunque 'group' puede ser singular, aquí se enfoca en los estudiantes realizando la acción."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 21,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone <b><u>[21]</u></b> busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (21):",
        options: ["was", "were", "is"],
        correctIndex: 0,
        tema: "Verb To Be (Past)",
        nivel: "A2",
        retroalimentacion: "'Everyone' es gramaticalmente singular, por lo que debe usarse 'was'."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 22,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately <b><u>[22]</u></b> to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (22):",
        options: ["rushed", "rushes", "was rushing"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "La reacción ocurrió en un momento específico."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 23,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I <b><u>[23]</u></b> pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (23):",
        options: ["took", "was taking", "takes"],
        correctIndex: 1,
        tema: "Past Simple vs Past Progressive",
        nivel: "B1",
        retroalimentacion: "Tomar fotografías era la acción en progreso cuando ocurrió la interrupción."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 24,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician <b><u>[24]</u></b> the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (24):",
        options: ["checked", "was checking", "checks"],
        correctIndex: 1,
        tema: "Past Progressive",
        nivel: "B1",
        retroalimentacion: "La revisión de los cables estaba ocurriendo durante ese momento."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 25,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents <b><u>[25]</u></b> snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (25):",
        options: ["sold", "were selling", "sell"],
        correctIndex: 1,
        tema: "Past Simple vs Past Progressive",
        nivel: "B1",
        retroalimentacion: "La venta estaba ocurriendo cuando comenzó la lluvia."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 26,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people <b><u>[26]</u></b> inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (26):",
        options: ["ran", "were running", "run"],
        correctIndex: 1,
        tema: "While + Past Progressive",
        nivel: "B1",
        retroalimentacion: "Después de 'while' suele aparecer una acción en desarrollo."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 27,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl <b><u>[27]</u></b> during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (27):",
        options: ["fell", "falls", "was falling"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "La caída fue un evento puntual y terminado."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 28,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience <b><u>[28]</u></b> patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (28):",
        options: ["waited", "were waiting", "wait"],
        correctIndex: 1,
        tema: "While + Past Progressive",
        nivel: "B1",
        retroalimentacion: "La audiencia estaba esperando cuando terminó la lluvia."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 29,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone <b><u>[29]</u></b> excitedly while the performers entered the stage. At the end of the night, we (30) ___ the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (29):",
        options: ["clapped", "were clapping", "clap"],
        correctIndex: 1,
        tema: "Past Progressive",
        nivel: "B1",
        retroalimentacion: "Los aplausos estaban ocurriendo mientras los artistas entraban al escenario."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_school_festival",
        situationTitle: "Festival Escolar",
        id: 30,
        quote: "Last month, our school organized a cultural festival. Many students (16) ___ decorations while others practiced their presentations. I (17) ___ near the stage when my best friend suddenly (18) ___ my name. Some teachers (19) ___ chairs in the auditorium while the principal prepared his speech. At the same time, a group of students (20) ___ music for the dance show. While everyone (21) ___ busy, one student accidentally dropped a box of paints. The art teacher immediately (22) ___ to help him clean the floor. Meanwhile, I (23) ___ pictures for the school magazine when the microphone suddenly stopped working. The sound technician (24) ___ the cables while students waited nervously. Some parents (25) ___ snacks when the rain unexpectedly started. While people (26) ___ inside the gym, the dancers continued practicing. One girl (27) ___ during rehearsal because the floor was wet. Fortunately, nobody got hurt. After a few minutes, the rain stopped while the audience (28) ___ patiently for the show to begin. Finally, the festival started, and everyone (29) ___ excitedly while the performers entered the stage. At the end of the night, we <b><u>[30]</u></b> the school feeling proud and exhausted.",
        questionText: "Selecciona la opción correcta para el espacio (30):",
        options: ["left", "leave", "were leaving"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "Es una acción final y completada que marca el cierre de la historia."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_beach_trip",
        situationTitle: "Viaje a la Playa",
        id: 17,
        quote: "Last Sunday, my family and I went to the beach. While my father <b><u>[17]</u></b> the car, my sister was listening to music.<br>When we (18) there, we saw many people. My mother (19) lunch while my brother and I (20) in the water.<br>Later, we (21) volleyball and (22) some cold drinks. Before leaving, we (23) many photos and (24) a wonderful day.",
        questionText: "Selecciona la opción correcta para el espacio (17):",
        options: ["drove", "drive", "was driving", "driving"],
        correctIndex: 2,
        tema: "Past Progressive",
        nivel: "A2",
        retroalimentacion: "La acción estaba ocurriendo ('conduciendo el auto') en el pasado de manera continua mientras otra acción paralela sucedía. Por eso se usa 'was driving'."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_beach_trip",
        situationTitle: "Viaje a la Playa",
        id: 18,
        quote: "Last Sunday, my family and I went to the beach. While my father was driving the car, my sister was listening to music.<br>When we <b><u>[18]</u></b> there, we saw many people. My mother (19) lunch while my brother and I (20) in the water.<br>Later, we (21) volleyball and (22) some cold drinks. Before leaving, we (23) many photos and (24) a wonderful day.",
        questionText: "Selecciona la opción correcta para el espacio (18):",
        options: ["arrived", "arrive", "arriving", "arrives"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "La llegada ('arrive') ocurrió en un momento específico y completado del pasado, por lo cual usamos el pasado simple regular: 'arrived'."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_beach_trip",
        situationTitle: "Viaje a la Playa",
        id: 19,
        quote: "Last Sunday, my family and I went to the beach. While my father was driving the car, my sister was listening to music.<br>When we arrived there, we saw many people. My mother <b><u>[19]</u></b> lunch while my brother and I (20) in the water.<br>Later, we (21) volleyball and (22) some cold drinks. Before leaving, we (23) many photos and (24) a wonderful day.",
        questionText: "Selecciona la opción correcta para el espacio (19):",
        options: ["cooked", "was cooking", "cook", "cooks"],
        correctIndex: 1,
        tema: "Past Progressive",
        nivel: "A2",
        retroalimentacion: "La madre estaba cocinando el almuerzo ('cooking') de manera continuada en el pasado al mismo tiempo que ocurrían otras acciones."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_beach_trip",
        situationTitle: "Viaje a la Playa",
        id: 20,
        quote: "Last Sunday, my family and I went to the beach. While my father was driving the car, my sister was listening to music.<br>When we arrived there, we saw many people. My mother was cooking lunch while my brother and I <b><u>[20]</u></b> in the water.<br>Later, we (21) volleyball and (22) some cold drinks. Before leaving, we (23) many photos and (24) a wonderful day.",
        questionText: "Selecciona la opción correcta para el espacio (20):",
        options: ["swam", "swim", "were swimming", "swims"],
        correctIndex: 2,
        tema: "Past Progressive",
        nivel: "A2",
        retroalimentacion: "La acción estaba en progreso continuo durante ese mismo lapso en el pasado. Al ser sujeto plural ('my brother and I'), corresponde 'were swimming'."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_beach_trip",
        situationTitle: "Viaje a la Playa",
        id: 21,
        quote: "Last Sunday, my family and I went to the beach. While my father was driving the car, my sister was listening to music.<br>When we arrived there, we saw many people. My mother was cooking lunch while my brother and I were swimming in the water.<br>Later, we <b><u>[21]</u></b> volleyball and (22) some cold drinks. Before leaving, we (23) many photos and (24) a wonderful day.",
        questionText: "Selecciona la opción correcta para el espacio (21):",
        options: ["play", "played", "playing", "plays"],
        correctIndex: 1,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "Es parte de una secuencia de actividades consecutivas y completadas ese día. Se usa el pasado simple regular: 'played'."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_beach_trip",
        situationTitle: "Viaje a la Playa",
        id: 22,
        quote: "Last Sunday, my family and I went to the beach. While my father was driving the car, my sister was listening to music.<br>When we arrived there, we saw many people. My mother was cooking lunch while my brother and I were swimming in the water.<br>Later, we played volleyball and <b><u>[22]</u></b> some cold drinks. Before leaving, we (23) many photos and (24) a wonderful day.",
        questionText: "Selecciona la opción correcta para el espacio (22):",
        options: ["drank", "drink", "drinking", "drinks"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "La acción de beber ya finalizó en el pasado. Se requiere el pasado simple irregular del verbo 'drink', el cual es 'drank'."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_beach_trip",
        situationTitle: "Viaje a la Playa",
        id: 23,
        quote: "Last Sunday, my family and I went to the beach. While my father was driving the car, my sister was listening to music.<br>When we arrived there, we saw many people. My mother was cooking lunch while my brother and I were swimming in the water.<br>Later, we played volleyball and drank some cold drinks. Before leaving, we <b><u>[23]</u></b> many photos and (24) a wonderful day.",
        questionText: "Selecciona la opción correcta para el espacio (23):",
        options: ["took", "take", "taking", "takes"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "La colocación correcta en inglés es 'take photos'. Al estar en el pasado, usamos la forma irregular en pasado simple: 'took'."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_beach_trip",
        situationTitle: "Viaje a la Playa",
        id: 24,
        quote: "Last Sunday, my family and I went to the beach. While my father was driving the car, my sister was listening to music.<br>When we arrived there, we saw many people. My mother was cooking lunch while my brother and I were swimming in the water.<br>Later, we played volleyball and drank some cold drinks. Before leaving, we took many photos and <b><u>[24]</u></b> a wonderful day.",
        questionText: "Selecciona la opción correcta para el espacio (24):",
        options: ["have", "had", "having", "has"],
        correctIndex: 1,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "La expresión correcta para indicar que pasaron un buen día en pasado es 'had a wonderful day' (pasado simple de 'have')."
    },

    // === PARTE 4: SITUACIÓN 2 - THE STORMY NIGHT ===
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 61,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain <b><u>[61]</u></b> hard when the electricity suddenly went out. My little brother (62) ___ TV while my parents (63) ___ dinner in the kitchen. I (64) ___ my homework when we heard a strange noise outside. My dad quickly (65) ___ to the window while my mum (66) ___ candles around the house. While we (67) ___ in the living room, a tree branch suddenly fell onto our car. My brother (68) ___ loudly because he was scared. At that moment, our dog (69) ___ around the house nervously. My parents (70) ___ the neighbors to see if they were okay. While everyone (71) ___ what happened, the storm slowly started to calm down. Later, we (72) ___ board games together because there was no electricity. My sister accidentally (73) ___ juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (61):",
        options: ["rained", "rains", "was raining"],
        correctIndex: 2,
        tema: "Past Progressive",
        nivel: "B1",
        retroalimentacion: "La lluvia estaba ocurriendo cuando otra acción interrumpió la situación (the electricity went out). Por eso se usa pasado progresivo."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 62,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother <b><u>[62]</u></b> TV while my parents (63) ___ dinner in the kitchen. I (64) ___ my homework when we heard a strange noise outside. My dad quickly (65) ___ to the window while my mum (66) ___ candles around the house. While we (67) ___ in the living room, a tree branch suddenly fell onto our car. My brother (68) ___ loudly because he was scared. At that moment, our dog (69) ___ around the house nervously. My parents (70) ___ the neighbors to see if they were okay. While everyone (71) ___ what happened, the storm slowly started to calm down. Later, we (72) ___ board games together because there was no electricity. My sister accidentally (73) ___ juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (62):",
        options: ["watched", "was watching", "watches"],
        correctIndex: 1,
        tema: "Past Progressive",
        nivel: "B1",
        retroalimentacion: "La acción estaba en desarrollo durante la tormenta."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 63,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents <b><u>[63]</u></b> dinner in the kitchen. I (64) ___ my homework when we heard a strange noise outside. My dad quickly (65) ___ to the window while my mum (66) ___ candles around the house. While we (67) ___ in the living room, a tree branch suddenly fell onto our car. My brother (68) ___ loudly because he was scared. At that moment, our dog (69) ___ around the house nervously. My parents (70) ___ the neighbors to see if they were okay. While everyone (71) ___ what happened, the storm slowly started to calm down. Later, we (72) ___ board games together because there was no electricity. My sister accidentally (73) ___ juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (63):",
        options: ["prepared", "were preparing", "prepare"],
        correctIndex: 1,
        tema: "Past Progressive",
        nivel: "B1",
        retroalimentacion: "La preparación de la comida era una acción en progreso."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 64,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents were preparing dinner in the kitchen. I <b><u>[64]</u></b> my homework when we heard a strange noise outside. My dad quickly (65) ___ to the window while my mum (66) ___ candles around the house. While we (67) ___ in the living room, a tree branch suddenly fell onto our car. My brother (68) ___ loudly because he was scared. At that moment, our dog (69) ___ around the house nervously. My parents (70) ___ the neighbors to see if they were okay. While everyone (71) ___ what happened, the storm slowly started to calm down. Later, we (72) ___ board games together because there was no electricity. My sister accidentally (73) ___ juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (64):",
        options: ["was doing", "did", "does"],
        correctIndex: 0,
        tema: "Past Simple vs Past Progressive",
        nivel: "B1",
        retroalimentacion: "La tarea estaba en proceso cuando ocurrió la interrupción (we heard a strange noise)."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 65,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents were preparing dinner in the kitchen. I was doing my homework when we heard a strange noise outside. My dad quickly <b><u>[65]</u></b> to the window while my mum (66) ___ candles around the house. While we (67) ___ in the living room, a tree branch suddenly fell onto our car. My brother (68) ___ loudly because he was scared. At that moment, our dog (69) ___ around the house nervously. My parents (70) ___ the neighbors to see if they were okay. While everyone (71) ___ what happened, the storm slowly started to calm down. Later, we (72) ___ board games together because there was no electricity. My sister accidentally (73) ___ juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (65):",
        options: ["ran", "was running", "runs"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "B1",
        retroalimentacion: "Es una acción puntual que ocurrió como reacción al ruido."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 66,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents were preparing dinner in the kitchen. I was doing my homework when we heard a strange noise outside. My dad quickly ran to the window while my mum <b><u>[66]</u></b> candles around the house. While we (67) ___ in the living room, a tree branch suddenly fell onto our car. My brother (68) ___ loudly because he was scared. At that moment, our dog (69) ___ around the house nervously. My parents (70) ___ the neighbors to see if they were okay. While everyone (71) ___ what happened, the storm slowly started to calm down. Later, we (72) ___ board games together because there was no electricity. My sister accidentally (73) ___ juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (66):",
        options: ["placed", "were placing", "place"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "B1",
        retroalimentacion: "La estructura requiere una acción completada en el pasado."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 67,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents were preparing dinner in the kitchen. I was doing my homework when we heard a strange noise outside. My dad quickly ran to the window while my mum placed candles around the house. While we <b><u>[67]</u></b> in the living room, a tree branch suddenly fell onto our car. My brother (68) ___ loudly because he was scared. At that moment, our dog (69) ___ around the house nervously. My parents (70) ___ the neighbors to see if they were okay. While everyone (71) ___ what happened, the storm slowly started to calm down. Later, we (72) ___ board games together because there was no electricity. My sister accidentally (73) ___ juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (67):",
        options: ["sat", "were sitting", "sit"],
        correctIndex: 1,
        tema: "While + Past Progressive",
        nivel: "B1",
        retroalimentacion: "Después de 'while' normalmente aparece una acción en desarrollo."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 68,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents were preparing dinner in the kitchen. I was doing my homework when we heard a strange noise outside. My dad quickly ran to the window while my mum placed candles around the house. While we were sitting in the living room, a tree branch suddenly fell onto our car. My brother <b><u>[68]</u></b> loudly because he was scared. At that moment, our dog (69) ___ around the house nervously. My parents (70) ___ the neighbors to see if they were okay. While everyone (71) ___ what happened, the storm slowly started to calm down. Later, we (72) ___ board games together because there was no electricity. My sister accidentally (73) ___ juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (68):",
        options: ["screamed", "screams", "was screaming"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "B1",
        retroalimentacion: "Se trata de una reacción específica ante el accidente."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 69,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents were preparing dinner in the kitchen. I was doing my homework when we heard a strange noise outside. My dad quickly ran to the window while my mum placed candles around the house. While we were sitting in the living room, a tree branch suddenly fell onto our car. My brother screamed loudly because he was scared. At that moment, our dog <b><u>[69]</u></b> around the house nervously. My parents (70) ___ the neighbors to see if they were okay. While everyone (71) ___ what happened, the storm slowly started to calm down. Later, we (72) ___ board games together because there was no electricity. My sister accidentally (73) ___ juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (69):",
        options: ["ran", "was running", "runs"],
        correctIndex: 1,
        tema: "Past Progressive",
        nivel: "B1",
        retroalimentacion: "La acción estaba ocurriendo durante ese momento de tensión."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 70,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents were preparing dinner in the kitchen. I was doing my homework when we heard a strange noise outside. My dad quickly ran to the window while my mum placed candles around the house. While we were sitting in the living room, a tree branch suddenly fell onto our car. My brother screamed loudly because he was scared. At that moment, our dog was running around the house nervously. My parents <b><u>[70]</u></b> the neighbors to see if they were okay. While everyone (71) ___ what happened, the storm slowly started to calm down. Later, we (72) ___ board games together because there was no electricity. My sister accidentally (73) ___ juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (70):",
        options: ["called", "were calling", "call"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "B1",
        retroalimentacion: "Es una acción puntual realizada después del incidente."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 71,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents were preparing dinner in the kitchen. I was doing my homework when we heard a strange noise outside. My dad quickly ran to the window while my mum placed candles around the house. While we were sitting in the living room, a tree branch suddenly fell onto our car. My brother screamed loudly because he was scared. At that moment, our dog was running around the house nervously. My parents called the neighbors to see if they were okay. While everyone <b><u>[71]</u></b> what happened, the storm slowly started to calm down. Later, we (72) ___ board games together because there was no electricity. My sister accidentally (73) ___ juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (71):",
        options: ["discussed", "discuss", "was discussing"],
        correctIndex: 2,
        tema: "While + Past Progressive",
        nivel: "B1",
        retroalimentacion: "La conversación estaba ocurriendo mientras la tormenta disminuía."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 72,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents were preparing dinner in the kitchen. I was doing my homework when we heard a strange noise outside. My dad quickly ran to the window while my mum placed candles around the house. While we were sitting in the living room, a tree branch suddenly fell onto our car. My brother screamed loudly because he was scared. At that moment, our dog was running around the house nervously. My parents called the neighbors to see if they were okay. While everyone was discussing what happened, the storm slowly started to calm down. Later, we <b><u>[72]</u></b> board games together because there was no electricity. My sister accidentally (73) ___ juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (72):",
        options: ["played", "were playing", "play"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "B1",
        retroalimentacion: "Es una actividad terminada que ocurrió después de la tormenta."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 73,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents were preparing dinner in the kitchen. I was doing my homework when we heard a strange noise outside. My dad quickly ran to the window while my mum placed candles around the house. While we were sitting in the living room, a tree branch suddenly fell onto our car. My brother screamed loudly because he was scared. At that moment, our dog was running around the house nervously. My parents called the neighbors to see if they were okay. While everyone was discussing what happened, the storm slowly started to calm down. Later, we played board games together because there was no electricity. My sister accidentally <b><u>[73]</u></b> juice on the table while she (74) ___ cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (73):",
        options: ["spilled", "was spilling", "spills"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "B1",
        retroalimentacion: "El derrame ocurrió en un momento específico."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 74,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents were preparing dinner in the kitchen. I was doing my homework when we heard a strange noise outside. My dad quickly ran to the window while my mum placed candles around the house. While we were sitting in the living room, a tree branch suddenly fell onto our car. My brother screamed loudly because he was scared. At that moment, our dog was running around the house nervously. My parents called the neighbors to see if they were okay. While everyone was discussing what happened, the storm slowly started to calm down. Later, we played board games together because there was no electricity. My sister accidentally spilled juice on the table while she <b><u>[74]</u></b> cards. Finally, the lights came back while we (75) ___ about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (74):",
        options: ["was holding", "held", "holds"],
        correctIndex: 0,
        tema: "While + Past Progressive",
        nivel: "B1",
        retroalimentacion: "La acción de sostener las cartas estaba en desarrollo cuando ocurrió el accidente."
    },
    {
        part: 4,
        partTitle: "Complete the Text",
        partDesc: "Lee el texto y selecciona la opción correcta para completar los espacios en blanco.",
        situationId: "p4_stormy_night",
        situationTitle: "La Noche de Tormenta",
        id: 75,
        quote: "Last Saturday, my family and I were at home during a terrible storm. The rain was falling hard when the electricity suddenly went out. My little brother was watching TV while my parents were preparing dinner in the kitchen. I was doing my homework when we heard a strange noise outside. My dad quickly ran to the window while my mum placed candles around the house. While we were sitting in the living room, a tree branch suddenly fell onto our car. My brother screamed loudly because he was scared. At that moment, our dog was running around the house nervously. My parents called the neighbors to see if they were okay. While everyone was discussing what happened, the storm slowly started to calm down. Later, we played board games together because there was no electricity. My sister accidentally spilled juice on the table while she was holding cards. Finally, the lights came back while we <b><u>[75]</u></b> about the strange night.",
        questionText: "Selecciona la opción correcta para el espacio (75):",
        options: ["talked", "were talking", "talk"],
        correctIndex: 1,
        tema: "Past Simple vs Past Progressive",
        nivel: "B1",
        retroalimentacion: "La conversación estaba ocurriendo cuando regresó la electricidad. La acción en progreso va en pasado progresivo."
    },

    // === PARTE 5: LITERAL READING COMPREHENSION ===
    {
        part: 5,
        partTitle: "Literal Reading",
        partDesc: "Lee el texto e identifica la información explícita para responder las preguntas.",
        id: 25,
        quote: "Tom and his classmates visited a science museum last Friday. They arrived at 9:00 a.m. and spent the morning exploring different exhibits.<br><br>One exhibit showed how robots work, while another explained renewable energy. Tom enjoyed the robotics section the most because he wants to become an engineer.<br><br>After lunch, the students attended a workshop where they built small model cars. The visit ended at 4:00 p.m., and everyone returned to school by bus.",
        questionText: "Where did Tom go?",
        options: ["A zoo", "A museum", "A park", "A library"],
        correctIndex: 1,
        tema: "Reading Literal",
        nivel: "A2",
        retroalimentacion: "El texto indica explícitamente en el primer párrafo: 'Tom and his classmates visited a science museum'."
    },
    {
        part: 5,
        partTitle: "Literal Reading",
        partDesc: "Lee el texto e identifica la información explícita para responder las preguntas.",
        id: 26,
        quote: "Tom and his classmates visited a science museum last Friday. They arrived at 9:00 a.m. and spent the morning exploring different exhibits.<br><br>One exhibit showed how robots work, while another explained renewable energy. Tom enjoyed the robotics section the most because he wants to become an engineer.<br><br>After lunch, the students attended a workshop where they built small model cars. The visit ended at 4:00 p.m., and everyone returned to school by bus.",
        questionText: "When did they arrive?",
        options: ["8:00 a.m.", "10:00 a.m.", "9:00 a.m.", "4:00 p.m."],
        correctIndex: 2,
        tema: "Reading Literal",
        nivel: "A2",
        retroalimentacion: "El texto afirma textualmente en el primer párrafo: 'They arrived at 9:00 a.m.'"
    },
    {
        part: 5,
        partTitle: "Literal Reading",
        partDesc: "Lee el texto e identifica la información explícita para responder las preguntas.",
        id: 27,
        quote: "Tom and his classmates visited a science museum last Friday. They arrived at 9:00 a.m. and spent the morning exploring different exhibits.<br><br>One exhibit showed how robots work, while another explained renewable energy. Tom enjoyed the robotics section the most because he wants to become an engineer.<br><br>After lunch, the students attended a workshop where they built small model cars. The visit ended at 4:00 p.m., and everyone returned to school by bus.",
        questionText: "What was one exhibit about?",
        options: ["Animals", "Sports", "Robots", "History"],
        correctIndex: 2,
        tema: "Reading Literal",
        nivel: "A2",
        retroalimentacion: "El segundo párrafo detalla: 'One exhibit showed how robots work' (cómo funcionan los robots)."
    },
    {
        part: 5,
        partTitle: "Literal Reading",
        partDesc: "Lee el texto e identifica la información explícita para responder las preguntas.",
        id: 28,
        quote: "Tom and his classmates visited a science museum last Friday. They arrived at 9:00 a.m. and spent the morning exploring different exhibits.<br><br>One exhibit showed how robots work, while another explained renewable energy. Tom enjoyed the robotics section the most because he wants to become an engineer.<br><br>After lunch, the students attended a workshop where they built small model cars. The visit ended at 4:00 p.m., and everyone returned to school by bus.",
        questionText: "Why did Tom like the robotics section?",
        options: ["He likes buses.", "He wants to become an engineer.", "He likes history.", "He likes art."],
        correctIndex: 1,
        tema: "Reading Literal",
        nivel: "A2",
        retroalimentacion: "El texto dice: 'Tom enjoyed the robotics section the most because he wants to become an engineer.'"
    },
    {
        part: 5,
        partTitle: "Literal Reading",
        partDesc: "Lee el texto e identifica la información explícita para responder las preguntas.",
        id: 29,
        quote: "Tom and his classmates visited a science museum last Friday. They arrived at 9:00 a.m. and spent the morning exploring different exhibits.<br><br>One exhibit showed how robots work, while another explained renewable energy. Tom enjoyed the robotics section the most because he wants to become an engineer.<br><br>After lunch, the students attended a workshop where they built small model cars. The visit ended at 4:00 p.m., and everyone returned to school by bus.",
        questionText: "What did the students do after lunch?",
        options: ["Played soccer", "Returned home", "Built model cars", "Swam"],
        correctIndex: 2,
        tema: "Reading Literal",
        nivel: "A2",
        retroalimentacion: "El tercer párrafo relata que después del almuerzo ('After lunch') asistieron a un taller 'where they built small model cars'."
    },
    {
        part: 5,
        partTitle: "Literal Reading",
        partDesc: "Lee el texto e identifica la información explícita para responder las preguntas.",
        id: 30,
        quote: "Tom and his classmates visited a science museum last Friday. They arrived at 9:00 a.m. and spent the morning exploring different exhibits.<br><br>One exhibit showed how robots work, while another explained renewable energy. Tom enjoyed the robotics section the most because he wants to become an engineer.<br><br>After lunch, the students attended a workshop where they built small model cars. The visit ended at 4:00 p.m., and everyone returned to school by bus.",
        questionText: "How did they return?",
        options: ["Train", "Car", "Plane", "Bus"],
        correctIndex: 3,
        tema: "Reading Literal",
        nivel: "A2",
        retroalimentacion: "La última línea señala explícitamente: 'and everyone returned to school by bus' (en autobús)."
    },
    {
        part: 5,
        partTitle: "Literal Reading",
        partDesc: "Lee el texto e identifica la información explícita para responder las preguntas.",
        id: 31,
        quote: "Tom and his classmates visited a science museum last Friday. They arrived at 9:00 a.m. and spent the morning exploring different exhibits.<br><br>One exhibit showed how robots work, while another explained renewable energy. Tom enjoyed the robotics section the most because he wants to become an engineer.<br><br>After lunch, the students attended a workshop where they built small model cars. The visit ended at 4:00 p.m., and everyone returned to school by bus.",
        questionText: "When did the visit end?",
        options: ["3:00 p.m.", "4:00 p.m.", "5:00 p.m.", "6:00 p.m."],
        correctIndex: 1,
        tema: "Reading Literal",
        nivel: "A2",
        retroalimentacion: "El texto especifica que la visita terminó a las cuatro de la tarde: 'The visit ended at 4:00 p.m.'"
    },
    {
        part: 5,
        partTitle: "Literal Reading",
        partDesc: "Lee el texto e identifica la información explícita para responder las preguntas.",
        id: 32,
        quote: "Tom and his classmates visited a science museum last Friday. They arrived at 9:00 a.m. and spent the morning exploring different exhibits.<br><br>One exhibit showed how robots work, while another explained renewable energy. Tom enjoyed the robotics section the most because he wants to become an engineer.<br><br>After lunch, the students attended a workshop where they built small model cars. The visit ended at 4:00 p.m., and everyone returned to school by bus.",
        questionText: "Who attended the workshop?",
        options: ["Tom and his classmates", "Only Tom", "Teachers only", "Parents"],
        correctIndex: 0,
        tema: "Reading Literal",
        nivel: "A2",
        retroalimentacion: "El texto dice que los estudiantes ('the students'), es decir, Tom y sus compañeros, asistieron al taller."
    },

    // === PARTE 6: INFERENTIAL READING ===
    {
        part: 6,
        partTitle: "Inferential Reading",
        partDesc: "Lee el texto e interpreta la opinión, el propósito o sentimientos no explícitos.",
        id: 33,
        quote: "Daniel was walking home when he noticed a wallet on the sidewalk. He opened it carefully and found an identification card inside.<br><br>Instead of keeping the money, Daniel searched for the owner online and contacted her. The next day, he returned the wallet.<br><br>The owner thanked him and told him that she thought she would never see it again.",
        questionText: "What can we infer about Daniel?",
        options: ["He is dishonest.", "He is responsible.", "He is careless.", "He is lazy."],
        correctIndex: 1,
        tema: "Inferential Reading",
        nivel: "B1",
        retroalimentacion: "Aunque el texto nunca califica directamente a Daniel como responsable, sus acciones de buscar activamente a la dueña y devolverle su billetera intacta demuestran honestidad y responsabilidad."
    },
    {
        part: 6,
        partTitle: "Inferential Reading",
        partDesc: "Lee el texto e interpreta la opinión, el propósito o sentimientos no explícitos.",
        id: 34,
        quote: "Daniel was walking home when he noticed a wallet on the sidewalk. He opened it carefully and found an identification card inside.<br><br>Instead of keeping the money, Daniel searched for the owner online and contacted her. The next day, he returned the wallet.<br><br>The owner thanked him and told him that she thought she would never see it again.",
        questionText: "Why did Daniel open the wallet?",
        options: ["To spend the money.", "To find information about the owner.", "To buy something.", "To hide it."],
        correctIndex: 1,
        tema: "Inferential Reading",
        nivel: "B1",
        retroalimentacion: "Abrió la billetera con cuidado y encontró una identificación, lo que indica que buscaba información para identificar y contactar al dueño legítimo."
    },
    {
        part: 6,
        partTitle: "Inferential Reading",
        partDesc: "Lee el texto e interpreta la opinión, el propósito o sentimientos no explícitos.",
        id: 35,
        quote: "Daniel was walking home when he noticed a wallet on the sidewalk. He opened it carefully and found an identification card inside.<br><br>Instead of keeping the money, Daniel searched for the owner online and contacted her. The next day, he returned the wallet.<br><br>The owner thanked him and told him that she thought she would never see it again.",
        questionText: "How did the owner probably feel?",
        options: ["Angry", "Bored", "Relieved", "Confused"],
        correctIndex: 2,
        tema: "Inferential Reading",
        nivel: "B1",
        retroalimentacion: "La dueña pensaba que 'nunca volvería a ver su billetera', por lo que su recuperación inesperada debió causarle un gran alivio ('relieved')."
    },
    {
        part: 6,
        partTitle: "Inferential Reading",
        partDesc: "Lee el texto e interpreta la opinión, el propósito o sentimientos no explícitos.",
        id: 36,
        quote: "Daniel was walking home when he noticed a wallet on the sidewalk. He opened it carefully and found an identification card inside.<br><br>Instead of keeping the money, Daniel searched for the owner online and contacted her. The next day, he returned the wallet.<br><br>The owner thanked him and told him that she thought she would never see it again.",
        questionText: "What was Daniel's main intention?",
        options: ["To help the owner.", "To keep the wallet.", "To sell the wallet.", "To throw it away."],
        correctIndex: 0,
        tema: "Inferential Reading",
        nivel: "B1",
        retroalimentacion: "Toda la secuencia de sus acciones (buscar en línea, contactar a la dueña y devolver la billetera al día siguiente) demuestra su clara intención de ayudar a la dueña."
    },
    {
        part: 6,
        partTitle: "Inferential Reading",
        partDesc: "Lee el texto e interpreta la opinión, el propósito o sentimientos no explícitos.",
        id: 37,
        quote: "Daniel was walking home when he noticed a wallet on the sidewalk. He opened it carefully and found an identification card inside.<br><br>Instead of keeping the money, Daniel searched for the owner online and contacted her. The next day, he returned the wallet.<br><br>The owner thanked him and told him that she thought she would never see it again.",
        questionText: "What lesson does the story teach?",
        options: ["Saving money", "Honesty", "Competition", "Technology"],
        correctIndex: 1,
        tema: "Inferential Reading",
        nivel: "B1",
        retroalimentacion: "La historia destaca la honestidad de Daniel al no quedarse con el dinero ajeno y realizar un esfuerzo para devolverlo."
    },
    {
        part: 6,
        partTitle: "Inferential Reading",
        partDesc: "Lee el texto e interpreta la opinión, el propósito o sentimientos no explícitos.",
        id: 38,
        quote: "Daniel was walking home when he noticed a wallet on the sidewalk. He opened it carefully and found an identification card inside.<br><br>Instead of keeping the money, Daniel searched for the owner online and contacted her. The next day, he returned the wallet.<br><br>The owner thanked him and told him that she thought she would never see it again.",
        questionText: "Why is Daniel's action important?",
        options: ["Because he became famous.", "Because he acted ethically.", "Because he earned money.", "Because he won a prize."],
        correctIndex: 1,
        tema: "Inferential Reading",
        nivel: "B1",
        retroalimentacion: "La devolución de la billetera es importante porque constituye un acto ético y de civismo ejemplar."
    },

    // === PARTE 7: LONG TEXT COMPLETION ===
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_community_service",
        situationTitle: "Proyecto de Servicio Comunitario",
        id: 39,
        quote: "Last month, our school <b><u>[39]</u></b> a community service project. The students, who (40) interested in helping others, volunteered in different activities.<br><br>While some students (41) trees, others (42) the streets. A group of volunteers (43) food to elderly people who lived alone.<br><br>One morning, we (44) a local shelter and (45) with the staff about their needs. They (46) us that many families required additional support.<br><br>At the end of the project, everyone (47) proud of the work we had done. Our principal, who (48) the entire program, (49) that the project was a great success.<br><br>It is an experience that we will always (50).",
        questionText: "Selecciona la opción correcta para el espacio (39):",
        options: ["started", "start", "starting", "starts"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "'Last month' indica un tiempo completamente finalizado en el pasado, por lo cual se requiere el verbo regular en pasado simple: 'started'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_community_service",
        situationTitle: "Proyecto de Servicio Comunitario",
        id: 40,
        quote: "Last month, our school started a community service project. The students, who <b><u>[40]</u></b> interested in helping others, volunteered in different activities.<br><br>While some students (41) trees, others (42) the streets. A group of volunteers (43) food to elderly people who lived alone.<br><br>One morning, we (44) a local shelter and (45) with the staff about their needs. They (46) us that many families required additional support.<br><br>At the end of the project, everyone (47) proud of the work we had done. Our principal, who (48) the entire program, (49) that the project was a great success.<br><br>It is an experience that we will always (50).",
        questionText: "Selecciona la opción correcta para el espacio (40):",
        options: ["was", "were", "are", "is"],
        correctIndex: 1,
        tema: "Verb To Be (Past)",
        nivel: "A2",
        retroalimentacion: "El pronombre relativo 'who' refiere al antecedente plural 'The students'. En pasado simple, el verbo 'To Be' plural es 'were'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_community_service",
        situationTitle: "Proyecto de Servicio Comunitario",
        id: 41,
        quote: "Last month, our school started a community service project. The students, who were interested in helping others, volunteered in different activities.<br><br>While some students <b><u>[41]</u></b> trees, others (42) the streets. A group of volunteers (43) food to elderly people who lived alone.<br><br>One morning, we (44) a local shelter and (45) with the staff about their needs. They (46) us that many families required additional support.<br><br>At the end of the project, everyone (47) proud of the work we had done. Our principal, who (48) the entire program, (49) that the project was a great success.<br><br>It is an experience that we will always (50).",
        questionText: "Selecciona la opción correcta para el espacio (41):",
        options: ["planted", "plant", "were planting", "plants"],
        correctIndex: 2,
        tema: "Past Progressive",
        nivel: "B1",
        retroalimentacion: "El conector 'While' ('mientras') introduce una acción continua en desarrollo en el pasado: 'were planting' (estaban plantando)."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_community_service",
        situationTitle: "Proyecto de Servicio Comunitario",
        id: 42,
        quote: "Last month, our school started a community service project. The students, who were interested in helping others, volunteered in different activities.<br><br>While some students were planting trees, others <b><u>[42]</u></b> the streets. A group of volunteers (43) food to elderly people who lived alone.<br><br>One morning, we (44) a local shelter and (45) with the staff about their needs. They (46) us that many families required additional support.<br><br>At the end of the project, everyone (47) proud of the work we had done. Our principal, who (48) the entire program, (49) that the project was a great success.<br><br>It is an experience that we will always (50).",
        questionText: "Selecciona la opción correcta para el espacio (42):",
        options: ["cleaned", "clean", "cleaning", "cleans"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "Describe una acción finalizada paralela a la anterior. Corresponde el pasado simple regular: 'cleaned'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_community_service",
        situationTitle: "Proyecto de Servicio Comunitario",
        id: 43,
        quote: "Last month, our school started a community service project. The students, who were interested in helping others, volunteered in different activities.<br><br>While some students were planting trees, others cleaned the streets. A group of volunteers <b><u>[43]</u></b> food to elderly people who lived alone.<br><br>One morning, we (44) a local shelter and (45) with the staff about their needs. They (46) us that many families required additional support.<br><br>At the end of the project, everyone (47) proud of the work we had done. Our principal, who (48) the entire program, (49) that the project was a great success.<br><br>It is an experience that we will always (50).",
        questionText: "Selecciona la opción correcta para el espacio (43):",
        options: ["gave", "give", "giving", "gives"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "La entrega de comida es un hecho terminado del proyecto en el pasado. Se requiere el pasado irregular del verbo 'give', que es 'gave'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_community_service",
        situationTitle: "Proyecto de Servicio Comunitario",
        id: 44,
        quote: "Last month, our school started a community service project. The students, who were interested in helping others, volunteered in different activities.<br><br>While some students were planting trees, others cleaned the streets. A group of volunteers gave food to elderly people who lived alone.<br><br>One morning, we <b><u>[44]</u></b> a local shelter and (45) with the staff about their needs. They (46) us that many families required additional support.<br><br>At the end of the project, everyone (47) proud of the work we had done. Our principal, who (48) the entire program, (49) that the project was a great success.<br><br>It is an experience that we will always (50).",
        questionText: "Selecciona la opción correcta para el espacio (44):",
        options: ["visited", "visit", "visiting", "visits"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "La visita al refugio ocurrió en un momento específico en el pasado ('One morning'). Usamos pasado simple: 'visited'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_community_service",
        situationTitle: "Proyecto de Servicio Comunitario",
        id: 45,
        quote: "Last month, our school started a community service project. The students, who were interested in helping others, volunteered in different activities.<br><br>While some students were planting trees, others cleaned the streets. A group of volunteers gave food to elderly people who lived alone.<br><br>One morning, we visited a local shelter and <b><u>[45]</u></b> with the staff about their needs. They (46) us that many families required additional support.<br><br>At the end of the project, everyone (47) proud of the work we had done. Our principal, who (48) the entire program, (49) that the project was a great success.<br><br>It is an experience that we will always (50).",
        questionText: "Selecciona la opción correcta para el espacio (45):",
        options: ["spoke", "speak", "speaking", "speaks"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "Es una acción en pasado coordinada con 'visited'. Se requiere el pasado simple irregular de 'speak', que es 'spoke'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_community_service",
        situationTitle: "Proyecto de Servicio Comunitario",
        id: 46,
        quote: "Last month, our school started a community service project. The students, who were interested in helping others, volunteered in different activities.<br><br>While some students were planting trees, others cleaned the streets. A group of volunteers gave food to elderly people who lived alone.<br><br>One morning, we visited a local shelter and spoke with the staff about their needs. They <b><u>[46]</u></b> us that many families required additional support.<br><br>At the end of the project, everyone (47) proud of the work we had done. Our principal, who (48) the entire program, (49) that the project was a great success.<br><br>It is an experience that we will always (50).",
        questionText: "Selecciona la opción correcta para el espacio (46):",
        options: ["tell", "told", "telling", "tells"],
        correctIndex: 1,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "El personal les contó o informó sobre las familias. Usamos el pasado simple de 'tell', el cual es 'told'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_community_service",
        situationTitle: "Proyecto de Servicio Comunitario",
        id: 47,
        quote: "Last month, our school started a community service project. The students, who were interested in helping others, volunteered in different activities.<br><br>While some students were planting trees, others cleaned the streets. A group of volunteers gave food to elderly people who lived alone.<br><br>One morning, we visited a local shelter and spoke with the staff about their needs. They told us that many families required additional support.<br><br>At the end of the project, everyone <b><u>[47]</u></b> proud of the work we had done. Our principal, who (48) the entire program, (49) that the project was a great success.<br><br>It is an experience that we will always (50).",
        questionText: "Selecciona la opción correcta para el espacio (47):",
        options: ["feel", "felt", "feeling", "feels"],
        correctIndex: 1,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "Se describe la sensación experimentada al finalizar el proyecto. Corresponde el pasado simple irregular del verbo 'feel', que es 'felt'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_community_service",
        situationTitle: "Proyecto de Servicio Comunitario",
        id: 48,
        quote: "Last month, our school started a community service project. The students, who were interested in helping others, volunteered in different activities.<br><br>While some students were planting trees, others cleaned the streets. A group of volunteers gave food to elderly people who lived alone.<br><br>One morning, we visited a local shelter and spoke with the staff about their needs. They told us that many families required additional support.<br><br>At the end of the project, everyone felt proud of the work we had done. Our principal, who <b><u>[48]</u></b> the entire program, (49) that the project was a great success.<br><br>It is an experience that we will always (50).",
        questionText: "Selecciona la opción correcta para el espacio (48):",
        options: ["watched", "watch", "watching", "watches"],
        correctIndex: 0,
        tema: "Relative Clauses + Past Simple",
        nivel: "B1",
        retroalimentacion: "La cláusula relativa adjetiva describe la acción pasada realizada por el director. El término más adecuado es 'watched' (supervisó/vigiló)."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_community_service",
        situationTitle: "Proyecto de Servicio Comunitario",
        id: 49,
        quote: "Last month, our school started a community service project. The students, who were interested in helping others, volunteered in different activities.<br><br>While some students were planting trees, others cleaned the streets. A group of volunteers gave food to elderly people who lived alone.<br><br>One morning, we visited a local shelter and spoke with the staff about their needs. They told us that many families required additional support.<br><br>At the end of the project, everyone felt proud of the work we had done. Our principal, who watched the entire program, <b><u>[49]</u></b> that the project was a great success.<br><br>It is an experience that we will always (50).",
        questionText: "Selecciona la opción correcta para el espacio (49):",
        options: ["said", "say", "saying", "says"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "El director declaró algo formalmente en pasado. El verbo adecuado es 'said' (dijo/afirmó)."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_community_service",
        situationTitle: "Proyecto de Servicio Comunitario",
        id: 50,
        quote: "Last month, our school started a community service project. The students, who were interested in helping others, volunteered in different activities.<br><br>While some students were planting trees, others cleaned the streets. A group of volunteers gave food to elderly people who lived alone.<br><br>One morning, we visited a local shelter and spoke with the staff about their needs. They told us that many families required additional support.<br><br>At the end of the project, everyone felt proud of the work we had done. Our principal, who watched the entire program, said that the project was a great success.<br><br>It is an experience that we will always <b><u>[50]</u></b>.",
        questionText: "Selecciona la opción correcta para el espacio (50):",
        options: ["remember", "remembered", "remembering", "remembers"],
        correctIndex: 0,
        tema: "Infinitive Structures",
        nivel: "B1",
        retroalimentacion: "Después del auxiliar modal de futuro 'will' (en este caso 'will always'), se debe usar obligatoriamente la forma base infinitiva del verbo: 'remember'."
    },
    // === PARTE 7: SITUACIÓN 2 - HISTORIA DEL CHOCOLATE ===
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_chocolate_history",
        situationTitle: "Historia del Chocolate",
        id: 51,
        quote: "Chocolate <b><u>[51]</u></b> a long history, starting in ancient Mesoamerica. For the Maya and Aztecs, cacao seeds were so valuable that they (52) them as money.<br><br>However, they did not eat chocolate as a sweet bar. Instead, they (53) it as a bitter drink mixed with spices.<br><br>When Spanish explorers (54) in the Americas, they discovered this unusual beverage. They (55) it back to Europe in the 16th century.<br><br>At first, the drink was not very popular because of its bitter taste. But after sugar and honey (56) added, it became a favorite drink among the royalty.<br><br>During the Industrial Revolution, new machines (57) to produce solid chocolate. This made chocolate cheaper, so ordinary people could (58) it.<br><br>Today, chocolate is loved worldwide, and scientists (59) that eating moderate amounts of dark chocolate can actually (60) healthy for the heart.",
        questionText: "Selecciona la opción correcta para el espacio (51):",
        options: ["has", "have", "had", "having"],
        correctIndex: 0,
        tema: "Subject-Verb Agreement",
        nivel: "A2",
        retroalimentacion: "Chocolate es un sustantivo incontable singular, por lo cual se conjuga con la tercera persona 'has' en presente simple."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_chocolate_history",
        situationTitle: "Historia del Chocolate",
        id: 52,
        quote: "Chocolate has a long history, starting in ancient Mesoamerica. For the Maya and Aztecs, cacao seeds were so valuable that they <b><u>[52]</u></b> them as money.<br><br>However, they did not eat chocolate as a sweet bar. Instead, they (53) it as a bitter drink mixed with spices.<br><br>When Spanish explorers (54) in the Americas, they discovered this unusual beverage. They (55) it back to Europe in the 16th century.<br><br>At first, the drink was not very popular because of its bitter taste. But after sugar and honey (56) added, it became a favorite drink among the royalty.<br><br>During the Industrial Revolution, new machines (57) to produce solid chocolate. This made chocolate cheaper, so ordinary people could (58) it.<br><br>Today, chocolate is loved worldwide, and scientists (59) that eating moderate amounts of dark chocolate can actually (60) healthy for the heart.",
        questionText: "Selecciona la opción correcta para el espacio (52):",
        options: ["used", "use", "using", "uses"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "El texto se refiere a una costumbre del pasado de los mayas y aztecas, por lo que corresponde el pasado simple 'used'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_chocolate_history",
        situationTitle: "Historia del Chocolate",
        id: 53,
        quote: "Chocolate has a long history, starting in ancient Mesoamerica. For the Maya and Aztecs, cacao seeds were so valuable that they used them as money.<br><br>However, they did not eat chocolate as a sweet bar. Instead, they <b><u>[53]</u></b> it as a bitter drink mixed with spices.<br><br>When Spanish explorers (54) in the Americas, they discovered this unusual beverage. They (55) it back to Europe in the 16th century.<br><br>At first, the drink was not very popular because of its bitter taste. But after sugar and honey (56) added, it became a favorite drink among the royalty.<br><br>During the Industrial Revolution, new machines (57) to produce solid chocolate. This made chocolate cheaper, so ordinary people could (58) it.<br><br>Today, chocolate is loved worldwide, and scientists (59) that eating moderate amounts of dark chocolate can actually (60) healthy for the heart.",
        questionText: "Selecciona la opción correcta para el espacio (53):",
        options: ["drank", "drink", "drunk", "drinking"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "El consumo del chocolate en forma líquida por parte de estas civilizaciones es un hecho pasado finalizado, por lo cual usamos el pasado irregular de 'drink', que es 'drank'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_chocolate_history",
        situationTitle: "Historia del Chocolate",
        id: 54,
        quote: "Chocolate has a long history, starting in ancient Mesoamerica. For the Maya and Aztecs, cacao seeds were so valuable that they used them as money.<br><br>However, they did not eat chocolate as a sweet bar. Instead, they drank it as a bitter drink mixed with spices.<br><br>When Spanish explorers <b><u>[54]</u></b> in the Americas, they discovered this unusual beverage. They (55) it back to Europe in the 16th century.<br><br>At first, the drink was not very popular because of its bitter taste. But after sugar and honey (56) added, it became a favorite drink among the royalty.<br><br>During the Industrial Revolution, new machines (57) to produce solid chocolate. This made chocolate cheaper, so ordinary people could (58) it.<br><br>Today, chocolate is loved worldwide, and scientists (59) that eating moderate amounts of dark chocolate can actually (60) healthy for the heart.",
        questionText: "Selecciona la opción correcta para el espacio (54):",
        options: ["arrived", "arriving", "arrive", "arrives"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "El arribo de los exploradores españoles es un evento histórico puntual en pasado simple. Usamos 'arrived'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_chocolate_history",
        situationTitle: "Historia del Chocolate",
        id: 55,
        quote: "Chocolate has a long history, starting in ancient Mesoamerica. For the Maya and Aztecs, cacao seeds were so valuable that they used them as money.<br><br>However, they did not eat chocolate as a sweet bar. Instead, they drank it as a bitter drink mixed with spices.<br><br>When Spanish explorers arrived in the Americas, they discovered this unusual beverage. They <b><u>[55]</u></b> it back to Europe in the 16th century.<br><br>At first, the drink was not very popular because of its bitter taste. But after sugar and honey (56) added, it became a favorite drink among the royalty.<br><br>During the Industrial Revolution, new machines (57) to produce solid chocolate. This made chocolate cheaper, so ordinary people could (58) it.<br><br>Today, chocolate is loved worldwide, and scientists (59) that eating moderate amounts of dark chocolate can actually (60) healthy for the heart.",
        questionText: "Selecciona la opción correcta para el espacio (55):",
        options: ["brought", "bring", "bringing", "brings"],
        correctIndex: 0,
        tema: "Past Simple",
        nivel: "A2",
        retroalimentacion: "Llevar de vuelta el cacao a Europa en el siglo XVI es una acción del pasado. El pasado simple del verbo irregular 'bring' es 'brought'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_chocolate_history",
        situationTitle: "Historia del Chocolate",
        id: 56,
        quote: "Chocolate has a long history, starting in ancient Mesoamerica. For the Maya and Aztecs, cacao seeds were so valuable that they used them as money.<br><br>However, they did not eat chocolate as a sweet bar. Instead, they drank it as a bitter drink mixed with spices.<br><br>When Spanish explorers arrived in the Americas, they discovered this unusual beverage. They brought it back to Europe in the 16th century.<br><br>At first, the drink was not very popular because of its bitter taste. But after sugar and honey <b><u>[56]</u></b> added, it became a favorite drink among the royalty.<br><br>During the Industrial Revolution, new machines (57) to produce solid chocolate. This made chocolate cheaper, so ordinary people could (58) it.<br><br>Today, chocolate is loved worldwide, and scientists (59) that eating moderate amounts of dark chocolate can actually (60) healthy for the heart.",
        questionText: "Selecciona la opción correcta para el espacio (56):",
        options: ["were", "was", "are", "is"],
        correctIndex: 0,
        tema: "Passive Voice (Past)",
        nivel: "B1",
        retroalimentacion: "La oración está en voz pasiva en pasado. Como el sujeto es compuesto y plural ('sugar and honey'), corresponde el auxiliar en pasado plural 'were'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_chocolate_history",
        situationTitle: "Historia del Chocolate",
        id: 57,
        quote: "Chocolate has a long history, starting in ancient Mesoamerica. For the Maya and Aztecs, cacao seeds were so valuable that they used them as money.<br><br>However, they did not eat chocolate as a sweet bar. Instead, they drank it as a bitter drink mixed with spices.<br><br>When Spanish explorers arrived in the Americas, they discovered this unusual beverage. They brought it back to Europe in the 16th century.<br><br>At first, the drink was not very popular because of its bitter taste. But after sugar and honey were added, it became a favorite drink among the royalty.<br><br>During the Industrial Revolution, new machines <b><u>[57]</u></b> to produce solid chocolate. This made chocolate cheaper, so ordinary people could (58) it.<br><br>Today, chocolate is loved worldwide, and scientists (59) that eating moderate amounts of dark chocolate can actually (60) healthy for the heart.",
        questionText: "Selecciona la opción correcta para el espacio (57):",
        options: ["were invented", "was invented", "invented", "are invented"],
        correctIndex: 0,
        tema: "Passive Voice (Past)",
        nivel: "B1",
        retroalimentacion: "Las máquinas no se inventaron a sí mismas; fueron inventadas. Como 'new machines' es plural y el contexto es pasado, se utiliza 'were invented'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_chocolate_history",
        situationTitle: "Historia del Chocolate",
        id: 58,
        quote: "Chocolate has a long history, starting in ancient Mesoamerica. For the Maya and Aztecs, cacao seeds were so valuable that they used them as money.<br><br>However, they did not eat chocolate as a sweet bar. Instead, they drank it as a bitter drink mixed with spices.<br><br>When Spanish explorers arrived in the Americas, they discovered this unusual beverage. They brought it back to Europe in the 16th century.<br><br>At first, the drink was not very popular because of its bitter taste. But after sugar and honey were added, it became a favorite drink among the royalty.<br><br>During the Industrial Revolution, new machines were invented to produce solid chocolate. This made chocolate cheaper, so ordinary people could <b><u>[58]</u></b> it.<br><br>Today, chocolate is loved worldwide, and scientists (59) that eating moderate amounts of dark chocolate can actually (60) healthy for the heart.",
        questionText: "Selecciona la opción correcta para el espacio (58):",
        options: ["afford", "cost", "spend", "charge"],
        correctIndex: 0,
        tema: "Vocabulary (Verbs)",
        nivel: "B1",
        retroalimentacion: "El verbo 'afford' significa poder permitirse pagar el costo de algo. En el contexto, al abaratarse el chocolate, la gente común ya podía costearlo."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_chocolate_history",
        situationTitle: "Historia del Chocolate",
        id: 59,
        quote: "Chocolate has a long history, starting in ancient Mesoamerica. For the Maya and Aztecs, cacao seeds were so valuable that they used them as money.<br><br>However, they did not eat chocolate as a sweet bar. Instead, they drank it as a bitter drink mixed with spices.<br><br>When Spanish explorers arrived in the Americas, they discovered this unusual beverage. They brought it back to Europe in the 16th century.<br><br>At first, the drink was not very popular because of its bitter taste. But after sugar and honey were added, it became a favorite drink among the royalty.<br><br>During the Industrial Revolution, new machines were invented to produce solid chocolate. This made chocolate cheaper, so ordinary people could afford it.<br><br>Today, chocolate is loved worldwide, and scientists <b><u>[59]</u></b> that eating moderate amounts of dark chocolate can actually (60) healthy for the heart.",
        questionText: "Selecciona la opción correcta para el espacio (59):",
        options: ["believe", "believes", "believed", "believing"],
        correctIndex: 0,
        tema: "Subject-Verb Agreement",
        nivel: "A2",
        retroalimentacion: "El sujeto 'scientists' es plural en tiempo presente ('Today...'). Por lo tanto, el verbo debe concordar en su forma plural base 'believe'."
    },
    {
        part: 7,
        partTitle: "Advanced Cloze Test",
        partDesc: "Completa el texto complejo seleccionando la mejor opción léxica y gramatical para cada espacio.",
        situationId: "p7_chocolate_history",
        situationTitle: "Historia del Chocolate",
        id: 60,
        quote: "Chocolate has a long history, starting in ancient Mesoamerica. For the Maya and Aztecs, cacao seeds were so valuable that they used them as money.<br><br>However, they did not eat chocolate as a sweet bar. Instead, they drank it as a bitter drink mixed with spices.<br><br>When Spanish explorers arrived in the Americas, they discovered this unusual beverage. They brought it back to Europe in the 16th century.<br><br>At first, the drink was not very popular because of its bitter taste. But after sugar and honey were added, it became a favorite drink among the royalty.<br><br>During the Industrial Revolution, new machines were invented to produce solid chocolate. This made chocolate cheaper, so ordinary people could afford it.<br><br>Today, chocolate is loved worldwide, and scientists believe that eating moderate amounts of dark chocolate can actually <b><u>[60]</u></b> healthy for the heart.",
        questionText: "Selecciona la opción correcta para el espacio (60):",
        options: ["be", "been", "is", "are"],
        correctIndex: 0,
        tema: "Infinitive Structures",
        nivel: "B1",
        retroalimentacion: "El verbo auxiliar modal 'can' (junto con el adverbio 'actually') debe ser seguido de un verbo en su forma base infinitiva: 'be'."
    }
];

// Metadatos de las 7 partes oficiales para renderizar en el dashboard
const DEFAULT_ICFES_PARTS_CONFIG = [
    { num: 1, title: "Parte 1: Signs and Notices", desc: "Avisos y carteles. Identifica dónde se encuentra cada aviso de la vida real.", icon: "🏷️" },
    { num: 2, title: "Parte 2: Definitions", desc: "Vocabulario y definiciones. Relaciona palabras con su significado en inglés.", icon: "📖" },
    { num: 3, title: "Parte 3: Short Conversations", desc: "Conversaciones cortas. Elige la mejor respuesta lógica para completar los diálogos.", icon: "💬" },
    { num: 4, title: "Parte 4: Cloze Test (Grammar)", desc: "Textos con espacios. Elige la opción correcta para completar la gramática del texto.", icon: "🔤" },
    { num: 5, title: "Parte 5: Literal Reading", desc: "Lectura literal. Responde preguntas de comprensión sobre textos e información directa.", icon: "📄" },
    { num: 6, title: "Parte 6: Inferential Reading", desc: "Lectura inferencial. Interpreta la opinión, actitud y propósito del autor del texto.", icon: "💡" },
    { num: 7, title: "Parte 7: Advanced Cloze Test", desc: "Textos complejos. Completa oraciones con opciones léxicas y gramaticales avanzadas.", icon: "🧠" }
];

const ICFES_PARTS_CONFIG = buildPartsConfig(
    DEFAULT_ICFES_PARTS_CONFIG,
    window.ICFES_EXTRA_PARTS_CONFIG
);

const ICFES_QUESTIONS = buildQuestionBank(
    ICFES_QUESTIONS_BASE,
    collectExtraQuestions(),
    ICFES_PARTS_CONFIG
);

function buildPartsConfig(defaultParts, extraParts) {
    const merged = new Map();

    defaultParts.forEach(part => {
        merged.set(part.num, { ...part });
    });

    if (Array.isArray(extraParts)) {
        extraParts.forEach(part => {
            if (!part || typeof part !== "object" || typeof part.num !== "number") return;
            const current = merged.get(part.num) || {};
            merged.set(part.num, { ...current, ...part });
        });
    }

    return Array.from(merged.values()).sort((a, b) => a.num - b.num);
}

function collectExtraQuestions() {
    const flatQuestions = Array.isArray(window.ICFES_EXTRA_QUESTIONS)
        ? window.ICFES_EXTRA_QUESTIONS
        : [];

    const byPart = window.ICFES_EXTRA_QUESTIONS_BY_PART;
    const byPartQuestions = [];

    if (byPart && typeof byPart === "object") {
        Object.keys(byPart).forEach(partKey => {
            const partQuestions = byPart[partKey];
            if (!Array.isArray(partQuestions)) return;

            partQuestions.forEach(q => {
                if (!q || typeof q !== "object") return;
                const parsedPart = Number(partKey);
                byPartQuestions.push({
                    ...q,
                    part: Number.isFinite(parsedPart) ? parsedPart : q.part
                });
            });
        });
    }

    return [...flatQuestions, ...byPartQuestions];
}

function getPartMeta(partNum, partsConfig) {
    const partCfg = partsConfig.find(p => p.num === partNum);
    if (!partCfg) {
        return { title: "", desc: "" };
    }

    const rawTitle = partCfg.title || "";
    const cleanedTitle = rawTitle.includes(":")
        ? rawTitle.split(":").slice(1).join(":").trim()
        : rawTitle;

    return {
        title: cleanedTitle,
        desc: partCfg.desc || ""
    };
}

function buildQuestionBank(baseQuestions, extraQuestions, partsConfig) {
    const allQuestions = [...baseQuestions, ...(Array.isArray(extraQuestions) ? extraQuestions : [])];

    return allQuestions
        .filter(q => q && typeof q === "object")
        .map(q => {
            const partMeta = getPartMeta(q.part, partsConfig);

            return {
                ...q,
                quote: typeof q.quote === "string" ? q.quote : "",
                partTitle: q.partTitle || partMeta.title,
                partDesc: q.partDesc || partMeta.desc
            };
        })
        .filter(q => {
            const hasPart = typeof q.part === "number";
            const hasQuestionText = typeof q.questionText === "string" && q.questionText.trim().length > 0;
            const hasOptions = Array.isArray(q.options) && q.options.length >= 2;
            const hasCorrectIndex = Number.isInteger(q.correctIndex);

            return hasPart && hasQuestionText && hasOptions && hasCorrectIndex;
        });
}

// Estado global de la sesión
let currentPartQuestions = [];
let currentPartNum = null;
let currentBlockId = null; // Guardará el ID del bloque activo, si existe
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Guarda: { questionId, selectedIndex, correctIndex, isCorrect }

// Al cargar el documento
document.addEventListener("DOMContentLoaded", () => {
    initDashboard();
    setupEventListeners();
});

// Inicializar el Dashboard principal de ICFES
function initDashboard() {
    renderHeroStats();
    renderGlobalScore();
    renderPartCards();
}

function renderHeroStats() {
    const partsCountEl = document.getElementById("hero-parts-count");
    const questionsCountEl = document.getElementById("hero-questions-count");

    if (partsCountEl) {
        partsCountEl.innerText = String(ICFES_PARTS_CONFIG.length);
    }

    if (questionsCountEl) {
        questionsCountEl.innerText = String(ICFES_QUESTIONS.length);
    }
}

function getAutoBlockSizeForPart(partNum) {
    const partCfg = ICFES_PARTS_CONFIG.find(p => p.num === partNum);
    if (partCfg && Number.isInteger(partCfg.autoBlockSize) && partCfg.autoBlockSize > 1) {
        return partCfg.autoBlockSize;
    }

    // Tamaños recomendados para evitar pruebas demasiado largas por parte
    const defaults = {
        1: 5,
        2: 5,
        3: 5,
        4: 8,
        5: 8,
        6: 6,
        7: 8
    };

    return defaults[partNum] || 6;
}

function getQuestionBlockId(question) {
    return question.blockId || question.situationId || null;
}

function getQuestionBlockTitle(question, indexInPart) {
    return question.blockTitle || question.situationTitle || `Bloque ${indexInPart + 1}`;
}

function getBlockResultKey(partNum, blockId) {
    return `icfes_part_${partNum}_block_${blockId}_result`;
}

function getLegacySituationResultKey(partNum, blockId) {
    return `icfes_part_${partNum}_situation_${blockId}_result`;
}

function readBlockResult(partNum, blockId) {
    const blockResult = JSON.parse(localStorage.getItem(getBlockResultKey(partNum, blockId)));
    if (blockResult) return blockResult;

    const legacySituationResult = JSON.parse(localStorage.getItem(getLegacySituationResultKey(partNum, blockId)));
    if (legacySituationResult) return legacySituationResult;

    // Compatibilidad con versiones antiguas que guardaban progreso por parte.
    if (typeof blockId === "string" && blockId.endsWith("_general")) {
        const legacyPartResult = JSON.parse(localStorage.getItem(`icfes_part_${partNum}_result`));
        if (legacyPartResult) return legacyPartResult;
    }

    return null;
}

function getBlocksForPart(partNum) {
    const partQs = ICFES_QUESTIONS.filter(q => q.part === partNum);
    const explicitBlocksMap = new Map();
    const ungroupedQuestions = [];

    partQs.forEach((q, idx) => {
        const explicitBlockId = getQuestionBlockId(q);

        if (explicitBlockId) {
            if (!explicitBlocksMap.has(explicitBlockId)) {
                explicitBlocksMap.set(explicitBlockId, {
                    id: explicitBlockId,
                    title: getQuestionBlockTitle(q, explicitBlocksMap.size),
                    questions: [],
                    order: idx
                });
            }

            explicitBlocksMap.get(explicitBlockId).questions.push(q);
        } else {
            ungroupedQuestions.push(q);
        }
    });

    const blocks = Array.from(explicitBlocksMap.values());

    if (ungroupedQuestions.length > 0) {
        const autoBlockSize = getAutoBlockSizeForPart(partNum);

        if (explicitBlocksMap.size === 0 && ungroupedQuestions.length > autoBlockSize) {
            for (let i = 0; i < ungroupedQuestions.length; i += autoBlockSize) {
                const chunk = ungroupedQuestions.slice(i, i + autoBlockSize);
                const blockNumber = Math.floor(i / autoBlockSize) + 1;

                blocks.push({
                    id: `part_${partNum}_block_${blockNumber}`,
                    title: `Bloque ${blockNumber}`,
                    questions: chunk,
                    order: i + 10000
                });
            }
        } else {
            blocks.push({
                id: `part_${partNum}_general`,
                title: "Bloque General",
                questions: ungroupedQuestions,
                order: 10000
            });
        }
    }

    return blocks.sort((a, b) => a.order - b.order);
}

// Calcular y mostrar el puntaje global dinámicamente
function renderGlobalScore() {
    let totalQuestionsAnswered = 0;
    let totalCorrect = 0;

    const partNumbers = ICFES_PARTS_CONFIG.map(p => p.num);

    partNumbers.forEach(p => {
        const blocks = getBlocksForPart(p);
        if (blocks.length > 0) {
            blocks.forEach(block => {
                const result = readBlockResult(p, block.id);
                if (result) {
                    totalQuestionsAnswered += result.total;
                    totalCorrect += result.score;
                }
            });
        } else {
            const partResult = JSON.parse(localStorage.getItem(`icfes_part_${p}_result`));
            if (partResult) {
                totalQuestionsAnswered += partResult.total;
                totalCorrect += partResult.score;
            }
        }
    });

    const bannerEl = document.getElementById("global-banner-container");
    if (totalQuestionsAnswered > 0) {
        const accuracy = Math.round((totalCorrect / totalQuestionsAnswered) * 100);
        bannerEl.innerHTML = `
            <div class="global-banner">
                <div>
                    <h3>🏆 Rendimiento General</h3>
                    <p>Has respondido ${totalQuestionsAnswered} preguntas en total con un ${accuracy}% de aciertos.</p>
                </div>
                <div class="global-score-display">${totalCorrect} / ${totalQuestionsAnswered}</div>
            </div>
        `;
    } else {
        bannerEl.innerHTML = `
            <div class="global-banner">
                <div>
                    <h3>🎯 Comienza tu Preparación Saber 11</h3>
                    <p>Completa las diferentes partes del simulacro para ver tu progreso global en tiempo real.</p>
                </div>
                <div class="global-score-display">0%</div>
            </div>
        `;
    }
}

// Renderizar tarjetas de las 7 partes en el dashboard
function renderPartCards() {
    const gridEl = document.getElementById("parts-grid");
    gridEl.innerHTML = "";

    ICFES_PARTS_CONFIG.forEach(part => {
        const card = document.createElement("div");
        card.className = "part-card";
        
        // Si es una parte aún no provista por el usuario, la mostramos desactivada
        const isComingSoon = part.comingSoon;
        
        // Contar cuántas preguntas de esta parte tenemos en la base local
        const totalLocalQs = ICFES_QUESTIONS.filter(q => q.part === part.num).length;

        // Obtener datos guardados de progreso
        const blocks = getBlocksForPart(part.num);
        
        let isCompleted = false;
        let progressPercent = 0;
        let statusBadge = `<span class="part-status-badge pending">Pendiente</span>`;
        let footerText = `<span class="part-questions-count">${totalLocalQs} preguntas</span>`;

        if (blocks.length > 1) {
            let completedBlocks = 0;
            let totalBlocksScore = 0;
            let totalBlocksQuestions = 0;

            blocks.forEach(block => {
                const res = readBlockResult(part.num, block.id);
                if (res) {
                    completedBlocks++;
                    totalBlocksScore += res.score;
                    totalBlocksQuestions += res.total;
                }
            });

            progressPercent = Math.round((completedBlocks / blocks.length) * 100);
            isCompleted = (completedBlocks === blocks.length);
            
            if (isCompleted) {
                card.classList.add("completed");
                statusBadge = `<span class="part-status-badge done">¡Completado!</span>`;
                footerText = `
                    <span class="part-questions-count">${completedBlocks}/${blocks.length} bloques</span>
                    <span class="part-score-display">Puntaje: ${totalBlocksScore}/${totalBlocksQuestions}</span>
                `;
            } else if (completedBlocks > 0) {
                statusBadge = `<span class="part-status-badge pending" style="background: rgba(245,158,11,0.1); color: var(--icfes-accent); border: 1px solid rgba(245,158,11,0.2);">${completedBlocks}/${blocks.length} hechas</span>`;
                footerText = `
                    <span class="part-questions-count">${completedBlocks}/${blocks.length} bloques</span>
                    <span class="part-score-display" style="color: var(--icfes-accent);">Progreso: ${progressPercent}%</span>
                `;
            } else {
                footerText = `<span class="part-questions-count">${blocks.length} bloques</span>`;
            }
        } else {
            let result = null;
            if (blocks.length === 1) {
                result = readBlockResult(part.num, blocks[0].id);
            } else {
                result = JSON.parse(localStorage.getItem(`icfes_part_${part.num}_result`));
            }

            isCompleted = !!result;
            if (isCompleted) {
                card.classList.add("completed");
                progressPercent = 100;
                statusBadge = `<span class="part-status-badge done">¡Completado!</span>`;
                footerText = `
                    <span class="part-questions-count">${totalLocalQs} preguntas</span>
                    <span class="part-score-display">Puntaje: ${result.score}/${result.total}</span>
                `;
            }
        }

        if (isComingSoon) {
            statusBadge = `<span class="part-status-badge pending" style="background: rgba(239,68,68,0.1); color: var(--red); border: 1px solid rgba(239,68,68,0.2);">Próximamente</span>`;
            footerText = `<span class="part-questions-count">Espera las preguntas</span>`;
            progressPercent = 0;
        }

        card.innerHTML = `
            <div class="part-card-header">
                <span class="part-number">Parte ${part.num}</span>
                ${statusBadge}
            </div>
            <div class="part-icon">${part.icon}</div>
            <h3>${part.title}</h3>
            <p>${part.desc}</p>
            <div class="part-progress-bar">
                <div class="part-progress-fill" style="width: ${progressPercent}%"></div>
            </div>
            <div class="part-card-footer">
                ${footerText}
            </div>
        `;

        if (!isComingSoon) {
            card.addEventListener("click", () => startPartQuiz(part.num));
        } else {
            card.style.opacity = "0.7";
            card.style.cursor = "default";
        }

        gridEl.appendChild(card);
    });
}

// Configurar los manejadores de eventos de la interfaz
function setupEventListeners() {
    document.getElementById("quiz-back-btn").addEventListener("click", exitQuiz);
    document.getElementById("btn-back-parts").addEventListener("click", exitQuiz);
    document.getElementById("quiz-next-btn").addEventListener("click", nextQuestion);
    document.getElementById("situation-back-btn").addEventListener("click", exitSituationSelect);
}

// Mostrar la vista de selección de bloques
function showSituationSelect(partNum) {
    currentPartNum = partNum;
    const partConfig = ICFES_PARTS_CONFIG.find(p => p.num === partNum);
    
    document.getElementById("situation-part-title").innerText = `Parte ${partNum}: ${partConfig ? partConfig.title : ''}`;
    document.getElementById("situation-view-title").innerText = `Practicar por Bloques`;
    document.getElementById("situation-view-desc").innerText = `Selecciona un bloque de preguntas de la ${partConfig ? partConfig.title.split(":")[0] : 'sección'} para comenzar tu práctica.`;
    
    const gridEl = document.getElementById("situations-grid");
    gridEl.innerHTML = "";

    const blocks = getBlocksForPart(partNum);

    blocks.forEach(block => {
        const card = document.createElement("div");
        card.className = "situation-card";

        const result = readBlockResult(partNum, block.id);
        const isCompleted = !!result;

        if (isCompleted) {
            card.classList.add("completed");
        }

        let statusBadge = `<span class="situation-badge pending">Pendiente</span>`;
        let scoreInfo = "";
        let buttonText = "Comenzar Práctica";

        if (isCompleted) {
            statusBadge = `<span class="situation-badge completed">Completado</span>`;
            scoreInfo = `<span class="situation-score-info">Puntaje: ${result.score}/${result.total}</span>`;
            buttonText = "Repetir Práctica";
        }

        let sitIcon = "🧩";
        if (block.id.includes("chocolate")) sitIcon = "🍫";
        else if (block.id.includes("service") || block.id.includes("community")) sitIcon = "🤝";
        else if (block.id.includes("beach")) sitIcon = "🏖️";
        else if (block.id.includes("museum")) sitIcon = "🏛️";
        else if (block.id.includes("wallet")) sitIcon = "👛";
        else if (block.id.includes("storm")) sitIcon = "⛈️";
        else if (block.id.includes("park")) sitIcon = "🌲";

        const level = block.questions[0] ? block.questions[0].nivel : "A2";

        card.innerHTML = `
            <div class="situation-card-header">
                <span style="font-size: 2.2rem;">${sitIcon}</span>
                ${statusBadge}
            </div>
            <h3>${block.title}</h3>
            <p>Completa este bloque para avanzar en tu progreso de la parte.</p>
            <div class="situation-card-meta">
                <span class="sit-meta-item">📊 Nivel ${level}</span>
                <span class="sit-meta-item">❓ ${block.questions.length} preguntas</span>
                ${scoreInfo}
            </div>
            <button class="btn-start-situation" style="margin-top: 1rem;">${buttonText}</button>
        `;

        card.addEventListener("click", () => startSituationQuiz(partNum, block.id));
        gridEl.appendChild(card);
    });

    document.getElementById("dashboard-view").classList.add("hidden");
    document.getElementById("quiz-view").classList.add("hidden");
    document.getElementById("results-view").classList.add("hidden");
    document.getElementById("situation-select-view").classList.remove("hidden");
}

// Salir del selector de bloques y volver al dashboard
function exitSituationSelect() {
    document.getElementById("situation-select-view").classList.add("hidden");
    document.getElementById("dashboard-view").classList.remove("hidden");
    initDashboard();
}

// Iniciar una sección/parte del simulacro (con ruteo por bloques)
function startPartQuiz(partNum) {
    const blocks = getBlocksForPart(partNum);

    // Si tiene más de un bloque, redirigir al selector
    if (blocks.length > 1) {
        showSituationSelect(partNum);
        return;
    }

    // Si tiene exactamente un bloque, iniciarlo directamente
    if (blocks.length === 1) {
        startSituationQuiz(partNum, blocks[0].id);
        return;
    }

    currentPartQuestions = ICFES_QUESTIONS.filter(q => q.part === partNum);
    
    if (currentPartQuestions.length === 0) {
        alert("Aún no hay preguntas cargadas para esta sección. ¡Pronto estarán listas!");
        return;
    }

    currentPartNum = partNum;
    currentBlockId = null;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    // Ocultar Dashboard, Selector y Resultados; mostrar Quiz
    document.getElementById("dashboard-view").classList.add("hidden");
    document.getElementById("situation-select-view").classList.add("hidden");
    document.getElementById("results-view").classList.add("hidden");
    document.getElementById("quiz-view").classList.remove("hidden");

    // Actualizar metadata de cabecera del Quiz
    document.getElementById("quiz-part-title").innerText = `Parte ${partNum}: ${ICFES_PARTS_CONFIG[partNum-1].title}`;
    document.getElementById("quiz-score-num").innerText = "0";

    loadQuestion();
}

// Iniciar práctica de una situación específica
function startSituationQuiz(partNum, blockId) {
    const blocks = getBlocksForPart(partNum);
    const block = blocks.find(s => s.id === blockId);

    if (!block) {
        alert("Error al cargar el bloque seleccionado.");
        return;
    }

    currentPartQuestions = block.questions;
    currentPartNum = partNum;
    currentBlockId = blockId;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    document.getElementById("dashboard-view").classList.add("hidden");
    document.getElementById("situation-select-view").classList.add("hidden");
    document.getElementById("results-view").classList.add("hidden");
    document.getElementById("quiz-view").classList.remove("hidden");

    document.getElementById("quiz-part-title").innerText = `Parte ${partNum}: ${block.title}`;
    document.getElementById("quiz-score-num").innerText = "0";

    loadQuestion();
}

// Cargar la pregunta actual
function loadQuestion() {
    const question = currentPartQuestions[currentQuestionIndex];
    
    // Actualizar barra de progreso del Quiz
    const totalQs = currentPartQuestions.length;
    const progressPercent = ((currentQuestionIndex) / totalQs) * 100;
    document.getElementById("quiz-progress-fill").style.width = `${progressPercent}%`;
    document.getElementById("quiz-progress-text").innerText = `Pregunta ${currentQuestionIndex + 1} de ${totalQs}`;

    // Renderizar tags (tema y nivel)
    const tagsRow = document.getElementById("q-tags");
    tagsRow.innerHTML = `
        <span class="q-tag q-tag-tema">🏷️ ${question.tema}</span>
        <span class="q-tag q-tag-nivel">📊 Nivel ${question.nivel}</span>
        <span class="q-number-badge">Pregunta ${question.id}</span>
    `;

    // Renderizar cuerpo de la pregunta
    const textContainer = document.getElementById("q-text-container");
    if (question.quote && question.quote.trim() !== "") {
        textContainer.innerHTML = `
            <div class="quote-text">${question.quote}</div>
            <div class="question-stem">${question.questionText}</div>
        `;
    } else {
        textContainer.innerHTML = `
            <div class="question-stem" style="font-size: 1.25rem; font-weight: 600; color: var(--text-primary);">${question.questionText}</div>
        `;
    }

    // Renderizar opciones de respuesta
    const optionsContainer = document.getElementById("options-list");
    optionsContainer.innerHTML = "";

    const letterLabels = ["A", "B", "C", "D"];

    question.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `
            <span class="option-letter">${letterLabels[idx]}</span>
            <span class="option-text">${opt}</span>
            <span class="option-icon"></span>
        `;
        btn.addEventListener("click", () => selectOption(idx));
        optionsContainer.appendChild(btn);
    });

    // Resetear panel de feedback y botón Siguiente
    document.getElementById("quiz-feedback-container").innerHTML = "";
    document.getElementById("quiz-next-btn").classList.add("hidden");
}

// Acción al seleccionar una opción
function selectOption(selectedIndex) {
    const question = currentPartQuestions[currentQuestionIndex];
    const optionsContainer = document.getElementById("options-list");
    const optionButtons = optionsContainer.querySelectorAll(".option-btn");
    
    // Deshabilitar todas las opciones
    optionButtons.forEach(btn => btn.disabled = true);

    const isCorrect = selectedIndex === question.correctIndex;
    if (isCorrect) {
        score++;
        document.getElementById("quiz-score-num").innerText = score;
    }

    // Registrar respuesta del usuario
    userAnswers.push({
        questionId: question.id,
        selectedIndex: selectedIndex,
        correctIndex: question.correctIndex,
        isCorrect: isCorrect
    });

    const letterLabels = ["A", "B", "C", "D"];

    // Aplicar estilos visuales a las respuestas
    optionButtons.forEach((btn, idx) => {
        const iconSpan = btn.querySelector(".option-icon");
        if (idx === question.correctIndex) {
            btn.classList.add("correct");
            iconSpan.innerText = "✅";
        } else if (idx === selectedIndex && !isCorrect) {
            btn.classList.add("incorrect");
            iconSpan.innerText = "❌";
        }
    });

    // Renderizar retroalimentación
    const feedbackContainer = document.getElementById("quiz-feedback-container");
    const fbBox = document.createElement("div");
    
    if (isCorrect) {
        fbBox.className = "feedback-box correct-fb";
        fbBox.innerHTML = `
            <span class="feedback-emoji">🎉</span>
            <div class="feedback-content">
                <div class="feedback-title">¡Respuesta Correcta!</div>
                <div class="feedback-text">${question.retroalimentacion}</div>
            </div>
        `;
    } else {
        fbBox.className = "feedback-box incorrect-fb";
        fbBox.innerHTML = `
            <span class="feedback-emoji">💡</span>
            <div class="feedback-content">
                <div class="feedback-title">Respuesta Incorrecta</div>
                <div class="feedback-text">${question.retroalimentacion}</div>
                <div class="feedback-correct-answer">Respuesta correcta: ${letterLabels[question.correctIndex]}) ${question.options[question.correctIndex]}</div>
            </div>
        `;
    }
    feedbackContainer.appendChild(fbBox);

    // Configurar y revelar el botón Siguiente
    const nextBtn = document.getElementById("quiz-next-btn");
    const isLast = currentQuestionIndex === currentPartQuestions.length - 1;
    if (isLast) {
        nextBtn.innerHTML = `🏁 Terminar Práctica →`;
        nextBtn.className = "quiz-next-btn finish-btn";
    } else {
        nextBtn.innerHTML = `Siguiente Pregunta ➡️`;
        nextBtn.className = "quiz-next-btn";
    }
    nextBtn.classList.remove("hidden");
}

// Pasar a la siguiente pregunta o mostrar resultados
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentPartQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Mostrar los resultados de la sección finalizada
function showResults() {
    // Guardar progreso en LocalStorage
    const totalQs = currentPartQuestions.length;
    if (currentBlockId) {
        localStorage.setItem(getBlockResultKey(currentPartNum, currentBlockId), JSON.stringify({
            score: score,
            total: totalQs
        }));
    } else {
        localStorage.setItem(`icfes_part_${currentPartNum}_result`, JSON.stringify({
            score: score,
            total: totalQs
        }));
    }

    // Ocultar Quiz, mostrar resultados
    document.getElementById("quiz-view").classList.add("hidden");
    document.getElementById("results-view").classList.remove("hidden");

    // Emoji y mensaje basado en rendimiento
    const percent = Math.round((score / totalQs) * 100);
    let emoji = "👨‍🎓";
    let title = "Buen intento";
    let sub = "Sigue practicando para mejorar tu puntaje en el examen oficial.";

    if (percent === 100) {
        emoji = "🥇";
        title = "¡Puntaje Perfecto!";
        sub = "¡Excelente nivel! Estás listo para esta sección de la prueba oficial.";
    } else if (percent >= 80) {
        emoji = "🌟";
        title = "¡Gran trabajo!";
        sub = "Tienes un dominio excelente de este tipo de preguntas.";
    } else if (percent >= 60) {
        emoji = "👍";
        title = "¡Buen esfuerzo!";
        sub = "Vas por buen camino, repasa los errores para asegurar el éxito.";
    }

    document.getElementById("res-emoji").innerText = emoji;
    document.getElementById("res-title").innerText = title;
    document.getElementById("res-subtitle").innerText = sub;
    document.getElementById("res-score-big").innerText = `${score} / ${totalQs}`;
    
    // Stats numéricas
    document.getElementById("res-correct-val").innerText = score;
    document.getElementById("res-incorrect-val").innerText = totalQs - score;

    // Configurar botón Volver a Bloques o Secciones
    const backBtn = document.getElementById("btn-back-parts");
    const blocks = getBlocksForPart(currentPartNum);
    if (blocks.length > 1) {
        backBtn.innerText = "📋 Volver a Bloques";
    } else {
        backBtn.innerText = "📋 Volver a Secciones";
    }

    // Configurar el botón de reintentar
    const retryBtn = document.getElementById("btn-retry");
    retryBtn.onclick = () => {
        if (currentBlockId) {
            startSituationQuiz(currentPartNum, currentBlockId);
        } else {
            startPartQuiz(currentPartNum);
        }
    };

    // Configurar el botón de avanzar al siguiente bloque o a la siguiente parte
    const nextPartBtn = document.getElementById("btn-next-part");
    let nextBlockId = null;

    if (currentBlockId) {
        const currentBlockIndex = blocks.findIndex(s => s.id === currentBlockId);
        if (currentBlockIndex !== -1 && currentBlockIndex < blocks.length - 1) {
            nextBlockId = blocks[currentBlockIndex + 1].id;
        }
    }

    if (nextBlockId) {
        nextPartBtn.innerText = `Siguiente Bloque ➡️`;
        nextPartBtn.disabled = false;
        nextPartBtn.onclick = () => startSituationQuiz(currentPartNum, nextBlockId);
    } else {
        const nextPartConfig = ICFES_PARTS_CONFIG[currentPartNum]; // índice de la siguiente parte (num es index + 1)
        if (nextPartConfig && !nextPartConfig.comingSoon) {
            nextPartBtn.innerText = `Iniciar Parte ${nextPartConfig.num} ➡️`;
            nextPartBtn.disabled = false;
            nextPartBtn.onclick = () => startPartQuiz(nextPartConfig.num);
        } else {
            nextPartBtn.innerText = `Siguiente Parte Bloqueada`;
            nextPartBtn.disabled = true;
        }
    }

    // Renderizar la revisión detallada de respuestas dadas
    renderReviewSection();
}

// Crear sección de revisión interactiva de respuestas dadas
function renderReviewSection() {
    const reviewList = document.getElementById("review-questions-list");
    reviewList.innerHTML = "";

    const letterLabels = ["A", "B", "C", "D"];

    currentPartQuestions.forEach((q, idx) => {
        const ans = userAnswers[idx];
        const item = document.createElement("div");
        item.className = `review-item ${ans.isCorrect ? 'r-correct' : 'r-incorrect'}`;
        
        let headerText = ans.isCorrect ? "✓ Pregunta Correcta" : "✗ Pregunta Incorrecta";
        let subDetails = "";

        if (!ans.isCorrect) {
            subDetails = `
                <div class="review-your-answer">Tu respuesta: ${letterLabels[ans.selectedIndex]}) ${q.options[ans.selectedIndex]}</div>
            `;
        }

        item.innerHTML = `
            <div class="review-item-header">
                <span>${ans.isCorrect ? '🟢' : '🔴'}</span>
                <span>Pregunta ${q.id}: ${headerText}</span>
            </div>
            <div class="review-q-text">
                ${q.quote ? `<div class="quote-text" style="font-size:0.85rem; padding: 0.4rem 0.6rem; margin-bottom: 0.4rem;">${q.quote}</div>` : ''}
                ${q.questionText}
            </div>
            ${subDetails}
            <div class="review-correct-answer">Respuesta correcta: ${letterLabels[q.correctIndex]}) ${q.options[q.correctIndex]}</div>
            <div class="review-feedback">Explicación: ${q.retroalimentacion}</div>
        `;
        reviewList.appendChild(item);
    });
}

// Salir del Quiz y retornar a la vista adecuada
function exitQuiz() {
    document.getElementById("quiz-view").classList.add("hidden");
    document.getElementById("results-view").classList.add("hidden");
    
    const blocks = getBlocksForPart(currentPartNum);
    if (blocks.length > 1) {
        showSituationSelect(currentPartNum);
    } else {
        document.getElementById("situation-select-view").classList.add("hidden");
        document.getElementById("dashboard-view").classList.remove("hidden");
        initDashboard();
    }
}
