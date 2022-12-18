import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RegisterStack, LoginStack, HomeStack} from './stack';
import {connect} from 'react-redux';

const Navigation = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  const {app} = props;
  const {loginStatus} = app;
  console.log('Navigasyon', props);

  return useMemo(() => (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  ));
});
export {Navigation};
/**      {loginStatus ? <RegisterStack /> : <LoginStack />}
 */
