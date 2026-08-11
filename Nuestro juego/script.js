// ======================================================
// 💕 ENTRE NOSOTROS — BANCO DE PREGUNTAS
// 6 categorías × 50 preguntas = 300 preguntas
// ======================================================

const questions = {

  // ====================================================
  // 💕 AFECTO, COQUETEO Y CONEXIÓN
  // ====================================================

  afecto: [

    "¿Qué fue lo primero que te pareció atractivo de mí?",
    "¿Qué tipo de mirada mía te pone más nervioso/a?",
    "¿Cuál ha sido nuestro momento con más química?",
    "¿Qué cumplido mío te gusta especialmente recibir?",
    "¿Qué tipo de cita te parece más romántica?",
    "¿Qué detalle mío te parece irresistible?",
    "¿Qué outfit mío te gusta más?",
    "¿Qué tipo de coqueteo te parece más divertido?",
    "¿Cuál ha sido nuestro momento más intenso emocionalmente?",
    "¿Qué cosa hago que hace que te pongas tímido/a?",
    "¿Qué característica física mía te gusta más?",
    "¿Qué tipo de contacto cariñoso te hace sentir más conectado/a?",
    "¿Qué momento entre nosotros tuvo más tensión romántica?",
    "¿Qué apodo mío te parece más coqueto?",
    "¿Qué cita nocturna te gustaría tener conmigo?",
    "¿Qué canción pondrías para crear un ambiente romántico?",
    "¿Qué gesto mío te hace sentir especialmente especial?",
    "¿Qué recuerdo nuestro te produce una sonrisa instantánea?",
    "¿Qué tipo de cumplido nunca te cansarías de escuchar?",
    "¿Qué haría que una cita sencilla se volviera inolvidable?",
    "¿Qué lugar te parece perfecto para una cita romántica?",
    "¿Qué fue lo que más te intrigó de mí al conocernos?",
    "¿Qué momento nuestro repetirías exactamente igual?",
    "¿Qué característica de mi personalidad encuentras más atractiva?",
    "¿Qué significa para ti tener química con alguien?",

    "¿Qué pequeño gesto mío te hace sentir querido/a?",
    "¿Cuál fue el momento en que empezaste a verme diferente?",
    "¿Qué recuerdo nuestro te hace sonreír automáticamente?",
    "¿Qué apodo cariñoso te gusta que use contigo?",
    "¿Qué característica mía te parece más atractiva?",
    "¿Cuál ha sido nuestro momento más romántico?",
    "¿Qué canción podría representar nuestra relación?",
    "¿Qué cosa hago que te parece especialmente tierna?",
    "¿Qué cumplido mío recuerdas especialmente?",
    "¿Qué momento conmigo te gustaría volver a vivir?",
    "¿Qué tipo de sorpresa romántica te gustaría recibir?",
    "¿Qué gesto de cariño significa más para ti?",
    "¿Qué cosa de nuestra relación te gustaría que hiciéramos más?",
    "¿Qué palabra usarías para describir nuestra conexión?",
    "¿Qué cita sería perfecta para nosotros?",
    "¿Qué cosa inesperada te ha gustado descubrir de mí?",
    "¿Qué recuerdo nuestro contarías dentro de muchos años?",
    "¿Qué te hace sentir más conectado/a conmigo?",
    "¿Qué aventura romántica te gustaría vivir conmigo?",
    "Si nuestra relación fuera una película, ¿qué título tendría?",
    "¿Qué detalle inesperado te haría sentir muy especial?",
    "¿Qué momento cotidiano nuestro te parece romántico aunque sea sencillo?",
    "¿Qué lugar de nuestra ciudad convertirías en nuestro lugar especial?",
    "¿Qué tradición romántica te gustaría crear juntos?",
    "¿Qué palabra describe mejor la forma en que nos queremos?"
  ],


  // ====================================================
  // 🧭 CREENCIAS Y VALORES
  // ====================================================

  valores: [

    "¿Qué valor consideras indispensable en una relación?",
    "¿Qué significa para ti ser una buena persona?",
    "¿Qué principio nunca estarías dispuesto/a a abandonar?",
    "¿Qué cualidad valoras más en tus amigos?",
    "¿Qué significa para ti la honestidad?",
    "¿Crees que las personas pueden cambiar realmente?",
    "¿Qué significa para ti perdonar?",
    "¿Qué cosa consideras una falta de respeto en una relación?",
    "¿Qué papel tiene la confianza para ti?",
    "¿Qué valor aprendiste de tu familia?",
    "¿Qué valor te gustaría enseñar a tus futuros hijos?",
    "¿Qué significa para ti ser responsable?",
    "¿Qué haces cuando descubres que estabas equivocado/a?",
    "¿Prefieres decir siempre la verdad aunque pueda doler?",
    "¿Qué significa para ti cumplir una promesa?",
    "¿Qué característica hace que alguien sea un buen amigo?",
    "¿Qué opinas sobre dar segundas oportunidades?",
    "¿Qué significa para ti la lealtad?",
    "¿Qué cosas nunca deberían negociarse en una relación?",
    "¿Qué importancia tiene la empatía para ti?",
    "¿Qué causa social te parece especialmente importante?",
    "¿Qué injusticia te cuesta más aceptar?",
    "¿Qué significa para ti tratar a alguien con respeto?",
    "¿Qué aprendiste de algún error importante que hayas cometido?",
    "¿Qué valor te gustaría desarrollar más?",
    "¿Qué significa para ti tener una vida exitosa?",
    "¿Qué prefieres: estabilidad o libertad?",
    "¿Qué significa para ti ser independiente?",
    "¿Qué lugar ocupa la familia entre tus prioridades?",
    "¿Qué significa para ti ser una persona confiable?",
    "¿Qué haces cuando dos personas que quieres tienen un conflicto?",
    "¿Crees que una pareja debe compartir las mismas creencias?",
    "¿Qué diferencias de opinión puedes aceptar fácilmente?",
    "¿Qué diferencia de opinión sería difícil para ti manejar?",
    "¿Qué significa para ti respetar los límites de otra persona?",
    "¿Qué valor consideras que está desapareciendo actualmente?",
    "¿Qué consejo sobre la vida nunca olvidarás?",
    "¿Qué significa para ti ser generoso/a?",
    "¿Crees que el dinero cambia a las personas?",
    "¿Qué significa para ti vivir una vida feliz?",
    "¿Qué importancia tiene la espiritualidad en tu vida?",
    "¿Qué tradición o creencia familiar te gustaría conservar?",
    "¿Qué opinión tuya ha cambiado mucho con los años?",
    "¿Qué significa para ti aceptar a alguien tal como es?",
    "¿Qué consideras más importante: tener razón o resolver un conflicto?",
    "¿Qué hace que una disculpa sea sincera?",
    "¿Qué valor debería tener toda pareja?",
    "¿Qué significa para ti construir una vida juntos?",
    "¿Qué legado te gustaría dejar?",
    "¿Qué principio te gustaría que nunca olvidáramos como pareja?"
  ],


  // ====================================================
  // 🏠 FAMILIA Y HOGAR
  // ====================================================

  familia: [

    "¿Qué tradición familiar te gustaría mantener para siempre?",
    "¿Cómo imaginas nuestro hogar ideal?",
    "¿Qué aprendiste de tu familia sobre el amor?",
    "¿Qué tradición te gustaría crear juntos?",
    "¿Qué significa para ti tener un hogar?",
    "¿Qué habitación de una casa disfrutas más?",
    "¿Prefieres vivir en una casa grande o pequeña y acogedora?",
    "¿Qué ciudad sería ideal para formar nuestro hogar?",
    "¿Cómo sería tu cocina ideal?",
    "¿Qué actividad familiar te gustaría hacer regularmente?",
    "¿Qué recuerdo de tu infancia te gustaría repetir?",
    "¿Qué costumbre de tu familia te parece divertida?",
    "¿Qué cosa de tu infancia te gustaría conservar cuando seas adulto/a?",
    "¿Qué importancia tiene recibir visitas en casa?",
    "¿Te gustaría tener mascotas en nuestro futuro hogar?",
    "¿Qué mascota tendrías si pudieras elegir cualquiera?",
    "¿Cómo imaginas un domingo perfecto en casa?",
    "¿Qué comida te gustaría que nunca faltara en nuestro hogar?",
    "¿Qué tradición de cumpleaños te gustaría crear?",
    "¿Qué celebración familiar disfrutas más?",
    "¿Qué aprendiste de tus padres o cuidadores?",
    "¿Qué cosa harías diferente al formar tu propia familia?",
    "¿Qué característica debería tener nuestro futuro hogar?",
    "¿Prefieres decorar juntos o dejar que cada persona tenga su espacio?",
    "¿Qué objeto de tu infancia conservarías para siempre?",
    "¿Qué recuerdo familiar te hace reír?",
    "¿Qué lugar de tu casa actual te gusta más?",
    "¿Qué actividad te gustaría hacer en familia cada semana?",
    "¿Qué significa para ti una familia unida?",
    "¿Qué importancia tiene tener tiempo familiar?",
    "¿Cómo dividirías las tareas del hogar?",
    "¿Qué tarea doméstica te gusta menos?",
    "¿Qué tarea doméstica no te molesta hacer?",
    "¿Prefieres cocinar juntos o que uno cocine para ambos?",
    "¿Cómo sería nuestra noche familiar ideal?",
    "¿Qué tradición navideña te gustaría mantener?",
    "¿Qué lugar te gustaría que fuera nuestro hogar durante las fiestas?",
    "¿Te gustaría vivir cerca de tu familia?",
    "¿Qué ventajas ves en vivir independientemente?",
    "¿Qué significa para ti tener un espacio propio?",
    "¿Cómo resolverías un desacuerdo sobre la decoración del hogar?",
    "¿Qué cosa debería tener siempre nuestra casa?",
    "¿Te gustaría tener un jardín?",
    "¿Qué tipo de vecindario te gustaría?",
    "¿Prefieres una ciudad grande o un lugar tranquilo?",
    "¿Qué actividad familiar nunca debería faltar?",
    "¿Cómo imaginas nuestras reuniones familiares?",
    "¿Qué recuerdo familiar te gustaría contarles a futuras generaciones?",
    "¿Qué tradición nueva inventarías para nuestra familia?",
    "¿Cómo sería el hogar perfecto para nosotros?"
  ],


  // ====================================================
  // 🎵 INTERESES Y FAVORITOS
  // ====================================================

  intereses: [

    "¿Cuál es tu película favorita de todos los tiempos?",
    "¿Qué canción podrías escuchar una y otra vez?",
    "¿Cuál es tu comida favorita?",
    "¿Qué lugar del mundo te gustaría visitar?",
    "¿Qué hobby te gustaría aprender?",
    "¿Qué serie recomendarías a todo el mundo?",
    "¿Cuál es tu libro favorito?",
    "¿Qué artista musical te gusta más?",
    "¿Qué género musical escuchas más?",
    "¿Cuál es tu videojuego favorito?",
    "¿Qué deporte disfrutas más?",
    "¿Qué actividad podrías hacer durante horas sin aburrirte?",
    "¿Cuál es tu estación del año favorita?",
    "¿Cuál es tu clima perfecto?",
    "¿Qué animal te gusta más?",
    "¿Cuál es tu color favorito?",
    "¿Cuál es tu postre favorito?",
    "¿Qué bebida disfrutas más?",
    "¿Cuál es tu restaurante favorito?",
    "¿Qué comida nunca te cansarías de comer?",
    "¿Qué película te hace llorar?",
    "¿Qué película siempre te hace reír?",
    "¿Qué canción te recuerda a tu infancia?",
    "¿Qué canción te recuerda a nosotros?",
    "¿Qué concierto te gustaría ver?",
    "¿Qué famoso te gustaría conocer?",
    "¿Qué personaje ficticio te gustaría tener como amigo?",
    "¿Qué superpoder elegirías?",
    "¿Qué época histórica te gustaría visitar?",
    "¿Qué país te gustaría conocer primero?",
    "¿Qué ciudad te parece hermosa?",
    "¿Qué idioma te gustaría aprender?",
    "¿Qué instrumento musical aprenderías?",
    "¿Qué talento te gustaría tener?",
    "¿Qué actividad nueva probarías conmigo?",
    "¿Qué tipo de vacaciones prefieres?",
    "¿Playa, montaña o ciudad?",
    "¿Qué parque temático te gustaría visitar?",
    "¿Qué tipo de fotografía te gusta?",
    "¿Qué aplicación utilizas más?",
    "¿Qué red social te parece más entretenida?",
    "¿Qué tendencia nunca entendiste?",
    "¿Qué moda te gustaría probar?",
    "¿Qué estilo de ropa te gusta más?",
    "¿Qué objeto siempre llevas contigo?",
    "¿Qué colección te gustaría tener?",
    "¿Qué cosa pequeña te hace feliz?",
    "¿Qué actividad te gustaría convertir en una tradición de pareja?",
    "¿Qué experiencia te gustaría vivir al menos una vez?",
    "¿Cuál sería nuestro viaje soñado?"
  ],


  // ====================================================
  // 🧠 PERSONALIDAD Y HÁBITOS
  // ====================================================

  personalidad: [

    "¿Qué característica de tu personalidad te gusta más?",
    "¿Qué característica tuya crees que los demás notan primero?",
    "¿Eres más de planear o improvisar?",
    "¿Qué haces cuando necesitas estar a solas?",
    "¿Qué hábito tuyo crees que me parece gracioso?",
    "¿Eres una persona madrugadora o nocturna?",
    "¿Qué haces cuando estás estresado/a?",
    "¿Cómo demuestras que estás feliz?",
    "¿Cómo reaccionas cuando algo no sale como esperabas?",
    "¿Qué cosa pequeña puede mejorar inmediatamente tu día?",
    "¿Prefieres hablar de un problema inmediatamente o esperar?",
    "¿Te consideras una persona organizada?",
    "¿Qué hábito te gustaría cambiar?",
    "¿Qué hábito te gustaría adquirir?",
    "¿Qué haces antes de dormir?",
    "¿Cuál es tu rutina perfecta para un día libre?",
    "¿Qué te ayuda a concentrarte?",
    "¿Qué te distrae fácilmente?",
    "¿Prefieres trabajar solo/a o acompañado/a?",
    "¿Cómo reaccionas ante las críticas?",
    "¿Te cuesta pedir ayuda?",
    "¿Te consideras paciente?",
    "¿Qué situación te hace perder la paciencia?",
    "¿Eres más emocional o racional al tomar decisiones?",
    "¿Sueles pensar mucho antes de decidir?",
    "¿Qué te pone nervioso/a?",
    "¿Qué te ayuda a sentirte tranquilo/a?",
    "¿Qué haces cuando necesitas recuperar energía?",
    "¿Qué situación te hace sentir orgulloso/a de ti mismo/a?",
    "¿Qué inseguridad has aprendido a manejar?",
    "¿Qué cosa te gustaría que los demás entendieran mejor sobre ti?",
    "¿Qué parte de tu personalidad ha cambiado con los años?",
    "¿Qué característica tuya quieres conservar siempre?",
    "¿Qué te hace sentir escuchado/a?",
    "¿Qué significa para ti tener espacio personal?",
    "¿Cuánto tiempo necesitas para sentirte cómodo/a con alguien?",
    "¿Te resulta fácil expresar tus sentimientos?",
    "¿Cómo prefieres resolver una discusión?",
    "¿Qué haces cuando estás molesto/a?",
    "¿Qué tipo de personas te hacen sentir cómodo/a?",
    "¿Qué tipo de comportamiento te irrita?",
    "¿Eres más competitivo/a o cooperativo/a?",
    "¿Qué te motiva cuando quieres conseguir algo?",
    "¿Qué haces cuando pierdes la motivación?",
    "¿Qué te ayuda a recuperar la confianza?",
    "¿Qué hábito mío crees que has adoptado?",
    "¿Qué hábito tuyo crees que yo podría adoptar?",
    "¿En qué situación crees que hacemos buen equipo?",
    "¿Qué has aprendido sobre ti gracias a nuestra relación?",
    "¿Qué aspecto de tu personalidad te gustaría explorar más?"
  ],


  // ====================================================
  // 💼 TRABAJO Y DINERO
  // ====================================================

  trabajo: [

    "¿Cuál es una meta profesional que realmente quieres conseguir?",
    "¿Qué significa para ti tener estabilidad económica?",
    "¿Qué harías si no tuvieras que preocuparte por el dinero?",
    "¿Prefieres ganar más dinero o tener más tiempo libre?",
    "¿Cuál sería nuestro objetivo financiero como pareja?",
    "¿Qué trabajo soñarías con tener?",
    "¿Qué profesión nunca elegirías?",
    "¿Qué habilidad profesional te gustaría aprender?",
    "¿Te gustaría trabajar por tu cuenta algún día?",
    "¿Te gustaría tener un negocio propio?",
    "¿Qué tipo de negocio crearías?",
    "¿Qué significa para ti ser exitoso/a profesionalmente?",
    "¿Qué importancia tiene el reconocimiento laboral para ti?",
    "¿Qué prefieres: un trabajo estable o uno emocionante?",
    "¿Qué harías si recibieras un aumento importante?",
    "¿Qué harías con $10.000 inesperados?",
    "¿Qué harías si ganaras la lotería?",
    "¿Cuál sería tu primera gran compra?",
    "¿Qué objetivo financiero te gustaría conseguir primero?",
    "¿Te gustaría comprar una casa algún día?",
    "¿Qué características tendría nuestra casa ideal?",
    "¿Prefieres ahorrar durante mucho tiempo o alcanzar metas rápidamente?",
    "¿Qué significa para ti ahorrar?",
    "¿Qué gasto consideras completamente innecesario?",
    "¿En qué cosa sí te gusta gastar dinero?",
    "¿Qué compra consideras que vale totalmente la pena?",
    "¿Te resulta fácil ahorrar?",
    "¿Qué método utilizarías para organizar nuestro dinero?",
    "¿Crees que las parejas deberían tener un presupuesto conjunto?",
    "¿Prefieres cuentas separadas o compartir parte del dinero?",
    "¿Qué gasto debería discutirse antes de hacerlo como pareja?",
    "¿Qué significa para ti tener independencia económica?",
    "¿Qué deuda considerarías aceptable?",
    "¿Qué objetivo financiero te gustaría conseguir en cinco años?",
    "¿Qué objetivo profesional te gustaría conseguir en cinco años?",
    "¿Te gustaría estudiar otra carrera o especialización?",
    "¿Qué país considerarías para trabajar algún día?",
    "¿Aceptarías mudarte por una buena oportunidad laboral?",
    "¿Qué es más importante: pasión o salario?",
    "¿Qué sacrificio estarías dispuesto/a a hacer por una meta profesional?",
    "¿Qué sacrificio no estarías dispuesto/a a hacer por dinero?",
    "¿Qué significa para ti un buen ambiente laboral?",
    "¿Qué característica debería tener un buen jefe?",
    "¿Qué harías si ganaras suficiente dinero para no trabajar?",
    "¿Te gustaría jubilarte temprano?",
    "¿Qué experiencia te gustaría pagar con tu primer gran ahorro?",
    "¿Qué sueño te gustaría financiar algún día?",
    "¿Qué significa para ti construir estabilidad junto a alguien?",
    "¿Cuál sería nuestro mayor objetivo económico como pareja?",
    "¿Cómo imaginas nuestra vida financiera ideal?"
  ]

};


// ======================================================
// ℹ️ INFORMACIÓN DE LAS CATEGORÍAS
// ======================================================

const categoryInfo = {

  afecto: {
    title: "Afecto y preguntas HOT",
    icon: "💕"
  },

  valores: {
    title: "Creencias y valores",
    icon: "🧭"
  },

  familia: {
    title: "Familia y hogar",
    icon: "🏠"
  },

  intereses: {
    title: "Intereses y favoritos",
    icon: "🎵"
  },

  personalidad: {
    title: "Personalidad y hábitos",
    icon: "🧠"
  },

  trabajo: {
    title: "Trabajo y dinero",
    icon: "💼"
  }

};


// ======================================================
// 🎮 VARIABLES DEL JUEGO
// ======================================================

let currentCategory = "";
let currentQuestions = [];
let currentQuestion = 0;


// ======================================================
// 🎲 INICIAR JUEGO
// ======================================================

function startGame(category) {

  currentCategory = category;

  // Crear una copia de las preguntas
  currentQuestions = [...questions[category]];

  // Mezclarlas
  shuffle(currentQuestions);

  currentQuestion = 0;

  // Cambiar de pantalla
  document.getElementById("home").style.display = "none";
  document.getElementById("game").style.display = "block";

  // Actualizar título
  document.getElementById("categoryTitle").textContent =
    categoryInfo[category].title;

  // Actualizar emoji
  document.getElementById("categoryIcon").textContent =
    categoryInfo[category].icon;

  // Mostrar primera pregunta
  showQuestion();
}


// ======================================================
// 🃏 MOSTRAR PREGUNTA
// ======================================================

function showQuestion() {

  const questionElement = document.getElementById("question");

  questionElement.textContent =
    currentQuestions[currentQuestion];

  document.getElementById("counter").textContent =
    `Pregunta ${currentQuestion + 1} de ${currentQuestions.length}`;
}


// ======================================================
// ⏭️ SIGUIENTE PREGUNTA
// ======================================================

function nextQuestion() {

  currentQuestion++;

  // Cuando llegan al final de las 50
  if (currentQuestion >= currentQuestions.length) {

    // Volvemos a mezclar
    shuffle(currentQuestions);

    currentQuestion = 0;
  }

  showQuestion();
}


// ======================================================
// 🎲 MEZCLAR ARRAY
// ======================================================

function shuffle(array) {

  for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] =
      [array[j], array[i]];
  }

  return array;
}


// ======================================================
// 🏠 VOLVER A CATEGORÍAS
// ======================================================

function goHome() {

  document.getElementById("game").style.display = "none";

  document.getElementById("home").style.display = "block";
}
