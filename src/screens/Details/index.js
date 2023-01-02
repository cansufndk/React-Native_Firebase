import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  firebaseProductsListener,
  addProductsFb,
  deleteFavoriFb,
} from '../../redux/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {showMessage} from 'react-native-flash-message';

const mapDispatchToProps = dispatch => ({dispatch});

const Details = connect(mapDispatchToProps)(props => {
  const state = useSelector(state => state.app);
  const {dispatch} = props;
  //console.log('Detail Sayfası', state.favorites);

  useEffect(() => {
    dispatch(firebaseProductsListener());

    return () => {
      if (global.firebaseProductListenerOff) {
        global.firebaseProductListenerOff();
      }
    };
  }, []);

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
      <View style={styles.main}>
        <Image source={{uri: item.thumbnail}} style={styles.image} />
        <TouchableOpacity
          style={styles.heart}
          onPress={() => dispatch(deleteFavoriFb(item.key, item.value))}>
          <MaterialCommunityIcons name="heart" color={'#FF6E31'} size={28} />
        </TouchableOpacity>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.price}>{item.price} TL</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addProduct(item)}>
          <Text style={styles.buttontext}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favori List</Text>
      <FlatList
        data={state.favorites}
        renderItem={renderItem}
        keyExtractor={item => `${item.id} ${item.key}`}
      />
    </View>
  );
});

export {Details};
