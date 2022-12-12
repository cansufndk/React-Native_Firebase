import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkwhite,
  },
  username: {
    borderColor: colors.darkgrey,
    borderRadius: 5,
    width: '75%',
    fontSize: 17,
    backgroundColor: colors.white,
  },
  password: {
    borderColor: colors.darkgrey,
    borderRadius: 5,
    width: '75%',
    fontSize: 17,
    backgroundColor: colors.white,
    marginVertical: 10,
  },
  login: {
    width: '75%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.yellow,
  },
  butonText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.darkgrey,
    fontWeight: 'bold',
  },
});
