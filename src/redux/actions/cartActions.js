import { cartActionTypes } from '../types/cartTypes';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
    payload: null,
});

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item,
});
