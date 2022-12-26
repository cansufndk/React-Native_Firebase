import React, {useEffect} from 'react';
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
import {requestAllProducts} from '../../redux/actions';
import {styles} from './style';

const mapDispatchToProps = dispatch => ({dispatch});

const Home = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;
  const state = useSelector(state => state.app);

  useEffect(() => {
    dispatch(requestAllProducts());
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <Image source={{uri: item.image}} style={styles.image} />
        <TouchableOpacity style={styles.heart}>
          <MaterialCommunityIcons
            name="heart-outline"
            color={'#FF6E31'}
            size={25}
          />
        </TouchableOpacity>
        <View style={styles.descon}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price} TL</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Sepete Ekle</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.inputcon}>
        <TextInput placeholder="Search" style={styles.input} />
        <MaterialCommunityIcons
          name="magnify"
          color={'#424642'}
          size={30}
          style={styles.search}
        />
      </View>
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
