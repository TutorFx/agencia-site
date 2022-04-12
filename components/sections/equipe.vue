<template>
  <div>
    <v-container>
      <div class="d-flex">
        <div class="display-2 font-weight-bold title-team">
          Equipe A.I.
        </div>
      </div>
      <div>
        <v-row>
          <v-col class="team team-left" cols="12" md="6">
            <colaborador
              :content="{
                name: 'Marcos',
                cargo: 'Gestor de Marketing',
                excerpt: `Nosso gestor de marketing! É responsável fazer a ponte entre os clientes e os agentes A.I.,
                garantindo que cada um faça seu trabalho com a maior excelência possível
                para entregar um resultado satisfatório. Ele é quem bota ordem na casa!`,
              }"
            />
            <colaborador
              :content="{
                name: 'Igor',
                cargo: 'Designer Gráfico',
                excerpt: `O designer gráfico e coordenador da galera.
                Especialista na criação das artes e imagens, 
                ele é responsável pela identidade visual de cada empresa. 
                É ele quem coordena a equipe para entregar um perfil com a cara do seu negócio.`,
              }"
            />
          </v-col>
          <v-col class="team team-right">
            <colaborador
              :content="{
                name: 'Gabriel Serejo',
                cargo: 'Programador',
                excerpt: `O cara é fera quando o assunto é programação e criação de sites.
                Ele fica responsável por cuidar do web design da empresa,
                criando uma página virtual interativa e de fácil acesso para os seus clientes.
                Ele é a chave para levar seu negócio ao Brasil inteiro.`,
              }"
            />
            <colaborador
              :content="{
                name: 'Tetê',
                cargo: 'Especialista em Comunicação',
                excerpt: `É a especialista em comunicação do grupo.
                Fica responsável por cuidar das mídias sociais,
                copyrights e criação de roteiros e reportagens de cada empresa.
                É ela quem chama a atenção do público para seu negócio mostrando
                tudo o que sua equipe tem para oferecer.`,
              }"
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    colaborador: () => import("./equipe/colaborador.vue"),
  },
};
</script>

<style lang="scss">
.title-team {
  max-width: 30rem;
}
.team-left {
  margin-top: 3rem;
}

.colaborador {
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--v-accent-darken1);
  @include bp("md") {
    &:last-child {
      border-bottom: none;
    }
  }
}
.team-right {
  .colaborador {
    &:last-child {
      border-bottom: none !important;
    }
  }
}
</style>