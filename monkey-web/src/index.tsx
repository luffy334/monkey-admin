import App from './App';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import reducer from "./store/reducer"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.less';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
          <BrowserRouter>
              {/* 使用了路由懒加载，所以需要使用<Suspense>包起来 */}
              <Suspense fallback={<div/>}>
                  <Switch>
                      <Route path="/" render={() => (<App />)}/>
                  </Switch>
              </Suspense>
          </BrowserRouter>
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
