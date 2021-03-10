<template>
  <div class="tab-bar-item" @click="itemclick">
    <!-- v-bind动态绑定style -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'TabBarItem',
  props: {
    link: String,
    activeColor:{
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      // 判断哪个是活跃的路由,实现动态绑定style      
      return this.$route.path.indexOf(this.link)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemclick(){
      // 路由跳转
      // console.log(this.$route.path)
      this.$router.replace(this.link)
    }
  },
}
</script>
<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    line-height: 49px;
  }
</style>