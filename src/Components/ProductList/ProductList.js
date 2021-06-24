import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../APIserviсe';
import './ProductList.css'

export default function ProductList({ name, products, index, id }) {
    let [productList, setProductList] = useState([]);
    let [filteredProductList, setFilteredProductList] = useState([])
    let dispatch = useDispatch();
    let state = useSelector(state => state);

    useEffect(() => {
        
            getProduct(products).then(data => {
                let filteredData = data.filter(item => item.delivery === true)    
                    setFilteredProductList(filteredData) 
                    setProductList(data)})      
         

    }, [])

    
    let findProduct
    return (

        <div
            id = {String(id)}
            style={!(index % 2) ? { backgroundColor: '#F7F6F5' } : { backgroundColor: '#FFFF' }}
            className='category'
        >
         
            <h2 className='category-title' >{name}</h2>
            <div className='product-list-control'>
                {(!state.flagDeliveryMethod?productList:filteredProductList).map((item) =>
                    <Product key={item.id} {...item}  index = {index} />)}
            </div>
        </div>
    )
}
