import { useState } from "react";
import heater1 from "./assets/audio/Heater-1.mp3";
import heater2 from "./assets/audio/Heater-2.mp3";
import heater3 from "./assets/audio/Heater-3.mp3";
import heater4 from "./assets/audio/Heater-4_1.mp3";
import clap from "./assets/audio/Cev_H2.mp3";
import hihat from "./assets/audio/Dsc_Oh.mp3";
import kickhat from "./assets/audio/Kick_n_Hat.mp3";
import kick from "./assets/audio/RP4_KICK_1.mp3";
import ride from "./assets/audio/RP4_KICK_1.mp3";


import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [bank, setBank] = useState(true);

  const drumPads = [
    {
      name: "Heater 1",
      id: "Q",
      src: heater1,
      keypad: 81,
    },
    {
      name: "Heater 2",
      id: "W",
      src: heater2,
      keypad: 87,
    },
    {
      name: "Heater 3",
      id: "E",
      src: heater3,
      keypad: 69,
    },
    {
      name: "Heater 4",
      id: "A",
      src: heater4,
      keypad: 65,
    },
    {
      name: "Clap",
      id: "S",
      src: clap,
      keypad: 83,
    },
    {
      name: "Open HH",
      id: "D",
      src: hihat,
      keypad: 68,
    },
    {
      name: "Kick-n'-Hat",
      id: "Z",
      src: kick,
      keypad: 90,
    },
    {
      name: "Kick",
      id: "X",
      src: ride,
      keypad: 88,
    },
    {
      name: "Closed HH",
      id: "C",
      src: kickhat,
      keypad: 67,
    },
  ];

  const playSound = e => {
    if (power) {
      const audio = document.getElementById(e.target.innerText);
      audio.play();
      audio.volume = volume;
      setDisplay(e.target.id);
    }
  };

  const handlePower = () => {
    setPower(!power);
    setDisplay("");
  };

  const handleVolume = e => {
    setVolume(e.target.value);
    setDisplay("Volume: " + Math.round(e.target.value * 100));
  };

  const keycapHandler = e => {
    drumPads.forEach(pad => {
      if (e.keyCode === pad.keypad) {
        const audio = document.getElementById(pad.id);
        audio.play();
        audio.volume = volume;
        setDisplay(pad.name);
      }
    });
  };


  return (
    <>
      <div
        className="App"

      >
        <div className="drum-machine" id="drum-machine">
          <div className="display" id="display">
            <h1>Drum Machine</h1>
            <ToggleSwitch onChange={handlePower} />
            <div className="volume">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolume}
              />
            </div>
            <div className="display-text" id="display-text">
              <p>{display}</p>
            </div>

            {drumPads.map((drumPad, i) => (
              <button className="drum-pad" id={drumPad.name} onClick={playSound} value={drumPad} onKeyDown={keycapHandler} key={i}>
                {drumPad.id}
                <audio className="clip" id={drumPad.id} src={drumPad.src}></audio>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
