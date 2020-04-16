<template>
  <div id="home">
    <navbar class="home_nav">
      <div slot="center">购物街</div>
    </navbar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import {getHomeMultidata} from 'network/home.js'
import HomeSwiper from './childrenComps/HomeSwiper'
import RecommendView from './childrenComps/RecommendView'
export default {
  name:'Home',
  components:{
    Navbar,HomeSwiper,RecommendView
  },
  data() {
    return {
      banners:[],
      recommends:[]
    };
  },
  created() {
    getHomeMultidata().then(res=>{
      this.banners=res.data.data.banner.list
      this.recommends=res.data.data.recommend.list


    })
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style scoped>
.home_nav{
  background-color: var(--main-color);
  color:#fff;
}
</style>
