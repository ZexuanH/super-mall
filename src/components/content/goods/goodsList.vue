<template>
  <div class="goods-list">
    <goodsListItem v-for="item in goods" :goods-item="item" ></goodsListItem>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem'
export default {
  name:'goodsList',
  data() {
    return {

    };
  },
  components:{
    goodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
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
.goods-list{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around
}
</style>
