"use client";
import { useState } from 'react';
import "../../../../styles/beginner.css";
import HomeNavbar from "../../home-navbar/page";

export default function Beginner() {
    const [questions, setQuestions] = useState([
        { id: 1, heading: "Array Sort", statement: "Write a function to sort an array of numbers.", solution: "arr.sort((a, b) => a - b)" },
        { id: 2, heading: "Sum of Numbers", statement: "Write a function to sum all numbers in an array.", solution: "arr.reduce((a, b) => a + b, 0)" },
    ]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [userCode, setUserCode] = useState('');
    const [output, setOutput] = useState('');
    const [completedQuestions, setCompletedQuestions] = useState({});
    const [showSolution, setShowSolution] = useState(false);

    const handleRunCode = () => {
        if (!selectedQuestion) return;

        try {
            // Evaluate the user's code in a sandboxed environment
            const result = eval(userCode); // Evaluates the user input code

            // Check if the user code produces the correct result
            const expectedSolutionFunction = new Function(`return ${selectedQuestion.solution}`);
            const expectedSolutionResult = expectedSolutionFunction();

            if (result.toString() === expectedSolutionResult.toString()) {
                setOutput("Correct!");
                setCompletedQuestions(prev => ({ ...prev, [selectedQuestion.id]: true }));
            } else {
                setOutput(result); // Display the output if it's not correct
            }
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    return (
        <>
            <HomeNavbar />
            <div className="beginner_container">
                <div className="questions_list">
                    <ul>
                        {questions.map((question) => (
                            <li
                                key={question.id}
                                className={`question_item ${selectedQuestion?.id === question.id ? 'active' : ''} ${completedQuestions[question.id] ? 'completed' : ''}`}
                                onClick={() => {
                                    setSelectedQuestion(question);
                                    setShowSolution(false);
                                    setOutput(''); // Clear output when selecting a new question
                                }}
                            >
                                {question.heading}
                                {completedQuestions[question.id] && <i className="fas fa-check-circle check_icon"></i>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="question_details">
                    {selectedQuestion ? (
                        <>
                            <div className="question_header">
                                <h2>{selectedQuestion.heading}</h2>
                                <button className="button view_solution_btn" onClick={() => setShowSolution(!showSolution)}>
                                    {showSolution ? 'Hide Solution' : 'View Solution'}
                                </button>
                            </div>
                            <p>{selectedQuestion.statement}</p>
                            {showSolution && <pre className="solution_code">{selectedQuestion.solution}</pre>}
                            <textarea
                                value={userCode}
                                onChange={(e) => setUserCode(e.target.value)}
                                placeholder="Write your solution here..."
                                rows={10}
                            />
                            <button className="button" onClick={handleRunCode}>Run</button>
                            <div className="output">{output}</div>
                        </>
                    ) : (
                        <p>Select a question to start coding</p>
                    )}
                </div>
            </div>
        </>
    );
}
