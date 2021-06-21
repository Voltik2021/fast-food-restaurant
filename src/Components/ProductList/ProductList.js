import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../APIserviсe';
import {transferBasket} from '../../redux/action'
import './ProductList.css'

export default function ProductList({ name, products, index}) {
    let [productList, setProductList] = useState([]);    
    let dispatch = useDispatch();
    let state = useSelector(state => state);

    useEffect(() => {
        getProduct(products).then(data => setProductList(data))
    }, [])

    return (
        
        <div 
        style = {!(index%2)?{backgroundColor: '#F7F6F5'}:{backgroundColor: '#FFFF'}}
        className = 'category'
        >            
        {console.log(state.productQuantities)}
            <h2 className ='category-title' >{name}</h2>
            <div className='product-list-control'>
                {productList.map((item) =>
                    <div
                     key={item.id} 
                     className= {!(index%2)?'product product-backgaund-white':'product product-backgaund-gray'}
                     >

                        <img src = {item.img}/>
                        <div className = 'wrapper-button-product'>
                            {state.valueBascket?<div><button>-</button>{state.productQuantities}<button>+</button></div> 
                            : 
                            <button 
                            onClick = {() => {dispatch(transferBasket(item.price))}}
                            className = 'button-product' >
                                +
                            </button>
                            }                           
                        </div>
                        <p>{item.name}</p> 
                        <p className = 'price'>{item.price}</p>
                    </div>)}
            </div>
        </div>
    )
}
