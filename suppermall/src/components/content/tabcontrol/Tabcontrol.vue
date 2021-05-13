<template>
  <div class="feature">
    <div>
      <ul class="list">
        <li v-for="(item, index) in title" :key="index" class="listitem" @click="itemclick(index)">
          <span :class="{active:index === controlindex}">{{item}}</span>
        </li>
      </ul>
    </div>    
  </div>
</template>
<script>
export default {
  name: 'Tabcontrol',
  props: {
    title: {
      type: Array,
      default(){
        return []
      }
    },
  },
  data() {
    return {
      controlindex: 0
    }
  },
  methods: {
    itemclick(index){
      this.controlindex = index
      this.$emit('event-type', index);
    }
  }
}
</script>
<style scoped>
  .feature{
    background-color: #eee;
  }
  .list{
    display: flex;
  }
  .listitem{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .active{
    color: palevioletred;
  }
</style>