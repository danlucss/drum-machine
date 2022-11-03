import { useState } from "react";

const ToggleSwitch = ({ checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = () => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
    };

    return (
        <div className="toggle-switch">
            <input
                type="checkbox"
                className="toggle-switch__checkbox"
                checked={isChecked}
                onChange={handleChange}
            />
            <div className="toggle-switch__slider" />
        </div>
    );
}

export default ToggleSwitch;