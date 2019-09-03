import React from 'react';
import PropTypes from 'prop-types';

import classes from './emoji.module.scss';

export function Emoji(props) {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.stars} *</p>
        </div>
    )
}

Emoji.propTypes = {
    title: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
}