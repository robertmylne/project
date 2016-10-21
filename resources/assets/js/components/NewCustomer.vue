<template lang="html">
    <section>
        <div class="row">
            <div class="input-field col s6">
                <input id="first_name" type="text" v-model="first_name" :class="{ 'valid': firstNameValidation, 'invalid': !firstNameValidation }">
                <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
                <input id="last_name" type="text" v-model="last_name" :class="{ 'valid': lastNameValidation, 'invalid': !lastNameValidation }">
                <label for="last_name">Last Name</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <input id="address" type="text" v-model="address" :class="{ 'valid': addressValidation, 'invalid': !addressValidation }">
                <label for="address">Address</label>
            </div>
            <div class="input-field col s6">
                <input id="post_code" type="text" v-model="post_code" :class="{ 'valid': postCodeValidation, 'invalid': !postCodeValidation }">
                <label for="post_code">Post Code</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <input id="phone" type="text" v-model="phone" :class="{ 'valid': phoneValidation, 'invalid': !phoneValidation }">
                <label for="phone">Phone</label>
            </div>
        </div>
        <div class="button-wrapper">
            <a class="waves-effect waves-light btn-large" @click="addCustomer" v-if="formIsValid">Save Customer</a>
            <a class="btn-large" v-if="!formIsValid" disabled>Save Customer</a>
        </div>
    </section>
</template>

<script>
import {db} from '../bootstrap'
export default {
    props: ['updateView'],
    mounted() {
    },
    data() {
        return {
            first_name: '',
            last_name: '',
            address: '',
            phone: '',
            post_code: ''
        }
    },
    computed: {
        firstNameValidation() {
            return !this.first_name.match(/[^a-zA-Z\-]/) && this.first_name != ""
        },
        lastNameValidation() {
            return !this.last_name.match(/[^a-zA-Z\-]/) && this.last_name != ""
        },
        addressValidation() {
            return this.address != ""
        },
        phoneValidation() {
            return this.phone != ""
        },
        postCodeValidation() {
            return this.post_code.match(/^[0-9]+$/) && this.post_code.length == 4
        },
        formIsValid() {
            return this.firstNameValidation &&
                    this.lastNameValidation &&
                    this.addressValidation &&
                    this.phoneValidation &&
                    this.postCodeValidation
        },
    },
    methods: {
        addCustomer() {
            db.ref('customers').push({
                first_name: this.first_name,
                last_name: this.last_name,
                address : this.address,
                phone: this.phone,
                post_code: this.post_code
            })
            this.updateView(1, null, null, this.phone)
        },

    }
}
</script>

<style lang="stylus">
    .button-wrapper
        text-align: center
</style>
