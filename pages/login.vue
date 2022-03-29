<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" md="5">
        <div class="d-flex justify-center">
          <logo style="max-width: 200px" class="mb-6" />
        </div>
        <v-card class="pa-8">
          <v-form @submit.prevent="userLogin">
            <v-text-field
              outlined
              placeholder="teste@gmail.com"
              label="E-mail"
              type="text"
              autocomplete="on"
              v-model="login.email"
            />
            <v-text-field
              outlined
              placeholder="********"
              label="Senha"
              type="password"
              autocomplete="on"
              v-model="login.password"
            />
            <v-btn type="submit" depressed color="primary" block>Enviar</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith("local", { data: this.login }).then(() => this.$toast.success("Bem vindo!"));
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    if (this.$auth.loggedIn) {
      if (this.$auth.$storage.getUniversal("redirect")) {
        this.$router.replace(this.$auth.$storage.getUniversal("redirect"));
        this.$auth.$storage.removeUniversal("redirect");
        return;
      }

      this.$router.replace("/");
      return;
    }
  },
};
</script>