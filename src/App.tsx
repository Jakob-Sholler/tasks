import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
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
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. (Jakob Sholler) Hello World
            </p>
        </div>
    );
}
export default App;
