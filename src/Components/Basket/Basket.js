import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptOrder } from '../../redux/action'
import './Basket.css';







export default function Basket() {
    let state = useSelector(state => state);
    let dispatch = useDispatch()


    let emptyBasket =
        <div className='basket-control'>
            <span>Товар не выбран</span>
            <img className='blackBasket-control' src = 'https://api-test-fast-food-store.herokuapp.com/static/img/blackBasket.png' alt = 'empty shopping cart' />
        </div>
    

    return (
        <div>
            {!state.flagDeliveryMethod && state.valueBascket || state.flagDeliveryMethod && state.valueBascketForDelivery  ?
                <button

                    onClick = {!state.flagDeliveryMethod?()=>{dispatch(acceptOrder(null, state.listProductsInBasket, state.pickUpService))}:null}
                    form='buttonBasket'
                    className='state-basket'
                >
                    <span className='total-price'> {!state.flagDeliveryMethod?state.valueBascket:state.valueBascketForDelivery}</span><img className='white-basket' src = 'https://api-test-fast-food-store.herokuapp.com/static/img/Basket.png' alt = 'shopping cart with the product' />
                </button> : emptyBasket}

        </div>
    )
}