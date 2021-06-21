import React, {useEffect, useState} from 'react';
import StickyPanel from '../StickyPanel/StickyPanel';
import ProductList from '../ProductList/ProductList';
import {getArrCategory} from '../../APIserviсe';

export default function Main() {
    let [arrCategory, setArrCategory] = useState([])
    useEffect(()=>{
        getArrCategory().then(data => setArrCategory(data))
    },[])
    return (
        <div>
            <StickyPanel/>
            {arrCategory.map((item, index) => <ProductList key = {item.id} {...item} index = {index}/>)}            

        </div>
    )
}