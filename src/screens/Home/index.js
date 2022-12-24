import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  Image,
} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {
  userSignout,
  firebaseProductsListener,
  requestAddProductsToFirebase,
  requestGetAllProductsFromFirebase,
  requestAllProducts,
} from '../../redux/actions';
import auth from '@react-native-firebase/auth';

import axios from 'axios';

const mapDispatchToProps = dispatch => ({dispatch});

const Home = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;
  const state = useSelector(state => state.app);
  //console.log('Home sayfası', state);

  useEffect(() => {
    dispatch(requestAllProducts());
  }, []);

  // console.log('Flatlist Data', state.products.list);

  const signout = () => {
    dispatch(userSignout());
  };

  const user = () => {
    const user = auth().currentUser;
    console.log('Current User', user);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{borderWidth: 1}}>
        <Image source={{uri: item.image}} style={{borderWidth: 2, width: 50}} />
        <View>
          <Text>{item.title}</Text>
          <Text>{item.category}</Text>
          <Text>{item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
      }}>
      <Text>Home sayfası</Text>
      <TouchableOpacity onPress={signout}>
        <Text>Sign Out</Text>
      </TouchableOpacity>

      <Button title="users" onPress={user} />

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
/**
 


 */
