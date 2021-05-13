<template>
  <div>
    <div class="wrapper" ref="">
      <ul class="content">
        <button class="btn" @click="btnclick">点击</button>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'Play',
  components: {
  },
  data() {
    return {
    }
  },
  mounted(){
    console.log(document.querySelector('.wrapper'));
    const bs = new BetterScroll('.wrapper',{
      // scrollY: true,
      // click: true,  //决定是否可以触发点击事件,貌似和官网不一样，不需要true也可以了
      useTransition: false, //防止滑动时模糊
      probeType:3,
      // mouseWheel: true, 可以鼠标滚轮，但是滚动速度太慢
      // probe。侦测
      // 默认值是0，0 和 1都是不侦测实时位置
      // 2 在手指滑动的时候侦测，手指离开后的惯性滑动不侦测
      // 3只要是滑动，都侦测
      pullUpLoad: true, //当底部下拉距离超过阈值时触发，例如上拉加载更多
    })

    // better-scroll默认不可以监听滚动事件
    //实时记录滚动位置，上面需要配置probeType
    bs.on('scroll',position => {
      console.log(position); 
    })

    // 上拉加载触发
    bs.on('pullingUp',() => {
      console.log('加载更多');

      bs.finishPullUp() //可以多次触发加载更多，下一次拉倒底部能再次触发
    })
  },
  methods:{
    btnclick(){
      console.log('aaa');
    }
  }
}
</script>
<style scoped>
  .wrapper{
    height: 300px;
    background-color: palevioletred;
    overflow: hidden;
    /* 三个效果貌似一样 */
    /* overflow: auto; */
    /* overflow-y: scroll;  */
    /* overflow-y:auto; */
  }
</style>
