<template>
  <v-container>
    <v-row class="py-5">
      <v-col cols="12" md="6">
        <client-only>
          <v-card v-if="$store.state.auth.loggedIn" class="d-flex align-center">
            <v-avatar class="ma-5" size="100">
              <NiceAvatar />
            </v-avatar>
            <div class="d-flex">
              <div>
                <div class="title">
                  Bem-vindo, {{ $store.state.auth.user.user.name }}
                </div>
                <span class="caption text-no-wrap"
                  ><v-icon class="mr-3" small>mdi mdi-email-outline</v-icon
                  >{{ $store.state.auth.user.user.email }}</span
                >
              </div>
            </div>
            <v-spacer />
            <v-btn fab icon>
              <v-icon> mdi mdi-cog </v-icon>
            </v-btn>
          </v-card>
        </client-only>
      </v-col>
      <gerenciar-usuarios />
    </v-row>
  </v-container>
</template>
<script>
import NiceAvatar from "vue-nice-avatar";
import gerenciarUsuarios from "../components/admin/gerenciar-usuarios.vue";
export default {
  middleware: ["auth"],
  components: {
    NiceAvatar,
    gerenciarUsuarios
  }
}
</script>