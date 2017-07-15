<template>
  <div class='home'>
    <AppHeader :colorIsActive='colorIsActive' />
    <div class='scroll-wrap' @scroll='handleScroll'>
      <div class='swiper' :style="{height:bannerHeight}">
        <mt-swipe :auto="4000" :show-indicators="false">
          <mt-swipe-item><img src="./images/banner1.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="./images/banner2.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="./images/banner3.jpg"></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class='home-list'>
        <router-link tag='div' class='item' v-for='(item,index) in homeList' :key='item.id' :class='{last: (index+1) % 3 === 0}' :to="'/item/' + item.id">
          <img :src="item.mainImage" />
          <p class='txt-ellipsis'>{{item.name}}</p>
          <p class='clear'><span class='price'>{{item.lowPrice | formatPrice | currency}}</span><span class='iconfont icon-cart pull-right'></span></p>
          <p class='txt-ellipsis'>{{item.shopName}}</p>
        </router-link>
      </div>
    </div>
    <AppFooter/>
    <Search/>
  </div>
</template>
<script src='./index.js'>


</script>
<style lang='less' scoped>
@import './index.less';

</style>
