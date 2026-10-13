/*
  Contenido del sitio. Todo lo que se muestra sale de acá.
  Textos tomados de la web de is.ARCH (PDF "Pag WEB is.arch") y del CV de Micaela.

  Marcas:
  - publicado: false  → no se muestra hasta confirmar.
  - "A confirmar"     → dato que viene del CV pero falta validar con Micaela.
  - rol: null         → no se muestra la línea de rol.
*/

window.SITIO = {
  estudio: "is.ARCH",

  hero: {
    titulo: "Cada lugar tiene algo que decir antes de que lleguemos",
    subtitulo: "Lo nuevo también puede tener historia.",
    bajada: "Creamos espacios donde la arquitectura, el diseño interior y el paisaje conviven en armonía. Trabajamos junto a cada cliente para traducir sus necesidades en un proyecto técnico, ordenado y fiel a su forma de habitar.",
    boton: "Hablemos de tu idea"
  },

  manifiesto: [
    "No creemos en borrar todo para empezar de cero.",
    "Creemos en mirar.",
    "En entender qué vale la pena conservar, qué necesita transformarse y qué todavía no existe.",
    "Un proyecto no empieza cuando llegamos.",
    "A veces, su historia vive en los hábitos que alguien trae de otra casa, en un árbol que ya le da carácter a un terreno vacío, en una casa que fue habitada y que hoy necesita acompañar una vida distinta, o en un mueble heredado que puede convertirse en el corazón de un nuevo espacio.",
    "La arquitectura como continuidad de un relato."
  ],

  servicios: [
    {
      titulo: "Remodelaciones",
      texto: "Creemos que hay una belleza profunda en conservar aquellas cosas que nos unen a la historia de un espacio o de un elemento noble. Nuestros proyectos de remodelación buscan encontrar el valor en lo existente: analizamos los pros y contras de cada lugar y su entorno, y cómo impactan en las personas que lo habitan. Nuestra premisa es transformar sin borrar."
    },
    {
      titulo: "Interiorismo",
      texto: "Concebimos el interiorismo como la herramienta para dar vida y sentido a un espacio. Diseñamos a medida, pensando cada detalle para que responda a la rutina diaria del cliente y acompañe su crecimiento. Un interiorismo que no es estático: sigue construyéndose con el habitar diario.",
      enlace: "#interiorismo"
    },
    {
      titulo: "Paisajismo",
      texto: "Concebimos el exterior a través de la arquitectura del paisaje, desde el diseño de un cantero o el jardín de una vivienda hasta el proyecto paisajístico integral para complejos de housing y centros comerciales. Trabajamos a partir de zonificaciones claras y respetamos la vegetación existente.",
      enlace: "#paisajismo"
    },
    {
      titulo: "Proyectos residenciales",
      texto: "Diseñar una casa es diseñar una parte de la vida de quienes la habitan. Analizamos el terreno y los recursos disponibles para construir un proyecto que pueda materializarse al detalle, garantizando eficiencia funcional, constructiva y económica. Antes de los detalles técnicos, nos aseguramos de que cada ambiente funcione para tu rutina."
    },
    {
      titulo: "Arquitectura para marcas y empresas",
      texto: "Espacios que comunican tu esencia y buscan que la visita sea una experiencia memorable. Nos alejamos del diseño comercial genérico: creamos lugares únicos para marcas que buscan diferenciarse. Resolvemos requerimientos operativos complejos, como la circulación, la climatización de grandes volúmenes y la integración de infraestructura específica."
    },
    {
      titulo: "Relevamientos y transcripciones",
      texto: "El relevamiento arquitectónico mide una propiedad existente para generar sus planos. Es clave cuando una edificación no tiene documentación técnica, o cuando sufrió ampliaciones que necesitan registrarse formalmente. La transcripción digitaliza planos antiguos que solo existen en papel. Sirven para regularizar un inmueble, revalorizarlo o empezar una remodelación."
    }
  ],

  // Proyectos propios del estudio. Solo se publican los que tienen publicado: true.
  proyectos: [
    {
      id: "cj",
      titulo: "Casa CJ",
      subtitulo: "Conservar para transformar",
      tipo: "Remodelación e interiorismo de vivienda",
      lugar: "Barrio Jockey Club, Córdoba",
      anio: 2025,
      publicado: true,
      thumb: "assets/img/cj/thumb.jpg",
      resumen: "El proyecto nace del desafío de adaptar la vivienda a las dinámicas de sus nuevos habitantes, manteniendo el encanto de su diseño original, el valor de sus techos de madera y su entorno natural.",
      cuerpo: [
        "La intervención principal se enfocó en resolver la desconexión interior de la planta baja. Al abrir la cocina y reubicar el núcleo sanitario que dividía el estar del comedor, logramos un área social continua y amplia que se expande de forma directa hacia la galería. En el sector privado, reorganizamos la suite principal e incorporamos nuevos usos solicitados por los dueños, como un gimnasio y un playroom.",
        "Para acompañar esta nueva forma de vivir la casa, el restyling de la fachada incorporó la piedra como lenguaje principal y tonos grises, un gesto que repetimos en muros interiores estratégicos para lograr una fluida continuidad visual y aportar calidez espacial.",
        "En el exterior modernizamos la piscina y trabajamos el entorno respetando la vegetación existente para potenciar la vida al aire libre y las vistas al campo de golf. Una estructura independiente en el jardín se convirtió en atelier y espacio de guardado deportivo, en coherencia estética con la vivienda."
      ],
      galeria: [
        { src: "assets/img/cj/01.jpg", alt: "Fachada de piedra con acceso y piso de adoquines, Casa CJ" },
        { src: "assets/img/cj/02.jpg", alt: "Piscina y jardín con árbol antiguo, Casa CJ" },
        { src: "assets/img/cj/07.jpg", alt: "Fachada de piedra entre árboles, Casa CJ" },
        { src: "assets/img/cj/08.jpg", alt: "Escalera de madera y vidrio junto a muro de piedra, Casa CJ" },
        { src: "assets/img/cj/03.jpg", alt: "Dormitorio con techo de madera y muro de piedra, Casa CJ" },
        { src: "assets/img/cj/09.jpg", alt: "Dormitorio con cabecera de piedra y techo de madera, Casa CJ" },
        { src: "assets/img/cj/04.jpg", alt: "Ventana con vista al comedor desde el exterior, Casa CJ" },
        { src: "assets/img/cj/05.jpg", alt: "Vista exterior de la casa al atardecer, Casa CJ" },
        { src: "assets/img/cj/06.jpg", alt: "Comedor con mesa de madera y muro de piedra, Casa CJ" },
        { src: "assets/img/cj/10.jpg", alt: "Living con sofá modular y luz natural, Casa CJ" }
      ],
      // Antes y después. Solo se compara en deslizador cuando la toma coincide.
      // El resto de las fotos "antes" se muestran como estado original.
      antesDespues: {
        // Fachada: comparación destacada, misma toma.
        pares: [
          { etiqueta: "Fachada", destacado: true, antes: "assets/img/cj/antes-fachada.jpg", despues: "assets/img/cj/thumb.jpg", alt: "Fachada antes y después de la remodelación, Casa CJ" }
        ],
        // Vistas generales: espacios distintos, para ver el cambio de carácter.
        generales: [
          { etiqueta: "Patio posterior", antes: "assets/img/cj/antes-patio.jpg", despues: "assets/img/cj/05.jpg", alt: "Vista general del patio posterior, Casa CJ" },
          { etiqueta: "Living", antes: "assets/img/cj/antes-living.jpg", despues: "assets/img/cj/10.jpg", alt: "Vista general del living, Casa CJ" },
          { etiqueta: "Escalera y hall", antes: "assets/img/cj/antes-escalera.jpg", despues: "assets/img/cj/08.jpg", alt: "Vista general de la escalera y el hall, Casa CJ" }
        ],
        estadoOriginal: [
          { src: "assets/img/cj/antes-acceso.jpg", alt: "Acceso antes de la remodelación, Casa CJ" },
          { src: "assets/img/cj/antes-cocina.jpg", alt: "Cocina antes de la remodelación, Casa CJ" },
          { src: "assets/img/cj/antes-living-2.jpg", alt: "Living con chimenea antes de la remodelación, Casa CJ" },
          { src: "assets/img/cj/antes-estar-alto.jpg", alt: "Estar en altura antes de la remodelación, Casa CJ" }
        ]
      },
      planos: []          // pendiente: planos de planta y corte
    },
    {
      id: "aj",
      titulo: "Casa AJ",
      subtitulo: "El paisaje como protagonista",
      tipo: "Arquitectura residencial",
      lugar: "Barrio Sierra Nueva, Mendiolaza",
      anio: 2023,
      publicado: true,
      thumb: "assets/img/aj/thumb.jpg",
      resumen: "Un terreno con un marcado desnivel hacia el fondo, y una vivienda pensada en tres niveles para dialogar con el jardín sin resignar las vistas a las montañas.",
      cuerpo: [
        "El acceso se diseñó resguardado de la calle, enmarcado por dos planos de piedra que dan paso hacia el interior, donde los estucados grises funcionan como un lienzo neutro. Así, la piedra, la madera y, sobre todo, la vista directa a la naturaleza aportan calidez espacial.",
        "La planta alta se reservó para las áreas privadas, mientras que la planta baja concentra la vida compartida. Un patio central actúa como corazón del proyecto y divide el uso diario —cocina y comedor de diario— del área social, cuyo protagonista es un muro de piedra de doble altura. Allí, la mesa del estar-comedor se transforma en mesa de pool, un espacio a medida para la vida de reuniones de los clientes.",
        "En el nivel inferior, un quincho independiente se funde con el jardín y permite grandes encuentros sin interferir con la intimidad del hogar. Pensando en el crecimiento familiar, cada gesto busca potenciar la funcionalidad y que la conexión con el entorno siga siendo el eje de la vivienda."
      ],
      galeria: [
        { src: "assets/img/aj/01.jpg", alt: "Acceso a la vivienda entre muros de piedra, Casa AJ" },
        { src: "assets/img/aj/02.jpg", alt: "Puerta de ingreso de madera y vidrio, Casa AJ" },
        { src: "assets/img/aj/03.jpg", alt: "Estar con muro de piedra y techo de madera, Casa AJ" },
        { src: "assets/img/aj/04.jpg", alt: "Escalera de madera con baranda de vidrio, Casa AJ" },
        { src: "assets/img/aj/05.jpg", alt: "Ingreso con espejo de agua y revestimiento de piedra, Casa AJ" },
        { src: "assets/img/aj/06.jpg", alt: "Cocina integrada con vista a la sierra, Casa AJ" }
      ],
      antesDespues: null,
      planos: []
    },
    {
      id: "fm",
      titulo: "Casa FM",
      subtitulo: "Arquitectura evolutiva y conexión natural",
      tipo: "Arquitectura residencial",
      lugar: "Barrio Sierra Nueva, Mendiolaza",
      anio: 2024,
      publicado: true,
      thumb: "assets/img/fm/thumb.jpg",
      resumen: "Una vivienda capaz de crecer y transformarse junto con la familia, con cada ambiente en contacto estrecho con el exterior.",
      cuerpo: [
        "Ubicada en un lote en esquina con una pendiente muy pronunciada, la estrategia fue implantar la casa en el sector más alto del terreno, para capturar la vista hacia las sierras cordobesas. El living se abre en dos de sus frentes con amplios ventanales hacia un patio privado. La cocina tiene un ventanal que se pliega y proyecta hacia el techo, para que entre la luz natural.",
        "Una galería recorre todo el largo de la casa hacia el patio posterior, y hacia ella se expanden el living y todos los dormitorios. En una segunda etapa, la planta baja se destinará a las áreas privadas y de uso diario, y las actividades sociales se trasladarán a la futura planta alta, con un gran estar-comedor-cocina que se expande a una terraza."
      ],
      galeria: [
        { src: "assets/img/fm/01.jpg", alt: "Fachada con vegetación y entrada, Casa FM" },
        { src: "assets/img/fm/02.jpg", alt: "Cocina con ventanal que se pliega hacia el techo, Casa FM" },
        { src: "assets/img/fm/03.jpg", alt: "Cocina con muebles de madera y gris, Casa FM" },
        { src: "assets/img/fm/04.jpg", alt: "Dormitorio con ventanal al jardín, Casa FM" },
        { src: "assets/img/fm/05.jpg", alt: "Baño con ducha de vidrio y revestimiento, Casa FM" },
        { src: "assets/img/fm/06.jpg", alt: "Living con ventanales y sofá, Casa FM" }
      ],
      antesDespues: null,
      planos: []
    },
    {
      id: "ft",
      titulo: "Casa FT",
      subtitulo: "La arquitectura proyectada para la vida real",
      tipo: "Arquitectura residencial",
      lugar: "Barrio El Terrón, Mendiolaza",
      anio: 2024,
      publicado: true,
      thumb: "assets/img/ft/thumb.jpg",
      resumen: "Una vivienda unifamiliar diseñada desde cero, con una planta baja conectada y sectorizada alrededor de un patio de luz interior.",
      cuerpo: [
        "La intervención principal se enfocó en el centro de la casa: un patio de luz interior, bordeado por una escalera, que organiza el espacio y separa sutilmente los ambientes.",
        "Para dar identidad y calidez, evitamos el diseño genérico y nos enfocamos en el estilo de vida de los clientes. Una chimenea en doble altura funciona como punto de encuentro, y una vinoteca expuesta se transformó en el corazón del comedor. La planta baja se abre a una gran galería que recorre la vivienda, y en la planta alta, un dormitorio principal con balcón privado mira a las montañas."
      ],
      galeria: [
        { src: "assets/img/ft/01.jpg", alt: "Living con doble altura, chimenea y biblioteca, Casa FT" },
        { src: "assets/img/ft/02.jpg", alt: "Cocina de madera y gris con isla y vista al jardín, Casa FT" },
        { src: "assets/img/ft/03.jpg", alt: "Living con sofás y ventanales al exterior, Casa FT" }
      ],
      antesDespues: null,
      planos: []
    },
    {
      id: "rie",
      titulo: "Consultorios RIE",
      subtitulo: "Diseño e innovación al servicio de la salud",
      tipo: "Arquitectura para salud",
      lugar: "Barrio Centro, Villa María",
      anio: 2018,
      publicado: true,
      thumb: "assets/img/rie/thumb.jpg",
      cuerpo: [
        "En un momento en que los espacios de salud todavía se aferraban a la estética clínica de blanco y turquesa, este proyecto nació con la premisa de crear una experiencia más cercana, de impronta profesional y pulcra, con gestos de diseño que aporten calidez.",
        "Ingresamos cuando el edificio aún estaba en obra, lo que permitió diseñar íntegramente las instalaciones bajo piso. A partir de un local en bruto se sectorizó la planta en cinco consultorios independientes y un recinto para el equipo profesional. En la recepción, un banco lineal sobre un muro nuevo maximiza la capacidad de asiento, y un muro de madera con placas en distintos volúmenes aporta textura y movimiento. Ese mismo tono cálido se repite en el resto de la clínica."
      ],
      galeria: [
        { src: "assets/img/rie/02.jpg", alt: "Recepción con flores y muro de madera, Consultorios RIE" },
        { src: "assets/img/rie/03.jpg", alt: "Recepción con puerta de vidrio y madera, Consultorios RIE" },
        { src: "assets/img/rie/04.jpg", alt: "Sala de espera moderna y minimalista, Consultorios RIE" }
      ],
      antesDespues: null,
      planos: []
    }
  ],

  // Proyectos hechos junto a otros profesionales. Vacío por ahora.
  // Cuando haya uno, se listan con el equipo y el aporte de Micaela.
  colaboraciones: [],

  // Equipo. La bio desplegable se muestra al hacer clic.
  equipo: [
    {
      nombre: "Arq. Micaela Budano",
      foto: "assets/img/equipo/micaela.jpg",
      rol: "Dirección de proyectos, acompañamiento al cliente, interiorismo & visualizaciones",
      bio: "Acompaña a cada cliente durante todo el proceso, guiando el diseño desde una mirada sensible del espacio integral. Coordina las reuniones y desarrolla las visualizaciones tridimensionales que permiten anticipar cómo se verá cada ambiente, asegurando que cada decisión técnica y material refleje fielmente la forma en que deseás habitar tu hogar.",
      trayectoria: [
        { cargo: "Co-fundadora y arquitecta proyectista", lugar: "is.ARCH · Estudio de arquitectura integral", periodo: "2023 – Actualidad" },
        { cargo: "Arquitecta coordinadora del área de visualización", lugar: "3D Córdoba · Córdoba Capital", periodo: "2020 – 2024" },
        { cargo: "Diseñadora y vendedora de mobiliario a medida", lugar: "Loft Tienda Estudio", periodo: "2020" },
        { cargo: "Visualización arquitectónica", lugar: "Turner Arquitectos · Santiago de Chile", periodo: "2019" },
        { cargo: "Arquitecta proyectista", lugar: "Urba Constructora · Villa María, Córdoba", periodo: "2017 – 2018" }
      ],
      formacion: [
        "Arquitecta · Facultad de Arquitectura, Urbanismo y Diseño, UNC · 2011 – 2016 · Promedio 7,87",
        "Formación pedagógica para adscriptos y ayudantes alumnos · UNC · 2015",
        "Curso de diseño de mobiliario y carpintería · CAMMEC · 2018"
      ],
      software: "AutoCAD · SketchUp · Lumion · D5 Render · Photoshop"
    },
    {
      nombre: "Arq. María Emilia De la Fuente",
      rol: "Estudio funcional, programas de remodelación y diseño paisajístico",
      bio: "Analiza en profundidad el funcionamiento de las remodelaciones y los nuevos programas arquitectónicos según las necesidades específicas de cada usuario. Desarrolla propuestas de diseño paisajístico que integran la estética funcional con el entorno natural, logrando una interacción fluida con el proyecto integral.",
      trayectoria: [],
      formacion: [],
      software: null
    },
    {
      nombre: "Arq. Francisco Tamantini Z.",
      rol: "Desarrollo técnico, infraestructura y diseño de instalaciones",
      bio: "Transforma las ideas en soluciones concretas, anticipando las necesidades de instalaciones y detalles constructivos del estudio. Lidera el control y seguimiento de la materialización de cada obra, e integra herramientas de inteligencia artificial para optimizar la documentación técnica y los procesos ejecutivos.",
      trayectoria: [],
      formacion: [],
      software: null
    }
  ],

  // Pasos del proceso general (secuencia real, por eso se numera).
  proceso: [
    { titulo: "Entrevista y análisis", etiqueta: "Diagnóstico", texto: "Nos reunimos para escuchar tus necesidades, entender tu dinámica y evaluar las condiciones iniciales del proyecto. Estudiamos el entorno, los elementos existentes, el asoleamiento y la identidad estética que buscás sentir." },
    { titulo: "Anteproyecto", etiqueta: "Diseño", texto: "Un ida y vuelta constante con vos hasta alcanzar la mejor versión del diseño. Definimos las distribuciones, las sensaciones lumínicas, los puntos de ventilación y la paleta de materiales. Desarrollamos modelados y visualizaciones 3D para anticipar el resultado final." },
    { titulo: "Documentación técnica", etiqueta: "Técnica", texto: "Traducimos las ideas aprobadas al lenguaje técnico necesario para la construcción. Desarrollamos planos ejecutivos, de instalaciones y de detalle, junto con ingenieros y asesores, y gestionamos las presentaciones municipales y colegiales que correspondan." },
    { titulo: "Acompañamiento de obra", etiqueta: "Gestión", texto: "Nuestra labor no termina en el papel. Mantenemos un canal directo para resolver dudas técnicas en tiempo real. Si el proyecto está en Córdoba o alrededores, ofrecemos acompañamiento de obra para verificar que se respete lo planificado." }
  ],

  interiorismo: {
    subtitulo: "Intervenciones a medida, renovación de espacios y asesorías online diseñadas para transformar tu día a día a través del detalle, la luz y la materialidad.",
    visionTitulo: "Nuestra visión",
    vision: "Concebimos el diseño interior como la construcción del escenario donde sucede tu vida. Nos enfocamos en una escucha profunda para entender cómo usás cada ambiente y qué sensaciones querés sentir en él.",
    modalidades: [
      { titulo: "Interiorismo express", tipo: "Asesoría virtual", texto: "Una modalidad ágil y 100% remota para transformar un ambiente específico sin una reforma compleja. Como devolución, entregamos una guía personalizada con una propuesta de distribución, una selección de elementos para mantener y otros para incorporar, y una paleta cromática y de materiales." },
      { titulo: "Interiorismo integral", tipo: "El paso a paso", texto: "Una estructura acumulativa donde cada etapa avanza sobre la anterior. Podés elegir hasta qué etapa llegar según tus objetivos, desde la idea inicial hasta el proceso completo de principio a fin." }
    ],
    pasos: [
      { titulo: "Look & feel", etiqueta: "Concepto", texto: "El punto de partida para definir el alma del espacio. Validamos la intención estética y funcional con moodboards de texturas, gamas cromáticas y equipamiento de referencia, junto con un esquema de distribución en planta." },
      { titulo: "Visualización tridimensional", etiqueta: "Imagen", texto: "Traducimos el concepto a tu espacio real para que no tengas que imaginar nada. Visualizamos la iluminación, el mobiliario y los revestimientos, y ajustamos la propuesta antes de comprar o fabricar." },
      { titulo: "Especificación ejecutiva", etiqueta: "Técnica", texto: "La hoja de ruta para materializar la imagen: curaduría de objetos de catálogo con proveedores seleccionados, y diseño al detalle de piezas a medida como bibliotecas, cocinas y vestidores, con sus planos y presupuestos de gremios." },
      { titulo: "Puesta en escena y styling", etiqueta: "Montaje", texto: "El acompañamiento final en el lugar: coordinación de gremios, control de colocación en obra y estilismo con objetos decorativos para que el espacio quede listo para ser habitado. Disponible en Córdoba y alrededores." }
    ]
  },

  paisajismo: {
    subtitulo: "Proyectamos exteriores donde la arquitectura y el diseño botánico conviven en armonía, creando entornos que maduran con el tiempo y acompañan tu forma de habitar el paisaje.",
    pasos: [
      { titulo: "Zonificación y look & feel", etiqueta: "Zonificación", texto: "Evaluamos las preexistencias, el asoleamiento, los desniveles, los vientos y la relación con la arquitectura. Definimos la intención estética con moodboards de texturas y paletas botánicas, y un plano de zonificación que ubica la vegetación, las circulaciones y los espacios de descanso." },
      { titulo: "Visualización del entorno", etiqueta: "Imagen", texto: "Traducimos las ideas a una representación visual para que puedas experimentar la atmósfera de tu futuro jardín. Previsualizamos pérgolas, senderos y fogoneros junto con el comportamiento de las plantas, para ajustar cada detalle antes de implantar." },
      { titulo: "Legajo técnico y botánico", etiqueta: "Técnica", texto: "El plano de plantación con cantidades, distanciamientos y nombres científicos de las especies; los planos constructivos de los elementos del paisaje (piscinas, solárium, herrerías); y las especificaciones de suelo y sistemas de riego." },
      { titulo: "Dirección de plantación y estilismo", etiqueta: "Montaje", texto: "Buscamos presupuestos y coordinamos los rubros y especialistas que ejecutan. Acompañamos la obra en Córdoba y alrededores: supervisamos la preparación del suelo, la distribución de los ejemplares según el plano y el estilismo final del exterior." }
    ]
  },

  contacto: {
    titulo: "¿Hablamos de tu proyecto?",
    texto: "El primer paso es una entrevista virtual para definir el alcance del proyecto. Después te enviamos un presupuesto detallado, sin cargo y a la medida de tu caso.",
    whatsapp: "https://wa.me/5493534096659",
    whatsappTexto: "Escribinos por WhatsApp",
    email: "micabudano@hotmail.com",
    instagram: "https://www.instagram.com/is.arch.arq/",
    cobertura: "Modalidad 100% virtual para todo el país. Presencial en Córdoba y alrededores.",
    ubicacion: "Mendiolaza, Córdoba"
  },

  formacionEstudio: null
};
