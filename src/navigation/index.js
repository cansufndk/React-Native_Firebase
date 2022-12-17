import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {LoginStack} from './stack/loginStack';
import {HomeStack} from './stack/homeStack';
import {useSelector} from 'react-redux';

const Navigation = props => {
  const state = useSelector(state => state.app);
  console.log('navigation sayfası', state);
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
};
export {Navigation};
/**
 * import {NavigationContainer} from '@react-navigation/native';
import {LoginStack} from './stack/loginStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
};

export {Navigation};

 */
