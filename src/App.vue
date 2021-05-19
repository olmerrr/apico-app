<template>
  <v-app>


    <v-main>
      <component :is="layout">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>

<script>
import Auth from '@/layouts/Auth.vue';
import Main from '@/layouts/Main.vue';

export default {
  name: "App",

  data: () => ({}),
  components: {
    Auth,
    Main
  },
  computed: {
    layout() {
      return (this.$route.meta.layout) || 'main';
    },
  },
};
</script>
