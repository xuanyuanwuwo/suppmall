<template>
  <div class="goods" v-if="Object.keys(goods).length !== 0">
    <p class="title">{{goods.tile}}</p>
    <p class="goodsPrices">
      <span :style="{color:goods.descColor}" class="price">{{goods.price}}</span>
      <span class="oldprice">{{goods.oldprice}}</span>
      <span :style="{background:goods.descColor}" 
            class="desc" 
            v-if="goods.desc">
            {{goods.desc}}
      </span>
    </p>
    <p class="sales" v-if="goods.columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </p>
    <div class="sales">
      <p v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailbaseInfo',
  props: {
    goods: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style scoped>
  .goods{
    padding: 0 6px;
    font-size: 12px;
  }
  .goodsPrices{
    margin-top: 8px;
  }
  .goodsPrices span{
    margin-right: 3px;
  }
  .title{
    padding-top: 5px;
    font-size: 16px;
  }
  .price{
    font-size: 18px;
    font-weight: bold;
  }
  .oldprice{
    font-size: 12px;
  }
  .sales{
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    margin-top: 20px;
  }
  .desc{
    font-size: 12px;
    border-radius: 9px;
    color: #eee;
    padding: 3px;
    text-align: center;
  }
  .sales img{
    height: 12px;
  }
</style>