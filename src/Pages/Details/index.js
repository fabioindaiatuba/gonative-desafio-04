import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from 'store/ducks/cart';

import styles from './styles';

const Details = ({ navigation, addItem }) => {
  const { product } = navigation.state.params;
  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
        />


        <View style={styles.containerText}>
          <View style={styles.left}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.subTitle}>{product.brand}</Text>
          </View>

          <View style={styles.right}>
            <Text style={styles.price}>R${product.price}</Text>
          </View>
        </View>

        <View style={styles.footer} >
          <TouchableOpacity
            style={styles.btn}
            onPress={() => addItem({ ...product, qty: 1 })}
          >
            <Text style={styles.btnText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

Details.navigationOptions = {
  title: 'Detalhes',
  tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor} />,
};

Details.propTypes = {
  navigation: PropTypes.shape().isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
