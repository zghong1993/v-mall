<template>
  <div class='home'>
    <AppHeader :colorIsActive='colorIsActive' />
    <div class='scroll-wrap' @scroll='handleScroll'>
      <div class='swiper'>
        <mt-swipe :auto="4000" :show-indicators="false">
          <mt-swipe-item><img src="./images/banner1.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="./images/banner2.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="./images/banner3.jpg"></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class='home-list'>
        <figure class='item' v-for='item in homeList' :key='item.id'>
          <img :src="item.mainImage">
          <p>{{item.name}}</p>
          <p class='clear'><span class='price'>{{item.lowPrice | formatPrice | currency}}</span><span class='iconfont icon-gouwuche pull-right'></span></p>
          <p>{{item.shopName}}</p>
        </figure>
      </div>
    </div>
    <AppFooter/>
  </div>
</template>
<script src='./index.js'>


</script>
<style lang='less' scoped>
@import './index.less';

</style>
