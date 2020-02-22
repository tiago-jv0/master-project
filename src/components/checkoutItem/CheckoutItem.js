import React from 'react';

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    RemoveButtonContainer,
    QuantityContainer,
} from './CheckoutItemStyles';

import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/actions/cartActions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)} className="arrow">
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div onClick={() => addItem(cartItem)} className="arrow">
                    &#10095;
                </div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
