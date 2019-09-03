import React from 'react';
import PropTypes from 'prop-types';


export const ListItem = (props) =>{
    return (
    <>
       <h6>No items to purchase</h6>
       <ul>{props.list}</ul>
    </>
    )
}

ListItem.propTypes = {
    list: PropTypes.string.isRequired,
}

