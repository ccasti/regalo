<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by4">
         <!-- <img src="../assets/carta.jpg"/> -->
        <img :src="elem.image"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media is-marginless">
        <div class="media-content">
          <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile">{{ elem.name }}</p>
        </div>
      </div>
      <div class="content">
        <strong>{{ elem.title }}</strong><br/>
        <br/>{{ elem.subtitle }}<br/>
        <br/>Por apenas <strong>{{ elem.price }}</strong>
        <br/>
        <div class="button-offer">
          <button
            @click="seeMore"
            :id="elem.id"
            :url="elem.url"
            class="button is-rounded is-size-5-desktop is-size-6-tablet is-size-6-mobile palpitar">
            Ver más...</button>    
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
  name: 'Card',

  props: { elem: { type: Object, required: true } },

  data () {
    return {}
  },

  methods: {

    seeMore () {this.$emit('isBuying', this.elem.url)}
    
  }

}


</script>

<style scoped lang="scss">

  .card {
    width: 100%;
    box-shadow: 0px 3px 3px 0px #38b6ff;
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
