import React from 'react';


import { toggleCartHidden } from '../../redux/actions/cartActions';
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {CartIconContainer , ShoppingIcon , ItemCountContainer} from './CartIconStyles'
const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
