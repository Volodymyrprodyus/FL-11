import React from 'react';
import PropTypes from 'prop-types';

import classes from './logo.module.scss';

export function Logo(props) {
    return (
        <div>
            {props.char}
        </div>
    )
}

Logo.propTypes = {
    char: PropTypes.string.isRequired,
}