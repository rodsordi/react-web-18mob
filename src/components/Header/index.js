import React from 'react'

import './style.css';

import logo from '../../assets/mercado-libre.png'

const Header = (props) => {
    return (
        <header className="header">
            <h1>Mercado Livre</h1>
            <img src={ logo } />
        </header>
    )
};

export default Header;