import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { transferBasket, transferBasketForDielivery } from '../../redux/action'

export default function ButtonPluse ({ id, price}) {
    let state = useSelector(state => state)
    let dispatch = useDispatch()

    let getProduct = () => {
        dispatch(transferBasket({ id, price }))
    }
   
    let getProductDelivery = () => {
      
        dispatch(transferBasketForDielivery({ id, price }))
    }
    
    return (
        <button
            className='button-product'
            onClick={
                !state.flagDeliveryMethod ?
                getProduct : getProductDelivery
            }
        >
            +
        </button>
    )
}