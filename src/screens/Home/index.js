import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {userSignout} from '../../redux/actions';

import auth from '@react-native-firebase/auth';

const mapDispatchToProps = dispatch => ({dispatch});

const Home = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;
  const state = useSelector(state => state.app);
  console.log(state);
  const signout = () => {
    dispatch(userSignout());
  };

  const user = () => {
    const user = auth().currentUser;
    console.log('Curren User', user);
  };

  return (
    <View>
      <Text>Home sayfası</Text>
      <TouchableOpacity onPress={signout}>
        <Text>Sign Out</Text>
      </TouchableOpacity>

      <Button title="users" onPress={user} />
    </View>
  );
});

export {Home};
