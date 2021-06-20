export function changeDelivery(value) {
    console.log(value, 1111)
    return {
        type: 'CHANGE_DELIVERY',
        payload:value
    }
}