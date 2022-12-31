import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {createUser, setAccount} from '../../redux/actions/app';
import {styles} from './styles';
import {showMessage} from 'react-native-flash-message';

const mapDispatchToProps = dispatch => ({dispatch});

const Register = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;
  const navigation = useNavigation();

  const state = useSelector(state => state.app);

  const register = () => {
    dispatch(createUser());
    showMessage({
      message: 'Sign Up successful!',
      type: 'success',
    });
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/login.png')} style={styles.image} />

      <TextInput
        placeholder="Email"
        style={styles.username}
        value={state.email}
        keyboardType="email-address"
        onChangeText={d => dispatch(setAccount('email', d))}
      />
      <TextInput
        placeholder="Password"
        style={styles.username}
        value={state.password}
        secureTextEntry
        onChangeText={d => dispatch(setAccount('password', d))}
      />
      <TouchableOpacity style={styles.register} onPress={register}>
        <Text style={styles.registertext}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('Login', {screen: 'Login'})}>
        <Text style={styles.logintext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
});

export {Register};
