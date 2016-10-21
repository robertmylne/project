window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');
window.VueFire = require('vuefire')
window.firebase = require('firebase')

Vue.use(VueFire)

const app = firebase.initializeApp({
    apiKey: "AIzaSyCL_KuiGPHeJMBgODTTgS2swSBD6eELlDE",
    authDomain: "new-firebase-d3ca7.firebaseapp.com",
    databaseURL: "https://new-firebase-d3ca7.firebaseio.com",
    storageBucket: "new-firebase-d3ca7.appspot.com",
    messagingSenderId: "759745435827"
})

const db = app.database()

export { db }
