import * as constants from '../constans';
import * as auth from '../../firebase/auth';
import * as products from '../../firebase/products';

export const setAccount = (key, value) => ({
  type: constants.SET_ACCOUNT,
  key,
  value,
});

export const userSignUp = payload => async (dispatch, getState) => {
  //loginuser
  const {email, password} = getState().app;
  dispatch({type: constants.REQUEST_SIGN_IN});

  try {
    await auth.userSignUp(email, password);
    const user = await auth.getUserInfo();
    dispatch({
      type: constants.REQUEST_SIGN_IN,
      payload: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createUserFb = payload => async (dispatch, getState) => {
  //createuser
  const {email, password} = getState().app;
  dispatch({type: constants.REQUEST_SIGN_UP});
  try {
    await auth.createUserFb(email, password);
    dispatch({
      type: constants.REQUEST_SIGN_UP,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userSignout = payload => async dispatch => {
  //logout user
  dispatch({type: constants.REQUEST_SIGN_OUT});
  try {
    await auth.userSignout();
  } catch (error) {
    console.log(error);
  }
};

//* DB Firebase *//

export const requestAllProducts = payload => async (dispatch, getState) => {
  //const {response} = await products.getAllProducts();
  try {
    const response = await products.getAllProducts(response);
    //console.log(payload);
    //console.log('RESPONSE', response);
    //await products.getAllProducts();
    dispatch({type: constants.REQUEST_GET_ALL_PRODUCTS, payload: response});
    //console.log('RESPONSE', response);
  } catch (error) {
    console.log('DATA ERROR', error);
  }
  /*if (response) {
    dispatch({
      type: constants.REQUEST_GET_ALL_PRODUCTS,
      payload: response,
    });
  } else {
    console.log('data yok');
  }*/
  //console.log('Actions DAta', response);
};

export const requestAddProductsToFirebase =
  payload => async (dispatch, getState) => {
    const {user} = getState().app;

    const {data, success} = await products.addProductToFirebase(
      payload,
      user.user.uid,
    );

    if (success) {
      dispatch({
        type: constants.REQUEST_ADD_PRODUCT_FB,
        payload: data,
      });
    } else {
    }
  };

export const requestGetAllProductsFromFirebase =
  payload => async (dispatch, getState) => {
    const {user} = getState().app;

    const {data, success} = await products.getAllPRoductsFromFirebase(
      user.user.uid,
    );
    console.log(user);

    if (success) {
      dispatch({
        type: constants.REQUEST_GET_PRODUCTS_FB,
        payload: data,
      });
    } else {
    }
  };

export const firebaseProductsListener =
  payload => async (dispatch, getState) => {
    const {user} = getState().app;

    const {off, data, success} = await products.firebaseProductsListener(
      user.user.uid,
      d => {
        dispatch(requestAddProductsToFirebase());
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
