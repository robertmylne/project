import {db} from '../../resources/assets/js/bootstrap'
export default {
    props: ['updateView'],
    mounted() {
    },
    data() {
        return {
            customer: {
                first_name: 'John',
                last_name: 'Smith',
                address: '123 Mayfield Lane',
                phone: '0400111222',
                post_code: '4000',
            },
            view: 2
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