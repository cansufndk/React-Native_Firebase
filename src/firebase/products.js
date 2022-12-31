import database from '@react-native-firebase/database';
import endpoints from './endpoints';
import {get} from './service';

export const getAllApiProducts = async () => {
  let response = await get(endpoints.products);

  return response;
};

export const getAllProducts = (payload = async () => {
  //verileri çekmek için
  try {
    const response = (await database().ref('/Product').once('value')).val();
    return response;
  } catch (error) {
    console.log('FB Data Error', error);
  }
});

export const addProductFb = async (item, uid) => {
  //sepete eklemek için
  try {
    const ref = database().ref('/products').push();
    const key = ref.key;
    await ref.set(item);
    const fav = database().ref(`/user_products/${uid}`).push();
    await fav.set(key);
    const product = {key: fav.key};
    return {data: {product}, success: true};
  } catch (error) {
    console.log('Add Product Err', error);
  }
};

export const getProductsFb = async key => {
  try {
    const addProduct = database().ref('/products');
    const item = (await addProduct.child(key).once('value')).val();
    return {data: item, success: true};
  } catch (error) {
    console.log('Get Favori Err', error);
  }
};

export const getAllProductsFb = async uid => {
  try {
    let keys = (
      await database().ref(`/user_products/${uid}`).once('value')
    ).val();
    //keys = Object.values(keys);
    let productKey = keys && Object.keys(keys);
    let productVal = keys && Object.keys(keys);

    if (keys !== null) {
      keys = Object.values(keys);
    } else {
    }
    const productsFb = [];

    for (let i = 0; i < keys?.length; i++) {
      let product = (await getProductsFb(keys[i])).data;
      productsFb.push({
        ...product,
        key: productKey[i],
        value: productVal[i],
      });
    }
    return {data: productsFb, success: true};
  } catch (error) {
    console.log('get All data', error);
  }
};

export const setFavoritesFb = async (item, uid) => {
  //favorilere eklemek için
  try {
    const ref = database().ref('/favorites/').push();
    const key = ref.key;
    await ref.set(item);
    const fav = database().ref(`/user_favori/${uid}`).push();
    await fav.set(key);
    const favs = {key: fav.key};
    return {data: {favs}, success: true};
  } catch (error) {
    console.log('Set Favori Err', error);
  }
};

export const getFavoritesFb = async key => {
  try {
    const favsRef = database().ref('/favorites');
    const item = (await favsRef.child(key).once('value')).val();
    return {data: item, success: true};
  } catch (error) {
    console.log('Get Favori Fb', error);
  }
  return {data: null, success: false};
};

export const getAllFavoritesFb = async uid => {
  try {
    let keys = (
      await database().ref(`/user_favori/${uid}`).once('value')
    ).val();
    //keys = Object.values(keys);
    let favKey = keys && Object.keys(keys);
    let favVal = keys && Object.keys(keys);

    if (keys !== null) {
      keys = Object.values(keys);
    } else {
    }
    const favorites = [];

    for (let i = 0; i < keys.length; i++) {
      let favs = (await getFavoritesFb(keys[i])).data;
      favorites.push({
        ...favs,
        key: favKey[i],
        value: favVal[i],
      });
    }

    return {data: favorites, success: true};
  } catch (error) {
    console.log('Get All Favori Fb', error);
  }
  return {data: null, success: false};
};

export const firebaseFavoriListener = async (uid, callBack) => {
  if (global.firebaseFavoriListenerOff) {
    global.firebaseFavoriListenerOff();
  }

  try {
    const ref = database().ref(`/user_favori/${uid}`);
    ref.on('value', d => callBack(d.val()));

    global.firebaseFavoriListenerOff = ref.off;

    return {data: null, success: true};
  } catch (error) {
    console.error('Favori Listener Err', error);
  }

  return {data: null, success: false};
};

export const firebaseProductListener = async (uid, callback) => {
  if (global.firebaseProductListenerOff) {
    global.firebaseProductListenerOff();
  }

  try {
    const ref = database().ref(`/user_products/${uid}`);
    ref.on('value', d => callback(d.val()));

    global.firebaseProductListenerOff = ref.off;

    return {data: null, success: true};
  } catch (error) {
    console.error('Favori Listener Err', error);
  }
  return {data: null, success: false};
};

export const deleteProductFb = async (key, value, uid) => {
  try {
    const userP = database().ref(`/user_products/${uid}/${key}`);
    await userP.remove();

    const product = database().ref(`/products/${value}`);
    await product.remove();

    return {data: {}, success: true};
  } catch (error) {
    console.error('Delete Err', error);
  }
};
