import React from "react";
import '../css/Counter.css';

function Counter({ count}) {
    return (
        <div className="div-counter">
            <span>{ count }</span>
        </div>
    );
}
export default Counter;