import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from "./store/reducer"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.less';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
