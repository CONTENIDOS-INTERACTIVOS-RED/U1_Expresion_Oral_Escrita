export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'LA COMUNICACIÓN ASERTIVA',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Características de la comunicación asertiva.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Beneficios de la comunicación asertiva en la educación infantil.',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estrategias para fortalecer la comunicación asertiva.',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Estrategias para comunicarse en público con efectividad en educación infantil.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ramos Ramos, P. (Coord.). (2016). Asertividad y habilidades sociales en la comunicación y atención al ciudadano: (2 ed.). Editorial ICB.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106683 ',
    },
    {
      referencia:
        'Félix Valverde, M. D. R. & Toledano Valentín, R. (2015). Expresión y comunicación: técnico superior en comunicación infantil: ( ed.). Editorial CEP, S.L. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50778 ',
    },
    {
      referencia:
        'Rincón Bohórquez, AP (2019). Cartilla pedagógica para el desarrollo de la comunicación asertiva en maestras y maestros de educación infantil del Jardín Alcalá Muzú de la Secretaría Distrital de Integración Social. Universidad Distrital Francisco José de Caldas',
      link:
        'https://repository.udistrital.edu.co/server/api/core/bitstreams/770afeb7-1513-4294-bce5-302d87678042/content ',
    },
    {
      referencia:
        'Caballero-Velázquez, E., Cruz-Palacios, Y., & Otero-Góngora, Y. (2018). La comunicación asertiva: un método de estimulación en la formación del profesional pedagógico. Universidad de Holguín, Cuba. ',
      link: 'https://www.redalyc.org/articulo.oa?id=589167642003',
    },
    {
      referencia:
        'Barrera-Andrade, PA, Espinosa-Cevallos, PA y Chamorro-Benavides, Carolina del Norte (2023). La importancia de un modelo de comunicación asertiva en el proceso del desarrollo de habilidades comunicativas en niños de 0 a 5 años. RECIAMUC, 7 (2), 827-837. ',
      link:
        'https://reciamuc.com/index.php/RECIAMUC/article/download/1174/1853/2298 ',
    },
  ],
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'habilidad comunicativa que permite expresar pensamientos, sentimientos y necesidades de manera clara y respetuosa.',
    },
    {
      termino: 'Canal de comunicación',
      significado:
        'medio a través del cual se transmite un mensaje, ya sea verbal, escrito o no verbal.',
    },
    {
      termino: 'Código',
      significado:
        'conjunto de signos y reglas utilizados para elaborar un mensaje en la comunicación.',
    },
    {
      termino: 'Comunicación de hechos',
      significado:
        'interacción en la que el mensaje es comprendido correctamente por el receptor, sin distorsiones.',
    },
    {
      termino: 'Comunicación no verbal',
      significado:
        'conjunto de gestos, expresiones faciales, posturas y otros elementos que transmiten información sin usar palabras.',
    },
    {
      termino: 'Destinatario',
      significado:
        'persona que recibe el mensaje en el proceso de comunicación.',
    },
    {
      termino: 'Empatía',
      significado:
        'capacidad de comprender y compartir los sentimientos o emociones de otra persona.',
    },
    {
      termino: 'Escucha activa',
      significado:
        'habilidad que implica prestar total atención a un interlocutor, mostrando interés y comprensión en la conversación.',
    },
    {
      termino: 'Expresión oral',
      significado:
        'capacidad de transmitir ideas y emociones mediante el habla, utilizando un lenguaje claro y estructurado.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'respuesta o reacción del receptor ante un mensaje, lo que permite verificar si se ha entendido correctamente.',
    },
    {
      termino: 'Mensaje',
      significado:
        'información que se transmite de un emisor a un receptor a través de un canal de comunicación.',
    },
    {
      termino: 'Ruido en la comunicación',
      significado:
        'interferencias o factores que dificultan la correcta transmisión del mensaje, como distracciones o malentendidos.',
    },
    {
      termino: 'Sintonía comunicativa',
      significado:
        'nivel de conexión y entendimiento entre los participantes de un proceso comunicativo.',
    },
    {
      termino: 'Tono de voz',
      significado:
        'variaciones en la intensidad, ritmo y modulación de la voz que afectan el significado del mensaje.',
    },
    {
      termino: 'Turno de palabra',
      significado:
        'espacio que se respeta en una conversación para que cada persona pueda expresarse sin interrupciones.',
    },
  ],
}
