<template>
  <v-app-bar class="black elevation-0" max-height="70px" style="z-index: 90">
    <v-container>
      <div class="d-flex">
        <v-btn text to="/" v-if="$nuxt.$route.path != '/'">
          <span class="d-none d-md-block">Início</span>
          <v-icon class="d-md-none">mdi mdi-home</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <client-only>
          <div v-if="!$auth.loggedIn">
            <v-btn text small to="/usuario" nuxt class="mr-3 small"
              ><v-icon class="mr-3" color="primary"
                >mdi mdi-account-outline</v-icon
              ><span>Entrar</span></v-btn
            >
            <v-hover v-slot="{ hover }">
              <v-btn
                small
                to="/registro"
                nuxt
                color="primary"
                outlined
                class="white--text"
                :style="`border-color: ${
                  $vuetify.theme.currentTheme.primary
                }; border-width: 1px!important; background: ${
                  hover ? $vuetify.theme.currentTheme.primary : 'none'
                }`"
                >registro</v-btn
              >
            </v-hover>
          </div>
          <div v-else>
            <v-btn
              to="/usuario"
              nuxt
              rounded
              class="ma-0 mr-3 elevation-0"
              color="primary"
              text
            >
              <v-icon class="mr-md-2">mdi mdi-account</v-icon>
              <span class="d-none d-md-block">
              {{
                $store.state.auth.loggedIn
                  ? "Olá, " + $store.state.auth.user.user.name.split(" ")[0]
                  : "Minha Conta"
              }}
              </span>
            </v-btn>
            <v-btn rounded color="primary" text @click="$auth.logout()">
              <v-icon class="mr-md-3">mdi mdi-logout</v-icon> 
              <span class="d-none d-md-block">Sair</span>
            </v-btn>
          </div>
        </client-only>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style>
</style>