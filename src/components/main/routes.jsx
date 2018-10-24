import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../app';
import About from '../about';
import Green from '../green';
import Blue from '../blue';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/green" component={Green} />
            <Route path="/blue" component={Blue} />
            <Route path="*" component={App} />
        </Switch>
    </Router>
);

export default Routes;

