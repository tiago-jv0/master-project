import { all, call } from 'redux-saga/effects';

import { shopSagas } from './sagas/shopSaga'
import { userSagas } from './sagas/userSagas';
import { cartSagas } from './sagas/cartSagas'

export default function* rootSaga(){
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])
}