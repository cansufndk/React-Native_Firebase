import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register, Home} from '../../screens';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

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
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
});

export {LoginStack};
