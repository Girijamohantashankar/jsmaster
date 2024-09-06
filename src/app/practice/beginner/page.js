"use client";
import { useState } from 'react';
import "../../../../styles/beginner.css";
import HomeNavbar from "../../home-navbar/page";
import MonacoEditor from '../../CodeEditor/page';

export default function Beginner() {
    const [questions, setQuestions] = useState([
        { id: 1, heading: "Array Sort", statement: "Write a function to sort an array of numbers.", solution: "function sortArray(arr) { return arr.sort((a, b) => a - b); }" },
        { id: 2, heading: "Sum of Numbers", statement: "Write a function to sum all numbers in an array.", solution: "function sumArray(arr) { return arr.reduce((a, b) => a + b, 0); }" },
    ]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [userCode, setUserCode] = useState('');
    const [output, setOutput] = useState('');
    const [completedQuestions, setCompletedQuestions] = useState({});
    const [showSolution, setShowSolution] = useState(false);

    const handleRunCode = () => {
        if (!selectedQuestion) return;

        try {
            const userFunction = new Function('arr', userCode);
            const result = userFunction([3, 1, 4, 2]); 

            const expectedFunction = new Function('arr', selectedQuestion.solution);
            const expectedResult = expectedFunction([3, 1, 4, 2]); 

            if (result.toString() === expectedResult.toString()) {
                setOutput("Correct!");
                setCompletedQuestions(prev => ({ ...prev, [selectedQuestion.id]: true }));
            } else {
                setOutput(`Incorrect. Output: ${result}`);
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
                                    setOutput('');
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
                            <MonacoEditor code={userCode} setCode={setUserCode} onRunCode={handleRunCode} />
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
