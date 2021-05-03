import React from 'react';
import './menu-item.scss';

export const MenuItem = ({ title }) => (
    <div className="menu-item">
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)