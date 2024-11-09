import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // Did it this way so the mock in the tests would work, roll still uses D6.
    const [DieOne, setDieOne] = useState<number>(1);
    const [DieTwo, setDieTwo] = useState<number>(2);

    const rollOne = () => {
        const newDieOne = d6();
        setDieOne(newDieOne);
    };
    const rollTwo = () => {
        const newDieTwo = d6();
        setDieTwo(newDieTwo);
    };

    const checkResult = () => {
        if (DieOne === 1 && DieTwo === 1) {
            return "Lose Snake Eyes!";
        } else if (DieOne === DieTwo) {
            return "Win Doubles!";
        } else {
            return "";
        }
    };
    return (
        <div>
            <span data-testid="left-die">{DieOne}</span>
            <span data-testid="right-die">{DieTwo}</span>
            <Button onClick={rollOne}>Roll Left</Button>
            <Button onClick={rollTwo}>Roll Right</Button>
            <p>{checkResult()}</p>
        </div>
    );
}
