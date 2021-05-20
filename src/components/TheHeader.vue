<template>
  <header class="wrapp-header">
    <h1>TheHeader</h1>
    <p>some text here</p>
  </header>
</template>
<script>
export default {
  name: "the-header",
};
</script>
<style lang="scss" scoped>
.wrapp-header {
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  background: linear-gradient(180deg, #090810 0%, #171236 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  height: 166px;
}
</style>