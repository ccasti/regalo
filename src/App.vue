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
              <p class="is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-weight-bold has-text-centered intro-title">
                🎁 ¡Llegaste en el momento perfecto… y tengo algo especial para ti! ✨<br/>
              </p>
              <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-bold has-text-centered intro-title">
                Nada es casualidad. Hoy estás aquí por una razón.
              <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered">
                Para agradecerte por estar aquí, quiero compartir contigo 2 cápsulas exclusivas.<br/>
                <br/>🔒 Acceso 100 % gratuito y sin compromiso. Sólo por tiempo limitado.<br/>
                <br/>👇 Explora cada una y empieza este viaje...
              </p>
            </div>
          </div>
          <div class="columns product1">
            <div class="column is-12-mobile is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop is-paddingless">
              <div class="card card-product">
                <header class="card-header card-header-name">
                  <p class="card-header-title is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-bold is-centered">
                    🪞 Introducción al Autoconocimiento
                  </p>
                </header>
                <div class="card-content detail-card-content card-content-gift">
                  <div class="content text-card">
                    <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered ">
                      La puerta de entrada a tu mejor versión
                    </p>
                    <div class="box-frame">
                      <iframe allowfullscreen src="https://ht2.webcoach.cl/"></iframe>
                    </div>
                    <div class="has-text-centered download-pdf">
                      <a href="/autoconocimiento.pdf" download target="_blank" rel="noopener">
                        📥 Descargar PDF de la cápsula
                      </a>    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns product2">
            <div class="column is-12-mobile is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop is-paddingless">
              <div class="card card-product">
                <header class="card-header card-header-name">
                  <p class="card-header-title is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-bold is-centered">
                    🎨 Test Cromático
                  </p>
                </header>
                <div class="card-content detail-card-content card-content-gift">
                  <div class="content text-card">
                    <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered ">
                      Descubre lo que tus colores revelan de ti
                    </p>
                    <div class="box-frame">
                      <iframe allowfullscreen src="https://ht1.webcoach.cl/"></iframe>    
                    </div>
                    <div class="has-text-centered download-pdf">
                      <a href="/test_cromatico.pdf" download target="_blank" rel="noopener">
                        📥 Descargar PDF de la cápsula
                      </a>    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12-mobile is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop">
              <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered">
                Si disfrutaste esta experiencia,<br/>
                📲 Compartelas con quien quieras...  
              </p>
              <div class="share-container">
                <!-- Botón principal -->
                <button class="button share-button is-rounded is-size-5-desktop is-size-6-tablet is-size-6-mobile palpitar" @click="shareNative">
                  Compartir
                </button>
                <!-- Popup flotante -->
                <transition name="fade">
                  <div v-if="showPopup" class="share-popup" @click.self="closePopup">
                    <transition name="slide-up">
                      <div class="share-popup-content" v-if="showPopup">
                        <button class="delete is-medium" @click="closePopup"></button>
                        <h3>Compartir en...</h3>
                        <div class="share-icons">
                          <a :href="whatsappLink" target="_blank" class="link-share" title="WhatsApp">
                            <figure class="image image-share is-4by4">
                             <img src="./assets/whatsapp.png"/>
                            </figure>
                          </a>
                          <a :href="facebookLink" target="_blank" class="link-share" title="Facebook">
                            <figure class="image image-share is-4by4">
                             <img src="./assets/facebook.png"/>
                            </figure>
                          </a>
                          <a :href="instagramLink" target="_blank" class="link-share" title="Instagram">
                            <figure class="image image-share is-4by4">
                             <img src="./assets/instagram.png"/>
                            </figure>
                          </a>
                          <button @click="copyLink" class="copy" title="Copiar enlace">
                            Copiar enlace
                          </button>
                        </div>
                        <p v-if="copied" class="copied-msg">¡Enlace copiado!</p>
                      </div>
                    </transition>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12-mobile is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop">
              <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered others-invitation">
                👇 Conoce además nuestras cápsulas exclusivas
              </p>
            </div>
          </div>
        </div>
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
                    v-for="(q, index) in options"
                    :key="index"
                    class="box-card">
                    <card :elem="q" @isBuying="buyingOther" />
                  </div>    
                </div>
              </div>
              <div class="columns">
                <div class="column is-12-mobile is-10-desktop is-offset-1-desktop title-others">
                  <p class="is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-weight-bold text-offer">
                    Oferta Especial
                  </p>
                </div>
              </div>
              <div class="columns">
                <div class="column is-4-desktop is-offset-4-desktop is-6-tablet is-offset-3-tablet is-12-mobile">
                  <div class="card offer-card">
                    <div class="card-image">
                      <figure class="image is-4by4">
                        <img class="img-offer" src="./assets/combo.png"/>
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media is-marginless">
                        <div class="media-content">
                          <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">{{ offer.name }}</p>
                        </div>
                      </div>
                      <transition name="expand">
                        <div class="content">
                          <strong>{{ offer.title }}</strong><br/>
                          <br/>{{ offer.subtitle }}<br/>
                          <br/>Por apenas <strong>{{ offer.price }}</strong>
                          <br/>
                          <div class="button-offer-buy has-text-centered">
                            <button
                              @click="buy"
                              class="button is-rounded is-size-5-desktop is-size-6-tablet is-size-6-mobile palpitar">
                              Comprar</button>    
                          </div>
                        </div>
                      </transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Para Quién? -->
        <section class="hero hero-detail">
          <div class="hero-body">
            <div class="container">
              <div class="columns detail is-vcentered">
                <div class="column is-12-mobile is-6-tablet is-4-desktop is-offset-1-desktop">
                  <figure class="image">
                    <img class="img-detail" src="./assets/mind.png">
                  </figure>
                </div>
                <div class="column is-12-mobile is-6-tablet is-5-desktop is-offset-1-desktop text-detail">
                  <p class="is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-weight-bold who-title">¿Para quién es esta instancia ?</p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">
                    ✔️ Si quieres trabajar en tu autoconocimiento pero no sabes por dónde empezar.
                  </p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">
                    ✔️ Si buscas una experiencia digital que propicie la reflexión.
                  </p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">
                    ✔️ Para quienes desean conocerse mejor y tomar decisiones con mayor confianza.
                  </p>
                  <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile who-item">
                    ✔️ Para quienes buscan herramientas prácticas de coaching y PNL.
                  </p>
                </div>
              </div>  
            </div>
          </div>
        </section>
      </div>
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
      showNotification: false,
      showPopup: false,
      copied: false,
      pageUrl: 'https://oferta.webcoach.cl/',
      /*pageUrl: window.location.href,*/
      
      options: [
        {
          id: 1,
          name: '🌟 Dinamica: Carta a mi niñez',
          title: 'Reconéctate con tu infancia para sanar, resignificar y crecer',
          subtitle: 'Lo que fuiste, lo que eres y lo que aún puedes llegar a ser… descúbrelo en esta experiencia única',
          image: './img/carta.67c72721.jpg',
          price: 'US$9.-',
          url: 'https://ventas.webcoach.cl/?id=3'
        },
        {
          id: 2,
          name: '🧭 Test de Orientación Profesional',
          title: 'Encuentra claridad sobre tus talentos y motivaciones',
          subtitle: 'Reflexiona sobre tus competencias, valores y motivaciones para tomar mejores decisiones de vida y carrera',
          image: './img/orientacion.f7a8c0e5.jpg',
          price: 'US$9.-',
          url: 'https://ventas.webcoach.cl/?id=4'
        },
        {
          id: 3,
          name: '🏆 Técnica para el Logro de Objetivos',
          title: 'Logra tus objetivos con una técnica simple y poderosa de PNL',
          subtitle: 'Una experiencia práctica y guiada para formular metas claras, motivadoras y alcanzables',
          image: './img/objetivos.74f67465.jpg',
          price: 'US$12.-',
          url: 'https://ventas.webcoach.cl/?id=5'
        }
      ],

      offer: {
          name: '🏅 Combo Coaching',
          title: 'Nuestras 3 cápsulas exclusivas a un precio imperdible',
          subtitle: 'Aprovecha esta experiencia de instrospección, potenciamiento y desarrollo personal.',
          price: 'US$20.-',
          url: 'https://pay.hotmart.com/R102568356Q'
        }

    }
  },

  computed: {
    whatsappLink() {
      return `https://api.whatsapp.com/send?text=${encodeURIComponent(this.pageUrl)}`;
    },
    facebookLink() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.pageUrl)}`;
    },
    instagramLink() {
      // Instagram NO permite compartir directamente un link desde web.
      // Lo que hacemos es abrir el perfil o app para que el usuario copie o comparta manualmente.
      return `https://www.instagram.com/?url=${encodeURIComponent(this.pageUrl)}`;
    },
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

    buy () {
      
      setTimeout(() => {
        this.showNotification = true
      }, 900);

      setTimeout(() => {
        location.href = this.offer.url
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
    },

    async shareNative() {
      // Si el navegador soporta la Web Share API (por ejemplo móviles)
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Mira esta página',
            text: 'Te comparto este enlace',
            url: this.pageUrl,
          });
        } catch (err) {
          console.log('Compartir cancelado o error:', err);
        }
      } else {
        // Si no soporta, mostramos el popup personalizado
        this.showPopup = true;
      }
    },

    closePopup() {this.showPopup = false},

    copyLink() {
      navigator.clipboard.writeText(this.pageUrl).then(() => {
        this.copied = true
        setTimeout(() => (this.copied = false), 2000)
      })
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

.card-product {
  box-shadow: 0px 6px 9px 3px #292C2F;
}

.card-content-gift {
  background-color: #292C2F;
}

.text-card {
  color: #fff;
}

/* Botón principal */
.share-container {
  display: flex;
  justify-content: center;
}

.share-button {
  margin-top: 2.1rem;
  margin-bottom: 2.1rem;
  gap: 8px;
  transition: background 0.2s, transform 0.2s;
}

/* Fondo semitransparente con blur */
.share-popup {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;
}

/* Caja del popup */
.share-popup-content {
  background: #fff;
  border-radius: 16px 16px 0 0;
  padding: 24px;
  width: 100%;
  max-width: 360px;
  text-align: center;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
  position: relative;
}

.delete {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  border: none;
  cursor: pointer;
}

.share-icons {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}

.link-share {
  margin-bottom: 2.1rem;
  display: flex;
  justify-content: center;
}

.image-share {
  max-width: 60px;
  height: auto;
}

.share-icons a,
.share-icons button {
  font-size: 28px;
  border: none;
  background: none;
  cursor: pointer;
  transition: transform 0.2s, color 0.2s;
}

.share-icons a:hover,
.share-icons button:hover {
  transform: scale(1.2);
}

.download-pdf a {
  font-size: 1.5rem;
  color: #fff;
}

.download-pdf a:hover {
  /*text-shadow: 0px 6px 9px 3px #292C2F;*/
  text-shadow: 0 0 3px #38b6ff,
  0 0 6px #38b6ff,
  0 0 9px #38b6ff,
  0 0 12px #38b6ff;
}

.text-offer {
  text-shadow: 0 0 3px #38b6ff,
  0 0 6px #38b6ff,
  0 0 9px #38b6ff,
  0 0 12px #38b6ff;
}

/* Colores por red */
.copy { color: #555; }

.copied-msg {
  margin-top: 10px;
  font-size: 14px;
  color: #16a34a;
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

.intro-title {
  margin-bottom: .9rem;
}

.box-frame {
  margin: 0 auto;
  width: 66%;
  aspect-ratio: 16 / 10;
  box-shadow: 0 0 6px #38b6ff,
  0 0 12px #38b6ff,
  0 0 15px #38b6ff,
  0 0 18px #38b6ff;
  border-radius: 12px;
}

iframe {
  margin: 1% 1%;
  width: 98%;
  height: 100%;
  border-radius: 12px;
}

.offer-card{
  box-shadow: 0 0 6px #38b6ff,
  0 0 12px #38b6ff,
  0 0 15px #38b6ff,
  0 0 18px #38b6ff;
  border-radius: 12px;
}

.img-offer {
  border-radius: 12px 12px 0 0;
}

.product1 {
  margin-top: 2.1rem;
}

.product2 {
  margin-top: 6rem;
  margin-bottom: 3rem !important;
}

.card-header-name {
  background-color: #CD564A;
}

.card-header-name p {
  color: #fff !important;
}

.download-pdf {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.button {
  background-color: #CD564A;
  border-color: #CD564A;
  color: #fff !important;
  box-shadow: 0px 6px 6px 0px #922D23;
}

.button-offer-buy {
  margin-top: 1.5rem;
  margin-bottom: 3rem;
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

.hero-detail {
  background: #CD564A;
  color: #fff !important;
}

.hero-offer {
  background: #292C2F;
  color: #fff !important;
}

.detail {
  margin-top: 2.4rem;
  margin-bottom: 2.4rem !important;
}

.others-invitation {
  margin-bottom: 3rem;
}

.title-others, .title-others strong {
  display: flex;
  justify-content: center;
  color: #FFF;
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

  /*.card-product {
    margin-left: 6%;
    margin-right: 3%;
    max-width: 91%;
  }

  .box-card {
    width: 46%;
    margin: 1.5rem 2%;
  }*/

  .download-pdf a {
    font-size: 1.25rem;
    text-shadow: 0 0 3px #38b6ff,
    0 0 6px #38b6ff,
    0 0 9px #38b6ff,
    0 0 12px #38b6ff;
  }

  .box-frame {
    aspect-ratio: 16 / 16;
    box-shadow: 0 0 6px #38b6ff,
    0 0 9px #38b6ff,
    0 0 12px #38b6ff,
    0 0 15px #38b6ff;
    border-radius: 12px;
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
    margin-bottom: 3rem !important;
  }

  .download-pdf a {
    font-size: 1rem;
    text-shadow: 0 0 3px #38b6ff,
    0 0 6px #38b6ff,
    0 0 9px #38b6ff,
    0 0 12px #38b6ff;
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

  .box-card {
    width: 90%;
    margin: 1.5rem 5%;
  }

  .box-frame {
    margin: 0 auto;
    width: 81%;
    aspect-ratio: 9 / 9;
    box-shadow: 0 0 6px #38b6ff,
    0 0 12px #38b6ff,
    0 0 15px #38b6ff,
    0 0 18px #38b6ff;
    border-radius: 12px;
  }

}

</style>
