<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import  BScroll, { ObserveImage } from 'better-scroll'
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default(){
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      default(){
        return false
      }
    }
  },
  mounted(){
    // console.log(this.$refs.wrapper);
    this.scroll = new BScroll(this.$refs.wrapper,{
      scrollY: true,
      click: true,
      useTransition: false,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true ,    ///有图片时有时会刷新不出来，不能继续滑动，则需要此属性
      ObserveImage: true
    })
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position);
    })
    this.scroll.on('pullingUp', ()=>{
      // console.log('加载更多');
      this.$emit('pullingUp');
      this.scroll.finishPullUp()
    })
    // let bs= new BetterScroll(this.$refs.shop, {
    //   scrollY: true,
    //   click: true,  //决定是否可以触发点击事件
    //   useTransition: false, //防止滑动时模糊
    //   // probeType:3,
    //   // probe。侦测
    //   // 默认值是0，0 和 1都是不侦测实时位置
    //   // 2 在手指滑动的时候侦测，手指离开后的惯性滑动不侦测
    //   // 3只要是滑动，都侦测
    //   // pullUpLoad: true, //当底部下拉距离超过阈值时触发，例如上拉加载更多
    // })

    // better-scroll默认不可以监听滚动事件
    //实时记录滚动位置，上面需要配置probeType
    // bs.on('scroll',position => {
    //   // console.log(position); 
    // })

    // 上拉加载触发
    // bs.on('pullingUp',() => {
    //   bs.finishPullUp() //可以多次触发加载更多，下一次拉倒底部能再次触发
    // })
  },
  methods: {
    // 返回顶部封装
    toTop(x, y, time){ //此处可设置默认值，例如time=300
      this.scroll && this.scroll.scrollTo(x, y, time) 
    },
    // 图片加载完成后调用此方法，重新计算scroll属性
    refresh(){
      // console.log('---');
      this.scroll && this.scroll.refresh()
    },
    // 离开页面时调用此方法，保留离开时的滚动条状态
    getsaveY(){
      return this.scroll ? this.scroll.y: 0
    }
  },
}
</script>
<style scoped>

</style>