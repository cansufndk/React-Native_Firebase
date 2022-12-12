import React from 'react';
import {Text, View} from 'react-native';
import {Navigation} from './src/navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Text>App sayfası</Text>
      <Navigation />
    </View>
  );
};

export default App;
