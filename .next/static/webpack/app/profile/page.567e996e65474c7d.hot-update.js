"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/app/profile/page.js":
/*!*********************************!*\
  !*** ./src/app/profile/page.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _styles_profile_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/profile.css */ \"(app-pages-browser)/./styles/profile.css\");\n/* harmony import */ var _home_navbar_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home-navbar/page */ \"(app-pages-browser)/./src/app/home-navbar/page.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProfilePage() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        profilePicture: \"/assets/default_profile.png\",\n        bio: \"\"\n    });\n    const [editing, setEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        ...user\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Simulate fetching user data\n        const fetchUserData = async ()=>{\n            // Replace with actual data fetching\n            const fetchedUser = {\n                name: \"John Doe\",\n                email: \"john.doe@example.com\",\n                profilePicture: \"/assets/default_profile.png\",\n                bio: \"A short bio about John Doe\"\n            };\n            setUser(fetchedUser);\n            setFormData(fetchedUser);\n        };\n        fetchUserData();\n    }, []);\n    const handleEdit = ()=>{\n        setEditing(!editing);\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSave = ()=>{\n        setUser(formData);\n        setEditing(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_navbar_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\profile\\\\page.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"profile_container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"profile_header\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"profile_picture\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: user.profilePicture,\n                                alt: \"Profile Picture\",\n                                width: 150,\n                                height: 150,\n                                className: \"profile_img\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\profile\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\profile\\\\page.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"profile_info\",\n                            children: [\n                                editing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"name\",\n                                            value: formData.name,\n                                            onChange: handleChange,\n                                            className: \"profile_input\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\profile\\\\page.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            name: \"bio\",\n                                            value: formData.bio,\n                                            onChange: handleChange,\n                                            className: \"profile_textarea\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\profile\\\\page.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: user.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\profile\\\\page.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: user.email\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\profile\\\\page.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: user.bio\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\profile\\\\page.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: editing ? handleSave : handleEdit,\n                                    className: \"profile_button\",\n                                    children: editing ? \"Save\" : \"Edit Profile\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\profile\\\\page.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\profile\\\\page.js\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\profile\\\\page.js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\00000\\\\11111\\\\jsmaster\\\\src\\\\app\\\\profile\\\\page.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ProfilePage, \"lj3oj6y8ALP/krUmd/WHPBOon3w=\");\n_c = ProfilePage;\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM0QztBQUNiO0FBQ007QUFDUTtBQUU5QixTQUFTSTs7SUFDcEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO1FBQzdCTyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsZ0JBQWdCO1FBQ2hCQyxLQUFLO0lBQ1Q7SUFDQSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDO1FBQUUsR0FBR0ssSUFBSTtJQUFDO0lBRW5ESixnREFBU0EsQ0FBQztRQUNOLDhCQUE4QjtRQUM5QixNQUFNYyxnQkFBZ0I7WUFDbEIsb0NBQW9DO1lBQ3BDLE1BQU1DLGNBQWM7Z0JBQ2hCVCxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxnQkFBZ0I7Z0JBQ2hCQyxLQUFLO1lBQ1Q7WUFDQUosUUFBUVU7WUFDUkYsWUFBWUU7UUFDaEI7UUFFQUQ7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNRSxhQUFhO1FBQ2ZMLFdBQVcsQ0FBQ0Q7SUFDaEI7SUFFQSxNQUFNTyxlQUFlLENBQUNDO1FBQ2xCLE1BQU0sRUFBRVosSUFBSSxFQUFFYSxLQUFLLEVBQUUsR0FBR0QsRUFBRUUsTUFBTTtRQUNoQ1AsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDTixLQUFLLEVBQUVhO1FBQU07SUFDN0M7SUFFQSxNQUFNRSxhQUFhO1FBQ2ZoQixRQUFRTztRQUNSRCxXQUFXO0lBQ2Y7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNULHlEQUFVQTs7Ozs7MEJBQ1gsOERBQUNvQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ3RCLGtEQUFLQTtnQ0FDRnVCLEtBQUtwQixLQUFLSSxjQUFjO2dDQUN4QmlCLEtBQUk7Z0NBQ0pDLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JKLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdsQiw4REFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUNWYix3QkFDRzs7c0RBQ0ksOERBQUNrQjs0Q0FDR0MsTUFBSzs0Q0FDTHZCLE1BQUs7NENBQ0xhLE9BQU9QLFNBQVNOLElBQUk7NENBQ3BCd0IsVUFBVWI7NENBQ1ZNLFdBQVU7Ozs7OztzREFFZCw4REFBQ1E7NENBQ0d6QixNQUFLOzRDQUNMYSxPQUFPUCxTQUFTSCxHQUFHOzRDQUNuQnFCLFVBQVViOzRDQUNWTSxXQUFVOzs7Ozs7O2lFQUlsQjs7c0RBQ0ksOERBQUNTO3NEQUFJNUIsS0FBS0UsSUFBSTs7Ozs7O3NEQUNkLDhEQUFDMkI7c0RBQUc3QixLQUFLRyxLQUFLOzs7Ozs7c0RBQ2QsOERBQUMwQjtzREFBRzdCLEtBQUtLLEdBQUc7Ozs7Ozs7OzhDQUdwQiw4REFBQ3lCO29DQUFPQyxTQUFTekIsVUFBVVcsYUFBYUw7b0NBQVlPLFdBQVU7OENBQ3pEYixVQUFVLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEQ7R0F2RndCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2ZpbGUvcGFnZS5qcz9mZTY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9wcm9maWxlLmNzc1wiO1xyXG5pbXBvcnQgSG9tZU5hdmJhciBmcm9tIFwiLi4vaG9tZS1uYXZiYXIvcGFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHByb2ZpbGVQaWN0dXJlOiAnL2Fzc2V0cy9kZWZhdWx0X3Byb2ZpbGUucG5nJyxcclxuICAgICAgICBiaW86ICcnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbZWRpdGluZywgc2V0RWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHsgLi4udXNlciB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIFNpbXVsYXRlIGZldGNoaW5nIHVzZXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgZGF0YSBmZXRjaGluZ1xyXG4gICAgICAgICAgICBjb25zdCBmZXRjaGVkVXNlciA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdKb2huIERvZScsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2pvaG4uZG9lQGV4YW1wbGUuY29tJyxcclxuICAgICAgICAgICAgICAgIHByb2ZpbGVQaWN0dXJlOiAnL2Fzc2V0cy9kZWZhdWx0X3Byb2ZpbGUucG5nJyxcclxuICAgICAgICAgICAgICAgIGJpbzogJ0Egc2hvcnQgYmlvIGFib3V0IEpvaG4gRG9lJyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2V0VXNlcihmZXRjaGVkVXNlcik7XHJcbiAgICAgICAgICAgIHNldEZvcm1EYXRhKGZldGNoZWRVc2VyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZldGNoVXNlckRhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVFZGl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEVkaXRpbmcoIWVkaXRpbmcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihmb3JtRGF0YSk7XHJcbiAgICAgICAgc2V0RWRpdGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhvbWVOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZV9waWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyLnByb2ZpbGVQaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGVfaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVfaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWRpdGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZmlsZV9pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5iaW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGVfdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3VzZXIuYmlvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VkaXRpbmcgPyBoYW5kbGVTYXZlIDogaGFuZGxlRWRpdH0gY2xhc3NOYW1lPVwicHJvZmlsZV9idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlZGl0aW5nID8gJ1NhdmUnIDogJ0VkaXQgUHJvZmlsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkhvbWVOYXZiYXIiLCJQcm9maWxlUGFnZSIsInVzZXIiLCJzZXRVc2VyIiwibmFtZSIsImVtYWlsIiwicHJvZmlsZVBpY3R1cmUiLCJiaW8iLCJlZGl0aW5nIiwic2V0RWRpdGluZyIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJmZXRjaFVzZXJEYXRhIiwiZmV0Y2hlZFVzZXIiLCJoYW5kbGVFZGl0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU2F2ZSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJ0ZXh0YXJlYSIsImgyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.js\n"));

/***/ })

});