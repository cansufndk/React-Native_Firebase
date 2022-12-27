import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: colors.neigth,
    justifyContent: 'space-around',
  },

  image: {
    width: '70%',
    height: '40%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 25,
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.white,
    letterSpacing: 2,
  },
  email: {
    fontSize: 18,
    color: '#424642',
    fontWeight: 'bold',
    color: colors.white,
    marginVertical: 5,
  },
  out: {
    width: '80%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.yellow,
    marginVertical: 5,
  },
  outtext: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.darkgrey,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 18,
    color: '#424642',
    fontWeight: 'bold',
    color: colors.white,
    marginVertical: 5,
  },
});
