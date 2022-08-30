import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import {PersistConfig} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import createSagaMiddleware from 'redux-saga';
import {marketReducer} from './reducers';
import rootSaga from './sagas';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['basket'],
};

const rootReducer = combineReducers({
  marketReducer: persistReducer(persistConfig, marketReducer),
});

const saga = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootSaga);

export const persistor = persistStore(store);
export default store;
