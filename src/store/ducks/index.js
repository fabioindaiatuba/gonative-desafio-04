import { combineReducers } from 'redux';

import products from './products';
import categories from './categories';
import cart from './cart';

export default combineReducers({
  // empty: (state = {}) => state,
  products, categories, cart
});
