<template>
  <v-tooltip left>
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <v-switch inset v-model="user.active" color="green"></v-switch>
      </div>
    </template>
    <span>{{`${!user.active?'Ativar':'Desativar'} usuário`}}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  watch: {
    "user.active": function (newValue) {
      this.$axios
        .put(`/user/${this.user._id}/`, { active: this.user.active })
        .then((response) => {
          this.$toast.success(
            `Status de ${this.user.name} alteradas para ${
              this.user.active ? "ativo" : "inativo"
            }.`
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>