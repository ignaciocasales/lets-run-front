<template>
  <q-page padding>
    <!-- Use this tag to place the background -->
    <div class="landing-background"></div>
    <div class="row">
      <div class="absolute-center">
        <div class="col-12">
          <div>
            <h2 class="text-bold text-white">{{ $t('landing.welcome') }}</h2>
          </div>
        </div>
        <!-- TODO: replace the below placeholder with google sing-in-->
        <q-btn color="white" text-color="dark" size="md" icon-right="fas fa-sign-in-alt"
               label="log in" aling="center" class="full-width" disable/>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'PageLrLanding'
  }
</script>

<style scoped>
  .landing-background {
    background: url('/assets/bg-landing.jpg'), linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.2)
    ) no-repeat fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
</style>
