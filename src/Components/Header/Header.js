import React from 'react';
import './Header.css';
import Basket from '../Basket/Basket';
import DeliveryMethod from '../DeliveryMethod/DeliveryMethod';
import burgerMenu from '../../img/burgerMenu.svg';
import logo from '../../img/logo.svg'


export default function Header () {
    return (
        <div className = 'header-main' id = 'header'>
            <div className = 'top-header'>
                <img src = {burgerMenu}/>
                <div className = 'logo-control'>
                    <img src = {logo}/>
                </div>   
                <Basket/>         
            </div>
            <DeliveryMethod/>
        </div>
    )
}