import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,
} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {setAccount, userSignUp, userSignout} from '../../redux/actions/app';
import {styles} from './style';
import authErrorMessage from '../../firebase/authErrorMessage';
import {showMessage} from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';

//const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const Login = connect(mapDispatchToProps)(props => {
  const [loading, setLoading] = useState(false);
  const {dispatch} = props;
  const navigation = useNavigation();
  const state = useSelector(state => state.app);
  console.log('Login sayfası', state);

  const user = () => {
    const user = auth().currentUser;
    console.log('Current User', user);
  };

  const loginSubmit = () => {
    setLoading(true);
    dispatch(userSignUp());
    showMessage({
      message: 'Login Succesful!',
      type: 'success',
      icon: 'success',
    });
    setLoading(false);
  };

  const out = () => {
    dispatch(userSignout());
  };
  return (
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
      <TouchableOpacity
        style={styles.login}
        onPress={loginSubmit}
        loading={loading}>
        <Text style={styles.butonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.register}
        onPress={() => navigation.navigate('Register', {screen: 'Register'})}>
        <Text style={styles.registertext}>Create Account</Text>
      </TouchableOpacity>

      <Button title="users" onPress={user} />
      <Button title="out" onPress={out} />
    </View>
  );
});
export {Login};
