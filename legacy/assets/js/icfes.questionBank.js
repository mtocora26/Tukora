/*
 * Extensiones del simulacro ICFES.
 *
 * Agrega aqui nuevas preguntas sin tocar el archivo principal icfes.js.
 *
 * Soporta 2 formatos:
 * 1) Lista plana: window.ICFES_EXTRA_QUESTIONS = [ ...preguntas... ]
 * 2) Por parte:   window.ICFES_EXTRA_QUESTIONS_BY_PART = { 1: [...], 2: [...], ... }
 *
 * Campos recomendados por pregunta:
 * - part (number)
 * - id (number unico dentro de la parte)
 * - questionText (string)
 * - options (array de 3 o 4 opciones)
 * - correctIndex (indice de la opcion correcta)
 * - tema (string)
 * - nivel (string)
 * - retroalimentacion (string)
 *
 * Campos opcionales:
 * - quote (string)
 * - situationId (string)
 * - situationTitle (string)
 * - partTitle (string)
 * - partDesc (string)
 */

window.ICFES_EXTRA_PARTS_CONFIG = [
    // Ejemplo para personalizar parte existente:
    // {
    //   num: 4,
    //   title: "Parte 4: Cloze Test (Grammar)",
    //   desc: "Nuevo texto descriptivo para esta parte.",
    //   icon: "🔤"
    // }
];

window.ICFES_EXTRA_QUESTIONS = [
    // Ejemplo (lista plana):
    // {
    //   part: 1,
    //   id: 101,
    //   quote: "Passengers with small children can board first.",
    //   questionText: "¿Dónde verías este aviso?",
    //   options: ["Airport", "Restaurant", "Hospital", "Library"],
    //   correctIndex: 0,
    //   tema: "Vocabulary in Context",
    //   nivel: "A2",
    //   retroalimentacion: "La palabra 'Passengers' indica contexto de aeropuerto."
    // }
];

window.ICFES_EXTRA_QUESTIONS_BY_PART = {
    1: [
        {
            part: 1,
            id: 101,
            quote: "Visitors who touch the paintings will be asked to leave immediately.",
            questionText: "¿Dónde verías este aviso?",
            options: ["Library", "Museum", "Hospital", "Airport"],
            correctIndex: 1,
            tema: "Relative Clauses + Vocabulary",
            nivel: "A2",
            retroalimentacion: "Las pinturas suelen exhibirse en museos. La clausula relativa 'who touch the paintings' describe a los visitantes."
        },
        {
            part: 1,
            id: 102,
            quote: "Passengers whose train leaves at 7:30 should go to Platform 4.",
            questionText: "¿Dónde verías este aviso?",
            options: ["Bus Terminal", "School", "Train Station", "Hotel"],
            correctIndex: 2,
            tema: "Relative Clauses",
            nivel: "A2",
            retroalimentacion: "Las palabras 'train' y 'platform' son caracteristicas de una estacion de tren."
        },
        {
            part: 1,
            id: 103,
            quote: "Students who borrowed books last month must return them before Friday.",
            questionText: "¿Dónde verías este aviso?",
            options: ["Library", "Gym", "Restaurant", "Bank"],
            correctIndex: 0,
            tema: "Vocabulary in Context",
            nivel: "A2",
            retroalimentacion: "Pedir prestados y devolver libros son actividades tipicas de una biblioteca."
        },
        {
            part: 1,
            id: 104,
            quote: "Drivers who park in this area without permission will receive a fine.",
            questionText: "¿Dónde verías este aviso?",
            options: ["Stadium", "Parking Lot", "Hospital", "Cinema"],
            correctIndex: 1,
            tema: "Vocabulary in Context",
            nivel: "A2",
            retroalimentacion: "Las multas por estacionamiento suelen estar relacionadas con zonas de parqueo."
        },
        {
            part: 1,
            id: 105,
            quote: "Researchers who enter the laboratory must wear safety glasses.",
            questionText: "¿Dónde verías este aviso?",
            options: ["Factory", "School Lab", "Supermarket", "Museum"],
            correctIndex: 1,
            tema: "Vocabulary + Relative Clauses",
            nivel: "A2",
            retroalimentacion: "Los laboratorios requieren medidas de seguridad como gafas protectoras."
        }
    ],
    2: [
        {
            part: 2,
            id: 106,
            quote: "",
            questionText: "A person who designs and builds machines or systems.",
            options: ["Cook", "Engineer", "Driver", "Farmer"],
            correctIndex: 1,
            tema: "Vocabulary",
            nivel: "A2",
            retroalimentacion: "Los ingenieros disenan y desarrollan sistemas, maquinas o soluciones tecnologicas."
        },
        {
            part: 2,
            id: 107,
            quote: "",
            questionText: "To choose one thing instead of another.",
            options: ["Carry", "Choose", "Wait", "Build"],
            correctIndex: 1,
            tema: "Vocabulary",
            nivel: "A2",
            retroalimentacion: "'Choose' significa seleccionar una opcion entre varias alternativas."
        },
        {
            part: 2,
            id: 108,
            quote: "",
            questionText: "To arrive at the same place as another person.",
            options: ["Meet", "Leave", "Keep", "Remember"],
            correctIndex: 0,
            tema: "Vocabulary",
            nivel: "A2",
            retroalimentacion: "'Meet' significa encontrarse con alguien."
        },
        {
            part: 2,
            id: 109,
            quote: "",
            questionText: "Something that is used to transport people by air.",
            options: ["Bicycle", "Bus", "Airplane", "Train"],
            correctIndex: 2,
            tema: "Vocabulary",
            nivel: "A2",
            retroalimentacion: "Un avion es un medio de transporte aereo."
        },
        {
            part: 2,
            id: 110,
            quote: "",
            questionText: "To continue having something and not lose it.",
            options: ["Bring", "Keep", "Sell", "Break"],
            correctIndex: 1,
            tema: "Vocabulary",
            nivel: "A2",
            retroalimentacion: "'Keep' significa conservar o mantener algo en posesion."
        }
    ],
    3: [
        {
            part: 3,
            id: 111,
            quote: "- What were you doing when the teacher arrived?",
            questionText: "Completa el dialogo:",
            options: ["I completed the exercise.", "I was completing the exercise.", "I complete the exercise.", "I am completing the exercise."],
            correctIndex: 1,
            tema: "Past Simple vs Past Progressive",
            nivel: "B1",
            retroalimentacion: "La pregunta usa 'What were you doing...?', por lo que la respuesta debe ir en accion en progreso en pasado: Past Progressive."
        },
        {
            part: 3,
            id: 112,
            quote: "- Who is the student who won the robotics competition?",
            questionText: "Completa el dialogo:",
            options: ["He my cousin.", "He was my cousin.", "He is my cousin.", "He cousin."],
            correctIndex: 2,
            tema: "Relative Clauses",
            nivel: "A2",
            retroalimentacion: "La clausula relativa identifica a la persona, y la respuesta correcta requiere el verbo 'is'."
        },
        {
            part: 3,
            id: 113,
            quote: "- Did you enjoy the science fair?",
            questionText: "Completa el dialogo:",
            options: ["Yes, I was.", "Yes, I did.", "Yes, I do.", "Yes, I enjoying it."],
            correctIndex: 1,
            tema: "Past Simple",
            nivel: "A2",
            retroalimentacion: "Las preguntas que comienzan con 'Did' se responden con 'did'."
        },
        {
            part: 3,
            id: 114,
            quote: "- Why did Sarah leave early?",
            questionText: "Completa el dialogo:",
            options: ["Because she felt sick.", "Because she feel sick.", "Because she was feel sick.", "Because she feeling sick."],
            correctIndex: 0,
            tema: "Past Simple",
            nivel: "A2",
            retroalimentacion: "La razon ocurrio en el pasado. El pasado de 'feel' es 'felt'."
        },
        {
            part: 3,
            id: 115,
            quote: "- What happened while you were waiting for the bus?",
            questionText: "Completa el dialogo:",
            options: ["It starts raining.", "It was raining.", "It started raining.", "It start rain."],
            correctIndex: 2,
            tema: "While + Past Simple vs Past Progressive",
            nivel: "B1",
            retroalimentacion: "La accion en progreso es 'were waiting'. La accion que interrumpe va en Past Simple: 'started'."
        }
    ],
    4: [
        {
            part: 4,
            id: 116,
            situationId: "p4_tech_competition",
            situationTitle: "Technology Competition",
            quote: "Last year, my school organized a technology competition. Students from different grades <b><u>[16]</u></b> projects that solved everyday problems.<br><br>While my team (17) our robot, another group (18) a mobile application.<br><br>When the judges (19) our project, they asked many questions.<br><br>One student, who (20) programming by himself, impressed everyone.<br><br>While the judges (21) the projects, we waited nervously.<br><br>Finally, our team (22) first place and the principal (23) us a certificate.<br><br>It was an experience that I will always (24).",
            questionText: "Selecciona la opcion correcta para el espacio (16):",
            options: ["presented", "present", "presenting", "presents"],
            correctIndex: 0,
            tema: "Past Simple",
            nivel: "A2",
            retroalimentacion: "'Last year' indica una accion terminada en el pasado."
        },
        {
            part: 4,
            id: 117,
            situationId: "p4_tech_competition",
            situationTitle: "Technology Competition",
            quote: "Last year, my school organized a technology competition. Students from different grades presented projects that solved everyday problems.<br><br>While my team <b><u>[17]</u></b> our robot, another group (18) a mobile application.<br><br>When the judges (19) our project, they asked many questions.<br><br>One student, who (20) programming by himself, impressed everyone.<br><br>While the judges (21) the projects, we waited nervously.<br><br>Finally, our team (22) first place and the principal (23) us a certificate.<br><br>It was an experience that I will always (24).",
            questionText: "Selecciona la opcion correcta para el espacio (17):",
            options: ["tested", "were testing", "test", "tests"],
            correctIndex: 1,
            tema: "Past Progressive",
            nivel: "B1",
            retroalimentacion: "La prueba del robot estaba ocurriendo mientras otra accion tambien se desarrollaba."
        },
        {
            part: 4,
            id: 118,
            situationId: "p4_tech_competition",
            situationTitle: "Technology Competition",
            quote: "Last year, my school organized a technology competition. Students from different grades presented projects that solved everyday problems.<br><br>While my team were testing our robot, another group <b><u>[18]</u></b> a mobile application.<br><br>When the judges (19) our project, they asked many questions.<br><br>One student, who (20) programming by himself, impressed everyone.<br><br>While the judges (21) the projects, we waited nervously.<br><br>Finally, our team (22) first place and the principal (23) us a certificate.<br><br>It was an experience that I will always (24).",
            questionText: "Selecciona la opcion correcta para el espacio (18):",
            options: ["developed", "were developing", "develop", "develops"],
            correctIndex: 1,
            tema: "Past Progressive",
            nivel: "B1",
            retroalimentacion: "Dos equipos estaban trabajando simultaneamente en sus proyectos."
        },
        {
            part: 4,
            id: 119,
            situationId: "p4_tech_competition",
            situationTitle: "Technology Competition",
            quote: "Last year, my school organized a technology competition. Students from different grades presented projects that solved everyday problems.<br><br>While my team were testing our robot, another group were developing a mobile application.<br><br>When the judges <b><u>[19]</u></b> our project, they asked many questions.<br><br>One student, who (20) programming by himself, impressed everyone.<br><br>While the judges (21) the projects, we waited nervously.<br><br>Finally, our team (22) first place and the principal (23) us a certificate.<br><br>It was an experience that I will always (24).",
            questionText: "Selecciona la opcion correcta para el espacio (19):",
            options: ["saw", "see", "were seeing", "sees"],
            correctIndex: 0,
            tema: "Past Simple",
            nivel: "A2",
            retroalimentacion: "Los jueces observaron el proyecto en un momento especifico."
        },
        {
            part: 4,
            id: 120,
            situationId: "p4_tech_competition",
            situationTitle: "Technology Competition",
            quote: "Last year, my school organized a technology competition. Students from different grades presented projects that solved everyday problems.<br><br>While my team were testing our robot, another group were developing a mobile application.<br><br>When the judges saw our project, they asked many questions.<br><br>One student, who <b><u>[20]</u></b> programming by himself, impressed everyone.<br><br>While the judges (21) the projects, we waited nervously.<br><br>Finally, our team (22) first place and the principal (23) us a certificate.<br><br>It was an experience that I will always (24).",
            questionText: "Selecciona la opcion correcta para el espacio (20):",
            options: ["learned", "learn", "learning", "learns"],
            correctIndex: 0,
            tema: "Relative Clauses + Past Simple",
            nivel: "B1",
            retroalimentacion: "La clausula relativa describe al estudiante. El aprendizaje ocurrio antes de la competencia."
        },
        {
            part: 4,
            id: 121,
            situationId: "p4_tech_competition",
            situationTitle: "Technology Competition",
            quote: "Last year, my school organized a technology competition. Students from different grades presented projects that solved everyday problems.<br><br>While my team were testing our robot, another group were developing a mobile application.<br><br>When the judges saw our project, they asked many questions.<br><br>One student, who learned programming by himself, impressed everyone.<br><br>While the judges <b><u>[21]</u></b> the projects, we waited nervously.<br><br>Finally, our team (22) first place and the principal (23) us a certificate.<br><br>It was an experience that I will always (24).",
            questionText: "Selecciona la opcion correcta para el espacio (21):",
            options: ["evaluated", "evaluate", "were evaluating", "evaluates"],
            correctIndex: 2,
            tema: "Past Progressive",
            nivel: "B1",
            retroalimentacion: "Los jueces estaban evaluando mientras los participantes esperaban."
        },
        {
            part: 4,
            id: 122,
            situationId: "p4_tech_competition",
            situationTitle: "Technology Competition",
            quote: "Last year, my school organized a technology competition. Students from different grades presented projects that solved everyday problems.<br><br>While my team were testing our robot, another group were developing a mobile application.<br><br>When the judges saw our project, they asked many questions.<br><br>One student, who learned programming by himself, impressed everyone.<br><br>While the judges were evaluating the projects, we waited nervously.<br><br>Finally, our team <b><u>[22]</u></b> first place and the principal (23) us a certificate.<br><br>It was an experience that I will always (24).",
            questionText: "Selecciona la opcion correcta para el espacio (22):",
            options: ["got", "get", "getting", "gets"],
            correctIndex: 0,
            tema: "Past Simple",
            nivel: "A2",
            retroalimentacion: "'Get first place' significa obtener el primer lugar."
        },
        {
            part: 4,
            id: 123,
            situationId: "p4_tech_competition",
            situationTitle: "Technology Competition",
            quote: "Last year, my school organized a technology competition. Students from different grades presented projects that solved everyday problems.<br><br>While my team were testing our robot, another group were developing a mobile application.<br><br>When the judges saw our project, they asked many questions.<br><br>One student, who learned programming by himself, impressed everyone.<br><br>While the judges were evaluating the projects, we waited nervously.<br><br>Finally, our team got first place and the principal <b><u>[23]</u></b> us a certificate.<br><br>It was an experience that I will always (24).",
            questionText: "Selecciona la opcion correcta para el espacio (23):",
            options: ["gave", "give", "giving", "gives"],
            correctIndex: 0,
            tema: "Past Simple",
            nivel: "A2",
            retroalimentacion: "El director entrego un certificado."
        },
        {
            part: 4,
            id: 124,
            situationId: "p4_tech_competition",
            situationTitle: "Technology Competition",
            quote: "Last year, my school organized a technology competition. Students from different grades presented projects that solved everyday problems.<br><br>While my team were testing our robot, another group were developing a mobile application.<br><br>When the judges saw our project, they asked many questions.<br><br>One student, who learned programming by himself, impressed everyone.<br><br>While the judges were evaluating the projects, we waited nervously.<br><br>Finally, our team got first place and the principal gave us a certificate.<br><br>It was an experience that I will always <b><u>[24]</u></b>.",
            questionText: "Selecciona la opcion correcta para el espacio (24):",
            options: ["remember", "remembered", "remembering", "remembers"],
            correctIndex: 0,
            tema: "Future + Base Verb",
            nivel: "B1",
            retroalimentacion: "Despues de 'will' siempre se utiliza la forma base del verbo."
        }
    ],
    5: [
        {
            part: 5,
            id: 125,
            quote: "Emma participated in a community project that collected books for children in rural areas. The campaign lasted three weeks. During that time, students donated more than 500 books.<br><br>Emma and her friends organized the books according to age and subject. Later, volunteers transported them to several schools.<br><br>At the end of the project, many children received books that they had never had before.",
            questionText: "What was collected during the campaign?",
            options: ["Clothes", "Food", "Books", "Toys"],
            correctIndex: 2,
            tema: "Reading Literal",
            nivel: "A2",
            retroalimentacion: "El texto menciona claramente que el proyecto recolecto libros para ninos de zonas rurales."
        },
        {
            part: 5,
            id: 126,
            quote: "Emma participated in a community project that collected books for children in rural areas. The campaign lasted three weeks. During that time, students donated more than 500 books.<br><br>Emma and her friends organized the books according to age and subject. Later, volunteers transported them to several schools.<br><br>At the end of the project, many children received books that they had never had before.",
            questionText: "How long did the campaign last?",
            options: ["Two weeks", "Three weeks", "Four weeks", "One month"],
            correctIndex: 1,
            tema: "Reading Literal",
            nivel: "A2",
            retroalimentacion: "La duracion aparece explicitamente en la segunda oracion."
        },
        {
            part: 5,
            id: 127,
            quote: "Emma participated in a community project that collected books for children in rural areas. The campaign lasted three weeks. During that time, students donated more than 500 books.<br><br>Emma and her friends organized the books according to age and subject. Later, volunteers transported them to several schools.<br><br>At the end of the project, many children received books that they had never had before.",
            questionText: "Who donated the books?",
            options: ["Teachers", "Parents", "Students", "Volunteers"],
            correctIndex: 2,
            tema: "Reading Literal",
            nivel: "A2",
            retroalimentacion: "El texto dice: 'students donated more than 500 books'."
        },
        {
            part: 5,
            id: 128,
            quote: "Emma participated in a community project that collected books for children in rural areas. The campaign lasted three weeks. During that time, students donated more than 500 books.<br><br>Emma and her friends organized the books according to age and subject. Later, volunteers transported them to several schools.<br><br>At the end of the project, many children received books that they had never had before.",
            questionText: "How many books were collected?",
            options: ["About 200", "About 300", "More than 500", "Exactly 1000"],
            correctIndex: 2,
            tema: "Reading Literal",
            nivel: "A2",
            retroalimentacion: "La cantidad aparece de forma directa en el texto."
        },
        {
            part: 5,
            id: 129,
            quote: "Emma participated in a community project that collected books for children in rural areas. The campaign lasted three weeks. During that time, students donated more than 500 books.<br><br>Emma and her friends organized the books according to age and subject. Later, volunteers transported them to several schools.<br><br>At the end of the project, many children received books that they had never had before.",
            questionText: "How were the books organized?",
            options: ["By color", "By size", "By author", "By age and subject"],
            correctIndex: 3,
            tema: "Reading Literal",
            nivel: "A2",
            retroalimentacion: "Emma y sus amigos clasificaron los libros segun edad y tema."
        },
        {
            part: 5,
            id: 130,
            quote: "Emma participated in a community project that collected books for children in rural areas. The campaign lasted three weeks. During that time, students donated more than 500 books.<br><br>Emma and her friends organized the books according to age and subject. Later, volunteers transported them to several schools.<br><br>At the end of the project, many children received books that they had never had before.",
            questionText: "Who transported the books?",
            options: ["Volunteers", "Teachers", "Parents", "Students"],
            correctIndex: 0,
            tema: "Reading Literal",
            nivel: "A2",
            retroalimentacion: "Los voluntarios llevaron los libros a las escuelas."
        },
        {
            part: 5,
            id: 131,
            quote: "Emma participated in a community project that collected books for children in rural areas. The campaign lasted three weeks. During that time, students donated more than 500 books.<br><br>Emma and her friends organized the books according to age and subject. Later, volunteers transported them to several schools.<br><br>At the end of the project, many children received books that they had never had before.",
            questionText: "Where were the books taken?",
            options: ["Hospitals", "Libraries", "Schools", "Museums"],
            correctIndex: 2,
            tema: "Reading Literal",
            nivel: "A2",
            retroalimentacion: "El texto menciona que fueron transportados a varias escuelas."
        },
        {
            part: 5,
            id: 132,
            quote: "Emma participated in a community project that collected books for children in rural areas. The campaign lasted three weeks. During that time, students donated more than 500 books.<br><br>Emma and her friends organized the books according to age and subject. Later, volunteers transported them to several schools.<br><br>At the end of the project, many children received books that they had never had before.",
            questionText: "What happened at the end of the project?",
            options: ["The books were sold.", "Children received books.", "The campaign was cancelled.", "More books were purchased."],
            correctIndex: 1,
            tema: "Reading Literal",
            nivel: "A2",
            retroalimentacion: "La ultima oracion explica el resultado final del proyecto."
        }
    ],
    6: [
        {
            part: 6,
            id: 133,
            quote: "Carlos spent several months learning how to repair bicycles. After practicing every weekend, he opened a small repair service in his neighborhood.<br><br>At first, only a few people visited him, but they recommended his work to others. After one year, Carlos had more customers than he could attend alone.",
            questionText: "Why did Carlos become successful?",
            options: ["He won a competition.", "He inherited a business.", "People trusted his work.", "He sold bicycles cheaply."],
            correctIndex: 2,
            tema: "Inferential Reading",
            nivel: "B1",
            retroalimentacion: "Aunque el texto no lo dice directamente, las recomendaciones de los clientes indican confianza en su trabajo."
        },
        {
            part: 6,
            id: 134,
            quote: "Carlos spent several months learning how to repair bicycles. After practicing every weekend, he opened a small repair service in his neighborhood.<br><br>At first, only a few people visited him, but they recommended his work to others. After one year, Carlos had more customers than he could attend alone.",
            questionText: "What can we infer about Carlos?",
            options: ["He is lazy.", "He is persistent.", "He is careless.", "He is impatient."],
            correctIndex: 1,
            tema: "Inferential Reading",
            nivel: "B1",
            retroalimentacion: "Aprendio durante meses y practico constantemente antes de abrir su negocio."
        },
        {
            part: 6,
            id: 135,
            quote: "Carlos spent several months learning how to repair bicycles. After practicing every weekend, he opened a small repair service in his neighborhood.<br><br>At first, only a few people visited him, but they recommended his work to others. After one year, Carlos had more customers than he could attend alone.",
            questionText: "Why did the number of customers increase?",
            options: ["Because he moved.", "Because people recommended him.", "Because bicycles became free.", "Because schools required repairs."],
            correctIndex: 1,
            tema: "Inferential Reading",
            nivel: "B1",
            retroalimentacion: "Las recomendaciones generaron mas clientes."
        },
        {
            part: 6,
            id: 136,
            quote: "Carlos spent several months learning how to repair bicycles. After practicing every weekend, he opened a small repair service in his neighborhood.<br><br>At first, only a few people visited him, but they recommended his work to others. After one year, Carlos had more customers than he could attend alone.",
            questionText: "What was Carlos learning?",
            options: ["Programming", "Cooking", "Repairing bicycles", "Driving"],
            correctIndex: 2,
            tema: "Inferential Reading",
            nivel: "A2",
            retroalimentacion: "La informacion aparece directamente en el primer parrafo."
        },
        {
            part: 6,
            id: 137,
            quote: "Carlos spent several months learning how to repair bicycles. After practicing every weekend, he opened a small repair service in his neighborhood.<br><br>At first, only a few people visited him, but they recommended his work to others. After one year, Carlos had more customers than he could attend alone.",
            questionText: "What is the main lesson of the story?",
            options: ["Practice can lead to success.", "Traveling is important.", "Competition is dangerous.", "Sports improve health."],
            correctIndex: 0,
            tema: "Inferential Reading",
            nivel: "B1",
            retroalimentacion: "La historia muestra como la preparacion y la constancia produjeron buenos resultados."
        },
        {
            part: 6,
            id: 138,
            quote: "Carlos spent several months learning how to repair bicycles. After practicing every weekend, he opened a small repair service in his neighborhood.<br><br>At first, only a few people visited him, but they recommended his work to others. After one year, Carlos had more customers than he could attend alone.",
            questionText: "How did Carlos probably feel after one year?",
            options: ["Disappointed", "Worried", "Proud", "Angry"],
            correctIndex: 2,
            tema: "Inferential Reading",
            nivel: "B1",
            retroalimentacion: "Su negocio crecio gracias a su esfuerzo, por lo que es razonable inferir que se sintio orgulloso."
        }
    ],
    7: [
        {
            part: 7,
            id: 139,
            situationId: "p7_national_park_trip",
            situationTitle: "National Park Trip",
            quote: "Last summer, my cousins and I <b><u>(39)</u></b> a trip to a national park. The park, which (40) thousands of visitors every year, was famous for its waterfalls and wildlife.<br><br>While we (41) along a trail, we suddenly (42) a group of monkeys in the trees. My younger cousin, who (43) animals very much, was extremely excited.<br><br>Later, we (44) lunch near a river while some tourists (45) photographs of the landscape.<br><br>When we (46) back to the campsite, we discovered that someone (47) a backpack near the entrance. We (48) the backpack to the park office, and the owner later (49) us for our help.<br><br>It was a trip that none of us will ever (50).",
            questionText: "Selecciona la opcion correcta para el espacio (39):",
            options: ["made", "took", "went", "had"],
            correctIndex: 1,
            tema: "Vocabulary in Context",
            nivel: "B1",
            retroalimentacion: "La expresion mas natural es 'take a trip'."
        },
        {
            part: 7,
            id: 140,
            situationId: "p7_national_park_trip",
            situationTitle: "National Park Trip",
            quote: "Last summer, my cousins and I took a trip to a national park. The park, which <b><u>(40)</u></b> thousands of visitors every year, was famous for its waterfalls and wildlife.<br><br>While we (41) along a trail, we suddenly (42) a group of monkeys in the trees. My younger cousin, who (43) animals very much, was extremely excited.<br><br>Later, we (44) lunch near a river while some tourists (45) photographs of the landscape.<br><br>When we (46) back to the campsite, we discovered that someone (47) a backpack near the entrance. We (48) the backpack to the park office, and the owner later (49) us for our help.<br><br>It was a trip that none of us will ever (50).",
            questionText: "Selecciona la opcion correcta para el espacio (40):",
            options: ["attract", "attracted", "attracts", "attracting"],
            correctIndex: 2,
            tema: "Relative Clauses + Present Simple",
            nivel: "B1",
            retroalimentacion: "Se describe una caracteristica permanente del parque, por eso va en presente simple."
        },
        {
            part: 7,
            id: 141,
            situationId: "p7_national_park_trip",
            situationTitle: "National Park Trip",
            quote: "Last summer, my cousins and I took a trip to a national park. The park, which attracts thousands of visitors every year, was famous for its waterfalls and wildlife.<br><br>While we <b><u>(41)</u></b> along a trail, we suddenly (42) a group of monkeys in the trees. My younger cousin, who (43) animals very much, was extremely excited.<br><br>Later, we (44) lunch near a river while some tourists (45) photographs of the landscape.<br><br>When we (46) back to the campsite, we discovered that someone (47) a backpack near the entrance. We (48) the backpack to the park office, and the owner later (49) us for our help.<br><br>It was a trip that none of us will ever (50).",
            questionText: "Selecciona la opcion correcta para el espacio (41):",
            options: ["walked", "were walking", "walk", "walking"],
            correctIndex: 1,
            tema: "Past Progressive",
            nivel: "B1",
            retroalimentacion: "La caminata estaba en progreso cuando ocurrio otra accion."
        },
        {
            part: 7,
            id: 142,
            situationId: "p7_national_park_trip",
            situationTitle: "National Park Trip",
            quote: "Last summer, my cousins and I took a trip to a national park. The park, which attracts thousands of visitors every year, was famous for its waterfalls and wildlife.<br><br>While we were walking along a trail, we suddenly <b><u>(42)</u></b> a group of monkeys in the trees. My younger cousin, who (43) animals very much, was extremely excited.<br><br>Later, we (44) lunch near a river while some tourists (45) photographs of the landscape.<br><br>When we (46) back to the campsite, we discovered that someone (47) a backpack near the entrance. We (48) the backpack to the park office, and the owner later (49) us for our help.<br><br>It was a trip that none of us will ever (50).",
            questionText: "Selecciona la opcion correcta para el espacio (42):",
            options: ["saw", "were seeing", "see", "seen"],
            correctIndex: 0,
            tema: "Past Simple vs Past Progressive",
            nivel: "B1",
            retroalimentacion: "La accion puntual que interrumpe va en pasado simple."
        },
        {
            part: 7,
            id: 143,
            situationId: "p7_national_park_trip",
            situationTitle: "National Park Trip",
            quote: "Last summer, my cousins and I took a trip to a national park. The park, which attracts thousands of visitors every year, was famous for its waterfalls and wildlife.<br><br>While we were walking along a trail, we suddenly saw a group of monkeys in the trees. My younger cousin, who <b><u>(43)</u></b> animals very much, was extremely excited.<br><br>Later, we (44) lunch near a river while some tourists (45) photographs of the landscape.<br><br>When we (46) back to the campsite, we discovered that someone (47) a backpack near the entrance. We (48) the backpack to the park office, and the owner later (49) us for our help.<br><br>It was a trip that none of us will ever (50).",
            questionText: "Selecciona la opcion correcta para el espacio (43):",
            options: ["loves", "loved", "loving", "love"],
            correctIndex: 0,
            tema: "Relative Clauses",
            nivel: "A2",
            retroalimentacion: "La clausula relativa describe una caracteristica habitual, por eso se usa presente simple."
        },
        {
            part: 7,
            id: 144,
            situationId: "p7_national_park_trip",
            situationTitle: "National Park Trip",
            quote: "Last summer, my cousins and I took a trip to a national park. The park, which attracts thousands of visitors every year, was famous for its waterfalls and wildlife.<br><br>While we were walking along a trail, we suddenly saw a group of monkeys in the trees. My younger cousin, who loves animals very much, was extremely excited.<br><br>Later, we <b><u>(44)</u></b> lunch near a river while some tourists (45) photographs of the landscape.<br><br>When we (46) back to the campsite, we discovered that someone (47) a backpack near the entrance. We (48) the backpack to the park office, and the owner later (49) us for our help.<br><br>It was a trip that none of us will ever (50).",
            questionText: "Selecciona la opcion correcta para el espacio (44):",
            options: ["ate", "eat", "were eating", "eaten"],
            correctIndex: 0,
            tema: "Past Simple",
            nivel: "A2",
            retroalimentacion: "Se narra una actividad completada durante el viaje."
        },
        {
            part: 7,
            id: 145,
            situationId: "p7_national_park_trip",
            situationTitle: "National Park Trip",
            quote: "Last summer, my cousins and I took a trip to a national park. The park, which attracts thousands of visitors every year, was famous for its waterfalls and wildlife.<br><br>While we were walking along a trail, we suddenly saw a group of monkeys in the trees. My younger cousin, who loves animals very much, was extremely excited.<br><br>Later, we ate lunch near a river while some tourists <b><u>(45)</u></b> photographs of the landscape.<br><br>When we (46) back to the campsite, we discovered that someone (47) a backpack near the entrance. We (48) the backpack to the park office, and the owner later (49) us for our help.<br><br>It was a trip that none of us will ever (50).",
            questionText: "Selecciona la opcion correcta para el espacio (45):",
            options: ["took", "take", "were taking", "taken"],
            correctIndex: 2,
            tema: "Past Progressive",
            nivel: "B1",
            retroalimentacion: "Los turistas estaban tomando fotografias mientras ocurria la otra accion."
        },
        {
            part: 7,
            id: 146,
            situationId: "p7_national_park_trip",
            situationTitle: "National Park Trip",
            quote: "Last summer, my cousins and I took a trip to a national park. The park, which attracts thousands of visitors every year, was famous for its waterfalls and wildlife.<br><br>While we were walking along a trail, we suddenly saw a group of monkeys in the trees. My younger cousin, who loves animals very much, was extremely excited.<br><br>Later, we ate lunch near a river while some tourists were taking photographs of the landscape.<br><br>When we <b><u>(46)</u></b> back to the campsite, we discovered that someone (47) a backpack near the entrance. We (48) the backpack to the park office, and the owner later (49) us for our help.<br><br>It was a trip that none of us will ever (50).",
            questionText: "Selecciona la opcion correcta para el espacio (46):",
            options: ["came", "come", "were coming", "comes"],
            correctIndex: 0,
            tema: "Past Simple",
            nivel: "A2",
            retroalimentacion: "La expresion correcta es 'came back'."
        },
        {
            part: 7,
            id: 147,
            situationId: "p7_national_park_trip",
            situationTitle: "National Park Trip",
            quote: "Last summer, my cousins and I took a trip to a national park. The park, which attracts thousands of visitors every year, was famous for its waterfalls and wildlife.<br><br>While we were walking along a trail, we suddenly saw a group of monkeys in the trees. My younger cousin, who loves animals very much, was extremely excited.<br><br>Later, we ate lunch near a river while some tourists were taking photographs of the landscape.<br><br>When we came back to the campsite, we discovered that someone <b><u>(47)</u></b> a backpack near the entrance. We (48) the backpack to the park office, and the owner later (49) us for our help.<br><br>It was a trip that none of us will ever (50).",
            questionText: "Selecciona la opcion correcta para el espacio (47):",
            options: ["left", "leave", "was leaving", "leaves"],
            correctIndex: 0,
            tema: "Past Simple",
            nivel: "A2",
            retroalimentacion: "Alguien dejo la mochila en la entrada."
        },
        {
            part: 7,
            id: 148,
            situationId: "p7_national_park_trip",
            situationTitle: "National Park Trip",
            quote: "Last summer, my cousins and I took a trip to a national park. The park, which attracts thousands of visitors every year, was famous for its waterfalls and wildlife.<br><br>While we were walking along a trail, we suddenly saw a group of monkeys in the trees. My younger cousin, who loves animals very much, was extremely excited.<br><br>Later, we ate lunch near a river while some tourists were taking photographs of the landscape.<br><br>When we came back to the campsite, we discovered that someone left a backpack near the entrance. We <b><u>(48)</u></b> the backpack to the park office, and the owner later (49) us for our help.<br><br>It was a trip that none of us will ever (50).",
            questionText: "Selecciona la opcion correcta para el espacio (48):",
            options: ["brought", "bring", "bringing", "brings"],
            correctIndex: 0,
            tema: "Irregular Verbs",
            nivel: "A2",
            retroalimentacion: "El pasado de 'bring' es 'brought'."
        },
        {
            part: 7,
            id: 149,
            situationId: "p7_national_park_trip",
            situationTitle: "National Park Trip",
            quote: "Last summer, my cousins and I took a trip to a national park. The park, which attracts thousands of visitors every year, was famous for its waterfalls and wildlife.<br><br>While we were walking along a trail, we suddenly saw a group of monkeys in the trees. My younger cousin, who loves animals very much, was extremely excited.<br><br>Later, we ate lunch near a river while some tourists were taking photographs of the landscape.<br><br>When we came back to the campsite, we discovered that someone left a backpack near the entrance. We brought the backpack to the park office, and the owner later <b><u>(49)</u></b> us for our help.<br><br>It was a trip that none of us will ever (50).",
            questionText: "Selecciona la opcion correcta para el espacio (49):",
            options: ["tell", "thanked", "said", "asked"],
            correctIndex: 1,
            tema: "Vocabulary in Context",
            nivel: "B1",
            retroalimentacion: "La reaccion logica despues de recuperar la mochila es agradecer."
        },
        {
            part: 7,
            id: 150,
            situationId: "p7_national_park_trip",
            situationTitle: "National Park Trip",
            quote: "Last summer, my cousins and I took a trip to a national park. The park, which attracts thousands of visitors every year, was famous for its waterfalls and wildlife.<br><br>While we were walking along a trail, we suddenly saw a group of monkeys in the trees. My younger cousin, who loves animals very much, was extremely excited.<br><br>Later, we ate lunch near a river while some tourists were taking photographs of the landscape.<br><br>When we came back to the campsite, we discovered that someone left a backpack near the entrance. We brought the backpack to the park office, and the owner later thanked us for our help.<br><br>It was a trip that none of us will ever <b><u>(50)</u></b>.",
            questionText: "Selecciona la opcion correcta para el espacio (50):",
            options: ["remember", "remembered", "remembering", "remembers"],
            correctIndex: 0,
            tema: "Future Structures",
            nivel: "B1",
            retroalimentacion: "Despues de 'will' siempre se usa el verbo en su forma base."
        }
    ]
};
