import React from 'react';
import {Login} from './page'
import {Routers} from './router'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.less';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    {
                        Routers.map(router => (
                            <Route exact
                                   key={router.path}
                                   path={router.path}
                                   render={() =>
                                       router.notExect ? <router.component/> : <div>未登录</div>
                                   }
                            >
                            </Route>
                        ))
                    }
                    <Route exact path="/" component={Login}/>
                    <Route component={() => <div>哦豁，404喽！</div>}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
