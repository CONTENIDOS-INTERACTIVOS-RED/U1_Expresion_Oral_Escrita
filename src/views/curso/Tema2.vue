<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Estrategias para comunicarse en público con efectividad en educación infantil.'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-h85-3.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0.mt-5 La comunicación en la educación infantil no se limita a la transmisión de información; es un proceso dinámico en el que se intercambian ideas, emociones y valores. Una interacción efectiva permite que los niños comprendan mejor su entorno, expresen sus pensamientos con seguridad y desarrollen habilidades sociales fundamentales. Para lograrlo, es crucial aplicar principios que garanticen un diálogo claro, accesible y significativo dentro del aula (Caballero-Velázquez, Cruz-Palacios y Otero-Góngora, 2018).
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/1.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-4 Cuando el educador domina estrategias comunicativas, no solo mejora la enseñanza, sino que también contribuye a la formación de individuos con mayor confianza y capacidad para relacionarse con los demás. A continuación, se presentan los principios esenciales que facilitan la interacción efectiva en este nivel educativo:

    h2(data-aos="fade-left") Claridad y sencillez en el mensaje
    p.mb-5 En la infancia, el lenguaje se encuentra en proceso de desarrollo, por lo que es fundamental que la comunicación sea accesible y acorde con el nivel de comprensión de los niños. Un mensaje claro evita confusiones y facilita el aprendizaje.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Estrategias") 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Usar oraciones cortas y palabras sencillas. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Acompañar el mensaje con ejemplos visuales o gestuales. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Hablar con pausas permite que procese la información. 
            p.mb-0 Reformular una idea si el niño no la comprende a la primera.
          p(numero="2" titulo="Ejemplo") En lugar de decir: "Debes proceder a ordenar los juguetes después de jugar”, es más efectivo expresar: "Cuando termines de jugar, guarda los juguetes en su caja”.
          p(numero="3" titulo="Consejo") Los cuentos, imágenes y canciones ayudan a reforzar conceptos y hacen que la información sea más fácil de recordar.

    h2(data-aos="fade-left") Escucha activa: Más que oír, comprender
    p.mb-5 Una comunicación efectiva no solo depende de hablar con claridad, sino también de escuchar con atención. En la educación infantil, es crucial que los niños sientan que sus palabras tienen valor y que son tomadas en cuenta.

    TabsC.color-acento-contenido.mb-5
      .bg-color-13.border.px-4.p-md-5.py-3(titulo="Estrategias" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Estrategias
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Mantener contacto visual con el niño. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Mostrar interés con gestos afirmativos (asentir con la cabeza, sonreír). 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Repetir o parafrasear lo que el niño dice para confirmar su comprensión. 
            p Evitar interrumpir y dar tiempo para que termine su idea.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
    
      .bg-color-13.border.px-4.p-md-5.py-3(titulo="Ejemplo" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Ejemplo
            p Si un niño dice: "Hoy en el recreo mi amigo no quiso jugar conmigo”, el docente puede responder: "Parece que eso te hizo sentir triste. ¿Te gustaría contarme qué pasó?".
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='')
    
      .bg-color-13.border.px-4.p-md-5.py-3(titulo="Consejo" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Consejo
            p Enseñar a los niños a escuchar activamente mejora su empatía y su capacidad de atención. Juegos como "El teléfono roto asertivo", en el que deben repetir exactamente lo que escuchan antes de responder, pueden ayudar a fortalecer esta habilidad.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/5.png', alt='', style="width: 100%;")
    
    h2(data-aos="fade-left") Adaptación del mensaje según la edad y el contexto
    p.mb-5 Cada niño tiene su propio ritmo de aprendizaje, por lo que es necesario adaptar la comunicación a sus necesidades. Esto implica considerar su nivel de desarrollo lingüístico, su experiencia previa y la situación en la que se encuentra la interacción.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Estrategias") 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 <b>Menores de 3 años:</b> Usar palabras simples, repetir frases y acompañar con gestos. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 <b>De 3 a 5 años:</b> Hacer preguntas para verificar la comprensión y permitir una mayor interacción.  
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 <b>De 5 a 6 años:</b> Estimular la expresión de ideas propias y promover conversaciones estructuradas. 
            p.mb-0 Reformular una idea si el niño no la comprende a la primera.
          div(numero="2" titulo="Ejemplo") 
            p Para explicar la importancia de lavarse las manos:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 A un niño de 2 años: "Manos limpias, no bichitos”, acompañado de gestos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 A un niño de 4 años: "Lavarse las manos nos ayuda a no enfermarnos”.
            p A un niño de 6 años: "Cuando nos lavamos las manos eliminamos microbios que pueden causar enfermedades”.
          p(numero="3" titulo="Consejo") Observar la reacción del niño permite ajustar la forma de comunicación para garantizar que el mensaje sea comprendido.
    
    .bg-full-width.bg-color-14.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Estrategia para captar la atención y mejorar la comunicación con los niños
            p.mb-4(data-aos="fade-right") El documento <b>Estrategia para captar la atención y mejorar la comunicación con los niños,</b> ofrece herramientas clave para fortalecer la interacción en la educación infantil. A través de técnicas como la modulación del tono de voz, el uso del lenguaje corporal, la narración de historias y la integración del juego, se busca fomentar la participación activa y mejorar la comprensión de los mensajes.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estrategia para captar la atención y mejorar la comunicación con los niños.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='')

      
    h2(data-aos="fade-left") Aplicación de la comunicación asertiva en la enseñanza infantil
    p.mb-5 El desarrollo de habilidades comunicativas en la infancia es fundamental para la convivencia y el aprendizaje. A través de estrategias lúdicas y participativas, los niños pueden identificar y practicar formas de expresión que promuevan el respeto, la empatía y la resolución pacífica de conflictos.


    .titulo-figura.mb-4
      h5 Tabla 1.
      span Aplicación de la comunicación asertiva en la enseñanza infantil. 
    .tabla-a.color-acento-botones.mb-5
      table.text-center
        thead
          tr
            th.bg-color-8.text-white.text-center Estrategia
            th.bg-color-8.text-white.text-center Descripción
            th.bg-color-8.text-white.text-center  Ejemplos 
            th.bg-color-8.text-white.text-center  Objetivo
        tbody
          tr
            td.text-bold Teatro de las emociones
            td Los niños representan situaciones en las que deben expresar sus sentimientos y encontrar soluciones asertivas. Se fomentará el reconocimiento y manejo adecuado de las emociones.
            td Un niño actúa como si estuviera molesto porque su amigo no comparte un juguete. Se le guía a decir: "Me gustaría jugar contigo, ¿podemos girarnos?" en lugar de reaccionar con enojo.
            td Enseñar a los niños a identificar y comunicar sus emociones de manera clara y respetuosa.
          tr
            td.text-bold Mural de las palabras mágicas
            td Se crea un mural con frases asertivas que los niños pueden usar en diferentes situaciones. Cada vez que empleen una de estas expresiones, podrán agregar una estrella o dibujo al mural.
            td Un niño que normalmente dice "¡Dame eso!" ve el mural y recuerda que puede decir "¿Me lo puedes prestar, por favor?" . Al usar la frase correcta, añade un dibujo al mural.
            td Incentivar el uso de un lenguaje positivo y respetuoso en la comunicación diaria.
          tr
            td.text-bold Rueda de soluciones
            td Se elabora una rueda con opciones para resolver conflictos asertivamente. Los niños la giran cuando se enfrentan a un problema y aplican la estrategia obtenida.
            td Dos niños discuten por el mismo juguete. Giran la rueda y les toca la opción "Buscar una solución en conjunto" , por lo que acuerdan girarse cada cinco minutos.
            td Fomentar la toma de decisiones autónomas y la resolución pacífica de conflictos.
          tr
            td.text-bold Diario de los pensamientos
            td Se entrega a cada niño un diario en el que pueden escribir o dibujar cómo se sintieron en el día y cómo resolvieron algún problema.
            td Un escribe: "Hoy me sentí triste porque mi amigo no jugó conmigo. Mañana le diré que me gustaría jugar juntos".
            td Ayudar a los niños a reflexionar sobre sus emociones y mejorar su capacidad de expresión escrita.
          tr
            td.text-bold Juego de roles invertidos
            td Los niños intercambian roles con sus compañeros o con el docente y deben reaccionar como lo haría el otro en una situación dada.
            td Un que interrumpe constantemente toma el rol del maestro y experimenta cómo se siente cuando otros no le dejan hablar. Luego reflexiona sobre su comportamiento.
            td Desarrollar empatía y comprensión en la comunicación.
          tr
            td.text-bold El semáforo de la comunicación
            td Se presentan respuestas a diferentes situaciones y los niños deben clasificarlas en: rojo (agresiva), amarillo (pasiva) y verde (asertiva). Luego, se buscan formas adecuadas de expresarse.
            td Un niño dice "¡No me gusta tu dibujo, es feo!”. Se le explica que esa respuesta es roja y se le guía a reformularlo con "Podrías añadir más colores para que se vea más bonito”.
            td Enseñar a diferenciar entre una comunicación agresiva, pasiva y asertiva.
          tr
            td.text-bold Círculo de la palabra
            td Se utiliza un objeto especial (como un micrófono de juguete) para indicar quién tiene el turno de hablar, evitando interrupciones.
            td En una conversación sobre sus experiencias del día, solo el niño que sostiene el objeto puede hablar. Los demás deben esperar su turno.
            td Fomentar la escucha activa y el respeto por el turno de palabra.
          tr
            td.text-bold Historias incompletas
            td Se presentan cuentos o relatos sin final y los niños deben proponer desenlaces asertivos.
            td Un cuento termina con dos personajes peleando por un balón. Los niños deben sugerir formas de resolver el problema sin recurrir a la agresión.
            td Estimular la creatividad y la toma de decisiones basadas en la comunicación efectiva.
    
    .bg-full-width.bg-color-14.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Técnicas grupales y exposición académica
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Técnicas grupales y exposición académica, donde se abordan estrategias clave para potenciar la comunicación en el aula, fomentar la participación activa de los estudiantes y mejorar la sustentación de informes en el ámbito académico.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Técnicas grupales y exposición académica.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.png', alt='')
    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/50780 " target="_blank" rel="noopener noreferrer") Sánchez Fernández, M. D. (2015). Comunicación efectiva y trabajo en equipo: ( ed.). Editorial CEP, S.L. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/36451 " target="_blank" rel="noopener noreferrer") Escarpanter, J. (2010). La comunicación oral: ( ed.). Firmas Press. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.edutec.com/comunicacion-audiovisual-educacion " target="_blank" rel="noopener noreferrer") Pérez, J. (2017). El rol de la comunicación audiovisual en el ámbito educativo . Revista Educación y Tecnología. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=fHdQWmbhfdE" target="_blank" rel="noopener noreferrer") Sprouts Español. (2021, 3 de junio). La teoría del desarrollo cognitivo a través de las relaciones sociales de Vygotsky [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=IBfWafI_P_8" target="_blank" rel="noopener noreferrer") Universidadurjc. (28 de agosto de 2014). Comunicación audiovisual y educación - Sonia Núñez Puente [Vídeo]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué elemento es fundamental en la comunicación asertiva?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imposición de ideas ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Expresión clara y respetuosa ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Evitación de conflictos a toda costa ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Uso de un lenguaje técnico complejo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La comunicación asertiva se basa en la expresión de ideas, emociones y necesidades de manera clara y respetuosa, permitiendo una interacción efectiva sin caer en la agresividad ni en la pasividad.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes opciones NO es un beneficio de la comunicación asertiva en el aula? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta el respeto entre docentes y estudiantes ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reduce la capacidad de argumentación de los niños ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Mejora la convivencia escolar ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Promueve el desarrollo de habilidades sociales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La comunicación asertiva permite que los niños expresen sus pensamientos de manera estructurada y respetuosa, fortaleciendo su capacidad de argumentación y promoviendo el diálogo abierto.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué técnica grupal permite la discusión de un tema en grupos pequeños durante un tiempo limitado? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Juego de roles ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Phillips 6-6 ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Conferencia infantil',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Entrevista educativa',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La técnica Phillips 6-6 divide a los participantes en grupos de seis personas, quienes debaten sobre un tema durante seis minutos, fomentando la participación equitativa y el pensamiento crítico.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes NO es un elemento clave de la comunicación asertiva?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Empatía',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Escucha activa',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Falta de contacto visual ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Expresión clara',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El contacto visual es un componente importante de la comunicación asertiva, ya que refuerza la seguridad al hablar y demuestra interés en la interacción con los demás.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué estrategia ayuda a captar la atención de los niños en una exposición oral? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Usar un tono de voz monótono ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Incorporar recursos visuales y ejemplos ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Hablar sin hacer pausas ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Recitar el contenido de memoria sin interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'En la educación infantil, el uso de imágenes, gestos y ejemplos prácticos facilitan la comprensión y mantienen el interés de los niños, haciendo que la comunicación sea más efectiva y dinámica.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
