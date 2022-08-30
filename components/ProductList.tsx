import {FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToBasket, getProductRequest} from '../redux/actions';
import ProductCard from './ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductRequest());
  }, []);

  const {products} = useSelector((state: any) => state.marketReducer);

  return (
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
