"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.jsx\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Container */ \"./src/components/Container.jsx\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Logo */ \"./src/components/Logo.jsx\");\n/* harmony import */ var _components_NavLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/NavLink */ \"./src/components/NavLink.jsx\");\n\n\n\n\n\n\n\n\n\nfunction MobileNavLink(param) {\n    var href = param.href, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Popover.Button, {\n        as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n        href: href,\n        className: \"block w-full p-2\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = MobileNavLink;\nfunction MobileNavIcon(param) {\n    var open = param.open;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        \"aria-hidden\": \"true\",\n        className: \"h-3.5 w-3.5 overflow-visible stroke-slate-700\",\n        fill: \"none\",\n        strokeWidth: 2,\n        strokeLinecap: \"round\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M0 1H14M0 7H14M0 13H14\",\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"origin-center transition\", open && \"scale-90 opacity-0\")\n            }, void 0, false, {\n                fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M2 2L12 12M12 2L2 12\",\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"origin-center transition\", !open && \"scale-90 opacity-0\")\n            }, void 0, false, {\n                fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c1 = MobileNavIcon;\nfunction MobileNavigation() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Popover, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Popover.Button, {\n                className: \"relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none\",\n                \"aria-label\": \"Toggle Navigation\",\n                children: function(param) {\n                    var open = param.open;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MobileNavIcon, {\n                        open: open\n                    }, void 0, false, {\n                        fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 24\n                    }, _this);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition.Root, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition.Child, {\n                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                        enter: \"duration-150 ease-out\",\n                        enterFrom: \"opacity-0\",\n                        enterTo: \"opacity-100\",\n                        leave: \"duration-150 ease-in\",\n                        leaveFrom: \"opacity-100\",\n                        leaveTo: \"opacity-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Popover.Overlay, {\n                            className: \"fixed inset-0 bg-slate-300/50\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition.Child, {\n                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                        enter: \"duration-150 ease-out\",\n                        enterFrom: \"opacity-0 scale-95\",\n                        enterTo: \"opacity-100 scale-100\",\n                        leave: \"duration-100 ease-in\",\n                        leaveFrom: \"opacity-100 scale-100\",\n                        leaveTo: \"opacity-0 scale-95\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Popover.Panel, {\n                            as: \"div\",\n                            className: \"absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MobileNavLink, {\n                                    href: \"#features\",\n                                    children: \"Features\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MobileNavLink, {\n                                    href: \"/login\",\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_c2 = MobileNavigation;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"py-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"relative z-50 flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center md:gap-x-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"#\",\n                                \"aria-label\": \"Home\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_6__.Logo, {\n                                    className: \"h-10 w-auto\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden md:flex md:gap-x-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-x-5 md:gap-x-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden md:block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavLink__WEBPACK_IMPORTED_MODULE_7__.NavLink, {\n                                    href: \"/login\",\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                href: \"/register\",\n                                color: \"blue\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Sign up to the beta\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"-mr-1 md:hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MobileNavigation, {}, void 0, false, {\n                                    fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n            lineNumber: 95,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mitchartemis/Code/homestead/storsa-landing/src/components/Header.jsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_c3 = Header;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"MobileNavLink\");\n$RefreshReg$(_c1, \"MobileNavIcon\");\n$RefreshReg$(_c2, \"MobileNavigation\");\n$RefreshReg$(_c3, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFnQjtBQThDbEIsU0FBU1ksTUFBTSxHQUFHO0lBQ3ZCLHFCQUNFLDhEQUFDQyxRQUFNO1FBQUN2QixTQUFTLEVBQUMsT0FBTztrQkFDdkIsNEVBQUNQLDREQUFTO3NCQUNSLDRFQUFDK0IsS0FBRztnQkFBQ3hCLFNBQVMsRUFBQyxvQ0FBb0M7O2tDQUNqRCw4REFBQ3lCLEtBQUc7d0JBQUN6QixTQUFTLEVBQUMsK0JBQStCOzswQ0FDNUMsOERBQUNaLGtEQUFJO2dDQUFDUyxJQUFJLEVBQUMsR0FBRztnQ0FBQ2MsWUFBVSxFQUFDLE1BQU07MENBQzlCLDRFQUFDakIsa0RBQUk7b0NBQUNNLFNBQVMsRUFBQyxhQUFhOzs7Ozt3Q0FBRzs7Ozs7b0NBQzNCOzBDQUNQLDhEQUFDeUIsS0FBRztnQ0FBQ3pCLFNBQVMsRUFBQywyQkFBMkI7Ozs7O29DQUlwQzs7Ozs7OzRCQUNGO2tDQUNOLDhEQUFDeUIsS0FBRzt3QkFBQ3pCLFNBQVMsRUFBQyxzQ0FBc0M7OzBDQUNuRCw4REFBQ3lCLEtBQUc7Z0NBQUN6QixTQUFTLEVBQUMsaUJBQWlCOzBDQUM5Qiw0RUFBQ0wsd0RBQU87b0NBQUNFLElBQUksRUFBQyxRQUFROzhDQUFDLFNBQU87Ozs7O3dDQUFVOzs7OztvQ0FDcEM7MENBQ04sOERBQUNMLHNEQUFNO2dDQUFDSyxJQUFJLEVBQUMsV0FBVztnQ0FBQzZCLEtBQUssRUFBQyxNQUFNOzBDQUNuQyw0RUFBQ0MsTUFBSTs4Q0FBQyxxQkFFTjs7Ozs7d0NBQU87Ozs7O29DQUNBOzBDQUNULDhEQUFDRixLQUFHO2dDQUFDekIsU0FBUyxFQUFDLGlCQUFpQjswQ0FDOUIsNEVBQUNVLGdCQUFnQjs7Ozt3Q0FBRzs7Ozs7b0NBQ2hCOzs7Ozs7NEJBQ0Y7Ozs7OztvQkFDRjs7Ozs7Z0JBQ0k7Ozs7O1lBQ0wsQ0FDVjtDQUNGO0FBaENlWSxNQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3g/M2NiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgUG9wb3ZlciwgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0AvY29tcG9uZW50cy9Db250YWluZXInXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnQC9jb21wb25lbnRzL0xvZ28nXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAnQC9jb21wb25lbnRzL05hdkxpbmsnXG5cbmZ1bmN0aW9uIE1vYmlsZU5hdkxpbmsoeyBocmVmLCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPFBvcG92ZXIuQnV0dG9uIGFzPXtMaW5rfSBocmVmPXtocmVmfSBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcC0yXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Qb3BvdmVyLkJ1dHRvbj5cbiAgKVxufVxuXG5mdW5jdGlvbiBNb2JpbGVOYXZJY29uKHsgb3BlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIGNsYXNzTmFtZT1cImgtMy41IHctMy41IG92ZXJmbG93LXZpc2libGUgc3Ryb2tlLXNsYXRlLTcwMFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0wIDFIMTRNMCA3SDE0TTAgMTNIMTRcIlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgJ29yaWdpbi1jZW50ZXIgdHJhbnNpdGlvbicsXG4gICAgICAgICAgb3BlbiAmJiAnc2NhbGUtOTAgb3BhY2l0eS0wJ1xuICAgICAgICApfVxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMiAyTDEyIDEyTTEyIDJMMiAxMlwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAnb3JpZ2luLWNlbnRlciB0cmFuc2l0aW9uJyxcbiAgICAgICAgICAhb3BlbiAmJiAnc2NhbGUtOTAgb3BhY2l0eS0wJ1xuICAgICAgICApfVxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5mdW5jdGlvbiBNb2JpbGVOYXZpZ2F0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyPlxuICAgICAgPFBvcG92ZXIuQnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBoLTggdy04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBbJjpub3QoOmZvY3VzLXZpc2libGUpXTpmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIE5hdmlnYXRpb25cIlxuICAgICAgPlxuICAgICAgICB7KHsgb3BlbiB9KSA9PiA8TW9iaWxlTmF2SWNvbiBvcGVuPXtvcGVufSAvPn1cbiAgICAgIDwvUG9wb3Zlci5CdXR0b24+XG4gICAgICA8VHJhbnNpdGlvbi5Sb290PlxuICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxuICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICBlbnRlcj1cImR1cmF0aW9uLTE1MCBlYXNlLW91dFwiXG4gICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcbiAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgIGxlYXZlPVwiZHVyYXRpb24tMTUwIGVhc2UtaW5cIlxuICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxQb3BvdmVyLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1zbGF0ZS0zMDAvNTBcIiAvPlxuICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XG4gICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXG4gICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgIGVudGVyPVwiZHVyYXRpb24tMTUwIGVhc2Utb3V0XCJcbiAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgIGxlYXZlPVwiZHVyYXRpb24tMTAwIGVhc2UtaW5cIlxuICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICAgID5cbiAgICAgICAgICA8UG9wb3Zlci5QYW5lbFxuICAgICAgICAgICAgYXM9XCJkaXZcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIHRvcC1mdWxsIG10LTQgZmxleCBvcmlnaW4tdG9wIGZsZXgtY29sIHJvdW5kZWQtMnhsIGJnLXdoaXRlIHAtNCB0ZXh0LWxnIHRyYWNraW5nLXRpZ2h0IHRleHQtc2xhdGUtOTAwIHNoYWRvdy14bCByaW5nLTEgcmluZy1zbGF0ZS05MDAvNVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1vYmlsZU5hdkxpbmsgaHJlZj1cIiNmZWF0dXJlc1wiPkZlYXR1cmVzPC9Nb2JpbGVOYXZMaW5rPlxuICAgICAgICAgICAgey8qIDxNb2JpbGVOYXZMaW5rIGhyZWY9XCIjdGVzdGltb25pYWxzXCI+VGVzdGltb25pYWxzPC9Nb2JpbGVOYXZMaW5rPlxuICAgICAgICAgICAgPE1vYmlsZU5hdkxpbmsgaHJlZj1cIiNwcmljaW5nXCI+UHJpY2luZzwvTW9iaWxlTmF2TGluaz5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtLTIgYm9yZGVyLXNsYXRlLTMwMC80MFwiIC8+ICovfVxuICAgICAgICAgICAgPE1vYmlsZU5hdkxpbmsgaHJlZj1cIi9sb2dpblwiPlNpZ24gaW48L01vYmlsZU5hdkxpbms+XG4gICAgICAgICAgPC9Qb3BvdmVyLlBhbmVsPlxuICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XG4gICAgICA8L1RyYW5zaXRpb24uUm9vdD5cbiAgICA8L1BvcG92ZXI+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInB5LTEwXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotNTAgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1kOmdhcC14LTEyXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGFyaWEtbGFiZWw9XCJIb21lXCI+XG4gICAgICAgICAgICAgIDxMb2dvIGNsYXNzTmFtZT1cImgtMTAgdy1hdXRvXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggbWQ6Z2FwLXgtNlwiPlxuICAgICAgICAgICAgICB7LyogPE5hdkxpbmsgaHJlZj1cIiNmZWF0dXJlc1wiPkZlYXR1cmVzPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiI3Rlc3RpbW9uaWFsc1wiPlRlc3RpbW9uaWFsczwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIiNwcmljaW5nXCI+UHJpY2luZzwvTmF2TGluaz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTUgbWQ6Z2FwLXgtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9sb2dpblwiPlNpZ24gaW48L05hdkxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCdXR0b24gaHJlZj1cIi9yZWdpc3RlclwiIGNvbG9yPVwiYmx1ZVwiPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICBTaWduIHVwIHRvIHRoZSBiZXRhXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXItMSBtZDpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPE1vYmlsZU5hdmlnYXRpb24gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJMaW5rIiwiUG9wb3ZlciIsIlRyYW5zaXRpb24iLCJjbHN4IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiTG9nbyIsIk5hdkxpbmsiLCJNb2JpbGVOYXZMaW5rIiwiaHJlZiIsImNoaWxkcmVuIiwiYXMiLCJjbGFzc05hbWUiLCJNb2JpbGVOYXZJY29uIiwib3BlbiIsInN2ZyIsImFyaWEtaGlkZGVuIiwiZmlsbCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInBhdGgiLCJkIiwiTW9iaWxlTmF2aWdhdGlvbiIsImFyaWEtbGFiZWwiLCJSb290IiwiQ2hpbGQiLCJlbnRlciIsImVudGVyRnJvbSIsImVudGVyVG8iLCJsZWF2ZSIsImxlYXZlRnJvbSIsImxlYXZlVG8iLCJPdmVybGF5IiwiUGFuZWwiLCJIZWFkZXIiLCJoZWFkZXIiLCJuYXYiLCJkaXYiLCJjb2xvciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.jsx\n"));

/***/ })

});