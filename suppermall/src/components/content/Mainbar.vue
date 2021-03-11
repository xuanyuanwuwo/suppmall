<template>
  <div>
    <tabbar>
      <tabbar-item v-for="(item, index) in tabs" :key="index" :linkurl='item.linkurl' :itemColor='item.itemColor'>
        <span slot="itembar">{{item.title}}</span>
        <img slot="item-icon" :src='item.imgurl1' alt="" >
        <img slot="item-icon-active" :src="item.imgurl2" alt="" >
      </tabbar-item>
    </tabbar> 
  </div>
</template>
<script>
import Tabbar from '../common/tabbar2/Tabbar'
import TabbarItem from '../common/tabbar2/TabbarItem'
export default {
  name: 'Mainbar',
  data() {
    return {
      tabs: [
        {title:'首页', linkurl:'/home', imgurl1:require('assets/images/tabbar/home.svg'), imgurl2:require('assets/images/tabbar/home_active.svg'), itemColor:'orangered'},
        {title:'娱乐', linkurl:'/play', imgurl1:require('assets/images/tabbar/cart.svg'), imgurl2:require('assets/images/tabbar/cart_active.svg'), itemColor:'orangered'},
        {title:'发现', linkurl:'/find', imgurl1:require('assets/images/tabbar/category.svg'), imgurl2:require('assets/images/tabbar/category_active.svg'), itemColor:'orangered'},
        {title:'我的', linkurl:'/user', imgurl1:require('assets/images/tabbar/profile.svg'), imgurl2:require('assets/images/tabbar/profile_active.svg'), itemColor:'orangered'},
      ]
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
}
</script>
<style scoped>
</style>