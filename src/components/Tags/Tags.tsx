import React from 'react';
import './Tags.scss';


interface TagsProps {
    tags: string[];
}

const Tags: React.FC<TagsProps> = ({tags}) => {
    return (
        <div>
             <div className="view-tag">
                {tags.map((tag, index) => (
                    <button key={index}>{tag}</button>
                ))}
            </div>
        </div>
    );
};


export default Tags;