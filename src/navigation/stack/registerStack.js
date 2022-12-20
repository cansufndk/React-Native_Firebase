import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Register} from '../../screens';

const Stack = createStackNavigator();

const RegisterStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export {RegisterStack};
