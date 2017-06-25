<template>
  <div>
    <AppHeader/>
    <div class='home'>
    <button @click='handleClick'>dddd</button>
    <mt-swipe :auto="4000">
      <mt-swipe-item>ssssssssssss</mt-swipe-item>
      <mt-swipe-item>ssssssssssss</mt-swipe-item>
      <mt-swipe-item>aaaaaaaaaaaaaa</mt-swipe-item>
    </mt-swipe>
    </div>
    <AppFooter/>
  </div>
</template>

<script src='./index.js'></script>

<style lang='less' scoped>
  @import './index.less';
</style>
