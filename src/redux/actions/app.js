import * as constants from '../constans';

export const defaultAction = payload => {
  return {
    type: constants.DEFAULT_ACTION,
    payload,
  };
};

export const setApp = (key, value) => ({type: constants.SET_APP, key, value}); //set işlemlerinin hepsi için

export const requestLogin = payload => {
  return async () => {
    //async işlemlerin oldugu yer

    return {
      type: constants.REQUEST_LOGIN,
      payload,
    };
  };
};
