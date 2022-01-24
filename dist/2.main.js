(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/hoc/Security/ObieeItemApprole.js":
/*!**********************************************!*\
  !*** ./src/hoc/Security/ObieeItemApprole.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObieeItemApprole; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/Utils */ "./src/utils/Utils.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _widgets_ObieeButtonOperation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../widgets/ObieeButtonOperation */ "./src/widgets/ObieeButtonOperation.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");
var _jsxFileName = "/home/alireza/Documents/react/obiee-react/src/hoc/Security/ObieeItemApprole.js";
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 //import axios from 'axios';















 //import AddIcon from '@material-ui/icons/Add';







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      minWidth: 275
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    },
    formControl: {
      margin: 0,
      minWidth: 190
    },
    cardContent: {
      root: {
        padding: 0,
        border: 'none'
      }
    }
  };
});
function ObieeItemApprole(props) {
  var classes = useStyles();
  var mode = props.mode,
      onAdd = props.onAdd,
      onEdit = props.onEdit,
      onDelete = props.onDelete,
      onCancel = props.onCancel,
      onExternalEvent = props.onExternalEvent;
  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_Context__WEBPACK_IMPORTED_MODULE_21__["UserContext"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.approle && mode !== 'add' ? props.approle.name : ''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      approleName = _React$useState2[0],
      setApproleName = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.approle && mode !== 'add' ? props.approle.description : ''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      approleDesc = _React$useState4[0],
      setApproleDesc = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(mode !== 'add' && props.approle.baseRoles && props.approle.baseRoles.length > 0 ? props.approle.baseRoles[0].name : ''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      approleType = _React$useState6[0],
      setApproleType = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.approle && mode !== 'add' ? props.approle.type : ''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      appType = _React$useState8[0],
      setAppType = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.approle && mode !== 'add' ? props.approle.displayName : ''),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      approleDisplayName = _React$useState10[0],
      setApproleDisplayName = _React$useState10[1];

  var strApproleDisplayName = Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Approle Display Name');
  var strApproleName = Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Approle Name');
  var strApproleType = Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Application Role Type');
  var strAppType = Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Application Type');
  var strApproleDesc = Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Approle Desc');
  var strSave = Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Save'); //const strEdit = getText('Edit');
  //const strDelete = getText('Delete');

  var strCancel = Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Cancel');

  var createRow = function createRow() {
    var result = {
      name: approleName,
      displayName: approleDisplayName,
      description: approleDesc,
      appId: "obi",
      type: appType,
      baseRoles: [{
        name: approleType
      }]
    };
    return result;
  };

  function validation() {
    if (approleName.length === 0 || approleDisplayName.length === 0 || approleDesc.length === 0 || //appType.length === 0 ||
    approleType.length === 0) return false;
    return true;
  }

  return /*#__PURE__*/_jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.root,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.cardContent.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, void 0, (mode === 'add' || mode === 'edit') && /*#__PURE__*/_jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: strApproleName,
    placeholder: strApproleName,
    variant: "outlined",
    fullWidth: true,
    error: !validator__WEBPACK_IMPORTED_MODULE_20___default.a.isAlpha(approleName, 'en-US'),
    helperText: !validator__WEBPACK_IMPORTED_MODULE_20___default.a.isAlpha(approleName, 'en-US') ? Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Input Failed') : null,
    disabled: mode === 'edit',
    value: approleName,
    onChange: function onChange(e) {
      return setApproleName(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  })), mode === 'read' && /*#__PURE__*/_jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6",
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, void 0, approleName)), (mode === 'add' || mode === 'edit') && /*#__PURE__*/_jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: strApproleDisplayName,
    placeholder: strApproleDisplayName,
    variant: "outlined",
    fullWidth: true,
    error: !validator__WEBPACK_IMPORTED_MODULE_20___default.a.isAlpha(approleDisplayName, 'fa-IR') && !validator__WEBPACK_IMPORTED_MODULE_20___default.a.contains(approleDisplayName, ' '),
    helperText: !validator__WEBPACK_IMPORTED_MODULE_20___default.a.isAlpha(approleDisplayName, 'fa-IR') && !validator__WEBPACK_IMPORTED_MODULE_20___default.a.contains(approleDisplayName, ' ') ? Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Input Failed') : null,
    value: approleDisplayName,
    onChange: function onChange(e) {
      return setApproleDisplayName(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  })), mode === 'read' && /*#__PURE__*/_jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6",
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, void 0, approleDisplayName)), (mode === 'add' || mode === 'edit') && /*#__PURE__*/_jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "outlined",
    fullWidth: true,
    className: classes.formControl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "demo-simple-select-outlined-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, void 0, strApproleType), /*#__PURE__*/_jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__["default"] //labelId="demo-simple-select-outlined-label"
  //id="demo-simple-select-outlined"
  , {
    value: approleType,
    onChange: function onChange(e) {
      setApproleType(e.target.value);
    },
    label: strApproleType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: 'BIConsumer',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, void 0, Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Consumer')), /*#__PURE__*/_jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: 'BIContentAuthor',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }, void 0, Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Content Author'))))), mode === 'read' && /*#__PURE__*/_jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6",
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }
  }, void 0, approleType)), (mode === 'add' || mode === 'edit') && /*#__PURE__*/_jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: strApproleDesc,
    placeholder: strApproleDesc,
    variant: "outlined",
    fullWidth: true,
    value: approleDesc,
    onChange: function onChange(e) {
      return setApproleDesc(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  })))), /*#__PURE__*/_jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 7
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 0,
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 7
    }
  }, void 0, /*#__PURE__*/_jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 9
    }
  }, void 0, (mode === 'add' || mode === 'edit') && /*#__PURE__*/_jsx(_widgets_ObieeButtonOperation__WEBPACK_IMPORTED_MODULE_19__["default"], {
    type: "button",
    onExecute: onCancel,
    title: strCancel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 11
    }
  })), /*#__PURE__*/_jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 9
    }
  }, void 0, mode === 'add' && /*#__PURE__*/_jsx(_widgets_ObieeButtonOperation__WEBPACK_IMPORTED_MODULE_19__["default"], {
    type: "button",
    onExecute: function onExecute() {
      if (validation()) onAdd(createRow());else context.obieeDispatch({
        type: 'show_message',
        messageToShow: {
          type: 'error',
          message: Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Input Failed')
        }
      });
    },
    title: strSave,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }
  }), mode === 'edit' && /*#__PURE__*/_jsx(_widgets_ObieeButtonOperation__WEBPACK_IMPORTED_MODULE_19__["default"], {
    type: "button",
    onExecute: function onExecute() {
      if (validation()) onEdit(createRow());else context.obieeDispatch({
        type: 'show_message',
        messageToShow: {
          type: 'error',
          message: Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_15__["getText"])('Input Failed')
        }
      });
    },
    title: strSave,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 11
    }
  })))));
}
ObieeItemApprole.propTypes = {
  mode: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.oneOf(['read', 'add', 'edit']).isRequired
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9jL1NlY3VyaXR5L09iaWVlSXRlbUFwcHJvbGUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1pbldpZHRoIiwiYnVsbGV0IiwiZGlzcGxheSIsIm1hcmdpbiIsInRyYW5zZm9ybSIsInRpdGxlIiwiZm9udFNpemUiLCJwb3MiLCJtYXJnaW5Cb3R0b20iLCJmb3JtQ29udHJvbCIsImNhcmRDb250ZW50IiwicGFkZGluZyIsImJvcmRlciIsIk9iaWVlSXRlbUFwcHJvbGUiLCJwcm9wcyIsImNsYXNzZXMiLCJtb2RlIiwib25BZGQiLCJvbkVkaXQiLCJvbkRlbGV0ZSIsIm9uQ2FuY2VsIiwib25FeHRlcm5hbEV2ZW50IiwiY29udGV4dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwidXNlU3RhdGUiLCJhcHByb2xlIiwibmFtZSIsImFwcHJvbGVOYW1lIiwic2V0QXBwcm9sZU5hbWUiLCJkZXNjcmlwdGlvbiIsImFwcHJvbGVEZXNjIiwic2V0QXBwcm9sZURlc2MiLCJiYXNlUm9sZXMiLCJsZW5ndGgiLCJhcHByb2xlVHlwZSIsInNldEFwcHJvbGVUeXBlIiwidHlwZSIsImFwcFR5cGUiLCJzZXRBcHBUeXBlIiwiZGlzcGxheU5hbWUiLCJhcHByb2xlRGlzcGxheU5hbWUiLCJzZXRBcHByb2xlRGlzcGxheU5hbWUiLCJzdHJBcHByb2xlRGlzcGxheU5hbWUiLCJnZXRUZXh0Iiwic3RyQXBwcm9sZU5hbWUiLCJzdHJBcHByb2xlVHlwZSIsInN0ckFwcFR5cGUiLCJzdHJBcHByb2xlRGVzYyIsInN0clNhdmUiLCJzdHJDYW5jZWwiLCJjcmVhdGVSb3ciLCJyZXN1bHQiLCJhcHBJZCIsInZhbGlkYXRpb24iLCJ2YWxpZGF0b3IiLCJpc0FscGhhIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29udGFpbnMiLCJvYmllZURpc3BhdGNoIiwibWVzc2FnZVRvU2hv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QUFhLEVBQUM7QUFBQ3pCLGNBQUksRUFBQyxPQUFOO0FBQWMwQixpQkFBTyxFQUFDbkIsNkRBQU8sQ0FBQyxjQUFEO0FBQTdCO0FBQW5DLE9BQXRCO0FBQ0gsS0FOSDtBQU1LLFNBQUssRUFBRUssT0FOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsRUFVQ2xDLElBQUksS0FBRyxNQUFQLGlCQUNDLEtBQUMsc0VBQUQ7QUFBc0IsUUFBSSxFQUFDLFFBQTNCO0FBQW9DLGFBQVMsRUFBRSxxQkFDN0M7QUFDRSxVQUFHdUMsVUFBVSxFQUFiLEVBQ0VyQyxNQUFNLENBQUNrQyxTQUFTLEVBQVYsQ0FBTixDQURGLEtBR0U5QixPQUFPLENBQUN3QyxhQUFSLENBQXNCO0FBQUN4QixZQUFJLEVBQUMsY0FBTjtBQUFxQnlCLHFCQUFhLEVBQUM7QUFBQ3pCLGNBQUksRUFBQyxPQUFOO0FBQWMwQixpQkFBTyxFQUFDbkIsNkRBQU8sQ0FBQyxjQUFEO0FBQTdCO0FBQW5DLE9BQXRCO0FBQ0gsS0FOSDtBQU1LLFNBQUssRUFBRUssT0FOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FORixDQURBLENBckpGLENBREE7QUFzTEg7QUFFRHJDLGdCQUFnQixDQUFDb0QsU0FBakIsR0FBNEI7QUFDeEJqRCxNQUFJLEVBQUVrRCxrREFBUyxDQUFDQyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFRLEtBQVIsRUFBYyxNQUFkLENBQWhCLEVBQXVDQztBQURyQixDQUE1QixDIiwiZmlsZSI6IjIubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vL2ltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Z2V0VGV4dH0gZnJvbSAnLi4vLi4vdXRpbHMvVXRpbHMnO1xuLy9pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdCc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE9iaWVlQnV0dG9uT3BlcmF0aW9uIGZyb20gJy4uLy4uL3dpZGdldHMvT2JpZWVCdXR0b25PcGVyYXRpb24nO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tIFwidmFsaWRhdG9yXCI7XG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi8uLi9Db250ZXh0JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZT0+KHtcbiAgICByb290OiB7XG4gICAgICAgIG1pbldpZHRoOiAyNzUsXG4gICAgICB9LFxuICAgICAgYnVsbGV0OiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW46ICcwIDJweCcsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIH0sXG4gICAgICBwb3M6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMixcbiAgICAgIH0sXG4gICAgICBmb3JtQ29udHJvbDoge1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG1pbldpZHRoOiAxOTAsXG4gICAgICB9LFxuICAgICAgY2FyZENvbnRlbnQ6e1xuICAgICAgICByb290OntcbiAgICAgICAgICBwYWRkaW5nOjAsXG4gICAgICAgICAgYm9yZGVyOidub25lJ1xuICAgICAgICB9XG4gICAgICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9iaWVlSXRlbUFwcHJvbGUocHJvcHMpe1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgY29uc3R7bW9kZSxvbkFkZCxvbkVkaXQsb25EZWxldGUsb25DYW5jZWwsb25FeHRlcm5hbEV2ZW50fSA9IHByb3BzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gICAgY29uc3QgW2FwcHJvbGVOYW1lLHNldEFwcHJvbGVOYW1lXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmFwcHJvbGUgJiYgbW9kZSE9PSdhZGQnID8gcHJvcHMuYXBwcm9sZS5uYW1lOicnKTtcbiAgICBjb25zdCBbYXBwcm9sZURlc2Msc2V0QXBwcm9sZURlc2NdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuYXBwcm9sZSAmJiBtb2RlIT09J2FkZCcgPyBwcm9wcy5hcHByb2xlLmRlc2NyaXB0aW9uIDogJycpO1xuICAgIGNvbnN0IFthcHByb2xlVHlwZSxzZXRBcHByb2xlVHlwZV0gPSBSZWFjdC51c2VTdGF0ZShtb2RlIT09J2FkZCcgJiYgcHJvcHMuYXBwcm9sZS5iYXNlUm9sZXMgJiYgcHJvcHMuYXBwcm9sZS5iYXNlUm9sZXMubGVuZ3RoPjAgPyBwcm9wcy5hcHByb2xlLmJhc2VSb2xlc1swXS5uYW1lOicnKTtcbiAgICBjb25zdCBbYXBwVHlwZSxzZXRBcHBUeXBlXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmFwcHJvbGUgJiYgbW9kZSE9PSdhZGQnID8gcHJvcHMuYXBwcm9sZS50eXBlOicnKTtcbiAgICBjb25zdCBbYXBwcm9sZURpc3BsYXlOYW1lLHNldEFwcHJvbGVEaXNwbGF5TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5hcHByb2xlICYmIG1vZGUhPT0nYWRkJyA/IHByb3BzLmFwcHJvbGUuZGlzcGxheU5hbWU6JycpO1xuXG4gICAgY29uc3Qgc3RyQXBwcm9sZURpc3BsYXlOYW1lID0gZ2V0VGV4dCgnQXBwcm9sZSBEaXNwbGF5IE5hbWUnKTtcbiAgICBjb25zdCBzdHJBcHByb2xlTmFtZSA9IGdldFRleHQoJ0FwcHJvbGUgTmFtZScpO1xuICAgIGNvbnN0IHN0ckFwcHJvbGVUeXBlID0gZ2V0VGV4dCgnQXBwbGljYXRpb24gUm9sZSBUeXBlJyk7XG4gICAgY29uc3Qgc3RyQXBwVHlwZSA9IGdldFRleHQoJ0FwcGxpY2F0aW9uIFR5cGUnKTtcbiAgICBjb25zdCBzdHJBcHByb2xlRGVzYyA9IGdldFRleHQoJ0FwcHJvbGUgRGVzYycpO1xuICAgIGNvbnN0IHN0clNhdmUgPSBnZXRUZXh0KCdTYXZlJyk7XG4gICAgLy9jb25zdCBzdHJFZGl0ID0gZ2V0VGV4dCgnRWRpdCcpO1xuICAgIC8vY29uc3Qgc3RyRGVsZXRlID0gZ2V0VGV4dCgnRGVsZXRlJyk7XG4gICAgY29uc3Qgc3RyQ2FuY2VsID0gZ2V0VGV4dCgnQ2FuY2VsJyk7XG5cbiAgICBjb25zdCBjcmVhdGVSb3cgPSAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6IGFwcHJvbGVOYW1lICAsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBhcHByb2xlRGlzcGxheU5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBhcHByb2xlRGVzYyxcbiAgICAgICAgYXBwSWQ6IFwib2JpXCIsXG4gICAgICAgIHR5cGU6YXBwVHlwZSxcbiAgICAgICAgYmFzZVJvbGVzOlt7bmFtZTphcHByb2xlVHlwZX1dXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRpb24oKXtcbiAgICAgIGlmKGFwcHJvbGVOYW1lLmxlbmd0aCA9PT0gMCB8fCBcbiAgICAgICAgIGFwcHJvbGVEaXNwbGF5TmFtZS5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgIGFwcHJvbGVEZXNjLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgLy9hcHBUeXBlLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgYXBwcm9sZVR5cGUubGVuZ3RoID09PSAwXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZENvbnRlbnQucm9vdH0+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gPlxuXG4gICAgICB7KG1vZGU9PT0nYWRkJyB8fCBtb2RlPT09J2VkaXQnKSAmJiBcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxuICAgICAgICAgIDxUZXh0RmllbGQgIFxuICAgICAgICAgIGxhYmVsPXtzdHJBcHByb2xlTmFtZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17c3RyQXBwcm9sZU5hbWV9XG4gICAgICAgICAgdmFyaWFudD17XCJvdXRsaW5lZFwifVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGVycm9yPXshdmFsaWRhdG9yLmlzQWxwaGEoYXBwcm9sZU5hbWUsICdlbi1VUycpfVxuICAgICAgICAgIGhlbHBlclRleHQ9eyF2YWxpZGF0b3IuaXNBbHBoYShhcHByb2xlTmFtZSwgJ2VuLVVTJykgPyBnZXRUZXh0KCdJbnB1dCBGYWlsZWQnKTpudWxsfVxuICAgICAgICAgIGRpc2FibGVkPXttb2RlPT09J2VkaXQnfVxuICAgICAgICAgIHZhbHVlPXthcHByb2xlTmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRBcHByb2xlTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIH1cblxuICAgICAge21vZGU9PT0ncmVhZCcgJiYgXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezN9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgIFxuICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgPnthcHByb2xlTmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIH1cblxuICAgICAgeyhtb2RlPT09J2FkZCcgfHwgbW9kZT09PSdlZGl0JykgJiYgXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgIFxuICAgICAgICAgICAgbGFiZWw9e3N0ckFwcHJvbGVEaXNwbGF5TmFtZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtzdHJBcHByb2xlRGlzcGxheU5hbWV9XG4gICAgICAgICAgICB2YXJpYW50PXtcIm91dGxpbmVkXCJ9XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGVycm9yPXshdmFsaWRhdG9yLmlzQWxwaGEoYXBwcm9sZURpc3BsYXlOYW1lLCAnZmEtSVInKSAmJiAhdmFsaWRhdG9yLmNvbnRhaW5zKGFwcHJvbGVEaXNwbGF5TmFtZSwnICcpfVxuICAgICAgICAgICAgaGVscGVyVGV4dD17IXZhbGlkYXRvci5pc0FscGhhKGFwcHJvbGVEaXNwbGF5TmFtZSwgJ2ZhLUlSJykgJiYgIXZhbGlkYXRvci5jb250YWlucyhhcHByb2xlRGlzcGxheU5hbWUsJyAnKSA/IGdldFRleHQoJ0lucHV0IEZhaWxlZCcpOm51bGx9XG4gICAgICAgICAgICB2YWx1ZT17YXBwcm9sZURpc3BsYXlOYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2U9PnNldEFwcHJvbGVEaXNwbGF5TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICB9XG5cbiAgICAgIHttb2RlPT09J3JlYWQnICYmIFxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXszfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5ICBcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgID57YXBwcm9sZURpc3BsYXlOYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgfVxuXG4gICAgICB7Lyogeyhtb2RlPT09J2FkZCcgfHwgbW9kZT09PSdlZGl0JykgJiYgXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cbiAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3Qtb3V0bGluZWQtbGFiZWxcIj57c3RyQXBwVHlwZX08L0lucHV0TGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAvL2xhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3Qtb3V0bGluZWQtbGFiZWxcIlxuICAgICAgICAgIC8vaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3Qtb3V0bGluZWRcIlxuICAgICAgICAgIHZhbHVlPXthcHBUeXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRBcHBUeXBlKGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgbGFiZWw9e3N0ckFwcFR5cGV9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydCSSd9PntnZXRUZXh0KCdCSSBQdWJsaXNoZXInKX08L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J0FOJ30+e2dldFRleHQoJ0FuYWx5dGljcycpfTwvTWVudUl0ZW0+XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIH0gKi99XG5cbiAgICAgIHsvKiB7bW9kZT09PSdyZWFkJyAmJlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXszfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5ICBcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgID57c3RyQXBwVHlwZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIH0gKi99XG5cbiAgICAgIHsobW9kZT09PSdhZGQnIHx8IG1vZGU9PT0nZWRpdCcpICYmXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxuICAgICAgICA8Rm9ybUNvbnRyb2wgdmFyaWFudD1cIm91dGxpbmVkXCIgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XG4gICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LW91dGxpbmVkLWxhYmVsXCI+e3N0ckFwcHJvbGVUeXBlfTwvSW5wdXRMYWJlbD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIC8vbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1vdXRsaW5lZC1sYWJlbFwiXG4gICAgICAgICAgLy9pZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1vdXRsaW5lZFwiXG4gICAgICAgICAgdmFsdWU9e2FwcHJvbGVUeXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRBcHByb2xlVHlwZShlLnRhcmdldC52YWx1ZSl9fVxuICAgICAgICAgIGxhYmVsPXtzdHJBcHByb2xlVHlwZX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiA8TWVudUl0ZW0gdmFsdWU9eydhdXRob3InfT5BdXRob3I8L01lbnVJdGVtPiAqL31cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydCSUNvbnN1bWVyJ30+e2dldFRleHQoJ0NvbnN1bWVyJyl9PC9NZW51SXRlbT5cbiAgICAgICAgICB7LyogPE1lbnVJdGVtIHZhbHVlPXsnQklTZXJ2aWNlQWRtaW5pc3RyYXRvcid9PkFkbWluPC9NZW51SXRlbT4gKi99XG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnQklDb250ZW50QXV0aG9yJ30+e2dldFRleHQoJ0NvbnRlbnQgQXV0aG9yJyl9PC9NZW51SXRlbT5cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICB9XG5cbiAgICAgIHttb2RlPT09J3JlYWQnICYmIFxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXszfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5ICBcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgID57YXBwcm9sZVR5cGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgfSAgICAgIFxuXG4gICAgICB7KG1vZGU9PT0nYWRkJyB8fCBtb2RlPT09J2VkaXQnKSAmJlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgIFxuICAgICAgICAgICAgbGFiZWw9e3N0ckFwcHJvbGVEZXNjfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3N0ckFwcHJvbGVEZXNjfVxuICAgICAgICAgICAgdmFyaWFudD17XCJvdXRsaW5lZFwifVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICB2YWx1ZT17YXBwcm9sZURlc2N9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRBcHByb2xlRGVzYyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICB9IFxuXG5cbiAgICAgIHsvKiB7bW9kZT09PSdyZWFkJyAmJlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXszfT5cbiAgICAgIDxJY29uQnV0dG9uIFxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn0gXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImVkaXRcIiBcbiAgICAgICAgICBvbkNsaWNrPXsoKT0+b25FeHRlcm5hbEV2ZW50KHByb3BzLmFwcHJvbGUpfVxuICAgICAgICAgID4gXG4gICAgICAgICAgPEVkaXRJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICAgICAgPEljb25CdXR0b24gXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufSBcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlXCIgXG4gICAgICAgICAgb25DbGljaz17KCk9PntvbkRlbGV0ZShhcHByb2xlTmFtZSl9fVxuICAgICAgICAgID5cbiAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgPC9HcmlkPlxuICAgICAgfSAqL31cblxuICAgICAgPC9HcmlkPlxuXG4gICAgICA8L0NhcmRDb250ZW50PlxuXG4gICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICA8R3JpZCBzcGFjaW5nPXswfSBjb250YWluZXI+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Mn0+XG4gICAgICAgIHsobW9kZT09PSdhZGQnIHx8IG1vZGU9PT0nZWRpdCcpICYmXG4gICAgICAgICAgPE9iaWVlQnV0dG9uT3BlcmF0aW9uIHR5cGU9J2J1dHRvbicgb25FeGVjdXRlPXtvbkNhbmNlbH0gdGl0bGU9e3N0ckNhbmNlbH0gLz4gICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Mn0+XG4gICAgICAgIHttb2RlPT09J2FkZCcgJiZcbiAgICAgICAgPE9iaWVlQnV0dG9uT3BlcmF0aW9uIHR5cGU9J2J1dHRvbicgb25FeGVjdXRlPXsoKT0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYodmFsaWRhdGlvbigpKVxuICAgICAgICAgICAgICBvbkFkZChjcmVhdGVSb3coKSk7XG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICBjb250ZXh0Lm9iaWVlRGlzcGF0Y2goe3R5cGU6J3Nob3dfbWVzc2FnZScsbWVzc2FnZVRvU2hvdzp7dHlwZTonZXJyb3InLG1lc3NhZ2U6Z2V0VGV4dCgnSW5wdXQgRmFpbGVkJyl9fSk7XG4gICAgICAgICAgfX0gdGl0bGU9e3N0clNhdmV9IC8+XG4gICAgICAgIH1cbiAgICAgICAge21vZGU9PT0nZWRpdCcgJiYgICAgXG4gICAgICAgICAgPE9iaWVlQnV0dG9uT3BlcmF0aW9uIHR5cGU9J2J1dHRvbicgb25FeGVjdXRlPXsoKT0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlmKHZhbGlkYXRpb24oKSlcbiAgICAgICAgICAgICAgICBvbkVkaXQoY3JlYXRlUm93KCkpO1xuICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIGNvbnRleHQub2JpZWVEaXNwYXRjaCh7dHlwZTonc2hvd19tZXNzYWdlJyxtZXNzYWdlVG9TaG93Ont0eXBlOidlcnJvcicsbWVzc2FnZTpnZXRUZXh0KCdJbnB1dCBGYWlsZWQnKX19KTtcbiAgICAgICAgICAgIH19IHRpdGxlPXtzdHJTYXZlfSAvPiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cblxuICAgIDwvQ2FyZD5cbiAgICApXG59XG5cbk9iaWVlSXRlbUFwcHJvbGUucHJvcFR5cGVzID17XG4gICAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFsncmVhZCcsJ2FkZCcsJ2VkaXQnXSkuaXNSZXF1aXJlZCxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=