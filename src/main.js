// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router'
import VueRouter from 'vue-router'
import Music from '@/components/Munepages/music.vue'
import Video from '@/components/Munepages/video.vue'
import Dj from '@/components/Munepages/dj.vue'

//开启debug模式
Vue.config.debug = true;

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
	{
		path:'/Music',
		component:Music
	},
	{
		path:'/Video',
		component:Video
	},
	{
		path:'/Dj',
		component:Dj
	}
	
	]
})


/* eslint-disable no-new */
//const app = new Vue({
//        router : router,
//        render : h =>h(App)
//}).$mount("#app");
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

