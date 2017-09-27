<template>
  <div id='app'>
    <transition name='slide-left' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
}

</script>
<style lang='less' scoped>
.slide-left-enter-active {
  left: 0;
  transition: left .5s;
}

.slide-left-enter {
  left: 100%;
}

</style>
