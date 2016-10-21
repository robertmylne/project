<template lang="html">
    <section id="search">
        <nav>
            <div class="nav-wrapper">
                <form>
                    <div class="input-field">
                        <input id="search" type="search" v-model="search.phone" @keyup="filter">
                        <label for="search"><i class="material-icons">search</i></label>
                        <i class="material-icons" @click="clear">close</i>
                    </div>
                </form>
            </div>
        </nav>
        <div v-if="customer">
            <ul class="collection with-header" >
                <li class="collection-header"><h4>{{ customer.first_name + ' ' + customer.last_name }}</h4></li>
                <li class="collection-item" v-for="(value, key) of customer">
                    <div v-if="field.value != value">
                        <strong>{{ key }}: </strong> {{ value }}
                        <a href="#!" class="secondary-content" @click="edit(key, value)"><i class="material-icons">mode_edit</i></a>
                    </div>
                    <div v-else>
                        <strong>{{ key }}: </strong>
                        <div class="row">
                            <div class="input-field col s6">
                                <input type="text" v-model="field.new">
                            </div>
                            <div class="col s6">
                                <a href="#!" class="secondary-content" @click="save(customer.id)"><i class="material-icons">done</i></a>
                                <a href="#!" class="secondary-content" @click="cancel"><i class="material-icons">cancel</i></a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <a class="waves-effect waves-light btn-large" @click="createOrder">Create Order</a>
        </div>

        <div v-else class="add-customer">
            <a class="waves-effect waves-light btn-large" @click="addCustomer">Add Customer</a>
        </div>
    </section>
</template>

    <script>
    import {db} from './../bootstrap'

    export default {
        props: ['updateView', 'phone'],
        data() {
            return {
                search: {
                    phone: ''
                },
                customer: null,
                field: {
                    key: '',
                    value: '',
                    new: ''
                }
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
    </script>

    <style lang="stylus" scoped>
        .add-customer
            text-align: center
            margin-top: 180px

    </style>
