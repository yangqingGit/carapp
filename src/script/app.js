(function() {

	const loadTemplate = id => document.getElementById(id + '_tmpl').innerHTML;

	const App = Vue.extend({})
	const home = Vue.extend({
		template: '#home_tmpl'
	})
	
	const exam = Vue.extend({
		template: '#exam_tmpl',
		methods: {
			goback(){
				window.history.go(-1);
			}
		}
	})

	const routes = [{
		path: '/home',
		component: home,
		name: 'home'
	}, {
		path: '/exam/:type', // 动态路径参数 以冒号开头
		component: exam,
		name: 'exam'
	}]

	const router = new VueRouter({
		routes
	})
	const app = new Vue({
		router
	}).$mount('#app');

})()