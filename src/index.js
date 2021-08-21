import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import mockData from './mockData';
import persistedStore, { store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(  
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
