<template></template>

<script>
export default {
  setup() {},
  mounted() {
    this.$axios.onError((error) => {
      this.error = error.response.data.error;
      if (error.response.status == 400) {
        if (error.response.data.error != null)
          return this.$toast.error(error.response.data.error);
      }
    });
  },
  data() {
    return {
      error: "",
    };
  },
};
</script>

<style>
</style>