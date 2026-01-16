// src/data/projects.js

export const projects = [
  {
    id: 1, // O el número que toque
    title: "Útiles textiles",
    categories: ["Textil", "Editorial", "Acción"], // He deducido estas categorías principales
    year: "2025",
    tags: ["Textil", "Editorial", "Acción"], // Estas son para el filtro
    slug: "utiles-textiles",
    description: `Este proyecto parte del deseo de visibilizar y democratizar conocimientos tradicionalmente transmitidos de forma oral y práctica: seis saberes textiles recogidos en una serie de instrucciones sencillas, acompañadas de ilustraciones. El trabajo busca facilitar el acceso a estas técnicas reivindicándolas como saberes valiosos, muchas veces relegados a arte menor por su asociación con lo femenino.

La escritura de estos pasos, clara y accesible, dialoga con la tradición del aprendizaje transmitido de generación en generación, de mano en mano, de cuerpo a cuerpo. Al ponerlos por escrito y compartirlos en formatos simples, se propone preservar estos conocimientos sin despojarlos de su calidez, manteniendo su potencial afectivo y comunitario. Las instrucciones funcionan como pequeñas semillas: invitan a quien las recibe a practicar, experimentar y continuar la cadena de transmisión.`,
    
    // FOTO DE PORTADA (He puesto una de ejemplo, cambia el nombre si prefieres otra)
    image: "/img/utiles-textiles/Portadautilestextiles.png",

    // TODAS LAS FOTOS (Asegúrate de que los nombres coinciden con los archivos)
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
      "/img/utiles-textiles/IMG_5940.jpg" // <--- OJO: Esta es la HEIC convertida
    ]
  },
  {
    id: 2, // Ajusta el ID según toque
    title: "Cómo pegar un cartel",
    categories: ["Editorial", "Activismo", "Acción"],
    year: "2025",
    tags: ["Activismo", "Acción", "Editorial"],
    slug: "como-pegar-un-cartel", // IMPORTANTE: Este slug debe coincidir con la carpeta que crearemos
    description: `Este póster funciona como arte útil y acción directa. Debajo del título se lee una guía práctica para preparar engrudo casero: una receta sencilla, accesible y ecológica para pegar carteles en el espacio público. La pieza busca ofrecer herramientas concretas para la acción ciudadana, promoviendo la autonomía y la sostenibilidad en las prácticas de comunicación popular.

El propio cartel se difunde utilizando el engrudo que enseña a hacer, completando así un gesto coherente entre forma y contenido. Al pegarse en muros o espacios de tránsito, la obra se activa como dispositivo pedagógico en contexto, pensada para circular más allá de los marcos institucionales del arte. Este proyecto parte del deseo de compartir saberes y de reivindicar el espacio público como lugar de expresión, encuentro y lucha colectiva.`,
    
    // Foto única vertical
    image: "/img/cartel/FOTO1.jpg",
    gallery: ["/img/cartel/FOTO1.jpg"] // Lo dejamos vacío porque no usaremos la galería estándar
  },
 {
    id: 3, // Asegúrate de que este número sigue el orden (1, 2, 3...)
    title: "Telar humano",
    categories: ["Textil", "Acción", "Cuerpo", "Colectividad"],
    year: "2025",
    tags: ["Textil", "Acción", "Cuerpo", "Colectividad"],
    slug: "telar-humano",
    description: `Esta acción performática propuso convertir a las personas en el propio telar: sus cuerpos fueron urdimbre y trama, sostén y movimiento. A través de una coreografía colectiva, se tejió un telar vivo en el que cada participante ocupaba un lugar esencial en la estructura.

La pieza explora el tejido no solo como técnica, sino como metáfora encarnada de la comunidad: se construye en común, a partir del ritmo compartido, del cuidado mutuo y de la atención al otro. El telar humano fue un ejercicio de sincronía, de escucha y de presencia. Un entramado efímero pero potente, que pone el acento en el cuerpo como herramienta de creación y en lo colectivo como forma de resistencia y afecto.`,
    
    // FOTO DE PORTADA (La que sale en la Home)
    image: "/img/telarhumano/FOTO_2.jpg", 

    // GALERÍA (Las que salen dentro)
    gallery: [
      "/img/telarhumano/FOTO_1.jpg",
      "/img/telarhumano/FOTO_2.jpg",
      "/img/telarhumano/FOTO_3.jpg",
      "/img/telarhumano/FOTO_4.jpg"
    ]
  },
 {
    id: 4, // Seguimos la cuenta
    title: "Residencias tiza",
    categories: ["Colectividad", "Materialidades"],
    year: "2025",
    tags: ["Colectividad", "Materialidades"],
    slug: "residencias-tiza",
    description: `Dentro del marco de las Residencias Tiza, realicé un taller de grabado con estudiantes de secundaria, centrado en la estampación de objetos cotidianos. Cada alumno trajo consigo un objeto personal cargado de significado afectivo. La propuesta no era solo imprimir formas, sino dar lugar a una especie de inventario común de lo íntimo: una constelación de pertenencias que hablan de identidad, memoria y cuidado.

Se explora la plasticidad del grabado como una forma sensible de registro: cada pliegue, textura o contorno deja su huella, transformando lo material en imagen. Así, el grabado se convierte en una herramienta para preservar lo efímero, para fijar lo blando, lo usado, lo querido.`,
    
    // FOTO DE PORTADA
    image: "/img/tiza/FOTO_1.jpg",

    // GALERÍA
    gallery: [
      "/img/tiza/FOTO_1.jpg",
      "/img/tiza/FOTO_2.jpg",
      "/img/tiza/FOTO_3.jpg"
    ]
  },

  {
    id: 5,
    title: "Caries de plata",
    slug: "caries-de-plata",
    categories: ["Cuerpo", "Materialidades"],
    year: "2024",
    tags: ["Cuerpo", "Materialidades"],
    description: "Positivado en plata de una muela con caries de mi madre.",
    
    // Foto de portada (para la home)
    image: "/img/caries/FOTO_1.png",

    // RUTA DEL VÍDEO (Asegúrate de que sea .mp4)
    video: "/img/caries/video.mp4",
    gridVideo: "/img/caries/video.mp4",

    // LAS 6 FOTOS DEL DIENTE
    gallery: [
       "/img/caries/FOTO_1.png",
       "/img/caries/FOTO_2.png",
       "/img/caries/FOTO_3.png",
       "/img/caries/FOTO_4.png",
       "/img/caries/FOTO_5.png",
       "/img/caries/FOTO_6.png"
    ]
  },

  


  // --- CONSTELACIÓN FIBRA (6 al 10) ---

  // 6. EL PADRE (FIBRA GENERAL)
  {
    id: 6,
    title: "Colectivo FIBRA",
    slug: "colectivo-fibra",
    categories: ["Textil", "Gestión", "Comunidad"],
    year: "2023-2025",
    tags: ["Textil", "Colectividad", "Materialidades"],
    
    // FLAGS ESPECIALES
    group: "FIBRA",          // Etiqueta para el filtro
    isFibraParent: true,     // Flag para ocupar 3 columnas
    
    image: "/img/fibra/PORTADAFIBRA.jpg", // Asegúrate de que esta foto sea ancha/horizontal
    
    description: `FIBRA es una asociación de arte textil que construí junto a Laura Baeza, Laura Calderón, Claudia Corrales, Paula Hernando, Inés López, Andrea Monje, Laura Muñoz y Nora Saurina con el objetivo de reivindicar valores históricamente ligados a las prácticas textiles, como la colectividad, el trabajo comunitario y la transmisión de saberes bidireccional. A través de encuentros semanales, talleres públicos gratuitos y proyectos artísticos colaborativos, hemos construido un espacio de acceso libre para compartir ideas y aprender juntxs.

    FIBRA me ha permitido profundizar en el arte textil no solo como lenguaje plástico, sino también como herramienta para abordar problemáticas sociales e históricas. Más allá de revalorizar técnicas tradicionalmente desprestigiadas, me interesa especialmente cómo el textil ha generado históricamente espacios de encuentro entre mujeres. Esos espacios donde se entrelazan lo artístico y lo relacional son los que realmente sostienen mi interés: no tanto el objeto acabado como los vínculos y aprendizajes que se tejen en el proceso compartido.`
  },

  // 7. HIJO 1: BORDA PALESTINA
  {
    id: 7,
    title: "Borda Palestina",
    slug: "borda-palestina",
    categories: ["Textil", "Activismo"],
    year: "2024",
    tags: ["Textil", "Activismo"],
    
    group: "FIBRA", 
    isFibraChild: true, 

    description: "Este proyecto consistió en la realización de varios tatriz (bordados tradicionales palestinos) como parte de una acción colectiva organizada en Casa Árabe. La propuesta buscaba visibilizar y reivindicar el tatriz no solo como práctica artística, sino como símbolo profundo de identidad, memoria y resistencia.\n\nBordar se convierte así en un acto de cuidado, de preservación y denuncia. A través de estas piezas, se propuso una toma de conciencia sobre la urgencia de conservar esta práctica viva.",
    
    // --- AQUÍ ESTÁ LA CLAVE ---
    // 1. El vídeo que saldrá en la portada
    gridVideo: "/img/fibra/borda-palestina/PALESTINAVIDEO.mp4",

    // 2. La imagen de respaldo (por si el vídeo falla o para cuando entras al proyecto)
    image: "/img/fibra/borda-palestina/FOTO1.jpg", 
    
    gallery: [
        "/img/fibra/borda-palestina/FOTO1.jpeg",
        
    ]
},

  // 8. HIJO 2: TALLER PELUCHES
  {
    id: 8,
    title: "Taller de Peluches",
    slug: "taller-peluches",
    categories: ["Reciclaje", "Juego"],
    year: "2025",
    tags: ["Reciclaje", "Juego"],
    
    group: "FIBRA",
    isFibraChild: true,

    description: "Este taller propuso imaginar y confeccionar criaturas textiles a partir de materiales reciclados. Partimos de prendas en desuso, botones y retales, reivindicando el reciclaje como acto creativo y político.\n\nA través de la costura manual, lxs participantes dieron vida a criaturas híbridas y expresivas. El peluche dejó de ser un objeto estandarizado para convertirse en una herramienta de auto-representación y afecto.",
    
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

  // 9. HIJO 3: CONGRESO POSTSEXUALIDADES
  {
    id: 9,
    title: "Congreso Postsexualidades",
    slug: "congreso-postsexualidades",
    categories: ["Intimidad", "Cuerpo"],
    year: "2024",
    tags: ["Intimidad", "Cuerpo"],
    
    group: "FIBRA",
    isFibraChild: true,

    description: "Taller para explorar la intimidad a través del bordado sobre ropa interior. Se buscó resignificar estas prendas como formas de empoderamiento, más allá de su función práctica.\n\nEl encuentro ofreció un espacio seguro para el diálogo y el acompañamiento. Más que una obra terminada, el objetivo fue generar un círculo de afectos y reflexionar sobre la relación entre lo que vestimos y cómo nos habitamos.",
    
    image: "/img/fibra/congreso-postsex/postsex4.jpg",
    gallery: [
        "/img/fibra/congreso-postsex/postsex1.jpg",
        "/img/fibra/congreso-postsex/postsex2.jpg",
        "/img/fibra/congreso-postsex/postsex3.jpg",
        "/img/fibra/congreso-postsex/postsex4.jpg"
    ]
  },

  // 10. HIJO 4: FANZINES INFAMES
  {
    id: 10,
    title: "Fanzines Infames",
    slug: "fanzines-infames",
    categories: ["Pedagogía", "Publicación"],
    year: "2023-2024",
    tags: ["Pedagogía", "Publicación"],
    
    group: "FIBRA",
    isFibraChild: true,

    description: "Desarrollamos un fanzine imitando cuadernos de caligrafía, pero con frases bordadas sobre sexualidad para reflexionar sobre la educación afectiva. Hicimos dos versiones: una intervenida y otra para ser bordada por el público.\n\nTras recibir el premio Fanzines Infames, ampliamos el proyecto interviniendo 'babis' escolares con mensajes sobre la domesticación del deseo y la sumisión, reescribiendo esa educación desde una pedagogía crítica y desobediente. Expuesto en Tipos Infames (Madrid).",
    
    image: "/img/fibra/fanzines-infames/FOTO6.jpeg",
    gallery: [
        "/img/fibra/fanzines-infames/FOTO1.PNG",
        "/img/fibra/fanzines-infames/FOTO2.PNG",
        "/img/fibra/fanzines-infames/FOTO3.PNG",
        "/img/fibra/fanzines-infames/FOTO4.PNG",
        "/img/fibra/fanzines-infames/FOTO5.PNG",
        "/img/fibra/fanzines-infames/FOTO6.jpeg"
    ]
  }


];