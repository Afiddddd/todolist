import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios';
import store from './store'

import App from './App.vue'
import {  } from "./assets/global.css";
import mixins from "./mixins";
import  moshaToast  from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import router from './router'


const app = createApp(App);


app.mixin(mixins);
app.use(router);
app.use(store)

// Libary
axios.defaults.baseURL = 'https://api.steinhq.com/v1/storages/61fb0f898d29ba23791864fb'
app.use(moshaToast);
app.use(VueAxios, axios)








app.mount('#app')