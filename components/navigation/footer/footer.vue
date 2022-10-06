<template>
  <v-footer class="dark pa-0 d-block">
    <v-divider></v-divider>
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="4">
          <div class="footer-logo-box">
            <logo-longa class="mb-6 footer-logo" />
            <div class="accent--text">
              Agencia Industrial {{new Date().getFullYear()}} <br />
              tel: <a href="tel:+55 62 8563-7830">+55 62 8563-7830</a><br />
              Todos os direitos reservados
            </div>
          </div>
        </v-col>
        <v-spacer />
        <v-col cols="12" md="7">
          <v-row justify="space-between" class="fill-width footer-menu-box">
            <v-col cols="auto" v-for="(categ, i) in footer" :key="i + '-foot'">
              <div class="mb-6">{{i}}</div>
              <ul class="footer-logo-box-ul">
                <li class="footer-menu-box-item" v-for="(subcat, y) in categ" :key="y">
                  <div>
                    <div class="inner">
                      <NuxtLink :to="subcat.link"> {{ subcat.nome }} </NuxtLink>
                    </div>
                  </div>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container class="my-5">
      <div class="footer-icon-box">
        <a class="footer-icon-content" :href="social.url" target="_blank" v-for="(social, i) in $store.state.social" :key="i">
          <v-icon color="primary" size="2rem">{{social.icon}}</v-icon>
        </a>
        <v-spacer />
        <div class="footer-icon-content" @click="$vuetify.goTo(0);">
          <v-icon color="primary" size="2rem">mdi-chevron-up</v-icon>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
import { footer } from "~/assets/data.js";
export default {
  components: { logoLonga: () => import("~/components/logoLonga.vue") },
  data: () => ({
    footer
  })
};
</script>

<style lang="scss">
.footer-logo-box {
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  .footer-logo {
    max-width: 250px;
  }
}
.footer-icon-box {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  a{
    text-decoration: none;
  }
  .footer-icon-content {
    padding: 0.5rem;
    border-radius: 5px;
    background: var(--v-dark-lighten1);
  }
}
.footer-menu-box {
  display: flex;
  justify-content: space-between;
  .footer-logo-box-ul {
    padding-left: 0;
    .footer-menu-box-item {
      list-style: none;
      margin-bottom: calc(0.5rem - 2px);
      display: flex;
      > &:last-child {
        margin-bottom: 0;
      }
      div {
        .inner {
          position: relative;
          padding-bottom: 0.5rem;
          &:hover {
            > a {
              color: var(--v-primary-color);
            }
          }
          &::after {
            content: "";
            border-bottom: solid 3px var(--v-primary-base);
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.25s;
          }

          &:hover {
            &::after {
              transform-origin: left;
              transform: scaleX(1);
            }
          }

          @keyframes underline {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
          a {
            color: var(--v-accent-base);
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>