import { all, takeLatest } from 'redux-saga/effects';

import { Types as ProductsTypes } from 'store/ducks/products';
import { Types as CategoriesTypes } from 'store/ducks/categories';

import { getProducts } from './products';
import { getCategories } from './categories';

export default function* rootSaga() {
  return yield all([
    takeLatest(ProductsTypes.GET_REQUEST, getProducts),
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
  ]);
}
