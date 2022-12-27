import database from '@react-native-firebase/database';
import * as auth from './auth';

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
  //favorilere eklemek için
  const user = auth.getUserInfo(user);

  try {
    const ref = database().ref('/Favorites').push();
    const key = ref.key;
    await ref.set(payload);
    const fav = database().ref(`/user_favs/${user}`).push();
    await fav.set(key);
    const favs = {key: fav.key};
    return favs;
  } catch (error) {
    console.log('APİ ERROR', error);
  }
};

export const getProductToFirebase = async key => {
  try {
    const favsRef = database().ref('Favorites');
    const elem = (await favsRef.child(key).once('value')).val();
    return elem;
  } catch (error) {
    console.log('APİ ERROR', error);
  }
};

export const getAllProductToFirebase = async uid => {
  const user = auth.getUserInfo();
  try {
    let keys = (await database().ref(`/user_favs/${user}`).once('value')).val();
    let favsKey = keys && Object.keys(keys);
    let favsVal = keys && Object.values(keys);
    if (keys !== null) {
      keys = Object.values(keys);
    } else {
    }

    const favori = [];

    for (let i = 0; i < keys?.length; i++) {
      let delfavs = (await getProductToFirebase(keys[i])).data;
      favori.push({
        ...delfavs,
        key: favsKey[i],
        value: favsVal[i],
      });
    }
    return favori;
  } catch (error) {
    console.log('APİ ERROR', error);
  }
};

/*
favori
const favorite = await (
    await database().ref(`/Favorites/${uid}`).once('value')
  ).val();

  const favorites = await (
    await database().ref('/Products').once('value')
  ).val();

  let userFavorites = [];
  Object.values(favorite).map(favKey =>
    Object.values(favorites)
      .filter(key => key === favKey)
      .map(key => {
        userFavorites.push({...favorites[key], id: favKey});
      }),
  );
  return userFavorites;*/
