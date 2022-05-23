<template>
  <div>
    <v-container class="my-16">
      <div class="d-flex">
        <div class="display-2 font-weight-bold title-team">
          Equipe A.I.
          <v-btn fab @click="sorty = updateColabs()"
            ><v-icon>mdi mdi-refresh</v-icon></v-btn
          >
        </div>
      </div>
      <div>
        <v-row>
          <v-col class="team team-left" cols="12" md="6">
            <colaborador
              v-for="(colab, i) in sorty.slice(0, 2)"
              :key="i"
              :content="colab"
            />
          </v-col>
          <v-col class="team team-right">
            <colaborador
              v-for="(colab, i) in sorty.slice(2, 4)"
              :key="i"
              :content="colab"
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
  data: () => ({
    colabs: [],
    sorty: [],
  }),
  methods:{
    updateColabs(){
      return [
        {
          name: "Marcos",
          cargo: "Gestor de Marketing",
          excerpt: `Nosso gestor de marketing! É responsável fazer a ponte entre os clientes e os agentes A.I.,
          garantindo que cada um faça seu trabalho com a maior excelência possível
          para entregar um resultado satisfatório. Ele é quem bota ordem na casa!`,
        },
        {
          name: "Igor",
          cargo: "Coordenador de Equipe",
          excerpt: `O designer gráfico e coordenador da galera.
          Especialista na criação das artes e imagens, 
          ele é responsável pela identidade visual de cada empresa. 
          É ele quem coordena a equipe para entregar um perfil com a cara do seu negócio.`,
        },
        {
          name: "Gabriel Serejo",
          cargo: "Programador",
          excerpt: `O cara é fera quando o assunto é programação e criação de sites.
          Ele fica responsável por cuidar do web design da empresa,
          criando uma página virtual interativa e de fácil acesso para os seus clientes.
          Ele é a chave para levar seu negócio ao Brasil inteiro.`,
        },
        {
          name: "Tetê",
          cargo: "Especialista em Comunicação",
          excerpt: `É a especialista em comunicação do grupo.
          Fica responsável por cuidar das mídias sociais,
          copyrights e criação de roteiros e reportagens de cada empresa.
          É ela quem chama a atenção do público para seu negócio mostrando
          tudo o que sua equipe tem para oferecer.`,
        },
        {
          name: "Gabriel Xavier",
          cargo: "Atendimento",
          excerpt: `É responsável em fazer a ponte entre os clientes e a agência, garantindo que cada um faça seu trabalho com a maior excelência possível para entregar um resultado satisfatório.`,
        },
        {
          name: "Pablo Costa",
          cargo: "Designer Gráfico",
          excerpt: `A criação está no ar com esse designer de primeira. Quando o assunto se trata de branding, paleta de cores e conteúdos criativos, é com esse cara que a gente conta!`,
        },
        {
          name: 'Flávio César',
          cargo: 'Produtor Audio-Visual',
          excerpt: `Produz sensacionais criando experiência com os produtos dos nossos clientes através de fotos e filmagens realizadas no studio da agência, nas empresas dos clientes onde for necessário mandar o click maneiro.`,
        }
      ].sort(() => 0.5 - Math.random()).slice(0, 4)
    }
  },
  mounted(){
      this.sorty = this.updateColabs()
  }
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