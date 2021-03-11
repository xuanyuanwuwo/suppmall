<template>
  <div id="app">
    <router-view></router-view>
    <!-- <main-tabbar></main-tabbar> -->
    <mainbar></mainbar>
  </div>
</template>
<script>
// import MainTabbar from 'components/content/MainTabbar/MainTabbar.vue'
import Mainbar from 'components/content/Mainbar.vue'
export default {
  name: 'App',
  components: {
    // MainTabbar,
    Mainbar
  }
}
</script>
<style scoped>
  @import 'assets/css/base.css'
</style>
