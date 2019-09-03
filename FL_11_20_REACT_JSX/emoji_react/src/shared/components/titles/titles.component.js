import React from 'react';
import PropTypes from 'prop-types';

import classes from './titles.module.scss';

export function Titles(props) {
    return (
        <h2 className={classes.titlesText}>NEW! {props.title}</h2>   
    ) 
}

Titles.propTypes = {
    title: PropTypes.string.isRequired,
}
