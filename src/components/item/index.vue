<template>
  <div class='item'>
    <div class='scroll-con' ref='scrollCon'>
      <div class='scroll-wrap' ref='screen1' @touchstart='handleTouchStart(1,$event)' @touchmove='handleTouchMove(1,$event)' @touchend='handleTouchEnd(1,$event)'>
        <div class='item-info' ref='screen1Con'>
          ddd
          <p style='height:1500px;'></p>
          <p>{{touch.bottomTip}}</p>
        </div>
      </div>
      <div class='scroll-wrap item-detial' ref='screen2' @touchstart='handleTouchStart(2,$event)' @touchend='handleTouchEnd(2,$event)'>
        <div class='item-detail' ref='screen2Con'>
          SS
          <p style='height:1500px;'></p>
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
