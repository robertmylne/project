import {db} from '../../resources/assets/js/bootstrap'
export default {
    props: ['updateView', 'customer'],
    firebase: {
        items: db.ref('items')
    },
    mounted() {
        setTimeout(() => {
            this.items.map((item) => {
                var newItem = Object.assign({}, item)
                newItem['quantity'] = 0
                this.selected.push(newItem)
            })
        },1000)
    },
    data() {
        return {
            selected: [{name: 'Pizza', quantity: 3, price: '50'}],
            view: 3
        }
    },
    computed: {
        totalPrice() {
            var total = 0
            this.selected.map((item) => {
                let itemTotal = item.price * item.quantity
                total += itemTotal
            })
            return total
        }
    },
    methods: {
        add(item) {
            for(var i = 0; i < this.selected.length; i++) {
                if(this.selected[i]['.key'] == item['.key']) {
                    this.selected[i].quantity += 1
                    console.log('match')
                }
            }
        },
        checkout() {
            this.updateView(4, this.customer, this.selected, null)
        }
    }
}