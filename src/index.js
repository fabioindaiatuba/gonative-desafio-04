import 'Config/ReactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from 'store';
import { ActivityIndicator } from 'react-native';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator size="small" color="#999" />} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
