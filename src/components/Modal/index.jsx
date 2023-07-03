import React from 'react'
import PropTypes from 'prop-types'

import './style.css';

function Modal({ children, onClose }) {
    return (
        <div className='app-modal'>
            <div className='app-modal-content'>
                <span className='modal-close' onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func
}

export default Modal

