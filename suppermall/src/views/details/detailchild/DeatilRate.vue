<template>
  <div v-if="Object.keys(commetnInfo).length !== 0">
    <div class="info_header">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="info_user">
      <img :src="commetnInfo.user.avatar" alt="">
      <span>{{commetnInfo.user.uname}}</span>
    </div>
    <div class="rate_list">
      <div class="info_content">{{commetnInfo.content}}</div>
      <div>
        <span >{{commetnInfo.created}}</span>
        <span>{{commetnInfo.style}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailRate',
  props: {
    commetnInfo:{}
  }
}
</script>
<style scoped>
  .info_header{
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
  }
  .info_user img{
    width: 50px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .info_content{
    line-height: 30px;
  }
  .rate_list{
    color: grey;
  }
</style>