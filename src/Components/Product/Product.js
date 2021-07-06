import React from 'react';
import ButtonForPurchase from '../ButtonForPurchase/ButtonForPurchase'
import ButtonPluse from '../ButtonPluse/ButtonPluse';
import { useSelector } from 'react-redux';
import './Product.css'

export default function Product(props) {
    let { name, id, price, img, index } = props    
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
            <img src={img} alt={name} />
            <div className='wrapper-button-product'>

                {state.flagDeliveryMethod && quetityProductForDelivery || !state.flagDeliveryMethod && quetityProduct ?
                    <ButtonForPurchase {...props} quetityProduct={quetityProduct} quetityProductForDelivery={quetityProductForDelivery} />
                    :
                    <ButtonPluse {...props}/>
                }
            </div>
            <p>{name}</p>
            <p className='price'>{price}</p>
        </div>

    )
}