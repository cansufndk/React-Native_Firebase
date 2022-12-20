import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Register} from '../../screens';

const Stack = createNativeStackNavigator();

const RegisterStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export {RegisterStack};
