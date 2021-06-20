import React from 'react'
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css'



export default function App () {
   
    return (
        <div className = 'main-page'>
            <Header/>            
            <Main/>
            {/* <Footer/> */}
        </div>
    )
}