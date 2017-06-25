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
      <div style='height:15000px;'></div>
     aa
    </div>

    <AppFooter/>
  </div>
</template>

<script src='./index.js'>

</script>

<style lang='less' scoped>
  @import './index.less';
</style>
