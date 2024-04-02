import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom'; // Importez le composant Link
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
                            <Link to={`/view/${element.id}`} key={index}>
                                <div className="card" key={index} >
                                    <img src={element.cover} alt={element.title}/>
                                    <p>{element.title}</p>
                                </div>
                             </Link>
                         );
                     })}
                   </div>
                </div>
            </main>
        </div>
    );
};

export default Home;