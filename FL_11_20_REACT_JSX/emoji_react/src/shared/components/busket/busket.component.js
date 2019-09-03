import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from './aside-list.component';

import classes from './busket.module.scss';

export function Busket(props) {
    return (
        <div>
            <h3 className={classes.myBusketText}>Busket</h3>
            <ListItem />
            {/* <button className={classes.myBusketButton}>Purshase ({props.totalPrice}$)</button>     */}
        </div>
    ) 
}

Busket.propTypes = {
    totalPrice: PropTypes.string.isRequired,
}

