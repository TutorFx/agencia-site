<template>
  <div class="main-wrapper-video">
    <video
      v-if="$store.state.device.isDesktop"
      playsinline="true"
      muted
      loop
      preload="none"
      ref="video"
      :src="require('~/assets/videos/1.mp4')"
    ></video>
    <div class="content"><slot /></div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.browser) {
      if (this.$store.state.device.isDesktop) {
        let video = this.$refs.video;
        window.onNuxtReady((app) => {
          video.play();
        });
      }
    }
  },
};
</script>

<style lang="scss">
.main-wrapper-video {
  position: relative;
  background-color: #000;
  width: 100%;
  overflow: hidden;
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    transform: translateX(-50%) translateY(-50%);
    @include bp(xs) {
      display: none;
    }
  }
  .content {
    position: relative;
    z-index: 0;
    height: 100%;
    background-color: #000000a3;
  }
}
</style>