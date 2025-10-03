<template>
  <div class="container">
    <article class="message">
      <div class="message-header">
        Redireccionando
      </div>
      <div class="contDetails">
        <div class="message-body has-text-centered">
          <p>Estas siendo redireccionado a otra página</p>
          <button class="button is-rounded button-login is-loading"></button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>



</script>

<style lang="scss" scoped>

  .message-header {
    background-color: #CB4335;
  }

  .message-body {
    padding: 0.2rem 1.5rem;
    border: none;
  }

  .contDetails {
    background-color: #fff;
    padding: 1rem 0;
    overflow-y: auto;
  }

  .button-login {
    margin-top: 2.4rem;
    background-color: #fff;
    border-color: #fff;
    color: #fff;
  }

</style>
