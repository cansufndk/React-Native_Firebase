import database from '@react-native-firebase/database';
import axios from 'axios';

export const getAllProducts = (payload = async () => {
  try {
    let response = await (
      await axios.get('https://fakestoreapi.com/products')
    ).data;
    return response;
    //console.log('Products Fetch', response);
  } catch (error) {}
});
//console.log('response obj', responseObj);

/*export const getAllProductsAxios = async () => {
  try {
    let responseObj = await await axios.get('https://dummyjson.com/products');
    console.log('Response obj', responseObj);
    //return responseObj;
  } catch (error) {
    console.log('data gelmedi', error);
  }
};*/

export const addProductToFirebase = async (item, uid) => {
  try {
    const ref = database().ref('/products').push();
    const key = ref.key;

    await ref.set(item);
    await database().ref(`/user_products/${uid}`).push().set(key);

    return {data: {}, success: true};
  } catch (error) {
    return {data: null, success: false};
  }
};

export const getPRoductFromFirebase = async key => {
  try {
    const productsRef = database().ref('/products');
    const item = (await productsRef.child(key).once('value')).val();
    return {data: item, success: true};
  } catch (error) {
    console.log('getPRoductFromFirebase', error);

    return {data: null, success: false};
  }
};

export const getAllPRoductsFromFirebase = async uid => {
  try {
    let keys = (
      await database().ref(`/user_products/${uid}`).once('value')
    ).val();
    keys = Object.values(keys);

    const products = [];

    for (let i = 0; i < keys.length; i++) {
      products.push((await getPRoductFromFirebase(keys[i])).data);
    }

    return {data: products, success: true};
  } catch (error) {
    console.log('getAllPRoductsFromFirebase', error);

    return {data: null, success: false};
  }
};

export const firebaseProductsListener = async (uid, callback) => {
  if (global.firebaseProductsListenerOff) {
    global.firebaseProductsListenerOff();
  }

  try {
    const ref = database().ref(`/user_products/${uid}`);
    ref.on('value', d => callback(d.val()));

    global.firebaseProductsListenerOff = ref.off;

    return {data: null, success: true};
  } catch (error) {
    console.log('firebaseProductsListener', error);

    return {data: null, success: false};
  }
};

/*
import database from '@react-native-firebase/database';

export const addProductToFirebase = async (products, uid) => {
  const ref = database().ref('/products').push();
  await ref.set(products);
  const key = ref.key;

  await database()
    .ref(`/user_products/${uid}`)
    .push()
    .set(key)
    .then(() => console.log('Data set user'))
    .catch(error => console.log('addProductToFirebase hatası', error));

  return ref;
};

export const getPRoductFromFirebase = async key => {
  try {
    const productsRef = database().ref('/products');
    const products = await (await productsRef.child(key).once('value')).val();
    return products;
  } catch (error) {
    console.log('getPRoductFromFirebase hatası', error);
  }
};

export const getAllPRoductsFromFirebase = async uid => {
  try {
    let keys = await (
      await database().ref(`/user_products/${uid}`).once('value')
    ).val();
    keys = Object.values(keys);

    const products = [];

    for (let i = 0; i < keys.length; i++) {
      products.push(await getAllPRoductsFromFirebase(keys[i])).data;
    }
    return products;
  } catch (error) {
    console.log('getAllPRoductsFromFirebase hatası', error);
  }
};

export const getAllProducts = async () => {
  try {
    const responseObj = await get
  } catch (error) {
    
  }
}
*/

/*

*/
