<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <swiper></swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
// import {getmultion} from 'network/home'
import Swiper from 'components/common/swiper/Swiper'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
  },
  data() {
    return {
      result: null
    }
  },
  // created(){
  //   getmultion()
  //   .then(res=>{
  //     console.log(res);
  //     this.result = res
  //   }, err=>{
  //     console.log(err);
  //   })
  // }
}
</script>
<style scoped>
  .home-nav{
    background-color: rgb(168, 73, 89);
    color: white;
  }
</style>
