<template>
  <div>
    <Fixed>
      <v-container class="d-flex align-center">
        <v-img
          src="/branding/starter.svg"
          class="mr-6"
          height="40"
          width="40"
          max-width="40"
        ></v-img>
        <div class="headline font-weight-bold">starter</div>
        <v-spacer></v-spacer>
        <v-btn depressed color="starter">Começar agora</v-btn>
      </v-container>
    </Fixed>
    <div>
      <kinesis-container
        class="starterBg overflow-hidden"
        :active="$store.state.device.isDesktop"
      >
        <div>
          <v-container>
            <v-row align="center" class="starter-hero">
              <v-col cols="12" md="6">
                <div
                  class="
                    d-flex
                    align-center
                    mb-6
                    justify-center justify-md-start
                  "
                >
                  <v-img
                    src="/branding/starter.svg"
                    class="mr-6"
                    height="40"
                    width="40"
                    max-width="40"
                  ></v-img>
                  <div class="headline font-weight-bold">starter</div>
                </div>
                <div class="mb-4">
                  <kinesis-element :strength="5">
                    <div class="display-1 text-center text-md-left">
                      Plano Inicial ao Marketing Digital
                    </div>
                  </kinesis-element>
                </div>
                <div class="mb-10">
                  <kinesis-element :strength="10">
                    <p class="grey--text text-center text-md-left">
                      Vivamus libero risus, pretium et dolor tempus, aliquet
                      cursus odio. Integer velit eros, bibendum quis egestas a,
                      suscipit eget lacus.
                    </p>
                  </kinesis-element>
                </div>
                <div class="d-flex justify-center justify-md-start">
                  <div class="d-inline-block">
                    <v-btn x-large color="green" to="/planos/starter" nuxt
                      >Inicie agora</v-btn
                    >
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <kinesis-element class="hero-img" :strength="60">
                  <v-img src="/branding/starter.svg"></v-img>
                </kinesis-element>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </kinesis-container>
      <v-divider></v-divider>
    </div>
    <div>
      <v-container>
        <div class="text-center display-1">Marketing de conteúdo</div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Fixed from "~/components/navigation/header/fixed.vue";
export default { components: { Fixed } };
</script>

<style lang="scss">
.starter-hero {
  min-height: 650px;
  @include bp(xs) {
    padding: 5rem 0 5rem;
  }
  .hero-img {
    @include bp(md) {
      position: relative;
      right: -5rem;
      bottom: -5rem;
    }
  }
}
</style>