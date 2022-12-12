import * as contants from '../constans';

const INITIAL_STATE = {
  defaultParameter: false,
  username: '',
  password: '',
};

export const app = (state = INITIAL_STATE, actionObj) => {
  switch (actionObj.type) {
    case contants.DEFAULT_ACTION:
      return {...state, defaultParameter: actionObj.payload};
      break;
    case contants.SET_APP:
      return {...state, [actionObj.key]: actionObj.value};
      break;
    default:
      return state;
      break;
  }
};
