import React from 'react';
import SignIn from '../sign-in/SignIn';
import './form-input.scss';

export const FormInput = ({ handleChange, label, ...restProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...restProps} />
        {
            label ?
            (<label className={`${restProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>) :
            null
        }
    </div>
);