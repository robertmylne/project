export default {
    props: ['customer', 'order', 'updateView'],
    data() {
        return {
            state: {
            confirming: false,
                        confirmed: false,
                        },
            view: 4
        }
    },
    methods: {
        confirm() {
                this.confirming = true
                setTimeout(() => {
                    this.confirming = false
                    this.confirmed = true
                    setTimeout(() => {
                        this.confirming = false
                        this.confirmed = false
                        this.updateView(1)
                    }, 2000)
                }, 3000)

        }
    },
    computed: {
        totalPrice() {
            var total = 0
            this.order.map((item) => {
                let itemTotal = item.price * item.quantity
                total += itemTotal
            })
            return total
        }
    },
}