import React from 'react';
import './Navbar.scss';
import {  NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {

    return (
        <nav>
            <picture>
                <source media="(max-width: 768px)" srcSet={require('../../assets/LOGO_mobile.png')} />
                <img src={require('../../assets/LOGO.png')} alt="logo_site" />
            </picture>
           
            <ul>
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="about">A propos</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;