import * as constants from '../constans';
import * as auth from '../../firebase/auth';
import * as products from '../../firebase/products';
import axios from 'axios';

export const setAccount = (key, value) => ({
  type: constants.SET_ACCOUNT,
  key,
  value,
});

export const loginUser = payload => async (dispatch, getState) => {
  //loginuser
  const {email, password} = getState().app;
  await auth.loginUserFb(email, password);
  const user = auth.getUserInfo();
  console.log('DATA LOGIN', user);

  dispatch({
    type: constants.LOGIN_FB,
    payload: user,
  });
};

export const createUser = payload => async (dispatch, getState) => {
  //createuser
  const {email, password} = getState().app;
  await auth.createUserFb(email, password);
  const user = auth.getUserInfo();
  dispatch({type: constants.CREATE_FB, payload: user}),
    console.log('CREATE USER', user);
};

export const logOutUser = payload => async dispatch => {
  //logout user
  dispatch({type: constants.LOGOUT_FB});
  try {
    await auth.logoutUserFb();
  } catch (error) {
    console.log('çıkış yapamadı', error);
  }
};

//* DB Firebase *//

export const requestAllProducts = payload => async (dispatch, getState) => {
  const {data, success} = await products.getAllApiProducts();

  if (success) {
    dispatch({
      type: constants.REQUEST_GET_ALL_PRODUCTS,
      payload: data,
    });
  }
};

export const addProductsFb = payload => async (dispatch, getState) => {
  //sepete eklemek için
  const user = auth.getUserInfo(user);
  const {data, success} = await products.addProductFb(payload, user);

  if (success) {
    dispatch({
      type: constants.ADD_PRODUCTS_FB,
      payload: data,
    });
  } else {
  }
};

export const getProductFb = payload => async dispatch => {
  const user = auth.getUserInfo(user);
  const {data, success} = await products.getAllProductsFb(user);
  if (success) {
    dispatch({
      type: constants.GET_PRODUCTS_FB,
      payload: data,
    });
  }
};

export const deleteFavoriFb = (key, value) => async (dispatch, getState) => {
  const user = auth.getUserInfo(user);
  const {data, success} = await products.deleteFavoritesFb(key, value, user);

  if (success) {
    dispatch({
      type: constants.DELETE_FAVORITES,
      payload: data,
    });
  } else {
  }
};

export const deleteProductFb = (key, value) => async dispatch => {
  const user = auth.getUserInfo(user);
  const {data, success} = await products.deleteProductFb(key, value, user);
  if (success) {
    dispatch({
      type: constants.DELETE_PRODUCTS,
      payload: data,
    });
  } else {
  }
};

export const setFavoritesFb = payload => async dispatch => {
  //set favori fb
  const user = auth.getUserInfo(user);
  const {data, success} = await products.setFavoritesFb(payload, user);
  if (success) {
    dispatch({type: constants.SET_FAVORI_FB, payload: data});
  } else {
  }
};

export const getFavoritesFb = payload => async dispatch => {
  const user = auth.getUserInfo(user);
  const {data, success} = await products.getAllFavoritesFb(user);
  if (success) {
    dispatch({type: constants.GET_FAVORI_FB, payload: data});
  } else {
  }
};

export const firebaseFavoriListener = payload => async (dispatch, getState) => {
  const user = auth.getUserInfo();

  const {off, data, success} = await products.firebaseFavoriListener(
    user,
    d => {
      dispatch(getFavoritesFb());
    },
  );

  if (success) {
    dispatch({
      type: constants.FIREBASE_FAVORITES_LISTENER,
      payload: off,
    });
  } else {
  }
};

export const firebaseProductsListener =
  payload => async (dispatch, getState) => {
    const user = auth.getUserInfo();
    const {off, data, success} = await products.firebaseProductListener(
      user,
      d => {
        //burada bir filtreleme yapılabilir, tüm datayı yeniden çekmek yerine sadece yeni değişiklikler belirlenip tek tek sadece yeni eklenen datalar çekilebilir
        //amaç çalışma mantığını anlamak olduğu için şimdilik göz ardı edebiliriz
        //firebase benzeri cloud çözümlerinde sunucu taraflı performansla ilgili bir endişemiz olmadığı için tekrarlı requestler problem oluşturmaz ancak ağ performansından dolayı verileri geç gelecektir
        //yine de realtime database yerine collections kullarak bunun önüne geçmek gerekir (koleksiyonlar, karmaşık sorgular oluşturmamızı kolaylaştırır ve daha çok seçenek sunar)

        //realtime database karmaşık veri ilişkileri olan, n-n ve ya 1-n gibi ilişkileri olan verilerle başa çıkmada yetersizdir

        //özellikle x kullanıcısına ait y verileri ya da y verisine sahip x kullanıcıları tarzı sorgular çok yavaş çalışır

        // burada kullanıcı verisi takip ediliyor ve yapılan her değişiklikte kullanıcıya ait tüm veri baştan çekiliyor
        dispatch(getProductFb());
      },
    );

    if (success) {
      dispatch({
        type: constants.FIREBASE_PRODUCTS_LISTENER,
        payload: off,
      });
    } else {
    }
  };

export const updateFavorite = value => async dispatch => {
  const {data, success} = await products.updateFavorites(value);

  if (success) {
    dispatch({
      type: constants.UPDATE_FAVORITES,
      payload: data,
    });
  } else {
  }
};
