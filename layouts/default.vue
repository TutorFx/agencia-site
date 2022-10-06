<template>
  <v-app id="app" ref="body">
    <navbar />
    <dialogs />
    <alerts />
    <loader />
    <v-main class="black">
      <nuxt />
    </v-main>
    <footer-one v-if="!$store.state.menu" />
  </v-app>
</template>

<style lang="scss">
.line-bottom {
  border-bottom: 1px solid #436094 !important;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;800&display=swap");
.v-application {
  font-family: "Montserrat", sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: "Montserrat", sans-serif !important;
  }
}
</style>

<script>
export default {
  components: {
    footerOne: () => import("~/components/navigation/footer/footer.vue"),
  },
};
</script>