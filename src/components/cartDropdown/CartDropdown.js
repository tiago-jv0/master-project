import React from 'react';
import './CartDropdown.scss';

import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItem/CartItem';

import {selectCartItems} from '../../redux/selectors/cartSelectors'

import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem}></CartItem>
                ))}
            </div>
            <CustomButton> GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
