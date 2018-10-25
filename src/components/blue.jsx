import React from 'react';
import '../template/style.css';
import { ContextConsumer } from './store/storeContext';
import { Link } from 'react-router-dom';

const Green = () => {
    return (
        <ContextConsumer>
            {(context) => {
                return(
                    <div className="blue">
                        {context.number}
                        <button onClick={() => handleIncrement(context)}>INC</button>
                        <Link to="/green">Context Green</Link>
                    </div>);
            }
            }
        </ContextConsumer>
    );
};

const handleIncrement = (context) => {
    context.increment();
};

export default Green;
