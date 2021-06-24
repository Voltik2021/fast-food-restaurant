import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptOrder } from '../../redux/action'
import './Basket.css';
import bask from '../../img/blackBasket.png'


export default function Basket() {
    let state = useSelector(state => state);
    let dispatch = useDispatch()


    let emptyBasket =
        <div className='basket-control'>
            <span>Товар не выбран</span>
            <img className='blackBasket-control' src='./src/img/blackBasket.png' />
        </div>
    

    return (
        <div>
            {state.valueBascket ?
                <button

                    onClick = {!state.flagDeliveryMethod?()=>{dispatch(acceptOrder(null, state.listProductsInBasket, state.pickUpService))}:null}
                    form='buttonBasket'
                    className='state-basket'
                >
                    <span className='total-price'> {!state.flagDeliveryMethod?state.valueBascket:state.valueBascketForDelivery}</span><img className='white-basket' src='./src/img/Basket.png' />
                </button> : emptyBasket}

        </div>
    )
}