<template>
  <div id="app">
    <main-tabbar></main-tabbar>
  </div>
</template>
<script>
import MainTabbar from 'components/content/MainTabbar/MainTabbar.vue'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>
<style scoped>
  @import 'assets/css/base.css'
</style>