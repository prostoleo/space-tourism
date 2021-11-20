import { createApp } from 'vue';
import App from './App.vue';

import BaseHeader from '#/base/BaseHeader.vue';
import BaseContainer from '#/base/BaseContainer.vue';

import router from './router/index';
import store from './store';
// console.log('store: ', store);

import '@/assets/css/normalize.css';

const app = createApp(App);

app.component('BaseHeader', BaseHeader);
app.component('BaseContainer', BaseContainer);

app.use(router);
app.use(store);

app.mount('#app');
