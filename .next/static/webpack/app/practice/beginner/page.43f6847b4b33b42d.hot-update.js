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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Beginner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_beginner_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/beginner.css */ \"(app-pages-browser)/./styles/beginner.css\");\n/* harmony import */ var _home_navbar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home-navbar/page */ \"(app-pages-browser)/./src/app/home-navbar/page.js\");\n/* harmony import */ var _CodeEditor_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CodeEditor/page */ \"(app-pages-browser)/./src/app/CodeEditor/page.js\");\n/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authUtils */ \"(app-pages-browser)/./src/app/authUtils.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Beginner() {\n    _s();\n    const [selectedQuestion, setSelectedQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [completedQuestions, setCompletedQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [showSolution, setShowSolution] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userEmail, setUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Qcolor, setQcolor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const questions = [\n        {\n            id: 1,\n            heading: \"Array Sort\",\n            statement: \"Write a function to sort an array of numbers.\",\n            solution: \"function sortArray(arr) {\\n                return arr.sort((a, b) => a - b);\\n            }\",\n            testCases: [\n                {\n                    input: [\n                        3,\n                        1,\n                        4,\n                        2\n                    ],\n                    expected: [\n                        1,\n                        2,\n                        3,\n                        4\n                    ]\n                },\n                {\n                    input: [\n                        10,\n                        5,\n                        8\n                    ],\n                    expected: [\n                        5,\n                        8,\n                        10\n                    ]\n                }\n            ]\n        },\n        {\n            id: 2,\n            heading: \"Sum of Numbers\",\n            statement: \"Write a function to sum all numbers in an array.\",\n            solution: \"function sumArray(arr) {\\n                return arr.reduce((a, b) => a + b, 0);\\n            }\",\n            testCases: [\n                {\n                    input: [\n                        1,\n                        2,\n                        3\n                    ],\n                    expected: 6\n                },\n                {\n                    input: [\n                        5,\n                        10,\n                        15\n                    ],\n                    expected: 30\n                }\n            ]\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const email = (0,_authUtils__WEBPACK_IMPORTED_MODULE_5__.getUserEmailFromToken)();\n        setUserEmail(email);\n        viewSolvedQuestion();\n    }, []);\n    const handleRunCode = ()=>{\n        if (!selectedQuestion) return;\n        try {\n            const userFunction = new Function(\"return \" + userCode);\n            const func = userFunction();\n            let allTestsPassed = true;\n            for (const testCase of selectedQuestion.testCases){\n                const result = func(testCase.input);\n                if (result.toString() !== testCase.expected.toString()) {\n                    setOutput(\"Incorrect for input \".concat(testCase.input, \". Your Output: \").concat(result, \", Expected: \").concat(testCase.expected));\n                    allTestsPassed = false;\n                    break;\n                }\n            }\n            if (allTestsPassed) {\n                setOutput(\"Correct! Problem solved.\");\n                saveSolvedQuestion(selectedQuestion.id); // Save the question after successful completion\n            }\n        } catch (error) {\n            setOutput(\"Error: \".concat(error.message));\n        }\n    };\n    const handleViewSolution = ()=>{\n        if (showSolution) {\n            setUserCode(\"\");\n        } else {\n            setUserCode(selectedQuestion.solution);\n        }\n        setShowSolution(!showSolution);\n    };\n    const handleQuestionClick = (question)=>{\n        setSelectedQuestion(question);\n        setUserCode(\"\");\n        setShowSolution(false);\n        setOutput(\"\");\n    };\n    const saveSolvedQuestion = async (questionId)=>{\n        if (!userEmail) return;\n        try {\n            const response = await fetch(\"/api/beginnerQuestions\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userEmail,\n                    questionId\n                })\n            });\n            if (!response.ok) {\n                // Handle non-200 responses\n                console.error(\"Network response was not ok:\", response.statusText);\n                return;\n            }\n            const data = await response.json();\n            if (data.success) {\n                setCompletedQuestions((prev)=>({\n                        ...prev,\n                        [questionId]: true\n                    }));\n            } else {\n                console.error(\"Failed to save question:\", data.error);\n            }\n        } catch (error) {\n            console.error(\"Error saving question:\", error);\n        }\n    };\n    const viewSolvedQuestion = async ()=>{\n        console.log();\n        try {\n            const response = await fetch(\"/api/ViewQuestions\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response.ok) {\n                // Handle non-200 responses\n                console.error(\"Network response was not ok:\", response.statusText);\n                return;\n            }\n            const data = await response.json();\n            console.log(data, \"fwafwafwaf\");\n            if (data.success) {\n                setQcolor(true);\n            } else {\n                console.error(\"Failed to save question:\", data.error);\n            }\n        } catch (error) {\n            console.error(\"Error saving question:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_navbar_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                lineNumber: 155,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"beginner_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"questions_list\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: questions.map((question)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"question_item \".concat((selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.id) === question.id ? \"active\" : \"\", \" \").concat(Qcolor ? \"completed\" : \"\"),\n                                    onClick: ()=>handleQuestionClick(question),\n                                    children: [\n                                        question.heading,\n                                        completedQuestions[question.id] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fas fa-check-circle check_icon\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                            lineNumber: 166,\n                                            columnNumber: 69\n                                        }, this)\n                                    ]\n                                }, question.id, true, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 160,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                            lineNumber: 158,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                        lineNumber: 157,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"question_details\",\n                        children: selectedQuestion ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"question_header\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: selectedQuestion.heading\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                            lineNumber: 175,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"button view_solution_btn\",\n                                            onClick: handleViewSolution,\n                                            children: showSolution ? \"Hide Solution\" : \"View Solution\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                            lineNumber: 176,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 174,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: selectedQuestion.statement\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 180,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CodeEditor_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    code: userCode,\n                                    setCode: setUserCode,\n                                    onRunCode: handleRunCode\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 181,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"output\",\n                                    children: output\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 182,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"select_para\",\n                            children: \"Select a question to start coding\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                            lineNumber: 185,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                        lineNumber: 171,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                lineNumber: 156,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Beginner, \"smJ5E1Hmq8KdVYlfQ+owK917wrQ=\");\n_c = Beginner;\nvar _c;\n$RefreshReg$(_c, \"Beginner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJhY3RpY2UvYmVnaW5uZXIvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0g7QUFDTztBQUNDO0FBQ087QUFFekMsU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLG9CQUFvQkMsc0JBQXNCLEdBQUdiLCtDQUFRQSxDQUFDLENBQUM7SUFDOUQsTUFBTSxDQUFDYyxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDZ0IsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDa0IsUUFBUUMsVUFBVSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFckMsTUFBTW9CLFlBQVk7UUFDZDtZQUNJQyxJQUFJO1lBQ0pDLFNBQVM7WUFDVEMsV0FBVztZQUNYQyxVQUFXO1lBR1hDLFdBQVc7Z0JBQ1A7b0JBQUVDLE9BQU87d0JBQUM7d0JBQUc7d0JBQUc7d0JBQUc7cUJBQUU7b0JBQUVDLFVBQVU7d0JBQUM7d0JBQUc7d0JBQUc7d0JBQUc7cUJBQUU7Z0JBQUM7Z0JBQzlDO29CQUFFRCxPQUFPO3dCQUFDO3dCQUFJO3dCQUFHO3FCQUFFO29CQUFFQyxVQUFVO3dCQUFDO3dCQUFHO3dCQUFHO3FCQUFHO2dCQUFDO2FBQzdDO1FBQ0w7UUFDQTtZQUNJTixJQUFJO1lBQ0pDLFNBQVM7WUFDVEMsV0FBVztZQUNYQyxVQUFXO1lBR1hDLFdBQVc7Z0JBQ1A7b0JBQUVDLE9BQU87d0JBQUM7d0JBQUc7d0JBQUc7cUJBQUU7b0JBQUVDLFVBQVU7Z0JBQUU7Z0JBQ2hDO29CQUFFRCxPQUFPO3dCQUFDO3dC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RDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3ByYWN0aWNlL2JlZ2lubmVyL3BhZ2UuanM/MDA1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2JlZ2lubmVyLmNzc1wiO1xyXG5pbXBvcnQgSG9tZU5hdmJhciBmcm9tIFwiLi4vLi4vaG9tZS1uYXZiYXIvcGFnZVwiO1xyXG5pbXBvcnQgTW9uYWNvRWRpdG9yIGZyb20gJy4uLy4uL0NvZGVFZGl0b3IvcGFnZSc7XHJcbmltcG9ydCB7IGdldFVzZXJFbWFpbEZyb21Ub2tlbiB9IGZyb20gJy4uLy4uL2F1dGhVdGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZWdpbm5lcigpIHtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFF1ZXN0aW9uLCBzZXRTZWxlY3RlZFF1ZXN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJDb2RlLCBzZXRVc2VyQ29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NvbXBsZXRlZFF1ZXN0aW9ucywgc2V0Q29tcGxldGVkUXVlc3Rpb25zXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtzaG93U29sdXRpb24sIHNldFNob3dTb2x1dGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdXNlckVtYWlsLCBzZXRVc2VyRW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW1Fjb2xvciwgc2V0UWNvbG9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBxdWVzdGlvbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgaGVhZGluZzogXCJBcnJheSBTb3J0XCIsXHJcbiAgICAgICAgICAgIHN0YXRlbWVudDogXCJXcml0ZSBhIGZ1bmN0aW9uIHRvIHNvcnQgYW4gYXJyYXkgb2YgbnVtYmVycy5cIixcclxuICAgICAgICAgICAgc29sdXRpb246IGBmdW5jdGlvbiBzb3J0QXJyYXkoYXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICAgIHRlc3RDYXNlczogW1xyXG4gICAgICAgICAgICAgICAgeyBpbnB1dDogWzMsIDEsIDQsIDJdLCBleHBlY3RlZDogWzEsIDIsIDMsIDRdIH0sXHJcbiAgICAgICAgICAgICAgICB7IGlucHV0OiBbMTAsIDUsIDhdLCBleHBlY3RlZDogWzUsIDgsIDEwXSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiU3VtIG9mIE51bWJlcnNcIixcclxuICAgICAgICAgICAgc3RhdGVtZW50OiBcIldyaXRlIGEgZnVuY3Rpb24gdG8gc3VtIGFsbCBudW1iZXJzIGluIGFuIGFycmF5LlwiLFxyXG4gICAgICAgICAgICBzb2x1dGlvbjogYGZ1bmN0aW9uIHN1bUFycmF5KGFycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyci5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICAgIHRlc3RDYXNlczogW1xyXG4gICAgICAgICAgICAgICAgeyBpbnB1dDogWzEsIDIsIDNdLCBleHBlY3RlZDogNiB9LFxyXG4gICAgICAgICAgICAgICAgeyBpbnB1dDogWzUsIDEwLCAxNV0sIGV4cGVjdGVkOiAzMCB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZ2V0VXNlckVtYWlsRnJvbVRva2VuKCk7XHJcbiAgICAgICAgc2V0VXNlckVtYWlsKGVtYWlsKTtcclxuICAgICAgICB2aWV3U29sdmVkUXVlc3Rpb24oKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUnVuQ29kZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkUXVlc3Rpb24pIHJldHVybjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXNlckZ1bmN0aW9uID0gbmV3IEZ1bmN0aW9uKCdyZXR1cm4gJyArIHVzZXJDb2RlKTtcclxuICAgICAgICAgICAgY29uc3QgZnVuYyA9IHVzZXJGdW5jdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFsbFRlc3RzUGFzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB0ZXN0Q2FzZSBvZiBzZWxlY3RlZFF1ZXN0aW9uLnRlc3RDYXNlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZnVuYyh0ZXN0Q2FzZS5pbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC50b1N0cmluZygpICE9PSB0ZXN0Q2FzZS5leHBlY3RlZC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T3V0cHV0KGBJbmNvcnJlY3QgZm9yIGlucHV0ICR7dGVzdENhc2UuaW5wdXR9LiBZb3VyIE91dHB1dDogJHtyZXN1bHR9LCBFeHBlY3RlZDogJHt0ZXN0Q2FzZS5leHBlY3RlZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGxUZXN0c1Bhc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWxsVGVzdHNQYXNzZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldE91dHB1dChcIkNvcnJlY3QhIFByb2JsZW0gc29sdmVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHNhdmVTb2x2ZWRRdWVzdGlvbihzZWxlY3RlZFF1ZXN0aW9uLmlkKTsgLy8gU2F2ZSB0aGUgcXVlc3Rpb24gYWZ0ZXIgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRPdXRwdXQoYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVWaWV3U29sdXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNob3dTb2x1dGlvbikge1xyXG4gICAgICAgICAgICBzZXRVc2VyQ29kZSgnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VXNlckNvZGUoc2VsZWN0ZWRRdWVzdGlvbi5zb2x1dGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbighc2hvd1NvbHV0aW9uKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUXVlc3Rpb25DbGljayA9IChxdWVzdGlvbikgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkUXVlc3Rpb24ocXVlc3Rpb24pO1xyXG4gICAgICAgIHNldFVzZXJDb2RlKCcnKTtcclxuICAgICAgICBzZXRTaG93U29sdXRpb24oZmFsc2UpO1xyXG4gICAgICAgIHNldE91dHB1dCgnJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNhdmVTb2x2ZWRRdWVzdGlvbiA9IGFzeW5jIChxdWVzdGlvbklkKSA9PiB7XHJcbiAgICAgICAgaWYgKCF1c2VyRW1haWwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYmVnaW5uZXJRdWVzdGlvbnMnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyRW1haWwsIHF1ZXN0aW9uSWQgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIG5vbi0yMDAgcmVzcG9uc2VzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2s6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHNldENvbXBsZXRlZFF1ZXN0aW9ucyhwcmV2ID0+ICh7IC4uLnByZXYsIFtxdWVzdGlvbklkXTogdHJ1ZSB9KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2F2ZSBxdWVzdGlvbjonLCBkYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBxdWVzdGlvbjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB2aWV3U29sdmVkUXVlc3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICBjb25zb2xlLmxvZygpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9WaWV3UXVlc3Rpb25zJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIG5vbi0yMDAgcmVzcG9uc2VzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2s6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSwnZndhZndhZndhZicpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHNldFFjb2xvcih0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzYXZlIHF1ZXN0aW9uOicsIGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIHF1ZXN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhvbWVOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZWdpbm5lcl9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25zX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BxdWVzdGlvbl9pdGVtICR7c2VsZWN0ZWRRdWVzdGlvbj8uaWQgPT09IHF1ZXN0aW9uLmlkID8gJ2FjdGl2ZScgOiAnJ30gJHtRY29sb3IgPyAnY29tcGxldGVkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUXVlc3Rpb25DbGljayhxdWVzdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbXBsZXRlZFF1ZXN0aW9uc1txdWVzdGlvbi5pZF0gJiYgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrLWNpcmNsZSBjaGVja19pY29uXCI+PC9pPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFF1ZXN0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbl9oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3NlbGVjdGVkUXVlc3Rpb24uaGVhZGluZ308L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIHZpZXdfc29sdXRpb25fYnRuXCIgb25DbGljaz17aGFuZGxlVmlld1NvbHV0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTb2x1dGlvbiA/ICdIaWRlIFNvbHV0aW9uJyA6ICdWaWV3IFNvbHV0aW9uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3NlbGVjdGVkUXVlc3Rpb24uc3RhdGVtZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb25hY29FZGl0b3IgY29kZT17dXNlckNvZGV9IHNldENvZGU9e3NldFVzZXJDb2RlfSBvblJ1bkNvZGU9e2hhbmRsZVJ1bkNvZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dFwiPntvdXRwdXR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc2VsZWN0X3BhcmEnPlNlbGVjdCBhIHF1ZXN0aW9uIHRvIHN0YXJ0IGNvZGluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lTmF2YmFyIiwiTW9uYWNvRWRpdG9yIiwiZ2V0VXNlckVtYWlsRnJvbVRva2VuIiwiQmVnaW5uZXIiLCJzZWxlY3RlZFF1ZXN0aW9uIiwic2V0U2VsZWN0ZWRRdWVzdGlvbiIsInVzZXJDb2RlIiwic2V0VXNlckNvZGUiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJjb21wbGV0ZWRRdWVzdGlvbnMiLCJzZXRDb21wbGV0ZWRRdWVzdGlvbnMiLCJzaG93U29sdXRpb24iLCJzZXRTaG93U29sdXRpb24iLCJ1c2VyRW1haWwiLCJzZXRVc2VyRW1haWwiLCJRY29sb3IiLCJzZXRRY29sb3IiLCJxdWVzdGlvbnMiLCJpZCIsImhlYWRpbmciLCJzdGF0ZW1lbnQiLCJzb2x1dGlvbiIsInRlc3RDYXNlcyIsImlucHV0IiwiZXhwZWN0ZWQiLCJlbWFpbCIsInZpZXdTb2x2ZWRRdWVzdGlvbiIsImhhbmRsZVJ1bkNvZGUiLCJ1c2VyRnVuY3Rpb24iLCJGdW5jdGlvbiIsImZ1bmMiLCJhbGxUZXN0c1Bhc3NlZCIsInRlc3RDYXNlIiwicmVzdWx0IiwidG9TdHJpbmciLCJzYXZlU29sdmVkUXVlc3Rpb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVWaWV3U29sdXRpb24iLCJoYW5kbGVRdWVzdGlvbkNsaWNrIiwicXVlc3Rpb24iLCJxdWVzdGlvbklkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiY29uc29sZSIsInN0YXR1c1RleHQiLCJkYXRhIiwianNvbiIsInN1Y2Nlc3MiLCJwcmV2IiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJsaSIsIm9uQ2xpY2siLCJpIiwiaDIiLCJidXR0b24iLCJwIiwiY29kZSIsInNldENvZGUiLCJvblJ1bkNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/practice/beginner/page.js\n"));

/***/ })

});