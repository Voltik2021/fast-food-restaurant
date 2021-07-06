import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { transferBasket, removeFromBasket, removeBasketForDielivery, transferBasketForDielivery } from '../../redux/action'

export default function ButtonForPurchase({ id, price, quetityProduct, quetityProductForDelivery }) {
    let state = useSelector(state => state)
    let dispatch = useDispatch()

    let getProduct = () => {
        dispatch(transferBasket({ id, price }))
    }

    let removeProduct = () => {      
        dispatch(removeFromBasket({ id, price }))
    }

    let getProductDelivery = () => {
      
        dispatch(transferBasketForDielivery({ id, price }))
    }

    let removeProductDelivery = () => {
        dispatch(removeBasketForDielivery({ id, price }))
    }
    
    return (
        <div className='buttons-product-adjustment'>
            <button
                className='button-adjustment'
                onClick={
                    !state.flagDeliveryMethod ?
                    removeProduct : removeProductDelivery
                }
            >
                -
            </button>
            {!state.flagDeliveryMethod ? quetityProduct : quetityProductForDelivery}
            <button
                className='button-adjustment'
                onClick={
                    !state.flagDeliveryMethod ?
                    getProduct : getProductDelivery
                }
            >
                +
            </button>
        </div>
    )
}