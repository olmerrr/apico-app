<template>
  <section class="app-wrapp">
    <component :is="layout">
      <router-view />
    </component>
  </section>
</template>

<script>
import Auth from "@/layouts/Auth.vue";
import Default from "@/layouts/Default.vue";
import TopBar from "@/components/TopBar.vue";
export default {
  name: "App",

  data: () => ({}),
  components: {
    TopBar,
    Auth,
    Default,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "default";
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
body {
  color: #2b2b2b;
  background: #f2f2f2;
  font-family: "Roboto", sans-serif;
}

.app-wrapp {
  max-width: 1184px;
  padding: 0 8px;
  margin: 0 auto;
  height: 100vh;
}
</style>