import Vue from 'vue'
import Search from './components/Search'
import NewCustomer from './components/NewCustomer'
import Order from './components/Order'
import Confirmation from './components/Confirmation'

test('checks if phone number gets added to search', () => {

    const data = Search.data()

    expect(data.search.phone).toEqual('0411222111')

})

test('checks if all functions are registered properly', () => {

    expect(typeof Search.methods.filter).toBe('function')
    expect(typeof Search.methods.clear).toBe('function')
    expect(typeof Search.methods.edit).toBe('function')
    expect(typeof Search.methods.cancel).toBe('function')
    expect(typeof Search.methods.save).toBe('function')
    expect(typeof Search.methods.addCustomer).toBe('function')

})

test('checks if customer is correctly formatted', () => {

    const data = NewCustomer.data().customer

    expect(data).toEqual({
        first_name: 'John',
        last_name: 'Smith',
        address: '123 Mayfield Lane',
        phone: '0400111222',
        post_code: '4000'
    })

})

test('checks if all functions are registered properly', () => {

    expect(typeof NewCustomer.methods.addCustomer).toBe('function')

})

test('checks if the order has more than one item', () => {

    const data = Order.data()

    expect(data.selected.length).toBeGreaterThan(0)

})

test('checks if all functions are registered properly', () => {

    expect(typeof Order.methods.add).toBe('function')
    expect(typeof Order.methods.checkout).toBe('function')

})

test('checks if the confirmation is turned off by default', () => {

    const data = Confirmation.data().state

    expect(data).toEqual({
        confirming: false,
        confirmed: false
    })

})

test('checks if all functions are registered properly', () => {

    expect(typeof Confirmation.methods.confirm).toBe('function')

})
