import React from 'react';
import '../template/style.css';
import { ContextConsumer } from './store/storeContext';


const Green = () => {
    return (
        <ContextConsumer>
            {(context) => {
                return(
                    <div className="green">
                        {context.number}
                        <button onClick={() => handleDecrement(context)}>DEC</button>
                        <button onKeyUp={(e) => handleIncrementByKey(e, context)}>INCREMENT BY KEY</button>
                    </div>
                );
            }
            }
        </ContextConsumer>
    );
};

const handleDecrement = (context) => {
    context.decrement();
};

const handleIncrementByKey = (e, context) => {
    if( e.key === 'Enter') {
        context.decrement();
    }
};

export default Green;
