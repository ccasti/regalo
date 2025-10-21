<template>
  <div @click="clickCard" class="card">
    <div class="card-image">
      <figure class="image is-4by4">
         <!-- <img src="../assets/people.jpg"/> -->
        <img :src="elem.image"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media is-marginless">
        <div class="media-content">
          <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">{{ elem.name }}</p>
        </div>
      </div>
      <transition name="expand">
        <div v-show="showContent" class="content">
          <strong>{{ elem.title }}</strong><br/>
          <br/>{{ elem.subtitle }}<br/>
          <br/>Por apenas <strong>{{ elem.price }}</strong>
          <br/>
          <div class="button-offer">
            <button
              :id="elem.id"
              :url="elem.url"
              class="button is-rounded is-size-5-desktop is-size-6-tablet is-size-6-mobile palpitar">
              Ver más...</button>    
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  
  name: 'Card',

  props: { elem: { type: Object, required: true } },

  data () {
    return {
      showContent: true,
      showIcon: false
    }
  },

  methods: {

    clickBuy () {
      document.getElementById(this.elem.id).style.boxShadow = "0px 6px 6px 0px #922D23";
      setTimeout(() => {
        document.getElementById(this.elem.id).style.boxShadow = "0px 12px 6px -3px #922D23";
      }, 300)
    },

    clickCard (ev) {
      if (ev.target.localName == "button") {
        this.clickBuy()
        setTimeout(() => {
        document.getElementById(this.elem.id).classList.add('is-loading')
      }, 600);

      setTimeout(() => {
        this.$emit('isBuying', this.elem.url)
      }, 900);

     
      } else {
        return
      }
    }
    
  }

}


</script>

<style scoped lang="scss">

  .card {
    width: 100%;
    box-shadow: 0px 3px 3px 0px #38b6ff;
  }

  .media-content p, .image {
    opacity: .75;
  }

  .card:hover {
    box-shadow: 0px 6px 6px 0px #38b6ff;
  }

  .card:hover p, .card:hover .image  {
    opacity: 1;
  }

  .button-offer {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .card {
      box-shadow: 0px 6px 6px 0px #38b6ff;
    }

    .card p, .image  {
      opacity: 1;
    }

    .button {
      box-shadow: 0px 12px 6px -3px #922D23;
      transition: all 300ms;
      -webkit-tap-highlight-color: transparent;
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    .card {
      box-shadow: 0px 6px 6px 0px #38b6ff;
    }

    .card p, .image  {
      opacity: 1;
    }

    .button {
      box-shadow: 0px 12px 6px -3px #922D23;
      transition: all 300ms;
      -webkit-tap-highlight-color: transparent;
      opacity: 1;
    }
  }

</style>
