import {executionOrder} from '../APIserviсe';

export function changeDelivery(value) {   
    return {
        type: 'CHANGE_DELIVERY',
        payload:value
    }
}

export function transferBasket(product) {    
    return {
        type: 'TRANSFER_BASCKET',
        payload:product
    }
}

export function removeFromBasket(product) {
    return {
        type: 'REMOVE_PRODUCT_BASCKET',
        payload:product
    }
}

export function acceptOrder(e, listProducts, pickUpService) {
    let order
    if (e) {
        e.preventDefault()

        let data = new FormData(e.target)
        let street = data.get('street')
        let house = data.get('house')
        order = {address:[street, house], products:listProducts}
    } else {
        order = {address:[pickUpService], products:listProducts}
    }

    return (dispatch) => {
        dispatch(acceptOrderStart());

        executionOrder(order)
            .then(data => dispatch(acceptOrderSuccess(data)))
            .catch(err => dispatch(acceptOrderErr(err)))
    }
}


function acceptOrderStart() {
    return {
        type: 'ACCEPT_ORDER_START'
    }
}

function acceptOrderSuccess(order) {
    return {
        type: 'ACCEPT_ORDER_SUCCESS',
        payload: order
    }
}

function acceptOrderErr(err) {
    return {
        type: 'ACCEPT_ORDER_ERR',
        payload: err
    }
}

export function selectPickUpService(value) {
    console.log(value)
    return {
        type: 'SELECT_PICK_UP_SERVICE',
        payload: value
    }
}