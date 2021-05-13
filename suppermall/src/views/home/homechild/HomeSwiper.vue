<template>
  <div>
    <swiper ref="swiper" v-if="banner.length">
      <swiper-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgload">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banner: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      isshow: false
    }
  },
  methods: {
    imgload(){
      if(!this.isshow){
        this.$emit('imageload');
        this.isshow = true
      }
    },
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

</style>