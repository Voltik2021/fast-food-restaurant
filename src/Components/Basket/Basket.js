import React from 'react';
import './Basket.css';


export default function Basket () {
    return (        
            <div className = 'basket-control'>
                <span>Товар не выбран</span>
                <img className = 'blackBasket-control' src = './src/img/blackBasket.png'/>
            </div>       
    )
}