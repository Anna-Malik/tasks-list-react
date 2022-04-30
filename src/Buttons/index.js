import React from "react";
import "./style.css";

const Buttons = ({ tasks, doneTasksHidden }) => {
    if (tasks.lenght === 0) {
        return null
    }
    return (
        <div className="buttons">
            <button className="section__buttons">
                {doneTasksHidden ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button className="section__buttons"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;