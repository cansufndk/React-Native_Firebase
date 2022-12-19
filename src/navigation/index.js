import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RegisterStack, LoginStack, HomeStack} from './stack';
import {connect, useSelector} from 'react-redux';

const Navigation = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  const {app} = props;
  //const {loginStatus} = app;
  const state = useSelector(state => state.app);
  console.log(state);

  return useMemo(() => (
    <NavigationContainer>
      {state.signupStatus ? (
        <HomeStack />
      ) : state.loginStatus ? (
        <RegisterStack />
      ) : (
        <LoginStack />
      )}
    </NavigationContainer>
  ));
});
export {Navigation};
