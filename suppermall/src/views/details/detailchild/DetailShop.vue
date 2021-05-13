<template>
  <div v-if="Object.keys(shop).length !== 0" class="shop">
    <div class="toplogo">
      <img :src="shop.logo" alt="" class="imglogo"><span>{{shop.name}}</span>
    </div>
    <div class="store">
      <div class="shoplist">
        <div>
          <p>{{cSell}}</p>
          <span class="shopcs">总销量</span>
        </div>
        <div>
          <p>{{shop.cGoods}}</p>
          <span class="shopcs">全部宝贝</span>
        </div>
      </div>
      <div class="shop-score">
        <p v-for="(item, index) in shop.score" :key="index">
          <span>{{item.name}}</span>
          <span class="score" :class="{isscore:item.isBetter}">{{item.score}}</span>
          <span class="better" :class="{isbetter:item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailShop',
  props:{
    shop: {
      type: Object,
      default(){
        return {}
      },
    }
  },
  data() {
    return {
      score:null
    }
  },
  computed: {
    cSell() {
    //  if (this.shop.cSells>10000) {
    //    return (this.shop.cSells/10000).toExponential(1)+'万'
    //  }else{
    //    return this.shop.cSells
    //  }
     return this.shop.cSells>10000 ? (this.shop.cSells/10000).toFixed(1)+'万' : this.shop.cSells
    }
  },
  filters:{
    contfilter(){
      return this.shop.cSells>10000 ? (this.shop.cSells/10000).toFixed(1)+'万' : this.shop.cSells
    }
  }
}
</script>
<style scoped>
  .shop{
    padding: 0 6px;
  }
  .toplogo{ 
    margin-top: 30px;
    line-height: 16px;
    height: 16px;
    /* overflow: hidden; */
  }
  .imglogo{
    width: 50px;
    vertical-align: middle;
    margin-right: 20px;
  }
  .store{
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
  }
  .store>div{
    width: 50%;
    align-items: center;
  }
  .shoplist{
    display: flex;
    /* justify-content: space-around; */
    text-align: center;
    font-size: 14px;
  }
  .shoplist>div{
    margin-left: 12px;
  }
  .shopcs{
    font-size: 12px;
    color: grey;
  }
  .shop-score{
    font-size: 13px;
  }
  .shop-score p{
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }
  .score{
    color:green
  }
  .better{
    background-color: green;
    color: #eee;
  }
  .isscore{
    color: red;
  }
  .isbetter{
    background-color: red;
  }
</style>