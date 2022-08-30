import {take, call, put, Effect, all, fork} from 'redux-saga/effects';
import {getProductsService} from '../services/getProducts';
import {getProductList, GET_PRODUCT_REQUEST} from './actions';

export function* getProducts(): Generator<Effect, void, any> {
  while (true) {
    try {
      yield take(GET_PRODUCT_REQUEST);
      const {data} = yield call(getProductsService);
      yield put(getProductList(data));
    } catch (error) {
      console.error(error);
    }
  }
}

export default function* rootSaga() {
  yield all([fork(getProducts)]);
}
