import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'products/GET_REQUEST',
  GET_SUCCESS: 'products/GET_SUCCESS',
  GET_FAILURE: 'products/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: null,
  categoryFilter: {},
});

export default function products(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, categoryFilter: action.payload.categoryFilter, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  getProductsRequest: categoryFilter => ({
    type: Types.GET_REQUEST,
    payload: { categoryFilter },
  }),
  getProductsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  getProductsFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
};
