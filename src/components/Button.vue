<template>
<button class="button-info">
  <slot>Button</slot>
</button>
</template>
<style lang="scss" scoped>
  .button-info {
    padding: 19px 29px 20px;   
   width: 100%;
    background: #349A89;
    border-radius: 4px;
    color:#ffffff;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.4px;
    text-align: center;
    cursor: pointer;
  }
</style>