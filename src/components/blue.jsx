import React from 'react';
import '../template/style.css';
import { ContextConsumer } from './store/storeContext';
import Context from './store/context';

const Green = () => {
    return (
        <Context>
            <ContextConsumer>
                {(context) => {
                    return(
                    <div className='blue'>
                       {context.number}
                       <button onClick={context.increment}>INC</button>
                    </div>);
                    }
                }
            </ContextConsumer>
        </Context>
    );
};

export default Green;