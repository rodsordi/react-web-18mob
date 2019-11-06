import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = (props) => {
    console.log(props);
    return (
        <Link to={props.path}>
            Abrir o produto
        </Link>
    );
};

export default Button;