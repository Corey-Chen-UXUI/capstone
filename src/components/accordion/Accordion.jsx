import React from "react";
import { useEffect, useState } from "react";
import "./accordion.scss";
import chevron from "../../assets/images/icons/chevron.png";

function Accordion({ title, content, isSteps }) {
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <section className="accordion" onClick={() => setClicked(!clicked)}>
                <section className="accordion__title">
                    <h2 className="accordion__title-text">{title}</h2>
                    <img
                        className={clicked ? `accordion__arrow-open` : `accordion__arrow-close`}
                        alt="chevron"
                        src={chevron}
                    />
                </section>
                {clicked && (
                    <section className="accordion__content">
                        <p className="accordion__content-recipe">{content}</p>
                    </section>
                )}
            </section>
        </div>
    );
}

export default Accordion;
