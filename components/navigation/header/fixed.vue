<template>
  <!-- Go to top button -->
  <div class="fixed-nav" v-scroll="onScroll">
    <div class="d-flex fill-width">
      <v-app-bar class="glass-fixed" flat v-model="navigation" height="88px" max-height="88px" inverted-scroll app><slot /></v-app-bar>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    navigation: false,
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.navigation = top > 200;
    }
  },
};
</script>

<style lang="scss">
.fixed-nav {
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
}
.glass-fixed {
  background: rgba(18, 18, 17, 0.5)!important;
  backdrop-filter: blur(5px)!important;
  -webkit-backdrop-filter: blur(5px)!important;
}
</style>