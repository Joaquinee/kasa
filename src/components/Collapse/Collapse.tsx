import React, { ReactNode, useState } from 'react';
import './Collapse.scss';
interface CollapseProps {
    name: string;
    elements: React.ReactNode[] | string;
}

const Collapse: React.FC<CollapseProps> = ({ name, elements }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='collapse'>
            <div>
                <button onClick={toggleCollapse} >{name}</button>
            </div>
            {isOpen && (
                <div>
                    {typeof elements === 'string' ? (
                        <div>{elements}</div>
                    ) : (
                        elements.map((element: React.ReactNode, index: number) => (
                            <div key={index}>{element}</div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Collapse;