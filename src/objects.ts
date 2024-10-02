import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
/**oh this is how comments work okay.  */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType,
): Question {
    return {
        id,
        name,
        body: "",
        type,
        expected: "",
        options: [],
        points: 1,
        published: false,
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
/**  trim the white space, and lowercase the answer and question, then return if they are the same.(correct) */
export function isCorrect(question: Question, answer: string): boolean {
    const trimmedanswer = answer.trim().toLowerCase();
    const expectedanswer = question.expected.trim().toLowerCase();
    return trimmedanswer === expectedanswer;
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
/** if it is a short answer return true, else if its multiple choice, and if answer is in options return true, or false. Else false  */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question") {
        return true;
    } else if (question.type === "multiple_choice_question") {
        return question.options.includes(answer);
    }
    return false;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
/** slice the name to be 10 length, then return the id with : + the shortend name */
export function toShortForm(question: Question): string {
    const shortName = question.name.slice(0, 10);
    return question.id + ": " + shortName;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
/** first line is # + name + \n for newline.
 * then next line is - + the option and another newline.
 * trim excess space from markdoown.
 */
export function toMarkdown(question: Question): string {
    let markdown = "# " + question.name + "\n";
    markdown += question.body + "\n";

    if (question.type === "multiple_choice_question") {
        question.options.forEach((option) => {
            markdown += "- " + option + "\n";
        });
    }
    return markdown.trim();
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
/** spread the question, then set name to newname. */
export function renameQuestion(question: Question, newName: string): Question {
    return {
        ...question,
        name: newName,
    };
}

/**t
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
/** spread question, then invert or set the published to not the current option.  */
export function publishQuestion(question: Question): Question {
    return {
        ...question,
        published: !question.published,
    };
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
/**id set as id, name copy of + the old question, slice options because its an array. published is false, rest is the old of current i.e type = oldquestiontype */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {
        id: id,
        name: "Copy of " + oldQuestion.name,
        body: oldQuestion.body,
        type: oldQuestion.type,
        options: oldQuestion.options.slice(),
        expected: oldQuestion.expected,
        points: oldQuestion.points,
        published: false,
    };
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
/**create an added option, which is a slice of options, push the new option onto that. Then use each section to be the new, except options is the new added option that was pushed */
export function addOption(question: Question, newOption: string): Question {
    const addedOption = question.options.slice();
    addedOption.push(newOption);
    return {
        id: question.id,
        name: question.name,
        body: question.body,
        type: question.type,
        options: addedOption,
        expected: question.expected,
        points: question.points,
        published: question.published,
    };
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
/**od ma,e points, are themselves. body type options and expected are contentquestion, slice for options. published false.  */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number },
): Question {
    return {
        id: id,
        name: name,
        body: contentQuestion.body,
        type: contentQuestion.type,
        options: contentQuestion.options.slice(),
        expected: contentQuestion.expected,
        points: points,
        published: false,
    };
}
