// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui' //用来实现下拉滚动的插件
import './mock/mockServer' //加载 mockserver即可
import Vant from 'vant';
import 'vant/lib/index.css';
import VueLazyload from 'vue-lazyload' //懒加载插件
import loading from './common/images/loading.gif'//引入懒加载的图片
import './filters' //加载过滤器
Vue.use(VueLazyload,{//内部自定了一个指令 lazy
  loading
})
Vue.use(Vant);
//注册全局组件标签
Vue.component(Button.name,Button) //<mt-button>
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // 使用上vuex
  router,
  components: { App },
  template: '<App/>',

})
