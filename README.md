> v-mall based vue.js by kokiy


## feature
1. vue + vue-router + vuex + webpack(vue全家桶)
2. 基于 vue-cli,重新组织代码结构,规范开发流程
3. 集成 mint-ui基础组件库
4. 集成 lodash ,便于前端处理复杂的数据结构
5. 引入vue-i18n ,增加模板翻译功能
6. 引入fly.js 作为http 请求库
7. 升级webpack4 ,删除vue-cli生成的build 文件夹,自己搭建webpack.config.js
8. 引入 px2rem, 直接写设计图750的尺寸,自动转换为rem,第三方ui库也自动转换,适配[阿里高清方案](https://www.jianshu.com/p/985d26b40199)
9. 兼容iphonex [凹凸h5iphonex解决方案](https://aotu.io/notes/2017/11/27/iphonex/index.html)


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report


