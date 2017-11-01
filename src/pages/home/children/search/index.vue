<template>
  <div class='search' :class='{active:searchDisplay}'>
    <p>
      <input type="search" placeholder='搜索商品名称' @keyup.enter='handleSearch'>
      <span class='text-center' @click='hideSearch'>取消</span>
    </p>
    <div class='search-history' v-if='searchHistory'>
      <p>
        <span>最近搜索</span>
        <span class='iconfont icon-delete  text-right pull-right' @click='clearSearchHistory'></span>
      </p>
      <ul>
        <li v-for='item in searchHistory'>{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style lang='less' src='./index.less' scoped />
