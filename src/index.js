import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
// import App1 from './App1';
// import store from './reducers/store-reactredux';
import App2 from './App2';
import store from './reducers/store-reduxtoolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>
);
