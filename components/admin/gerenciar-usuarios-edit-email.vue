<template>
  <div class="d-flex">
    <v-icon small class="mr-3">mdi mdi-email-outline</v-icon>
    <div v-if="!isEditing" @click="isEditing = !isEditing">
      <div class="mr-3">{{ user.email }}</div>
    </div>
    <div class="d-flex align-center" v-else>
      <div style="max-width: 150px" class="mr-3">
        <v-text-field
          class="body-1 mb-n3"
          v-model="user.email"
          dense
        ></v-text-field>
      </div>
      <v-btn @click="isEditing = !isEditing" icon small>
        <v-icon>mdi mdi-check</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      isEditing: false,
    };
  },
  watch: {
    isEditing(actualValue) {
      if (actualValue == false) return this.editUser(this.user);
    },
  },
  methods: {
    editUser(user) {
      this.$axios
        .put(`/user/${user._id}/`, { email: this.user.email })
        .then((response) => {
          this.users = response.data.users;
          this.$toast.success(`Email alterado para o usuário ${this.user.name}.`);
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