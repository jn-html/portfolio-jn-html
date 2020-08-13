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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n // STYLING\n// order matter 1st in list will be overided\n\n\n\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {\n  static async getInitialProps({\n    Component,\n    router,\n    ctx\n  }) {\n    let pageProps = {};\n    const user = false ? undefined : _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].serverAuth(ctx.req);\n\n    if (Component.getInitialProps) {\n      pageProps = await Component.getInitialProps(ctx);\n    } // Because it's destructure in BaseLayout, we can access it\n    // SWITCH BETWEEN TRUE|FALSE  / OR LONG WAY:\n    // let isAuthenticated = false;\n    // if(user) { isAuthenticated = true }\n\n\n    const auth = {\n      user,\n      isAuthenticated: !!user\n    };\n    return {\n      pageProps,\n      auth\n    };\n  }\n\n  render() {\n    const {\n      Component,\n      pageProps,\n      auth\n    } = this.props;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], null, __jsx(Component, _extends({}, pageProps, {\n      auth: auth\n    }))));\n  }\n\n} // IN MyApp Component\n// const isAuthenticated = process.browser ? \"clientAuth()\" : \"serverAuth()\";\n// Same as :\n// let isAuthenticated;\n// if (process.browser) {\n//   isAuthenticated = \"clientAuth()\";\n// } else {\n//   isAuthenticated = \"serverAuth()\";\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJBcHAiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJyb3V0ZXIiLCJjdHgiLCJwYWdlUHJvcHMiLCJ1c2VyIiwiYXV0aDAiLCJzZXJ2ZXJBdXRoIiwicmVxIiwiYXV0aCIsImlzQXV0aGVudGljYXRlZCIsInJlbmRlciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVlLE1BQU1BLEtBQU4sU0FBb0JDLCtDQUFwQixDQUF3QjtBQUVyQyxlQUFhQyxlQUFiLENBQTZCO0FBQUVDLGFBQUY7QUFBYUMsVUFBYjtBQUFxQkM7QUFBckIsR0FBN0IsRUFBeUQ7QUFDdkQsUUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLFFBQWtCQyxTQUFsQixHQUF1Q0EsdURBQUssQ0FBQ0MsVUFBTixDQUFpQkosR0FBRyxDQUFDSyxHQUFyQixDQUFwRDs7QUFFQSxRQUFJUCxTQUFTLENBQUNELGVBQWQsRUFBK0I7QUFDN0JJLGVBQVMsR0FBRyxNQUFNSCxTQUFTLENBQUNELGVBQVYsQ0FBMEJHLEdBQTFCLENBQWxCO0FBQ0QsS0FOc0QsQ0FTdkQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFVBQU1NLElBQUksR0FBRztBQUFFSixVQUFGO0FBQVFLLHFCQUFlLEVBQUUsQ0FBQyxDQUFDTDtBQUEzQixLQUFiO0FBRUEsV0FBTztBQUFFRCxlQUFGO0FBQWFLO0FBQWIsS0FBUDtBQUNEOztBQUNERSxRQUFNLEdBQUU7QUFDTixVQUFNO0FBQUVWLGVBQUY7QUFBYUcsZUFBYjtBQUF3Qks7QUFBeEIsUUFBaUMsS0FBS0csS0FBNUM7QUFFQSxXQUNFLG1FQUNFLE1BQUMsb0RBQUQsUUFDRSxNQUFDLFNBQUQsZUFBZVIsU0FBZjtBQUEwQixVQUFJLEVBQUVLO0FBQWhDLE9BREYsQ0FERixDQURGO0FBT0Q7O0FBN0JvQyxDLENBa0N2QztBQUNBO0FBRUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnO1xuXG4vLyBTVFlMSU5HXG4vLyBvcmRlciBtYXR0ZXIgMXN0IGluIGxpc3Qgd2lsbCBiZSBvdmVyaWRlZFxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge31cbiAgICBjb25zdCB1c2VyID0gcHJvY2Vzcy5icm93c2VyID8gYXV0aDAuY2xpZW50QXV0aCgpIDogYXV0aDAuc2VydmVyQXV0aChjdHgucmVxKTtcblxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICB9XG5cbiAgICBcbiAgICAvLyBCZWNhdXNlIGl0J3MgZGVzdHJ1Y3R1cmUgaW4gQmFzZUxheW91dCwgd2UgY2FuIGFjY2VzcyBpdFxuICAgIC8vIFNXSVRDSCBCRVRXRUVOIFRSVUV8RkFMU0UgIC8gT1IgTE9ORyBXQVk6XG4gICAgLy8gbGV0IGlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgIC8vIGlmKHVzZXIpIHsgaXNBdXRoZW50aWNhdGVkID0gdHJ1ZSB9XG4gICAgY29uc3QgYXV0aCA9IHsgdXNlciwgaXNBdXRoZW50aWNhdGVkOiAhIXVzZXIgfTtcbiAgICBcbiAgICByZXR1cm4geyBwYWdlUHJvcHMsIGF1dGggfVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGF1dGggfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4oXG4gICAgICA8PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gYXV0aD17YXV0aH0gLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIElOIE15QXBwIENvbXBvbmVudFxuLy8gY29uc3QgaXNBdXRoZW50aWNhdGVkID0gcHJvY2Vzcy5icm93c2VyID8gXCJjbGllbnRBdXRoKClcIiA6IFwic2VydmVyQXV0aCgpXCI7XG5cbiAgICAvLyBTYW1lIGFzIDpcbiAgICAvLyBsZXQgaXNBdXRoZW50aWNhdGVkO1xuICAgIC8vIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAvLyAgIGlzQXV0aGVudGljYXRlZCA9IFwiY2xpZW50QXV0aCgpXCI7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGlzQXV0aGVudGljYXRlZCA9IFwic2VydmVyQXV0aCgpXCI7XG4gICAgLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0-js */ \"auth0-js\");\n/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // import axios from 'axios';\n// import { getCookieFromReq } from '../helpers/utils';\n// const CLIENT_ID = process.env.CLIENT_ID;\n\nclass Auth0 {\n  constructor() {\n    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_0___default.a.WebAuth({\n      domain: 'jnmn.eu.auth0.com',\n      clientID: 'gJejjJctuYOVir0bF3dcmD7ptBA297L0',\n      redirectUri: 'http://localhost:3000/callback',\n      responseType: 'token id_token',\n      scope: 'openid profile'\n    }); // CALLBACK FUNCTION\n\n    this.login = this.login.bind(this);\n    this.handleAuthentication = this.handleAuthentication.bind(this);\n    this.logout = this.logout.bind(this); // this.isAuthenticated = this.isAuthenticated.bind(this);\n  }\n\n  handleAuthentication() {\n    return new Promise((resolve, reject) => {\n      this.auth0.parseHash((err, authResult) => {\n        if (authResult && authResult.accessToken && authResult.idToken) {\n          this.setSession(authResult);\n          resolve();\n        } else if (err) {\n          reject(err);\n          console.log(err);\n        }\n      });\n    });\n  }\n\n  setSession(authResult) {\n    //  SET THE TIME THAT ACCES TOKEN WILL EXPIRE AT\n    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime()); // Cookies.set('jwt', authResult.idToken);\n\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('user', authResult.idTokenPayload);\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('jwt', authResult.idToken);\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('expiresAt', expiresAt);\n  }\n\n  logout() {\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('user');\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('jwt');\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('expiresAt');\n    this.auth0.logout({\n      // returnTo: process.env.BASE_URL,\n      returnTo: '',\n      clientID: 'gJejjJctuYOVir0bF3dcmD7ptBA297L0' //     clientID: CLIENT_ID\n\n    });\n  }\n\n  login() {\n    this.auth0.authorize();\n  } // isAuthenticated(){\n  //   // Check whether the current is past the\n  //   // Access Token's expiry time\n  //   const expiresAt = Cookies.getJSON('expiresAt');\n  //   return new Date().getTime() < expiresAt;\n  // }\n  // async getJWKS() {\n  //   const res = await axios.get('https://eincode.eu.auth0.com/.well-known/jwks.json');\n  //   const jwks = res.data;\n  //   return jwks;\n  // }\n\n\n  verifyToken(token) {\n    if (token) {\n      const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.decode(token);\n      const expiresAt = decodedToken.exp * 1000;\n      return decodedToken && new Date().getTime() < expiresAt ? decodedToken : undefined;\n    }\n\n    return undefined;\n  } // async verifyToken(token) {\n  //   if (token) {\n  //     const decodedToken = jwt.decode(token, { complete: true});\n  //     if (!decodedToken) { return undefined; }\n  //     const jwks = await this.getJWKS();\n  //     const jwk = jwks.keys[0];\n  //     // BUILD CERTIFICATE\n  //     let cert = jwk.x5c[0];\n  //     cert = cert.match(/.{1,64}/g).join('\\n');\n  //     cert = `-----BEGIN CERTIFICATE-----\\n${cert}\\n-----END CERTIFICATE-----\\n`;\n  //     if (jwk.kid === decodedToken.header.kid) {\n  //       try {\n  //         const verifiedToken = jwt.verify(token, cert);\n  //         const expiresAt = verifiedToken.exp * 1000;\n  //         return (verifiedToken && new Date().getTime() < expiresAt) ? verifiedToken : undefined;\n  //       } catch(err) {\n  //         return undefined;\n  //       }\n  //     }\n  //   }\n  //   return undefined;\n  // }\n  // async clientAuth() {\n  //   const token = Cookies.getJSON('jwt');\n  //   const verifiedToken = await this.verifyToken(token);\n  //   return verifiedToken;\n  // }\n\n\n  clientAuth() {\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.getJSON('jwt');\n    const verifiedToken = this.verifyToken(token);\n    return token;\n  } //   async serverAuth(req) {\n  //     if (req.headers.cookie) {\n  //       const token = getCookieFromReq(req, 'jwt');\n  //       const verifiedToken = await this.verifyToken(token);\n  //       return verifiedToken;\n  //     }\n  //     return undefined;\n  //   }\n\n\n  serverAuth(req) {\n    if (req.headers.cookie) {\n      const tokenCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));\n\n      if (!tokenCookie) {\n        return undefined;\n      }\n\n      ;\n      const token = tokenCookie.split('=')[1];\n      const verifiedToken = this.verifyToken(token);\n      return verifiedToken;\n    }\n\n    return undefined;\n  }\n\n}\n\nconst auth0Client = new Auth0();\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth0Client); // For local Storage, in constructor\n// localStorage.setItem('acces_token', authResult.accessToken)\n// localStorage.setItem('id_token', authResult.idToken)\n// localStorage.setItem('expires_at', expiresAt)\n// NAVIGATE TO HOME ROUTE\n// history.replace('/home');\n// IN serverAuth(req), to see how it works\n// const cookies = req.headers.cookie;\n// console.log(cookies);\n// const splitedCookies = cookies.split(';');\n// console.log(splitedCookies)\n// // trim to take of space in \"json\"\n// const expiresAtCookie = splitedCookies.find(c => c.trim().startsWith('expiresAt='));\n// console.log(expiresAtCookie); \n// const expiresAtArray = expiresAtCookie.split('=');\n// console.log(expiresAtArray);\n// const expiresAt = expiresAtCookie[1];\n// console.log(expiresAt);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hdXRoMC5qcz83MDVjIl0sIm5hbWVzIjpbIkF1dGgwIiwiY29uc3RydWN0b3IiLCJhdXRoMCIsIldlYkF1dGgiLCJkb21haW4iLCJjbGllbnRJRCIsInJlZGlyZWN0VXJpIiwicmVzcG9uc2VUeXBlIiwic2NvcGUiLCJsb2dpbiIsImJpbmQiLCJoYW5kbGVBdXRoZW50aWNhdGlvbiIsImxvZ291dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2VIYXNoIiwiZXJyIiwiYXV0aFJlc3VsdCIsImFjY2Vzc1Rva2VuIiwiaWRUb2tlbiIsInNldFNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiZXhwaXJlc0F0IiwiSlNPTiIsInN0cmluZ2lmeSIsImV4cGlyZXNJbiIsIkRhdGUiLCJnZXRUaW1lIiwiQ29va2llcyIsInNldCIsImlkVG9rZW5QYXlsb2FkIiwicmVtb3ZlIiwicmV0dXJuVG8iLCJhdXRob3JpemUiLCJ2ZXJpZnlUb2tlbiIsInRva2VuIiwiZGVjb2RlZFRva2VuIiwiand0IiwiZGVjb2RlIiwiZXhwIiwidW5kZWZpbmVkIiwiY2xpZW50QXV0aCIsImdldEpTT04iLCJ2ZXJpZmllZFRva2VuIiwic2VydmVyQXV0aCIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiLCJ0b2tlbkNvb2tpZSIsInNwbGl0IiwiZmluZCIsImMiLCJ0cmltIiwic3RhcnRzV2l0aCIsImF1dGgwQ2xpZW50Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FFQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUEsS0FBTixDQUFZO0FBRVZDLGFBQVcsR0FBRztBQUNaLFNBQUtDLEtBQUwsR0FBYSxJQUFJQSwrQ0FBSyxDQUFDQyxPQUFWLENBQWtCO0FBQzdCQyxZQUFNLEVBQUUsbUJBRHFCO0FBRTdCQyxjQUFRLEVBQUUsa0NBRm1CO0FBRzdCQyxpQkFBVyxFQUFFLGdDQUhn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QUFNQyxhQUFhLEdBQUcsS0FBS1QsV0FBTCxDQUFpQkMsS0FBakIsQ0FBdEI7QUFDQSxXQUFPQSxLQUFQO0FBQ0QsR0EvSFMsQ0FrSVo7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUVTLFlBQVUsQ0FBQ0MsR0FBRCxFQUFNO0FBQ2QsUUFBSUEsR0FBRyxDQUFDQyxPQUFKLENBQVlDLE1BQWhCLEVBQXdCO0FBRXRCLFlBQU1DLFdBQVcsR0FBR0gsR0FBRyxDQUFDQyxPQUFKLENBQVlDLE1BQVosQ0FBbUJFLEtBQW5CLENBQXlCLEdBQXpCLEVBQThCQyxJQUE5QixDQUFvQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLElBQUYsR0FBU0MsVUFBVCxDQUFvQixNQUFwQixDQUF6QyxDQUFwQjs7QUFDQSxVQUFJLENBQUNMLFdBQUwsRUFBa0I7QUFDaEIsZUFBT1IsU0FBUDtBQUNEOztBQUFBO0FBQ0QsWUFBTUwsS0FBSyxHQUFHYSxXQUFXLENBQUNDLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsQ0FBZDtBQUNBLFlBQU1OLGFBQWEsR0FBRyxLQUFLVCxXQUFMLENBQWlCQyxLQUFqQixDQUF0QjtBQUNBLGFBQU9RLGFBQVA7QUFDRDs7QUFDRCxXQUFPSCxTQUFQO0FBQ0Q7O0FBMUpTOztBQThKWixNQUFNYyxXQUFXLEdBQUcsSUFBSXhELEtBQUosRUFBcEI7QUFFZXdELDBFQUFmLEUsQ0FFSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zZXJ2aWNlcy9hdXRoMC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGF1dGgwIGZyb20gJ2F1dGgwLWpzJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBpbXBvcnQgeyBnZXRDb29raWVGcm9tUmVxIH0gZnJvbSAnLi4vaGVscGVycy91dGlscyc7XG5cbi8vIGNvbnN0IENMSUVOVF9JRCA9IHByb2Nlc3MuZW52LkNMSUVOVF9JRDtcblxuY2xhc3MgQXV0aDAge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXV0aDAgPSBuZXcgYXV0aDAuV2ViQXV0aCh7XG4gICAgICBkb21haW46ICdqbm1uLmV1LmF1dGgwLmNvbScsXG4gICAgICBjbGllbnRJRDogJ2dKZWpqSmN0dVlPVmlyMGJGM2RjbUQ3cHRCQTI5N0wwJyxcbiAgICAgIHJlZGlyZWN0VXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NhbGxiYWNrJyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3Rva2VuIGlkX3Rva2VuJyxcbiAgICAgIHNjb3BlOiAnb3BlbmlkIHByb2ZpbGUnXG4gICAgfSk7XG5cbiAgICAvLyBDQUxMQkFDSyBGVU5DVElPTlxuICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvbiA9IHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0aGlzLmlzQXV0aGVudGljYXRlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQXV0aGVudGljYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuYXV0aDAucGFyc2VIYXNoKChlcnIsIGF1dGhSZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKGF1dGhSZXN1bHQgJiYgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiAmJiBhdXRoUmVzdWx0LmlkVG9rZW4pIHtcbiAgICAgICAgICB0aGlzLnNldFNlc3Npb24oYXV0aFJlc3VsdCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICAgc2V0U2Vzc2lvbihhdXRoUmVzdWx0KSB7XG4gICAgLy8gIFNFVCBUSEUgVElNRSBUSEFUIEFDQ0VTIFRPS0VOIFdJTEwgRVhQSVJFIEFUXG4gICAgY29uc3QgZXhwaXJlc0F0ID0gSlNPTi5zdHJpbmdpZnkoKGF1dGhSZXN1bHQuZXhwaXJlc0luICogMTAwMCkgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgXG5cblxuICAgIC8vIENvb2tpZXMuc2V0KCdqd3QnLCBhdXRoUmVzdWx0LmlkVG9rZW4pO1xuICAgIENvb2tpZXMuc2V0KCd1c2VyJywgYXV0aFJlc3VsdC5pZFRva2VuUGF5bG9hZCk7XG4gICAgQ29va2llcy5zZXQoJ2p3dCcsIGF1dGhSZXN1bHQuaWRUb2tlbik7XG4gICAgQ29va2llcy5zZXQoJ2V4cGlyZXNBdCcsIGV4cGlyZXNBdCk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgQ29va2llcy5yZW1vdmUoJ3VzZXInKTtcbiAgICBDb29raWVzLnJlbW92ZSgnand0Jyk7XG4gICAgQ29va2llcy5yZW1vdmUoJ2V4cGlyZXNBdCcpO1xuXG4gICAgdGhpcy5hdXRoMC5sb2dvdXQoe1xuICAgICAgLy8gcmV0dXJuVG86IHByb2Nlc3MuZW52LkJBU0VfVVJMLFxuICAgICAgcmV0dXJuVG86ICcnLFxuICAgICAgY2xpZW50SUQ6ICdnSmVqakpjdHVZT1ZpcjBiRjNkY21EN3B0QkEyOTdMMCdcbiAgLy8gICAgIGNsaWVudElEOiBDTElFTlRfSURcbiAgICB9KVxuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgdGhpcy5hdXRoMC5hdXRob3JpemUoKTtcbiAgfVxuXG4gIC8vIGlzQXV0aGVudGljYXRlZCgpe1xuICAvLyAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgaXMgcGFzdCB0aGVcbiAgLy8gICAvLyBBY2Nlc3MgVG9rZW4ncyBleHBpcnkgdGltZVxuICAvLyAgIGNvbnN0IGV4cGlyZXNBdCA9IENvb2tpZXMuZ2V0SlNPTignZXhwaXJlc0F0Jyk7XG4gIC8vICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgZXhwaXJlc0F0O1xuICAvLyB9XG5cbiAgLy8gYXN5bmMgZ2V0SldLUygpIHtcbiAgLy8gICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vZWluY29kZS5ldS5hdXRoMC5jb20vLndlbGwta25vd24vandrcy5qc29uJyk7XG4gIC8vICAgY29uc3QgandrcyA9IHJlcy5kYXRhO1xuICAvLyAgIHJldHVybiBqd2tzO1xuICAvLyB9XG5cbiAgICB2ZXJpZnlUb2tlbih0b2tlbikge1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dC5kZWNvZGUodG9rZW4pO1xuICAgICAgICBjb25zdCBleHBpcmVzQXQgPSBkZWNvZGVkVG9rZW4uZXhwICogMTAwMDsgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChkZWNvZGVkVG9rZW4gJiYgbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzQXQpID8gZGVjb2RlZFRva2VuIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cblxuICAvLyBhc3luYyB2ZXJpZnlUb2tlbih0b2tlbikge1xuICAvLyAgIGlmICh0b2tlbikge1xuICAvLyAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gand0LmRlY29kZSh0b2tlbiwgeyBjb21wbGV0ZTogdHJ1ZX0pO1xuXG4gIC8vICAgICBpZiAoIWRlY29kZWRUb2tlbikgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5cbiAgLy8gICAgIGNvbnN0IGp3a3MgPSBhd2FpdCB0aGlzLmdldEpXS1MoKTtcbiAgLy8gICAgIGNvbnN0IGp3ayA9IGp3a3Mua2V5c1swXTtcblxuICAvLyAgICAgLy8gQlVJTEQgQ0VSVElGSUNBVEVcbiAgLy8gICAgIGxldCBjZXJ0ID0gandrLng1Y1swXTtcbiAgLy8gICAgIGNlcnQgPSBjZXJ0Lm1hdGNoKC8uezEsNjR9L2cpLmpvaW4oJ1xcbicpO1xuICAvLyAgICAgY2VydCA9IGAtLS0tLUJFR0lOIENFUlRJRklDQVRFLS0tLS1cXG4ke2NlcnR9XFxuLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLVxcbmA7XG5cbiAgLy8gICAgIGlmIChqd2sua2lkID09PSBkZWNvZGVkVG9rZW4uaGVhZGVyLmtpZCkge1xuICAvLyAgICAgICB0cnkge1xuICAvLyAgICAgICAgIGNvbnN0IHZlcmlmaWVkVG9rZW4gPSBqd3QudmVyaWZ5KHRva2VuLCBjZXJ0KTtcbiAgLy8gICAgICAgICBjb25zdCBleHBpcmVzQXQgPSB2ZXJpZmllZFRva2VuLmV4cCAqIDEwMDA7XG5cbiAgLy8gICAgICAgICByZXR1cm4gKHZlcmlmaWVkVG9rZW4gJiYgbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzQXQpID8gdmVyaWZpZWRUb2tlbiA6IHVuZGVmaW5lZDtcbiAgLy8gICAgICAgfSBjYXRjaChlcnIpIHtcbiAgLy8gICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIC8vICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgLy8gfVxuXG5cbiAgLy8gYXN5bmMgY2xpZW50QXV0aCgpIHtcbiAgLy8gICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0SlNPTignand0Jyk7XG4gIC8vICAgY29uc3QgdmVyaWZpZWRUb2tlbiA9IGF3YWl0IHRoaXMudmVyaWZ5VG9rZW4odG9rZW4pO1xuXG4gIC8vICAgcmV0dXJuIHZlcmlmaWVkVG9rZW47XG4gIC8vIH1cblxuICBjbGllbnRBdXRoKCkge1xuICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXRKU09OKCdqd3QnKTtcbiAgICBjb25zdCB2ZXJpZmllZFRva2VuID0gdGhpcy52ZXJpZnlUb2tlbih0b2tlbik7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cblxuLy8gICBhc3luYyBzZXJ2ZXJBdXRoKHJlcSkge1xuLy8gICAgIGlmIChyZXEuaGVhZGVycy5jb29raWUpIHtcblxuLy8gICAgICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWVGcm9tUmVxKHJlcSwgJ2p3dCcpO1xuLy8gICAgICAgY29uc3QgdmVyaWZpZWRUb2tlbiA9IGF3YWl0IHRoaXMudmVyaWZ5VG9rZW4odG9rZW4pO1xuXG4vLyAgICAgICByZXR1cm4gdmVyaWZpZWRUb2tlbjtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gdW5kZWZpbmVkO1xuLy8gICB9XG4gXG4gIHNlcnZlckF1dGgocmVxKSB7XG4gICAgaWYgKHJlcS5oZWFkZXJzLmNvb2tpZSkge1xuICAgICAgICAgICAgXG4gICAgICBjb25zdCB0b2tlbkNvb2tpZSA9IHJlcS5oZWFkZXJzLmNvb2tpZS5zcGxpdCgnOycpLmZpbmQoIGMgPT4gYy50cmltKCkuc3RhcnRzV2l0aCgnand0PScpKTtcbiAgICAgIGlmICghdG9rZW5Db29raWUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5Db29raWUuc3BsaXQoJz0nKVsxXTtcbiAgICAgIGNvbnN0IHZlcmlmaWVkVG9rZW4gPSB0aGlzLnZlcmlmeVRva2VuKHRva2VuKVxuICAgICAgcmV0dXJuIHZlcmlmaWVkVG9rZW47XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5jb25zdCBhdXRoMENsaWVudCA9IG5ldyBBdXRoMCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoMENsaWVudDtcblxuICAgIC8vIEZvciBsb2NhbCBTdG9yYWdlLCBpbiBjb25zdHJ1Y3RvclxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc190b2tlbicsIGF1dGhSZXN1bHQuYWNjZXNzVG9rZW4pXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgYXV0aFJlc3VsdC5pZFRva2VuKVxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleHBpcmVzX2F0JywgZXhwaXJlc0F0KVxuICAgIC8vIE5BVklHQVRFIFRPIEhPTUUgUk9VVEVcbiAgICAvLyBoaXN0b3J5LnJlcGxhY2UoJy9ob21lJyk7XG5cbiAgICAvLyBJTiBzZXJ2ZXJBdXRoKHJlcSksIHRvIHNlZSBob3cgaXQgd29ya3NcbiAgICAvLyBjb25zdCBjb29raWVzID0gcmVxLmhlYWRlcnMuY29va2llO1xuICAgICAgLy8gY29uc29sZS5sb2coY29va2llcyk7XG4gICAgICAvLyBjb25zdCBzcGxpdGVkQ29va2llcyA9IGNvb2tpZXMuc3BsaXQoJzsnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNwbGl0ZWRDb29raWVzKVxuICAgICAgLy8gLy8gdHJpbSB0byB0YWtlIG9mIHNwYWNlIGluIFwianNvblwiXG4gICAgICAvLyBjb25zdCBleHBpcmVzQXRDb29raWUgPSBzcGxpdGVkQ29va2llcy5maW5kKGMgPT4gYy50cmltKCkuc3RhcnRzV2l0aCgnZXhwaXJlc0F0PScpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV4cGlyZXNBdENvb2tpZSk7IFxuICAgICAgLy8gY29uc3QgZXhwaXJlc0F0QXJyYXkgPSBleHBpcmVzQXRDb29raWUuc3BsaXQoJz0nKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV4cGlyZXNBdEFycmF5KTtcbiAgICAgIC8vIGNvbnN0IGV4cGlyZXNBdCA9IGV4cGlyZXNBdENvb2tpZVsxXTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV4cGlyZXNBdCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/auth0.js\n");

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