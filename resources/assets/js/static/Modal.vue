<template lang="html">

        <div id="addItemModal" class="modal">
            <div class="modal-content">
                <h4>Add menu item</h4>
                <div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="phone" type="text" v-model="name" :class="{ 'valid': nameValidation, 'invalid': !nameValidation }">
                            <label for="phone">Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="phone" type="text" v-model="price" :class="{ 'valid': priceValidation, 'invalid': !priceValidation }">
                            <label for="phone">Price</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="phone" type="text" v-model="image" :class="{ 'valid': imageValidation, 'invalid': !imageValidation }">
                            <label for="phone">Image Url</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="#!" class=" modal-action modal-close waves-effect waves-green btn" @click="save">Save</a>
                <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
            </div>
        </div>

</template>

<script>
import {db} from '../bootstrap'
export default {
    data() {
        return {
            name: '',
            price: '',
            image: ''
        }
    },
    computed: {
        nameValidation() {
            return this.name != ""
        },
        priceValidation() {
            return this.price.match(/^[0-9]+$/) && this.price != ""
        },
        imageValidation() {
            return this.image != ""
        },
        formIsValid() {
            return this.nameValidation &&
                    this.priceValidation &&
                    this.imageValidation
        },
    },
    methods: {
        save() {
            db.ref('items').push({
                name: this.name,
                price: this.price,
                image: this.image
            })
        }
    }
}
</script>

<style lang="css">
</style>
