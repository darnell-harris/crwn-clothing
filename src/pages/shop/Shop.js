import React, { useState } from 'react';
import SHOP_DATA from './shopData';
import { CollectionPreview } from '../../components/collection-preview/CollectionPreview';

export const Shop = () => {
    const [collections, useCollections] = useState(SHOP_DATA);

    return(
        <div className="shop-page">
            {collections.map(({ id, ...restProps }) => (
                <CollectionPreview key={id} {...restProps} />
            ))}
        </div>
    );
}