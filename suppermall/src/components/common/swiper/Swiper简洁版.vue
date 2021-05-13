<template>
  <div>
    <div>
      <div v-for="(item, index) in banners" :key="index" v-show="index==mask" class="{active:'isActive'}">
        <a :href="item.linkurl">
          <img :src="item.imgurl" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Swiper',
  data() {
    return {
      banners:[
        {linkurl:'https://www.baidu.com', imgurl:require('assets/images/home/swiper/girl.jpg')},
        {linkurl:'https://www.douyu.com',imgurl:require('assets/images/home/swiper/hert.jpg')},
        {linkurl:'https://www.jd.com', imgurl:require('assets/images/home/swiper/leaf.jpg')},
        {linkurl:'https://www.github.com', imgurl:require('assets/images/home/swiper/love.jpg')},
        {linkurl:'https://www.bilibili.com', imgurl:require('assets/images/home/swiper/mingr.jpg')},
      ],
      mask:0,
      isshow: false
    }
  },
  created(){
    this.play()
  },
  methods: {
    // 翻页方向，++
    autoplay(){
      this.mask++
      if(this.mask==5){
        this.mask=0
      }
    },
    // 翻页时间
    play(){
     setInterval(this.autoplay, 5000);
    },
    // 图片加载完成后执行
    
  },
}
</script>
<style scoped>
  img{
    width: 100%;
    height: 180px;
  }
</style>