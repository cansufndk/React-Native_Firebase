import React from 'react';
import {View} from 'react-native';
import {Navigation} from '../src/navigation';
import store from '../src/redux';
import FlashMessage from 'react-native-flash-message';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
        <View style={{flex: 1}}>
          <Navigation />
          <FlashMessage position="top" />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
