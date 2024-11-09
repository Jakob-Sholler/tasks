import React, { useState } from "react";
import { Button } from "react-bootstrap";
/*Removed the halfer and double function and put into one function.*/
export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <Button
                    onClick={() => {
                        setDhValue(2 * dhValue);
                    }}
                >
                    Double
                </Button>
                <Button
                    onClick={() => {
                        setDhValue(0.5 * dhValue);
                    }}
                >
                    Halve
                </Button>
            </div>
        </div>
    );
}
