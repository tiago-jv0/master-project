import React from 'react';
import './collectionItem.scss';

import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cartActions';

import CustomButtom from '../customButton/CustomButton';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>

            <CustomButtom onClick={() => addItem(item)} inverted>
                ADD TO CART
            </CustomButtom>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
