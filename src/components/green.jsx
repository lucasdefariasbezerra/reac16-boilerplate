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
                    <div className='green'>
                       {context.number}
                    </div>
                    );
                    }
                }
            </ContextConsumer>
        </Context>
    );
};

export default Green;