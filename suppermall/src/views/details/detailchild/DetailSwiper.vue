<template>
  <div>
    <swiper ref="swiper" v-if="banner.length" class="detail-swiper">
      <swiper-item v-for="(item, index) in banner" :key="index" class="swiper-item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper';
export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner:{
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    startTimer(){
      if(this.$refs.swiper){
        this.$refs.swiper.startTimer()
        console.log('11');
      }
    },
    stopTimer(){
      this.$refs.swiper.stopTimer()
    }
  },
}
</script>
<style scoped>
  /* 此处类名不能用swiper,会报错
  因为swiper的封装中，有通过querySelect('.swiper')获取元素，进行操作
  所以一般最好不要通过上面的方式获取元素
   */
  .detail-swiper{
    height: 200px;
    overflow: hidden;
  }
  .swiper-item img{
    width: 100%;
  }
</style>