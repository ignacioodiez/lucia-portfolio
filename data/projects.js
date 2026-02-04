// src/data/projects.js

export const projects = [
  {
    id: 11,
    // TITLE: Object structure for bilingual support
    title: {
      es: "Cuerpos taxidérmicos",
      en: "Taxidermic Bodies"
    },
    slug: "cuerpos-taxidermicos",
    categories: ["Cuerpo", "Materialidades"],
    year: "2024",
    tags: ["Cuerpo", "Materialidades"],
    
    // DESCRIPTION: Bilingual object
    description: {
      es: "Este proyecto explora la banalización del cuerpo humano al tratarlo como un objeto de consumo más. A través de un positivado en látex de mi propia piel, utilizo la taxidermia para simbolizar la cosificación de nuestra existencia. Al convertir la piel en un material manipulable y expuesto, la obra cuestiona la supuesta superioridad humana y nos enfrenta a la realidad de ser reducidos a meros objetos inanimados.\n\nEl uso del látex refuerza esta idea de vulnerabilidad, vinculando la protección de la piel con la fragilidad de las plantas. Al equiparar lo humano con lo vegetal, la pieza busca subvertir las nociones de poder y resistencia, invitando a una reflexión sobre nuestra posición en el orden natural. Es un ejercicio de honestidad material donde mi propio cuerpo se convierte en el recurso para cuestionar cómo valoramos la vida en un entorno de explotación constante.",
      en: "This project explores the trivialization of the human body by treating it as yet another object of consumption. Through a latex positive of my own skin, I use taxidermy to symbolize the commodification of our existence. By turning skin into a manipulable and exposed material, the work questions supposed human superiority and confronts us with the reality of being reduced to mere inanimate objects.\n\nThe use of latex reinforces this idea of vulnerability, linking the skin's protection with the fragility of plants. By equating the human with the vegetal, the piece seeks to subvert notions of power and resistance, inviting reflection on our position in the natural order. It is an exercise in material honesty where my own body becomes the resource to question how we value life in an environment of constant exploitation."
    },
    
    image: "/img/cuerpos/taxidermia_1.jpg", 
    gallery: [
        "/img/cuerpos/taxidermia_1.jpg",
        "/img/cuerpos/taxidermia_2.png",
        "/img/cuerpos/taxidermia_3.png",
        "/img/cuerpos/taxidermia_4.png"
    ]
  },

  {
    id: 8,
    title: {
      es: "Taller de Peluches",
      en: "Plush Toy Workshop"
    },
    slug: "taller-peluches",
    categories: ["Textil", "Colectividad", "Materialidades"],
    year: "2025",
    tags: ["Textil", "Colectividad", "Materialidades"],
    
    group: "FIBRA",
    isFibraChild: true,

    description: {
      es: "Este taller propuso imaginar y confeccionar criaturas textiles a partir de materiales reciclados. Partimos de prendas en desuso, botones y retales, reivindicando el reciclaje como acto creativo y político.\n\nA través de la costura manual, lxs participantes dieron vida a criaturas híbridas y expresivas. El peluche dejó de ser un objeto estandarizado para convertirse en una herramienta de auto-representación y afecto.",
      en: "This workshop proposed imagining and making textile creatures from recycled materials. We started with discarded garments, buttons, and scraps, claiming recycling as a creative and political act.\n\nThrough hand sewing, participants gave life to hybrid and expressive creatures. The plush toy ceased to be a standardized object and became a tool for self-representation and affection."
    },
    
    image: "/img/fibra/taller-peluches/FOTO9.png",
    gallery: [
        "/img/fibra/taller-peluches/FOTO1.jpg",
        "/img/fibra/taller-peluches/FOTO2.png",
        "/img/fibra/taller-peluches/FOTO3.jpg",
        "/img/fibra/taller-peluches/FOTO4.png",
        "/img/fibra/taller-peluches/FOTO5.png",
        "/img/fibra/taller-peluches/FOTO6.png",
        "/img/fibra/taller-peluches/FOTO7.png",
        "/img/fibra/taller-peluches/FOTO8.png",
        "/img/fibra/taller-peluches/FOTO9.png",
    ]
  },

  {
    id: 1,
    title: {
      es: "Útiles textiles",
      en: "Textile Tools"
    },
    categories: ["Textil", "Editorial", "Acción"],
    year: "2025",
    tags: ["Textil", "Editorial", "Acción"],
    slug: "utiles-textiles",
    description: {
      es: "Este proyecto parte del deseo de visibilizar y democratizar conocimientos tradicionalmente transmitidos de forma oral y práctica: seis saberes textiles recogidos en una serie de instrucciones sencillas, acompañadas de ilustraciones. El trabajo busca facilitar el acceso a estas técnicas reivindicándolas como saberes valiosos, muchas veces relegados a arte menor por su asociación con lo femenino.\n\nLa escritura de estos pasos, clara y accesible, dialoga con la tradición del aprendizaje transmitido de generación en generación, de mano en mano, de cuerpo a cuerpo. Al ponerlos por escrito y compartirlos en formatos simples, se propone preservar estos conocimientos sin despojarlos de su calidez, manteniendo su potencial afectivo y comunitario. Las instrucciones funcionan como pequeñas semillas: invitan a quien las recibe a practicar, experimentar y continuar la cadena de transmisión.",
      en: "This project stems from the desire to make visible and democratize knowledge traditionally transmitted orally and practically: six textile skills collected in a series of simple instructions, accompanied by illustrations. The work seeks to facilitate access to these techniques, reclaiming them as valuable knowledge often relegated to minor art due to their association with the feminine.\n\nThe writing of these steps, clear and accessible, dialogues with the tradition of learning transmitted from generation to generation, from hand to hand, from body to body. By putting them in writing and sharing them in simple formats, it is proposed to preserve this knowledge without stripping it of its warmth, maintaining its affective and communal potential. The instructions function as small seeds: they invite the recipient to practice, experiment, and continue the chain of transmission."
    },
    
    image: "/img/utiles-textiles/Portadautilestextiles.png",
    gallery: [
      "/img/utiles-textiles/botondelante.jpg",
      "/img/utiles-textiles/botondetras.jpg",
      "/img/utiles-textiles/dobladillodelante.jpg",
      "/img/utiles-textiles/dobladillodetras.jpg",
      "/img/utiles-textiles/lazodelante.jpg",
      "/img/utiles-textiles/lazodetras.jpg",
      "/img/utiles-textiles/puntadadelante.jpg",
      "/img/utiles-textiles/puntadadetras.jpg",
      "/img/utiles-textiles/remendardelante.jpg",
      "/img/utiles-textiles/remendardetras.jpg",
      "/img/utiles-textiles/traposdelante.jpg",
      "/img/utiles-textiles/traposdetras.jpg",
      "/img/utiles-textiles/IMG_5940.jpg"
    ]
  },

  {
    id: 3,
    title: {
      es: "Telar humano",
      en: "Human Loom"
    },
    categories: ["Textil", "Acción", "Cuerpo", "Colectividad"],
    year: "2025",
    tags: ["Textil", "Acción", "Cuerpo", "Colectividad"],
    slug: "telar-humano",
    description: {
      es: "Esta acción performática propuso convertir a las personas en el propio telar: sus cuerpos fueron urdimbre y trama, sostén y movimiento. A través de una coreografía colectiva, se tejió un telar vivo en el que cada participante ocupaba un lugar esencial en la estructura.\n\nLa pieza explora el tejido no solo como técnica, sino como metáfora encarnada de la comunidad: se construye en común, a partir del ritmo compartido, del cuidado mutuo y de la atención al otro. El telar humano fue un ejercicio de sincronía, de escucha y de presencia. Un entramado efímero pero potente, que pone el acento en el cuerpo como herramienta de creación y en lo colectivo como forma de resistencia y afecto.",
      en: "This performative action proposed turning people into the loom itself: their bodies were warp and weft, support and movement. Through a collective choreography, a living loom was woven in which each participant occupied an essential place in the structure.\n\nThe piece explores weaving not only as a technique but as an embodied metaphor of community: it is built in common, from shared rhythm, mutual care, and attention to the other. The human loom was an exercise in synchrony, listening, and presence. An ephemeral but potent framework that emphasizes the body as a tool of creation and the collective as a form of resistance and affection."
    },
    
    image: "/img/telarhumano/FOTO_2.jpg", 
    gallery: [
      "/img/telarhumano/FOTO_1.jpg",
      "/img/telarhumano/FOTO_2.jpg",
      "/img/telarhumano/FOTO_3.jpg",
      "/img/telarhumano/FOTO_4.jpg"
    ]
  },

  {
    id: 10,
    title: {
      es: "Fanzines Infames",
      en: "Infamous Zines"
    },
    slug: "fanzines-infames",
    categories: ["Editorial", "Textil", "Colectividad"],
    year: "2023-2024",
    tags: ["Editorial", "Textil", "Colectividad"],
    
    group: "FIBRA",
    isFibraChild: true,

    description: {
      es: "Desarrollamos un fanzine imitando cuadernos de caligrafía, pero con frases bordadas sobre sexualidad para reflexionar sobre la educación afectiva. Hicimos dos versiones: una intervenida y otra para ser bordada por el público.\n\nTras recibir el premio Fanzines Infames, ampliamos el proyecto interviniendo 'babis' escolares con mensajes sobre la domesticación del deseo y la sumisión, reescribiendo esa educación desde una pedagogía crítica y desobediente. Expuesto en Tipos Infames (Madrid).",
      en: "We developed a fanzine imitating calligraphy notebooks, but with embroidered phrases about sexuality to reflect on affective education. We made two versions: one intervened and another to be embroidered by the public.\n\nAfter receiving the 'Fanzines Infames' award, we expanded the project by intervening in school smocks with messages about the domestication of desire and submission, rewriting that education from a critical and disobedient pedagogy. Exhibited at Tipos Infames (Madrid)."
    },
    
    image: "/img/fibra/fanzines-infames/FOTO6.jpeg",
    gallery: [
        "/img/fibra/fanzines-infames/FOTO1.PNG",
        "/img/fibra/fanzines-infames/FOTO2.PNG",
        "/img/fibra/fanzines-infames/FOTO3.PNG",
        "/img/fibra/fanzines-infames/FOTO4.PNG",
        "/img/fibra/fanzines-infames/FOTO5.PNG",
        "/img/fibra/fanzines-infames/FOTO6.jpeg"
    ]
  },

  {
    id: 9,
    title: {
      es: "Congreso Postsexualidades",
      en: "Post-sexualities Congress"
    },
    slug: "congreso-postsexualidades",
    categories: ["Textil", "Cuerpo"],
    year: "2024",
    tags: ["Textil", "Cuerpo"],
    
    group: "FIBRA",
    isFibraChild: true,

    description: {
      es: "Taller para explorar la intimidad a través del bordado sobre ropa interior. Se buscó resignificar estas prendas como formas de empoderamiento, más allá de su función práctica.\n\nEl encuentro ofreció un espacio seguro para el diálogo y el acompañamiento. Más que una obra terminada, el objetivo fue generar un círculo de afectos y reflexionar sobre la relación entre lo que vestimos y cómo nos habitamos.",
      en: "Workshop to explore intimacy through embroidery on underwear. The aim was to resignify these garments as forms of empowerment, beyond their practical function.\n\nThe meeting offered a safe space for dialogue and accompaniment. More than a finished work, the goal was to generate a circle of affection and reflect on the relationship between what we wear and how we inhabit ourselves."
    },
    
    image: "/img/fibra/congreso-postsex/postsex4.jpg",
    gallery: [
        "/img/fibra/congreso-postsex/postsex2.jpg",
        "/img/fibra/congreso-postsex/postsex1.jpg",
        "/img/fibra/congreso-postsex/postsex4.jpg",
        "/img/fibra/congreso-postsex/postsex3.jpg"
    ]
  },

  {
    id: 7,
    title: {
      es: "Borda Palestina",
      en: "Embroid Palestine"
    },
    slug: "borda-palestina",
    categories: ["Textil", "Activismo"],
    year: "2024",
    tags: ["Textil", "Activismo"],
    
    group: "FIBRA", 
    isFibraChild: true, 

    description: {
      es: "Este proyecto consistió en la realización de varios tatriz (bordados tradicionales palestinos) como parte de una acción colectiva organizada en Casa Árabe. La propuesta buscaba visibilizar y reivindicar el tatriz no solo como práctica artística, sino como símbolo profundo de identidad, memoria y resistencia.\n\nBordar se convierte así en un acto de cuidado, de preservación y denuncia. A través de estas piezas, se propuso una toma de conciencia sobre la urgencia de conservar esta práctica viva.",
      en: "This project involved the creation of several tatriz (traditional Palestinian embroidery) as part of a collective action organized at Casa Árabe. The proposal sought to visualize and claim tatriz not only as an artistic practice but as a profound symbol of identity, memory, and resistance.\n\nEmbroidering thus becomes an act of care, preservation, and denunciation. Through these pieces, an awareness of the urgency of keeping this practice alive was proposed."
    },
    
    gridVideo: "/img/fibra/borda-palestina/PALESTINAVIDEO.mp4",
    image: "/img/fibra/borda-palestina/FOTO1.jpg", 
    gallery: [
        "/img/fibra/borda-palestina/FOTO1.jpeg",
    ]
  },

  {
    id: 4,
    title: {
      es: "Residencias Tiza",
      en: "Tiza Residencies"
    },
    categories: ["Colectividad", "Materialidades"],
    year: "2025",
    tags: ["Colectividad", "Materialidades"],
    slug: "residencias-tiza",
    description: {
      es: "Dentro del marco de las Residencias Tiza, realicé un taller de grabado con estudiantes de secundaria, centrado en la estampación de objetos cotidianos. Cada alumno trajo consigo un objeto personal cargado de significado afectivo. La propuesta no era solo imprimir formas, sino dar lugar a una especie de inventario común de lo íntimo: una constelación de pertenencias que hablan de identidad, memoria y cuidado.\n\nSe explora la plasticidad del grabado como una forma sensible de registro: cada pliegue, textura o contorno deja su huella, transformando lo material en imagen. Así, el grabado se convierte en una herramienta para preservar lo efímero, para fijar lo blando, lo usado, lo querido.",
      en: "Within the framework of the Tiza Residencies, I conducted an engraving workshop with high school students, focused on stamping everyday objects. Each student brought a personal object charged with affective meaning. The proposal was not just to print shapes, but to give rise to a kind of common inventory of the intimate: a constellation of belongings that speak of identity, memory, and care.\n\nThe plasticity of engraving is explored as a sensitive form of recording: every fold, texture, or contour leaves its mark, transforming the material into an image. Thus, engraving becomes a tool to preserve the ephemeral, to fix the soft, the used, the beloved."
    },
    
    image: "/img/tiza/FOTO_1.jpg",
    gallery: [
      "/img/tiza/FOTO_1.jpg",
      "/img/tiza/FOTO_2.jpg",
      "/img/tiza/FOTO_3.jpg"
    ]
  },

  {
    id: 5,
    title: {
      es: "Caries de plata",
      en: "Silver Caries"
    },
    slug: "caries-de-plata",
    categories: ["Cuerpo", "Materialidades"],
    year: "2024",
    tags: ["Cuerpo", "Materialidades"],
    description: {
      es: "Positivado en plata de una muela con caries de mi madre.",
      en: "Silver positive of a molar with caries from my mother."
    },
    
    image: "/img/caries/FOTO_1.png",
    video: "/img/caries/video.mp4",
    gridVideo: "/img/caries/video.mp4",
    gallery: [
       "/img/caries/FOTO_1.png",
       "/img/caries/FOTO_2.png",
       "/img/caries/FOTO_3.png",
       "/img/caries/FOTO_4.png",
       "/img/caries/FOTO_5.png",
       "/img/caries/FOTO_6.png"
    ]
  },

  {
    id: 6,
    title: {
      es: "Colectivo FIBRA",
      en: "FIBRA Collective"
    },
    slug: "colectivo-fibra",
    categories: ["Textil", "Colectividad"],
    year: "2023-2025",
    tags: ["Textil", "Colectividad"],
    
    group: "FIBRA",
    isFibraParent: true, 
    
    image: "/img/fibra/PORTADAFIBRA.jpg", 
    
    description: {
      es: "FIBRA es una asociación de arte textil que construí junto a Laura Baeza, Laura Calderón, Claudia Corrales, Paula Hernando, Inés López, Andrea Monje, Laura Muñoz y Nora Saurina con el objetivo de reivindicar valores históricamente ligados a las prácticas textiles, como la colectividad, el trabajo comunitario y la transmisión de saberes bidireccional. A través de encuentros semanales, talleres públicos gratuitos y proyectos artísticos colaborativos, hemos construido un espacio de acceso libre para compartir ideas y aprender juntxs.\n\nFIBRA me ha permitido profundizar en el arte textil no solo como lenguaje plástico, sino también como herramienta para abordar problemáticas sociales e históricas. Más allá de revalorizar técnicas tradicionalmente desprestigiadas, me interesa especialmente cómo el textil ha generado históricamente espacios de encuentro entre mujeres. Esos espacios donde se entrelazan lo artístico y lo relacional son los que realmente sostienen mi interés: no tanto el objeto acabado como los vínculos y aprendizajes que se tejen en el proceso compartido.",
      en: "FIBRA is a textile art association that I built together with Laura Baeza, Laura Calderón, Claudia Corrales, Paula Hernando, Inés López, Andrea Monje, Laura Muñoz, and Nora Saurina with the aim of claiming values historically linked to textile practices, such as collectivity, community work, and bidirectional knowledge transmission. Through weekly meetings, free public workshops, and collaborative artistic projects, we have built an open-access space to share ideas and learn together.\n\nFIBRA has allowed me to delve into textile art not only as a plastic language but also as a tool to address social and historical issues. Beyond revaluing traditionally discredited techniques, I am especially interested in how textiles have historically generated meeting spaces among women. Those spaces where the artistic and the relational intertwine are what really sustain my interest: not so much the finished object as the bonds and learning woven in the shared process."
    }
  },

  {
    id: 12,
    title: {
      es: "Graffiti/Ganchillo",
      en: "Graffiti/Crochet"
    },
    slug: "graffiti-ganchillo",
    categories: ["Textil"],
    year: "2024",
    tags: ["Textil"],
    
    description: {
      es: "Esta pieza traslada el textil (históricamente relegado al ámbito privado y doméstico) al espacio público a través del lenguaje del graffiti. Al intervenir el muro con la grafía del ganchillo, el proyecto explora la vulnerabilidad del \"cuerpo\" textil, que aquí queda desprotegido y expuesto al tacto o la alteración ajena.\n\nUtilizando la premisa de que \"lo personal es político\", la obra reivindica los oficios invisibilizados y asociados a lo femenino.",
      en: "This piece moves the textile (historically relegated to the private and domestic sphere) to the public space through the language of graffiti. By intervening on the wall with the script of crochet, the project explores the vulnerability of the textile \"body,\" which here remains unprotected and exposed to touch or external alteration.\n\nUsing the premise that \"the personal is political,\" the work claims invisible trades associated with the feminine."
    },
    
    image: "/img/grafitti/FOTO1.png",
    gallery: [
        "/img/grafitti/FOTO1.png", 
        "/img/grafitti/FOTO2.jpg"
    ]
  },

  {
    id: 2,
    title: {
      es: "Cómo pegar un cartel",
      en: "How to Paste a Poster"
    },
    categories: ["Editorial", "Activismo", "Acción"],
    year: "2025",
    tags: ["Activismo", "Acción", "Editorial"],
    slug: "como-pegar-un-cartel",
    description: {
      es: "Este póster funciona como arte útil y acción directa. Debajo del título se lee una guía práctica para preparar engrudo casero: una receta sencilla, accesible y ecológica para pegar carteles en el espacio público. La pieza busca ofrecer herramientas concretas para la acción ciudadana, promoviendo la autonomía y la sostenibilidad en las prácticas de comunicación popular.\n\nEl propio cartel se difunde utilizando el engrudo que enseña a hacer, completando así un gesto coherente entre forma y contenido. Al pegarse en muros o espacios de tránsito, la obra se activa como dispositivo pedagógico en contexto, pensada para circular más allá de los marcos institucionales del arte. Este proyecto parte del deseo de compartir saberes y de reivindicar el espacio público como lugar de expresión, encuentro y lucha colectiva.",
      en: "This poster functions as useful art and direct action. Below the title reads a practical guide to prepare homemade wheat paste: a simple, accessible, and ecological recipe for pasting posters in public spaces. The piece seeks to offer concrete tools for civic action, promoting autonomy and sustainability in popular communication practices.\n\nThe poster itself is distributed using the paste it teaches how to make, thus completing a coherent gesture between form and content. When pasted on walls or transit spaces, the work activates as a pedagogical device in context, designed to circulate beyond the institutional frameworks of art. This project stems from the desire to share knowledge and claim public space as a place of expression, meeting, and collective struggle."
    },
    
    image: "/img/cartel/FOTO1.jpg",
    gallery: ["/img/cartel/FOTO1.jpg"]
  },
];