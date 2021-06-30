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

export function transferBasketForDielivery(product) {
    return {
        type: 'TRANSFER_BASCKET_FOR_DELIVERY',
        payload:product
    }
}

export function removeFromBasket(product) {
    return {
        type: 'REMOVE_PRODUCT_BASCKET',
        payload:product
    }
}

export function removeBasketForDielivery(product) {
    return {
        type: 'REMOVE_PRODUCT_BASCKET_FOR_DELIVERY',
        payload:product
    }
}

export function acceptOrder(value, listProducts, pickUpService) {
    let order
    if (value) {       
        order = {address:[value.street, value.house], products:listProducts}
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
    return {
        type: 'SELECT_PICK_UP_SERVICE',
        payload: value
    }
}