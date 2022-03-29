<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" md="5">
        <v-card class="pa-8">
          <v-form>
            <v-text-field
              outlined
              placeholder="Seu Nome"
              label="Nome"
              type="text"
              v-model="register.name"
              autocomplete="on"
            />
            <v-text-field
              outlined
              placeholder="teste@gmail.com"
              label="E-mail"
              type="text"
              v-model="register.email"
              autocomplete="on"
            />
            <v-text-field
              outlined
              placeholder="********"
              label="Senha"
              type="password"
              v-model="register.password"
              autocomplete="on"
            />
            <v-btn @click="userRegister" depressed color="primary" block>Enviar</v-btn>
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
      register: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userRegister() {
      this.$axios.post("/auth/register", this.register)
        .then(() => {
          console.log("Usuário cadastrado com sucesso!");
          this.$auth.loginWith('local', { data: this.register })
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
};
</script>