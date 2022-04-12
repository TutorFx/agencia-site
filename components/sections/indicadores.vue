<template>
  <div>
    <v-divider></v-divider>
    <div class="indicadores">
      <v-container class="py-10">
        <div
          class="d-flex flex-wrap justify-space-between align-center mb-10 pa-3"
        >
          <div class="display-2 mb-3">Resultados que entregamos</div>
          <div v-if="$store.state.device.isDesktop" class="animation ma-n10">
            <animation-json path="builtrocks" />
          </div>
        </div>
        <div class="d-flex flex-wrap justify-space-between black">
          <div v-for="(value, i) in indicadores" :key="i" class="pa-4">
            <v-lazy v-model="indicadores[i].value">
              <div
                class="
                  display-1
                  d-flex
                  font-weight-bold
                  mb-3
                  animate__animated animate__fadeInUp
                "
                :style="`animation-delay: ${i * 200}ms;`"
              >
                <div class="primary--text d-flex mr-2">
                  <span>+</span>
                  <count-to
                    :startVal="0"
                    :endVal="value.endval"
                    :duration="4000"
                  />
                </div>
                {{ value.suffix }}
              </div>
            </v-lazy>
            <div
              v-if="!indicadores[i].value"
              class="display-1 d-flex font-weight-bold mb-3 primary--text"
              style="opacity: 0"
            >
              INDUSTRIAL!
            </div>
            <div style="background: black">
              <div class="gradient"></div>
              <v-card-title v-html="value.of" class="px-0"> </v-card-title>
            </div>
          </div>
        </div>
      </v-container>
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script>
import CountTo from "vue-count-to";
export default {
  components: {
    CountTo,
  },
  data() {
    return {
      indicadores: [
        {
          suffix: "MILHÕES",
          of: "De receita criada <br> no Funil de Vendas",
          value: false,
          endval: 6,
        },
        {
          suffix: "MIL",
          of: "Leads convertidos <br> em anúncios pagos",
          value: false,
          endval: 95,
        },
        {
          suffix: "CASES",
          of: "Fábricas e Empresas <br> atendidas",
          value: false,
          endval: 41,
        },
        {
          suffix: "MIL",
          of: "Investimentos <br> em Publicidade",
          value: false,
          endval: 967,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.gradient {
  background: linear-gradient(to right, #d18c39 -30%, #d18d3900 100%);
  height: 4px;
  width: 200px;
}
.indicadores {
  min-height: 75vh;
  align-items: center !important;
  display: flex;
}
.animation{
  max-width: 200px;
  max-height: 200px;
}
</style>