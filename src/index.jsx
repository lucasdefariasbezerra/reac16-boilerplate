import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/main/routes';
import Context from './components/store/context';

ReactDOM.render(
    <Context>
        <Routes />
    </Context>,
    document.getElementById('app'));
