import Vue from 'vue';
import App from './App.vue';
import VueProgressBar from 'vue-progressbar';

Vue.use(VueProgressBar, {
	color: 'rgb(255, 255, 255)',
	failedColor: 'red',
	height: '2px'
});
new Vue({
	el: '#app',
	render: h => h(App)
});
