import { cartActionTypes } from '../types/cartTypes';
import { addItemToCart } from '../utils/cardUtils';

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
        default:
            return state;
    }
};

export default cartReducer;
