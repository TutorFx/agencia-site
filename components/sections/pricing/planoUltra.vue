<template>
  <v-card class="fill-height dark rounded-lg price">
    <v-system-bar class="dark px-8 justify-center" height="30px"></v-system-bar>
    <div class="pa-8">
      <p class="headline mb-5 no-interaction">Ultra</p>
      <p class="font-weight-light no-interaction pricing-content">
        <br />
        Todos os recursos de marketing no Full ao seu alcance.
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
        "Ilustração",
        "Campanhas ON/OFF",
        "Campanhas Internas",
        "Auditorias",
        "Gerenciamento Em Multi Redes Sociais",
        "Anuncios Ads Em Redes Sociais",
        "Anuncios Ads No Google",
        "Anuncios Ads No Google Merchan",
        "Funil De Vendas",
        "Chatbot",
        "Site Código (Nodejs / Nuxt / Vuejs / React)",
        "Suporte Email",
        "Hospedagem + Servidor",
        "Extranet",
        "App",
        "Filmagens 4k Áereas C/ Drone",
        "Filmagens 4k Com Estabilizadores",
        "Filmagens 6k (Cinema)",
        "Render 3d Estático",
        "Render 3d Animação",
        "Designer De Ambientes 3d",
      ],
    };
  },
};
</script>

<style>
</style>