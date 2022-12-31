import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {firebaseProductsListener} from '../../redux/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {showMessage} from 'react-native-flash-message';

const mapDispatchToProps = dispatch => ({dispatch});

const Details = connect(mapDispatchToProps)(props => {
  const state = useSelector(state => state.app);
  const {dispatch} = props;
  //console.log('Detail Sayfası', state.favorites);

  /* useEffect(() => {
    dispatch(firebaseFavoriListener());

    return () => {
      if (global.firebaseFavoriListenerOff) {
        global.firebaseFavoriListenerOff();
      }
    };
  }, []);*/

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.main}>
        <Image source={{uri: item.thumbnail}} style={styles.image} />
        <TouchableOpacity
          style={styles.heart}
          onPress={() => console.log('click')}>
          <MaterialCommunityIcons name="heart" color={'#FF6E31'} size={30} />
        </TouchableOpacity>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.price}>{item.price} TL</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(addProductFb(item))}>
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
