import React from 'react';
import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Spinner de carregamento
 */ 
function LoadingSpinner({ size = 24, color = 'primary' }) {
    return <CircularProgress color={color} size={size} thickness={5} />
}

LoadingSpinner.propType = {
    color: PropTypes.string,
    size: PropTypes.number
};

export default LoadingSpinner;

