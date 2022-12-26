import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputcon: {
    marginVertical: 5,
  },
  input: {
    borderWidth: 0.8,
    fontSize: 16,
  },
  search: {
    position: 'absolute',
    right: 5,
    top: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: '#ddd',
    borderWidth: 1,
  },

  image: {
    width: 100,
    height: 150,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  descon: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFEBB7',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    justifyContent: 'space-between',
  },
  category: {
    fontWeight: 'bold',
    color: '#424642',
    fontSize: 16,
    marginVertical: 5,
  },
  title: {
    fontSize: 14,
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
  heart: {
    position: 'absolute',
    left: 2,
  },
});
