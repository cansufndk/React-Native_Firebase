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
    flexDirection: 'row',
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
  desc: {
    width: '55%',
    height: 150,
    padding: 5,
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
    marginVertical: 2,
  },
  image: {
    width: '45%',
    height: 150,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  heart: {
    position: 'absolute',
    left: 8,
    top: 5,
  },
  button: {
    width: '40%',
    padding: 4,
    backgroundColor: '#FF6E31',
    borderRadius: 3,
  },
  buttontext: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
