<template>
  <v-dialog :value="$store.state.contato" persistent max-width="600px">
    <v-form
      ref="form"
      v-model="valid"
      @submit.prevent="formSubmit"
      lazy-validation
    >
      <v-card class="pa-5">
        <v-card-text>
          <h5 class="mb-3 primary--text">Te retornaremos em breve</h5>
          <h2 class="mb-3">Fale com a gente</h2>
          <p class="mb-10">Consultoria Online</p>
          <v-row>
            <v-col cols="12" md="6" class="py-0 my-0">
              <v-text-field
                filled
                dense
                name="name"
                label="Nome"
                color="dark primary"
                v-model="name"
                :rules="nameRules"
                required
                class="my-0 py-0"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0 my-0">
              <v-text-field
                filled
                dense
                name="Empresa"
                label="Empresa"
                color="dark primary"
                v-model="empresa"
                :rules="empresaRules"
                required
                class="my-0 py-0"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0 my-0">
              <v-text-field
                filled
                dense
                name="email"
                label="Email"
                color="dark primary"
                v-model="email"
                :rules="emailRules"
                required
                class="my-0 py-0"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-textarea
            filled
            name="message"
            label="Mensagem"
            color="dark primary"
            v-model="mensagem"
            required
            class="pt-4"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary darken-1"
            text
            :small="$vuetify.breakpoint.mobile ? true : undefined"
            @click="$store.commit('contatoToggle')"
          >
            voltar
          </v-btn>
          <v-btn
            depressed
            :small="$vuetify.breakpoint.mobile ? true : undefined"
            color="primary"
            class="black--text"
            type="submit"
          >
            <v-icon left>mdi-send</v-icon> Enviar dados
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 40 || "Name must be less than 40 characters",
    ],
    empresa: "",
    empresaRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 40 || "Name must be less than 40 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    mensagem: "",
  }),
  methods: {
    async formSubmit(e) {
      this.$refs.form.validate();
      if (this.valid) {
        this.$axios.$get(
          `https://api.callmebot.com/whatsapp.php?phone=+556285637830&apikey=132029`,
          {
            params: {
              text:
                `nome: ${this.name}\n` +
                `empresa: ${this.empresa}\n` +
                `email: ${this.email}\n` +
                `mensagem: ${this.mensagem}`,
            },
          },
          {
            headers: {
              //'Access-Control-Allow-Origin': '*',
              "Content-Type": "application/json",
            },
            timeout: 15000,
          }
        ).then(() => {
          this.$toast.success("Obrigado por entrar em contato!")
        }).catch(() => {
          this.$toast.error("Erro, tente novamente mais tarde!")
        })
        this.$store.commit("contatoToggle");
      }
    },
  },
  head() {
    return {
      /*       script: [
        {
          hid: "hs-script-loader",
          src: "//js.hs-scripts.com/7236089.js",
          defer: true,
          async: true,
        },
      ], */
    };
  },
};
</script>

<style></style>
