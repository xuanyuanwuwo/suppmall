<template>
  <div>
    <img :src="imgurl" alt="" class="recommend">
  </div>
</template>
<script>
export default {
  name: 'Fetureview',
  data() {
    return {
      imgurl: require('assets/images/home/recommend_bg.jpg')
    }
  },
}
</script>
<style scoped>
  .recommend{
    width: 100%;
  }
</style>