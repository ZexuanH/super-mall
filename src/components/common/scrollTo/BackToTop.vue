<template>
  <div class="to-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>

export default {
  name:'BackToTop',
  data() {
    return {

    };
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
.to-top{
  position:fixed;
  right: 5px;
  bottom:80px;
}
.to-top img{
  width: 35px;
  height: 35px;
}
</style>
