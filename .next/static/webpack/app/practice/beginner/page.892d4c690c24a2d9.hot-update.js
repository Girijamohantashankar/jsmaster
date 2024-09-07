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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Beginner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_beginner_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/beginner.css */ \"(app-pages-browser)/./styles/beginner.css\");\n/* harmony import */ var _home_navbar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home-navbar/page */ \"(app-pages-browser)/./src/app/home-navbar/page.js\");\n/* harmony import */ var _CodeEditor_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CodeEditor/page */ \"(app-pages-browser)/./src/app/CodeEditor/page.js\");\n/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authUtils */ \"(app-pages-browser)/./src/app/authUtils.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Beginner() {\n    _s();\n    const [selectedQuestion, setSelectedQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [completedQuestions, setCompletedQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [showSolution, setShowSolution] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userEmail, setUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Qcolor, setQcolor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const questions = [\n        {\n            id: 1,\n            heading: \"Array Sort\",\n            statement: \"Write a function to sort an array of numbers.\",\n            solution: \"function sortArray(arr) {\\n                return arr.sort((a, b) => a - b);\\n            }\",\n            testCases: [\n                {\n                    input: [\n                        3,\n                        1,\n                        4,\n                        2\n                    ],\n                    expected: [\n                        1,\n                        2,\n                        3,\n                        4\n                    ]\n                },\n                {\n                    input: [\n                        10,\n                        5,\n                        8\n                    ],\n                    expected: [\n                        5,\n                        8,\n                        10\n                    ]\n                }\n            ]\n        },\n        {\n            id: 2,\n            heading: \"Sum of Numbers\",\n            statement: \"Write a function to sum all numbers in an array.\",\n            solution: \"function sumArray(arr) {\\n                return arr.reduce((a, b) => a + b, 0);\\n            }\",\n            testCases: [\n                {\n                    input: [\n                        1,\n                        2,\n                        3\n                    ],\n                    expected: 6\n                },\n                {\n                    input: [\n                        5,\n                        10,\n                        15\n                    ],\n                    expected: 30\n                }\n            ]\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const email = (0,_authUtils__WEBPACK_IMPORTED_MODULE_5__.getUserEmailFromToken)();\n        setUserEmail(email);\n        viewSolvedQuestion();\n    }, []);\n    const handleRunCode = ()=>{\n        if (!selectedQuestion) return;\n        try {\n            const userFunction = new Function(\"return \" + userCode);\n            const func = userFunction();\n            let allTestsPassed = true;\n            for (const testCase of selectedQuestion.testCases){\n                const result = func(testCase.input);\n                if (result.toString() !== testCase.expected.toString()) {\n                    setOutput(\"Incorrect for input \".concat(testCase.input, \". Your Output: \").concat(result, \", Expected: \").concat(testCase.expected));\n                    allTestsPassed = false;\n                    break;\n                }\n            }\n            if (allTestsPassed) {\n                setOutput(\"Correct! Problem solved.\");\n                saveSolvedQuestion(selectedQuestion.id); // Save the question after successful completion\n            }\n        } catch (error) {\n            setOutput(\"Error: \".concat(error.message));\n        }\n    };\n    const handleViewSolution = ()=>{\n        if (showSolution) {\n            setUserCode(\"\");\n        } else {\n            setUserCode(selectedQuestion.solution);\n        }\n        setShowSolution(!showSolution);\n    };\n    const handleQuestionClick = (question)=>{\n        setSelectedQuestion(question);\n        setUserCode(\"\");\n        setShowSolution(false);\n        setOutput(\"\");\n    };\n    const saveSolvedQuestion = async (questionId)=>{\n        if (!userEmail) return;\n        try {\n            const response = await fetch(\"/api/beginnerQuestions\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userEmail,\n                    questionId\n                })\n            });\n            if (!response.ok) {\n                // Handle non-200 responses\n                console.error(\"Network response was not ok:\", response.statusText);\n                return;\n            }\n            const data = await response.json();\n            if (data.success) {\n                setCompletedQuestions((prev)=>({\n                        ...prev,\n                        [questionId]: true\n                    }));\n            } else {\n                console.error(\"Failed to save question:\", data.error);\n            }\n        } catch (error) {\n            console.error(\"Error saving question:\", error);\n        }\n    };\n    const viewSolvedQuestion = async ()=>{\n        try {\n            const response = await fetch(\"/api/ViewQuestions\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response.ok) {\n                // Handle non-200 responses\n                console.error(\"Network response was not ok:\", response.statusText);\n                return;\n            }\n            const data = await response.json();\n            console.log(data, \"fwafwafwaf\");\n            if (data.success) {\n                setQcolor(true);\n            } else {\n                console.error(\"Failed to save question:\", data.error);\n            }\n        } catch (error) {\n            console.error(\"Error saving question:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_navbar_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                lineNumber: 154,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"beginner_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"questions_list\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: questions.map((question)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"question_item \".concat((selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.id) === question.id ? \"active\" : \"\", \" \").concat(Qcolor ? \"completed\" : \"\"),\n                                    onClick: ()=>handleQuestionClick(question),\n                                    children: [\n                                        question.heading,\n                                        completedQuestions[question.id] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fas fa-check-circle check_icon\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                            lineNumber: 165,\n                                            columnNumber: 69\n                                        }, this)\n                                    ]\n                                }, question.id, true, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 159,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                            lineNumber: 157,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                        lineNumber: 156,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"question_details\",\n                        children: selectedQuestion ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"question_header\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: selectedQuestion.heading\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                            lineNumber: 174,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"button view_solution_btn\",\n                                            onClick: handleViewSolution,\n                                            children: showSolution ? \"Hide Solution\" : \"View Solution\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                            lineNumber: 175,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 173,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: selectedQuestion.statement\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 179,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CodeEditor_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    code: userCode,\n                                    setCode: setUserCode,\n                                    onRunCode: handleRunCode\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 180,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"output\",\n                                    children: output\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 181,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"select_para\",\n                            children: \"Select a question to start coding\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                            lineNumber: 184,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                        lineNumber: 170,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                lineNumber: 155,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Beginner, \"smJ5E1Hmq8KdVYlfQ+owK917wrQ=\");\n_c = Beginner;\nvar _c;\n$RefreshReg$(_c, \"Beginner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJhY3RpY2UvYmVnaW5uZXIvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0g7QUFDTztBQUNDO0FBQ087QUFFekMsU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLG9CQUFvQkMsc0JBQXNCLEdBQUdiLCtDQUFRQSxDQUFDLENBQUM7SUFDOUQsTUFBTSxDQUFDYyxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDZ0IsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDa0IsUUFBUUMsVUFBVSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFckMsTUFBTW9CLFlBQVk7UUFDZDtZQUNJQyxJQUFJO1lBQ0pDLFNBQVM7WUFDVEMsV0FBVztZQUNYQyxVQUFXO1lBR1hDLFdBQVc7Z0JBQ1A7b0JBQUVDLE9BQU87d0JBQUM7d0JBQUc7d0JBQUc7d0JBQUc7cUJBQUU7b0JBQUVDLFVBQVU7d0JBQUM7d0JBQUc7d0JBQUc7d0JBQUc7cUJBQUU7Z0JBQUM7Z0JBQzlDO29CQUFFRCxPQUFPO3dCQUFDO3dCQUFJO3dCQUFHO3FCQUFFO29CQUFFQyxVQUFVO3dCQUFDO3dCQUFHO3dCQUFHO3FCQUFHO2dCQUFDO2FBQzdDO1FBQ0w7UUFDQTtZQUNJTixJQUFJO1lBQ0pDLFNBQVM7WUFDVEMsV0FBVztZQUNYQyxVQUFXO1lBR1hDLFdBQVc7Z0JBQ1A7b0JBQUVDLE9BQU87d0JBQUM7d0JBQUc7d0JBQUc7cUJBQUU7b0JBQUVDLFVBQVU7Z0JBQUU7Z0JBQ2hDO29CQUFFRCxPQUFPO3dCQUFDO3dC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IjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcmFjdGljZS9iZWdpbm5lci9wYWdlLmpzPzAwNWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9iZWdpbm5lci5jc3NcIjtcclxuaW1wb3J0IEhvbWVOYXZiYXIgZnJvbSBcIi4uLy4uL2hvbWUtbmF2YmFyL3BhZ2VcIjtcclxuaW1wb3J0IE1vbmFjb0VkaXRvciBmcm9tICcuLi8uLi9Db2RlRWRpdG9yL3BhZ2UnO1xyXG5pbXBvcnQgeyBnZXRVc2VyRW1haWxGcm9tVG9rZW4gfSBmcm9tICcuLi8uLi9hdXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVnaW5uZXIoKSB7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRRdWVzdGlvbiwgc2V0U2VsZWN0ZWRRdWVzdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1c2VyQ29kZSwgc2V0VXNlckNvZGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW291dHB1dCwgc2V0T3V0cHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjb21wbGV0ZWRRdWVzdGlvbnMsIHNldENvbXBsZXRlZFF1ZXN0aW9uc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbc2hvd1NvbHV0aW9uLCBzZXRTaG93U29sdXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJFbWFpbCwgc2V0VXNlckVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtRY29sb3IsIHNldFFjb2xvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgcXVlc3Rpb25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiQXJyYXkgU29ydFwiLFxyXG4gICAgICAgICAgICBzdGF0ZW1lbnQ6IFwiV3JpdGUgYSBmdW5jdGlvbiB0byBzb3J0IGFuIGFycmF5IG9mIG51bWJlcnMuXCIsXHJcbiAgICAgICAgICAgIHNvbHV0aW9uOiBgZnVuY3Rpb24gc29ydEFycmF5KGFycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICAgICAgICAgIH1gLFxyXG4gICAgICAgICAgICB0ZXN0Q2FzZXM6IFtcclxuICAgICAgICAgICAgICAgIHsgaW5wdXQ6IFszLCAxLCA0LCAyXSwgZXhwZWN0ZWQ6IFsxLCAyLCAzLCA0XSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpbnB1dDogWzEwLCA1LCA4XSwgZXhwZWN0ZWQ6IFs1LCA4LCAxMF0gfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBoZWFkaW5nOiBcIlN1bSBvZiBOdW1iZXJzXCIsXHJcbiAgICAgICAgICAgIHN0YXRlbWVudDogXCJXcml0ZSBhIGZ1bmN0aW9uIHRvIHN1bSBhbGwgbnVtYmVycyBpbiBhbiBhcnJheS5cIixcclxuICAgICAgICAgICAgc29sdXRpb246IGBmdW5jdGlvbiBzdW1BcnJheShhcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICAgICAgICAgIH1gLFxyXG4gICAgICAgICAgICB0ZXN0Q2FzZXM6IFtcclxuICAgICAgICAgICAgICAgIHsgaW5wdXQ6IFsxLCAyLCAzXSwgZXhwZWN0ZWQ6IDYgfSxcclxuICAgICAgICAgICAgICAgIHsgaW5wdXQ6IFs1LCAxMCwgMTVdLCBleHBlY3RlZDogMzAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IGdldFVzZXJFbWFpbEZyb21Ub2tlbigpO1xyXG4gICAgICAgIHNldFVzZXJFbWFpbChlbWFpbCk7XHJcbiAgICAgICAgdmlld1NvbHZlZFF1ZXN0aW9uKClcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgIFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJ1bkNvZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZFF1ZXN0aW9uKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJGdW5jdGlvbiA9IG5ldyBGdW5jdGlvbigncmV0dXJuICcgKyB1c2VyQ29kZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1bmMgPSB1c2VyRnVuY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhbGxUZXN0c1Bhc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGVzdENhc2Ugb2Ygc2VsZWN0ZWRRdWVzdGlvbi50ZXN0Q2FzZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZ1bmModGVzdENhc2UuaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudG9TdHJpbmcoKSAhPT0gdGVzdENhc2UuZXhwZWN0ZWQudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE91dHB1dChgSW5jb3JyZWN0IGZvciBpbnB1dCAke3Rlc3RDYXNlLmlucHV0fS4gWW91ciBPdXRwdXQ6ICR7cmVzdWx0fSwgRXhwZWN0ZWQ6ICR7dGVzdENhc2UuZXhwZWN0ZWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsVGVzdHNQYXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFsbFRlc3RzUGFzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRPdXRwdXQoXCJDb3JyZWN0ISBQcm9ibGVtIHNvbHZlZC5cIik7XHJcbiAgICAgICAgICAgICAgICBzYXZlU29sdmVkUXVlc3Rpb24oc2VsZWN0ZWRRdWVzdGlvbi5pZCk7IC8vIFNhdmUgdGhlIHF1ZXN0aW9uIGFmdGVyIHN1Y2Nlc3NmdWwgY29tcGxldGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0T3V0cHV0KGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVmlld1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzaG93U29sdXRpb24pIHtcclxuICAgICAgICAgICAgc2V0VXNlckNvZGUoJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFVzZXJDb2RlKHNlbGVjdGVkUXVlc3Rpb24uc29sdXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTaG93U29sdXRpb24oIXNob3dTb2x1dGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVF1ZXN0aW9uQ2xpY2sgPSAocXVlc3Rpb24pID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZFF1ZXN0aW9uKHF1ZXN0aW9uKTtcclxuICAgICAgICBzZXRVc2VyQ29kZSgnJyk7XHJcbiAgICAgICAgc2V0U2hvd1NvbHV0aW9uKGZhbHNlKTtcclxuICAgICAgICBzZXRPdXRwdXQoJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzYXZlU29sdmVkUXVlc3Rpb24gPSBhc3luYyAocXVlc3Rpb25JZCkgPT4ge1xyXG4gICAgICAgIGlmICghdXNlckVtYWlsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2JlZ2lubmVyUXVlc3Rpb25zJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlckVtYWlsLCBxdWVzdGlvbklkIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBub24tMjAwIHJlc3BvbnNlc1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb21wbGV0ZWRRdWVzdGlvbnMocHJldiA9PiAoeyAuLi5wcmV2LCBbcXVlc3Rpb25JZF06IHRydWUgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgcXVlc3Rpb246JywgZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgcXVlc3Rpb246JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgdmlld1NvbHZlZFF1ZXN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9WaWV3UXVlc3Rpb25zJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIG5vbi0yMDAgcmVzcG9uc2VzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2s6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSwnZndhZndhZndhZicpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHNldFFjb2xvcih0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzYXZlIHF1ZXN0aW9uOicsIGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIHF1ZXN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhvbWVOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZWdpbm5lcl9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25zX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BxdWVzdGlvbl9pdGVtICR7c2VsZWN0ZWRRdWVzdGlvbj8uaWQgPT09IHF1ZXN0aW9uLmlkID8gJ2FjdGl2ZScgOiAnJ30gJHtRY29sb3IgPyAnY29tcGxldGVkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUXVlc3Rpb25DbGljayhxdWVzdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbXBsZXRlZFF1ZXN0aW9uc1txdWVzdGlvbi5pZF0gJiYgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrLWNpcmNsZSBjaGVja19pY29uXCI+PC9pPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFF1ZXN0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbl9oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3NlbGVjdGVkUXVlc3Rpb24uaGVhZGluZ308L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIHZpZXdfc29sdXRpb25fYnRuXCIgb25DbGljaz17aGFuZGxlVmlld1NvbHV0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTb2x1dGlvbiA/ICdIaWRlIFNvbHV0aW9uJyA6ICdWaWV3IFNvbHV0aW9uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3NlbGVjdGVkUXVlc3Rpb24uc3RhdGVtZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb25hY29FZGl0b3IgY29kZT17dXNlckNvZGV9IHNldENvZGU9e3NldFVzZXJDb2RlfSBvblJ1bkNvZGU9e2hhbmRsZVJ1bkNvZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dFwiPntvdXRwdXR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc2VsZWN0X3BhcmEnPlNlbGVjdCBhIHF1ZXN0aW9uIHRvIHN0YXJ0IGNvZGluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lTmF2YmFyIiwiTW9uYWNvRWRpdG9yIiwiZ2V0VXNlckVtYWlsRnJvbVRva2VuIiwiQmVnaW5uZXIiLCJzZWxlY3RlZFF1ZXN0aW9uIiwic2V0U2VsZWN0ZWRRdWVzdGlvbiIsInVzZXJDb2RlIiwic2V0VXNlckNvZGUiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJjb21wbGV0ZWRRdWVzdGlvbnMiLCJzZXRDb21wbGV0ZWRRdWVzdGlvbnMiLCJzaG93U29sdXRpb24iLCJzZXRTaG93U29sdXRpb24iLCJ1c2VyRW1haWwiLCJzZXRVc2VyRW1haWwiLCJRY29sb3IiLCJzZXRRY29sb3IiLCJxdWVzdGlvbnMiLCJpZCIsImhlYWRpbmciLCJzdGF0ZW1lbnQiLCJzb2x1dGlvbiIsInRlc3RDYXNlcyIsImlucHV0IiwiZXhwZWN0ZWQiLCJlbWFpbCIsInZpZXdTb2x2ZWRRdWVzdGlvbiIsImhhbmRsZVJ1bkNvZGUiLCJ1c2VyRnVuY3Rpb24iLCJGdW5jdGlvbiIsImZ1bmMiLCJhbGxUZXN0c1Bhc3NlZCIsInRlc3RDYXNlIiwicmVzdWx0IiwidG9TdHJpbmciLCJzYXZlU29sdmVkUXVlc3Rpb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVWaWV3U29sdXRpb24iLCJoYW5kbGVRdWVzdGlvbkNsaWNrIiwicXVlc3Rpb24iLCJxdWVzdGlvbklkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiY29uc29sZSIsInN0YXR1c1RleHQiLCJkYXRhIiwianNvbiIsInN1Y2Nlc3MiLCJwcmV2IiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJsaSIsIm9uQ2xpY2siLCJpIiwiaDIiLCJidXR0b24iLCJwIiwiY29kZSIsInNldENvZGUiLCJvblJ1bkNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/practice/beginner/page.js\n"));

/***/ })

});