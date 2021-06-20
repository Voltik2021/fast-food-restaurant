let initialState = {
    flagDeliveryMethod:true,

    category:[
        {id:1, name: 'Бургеры', products: [1, 2, 3, 4, 5, 6]},
    ]
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case 'CHANGE_DELIVERY':            
            let newState = {...state}
            newState.flagDeliveryMethod = action.payload
            return newState
    }
    return state
}