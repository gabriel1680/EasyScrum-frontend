import PropTypes from 'prop-types'

import LoadingSpinner from '../LoadingSpinner';
import './style.css';

function Button({ text, variant, onClick, type = 'button', isLoading = false }) {
    return (
        <button type={type} className={`btn ${isLoading ? 'disabled' : variant}`} onClick={onClick}>
            {!isLoading ? text : <LoadingSpinner />}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
    isLoading: PropTypes.bool
};

export default Button;

