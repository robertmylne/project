import {db} from '../../resources/assets/js/bootstrap'
    export default {
        props: ['updateView', 'phone'],
        data() {
            return {
                search: {
                    phone: '0411222111'
                },
                customer: null,
                field: {
                    key: '',
                    value: '',
                    new: ''
                },
                view: 1
            }
        },
        firebase: {
            customers: db.ref('customers')
        },
        mounted() {
            console.log('mounted')
            if(this.phone) {
                this.search.phone = this.phone
                setTimeout(() => this.filter(), 500)
            }
        },
        methods: {
            filter() {
                for(var i = 0; i < this.customers.length; i++) {
                    if(this.customers[i].phone == this.search.phone) {
                        this.customer = this.customers[i]
                        break
                    } else {
                        this.customer = null
                    }
                }
            },
            clear() {
                this.search.phone = null
                this.customer = null
            },
            edit(key, value) {
                this.field.key = key
                this.field.value = value
                this.field.new = value
            },
            cancel() {
                this.field = {
                    key: '',
                    value: '',
                    new: ''
                }
            },
            save(id) {
                console.log(id)
                console.log(this.field.key)
                console.log(this.field.value)
                console.log(this.field.new)
                db.ref(`customers/${id}/${this.field.key}`).set(this.field.new)
                console.log(db.ref(`customers/${id}`))
                db.ref(`customers/${id}`).once('value').then((snapshot) => {this.customer = snapshot.val()})
                this.cancel()
            },
            addCustomer() {
                this.updateView(2)
            },
            createOrder() {
                this.updateView(3, this.customer)
            }
        }
    }
