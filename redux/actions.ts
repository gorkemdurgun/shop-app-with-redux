export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

export type ActionTypes =
  | {type: typeof GET_PRODUCT_REQUEST}
  | {type: typeof GET_PRODUCT_LIST; payload: []}
  | {type: typeof ADD_TO_BASKET; payload: {}}
  | {type: typeof REMOVE_FROM_BASKET; payload: {}};

export const getProductRequest = (): ActionTypes => ({
  type: GET_PRODUCT_REQUEST,
});

export const getProductList = (productList: []): ActionTypes => ({
  type: GET_PRODUCT_LIST,
  payload: productList,
});

export const addToBasket = (item: {}): ActionTypes => ({
  type: ADD_TO_BASKET,
  payload: item,
});

export const removeFromBasket = (item: {}): ActionTypes => ({
  type: REMOVE_FROM_BASKET,
  payload: item,
});
