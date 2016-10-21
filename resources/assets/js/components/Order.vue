<template lang="html">
    <section>
        <div class="row">
            <div class="col s9">
                <div class="row">
                    <div class="col s4" v-for="item of items">
                        <div class="card">
                            <div class="card-image">
                                <img :src="item.image">
                                <span class="card-title">{{item.name}} (${{item.price}})</span>
                            </div>
                            <div class="card-content">
                                <div class="card-action">
                                    <a @click="add(item)" style="cursor: pointer">Add to order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s3">
                <ul>
                    <li v-for="item in selected">{{item.name}} ({{item.quantity}}) - ${{item.price * item.quantity}} </li>
                    <li>-----</li>
                    <li>Total price: ${{totalPrice}}</li>
                </ul>
                <a class="waves-effect waves-light btn" @click="checkout">Checkout</a>
            </div>
        </div>
    </section>
</template>

<script>
import {db} from './../bootstrap'
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
         selected: []
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
</script>

<style lang="stylus" scoped>
    .card-title
        background-color: #38003c
        color: #e90052
    .card-action
        background-color: #e90052
        text-align: center
        a
            color: white !important
            margin-right: 0 !important
</style>
