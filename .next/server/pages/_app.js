module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFrQkE7Ozs7O0FBSUEsa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFBTUEsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdCLENBQXhCO0FBQ0EsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdhOztBQUFBLGtCQUEyQ0MsZUFBTUMsU0FBakQsQ0FHYjtBQUlBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBaUIsb0JBQTRDO0FBQzNEO0FBR0ZDOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXFELEtBQTNEO0FBR0Esd0JBQ0UscUVBR0k7QUFDQTtBQUNJLE1BQUVDLE9BQU8sSUFBVCxXQUF3QjtBQUFFQyxTQUFHLEVBQUVDLFNBQVMsQ0FBeEMsTUFBd0M7QUFBaEIsS0FBeEIsR0FOVixFQUNFLEVBREY7QUFmRjs7QUFBQTs7O0FBSG1CQyxHLENBSVpDLG1CQUpZRCxHQUlVRSxrQkFKVkY7QUFBQUEsRyxDQUtaRyxlQUxZSCxHQUtNRSxrQkFMTkY7QUErQnJCO0FBQ0E7O0FBRUEsVUFBMkM7QUFDekNJLGVBQWEsR0FBRyxxQkFBUyxNQUFNO0FBQzdCQyxXQUFPLENBQVBBO0FBREZELEdBQWdCLENBQWhCQTtBQU1BRSxTQUFPLEdBQUcscUJBQVMsTUFBTTtBQUN2QkQsV0FBTyxDQUFQQTtBQURGQyxHQUFVLENBQVZBO0FBT0YsQyxDQUFBOzs7QUFDTyxzQkFBMkI7QUFDaEMsWUFBMkNGLGFBQWE7QUFDeEQsU0FBT0csQ0FBQyxDQUFSO0FBR0s7O0FBQUEsMkJBQW1DO0FBQ3hDO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFPO0FBQ0wsZ0JBQVk7QUFDVixnQkFBMkNELE9BQU87QUFDbEQ7QUFIRzs7QUFLTCxtQkFBZTtBQUNiLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVBHOztBQVNMLGlCQUFhO0FBQ1gsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBWEc7O0FBYUxFLFFBQUksRUFBRSxNQUFNO0FBQ1YsZ0JBQTJDRixPQUFPO0FBQ2xERyxZQUFNLENBQU5BO0FBZkc7QUFpQkxDLFFBQUksRUFBRSxhQUE4QjtBQUNsQyxnQkFBMkNKLE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxVQUFQLEVBQU9BLENBQVA7QUFuQkc7QUFxQkxFLFVBQU0sRUFBRSxjQUErQjtBQUNyQyxnQkFBMkNMLE9BQU87QUFDbEQsWUFBTU0sU0FBUyxHQUFHQyxFQUFFLFVBQXBCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHRCxFQUFFLElBQWxCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxnQkFBUCxPQUFPQSxDQUFQO0FBMUJHO0FBNEJMTSxXQUFPLEVBQUUsYUFBOEI7QUFDckMsZ0JBQTJDVCxPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsYUFBUCxFQUFPQSxDQUFQO0FBOUJHO0FBZ0NMTyxhQUFTLEVBQUUsY0FBK0I7QUFDeEMsZ0JBQTJDVixPQUFPO0FBQ2xELFlBQU1XLFlBQVksR0FBR0osRUFBRSxVQUF2QjtBQUNBLFlBQU1LLFVBQVUsR0FBR0wsRUFBRSxJQUFyQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsc0JBQVAsVUFBT0EsQ0FBUDtBQXJDSjtBQUFPLEdBQVA7QUF3Q0QiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n // STYLING\n// order matter 1st in list will be overided\n\n\n\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {\n  static async getInitialProps({\n    Component,\n    router,\n    ctx\n  }) {\n    let pageProps = {};\n    const user = false ? undefined : await _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].serverAuth(ctx.req);\n\n    if (Component.getInitialProps) {\n      pageProps = await Component.getInitialProps(ctx);\n    } // Because it's destructure in BaseLayout, we can access it\n    // SWITCH BETWEEN TRUE|FALSE  / OR LONG WAY:\n    // let isAuthenticated = false;\n    // if(user) { isAuthenticated = true }\n\n\n    const auth = {\n      user,\n      isAuthenticated: !!user\n    };\n    return {\n      pageProps,\n      auth\n    };\n  }\n\n  render() {\n    const {\n      Component,\n      pageProps,\n      auth\n    } = this.props;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], null, __jsx(Component, _extends({}, pageProps, {\n      auth: auth\n    }))));\n  }\n\n} // IN MyApp Component\n// const isAuthenticated = process.browser ? \"clientAuth()\" : \"serverAuth()\";\n// Same as :\n// let isAuthenticated;\n// if (process.browser) {\n//   isAuthenticated = \"clientAuth()\";\n// } else {\n//   isAuthenticated = \"serverAuth()\";\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJBcHAiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJyb3V0ZXIiLCJjdHgiLCJwYWdlUHJvcHMiLCJ1c2VyIiwiYXV0aDAiLCJzZXJ2ZXJBdXRoIiwicmVxIiwiYXV0aCIsImlzQXV0aGVudGljYXRlZCIsInJlbmRlciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVlLE1BQU1BLEtBQU4sU0FBb0JDLCtDQUFwQixDQUF3QjtBQUVyQyxlQUFhQyxlQUFiLENBQTZCO0FBQUVDLGFBQUY7QUFBYUMsVUFBYjtBQUFxQkM7QUFBckIsR0FBN0IsRUFBeUQ7QUFDdkQsUUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLFFBQWtCLFNBQWxCLEdBQTZDLE1BQU1DLHVEQUFLLENBQUNDLFVBQU4sQ0FBaUJKLEdBQUcsQ0FBQ0ssR0FBckIsQ0FBaEU7O0FBRUEsUUFBSVAsU0FBUyxDQUFDRCxlQUFkLEVBQStCO0FBQzdCSSxlQUFTLEdBQUcsTUFBTUgsU0FBUyxDQUFDRCxlQUFWLENBQTBCRyxHQUExQixDQUFsQjtBQUNELEtBTnNELENBU3ZEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxVQUFNTSxJQUFJLEdBQUc7QUFBRUosVUFBRjtBQUFRSyxxQkFBZSxFQUFFLENBQUMsQ0FBQ0w7QUFBM0IsS0FBYjtBQUVBLFdBQU87QUFBRUQsZUFBRjtBQUFhSztBQUFiLEtBQVA7QUFDRDs7QUFDREUsUUFBTSxHQUFFO0FBQ04sVUFBTTtBQUFFVixlQUFGO0FBQWFHLGVBQWI7QUFBd0JLO0FBQXhCLFFBQWlDLEtBQUtHLEtBQTVDO0FBRUEsV0FDRSxtRUFDRSxNQUFDLG9EQUFELFFBQ0UsTUFBQyxTQUFELGVBQWVSLFNBQWY7QUFBMEIsVUFBSSxFQUFFSztBQUFoQyxPQURGLENBREYsQ0FERjtBQU9EOztBQTdCb0MsQyxDQWtDdkM7QUFDQTtBQUVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IGF1dGgwIGZyb20gJy4uL3NlcnZpY2VzL2F1dGgwJztcblxuLy8gU1RZTElOR1xuLy8gb3JkZXIgbWF0dGVyIDFzdCBpbiBsaXN0IHdpbGwgYmUgb3ZlcmlkZWRcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9XG4gICAgY29uc3QgdXNlciA9IHByb2Nlc3MuYnJvd3NlciA/IGF3YWl0IGF1dGgwLmNsaWVudEF1dGgoKSA6IGF3YWl0IGF1dGgwLnNlcnZlckF1dGgoY3R4LnJlcSk7XG5cbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgfVxuXG4gICAgXG4gICAgLy8gQmVjYXVzZSBpdCdzIGRlc3RydWN0dXJlIGluIEJhc2VMYXlvdXQsIHdlIGNhbiBhY2Nlc3MgaXRcbiAgICAvLyBTV0lUQ0ggQkVUV0VFTiBUUlVFfEZBTFNFICAvIE9SIExPTkcgV0FZOlxuICAgIC8vIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAvLyBpZih1c2VyKSB7IGlzQXV0aGVudGljYXRlZCA9IHRydWUgfVxuICAgIGNvbnN0IGF1dGggPSB7IHVzZXIsIGlzQXV0aGVudGljYXRlZDogISF1c2VyIH07XG4gICAgXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzLCBhdXRoIH1cbiAgfVxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBhdXRoIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPD5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGF1dGg9e2F1dGh9IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBJTiBNeUFwcCBDb21wb25lbnRcbi8vIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IHByb2Nlc3MuYnJvd3NlciA/IFwiY2xpZW50QXV0aCgpXCIgOiBcInNlcnZlckF1dGgoKVwiO1xuXG4gICAgLy8gU2FtZSBhcyA6XG4gICAgLy8gbGV0IGlzQXV0aGVudGljYXRlZDtcbiAgICAvLyBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgLy8gICBpc0F1dGhlbnRpY2F0ZWQgPSBcImNsaWVudEF1dGgoKVwiO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBpc0F1dGhlbnRpY2F0ZWQgPSBcInNlcnZlckF1dGgoKVwiO1xuICAgIC8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0-js */ \"auth0-js\");\n/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // import { getCookieFromReq } from '../helpers/utils';\n// const CLIENT_ID = process.env.CLIENT_ID;\n\nclass Auth0 {\n  constructor() {\n    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_0___default.a.WebAuth({\n      domain: 'jnmn.eu.auth0.com',\n      clientID: 'gJejjJctuYOVir0bF3dcmD7ptBA297L0',\n      redirectUri: 'http://localhost:3000/callback',\n      responseType: 'token id_token',\n      scope: 'openid profile'\n    }); // CALLBACK FUNCTION\n\n    this.login = this.login.bind(this);\n    this.handleAuthentication = this.handleAuthentication.bind(this);\n    this.logout = this.logout.bind(this); // this.isAuthenticated = this.isAuthenticated.bind(this);\n  }\n\n  handleAuthentication() {\n    return new Promise((resolve, reject) => {\n      this.auth0.parseHash((err, authResult) => {\n        if (authResult && authResult.accessToken && authResult.idToken) {\n          this.setSession(authResult);\n          resolve();\n        } else if (err) {\n          reject(err);\n          console.log(err);\n        }\n      });\n    });\n  }\n\n  setSession(authResult) {\n    //  SET THE TIME THAT ACCES TOKEN WILL EXPIRE AT\n    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime()); // Cookies.set('jwt', authResult.idToken);\n\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('user', authResult.idTokenPayload);\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('jwt', authResult.idToken);\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('expiresAt', expiresAt);\n  }\n\n  logout() {\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('user');\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('jwt');\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('expiresAt');\n    this.auth0.logout({\n      // returnTo: process.env.BASE_URL,\n      returnTo: '',\n      clientID: 'gJejjJctuYOVir0bF3dcmD7ptBA297L0' //     clientID: CLIENT_ID\n\n    });\n  }\n\n  login() {\n    this.auth0.authorize();\n  } // isAuthenticated(){\n  //   // Check whether the current is past the\n  //   // Access Token's expiry time\n  //   const expiresAt = Cookies.getJSON('expiresAt');\n  //   return new Date().getTime() < expiresAt;\n  // }\n\n\n  async getJWKS() {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://jnmn.eu.auth0.com/.well-known/jwks.json');\n    const jwks = res.data;\n    return jwks;\n  } // MIF = MOST IMPORTANT FUNCTION\n\n\n  async verifyToken(token) {\n    if (token) {\n      // needs to be complete in order to get headers of token\n      const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.decode(token, {\n        complete: true\n      }); // if no corect decodedToken return ...\n\n      if (!decodedToken) {\n        return undefined;\n      }\n\n      const jwks = await this.getJWKS();\n      const jwk = jwks.keys[0]; // BUILD CERTIFICATE\n\n      let cert = jwk.x5c[0];\n      cert = cert.match(/.{1,64}/g).join('\\n');\n      cert = `-----BEGIN CERTIFICATE-----\\n${cert}\\n-----END CERTIFICATE-----\\n`; //  \n\n      if (jwk.kid === decodedToken.header.kid) {\n        try {\n          const verifiedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(token, cert);\n          const expiresAt = verifiedToken.exp * 1000;\n          return verifiedToken && new Date().getTime() < expiresAt ? verifiedToken : undefined;\n        } catch (err) {\n          return undefined;\n        }\n      }\n    }\n\n    return undefined;\n  }\n\n  async clientAuth() {\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.getJSON('jwt');\n    const verifiedToken = await this.verifyToken(token);\n    return verifiedToken;\n  } //   async serverAuth(req) {\n  //     if (req.headers.cookie) {\n  //       const token = getCookieFromReq(req, 'jwt');\n  //       const verifiedToken = await this.verifyToken(token);\n  //       return verifiedToken;\n  //     }\n  //     return undefined;\n  //   }\n\n\n  async serverAuth(req) {\n    if (req.headers.cookie) {\n      const tokenCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));\n\n      if (!tokenCookie) {\n        return undefined;\n      }\n\n      ;\n      const token = tokenCookie.split('=')[1];\n      const verifiedToken = await this.verifyToken(token);\n      return verifiedToken;\n    }\n\n    return undefined;\n  }\n\n}\n\nconst auth0Client = new Auth0();\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth0Client); // For local Storage, in constructor\n// localStorage.setItem('acces_token', authResult.accessToken)\n// localStorage.setItem('id_token', authResult.idToken)\n// localStorage.setItem('expires_at', expiresAt)\n// NAVIGATE TO HOME ROUTE\n// history.replace('/home');\n// IN serverAuth(req), to see how it works\n// const cookies = req.headers.cookie;\n// console.log(cookies);\n// const splitedCookies = cookies.split(';');\n// console.log(splitedCookies)\n// // trim to take of space in \"json\"\n// const expiresAtCookie = splitedCookies.find(c => c.trim().startsWith('expiresAt='));\n// console.log(expiresAtCookie); \n// const expiresAtArray = expiresAtCookie.split('=');\n// console.log(expiresAtArray);\n// const expiresAt = expiresAtCookie[1];\n// console.log(expiresAt);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hdXRoMC5qcz83MDVjIl0sIm5hbWVzIjpbIkF1dGgwIiwiY29uc3RydWN0b3IiLCJhdXRoMCIsIldlYkF1dGgiLCJkb21haW4iLCJjbGllbnRJRCIsInJlZGlyZWN0VXJpIiwicmVzcG9uc2VUeXBlIiwic2NvcGUiLCJsb2dpbiIsImJpbmQiLCJoYW5kbGVBdXRoZW50aWNhdGlvbiIsImxvZ291dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2VIYXNoIiwiZXJyIiwiYXV0aFJlc3VsdCIsImFjY2Vzc1Rva2VuIiwiaWRUb2tlbiIsInNldFNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiZXhwaXJlc0F0IiwiSlNPTiIsInN0cmluZ2lmeSIsImV4cGlyZXNJbiIsIkRhdGUiLCJnZXRUaW1lIiwiQ29va2llcyIsInNldCIsImlkVG9rZW5QYXlsb2FkIiwicmVtb3ZlIiwicmV0dXJuVG8iLCJhdXRob3JpemUiLCJnZXRKV0tTIiwicmVzIiwiYXhpb3MiLCJnZXQiLCJqd2tzIiwiZGF0YSIsInZlcmlmeVRva2VuIiwidG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJqd3QiLCJkZWNvZGUiLCJjb21wbGV0ZSIsInVuZGVmaW5lZCIsImp3ayIsImtleXMiLCJjZXJ0IiwieDVjIiwibWF0Y2giLCJqb2luIiwia2lkIiwiaGVhZGVyIiwidmVyaWZpZWRUb2tlbiIsInZlcmlmeSIsImV4cCIsImNsaWVudEF1dGgiLCJnZXRKU09OIiwic2VydmVyQXV0aCIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiLCJ0b2tlbkNvb2tpZSIsInNwbGl0IiwiZmluZCIsImMiLCJ0cmltIiwic3RhcnRzV2l0aCIsImF1dGgwQ2xpZW50Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBOztBQUVBLE1BQU1BLEtBQU4sQ0FBWTtBQUVWQyxh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QUFHLENBQUNDLE9BQUosQ0FBWUMsTUFBaEIsRUFBd0I7QUFFdEIsWUFBTUMsV0FBVyxHQUFHSCxHQUFHLENBQUNDLE9BQUosQ0FBWUMsTUFBWixDQUFtQkUsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEJDLElBQTlCLENBQW9DQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBRixHQUFTQyxVQUFULENBQW9CLE1BQXBCLENBQXpDLENBQXBCOztBQUNBLFVBQUksQ0FBQ0wsV0FBTCxFQUFrQjtBQUNoQixlQUFPbEIsU0FBUDtBQUNEOztBQUFBO0FBQ0QsWUFBTUwsS0FBSyxHQUFHdUIsV0FBVyxDQUFDQyxLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLENBQWQ7QUFDQSxZQUFNVixhQUFhLEdBQUcsTUFBTSxLQUFLZixXQUFMLENBQWlCQyxLQUFqQixDQUE1QjtBQUNBLGFBQU9jLGFBQVA7QUFDRDs7QUFDRCxXQUFPVCxTQUFQO0FBQ0Q7O0FBNUlTOztBQWdKWixNQUFNd0IsV0FBVyxHQUFHLElBQUl4RSxLQUFKLEVBQXBCO0FBRWV3RSwwRUFBZixFLENBRUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc2VydmljZXMvYXV0aDAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBhdXRoMCBmcm9tICdhdXRoMC1qcyc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gaW1wb3J0IHsgZ2V0Q29va2llRnJvbVJlcSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnO1xuXG4vLyBjb25zdCBDTElFTlRfSUQgPSBwcm9jZXNzLmVudi5DTElFTlRfSUQ7XG5cbmNsYXNzIEF1dGgwIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmF1dGgwID0gbmV3IGF1dGgwLldlYkF1dGgoe1xuICAgICAgZG9tYWluOiAnam5tbi5ldS5hdXRoMC5jb20nLFxuICAgICAgY2xpZW50SUQ6ICdnSmVqakpjdHVZT1ZpcjBiRjNkY21EN3B0QkEyOTdMMCcsXG4gICAgICByZWRpcmVjdFVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jYWxsYmFjaycsXG4gICAgICByZXNwb25zZVR5cGU6ICd0b2tlbiBpZF90b2tlbicsXG4gICAgICBzY29wZTogJ29wZW5pZCBwcm9maWxlJ1xuICAgIH0pO1xuXG4gICAgLy8gQ0FMTEJBQ0sgRlVOQ1RJT05cbiAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb24gPSB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdGhpcy5pc0F1dGhlbnRpY2F0ZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUF1dGhlbnRpY2F0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmF1dGgwLnBhcnNlSGFzaCgoZXJyLCBhdXRoUmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChhdXRoUmVzdWx0ICYmIGF1dGhSZXN1bHQuYWNjZXNzVG9rZW4gJiYgYXV0aFJlc3VsdC5pZFRva2VuKSB7XG4gICAgICAgICAgdGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgIHNldFNlc3Npb24oYXV0aFJlc3VsdCkge1xuICAgIC8vICBTRVQgVEhFIFRJTUUgVEhBVCBBQ0NFUyBUT0tFTiBXSUxMIEVYUElSRSBBVFxuICAgIGNvbnN0IGV4cGlyZXNBdCA9IEpTT04uc3RyaW5naWZ5KChhdXRoUmVzdWx0LmV4cGlyZXNJbiAqIDEwMDApICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgIFxuXG5cbiAgICAvLyBDb29raWVzLnNldCgnand0JywgYXV0aFJlc3VsdC5pZFRva2VuKTtcbiAgICBDb29raWVzLnNldCgndXNlcicsIGF1dGhSZXN1bHQuaWRUb2tlblBheWxvYWQpO1xuICAgIENvb2tpZXMuc2V0KCdqd3QnLCBhdXRoUmVzdWx0LmlkVG9rZW4pO1xuICAgIENvb2tpZXMuc2V0KCdleHBpcmVzQXQnLCBleHBpcmVzQXQpO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIENvb2tpZXMucmVtb3ZlKCd1c2VyJyk7XG4gICAgQ29va2llcy5yZW1vdmUoJ2p3dCcpO1xuICAgIENvb2tpZXMucmVtb3ZlKCdleHBpcmVzQXQnKTtcblxuICAgIHRoaXMuYXV0aDAubG9nb3V0KHtcbiAgICAgIC8vIHJldHVyblRvOiBwcm9jZXNzLmVudi5CQVNFX1VSTCxcbiAgICAgIHJldHVyblRvOiAnJyxcbiAgICAgIGNsaWVudElEOiAnZ0plampKY3R1WU9WaXIwYkYzZGNtRDdwdEJBMjk3TDAnXG4gIC8vICAgICBjbGllbnRJRDogQ0xJRU5UX0lEXG4gICAgfSlcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIHRoaXMuYXV0aDAuYXV0aG9yaXplKCk7XG4gIH1cblxuICAvLyBpc0F1dGhlbnRpY2F0ZWQoKXtcbiAgLy8gICAvLyBDaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IGlzIHBhc3QgdGhlXG4gIC8vICAgLy8gQWNjZXNzIFRva2VuJ3MgZXhwaXJ5IHRpbWVcbiAgLy8gICBjb25zdCBleHBpcmVzQXQgPSBDb29raWVzLmdldEpTT04oJ2V4cGlyZXNBdCcpO1xuICAvLyAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGV4cGlyZXNBdDtcbiAgLy8gfVxuXG4gIGFzeW5jIGdldEpXS1MoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pubW4uZXUuYXV0aDAuY29tLy53ZWxsLWtub3duL2p3a3MuanNvbicpO1xuICAgIGNvbnN0IGp3a3MgPSByZXMuZGF0YTtcbiAgICByZXR1cm4gandrcztcbiAgfVxuXG4gIC8vIE1JRiA9IE1PU1QgSU1QT1JUQU5UIEZVTkNUSU9OXG4gICAgYXN5bmMgdmVyaWZ5VG9rZW4odG9rZW4pIHtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAvLyBuZWVkcyB0byBiZSBjb21wbGV0ZSBpbiBvcmRlciB0byBnZXQgaGVhZGVycyBvZiB0b2tlblxuICAgICAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3QuZGVjb2RlKHRva2VuLCB7IGNvbXBsZXRlOiB0cnVlfSk7XG4gICAgICAgIC8vIGlmIG5vIGNvcmVjdCBkZWNvZGVkVG9rZW4gcmV0dXJuIC4uLlxuICAgICAgICBpZiAoIWRlY29kZWRUb2tlbil7IHJldHVybiB1bmRlZmluZWQgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgandrcyA9IGF3YWl0IHRoaXMuZ2V0SldLUygpO1xuICAgICAgICBjb25zdCBqd2sgPSBqd2tzLmtleXNbMF07XG5cbiAgICAgICAgIC8vIEJVSUxEIENFUlRJRklDQVRFXG4gICAgICAgIGxldCBjZXJ0ID0gandrLng1Y1swXTtcbiAgICAgICAgY2VydCA9IGNlcnQubWF0Y2goLy57MSw2NH0vZykuam9pbignXFxuJyk7XG4gICAgICAgIGNlcnQgPSBgLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXFxuJHtjZXJ0fVxcbi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS1cXG5gO1xuICAgICAgICAvLyAgXG5cbiAgICAgICAgaWYgKGp3ay5raWQgPT09IGRlY29kZWRUb2tlbi5oZWFkZXIua2lkKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkVG9rZW4gPSBqd3QudmVyaWZ5KHRva2VuLCBjZXJ0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IHZlcmlmaWVkVG9rZW4uZXhwICogMTAwMDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gKHZlcmlmaWVkVG9rZW4gJiYgbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzQXQpID8gdmVyaWZpZWRUb2tlbiA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuXG4gIGFzeW5jIGNsaWVudEF1dGgoKSB7XG4gICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldEpTT04oJ2p3dCcpO1xuICAgIGNvbnN0IHZlcmlmaWVkVG9rZW4gPSBhd2FpdCB0aGlzLnZlcmlmeVRva2VuKHRva2VuKTtcblxuICAgIHJldHVybiB2ZXJpZmllZFRva2VuO1xuICB9XG5cblxuXG4vLyAgIGFzeW5jIHNlcnZlckF1dGgocmVxKSB7XG4vLyAgICAgaWYgKHJlcS5oZWFkZXJzLmNvb2tpZSkge1xuXG4vLyAgICAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZUZyb21SZXEocmVxLCAnand0Jyk7XG4vLyAgICAgICBjb25zdCB2ZXJpZmllZFRva2VuID0gYXdhaXQgdGhpcy52ZXJpZnlUb2tlbih0b2tlbik7XG5cbi8vICAgICAgIHJldHVybiB2ZXJpZmllZFRva2VuO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiB1bmRlZmluZWQ7XG4vLyAgIH1cbiBcbiAgYXN5bmMgc2VydmVyQXV0aChyZXEpIHtcbiAgICBpZiAocmVxLmhlYWRlcnMuY29va2llKSB7XG4gICAgICAgICAgICBcbiAgICAgIGNvbnN0IHRva2VuQ29va2llID0gcmVxLmhlYWRlcnMuY29va2llLnNwbGl0KCc7JykuZmluZCggYyA9PiBjLnRyaW0oKS5zdGFydHNXaXRoKCdqd3Q9JykpO1xuICAgICAgaWYgKCF0b2tlbkNvb2tpZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbkNvb2tpZS5zcGxpdCgnPScpWzFdO1xuICAgICAgY29uc3QgdmVyaWZpZWRUb2tlbiA9IGF3YWl0IHRoaXMudmVyaWZ5VG9rZW4odG9rZW4pXG4gICAgICByZXR1cm4gdmVyaWZpZWRUb2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cbmNvbnN0IGF1dGgwQ2xpZW50ID0gbmV3IEF1dGgwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGgwQ2xpZW50O1xuXG4gICAgLy8gRm9yIGxvY2FsIFN0b3JhZ2UsIGluIGNvbnN0cnVjdG9yXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2VzX3Rva2VuJywgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbilcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBhdXRoUmVzdWx0LmlkVG9rZW4pXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2V4cGlyZXNfYXQnLCBleHBpcmVzQXQpXG4gICAgLy8gTkFWSUdBVEUgVE8gSE9NRSBST1VURVxuICAgIC8vIGhpc3RvcnkucmVwbGFjZSgnL2hvbWUnKTtcblxuICAgIC8vIElOIHNlcnZlckF1dGgocmVxKSwgdG8gc2VlIGhvdyBpdCB3b3Jrc1xuICAgIC8vIGNvbnN0IGNvb2tpZXMgPSByZXEuaGVhZGVycy5jb29raWU7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjb29raWVzKTtcbiAgICAgIC8vIGNvbnN0IHNwbGl0ZWRDb29raWVzID0gY29va2llcy5zcGxpdCgnOycpO1xuICAgICAgLy8gY29uc29sZS5sb2coc3BsaXRlZENvb2tpZXMpXG4gICAgICAvLyAvLyB0cmltIHRvIHRha2Ugb2Ygc3BhY2UgaW4gXCJqc29uXCJcbiAgICAgIC8vIGNvbnN0IGV4cGlyZXNBdENvb2tpZSA9IHNwbGl0ZWRDb29raWVzLmZpbmQoYyA9PiBjLnRyaW0oKS5zdGFydHNXaXRoKCdleHBpcmVzQXQ9JykpO1xuICAgICAgLy8gY29uc29sZS5sb2coZXhwaXJlc0F0Q29va2llKTsgXG4gICAgICAvLyBjb25zdCBleHBpcmVzQXRBcnJheSA9IGV4cGlyZXNBdENvb2tpZS5zcGxpdCgnPScpO1xuICAgICAgLy8gY29uc29sZS5sb2coZXhwaXJlc0F0QXJyYXkpO1xuICAgICAgLy8gY29uc3QgZXhwaXJlc0F0ID0gZXhwaXJlc0F0Q29va2llWzFdO1xuICAgICAgLy8gY29uc29sZS5sb2coZXhwaXJlc0F0KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/auth0.js\n");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/main.scss\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "auth0-js":
/*!***************************!*\
  !*** external "auth0-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"auth0-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhdXRoMC1qc1wiPzJjZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXV0aDAtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdXRoMC1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///auth0-js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reactstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCI/MjQ5MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reactstrap\n");

/***/ })

/******/ });