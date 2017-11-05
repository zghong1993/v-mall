<template>
  <div class='home' @scroll='handleScroll'>
    <AppHeader :colorIsActive='colorIsActive' />
    <div class='swiper' :style="{height:bannerHeight}">
      <mt-swipe :auto="4000" :show-indicators="false">
        <mt-swipe-item><img src="../../assets/images/banner1.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/banner2.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/banner3.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class='home-list'>
      <router-link tag='div' class='item' v-for='(item,index) in homeList' :key='item.id' :class='{last: (index+1) % 3 === 0}' :to="`/item/${item.id}`">
        <img :src="item.mainImage" />
        <p class='item-name'>{{item.name}}</p>
        <p><span class='price'>{{item.lowPrice | formatPrice | currency}}</span></p>
      </router-link>
    </div>
    <AppFooter/>
    <Search/>
  </div>
</template>
<script src='./index.js'></script>
<style lang='less' src='./index.less' scoped />
