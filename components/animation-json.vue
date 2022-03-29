<template>
  <div v-if="path" ref="animation" ></div>
</template>
<script>
import lottie from "lottie-web";

export default {
  mounted() {
    if (this.path == null) return;
    try {
      if (this.pathDark) {
        this.jsonDark = require("../assets/animation/" + this.pathDark + ".json");
      }
    } catch (e) {
      console.log(e);
    }
    try {
      if (this.path) {
        this.json = require("../assets/animation/" + this.path + ".json");
      }
    } catch (e) {
      console.log(e);
    }
    try {
      
      /*
      getColors(json).map(cor => {
        json = replaceColor(`[${cor[0]}, ${cor[1]}, ${cor[2]}]`, #ef32d0, json)
        console.log(cor)
      }) 
      */
      this.createAnimation();
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      animation: null,
      json: null,
      jsonDark: null,
    };
  },
  methods: {
    createAnimation(theme) {
      this.animation = lottie.loadAnimation({
        container: this.$refs.animation, // the dom element that will contain the animation
        renderer: "svg",
        name: this._uid,
        loop: true,
        autoplay: true,
        animationData: theme ? this.jsonDark : this.json, // the path to the animation json
      });
    },
    destroyAnimation() {
      try{
        this.animation.destroy(this._uid);
      }catch(err){
        console.log(err)
      }
    },
  },
  props: {
    path: {
      type: String,
    },
    pathDark: {
      type: String,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    dark(val) {
      if (val) {
        if (this.pathDark){
          if (this.jsonDark != null) {
            this.destroyAnimation();
            this.createAnimation(val);
          }
        }
      } else {
        if (this.path){
          if (this.json != null) {
            this.destroyAnimation();
            this.createAnimation(val);
          }
        }
      }
    },
  },
};
</script>