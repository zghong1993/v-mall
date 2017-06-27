<template>
  <div class='search' :class='{active:showSearch}'>
    <p>
      <input type="text" placeholder='搜索商品名称'>
      <span class='text-center' @click='hideSearch'>取消</span>
    </p>
    <div class='search-history'>
    </div>
  </div>
</template>
<script src='./index.js'>


</script>
<style lang='less' scoped>
@import './index.less';

</style>
