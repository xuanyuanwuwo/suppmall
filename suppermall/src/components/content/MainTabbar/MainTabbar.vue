<template>
  <div>
    <tabbar>
      <tab-bar-item v-for="(item,index) in datas" :key="index" :link='item.linkurl' activeColor='orangered'>
        <div slot="item-text">{{item.title}}</div>
      </tab-bar-item >
      <!-- <tab-bar-item link='/play' activeColor='orange'>
        <div slot="item-text">娱乐</div>
      </tab-bar-item>
      <tab-bar-item link='/find' activeColor='orange'>
        <div slot="item-text">发现</div>
      </tab-bar-item>
      <tab-bar-item link='/user' activeColor='orange'>
        <div slot="item-text">我的</div>
      </tab-bar-item> -->
    </tabbar>
  </div>
</template>
<script>

import Tabbar from 'components/common/tabbar/Tabbar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name:'MainTabbar',
  data() {
    return {
      datas:[
        {title:'首页', linkurl:'/home'},
        {title:'娱乐', linkurl:'/play'},
        {title:'发现', linkurl:'/find'},
        {title:'我的', linkurl:'/user'}
      ]
    }
  },
  components:{
    Tabbar,
    TabBarItem,
  }
}
</script>
<style scoped>

</style>