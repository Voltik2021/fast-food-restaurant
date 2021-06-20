import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/Components/App/App';
import { Provider } from 'react-redux';
import  store from './src/redux/store';
const root = document.querySelector('#root');


ReactDOM.render(
    <Provider store = {store} >
        <App/>
    </Provider> , root);
