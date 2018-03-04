<template>
  <mt-header fixed :style="locationWrap">
    <span slot="left">{{cityName}}</span>
    <span slot="right" @click='showSearch'><i class='iconfont icon-search'></i></span>
  </mt-header>
</template>
<script src='./index.js'></script>
<style lang='less' src='./index.less' scoped />
