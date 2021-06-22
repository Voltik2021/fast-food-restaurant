import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transferBasket, removeFromBasket } from '../../redux/action'
import './Product.css'

export default function Product({ name, id, price, img, product, index}) {    
    let dispatch = useDispatch();
    let state = useSelector(state => state);       
    let findProduct = state.listProductsInBasket.find((item) => { return item.id === id}) 
    let buttonType 
    if (findProduct) {
        buttonType = findProduct.quantity
    }

    return (
        <div            
            className={!(index % 2) ? 'product product-backgaund-white' : 'product product-backgaund-gray'}
        >

            <img src={img} />
            <div className='wrapper-button-product'>                           
                
                {buttonType  ?
                    <div className='buttons-product-adjustment'>
                        <button
                            className='button-adjustment'
                            onClick={() => { dispatch(removeFromBasket({id, price})) }}
                        >
                            -
                        </button>
                        {buttonType}
                        <button
                            className='button-adjustment'
                            onClick={() => {                         
                                 dispatch(transferBasket({id, price})) }}
                        >
                            +
                        </button>
                    </div>
                    :
                    <button
                        onClick={() => { 
                           
                            dispatch(transferBasket({id, price})) }}
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