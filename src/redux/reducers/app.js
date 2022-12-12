import * as contants from '../constans';

const INITIAL_STATE = {
  defaultParameter: false,
};

const app = (state = INITIAL_STATE, actionObj) => {
  switch (actionObj.type) {
    case contants.DEFAULT_ACTION:
      return {...state, defaultParameter: actionObj.payload};
      break;

    default:
      return state;
      break;
  }
};
