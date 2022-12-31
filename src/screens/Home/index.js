import React, {useEffect, useMemo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {connect, useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  firebaseFavoriListener,
  requestAllProducts,
  setFavoritesFb,
  addProductsFb,
  firebaseProductsListener,
} from '../../redux/actions';
import {styles} from './style';
import {showMessage} from 'react-native-flash-message';

const mapDispatchToProps = dispatch => ({dispatch});

const Home = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;
  const state = useSelector(state => state.app);

  useEffect(() => {
    dispatch(requestAllProducts());
  }, [requestAllProducts()]);

  useEffect(() => {
    dispatch(firebaseFavoriListener());

    return () => {
      if (global.firebaseFavoriListenerOff) {
        global.firebaseFavoriListenerOff();
      }
    };
  }, []);

  useEffect(() => {
    dispatch(firebaseProductsListener());

    return () => {
      if (global.firebaseProductListenerOff) {
        global.firebaseProductListenerOff();
      }
    };
  }, []);

  const addFavorites = item => {
    const favs = state.favorites.filter(fav => fav.id === item.id);
    if (favs.length > 0) {
      showMessage({
        message: 'This in the favorites!',
        type: 'danger',
        icon: 'danger',
      });
    } else {
      dispatch(setFavoritesFb(item));
      showMessage({
        message: 'This in the favorites!',
        type: 'success',
        icon: 'success',
      });
    }
  };

  const addProduct = item => {
    const prod = state.productsFb.filter(p => p.id === item.id);
    if (prod.length > 0) {
      showMessage({
        message: 'This in the Basket!',
        type: 'danger',
        icon: 'danger',
      });
    } else {
      dispatch(addProductsFb(item));
      showMessage({
        message: 'This in the Basket!',
        type: 'success',
        icon: 'success',
      });
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <Image source={{uri: item.thumbnail}} style={styles.image} />
        <TouchableOpacity
          style={styles.heart}
          onPress={() => addFavorites(item)}>
          <MaterialCommunityIcons
            name="heart-outline"
            color={'#FF6E31'}
            size={25}
          />
        </TouchableOpacity>
        <View style={styles.descon}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.title}>{item.brand}</Text>
          <Text>{item.description}</Text>
          <Text style={styles.price}>{item.price} TL</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => addProduct(item)}>
            <Text style={styles.buttontext}>Sepete Ekle</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={state.products.list}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(d, i) => d.id}
      />
    </View>
  );
});

export {Home};
/*
<View style={styles.inputcon}>
        <TextInput placeholder="Search" style={styles.input} />
        <MaterialCommunityIcons
          name="magnify"
          color={'#424642'}
          size={30}
          style={styles.search}
        />
      </View> */
