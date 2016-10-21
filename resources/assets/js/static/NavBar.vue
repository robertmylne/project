<template lang="html">
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo center">Pro Order 3000</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li v-if="updateView"><a @click="cancel">Cancel</a></li>
            </ul>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li v-if="addItem"><a @click="showModal">Add item</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['updateView', 'id', 'addItem'],
    methods: {
        cancel() {
            this.updateView(this.id)
        },
        showModal() {
            $('#addItemModal').openModal()
        }
    }
}
</script>

<style lang="stylus" scoped>
    nav
        margin-bottom: 30px
</style>
