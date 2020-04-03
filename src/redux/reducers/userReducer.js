import UserActionTypes from '../types/userTypes';

const INITIAL_STATE = {
    currentUser: '',
    error: null,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload,
                error: null,
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null,
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: payload,
            };

        default:
            return state;
    }
};

export default userReducer;
