import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <img src={require('../../assets/LOGO.png')} alt="logo_site" />
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="about">A propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;