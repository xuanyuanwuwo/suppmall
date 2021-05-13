<template>
  <div v-if="Object.keys(paramsInfo).length !== 0">
    <table class="table" >
      <tr v-for="(items, index) in paramsInfo.size" :key="index" class="tr">
        <td v-for="(item, index) in items" :key="index">{{item}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(item, index) in paramsInfo.infos" :key="index" class="tr">
        <td class="left">{{item.key}}</td>
        <td>{{item.value}}</td>
      <tr/>
    </table>
  </div>
</template>
<script>
export default {
  name: 'DetailParams',
  props:{
    paramsInfo:{}
  }
}
</script>
<style scoped>
  table{
    width: 100%;
    font-size: 12px;
    color: gray;
  }
  .tr{
    height: 20px;
  }
  .left{
    width: 50px;
  }
</style>