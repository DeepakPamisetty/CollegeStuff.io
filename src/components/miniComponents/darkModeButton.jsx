import React from "react";

export default function DarkButton(props) {
    return (
        <button onClick={props.setDarkMode} className="dark-button">
            {props.darkMode ? "Light Mode" : "Dark Mode"}
        </button> 
    )
}