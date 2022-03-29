<template>
  <v-col cols="12" md="6" v-if="admin">
    <v-card>
      <title-admin>Gerenciar Usuários</title-admin>
      <v-divider></v-divider>
      <div class="pa-6">
        <div class="px-4" v-if="users != []">
          <div v-for="(user, i) in users" :key="i" class="mb-3">
            <div
              class="d-flex align-center"
            >
              <v-avatar size="40px" class="mr-3">
                <NiceAvatar />
              </v-avatar>
              <span class="ml-2">
                <strong>{{ user.name }}</strong>
              </span>
              <v-spacer></v-spacer>
              <v-dialog transition="dialog-bottom-transition" max-width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn fab icon small v-bind="attrs" v-on="on">
                    <v-icon>mdi mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-card-title color="primary" dark class="d-flex align-center pl-3">
                      <v-icon class="ma-3">mdi mdi-account-edit</v-icon> 
                      {{ user.name }} <v-spacer />
                      <gerenciar-usuarios-toggle-user :user="user" />
                    </v-card-title>
                    <v-card-text> 
                      <div class="pa-1">
                        <v-row justify="space-between">
                          <v-col cols="auto" style="max-width: calc(100% - 94px)"> 
                            <!-- editar nome -->
                            <edit-name class="mb-3" :user="user" />
                            <!-- edit email -->
                            <edit-email :user="user" />
                          </v-col>
                          <v-col cols="auto">
                            <v-hover v-slot="{ hover }">
                              <v-avatar size="70px" >
                                <NiceAvatar />
                                <div v-if="hover" class="align-center d-flex justify-center"
                                style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;">
                                  <v-btn icon>
                                    <v-icon>mdi mdi-image-edit-outline</v-icon>
                                  </v-btn>
                                </div>
                              </v-avatar>
                            </v-hover>
                          </v-col>
                        </v-row>
                        <!-- edit acessos -->
                        <edit-acesso class="my-3" :user="user" />
                        <!-- editar permissões -->
                      </div>
                    </v-card-text>
                    <v-card-actions class="justify-space-between">
                      <v-dialog
                        transition="dialog-bottom-transition"
                        max-width="600"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="red" class="mr-3" v-bind="attrs" v-on="on" text>
                            <v-icon>mdi mdi-delete</v-icon> APAGAR
                          </v-btn>
                        </template>
                        <template v-slot:default="dialog">
                          <v-card>
                            <v-alert type="error">Atenção</v-alert>
                            <v-card-text class="heading"
                              >Você está prestes a deletar o Usuário
                              <span class="red--text">{{
                                user.name
                              }}</span>
                              Depois de apagado, não será possível recuperar. Você pode considerar apenas desativar o usuário.
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn text @click="dialog.value = false" color="blue">Cancelar</v-btn>
                              <v-btn text @click="deleteUser(user)" color="yellow"> <v-icon class="mr-3">mdi mdi-alert-outline</v-icon> Apagar Usuário</v-btn>
                            </v-card-actions>
                          </v-card>
                        </template>
                      </v-dialog>
                      <v-spacer></v-spacer>
                      <v-btn text @click="dialog.value = false">Fechar</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </div>
          </div>
        </div>
        <v-skeleton-loader
          v-for="i in 10"
          :key="i"
          type="list-item-avatar"
          v-else
        ></v-skeleton-loader>
      </div>
    </v-card>
  </v-col>
</template>

<script>
import NiceAvatar from "vue-nice-avatar";
import titleAdmin from "./title-admin";
import editName from "./gerenciar-usuarios-edit-name.vue";
import editEmail from "./gerenciar-usuarios-edit-email.vue";
import editAcesso from "./gerenciar-usuarios-edit-acesso.vue";
import GerenciarUsuariosToggleUser from './gerenciar-usuarios-toggle-user.vue';
export default {
  mounted() {
    if (this.admin) {
      this.$axios
        .get("/user/userlist/")
        .then((response) => {
          this.users = response.data.users;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  data() {
    return {
      users: [],
      admin: this.$auth.user.user.scope.includes("admin"),
    };
  },
  methods: {
    deleteUser(user) {
      this.$axios
        .delete(`/user/${user._id}/`)
        .then((response) => {
          this.users = response.data.users;
          this.$toast.success(`Usuário ${user.name} deletado.`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editUser(user){
      //
    },
  },
  components: {
    NiceAvatar,
    titleAdmin,
    editName,
    editEmail,
    editAcesso,
    GerenciarUsuariosToggleUser,
  },
};
</script>

<style>
</style>