import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from 'store/ducks/products';

import styles from './styles';

const TabCategorias = ({ categories, getProductsRequest, products }) => {
  const activeCategory = products.categoryFilter.id === undefined
    ? { id: 1 } : products.categoryFilter;

  return (
    <ScrollView horizontal>
      <View style={styles.containerMenu} >
        {categories.data.map(category => (
          <TouchableOpacity
            onPress={() => { getProductsRequest(category); }}
            key={category.id}
          >
            <Text style={[styles.item, category.id === activeCategory.id && styles.active]}>
              {category.title.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

TabCategorias.propTypes = {
  categories: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
    })),
    loading: PropTypes.bool,
  }).isRequired,
  products: PropTypes.shape({
    categoryFilter: PropTypes.shape({
      id: PropTypes.number,
    }),
    loading: PropTypes.bool,
  }).isRequired,
  getProductsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabCategorias);
