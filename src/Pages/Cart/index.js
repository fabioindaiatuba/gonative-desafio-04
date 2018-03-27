import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from 'store/ducks/cart';

import ItemCart from 'Pages/Cart/Components/ItemCart';
import styles from './styles';

const Cart = ({ cart, removeItem }) => (
  <View style={styles.container}>
    <FlatList
      style={styles.listItems}
      data={cart.data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) =>
        <ItemCart itemCart={item} onPress={() => removeItem(item.id)} />
      }
    />
    <View style={styles.footer}>
      <Text style={styles.footerTitle}>SubTotal</Text>
      <Text style={styles.footerTotal}>R${cart.subTotal}</Text>
    </View>
  </View>
);

Cart.navigationOptions = {
  title: 'Carrinho',
  tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={24} color={tintColor} />,
};

Cart.propTypes = {
  cart: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
    })),
    subTotal: PropTypes.number,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
