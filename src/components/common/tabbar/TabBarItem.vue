<template>
  <div class="tab-bar-item" @click="pageChange">
    <!-- slot最终会被替换掉 所以才要在外层添加一个div -->
    <div v-if="!isActive" >
      <slot name="tab_img"></slot>
    </div>
    <div v-else >
      <slot name="tab_img_active"></slot>
    </div>
    <div :style="activeColor">
      <slot name="tab_text"></slot>
    </div>

  </div>
</template>

<script>

export default {
  name:'TabBarItem',
  data() {
    return {

    };
  },
  props:{
    path:String,
    colorChange:{
      type:String,
      default:'#d81e06'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1
    },
    activeColor(){
      return this.isActive?{color:this.colorChange}:{}
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    pageChange(){
      this.$router.replace(this.path).catch(err => err)
    }
  }
};
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  height: 49px;
  font-size: 10px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
}
</style>
