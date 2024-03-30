import React from 'react';
import './Home.scss';
import Image from '../../assets/fond_un.png';

const Home: React.FC = () => {
    return (
        <div>
            <header>
                <img src={Image} alt="fonds_un" />
                <h1>Chez vous partout et ailleurs</h1>
            </header>
            
        </div>
    );
};

export default Home;