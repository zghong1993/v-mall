<template>
  <footer>
    <ul>
      <router-link to="/" tag="li" exact>
        <span><i class='iconfont icon-shouye'></i><br/>首页</span>
      </router-link>
      <router-link to="/category" tag="li">
        <span><i class='iconfont icon-leimu'></i><br/>分类</span>
      </router-link>
      <router-link to="/trade/cart" tag="li">
        <span><i class='iconfont icon-gouwuche'></i><br/>购物车</span>
      </router-link>
      <router-link to="/user" tag="li">
        <span><i class='iconfont icon-gerenzhongxin'><br/></i>我的</span>
      </router-link>
    </ul>
  </footer>
</template>
<style lang='less' scoped>
@import './index.less';

</style>
