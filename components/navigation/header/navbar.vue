<template>
  <div class="nav" @mouseleave="menuPlanos = false" v-scroll="onScroll">
    <v-app-bar
      class="dark elevation-0"
      height="88px"
      max-height="88px"
      style="z-index: 90"
    >
      <v-container class="py-0 fill-height fill-width">
        <div
          class="d-flex align-center navigation-bar"
          style="width: 100%; height: 100%; gap: 2rem"
        >
          <logo style="max-width: auto; height: 50px" />


          <v-spacer></v-spacer>
          <Nuxt-Link v-ripple to="/">Home</Nuxt-Link>
          <a @mouseover="menuPlanos = true" href="#">Planos <v-icon style="color: inherit;">mdi mdi-chevron-down</v-icon></a>
          <Nuxt-Link
            v-for="(rota, i) in rotas"
            :key="i"
            v-ripple
            :to="rota.to"
            >{{ rota.text }}</Nuxt-Link
          >
          <v-spacer></v-spacer>
          <client-only>
            <div v-if="!$auth.loggedIn" class="d-lg-block d-none">
              <v-btn text to="/usuario" nuxt class="mr-3 small"
                ><v-icon class="mr-3" color="primary"
                  >mdi mdi-account-outline</v-icon
                ><span>Entrar</span></v-btn
              >
              <v-hover v-slot="{ hover }">
                <v-btn
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
          <v-btn @click="$store.commit('setMenu', !$store.state.menu)" class="d-lg-none d-block" fab text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                class="burguer"
                v-if="!$store.state.menu"
                d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
              />
              <path
                class="burguer"
                v-else
                d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"
              />
            </svg>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
    <!--  @wheel.prevent @touchmove.prevent @scroll.prevent -->
    <div class="menu" v-if="$store.state.menu">
      <v-divider></v-divider>
      <v-container>
        <div class="mb-3">Planos:</div>
        <div class="planos">
          <Nuxt-Link v-for="(plano, i) in planos" :key="i" :to="plano.to">
            <div
              x-large
              class="mb-4 btn rounded-lg justify-start d-flex"
              v-ripple
            >
              <div class="brand">
                <v-img
                  height="40px"
                  width="40px"
                  max-width="30px"
                  contain
                  :src="plano.logo"
                />
                <div class="subtitle-1">{{ plano.text }}</div>
              </div>
              <v-spacer></v-spacer>
              <div class="content text-wrap">{{ plano.content }}</div>
            </div>
          </Nuxt-Link>
        </div>
        <div class="rotas">
          <Nuxt-Link v-ripple to="/">Home</Nuxt-Link>
          <Nuxt-Link
            v-for="(rota, i) in rotas"
            :key="i"
            v-ripple
            :to="rota.to"
            >{{ rota.text }}</Nuxt-Link
          >
        </div>
        <div class="btns">
          <client-only>
            <div v-if="!$auth.loggedIn">
              <v-btn text x-large to="/usuario" nuxt class="mr-3 small"
                ><v-icon class="mr-3" color="primary"
                  >mdi mdi-account-outline</v-icon
                ><span>Entrar</span></v-btn
              >
              <v-hover v-slot="{ hover }">
                <v-btn
                  x-large
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
    </div>
    <v-divider></v-divider>
    <div class="planos-desktop" v-if="menuPlanos">
      <v-container>
      <ul>
        <li v-ripple v-for="(plano, i) in planos" :key="i">
          <Nuxt-Link :to="plano.to">
            <div class="planos-container">
              <div class="heading">
                <v-img height="40px" width="40px" max-width="30px" contain
                  :src="plano.logo"
                />
                <div class="title">
                  {{plano.text}}
                </div>
              </div>
              <div class="planos-desktop-support">
                {{ plano.content }}
              </div>
            </div>
          </Nuxt-Link>
        </li>
      </ul>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      if (this.$store.state.menu){
        this.$vuetify.goTo(0, { duration: 0 });
      }
    }
  },
  data: () => ({
    menuPlanos: false,
    planos: [
      {
        text: "Starter",
        logo: "/branding/starter.svg",
        content: "Um bom plano para começar.",
        to: "/planos/starter"
      },
      {
        text: "Business",
        logo: "/branding/business.svg",
        content: "O plano para alavancar sua empresa.",
        to: "/planos/business"
      },
      {
        text: "Enterprise",
        logo: "/branding/enterprise.svg",
        content: "Nosso plano flexível para grandes empresas.",
        to: "/planos/enterprise"
      },
    ],
    rotas: [
      {
        text: "Blog",
        to: "/blog",
      },
      {
        text: "A Agência",
        to: "/quem-somos",
      },
    ],
  }),
  watch: {
    $route(r){
      this.$store.commit("setMenu", false)
    },
    "$store.state.menu": function(){
      if (this.$store.state.menu) {
        this.$vuetify.goTo(0);
        document.body.classList.add("scroll-lock");
        this.$store.commit("setMenu", true);
      } else {
        document.body.classList.remove("scroll-lock");
        this.$store.commit("setMenu", false);
      }
    },
  },
};
</script>

<style lang="scss">
.burguer {
  fill: var(--v-primary-base);
}
.menu {
  width: 100%;
  height: calc(100vh - 89px);
  overflow-y: auto;
}
.scroll-lock {
  overflow: hidden !important;
  &::-webkit-scrollbar {
    display: none;
  }
}
.nav {
  .planos {
    max-width: 500px;
    margin-bottom: 3rem;
    a {
      color: inherit;
      text-decoration: inherit;
    }
    .btn {
      background-color: #191919;
      text-overflow: ellipsis;
      padding: 1.5rem 2rem 1.5rem 2rem !important;
      .brand {
        width: calc(50% - 2rem);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .content {
        width: calc(50% - 2rem);
        font-size: 0.7rem;
        align-items: center;
        display: flex;
        color: var(--v-light-base);
        text-align: left;
        justify-content: flex-end;
      }
    }
  }
  .rotas {
    max-width: 500px;
    margin-bottom: 3rem;
    a {
      width: 100%;
      padding: 1rem;
      background-color: #191919;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      display: block;
      color: var(--v-light-base);
      text-decoration: none;
      transition: all 0.3s ease;
      border-left-color: var(--v-primary-base);
      &:hover {
        color: var(--v-dark-base);
        border-left-width: 3px;
        border-left-style: solid !important;
        border-radius: 0;
        background: linear-gradient(
          to right,
          var(--v-primary-base) + 00,
          #00000000
        );
      }
      &.nuxt-link-exact-active {
        color: var(--v-primary-base);
        border-left-width: 3px;
        border-left-style: solid !important;
        border-radius: 0;
        background: linear-gradient(to right, #000000b3, #00000000);
      }
    }
  }
  .navigation-bar {
    a:not(.v-btn) {
      color: #737380;
      text-decoration: none;
      height: 100%;
      padding: 30px 0;
      display: none;
      @include bp("lg"){
        display: block;
      }
      &:hover {
        color: var(--v-primary-base);
        border-bottom: var(--v-primary-base) solid 3px;
      }
    }
  }
  .planos-desktop {
    position: absolute;
    top: 89px;
    left: 0;
    right: 0;
    z-index: 6;
    background-color: #191919b5;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    ul{
      display: flex;
      justify-content: center;
      gap: 2rem;
      list-style: none inside none;
      padding-left: 0;
      li{
        transition: all 0.3s ease;
        border: var(--v-dark-base) solid .1rem;
        &:hover{
          border: var(--v-primary-base) solid .1rem;
          transform: translate3d(0, -2px, 0);
        }
        a{
          color: #737380;
          text-decoration: none;
          height: 100%;
          width: 100%;
          .planos-container{
            padding: 1.5rem;
            height: 100%;
          }
        }

        max-width: 15rem;
        background: var(--v-dark-base);
        border-radius: 1rem;
        .heading{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
      }
    }
  }
}
</style>