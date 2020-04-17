<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price | changePriceForm}}</span>
      <span class="collect-icon"></span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name:'goodsListItem',
  data() {
    return {

    };
  },
  filters:{
    changePriceForm(data){
      return '￥'+ data
    }
  },
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
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
.goods-list-item{
  position: relative;
  padding-bottom:37px;
  width:48%;
}

.goods-list-item img{
  width: 100%;
  border-radius: 5px;
}

.goods-info{
  position:absolute;
  left:0;
  right:0;
  bottom:8px;
  font-size:12px;
  overflow: hidden;
  text-align: center;
}
.goods-info .title{
  margin:0;
  overflow: hidden;
  white-space: nowrap; 
  text-overflow: ellipsis;
}
.goods-info .price{
  margin:2px 2px 0 0;
  display: inline-block;
  color:red;
}
.collect-icon{
  width: 14px;
  height: 14px;
  margin-left:2px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 17px;
  display: inline-block;
}

</style>
