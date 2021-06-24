import React from 'react';
import './DeliveryMethod.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeDelivery, acceptOrder, selectPickUpService } from '../../redux/action';


export default function DeliveryMethod() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    console.log(state.listProductsInBasket)
    let change = (e) => {
        e.target.setCustomValidity('Нужно заполнить для оформления доставки')
       
    }

    return (
        <div className='bottom-header'>
            {state.flagDeliveryMethod ?
                <div>
                    <div>
                        <h1 className='delivery-title-control'>Доставка г.Москва</h1>
                    </div>
                    <form                       
                        onSubmit = {(e) => dispatch(acceptOrder(e, state.listProductsInBasket))}
                        id='buttonBasket'
                    >
                        <label className='delivery-lable-control'>
                            Улица
                            <input name = 'street' required onInvalid = {(e) => (change(e))} className='delivery-input' type='text' />
                        </label>
                        <label className='delivery-lable-control'>
                            Дом
                            <input  name = 'house' required="required" className='delivery-input' type='text' />
                        </label>
                    </form>
                </div>
                :
                <div>
                    <h1 className='delivery-title-control'>Выбирете кафе</h1>
                    <select                        
                        onChange = {(e) => dispatch(selectPickUpService(e.target.value))}
                        className='delivery-select'
                    >
                        <option value = 'Юго-запад'>Юго-запад</option>
                        <option value = 'Северо-восток'>Северо-восток</option>
                    </select>
                </div>
            }


            <div>
                <button
                    className={state.flagDeliveryMethod ? 'color-button header-button-control' : 'header-button-control'}
                    onClick={() => dispatch(changeDelivery(true))}
                >
                    Доставка
                </button>
                <button
                    className={!state.flagDeliveryMethod ? 'color-button header-button-control' : 'header-button-control'}
                    onClick={() => dispatch(changeDelivery(false))}
                >
                    Самовывоз
                </button>
            </div>
        </div>
    )
}