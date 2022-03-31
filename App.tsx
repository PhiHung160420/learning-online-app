import AppNavigator from 'navigation';
import React, { useEffect } from 'react';
import {Provider} from 'react-redux';
import store from 'store';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;