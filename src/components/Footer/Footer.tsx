import React from 'react';
import './Footer.scss';


const Footer: React.FC = () => {
    return (
        <footer>
            <img src={require('../../assets/logo_footer.png')} alt="logo" />
            <p>© 2024 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;