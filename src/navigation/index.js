import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {LoginStack} from './stack/loginStack';

const Navigation = props => {
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
