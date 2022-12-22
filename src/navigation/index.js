import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginStack, HomeStack} from './stack';
import {connect} from 'react-redux';

const Navigation = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  return useMemo(() => (
    //loginse home göster değilse login göster
    <NavigationContainer>
      {props.app.signupStatus ? <HomeStack /> : <LoginStack />}
    </NavigationContainer>
  ));
});
export {Navigation};
