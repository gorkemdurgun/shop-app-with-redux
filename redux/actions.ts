export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';

export type ActionTypes =
  | {type: typeof GET_PRODUCT_REQUEST}
  | {type: typeof GET_PRODUCT_LIST; payload: []}
  | {type: typeof ADD_TO_BASKET; payload: {}};

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
