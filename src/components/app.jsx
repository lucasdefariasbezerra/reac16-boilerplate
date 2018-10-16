import React, { Component } from 'react';
import '../template/style.css';

export default class App extends Component {
    state = {
        isYellow : true
    }

    render() {
        const { isYellow } = this.state;
        return (
            <div className={isYellow ? 'color' : '' }>Boilerplate</div>
        );
    }
}