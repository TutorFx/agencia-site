<template>
  <v-card class="fill-height dark rounded-lg price">
    <v-system-bar class="dark px-8 justify-center" height="30px"></v-system-bar>
    <div class="pa-8">
      <p class="headline mb-5 no-interaction">Business</p>
      <p class="font-weight-light pricing-content no-interaction">
        <br>
        Otimize os resultados financeiros no funil de vendas da sua empresa.
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

        "Campanhas On/Off",
        "Campanhas Internas",

        "Gerenciamento AIO",
        "Anuncios Ads Em Redes Sociais",
        "Anuncios Ads No Google",
        "Anuncios Ads No Google Merchan Center",
        "CRM",
        "Funil De Vendas",

        "Website",
        "Suporte Email",

        "Filmagens 4k Áereas C/ Drone",
        "Filmagens 4k Com Estabilizadores",
      ],
    };
  },
};
</script>

<style>
</style>