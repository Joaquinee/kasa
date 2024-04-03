import React from 'react';
import Image from '../../assets/fond_deux.png';
import Collapse from '../../components/Collapse/Collapse';
import './About.scss';
import { loremIpsum  } from 'react-lorem-ipsum';

const About: React.FC = () => {

    
    return (
        <div>
             <header>
                <img src={Image} alt="fonds_un" />
            </header>

            <div className="container-about">
                <Collapse name='Fiabilité' elements={loremIpsum({p: 3})}/>
                <Collapse name='Respect' elements={loremIpsum({p: 3})} />
                <Collapse name='Service' elements={loremIpsum({p: 3})} />
                <Collapse name='Sécurité' elements={loremIpsum({p: 3})} />
            </div>
          
        </div>
    );
};

export default About;