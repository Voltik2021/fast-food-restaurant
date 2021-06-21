let initialState = {
    flagDeliveryMethod: true,
    valueBascket: 0,
    productQuantities: 0
    
}

export default function reducer(state = initialState, action) {
    let newState
    switch(action.type){
        case 'CHANGE_DELIVERY':            
            newState = {...state}
            newState.flagDeliveryMethod = action.payload
            return newState
        case 'TRANSFER_BASCKET':
            newState = {...state}
            newState.valueBascket += action.payload
            newState.productQuantities += 1
            return newState
    }
    return state
}