import React, {useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {createUserFb, setAccount, userSignUp} from '../../redux/actions/app';
import {styles} from './style';

//const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const Login = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;
  const navigation = useNavigation();
  const state = useSelector(state => state.app);
  console.log('Login sayfası', state);

  const createUser = () => {
    dispatch(userSignUp());
  };
  return useMemo(() => (
    <View style={styles.container}>
      <Image source={require('../../assets/login.png')} style={styles.image} />
      <TextInput
        placeholder="Email"
        value={state.email}
        onChangeText={d => dispatch(setAccount('email', d))}
        style={styles.username}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={state.password}
        onChangeText={d => dispatch(setAccount('password', d))}
        secureTextEntry
        style={styles.password}
      />
      <TouchableOpacity style={styles.login} onPress={createUser}>
        <Text style={styles.butonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.register}>
        <Text style={styles.registertext}>Register</Text>
      </TouchableOpacity>
    </View>
  ));
});
export {Login};
