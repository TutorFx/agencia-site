<template>
  <div>
    <div class="py-16">
      <v-container>
        <v-tabs
          v-model="tab"
          height="70"
          slider-color="primary"
          color="third"
          background-color="transparent"
          class="ml-n12 ml-sm-0"
        >
          <v-tab color="red" v-for="(item, i) in items" :key="i"
            ><v-img
              :src="item.logo"
              aspect-ratio="1/1"
              contain
              width="30px"
              height="30px"
              class="mr-3"
            ></v-img
            >{{ item.text }}</v-tab
          >
        </v-tabs>
        <v-divider></v-divider>
        <v-tabs-items v-model="tab">
          <v-tab-item class="black" v-for="(item, i) in items" :key="i">
            <component :is="item.componente"></component>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Starter",
        logo: "/branding/starter.svg",
        componente: require("./planos/starter.vue").default,
      },
      {
        text: "Business",
        logo: "/branding/business.svg",
        componente: require("./planos/business.vue").default,
      },
      {
        text: "Enterprise",
        logo: "/branding/enterprise.svg",
        componente: require("./planos/enterprise.vue").default,
      },
    ],
    tab: 0,
  }),
};
</script>

<style>
</style>