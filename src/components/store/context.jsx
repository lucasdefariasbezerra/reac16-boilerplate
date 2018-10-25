import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContextProvider } from './storeContext';


export default class Context extends Component {
    state = {
        number: 10,
        increment: () => this.incrementNumber(),
        decrement: () => this.decrementNumber()
    };

    incrementNumber = () => {
        const { number } = this.state;
        this.setState({number: number + 1});
    };

    decrementNumber = () => {
        const { number } = this.state;
        this.setState({number: number - 1});
    }

    render() {
        return (
            <ContextProvider value={this.state}>
                {this.props.children}
            </ContextProvider>
        );
    }
}

Context.propTypes = {
    children: PropTypes.node.isRequired
};
