import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginStack, HomeStack, RegisterStack} from './stack';
import {connect, useSelector} from 'react-redux';

const Navigation = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  return useMemo(() => (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  ));
});
export {Navigation};
