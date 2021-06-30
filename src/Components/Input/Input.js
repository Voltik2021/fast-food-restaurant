import React from 'react';
import './Input.css';


export default function Input({input, meta, ...props}) {
    return (
        <div style = {{display: 'inline-block'}}>                        
            <input {...props} {...input} type = 'text' className={'delivery-input' + (input.name === 'house'?' delivery-input-correction':'')}/>
            <div className = 'tooltip-control'>
                {meta.touched && meta.error && <span className = 'tooltip'>{meta.error}</span>}
            </div>
            
        </div>
    )
}