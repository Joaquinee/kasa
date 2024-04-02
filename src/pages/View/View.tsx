import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataBase from '../../api/db.json';
import Item from '../../types/items';
import './View.scss';
import Slider from '../../components/Slider/Slider';
import Stars from '../../components/Stars/Stars';
import Collapse from '../../components/Collapse/Collapse';

const View: React.FC = () => {
    const { id } = useParams(); 
    const [data, setData] = useState<Item | null>(null);

    useEffect(() => {
        const getItems = () => {
            let item = DataBase.find((element) => element.id === id);
            setData(item || null);
        };
        getItems();
    }, [id]);

    const nameSplit = data?.host.name.split('  ');


    return (
        <div>
            {data && (
                <div>
                <div>
                    <Slider images={data.pictures} />
                </div>
                <main className="view">
                    <div className="view-content">
                        <div className="view-infos">
                            <h1>{data.title}</h1>
                            <p>{data.location}</p>
                            <div className="view-tag">
                                {data.tags.map((tag, index) => (
                                    <button key={index}>{tag}</button>
                                ))}
                            </div>
                        </div>
                        <div className="view-host">
                          
                            <div className="host-name">
                                <span>{nameSplit?.[0]}</span>
                                <span>{nameSplit?.[1]}</span>
                                <img src={data.host.picture} alt="image-host" />
                            </div>
                           
                            <div className="host-stars">
                               <Stars rating={data.rating} />
                            </div>
                        </div>
                    </div>

                    <div className="deroulant">
                        <Collapse name='Description' elements={data.description} />
                        <Collapse name='Equipement' elements={data.equipments} />
    
                    </div>
                </main>        
                </div>
                
               
            )}
        </div>
    );
};

export default View;
