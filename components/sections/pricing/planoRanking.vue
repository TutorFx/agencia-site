<template>
  <v-card class="fill-height dark rounded-lg">
    <v-system-bar class="dark px-8 justify-center" height="30px"></v-system-bar>
    <div class="pa-8">
      <p class="headline mb-5 no-interaction">Ranking</p>
      <p class="font-weight-light no-interaction pricing-content">
        <br>
        Estabeleça uma forte presença virtual em suas mídias sociais.
      </p>
      <v-btn large block outlined color="primary">Começar agora</v-btn>
    </div>
    <v-divider></v-divider>
    <div class="pa-3 py-6">
      <div class="px-3 font-weight-light pricing-scroller">
        <check v-for="i in checks" :key="i">
          <span>{{ i }}</span>
        </check>
      </div>
    </div>
  </v-card>
</template>

<script>
import check from "./check.vue";
import maisinfo from "./maisinfo.vue";
export default {
  components: {
    check,
    maisinfo,
  },
  data() {
    return {
      checks: [
        "Artes Gráficas",
        "Vídeos Ilustrativos",

        "Gerenciamento Insta/Face",
        "Anuncios ADS em Redes Sociais",
        "Anuncios ADS no GOOGLE",

        "Campanhas ON/OFF",
        "Campanhas Internas",
      ],
    };
  },
};
</script>

<style>
</style>