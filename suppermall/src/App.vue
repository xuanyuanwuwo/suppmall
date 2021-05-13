<template>
  <div id="app">
    <keep-alive exclude="Detail">
        <router-view></router-view>
    </keep-alive>
    <mainbar></mainbar>
  </div>
</template>
<script>

import Mainbar from 'components/content/Mainbar.vue'
export default {
  name: 'App',
  components: {
    Mainbar
  }
}
</script>
<style scoped>
  @import 'assets/css/base.css'
</style>
