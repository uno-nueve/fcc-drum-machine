import React from 'react';

const Display = ({name, pads}) => {
    
    let filtered = pads.filter((item) => item.key === name)

    return (
        <div id='display'>
            { filtered.length === 1
            ? <h3>{filtered[0].name}</h3>
            : undefined
            }
        </div>
    );
}

export default Display;
