import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'styles';

import styles from './styles';

const ItemCart = ({ itemCart, onPress, editQty }) => (
  <View style={styles.container}>
    <Image source={{ uri: itemCart.image }} style={styles.image} />
    <View style={styles.containerText}>
      <Text style={styles.title}>{itemCart.name}</Text>
      <Text style={styles.subTitle}>{itemCart.brand}</Text>
      <Text style={styles.price}>R${itemCart.price}</Text>
    </View>
    <View style={styles.controls} >
      <TextInput
        style={styles.quantidadeInput}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="0"
        placeholderTextColor={colors.light}
        underlineColorAndroid="transparent"
        keyboardType="numeric"
        value={String(itemCart.qty)}
        onChangeText={text => editQty(Number(text), itemCart)}
      />
      <TouchableOpacity onPress={onPress}>
        <Icon name="close" size={16} color={colors.regular} />
      </TouchableOpacity>
    </View>
  </View>
);

ItemCart.propTypes = {
  itemCart: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  editQty: PropTypes.func.isRequired,
};

export default ItemCart;
