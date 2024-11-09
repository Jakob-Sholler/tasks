import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 * Filter removes everything except published, when creating a new array.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((questions) => questions.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 * Filter the questions array if,
 * the question's body does not have whitespace after the trim
 * the question's expected, is not blank/whitespace
 * the questions.options is empty, so length 0 = no elements .
 * only if all three are true does it then filter it.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question) =>
            question.body.trim() !== "" ||
            question.expected.trim() !== "" ||
            question.options.length > 0,
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 * || is Or operator.
 * find returns the first instance of truth, question.id is same as id
 * creates foundQuestion which returns the first question that matches its id
 * lastly return either the question or null, if found question failed to be created returns null
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const foundQuestion = questions.find((question) => question.id === id);
    return foundQuestion || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * Hint: use filter
 * filters Id
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((question) => question.id !== id);
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * Do not modify the input array.
 * map creates a copy and of a specific field, name only names array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question) => question.name);
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 * questionId is id
 * Text is empty string
 * submitted and correct are both set to false.
 * Maps the 4 lines below.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false,
    }));
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array
 * maps questions, and returns the spread for all published questions
 * spread copies all internals over, and published :true sets all published values to true.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => {
        return { ...question, published: true };
    });
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * Hint: as usual, do not modify the input questions array
 * new questions is a spread copy of questions
 * blank question is a makeBlankQuestion from Object.ts, import at top of document
 * push the blank question into the new questions, which is a copy of the original questions
 * return newQuestions, which should have both the old and new blank question
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const newQuestions = [...questions];
    const blankQuestion = makeBlankQuestion(id, name, type);
    newQuestions.push(blankQuestion);
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * Hint: as usual, do not modify the input questions array,
 *       to make a new copy of a question with some changes, use the ... operator
 * create an updateQuestions array that is an empty array of Questions
 * forEach loop, for each question, if the question id matches the target Id, push a spread copy of the question with a new name.
 * else loop, else push just the question
 * lastly return the updated questions array.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    const updatedQuestions: Question[] = [];
    questions.forEach((question) => {
        if (question.id === targetId) {
            updatedQuestions.push({ ...question, name: newName });
        } else {
            updatedQuestions.push(question);
        }
    });
    return updatedQuestions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 *
 * Hint: you need to use the ... operator for both the question and the options array
 *
 * If the question is the target Question, create updatedOptions,
 * if the target index is -1 add the new option to the list
 *      Spread operator copys options, and newOption adds the new one into updated options.
 * Else updated optionds is the map of option of the current problem.
 * If the index is the targeted index return new option, else return option
 * Returns the spread of questions with options updated.
 * Lastly returns the question.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            let updatedOptions = [];

            if (targetOptionIndex === -1) {
                updatedOptions = [...question.options, newOption];
            } else {
                updatedOptions = question.options.map((option, index) => {
                    if (index === targetOptionIndex) {
                        return newOption;
                    }
                    return option;
                });
            }
            return { ...question, options: updatedOptions };
        }
        return question;
    });
}
