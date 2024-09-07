"use client";
import { useState, useEffect } from 'react';
import "../../../../styles/beginner.css";
import HomeNavbar from "../../home-navbar/page";
import MonacoEditor from '../../CodeEditor/page';
import { getUserEmailFromToken } from '../../authUtils';

export default function Beginner() {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [userCode, setUserCode] = useState('');
    const [output, setOutput] = useState('');
    const [completedQuestions, setCompletedQuestions] = useState({});
    const [showSolution, setShowSolution] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [Qcolor, setQcolor] = useState(false);



    
    const questions = [
        {
            id: 1,
            heading: "Array Sort",
            statement: "Write a function to sort an array of numbers.",
            solution: `function sortArray(arr) {
                return arr.sort((a, b) => a - b);
            }`,
            testCases: [
                { input: [3, 1, 4, 2], expected: [1, 2, 3, 4] },
                { input: [10, 5, 8], expected: [5, 8, 10] }
            ]
        },
        {
            id: 2,
            heading: "Sum of Numbers",
            statement: "Write a function to sum all numbers in an array.",
            solution: `function sumArray(arr) {
                return arr.reduce((a, b) => a + b, 0);
            }`,
            testCases: [
                { input: [1, 2, 3], expected: 6 },
                { input: [5, 10, 15], expected: 30 }
            ]
        },
    ];

    useEffect(() => {
        const email = getUserEmailFromToken();
        setUserEmail(email);
        viewSolvedQuestion(userEmail)
    }, []);



    const handleRunCode = () => {
        if (!selectedQuestion) return;

        try {
            const userFunction = new Function('return ' + userCode);
            const func = userFunction();

            let allTestsPassed = true;
            for (const testCase of selectedQuestion.testCases) {
                const result = func(testCase.input);

                if (result.toString() !== testCase.expected.toString()) {
                    setOutput(`Incorrect for input ${testCase.input}. Your Output: ${result}, Expected: ${testCase.expected}`);
                    allTestsPassed = false;
                    break;
                }
            }

            if (allTestsPassed) {
                setOutput("Correct! Problem solved.");
                saveSolvedQuestion(selectedQuestion.id); 
            }
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    const handleViewSolution = () => {
        if (showSolution) {
            setUserCode('');
        } else {
            setUserCode(selectedQuestion.solution);
        }
        setShowSolution(!showSolution);
    };

    const handleQuestionClick = (question) => {
        setSelectedQuestion(question);
        setUserCode('');
        setShowSolution(false);
        setOutput('');
    };

    const saveSolvedQuestion = async (questionId) => {
        if (!userEmail) return;

        try {
            const response = await fetch('/api/beginnerQuestions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userEmail, questionId })
            });

            if (!response.ok) {
                // Handle non-200 responses
                console.error('Network response was not ok:', response.statusText);
                return;
            }

            const data = await response.json();

            if (data.success) {
                setCompletedQuestions(prev => ({ ...prev, [questionId]: true }));
            } else {
                console.error('Failed to save question:', data.error);
            }
        } catch (error) {
            console.error('Error saving question:', error);
        }
    };

    const viewSolvedQuestion = async (userEmail) => {
    
        try {
            console.log(userEmail);
            
            const response = await fetch('/api/ViewQuestions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userEmail })
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data, 'Fetched solved questions');
    
            if (data.data && Array.isArray(data.data)) {
                // Convert array to an object for easier state management
                const solvedQuestions = data.data.reduce((acc, id) => ({ ...acc, [id]: true }), {});
                setCompletedQuestions(solvedQuestions);
            } else {
                console.error('No solved questions data found:', data.error);
            }
        } catch (error) {
            console.error('Error fetching solved questions:', error);
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
                                className={`question_item ${selectedQuestion?.id === question.id ? 'active' : ''} ${Qcolor ? 'completed' : ''}`}
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
                                <button className="button view_solution_btn" onClick={handleViewSolution}>
                                    {showSolution ? 'Hide Solution' : 'View Solution'}
                                </button>
                            </div>
                            <p>{selectedQuestion.statement}</p>
                            <MonacoEditor code={userCode} setCode={setUserCode} onRunCode={handleRunCode} />
                            <div className="output">{output}</div>
                        </>
                    ) : (
                        <p className='select_para'>Select a question to start coding</p>
                    )}
                </div>
            </div>
        </>
    );
}
