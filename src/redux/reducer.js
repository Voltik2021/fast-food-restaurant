let initialState = {
    flagDeliveryMethod: true,
    valueBascket: 0,
    listProductsInBasket: []
    
    
}

export default function reducer(state = initialState, action) {
    let newState
    let findProduct
    let productAccounting
    switch(action.type){
        case 'CHANGE_DELIVERY':            
            newState = {...state}
            newState.flagDeliveryMethod = action.payload
            return newState
        case 'TRANSFER_BASCKET':                       
            newState = {...state}
            newState.valueBascket += action.payload.price            
            if (!newState.listProductsInBasket.length) {
                productAccounting = {...action.payload, quantity: 1}
                newState.listProductsInBasket.push(productAccounting)               
                return newState
            }
            findProduct = newState.listProductsInBasket.find(item => item.id === action.payload.id)
            if (findProduct) {               
                findProduct.quantity += 1;              
                return newState
            } else {
                productAccounting = {...action.payload, quantity: 1}
                newState.listProductsInBasket.push(productAccounting)
                return newState
            }
            
            return newState
        case 'REMOVE_PRODUCT_BASCKET':
            newState = {...state}
            newState.valueBascket -= action.payload.price 
            findProduct = newState.listProductsInBasket.find(item => item.id === action.payload.id)
            findProduct.quantity -= 1
            return newState
            // productAccounting = {...action.payload, quantity: findProduct.quantity - 1}

            
            
            return newState
    }
    return state
}