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

/***/ "(app-pages-browser)/./styles/beginner.css":
/*!*****************************!*\
  !*** ./styles/beginner.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"06928230a317\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9iZWdpbm5lci5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9iZWdpbm5lci5jc3M/NDBhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjA2OTI4MjMwYTMxN1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/beginner.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/practice/beginner/page.js":
/*!*******************************************!*\
  !*** ./src/app/practice/beginner/page.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Beginner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_beginner_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/beginner.css */ \"(app-pages-browser)/./styles/beginner.css\");\n/* harmony import */ var _home_navbar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home-navbar/page */ \"(app-pages-browser)/./src/app/home-navbar/page.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Beginner() {\n    _s();\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            heading: \"Array Sort\",\n            statement: \"Write a function to sort an array of numbers.\",\n            solution: \"arr.sort((a, b) => a - b)\"\n        },\n        {\n            id: 2,\n            heading: \"Sum of Numbers\",\n            statement: \"Write a function to sum all numbers in an array.\",\n            solution: \"arr.reduce((a, b) => a + b, 0)\"\n        }\n    ]);\n    const [selectedQuestion, setSelectedQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [completedQuestions, setCompletedQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [showSolution, setShowSolution] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleRunCode = ()=>{\n        try {\n            // Evaluate user's code\n            const result = eval(userCode);\n            // Check if the user's solution matches the correct answer\n            if (result.toString() === eval(selectedQuestion.solution).toString()) {\n                setOutput(\"Correct!\");\n                setCompletedQuestions((prev)=>({\n                        ...prev,\n                        [selectedQuestion.id]: true\n                    }));\n            } else {\n                setOutput(\"Incorrect solution. Try again.\");\n            }\n        } catch (error) {\n            setOutput(\"Error: \".concat(error.message));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_navbar_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"beginner_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"questions_list\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: questions.map((question)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"question_item \".concat((selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.id) === question.id ? \"active\" : \"\", \" \").concat(completedQuestions[question.id] ? \"completed\" : \"\"),\n                                    onClick: ()=>{\n                                        setSelectedQuestion(question);\n                                        setShowSolution(false); // Hide solution when switching questions\n                                    },\n                                    children: [\n                                        question.heading,\n                                        completedQuestions[question.id] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fas fa-check-circle check_icon\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 69\n                                        }, this)\n                                    ]\n                                }, question.id, true, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"question_details\",\n                        children: selectedQuestion ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"question_header\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: selectedQuestion.heading\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"button view_solution_btn\",\n                                            onClick: ()=>setShowSolution(!showSolution),\n                                            children: showSolution ? \"Hide Solution\" : \"View Solution\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: selectedQuestion.statement\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 29\n                                }, this),\n                                showSolution && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                    className: \"solution_code\",\n                                    children: selectedQuestion.solution\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 46\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    value: userCode,\n                                    onChange: (e)=>setUserCode(e.target.value),\n                                    placeholder: \"Write your solution here...\",\n                                    rows: 10\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button\",\n                                    onClick: handleRunCode,\n                                    children: \"Run\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"output\",\n                                    children: output\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Select a question to start coding\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                            lineNumber: 77,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\practice\\\\beginner\\\\page.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Beginner, \"KrD4RRHegyUI3S6+45BYWhui+kQ=\");\n_c = Beginner;\nvar _c;\n$RefreshReg$(_c, \"Beginner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJhY3RpY2UvYmVnaW5uZXIvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNpQztBQUNRO0FBQ087QUFFakMsU0FBU0U7O0lBQ3BCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUN2QztZQUFFSyxJQUFJO1lBQUdDLFNBQVM7WUFBY0MsV0FBVztZQUFpREMsVUFBVTtRQUE0QjtRQUNsSTtZQUFFSCxJQUFJO1lBQUdDLFNBQVM7WUFBa0JDLFdBQVc7WUFBb0RDLFVBQVU7UUFBaUM7S0FFako7SUFDRCxNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNhLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDZSxvQkFBb0JDLHNCQUFzQixHQUFHaEIsK0NBQVFBLENBQUMsQ0FBQztJQUM5RCxNQUFNLENBQUNpQixjQUFjQyxnQkFBZ0IsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1tQixnQkFBZ0I7UUFDbEIsSUFBSTtZQUNBLHVCQUF1QjtZQUN2QixNQUFNQyxTQUFTQyxLQUFLVjtZQUVwQiwwREFBMEQ7WUFDMUQsSUFBSVMsT0FBT0UsUUFBUSxPQUFPRCxLQUFLWixpQkFBaUJELFFBQVEsRUFBRWMsUUFBUSxJQUFJO2dCQUNsRVIsVUFBVTtnQkFDVkUsc0JBQXNCTyxDQUFBQSxPQUFTO3dCQUFFLEdBQUdBLElBQUk7d0JBQUUsQ0FBQ2QsaUJBQWlCSixFQUFFLENBQUMsRUFBRTtvQkFBSztZQUMxRSxPQUFPO2dCQUNIUyxVQUFVO1lBQ2Q7UUFDSixFQUFFLE9BQU9VLE9BQU87WUFDWlYsVUFBVSxVQUF3QixPQUFkVSxNQUFNQyxPQUFPO1FBQ3JDO0lBQ0o7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUN4Qix5REFBVUE7Ozs7OzBCQUNYLDhEQUFDeUI7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0M7c0NBQ0l6QixVQUFVMEIsR0FBRyxDQUFDLENBQUNDLHlCQUNaLDhEQUFDQztvQ0FFR0osV0FBVyxpQkFBeUVaLE9BQXhETixDQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFrQkosRUFBRSxNQUFLeUIsU0FBU3pCLEVBQUUsR0FBRyxXQUFXLElBQUcsS0FBc0QsT0FBbkRVLGtCQUFrQixDQUFDZSxTQUFTekIsRUFBRSxDQUFDLEdBQUcsY0FBYztvQ0FDcEkyQixTQUFTO3dDQUNMdEIsb0JBQW9Cb0I7d0NBQ3BCWixnQkFBZ0IsUUFBUSx5Q0FBeUM7b0NBQ3JFOzt3Q0FFQ1ksU0FBU3hCLE9BQU87d0NBQ2hCUyxrQkFBa0IsQ0FBQ2UsU0FBU3pCLEVBQUUsQ0FBQyxrQkFBSSw4REFBQzRCOzRDQUFFTixXQUFVOzs7Ozs7O21DQVI1Q0csU0FBU3pCLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztrQ0FhaEMsOERBQUNxQjt3QkFBSUMsV0FBVTtrQ0FDVmxCLGlDQUNHOzs4Q0FDSSw4REFBQ2lCO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ087c0RBQUl6QixpQkFBaUJILE9BQU87Ozs7OztzREFDN0IsOERBQUM2Qjs0Q0FBT1IsV0FBVTs0Q0FBMkJLLFNBQVMsSUFBTWQsZ0JBQWdCLENBQUNEO3NEQUN4RUEsZUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs4Q0FHMUMsOERBQUNtQjs4Q0FBRzNCLGlCQUFpQkYsU0FBUzs7Ozs7O2dDQUM3QlUsOEJBQWdCLDhEQUFDb0I7b0NBQUlWLFdBQVU7OENBQWlCbEIsaUJBQWlCRCxRQUFROzs7Ozs7OENBQzFFLDhEQUFDOEI7b0NBQ0dDLE9BQU81QjtvQ0FDUDZCLFVBQVUsQ0FBQ0MsSUFBTTdCLFlBQVk2QixFQUFFQyxNQUFNLENBQUNILEtBQUs7b0NBQzNDSSxhQUFZO29DQUNaQyxNQUFNOzs7Ozs7OENBRVYsOERBQUNUO29DQUFPUixXQUFVO29DQUFTSyxTQUFTYjs4Q0FBZTs7Ozs7OzhDQUNuRCw4REFBQ087b0NBQUlDLFdBQVU7OENBQVVkOzs7Ozs7O3lEQUc3Qiw4REFBQ3VCO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNCO0dBN0V3QmxDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJhY3RpY2UvYmVnaW5uZXIvcGFnZS5qcz8wMDVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2JlZ2lubmVyLmNzc1wiO1xyXG5pbXBvcnQgSG9tZU5hdmJhciBmcm9tIFwiLi4vLi4vaG9tZS1uYXZiYXIvcGFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVnaW5uZXIoKSB7XHJcbiAgICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHsgaWQ6IDEsIGhlYWRpbmc6IFwiQXJyYXkgU29ydFwiLCBzdGF0ZW1lbnQ6IFwiV3JpdGUgYSBmdW5jdGlvbiB0byBzb3J0IGFuIGFycmF5IG9mIG51bWJlcnMuXCIsIHNvbHV0aW9uOiBcImFyci5zb3J0KChhLCBiKSA9PiBhIC0gYilcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDIsIGhlYWRpbmc6IFwiU3VtIG9mIE51bWJlcnNcIiwgc3RhdGVtZW50OiBcIldyaXRlIGEgZnVuY3Rpb24gdG8gc3VtIGFsbCBudW1iZXJzIGluIGFuIGFycmF5LlwiLCBzb2x1dGlvbjogXCJhcnIucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMClcIiB9LFxyXG4gICAgICAgIC8vIEFkZCBtb3JlIHF1ZXN0aW9ucyBoZXJlXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFF1ZXN0aW9uLCBzZXRTZWxlY3RlZFF1ZXN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJDb2RlLCBzZXRVc2VyQ29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NvbXBsZXRlZFF1ZXN0aW9ucywgc2V0Q29tcGxldGVkUXVlc3Rpb25zXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtzaG93U29sdXRpb24sIHNldFNob3dTb2x1dGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUnVuQ29kZSA9ICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBFdmFsdWF0ZSB1c2VyJ3MgY29kZVxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBldmFsKHVzZXJDb2RlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSB1c2VyJ3Mgc29sdXRpb24gbWF0Y2hlcyB0aGUgY29ycmVjdCBhbnN3ZXJcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC50b1N0cmluZygpID09PSBldmFsKHNlbGVjdGVkUXVlc3Rpb24uc29sdXRpb24pLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIHNldE91dHB1dChcIkNvcnJlY3QhXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tcGxldGVkUXVlc3Rpb25zKHByZXYgPT4gKHsgLi4ucHJldiwgW3NlbGVjdGVkUXVlc3Rpb24uaWRdOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldE91dHB1dChcIkluY29ycmVjdCBzb2x1dGlvbi4gVHJ5IGFnYWluLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldE91dHB1dChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhvbWVOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZWdpbm5lcl9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25zX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BxdWVzdGlvbl9pdGVtICR7c2VsZWN0ZWRRdWVzdGlvbj8uaWQgPT09IHF1ZXN0aW9uLmlkID8gJ2FjdGl2ZScgOiAnJ30gJHtjb21wbGV0ZWRRdWVzdGlvbnNbcXVlc3Rpb24uaWRdID8gJ2NvbXBsZXRlZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRRdWVzdGlvbihxdWVzdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dTb2x1dGlvbihmYWxzZSk7IC8vIEhpZGUgc29sdXRpb24gd2hlbiBzd2l0Y2hpbmcgcXVlc3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uaGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tcGxldGVkUXVlc3Rpb25zW3F1ZXN0aW9uLmlkXSAmJiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2stY2lyY2xlIGNoZWNrX2ljb25cIj48L2k+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbl9kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUXVlc3Rpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57c2VsZWN0ZWRRdWVzdGlvbi5oZWFkaW5nfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gdmlld19zb2x1dGlvbl9idG5cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U29sdXRpb24oIXNob3dTb2x1dGlvbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1NvbHV0aW9uID8gJ0hpZGUgU29sdXRpb24nIDogJ1ZpZXcgU29sdXRpb24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c2VsZWN0ZWRRdWVzdGlvbi5zdGF0ZW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTb2x1dGlvbiAmJiA8cHJlIGNsYXNzTmFtZT1cInNvbHV0aW9uX2NvZGVcIj57c2VsZWN0ZWRRdWVzdGlvbi5zb2x1dGlvbn08L3ByZT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyQ29kZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIHNvbHV0aW9uIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlUnVuQ29kZX0+UnVuPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dFwiPntvdXRwdXR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlbGVjdCBhIHF1ZXN0aW9uIHRvIHN0YXJ0IGNvZGluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lTmF2YmFyIiwiQmVnaW5uZXIiLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJpZCIsImhlYWRpbmciLCJzdGF0ZW1lbnQiLCJzb2x1dGlvbiIsInNlbGVjdGVkUXVlc3Rpb24iLCJzZXRTZWxlY3RlZFF1ZXN0aW9uIiwidXNlckNvZGUiLCJzZXRVc2VyQ29kZSIsIm91dHB1dCIsInNldE91dHB1dCIsImNvbXBsZXRlZFF1ZXN0aW9ucyIsInNldENvbXBsZXRlZFF1ZXN0aW9ucyIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsImhhbmRsZVJ1bkNvZGUiLCJyZXN1bHQiLCJldmFsIiwidG9TdHJpbmciLCJwcmV2IiwiZXJyb3IiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJxdWVzdGlvbiIsImxpIiwib25DbGljayIsImkiLCJoMiIsImJ1dHRvbiIsInAiLCJwcmUiLCJ0ZXh0YXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyb3dzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/practice/beginner/page.js\n"));

/***/ })

});