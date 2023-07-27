import React, { useState, useEffect } from 'react';
import DrumPad from './DrumPad';
import Display from './Display';

const pads = [
    {
        key: 'Q',
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        name: 'Heater 1'
    },
    {
        key: 'W',
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        name: 'Heater 2'
    },
    {
        key: 'E',
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        name: 'Heater 3'
    },
    {
        key: 'A',
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        name: 'Heater 4'
    },
    {
        key: 'S',
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        name: 'Clap'
    },
    {
        key: 'D',
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        name: 'Open-HH'
    },
    {
        key: 'Z',
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        name: `Kick-n'-Hat`
    },
    {
        key: 'X',
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        name: 'Kick'
    },
    {
        key: 'C',
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        name: 'Closed-HH'
    },
];

const DrumMachine = () => {
    const [currentKey, setCurrentKey] = useState('');

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            playAudio(e.key.toUpperCase())
        })
    }, [])

    function playAudio(selector) {
        const audio = document.getElementById(selector)
        audio.play()
        setCurrentKey(selector)
    }

    return (
        <div id='drum-machine'>
            <div className='drum-pads-container'>
                <Display name={currentKey} pads={pads}/>
                { pads.map((pad, index) => {
                        return(
                            <DrumPad pad={pad} key={index} playAudio={playAudio} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default DrumMachine;
