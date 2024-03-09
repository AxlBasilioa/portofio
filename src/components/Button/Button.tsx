import React, { useState } from "react";
import "./Button.css";

interface ButtonProps {
    innerText: string;
    onClick: (buttonName: string) => void;
    isActive: boolean;
}

function Button({ innerText, onClick, isActive }: ButtonProps) {
    const handleClick = () => {
        onClick(innerText);
    };
    return (
        <div className={`button-custom ${isActive ? "active" : ""}`} onClick={handleClick}>
            {innerText}
        </div>
    );
}

function MenuButtons() {
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="buttons-menu">
            <Button innerText="Home" onClick={handleClick} isActive={activeButton === "Home"} />
            <Button innerText="Portfolio" onClick={handleClick} isActive={activeButton === "Portfolio"} />
            <Button innerText="About" onClick={handleClick} isActive={activeButton === "About"} />
            <Button innerText="Contact" onClick={handleClick} isActive={activeButton === "Contact"} />
        </div>
    );
}

export default MenuButtons;
