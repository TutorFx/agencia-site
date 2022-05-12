<template>
  <v-card class="fill-height dark rounded-lg price">
    <v-system-bar class="primary px-8 justify-center" height="30px"
      >Recomendado para você</v-system-bar
    >
    <div class="pa-8">
      <p class="headline mb-5 no-interaction">Enterprise</p>
      <p class="font-weight-light pricing-content no-interaction">
        Surpreenda o mercado com todos os recursos que um setor de marketing pode gerar.
      </p>
      <v-btn large block color="primary">Começar agora</v-btn>
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
        "Ilustração",

        "Campanhas On/Off",
        "Campanhas Internas",
        "NPS Interna e Externa",

        "Gerenciamento AIO",
        "Anuncios Ads Em Redes Sociais",
        "Anuncios Ads No Google",
        "Anuncios Ads No Google Merchan Center",

        "Funil De Vendas",
        "Chatbot",

        "Website Plus",
        "Suporte Email",
        "Hospedagem + Servidor",
        "Extranet",

        "Filmagens 4k Áereas C/ Drone",
        "Filmagens 4k Com Estabilizadores",
        "Filmagens 6k (Cinema)",

        "Render 3d Estático",
      ],
    };
  },
};
</script>

<style>
</style>