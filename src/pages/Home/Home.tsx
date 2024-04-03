import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom'; // Importez le composant Link
import Image from '../../assets/fond_un.png';
import DataBase from '../../api/db.json';
import Card from '../../components/Card/Card';





const Home: React.FC = () => {

  
    return (
        <div>
            <header>
                <img src={Image} alt="fonds_un" />
                <h1>Chez vous partout et ailleurs</h1>
            </header>
            <main>
                <div className="main-container">
                    {DataBase.map((element, index) => {
                        return (
                        <Link to={`/view/${element.id}`} key={index}>
                            <Card title={element.title} image={element.cover} />
                        </Link>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default Home;