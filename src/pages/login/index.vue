<template>
  <div class='login'>
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <form @submit.prevent="handleLogin">
      <div class='input-area'>
        <div class='input-wrap'>
          <p class='input-field'>
            <label>用户名: </label>
            <input type="text" name="username" v-model.trim="username" v-validate="'required'">
            <i class='field-status mintui text-right' v-bind:class="{ 'mintui-field-error': errors.has('username') }"></i>
          </p>
          <p class='field-error' v-show="errors.has('username')">用户名不能为空</p>
        </div>
        <div class='input-wrap'>
          <p class='input-field'>
            <label>密码: </label>
            <input type="text" onfocus='this.type="password"' name="password" v-model.trim="password" v-validate="'required'">
            <i class='field-status mintui text-right' v-bind:class="{ 'mintui-field-error': errors.has('password') }"></i>
          </p>
          <p class='field-error' v-show="errors.has('password')">密码不能为空</p>
        </div>
      </div>
      <mt-button type="primary" size="large" class='login-btn'>登录</mt-button>
    </form>
  </div>
</template>
<script src='./index.js'>


</script>
<style lang='less' scoped>
@import './index.less';

</style>
