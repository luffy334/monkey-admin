import App from './App';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.less';

ReactDOM.render(
    <BrowserRouter>
        {/* 使用了路由懒加载，所以需要使用<Suspense>包起来 */}
        <Suspense fallback={<div/>}>
            <Switch>
                <Route path="/" render={() => (<App/>)}/>
            </Switch>
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root')
);
