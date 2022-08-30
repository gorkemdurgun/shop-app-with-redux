import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {IProduct} from '../types/ProductTypes';
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../constants/color';

function ProductCard({product, onPress}: IProduct) {
  return (
    <View style={styles.card}>
      <View style={styles.infoView}>
        <Text>{product.title}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>{product.price}$</Text>
          <Icon name="shopping-basket" size={24} color={color.primaryDark} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{uri: product.image}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 150,
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },
  infoView: {
    flex: 2,
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF123',
    padding: 10,
    borderRadius: 10,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: '80%',
    height: '80%',
  },
});

export default ProductCard;
