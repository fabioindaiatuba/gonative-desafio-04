import { call, put } from 'redux-saga/effects';

import api from 'Services/api';

import { Creators as CategoriesActions } from 'store/ducks/categories';

export function* getCategories() {
  try {
    const response = yield call(api.get, '/categories');

    yield put(CategoriesActions.getCategoriesSuccess(response.data));
  } catch (err) {
    yield put(CategoriesActions.getCategoriesFailure('Erro ao buscar categorias da API.'));
  }
}
