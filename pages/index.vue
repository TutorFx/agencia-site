<template>
  <div>
      <videobg>
        <hero />
        <servicos />
      </videobg>
      <indicadores />
      <planos /> 
      <equipe />
  </div>
</template>

<script>
import indicadores from '~/components/sections/indicadores.vue'
export default {
  components: { indicadores },
  head() {
    return {
      title: 'Agência Industrial - Marketing Expansivo'
    }
  }
}
</script>

<style>

</style>