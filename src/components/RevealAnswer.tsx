import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, makeVisible] = useState<boolean>(false);

    const toggleVisibility = (): void => {
        makeVisible(!isVisible);
    };

    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>

            {isVisible && <p>42</p>}
        </div>
    );
}
