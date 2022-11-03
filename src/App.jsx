import { useState } from 'react'
import heater1 from './assets/audio/Heater-1.mp3'
import heater2 from './assets/audio/Heater-2.mp3'
import heater3 from './assets/audio/Heater-3.mp3'
import heater4 from './assets/audio/Heater-4_1.mp3'
import clap from './assets/audio/Cev_H2.mp3'
import hihat from './assets/audio/Dsc_Oh.mp3'
import kickhat from './assets/audio/Kick_n_Hat.mp3'
import kick from './assets/audio/RP4_KICK_1.mp3'
import ride from './assets/audio/RP4_KICK_1.mp3'


import './App.css'
import ToggleSwitch from './components/ToggleSwitch'

function App() {

  const [display, setDisplay] = useState('')
  const [power, setPower] = useState(true)
  const [volume, setVolume] = useState(0.5)
  const [bank, setBank] = useState(true)

  const drumPads = [
    {
      id: 'Heater-1',
      letter: 'Q',
      src: heater1
    },
    {
      id: 'Heater-2',
      letter: 'W',
      src: heater2
    },
    {
      id: 'Heater-3',
      letter: 'E',
      src: heater3
    },
    {
      id: 'Heater-4',
      letter: 'A',
      src: heater4
    },
    {
      id: 'Clap',
      letter: 'S',
      src: clap
    },
    {
      id: 'Open-HH',
      letter: 'D',
      src: hihat
    },
    {
      id: 'Kick-n\'-Hat',
      letter: 'Z',
      src: kick
    },
    {
      id: 'Kick',
      letter: 'X',
      src: ride
    },
    {
      id: 'Ride',
      letter: 'C',
      src: kickhat
    }

  ]

  const playSound = (e) => {
    if (!power) {
      const audio = document.getElementById(e.target.innerText)
      audio.play()
      audio.volume = volume
      setDisplay(e.target.id)
    }

  }

  const handlePower = () => {
    setPower(!power)
    setDisplay('')
  }


  return (
    <>
      <div className="App" style={
        {
          textAlign: 'center',
        }
      }>
        <div className='drum-machine' id='drum-machine'>
          <div className='display' id='display'>
            <h1>Drum Machine</h1>
            <ToggleSwitch checked={power} onChange={handlePower} />
            <div className='display-text' id='display-text'>
              <p>{display}</p>
            </div>

            {drumPads.map((drumPad, i) => (
              <button className='drum-pad' id={drumPad.id} onClick={playSound} key={i}>{drumPad.letter}
                <audio className='clip' id={drumPad.letter} src={drumPad.src}></audio>
              </button>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
