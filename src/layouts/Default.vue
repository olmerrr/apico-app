<template>
  <section>
    <the-header></the-header>
    <router-view></router-view>
  </section>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';
export default {
  components: {
    TheHeader
  }
}
</script>