<template>
  <div id="find">
    <nav-bar class="navbar"><div slot="center">购物街</div></nav-bar>
    <tabcontrol :title = "['流行','新款','精品']" 
                @event-type='tabcontrol'
                ref="tabcontrol1"
                class="tab-control"
                v-show="iscontrol">
    </tabcontrol>
    <scroll :pullUpLoad = 'true'
            @pullingUp = 'loadMore'
            @scroll="scrollposition"
            :probeType = '3'
            class="content"
            ref="scroll">
      <swiper></swiper>
      <recommendview :recommend="recommend" @imgload = 'imgload'></recommendview>
      <feture></feture>
      <tabcontrol :title = "['流行','新款','精品']" 
                  @event-type='tabcontrol'
                  ref="tabcontrol2">
      </tabcontrol>
      <goodslist :shoplist = "showgoods"></goodslist>
    </scroll>
    <back-top v-show="isshow" @click.native="backTop"></back-top>
  </div>
</template>
<script>
// 公共组件，多页面使用
import NavBar from 'components/common/navbar/NavBar.vue'
import Swiper from 'components/common/swiper/Swiper.vue'
import Scroll from 'components/common/scroll/Scroll.vue'

import Tabcontrol from '../../components/content/tabcontrol/Tabcontrol.vue'
import Goodslist from 'components/content/goods/goodslist.vue'
import BackTop from '../../components/content/backTop/backTop.vue'
// 内部组件
import recommendview from './findchild/recommendview.vue'
import Feture from './findchild/feture.vue'
// 方法
import {getmultion,gethomegoods} from 'network/home'
import {debounce} from 'common/utils'
export default {
  name: 'Find',
  components: {
    NavBar,
    recommendview,
    Swiper,
    Feture,
    Tabcontrol,
    Goodslist,
    Scroll,
    BackTop,
  },
  data() {
    return {
      recommend:[],
      goods:{
        'pop': {page:0, list:[]},
        'new': {page:0, list:[]},
        'sell': {page:0, list:[]}
      },
      currentType: 'pop',
      isshow: false,
      offsetTop: 0,
      iscontrol: false
    }
  },
  created(){
    this.getmultion()

    // 三列商品
    this.getgoods('pop')
    this.getgoods('new')
    this.getgoods('sell')
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
    })
  },
  // destroyed() {
  //   // 删除事件线
  //   this.$bus.$off()
  // },
  computed:{
    // 模板上不要写太长的逻辑，需要传递的数据经过处理再用
    showgoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
    //---事件监听相关方法----
    tabcontrol(index){
      switch(index){
        case 0:
          this.currentType = 'pop';
          break
        case 1:
          this.currentType = 'new';
          break
        case 2:
          this.currentType = 'sell';
          break
      }
      this.$refs.tabcontrol1.controlindex = index
      this.$refs.tabcontrol2.controlindex = index
    },
    imgload(){
      this.offsetTop = this.$refs.tabcontrol2.$el.offsetTop
      console.log(this.offsetTop);
    },
    // 加载更多
    loadMore(){
      this.getgoods(this.currentType)
    },
    // 监听滚动事件
    scrollposition(position){
      this.isshow = position.y < -1500 ? true:false
      this.iscontrol = position.y < -(this.offsetTop) ? true:false
    },
    // 返回顶部
    backTop(){
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      // 调用scoll封装的返回顶部方法
      this.$refs.scroll.toTop(0, 0, 500)
    },
    // ----网络请求相关方法----
    getmultion(){
      getmultion().then( res=>{
        this.recommend = res.data.data.recommend.list
      })
    },
    getgoods(type){
      let page = this.goods[type].page+1
      gethomegoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page +=1
      })
    }
  },
  
}

</script>
<style scoped>
  #find{
    position: relative;
    height: 100vh;
  }
  .navbar{
    background-color: palevioletred;
    color: #eee;
  }
  .content{
    /* height: calc(100% - 93px); */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control{
    position: relative;
    z-index: 10;
  }
</style>