import * as contants from '../constans';

const INITIAL_STATE = {
  email: '',
  username: '',
  lastname: '',
  password: '',
  user: {},
  loginStatus: false,
  signupStatus: false,
};

const app = (state = INITIAL_STATE, actionObj) => {
  switch (actionObj.type) {
    case contants.SET_ACCOUNT:
      return {
        ...state,
        user: {...state.user, [actionObj.key]: actionObj.value},
        [actionObj.key]: actionObj.value,
      };

    case contants.REQUEST_SIGN_IN:
      return {
        ...state,
        password: '',
        signupStatus: true,
      };

    case contants.REQUEST_SIGN_UP:
      return {
        ...state,
        password: '',
        loginStatus: true,
      };

    case contants.REQUEST_SIGN_OUT:
      return {
        ...state,
        username: '',
        lastname: '',
        email: '',
        signupStatus: false,
        loginStatus: false,
      };

    default:
      return state;
      break;
  }
};

export {app};
