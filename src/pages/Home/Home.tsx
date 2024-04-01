import React from 'react';
import './Home.scss';
import Image from '../../assets/fond_un.png';
import DataBase from '../../api/db.json';

const Home: React.FC = () => {
    return (
        <div>
            <header>
                <img src={Image} alt="fonds_un" />
                <h1>Chez vous partout et ailleurs</h1>
            </header>
            <main>
                <div className="container">
                   <div className="card-container">
                     {DataBase.map((element, index) => {
                         return (
                             <div className="card" key={index}>
                                 <img src={element.cover} alt={element.title} />
                                 <p>{element.title}</p>
                             </div>
                         );
                     })}
                        
                   </div>
                </div>
            </main>
        </div>
    );
};

export default Home;