import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Basket.css';
import bask from '../../img/blackBasket.png'


export default function Basket() {
    let state = useSelector(state => state);


    let emptyBasket =
        <div className='basket-control'>
            <span>Товар не выбран</span>
            <img className='blackBasket-control' src='./src/img/blackBasket.png' />
        </div>


    return (
        <div>
            {console.log(state.valueBascket)}
            {state.valueBascket ? 
            <button
             className = 'state-basket'             
            >
                <span className = 'total-price'> {state.valueBascket}</span><img className = 'white-basket' src='./src/img/Basket.png'/>
            </button> : emptyBasket}

        </div>
    )
}