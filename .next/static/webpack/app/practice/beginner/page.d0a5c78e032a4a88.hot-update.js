"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/practice/beginner/page",{

/***/ "(app-pages-browser)/./src/app/practice/beginner/page.js":
/*!*******************************************!*\
  !*** ./src/app/practice/beginner/page.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Beginner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_beginner_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/beginner.css */ \"(app-pages-browser)/./styles/beginner.css\");\n/* harmony import */ var _home_navbar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home-navbar/page */ \"(app-pages-browser)/./src/app/home-navbar/page.js\");\n/* harmony import */ var _CodeEditor_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CodeEditor/page */ \"(app-pages-browser)/./src/app/CodeEditor/page.js\");\n/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authUtils */ \"(app-pages-browser)/./src/app/authUtils.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Beginner() {\n    _s();\n    const [selectedQuestion, setSelectedQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [completedQuestions, setCompletedQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [showSolution, setShowSolution] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userEmail, setUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Qcolor, setQcolor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const questions = [\n        {\n            id: 1,\n            heading: \"Array Sort\",\n            statement: \"Write a function to sort an array of numbers.\",\n            solution: \"function sortArray(arr) {\\n                return arr.sort((a, b) => a - b);\\n            }\",\n            testCases: [\n                {\n                    input: [\n                        3,\n                        1,\n                        4,\n                        2\n                    ],\n                    expected: [\n                        1,\n                        2,\n                        3,\n                        4\n                    ]\n                },\n                {\n                    input: [\n                        10,\n                        5,\n                        8\n                    ],\n                    expected: [\n                        5,\n                        8,\n                        10\n                    ]\n                }\n            ]\n        },\n        {\n            id: 2,\n            heading: \"Sum of Numbers\",\n            statement: \"Write a function to sum all numbers in an array.\",\n            solution: \"function sumArray(arr) {\\n                return arr.reduce((a, b) => a + b, 0);\\n            }\",\n            testCases: [\n                {\n                    input: [\n                        1,\n                        2,\n                        3\n                    ],\n                    expected: 6\n                },\n                {\n                    input: [\n                        5,\n                        10,\n                        15\n                    ],\n                    expected: 30\n                }\n            ]\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const email = (0,_authUtils__WEBPACK_IMPORTED_MODULE_5__.getUserEmailFromToken)();\n        setUserEmail(email);\n    }, []);\n    const handleRunCode = ()=>{\n        if (!selectedQuestion) return;\n        try {\n            const userFunction = new Function(\"return \" + userCode);\n            const func = userFunction();\n            let allTestsPassed = true;\n            for (const testCase of selectedQuestion.testCases){\n                const result = func(testCase.input);\n                if (result.toString() !== testCase.expected.toString()) {\n                    setOutput(\"Incorrect for input \".concat(testCase.input, \". Your Output: \").concat(result, \", Expected: \").concat(testCase.expected));\n                    allTestsPassed = false;\n                    break;\n                }\n            }\n            if (allTestsPassed) {\n                setOutput(\"Correct! Problem solved.\");\n                saveSolvedQuestion(selectedQuestion.id); // Save the question after successful completion\n            }\n        } catch (error) {\n            setOutput(\"Error: \".concat(error.message));\n        }\n    };\n    const handleViewSolution = ()=>{\n        if (showSolution) {\n            setUserCode(\"\");\n        } else {\n            setUserCode(selectedQuestion.solution);\n        }\n        setShowSolution(!showSolution);\n    };\n    const handleQuestionClick = (question)=>{\n        setSelectedQuestion(question);\n        setUserCode(\"\");\n        setShowSolution(false);\n        setOutput(\"\");\n    };\n    const saveSolvedQuestion = async (questionId)=>{\n        if (!userEmail) return;\n        try {\n            const response = await fetch(\"/api/beginnerQuestions\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userEmail,\n                    questionId\n                })\n            });\n            if (!response.ok) {\n                // Handle non-200 responses\n                console.error(\"Network response was not ok:\", response.statusText);\n                return;\n            }\n            const data = await response.json();\n            if (data.success) {\n                setCompletedQuestions((prev)=>({\n                        ...prev,\n                        [questionId]: true\n                    }));\n            } else {\n                console.error(\"Failed to save question:\", data.error);\n            }\n        } catch (error) {\n            console.error(\"Error saving question:\", error);\n        }\n    };\n    const sViewQuestion = async (questionId)=>{\n        if (!userEmail) return;\n        try {\n            const response = await fetch(\"/api/beginnerQuestions\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userEmail,\n                    questionId\n                })\n            });\n            if (!response.ok) {\n                // Handle non-200 responses\n                console.error(\"Network response was not ok:\", response.statusText);\n                return;\n            }\n            const data = await response.json();\n            if (data.success) {\n                setCompletedQuestions((prev)=>({\n                        ...prev,\n                        [questionId]: true\n                    }));\n            } else {\n                console.error(\"Failed to save question:\", data.error);\n            }\n        } catch (error) {\n            console.error(\"Error saving question:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_navbar_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                lineNumber: 153,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"beginner_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"questions_list\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: questions.map((question)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"question_item \".concat((selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.id) === question.id ? \"active\" : \"\", \" \").concat(completedQuestions[question.id] ? \"completed\" : \"\"),\n                                    onClick: ()=>handleQuestionClick(question),\n                                    children: [\n                                        question.heading,\n                                        completedQuestions[question.id] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fas fa-check-circle check_icon\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                            lineNumber: 164,\n                                            columnNumber: 69\n                                        }, this)\n                                    ]\n                                }, question.id, true, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 158,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                            lineNumber: 156,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                        lineNumber: 155,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"question_details\",\n                        children: selectedQuestion ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"question_header\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: selectedQuestion.heading\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                            lineNumber: 173,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"button view_solution_btn\",\n                                            onClick: handleViewSolution,\n                                            children: showSolution ? \"Hide Solution\" : \"View Solution\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                            lineNumber: 174,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 172,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: selectedQuestion.statement\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 178,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CodeEditor_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    code: userCode,\n                                    setCode: setUserCode,\n                                    onRunCode: handleRunCode\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 179,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"output\",\n                                    children: output\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 180,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"select_para\",\n                            children: \"Select a question to start coding\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                            lineNumber: 183,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                        lineNumber: 169,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                lineNumber: 154,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Beginner, \"smJ5E1Hmq8KdVYlfQ+owK917wrQ=\");\n_c = Beginner;\nvar _c;\n$RefreshReg$(_c, \"Beginner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJhY3RpY2UvYmVnaW5uZXIvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0g7QUFDTztBQUNDO0FBQ087QUFFekMsU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLG9CQUFvQkMsc0JBQXNCLEdBQUdiLCtDQUFRQSxDQUFDLENBQUM7SUFDOUQsTUFBTSxDQUFDYyxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDZ0IsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDa0IsUUFBUUMsVUFBVSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFckMsTUFBTW9CLFlBQVk7UUFDZDtZQUNJQyxJQUFJO1lBQ0pDLFNBQVM7WUFDVEMsV0FBVztZQUNYQyxVQUFXO1lBR1hDLFdBQVc7Z0JBQ1A7b0JBQUVDLE9BQU87d0JBQUM7d0JBQUc7d0JBQUc7d0JBQUc7cUJBQUU7b0JBQUVDLFVBQVU7d0JBQUM7d0JBQUc7d0JBQUc7d0JBQUc7cUJBQUU7Z0JBQUM7Z0JBQzlDO29CQUFFRCxPQUFPO3dCQUFDO3dCQUFJO3dCQUFHO3FCQUFFO29CQUFFQyxVQUFVO3dCQUFDO3dCQUFHO3dCQUFHO3FCQUFHO2dCQUFDO2FBQzdDO1FBQ0w7UUFDQTtZQUNJTixJQUFJO1lBQ0pDLFNBQVM7WUFDVEMsV0FBVztZQUNYQyxVQUFXO1lBR1hDLFdBQVc7Z0JBQ1A7b0JBQUVDLE9BQU87d0JBQUM7d0JBQUc7d0JBQUc7cUJBQUU7b0JBQUVDLFVBQVU7Z0JBQUU7Z0JBQ2hDO29CQUFFRCxPQUFPO3dCQUFDO3dC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QUFhOEQsV0FBVzFDOzs7Ozs7OENBQy9ELDhEQUFDOEI7b0NBQUlDLFdBQVU7OENBQVVsRDs7Ozs7Ozt5REFHN0IsOERBQUMwRDs0QkFBRVIsV0FBVTtzQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRDtHQXJMd0J2RDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3ByYWN0aWNlL2JlZ2lubmVyL3BhZ2UuanM/MDA1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2JlZ2lubmVyLmNzc1wiO1xyXG5pbXBvcnQgSG9tZU5hdmJhciBmcm9tIFwiLi4vLi4vaG9tZS1uYXZiYXIvcGFnZVwiO1xyXG5pbXBvcnQgTW9uYWNvRWRpdG9yIGZyb20gJy4uLy4uL0NvZGVFZGl0b3IvcGFnZSc7XHJcbmltcG9ydCB7IGdldFVzZXJFbWFpbEZyb21Ub2tlbiB9IGZyb20gJy4uLy4uL2F1dGhVdGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZWdpbm5lcigpIHtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFF1ZXN0aW9uLCBzZXRTZWxlY3RlZFF1ZXN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJDb2RlLCBzZXRVc2VyQ29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NvbXBsZXRlZFF1ZXN0aW9ucywgc2V0Q29tcGxldGVkUXVlc3Rpb25zXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtzaG93U29sdXRpb24sIHNldFNob3dTb2x1dGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdXNlckVtYWlsLCBzZXRVc2VyRW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW1Fjb2xvciwgc2V0UWNvbG9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBxdWVzdGlvbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgaGVhZGluZzogXCJBcnJheSBTb3J0XCIsXHJcbiAgICAgICAgICAgIHN0YXRlbWVudDogXCJXcml0ZSBhIGZ1bmN0aW9uIHRvIHNvcnQgYW4gYXJyYXkgb2YgbnVtYmVycy5cIixcclxuICAgICAgICAgICAgc29sdXRpb246IGBmdW5jdGlvbiBzb3J0QXJyYXkoYXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICAgIHRlc3RDYXNlczogW1xyXG4gICAgICAgICAgICAgICAgeyBpbnB1dDogWzMsIDEsIDQsIDJdLCBleHBlY3RlZDogWzEsIDIsIDMsIDRdIH0sXHJcbiAgICAgICAgICAgICAgICB7IGlucHV0OiBbMTAsIDUsIDhdLCBleHBlY3RlZDogWzUsIDgsIDEwXSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiU3VtIG9mIE51bWJlcnNcIixcclxuICAgICAgICAgICAgc3RhdGVtZW50OiBcIldyaXRlIGEgZnVuY3Rpb24gdG8gc3VtIGFsbCBudW1iZXJzIGluIGFuIGFycmF5LlwiLFxyXG4gICAgICAgICAgICBzb2x1dGlvbjogYGZ1bmN0aW9uIHN1bUFycmF5KGFycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyci5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICAgIHRlc3RDYXNlczogW1xyXG4gICAgICAgICAgICAgICAgeyBpbnB1dDogWzEsIDIsIDNdLCBleHBlY3RlZDogNiB9LFxyXG4gICAgICAgICAgICAgICAgeyBpbnB1dDogWzUsIDEwLCAxNV0sIGV4cGVjdGVkOiAzMCB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZ2V0VXNlckVtYWlsRnJvbVRva2VuKCk7XHJcbiAgICAgICAgc2V0VXNlckVtYWlsKGVtYWlsKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgIFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJ1bkNvZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZFF1ZXN0aW9uKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJGdW5jdGlvbiA9IG5ldyBGdW5jdGlvbigncmV0dXJuICcgKyB1c2VyQ29kZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1bmMgPSB1c2VyRnVuY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhbGxUZXN0c1Bhc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGVzdENhc2Ugb2Ygc2VsZWN0ZWRRdWVzdGlvbi50ZXN0Q2FzZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZ1bmModGVzdENhc2UuaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudG9TdHJpbmcoKSAhPT0gdGVzdENhc2UuZXhwZWN0ZWQudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE91dHB1dChgSW5jb3JyZWN0IGZvciBpbnB1dCAke3Rlc3RDYXNlLmlucHV0fS4gWW91ciBPdXRwdXQ6ICR7cmVzdWx0fSwgRXhwZWN0ZWQ6ICR7dGVzdENhc2UuZXhwZWN0ZWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsVGVzdHNQYXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFsbFRlc3RzUGFzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRPdXRwdXQoXCJDb3JyZWN0ISBQcm9ibGVtIHNvbHZlZC5cIik7XHJcbiAgICAgICAgICAgICAgICBzYXZlU29sdmVkUXVlc3Rpb24oc2VsZWN0ZWRRdWVzdGlvbi5pZCk7IC8vIFNhdmUgdGhlIHF1ZXN0aW9uIGFmdGVyIHN1Y2Nlc3NmdWwgY29tcGxldGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0T3V0cHV0KGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVmlld1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzaG93U29sdXRpb24pIHtcclxuICAgICAgICAgICAgc2V0VXNlckNvZGUoJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFVzZXJDb2RlKHNlbGVjdGVkUXVlc3Rpb24uc29sdXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTaG93U29sdXRpb24oIXNob3dTb2x1dGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVF1ZXN0aW9uQ2xpY2sgPSAocXVlc3Rpb24pID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZFF1ZXN0aW9uKHF1ZXN0aW9uKTtcclxuICAgICAgICBzZXRVc2VyQ29kZSgnJyk7XHJcbiAgICAgICAgc2V0U2hvd1NvbHV0aW9uKGZhbHNlKTtcclxuICAgICAgICBzZXRPdXRwdXQoJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzYXZlU29sdmVkUXVlc3Rpb24gPSBhc3luYyAocXVlc3Rpb25JZCkgPT4ge1xyXG4gICAgICAgIGlmICghdXNlckVtYWlsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2JlZ2lubmVyUXVlc3Rpb25zJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlckVtYWlsLCBxdWVzdGlvbklkIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBub24tMjAwIHJlc3BvbnNlc1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb21wbGV0ZWRRdWVzdGlvbnMocHJldiA9PiAoeyAuLi5wcmV2LCBbcXVlc3Rpb25JZF06IHRydWUgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgcXVlc3Rpb246JywgZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgcXVlc3Rpb246JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc1ZpZXdRdWVzdGlvbiA9IGFzeW5jIChxdWVzdGlvbklkKSA9PiB7XHJcbiAgICAgICAgaWYgKCF1c2VyRW1haWwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYmVnaW5uZXJRdWVzdGlvbnMnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyRW1haWwsIHF1ZXN0aW9uSWQgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIG5vbi0yMDAgcmVzcG9uc2VzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2s6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHNldENvbXBsZXRlZFF1ZXN0aW9ucyhwcmV2ID0+ICh7IC4uLnByZXYsIFtxdWVzdGlvbklkXTogdHJ1ZSB9KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2F2ZSBxdWVzdGlvbjonLCBkYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBxdWVzdGlvbjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIb21lTmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVnaW5uZXJfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uc19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb25zLm1hcCgocXVlc3Rpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cXVlc3Rpb24uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcXVlc3Rpb25faXRlbSAke3NlbGVjdGVkUXVlc3Rpb24/LmlkID09PSBxdWVzdGlvbi5pZCA/ICdhY3RpdmUnIDogJyd9ICR7Y29tcGxldGVkUXVlc3Rpb25zW3F1ZXN0aW9uLmlkXSA/ICdjb21wbGV0ZWQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdWVzdGlvbkNsaWNrKHF1ZXN0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uaGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tcGxldGVkUXVlc3Rpb25zW3F1ZXN0aW9uLmlkXSAmJiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2stY2lyY2xlIGNoZWNrX2ljb25cIj48L2k+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbl9kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUXVlc3Rpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57c2VsZWN0ZWRRdWVzdGlvbi5oZWFkaW5nfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gdmlld19zb2x1dGlvbl9idG5cIiBvbkNsaWNrPXtoYW5kbGVWaWV3U29sdXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1NvbHV0aW9uID8gJ0hpZGUgU29sdXRpb24nIDogJ1ZpZXcgU29sdXRpb24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c2VsZWN0ZWRRdWVzdGlvbi5zdGF0ZW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbmFjb0VkaXRvciBjb2RlPXt1c2VyQ29kZX0gc2V0Q29kZT17c2V0VXNlckNvZGV9IG9uUnVuQ29kZT17aGFuZGxlUnVuQ29kZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0XCI+e291dHB1dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzZWxlY3RfcGFyYSc+U2VsZWN0IGEgcXVlc3Rpb24gdG8gc3RhcnQgY29kaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWVOYXZiYXIiLCJNb25hY29FZGl0b3IiLCJnZXRVc2VyRW1haWxGcm9tVG9rZW4iLCJCZWdpbm5lciIsInNlbGVjdGVkUXVlc3Rpb24iLCJzZXRTZWxlY3RlZFF1ZXN0aW9uIiwidXNlckNvZGUiLCJzZXRVc2VyQ29kZSIsIm91dHB1dCIsInNldE91dHB1dCIsImNvbXBsZXRlZFF1ZXN0aW9ucyIsInNldENvbXBsZXRlZFF1ZXN0aW9ucyIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInVzZXJFbWFpbCIsInNldFVzZXJFbWFpbCIsIlFjb2xvciIsInNldFFjb2xvciIsInF1ZXN0aW9ucyIsImlkIiwiaGVhZGluZyIsInN0YXRlbWVudCIsInNvbHV0aW9uIiwidGVzdENhc2VzIiwiaW5wdXQiLCJleHBlY3RlZCIsImVtYWlsIiwiaGFuZGxlUnVuQ29kZSIsInVzZXJGdW5jdGlvbiIsIkZ1bmN0aW9uIiwiZnVuYyIsImFsbFRlc3RzUGFzc2VkIiwidGVzdENhc2UiLCJyZXN1bHQiLCJ0b1N0cmluZyIsInNhdmVTb2x2ZWRRdWVzdGlvbiIsImVycm9yIiwibWVzc2FnZSIsImhhbmRsZVZpZXdTb2x1dGlvbiIsImhhbmRsZVF1ZXN0aW9uQ2xpY2siLCJxdWVzdGlvbiIsInF1ZXN0aW9uSWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwic3RhdHVzVGV4dCIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsInByZXYiLCJzVmlld1F1ZXN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJsaSIsIm9uQ2xpY2siLCJpIiwiaDIiLCJidXR0b24iLCJwIiwiY29kZSIsInNldENvZGUiLCJvblJ1bkNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/practice/beginner/page.js\n"));

/***/ })

});