import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../app';
import About from '../about';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="*" component={App} />
        </Switch>
    </Router>
);

export default Routes;

