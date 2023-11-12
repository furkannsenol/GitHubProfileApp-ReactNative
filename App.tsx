import 'react-native-gesture-handler';


import React from 'react';
import { Provider } from 'react-redux';

import TabMain from './src/navigation/tab/TabMain';
import store from './src/redux/configureStore';
import { StatusBar } from 'react-native';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#0D1117'} />
      <TabMain />
    </Provider>
  );
}

export default App;
