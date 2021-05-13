<template>
  <div>
    <div class="list">
      <goods-item v-for="(item, index) in shoplist" :key="index" :shopitem = 'item' class="item"></goods-item>
      <!-- {{shoplist}} -->
    </div>
  </div>
</template>
<script>
import GoodsItem from './goodsitem.vue'

export default {
  name: 'Goodslist',
  components: { 
    GoodsItem ,
  },
  props: {
    shoplist: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 49px;
  }
</style>