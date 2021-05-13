<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recom-item">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageload">
        <p>{{item.title}}</p>
      </a>    
    </div>
  </div>
</template>
<script>
export default {
  name: 'recommendview',
  props: {
    recommend: {
      type: Array,
      default(){
        return []
      }
    },
  },
  data() {
    return {
      isshow: false
    }
  },
  methods: {
    imageload(){
      if(!this.isshow){
        this.$emit('imgload');
        this.isshow = true
      }
      
    }
  },
}
</script>
<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    border-bottom: 5px solid#eee;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .recom-item{
    flex: 1;
  }
  .recom-item img{
    width: 70px;
  }
</style>