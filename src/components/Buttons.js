import React from 'react';

const Buttons = ({dataStructure, isSortedBy}) => {

    const buttonsBarElement = dataStructure
        .map( item => {
        const buttonClass = (isSortedBy === item.name) ? 'btn btn-warning' : 'btn btn-primary';
        return (item.sortOrder !== 0) ?
            <button key={item.name} className={buttonClass} name={item.name}>
                {item.title}
            </button>
            : null;
    });
    return buttonsBarElement;
};
export default Buttons;