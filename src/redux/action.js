export function changeDelivery(value) {   
    return {
        type: 'CHANGE_DELIVERY',
        payload:value
    }
}

export function transferBasket(prise) {
    return {
        type: 'TRANSFER_BASCKET',
        payload:prise
    }
}