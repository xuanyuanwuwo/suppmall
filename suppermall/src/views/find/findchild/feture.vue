<template>
  <div class="feture">
    <img :src = "imgurl" alt="">
  </div>
</template>
<script>
export default {
  name: 'Feature',
  data() {
    return {
      imgurl: require('assets/images/home/recommend_bg.jpg')
    }
  },
}
</script>
<style scoped>
  .feture{
    border-bottom: 2px solid #eee;
  }
  .feture img{
    width: 100%;
  }
</style>