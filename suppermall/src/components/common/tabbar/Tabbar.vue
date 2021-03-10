<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name:'tabbar',
}
</script>
<style scoped>
  .tabbar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, .3);
  }
</style>