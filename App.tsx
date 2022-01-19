import React from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
