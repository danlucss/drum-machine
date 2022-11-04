import { useState } from "react";
import "./index.scss"
const ToggleSwitch = ({ onChange }) => {
    const [powerOn, setPowerOn] = useState(false);
    const [active, setActive] = useState(false);

    const toggle = () => {
        setPowerOn(!powerOn);
        onChange();
    }

    const toggleActive = () => {
        setActive(!active);
    }
    return (


        <>

            <div className="toggle-switch">
                <div onClick={toggle} className={"togle--button " + (powerOn ? "toggle--close" : "")}>{powerOn ? "ON" : "OFF"}

                    <span onClick={toggleActive} className={"toggle-switch__track " + (powerOn ? "active" : "")}  ></span>
                    <span onClick={toggleActive} className={"toggle-switch__thumb " + (powerOn ? "active" : "")}></span>
                </div>
            </div>

        </>

    )

}

export default ToggleSwitch;