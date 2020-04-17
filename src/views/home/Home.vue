<template>
  <div id="home" class="wrapper">
    <navbar class="home_nav">
      <div slot="center">购物街</div>
    </navbar>
    <scroll class="content" ref="scroll" 
      :probe-type="3" 
      @scrollPos="scrollPos" 
      :pull-up-load="true" 
      @loadMore="loadMore"
      >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-sticky" :ctrLists="['流行','新款','精选']" @tabChange="tabChange" />
      <goods-list  :goods="getGoodsList" ></goods-list>
    </scroll>
    <back-to-top @click.native="toTheTop" v-show="isShowBackTop"></back-to-top>
    
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar' 
import TabControl from 'components/common/tabcontrol/TabControl'
import Scroll from 'components/common/scroll/Scroll'
import BackToTop from 'components/common/scrollTo/BackToTop'
import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import goodsList from 'components/content/goods/goodsList'
import HomeSwiper from './childrenComps/HomeSwiper'
import RecommendView from './childrenComps/RecommendView'
import FeatureView from './childrenComps/FeatureView'
export default {
  name:'Home',
  components:{
    Navbar,
    TabControl,
    Scroll,
    BackToTop,
    HomeSwiper,
    RecommendView,
    FeatureView,
    goodsList
  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      tabContent:'pop',
      isShowBackTop:false
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
   
  },
  computed:{
    getGoodsList(){
      return this.goods[this.tabContent].list
    }
  },
  methods: {
   
    //网络请求
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      this.banners=res.data.data.banner.list
      this.recommends=res.data.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+=1

        this.$refs.scroll.finishPullUp()
      })
    },
    //tabcontrol切换
    tabChange(index){
      switch (index){
       case 0 : 
        this.tabContent='pop';
        break;
       case 1 : 
        this.tabContent='new';
        break;
       case 2 : 
        this.tabContent='sell';
        break;
      }
        
      
      // if(index==0){
      //   this.tabCotent='pop'
      // }else if(index==1){
      //   this.tabCotent='new'
      // }else if(index==2){
      //   this.tabCotent='sell'
      // }
    },
     //to top
     toTheTop(){
      this.$refs.scroll.scrollTo(0, 0)
    },
    scrollPos(position){
      this.isShowBackTop= position.y < -1000
    },
    loadMore(){
      this.getHomeGoods(this.tabContent)
    }
    
    
  }
};
</script>

<style scoped>
  #home{
    height:100vh;
  }
.home_nav{
  background-color: var(--main-color);
  color:#fff;
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index: 9;
}
.tab-sticky{
  position: sticky;
  top:44px;
  z-index: 9;
}
/* .wrapper{
  position:absolute;
} */
.content{
  /* position:relative;
  top:44px;
  left:0;
  right:0;
  bottom:49px;
  overflow: hidden; */
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top:44px;
}

</style>
