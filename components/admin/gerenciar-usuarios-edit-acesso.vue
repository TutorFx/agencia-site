<template>
  <v-autocomplete
    chips
    multiple
    label="Propriedades"
    :items="$store.state.products"
    v-model="user.projetos"
  ></v-autocomplete>
</template>

<script>
export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
    data(){
      return {
        
      }
    },
    watch:{
      "user.projetos": function(newValue){
        this.$axios
          .put(`/user/${this.user._id}/`, { projetos: this.user.projetos })
          .then((response) => {
            this.$toast.success(`Propriedades de ${this.user.name} alteradas.`);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    }
}
</script>

<style>

</style>