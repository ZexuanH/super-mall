<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  data() {
    return {
      scroll:null
    };
  },
  props:{
    probeType:{
      type:Number,
      default(){
        return 0
      }
    },
    pullUpLoad:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  created() {

  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      //滚动检测类型 返回position
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //scrollTo 方法放回顶部  home组件通过ref调用scrollTo方法
    this.scroll.scrollTo(0, 0)
    //监听scroll事件，通过$emit自定义事件将position实时返回到home父组件里 
    this.scroll.on('scroll',(position)=>{
      this.$emit('scrollPos',position)
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('loadMore')
    })
    this.scroll.finishPullUp()
  },
  methods: {
    scrollTo(x,y,time=1000){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
};
</script>

<style scoped>

</style>
