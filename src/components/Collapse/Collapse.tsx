import React, { ReactNode, useState } from 'react';

import './Collapse.scss';


interface CollapseProps {
    name: string;
    elements: React.ReactNode[] | string;
}

const Collapse: React.FC<CollapseProps> = ({ name, elements }) => {
    const [active, setActive] = useState<boolean>(false);

    const toggleCollapsible = () => {
        setActive(!active);
    };

    return (
        <div className="collapse">
            <div className="btn">
                <div className="header">
                    <button className={`collapsible ${active ? 'active' : ''}`} onClick={toggleCollapsible}>
                        {name}
                        <img src={require('../../assets/arrow_down.png')} alt="aaa" />
                    </button>
                </div>
                <div className={`content ${active ? 'active' : ''}`}>
               
                    {typeof elements === 'string' ? (
                        <div>{elements}</div>
                    ) : (
                        elements.map((element: React.ReactNode, index: number) => (
                            <div key={index}>{element}</div>
                        ))
                    )}
               
                </div>
            </div>
        </div>
    );
};

export default Collapse;

