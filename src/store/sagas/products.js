import { call, put } from 'redux-saga/effects';

import api from 'Services/api';

import { Creators as ProductsActions } from 'store/ducks/products';

export function* getProducts(action) {
  try {
    const response = yield call(api.get, `/category_products/${action.payload.categoryFilter.id}`);

    yield put(ProductsActions.getProductsSuccess(response.data.products));
  } catch (err) {
    yield put(ProductsActions.getProductsFailure('Erro ao buscar produtos da API.'));
  }
}
