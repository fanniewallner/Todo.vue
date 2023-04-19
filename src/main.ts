import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

createApp(App).mount('#app')