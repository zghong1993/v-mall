<template>
  <mt-header fixed v-bind:class="{ black: !colorIsActive ,white: colorIsActive}">
    <span slot="left">{{cityName}}</span>
    <span slot="right" @click='showSearch'><i class='iconfont icon-sou'></i></span>
  </mt-header>
</template>
<script src='./index.js'>


</script>
<style lang='less' scoped>
@import './index.less';

</style>
