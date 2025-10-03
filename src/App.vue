<template>
  <div id="app">
    <transition name="show">
      <div v-show="showLayout" class="layout">
        <div class="box-notification">
          <transition name="notification">
            <notification
              v-show="showNotification"
              class="notification"
            />
          </transition>
        </div>
        <!-- Introducción -->
        <div class="container">
          <div class="columns">
            <div class="column is-full">
              <p class="is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-weight-bold has-text-centered">
                🎁 Si llegaste hasta acá, estos regalos son para ti 🎉
              </p>
              <p class="is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-weight-bold has-text-centered">
                Nada sucede al azar...
              </p>
              <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered">
                {{ currentCourse.subtitle }}
              </p>
            </div>
          </div>
          <div class="columns product is-vcentered">
            <div class="column is-12-mobile is-6-tablet is-5-desktop is-offset-1-desktop is-paddingless">
              <div class="card card-product">
                <header class="card-header card-header-name">
                  <p class="card-header-title is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-bold is-centered">
                    ¿Qué obtendrás con esta cápsula?
                  </p>
                </header>
                <div class="card-content detail-card-content">
                  <div class="content text-card">
                    <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                      {{ currentCourse.file1 }}
                    </p>
                    <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                      {{ currentCourse.file2 }}
                    </p>
                    <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                      {{ currentCourse.file3 }}
                    </p>
                    <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                      {{ currentCourse.file4 }}
                    </p>
                    <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                      {{ currentCourse.file5 }}
                    </p>
                    <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                      {{ currentCourse.comment }}
                    </p>
                  </div>
                  <div class="content button-card">
                    <button
                      id="buy1"
                      class="button is-size-4-desktop is-size-5-tablet is-size-6-mobile is-rounded palpitar"
                      @click="buying">
                      👉 Accede ahora por solo {{ currentCourse.price }}</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-12-mobile is-6-tablet is-5-desktop is-offset-1-desktop">
              <figure class="image">
                <!-- :src="currentCourse.image" / src="./assets/combo.jpg"-->
                <img class="img-product" :src="currentCourse.image">
              </figure>
            </div>
          </div>
        </div>
        <!-- Para Quién? -->
        <section class="hero hero-detail">
          <div class="hero-body">
            <div class="container">
              <div class="columns detail is-vcentered">
                <div class="column is-12-mobile is-6-tablet is-4-desktop is-offset-1-desktop">
                  <figure class="image">
                    <!-- :src="currentCourse.dimage" / src="./assets/people.jpg"-->
                    <img class="img-detail" :src="currentCourse.dimage">
                  </figure>
                </div>
                <div class="column is-12-mobile is-6-tablet is-5-desktop is-offset-1-desktop text-detail">
                  <p class="is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-weight-bold who-title">¿Para quién es esta cápsula?</p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">
                    {{ currentCourse.who1 }}
                  </p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">
                    {{ currentCourse.who2 }}
                  </p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">
                    {{ currentCourse.who3 }}
                  </p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">
                    {{ currentCourse.who4 }}
                  </p>
                </div>
              </div>  
            </div>
          </div>
        </section>
        <!-- Cómo y Testimonios -->
        <section class="hero hero-plus">
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column has-text-centered">
                  <p class="is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-weight-bold who-title">✍️ Cómo funciona</p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">1. Accedes a tu cápsula digital en minutos.</p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">2. Exploras el ejercicio guiado: una experiencia introspectiva paso a paso.</p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">3. Tendrás además disponible un EbookPDF para descargar</p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">No necesitas conocimientos previos, solo tu disposición</p>
                </div>
              </div>
              <div class="columns">
                <div class="column has-text-centered">
                  <p class="is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-weight-bold who-title has-text-centered">💬 Testimonios</p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">
                    ⭐⭐⭐⭐⭐ "Gracias a estas herramientas pude reconectar con mi infancia y comprender patrones que antes no entendía. Ahora me siento más clara y segura para tomar decisiones en mi vida y trabajo."<br/>Ana María Quinteros
                  </p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">
                    ⭐⭐⭐⭐⭐ "Como coach, recomiendo estas experiencias a quienes buscan herramientas prácticas y profundas para crecer personalmente y profesionalmente. Son simples, intuitivas y realmente efectivas."<br/>Cristian Castillo, Coach de desarrollo personal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Sobre creador -->
        <div class="container">
          <div class="columns maker is-vcentered">
            <div class="column is-1-desktop is-hidden-mobile is-paddingless"></div>
            <div class="column is-12-mobile is-6-tablet is-4-desktop is-offset-1-desktop">
              <p class="is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-weight-bold text-maker">Sobre El Creador</p>
              <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile text-maker">
                Mi misión es ayudarte a conocerte, reconectarte contigo mismo y descubrir tu verdadero potencial. Cada herramienta que creo está diseñada para que puedas reflexionar, resignificar tu pasado y clarificar tu camino hacia tus metas.<br><br>
                Mi propósito es simple: ofrecerte experiencias que te permitan crecer, sentir y actuar desde tu autoconocimiento, para vivir con intención, autenticidad y claridad.
              </p>
            </div>
            <div class="column is-12-mobile is-6-tablet is-5-desktop is-offset-1-desktop">
              <figure class="image">
                <img class="img-maker" src="./assets/Logo.png">
              </figure>
            </div>
          </div>
        </div>
        <!-- CTA Comprar -->
        <section class="hero hero-offer">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-vcentered">
                <div class="column is-12-mobile is-5-tablet is-3-desktop is-offset-1-desktop">
                  <div class="button-offer">
                    <button
                      id="buy2"
                      class="button is-rounded is-size-4-desktop is-size-5-tablet is-size-6-mobile palpitar"
                      @click="buying">
                      {{ currentCourse.price }} COMPRAR AHORA</button>    
                  </div>
                </div>
                <div class="column is-12-mobile is-5-tablet is-offset-1-tablet is-6-desktop is-offset-1-desktop">
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                    🚨 Precio sólo disponible por esta semana.
                  </p>
                </div>
              </div>  
            </div>
          </div>
        </section>
        <!-- Garantía -->
        <div class="container">
          <div class="columns warranty is-vcentered">
            <div class="column is-1-desktop is-hidden-mobile is-paddingless"></div>
            <div class="column is-12-mobile is-6-tablet is-4-desktop is-offset-1-desktop">
              <figure class="image box-image-warranty">
                <img class="img-warranty" src="./assets/warranty.png">
              </figure>
            </div>
            <div class="column is-12-mobile is-6-tablet is-5-desktop is-offset-1-desktop">
              <p class="is-size-3-desktop is-size-4-tablet is-size-5-mobile">✔️ Garantía de 15 <STRONG>días</STRONG></p>
              <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                Tendrás tu dinero devuelta <STRONG>sin preguntas</STRONG>  hasta 15 días después de la compra.
              </p>
              <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                ✔️ Pago 100% seguro.
              </p>
              <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                ✔️ Acceso inmediato al material.
              </p>
            </div>
          </div>
        </div>
        <!-- CTA Final -->
        <section class="hero hero-buy">
          <div class="hero-body">
            <div class="container">
              <div class="columns buy is-vcentered">
                <div class="column is-12-mobile is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop">
                  <div class="content content-buy">
                    <div class="item-buy-multi">
                      <figure class="image">
                        <img class="img-multi" src="./assets/multi.png">
                      </figure>
                      <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">Accede al contenido desde cualquier dispositivo android o MacBook.</p>    
                    </div>
                    <div class="item-buy-text">
                      <p class="is-size-3-desktop is-size-4-tablet is-size-5-mobile">Por apenas</p>  
                    </div>
                    <div class="item-buy-price">
                      <p>{{ currentCourse.price }}</p>
                    </div>
                    <div class="item-buy-button">
                      <button
                        id="buy3"
                        class="button is-rounded is-size-4-desktop is-size-5-tablet is-size-6-mobile palpitar"
                        @click="buying">
                        COMPRAR AHORA</button>    
                    </div>
                    <div class="item-buy-text-2">
                      <p class="is-size-5-desktop is-size-6-tablet is-size-7-mobile">Pago 100% seguro con acceso inmediato</p>  
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </section>
        <!-- Otros Productos -->
        <section class="hero hero-offer">
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column is-12-mobile is-10-desktop is-offset-1-desktop title-others">
                  <p class="is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-weight-bold">
                    <STRONG>Otros Productos Disponibles</STRONG>
                  </p>
                </div>
              </div>
              <div class="columns">
                <div class="column is-10-desktop is-offset-1-desktop is-12-tablet is-12-mobile box-others">
                  <div
                    v-for="(q, index) in othersCourses"
                    :key="index"
                    class="box-card">
                    <card :elem="q" @isBuying="buyingOther" />
                  </div>    
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </transition>
    <transition name="show">
      <footer v-show="showFooter" class="footer">
        <div class="content has-text-centered">
          <p class="is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-weight-bold">
            Quiero mi cápsula de {{ currentCourse.name }} por solo {{ currentCourse.price }}
          </p>
          <button
            id="buy9"
            class="button button-final is-rounded is-size-4-desktop is-size-5-tablet is-size-6-mobile is-rounded palpitar"
            @click="buying">
            <strong>👉 COMPRAR</strong></button>
        </div>
      </footer>
    </transition> 
  </div>
</template>

<script>

import Notification from './shared/Notification.vue'
import Card from './components/Card.vue'

export default { 

  name: 'App',

  components: { Notification, Card },

  data () {
    return { 
      
      showLayout: true,
      showFooter: true,
      showNotification: false,
      
      currentCourse: {
        id: 0,
        name: '',
        title: '',
        subtitle: '',
        file1: '',
        file2: '',
        file3: '',
        file4: '',
        file5: '',
        who1: '',
        who2: '',
        who3: '',
        who4: '',
        image: '',
        dimage: '',
        price: '',
        url: ''
      },

      options: [
        {
          id: 0,
          name: '🧠✨ Combo Conociéndote',
          title: 'Todo tu mundo interior en un solo lugar',
          subtitle: 'Cinco experiencias digitales para explorar, entender y potenciar quién eres',
          file1: '🌟 Reconecta con tu infancia y resignifica experiencias pasadas.',
          file2: '🎨 Descubre el significado de tus elecciones y patrones a través de colores.',
          file3: '🌱 Aprende a reconocer tus emociones, pensamientos y creencias limitantes.',
          file4: '🧭 Reflexiona sobre tus competencias, valores y motivaciones profesionales.',
          file5: '🎯 Formula objetivos claros y prácticos para convertir tus metas en logros.',
          who1: '✔️ Personas interesadas en el autoconocimiento y desarrollo personal.',
          who2: '✔️ Quienes buscan herramientas para mejorar su claridad emocional y mental.',
          who3: '✔️ Individuos que quieren potenciar su vida profesional y personal de manera consciente.',
          who4: '✔️ Personas motivadas a reflexionar, resignificar experiencias y alcanzar metas concretas.',
          comment: 'Explora tu mundo interior con esta colección de experiencias digitales diseñadas para acompañarte en un proceso transformador de introspección, reflexión y crecimiento personal. Este combo reúne cinco cápsulas de conocimiento complementarias que, juntas, forman una travesía coherente y profunda hacia el autoconocimiento.',
          image: './img/combo.3edf1600.jpg',
          dimage: './img/brain.7d85353e.jpg',
          description: 'Desde la sutileza de los colores que revelan tu mundo emocional en el Test de Composiciones Cromáticas, hasta la emotiva reconexión con tu historia personal en Carta a mi Niñez, cada experiencia te invita a detenerte, mirar hacia dentro y descubrir quién eres en verdad. A través de una interfaz web clara, segura y visualmente atractiva, avanzarás por espacios de exploración emocional, descubrimiento de tus motivaciones, identificación de tus valores y construcción de objetivos alineados con tu esencia. Este combo es mucho más que un conjunto de herramientas: es una guía para reencuentros significativos contigo mismo, un espacio para ordenar, comprender y resignificar tu experiencia de vida, y una oportunidad para proyectarte con mayor claridad y propósito hacia el futuro.',
          price: 'US$30.-',
          url: 'https://pay.hotmart.com/A99603316T'
        },
        {
          id: 1,
          name: '🎨 Test Cromático',
          title: 'Descubre lo que tus colores revelan de ti',
          subtitle: 'Los colores que eliges revelan emociones, caminos y verdades ocultas sobre ti mismo',
          file1: '🎨 Comprender mejor tus emociones ocultas.',
          file2: '🪞 Descubrir rasgos de tu personalidad a través de los colores que eliges.',
          file3: '🌱 Despertar una nueva forma de autoconocimiento y reflexión personal.',
          file4: '💡 Obtener claridad sobre patrones y tendencias de tu mundo interior.',
          file5: '🧘‍♀️ Vivir un momento íntimo de pausa, introspección y conexión contigo mismo/a.',
          who1: '✔️ Para quienes buscan una herramienta sencilla y poderosa de autoconocimiento.',
          who2: '✔️ Para quienes disfrutan de la psicología, el coaching o el crecimiento personal.',
          who3: '✔️ Para quienes sienten curiosidad por descubrir qué dicen sus elecciones sobre su vida interior.',
          who4: '✔️ Para quienes quieren regalarse un momento de reflexión y conexión personal.',
          image: './img/cromatico.d910efdc.jpg',
          dimage: './img/brain.7d85353e.jpg',
          description: 'Todo sucede en una interfaz web sencilla y clara diseñada para facilitar una conexión profunda con tu ser interior. Este test de composiciones cromáticas te acompaña de forma sutil e intuitiva hacia un momento de reflexión e introspección,  facilitando una mayor comprensión de tu mundo interno. Más que un test, es una invitación a detenerte y reflexionar sobre quién eres.',
          price: 'US$6.00.-',
          url: 'https://pay.hotmart.com/Q98606053K'
        },
        {
          id: 2,
          name: '🪞 Introducción al Autoconocimiento',
          title: 'la puerta de entrada a tu mejor versión',
          subtitle: 'Una experiencia interactiva que te guía con claridad hacia el crecimiento personal',
          file1: '🌱 Reconocer y comprender tus emociones con mayor claridad.',
          file2: '🧠 Identificar patrones de pensamiento que influyen en tu vida diaria.',
          file3: '💡 Aprender a gestionar mejor tus decisiones y relaciones.',
          file4: '🛤️ Construir una base sólida para tu desarrollo personal y profesional.',
          file5: '🎯 Experiencia inspirada en Coaching de personas.',
          who1: '✔️ Para quienes buscan iniciar su camino de crecimiento personal.',
          who2: '✔️ Para quienes sienten que necesitan más claridad emocional y mental.',
          who3: '✔️ Para quienes desean gestionar mejor sus decisiones y relaciones',
          who4: '✔️ Para quienes prefieren herramientas digitales fáciles y accesibles.',
          image: './img/autoconocimiento.aca3c83d.jpg',
          dimage: './img/mind.a78301e4.png',
          description: 'Esta es una cápsula de conocimiento que consiste en una aplicación web que te guía suavemente hacia una mayor comprensión acerca de la importancia del autoconocimiento y lo que realmente significa: reconocer tus emociones, entender tus pensamientos y descubrir los patrones que influyen en tu forma de vivir y relacionarte. Todo en un espacio seguro, claro y visualmente atractivo, diseñado para invitarte a reflexionar y conectarte contigo.',
          price: 'US$9.-',
          url: 'https://pay.hotmart.com/P99585037U'
        },
        {
          id: 3,
          name: '🌟 Dinamica: Carta a mi niñez',
          title: 'Reconéctate con tu infancia para sanar, resignificar y crecer',
          subtitle: 'Lo que fuiste, lo que eres y lo que aún puedes llegar a ser… descúbrelo en esta experiencia única',
          file1: '🌱 Reconocer creencias y patrones que te limitan.',
          file2: '💡 Comprender mejor tus emociones actuales.',
          file3: '🛤️ Resignificar experiencias pasadas para avanzar con mayor confianza.',
          file4: '❤️ Sanar heridas de la infancia desde un espacio seguro e íntimo.',
          file5: '🎯 Experiencia inspirada en Coaching de personas.',
          who1: '✔️ Si sientes que tu pasado influye demasiado en tu presente.',
          who2: '✔️ Si quieres trabajar en tu autoconocimiento pero no sabes por dónde empezar.',
          who3: '✔️ Si buscas una herramienta práctica, accesible y segura.',
          who4: '✔️ Si buscas una experiencia digital que propicie la reflexión.',
          image: './img/carta.90784502.jpg',
          dimage: './img/people.5216ff5e.jpg',
          description: 'Esta es una cápsula de conocimiento que te invita a reconectar con tu historia personal a través de una experiencia web íntima y reflexiva. A lo largo del recorrido, explorarás vivencias de tu infancia que han dado forma a la persona que eres hoy. Conectarte con esas experiencias te permitirá comprender mejor tus emociones, creencias y patrones actuales. Una herramienta poderosa de autoconocimiento, diseñada para sanar, resignificar y crecer desde tus raíces.',
          price: 'US$9.-',
          url: 'https://pay.hotmart.com/Y99588589J'
        },
        {
          id: 4,
          name: '🧭 Test de Orientación Profesional',
          title: 'Encuentra claridad sobre tus talentos y motivaciones',
          subtitle: 'Reflexiona sobre tus competencias, valores y motivaciones para tomar mejores decisiones de vida y carrera',
          file1: '🧭 Identificar tus áreas de competencia y fortalezas personales.',
          file2: '💡 Reconocer lo que realmente  motiva y da sentido a tu vida profesional.',
          file3: '🌱 Clarificar tus valores y cómo influyen en tus decisiones.',
          file4: '🚀 Obtener una visión más clara de posibles caminos de desarrollo personal y laboral.',
          file5: '🎯 Experiencia inspirada en Coaching de personas.',
          who1: '✔️ Para jóvenes que están eligiendo carrera o camino profesional.',
          who2: '✔️ Para adultos que buscan un cambio laboral o replantearse su rumbo.',
          who3: '✔️ Para quienes quieren alinear sus decisiones profesionales con sus valores personales.',
          who4: '✔️ Para quienes desean conocerse mejor y tomar decisiones con mayor confianza.',
          image: './img/orientacion.f7a8c0e5.jpg',
          dimage: './img/opciones.19854ec3.jpg',
          description: 'Esta es una cápsula de conocimiento que ocurre a través de una interfaz web diseñada para activar tu pensamiento y conectar contigo mismo a través de un test interactivo. A medida que avanzas, te invita a reflexionar sobre tus competencias, motivaciones y valores personales. Una experiencia introspectiva que despierta tu conciencia, te prepara para el análisis profundo y te abre la puerta a una comprensión más clara de quién eres y hacia dónde quieres ir.',
          price: 'US$9.-',
          url: 'https://pay.hotmart.com/X99600629R'
        },
        {
          id: 5,
          name: '🏆 Técnica para el Logro de Objetivos',
          title: 'Logra tus objetivos con una técnica simple y poderosa de PNL',
          subtitle: 'Una experiencia práctica y guiada para formular metas claras, motivadoras y alcanzables',
          file1: '🎯 Aprender a formular objetivos claros y motivadores.',
          file2: '🛤️ Seguir un paso a paso práctico que aumenta tus probabilidades de éxito.',
          file3: '🌱 Aplicar la técnica a cualquier área de tu vida: personal, laboral o académica.',
          file4: '💡 Ganar claridad y enfoque en lo que realmente deseas lograr.',
          file5: '🚀 Transformar metas en resultados reales con una herramienta comprobada de PNL.',
          who1: '✔️ Para quienes se sienten estancados y quieren cumplir sus metas.',
          who2: '✔️ Para quienes buscan herramientas prácticas de coaching y PNL.',
          who3: '✔️ Para estudiantes, emprendedores o profesionales que necesitan más enfoque y motivación.',
          who4: '✔️ Para cualquier persona que quiera convertir sus sueños en logros concretos.',
          image: './img/objetivos.74f67465.jpg',
          dimage: './img/plan.e6c3ac9b.jpg',
          description: 'Esta es una cápsula de conocimiento que te acompaña a través de una interfaz web interactiva, diseñada para que aprendas a formular tus objetivos de manera clara, consciente y alineada con lo que realmente deseas. A través de un recorrido guiado y visualmente estimulante, descubrirás una técnica efectiva que, paso a paso, te ayuda a transformar tus metas en logros concretos. Una experiencia creada para motivarte, enfocar tu energía y aumentar significativamente tus posibilidades de éxito.',
          price: 'US$12.-',
          url: 'https://pay.hotmart.com/A99180336E'
        }
      ],

      othersCourses: []

    }
  },

  created () {
    let params = new URLSearchParams(location.search);
    var contract = params.get('id');
    this.currentCourse.id = contract
  },

  mounted () {
    for (var i in this.options) {
      if (this.options[i].id == this.currentCourse.id) {
        this.currentCourse.name = this.options[i].name
        this.currentCourse.title = this.options[i].title
        this.currentCourse.subtitle = this.options[i].subtitle
        this.currentCourse.file1 = this.options[i].file1
        this.currentCourse.file2 = this.options[i].file2
        this.currentCourse.file3 = this.options[i].file3
        this.currentCourse.file4 = this.options[i].file4
        this.currentCourse.file5 = this.options[i].file5
        this.currentCourse.who1 = this.options[i].who1
        this.currentCourse.who2 = this.options[i].who2
        this.currentCourse.who3 = this.options[i].who3
        this.currentCourse.who4 = this.options[i].who4
        this.currentCourse.image = this.options[i].image
        this.currentCourse.dimage = this.options[i].dimage
        this.currentCourse.price = this.options[i].price
        this.currentCourse.url = this.options[i].url
      }
    }

    let others = JSON.parse(JSON.stringify(this.options))
    for (var t in others) {
     if (others[t].id == this.currentCourse.id) {
      others.splice([t], 1)
      this.othersCourses = others
     }
    }
  },

  methods: {

    click (ev){
      ev.preventDefault()
      
      document.getElementById(ev.target.id).style.boxShadow = "0px 6px 6px 0px #922D23";
      setTimeout(() => {
        document.getElementById(ev.target.id).style.boxShadow = "0px 12px 6px -3px #922D23";
      }, 300)

      setTimeout(() => {
        document.getElementById(ev.target.id).classList.add('is-loading')
      }, 600);
    },

    buying (ev) {
      this.click(ev)

      setTimeout(() => {
        this.showNotification = true
      }, 900);

      setTimeout(() => {
        this.showLayout = false
      }, 2400);

      setTimeout(() => {
        location.href = this.currentCourse.url
      }, 3000);
    },

    buyingOther (t) {
      this.targetUrl = t
      setTimeout(() => {
        this.showNotification = true
      }, 900);
        
      setTimeout(() => {
        location.href = this.targetUrl
      }, 3000);
    }
    
  }

}

</script>

<style lang="scss">

@import "./scss/main.scss";

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.layout {
  margin: 0;
  padding: 0;
  background-color: #fff;
}

.box-notification {
  display:flex;
  justify-content: center;
  margin-top: 3.9rem;
}

.notification {
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 1;
  max-width: 400px;
  border: 3px solid #CB4335;
  border-radius: 9px;
  box-shadow: 0px 0px 9px 3px #CB4335;
}

.product {
  margin-top: 5.1rem;
  margin-bottom: 5.1rem !important;
}

.card-header-name {
  background-color: #CD564A;
}

.card-header-name p {
  color: #fff !important;
}

.maker, .warranty {
  margin-top: 5.4rem;
  margin-bottom: 5.4rem !important;
}

.button-card {
  display: flex;
  justify-content: center;
  margin-bottom: 1.8rem;
}

.button-offer {
  display: flex;
  justify-content: end;
}

.button-web {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}

.button {
  background-color: #CD564A;
  border-color: #CD564A;
  color: #fff !important;
  box-shadow: 0px 6px 6px 0px #922D23;
  transition: all 300ms;
  -webkit-tap-highlight-color: transparent;
}

.button-final {
  background-color: #fff;
  border-color: #fff;
  color: #000 !important;
  box-shadow: 0px 6px 6px 0px #292C2F;
  transition: all 300ms;
  -webkit-tap-highlight-color: transparent;
}

.img-product {
  width: 480px;
  max-width: 100%;
  height: auto;
  border-radius: 10%;
  box-shadow: 0px 9px 9px 0px black;
}

.img-detail {
  width: 427px;
  max-width: 100%;
  height: auto;
  border-radius: 24%;
  box-shadow: 0px 9px 9px 0px black;
}

.who-title {
  margin-bottom: 1.5rem;
}

.who-item {
  margin-bottom: 1rem;
}

.img-maker {
  width: 450px;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 9px 9px 0px black;
  margin: 1.5rem auto;
}

.box-image-warranty {
  display: flex !important;
  justify-content: center !important;
}

.img-warranty {
  width: 195px;
  max-width: 60%;
  height: auto;
}

.img-multi {
  max-width: 90px;
  min-width: 90px;
  max-height: 90px;
  min-height: 90px;
}

.hero-detail, .hero-buy {
  background: #CD564A;
  color: #fff !important;
}

.hero-offer, .hero-plus {
  background: #292C2F;
  color: #fff !important;
}

.detail, .buy, .questions {
  margin-top: 2.4rem;
  margin-bottom: 2.4rem !important;
}

.content-buy {
  background: #292C2F;
  padding: 3rem;
}

.item-buy, .item-buy-text, .item-buy-price, .item-buy-text-2, .item-buy-button, .title-questions, .title-others {
  display: flex;
  justify-content: center;
}

.title-others, .title-others strong {
  color: #FFF;
}

.item-buy-multi {
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 0px 0px #fff;
}

.item-buy-text {
  margin-top: 3.6rem;
}

.item-buy-button {
  margin-top: 1.2rem;
}

.item-buy-text-2 {
 margin-top: 2.7rem; 
}

.item-buy-price {
  font-size: 6rem;
  font-weight: 699;
}

.icon {
  color: #CB4335;
}

.box-others {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.box-card {
  width: 30.3%;
  margin: 1.5rem 1.5%;
}

.footer {
  background-color: #CD564A;
  color: #fff;
  padding: 2.4rem 1.5rem;
}

.palpitar {
  animation: palpitar 1.29s infinite ease-in-out;
  transition: transform 0.2s ease-in-out;
}

@keyframes palpitar {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0px 12px 6px -3px #922D23;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {

  .box-notification {
    margin-top: 2.7rem;
  }

  .card-product, .text-maker {
    margin-left: 6%;
    margin-right: 3%;
    max-width: 91%;
  }

  .img-product, .img-maker, .text-img-maker{
    margin-left: 3%;
    margin-right: 6%;
    max-width: 91%;
  }

  .item-buy-price {
    font-size: 4.8rem;
  }

  .box-card {
    width: 46%;
    margin: 1.5rem 2%;
  }

}

@media screen and (max-width: 768px) {

  .notification {
    max-width: 90%;
  }

  .box-notification {
    margin-top: 1.5rem;
  }

  .product {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    margin-bottom: 0 !important;
  }

  .img-product {
    margin: 1.5rem 5%;
    max-width: 90%;
    min-width: 90%;
    max-height: 100%;
    min-height: 100%;
    border-radius: 39px;
    box-shadow: 0px 6px 6px 0px black;
  }

  .detail {
    margin-top: 0;
    margin-bottom: 0 !important;
  }

  .img-detail {
    max-width: 100%;
    min-width: 100%;
    max-height: 100%;
    min-height: 100%;
    border-radius: 39px;
    box-shadow: 0px 6px 6px 0px black;
  }

  .maker, .warranty {
    margin: 1.5rem 3% .9rem 3% !important;
  }

  .img-maker {
    margin: 1.5rem 0;
    max-width: 100%;
    min-width: 100%;
    max-height: 100%;
    min-height: 100%;
    border-radius: 50%;
    box-shadow: 0px 6px 6px 0px black;
  }

  .button-offer {
    justify-content: center;
  }

  .buy {
    margin-top: 0;
    margin-bottom: 0 !important;
  }

  .item-buy-multi {
    display: block;
    padding-bottom: 1.5rem;
  }

  .item-buy-price {
    font-size: 3.6rem;
    font-weight: 699;
  }

  .box-card {
    width: 90%;
    margin: 1.5rem 5%;
  }

  .footer {
    padding: 1.5rem;
  }

  .footer p {
    font-size: .81rem;
  }

}

</style>
