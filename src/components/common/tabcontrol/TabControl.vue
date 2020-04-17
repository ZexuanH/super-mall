<template>
  <div class="tab_control">
    <div v-for="(item,index) in ctrLists" class="control_item" @click="changeTab(index)" :class="{active:currentIndex==index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>

export default {
  name:"TabControl",
  data() {
    return {
      currentIndex:0
    };
  },
  props:{
    ctrLists:Array
  },
  created() {

  },
  mounted() {

  },
  methods: {
    changeTab(index){
      this.currentIndex=index
      this.$emit('tabChange',index)
    }
  }
};
</script>

<style scoped>
.tab_control{
  display: flex;
  text-align: center;
  background-color: #fff;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  z-index:9;
}
.tab_control .control_item{
  flex:1;
}

.control_item span{
  padding:5px;
}
.active {
  color:#d81e06;
}
.active span{
  border-bottom: 3px solid #d81e06;
}
</style>
