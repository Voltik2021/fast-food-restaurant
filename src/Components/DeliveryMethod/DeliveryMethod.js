import React from 'react';
import './DeliveryMethod.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeDelivery, acceptOrder, selectPickUpService } from '../../redux/action';
import { Form, Field } from 'react-final-form';
import Input from '../Input/Input';


export default function DeliveryMethod() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();   
    

    return (
        <div className='bottom-header'>
            {state.flagDeliveryMethod ?
                <div>
                   
                    <div>
                        <h1 className='delivery-title-control'>Доставка г.Москва</h1>
                    </div>
                    <Form
                        onSubmit = {value => dispatch(acceptOrder(value, state.listProductsInBasketForDelivery))}
                        validate = {value => {
                            const errors = {}
                            if (!value.house) {
                                errors.house = 'Нужно заполнить для оформления доставки'
                                return errors
                              }      

                            if (!value.street) {
                                errors.street = 'Нужно заполнить для оформления доставки'
                                return errors
                              }
                                                  
                              return errors
                           
                        } }
                        
                        render = {({handleSubmit, form, valid}) => (
                        <form    
                            className = 'delivery-form-control'                   
                            onSubmit = {e => {handleSubmit(e); valid && form.resetFieldState('house'); valid && form.resetFieldState('street'); valid && form.reset()}}
                            id='buttonBasket'
                        >
                           
                            <label className='delivery-lable-control'>
                                Улица
                                <Field                                                              
                                    name = 'street'  
                                    component = {Input}                                    
                                />
                            </label>
                            <label className='delivery-lable-control'>
                                Дом
                                <Field                                     
                                    name = 'house' 
                                    component = {Input}                                  
                                
                                />
                            </label>
                        </form>)}
                        
                    />
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