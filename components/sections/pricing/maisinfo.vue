<template>
  <v-tooltip top outlined>
    <template v-slot:activator="{ on, attrs }">
      <v-btn :color="borderColor" x-small outlined icon dark v-bind="attrs" v-on="on">
        <h2>?</h2>
      </v-btn>
    </template>
    <span class="text-center"><slot/></span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'maisinfo',
  data(){
    return {
      show: false,
    }
  },
  props:{
    borderColor: {
      type: String,
      default: 'border',
    },
  }
};
</script>

<style>
</style>