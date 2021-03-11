<template>
  <div class = "tabbaritem" @click = "routclick">
    <div v-if="!activelink" class="item-img">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style = "activeStyle">
      <!-- 动态绑定style -->
      <slot name = "itembar"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabbarItem',
  props: {
    linkurl: String,
    itemColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    activelink(){
      return this.$route.path.indexOf(this.linkurl) !== -1  //如果不等于-1,则找到了最活跃的那个路由，返回true
    },
    activeStyle(){
      // 最活跃的路由，也就是被点击的，赋予颜色
      return this.activelink?{color: this.itemColor}:{}
    }
  },
  methods: {
    routclick(){
      this.$router.replace(this.linkurl)
    }
  }
}
</script>
<style scoped>
 .tabbaritem{
   flex: 1;
   text-align: center;
   /* line-height: 49px; */
   font-size: .8em;
 }
 img{
   width: 1.2em;
   vertical-align: bottom;
   margin-top: .5em;
   margin-bottom: .2em;
 }
</style>