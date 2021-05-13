<template>
  <div v-if="Object.keys(detail_info).length !== 0 ">
    <div class="desc">{{detail_info.desc}}</div>
    <div v-for="(item, index) in detail_info.detailImage" :key="index">
      <h4 class="title">{{item.key}}</h4>
      <div class="list">
        <p v-for="(itemimg, index) in item.list" :key="index">
          <img :src="itemimg" alt="" @load="imgload">
        </p>
      </div>
    </div> 
  </div>
</template>
<script>
export default {
  name: 'DetailInfo',
  props:{
    detail_info: {}
  },
  data() {
    return {
      count: 0,
      imagelength: 0
    }
  },
  watch: {
    detailinfo(){
      // 保存图片个数
      this.imagelength = this.detail_info.detailImage[0].list.length
    }
  },
  methods: {
    imgload(){
      // 最终全部加载后，count等于图片的个数。此时提交刷新
      if(++this.count === this.imagelength){
        this.$emit('imgupload')
      }   
    },
  },
}
</script>
<style scoped>
  .desc{
    padding: 10px 3px;
  }
  .title{
    padding: 10px 0;
    text-align: center;
  }
  .list p{
    /* height: 300px; */
    /* overflow: hidden; */
    margin-top: 2px;
  }
  .list p img{
    width: 100%;
  }

</style>