require('./bootstrap');

//load all dependencies
import axios from 'axios'
import Datepicker from 'vuejs-datepicker'

window.Vue = require('vue');
window.axios = axios;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('task-list', require('./components/Task-list.vue'));

const app = new Vue({
    el: '#app'
});

const date_picker = new Vue ({
    el: '#date_picker',

    components: {
        Datepicker
    },
    data: {
        date: new Date()
    }
});
