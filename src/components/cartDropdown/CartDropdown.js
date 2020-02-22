import React from 'react';

import CartItem from '../cartItem/CartItem';

import { selectCartItems } from '../../redux/selectors/cartSelectors';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cartActions';
import { withRouter } from 'react-router-dom';

import {
    CartDropdownContainer,
    CartItemsContainer,
    CartDropdownButton,
    EmptyMessageContainer,
} from './CartDropdownStyles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
                ) : (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )}
            </CartItemsContainer>
            <CartDropdownButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                {' '}
                GO TO CHECKOUT
            </CartDropdownButton>
        </CartDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
