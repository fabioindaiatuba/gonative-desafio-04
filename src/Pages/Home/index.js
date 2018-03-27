import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';
import { Creators as ProductsActions } from 'store/ducks/products';

import ItemProduct from 'Pages/Home/Components/ItemProduct';
import TabCategorias from 'Pages/Home/Components/TabCategorias';

import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor} />,
  };

  static propTypes = {
    categories: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
    products: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    actionCategories: PropTypes.shape({
      getCategoriesRequest: PropTypes.func,
    }).isRequired,
    actionProducts: PropTypes.shape({
      getProductsRequest: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    this.props.actionCategories.getCategoriesRequest();

    this.props.actionProducts.getProductsRequest({ id: 1 });
  }

  render() {
    return (
      <View style={styles.container} >
        { this.props.categories.loading
          ? <ActivityIndicator size="small" color="#999" />
          : <TabCategorias style={styles.tabCategory} />
        }
        { this.props.products.loading
          ? <ActivityIndicator size="small" style={styles.loading} color="#999" />
          : <FlatList
            style={styles.listItems}
            data={this.props.products.data}
            keyExtractor={product => String(product.id)}
            numColumns={2}
            columnWrapperStyle={styles.columnContainer}
            renderItem={({ item }) =>
              <ItemProduct product={item} onPress={() => this.props.navigation.navigate('Details', { product: item })} />
            }
          />
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  actionCategories: bindActionCreators(CategoriesActions, dispatch),
  actionProducts: bindActionCreators(ProductsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
