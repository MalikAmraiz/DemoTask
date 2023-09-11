import React from 'react';
import store from './src/store/store'; // Import your Redux store
import MainNavigator from './src/navigation';
import {Provider} from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
