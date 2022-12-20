import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens';
import {TabNavigation} from '../tabNavigation/TabNavigaiton';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export {HomeStack};
/**
      <Stack.Screen name="Home" component={Home} />

 */
