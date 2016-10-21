const vm = new Vue({
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

export default vm