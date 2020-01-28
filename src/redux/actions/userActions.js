import {UserActionTypes} from '../types/userTypes'

export const setCurrentUser = (user) => {
    return {
        type : UserActionTypes.SET_CURRENT_USER,
        payload : user
    }
}