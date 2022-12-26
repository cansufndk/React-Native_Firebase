import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {setAccount, userSignUp, userSignout} from '../../redux/actions/app';
import {styles} from './styles';
const mapDispatchToProps = dispatch => ({dispatch});
//const mapStateToProps = states => ({app: states.app});

const Profile = connect(
  mapDispatchToProps,
  // mapStateToProps,
)(props => {
  const state = useSelector(state => state.app);
  const {dispatch} = props;
  console.log(state);

  const logout = () => {
    dispatch(userSignout());
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/login.png')} style={styles.image} />
      <View>
        <Text style={styles.username}>Name: {state.username}</Text>
        <Text style={styles.username}>Last Name: {state.lastname}</Text>
        <Text style={styles.email}>E-Mail: {state.email}</Text>
      </View>
      <TouchableOpacity onPress={logout} style={styles.out}>
        <Text style={styles.outtext}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
});

export {Profile};
