import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../APIserviсe';
import './ProductList.css'

export default function ProductList({ name, products, index }) {
    let [productList, setProductList] = useState([]);
    let dispatch = useDispatch();
    let state = useSelector(state => state);

    useEffect(() => {
        getProduct(products).then(data => setProductList(data))
    }, [])

    let findProduct
    return (

        <div
            style={!(index % 2) ? { backgroundColor: '#F7F6F5' } : { backgroundColor: '#FFFF' }}
            className='category'
        >
           
            <h2 className='category-title' >{name}</h2>
            <div className='product-list-control'>
                {productList.map((item) =>
                    <Product key={item.id} {...item} product = {item} index = {index} />)}
            </div>
        </div>
    )
}
