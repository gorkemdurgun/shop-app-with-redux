import {
  ADD_TO_BASKET,
  GET_PRODUCT_LIST,
  GET_PRODUCT_REQUEST,
  REMOVE_FROM_BASKET,
} from './actions';
import {IProduct} from '../types/ProductTypes';

const initialState = {
  products: [],
  basket: [],
};

export function marketReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {...state};
    case GET_PRODUCT_LIST:
      return {...state, products: action.payload};
    case ADD_TO_BASKET:
      return {...state, basket: [...state.basket, action.payload]};
    case REMOVE_FROM_BASKET:
      const {id} = action.payload;
      return {
        ...state,
        basket: state.basket.filter((item: any) => item.id !== id),
      };
    default:
      return {...state};
  }
}
