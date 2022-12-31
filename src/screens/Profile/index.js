import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {logOutUser} from '../../redux/actions/app';
import {styles} from './styles';
const mapDispatchToProps = dispatch => ({dispatch});
//const mapStateToProps = states => ({app: states.app});

const Profile = connect(
  mapDispatchToProps,
  // mapStateToProps,
)(props => {
  const state = useSelector(state => state.app);
  const {dispatch} = props;

  const logout = () => {
    dispatch(logOutUser());
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/login.png')} style={styles.image} />
      <Text style={styles.welcome}>Welcome!</Text>

      <View>
        <Text style={styles.email}>E-Mail: {state.email}</Text>
      </View>
      <TouchableOpacity onPress={logout} style={styles.out}>
        <Text style={styles.outtext}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
});

export {Profile};
