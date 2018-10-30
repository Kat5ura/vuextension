import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Options from './options/options.vue';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: r => r(Options)
});