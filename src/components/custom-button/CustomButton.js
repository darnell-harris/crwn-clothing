import React from 'react';
import './custom-button.scss';

export const CustomButton = ({ children, ...restProps }) => (
    <button className="custom-button" {...restProps}>
        {children}
    </button>
)