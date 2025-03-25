import React from "react";
import '../css/Button.css';

function Button({ text, manageClick }) {
    return (
        <button
        className="Button"
        onClick={ manageClick }
        >
            { text }
        </button>
    );
}
export default Button;