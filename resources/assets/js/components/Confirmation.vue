<template lang="html">
    <section>
        {{customer}}
        {{order}}
        <div class="row">
            <div class="col s6 offset-s3">
                <ul class="collection">
                    <li class="collection-item" v-for="item of order">{{item.name}} x({{item.quantity}}) | ${{item.price * item.quantity}}</li>
                    <li class="collection-item"><strong>Total: ${{totalPrice}}</strong></li>
                </ul>
                <div v-if="confirming">
                    <div class="progress">
                         <div class="indeterminate"></div>
                     </div>
                </div>
                <div v-if="confirmed"><h3>Success, Order has been processed</h3></div>
              <a class="waves-effect waves-light btn-large" @click="confirm">Confirm</a>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    props: ['customer', 'order', 'updateView'],
    data() {
        return {
            confirming: false,
            confirmed: false
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
</script>

<style lang="css">
</style>
