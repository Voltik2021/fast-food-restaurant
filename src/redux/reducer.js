let initialState = {
    flagDeliveryMethod: false,
    valueBascket: 0,
    valueBascketForDelivery: 0,
    listProductsInBasket: [],
    listProductsInBasketForDelivery: [],
    pickUpService: 'Юго-запод'    
    
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
            
        case 'TRANSFER_BASCKET_FOR_DELIVERY':
            newState = {...state}
            newState.valueBascketForDelivery += action.payload.price            
            if (!newState.listProductsInBasketForDelivery.length) {
                productAccounting = {...action.payload, quantity: 1}
                newState.listProductsInBasketForDelivery.push(productAccounting)               
                return newState
            }
            findProduct = newState.listProductsInBasketForDelivery.find(item => item.id === action.payload.id)
            if (findProduct) {               
                findProduct.quantity += 1;              
                return newState
            } else {
                productAccounting = {...action.payload, quantity: 1}
                newState.listProductsInBasketForDelivery.push(productAccounting)
                return newState
            }
           
        case 'REMOVE_PRODUCT_BASCKET':
            newState = {...state}
            newState.valueBascket -= action.payload.price 
            findProduct = newState.listProductsInBasket.find(item => item.id === action.payload.id)
            findProduct.quantity -= 1
            return newState

        case 'REMOVE_PRODUCT_BASCKET_FOR_DELIVERY':
            newState = {...state}
            newState.valueBascketForDelivery -= action.payload.price 
            findProduct = newState.listProductsInBasketForDelivery.find(item => item.id === action.payload.id)
            findProduct.quantity -= 1
            return newState
        
        case 'ACCEPT_ORDER_START':
            console.log('ACCEPT_ORDER_START')
                    
            return state
        
        case 'ACCEPT_ORDER_SUCCESS':
            console.log(action.payload)
            newState = {...state}
            
            if (action.payload.address.length === 2) {
                newState.listProductsInBasketForDelivery = []
                newState.valueBascketForDelivery = 0; 
            } else {
                newState.listProductsInBasket = []
                newState.valueBascket = 0;                
            }
           

            return newState
        
        case 'ACCEPT_ORDER_ERR':
            console.log(action.payload)
            return state
        case 'SELECT_PICK_UP_SERVICE':
            console.log(action.payload)
            newState = {...state};
            newState.pickUpService = action.payload;
            return newState


    }
    return state
}