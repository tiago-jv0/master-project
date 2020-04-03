import { all, takeLatest, call, put } from 'redux-saga/effects';

import ShopActionsTypes from '../types/shopTypes';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from '../actions/shopActions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');

        const snapshot = yield collectionRef.get();

        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);

        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionsTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}
