import ShopActionTypes from '../types/shopTypes';

export const updateCollections = (collectionsMap) => ({
    type : ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})