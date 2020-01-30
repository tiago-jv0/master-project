import React from 'react';
import './collectionItem.scss';

import CustomButtom from '../customButton/CustomButton'

const CollectionItem = ({ id, name, price, imageUrl }) => {
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>

            <CustomButtom inverted>ADD TO CART</CustomButtom>
            
        </div>
    );
};

export default CollectionItem;
