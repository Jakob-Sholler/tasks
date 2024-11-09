import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    const changeType = (): void => {
        setQuestionType((prevType) =>
            prevType === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question",
        );
    };
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            <p>
                {questionType === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </p>
        </div>
    );
}