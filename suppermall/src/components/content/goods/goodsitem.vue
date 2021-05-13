<template>
  <div class="goods-info" @click="toDetail">
      <img :src="shopitem.show.img" alt="" @load="imgload">
      <div>
        <p class="title">{{shopitem.title}}</p>
        <p>
          <span class="price">{{shopitem.price}}</span> <span class="collect">{{shopitem.cfav}}</span>
        </p>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Goodsitem',
  props: {
    shopitem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      iid:null
    }
  },
  methods: {
    imgload(){
      // 事件总线，在main.js中创建了一个vue实例方法
      this.$bus.$emit('itemImageLoad')
    },
    toDetail(){
      this.iid = this.shopitem.iid
      this.$router.push('/detail/'+this.iid)
      // this.iid = null
      console.log(this.iid)
    }
  },
}
</script>
<style scoped>
  .goods-info{
    font-size: 14px;
    text-align: center;
    
    padding-bottom: 10px;
    width: 48%;
  }
  .goods-info img{
    width: 100%;
    border-radius: 5px;
  }
  .title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 5px 0;
  }
  .price{
    color: palevioletred;
    margin-right: 10px;
  }
  .collect{
    position: relative;
    margin-left: 10px;
  }
  .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    width: 14px;
    height: 14px;
    background: url('~assets/images/common/collect.svg') 0 0/14px 14px;
  }
</style>