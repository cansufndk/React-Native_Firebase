import React from 'react';
import {View} from 'react-native';
import {Navigation} from '../src/navigation';
import store from '../src/redux';

import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    </Provider>
  );
};

export default App;
