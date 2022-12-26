import database from '@react-native-firebase/database';

export const getAllProducts = (payload = async () => {
  //verileri databaseden çekmek için
  try {
    const response = (await database().ref('/Products').once('value')).val();
    return response;
  } catch (error) {}
});

/* 
 db ;
 ref: referans oluşturmak için
 once: tek seferlik veri okumak için
 set: verileri referans olarak verdiğimize yazar
 push: verileri göndermeden önce görmek için
 update: verileri güncellemek için
 
*/

export const addProductToFirebase = async (payload, uid) => {
  const products = database().ref('/products').push();

  try {
    await ref.set(item);
    await database().ref(`/user_products/${uid}`).push().set(key);

    return {data: {}, success: true};
  } catch (error) {
    return {data: null, success: false};
  }
};

export const getPRoductFromFirebase = async (payload, key) => {
  try {
    const productsRef = database().ref('/Products');
    const item = await (await productsRef.child(key).once('value')).val();
    return item;
  } catch (error) {
    console.log('getPRoductFromFirebase', error);
  }
  /*try {
    const productsRef = database().ref('/products');
    const item = (await productsRef.child(key).once('value')).val();
    // return { item};
    console.log('PRODUCT REF');
  } catch (error) {
    console.log('getPRoductFromFirebase', error);

    return {data: null, success: false};
  }*/
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
    return products;
    //return {data: products, success: true};
  } catch (error) {
    console.log('getAllPRoductsFromFirebase', error);
    //return {data: null, success: false};
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
