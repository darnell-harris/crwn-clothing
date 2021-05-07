import React from 'react';
import './collection-preview.scss';
import { CollectionItem } from '../collection-item/CollectionItem';

export const CollectionPreview = ({ title, items }) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, i) => i < 4)
                    .map(({ id, ...restProps }) => (
                        <CollectionItem key={id} {...restProps} />
                ))}
            </div>
        </div>
    );
}