<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" colorChange="#d81e06">
          <img slot="tab_img" src="~assets/img/tabbar/home.svg" alt="">
          <img slot="tab_img_active" src="~assets/img/tabbar/home_active.svg" alt="">
          <div slot="tab_text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" colorChange="#d81e06">
          <img slot="tab_img" src="~assets/img/tabbar/classify.svg" alt="">
          <img slot="tab_img_active" src="~assets/img/tabbar/classify_active.svg" alt="">
          <div slot="tab_text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" colorChange="#d81e06">
          <img slot="tab_img" src="~assets/img/tabbar/car.svg" alt="">
          <img slot="tab_img_active" src="~assets/img/tabbar/car_active.svg" alt="">
          <div slot="tab_text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" colorChange="#d81e06">
          <img slot="tab_img" src="~assets/img/tabbar/mine.svg" alt="">
          <img slot="tab_img_active" src="~assets/img/tabbar/mine_active.svg" alt="">
          <div slot="tab_text">我的</div>
      </tab-bar-item>
    </tab-bar> 
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name:'MainTabBar',
  data() {
    return {

    };
  },
  components:{
    TabBar,TabBarItem
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
};
</script>
 
<style scoped>

</style>
