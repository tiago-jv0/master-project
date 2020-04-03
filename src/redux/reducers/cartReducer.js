import { cartActionTypes } from '../types/cartTypes';

import { addItemToCart, removeItemFromCart } from '../utils/cartUtils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return { ...state, hidden: !state.hidden };
        case cartActionTypes.ADD_ITEM:
            return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, payload),
            };
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter((cartItem) => cartItem.id !== payload.id) };
        case cartActionTypes.CLEAR_CART:
            return { ...state, cartItems: [] };
        default:
            return state;
    }
};

export default cartReducer;
