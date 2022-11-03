import { useState } from "react";
import "./index.scss"
const ToggleSwitch = ({ onChange }) => {
    const [powerOn, setPowerOn] = useState(false);

    const toggle = () => {

        setPowerOn(!powerOn);
        onChange();
    }
    return (


        <>

            <div className="toggle-switch">
                <button onClick={toggle} className={"togle--button" + (powerOn ? "toggle--close" : "")}>{powerOn ? "ON" : "OFF"}</button>
                <div className="toggle-switch__track"></div>
                <div className="toggle-switch__thumb"></div>
            </div>

        </>

    )

}

export default ToggleSwitch;