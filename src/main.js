// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'


Vue.use(VueResource)
Vue.config.productionTip = false

//全局自定义指令
// rainbow传过来的参数
/*Vue.directive('rainbow',{
	bind(el,binding,vnode) {
		//h2随机改变颜色
		el.style.color="#" + Math.random().toString(16).slice(2,8)
	}
})*/


Vue.directive('theme',{
	bind(el,binding,vnode) {
		if (binding.value === 'wide') {
			el.style.maxWidth = "1260px";
		} else if (binding.value == 'narrow') {
			el.style.maxWidth = "800px";
		}
	}
})
//全局自定义过滤器
/*Vue.filter("to-uppercase",function(value){
	return value.toUpperCase();
});

Vue.filter("snippet",function(value) {
	return value.slice(0,100) + "..."
});*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
