import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FCFAFA',
  },
  title: {
    fontSize: 20,
    color: '#424642',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#FFEBB7',
  },
  category: {
    fontWeight: 'bold',
    color: '#424642',
    fontSize: 18,
    marginVertical: 5,
  },
  brand: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  price: {
    width: '100%',
    textAlign: 'right',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#424642',
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  heart: {
    position: 'absolute',
    left: 8,
    top: 5,
  },
  button: {
    width: '100%',
    padding: 7,
    backgroundColor: '#FF6E31',
    borderRadius: 3,
  },
  buttontext: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
