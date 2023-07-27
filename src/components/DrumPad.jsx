import React from 'react';

const DrumPad = ({pad, playAudio}) => {
    return(
        <button 
            className='drum-pad' 
            id={pad.name} 
            onClick={() => {playAudio(pad.key)}}
        >
            <audio className='clip' id={pad.key} src={pad.audio}  />
            <span>{pad.key}</span>
        </button>
    )
}

export default DrumPad;


