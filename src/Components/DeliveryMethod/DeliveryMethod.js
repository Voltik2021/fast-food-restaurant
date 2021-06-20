import React from 'react';
import './DeliveryMethod.css';
import {useDispatch, useSelector} from 'react-redux';
import {changeDelivery} from '../../redux/action';


export default function DeliveryMethod() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    return (
        <div className = 'bottom-header'>
            {state.flagDeliveryMethod?
                <div>
                    <div>
                        <h1 className = 'delivery-title-control'>Доставка г.Москва</h1>
                    </div>
                    <form id = 'buttonBasket'>
                        <label className ='delivery-lable-control'>
                            Улица
                            <input className ='delivery-input' type ='text'/>
                        </label>
                        <label  className ='delivery-lable-control'>
                            Дом
                            <input required="required" className ='delivery-input' type ='text'/>
                        </label>
                    </form>
                </div>
                :
                <div>
                    <h1 className = 'delivery-title-control'>Выбирете кафе</h1>
                    <select className = 'delivery-select'>
                        <option>Юго-запад</option>
                        <option>Северо-восток</option>
                    </select>
                </div>
            }

           
            <div>
                <button 
                className = {state.flagDeliveryMethod?'color-button header-button-control':'header-button-control'}
                onClick = {() => dispatch(changeDelivery(true))}
                >
                     Доставка
                </button>
                <button 
                className = {!state.flagDeliveryMethod?'color-button header-button-control':'header-button-control'}
                onClick = {() => dispatch(changeDelivery(false))}
                >
                    Самовывоз
                </button>
            </div>
        </div>
    )
}