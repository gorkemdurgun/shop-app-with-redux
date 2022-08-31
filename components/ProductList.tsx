import {ActivityIndicator, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToBasket, getProductRequest} from '../redux/actions';
import ProductCard from './ProductCard';
import Loading from './Loading';

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductRequest());
  }, []);

  const {products, loading} = useSelector((state: any) => state.marketReducer);

  return loading ? (
    <Loading />
  ) : (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <ProductCard
          product={item}
          onPress={() => dispatch(addToBasket(item))}
        />
      )}
    />
  );
};

export default ProductList;
