import auth from '@react-native-firebase/auth';

import endpoints from '~/api/endpoints';
import {post} from './service';

export const login = async (username, password) => {
  let responseObj = await post(
    endpoints.login,
    JSON.stringify({username, password}),
  );

  //response ile ilgili işlemler

  if (responseObj.success) {
    global.token = responseObj.data.token;
  }

  return responseObj;
};

export const createUserWithFB = async (email, password) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    return {data: response, success: true};
  } catch (error) {
    console.error('createUserWithFB', error);
  }

  return {data: null, success: false};
};

export const loginUserWithFB = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);

    return {data: response, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false};
};
