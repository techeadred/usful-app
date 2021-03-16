import React from 'react';

let ErrorHandler = (props) => {
    if (props.message) {
        return (
            <div className='error'>{props.message}</div>
        );
    }

    return <></>
}


export default ErrorHandler;