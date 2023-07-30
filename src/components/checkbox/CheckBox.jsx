import "./checkBox.scss";
import { useState } from "react";
import { animated, useSpring, config, useChain, useSpringRef } from "react-spring";

function CheckBox({ groceryitem }) {
    const [isChecked, setIsChecked] = useState(false);
    const checkboxAnimationRef = useSpringRef();
    const checkboxAnimationStyle = useSpring({
        backgroundColor: isChecked ? "#ffc430" : "#000",
        borderColor: isChecked ? "#ffc430" : "#000",
        config: config.gentle,
        ref: checkboxAnimationRef,
    });

    const [checkmarkLength, setCheckmarkLength] = useState(null);

    const checkmarkAnimationRef = useSpringRef();
    const checkmarkAnimationStyle = useSpring({
        x: isChecked ? 0 : checkmarkLength,
        config: config.gentle,
        ref: checkmarkAnimationRef,
    });

    useChain(
        isChecked ? [checkboxAnimationRef, checkmarkAnimationRef] : [checkmarkAnimationRef, checkboxAnimationRef],
        [0, 0.1] //delay by 0.1sec
    );

    return (
        <>
            <label className="checkbox__label">
                <input
                    className="checkbox__box"
                    type="checkbox"
                    onChange={() => {
                        setIsChecked(!isChecked);
                    }}
                />
                <animated.svg
                    className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                    aria-hidden="true"
                    viewBox="-2 0 19 12 "
                    fill="none">
                    <animated.path
                        d="M1 4.5L5 9L14 1"
                        strokeWidth="3"
                        // stroke={isChecked ? "#000" : "none"}
                        stroke="#000"
                        strokeDasharray={checkmarkLength}
                        strokeDashoffset={checkmarkAnimationStyle.x}
                        ref={(ref) => {
                            if (ref) {
                                setCheckmarkLength(ref.getTotalLength());
                            }
                        }}
                    />
                </animated.svg>
                <p className="checkbox__text">{groceryitem}</p>
            </label>
        </>
    );
}

export default CheckBox;
