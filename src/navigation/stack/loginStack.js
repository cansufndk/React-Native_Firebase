import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register, Home} from '../../screens';
import {connect} from 'react-redux';

const Stack = createNativeStackNavigator();

const LoginStack = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={props.app.signupStatus ? 'Login' : 'Register'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
});

export {LoginStack};
