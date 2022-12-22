import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {app} from '../redux/reducers';
import {REDUX_PERSIST_STORAGE} from '../utils/reduxPersisrStore';

const store = configureStore({
  reducer: persistReducer(
    {
      key: 'root',
      debug: false,
      blacklist: [],
      whitelist: ['app'],
      storage: REDUX_PERSIST_STORAGE,
      stateReconciler: autoMergeLevel2,
    },
    combineReducers({app}),
  ),
  middleware: [thunk],
});

export default store;
