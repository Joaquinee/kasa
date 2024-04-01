import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div>
            <div className="page-404">
                <img src={require('../../assets/404.png')} alt="Erreur 404" />
                <p>Oups! La page que vous demandez n'existe pas..</p>
                <Link  to="/">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    );
};


export default NotFound;