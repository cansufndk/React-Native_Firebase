import {constants} from 'buffer';
import * as contants from '../constans';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: {},
  loginStatus: false,
  createStatus: false,

  favorites: [],
  selectProduct: [],

  products: {
    list: [],
    limit: 0,
    total: 0,
    skip: 0,
  },
};

const app = (state = INITIAL_STATE, actionObj) => {
  switch (actionObj.type) {
    case contants.SET_ACCOUNT:
      return {
        //kullanıcı bilgileri
        ...state,
        user: {
          ...state.user,
          [actionObj.key]: actionObj.value,
        },
        [actionObj.key]: actionObj.value,
      };

    case contants.LOGIN_FB:
      return {
        //kullanıcı giriş yapması için
        ...state,
        user: actionObj.payload.user,
        loginStatus: true,
        createStatus: true,
      };

    case contants.CREATE_FB:
      return {
        //kullanıcı üye olması için
        ...state,
        user: actionObj.payload.user,
        password: undefined,
        createStatus: true,
        loginStatus: false,
      };

    case contants.LOGOUT_FB:
      return {
        // kullanıcı çıkış yapması için
        ...state,
        email: undefined,
        password: undefined,
        createStatus: false,
        loginStatus: false,
      };

    //Products

    case contants.GET_FAVORI_FB:
      return {
        ...state,
        favorites: actionObj.payload,
      };

    case contants.GET_PRODUCTS_FB:
      return {
        ...state,
        productsFb: actionObj.payload,
      };

    case contants.DELETE_PRODUCTS:
      return {};
    case contants.REQUEST_GET_ALL_PRODUCTS: {
      //axios ile dataları çekiyoruz
      return {
        ...state,
        products: {
          limit: actionObj.payload.limit,
          total: actionObj.payload.total,
          skip: actionObj.payload.skip,
          list: actionObj.payload.products,
        },
      };
    }

    case contants.FIREBASE_PRODUCTS_LISTENER:
      return {
        ...state,
      };

    case contants.FIREBASE_FAVORITES_LISTENER:
      return {
        ...state,
      };

    default:
      return state;
      break;
  }
};

export {app};
