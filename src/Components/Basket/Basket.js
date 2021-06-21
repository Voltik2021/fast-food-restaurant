import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Basket.css';


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
            {state.valueBascket ? <button>1</button> : emptyBasket}

        </div>
    )
}