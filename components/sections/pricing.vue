<template>
  <div>
    <v-container class="py-16">
      <v-row>
        <!-- Executive -->
        <v-col cols="12" sm="6" md="4">
          <plano-ranking />
        </v-col>
        <!-- Executive -->
        <v-col cols="12" sm="6" md="4">
          <plano-business />
        </v-col>
        <!-- Executive -->
        <v-col cols="12" sm="12" md="4">
          <plano-enterprise />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PlanoRanking from './pricing/planoRanking.vue';
import PlanoBusiness from './pricing/planoBusiness.vue';
import planoEnterprise from './pricing/planoEnterprise.vue';
export default {
  components: {
    PlanoRanking,
    PlanoBusiness,
    planoEnterprise,
  },
};
</script>

<style lang="scss">
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
</style>