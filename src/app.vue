<template>
  <div id='app'>
    <transition name='slide-left' mode='out-in'>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name='slide-left' mode='out-in'>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>
<style lang='less' scoped>
#app {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.slide-left-enter-active {
  left: 100%;
  transition: left 0.5s;
}

.slide-left-enter-to {
  left: 0;
}
</style>
