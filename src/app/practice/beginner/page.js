"use client";
import { useState } from 'react';
import "../../../../styles/beginner.css";
import HomeNavbar from "../../home-navbar/page";
import MonacoEditor from '../../CodeEditor/page';

export default function Beginner() {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            heading: "Array Sort",
            statement: "Write a function to sort an array of numbers.",
            solution: "function sortArray(arr) { return arr.sort((a, b) => a - b); }",
            testCases: [
                { input: [3, 1, 4, 2], expected: [1, 2, 3, 4] },
                { input: [10, 5, 8], expected: [5, 8, 10] }
            ]
        },
        {
            id: 2,
            heading: "Sum of Numbers",
            statement: "Write a function to sum all numbers in an array.",
            solution: "function sumArray(arr) { return arr.reduce((a, b) => a + b, 0); }",
            testCases: [
                { input: [1, 2, 3], expected: 6 },
                { input: [5, 10, 15], expected: 30 }
            ]
        },
    ]);
    
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [userCode, setUserCode] = useState('');
    const [output, setOutput] = useState('');
    const [completedQuestions, setCompletedQuestions] = useState({});
    const [showSolution, setShowSolution] = useState(false);

    const handleRunCode = () => {
        if (!selectedQuestion) return;
    
        try {
            // Create the user's function from the editor's code
            const userFunction = new Function('return ' + userCode);
            const func = userFunction();  // Execute and return the function
    
            // Check the result against each test case
            let allTestsPassed = true;
            for (const testCase of selectedQuestion.testCases) {
                const result = func(testCase.input);  // Call the function with test input
    
                if (result.toString() !== testCase.expected.toString()) {
                    setOutput(`Incorrect for input ${testCase.input}. Your Output: ${result}, Expected: ${testCase.expected}`);
                    allTestsPassed = false;
                    break;
                }
            }
    
            if (allTestsPassed) {
                setOutput("Correct! Problem solved.");
                setCompletedQuestions(prev => ({ ...prev, [selectedQuestion.id]: true }));
            }
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };
    

    

    // Handle question selection
    const handleQuestionClick = (question) => {
        setSelectedQuestion(question);
        setUserCode(''); // Reset user code when a new question is selected
        setShowSolution(false); // Hide solution initially
        setOutput(''); // Clear previous output
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
                                onClick={() => handleQuestionClick(question)}
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
                            {/* Code editor for writing the user's solution */}
                            <MonacoEditor code={userCode} setCode={setUserCode} onRunCode={handleRunCode} />
                            {/* Display output or errors */}
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
