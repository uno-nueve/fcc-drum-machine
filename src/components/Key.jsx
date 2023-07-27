import React, { useEffect } from 'react';

const Key = ({ pad, playAudio }) => {

    const handleKeydown = (e) => {
        if(e.keyCode === pad.code) {
            playAudio(pad.id, pad.name)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown)
    }, []);

    return(
        <div id={pad.name} className='drum-pad' onClick={() => playAudio(pad.id, pad.name)}>
            <audio id={pad.id} className='clip' src={pad.audio}/>
            {pad.id}
        </div>
    )
}

export default Key;
