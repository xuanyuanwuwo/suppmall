<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tabcontrol :title="['新款','流行','精选']"
                  @event-type = 'tabclick' 
                  ref="tabcontrol1" 
                  class="tabcontrol"
                  v-show="iscontrol">
    </tabcontrol>
    <scroll class = "tent" 
            ref = "scroll" 
            :probe-type = '3' 
            @scroll = 'contentScroll'
            :pull-up-load = 'true'  
            @pullingUp = 'loadMore'
            >
      <home-swiper :banner = "banners" ref ="hSwiper" @imageload = 'imageload'></home-swiper>
      <recommend-view :recommends ='recommend'></recommend-view>
      <fetureview></fetureview>
      <tabcontrol :title="['新款','流行','精选']"
                  @event-type = 'tabclick' 
                  ref="tabcontrol2">
      </tabcontrol>
      <goodslist :shoplist="showgoods"></goodslist>
    </scroll>
    <back-top @click.native="backclick" v-show="isshow"></back-top>
  </div>
</template>

<script>
// 公共组件 多个页面使用的组件
import NavBar from 'components/common/navbar/NavBar.vue'
import Tabcontrol from 'components/content/tabcontrol/Tabcontrol.vue'
import Goodslist from 'components/content/goods/goodslist.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backTop/backTop.vue'

// 子组件，只在本页面使用组件
// import Swiper from 'components/common/swiper/Swiper'
import RecommendView from './homechild/RecommendView.vue'
import Fetureview from './homechild/Fetureview.vue'
import HomeSwiper from './homechild/HomeSwiper.vue'

// 方法
import {getmultion, gethomegoods,RECOM,BANNER} from 'network/home'
import {debounce} from 'common/utils'

// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    NavBar,
    Tabcontrol,
    Goodslist,
    Scroll,
    BackTop,

    // Swiper,
    HomeSwiper,
    RecommendView,
    Fetureview,   
  },
  data() {
    return {
      banners: [],
      recommend:[],
      goods: {
        'pop': {page:0, list:[]},
        'new': {page:0, list:[]},
        'sell': {page:0, list:[]}
      },
      currentType:'pop',
      scroll: null,
      isshow: false,
      offsetTop: 0,
      iscontrol: false,
      saveY: 0
    }
  },
  created(){
    // 请求recommend相关数据
    this.getmultiondata()

    // 请求商品数据
    this.getgoods('pop')   //函数名最好和请求的数据的函数名不要一样
    this.getgoods('new')
    this.getgoods('sell')
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,200)
    // 图片数据加载完后执行 
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
    })
  },
  computed:{
    showgoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
    // 事件监听相关方法
    // 判断点击，决定的type
    tabclick(index) {
      // console.log(index);
      switch (index) {
        case 0: 
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      // 点击的同时改变另一个tabcontrol，让两个展示一致
      this.$refs.tabcontrol1.controlindex=index
      this.$refs.tabcontrol2.controlindex=index
    },
    imageload(){
      // 吸顶
      // 每个组件都有一个el属性,代表内部元素
      // 写在mounted中，很可能图片没加载完成，高度不固定，获取不到真实的top距离
      this.offsetTop = this.$refs.tabcontrol2.$el.offsetTop
      // console.log(this.offsetTop);
    },
    // 返回顶部
    backclick(){
      // 调用组件中里面的封装的返回顶部方法
      this.$refs.scroll.toTop(0, 0, 500)
    },
    // 监听滚动
    contentScroll(position){
      this.isshow = position.y < -1000 ? true : false   // 此处不适合return
      this.iscontrol = position.y < -this.offsetTop ? true : false
    },
    // 加载更多
    loadMore(){
      this.getgoods(this.currentType)
      //图片加载是异步加载，所以better-scroll开始认为的高度，和需要的高度有相差，会出现滚动卡顿，或无法滚动
      // this.$refs.scroll.refresh()  //则会每次加载完后重新计算所以属性
    }, 

    // --网络请求相关方法--
    getmultiondata(){
      getmultion().then(res=>{
      this.recommend = res.data.data[RECOM].list
      this.banners = res.data.data[BANNER].list
      // console.log(res.data);
      })
    },
    getgoods(type){
      let page = this.goods[type].page+1  // 每次下拉页数加1，接着请求下一页数据
      gethomegoods(type,page)   //根据参数，请求对应的数据
        .then(res=>{
          // 把请求到的数据保存
          this.goods[type].list.push(...res.data.data.list)
          //==for(let n of num1){num.push(n)},把一个数据添加到另一个数组中
          // 保存页数状态也得+1
          this.goods[type].page +=1
        })
    },
  },
  // 保留离开时的滚动条状态
  // 创建时
  activated() {   
    this.$refs.scroll.refresh()
    this.$refs.scroll.toTop(0,this.saveY)
    // this.$refs.scroll.refresh()
    // if(this.$refs.hSwiper){
    //   this.$refs.hSwiper.startTimer()
    // }
  },
  // 销毁时
  deactivated() {
    // this.$refs.hSwiper.stopTimer()
    this.saveY = this.$refs.scroll.getsaveY()
    // console.log(this.saveY);
    
  },
}
</script>
<style scoped>
  #home{
    /* padding-top: 44px; 如果用定位，则需要去掉padding-top */
    position: relative;
    height: 100vh;
  }
  .home-nav{
    background-color: rgb(168, 73, 89);
    color: white;
  }
  /* .tent{ */
    /* 设成局部滚动，需要高度 */
    /* height: calc(100% - 93px); 
    overflow: hidden; */
    /* margin-top: 44px; */
  /* } */
  /* 两种方法其一 */
  .tent{
    overflow: hidden;
    position: absolute;    /* 前提必须在元素处设置 height: 100vh; 否则会没有高度，overflow会出现白板 */
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tabcontrol{
    position: relative;
    z-index: 9;
  }
</style>
