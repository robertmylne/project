import Vue from 'vue'
import Search from './components/Search'
import NewCustomer from './components/NewCustomer'
import Order from './components/Order'
import Confirmation from './components/Confirmation'

import Parent from './components/Parent'

test('check if view one works', () => {

    const parentView = Parent.$options.data().view = 1
    const searchView = Search.data().view

    expect(parentView).toEqual(searchView)

})

test('check if view two works', () => {

    const parentView = Parent.$options.data().view = 2
    const searchView = NewCustomer.data().view

    expect(parentView).toEqual(searchView)

})

test('check if view three works', () => {

    const parentView = Parent.$options.data().view = 3
    const searchView = Order.data().view

    expect(parentView).toEqual(searchView)

})

test('check if view four works', () => {

    const parentView = Parent.$options.data().view = 4
    const searchView = Confirmation.data().view

    expect(parentView).toEqual(searchView)

})