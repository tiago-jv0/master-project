import React from 'react';
import { CartItemContainer, CartItemImg, CartItemName, ItemDetailsContainer, CartItemPrice } from './CartItemStyles';
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <CartItemImg src={imageUrl} alt="item" />
            <ItemDetailsContainer>
                <CartItemName>{name}</CartItemName>
                <CartItemPrice>
                    {quantity} * ${price}
                </CartItemPrice>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
};

export default CartItem;
