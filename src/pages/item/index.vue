<template>
  <div class='item'>
    <div class='scroll-con' ref='scrollCon'>
      <div class='scroll-wrap' ref='screen1' @touchstart='handleTouchStart(1,$event)' @touchmove='handleTouchMove(1,$event)' @touchend='handleTouchEnd(1,$event)'>
        <div class='item-info' ref='screen1Con'>
          <mt-header title="商品详情">
            <a @click="$router.go(-1)" slot="left">
              <mt-button icon="back">返回</mt-button>
            </a>
          </mt-header>
          <div class='swiper' :style="{height:screenWidth}">
            <mt-swipe :auto="0" :show-indicators="false">
              <mt-swipe-item v-for='(item,index) in swiperImgList' :key='index'><img :src="item.url"></mt-swipe-item>
            </mt-swipe>
          </div>
          <p>{{touch.bottomTip}}</p>
        </div>
      </div>
      <div class='scroll-wrap item-detial' ref='screen2' @touchstart='handleTouchStart(2,$event)' @touchend='handleTouchEnd(2,$event)'>
        <mt-header title="商品详情">
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
        </mt-header>
        <div class='item-detail' ref='screen2Con' v-html="itemDetail">
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'>


</script>
<style lang='less' scoped>
@import './index.less';

</style>
