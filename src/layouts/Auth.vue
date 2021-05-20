<template>
  <section>
    <top-bar></top-bar>
    <router-view />
  </section>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
 export default {
    components: {
       TopBar
    }
 }
</script>
<style lang="scss" scoped>
</style>