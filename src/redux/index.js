import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {configureStore} from '@reduxjs/toolkit';
import {app} from '../redux/reducers';

const store = configureStore({
  reducer: combineReducers({app}),
  middleware: [thunk],
});

export default store;
