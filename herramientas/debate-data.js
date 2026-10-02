/* Banco de preguntas provocadoras del debate
   Determinantes sociales de la salud (DSS) vs. Determinación social de la salud (DS).
   Lo usan dos páginas: dos-lentes.html (sección pública "Debate") y debate.html (arena, con clave).
   Cada pregunta tiene: eje de tensión, la pregunta, una pista por cada lente y las fuentes
   (los números remiten a DEBATE_FUENTES, al final del archivo). */
window.DEBATE_PREGUNTAS = [
  {
    id: 'causalidad',
    eje: 'Causalidad',
    icono: '⛓️',
    q: '¿Se puede «intervenir un determinante» sin transformar las relaciones de poder que lo producen?',
    dss: 'Sí, y es lo responsable: actuar sobre ingreso, vivienda o educación reduce daño medible mientras cambian las estructuras. El modelo CSDH incluye gobernanza y políticas macro como determinantes estructurales.',
    ds: 'Intervenir el «factor» deja intacto el proceso que lo regenera. Sin tocar los modos de producción y reproducción social, la inequidad reaparece con otro rostro.',
    fuentes: [1, 2, 4]
  },
  {
    id: 'reduccionismo',
    eje: 'Justicia con el adversario',
    icono: '⚖️',
    q: 'Si el marco de Solar e Irwin ya incluye el «contexto socioeconómico y político», ¿sigue siendo justo acusarlo de reduccionista?',
    dss: 'El marco nombra explícitamente gobernanza, políticas macroeconómicas, sociales y culturales. Llamarlo «factorialista» es atacar una caricatura.',
    ds: 'Nombrar el contexto no es analizarlo: en la práctica, el contexto se vuelve una caja más del diagrama y la investigación termina en variables individuales asociadas a un desenlace.',
    fuentes: [2, 4, 5]
  },
  {
    id: 'medir',
    eje: 'Evidencia y poder',
    icono: '📏',
    q: 'Medir la desigualdad con rigor, ¿es ya una forma de transformarla o puede convertirse en una manera elegante de administrarla?',
    dss: 'Sin gradientes medidos no hay agenda política: la evidencia comparable entre países fue lo que puso la equidad en la mesa de los ministerios.',
    ds: 'Un gradiente bien medido puede convivir décadas con la misma estructura que lo produce. La pregunta no es cuánto, sino quién gana con que eso siga así.',
    fuentes: [3, 6, 1]
  },
  {
    id: 'inequidad',
    eje: 'Lenguaje y clase',
    icono: '🗣️',
    q: '«Inequidad», «posición socioeconómica», «vulnerabilidad»: ¿categorías neutrales o eufemismos que esconden explotación, clase y dominación?',
    dss: 'Son categorías operativas, medibles y aceptables para actores muy distintos; su neutralidad es justamente lo que permite construir consensos intersectoriales.',
    ds: 'Navarro lo plantea sin rodeos: no basta con hablar de desigualdades, hay que nombrar las relaciones de poder y a quienes se benefician de ellas.',
    fuentes: [6, 7]
  },
  {
    id: 'traduccion',
    eje: 'El lenguaje importa',
    icono: '🌐',
    q: 'Cuando «determinación social» se traduce al inglés como «social determinants», ¿se pierde solo una palabra o se pierde toda una epistemología?',
    dss: 'Las palabras viajan y se adaptan; lo importante es el contenido de la política, no la etiqueta con que se nombra.',
    ds: 'Spiegel, Breilh y Yassi documentan que, en la colaboración Norte-Sur, la traducción borraba la dimensión histórica y dialéctica del concepto. El lenguaje orienta qué se investiga.',
    fuentes: [8, 5]
  },
  {
    id: 'sintesis',
    eje: '¿Diálogo o ruptura?',
    icono: '🧩',
    q: '¿Es posible usar indicadores DSS dentro de un análisis de determinación social, o eso es mezclar epistemologías incompatibles?',
    dss: 'Cardona Arias propone leer ambos enfoques como confluencia entre salud pública, epidemiología y clínica: los datos convencionales pueden servir a preguntas más amplias.',
    ds: 'Morales-Borrero y colegas advierten que las diferencias son también ético-políticas: no se trata de sumar métodos, sino de qué pregunta y qué proyecto los organiza.',
    fuentes: [9, 10]
  },
  {
    id: 'conducta',
    eje: 'Singular / particular',
    icono: '🚬',
    q: 'Fumar, comer ultraprocesados, no hacer ejercicio: ¿estilo de vida elegido o modo de vida impuesto?',
    dss: 'Los factores conductuales son determinantes intermedios: se distribuyen según la posición social, y por eso las políticas deben actuar sobre ambos niveles.',
    ds: 'Breilh distingue el estilo de vida (singular) del modo de vida de clases y grupos (particular): la «elección» individual ocurre dentro de márgenes producidos por la sociedad.',
    fuentes: [5, 11]
  },
  {
    id: 'naturaleza',
    eje: 'Sociedad-naturaleza',
    icono: '🌿',
    q: 'En un territorio con minería o monocultivo, ¿cabe la naturaleza en el modelo OMS como un «factor ambiental» más?',
    dss: 'Las condiciones ambientales son circunstancias materiales medibles (agua, aire, exposición a tóxicos) y pueden priorizarse en la acción intersectorial.',
    ds: 'El metabolismo sociedad-naturaleza no es un factor sino una relación histórica: el extractivismo produce simultáneamente riqueza, despojo y enfermedad.',
    fuentes: [5, 11, 12]
  },
  {
    id: 'sujeto',
    eje: '¿Quién produce el saber?',
    icono: '👥',
    q: 'En la investigación en salud, ¿la comunidad es un «caso» que aporta datos o un sujeto que produce conocimiento y decide qué cambiar?',
    dss: 'La participación es deseable, pero la validez se juega en el diseño, el muestreo y la comparabilidad: eso protege a las comunidades de conclusiones sesgadas.',
    ds: 'Para la epidemiología crítica, el criterio de verdad incluye la praxis: un conocimiento que no fortalece la organización de los sujetos queda incompleto.',
    fuentes: [11, 5]
  },
  {
    id: 'politica',
    eje: 'Política pública',
    icono: '🏛️',
    q: 'Cuando un Estado adopta el lenguaje de los determinantes sociales en sus planes, ¿qué gana y qué pierde un movimiento social que habla de determinación?',
    dss: 'Gana legitimidad, presupuesto e indicadores con los que exigir cuentas. Un lenguaje compartido abre puertas que el lenguaje crítico mantiene cerradas.',
    ds: 'Puede perder su potencia transformadora: la agenda se institucionaliza, se vuelve técnica y se desconecta de las luchas que le dieron origen.',
    fuentes: [12, 1, 9]
  },
  {
    id: 'ecosocial',
    eje: 'Terceras vías',
    icono: '🔭',
    q: 'La teoría ecosocial de Krieger habla de «encarnación» de la injusticia en los cuerpos: ¿es un puente entre ambas lentes o un tercer programa distinto?',
    dss: 'Ofrece un vocabulario biológico-social compatible con la epidemiología convencional: la encarnación puede medirse con cohortes y biomarcadores.',
    ds: 'Comparte la pregunta por quién y qué produce el daño, pero sin la categoría de reproducción social puede quedarse en la descripción de trayectorias.',
    fuentes: [13, 5]
  },
  {
    id: 'colombia',
    eje: 'Territorio',
    icono: '🗺️',
    q: 'En tu territorio de proyecto, el dato «bajo nivel educativo» se asocia con peor salud. ¿Ese dato explica el problema o lo encubre?',
    dss: 'Explica parte: la educación es un determinante estructural de la posición socioeconómica, y su efecto se puede estimar y priorizar.',
    ds: 'Lo encubre si no se pregunta por qué ese territorio tiene baja escolaridad: historia de despojo, conflicto armado, modelo productivo y abandono estatal.',
    fuentes: [2, 11]
  }
];

/* Fuentes verificadas (PubMed / sitios editoriales). */
window.DEBATE_FUENTES = {
  1:  'Breilh J. La determinación social de la salud como herramienta de transformación hacia una nueva salud pública (salud colectiva). Rev Fac Nac Salud Pública. 2013;31(Supl 1):13–27. doi:10.17533/udea.rfnsp.16637',
  2:  'Solar O, Irwin A. A conceptual framework for action on the social determinants of health. Social Determinants of Health Discussion Paper 2. Ginebra: OMS; 2010.',
  3:  'Comisión sobre Determinantes Sociales de la Salud (CSDH). Closing the gap in a generation. Ginebra: OMS; 2008.',
  4:  'Marmot M. Social determinants of health inequalities. Lancet. 2005;365(9464):1099–1104. PMID 15781105.',
  5:  'Breilh J. The social determination of health and the transformation of rights and ethics. Glob Public Health. 2023;18(1):2193830. doi:10.1080/17441692.2023.2193830',
  6:  'Navarro V. What we mean by social determinants of health. Int J Health Serv. 2009;39(3):423–441. PMID 19771949.',
  7:  'Breilh J. Epidemiology of the 21st century and cyberspace: rethinking power and the social determination of health. Rev Bras Epidemiol. 2015;18(4):972–982. doi:10.1590/1980-5497201500040025',
  8:  'Spiegel JM, Breilh J, Yassi A. Why language matters: insights and challenges in applying a social determination of health approach in a North-South collaborative research program. Global Health. 2015;11:9. doi:10.1186/s12992-015-0091-2',
  9:  'Morales-Borrero C, Borde E, Eslava-Castañeda JC, Concha-Sánchez SC. ¿Determinación social o determinantes sociales? Diferencias conceptuales e implicaciones praxiológicas. Rev Salud Pública (Bogotá). 2013;15(6):810–813. PMID 25124346.',
  10: 'Cardona Arias JA. Determinantes y determinación social de la salud como confluencia de la salud pública, la epidemiología y la clínica. Arch Med (Manizales). 2016;16(1):183–191. doi:10.30554/archmed.16.1.1090.2016',
  11: 'Breilh J. Epidemiología crítica: ciencia emancipadora e interculturalidad. Buenos Aires: Lugar Editorial; 2003.',
  12: 'Borde E, Hernández M. Revisiting the social determinants of health agenda from the global South. Glob Public Health. 2019;14(6-7):847–862. PMID 30500313.',
  13: 'Krieger N. Theories for social epidemiology in the 21st century: an ecosocial perspective. Int J Epidemiol. 2001;30(4):668–677. PMID 11511581.'
};

/* Clave docente: solo se guarda su huella SHA-256, nunca el texto. */
window.DEBATE_CLAVE_SHA256 = '46ee352dd9e53fd109608a46e2394ab830cf482701bf13fff789010984c1cb05';

/* Verifica la clave. Usa Web Crypto si existe; si no (contextos no seguros), un SHA-256 en JS puro. */
window.debateVerificarClave = function (texto) {
  var limpio = String(texto || '').trim().toLowerCase();
  function hex(buf) {
    return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
  }
  if (window.crypto && window.crypto.subtle && window.TextEncoder) {
    return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(limpio))
      .then(function (buf) { return hex(buf) === window.DEBATE_CLAVE_SHA256; });
  }
  return Promise.resolve(sha256(limpio) === window.DEBATE_CLAVE_SHA256);

  function sha256(ascii) {
    function rr(v, a) { return (v >>> a) | (v << (32 - a)); }
    var maxWord = Math.pow(2, 32), result = '', words = [], k = [], hash = [], primeCounter = 0, isComposite = {};
    ascii = unescape(encodeURIComponent(ascii));
    var asciiBitLength = ascii.length * 8;
    for (var candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (var i = 0; i < 313; i += candidate) isComposite[i] = candidate;
        if (primeCounter < 8) hash[primeCounter] = (Math.pow(candidate, .5) * maxWord) | 0;
        k[primeCounter++] = (Math.pow(candidate, 1 / 3) * maxWord) | 0;
      }
    }
    ascii += '\x80';
    while (ascii.length % 64 - 56) ascii += '\x00';
    for (i = 0; i < ascii.length; i++) words[i >> 2] |= ascii.charCodeAt(i) << ((3 - i) % 4) * 8;
    words[words.length] = ((asciiBitLength / maxWord) | 0);
    words[words.length] = (asciiBitLength);
    for (var j = 0; j < words.length;) {
      var w = words.slice(j, j += 16), oldHash = hash;
      hash = hash.slice(0, 8);
      for (i = 0; i < 64; i++) {
        var w15 = w[i - 15], w2 = w[i - 2], a = hash[0], e = hash[4];
        var temp1 = hash[7] + (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25)) + ((e & hash[5]) ^ ((~e) & hash[6])) + k[i] +
          (w[i] = (i < 16) ? w[i] : (w[i - 16] + (rr(w15, 7) ^ rr(w15, 18) ^ (w15 >>> 3)) + w[i - 7] + (rr(w2, 17) ^ rr(w2, 19) ^ (w2 >>> 10))) | 0);
        var temp2 = (rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash = [(temp1 + temp2) | 0].concat(hash);
        hash[4] = (hash[4] + temp1) | 0;
      }
      for (i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
    }
    for (i = 0; i < 8; i++) for (j = 3; j + 1; j--) { var b = (hash[i] >> (j * 8)) & 255; result += ((b < 16) ? 0 : '') + b.toString(16); }
    return result;
  }
};
