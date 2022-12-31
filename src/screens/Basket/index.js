import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {styles} from './styles';
const mapDispatchToProps = dispatch => ({dispatch});
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Basket = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;
  const state = useSelector(state => state.app);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.main}>
        <Image source={{uri: item.thumbnail}} style={styles.image} />
        <TouchableOpacity
          style={styles.heart}
          onPress={() => console.log('click')}>
          <MaterialCommunityIcons name="heart" color={'#FF6E31'} size={25} />
        </TouchableOpacity>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.price}>{item.price} TL</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Text>Sepetim sayfası</Text>
      <FlatList
        data={state.productsFb}
        renderItem={renderItem}
        keyExtractor={item => `${item.id} ${item.key}`}
      />
    </View>
  );
});

export {Basket};
