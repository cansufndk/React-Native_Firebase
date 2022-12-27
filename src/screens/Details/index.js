import {connect, useSelector} from 'react-redux';
import React from 'react';
import {View, Text, FlatList} from 'react-native';

const mapDispatchToProps = dispatch => ({dispatch});

const Details = connect(mapDispatchToProps)(props => {
  const state = useSelector(state => state.app);
  const {dispatch} = props;
  //console.log(state);

  const renderItem = ({item}) => {
    console.log('fav items', item);
    return <Text>item: {item.title} </Text>;
  };
  return (
    <View style={{flex: 1}}>
      <Text>There is no product in your favorites</Text>

      <FlatList
        data={state.favorites}
        renderItem={renderItem}
        keyExtractor={(d, i) => d.id}
      />
    </View>
  );
});

export {Details};
