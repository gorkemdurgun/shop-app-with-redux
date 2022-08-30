import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {IProduct} from '../types/ProductTypes';
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../constants/color';

function BasketCard({product, onPress}: IProduct) {
  return (
    <View style={styles.card}>
      <View style={styles.leftView}>
        <Image style={styles.image} source={{uri: product.image}} />
        <Text>{product.title}</Text>
      </View>
      <View style={styles.rightView}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>{product.price}$</Text>
          <Icon name="minus" size={24} color={color.redColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.backgroundLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },
  leftView: {
    flex: 4,
    justifyContent: 'space-between',
  },
  rightView: {
    flex: 1,
  },
  image: {
    width: '80%',
    height: '80%',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.backgroundFaded,
    padding: 10,
    borderRadius: 10,
  },
});

export default BasketCard;
