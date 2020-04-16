<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div> 
  </div>
</template>

<script>

export default {
  name:'RcommendView',
  data() {
    return {

    };
  },
  props:{
    recommends:{
      type:Array,
      default(){
        return[]
      }
    }
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
.recommend{
  display: flex;
  text-align: center;
  width: 100%;
  padding:10px 0 30px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex:1;
  font-size: 12px;
  color:black;
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom:3px;
}

</style>
