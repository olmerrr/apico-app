<template>
  <section class="wrapp-topbar">
    <img src="@/assets/img/logofull.svg" alt="apiko" />
    <nav class="top-bar-nav">
      <router-link to="/sell">Sell</router-link>
      <router-link to="/">LogIn</router-link>
      <router-link to="/favorite" class="favorite">
        <img src="@/assets/img/heart-outline.svg" alt="favorite" />
      </router-link>
    </nav>
  </section>
</template>
<script>
export default {
  components: {},
};
</script>
<style lang="scss" scoped>
.wrapp-topbar {
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
}

.top-bar-nav {
  text-transform: uppercase;
  font-size: 14px;
  line-height: 31px;
  display: flex;
  list-style: none;

  a {
    text-decoration: none;
    color: #ffffff;
    background: #349a89;
    padding: 14px 46px;
    border-radius: 4px;
  }
  
  .router-link-exact-active,
  .favorite {
    color: #2B2B2B;
    background: transparent;
  }
}
</style>