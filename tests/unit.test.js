test('adds total of products in order', () => {

    const total = (products) => {
        var total = 0
        products.map((product) => {
            total += (product.price * product.quantity)
        })
        return total
    }

    expect(total([
        {name: 'Pizza', price: 10, quantity: 2},
        {name: 'Garlic Bread', price: 5, quantity: 1},
        {name: 'Pasta', price: 10, quantity: 3}
    ])).toBe(55)

})

test('checks if customer is complete', () => {

    const customer = {
        first_name: 'John',
        last_name: 'Smith',
        address: '123 Mayfair Lane',
        phone: '0400111222',
        post_code: '4217'
    }

    expect(customer).toEqual({
        first_name: 'John',
        last_name: 'Smith',
        address: '123 Mayfair Lane',
        phone: '0400111222',
        post_code: '4217'
    })

})

test('checks if item is added to order', () => {

    const item = {name: 'Pizza', price: 10, quantity: 2}

    var items = [
        {name: 'Garlic Bread', price: 5, quantity: 1},
        {name: 'Pasta', price: 10, quantity: 3}
    ]

    expect(items.push(item)).toBe(3)

})

test('search for customer', () => {

    const phone = '0400111222'

    const customers = [
        {first_name: 'John', last_name: 'Smith', address: '123 Mayfair Lane', phone: '0400111111', post_code: '4217'},
        {first_name: 'Jane', last_name: 'Smith', address: '123 Mayfair Lane', phone: '0400111222', post_code: '4217'},
        {first_name: 'Billy', last_name: 'Smith', address: '123 Mayfair Lane', phone: '0400111333', post_code: '4217'}
    ]

    const findCustomer = (customers, phone) => {
        var customer = {};
        for (var i = 0; i < customers.length; i++) {
            if(customers[i].phone == phone) {
                customer = customers[i]
                break
            }
        }

        return customer
    }

    expect(findCustomer(customers, phone)).toEqual(customers[1])

})