import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { Button, Container, Row, Col } from "react-bootstrap";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    UM COS420 with React Hooks and TypeScript Converted into H1
                    header
                </h1>

                <img
                    src="https://static.wikia.nocookie.net/yakuza/images/4/4f/Chikenball.png/revision/latest?cb=20190428133133"
                    alt="A picture of the Manager Chicken Nugget from the hit series Yakuza AKA Like a Dragon"
                />

                <ul>
                    <li>Butter</li>
                    <li>Milk</li>
                    <li>Bills</li>
                </ul>

                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "500px",
                                    height: "500px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </header>
            <hr></hr>
            {<DoubleHalf></DoubleHalf>}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
        </div>
    );
}
export default App;
