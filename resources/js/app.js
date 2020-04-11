require('./bootstrap');

window.Vue = require('vue');

import Buefy from 'buefy';
import 'buefy/dist/buefy.css'
import router from './router';
import App from './components/Layouts/default';
import store from './store';

Vue.use(Buefy);

axios.defaults.baseURL = assetUrl;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    store,
    router
});
