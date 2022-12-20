import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as screens from '../../screens';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={screens.Home}
        options={{
          tabBarIcon: ({color, focused, size}) => {
            if (focused)
              return (
                <MaterialCommunityIcons
                  name="home"
                  color={'#424642'}
                  size={size}
                />
              );
            return (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Details"
        component={screens.Details}
        options={{
          tabBarIcon: ({color, focused, size}) => {
            if (focused)
              return (
                <MaterialCommunityIcons
                  name="account"
                  color={'#424642'}
                  size={size}
                />
              );
            return (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Basket"
        component={screens.Basket}
        options={{
          tabBarIcon: ({color, focused, size}) => {
            if (focused)
              return (
                <MaterialCommunityIcons
                  name="account"
                  color={'#424642'}
                  size={size}
                />
              );
            return (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={screens.Profile}
        options={{
          tabBarIcon: ({color, focused, size}) => {
            if (focused)
              return (
                <MaterialCommunityIcons
                  name="account"
                  color={'#424642'}
                  size={size}
                />
              );
            return (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export {TabNavigation};
/**
 * 
 
 


      
 */
