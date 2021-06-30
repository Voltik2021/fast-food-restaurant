import React from 'react';
import './Header.css';
import Basket from '../Basket/Basket';
import DeliveryMethod from '../DeliveryMethod/DeliveryMethod';



export default function Header () {
    return (
        <div className = 'header-main' id = 'header'>
            <div className = 'top-header'>
                <img src = 'https://api-test-fast-food-store.herokuapp.com/static/img/BurgerMenu.svg' alt = 'burger menu' />
                <div className = 'logo-control'>
                    <img src = 'https://api-test-fast-food-store.herokuapp.com/static/img/logo.svg' alt = 'logo' />
                </div>   
                <Basket/>         
            </div>
            <DeliveryMethod/>
        </div>
    )
}