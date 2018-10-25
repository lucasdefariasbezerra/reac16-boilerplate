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

export default Green;
