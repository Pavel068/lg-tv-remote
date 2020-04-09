import Vue from 'vue';
import App from './App.vue';
import router from './router';

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import io from "socket.io-client";

window.socket = io.connect(process.env.VUE_APP_NODE_HOST);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
