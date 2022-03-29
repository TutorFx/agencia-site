<template>
  <v-container class="my-10">
    <v-row>
      <v-col
        cols="12"
        xs="6"
        sm="3"
        v-for="(item, i) in items"
        :key="i"
        class="animate__animated animate__fadeInUp"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            :light="hover"
            :class="hover ? 'light' : 'dark'"
            class="pa-6 servico fill-height rounded-lg"
          >
            <v-responsive
              :aspect-ratio="1 / 1.05"
            >
              <v-lazy>
                <!-- <component :is="item.icon" /> -->
                <animation-json
                  class="pa-3 animate__animated animate__fadeInUp"
                  :style="`animation-delay: ${i*200}ms;`"
                  :path="item.icon"
                  :path-dark="item.iconDark"
                  :dark="hover"
                />
              </v-lazy>
            </v-responsive>
            <div
              style="letter-spacing: -1px !important"
              class="primary--text display-1 mt-n6 mb-3"
            >
              ____
            </div>
            <p class="mb-0">
              <span class="font-weight-medium title mb-0 text-break">
                {{ item.title }}
              </span>
            </p>
            <span style="position: absolute; right: 0; top: 0" class="ma-3 mt-2"
              ><maisinfo> <div v-html="item.text"></div> </maisinfo
            ></span>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AnimationJson from "../animation-json.vue";
import maisinfo from "./pricing/maisinfo.vue";
export default {
  components: { maisinfo, AnimationJson },
  data() {
    return {
      items: [
        {
          icon: "target", //require("../icons/marketing.vue").default,
          iconDark: "target-dark",
          title: "Marketing",
          text: "Campanhas 360º,  Funil de vendas,  Endomarketing,  Analytics,  SEO",
        },
        {
          icon: "rocket",
          iconDark: "rocket-dark",
          title: "Tráfego ADS",
          text: "Anuncios ADS, Ranqueamento",
        },
        {
          icon: "idea",
          iconDark: "idea-dark",
          title: "Mídias",
          text: "Artes gráficas, Aplicativos, Modelagem 3D, Filmagens",
        },
        {
          icon: "cloud",
          iconDark: "cloud-dark",
          title: "Web e Apps",
          text: "Websites, Aplicativos, Sistemas",
        },
      ],
    };
  },
};
</script>
