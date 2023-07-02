import React from 'react';

function LoadingSpinner() {
    return (
        <div className='spinner-border text-primary m-3' role='status'>
            <span className='visually-hidden'>Loading...</span>
        </div>
    );
}

export default LoadingSpinner;

