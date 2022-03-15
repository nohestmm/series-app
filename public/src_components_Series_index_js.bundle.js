(self["webpackChunkseries_app"] = self["webpackChunkseries_app"] || []).push([["src_components_Series_index_js"],{

/***/ "./src/components/Series/Provider.js":
/*!*******************************************!*\
  !*** ./src/components/Series/Provider.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Provider": function() { return /* binding */ Provider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/styled.js");



var ButtonProvider = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.default)({
  borderRadius: "20px",
  color: "#ffffff",
  border: "2px solid #ffffff",
  margin: "4px",
  fontSize: "12px",
  "&.active": {
    background: '#f7ca0f'
  }
});
var Provider = function Provider(_ref) {
  var provider = _ref.provider,
      getSeriesNetwork = _ref.getSeriesNetwork,
      active = _ref.active;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "provider"
  }, provider.map(function (provider) {
    var provider_id = provider.provider_id,
        provider_name = provider.provider_name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonProvider, {
      onClick: function onClick() {
        return getSeriesNetwork(provider_id);
      },
      key: provider_id,
      id: provider_id,
      className: "".concat(active === provider_id ? "active" : "")
    }, provider_name);
  }));
};

/***/ }),

/***/ "./src/components/Series/SearchSeries.js":
/*!***********************************************!*\
  !*** ./src/components/Series/SearchSeries.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/styled.js");





var TextFieldSearch = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__.default)({
  borderRadius: "20px",
  color: "#ffffff",
  border: "2px solid #ffffff"
});
var IconButtonSearch = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__.default)({
  color: "#ffffff",
  width: "40px",
  height: "40px"
});

var SearchSeries = function SearchSeries(_ref) {
  var validateTerm = _ref.validateTerm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "search-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TextFieldSearch, {
    id: "terms",
    label: "Buscar serie...",
    margin: "normal",
    variant: "outlined",
    onKeyPress: function onKeyPress(e) {
      return validateTerm(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconButtonSearch, {
    onClick: function onClick(e) {
      return validateTerm(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__.default, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchSeries);

/***/ }),

/***/ "./src/components/Series/Serie.js":
/*!****************************************!*\
  !*** ./src/components/Series/Serie.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({
  root: {
    maxWidth: 300
  }
});

var Serie = function Serie(_ref) {
  var name = _ref.name,
      id = _ref.id,
      poster_path = _ref.poster_path,
      vote_average = _ref.vote_average;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {
    item: true,
    xs: 6,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "buttonPrimary",
    to: "/serie/".concat(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://image.tmdb.org/t/p/w500".concat(poster_path),
    alt: name,
    className: "image-serie"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Serie);

/***/ }),

/***/ "./src/components/Series/SeriesList.js":
/*!*********************************************!*\
  !*** ./src/components/Series/SeriesList.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _Serie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Serie */ "./src/components/Series/Serie.js");
/* harmony import */ var _Common_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Message */ "./src/components/Common/Message.js");





var SeriesList = function SeriesList(_ref) {
  var title = _ref.title,
      series = _ref.series;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_Message__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
    container: true,
    spacing: 3,
    justify: "center"
  }, series.map(function (series) {
    var id = series.id,
        name = series.name,
        poster_path = series.poster_path,
        vote_average = series.vote_average;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Serie__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: id,
      id: id,
      name: name,
      poster_path: poster_path,
      vote_average: vote_average
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SeriesList);

/***/ }),

/***/ "./src/components/Series/index.js":
/*!****************************************!*\
  !*** ./src/components/Series/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Common_Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/Message */ "./src/components/Common/Message.js");
/* harmony import */ var _context_SeriesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/SeriesContext */ "./src/context/SeriesContext.js");
/* harmony import */ var _SeriesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SeriesList */ "./src/components/Series/SeriesList.js");
/* harmony import */ var _SearchSeries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchSeries */ "./src/components/Series/SearchSeries.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Provider */ "./src/components/Series/Provider.js");
/* harmony import */ var _Common_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common/Loader */ "./src/components/Common/Loader.js");








var Series = function Series() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SeriesContext__WEBPACK_IMPORTED_MODULE_2__.SeriesContext),
      doneFetch = _useContext.doneFetch,
      title = _useContext.title,
      series = _useContext.series,
      query = _useContext.query,
      provider = _useContext.provider,
      doneFetchProvider = _useContext.doneFetchProvider,
      validateTerm = _useContext.validateTerm,
      getSeriesNetwork = _useContext.getSeriesNetwork,
      active = _useContext.active;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "search-bar-content"
  }, doneFetchProvider ? provider.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Provider__WEBPACK_IMPORTED_MODULE_5__.Provider, {
    provider: provider,
    getSeriesNetwork: getSeriesNetwork,
    active: active
  }) : "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_Loader__WEBPACK_IMPORTED_MODULE_6__.Loader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchSeries__WEBPACK_IMPORTED_MODULE_4__.default, {
    validateTerm: validateTerm
  })), doneFetch ? series.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SeriesList__WEBPACK_IMPORTED_MODULE_3__.default, {
    title: title,
    series: series,
    query: query
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_Message__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: title,
    query: query
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_Loader__WEBPACK_IMPORTED_MODULE_6__.Loader, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Series);

/***/ })

}]);
//# sourceMappingURL=src_components_Series_index_js.bundle.js.map