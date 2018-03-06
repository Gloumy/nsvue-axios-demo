import Vue from 'nativescript-vue';

import router from './router';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,


}).$start();
