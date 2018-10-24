import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContextProvider } from './storeContext';


export default class Context extends Component {
    state = {
        number: 10,
        increment: () => {
            console.log('cai aqui na funcao');
            this.setState({number: this.state.number + 1});
        }
    };

    incrementNumber = () => {
        console.log('cai aqui na funcao');
        this.setState({number: this.state.number + 1});
    }

    render() {
        const { children } = this.props;
        console.log('cai aqui', children);
        return (
            <ContextProvider value={this.state}>
                {children}
            </ContextProvider>
        );
    }
}

Context.propTypes = {
    children: PropTypes.node.isRequired
};
