<template>
  <v-container class="py-10">
    <v-row>
      <v-col
        cols="12"
        xs="6"
        sm="3"
        v-for="(item, i) in items"
        :key="i"
        class="animate__animated"
        :class="visible ? 'animate__fadeInUp' : undefined"
      >
        <v-hover v-slot="{ hover }">
          <div
            :class="$store.state.device.isDesktop ? (hover ? 'glass-dark':'glass-light') : 'solid'"
            class="pa-6 fill-height rounded-lg glasmorphism-panel"
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
              class="display-1 mt-n6 mb-3"
              :class="hover ? 'primary--text' : undefined"
            >
              ____
            </div>
            <p class="mb-0">
              <span class="font-weight-medium title mb-0 text-break" :class="hover ? 'dark--text':'white--text'">
                {{ item.title }}
              </span>
            </p>
            <span style="position: absolute; right: 0; top: 0" class="ma-3 mt-2 d-sm-block d-none">
              <maisinfo :borderColor="hover ? 'border':'primary' "> <div v-html="item.text"></div> </maisinfo>
            </span>
            <div class="d-sm-none" v-html="item.text"></div>
          </div>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss">
//            :light="hover"
//            :class="hover ? 'light' : 'dark'"
.glasmorphism-panel{
  transform: none;
  transition: all .3s ease-in-out;
  &:hover{
    transform: scale(1.05);
  }
}
@include bp(md){
  .glass-light {
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba(133, 135, 31, 0.37);
    backdrop-filter: blur( 30px );
    -webkit-backdrop-filter: blur( 30px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
  .glass-dark {
    backdrop-filter: blur(25px) saturate(180%);
    -webkit-backdrop-filter: blur(25px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
  }
}
@include bp(xs){
  .solid{
    background-color: var(--v-dark-base);
  }
}
</style>
<script>
import AnimationJson from "../animation-json.vue";
import maisinfo from "./pricing/maisinfo.vue";
export default {
  mounted(){
    if (process.browser) {
      window.onNuxtReady((app) => {
        this.visible = true;
      });
    }
  },
  components: { maisinfo, AnimationJson },
  data() {
    return {
      visible: false,
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
