<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Título tema'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La comunicación asertiva se define como la capacidad de expresar pensamientos, emociones y necesidades de manera clara y respetuosa, sin generar conflictos innecesarios ni someterse a la voluntad de los demás (Caballero-Velázquez et al., 2018). Se distingue por su equilibrio entre la expresión honesta y la consideración por el interlocutor, evitando la agresividad o la pasividad en la interacción.
    
    p.mb-4 Según Félix Valverde y Toledano Valentín (2015), la comunicación asertiva en el ámbito educativo es esencial para generar confianza y fortalecer la relación entre docentes y alumnos. No se trata solo de lo que se dice, sino también de cómo se dice. Un mensaje asertivo debe estar estructurado de forma clara, ser preciso y transmitir seguridad, evitando malentendidos o ambigüedades que puedan dificultar la comprensión del estudiante.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este tipo de comunicación también implica el uso de herramientas que permiten establecer un diálogo fluido, basado en el respeto mutuo. La asertividad en el aula permite a los docentes corregir sin desmotivar, dar indicaciones con claridad y generar espacios de aprendizaje en los niños para que los niños se sientan seguros para participar activamente. En consecuencia, el desarrollo de esta habilidad es imprescindible para la enseñanza efectiva y la formación integral de los estudiantes (Ramos Ramos, 2016).
        p(data-aos="fade-left") Para comprender y aplicar la comunicación asertiva en la educación infantil, es necesario identificar sus principales elementos. Estos componentes permiten estructurar un mensaje efectivo, asegurando que la interacción sea clara, empática y adecuada al contexto educativo.
        p(data-aos="fade-left")  A continuación, se presentan los elementos clave de la comunicación asertiva en el ámbito escolar, organizados en un cuadro didáctico para facilitar su comprensión:
    
    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-9
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/4.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="5%" y="83.5%" numero="+")
                h5 Claridad
                p Organizar y expresar ideas de manera estructurada (Félix Valverde & Toledano Valentín, 2015).
    
              .bg-color-white.box-shadow.p-3(x="21.8%" y="20.5%" numero="+")
                h5 Escucha activa
                p Comprender el mensaje antes de responder, fomentando el respeto (Rincón Bohórquez, 2019).
    
              .bg-color-white.box-shadow.p-3(x="44.4%" y="83.5%" numero="+")
                h5 Empatía
                p Reconocer y validar las emociones del interlocutor para mejorar la interacción (Ramos Ramos, 2016).
    
              .bg-color-white.box-shadow.p-3(x="60.1%" y="20.5%" numero="+")
                h5 Tono adecuado
                p Adaptar el lenguaje y la entonación según el contexto y los receptores (Caballero-Velázquez et al., 2018).
    
              .bg-color-white.box-shadow.p-3(x="82.2%" y="83.5%" numero="+")
                h5 Seguridad
                p Expresar ideas con confianza sin imponerlas ni minimizar opiniones ajenas (Rincón Bohórquez, 2019).

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Estos elementos son esenciales para que los docentes puedan transmitir conocimientos de manera efectiva y construir un ambiente escolar en el que los niños se sientan cómodos para participar activamente.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") La educación infantil es una etapa clave en la formación de habilidades sociales y emocionales. En este nivel, los niños aprenden a comunicarse no solo a través del lenguaje verbal, sino también mediante gestos, expresiones y comportamientos. Un entorno donde se fomenta la comunicación asertiva contribuye a que desarrollen una comunicación efectiva y respetuosa, sentando las bases para su interacción futura en la sociedad (Caballero-Velázquez et al., 2018).
        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 Los docentes desempeñan un papel crucial en este proceso, ya que su manera de comunicarse influye en la forma en que los niños aprenden a relacionarse con los demás. Si un maestro utiliza un lenguaje claro y respetuoso, modela un comportamiento comunicativo positivo, que los estudiantes tienden a imitar. De esta manera, la comunicación asertiva no solo favorece la enseñanza de contenidos académicos, sino que también contribuye a la formación del carácter y la personalidad del niño (Rincón Bohórquez, 2019).
    
    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0.text-white.mt-5 La asertividad permite gestionar mejor los conflictos dentro del aula. En muchas ocasiones, los niños pueden experimentar frustración o desacuerdos con sus compañeros, y es responsabilidad del docente guiarlos hacia una resolución pacífica y efectiva. La implementación de estrategias de comunicación asertiva en estas situaciones ayuda a prevenir conductas agresivas o de retraimiento, promoviendo el diálogo y la comprensión mutua (Félix Valverde & Toledano Valentín, 2015).
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 Para integrar la comunicación asertiva en el contexto educativo, es recomendable que los docentes implementen estrategias que favorezcan la interacción positiva. Algunas prácticas efectivas incluyen:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Establecer normas de comunicación claras
                p.text-center Enseñar a los estudiantes a respetar los turnos de palabra, evitar interrupciones y expresar sus opiniones de manera estructurada. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Fomentar el diálogo abierto
                p.text-center Crear espacios de conversación donde los niños puedan compartir sus pensamientos y emociones sin temor a ser juzgados. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Usar preguntas abiertas
                p.text-center Estimular el pensamiento crítico y la argumentación mediante preguntas que requieran respuestas elaboradas. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Brindar retroalimentación constructiva
                p.text-center Corregir errores de manera respetuosa, resaltando los aspectos positivos antes de señalar oportunidades de mejora. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Modelar el comportamiento asertivo
                p.text-center Mostrar a los niños cómo expresarse con confianza y respeto a través del ejemplo.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/8.png', alt='')

    p.mb-5 La aplicación de estas estrategias en el aula contribuye a la formación de un entorno en el que la comunicación fluya de manera efectiva y armoniosa, beneficiando tanto a docentes como a estudiantes.

    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4.h-100(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") Comunicarse de manera efectiva es un elemento fundamental en la educación infantil, ya que influye directamente en la calidad de las interacciones dentro del aula. Comprender sus principios y aplicar sus elementos clave permite transmitir conocimientos de manera clara en un ambiente de aprendizaje positivo. Al modelar este tipo de comunicación, se contribuye al desarrollo emocional y social de los niños, preparándolos para una interacción más efectiva en su vida académica y personal.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") El uso de estrategias específicas para fortalecer la interacción en el aula garantiza una mejor gestión de los procesos educativos, promoviendo la participación activa y la resolución pacífica de conflictos. Por ello, su incorporación en la formación docente es imprescindible para potenciar el impacto positivo en la enseñanza y el aprendizaje.
          figure.d-flex.justify-content-end
            img(src='@/assets/curso/tema1/11.svg', style="max-width:92px" alt='')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Beneficios de la comunicación asertiva en la educación infantil.
   
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/12.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El uso adecuado de la comunicación en la enseñanza inicial ofrece ventajas significativas para la formación integral de los estudiantes. A través de una interacción respetuosa y equilibrada, se favorece el desarrollo de habilidades sociales, la armonía en el ambiente escolar y la optimización de los procesos pedagógicos. En esta etapa, los niños adoptan modelos de comportamiento que influyen en su manera de relacionarse con los demás, por lo que la forma en que los educadores expresan ideas y gestionan el diálogo es determinante (Caballero-Velázquez, Cruz-Palacios y Otero-Góngora, 2018).
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Esta práctica no solo impacta la transmisión de conocimientos, sino también la convivencia en el aula y la autoconfianza de los menores. Al establecer una comunicación equilibrada, se facilita la comprensión, se reducen los malentendidos y se genera un espacio seguro para el aprendizaje.
        p.mb-5(data-aos="fade-left") A continuación, se presentan los principales beneficios de la comunicación asertiva en la educación infantil:

    .bg-full-width-2.bg-color-7
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Fomento de la seguridad emocional en los niños
        p Desde los primeros años de escolaridad, el entorno influye en el bienestar de los alumnos. La interacción basada en la escucha y la validación de emociones contribuye a fortalecer la autoestima, permitiendo que los niños se sientan valorados.
        p.mb-5 Los principales efectos de esta comunicación en la seguridad emocional son:

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-6
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Lenguaje claro y afectuoso
                  p.mb-0 Genera confianza y seguridad al expresarse.

          .col-lg-6
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Verbalización de emociones
                  p.mb-0 Favorece la autonomía en la resolución de problemas.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Reducción de ansiedad y frustración
              p.mb-0 Disminuye comportamientos agresivos o de retraimiento.
      .col-lg-6
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Motivación por el aprendizaje
              p.mb-0 Los alumnos se sienten cómodos para equivocarse y aprender.
    
    .row.mb-5
      .col-auto
        img(src="@/assets/curso/tema1/17.svg", data-aos="zoom-in")
      .col
        h2(data-aos="fade-left") Storytelling
        p.mb-5 En una clase de preescolar, Sofía, una niña tímida, tiene miedo de compartir sus ideas. Durante una actividad de narración de cuentos, la docente le pregunta con amabilidad:


    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                p.mb-0 —Sofía, ¿qué opinas sobre el final del cuento? Me encantaría escuchar tu idea.
                p.mb-0 Al notar su nerviosismo, la maestra le da tiempo para responder y le dice con una sonrisa:
                p.mb-0 —No hay respuestas incorrectas. Tu idea es importante para nosotros.
                p.mb-0 Después de su participación, la profesora refuerza positivamente su esfuerzo:
                p.mb-0 —Me gustó mucho tu comentario. Gracias por compartirlo con todos.
                p.mb-0 Con este tipo de estímulos, Sofía gana confianza en su capacidad para expresarse y se siente valorada en el aula.

              .col-lg-5(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/18.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Mejora en la interacción entre pares
    p.mb-5 El aprendizaje en la infancia no solo depende de la relación con los adultos, sino también del intercambio con los compañeros. La comunicación asertiva favorece:

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/19.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Desarrollo de habilidades sociales
                p.mb-0 Los niños aprenden a dialogar con respeto.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/20.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Resolución de conflictos
                p.mb-0 Se fomenta la expresión de ideas sin imposiciones.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/21.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Trabajo colaborativo
                p.mb-0 Se promueve la cooperación en actividades grupales.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/22.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Creación de vínculos saludables
                p.mb-0 Se fortalece la empatía y la tolerancia.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Cuando los educadores modelan una comunicación efectiva, los niños replican estas conductas en sus relaciones interpersonales. Esto evita la exclusión o el aislamiento y fomenta un ambiente donde cada estudiante se siente parte del grupo.

    .row.mb-5
      .col-auto
        img(src="@/assets/curso/tema1/17.svg", data-aos="zoom-in")
      .col
        h2(data-aos="fade-left") Storytelling
        p.mb-5 En una dinámica de trabajo en equipo, los niños deben construir una torre con bloques. Andrés y Camila no logran ponerse de acuerdo sobre la manera de empezar y comienzan a discutir. La docente interviene utilizando la comunicación asertiva:

    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.text-white
                p.mb-0 —Veo que ambos tienen ideas interesantes. Andrés, explícale a Camila tu idea y luego escuchamos la de ella.
                p.mb-0 Después de que ambos expresan su punto de vista, la maestra les dice:
                p.mb-0 —Ahora piensen juntos en cómo combinar sus ideas para hacer una torre más fuerte.
                p.mb-0 Al mediar la conversación de esta manera, los estudiantes aprenden a escuchar, valorar la opinión del otro y trabajar en equipo sin generar conflictos.


              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/23.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Disminución de conflictos en el aula
    p.mb-5 La convivencia escolar no está exenta de desacuerdos. Sin embargo, la manera en que estos se gestionan influye en la dinámica del grupo. Una comunicación equilibrada y respetuosa permite resolver malentendidos de forma adecuada, evitando que escalen a situaciones problemáticas.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-9.p-4(data-aos="fade-left")
          p.mb-0 Un modelo de comunicación basado en la <b>escucha activa</b> y la <b>expresión adecuada de pensamientos</b> promueve la resolución pacífica de conflictos. En lugar de recurrir a la imposición o el enfrentamiento, los niños aprenden a negociar, expresar su desacuerdo sin agresividad y buscar soluciones conjuntas. Esta habilidad no solo es valiosa en el ámbito escolar, sino que también resulta fundamental en futuras interacciones personales y profesionales (Caballero-Velázquez et al., 2018).
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Desde el rol docente, el uso de un lenguaje asertivo permite intervenir en situaciones de conflicto sin recurrir a órdenes autoritarias o sanciones punitivas. En su lugar, el maestro guía a los estudiantes para que encuentren <b>alternativas de solución</b> por sí mismos, promoviendo la mediación y la toma de decisiones fundamentadas en el respeto y la equidad.

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/25.svg" alt="" style="width: 90px")
              h5.text-center Escucha activa
              p.mb-0.text-center Permite que los niños expresen sus sentimientos sin temor.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/26.svg" alt="" style="width: 90px")
              h5.text-center Negociación
              p.mb-0.text-center Fomenta el diálogo en lugar de la imposición de opiniones.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/27.svg" alt="" style="width: 90px")
              h5.text-center Modelado del docente
              p.mb-0.text-center Los niños aprenden estrategias de mediación observando al maestro.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/28.svg" alt="" style="width: 90px")
              h5.text-center Búsqueda de soluciones conjuntas
              p.mb-0.text-center Reduce la confrontación y favorece el trabajo en equipo.

    .row.mb-5
      .col-auto
        img(src="@/assets/curso/tema1/17.svg", data-aos="zoom-in")
      .col
        h2(data-aos="fade-left") Storytelling
        p.mb-5 Miguel y Valentina discuten porque ambos quieren el mismo juguete en la zona de juegos. Miguel se muestra molesto y Valentina cruza los brazos con frustración. 

    .bg-full-width.bg-h85-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.mt-5
                p.mb-0 En lugar de regañarlos, la docente se acerca y les dice:
                p.mb-0 —Entiendo que los dos quieren usar el mismo juguete. ¿Cómo creen que podemos resolver esto para que ambos estén contentos?
                p.mb-0 Después de un breve silencio, Miguel propone turnarse. La maestra refuerza su solución:
                p.mb-0 —Esa es una excelente idea, Miguel. Si se turnan, ambos podrán disfrutar del juguete sin pelear.
                p.mb-0 Con este ejercicio, los niños aprenden a manejar desacuerdos sin recurrir al enojo o la agresión.

              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/29.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2.mb-5(data-aos="fade-left") Fortalecimiento del pensamiento crítico y la argumentación

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/30.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El desarrollo de una comunicación efectiva influye en la capacidad de los niños para estructurar sus ideas y defender sus posturas con claridad. A través de la práctica de la <b>expresión asertiva</b>, se fomenta la organización del pensamiento, la formulación de argumentos coherentes y el análisis de diferentes perspectivas antes de emitir juicios o respuestas.
        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 Esta habilidad se refleja en una mayor participación en actividades como <b>debates, exposiciones y trabajos en equipo.</b> Cuando los niños aprenden a expresar sus opiniones con seguridad y respeto, se sienten más motivados a intervenir en discusiones académicas sin temor a la crítica. A largo plazo, esto contribuye a la formación de individuos con capacidad de reflexión, análisis y comunicación efectiva en distintos ámbitos de su vida (Félix Valverde y Toledano Valentín, 2015).

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/31.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Expresión asertiva	
              p.mb-0 Permite que los niños estructuren mejor sus ideas.

      .col-lg-6
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/32.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Participación en debates	
              p.mb-0 Aumenta la confianza para compartir opiniones.

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/33.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Escucha y análisis de argumentos	
                  p.mb-0 Favorece la reflexión antes de emitir juicios.
          .col-lg-6
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/34.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Trabajo en equipo	
                  p.mb-0 Promueve el respeto y la valoración de diferentes perspectivas.

        .row.mb-5
          .col-auto
            img(src="@/assets/curso/tema1/17.svg", data-aos="zoom-in")
          .col
            h2(data-aos="fade-left") Storytelling
            p.mb-5 Durante una actividad en la que los niños deben decidir cuál es el mejor lugar para un picnic escolar, el docente divide la clase en dos grupos. Un equipo debe defender la idea de realizarlo en el parque, mientras que el otro argumenta a favor del patio de la escuela.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/35.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-10.p-4(data-aos="fade-left")
          p.mb-0 Cada grupo presenta razones como:
          p.mb-0 m—En el parque hay más espacio para jugar.
          p.mb-0 m—En el patio estamos más cerca del salón y es más seguro.
          p.mb-0 mLa maestra guía la discusión y pregunta:
          p.mb-0 m—¿Qué pasaría si llueve? ¿Cómo podrían resolverlo?

        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Al finalizar, el grupo llega a un consenso combinando ideas. Con este ejercicio, los niños practican la argumentación, aprenden a respetar diferentes puntos de vista y fortalecen su capacidad de análisis.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Estrategias para fortalecer la comunicación asertiva.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/36.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/37.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Fortalecer la comunicación asertiva no se trata solo de hablar con claridad, sino de transmitir ideas con confianza, respeto y empatía. En la educación infantil, esta habilidad se convierte en un pilar para la construcción de relaciones sanas y un aprendizaje efectivo. No basta con conocer sus beneficios, es necesario aplicar estrategias prácticas que permitan su desarrollo tanto en los niños como en los educadores.
        p(data-aos="fade-left") A continuación, se presentan estrategias dinámicas y aplicables que ayudan a potenciar la comunicación asertiva dentro del aula:
    
    h2(data-aos="fade-left") Refuerzo positivo: valora cada esfuerzo.
    p.mb-5 Nada motiva más a un niño que ser escuchado y valorado. Cuando un estudiante expresa una idea con claridad y respeto, reconoce su esfuerzo, refuerza esa conducta y lo impulsa a seguir comunicándose de manera asertiva.

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/38.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Ejemplo práctico
                p.mb-0 En una actividad grupal, Sofía logra expresar su punto de vista sin interrumpir a sus compañeros. El docente responde: “Sofía, me gustó cómo esperaste tu turno para hablar y cómo explicaste tu idea con respeto. ¡Eso ayuda a que todos nos entendamos mejor!”
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/39.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Consejo
                p.mb-0 Haz que el refuerzo positivo sea específico. En lugar de decir Buen trabajo, señala qué aspecto fue valioso: Me gusta cómo explicaste tu opinión con tranquilidad o Fue excelente cómo escuchaste a tu compañero antes de responder.

    h2(data-aos="fade-left") La escucha activa: Más que oír, comprender.
    p.mb-5 Si hablas, pero no escuchas, la comunicación se convierte en un monólogo. Enseñar a los niños a escuchar con atención es clave para que la interacción fluya de manera efectiva.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/40.png")
            .col-lg-7.order-lg-1
              h5 Actividad
              p Juega con los niños a "El eco”. Un estudiante dice una frase, y el siguiente repite lo que escuchó antes de dar su propia respuesta. Este ejercicio les ayuda a prestar atención antes de hablar.
              h5 Técnicas para aplicar en el aula:
              p.mb-0 <b>1.</b> Haz contacto visual con el niño que habla. 
              p.mb-0 <b>2.</b> Repite o parafrasea lo que dijo antes de responder. 
              p.mb-0 <b>3.</b> Usa gestos y expresiones que demuestren interés.

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/41.png")
            .col-lg-7.order-lg-1
              h5 Ejemplo práctico
              p Si un estudiante dice: Me gusta el recreo porque jugamos al escondite, su compañero puede reformular: Entiendo que disfrutas el recreo porque puedes divertirte con tus amigos. Esto no solo mejora la comprensión, sino que también fomenta la empatía y la interacción respetuosa.

    h2(data-aos="fade-left") Construcción de confianza: Espacios seguros para expresarse
    p.mb-5 Muchos niños evitan hablar por miedo a equivocarse o ser juzgados. Crear un ambiente en el que se sientan seguros para compartir sus pensamientos es fundamental para fortalecer su capacidad de comunicación.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/42.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Actividad") Dramatización: Organiza una Hora de expresión, donde cada niño pueda hablar de un tema que le interesa sin interrupciones. Puede ser una historia, una experiencia o incluso un cuento inventado.
          div(numero="2" titulo="Ejemplo práctico") 
            p.mb-0En una actividad de narración, Andrés se equivoca en la historia y se siente avergonzado. En vez de corregirlo de inmediato, el docente dice: Andrés, tu historia tiene un giro interesante, ¿qué pasaría si el personaje intentara otra solución? 
            p.mb-0 Esto le permite reformular sin sentirse juzgado.
          p(numero="3" titulo="Consejo") Evita respuestas desmotivadoras como: No, eso no es así. En su lugar, guía al niño con preguntas como: Interesante punto de vista, ¿qué más podríamos agregar?
    
    h2(data-aos="fade-left") Juegos y dinámicas para aprender a comunicarse mejor
    p.mb-5 El aprendizaje lúdico es una de las formas más efectivas de enseñar habilidades sociales y comunicativas.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/43.png")
            .col-lg-7.order-lg-1
              h5 El semáforo de la comunicación
              p Presenta diferentes respuestas a una situación y los niños deben clasificarlas en rojo (agresiva), amarillo (pasiva) y verde (asertiva).
              h5 Ejemplo.
              p Rojo: "Quiero ese juguete. ¡Dámelo ya!", Amarillo: "Está bien, quédate con el juguete" Verde: "¿Podemos compartir el juguete por turnos?"

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/44.png")
            .col-lg-7.order-lg-1
              h5 Dado de la empatía
              p En cada cara del dado hay una pregunta: "¿Cómo te sentirías si un amigo no te escucha?" o "¿Qué harías si alguien interrumpe cuando hablas?”.
              h5 Ejemplo.
              p Los niños responden y reflexionan sobre la importancia de escuchar y expresarse con respeto.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/45.png")
            .col-lg-7.order-lg-1
              h5 Historias incompletas
              p Se presenta una historia con un conflicto y los niños deben proponer un desenlace usando la comunicación asertiva.
              h5 Ejemplo.
              p "Ana y Pedro quieren el mismo color de crayón, pero solo queda uno. ¿Cómo pueden resolverlo sin pelear?".
    
    h2.mb-5(data-aos="fade-left") Normas de comunicación claras

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/46.png", data-aos="zoom-in")
      .col-lg-8
        p Establecer reglas sencillas y visuales sobre cómo hablar en el aula ayuda a reforzar hábitos comunicativos saludables.
        .bg-color-11.px-4(data-aos="fade-left")
          h5 Ejemplo de normas
          .row
            .col-lg-8.mb-3.mb-lg-0
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-12
                  p.mb-0 Levantar la mano antes de hablar. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-12
                  p.mb-0 Respetar turnos en la conversación. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-12
                  p.mb-0 Usar frases como "Por favor" y "Gracias”. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-12
                  p.mb-0 Escuchar antes de responder. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-12
                  p.mb-0 Evitar gritar o interrumpir. 
            .col-lg-4
              figure
                img(src="@/assets/curso/tema1/47.svg", data-aos="zoom-in")
            
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          h5 Tip visual
          p Crea un cartel con imágenes representativas de estas normas y colócalo en un lugar visible del aula.

    .bg-full-width.bg-color-8
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/48.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white El fortalecimiento de la comunicación asertiva en la educación infantil no ocurre de un día para otro. Requiere práctica constante, modelado y estrategias dinámicas que motiven a los niños a expresarse con seguridad y respeto. Por lo anterior, se aprende a comunicar el profesor con su estudiantado, para que así, pueda ser ejemplo de una manera correcta del lenguaje verbal.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/descarga/articulo/8482994.pdf" target="_blank" rel="noopener noreferrer") Bernal-Álava, Á. F., Cañarte-Vélez, CR, Macías-Parrales, TM, & Ponce-Castillo, M. Á. (2022). La comunicación asertiva y su apoyo en el proceso de enseñanza y aprendizaje. Pol. Estafa., 7 (4), 682-695. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/50253 " target="_blank" rel="noopener noreferrer") Albuerne González, S. (2013). Apoyo a la comunicación: ( ed.). McGraw-Hill España. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.psicologiaymente.com/psicologia/comunicacion-asertiva" target="_blank" rel="noopener noreferrer") González, M. (2021). Comunicación asertiva: Claves para una interacción efectiva. Psicología y Mente.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=B8q4-hrW5mk" target="_blank" rel="noopener noreferrer") Unidad de Innovación Virtual. (2019, 24 de julio). Definición de comunicación: agresivo, pasivo y asertivo [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=eF-UJWjGSX8" target="_blank" rel="noopener noreferrer") Cultura52. (2016, 19 de septiembre). ¿Qué es comunicación asertiva? [Video]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
