import ShopActionTypes from '../types/shopTypes';

const INITIAL_STATE = {
    collections : null
}

const shopDataReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return { ...state, collections: payload };

        default:
            return state;
    }
};

export default shopDataReducer;
