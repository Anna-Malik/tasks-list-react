import React from "react";
import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__container">
            <header className="section__header">
                <h2>{title}</h2>
                {extraHeaderContent}
            </header>
            {body}
        </div>
    </section>
)

export default Section;

