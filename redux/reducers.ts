import {ADD_TO_BASKET, GET_PRODUCT_LIST, GET_PRODUCT_REQUEST} from './actions';

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
      console.log(action.payload);

      return {...state, basket: [...state.basket, action.payload]};
    default:
      return {...state};
  }
}
