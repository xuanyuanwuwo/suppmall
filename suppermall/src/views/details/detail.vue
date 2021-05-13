<template>
  <div class="details">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" :pullUpLoad="true" ref="scroll">
      <detail-swiper :banner = "banner" ref="deswiper"></detail-swiper>
      <detailbase-info :goods = 'goods' ></detailbase-info>
      <detail-shop :shop = shop></detail-shop>
      <detail-info :detail_info = 'detail_info' @imgupload = 'imageload'></detail-info>
      <detail-params :paramsInfo = 'paramsInfo'/>
      <deatil-rate :commetnInfo= "comment_info"></deatil-rate>
    </scroll>
  </div>
</template>
<script>
import Scroll from '../../components/common/scroll/Scroll.vue';

import DetailNavBar from './detailchild/detailNavBar.vue';
import DetailSwiper from './detailchild/DetailSwiper.vue';
import DetailbaseInfo from './detailchild/DetailbaseInfo.vue';
import DetailShop from './detailchild/DetailShop.vue';
import DetailInfo from './detailchild/DetailInfo.vue';
import DeatilRate from './detailchild/DeatilRate.vue';

import {getdetail, Goods, Shop, Params} from 'network/detail'
import DetailParams from './detailchild/DetailParams.vue';


export default {
  name: 'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailbaseInfo,
    DetailShop,
    Scroll,
    DetailInfo,
    DetailParams,
    DeatilRate,
  },
  data() {
    return {
      iid: null,
      banner:[],
      goods: {},
      shop: {},
      detail_info:{},
      paramsInfo:{},
      comment_info:{}
    }
  },
  created() {
    // 保存传入的id
    this.iid = this.$route.params.iid;
    // console.log(this.iid);
    // 请求详情页数据
    this.getdetails() 
  },
  // destroyed() {
  //   this.iid = null
  // },
  methods: {
    getdetails(){
      getdetail(this.iid).then(res=>{
        console.log(res.data);
        const result = res.data.result
        // 保存轮播图数据
        this.banner = result.itemInfo.topImages
        // 保存商品信息
        this.goods = new Goods(
          result.itemInfo,
          result.columns,
          result.shopInfo.services
        )
        // 保存店铺信息
        this.shop = new Shop(result.shopInfo)
        console.log(result.shopInfo);
        // 保存页面图片信息
        this. detail_info = result.detailInfo
        // 保存商品参数
        this.paramsInfo = new Params(
          result.itemParams.info,
          result.itemParams.rule
        )
        if(result.rate.cRate != 0 ){
          this.comment_info = result.rate.list[0]
        }
      })
    },
    imageload(){
      this.$refs.scroll.refresh()
    }
  },
  activated() {
    this.$refs.deswiper.startTimer()
  },
  deactivated() {
    this.$refs.deswiper.stopTimer()
  },
  
}
</script>
<style scoped>
  .details{
    height: 100vh;
    /* padding-bottom: 10px; */
    font-size: 12px;
  }
  .detail-nav{
    position: relative;
    z-index: 11;
    background-color: #ffffff;
  }
  .content{
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: calc(100% - 44px);
    
  }
</style>