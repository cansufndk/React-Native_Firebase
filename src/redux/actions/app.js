import * as constants from '../constans';
import * as auth from '../../firebase/auth';

export const setAccount = (key, value) => ({
  type: constants.SET_ACCOUNT,
  key,
  value,
});

export const createUserFb = payload => async (dispatch, getState) => {
  const {email, password} = getState().app;
  console.log(email, password);
  dispatch({type: constants.REQUEST_SIGN_IN});

  try {
    await auth.createUserFb(email, password);
    const user = await auth.getUserInfo();
    console.log(user);

    dispatch({
      type: constants.REQUEST_SIGN_IN,
      payload: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userSignUp = payload => async (dispatch, getState) => {
  const {email, password} = getState().app;
  dispatch({type: constants.REQUEST_SIGN_UP});
  try {
    await auth.userSignUp(email, password);
    dispatch({
      type: constants.REQUEST_SIGN_UP,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userSignout = payload => async dispatch => {
  dispatch({type: constants.REQUEST_SIGN_OUT});
  try {
    await auth.userSignout();
  } catch (error) {
    console.log(error);
  }
};
