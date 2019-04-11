import 'babel-polyfill'; // es6一些API polyfill
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store';
import 'common/less/index';
import fastclick from 'fastclick'; // 消除移动端点击延迟
import VueLazyLoad from 'vue-lazyload';

/* eslint-disable no-unused-vars */
// import VConsole from 'vconsole';
// let console1 = new VConsole();
// 移动端console工具

Vue.config.productionTip = false;

fastclick.attach(document.body);

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
