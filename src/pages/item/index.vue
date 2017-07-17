<template>
  <div class='item'>
    <div class='scroll-con' ref='scrollCon'>
      <div class='scroll-wrap' ref='screen1' @touchstart='handleTouchStart(1,$event)' @touchmove='handleTouchMove(1,$event)' @touchend='handleTouchEnd(1,$event)'>
        <div ref='screen1Con'>
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
          <div class='item-info'>
            <p class='name'>{{item.name}}</p>
            <p class='price'>{{item.lowPrice | formatPrice | currency}}</p>
            <p class='old-price'>{{item.highPrice | formatPrice | currency}}</p>
            <p class='shop-info'> <span class='txt-ellipsis'><i class='iconfont icon-shop'></i>{{item.shopName}}</span> <span class='text-right'>已售{{item.saleQuantity}}{{item.extra.unit}}</span></p>
          </div>
          <div class='item-navline'>
            <span class='title'>已选</span><span class='con txt-ellipsis'>白色</span><span class='right-icon text-right'> <i class='iconfont icon-more'></i></span>
          </div>
          <div class='item-navline'>
            <span class='title'>评价</span><span class='con txt-ellipsis'>100条</span><span class='right-icon text-right'> <i class='iconfont icon-right'></i></span>
          </div>
          <p class='text-center drag-tip'>{{touch.bottomTip}}</p>
        </div>
      </div>
      <div class='scroll-wrap item-detial' ref='screen2' @touchstart='handleTouchStart(2,$event)' @touchmove='handleTouchMove(2,$event)' @touchend='handleTouchEnd(2,$event)'>
        <mt-header title="商品详情">
          <a @click="$router.go(-1)" slot="left">
            <mt-button icon="back">返回</mt-button>
          </a>
        </mt-header>
        <p class='text-center drag2-tip' v-if='touch.headerTip'>{{touch.headerTip}}</p>
        <div class='item-detail' ref='screen2Con' v-html="itemDetail">
        </div>
      </div>
    </div>
    <div class='bottom-opetate'>
      <div class='link'>
        <span class='text-center'>
          <i class='iconfont icon-cart'></i><br/>
          购物车
        </span>
      </div>
      <button class='add-cart'>加入购物车</button>
      <button class='buy-now'>立即购买</button>
    </div>
  </div>
</template>
<script src='./index.js'>


</script>
<style lang='less' scoped>
@import './index.less';

</style>
