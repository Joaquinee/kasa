import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom'; // Importez le composant Link
import Image from '../../assets/fond_un.png';
import DataBase from '../../api/db.json';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';





const Home: React.FC = () => {

    return (
       <div>
        <Banner title="Chez vous, partout et ailleurs" image={Image} ></Banner>
        <div className="main-container">
            {DataBase.map((element, index) => {
                return (
                <Link to={`/view/${element.id}`} key={index}>
                    <Card title={element.title} image={element.cover} />
                </Link>
                );
            })}
        </div>
       </div>
        
    );
};

export default Home;