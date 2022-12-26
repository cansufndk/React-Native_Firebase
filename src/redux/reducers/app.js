import * as contants from '../constans';

const INITIAL_STATE = {
  email: '',
  username: '',
  lastname: '',
  password: '',
  user: {},
  loginStatus: false,
  signupStatus: false,

  userInfo: {},

  products: {
    list: [],
    id: '',
  },
};

const app = (state = INITIAL_STATE, actionObj) => {
  // console.log('REDUCER ACTİONS', actionObj.payload);

  switch (actionObj.type) {
    case contants.SET_ACCOUNT:
      return {
        //kullanıcı bilgileri
        ...state,
        user: {...state.user, [actionObj.key]: actionObj.value},
        [actionObj.key]: actionObj.value,
      };

    case contants.REQUEST_SIGN_IN:
      return {
        //kullanıcı giriş yapması için
        ...state,
        password: '',
        signupStatus: true,
      };

    case contants.REQUEST_SIGN_UP:
      return {
        //kullanıcı üye olması için
        ...state,
        password: '',
        loginStatus: true,
      };

    case contants.REQUEST_SIGN_OUT:
      return {
        // kullanıcı çıkış yapması için
        ...state,
        username: '',
        lastname: '',
        email: '',
        signupStatus: false,
        loginStatus: false,
      };

    //Products

    case contants.REQUEST_GET_PRODUCTS_FB:
      return {
        ...state,
        fbProducts: payload,
      };

    case contants.REQUEST_GET_ALL_PRODUCTS: {
      //axios ile dataları çekiyoruz
      return {
        ...state,
        products: {
          list: actionObj.payload,
          id: actionObj.payload,
        },
      };
    }

    case contants.FIREBASE_PRODUCTS_LISTENER:
      return {
        ...state,
      };

    default:
      return state;
      break;
  }
};

export {app};
