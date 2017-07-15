<template>
  <div class='login'>
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <form>
      <div class='input-area'>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username" id='username'></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="text" @focus="aa" v-model="password" id='password'></mt-field>
      </div>
      <mt-button type="primary" size="large" class='login-btn' @click.prevent='handleLogin'>登录</mt-button>
    </form>
  </div>
</template>
<script src='./index.js'>


</script>
<style lang='less' scoped>
@import './index.less';

</style>
