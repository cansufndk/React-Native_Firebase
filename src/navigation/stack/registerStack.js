import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register} from '../../screens';
import {LoginStack} from './loginStack';
import {connect} from 'react-redux';
const Stack = createNativeStackNavigator();

const RegisterStack = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {props.app.createStatus ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <LoginStack />
      )}
    </Stack.Navigator>
  );
});

export {RegisterStack};
