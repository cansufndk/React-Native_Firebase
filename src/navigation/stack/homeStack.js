import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../../screens';
import {TabNavigation} from '../tabNavigation/TabNavigaiton';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export {HomeStack};
