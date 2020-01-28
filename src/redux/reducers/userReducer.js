import {UserActionTypes} from '../types/userTypes'

const INITIAL_STATE = {
    currentUser: '',
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };

        default:
            return state;
    }
};

export default userReducer;
