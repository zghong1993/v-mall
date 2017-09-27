<template>
  <footer>
    <ul>
      <router-link to='/' tag='li' exact>
        <span><i class='iconfont icon-index'></i><br/>首页</span>
      </router-link>
      <router-link to='/category' tag='li'>
        <span><i class='iconfont icon-category'></i><br/>分类</span>
      </router-link>
      <router-link to='/trade/cart' tag='li'>
        <span><i class='iconfont icon-cart'></i><br/>购物车</span>
      </router-link>
      <router-link to='/user' tag='li'>
        <span><i class='iconfont icon-personal-center'><br/></i>我的</span>
      </router-link>
    </ul>
  </footer>
</template>
<style lang='less' scoped>
@import './index.less';

</style>
