import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neigth,
  },
  username: {
    borderColor: colors.darkgrey,
    borderRadius: 5,
    width: '75%',
    fontSize: 17,
    backgroundColor: colors.white,
    marginVertical: 2,
  },
  register: {
    width: '75%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.yellow,
    marginVertical: 5,
  },
  registertext: {
    fontSize: 17,
    textAlign: 'center',
    color: colors.darkgrey,
    fontWeight: 'bold',
  },
  login: {
    width: '50%',
    padding: 9,
    borderRadius: 5,
    backgroundColor: colors.lightgrey,
  },
  logintext: {
    fontSize: 17,
    textAlign: 'center',
    color: colors.neigth,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
});
