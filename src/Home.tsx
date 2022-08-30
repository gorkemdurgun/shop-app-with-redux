import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getProductList, getProductRequest} from '../redux/actions';
import color from '../constants/color';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Header />
      <ProductList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: color.backgroundFaded,
  },
});

export default Home;
