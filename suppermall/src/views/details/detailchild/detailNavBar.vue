<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="~assets/images/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in title" :key="index" class="title-item" 
          @click="titleclick(index)" :class="{active: index === currentindex}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue';

export default {
  name: 'DetailNavBar',
  components:{
    NavBar,
  },
  data() {
    return {
      title: ['商品','参数','评论','推荐'],
      currentindex: 0
    }
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    titleclick(index){
      this.currentindex = index
    }
  },

}
</script>
<style scoped>
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
    font-size: 14px;
  }
  .back img{
    vertical-align: middle;
  }
  .active{
    color: palevioletred;
  }
</style>