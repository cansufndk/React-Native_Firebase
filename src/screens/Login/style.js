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
    fontSize: 18,
    backgroundColor: colors.white,
  },
  password: {
    borderColor: colors.darkgrey,
    borderRadius: 5,
    width: '75%',
    fontSize: 18,
    backgroundColor: colors.white,
    marginVertical: 6,
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
  register: {
    width: '50%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.grey,
    marginVertical: 10,
  },
  registertext: {
    fontSize: 17,
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
  image: {
    height: '55%',
  },
});
