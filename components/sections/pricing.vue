<template>
  <div @mouseover="onHoverEnd = true" class="pricing-container">
    <div v-if="!onHoverEnd" class="animation-pricing-slider">
      <animation-json
        path="swipe"     
      />
    </div>
    <v-container class="py-16">
      <Flicking
        :options="options"
        ref="flicking"
      >
        <!-- Executive -->
        <v-col cols="auto">
          <plano-ranking />
        </v-col>
        <!-- Executive -->
        <v-col cols="auto">
          <plano-business />
        </v-col>
        <!-- Executive -->
        <v-col cols="auto">
          <plano-enterprise />
        </v-col>
        <!-- Executive -->
        <v-col cols="auto">
          <plano-ultra />
        </v-col>
      </Flicking>
    </v-container>
  </div>
</template>

<script>
import PlanoRanking from './pricing/planoRanking.vue';
import PlanoBusiness from './pricing/planoBusiness.vue';
import planoEnterprise from './pricing/planoEnterprise.vue';
import planoUltra from './pricing/planoUltra.vue';
export default {
  components: {
    PlanoRanking,
    PlanoBusiness,
    planoEnterprise,
    planoUltra,
  },
  data(){
    return {
      options: {
        align: { camera: 0, panel: 0 },
      },
      onHoverEnd: false,
    }
  },
  mounted(){
  }
};
</script>

<style lang="scss">
.pricing-container{
  position: relative;
}
.animation-pricing-slider{
  div{
    max-width: 300px!important;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
}
.price{
  max-width: 300px!important;
  @include bp(md){
    max-width: 300px;
  }
}
.instagram {
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.pricing-content {
  min-height: 60px;
  margin-bottom: 28px;
}
.pricing-scroller{
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 50vh;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(255 255 255 / 30%);
    border-radius: 10px;
  }
}
</style>