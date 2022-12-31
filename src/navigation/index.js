import React, {useMemo, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginStack, HomeStack, RegisterStack} from './stack';
import {connect} from 'react-redux';
import auth from '@react-native-firebase/auth';

const Navigation = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  const [successUser, setSuccessUser] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setSuccessUser(!!user);
    });
  });
  return useMemo(() => (
    //kullanıcı varsa home null sa login göster
    <NavigationContainer>
      {!successUser ? (
        <LoginStack />
      ) : props.app.loginStatus ? (
        <HomeStack />
      ) : (
        <LoginStack />
      )}
    </NavigationContainer>
  ));
});
export {Navigation};
