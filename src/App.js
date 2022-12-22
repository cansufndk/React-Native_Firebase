import React from 'react';
import {View} from 'react-native';
import {Navigation} from '../src/navigation';
import store from '../src/redux';
import FlashMessage from 'react-native-flash-message';

import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Navigation />
        <FlashMessage position="top" />
      </View>
    </Provider>
  );
};

export default App;
