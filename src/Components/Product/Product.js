import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transferBasket, removeFromBasket, transferBasketForDielivery, removeBasketForDielivery } from '../../redux/action'
import './Product.css'

export default function Product({ name, id, price, img, index }) {
    let dispatch = useDispatch();
    let state = useSelector(state => state);

    let findProductForDelivery = state.listProductsInBasketForDelivery.find((item) => { return item.id === id })
    let quetityProductForDelivery
    if (findProductForDelivery) {
        quetityProductForDelivery = findProductForDelivery.quantity
    }
    let findProduct = state.listProductsInBasket.find((item) => { return item.id === id })
    let quetityProduct
    if (findProduct) {
        quetityProduct = findProduct.quantity
    }

    return (
        <div
            className={!(index % 2) ? 'product product-backgaund-white' : 'product product-backgaund-gray'}
        >

            <img src={img} alt = {name}/>
            <div className='wrapper-button-product'>

                {state.flagDeliveryMethod && quetityProductForDelivery || !state.flagDeliveryMethod && quetityProduct ?
                    <div className='buttons-product-adjustment'>
                        <button
                            className='button-adjustment'
                            onClick={() => { 
                                !state.flagDeliveryMethod?
                                dispatch(removeFromBasket({id, price})):dispatch(removeBasketForDielivery({id, price})) }}
                        >
                            -
                        </button>
                        {!state.flagDeliveryMethod?quetityProduct:quetityProductForDelivery}
                        <button
                            className='button-adjustment'
                            onClick={() => {
                                !state.flagDeliveryMethod ?
                                    dispatch(transferBasket({ id, price })) : dispatch(transferBasketForDielivery({ id, price }))
                            }}
                        >
                            +
                        </button>
                    </div>
                    :
                    <button
                        onClick={() => {

                            !state.flagDeliveryMethod ?
                                dispatch(transferBasket({ id, price })) : dispatch(transferBasketForDielivery({ id, price }))
                        }}
                        className='button-product' >
                        +
                    </button>
                }
            </div>
            <p>{name}</p>
            <p className='price'>{price}</p>
        </div>

    )
}