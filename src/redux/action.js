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

