import React, { useState, useEffect } from 'react';
import Key from './Key';
import Display from './Display';
import Footer from './Footer';
import './drum-machine.css'

const pads = [
    {
        id: 'Q',
        code: 81,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        name: 'Heater 1'
    },
    {
        id: 'W',
        code: 87,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        name: 'Heater 2'
    },
    {
        id: 'E',
        code: 69,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        name: 'Heater 3'
    },
    {
        id: 'A',
        code: 65,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        name: 'Heater 4'
    },
    {
        id: 'S',
        code: 83,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        name: 'Clap'
    },
    {
        id: 'D',
        code: 68,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        name: 'Open-HH'
    },
    {
        id: 'Z',
        code: 90,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        name: `Kick-n'-Hat`
    },
    {
        id: 'X',
        code: 88,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        name: 'Kick'
    },
    {
        id: 'C',
        code: 67,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        name: 'Closed-HH'
    },
];

const DrumMachine = () => {
    const [audioName, setAudioName] = useState('');

    const toggleStyleActive = (audio) => {
        audio.parentElement.style.backgroundColor = 'var(--contrast-color)'
        audio.parentElement.style.color = 'var(--main-color)'
    }

    const toggleStyleDefault = (audio) => {
        setTimeout(() => {
            audio.parentElement.style.backgroundColor = 'var(--secondary-color)'
            audio.parentElement.style.color = 'whitesmoke' 
        }, 250);
    }

    const playAudio = (id, name) => {
        setAudioName(name)
        const audio = document.getElementById(id)
        toggleStyleActive(audio)
        audio.currentTime = 0
        audio.play()
        toggleStyleDefault(audio)
    }

    return (
        <div id='drum-machine'>
            <div className='wrapper'>
                <h1 className='title'>Drum Machine</h1>
                <div className='container'>
                <Display name={audioName} />
                    {pads.map((pad, index) => {
                        return (
                            <Key key={index} pad={pad} playAudio={playAudio} />
                        )
                    })}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default DrumMachine;
