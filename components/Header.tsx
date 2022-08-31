import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import color from '../constants/color';
import {useSelector} from 'react-redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TabParamList } from '../Router';

type HeaderNavigationProp = NavigationProp<TabParamList , 'Shop'>;

const Header = () => {
  const navigation = useNavigation<HeaderNavigationProp>();

  const {basket} = useSelector((state: any) => state.marketReducer);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
        <Text style={styles.headerText}>{basket.length} products added...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: color.backgroundFaded,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: color.primaryDark,
    height: 60,
    paddingHorizontal: 20,
  },
  headerText: {
    color: color.backgroundLight,
    fontSize: 14,
  },
});

export default Header;
