import {FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import BasketCard from '../components/BasketCard';
import {removeFromBasket} from '../redux/actions';

const BasketList = () => {
  const dispatch = useDispatch();

  const {basket} = useSelector((state: any) => state.marketReducer);

  return (
    <FlatList
      data={basket}
      renderItem={({item}) => (
        <BasketCard
          product={item}
          onPress={() => dispatch(removeFromBasket(item))}
        />
      )}
    />
  );
};

export default BasketList;
