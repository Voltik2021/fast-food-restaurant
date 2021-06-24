import React from 'react';
import './Header.css';
import Basket from '../Basket/Basket';
import DeliveryMethod from '../DeliveryMethod/DeliveryMethod';


export default function Header () {
    return (
        <div className = 'header-main' id = 'header'>
            <div className = 'top-header'>
                <img src = './src/img/BurgerMenu.svg'/>
                <div className = 'logo-control'>
                    <img src = './src/img/logo.svg'/>
                </div>   
                <Basket/>         
            </div>
            <DeliveryMethod/>
        </div>
    )
}