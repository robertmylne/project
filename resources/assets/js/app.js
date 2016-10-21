require('./bootstrap')
import {db} from './bootstrap'

// Static Components
Vue.component('preloader', require('./static/Preloader.vue'))
Vue.component('navbar', require('./static/NavBar.vue'))
Vue.component('modal', require('./static/Modal.vue'))

// Dynamic Components
Vue.component('search', require('./components/Search.vue'))
Vue.component('new-customer', require('./components/NewCustomer.vue'))
Vue.component('order', require('./components/Order.vue'))
Vue.component('confirmation', require('./components/Confirmation.vue'))

const vm = new Vue({
    el: '#app',
    data: {
        view: 1,
        customer: null,
        order: null,
        phone: null
    },
    methods: {
        updateView(id, customer = null, order = null, phone = null) {
            this.view = id
            this.customer = customer
            this.order = order
            this.phone = phone
        }
    }
})
