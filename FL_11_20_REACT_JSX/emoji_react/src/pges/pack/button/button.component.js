import React from 'react';
import PropTypes from 'prop-types';

import classes from './button.module.scss';

export function Button(props) {
    return (
        <div>
            <button className={classes.myButton}>{props.title} ({props.value}$)</button>
        </div>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
}