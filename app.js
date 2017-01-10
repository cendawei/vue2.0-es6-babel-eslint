var Vue = require('vue');

var App = Vue.extend(require('./app.vue'));

Vue.component('app', App);

new Vue({
    el: '#demo'
})
