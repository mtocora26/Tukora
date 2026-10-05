import { ITALIAN_ALPHABET } from './alphabet.js'

// Módulo 1 — basado en el material del curso (alfabeto, presentarse, saludos).
export const MODULE_1 = {
  id: 'm1',
  title: 'Primi passi',
  lessons: [
    {
      id: 'm1-l1-alfabeto',
      title: 'Alfabeto y spelling',
      theory: [
        {
          type: 'text',
          text: 'Para deletrear en italiano se dice la letra + "di" + una ciudad italiana que empiece por esa letra.',
        },
        {
          type: 'example',
          text: 'Mi può fare lo spelling del suo cognome, per favore?',
          translation: '¿Me puede deletrear su apellido, por favor?',
        },
        {
          type: 'example',
          text: 'A di Ancona, N di Napoli, N di Napoli, A di Ancona.',
          translation: 'Así se deletrea "ANNA".',
        },
        {
          type: 'table',
          columns: ['Letra', 'Se llama', 'Ciudad'],
          rows: ITALIAN_ALPHABET.map(({ letter, name, cities }) => [
            letter,
            name,
            cities[0] ?? '—',
          ]),
        },
        {
          type: 'tip',
          text: 'J, K, W, X y Y no son letras italianas: se llaman i lunga, cappa, doppia vu, ics e ipsilon. Aparecen sobre todo en nombres y apellidos extranjeros.',
        },
      ],
      exercises: [
        {
          id: 'm1-l1-e1',
          type: 'choice',
          prompt: '¿Cómo le pides a un cliente (trato de Lei) que deletree su apellido?',
          options: [
            'Mi può fare lo spelling del suo cognome, per favore?',
            'Puoi fare lo spelling del tuo cognome?',
            'Come si chiama il tuo cognome?',
          ],
          answer: 'Mi può fare lo spelling del suo cognome, per favore?',
          explanation:
            'Con Lei se usa "può" y "suo". "Puoi… tuo" es la forma informal (tu).',
        },
        {
          id: 'm1-l1-e2',
          type: 'spelling',
          prompt: 'Deletrea el apellido ROSSI.',
          word: 'ROSSI',
        },
        {
          id: 'm1-l1-e3',
          type: 'match',
          prompt: 'Une cada letra con su ciudad.',
          pairs: [
            ['A', 'Ancona'],
            ['F', 'Firenze'],
            ['T', 'Torino'],
            ['V', 'Venezia'],
          ],
        },
        {
          id: 'm1-l1-e4',
          type: 'choice',
          prompt: '¿Cómo se llama la letra H en italiano?',
          options: ['acca', 'effe', 'hache'],
          answer: 'acca',
          explanation: '"Hache" es el nombre en español. En italiano es "acca".',
        },
        {
          id: 'm1-l1-e5',
          type: 'spelling',
          prompt: 'Deletrea el nombre ANNA.',
          word: 'ANNA',
        },
        {
          id: 'm1-l1-e6',
          type: 'match',
          prompt: 'Une cada letra extranjera con su nombre.',
          pairs: [
            ['J', 'i lunga'],
            ['K', 'cappa'],
            ['W', 'doppia vu'],
            ['Y', 'ipsilon'],
          ],
        },
        {
          id: 'm1-l1-e7',
          type: 'typed',
          prompt: 'Escribe la ciudad que se usa para la letra N.',
          sentence: 'N di ___',
          answer: 'Napoli',
          alternatives: ['Novara'],
        },
        {
          id: 'm1-l1-e8',
          type: 'spelling',
          prompt: 'Deletrea el apellido BIANCHI.',
          word: 'BIANCHI',
        },
      ],
    },
    {
      id: 'm1-l2-presentarsi',
      title: 'Presentarse',
      theory: [
        {
          type: 'text',
          text: 'Para presentarte usas dos verbos: chiamarsi (llamarse, reflexivo) y essere (ser/estar).',
        },
        {
          type: 'table',
          columns: ['Pronombre', 'chiamarsi', 'essere'],
          rows: [
            ['io (yo)', 'mi chiamo', 'sono'],
            ['tu (tú)', 'ti chiami', 'sei'],
            ['lui / lei / Lei (él / ella / usted)', 'si chiama', 'è'],
            ['noi (nosotros)', 'ci chiamiamo', 'siamo'],
            ['voi (vosotros)', 'vi chiamate', 'siete'],
            ['loro (ellos)', 'si chiamano', 'sono'],
          ],
        },
        {
          type: 'tip',
          text: '"Lei" (con mayúscula) es el usted formal y usa la 3ª persona: "Lei come si chiama?". El pronombre sujeto se puede omitir: "Mi chiamo Eva" = "Io mi chiamo Eva".',
        },
        {
          type: 'example',
          text: 'Ciao, io mi chiamo Alfredo e sono spagnolo.',
          translation: 'Hola, me llamo Alfredo y soy español.',
        },
        {
          type: 'example',
          text: 'Come ti chiami? / Come si chiama?',
          translation: '¿Cómo te llamas? (informal) / ¿Cómo se llama? (formal)',
        },
        {
          type: 'example',
          text: 'Piacere!',
          translation: '¡Encantado/a!',
        },
      ],
      exercises: [
        {
          id: 'm1-l2-e1',
          type: 'choice',
          prompt: 'Completa con la forma correcta de chiamarsi y essere.',
          sentence: 'Lei ___ Eva e ___ italiana.',
          options: ['si chiama / è', 'ti chiami / sei', 'mi chiamo / sono'],
          answer: 'si chiama / è',
          explanation:
            '"Lei" (ella) va en 3ª persona singular: si chiama, è.',
        },
        {
          id: 'm1-l2-e2',
          type: 'match',
          prompt: 'Une cada pronombre con el verbo essere.',
          pairs: [
            ['io', 'sono'],
            ['tu', 'sei'],
            ['noi', 'siamo'],
            ['voi', 'siete'],
          ],
        },
        {
          id: 'm1-l2-e3',
          type: 'typed',
          prompt: 'Completa con chiamarsi.',
          sentence: 'Noi ___ Marco e Luca.',
          answer: 'ci chiamiamo',
        },
        {
          id: 'm1-l2-e4',
          type: 'reorder',
          prompt: 'Ordena las palabras para formar la presentación.',
          tokens: ['mi', 'Ciao,', 'e', 'sono', 'io', 'spagnolo.', 'chiamo', 'Alfredo'],
          answer: ['Ciao,', 'io', 'mi', 'chiamo', 'Alfredo', 'e', 'sono', 'spagnolo.'],
          alternatives: [
            ['Ciao,', 'mi', 'chiamo', 'Alfredo', 'e', 'io', 'sono', 'spagnolo.'],
          ],
        },
        {
          id: 'm1-l2-e5',
          type: 'choice',
          prompt: '¿Cómo le preguntas el nombre a un cliente (trato de Lei)?',
          options: ['Come si chiama?', 'Come ti chiami?', 'Come vi chiamate?'],
          answer: 'Come si chiama?',
          explanation:
            'Con Lei se usa la 3ª persona: "si chiama". "Ti chiami" es informal y "vi chiamate" es para varias personas.',
        },
        {
          id: 'm1-l2-e6',
          type: 'typed',
          prompt: 'Completa con essere.',
          sentence: 'Voi ___ di Roma?',
          answer: 'siete',
        },
        {
          id: 'm1-l2-e7',
          type: 'choice',
          prompt: 'Completa con chiamarsi.',
          sentence: 'Loro ___ Paolo e Giulia.',
          options: ['si chiamano', 'si chiama', 'vi chiamate'],
          answer: 'si chiamano',
          explanation: '"Loro" (ellos) es 3ª persona plural: si chiamano.',
        },
        {
          id: 'm1-l2-e8',
          type: 'reorder',
          prompt: 'Ordena las palabras.',
          tokens: ['sono', 'italiana.', 'Piacere,', 'Giulia', 'e', 'sono'],
          answer: ['Piacere,', 'sono', 'Giulia', 'e', 'sono', 'italiana.'],
        },
      ],
    },
    {
      id: 'm1-l3-saluti',
      title: 'Saludos y registro',
      theory: [
        {
          type: 'text',
          text: 'El saludo depende de la hora del día y de si tratas a la persona de tu (informal) o de Lei (formal).',
        },
        {
          type: 'table',
          columns: ['Momento', 'Saludo', 'Despedida', 'Registro'],
          rows: [
            ['Mañana (hasta las 14:00)', 'Buongiorno', 'Buona giornata!', 'Formal e informal'],
            ['Tarde (14:00–18:00)', 'Buon pomeriggio', 'Buona giornata! / Buona serata!', 'Formal e informal'],
            ['Noche (desde las 18:00)', 'Buonasera', 'Buona serata!', 'Formal e informal'],
            ['Antes de dormir', '—', 'Buonanotte!', 'Solo para ir a dormir'],
            ['Cualquier momento', 'Ciao', 'Ciao', 'Informal (amigos, familia)'],
            ['Cualquier momento', 'Salve', 'Salve / Arrivederci', 'Neutro'],
            ['Cualquier momento', 'Buongiorno / Buonasera', 'Arrivederla!', 'Formal (Lei)'],
          ],
        },
        {
          type: 'tip',
          text: '"Arrivederci" sirve casi siempre. "Arrivederla" es más formal: se dice a una sola persona que tratas de Lei.',
        },
      ],
      exercises: [
        {
          id: 'm1-l3-e1',
          type: 'choice',
          prompt: 'Reunión de negocios a las 19:00 con un cliente al que tratas de Lei. ¿Cómo te despides?',
          options: ['Ciao! A domani!', 'Buona serata, arrivederla!', 'Buonanotte, ciao!'],
          answer: 'Buona serata, arrivederla!',
          explanation:
            'Desde las 18:00 se dice "Buona serata", y "Arrivederla" es la despedida formal. "Ciao" es informal y "Buonanotte" es solo para ir a dormir.',
        },
        {
          id: 'm1-l3-e2',
          type: 'match',
          prompt: 'Une cada momento con su saludo.',
          pairs: [
            ['9:00', 'Buongiorno'],
            ['16:00', 'Buon pomeriggio'],
            ['20:00', 'Buonasera'],
            ['Te vas a dormir', 'Buonanotte'],
          ],
        },
        {
          id: 'm1-l3-e3',
          type: 'choice',
          prompt: 'Tu mejor amigo te saluda en la calle. ¿Qué le respondes?',
          options: ['Ciao!', 'Arrivederla!', 'Buonanotte!'],
          answer: 'Ciao!',
          explanation: 'Con amigos y familia se usa "Ciao", tanto para saludar como para despedirse.',
        },
        {
          id: 'm1-l3-e4',
          type: 'choice',
          prompt: 'Entras a una tienda a las 10:00. ¿Cómo saludas?',
          options: ['Buongiorno!', 'Buonasera!', 'Buonanotte!'],
          answer: 'Buongiorno!',
          explanation: 'Por la mañana (hasta las 14:00) se dice "Buongiorno".',
        },
        {
          id: 'm1-l3-e5',
          type: 'typed',
          prompt: 'Traduce: ¡Buenas noches! (te vas a dormir)',
          answer: 'Buonanotte',
          alternatives: ['Buona notte'],
        },
        {
          id: 'm1-l3-e6',
          type: 'choice',
          prompt: '¿Qué saludo es neutro y sirve cuando no sabes si tratar de tu o de Lei?',
          options: ['Salve', 'Ciao', 'Buonanotte'],
          answer: 'Salve',
          explanation: '"Salve" es neutro: ni tan informal como "Ciao" ni tan formal como "Arrivederla".',
        },
        {
          id: 'm1-l3-e7',
          type: 'reorder',
          prompt: 'Ordena la despedida formal.',
          tokens: ['serata!', 'Rossi.', 'Arrivederla,', 'Buona', 'signor'],
          answer: ['Arrivederla,', 'signor', 'Rossi.', 'Buona', 'serata!'],
        },
        {
          id: 'm1-l3-e8',
          type: 'typed',
          prompt: 'Traduce: ¡Que tengas un buen día! (despedida por la mañana)',
          answer: 'Buona giornata',
        },
      ],
    },
  ],
}
