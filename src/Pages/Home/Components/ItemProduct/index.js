import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ItemProduct = ({ product, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress} >
    <Image source={{ uri: product.image }} style={styles.image} />
    <View style={styles.containerText}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.subTitle}>{product.brand}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>R${product.price}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

ItemProduct.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ItemProduct;
