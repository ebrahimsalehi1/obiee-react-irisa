(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/validator/index.js":
/*!*****************************************!*\
  !*** ./node_modules/validator/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toDate = _interopRequireDefault(__webpack_require__(/*! ./lib/toDate */ "./node_modules/validator/lib/toDate.js"));

var _toFloat = _interopRequireDefault(__webpack_require__(/*! ./lib/toFloat */ "./node_modules/validator/lib/toFloat.js"));

var _toInt = _interopRequireDefault(__webpack_require__(/*! ./lib/toInt */ "./node_modules/validator/lib/toInt.js"));

var _toBoolean = _interopRequireDefault(__webpack_require__(/*! ./lib/toBoolean */ "./node_modules/validator/lib/toBoolean.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ./lib/equals */ "./node_modules/validator/lib/equals.js"));

var _contains = _interopRequireDefault(__webpack_require__(/*! ./lib/contains */ "./node_modules/validator/lib/contains.js"));

var _matches = _interopRequireDefault(__webpack_require__(/*! ./lib/matches */ "./node_modules/validator/lib/matches.js"));

var _isEmail = _interopRequireDefault(__webpack_require__(/*! ./lib/isEmail */ "./node_modules/validator/lib/isEmail.js"));

var _isURL = _interopRequireDefault(__webpack_require__(/*! ./lib/isURL */ "./node_modules/validator/lib/isURL.js"));

var _isMACAddress = _interopRequireDefault(__webpack_require__(/*! ./lib/isMACAddress */ "./node_modules/validator/lib/isMACAddress.js"));

var _isIP = _interopRequireDefault(__webpack_require__(/*! ./lib/isIP */ "./node_modules/validator/lib/isIP.js"));

var _isIPRange = _interopRequireDefault(__webpack_require__(/*! ./lib/isIPRange */ "./node_modules/validator/lib/isIPRange.js"));

var _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./lib/isFQDN */ "./node_modules/validator/lib/isFQDN.js"));

var _isDate = _interopRequireDefault(__webpack_require__(/*! ./lib/isDate */ "./node_modules/validator/lib/isDate.js"));

var _isBoolean = _interopRequireDefault(__webpack_require__(/*! ./lib/isBoolean */ "./node_modules/validator/lib/isBoolean.js"));

var _isLocale = _interopRequireDefault(__webpack_require__(/*! ./lib/isLocale */ "./node_modules/validator/lib/isLocale.js"));

var _isAlpha = _interopRequireWildcard(__webpack_require__(/*! ./lib/isAlpha */ "./node_modules/validator/lib/isAlpha.js"));

var _isAlphanumeric = _interopRequireWildcard(__webpack_require__(/*! ./lib/isAlphanumeric */ "./node_modules/validator/lib/isAlphanumeric.js"));

var _isNumeric = _interopRequireDefault(__webpack_require__(/*! ./lib/isNumeric */ "./node_modules/validator/lib/isNumeric.js"));

var _isPassportNumber = _interopRequireDefault(__webpack_require__(/*! ./lib/isPassportNumber */ "./node_modules/validator/lib/isPassportNumber.js"));

var _isPort = _interopRequireDefault(__webpack_require__(/*! ./lib/isPort */ "./node_modules/validator/lib/isPort.js"));

var _isLowercase = _interopRequireDefault(__webpack_require__(/*! ./lib/isLowercase */ "./node_modules/validator/lib/isLowercase.js"));

var _isUppercase = _interopRequireDefault(__webpack_require__(/*! ./lib/isUppercase */ "./node_modules/validator/lib/isUppercase.js"));

var _isIMEI = _interopRequireDefault(__webpack_require__(/*! ./lib/isIMEI */ "./node_modules/validator/lib/isIMEI.js"));

var _isAscii = _interopRequireDefault(__webpack_require__(/*! ./lib/isAscii */ "./node_modules/validator/lib/isAscii.js"));

var _isFullWidth = _interopRequireDefault(__webpack_require__(/*! ./lib/isFullWidth */ "./node_modules/validator/lib/isFullWidth.js"));

var _isHalfWidth = _interopRequireDefault(__webpack_require__(/*! ./lib/isHalfWidth */ "./node_modules/validator/lib/isHalfWidth.js"));

var _isVariableWidth = _interopRequireDefault(__webpack_require__(/*! ./lib/isVariableWidth */ "./node_modules/validator/lib/isVariableWidth.js"));

var _isMultibyte = _interopRequireDefault(__webpack_require__(/*! ./lib/isMultibyte */ "./node_modules/validator/lib/isMultibyte.js"));

var _isSemVer = _interopRequireDefault(__webpack_require__(/*! ./lib/isSemVer */ "./node_modules/validator/lib/isSemVer.js"));

var _isSurrogatePair = _interopRequireDefault(__webpack_require__(/*! ./lib/isSurrogatePair */ "./node_modules/validator/lib/isSurrogatePair.js"));

var _isInt = _interopRequireDefault(__webpack_require__(/*! ./lib/isInt */ "./node_modules/validator/lib/isInt.js"));

var _isFloat = _interopRequireWildcard(__webpack_require__(/*! ./lib/isFloat */ "./node_modules/validator/lib/isFloat.js"));

var _isDecimal = _interopRequireDefault(__webpack_require__(/*! ./lib/isDecimal */ "./node_modules/validator/lib/isDecimal.js"));

var _isHexadecimal = _interopRequireDefault(__webpack_require__(/*! ./lib/isHexadecimal */ "./node_modules/validator/lib/isHexadecimal.js"));

var _isOctal = _interopRequireDefault(__webpack_require__(/*! ./lib/isOctal */ "./node_modules/validator/lib/isOctal.js"));

var _isDivisibleBy = _interopRequireDefault(__webpack_require__(/*! ./lib/isDivisibleBy */ "./node_modules/validator/lib/isDivisibleBy.js"));

var _isHexColor = _interopRequireDefault(__webpack_require__(/*! ./lib/isHexColor */ "./node_modules/validator/lib/isHexColor.js"));

var _isRgbColor = _interopRequireDefault(__webpack_require__(/*! ./lib/isRgbColor */ "./node_modules/validator/lib/isRgbColor.js"));

var _isHSL = _interopRequireDefault(__webpack_require__(/*! ./lib/isHSL */ "./node_modules/validator/lib/isHSL.js"));

var _isISRC = _interopRequireDefault(__webpack_require__(/*! ./lib/isISRC */ "./node_modules/validator/lib/isISRC.js"));

var _isIBAN = _interopRequireDefault(__webpack_require__(/*! ./lib/isIBAN */ "./node_modules/validator/lib/isIBAN.js"));

var _isBIC = _interopRequireDefault(__webpack_require__(/*! ./lib/isBIC */ "./node_modules/validator/lib/isBIC.js"));

var _isMD = _interopRequireDefault(__webpack_require__(/*! ./lib/isMD5 */ "./node_modules/validator/lib/isMD5.js"));

var _isHash = _interopRequireDefault(__webpack_require__(/*! ./lib/isHash */ "./node_modules/validator/lib/isHash.js"));

var _isJWT = _interopRequireDefault(__webpack_require__(/*! ./lib/isJWT */ "./node_modules/validator/lib/isJWT.js"));

var _isJSON = _interopRequireDefault(__webpack_require__(/*! ./lib/isJSON */ "./node_modules/validator/lib/isJSON.js"));

var _isEmpty = _interopRequireDefault(__webpack_require__(/*! ./lib/isEmpty */ "./node_modules/validator/lib/isEmpty.js"));

var _isLength = _interopRequireDefault(__webpack_require__(/*! ./lib/isLength */ "./node_modules/validator/lib/isLength.js"));

var _isByteLength = _interopRequireDefault(__webpack_require__(/*! ./lib/isByteLength */ "./node_modules/validator/lib/isByteLength.js"));

var _isUUID = _interopRequireDefault(__webpack_require__(/*! ./lib/isUUID */ "./node_modules/validator/lib/isUUID.js"));

var _isMongoId = _interopRequireDefault(__webpack_require__(/*! ./lib/isMongoId */ "./node_modules/validator/lib/isMongoId.js"));

var _isAfter = _interopRequireDefault(__webpack_require__(/*! ./lib/isAfter */ "./node_modules/validator/lib/isAfter.js"));

var _isBefore = _interopRequireDefault(__webpack_require__(/*! ./lib/isBefore */ "./node_modules/validator/lib/isBefore.js"));

var _isIn = _interopRequireDefault(__webpack_require__(/*! ./lib/isIn */ "./node_modules/validator/lib/isIn.js"));

var _isCreditCard = _interopRequireDefault(__webpack_require__(/*! ./lib/isCreditCard */ "./node_modules/validator/lib/isCreditCard.js"));

var _isIdentityCard = _interopRequireDefault(__webpack_require__(/*! ./lib/isIdentityCard */ "./node_modules/validator/lib/isIdentityCard.js"));

var _isEAN = _interopRequireDefault(__webpack_require__(/*! ./lib/isEAN */ "./node_modules/validator/lib/isEAN.js"));

var _isISIN = _interopRequireDefault(__webpack_require__(/*! ./lib/isISIN */ "./node_modules/validator/lib/isISIN.js"));

var _isISBN = _interopRequireDefault(__webpack_require__(/*! ./lib/isISBN */ "./node_modules/validator/lib/isISBN.js"));

var _isISSN = _interopRequireDefault(__webpack_require__(/*! ./lib/isISSN */ "./node_modules/validator/lib/isISSN.js"));

var _isTaxID = _interopRequireDefault(__webpack_require__(/*! ./lib/isTaxID */ "./node_modules/validator/lib/isTaxID.js"));

var _isMobilePhone = _interopRequireWildcard(__webpack_require__(/*! ./lib/isMobilePhone */ "./node_modules/validator/lib/isMobilePhone.js"));

var _isEthereumAddress = _interopRequireDefault(__webpack_require__(/*! ./lib/isEthereumAddress */ "./node_modules/validator/lib/isEthereumAddress.js"));

var _isCurrency = _interopRequireDefault(__webpack_require__(/*! ./lib/isCurrency */ "./node_modules/validator/lib/isCurrency.js"));

var _isBtcAddress = _interopRequireDefault(__webpack_require__(/*! ./lib/isBtcAddress */ "./node_modules/validator/lib/isBtcAddress.js"));

var _isISO = _interopRequireDefault(__webpack_require__(/*! ./lib/isISO8601 */ "./node_modules/validator/lib/isISO8601.js"));

var _isRFC = _interopRequireDefault(__webpack_require__(/*! ./lib/isRFC3339 */ "./node_modules/validator/lib/isRFC3339.js"));

var _isISO31661Alpha = _interopRequireDefault(__webpack_require__(/*! ./lib/isISO31661Alpha2 */ "./node_modules/validator/lib/isISO31661Alpha2.js"));

var _isISO31661Alpha2 = _interopRequireDefault(__webpack_require__(/*! ./lib/isISO31661Alpha3 */ "./node_modules/validator/lib/isISO31661Alpha3.js"));

var _isBase = _interopRequireDefault(__webpack_require__(/*! ./lib/isBase32 */ "./node_modules/validator/lib/isBase32.js"));

var _isBase2 = _interopRequireDefault(__webpack_require__(/*! ./lib/isBase58 */ "./node_modules/validator/lib/isBase58.js"));

var _isBase3 = _interopRequireDefault(__webpack_require__(/*! ./lib/isBase64 */ "./node_modules/validator/lib/isBase64.js"));

var _isDataURI = _interopRequireDefault(__webpack_require__(/*! ./lib/isDataURI */ "./node_modules/validator/lib/isDataURI.js"));

var _isMagnetURI = _interopRequireDefault(__webpack_require__(/*! ./lib/isMagnetURI */ "./node_modules/validator/lib/isMagnetURI.js"));

var _isMimeType = _interopRequireDefault(__webpack_require__(/*! ./lib/isMimeType */ "./node_modules/validator/lib/isMimeType.js"));

var _isLatLong = _interopRequireDefault(__webpack_require__(/*! ./lib/isLatLong */ "./node_modules/validator/lib/isLatLong.js"));

var _isPostalCode = _interopRequireWildcard(__webpack_require__(/*! ./lib/isPostalCode */ "./node_modules/validator/lib/isPostalCode.js"));

var _ltrim = _interopRequireDefault(__webpack_require__(/*! ./lib/ltrim */ "./node_modules/validator/lib/ltrim.js"));

var _rtrim = _interopRequireDefault(__webpack_require__(/*! ./lib/rtrim */ "./node_modules/validator/lib/rtrim.js"));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./lib/trim */ "./node_modules/validator/lib/trim.js"));

var _escape = _interopRequireDefault(__webpack_require__(/*! ./lib/escape */ "./node_modules/validator/lib/escape.js"));

var _unescape = _interopRequireDefault(__webpack_require__(/*! ./lib/unescape */ "./node_modules/validator/lib/unescape.js"));

var _stripLow = _interopRequireDefault(__webpack_require__(/*! ./lib/stripLow */ "./node_modules/validator/lib/stripLow.js"));

var _whitelist = _interopRequireDefault(__webpack_require__(/*! ./lib/whitelist */ "./node_modules/validator/lib/whitelist.js"));

var _blacklist = _interopRequireDefault(__webpack_require__(/*! ./lib/blacklist */ "./node_modules/validator/lib/blacklist.js"));

var _isWhitelisted = _interopRequireDefault(__webpack_require__(/*! ./lib/isWhitelisted */ "./node_modules/validator/lib/isWhitelisted.js"));

var _normalizeEmail = _interopRequireDefault(__webpack_require__(/*! ./lib/normalizeEmail */ "./node_modules/validator/lib/normalizeEmail.js"));

var _isSlug = _interopRequireDefault(__webpack_require__(/*! ./lib/isSlug */ "./node_modules/validator/lib/isSlug.js"));

var _isStrongPassword = _interopRequireDefault(__webpack_require__(/*! ./lib/isStrongPassword */ "./node_modules/validator/lib/isStrongPassword.js"));

var _isVAT = _interopRequireDefault(__webpack_require__(/*! ./lib/isVAT */ "./node_modules/validator/lib/isVAT.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '13.5.2';
var validator = {
  version: version,
  toDate: _toDate.default,
  toFloat: _toFloat.default,
  toInt: _toInt.default,
  toBoolean: _toBoolean.default,
  equals: _equals.default,
  contains: _contains.default,
  matches: _matches.default,
  isEmail: _isEmail.default,
  isURL: _isURL.default,
  isMACAddress: _isMACAddress.default,
  isIP: _isIP.default,
  isIPRange: _isIPRange.default,
  isFQDN: _isFQDN.default,
  isBoolean: _isBoolean.default,
  isIBAN: _isIBAN.default,
  isBIC: _isBIC.default,
  isAlpha: _isAlpha.default,
  isAlphaLocales: _isAlpha.locales,
  isAlphanumeric: _isAlphanumeric.default,
  isAlphanumericLocales: _isAlphanumeric.locales,
  isNumeric: _isNumeric.default,
  isPassportNumber: _isPassportNumber.default,
  isPort: _isPort.default,
  isLowercase: _isLowercase.default,
  isUppercase: _isUppercase.default,
  isAscii: _isAscii.default,
  isFullWidth: _isFullWidth.default,
  isHalfWidth: _isHalfWidth.default,
  isVariableWidth: _isVariableWidth.default,
  isMultibyte: _isMultibyte.default,
  isSemVer: _isSemVer.default,
  isSurrogatePair: _isSurrogatePair.default,
  isInt: _isInt.default,
  isIMEI: _isIMEI.default,
  isFloat: _isFloat.default,
  isFloatLocales: _isFloat.locales,
  isDecimal: _isDecimal.default,
  isHexadecimal: _isHexadecimal.default,
  isOctal: _isOctal.default,
  isDivisibleBy: _isDivisibleBy.default,
  isHexColor: _isHexColor.default,
  isRgbColor: _isRgbColor.default,
  isHSL: _isHSL.default,
  isISRC: _isISRC.default,
  isMD5: _isMD.default,
  isHash: _isHash.default,
  isJWT: _isJWT.default,
  isJSON: _isJSON.default,
  isEmpty: _isEmpty.default,
  isLength: _isLength.default,
  isLocale: _isLocale.default,
  isByteLength: _isByteLength.default,
  isUUID: _isUUID.default,
  isMongoId: _isMongoId.default,
  isAfter: _isAfter.default,
  isBefore: _isBefore.default,
  isIn: _isIn.default,
  isCreditCard: _isCreditCard.default,
  isIdentityCard: _isIdentityCard.default,
  isEAN: _isEAN.default,
  isISIN: _isISIN.default,
  isISBN: _isISBN.default,
  isISSN: _isISSN.default,
  isMobilePhone: _isMobilePhone.default,
  isMobilePhoneLocales: _isMobilePhone.locales,
  isPostalCode: _isPostalCode.default,
  isPostalCodeLocales: _isPostalCode.locales,
  isEthereumAddress: _isEthereumAddress.default,
  isCurrency: _isCurrency.default,
  isBtcAddress: _isBtcAddress.default,
  isISO8601: _isISO.default,
  isRFC3339: _isRFC.default,
  isISO31661Alpha2: _isISO31661Alpha.default,
  isISO31661Alpha3: _isISO31661Alpha2.default,
  isBase32: _isBase.default,
  isBase58: _isBase2.default,
  isBase64: _isBase3.default,
  isDataURI: _isDataURI.default,
  isMagnetURI: _isMagnetURI.default,
  isMimeType: _isMimeType.default,
  isLatLong: _isLatLong.default,
  ltrim: _ltrim.default,
  rtrim: _rtrim.default,
  trim: _trim.default,
  escape: _escape.default,
  unescape: _unescape.default,
  stripLow: _stripLow.default,
  whitelist: _whitelist.default,
  blacklist: _blacklist.default,
  isWhitelisted: _isWhitelisted.default,
  normalizeEmail: _normalizeEmail.default,
  toString: toString,
  isSlug: _isSlug.default,
  isStrongPassword: _isStrongPassword.default,
  isTaxID: _isTaxID.default,
  isDate: _isDate.default,
  isVAT: _isVAT.default
};
var _default = validator;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/alpha.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/alpha.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commaDecimal = exports.dotDecimal = exports.farsiLocales = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
var alpha = {
  'en-US': /^[A-Z]+$/i,
  'az-AZ': /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
  'bg-BG': /^[А-Я]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[A-ZÆØÅ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'el-GR': /^[Α-ώ]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fa-IR': /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'nb-NO': /^[A-ZÆØÅ]+$/i,
  'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[A-ZÆØÅ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sl-SI': /^[A-ZČĆĐŠŽ]+$/i,
  'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[A-ZÅÄÖ]+$/i,
  'th-TH': /^[ก-๐\s]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  'vi-VN': /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
  'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  he: /^[א-ת]+$/,
  fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i
};
exports.alpha = alpha;
var alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'az-AZ': /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
  'bg-BG': /^[0-9А-Я]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[0-9A-ZÆØÅ]+$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'el-GR': /^[0-9Α-ω]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
  'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sl-SI': /^[0-9A-ZČĆĐŠŽ]+$/i,
  'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
  'th-TH': /^[ก-๙\s]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  'vi-VN': /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  he: /^[0-9א-ת]+$/,
  fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i
};
exports.alphanumeric = alphanumeric;
var decimal = {
  'en-US': '.',
  ar: '٫'
};
exports.decimal = decimal;
var englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];
exports.englishLocales = englishLocales;

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = "en-".concat(englishLocales[i]);
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
  decimal[locale] = decimal['en-US'];
} // Source: http://www.localeplanet.com/java/


var arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];
exports.arabicLocales = arabicLocales;

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = "ar-".concat(arabicLocales[_i]);
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
  decimal[_locale] = decimal.ar;
}

var farsiLocales = ['IR', 'AF'];
exports.farsiLocales = farsiLocales;

for (var _locale2, _i2 = 0; _i2 < farsiLocales.length; _i2++) {
  _locale2 = "fa-".concat(farsiLocales[_i2]);
  alphanumeric[_locale2] = alphanumeric.fa;
  decimal[_locale2] = decimal.ar;
} // Source: https://en.wikipedia.org/wiki/Decimal_mark


var dotDecimal = ['ar-EG', 'ar-LB', 'ar-LY'];
exports.dotDecimal = dotDecimal;
var commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-ZM', 'es-ES', 'fr-CA', 'fr-FR', 'id-ID', 'it-IT', 'ku-IQ', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-PL', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA', 'vi-VN'];
exports.commaDecimal = commaDecimal;

for (var _i3 = 0; _i3 < dotDecimal.length; _i3++) {
  decimal[dotDecimal[_i3]] = decimal['en-US'];
}

for (var _i4 = 0; _i4 < commaDecimal.length; _i4++) {
  decimal[commaDecimal[_i4]] = ',';
}

alpha['fr-CA'] = alpha['fr-FR'];
alphanumeric['fr-CA'] = alphanumeric['fr-FR'];
alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
decimal['pt-BR'] = decimal['pt-PT']; // see #862

alpha['pl-Pl'] = alpha['pl-PL'];
alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
decimal['pl-Pl'] = decimal['pl-PL']; // see #1455

alpha['fa-AF'] = alpha.fa;

/***/ }),

/***/ "./node_modules/validator/lib/blacklist.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/blacklist.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function blacklist(str, chars) {
  (0, _assertString.default)(str);
  return str.replace(new RegExp("[".concat(chars, "]+"), 'g'), '');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/contains.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/contains.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _toString = _interopRequireDefault(__webpack_require__(/*! ./util/toString */ "./node_modules/validator/lib/util/toString.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaulContainsOptions = {
  ignoreCase: false
};

function contains(str, elem, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, defaulContainsOptions);
  return options.ignoreCase ? str.toLowerCase().indexOf((0, _toString.default)(elem).toLowerCase()) >= 0 : str.indexOf((0, _toString.default)(elem)) >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/equals.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/equals.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equals(str, comparison) {
  (0, _assertString.default)(str);
  return str === comparison;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/escape.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/escape.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(str) {
  (0, _assertString.default)(str);
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isAfter.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isAfter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _toDate = _interopRequireDefault(__webpack_require__(/*! ./toDate */ "./node_modules/validator/lib/toDate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAfter(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
  (0, _assertString.default)(str);
  var comparison = (0, _toDate.default)(date);
  var original = (0, _toDate.default)(str);
  return !!(original && comparison && original > comparison);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isAlpha.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isAlpha.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlpha(_str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0, _assertString.default)(_str);
  var str = _str;
  var ignore = options.ignore;

  if (ignore) {
    if (ignore instanceof RegExp) {
      str = str.replace(ignore, '');
    } else if (typeof ignore === 'string') {
      str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&'), "]"), 'g'), ''); // escape regex for ignore
    } else {
      throw new Error('ignore should be instance of a String or RegExp');
    }
  }

  if (locale in _alpha.alpha) {
    return _alpha.alpha[locale].test(str);
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(_alpha.alpha);
exports.locales = locales;

/***/ }),

/***/ "./node_modules/validator/lib/isAlphanumeric.js":
/*!******************************************************!*\
  !*** ./node_modules/validator/lib/isAlphanumeric.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlphanumeric;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlphanumeric(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  (0, _assertString.default)(str);

  if (locale in _alpha.alphanumeric) {
    return _alpha.alphanumeric[locale].test(str);
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(_alpha.alphanumeric);
exports.locales = locales;

/***/ }),

/***/ "./node_modules/validator/lib/isAscii.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isAscii.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString.default)(str);
  return ascii.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isBIC.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isBIC.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBIC;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBICReg = /^[A-z]{4}[A-z]{2}\w{2}(\w{3})?$/;

function isBIC(str) {
  (0, _assertString.default)(str);
  return isBICReg.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isBase32.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isBase32.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase32;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base32 = /^[A-Z2-7]+=*$/;

function isBase32(str) {
  (0, _assertString.default)(str);
  var len = str.length;

  if (len % 8 === 0 && base32.test(str)) {
    return true;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isBase58.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isBase58.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase58;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Accepted chars - 123456789ABCDEFGH JKLMN PQRSTUVWXYZabcdefghijk mnopqrstuvwxyz
var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;

function isBase58(str) {
  (0, _assertString.default)(str);

  if (base58Reg.test(str)) {
    return true;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isBase64.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isBase64.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notBase64 = /[^A-Z0-9+\/=]/i;
var urlSafeBase64 = /^[A-Z0-9_\-]*$/i;
var defaultBase64Options = {
  urlSafe: false
};

function isBase64(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, defaultBase64Options);
  var len = str.length;

  if (options.urlSafe) {
    return urlSafeBase64.test(str);
  }

  if (len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }

  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isBefore.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isBefore.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _toDate = _interopRequireDefault(__webpack_require__(/*! ./toDate */ "./node_modules/validator/lib/toDate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
  (0, _assertString.default)(str);
  var comparison = (0, _toDate.default)(date);
  var original = (0, _toDate.default)(str);
  return !!(original && comparison && original < comparison);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isBoolean.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isBoolean.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBoolean(str) {
  (0, _assertString.default)(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isBtcAddress.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isBtcAddress.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBtcAddress;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// supports Bech32 addresses
var btc = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;

function isBtcAddress(str) {
  (0, _assertString.default)(str);
  return btc.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isByteLength.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isByteLength.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isByteLength;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }

  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isCreditCard.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isCreditCard.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');

  if (!creditCard.test(sanitized)) {
    return false;
  }

  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble;

  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return !!(sum % 10 === 0 ? sanitized : false);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isCurrency.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isCurrency.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCurrency;

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function currencyRegex(options) {
  var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
  options.digits_after_decimal.forEach(function (digit, index) {
    if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
  });
  var symbol = "(".concat(options.symbol.replace(/\W/, function (m) {
    return "\\".concat(m);
  }), ")").concat(options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"),
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join('|'), ")?"),
      decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? '' : '?');
  var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : ''); // default is negative sign before symbol, but there are two other options (besides parens)

  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  } // South African Rand, for example, uses R 123 (space) and R-123 (no space)


  if (options.allow_negative_sign_placeholder) {
    pattern = "( (?!\\-))?".concat(pattern);
  } else if (options.allow_space_after_symbol) {
    pattern = " ?".concat(pattern);
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  } // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space


  return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_decimal: true,
  require_decimal: false,
  digits_after_decimal: [2],
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_currency_options);
  return currencyRegex(options).test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isDataURI.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isDataURI.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

function isDataURI(str) {
  (0, _assertString.default)(str);
  var data = str.split(',');

  if (data.length < 2) {
    return false;
  }

  var attributes = data.shift().trim().split(';');
  var schemeAndMediaType = attributes.shift();

  if (schemeAndMediaType.substr(0, 5) !== 'data:') {
    return false;
  }

  var mediaType = schemeAndMediaType.substr(5);

  if (mediaType !== '' && !validMediaType.test(mediaType)) {
    return false;
  }

  for (var i = 0; i < attributes.length; i++) {
    if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {// ok
    } else if (!validAttribute.test(attributes[i])) {
      return false;
    }
  }

  for (var _i = 0; _i < data.length; _i++) {
    if (!validData.test(data[_i])) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isDate.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isDate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDate;

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var default_date_options = {
  format: 'YYYY/MM/DD',
  delimiters: ['/', '-'],
  strictMode: false
};

function isValidFormat(format) {
  return /(^(y{4}|y{2})[\/-](m{1,2})[\/-](d{1,2})$)|(^(m{1,2})[\/-](d{1,2})[\/-]((y{4}|y{2})$))|(^(d{1,2})[\/-](m{1,2})[\/-]((y{4}|y{2})$))/gi.test(format);
}

function zip(date, format) {
  var zippedArr = [],
      len = Math.min(date.length, format.length);

  for (var i = 0; i < len; i++) {
    zippedArr.push([date[i], format[i]]);
  }

  return zippedArr;
}

function isDate(input, options) {
  if (typeof options === 'string') {
    // Allow backward compatbility for old format isDate(input [, format])
    options = (0, _merge.default)({
      format: options
    }, default_date_options);
  } else {
    options = (0, _merge.default)(options, default_date_options);
  }

  if (typeof input === 'string' && isValidFormat(options.format)) {
    var formatDelimiter = options.delimiters.find(function (delimiter) {
      return options.format.indexOf(delimiter) !== -1;
    });
    var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function (delimiter) {
      return input.indexOf(delimiter) !== -1;
    });
    var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
    var dateObj = {};

    var _iterator = _createForOfIteratorHelper(dateAndFormat),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            dateWord = _step$value[0],
            formatWord = _step$value[1];

        if (dateWord.length !== formatWord.length) {
          return false;
        }

        dateObj[formatWord.charAt(0)] = dateWord;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return new Date("".concat(dateObj.m, "/").concat(dateObj.d, "/").concat(dateObj.y)).getDate() === +dateObj.d;
  }

  if (!options.strictMode) {
    return Object.prototype.toString.call(input) === '[object Date]' && isFinite(input);
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isDecimal.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isDecimal.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _includes = _interopRequireDefault(__webpack_require__(/*! ./util/includes */ "./node_modules/validator/lib/util/includes.js"));

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decimalRegExp(options) {
  var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? '' : '?', "$"));
  return regExp;
}

var default_decimal_options = {
  force_decimal: false,
  decimal_digits: '1,',
  locale: 'en-US'
};
var blacklist = ['', '-', '+'];

function isDecimal(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_decimal_options);

  if (options.locale in _alpha.decimal) {
    return !(0, _includes.default)(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);
  }

  throw new Error("Invalid locale '".concat(options.locale, "'"));
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isDivisibleBy.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isDivisibleBy.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDivisibleBy;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _toFloat = _interopRequireDefault(__webpack_require__(/*! ./toFloat */ "./node_modules/validator/lib/toFloat.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDivisibleBy(str, num) {
  (0, _assertString.default)(str);
  return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isEAN.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isEAN.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEAN;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The most commonly used EAN standard is
 * the thirteen-digit EAN-13, while the
 * less commonly used 8-digit EAN-8 barcode was
 * introduced for use on small packages.
 * EAN consists of:
 * GS1 prefix, manufacturer code, product code and check digit
 * Reference: https://en.wikipedia.org/wiki/International_Article_Number
 */

/**
 * Define EAN Lenghts; 8 for EAN-8; 13 for EAN-13
 * and Regular Expression for valid EANs (EAN-8, EAN-13),
 * with exact numberic matching of 8 or 13 digits [0-9]
 */
var LENGTH_EAN_8 = 8;
var validEanRegex = /^(\d{8}|\d{13})$/;
/**
 * Get position weight given:
 * EAN length and digit index/position
 *
 * @param {number} length
 * @param {number} index
 * @return {number}
 */

function getPositionWeightThroughLengthAndIndex(length, index) {
  if (length === LENGTH_EAN_8) {
    return index % 2 === 0 ? 3 : 1;
  }

  return index % 2 === 0 ? 1 : 3;
}
/**
 * Calculate EAN Check Digit
 * Reference: https://en.wikipedia.org/wiki/International_Article_Number#Calculation_of_checksum_digit
 *
 * @param {string} ean
 * @return {number}
 */


function calculateCheckDigit(ean) {
  var checksum = ean.slice(0, -1).split('').map(function (char, index) {
    return Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index);
  }).reduce(function (acc, partialSum) {
    return acc + partialSum;
  }, 0);
  var remainder = 10 - checksum % 10;
  return remainder < 10 ? remainder : 0;
}
/**
 * Check if string is valid EAN:
 * Matches EAN-8/EAN-13 regex
 * Has valid check digit.
 *
 * @param {string} str
 * @return {boolean}
 */


function isEAN(str) {
  (0, _assertString.default)(str);
  var actualCheckDigit = Number(str.slice(-1));
  return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isEmail.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isEmail.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

var _isByteLength = _interopRequireDefault(__webpack_require__(/*! ./isByteLength */ "./node_modules/validator/lib/isByteLength.js"));

var _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./isFQDN */ "./node_modules/validator/lib/isFQDN.js"));

var _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ "./node_modules/validator/lib/isIP.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true,
  blacklisted_chars: '',
  ignore_max_length: false
};
/* eslint-disable max-len */

/* eslint-disable no-control-regex */

var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
var defaultMaxEmailLength = 254;
/* eslint-enable max-len */

/* eslint-enable no-control-regex */

/**
 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
 * @param {String} display_name
 */

function validateDisplayName(display_name) {
  var trim_quotes = display_name.match(/^"(.+)"$/i);
  var display_name_without_quotes = trim_quotes ? trim_quotes[1] : display_name; // display name with only spaces is not valid

  if (!display_name_without_quotes.trim()) {
    return false;
  } // check whether display name contains illegal character


  var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);

  if (contains_illegal) {
    // if contains illegal characters,
    // must to be enclosed in double-quotes, otherwise it's not a valid display name
    if (!trim_quotes) {
      return false;
    } // the quotes in display name must start with character symbol \


    var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;

    if (!all_start_with_back_slash) {
      return false;
    }
  }

  return true;
}

function isEmail(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(splitNameAddress);

    if (display_email) {
      var display_name;

      var _display_email = _slicedToArray(display_email, 3);

      display_name = _display_email[1];
      str = _display_email[2];

      // sometimes need to trim the last space to get the display name
      // because there may be a space between display name and email address
      // eg. myname <address@gmail.com>
      // the display name is `myname` instead of `myname `, so need to trim the last space
      if (display_name.endsWith(' ')) {
        display_name = display_name.substr(0, display_name.length - 1);
      }

      if (!validateDisplayName(display_name)) {
        return false;
      }
    } else if (options.require_display_name) {
      return false;
    }
  }

  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
    return false;
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');
  var lower_domain = domain.toLowerCase();

  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
    /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */
    user = user.toLowerCase(); // Removing sub-address from username before gmail validation

    var username = user.split('+')[0]; // Dots are not included in gmail length restriction

    if (!(0, _isByteLength.default)(username.replace('.', ''), {
      min: 6,
      max: 30
    })) {
      return false;
    }

    var _user_parts = username.split('.');

    for (var i = 0; i < _user_parts.length; i++) {
      if (!gmailUserPart.test(_user_parts[i])) {
        return false;
      }
    }
  }

  if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
    max: 64
  }) || !(0, _isByteLength.default)(domain, {
    max: 254
  }))) {
    return false;
  }

  if (!(0, _isFQDN.default)(domain, {
    require_tld: options.require_tld
  })) {
    if (!options.allow_ip_domain) {
      return false;
    }

    if (!(0, _isIP.default)(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) {
        return false;
      }

      var noBracketdomain = domain.substr(1, domain.length - 2);

      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
        return false;
      }
    }
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
  var user_parts = user.split('.');

  for (var _i2 = 0; _i2 < user_parts.length; _i2++) {
    if (!pattern.test(user_parts[_i2])) {
      return false;
    }
  }

  if (options.blacklisted_chars) {
    if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), 'g')) !== -1) return false;
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isEmpty.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isEmpty.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_is_empty_options = {
  ignore_whitespace: false
};

function isEmpty(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_is_empty_options);
  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isEthereumAddress.js":
/*!*********************************************************!*\
  !*** ./node_modules/validator/lib/isEthereumAddress.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEthereumAddress;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eth = /^(0x)[0-9a-f]{40}$/i;

function isEthereumAddress(str) {
  (0, _assertString.default)(str);
  return eth.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isFQDN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isFQDN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_numeric_tld: false
};

function isFQDN(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_fqdn_options);
  /* Remove the optional trailing dot before checking validity */

  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }

  var parts = str.split('.');
  var tld = parts[parts.length - 1];

  if (options.require_tld) {
    // disallow fqdns without tld
    if (parts.length < 2) {
      return false;
    }

    if (!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    } // disallow spaces && special characers


    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(tld)) {
      return false;
    }
  } // reject numeric TLDs


  if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
    return false;
  }

  return parts.every(function (part) {
    if (part.length > 63) {
      return false;
    }

    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    } // disallow full-width chars


    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    } // disallow parts starting or ending with hyphen


    if (/^-|-$/.test(part)) {
      return false;
    }

    if (!options.allow_underscores && /_/.test(part)) {
      return false;
    }

    return true;
  });
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isFloat.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isFloat.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isFloat(str, options) {
  (0, _assertString.default)(str);
  options = options || {};
  var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));

  if (str === '' || str === '.' || str === '-' || str === '+') {
    return false;
  }

  var value = parseFloat(str.replace(',', '.'));
  return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
}

var locales = Object.keys(_alpha.decimal);
exports.locales = locales;

/***/ }),

/***/ "./node_modules/validator/lib/isFullWidth.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isFullWidth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFullWidth;
exports.fullWidth = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.fullWidth = fullWidth;

function isFullWidth(str) {
  (0, _assertString.default)(str);
  return fullWidth.test(str);
}

/***/ }),

/***/ "./node_modules/validator/lib/isHSL.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isHSL.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHSL;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hslcomma = /^(hsl)a?\(\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn|\s*)(\s*,\s*(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s*(,\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s*)?\)$/i;
var hslspace = /^(hsl)a?\(\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn|\s)(\s*(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s*(\/\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s*)?\)$/i;

function isHSL(str) {
  (0, _assertString.default)(str);
  return hslcomma.test(str) || hslspace.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isHalfWidth.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isHalfWidth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHalfWidth;
exports.halfWidth = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.halfWidth = halfWidth;

function isHalfWidth(str) {
  (0, _assertString.default)(str);
  return halfWidth.test(str);
}

/***/ }),

/***/ "./node_modules/validator/lib/isHash.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isHash.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHash;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lengths = {
  md5: 32,
  md4: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8
};

function isHash(str, algorithm) {
  (0, _assertString.default)(str);
  var hash = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
  return hash.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isHexColor.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isHexColor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexColor;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

function isHexColor(str) {
  (0, _assertString.default)(str);
  return hexcolor.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isHexadecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isHexadecimal.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;

function isHexadecimal(str) {
  (0, _assertString.default)(str);
  return hexadecimal.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isIBAN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isIBAN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIBAN;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * List of country codes with
 * corresponding IBAN regular expression
 * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
 */
var ibanRegexThroughCountryCode = {
  AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
  AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
  AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
  AT: /^(AT[0-9]{2})\d{16}$/,
  AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  BA: /^(BA[0-9]{2})\d{16}$/,
  BE: /^(BE[0-9]{2})\d{12}$/,
  BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
  BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
  BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
  BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
  CR: /^(CR[0-9]{2})\d{18}$/,
  CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
  CZ: /^(CZ[0-9]{2})\d{20}$/,
  DE: /^(DE[0-9]{2})\d{18}$/,
  DK: /^(DK[0-9]{2})\d{14}$/,
  DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
  EE: /^(EE[0-9]{2})\d{16}$/,
  EG: /^(EG[0-9]{2})\d{25}$/,
  ES: /^(ES[0-9]{2})\d{20}$/,
  FI: /^(FI[0-9]{2})\d{14}$/,
  FO: /^(FO[0-9]{2})\d{14}$/,
  FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
  GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
  GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
  GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
  GL: /^(GL[0-9]{2})\d{14}$/,
  GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
  GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
  HR: /^(HR[0-9]{2})\d{17}$/,
  HU: /^(HU[0-9]{2})\d{24}$/,
  IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
  IL: /^(IL[0-9]{2})\d{19}$/,
  IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
  IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
  IS: /^(IS[0-9]{2})\d{22}$/,
  IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
  JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
  KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
  KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
  LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
  LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
  LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
  LT: /^(LT[0-9]{2})\d{16}$/,
  LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
  LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
  MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
  MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
  ME: /^(ME[0-9]{2})\d{18}$/,
  MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
  MR: /^(MR[0-9]{2})\d{23}$/,
  MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
  MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
  NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
  NO: /^(NO[0-9]{2})\d{11}$/,
  PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
  PL: /^(PL[0-9]{2})\d{24}$/,
  PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
  PT: /^(PT[0-9]{2})\d{21}$/,
  QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
  RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
  RS: /^(RS[0-9]{2})\d{18}$/,
  SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
  SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
  SE: /^(SE[0-9]{2})\d{20}$/,
  SI: /^(SI[0-9]{2})\d{15}$/,
  SK: /^(SK[0-9]{2})\d{20}$/,
  SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
  SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  TL: /^(TL[0-9]{2})\d{19}$/,
  TN: /^(TN[0-9]{2})\d{20}$/,
  TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
  UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
  VA: /^(VA[0-9]{2})\d{18}$/,
  VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
  XK: /^(XK[0-9]{2})\d{16}$/
};
/**
 * Check whether string has correct universal IBAN format
 * The IBAN consists of up to 34 alphanumeric characters, as follows:
 * Country Code using ISO 3166-1 alpha-2, two letters
 * check digits, two digits and
 * Basic Bank Account Number (BBAN), up to 30 alphanumeric characters.
 * NOTE: Permitted IBAN characters are: digits [0-9] and the 26 latin alphabetic [A-Z]
 *
 * @param {string} str - string under validation
 * @return {boolean}
 */

function hasValidIbanFormat(str) {
  // Strip white spaces and hyphens
  var strippedStr = str.replace(/[\s\-]+/gi, '').toUpperCase();
  var isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
  return isoCountryCode in ibanRegexThroughCountryCode && ibanRegexThroughCountryCode[isoCountryCode].test(strippedStr);
}
/**
   * Check whether string has valid IBAN Checksum
   * by performing basic mod-97 operation and
   * the remainder should equal 1
   * -- Start by rearranging the IBAN by moving the four initial characters to the end of the string
   * -- Replace each letter in the string with two digits, A -> 10, B = 11, Z = 35
   * -- Interpret the string as a decimal integer and
   * -- compute the remainder on division by 97 (mod 97)
   * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
   *
   * @param {string} str
   * @return {boolean}
   */


function hasValidIbanChecksum(str) {
  var strippedStr = str.replace(/[^A-Z0-9]+/gi, '').toUpperCase(); // Keep only digits and A-Z latin alphabetic

  var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
  var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function (char) {
    return char.charCodeAt(0) - 55;
  });
  var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce(function (acc, value) {
    return Number(acc + value) % 97;
  }, '');
  return remainder === 1;
}

function isIBAN(str) {
  (0, _assertString.default)(str);
  return hasValidIbanFormat(str) && hasValidIbanChecksum(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isIMEI.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isIMEI.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIMEI;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imeiRegexWithoutHypens = /^[0-9]{15}$/;
var imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;

function isIMEI(str, options) {
  (0, _assertString.default)(str);
  options = options || {}; // default regex for checking imei is the one without hyphens

  var imeiRegex = imeiRegexWithoutHypens;

  if (options.allow_hyphens) {
    imeiRegex = imeiRegexWithHypens;
  }

  if (!imeiRegex.test(str)) {
    return false;
  }

  str = str.replace(/-/g, '');
  var sum = 0,
      mul = 2,
      l = 14;

  for (var i = 0; i < l; i++) {
    var digit = str.substring(l - i - 1, l - i);
    var tp = parseInt(digit, 10) * mul;

    if (tp >= 10) {
      sum += tp % 10 + 1;
    } else {
      sum += tp;
    }

    if (mul === 1) {
      mul += 1;
    } else {
      mul -= 1;
    }
  }

  var chk = (10 - sum % 10) % 10;

  if (chk !== parseInt(str.substring(14, 15), 10)) {
    return false;
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isIP.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIP.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
11.3.  Examples

   The following addresses

             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)

   would be represented as follows:

             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10

   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)

   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:

            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10

   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */
var ipv4Maybe = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }

    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var addressAndZone = [str]; // ipv6 addresses could have scoped architecture
    // according to https://tools.ietf.org/html/rfc4007#section-11

    if (str.includes('%')) {
      addressAndZone = str.split('%');

      if (addressAndZone.length !== 2) {
        // it must be just two parts
        return false;
      }

      if (!addressAndZone[0].includes(':')) {
        // the first part must be the address
        return false;
      }

      if (addressAndZone[1] === '') {
        // the second part must not be empty
        return false;
      }
    }

    var blocks = addressAndZone[0].split(':');
    var foundOmissionBlock = false; // marker to indicate ::
    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.

    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    } // initial or final ::


    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }

        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {// it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }

    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }

    return blocks.length === expectedNumberOfBlocks;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isIPRange.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isIPRange.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIPRange;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ "./node_modules/validator/lib/isIP.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subnetMaybe = /^\d{1,2}$/;

function isIPRange(str) {
  (0, _assertString.default)(str);
  var parts = str.split('/'); // parts[0] -> ip, parts[1] -> subnet

  if (parts.length !== 2) {
    return false;
  }

  if (!subnetMaybe.test(parts[1])) {
    return false;
  } // Disallow preceding 0 i.e. 01, 02, ...


  if (parts[1].length > 1 && parts[1].startsWith('0')) {
    return false;
  }

  return (0, _isIP.default)(parts[0], 4) && parts[1] <= 32 && parts[1] >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISBN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISBN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISBN;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }

  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i;

  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }

    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }

    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }

    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }

    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }

    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISIN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISIN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISIN;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  (0, _assertString.default)(str);

  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });
  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble = true;

  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISO31661Alpha2.js":
/*!********************************************************!*\
  !*** ./node_modules/validator/lib/isISO31661Alpha2.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO31661Alpha2;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _includes = _interopRequireDefault(__webpack_require__(/*! ./util/includes */ "./node_modules/validator/lib/util/includes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];

function isISO31661Alpha2(str) {
  (0, _assertString.default)(str);
  return (0, _includes.default)(validISO31661Alpha2CountriesCodes, str.toUpperCase());
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISO31661Alpha3.js":
/*!********************************************************!*\
  !*** ./node_modules/validator/lib/isISO31661Alpha3.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO31661Alpha3;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _includes = _interopRequireDefault(__webpack_require__(/*! ./util/includes */ "./node_modules/validator/lib/util/includes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
var validISO31661Alpha3CountriesCodes = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'];

function isISO31661Alpha3(str) {
  (0, _assertString.default)(str);
  return (0, _includes.default)(validISO31661Alpha3CountriesCodes, str.toUpperCase());
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISO8601.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isISO8601.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO8601;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/; // same as above, except with a strict 'T' separator between date and time

var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

var isValidDate = function isValidDate(str) {
  // str must have passed the ISO8601 check
  // this check is meant to catch invalid dates
  // like 2009-02-31
  // first check for ordinal dates
  var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);

  if (ordinalMatch) {
    var oYear = Number(ordinalMatch[1]);
    var oDay = Number(ordinalMatch[2]); // if is leap year

    if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0) return oDay <= 366;
    return oDay <= 365;
  }

  var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
  var year = match[1];
  var month = match[2];
  var day = match[3];
  var monthString = month ? "0".concat(month).slice(-2) : month;
  var dayString = day ? "0".concat(day).slice(-2) : day; // create a date object and compare

  var d = new Date("".concat(year, "-").concat(monthString || '01', "-").concat(dayString || '01'));

  if (month && day) {
    return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
  }

  return true;
};

function isISO8601(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _assertString.default)(str);
  var check = options.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
  if (check && options.strict) return isValidDate(str);
  return check;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISRC.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISRC.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISRC;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

function isISRC(str) {
  (0, _assertString.default)(str);
  return isrc.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISSN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISSN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISSN;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _assertString.default)(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');

  if (!testIssn.test(str)) {
    return false;
  }

  var digits = str.replace('-', '').toUpperCase();
  var checksum = 0;

  for (var i = 0; i < digits.length; i++) {
    var digit = digits[i];
    checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
  }

  return checksum % 11 === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isIdentityCard.js":
/*!******************************************************!*\
  !*** ./node_modules/validator/lib/isIdentityCard.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIdentityCard;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validators = {
  ES: function ES(str) {
    (0, _assertString.default)(str);
    var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
    var charsValue = {
      X: 0,
      Y: 1,
      Z: 2
    };
    var controlDigits = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; // sanitize user input

    var sanitized = str.trim().toUpperCase(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    } // validate the control digit


    var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function (char) {
      return charsValue[char];
    });
    return sanitized.endsWith(controlDigits[number % 23]);
  },
  IN: function IN(str) {
    var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/; // multiplication table

    var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]]; // permutation table

    var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]]; // sanitize user input

    var sanitized = str.trim(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    }

    var c = 0;
    var invertedArray = sanitized.replace(/\s/g, '').split('').map(Number).reverse();
    invertedArray.forEach(function (val, i) {
      c = d[c][p[i % 8][val]];
    });
    return c === 0;
  },
  IT: function IT(str) {
    if (str.length !== 9) return false;
    if (str === 'CA00000AA') return false; // https://it.wikipedia.org/wiki/Carta_d%27identit%C3%A0_elettronica_italiana

    return str.search(/C[A-Z][0-9]{5}[A-Z]{2}/i) > -1;
  },
  NO: function NO(str) {
    var sanitized = str.trim();
    if (isNaN(Number(sanitized))) return false;
    if (sanitized.length !== 11) return false;
    if (sanitized === '00000000000') return false; // https://no.wikipedia.org/wiki/F%C3%B8dselsnummer

    var f = sanitized.split('').map(Number);
    var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
    var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
    if (k1 !== f[9] || k2 !== f[10]) return false;
    return true;
  },
  'he-IL': function heIL(str) {
    var DNI = /^\d{9}$/; // sanitize user input

    var sanitized = str.trim(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    }

    var id = sanitized;
    var sum = 0,
        incNum;

    for (var i = 0; i < id.length; i++) {
      incNum = Number(id[i]) * (i % 2 + 1); // Multiply number by 1 or 2

      sum += incNum > 9 ? incNum - 9 : incNum; // Sum the digits up and add to total
    }

    return sum % 10 === 0;
  },
  'ar-TN': function arTN(str) {
    var DNI = /^\d{8}$/; // sanitize user input

    var sanitized = str.trim(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    }

    return true;
  },
  'zh-CN': function zhCN(str) {
    var provincesAndCities = ['11', // 北京
    '12', // 天津
    '13', // 河北
    '14', // 山西
    '15', // 内蒙古
    '21', // 辽宁
    '22', // 吉林
    '23', // 黑龙江
    '31', // 上海
    '32', // 江苏
    '33', // 浙江
    '34', // 安徽
    '35', // 福建
    '36', // 江西
    '37', // 山东
    '41', // 河南
    '42', // 湖北
    '43', // 湖南
    '44', // 广东
    '45', // 广西
    '46', // 海南
    '50', // 重庆
    '51', // 四川
    '52', // 贵州
    '53', // 云南
    '54', // 西藏
    '61', // 陕西
    '62', // 甘肃
    '63', // 青海
    '64', // 宁夏
    '65', // 新疆
    '71', // 台湾
    '81', // 香港
    '82', // 澳门
    '91' // 国外
    ];
    var powers = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'];
    var parityBit = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    var checkAddressCode = function checkAddressCode(addressCode) {
      return provincesAndCities.includes(addressCode);
    };

    var checkBirthDayCode = function checkBirthDayCode(birDayCode) {
      var yyyy = parseInt(birDayCode.substring(0, 4), 10);
      var mm = parseInt(birDayCode.substring(4, 6), 10);
      var dd = parseInt(birDayCode.substring(6), 10);
      var xdata = new Date(yyyy, mm - 1, dd);

      if (xdata > new Date()) {
        return false; // eslint-disable-next-line max-len
      } else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
        return true;
      }

      return false;
    };

    var getParityBit = function getParityBit(idCardNo) {
      var id17 = idCardNo.substring(0, 17);
      var power = 0;

      for (var i = 0; i < 17; i++) {
        power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
      }

      var mod = power % 11;
      return parityBit[mod];
    };

    var checkParityBit = function checkParityBit(idCardNo) {
      return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
    };

    var check15IdCardNo = function check15IdCardNo(idCardNo) {
      var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
      if (!check) return false;
      var addressCode = idCardNo.substring(0, 2);
      check = checkAddressCode(addressCode);
      if (!check) return false;
      var birDayCode = "19".concat(idCardNo.substring(6, 12));
      check = checkBirthDayCode(birDayCode);
      if (!check) return false;
      return true;
    };

    var check18IdCardNo = function check18IdCardNo(idCardNo) {
      var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
      if (!check) return false;
      var addressCode = idCardNo.substring(0, 2);
      check = checkAddressCode(addressCode);
      if (!check) return false;
      var birDayCode = idCardNo.substring(6, 14);
      check = checkBirthDayCode(birDayCode);
      if (!check) return false;
      return checkParityBit(idCardNo);
    };

    var checkIdCardNo = function checkIdCardNo(idCardNo) {
      var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
      if (!check) return false;

      if (idCardNo.length === 15) {
        return check15IdCardNo(idCardNo);
      }

      return check18IdCardNo(idCardNo);
    };

    return checkIdCardNo(str);
  },
  'zh-TW': function zhTW(str) {
    var ALPHABET_CODES = {
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      G: 16,
      H: 17,
      I: 34,
      J: 18,
      K: 19,
      L: 20,
      M: 21,
      N: 22,
      O: 35,
      P: 23,
      Q: 24,
      R: 25,
      S: 26,
      T: 27,
      U: 28,
      V: 29,
      W: 32,
      X: 30,
      Y: 31,
      Z: 33
    };
    var sanitized = str.trim().toUpperCase();
    if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;
    return Array.from(sanitized).reduce(function (sum, number, index) {
      if (index === 0) {
        var code = ALPHABET_CODES[number];
        return code % 10 * 9 + Math.floor(code / 10);
      }

      if (index === 9) {
        return (10 - sum % 10 - Number(number)) % 10 === 0;
      }

      return sum + Number(number) * (9 - index);
    }, 0);
  }
};

function isIdentityCard(str, locale) {
  (0, _assertString.default)(str);

  if (locale in validators) {
    return validators[locale](str);
  } else if (locale === 'any') {
    for (var key in validators) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if (validators.hasOwnProperty(key)) {
        var validator = validators[key];

        if (validator(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isIn.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIn;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _toString = _interopRequireDefault(__webpack_require__(/*! ./util/toString */ "./node_modules/validator/lib/util/toString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isIn(str, options) {
  (0, _assertString.default)(str);
  var i;

  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];

    for (i in options) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = (0, _toString.default)(options[i]);
      }
    }

    return array.indexOf(str) >= 0;
  } else if (_typeof(options) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isInt.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isInt.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  (0, _assertString.default)(str);
  options = options || {}; // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.

  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes; // Check min/max/lt/gt

  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;
  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isJSON.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isJSON.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJSON;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var default_json_options = {
  allow_primitives: false
};

function isJSON(str, options) {
  (0, _assertString.default)(str);

  try {
    options = (0, _merge.default)(options, default_json_options);
    var primitives = [];

    if (options.allow_primitives) {
      primitives = [null, false, true];
    }

    var obj = JSON.parse(str);
    return primitives.includes(obj) || !!obj && _typeof(obj) === 'object';
  } catch (e) {
    /* ignore */
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isJWT.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isJWT.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJWT;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _isBase = _interopRequireDefault(__webpack_require__(/*! ./isBase64 */ "./node_modules/validator/lib/isBase64.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isJWT(str) {
  (0, _assertString.default)(str);
  var dotSplit = str.split('.');
  var len = dotSplit.length;

  if (len > 3 || len < 2) {
    return false;
  }

  return dotSplit.reduce(function (acc, currElem) {
    return acc && (0, _isBase.default)(currElem, {
      urlSafe: true
    });
  }, true);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isLatLong.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isLatLong.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLatLong;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
var defaultLatLongOptions = {
  checkDMS: false
};

function isLatLong(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, defaultLatLongOptions);
  if (!str.includes(',')) return false;
  var pair = str.split(',');
  if (pair[0].startsWith('(') && !pair[1].endsWith(')') || pair[1].endsWith(')') && !pair[0].startsWith('(')) return false;

  if (options.checkDMS) {
    return latDMS.test(pair[0]) && longDMS.test(pair[1]);
  }

  return lat.test(pair[0]) && long.test(pair[1]);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isLength.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isLength.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLength;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1] || 0;
    max = arguments[2];
  }

  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isLocale.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isLocale.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLocale;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localeReg = /^[A-z]{2,4}([_-]([A-z]{4}|[\d]{3}))?([_-]([A-z]{2}|[\d]{3}))?$/;

function isLocale(str) {
  (0, _assertString.default)(str);

  if (str === 'en_US_POSIX' || str === 'ca_ES_VALENCIA') {
    return true;
  }

  return localeReg.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isLowercase.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isLowercase.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowercase;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLowercase(str) {
  (0, _assertString.default)(str);
  return str === str.toLowerCase();
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isMACAddress.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isMACAddress.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
var macAddressNoColons = /^([0-9a-fA-F]){12}$/;
var macAddressWithHyphen = /^([0-9a-fA-F][0-9a-fA-F]-){5}([0-9a-fA-F][0-9a-fA-F])$/;
var macAddressWithSpaces = /^([0-9a-fA-F][0-9a-fA-F]\s){5}([0-9a-fA-F][0-9a-fA-F])$/;
var macAddressWithDots = /^([0-9a-fA-F]{4}).([0-9a-fA-F]{4}).([0-9a-fA-F]{4})$/;

function isMACAddress(str, options) {
  (0, _assertString.default)(str);

  if (options && options.no_colons) {
    return macAddressNoColons.test(str);
  }

  return macAddress.test(str) || macAddressWithHyphen.test(str) || macAddressWithSpaces.test(str) || macAddressWithDots.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isMD5.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isMD5.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMD5;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  (0, _assertString.default)(str);
  return md5.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isMagnetURI.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isMagnetURI.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMagnetURI;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

function isMagnetURI(url) {
  (0, _assertString.default)(url);
  return magnetURI.test(url.trim());
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isMimeType.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isMimeType.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMimeType;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Checks if the provided string matches to a correct Media type format (MIME type)

  This function only checks is the string format follows the
  etablished rules by the according RFC specifications.
  This function supports 'charset' in textual media types
  (https://tools.ietf.org/html/rfc6657).

  This function does not check against all the media types listed
  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
  because of lightness purposes : it would require to include
  all these MIME types in this librairy, which would weigh it
  significantly. This kind of effort maybe is not worth for the use that
  this function has in this entire librairy.

  More informations in the RFC specifications :
  - https://tools.ietf.org/html/rfc2045
  - https://tools.ietf.org/html/rfc2046
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
*/
// Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).
var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len
// Handle "charset" in "text/*"

var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len
// Handle "boundary" in "multipart/*"

var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len

function isMimeType(str) {
  (0, _assertString.default)(str);
  return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isMobilePhone.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isMobilePhone.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'am-AM': /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
  'ar-BH': /^(\+?973)?(3|6)\d{7}$/,
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-LB': /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
  'ar-EG': /^((\+?20)|0)?1[0125]\d{8}$/,
  'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
  'ar-KW': /^(\+?965)[569]\d{7}$/,
  'ar-LY': /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
  'ar-MA': /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'ar-TN': /^(\+?216)?[2459]\d{7}$/,
  'az-AZ': /^(\+994|0)(5[015]|7[07]|99)\d{7}$/,
  'bs-BA': /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
  'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
  'bn-BD': /^(\+?880|0)1[13456789][0-9]{8}$/,
  'ca-AD': /^(\+376)?[346]\d{5}$/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'de-DE': /^(\+49)?0?[1|3]([0|5][0-45-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
  'de-AT': /^(\+43|0)\d{1,4}\d{3,12}$/,
  'de-CH': /^(\+41|0)(7[5-9])\d{1,7}$/,
  'de-LU': /^(\+352)?((6\d1)\d{6})$/,
  'el-GR': /^(\+?30|0)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-GG': /^(\+?44|0)1481\d{6}$/,
  'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
  'en-HK': /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
  'en-MO': /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
  'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
  'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
  'en-KE': /^(\+?254|0)(7|1)\d{8}$/,
  'en-MT': /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
  'en-MU': /^(\+?230|0)?\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'en-PH': /^(09|\+639)\d{9}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-SG': /^(\+65)?[689]\d{7}$/,
  'en-SL': /^(?:0|94|\+94)?(7(0|1|2|5|6|7|8)( |-)?\d)\d{6}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'en-ZW': /^(\+263)[0-9]{9}$/,
  'es-AR': /^\+?549(11|[2368]\d)\d{8}$/,
  'es-BO': /^(\+?591)?(6|7)\d{7}$/,
  'es-CO': /^(\+?57)?([1-8]{1}|3[0-9]{2})?[2-9]{1}\d{6}$/,
  'es-CL': /^(\+?56|0)[2-9]\d{1}\d{7}$/,
  'es-CR': /^(\+506)?[2-8]\d{7}$/,
  'es-DO': /^(\+?1)?8[024]9\d{7}$/,
  'es-HN': /^(\+?504)?[9|8]\d{7}$/,
  'es-EC': /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
  'es-ES': /^(\+?34)?[6|7]\d{8}$/,
  'es-PE': /^(\+?51)?9\d{8}$/,
  'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
  'es-PA': /^(\+?507)\d{7,8}$/,
  'es-PY': /^(\+?595|0)9[9876]\d{7}$/,
  'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
  'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fj-FJ': /^(\+?679)?\s?\d{3}\s?\d{4}$/,
  'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'fr-GF': /^(\+?594|0|00594)[67]\d{8}$/,
  'fr-GP': /^(\+?590|0|00590)[67]\d{8}$/,
  'fr-MQ': /^(\+?596|0|00596)[67]\d{8}$/,
  'fr-RE': /^(\+?262|0|00262)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'it-SM': /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
  'ja-JP': /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
  'ka-GE': /^(\+?995)?(5|79)\d{7}$/,
  'kk-KZ': /^(\+?7|8)?7\d{9}$/,
  'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'ms-MY': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'ne-NP': /^(\+?977)?9[78]\d{8}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nl-NL': /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[2-9]{1}\d{3}\-?\d{4}))$/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'sq-AL': /^(\+355|0)6[789]\d{6}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
  'th-TH': /^(\+66|66|0)\d{9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'uk-UA': /^(\+?38|8)?0\d{9}$/,
  'uz-UZ': /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
  'vi-VN': /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,
  'zh-CN': /^((\+|00)86)?1([3568][0-9]|4[579]|6[67]|7[01235678]|9[012356789])[0-9]{8}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */
// aliases

phones['en-CA'] = phones['en-US'];
phones['fr-CA'] = phones['en-CA'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];
phones['zh-MO'] = phones['en-MO'];
phones['ga-IE'] = phones['en-IE'];

function isMobilePhone(str, locale, options) {
  (0, _assertString.default)(str);

  if (options && options.strictMode && !str.startsWith('+')) {
    return false;
  }

  if (Array.isArray(locale)) {
    return locale.some(function (key) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];

        if (phone.test(str)) {
          return true;
        }
      }

      return false;
    });
  } else if (locale in phones) {
    return phones[locale].test(str); // alias falsey locale as 'any'
  } else if (!locale || locale === 'any') {
    for (var key in phones) {
      // istanbul ignore else
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];

        if (phone.test(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(phones);
exports.locales = locales;

/***/ }),

/***/ "./node_modules/validator/lib/isMongoId.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isMongoId.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMongoId;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _isHexadecimal = _interopRequireDefault(__webpack_require__(/*! ./isHexadecimal */ "./node_modules/validator/lib/isHexadecimal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMongoId(str) {
  (0, _assertString.default)(str);
  return (0, _isHexadecimal.default)(str) && str.length === 24;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isMultibyte.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isMultibyte.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMultibyte;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  (0, _assertString.default)(str);
  return multibyte.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isNumeric.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isNumeric.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numericNoSymbols = /^[0-9]+$/;

function isNumeric(str, options) {
  (0, _assertString.default)(str);

  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }

  return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? _alpha.decimal[options.locale] : '.', "])?[0-9]+$")).test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isOctal.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isOctal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isOctal;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var octal = /^(0o)?[0-7]+$/i;

function isOctal(str) {
  (0, _assertString.default)(str);
  return octal.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isPassportNumber.js":
/*!********************************************************!*\
  !*** ./node_modules/validator/lib/isPassportNumber.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPassportNumber;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reference:
 * https://en.wikipedia.org/ -- Wikipedia
 * https://docs.microsoft.com/en-us/microsoft-365/compliance/eu-passport-number -- EU Passport Number
 * https://countrycode.org/ -- Country Codes
 */
var passportRegexByCountryCode = {
  AM: /^[A-Z]{2}\d{7}$/,
  // ARMENIA
  AR: /^[A-Z]{3}\d{6}$/,
  // ARGENTINA
  AT: /^[A-Z]\d{7}$/,
  // AUSTRIA
  AU: /^[A-Z]\d{7}$/,
  // AUSTRALIA
  BE: /^[A-Z]{2}\d{6}$/,
  // BELGIUM
  BG: /^\d{9}$/,
  // BULGARIA
  BY: /^[A-Z]{2}\d{7}$/,
  // BELARUS
  CA: /^[A-Z]{2}\d{6}$/,
  // CANADA
  CH: /^[A-Z]\d{7}$/,
  // SWITZERLAND
  CN: /^[GE]\d{8}$/,
  // CHINA [G=Ordinary, E=Electronic] followed by 8-digits
  CY: /^[A-Z](\d{6}|\d{8})$/,
  // CYPRUS
  CZ: /^\d{8}$/,
  // CZECH REPUBLIC
  DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
  // GERMANY
  DK: /^\d{9}$/,
  // DENMARK
  DZ: /^\d{9}$/,
  // ALGERIA
  EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
  // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
  ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
  // SPAIN
  FI: /^[A-Z]{2}\d{7}$/,
  // FINLAND
  FR: /^\d{2}[A-Z]{2}\d{5}$/,
  // FRANCE
  GB: /^\d{9}$/,
  // UNITED KINGDOM
  GR: /^[A-Z]{2}\d{7}$/,
  // GREECE
  HR: /^\d{9}$/,
  // CROATIA
  HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
  // HUNGARY
  IE: /^[A-Z0-9]{2}\d{7}$/,
  // IRELAND
  IN: /^[A-Z]{1}-?\d{7}$/,
  // INDIA
  IS: /^(A)\d{7}$/,
  // ICELAND
  IT: /^[A-Z0-9]{2}\d{7}$/,
  // ITALY
  JP: /^[A-Z]{2}\d{7}$/,
  // JAPAN
  KR: /^[MS]\d{8}$/,
  // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
  LT: /^[A-Z0-9]{8}$/,
  // LITHUANIA
  LU: /^[A-Z0-9]{8}$/,
  // LUXEMBURG
  LV: /^[A-Z0-9]{2}\d{7}$/,
  // LATVIA
  MT: /^\d{7}$/,
  // MALTA
  NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
  // NETHERLANDS
  PO: /^[A-Z]{2}\d{7}$/,
  // POLAND
  PT: /^[A-Z]\d{6}$/,
  // PORTUGAL
  RO: /^\d{8,9}$/,
  // ROMANIA
  RU: /^\d{2}\d{2}\d{6}$/,
  // RUSSIAN FEDERATION
  SE: /^\d{8}$/,
  // SWEDEN
  SL: /^(P)[A-Z]\d{7}$/,
  // SLOVANIA
  SK: /^[0-9A-Z]\d{7}$/,
  // SLOVAKIA
  TR: /^[A-Z]\d{8}$/,
  // TURKEY
  UA: /^[A-Z]{2}\d{6}$/,
  // UKRAINE
  US: /^\d{9}$/ // UNITED STATES

};
/**
 * Check if str is a valid passport number
 * relative to provided ISO Country Code.
 *
 * @param {string} str
 * @param {string} countryCode
 * @return {boolean}
 */

function isPassportNumber(str, countryCode) {
  (0, _assertString.default)(str);
  /** Remove All Whitespaces, Convert to UPPERCASE */

  var normalizedStr = str.replace(/\s/g, '').toUpperCase();
  return countryCode.toUpperCase() in passportRegexByCountryCode && passportRegexByCountryCode[countryCode].test(normalizedStr);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isPort.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isPort.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPort;

var _isInt = _interopRequireDefault(__webpack_require__(/*! ./isInt */ "./node_modules/validator/lib/isInt.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPort(str) {
  return (0, _isInt.default)(str, {
    min: 0,
    max: 65535
  });
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isPostalCode.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isPostalCode.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPostalCode;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;
var patterns = {
  AD: /^AD\d{3}$/,
  AT: fourDigit,
  AU: fourDigit,
  AZ: /^AZ\d{4}$/,
  BE: fourDigit,
  BG: fourDigit,
  BR: /^\d{5}-\d{3}$/,
  BY: /2[1-4]{1}\d{4}$/,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: fourDigit,
  CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: fiveDigit,
  DK: fourDigit,
  DO: fiveDigit,
  DZ: fiveDigit,
  EE: fiveDigit,
  ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
  FI: fiveDigit,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  HR: /^([1-5]\d{4}$)/,
  HT: /^HT\d{4}$/,
  HU: fourDigit,
  ID: fiveDigit,
  IE: /^(?!.*(?:o))[A-z]\d[\dw]\s\w{4}$/i,
  IL: /^(\d{5}|\d{7})$/,
  IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
  IR: /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
  IS: threeDigit,
  IT: fiveDigit,
  JP: /^\d{3}\-\d{4}$/,
  KE: fiveDigit,
  LI: /^(948[5-9]|949[0-7])$/,
  LT: /^LT\-\d{5}$/,
  LU: fourDigit,
  LV: /^LV\-\d{4}$/,
  MX: fiveDigit,
  MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
  MY: fiveDigit,
  NL: /^\d{4}\s?[a-z]{2}$/i,
  NO: fourDigit,
  NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
  NZ: fourDigit,
  PL: /^\d{2}\-\d{3}$/,
  PR: /^00[679]\d{2}([ -]\d{4})?$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: sixDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^[1-9]\d{2}\s?\d{2}$/,
  SG: sixDigit,
  SI: fourDigit,
  SK: /^\d{3}\s?\d{2}$/,
  TH: fiveDigit,
  TN: fourDigit,
  TW: /^\d{3}(\d{2})?$/,
  UA: fiveDigit,
  US: /^\d{5}(-\d{4})?$/,
  ZA: fourDigit,
  ZM: fiveDigit
};
var locales = Object.keys(patterns);
exports.locales = locales;

function isPostalCode(str, locale) {
  (0, _assertString.default)(str);

  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === 'any') {
    for (var key in patterns) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if (patterns.hasOwnProperty(key)) {
        var pattern = patterns[key];

        if (pattern.test(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

/***/ }),

/***/ "./node_modules/validator/lib/isRFC3339.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isRFC3339.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRFC3339;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */
var dateFullYear = /[0-9]{4}/;
var dateMonth = /(0[1-9]|1[0-2])/;
var dateMDay = /([12]\d|0[1-9]|3[01])/;
var timeHour = /([01][0-9]|2[0-3])/;
var timeMinute = /[0-5][0-9]/;
var timeSecond = /([0-5][0-9]|60)/;
var timeSecFrac = /(\.[0-9]+)?/;
var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
var rfc3339 = new RegExp("".concat(fullDate.source, "[ tT]").concat(fullTime.source));

function isRFC3339(str) {
  (0, _assertString.default)(str);
  return rfc3339.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isRgbColor.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isRgbColor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRgbColor;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)/;
var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)/;

function isRgbColor(str) {
  var includePercentValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  (0, _assertString.default)(str);

  if (!includePercentValues) {
    return rgbColor.test(str) || rgbaColor.test(str);
  }

  return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isSemVer.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isSemVer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSemVer;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _multilineRegex = _interopRequireDefault(__webpack_require__(/*! ./util/multilineRegex */ "./node_modules/validator/lib/util/multilineRegex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Regular Expression to match
 * semantic versioning (SemVer)
 * built from multi-line, multi-parts regexp
 * Reference: https://semver.org/
 */
var semanticVersioningRegex = (0, _multilineRegex.default)(['^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)', '(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))', '?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$'], 'i');

function isSemVer(str) {
  (0, _assertString.default)(str);
  return semanticVersioningRegex.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isSlug.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isSlug.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSlug;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})([a-z0-9-\\]{1,})[^\s]*[^-_\s]$/;

function isSlug(str) {
  (0, _assertString.default)(str);
  return charsetRegex.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isStrongPassword.js":
/*!********************************************************!*\
  !*** ./node_modules/validator/lib/isStrongPassword.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStrongPassword;

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var upperCaseRegex = /^[A-Z]$/;
var lowerCaseRegex = /^[a-z]$/;
var numberRegex = /^[0-9]$/;
var symbolRegex = /^[-#!$%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
var defaultOptions = {
  minLength: 8,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
  returnScore: false,
  pointsPerUnique: 1,
  pointsPerRepeat: 0.5,
  pointsForContainingLower: 10,
  pointsForContainingUpper: 10,
  pointsForContainingNumber: 10,
  pointsForContainingSymbol: 10
};
/* Counts number of occurrences of each char in a string
 * could be moved to util/ ?
*/

function countChars(str) {
  var result = {};
  Array.from(str).forEach(function (char) {
    var curVal = result[char];

    if (curVal) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  });
  return result;
}
/* Return information about a password */


function analyzePassword(password) {
  var charMap = countChars(password);
  var analysis = {
    length: password.length,
    uniqueChars: Object.keys(charMap).length,
    uppercaseCount: 0,
    lowercaseCount: 0,
    numberCount: 0,
    symbolCount: 0
  };
  Object.keys(charMap).forEach(function (char) {
    if (upperCaseRegex.test(char)) {
      analysis.uppercaseCount += charMap[char];
    } else if (lowerCaseRegex.test(char)) {
      analysis.lowercaseCount += charMap[char];
    } else if (numberRegex.test(char)) {
      analysis.numberCount += charMap[char];
    } else if (symbolRegex.test(char)) {
      analysis.symbolCount += charMap[char];
    }
  });
  return analysis;
}

function scorePassword(analysis, scoringOptions) {
  var points = 0;
  points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
  points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;

  if (analysis.lowercaseCount > 0) {
    points += scoringOptions.pointsForContainingLower;
  }

  if (analysis.uppercaseCount > 0) {
    points += scoringOptions.pointsForContainingUpper;
  }

  if (analysis.numberCount > 0) {
    points += scoringOptions.pointsForContainingNumber;
  }

  if (analysis.symbolCount > 0) {
    points += scoringOptions.pointsForContainingSymbol;
  }

  return points;
}

function isStrongPassword(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  (0, _assertString.default)(str);
  var analysis = analyzePassword(str);
  options = (0, _merge.default)(options || {}, defaultOptions);

  if (options.returnScore) {
    return scorePassword(analysis, options);
  }

  return analysis.length >= options.minLength && analysis.lowercaseCount >= options.minLowercase && analysis.uppercaseCount >= options.minUppercase && analysis.numberCount >= options.minNumbers && analysis.symbolCount >= options.minSymbols;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isSurrogatePair.js":
/*!*******************************************************!*\
  !*** ./node_modules/validator/lib/isSurrogatePair.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  (0, _assertString.default)(str);
  return surrogatePair.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isTaxID.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isTaxID.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTaxID;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var algorithms = _interopRequireWildcard(__webpack_require__(/*! ./util/algorithms */ "./node_modules/validator/lib/util/algorithms.js"));

var _isDate = _interopRequireDefault(__webpack_require__(/*! ./isDate */ "./node_modules/validator/lib/isDate.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * TIN Validation
 * Validates Tax Identification Numbers (TINs) from the US, EU member states and the United Kingdom.
 *
 * EU-UK:
 * National TIN validity is calculated using public algorithms as made available by DG TAXUD.
 *
 * See `https://ec.europa.eu/taxation_customs/tin/specs/FS-TIN%20Algorithms-Public.docx` for more information.
 *
 * US:
 * An Employer Identification Number (EIN), also known as a Federal Tax Identification Number,
 *  is used to identify a business entity.
 *
 * NOTES:
 *  - Prefix 47 is being reserved for future use
 *  - Prefixes 26, 27, 45, 46 and 47 were previously assigned by the Philadelphia campus.
 *
 * See `http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes`
 * for more information.
 */
// Locale functions

/*
 * bg-BG validation function
 * (Edinen graždanski nomer (EGN/ЕГН), persons only)
 * Checks if birth date (first six digits) is valid and calculates check (last) digit
 */
function bgBgCheck(tin) {
  // Extract full year, normalize month and check birth date validity
  var century_year = tin.slice(0, 2);
  var month = parseInt(tin.slice(2, 4), 10);

  if (month > 40) {
    month -= 40;
    century_year = "20".concat(century_year);
  } else if (month > 20) {
    month -= 20;
    century_year = "18".concat(century_year);
  } else {
    century_year = "19".concat(century_year);
  }

  if (month < 10) {
    month = "0".concat(month);
  }

  var date = "".concat(century_year, "/").concat(month, "/").concat(tin.slice(4, 6));

  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
    return false;
  } // split digits into an array for further processing


  var digits = tin.split('').map(function (a) {
    return parseInt(a, 10);
  }); // Calculate checksum by multiplying digits with fixed values

  var multip_lookup = [2, 4, 8, 5, 10, 9, 7, 3, 6];
  var checksum = 0;

  for (var i = 0; i < multip_lookup.length; i++) {
    checksum += digits[i] * multip_lookup[i];
  }

  checksum = checksum % 11 === 10 ? 0 : checksum % 11;
  return checksum === digits[9];
}
/*
 * cs-CZ validation function
 * (Rodné číslo (RČ), persons only)
 * Checks if birth date (first six digits) is valid and divisibility by 11
 * Material not in DG TAXUD document sourced from:
 * -`https://lorenc.info/3MA381/overeni-spravnosti-rodneho-cisla.htm`
 * -`https://www.mvcr.cz/clanek/rady-a-sluzby-dokumenty-rodne-cislo.aspx`
 */


function csCzCheck(tin) {
  tin = tin.replace(/\W/, ''); // Extract full year from TIN length

  var full_year = parseInt(tin.slice(0, 2), 10);

  if (tin.length === 10) {
    if (full_year < 54) {
      full_year = "20".concat(full_year);
    } else {
      full_year = "19".concat(full_year);
    }
  } else {
    if (tin.slice(6) === '000') {
      return false;
    } // Three-zero serial not assigned before 1954


    if (full_year < 54) {
      full_year = "19".concat(full_year);
    } else {
      return false; // No 18XX years seen in any of the resources
    }
  } // Add missing zero if needed


  if (full_year.length === 3) {
    full_year = [full_year.slice(0, 2), '0', full_year.slice(2)].join('');
  } // Extract month from TIN and normalize


  var month = parseInt(tin.slice(2, 4), 10);

  if (month > 50) {
    month -= 50;
  }

  if (month > 20) {
    // Month-plus-twenty was only introduced in 2004
    if (parseInt(full_year, 10) < 2004) {
      return false;
    }

    month -= 20;
  }

  if (month < 10) {
    month = "0".concat(month);
  } // Check date validity


  var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));

  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
    return false;
  } // Verify divisibility by 11


  if (tin.length === 10) {
    if (parseInt(tin, 10) % 11 !== 0) {
      // Some numbers up to and including 1985 are still valid if
      // check (last) digit equals 0 and modulo of first 9 digits equals 10
      var checkdigit = parseInt(tin.slice(0, 9), 10) % 11;

      if (parseInt(full_year, 10) < 1986 && checkdigit === 10) {
        if (parseInt(tin.slice(9), 10) !== 0) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return true;
}
/*
 * de-AT validation function
 * (Abgabenkontonummer, persons/entities)
 * Verify TIN validity by calling luhnCheck()
 */


function deAtCheck(tin) {
  return algorithms.luhnCheck(tin);
}
/*
 * de-DE validation function
 * (Steueridentifikationsnummer (Steuer-IdNr.), persons only)
 * Tests for single duplicate/triplicate value, then calculates ISO 7064 check (last) digit
 * Partial implementation of spec (same result with both algorithms always)
 */


function deDeCheck(tin) {
  // Split digits into an array for further processing
  var digits = tin.split('').map(function (a) {
    return parseInt(a, 10);
  }); // Fill array with strings of number positions

  var occurences = [];

  for (var i = 0; i < digits.length - 1; i++) {
    occurences.push('');

    for (var j = 0; j < digits.length - 1; j++) {
      if (digits[i] === digits[j]) {
        occurences[i] += j;
      }
    }
  } // Remove digits with one occurence and test for only one duplicate/triplicate


  occurences = occurences.filter(function (a) {
    return a.length > 1;
  });

  if (occurences.length !== 2 && occurences.length !== 3) {
    return false;
  } // In case of triplicate value only two digits are allowed next to each other


  if (occurences[0].length === 3) {
    var trip_locations = occurences[0].split('').map(function (a) {
      return parseInt(a, 10);
    });
    var recurrent = 0; // Amount of neighbour occurences

    for (var _i = 0; _i < trip_locations.length - 1; _i++) {
      if (trip_locations[_i] + 1 === trip_locations[_i + 1]) {
        recurrent += 1;
      }
    }

    if (recurrent === 2) {
      return false;
    }
  }

  return algorithms.iso7064Check(tin);
}
/*
 * dk-DK validation function
 * (CPR-nummer (personnummer), persons only)
 * Checks if birth date (first six digits) is valid and assigned to century (seventh) digit,
 * and calculates check (last) digit
 */


function dkDkCheck(tin) {
  tin = tin.replace(/\W/, ''); // Extract year, check if valid for given century digit and add century

  var year = parseInt(tin.slice(4, 6), 10);
  var century_digit = tin.slice(6, 7);

  switch (century_digit) {
    case '0':
    case '1':
    case '2':
    case '3':
      year = "19".concat(year);
      break;

    case '4':
    case '9':
      if (year < 37) {
        year = "20".concat(year);
      } else {
        year = "19".concat(year);
      }

      break;

    default:
      if (year < 37) {
        year = "20".concat(year);
      } else if (year > 58) {
        year = "18".concat(year);
      } else {
        return false;
      }

      break;
  } // Add missing zero if needed


  if (year.length === 3) {
    year = [year.slice(0, 2), '0', year.slice(2)].join('');
  } // Check date validity


  var date = "".concat(year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));

  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
    return false;
  } // Split digits into an array for further processing


  var digits = tin.split('').map(function (a) {
    return parseInt(a, 10);
  });
  var checksum = 0;
  var weight = 4; // Multiply by weight and add to checksum

  for (var i = 0; i < 9; i++) {
    checksum += digits[i] * weight;
    weight -= 1;

    if (weight === 1) {
      weight = 7;
    }
  }

  checksum %= 11;

  if (checksum === 1) {
    return false;
  }

  return checksum === 0 ? digits[9] === 0 : digits[9] === 11 - checksum;
}
/*
 * el-CY validation function
 * (Arithmos Forologikou Mitroou (AFM/ΑΦΜ), persons only)
 * Verify TIN validity by calculating ASCII value of check (last) character
 */


function elCyCheck(tin) {
  // split digits into an array for further processing
  var digits = tin.slice(0, 8).split('').map(function (a) {
    return parseInt(a, 10);
  });
  var checksum = 0; // add digits in even places

  for (var i = 1; i < digits.length; i += 2) {
    checksum += digits[i];
  } // add digits in odd places


  for (var _i2 = 0; _i2 < digits.length; _i2 += 2) {
    if (digits[_i2] < 2) {
      checksum += 1 - digits[_i2];
    } else {
      checksum += 2 * (digits[_i2] - 2) + 5;

      if (digits[_i2] > 4) {
        checksum += 2;
      }
    }
  }

  return String.fromCharCode(checksum % 26 + 65) === tin.charAt(8);
}
/*
 * el-GR validation function
 * (Arithmos Forologikou Mitroou (AFM/ΑΦΜ), persons/entities)
 * Verify TIN validity by calculating check (last) digit
 * Algorithm not in DG TAXUD document- sourced from:
 * - `http://epixeirisi.gr/%CE%9A%CE%A1%CE%99%CE%A3%CE%99%CE%9C%CE%91-%CE%98%CE%95%CE%9C%CE%91%CE%A4%CE%91-%CE%A6%CE%9F%CE%A1%CE%9F%CE%9B%CE%9F%CE%93%CE%99%CE%91%CE%A3-%CE%9A%CE%91%CE%99-%CE%9B%CE%9F%CE%93%CE%99%CE%A3%CE%A4%CE%99%CE%9A%CE%97%CE%A3/23791/%CE%91%CF%81%CE%B9%CE%B8%CE%BC%CF%8C%CF%82-%CE%A6%CE%BF%CF%81%CE%BF%CE%BB%CE%BF%CE%B3%CE%B9%CE%BA%CE%BF%CF%8D-%CE%9C%CE%B7%CF%84%CF%81%CF%8E%CE%BF%CF%85`
 */


function elGrCheck(tin) {
  // split digits into an array for further processing
  var digits = tin.split('').map(function (a) {
    return parseInt(a, 10);
  });
  var checksum = 0;

  for (var i = 0; i < 8; i++) {
    checksum += digits[i] * Math.pow(2, 8 - i);
  }

  return checksum % 11 === digits[8];
}
/*
 * en-GB validation function (should go here if needed)
 * (National Insurance Number (NINO) or Unique Taxpayer Reference (UTR),
 * persons/entities respectively)
 */

/*
 * en-IE validation function
 * (Personal Public Service Number (PPS No), persons only)
 * Verify TIN validity by calculating check (second to last) character
 */


function enIeCheck(tin) {
  var checksum = algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 7).map(function (a) {
    return parseInt(a, 10);
  }), 8);

  if (tin.length === 9 && tin[8] !== 'W') {
    checksum += (tin[8].charCodeAt(0) - 64) * 9;
  }

  checksum %= 23;

  if (checksum === 0) {
    return tin[7].toUpperCase() === 'W';
  }

  return tin[7].toUpperCase() === String.fromCharCode(64 + checksum);
} // Valid US IRS campus prefixes


var enUsCampusPrefix = {
  andover: ['10', '12'],
  atlanta: ['60', '67'],
  austin: ['50', '53'],
  brookhaven: ['01', '02', '03', '04', '05', '06', '11', '13', '14', '16', '21', '22', '23', '25', '34', '51', '52', '54', '55', '56', '57', '58', '59', '65'],
  cincinnati: ['30', '32', '35', '36', '37', '38', '61'],
  fresno: ['15', '24'],
  internet: ['20', '26', '27', '45', '46', '47'],
  kansas: ['40', '44'],
  memphis: ['94', '95'],
  ogden: ['80', '90'],
  philadelphia: ['33', '39', '41', '42', '43', '46', '48', '62', '63', '64', '66', '68', '71', '72', '73', '74', '75', '76', '77', '81', '82', '83', '84', '85', '86', '87', '88', '91', '92', '93', '98', '99'],
  sba: ['31']
}; // Return an array of all US IRS campus prefixes

function enUsGetPrefixes() {
  var prefixes = [];

  for (var location in enUsCampusPrefix) {
    // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
    // istanbul ignore else
    if (enUsCampusPrefix.hasOwnProperty(location)) {
      prefixes.push.apply(prefixes, _toConsumableArray(enUsCampusPrefix[location]));
    }
  }

  return prefixes;
}
/*
 * en-US validation function
 * Verify that the TIN starts with a valid IRS campus prefix
 */


function enUsCheck(tin) {
  return enUsGetPrefixes().indexOf(tin.substr(0, 2)) !== -1;
}
/*
 * es-ES validation function
 * (Documento Nacional de Identidad (DNI)
 * or Número de Identificación de Extranjero (NIE), persons only)
 * Verify TIN validity by calculating check (last) character
 */


function esEsCheck(tin) {
  // Split characters into an array for further processing
  var chars = tin.toUpperCase().split(''); // Replace initial letter if needed

  if (isNaN(parseInt(chars[0], 10)) && chars.length > 1) {
    var lead_replace = 0;

    switch (chars[0]) {
      case 'Y':
        lead_replace = 1;
        break;

      case 'Z':
        lead_replace = 2;
        break;

      default:
    }

    chars.splice(0, 1, lead_replace); // Fill with zeros if smaller than proper
  } else {
    while (chars.length < 9) {
      chars.unshift(0);
    }
  } // Calculate checksum and check according to lookup


  var lookup = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  chars = chars.join('');
  var checksum = parseInt(chars.slice(0, 8), 10) % 23;
  return chars[8] === lookup[checksum];
}
/*
 * et-EE validation function
 * (Isikukood (IK), persons only)
 * Checks if birth date (century digit and six following) is valid and calculates check (last) digit
 * Material not in DG TAXUD document sourced from:
 * - `https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Estonia-TIN.pdf`
 */


function etEeCheck(tin) {
  // Extract year and add century
  var full_year = tin.slice(1, 3);
  var century_digit = tin.slice(0, 1);

  switch (century_digit) {
    case '1':
    case '2':
      full_year = "18".concat(full_year);
      break;

    case '3':
    case '4':
      full_year = "19".concat(full_year);
      break;

    default:
      full_year = "20".concat(full_year);
      break;
  } // Check date validity


  var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));

  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
    return false;
  } // Split digits into an array for further processing


  var digits = tin.split('').map(function (a) {
    return parseInt(a, 10);
  });
  var checksum = 0;
  var weight = 1; // Multiply by weight and add to checksum

  for (var i = 0; i < 10; i++) {
    checksum += digits[i] * weight;
    weight += 1;

    if (weight === 10) {
      weight = 1;
    }
  } // Do again if modulo 11 of checksum is 10


  if (checksum % 11 === 10) {
    checksum = 0;
    weight = 3;

    for (var _i3 = 0; _i3 < 10; _i3++) {
      checksum += digits[_i3] * weight;
      weight += 1;

      if (weight === 10) {
        weight = 1;
      }
    }

    if (checksum % 11 === 10) {
      return digits[10] === 0;
    }
  }

  return checksum % 11 === digits[10];
}
/*
 * fi-FI validation function
 * (Henkilötunnus (HETU), persons only)
 * Checks if birth date (first six digits plus century symbol) is valid
 * and calculates check (last) digit
 */


function fiFiCheck(tin) {
  // Extract year and add century
  var full_year = tin.slice(4, 6);
  var century_symbol = tin.slice(6, 7);

  switch (century_symbol) {
    case '+':
      full_year = "18".concat(full_year);
      break;

    case '-':
      full_year = "19".concat(full_year);
      break;

    default:
      full_year = "20".concat(full_year);
      break;
  } // Check date validity


  var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));

  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
    return false;
  } // Calculate check character


  var checksum = parseInt(tin.slice(0, 6) + tin.slice(7, 10), 10) % 31;

  if (checksum < 10) {
    return checksum === parseInt(tin.slice(10), 10);
  }

  checksum -= 10;
  var letters_lookup = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
  return letters_lookup[checksum] === tin.slice(10);
}
/*
 * fr/nl-BE validation function
 * (Numéro national (N.N.), persons only)
 * Checks if birth date (first six digits) is valid and calculates check (last two) digits
 */


function frBeCheck(tin) {
  // Zero month/day value is acceptable
  if (tin.slice(2, 4) !== '00' || tin.slice(4, 6) !== '00') {
    // Extract date from first six digits of TIN
    var date = "".concat(tin.slice(0, 2), "/").concat(tin.slice(2, 4), "/").concat(tin.slice(4, 6));

    if (!(0, _isDate.default)(date, 'YY/MM/DD')) {
      return false;
    }
  }

  var checksum = 97 - parseInt(tin.slice(0, 9), 10) % 97;
  var checkdigits = parseInt(tin.slice(9, 11), 10);

  if (checksum !== checkdigits) {
    checksum = 97 - parseInt("2".concat(tin.slice(0, 9)), 10) % 97;

    if (checksum !== checkdigits) {
      return false;
    }
  }

  return true;
}
/*
 * fr-FR validation function
 * (Numéro fiscal de référence (numéro SPI), persons only)
 * Verify TIN validity by calculating check (last three) digits
 */


function frFrCheck(tin) {
  tin = tin.replace(/\s/g, '');
  var checksum = parseInt(tin.slice(0, 10), 10) % 511;
  var checkdigits = parseInt(tin.slice(10, 13), 10);
  return checksum === checkdigits;
}
/*
 * fr/lb-LU validation function
 * (numéro d’identification personnelle, persons only)
 * Verify birth date validity and run Luhn and Verhoeff checks
 */


function frLuCheck(tin) {
  // Extract date and check validity
  var date = "".concat(tin.slice(0, 4), "/").concat(tin.slice(4, 6), "/").concat(tin.slice(6, 8));

  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
    return false;
  } // Run Luhn check


  if (!algorithms.luhnCheck(tin.slice(0, 12))) {
    return false;
  } // Remove Luhn check digit and run Verhoeff check


  return algorithms.verhoeffCheck("".concat(tin.slice(0, 11)).concat(tin[12]));
}
/*
 * hr-HR validation function
 * (Osobni identifikacijski broj (OIB), persons/entities)
 * Verify TIN validity by calling iso7064Check(digits)
 */


function hrHrCheck(tin) {
  return algorithms.iso7064Check(tin);
}
/*
 * hu-HU validation function
 * (Adóazonosító jel, persons only)
 * Verify TIN validity by calculating check (last) digit
 */


function huHuCheck(tin) {
  // split digits into an array for further processing
  var digits = tin.split('').map(function (a) {
    return parseInt(a, 10);
  });
  var checksum = 8;

  for (var i = 1; i < 9; i++) {
    checksum += digits[i] * (i + 1);
  }

  return checksum % 11 === digits[9];
}
/*
 * lt-LT validation function (should go here if needed)
 * (Asmens kodas, persons/entities respectively)
 * Current validation check is alias of etEeCheck- same format applies
 */

/*
 * it-IT first/last name validity check
 * Accepts it-IT TIN-encoded names as a three-element character array and checks their validity
 * Due to lack of clarity between resources ("Are only Italian consonants used?
 * What happens if a person has X in their name?" etc.) only two test conditions
 * have been implemented:
 * Vowels may only be followed by other vowels or an X character
 * and X characters after vowels may only be followed by other X characters.
 */


function itItNameCheck(name) {
  // true at the first occurence of a vowel
  var vowelflag = false; // true at the first occurence of an X AFTER vowel
  // (to properly handle last names with X as consonant)

  var xflag = false;

  for (var i = 0; i < 3; i++) {
    if (!vowelflag && /[AEIOU]/.test(name[i])) {
      vowelflag = true;
    } else if (!xflag && vowelflag && name[i] === 'X') {
      xflag = true;
    } else if (i > 0) {
      if (vowelflag && !xflag) {
        if (!/[AEIOU]/.test(name[i])) {
          return false;
        }
      }

      if (xflag) {
        if (!/X/.test(name[i])) {
          return false;
        }
      }
    }
  }

  return true;
}
/*
 * it-IT validation function
 * (Codice fiscale (TIN-IT), persons only)
 * Verify name, birth date and codice catastale validity
 * and calculate check character.
 * Material not in DG-TAXUD document sourced from:
 * `https://en.wikipedia.org/wiki/Italian_fiscal_code`
 */


function itItCheck(tin) {
  // Capitalize and split characters into an array for further processing
  var chars = tin.toUpperCase().split(''); // Check first and last name validity calling itItNameCheck()

  if (!itItNameCheck(chars.slice(0, 3))) {
    return false;
  }

  if (!itItNameCheck(chars.slice(3, 6))) {
    return false;
  } // Convert letters in number spaces back to numbers if any


  var number_locations = [6, 7, 9, 10, 12, 13, 14];
  var number_replace = {
    L: '0',
    M: '1',
    N: '2',
    P: '3',
    Q: '4',
    R: '5',
    S: '6',
    T: '7',
    U: '8',
    V: '9'
  };

  for (var _i4 = 0, _number_locations = number_locations; _i4 < _number_locations.length; _i4++) {
    var i = _number_locations[_i4];

    if (chars[i] in number_replace) {
      chars.splice(i, 1, number_replace[chars[i]]);
    }
  } // Extract month and day, and check date validity


  var month_replace = {
    A: '01',
    B: '02',
    C: '03',
    D: '04',
    E: '05',
    H: '06',
    L: '07',
    M: '08',
    P: '09',
    R: '10',
    S: '11',
    T: '12'
  };
  var month = month_replace[chars[8]];
  var day = parseInt(chars[9] + chars[10], 10);

  if (day > 40) {
    day -= 40;
  }

  if (day < 10) {
    day = "0".concat(day);
  }

  var date = "".concat(chars[6]).concat(chars[7], "/").concat(month, "/").concat(day);

  if (!(0, _isDate.default)(date, 'YY/MM/DD')) {
    return false;
  } // Calculate check character by adding up even and odd characters as numbers


  var checksum = 0;

  for (var _i5 = 1; _i5 < chars.length - 1; _i5 += 2) {
    var char_to_int = parseInt(chars[_i5], 10);

    if (isNaN(char_to_int)) {
      char_to_int = chars[_i5].charCodeAt(0) - 65;
    }

    checksum += char_to_int;
  }

  var odd_convert = {
    // Maps of characters at odd places
    A: 1,
    B: 0,
    C: 5,
    D: 7,
    E: 9,
    F: 13,
    G: 15,
    H: 17,
    I: 19,
    J: 21,
    K: 2,
    L: 4,
    M: 18,
    N: 20,
    O: 11,
    P: 3,
    Q: 6,
    R: 8,
    S: 12,
    T: 14,
    U: 16,
    V: 10,
    W: 22,
    X: 25,
    Y: 24,
    Z: 23,
    0: 1,
    1: 0
  };

  for (var _i6 = 0; _i6 < chars.length - 1; _i6 += 2) {
    var _char_to_int = 0;

    if (chars[_i6] in odd_convert) {
      _char_to_int = odd_convert[chars[_i6]];
    } else {
      var multiplier = parseInt(chars[_i6], 10);
      _char_to_int = 2 * multiplier + 1;

      if (multiplier > 4) {
        _char_to_int += 2;
      }
    }

    checksum += _char_to_int;
  }

  if (String.fromCharCode(65 + checksum % 26) !== chars[15]) {
    return false;
  }

  return true;
}
/*
 * lv-LV validation function
 * (Personas kods (PK), persons only)
 * Check validity of birth date and calculate check (last) digit
 * Support only for old format numbers (not starting with '32', issued before 2017/07/01)
 * Material not in DG TAXUD document sourced from:
 * `https://boot.ritakafija.lv/forums/index.php?/topic/88314-personas-koda-algoritms-%C4%8Deksumma/`
 */


function lvLvCheck(tin) {
  tin = tin.replace(/\W/, ''); // Extract date from TIN

  var day = tin.slice(0, 2);

  if (day !== '32') {
    // No date/checksum check if new format
    var month = tin.slice(2, 4);

    if (month !== '00') {
      // No date check if unknown month
      var full_year = tin.slice(4, 6);

      switch (tin[6]) {
        case '0':
          full_year = "18".concat(full_year);
          break;

        case '1':
          full_year = "19".concat(full_year);
          break;

        default:
          full_year = "20".concat(full_year);
          break;
      } // Check date validity


      var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(day);

      if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
        return false;
      }
    } // Calculate check digit


    var checksum = 1101;
    var multip_lookup = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2];

    for (var i = 0; i < tin.length - 1; i++) {
      checksum -= parseInt(tin[i], 10) * multip_lookup[i];
    }

    return parseInt(tin[10], 10) === checksum % 11;
  }

  return true;
}
/*
 * mt-MT validation function
 * (Identity Card Number or Unique Taxpayer Reference, persons/entities)
 * Verify Identity Card Number structure (no other tests found)
 */


function mtMtCheck(tin) {
  if (tin.length !== 9) {
    // No tests for UTR
    var chars = tin.toUpperCase().split(''); // Fill with zeros if smaller than proper

    while (chars.length < 8) {
      chars.unshift(0);
    } // Validate format according to last character


    switch (tin[7]) {
      case 'A':
      case 'P':
        if (parseInt(chars[6], 10) === 0) {
          return false;
        }

        break;

      default:
        {
          var first_part = parseInt(chars.join('').slice(0, 5), 10);

          if (first_part > 32000) {
            return false;
          }

          var second_part = parseInt(chars.join('').slice(5, 7), 10);

          if (first_part === second_part) {
            return false;
          }
        }
    }
  }

  return true;
}
/*
 * nl-NL validation function
 * (Burgerservicenummer (BSN) or Rechtspersonen Samenwerkingsverbanden Informatie Nummer (RSIN),
 * persons/entities respectively)
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */


function nlNlCheck(tin) {
  return algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 8).map(function (a) {
    return parseInt(a, 10);
  }), 9) % 11 === parseInt(tin[8], 10);
}
/*
 * pl-PL validation function
 * (Powszechny Elektroniczny System Ewidencji Ludności (PESEL)
 * or Numer identyfikacji podatkowej (NIP), persons/entities)
 * Verify TIN validity by validating birth date (PESEL) and calculating check (last) digit
 */


function plPlCheck(tin) {
  // NIP
  if (tin.length === 10) {
    // Calculate last digit by multiplying with lookup
    var lookup = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    var _checksum = 0;

    for (var i = 0; i < lookup.length; i++) {
      _checksum += parseInt(tin[i], 10) * lookup[i];
    }

    _checksum %= 11;

    if (_checksum === 10) {
      return false;
    }

    return _checksum === parseInt(tin[9], 10);
  } // PESEL
  // Extract full year using month


  var full_year = tin.slice(0, 2);
  var month = parseInt(tin.slice(2, 4), 10);

  if (month > 80) {
    full_year = "18".concat(full_year);
    month -= 80;
  } else if (month > 60) {
    full_year = "22".concat(full_year);
    month -= 60;
  } else if (month > 40) {
    full_year = "21".concat(full_year);
    month -= 40;
  } else if (month > 20) {
    full_year = "20".concat(full_year);
    month -= 20;
  } else {
    full_year = "19".concat(full_year);
  } // Add leading zero to month if needed


  if (month < 10) {
    month = "0".concat(month);
  } // Check date validity


  var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));

  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
    return false;
  } // Calculate last digit by mulitplying with odd one-digit numbers except 5


  var checksum = 0;
  var multiplier = 1;

  for (var _i7 = 0; _i7 < tin.length - 1; _i7++) {
    checksum += parseInt(tin[_i7], 10) * multiplier % 10;
    multiplier += 2;

    if (multiplier > 10) {
      multiplier = 1;
    } else if (multiplier === 5) {
      multiplier += 2;
    }
  }

  checksum = 10 - checksum % 10;
  return checksum === parseInt(tin[10], 10);
}
/*
 * pt-PT validation function
 * (Número de identificação fiscal (NIF), persons/entities)
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */


function ptPtCheck(tin) {
  var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 8).map(function (a) {
    return parseInt(a, 10);
  }), 9) % 11;

  if (checksum > 9) {
    return parseInt(tin[8], 10) === 0;
  }

  return checksum === parseInt(tin[8], 10);
}
/*
 * ro-RO validation function
 * (Cod Numeric Personal (CNP) or Cod de înregistrare fiscală (CIF),
 * persons only)
 * Verify CNP validity by calculating check (last) digit (test not found for CIF)
 * Material not in DG TAXUD document sourced from:
 * `https://en.wikipedia.org/wiki/National_identification_number#Romania`
 */


function roRoCheck(tin) {
  if (tin.slice(0, 4) !== '9000') {
    // No test found for this format
    // Extract full year using century digit if possible
    var full_year = tin.slice(1, 3);

    switch (tin[0]) {
      case '1':
      case '2':
        full_year = "19".concat(full_year);
        break;

      case '3':
      case '4':
        full_year = "18".concat(full_year);
        break;

      case '5':
      case '6':
        full_year = "20".concat(full_year);
        break;

      default:
    } // Check date validity


    var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));

    if (date.length === 8) {
      if (!(0, _isDate.default)(date, 'YY/MM/DD')) {
        return false;
      }
    } else if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
      return false;
    } // Calculate check digit


    var digits = tin.split('').map(function (a) {
      return parseInt(a, 10);
    });
    var multipliers = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
    var checksum = 0;

    for (var i = 0; i < multipliers.length; i++) {
      checksum += digits[i] * multipliers[i];
    }

    if (checksum % 11 === 10) {
      return digits[12] === 1;
    }

    return digits[12] === checksum % 11;
  }

  return true;
}
/*
 * sk-SK validation function
 * (Rodné číslo (RČ) or bezvýznamové identifikačné číslo (BIČ), persons only)
 * Checks validity of pre-1954 birth numbers (rodné číslo) only
 * Due to the introduction of the pseudo-random BIČ it is not possible to test
 * post-1954 birth numbers without knowing whether they are BIČ or RČ beforehand
 */


function skSkCheck(tin) {
  if (tin.length === 9) {
    tin = tin.replace(/\W/, '');

    if (tin.slice(6) === '000') {
      return false;
    } // Three-zero serial not assigned before 1954
    // Extract full year from TIN length


    var full_year = parseInt(tin.slice(0, 2), 10);

    if (full_year > 53) {
      return false;
    }

    if (full_year < 10) {
      full_year = "190".concat(full_year);
    } else {
      full_year = "19".concat(full_year);
    } // Extract month from TIN and normalize


    var month = parseInt(tin.slice(2, 4), 10);

    if (month > 50) {
      month -= 50;
    }

    if (month < 10) {
      month = "0".concat(month);
    } // Check date validity


    var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));

    if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
      return false;
    }
  }

  return true;
}
/*
 * sl-SI validation function
 * (Davčna številka, persons/entities)
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */


function slSiCheck(tin) {
  var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 7).map(function (a) {
    return parseInt(a, 10);
  }), 8) % 11;

  if (checksum === 10) {
    return parseInt(tin[7], 10) === 0;
  }

  return checksum === parseInt(tin[7], 10);
}
/*
 * sv-SE validation function
 * (Personnummer or samordningsnummer, persons only)
 * Checks validity of birth date and calls luhnCheck() to validate check (last) digit
 */


function svSeCheck(tin) {
  // Make copy of TIN and normalize to two-digit year form
  var tin_copy = tin.slice(0);

  if (tin.length > 11) {
    tin_copy = tin_copy.slice(2);
  } // Extract date of birth


  var full_year = '';
  var month = tin_copy.slice(2, 4);
  var day = parseInt(tin_copy.slice(4, 6), 10);

  if (tin.length > 11) {
    full_year = tin.slice(0, 4);
  } else {
    full_year = tin.slice(0, 2);

    if (tin.length === 11 && day < 60) {
      // Extract full year from centenarian symbol
      // Should work just fine until year 10000 or so
      var current_year = new Date().getFullYear().toString();
      var current_century = parseInt(current_year.slice(0, 2), 10);
      current_year = parseInt(current_year, 10);

      if (tin[6] === '-') {
        if (parseInt("".concat(current_century).concat(full_year), 10) > current_year) {
          full_year = "".concat(current_century - 1).concat(full_year);
        } else {
          full_year = "".concat(current_century).concat(full_year);
        }
      } else {
        full_year = "".concat(current_century - 1).concat(full_year);

        if (current_year - parseInt(full_year, 10) < 100) {
          return false;
        }
      }
    }
  } // Normalize day and check date validity


  if (day > 60) {
    day -= 60;
  }

  if (day < 10) {
    day = "0".concat(day);
  }

  var date = "".concat(full_year, "/").concat(month, "/").concat(day);

  if (date.length === 8) {
    if (!(0, _isDate.default)(date, 'YY/MM/DD')) {
      return false;
    }
  } else if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
    return false;
  }

  return algorithms.luhnCheck(tin.replace(/\W/, ''));
} // Locale lookup objects

/*
 * Tax id regex formats for various locales
 *
 * Where not explicitly specified in DG-TAXUD document both
 * uppercase and lowercase letters are acceptable.
 */


var taxIdFormat = {
  'bg-BG': /^\d{10}$/,
  'cs-CZ': /^\d{6}\/{0,1}\d{3,4}$/,
  'de-AT': /^\d{9}$/,
  'de-DE': /^[1-9]\d{10}$/,
  'dk-DK': /^\d{6}-{0,1}\d{4}$/,
  'el-CY': /^[09]\d{7}[A-Z]$/,
  'el-GR': /^([0-4]|[7-9])\d{8}$/,
  'en-GB': /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
  'en-IE': /^\d{7}[A-W][A-IW]{0,1}$/i,
  'en-US': /^\d{2}[- ]{0,1}\d{7}$/,
  'es-ES': /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
  'et-EE': /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
  'fi-FI': /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
  'fr-BE': /^\d{11}$/,
  'fr-FR': /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
  // Conforms both to official spec and provided example
  'fr-LU': /^\d{13}$/,
  'hr-HR': /^\d{11}$/,
  'hu-HU': /^8\d{9}$/,
  'it-IT': /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
  'lv-LV': /^\d{6}-{0,1}\d{5}$/,
  // Conforms both to DG TAXUD spec and original research
  'mt-MT': /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
  'nl-NL': /^\d{9}$/,
  'pl-PL': /^\d{10,11}$/,
  'pt-PT': /^\d{9}$/,
  'ro-RO': /^\d{13}$/,
  'sk-SK': /^\d{6}\/{0,1}\d{3,4}$/,
  'sl-SI': /^[1-9]\d{7}$/,
  'sv-SE': /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/
}; // taxIdFormat locale aliases

taxIdFormat['lb-LU'] = taxIdFormat['fr-LU'];
taxIdFormat['lt-LT'] = taxIdFormat['et-EE'];
taxIdFormat['nl-BE'] = taxIdFormat['fr-BE']; // Algorithmic tax id check functions for various locales

var taxIdCheck = {
  'bg-BG': bgBgCheck,
  'cs-CZ': csCzCheck,
  'de-AT': deAtCheck,
  'de-DE': deDeCheck,
  'dk-DK': dkDkCheck,
  'el-CY': elCyCheck,
  'el-GR': elGrCheck,
  'en-IE': enIeCheck,
  'en-US': enUsCheck,
  'es-ES': esEsCheck,
  'et-EE': etEeCheck,
  'fi-FI': fiFiCheck,
  'fr-BE': frBeCheck,
  'fr-FR': frFrCheck,
  'fr-LU': frLuCheck,
  'hr-HR': hrHrCheck,
  'hu-HU': huHuCheck,
  'it-IT': itItCheck,
  'lv-LV': lvLvCheck,
  'mt-MT': mtMtCheck,
  'nl-NL': nlNlCheck,
  'pl-PL': plPlCheck,
  'pt-PT': ptPtCheck,
  'ro-RO': roRoCheck,
  'sk-SK': skSkCheck,
  'sl-SI': slSiCheck,
  'sv-SE': svSeCheck
}; // taxIdCheck locale aliases

taxIdCheck['lb-LU'] = taxIdCheck['fr-LU'];
taxIdCheck['lt-LT'] = taxIdCheck['et-EE'];
taxIdCheck['nl-BE'] = taxIdCheck['fr-BE']; // Regexes for locales where characters should be omitted before checking format

var allsymbols = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
var sanitizeRegexes = {
  'de-AT': allsymbols,
  'de-DE': /[\/\\]/g,
  'fr-BE': allsymbols
}; // sanitizeRegexes locale aliases

sanitizeRegexes['nl-BE'] = sanitizeRegexes['fr-BE'];
/*
 * Validator function
 * Return true if the passed string is a valid tax identification number
 * for the specified locale.
 * Throw an error exception if the locale is not supported.
 */

function isTaxID(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  (0, _assertString.default)(str); // Copy TIN to avoid replacement if sanitized

  var strcopy = str.slice(0);

  if (locale in taxIdFormat) {
    if (locale in sanitizeRegexes) {
      strcopy = strcopy.replace(sanitizeRegexes[locale], '');
    }

    if (!taxIdFormat[locale].test(strcopy)) {
      return false;
    }

    if (locale in taxIdCheck) {
      return taxIdCheck[locale](strcopy);
    } // Fallthrough; not all locales have algorithmic checks


    return true;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isURL.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isURL.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./isFQDN */ "./node_modules/validator/lib/isFQDN.js"));

var _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ "./node_modules/validator/lib/isIP.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
options for isURL method

require_protocol - if set as true isURL will return false if protocol is not present in the URL
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
protocols - valid protocols can be modified with this option
require_host - if set as false isURL will not check if host is present in the URL
require_port - if set as true isURL will check if port is present in the URL
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
validate_length - if set as false isURL will skip string length validation (IE maximum is 2083)

*/
var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_port: false,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false,
  validate_length: true
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];

    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }

  return false;
}

function isURL(url, options) {
  (0, _assertString.default)(url);

  if (!url || /[\s<>]/.test(url)) {
    return false;
  }

  if (url.indexOf('mailto:') === 0) {
    return false;
  }

  options = (0, _merge.default)(options, default_url_options);

  if (options.validate_length && url.length >= 2083) {
    return false;
  }

  var protocol, auth, host, hostname, port, port_str, split, ipv6;
  split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();
  split = url.split('://');

  if (split.length > 1) {
    protocol = split.shift().toLowerCase();

    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (url.substr(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }

    split[0] = url.substr(2);
  }

  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');

  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }

    auth = split.shift();

    if (auth.indexOf(':') === -1 || auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }

  hostname = split.join('@');
  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);

  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();

    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);

    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  } else if (options.require_port) {
    return false;
  }

  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }

  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isUUID.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isUUID.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUUID;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
  (0, _assertString.default)(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isUppercase.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isUppercase.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUppercase;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUppercase(str) {
  (0, _assertString.default)(str);
  return str === str.toUpperCase();
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isVAT.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isVAT.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVAT;
exports.vatMatchers = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vatMatchers = {
  GB: /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/
};
exports.vatMatchers = vatMatchers;

function isVAT(str, countryCode) {
  (0, _assertString.default)(str);
  (0, _assertString.default)(countryCode);

  if (countryCode in vatMatchers) {
    return vatMatchers[countryCode].test(str);
  }

  throw new Error("Invalid country code: '".concat(countryCode, "'"));
}

/***/ }),

/***/ "./node_modules/validator/lib/isVariableWidth.js":
/*!*******************************************************!*\
  !*** ./node_modules/validator/lib/isVariableWidth.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _isFullWidth = __webpack_require__(/*! ./isFullWidth */ "./node_modules/validator/lib/isFullWidth.js");

var _isHalfWidth = __webpack_require__(/*! ./isHalfWidth */ "./node_modules/validator/lib/isHalfWidth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVariableWidth(str) {
  (0, _assertString.default)(str);
  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isWhitelisted.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isWhitelisted.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhitelisted;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWhitelisted(str, chars) {
  (0, _assertString.default)(str);

  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/ltrim.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/ltrim.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ltrim(str, chars) {
  (0, _assertString.default)(str); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping

  var pattern = chars ? new RegExp("^[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "]+"), 'g') : /^\s+/g;
  return str.replace(pattern, '');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/matches.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/matches.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matches(str, pattern, modifiers) {
  (0, _assertString.default)(str);

  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }

  return pattern.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/normalizeEmail.js":
/*!******************************************************!*\
  !*** ./node_modules/validator/lib/normalizeEmail.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeEmail;

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_normalize_email_options = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  all_lowercase: true,
  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmail_lowercase: true,
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmail_remove_dots: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  gmail_remove_subaddress: true,
  // Conversts the googlemail.com domain to gmail.com
  gmail_convert_googlemaildotcom: true,
  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcom_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcom_remove_subaddress: true,
  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahoo_lowercase: true,
  // Removes the subaddress (e.g. "-foo") from the email address
  yahoo_remove_subaddress: true,
  // The following conversions are specific to Yandex
  // Lowercases the local part of the Yandex address (known to be case-insensitive)
  yandex_lowercase: true,
  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloud_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  icloud_remove_subaddress: true
}; // List of domains used by iCloud

var icloud_domains = ['icloud.com', 'me.com']; // List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/

var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com']; // List of domains used by Yahoo Mail
// This list is likely incomplete

var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com']; // List of domains used by yandex.ru

var yandex_domains = ['yandex.ru', 'yandex.ua', 'yandex.kz', 'yandex.com', 'yandex.by', 'ya.ru']; // replace single dots, but not multiple consecutive dots

function dotsReplacer(match) {
  if (match.length > 1) {
    return match;
  }

  return '';
}

function normalizeEmail(email, options) {
  options = (0, _merge.default)(options, default_normalize_email_options);
  var raw_parts = email.split('@');
  var domain = raw_parts.pop();
  var user = raw_parts.join('@');
  var parts = [user, domain]; // The domain is always lowercased, as it's case-insensitive per RFC 1035

  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmail_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (options.gmail_remove_dots) {
      // this does not replace consecutive dots like example..email@gmail.com
      parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.gmail_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }

    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
  } else if (icloud_domains.indexOf(parts[1]) >= 0) {
    // Address is iCloud
    if (options.icloud_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.icloud_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
    // Address is Outlook.com
    if (options.outlookdotcom_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.outlookdotcom_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
    // Address is Yahoo
    if (options.yahoo_remove_subaddress) {
      var components = parts[0].split('-');
      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.yahoo_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yandex_domains.indexOf(parts[1]) >= 0) {
    if (options.all_lowercase || options.yandex_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }

    parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preferred
  } else if (options.all_lowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }

  return parts.join('@');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/rtrim.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/rtrim.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rtrim(str, chars) {
  (0, _assertString.default)(str); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping

  var pattern = chars ? new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "]+$"), 'g') : /\s+$/g;
  return str.replace(pattern, '');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/stripLow.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/stripLow.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _blacklist = _interopRequireDefault(__webpack_require__(/*! ./blacklist */ "./node_modules/validator/lib/blacklist.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripLow(str, keep_new_lines) {
  (0, _assertString.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist.default)(str, chars);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/toBoolean.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/toBoolean.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBoolean(str, strict) {
  (0, _assertString.default)(str);

  if (strict) {
    return str === '1' || /^true$/i.test(str);
  }

  return str !== '0' && !/^false$/i.test(str) && str !== '';
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/toDate.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/toDate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toDate(date) {
  (0, _assertString.default)(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/toFloat.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/toFloat.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFloat;

var _isFloat = _interopRequireDefault(__webpack_require__(/*! ./isFloat */ "./node_modules/validator/lib/isFloat.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFloat(str) {
  if (!(0, _isFloat.default)(str)) return NaN;
  return parseFloat(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/toInt.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/toInt.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(str, radix) {
  (0, _assertString.default)(str);
  return parseInt(str, radix || 10);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/trim.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/trim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = _interopRequireDefault(__webpack_require__(/*! ./rtrim */ "./node_modules/validator/lib/rtrim.js"));

var _ltrim = _interopRequireDefault(__webpack_require__(/*! ./ltrim */ "./node_modules/validator/lib/ltrim.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(str, chars) {
  return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/unescape.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/unescape.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unescape;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unescape(str) {
  (0, _assertString.default)(str);
  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/util/algorithms.js":
/*!*******************************************************!*\
  !*** ./node_modules/validator/lib/util/algorithms.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iso7064Check = iso7064Check;
exports.luhnCheck = luhnCheck;
exports.reverseMultiplyAndSum = reverseMultiplyAndSum;
exports.verhoeffCheck = verhoeffCheck;

/**
 * Algorithmic validation functions
 * May be used as is or implemented in the workflow of other validators.
 */

/*
 * ISO 7064 validation function
 * Called with a string of numbers (incl. check digit)
 * to validate according to ISO 7064 (MOD 11, 10).
 */
function iso7064Check(str) {
  var checkvalue = 10;

  for (var i = 0; i < str.length - 1; i++) {
    checkvalue = (parseInt(str[i], 10) + checkvalue) % 10 === 0 ? 10 * 2 % 11 : (parseInt(str[i], 10) + checkvalue) % 10 * 2 % 11;
  }

  checkvalue = checkvalue === 1 ? 0 : 11 - checkvalue;
  return checkvalue === parseInt(str[10], 10);
}
/*
 * Luhn (mod 10) validation function
 * Called with a string of numbers (incl. check digit)
 * to validate according to the Luhn algorithm.
 */


function luhnCheck(str) {
  var checksum = 0;
  var second = false;

  for (var i = str.length - 1; i >= 0; i--) {
    if (second) {
      var product = parseInt(str[i], 10) * 2;

      if (product > 9) {
        // sum digits of product and add to checksum
        checksum += product.toString().split('').map(function (a) {
          return parseInt(a, 10);
        }).reduce(function (a, b) {
          return a + b;
        }, 0);
      } else {
        checksum += product;
      }
    } else {
      checksum += parseInt(str[i], 10);
    }

    second = !second;
  }

  return checksum % 10 === 0;
}
/*
 * Reverse TIN multiplication and summation helper function
 * Called with an array of single-digit integers and a base multiplier
 * to calculate the sum of the digits multiplied in reverse.
 * Normally used in variations of MOD 11 algorithmic checks.
 */


function reverseMultiplyAndSum(digits, base) {
  var total = 0;

  for (var i = 0; i < digits.length; i++) {
    total += digits[i] * (base - i);
  }

  return total;
}
/*
 * Verhoeff validation helper function
 * Called with a string of numbers
 * to validate according to the Verhoeff algorithm.
 */


function verhoeffCheck(str) {
  var d_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
  var p_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]]; // Copy (to prevent replacement) and reverse

  var str_copy = str.split('').reverse().join('');
  var checksum = 0;

  for (var i = 0; i < str_copy.length; i++) {
    checksum = d_table[checksum][p_table[i % 8][parseInt(str_copy[i], 10)]];
  }

  return checksum === 0;
}

/***/ }),

/***/ "./node_modules/validator/lib/util/assertString.js":
/*!*********************************************************!*\
  !*** ./node_modules/validator/lib/util/assertString.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    var invalidType = _typeof(input);

    if (input === null) invalidType = 'null';else if (invalidType === 'object') invalidType = input.constructor.name;
    throw new TypeError("Expected a string but received a ".concat(invalidType));
  }
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/util/includes.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/util/includes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var includes = function includes(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
};

var _default = includes;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/util/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/util/merge.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }

  return obj;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/util/multilineRegex.js":
/*!***********************************************************!*\
  !*** ./node_modules/validator/lib/util/multilineRegex.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = multilineRegexp;

/**
 * Build RegExp object from an array
 * of multiple/multi-line regexp parts
 *
 * @param {string[]} parts
 * @param {string} flags
 * @return {object} - RegExp object
 */
function multilineRegexp(parts, flags) {
  var regexpAsStringLiteral = parts.join('');
  return new RegExp(regexpAsStringLiteral, flags);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/util/toString.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/util/toString.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toString;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function toString(input) {
  if (_typeof(input) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }

  return String(input);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/whitelist.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/whitelist.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whitelist;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whitelist(str, chars) {
  (0, _assertString.default)(str);
  return str.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2FscGhhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2JsYWNrbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNBbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0FscGhhbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0FzY2lpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQklDLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQmFzZTMyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQmFzZTU4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQmFzZTY0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQmVmb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQm9vbGVhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0J0Y0FkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNCeXRlTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQ3JlZGl0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0N1cnJlbmN5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRGF0YVVSSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNEZWNpbWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRGl2aXNpYmxlQnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNFQU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNFbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRXRoZXJldW1BZGRyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRlFETi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0Zsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRnVsbFdpZHRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSFNMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSGFsZldpZHRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0hleENvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSGV4YWRlY2ltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJQkFOLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSU1FSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lQLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVBSYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lTQk4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJU0lOLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNPMzE2NjFBbHBoYTIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJU08zMTY2MUFscGhhMy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lTTzg2MDEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJU1JDLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNTTi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lkZW50aXR5Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSlNPTi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0pXVC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0xhdExvbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNMb2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNMb3dlcmNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNNQUNBZGRyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTUQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTWFnbmV0VVJJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTWltZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNNb2JpbGVQaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc01vbmdvSWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNNdWx0aWJ5dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNOdW1lcmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzT2N0YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNQYXNzcG9ydE51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNQb3N0YWxDb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzUkZDMzMzOS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1JnYkNvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzU2VtVmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzU2x1Zy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1N0cm9uZ1Bhc3N3b3JkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzU3Vycm9nYXRlUGFpci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1RheElELmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzVVVJRC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1VwcGVyY2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1ZBVC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1ZhcmlhYmxlV2lkdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNXaGl0ZWxpc3RlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9sdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9tYXRjaGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL25vcm1hbGl6ZUVtYWlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3J0cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3N0cmlwTG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3RvQm9vbGVhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi90b0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdG9GbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi90b0ludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi90cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3VuZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3V0aWwvYWxnb3JpdGhtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi91dGlsL2Fzc2VydFN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi91dGlsL2luY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3V0aWwvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdXRpbC9tdWx0aWxpbmVSZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi91dGlsL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3doaXRlbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsdUJBQXVCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRXhYO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEscUNBQXFDLG1CQUFPLENBQUMsNERBQWM7O0FBRTNELHNDQUFzQyxtQkFBTyxDQUFDLDhEQUFlOztBQUU3RCxvQ0FBb0MsbUJBQU8sQ0FBQywwREFBYTs7QUFFekQsd0NBQXdDLG1CQUFPLENBQUMsa0VBQWlCOztBQUVqRSxxQ0FBcUMsbUJBQU8sQ0FBQyw0REFBYzs7QUFFM0QsdUNBQXVDLG1CQUFPLENBQUMsZ0VBQWdCOztBQUUvRCxzQ0FBc0MsbUJBQU8sQ0FBQyw4REFBZTs7QUFFN0Qsc0NBQXNDLG1CQUFPLENBQUMsOERBQWU7O0FBRTdELG9DQUFvQyxtQkFBTyxDQUFDLDBEQUFhOztBQUV6RCwyQ0FBMkMsbUJBQU8sQ0FBQyx3RUFBb0I7O0FBRXZFLG1DQUFtQyxtQkFBTyxDQUFDLHdEQUFZOztBQUV2RCx3Q0FBd0MsbUJBQU8sQ0FBQyxrRUFBaUI7O0FBRWpFLHFDQUFxQyxtQkFBTyxDQUFDLDREQUFjOztBQUUzRCxxQ0FBcUMsbUJBQU8sQ0FBQyw0REFBYzs7QUFFM0Qsd0NBQXdDLG1CQUFPLENBQUMsa0VBQWlCOztBQUVqRSx1Q0FBdUMsbUJBQU8sQ0FBQyxnRUFBZ0I7O0FBRS9ELHVDQUF1QyxtQkFBTyxDQUFDLDhEQUFlOztBQUU5RCw4Q0FBOEMsbUJBQU8sQ0FBQyw0RUFBc0I7O0FBRTVFLHdDQUF3QyxtQkFBTyxDQUFDLGtFQUFpQjs7QUFFakUsK0NBQStDLG1CQUFPLENBQUMsZ0ZBQXdCOztBQUUvRSxxQ0FBcUMsbUJBQU8sQ0FBQyw0REFBYzs7QUFFM0QsMENBQTBDLG1CQUFPLENBQUMs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Qzs7Ozs7Ozs7Ozs7O0FDN1NhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBLHlCQUF5QiwyQkFBMkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlC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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQ0FBcUM7QUFDckMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlCQUFpQjs7QUFFakIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFVBQVU7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7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RztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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TDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlDOzs7Ozs7Ozs7Ozs7QUN4QmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSwyQ0FBMkMsbUJBQU8sQ0FBQyw4RUFBcUI7O0FBRXhFLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDIiwiZmlsZSI6IjEubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdG9EYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvdG9EYXRlXCIpKTtcblxudmFyIF90b0Zsb2F0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvdG9GbG9hdFwiKSk7XG5cbnZhciBfdG9JbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi90b0ludFwiKSk7XG5cbnZhciBfdG9Cb29sZWFuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvdG9Cb29sZWFuXCIpKTtcblxudmFyIF9lcXVhbHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9lcXVhbHNcIikpO1xuXG52YXIgX2NvbnRhaW5zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvY29udGFpbnNcIikpO1xuXG52YXIgX21hdGNoZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9tYXRjaGVzXCIpKTtcblxudmFyIF9pc0VtYWlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNFbWFpbFwiKSk7XG5cbnZhciBfaXNVUkwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1VSTFwiKSk7XG5cbnZhciBfaXNNQUNBZGRyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNNQUNBZGRyZXNzXCIpKTtcblxudmFyIF9pc0lQID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNJUFwiKSk7XG5cbnZhciBfaXNJUFJhbmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNJUFJhbmdlXCIpKTtcblxudmFyIF9pc0ZRRE4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0ZRRE5cIikpO1xuXG52YXIgX2lzRGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzRGF0ZVwiKSk7XG5cbnZhciBfaXNCb29sZWFuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNCb29sZWFuXCIpKTtcblxudmFyIF9pc0xvY2FsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzTG9jYWxlXCIpKTtcblxudmFyIF9pc0FscGhhID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vbGliL2lzQWxwaGFcIikpO1xuXG52YXIgX2lzQWxwaGFudW1lcmljID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vbGliL2lzQWxwaGFudW1lcmljXCIpKTtcblxudmFyIF9pc051bWVyaWMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc051bWVyaWNcIikpO1xuXG52YXIgX2lzUGFzc3BvcnROdW1iZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1Bhc3Nwb3J0TnVtYmVyXCIpKTtcblxudmFyIF9pc1BvcnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1BvcnRcIikpO1xuXG52YXIgX2lzTG93ZXJjYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNMb3dlcmNhc2VcIikpO1xuXG52YXIgX2lzVXBwZXJjYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNVcHBlcmNhc2VcIikpO1xuXG52YXIgX2lzSU1FSSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSU1FSVwiKSk7XG5cbnZhciBfaXNBc2NpaSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzQXNjaWlcIikpO1xuXG52YXIgX2lzRnVsbFdpZHRoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNGdWxsV2lkdGhcIikpO1xuXG52YXIgX2lzSGFsZldpZHRoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNIYWxmV2lkdGhcIikpO1xuXG52YXIgX2lzVmFyaWFibGVXaWR0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzVmFyaWFibGVXaWR0aFwiKSk7XG5cbnZhciBfaXNNdWx0aWJ5dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc011bHRpYnl0ZVwiKSk7XG5cbnZhciBfaXNTZW1WZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1NlbVZlclwiKSk7XG5cbnZhciBfaXNTdXJyb2dhdGVQYWlyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNTdXJyb2dhdGVQYWlyXCIpKTtcblxudmFyIF9pc0ludCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSW50XCIpKTtcblxudmFyIF9pc0Zsb2F0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vbGliL2lzRmxvYXRcIikpO1xuXG52YXIgX2lzRGVjaW1hbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzRGVjaW1hbFwiKSk7XG5cbnZhciBfaXNIZXhhZGVjaW1hbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSGV4YWRlY2ltYWxcIikpO1xuXG52YXIgX2lzT2N0YWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc09jdGFsXCIpKTtcblxudmFyIF9pc0RpdmlzaWJsZUJ5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNEaXZpc2libGVCeVwiKSk7XG5cbnZhciBfaXNIZXhDb2xvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSGV4Q29sb3JcIikpO1xuXG52YXIgX2lzUmdiQ29sb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1JnYkNvbG9yXCIpKTtcblxudmFyIF9pc0hTTCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSFNMXCIpKTtcblxudmFyIF9pc0lTUkMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lTUkNcIikpO1xuXG52YXIgX2lzSUJBTiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSUJBTlwiKSk7XG5cbnZhciBfaXNCSUMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0JJQ1wiKSk7XG5cbnZhciBfaXNNRCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzTUQ1XCIpKTtcblxudmFyIF9pc0hhc2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0hhc2hcIikpO1xuXG52YXIgX2lzSldUID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNKV1RcIikpO1xuXG52YXIgX2lzSlNPTiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSlNPTlwiKSk7XG5cbnZhciBfaXNFbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzRW1wdHlcIikpO1xuXG52YXIgX2lzTGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNMZW5ndGhcIikpO1xuXG52YXIgX2lzQnl0ZUxlbmd0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzQnl0ZUxlbmd0aFwiKSk7XG5cbnZhciBfaXNVVUlEID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNVVUlEXCIpKTtcblxudmFyIF9pc01vbmdvSWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc01vbmdvSWRcIikpO1xuXG52YXIgX2lzQWZ0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0FmdGVyXCIpKTtcblxudmFyIF9pc0JlZm9yZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzQmVmb3JlXCIpKTtcblxudmFyIF9pc0luID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNJblwiKSk7XG5cbnZhciBfaXNDcmVkaXRDYXJkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNDcmVkaXRDYXJkXCIpKTtcblxudmFyIF9pc0lkZW50aXR5Q2FyZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSWRlbnRpdHlDYXJkXCIpKTtcblxudmFyIF9pc0VBTiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzRUFOXCIpKTtcblxudmFyIF9pc0lTSU4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lTSU5cIikpO1xuXG52YXIgX2lzSVNCTiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSVNCTlwiKSk7XG5cbnZhciBfaXNJU1NOID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNJU1NOXCIpKTtcblxudmFyIF9pc1RheElEID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNUYXhJRFwiKSk7XG5cbnZhciBfaXNNb2JpbGVQaG9uZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2xpYi9pc01vYmlsZVBob25lXCIpKTtcblxudmFyIF9pc0V0aGVyZXVtQWRkcmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzRXRoZXJldW1BZGRyZXNzXCIpKTtcblxudmFyIF9pc0N1cnJlbmN5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNDdXJyZW5jeVwiKSk7XG5cbnZhciBfaXNCdGNBZGRyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNCdGNBZGRyZXNzXCIpKTtcblxudmFyIF9pc0lTTyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSVNPODYwMVwiKSk7XG5cbnZhciBfaXNSRkMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1JGQzMzMzlcIikpO1xuXG52YXIgX2lzSVNPMzE2NjFBbHBoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSVNPMzE2NjFBbHBoYTJcIikpO1xuXG52YXIgX2lzSVNPMzE2NjFBbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lTTzMxNjYxQWxwaGEzXCIpKTtcblxudmFyIF9pc0Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0Jhc2UzMlwiKSk7XG5cbnZhciBfaXNCYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzQmFzZTU4XCIpKTtcblxudmFyIF9pc0Jhc2UzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNCYXNlNjRcIikpO1xuXG52YXIgX2lzRGF0YVVSSSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzRGF0YVVSSVwiKSk7XG5cbnZhciBfaXNNYWduZXRVUkkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc01hZ25ldFVSSVwiKSk7XG5cbnZhciBfaXNNaW1lVHlwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzTWltZVR5cGVcIikpO1xuXG52YXIgX2lzTGF0TG9uZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzTGF0TG9uZ1wiKSk7XG5cbnZhciBfaXNQb3N0YWxDb2RlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vbGliL2lzUG9zdGFsQ29kZVwiKSk7XG5cbnZhciBfbHRyaW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9sdHJpbVwiKSk7XG5cbnZhciBfcnRyaW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9ydHJpbVwiKSk7XG5cbnZhciBfdHJpbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3RyaW1cIikpO1xuXG52YXIgX2VzY2FwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2VzY2FwZVwiKSk7XG5cbnZhciBfdW5lc2NhcGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi91bmVzY2FwZVwiKSk7XG5cbnZhciBfc3RyaXBMb3cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9zdHJpcExvd1wiKSk7XG5cbnZhciBfd2hpdGVsaXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvd2hpdGVsaXN0XCIpKTtcblxudmFyIF9ibGFja2xpc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9ibGFja2xpc3RcIikpO1xuXG52YXIgX2lzV2hpdGVsaXN0ZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1doaXRlbGlzdGVkXCIpKTtcblxudmFyIF9ub3JtYWxpemVFbWFpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL25vcm1hbGl6ZUVtYWlsXCIpKTtcblxudmFyIF9pc1NsdWcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1NsdWdcIikpO1xuXG52YXIgX2lzU3Ryb25nUGFzc3dvcmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1N0cm9uZ1Bhc3N3b3JkXCIpKTtcblxudmFyIF9pc1ZBVCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzVkFUXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZlcnNpb24gPSAnMTMuNS4yJztcbnZhciB2YWxpZGF0b3IgPSB7XG4gIHZlcnNpb246IHZlcnNpb24sXG4gIHRvRGF0ZTogX3RvRGF0ZS5kZWZhdWx0LFxuICB0b0Zsb2F0OiBfdG9GbG9hdC5kZWZhdWx0LFxuICB0b0ludDogX3RvSW50LmRlZmF1bHQsXG4gIHRvQm9vbGVhbjogX3RvQm9vbGVhbi5kZWZhdWx0LFxuICBlcXVhbHM6IF9lcXVhbHMuZGVmYXVsdCxcbiAgY29udGFpbnM6IF9jb250YWlucy5kZWZhdWx0LFxuICBtYXRjaGVzOiBfbWF0Y2hlcy5kZWZhdWx0LFxuICBpc0VtYWlsOiBfaXNFbWFpbC5kZWZhdWx0LFxuICBpc1VSTDogX2lzVVJMLmRlZmF1bHQsXG4gIGlzTUFDQWRkcmVzczogX2lzTUFDQWRkcmVzcy5kZWZhdWx0LFxuICBpc0lQOiBfaXNJUC5kZWZhdWx0LFxuICBpc0lQUmFuZ2U6IF9pc0lQUmFuZ2UuZGVmYXVsdCxcbiAgaXNGUUROOiBfaXNGUUROLmRlZmF1bHQsXG4gIGlzQm9vbGVhbjogX2lzQm9vbGVhbi5kZWZhdWx0LFxuICBpc0lCQU46IF9pc0lCQU4uZGVmYXVsdCxcbiAgaXNCSUM6IF9pc0JJQy5kZWZhdWx0LFxuICBpc0FscGhhOiBfaXNBbHBoYS5kZWZhdWx0LFxuICBpc0FscGhhTG9jYWxlczogX2lzQWxwaGEubG9jYWxlcyxcbiAgaXNBbHBoYW51bWVyaWM6IF9pc0FscGhhbnVtZXJpYy5kZWZhdWx0LFxuICBpc0FscGhhbnVtZXJpY0xvY2FsZXM6IF9pc0FscGhhbnVtZXJpYy5sb2NhbGVzLFxuICBpc051bWVyaWM6IF9pc051bWVyaWMuZGVmYXVsdCxcbiAgaXNQYXNzcG9ydE51bWJlcjogX2lzUGFzc3BvcnROdW1iZXIuZGVmYXVsdCxcbiAgaXNQb3J0OiBfaXNQb3J0LmRlZmF1bHQsXG4gIGlzTG93ZXJjYXNlOiBfaXNMb3dlcmNhc2UuZGVmYXVsdCxcbiAgaXNVcHBlcmNhc2U6IF9pc1VwcGVyY2FzZS5kZWZhdWx0LFxuICBpc0FzY2lpOiBfaXNBc2NpaS5kZWZhdWx0LFxuICBpc0Z1bGxXaWR0aDogX2lzRnVsbFdpZHRoLmRlZmF1bHQsXG4gIGlzSGFsZldpZHRoOiBfaXNIYWxmV2lkdGguZGVmYXVsdCxcbiAgaXNWYXJpYWJsZVdpZHRoOiBfaXNWYXJpYWJsZVdpZHRoLmRlZmF1bHQsXG4gIGlzTXVsdGlieXRlOiBfaXNNdWx0aWJ5dGUuZGVmYXVsdCxcbiAgaXNTZW1WZXI6IF9pc1NlbVZlci5kZWZhdWx0LFxuICBpc1N1cnJvZ2F0ZVBhaXI6IF9pc1N1cnJvZ2F0ZVBhaXIuZGVmYXVsdCxcbiAgaXNJbnQ6IF9pc0ludC5kZWZhdWx0LFxuICBpc0lNRUk6IF9pc0lNRUkuZGVmYXVsdCxcbiAgaXNGbG9hdDogX2lzRmxvYXQuZGVmYXVsdCxcbiAgaXNGbG9hdExvY2FsZXM6IF9pc0Zsb2F0LmxvY2FsZXMsXG4gIGlzRGVjaW1hbDogX2lzRGVjaW1hbC5kZWZhdWx0LFxuICBpc0hleGFkZWNpbWFsOiBfaXNIZXhhZGVjaW1hbC5kZWZhdWx0LFxuICBpc09jdGFsOiBfaXNPY3RhbC5kZWZhdWx0LFxuICBpc0RpdmlzaWJsZUJ5OiBfaXNEaXZpc2libGVCeS5kZWZhdWx0LFxuICBpc0hleENvbG9yOiBfaXNIZXhDb2xvci5kZWZhdWx0LFxuICBpc1JnYkNvbG9yOiBfaXNSZ2JDb2xvci5kZWZhdWx0LFxuICBpc0hTTDogX2lzSFNMLmRlZmF1bHQsXG4gIGlzSVNSQzogX2lzSVNSQy5kZWZhdWx0LFxuICBpc01ENTogX2lzTUQuZGVmYXVsdCxcbiAgaXNIYXNoOiBfaXNIYXNoLmRlZmF1bHQsXG4gIGlzSldUOiBfaXNKV1QuZGVmYXVsdCxcbiAgaXNKU09OOiBfaXNKU09OLmRlZmF1bHQsXG4gIGlzRW1wdHk6IF9pc0VtcHR5LmRlZmF1bHQsXG4gIGlzTGVuZ3RoOiBfaXNMZW5ndGguZGVmYXVsdCxcbiAgaXNMb2NhbGU6IF9pc0xvY2FsZS5kZWZhdWx0LFxuICBpc0J5dGVMZW5ndGg6IF9pc0J5dGVMZW5ndGguZGVmYXVsdCxcbiAgaXNVVUlEOiBfaXNVVUlELmRlZmF1bHQsXG4gIGlzTW9uZ29JZDogX2lzTW9uZ29JZC5kZWZhdWx0LFxuICBpc0FmdGVyOiBfaXNBZnRlci5kZWZhdWx0LFxuICBpc0JlZm9yZTogX2lzQmVmb3JlLmRlZmF1bHQsXG4gIGlzSW46IF9pc0luLmRlZmF1bHQsXG4gIGlzQ3JlZGl0Q2FyZDogX2lzQ3JlZGl0Q2FyZC5kZWZhdWx0LFxuICBpc0lkZW50aXR5Q2FyZDogX2lzSWRlbnRpdHlDYXJkLmRlZmF1bHQsXG4gIGlzRUFOOiBfaXNFQU4uZGVmYXVsdCxcbiAgaXNJU0lOOiBfaXNJU0lOLmRlZmF1bHQsXG4gIGlzSVNCTjogX2lzSVNCTi5kZWZhdWx0LFxuICBpc0lTU046IF9pc0lTU04uZGVmYXVsdCxcbiAgaXNNb2JpbGVQaG9uZTogX2lzTW9iaWxlUGhvbmUuZGVmYXVsdCxcbiAgaXNNb2JpbGVQaG9uZUxvY2FsZXM6IF9pc01vYmlsZVBob25lLmxvY2FsZXMsXG4gIGlzUG9zdGFsQ29kZTogX2lzUG9zdGFsQ29kZS5kZWZhdWx0LFxuICBpc1Bvc3RhbENvZGVMb2NhbGVzOiBfaXNQb3N0YWxDb2RlLmxvY2FsZXMsXG4gIGlzRXRoZXJldW1BZGRyZXNzOiBfaXNFdGhlcmV1bUFkZHJlc3MuZGVmYXVsdCxcbiAgaXNDdXJyZW5jeTogX2lzQ3VycmVuY3kuZGVmYXVsdCxcbiAgaXNCdGNBZGRyZXNzOiBfaXNCdGNBZGRyZXNzLmRlZmF1bHQsXG4gIGlzSVNPODYwMTogX2lzSVNPLmRlZmF1bHQsXG4gIGlzUkZDMzMzOTogX2lzUkZDLmRlZmF1bHQsXG4gIGlzSVNPMzE2NjFBbHBoYTI6IF9pc0lTTzMxNjYxQWxwaGEuZGVmYXVsdCxcbiAgaXNJU08zMTY2MUFscGhhMzogX2lzSVNPMzE2NjFBbHBoYTIuZGVmYXVsdCxcbiAgaXNCYXNlMzI6IF9pc0Jhc2UuZGVmYXVsdCxcbiAgaXNCYXNlNTg6IF9pc0Jhc2UyLmRlZmF1bHQsXG4gIGlzQmFzZTY0OiBfaXNCYXNlMy5kZWZhdWx0LFxuICBpc0RhdGFVUkk6IF9pc0RhdGFVUkkuZGVmYXVsdCxcbiAgaXNNYWduZXRVUkk6IF9pc01hZ25ldFVSSS5kZWZhdWx0LFxuICBpc01pbWVUeXBlOiBfaXNNaW1lVHlwZS5kZWZhdWx0LFxuICBpc0xhdExvbmc6IF9pc0xhdExvbmcuZGVmYXVsdCxcbiAgbHRyaW06IF9sdHJpbS5kZWZhdWx0LFxuICBydHJpbTogX3J0cmltLmRlZmF1bHQsXG4gIHRyaW06IF90cmltLmRlZmF1bHQsXG4gIGVzY2FwZTogX2VzY2FwZS5kZWZhdWx0LFxuICB1bmVzY2FwZTogX3VuZXNjYXBlLmRlZmF1bHQsXG4gIHN0cmlwTG93OiBfc3RyaXBMb3cuZGVmYXVsdCxcbiAgd2hpdGVsaXN0OiBfd2hpdGVsaXN0LmRlZmF1bHQsXG4gIGJsYWNrbGlzdDogX2JsYWNrbGlzdC5kZWZhdWx0LFxuICBpc1doaXRlbGlzdGVkOiBfaXNXaGl0ZWxpc3RlZC5kZWZhdWx0LFxuICBub3JtYWxpemVFbWFpbDogX25vcm1hbGl6ZUVtYWlsLmRlZmF1bHQsXG4gIHRvU3RyaW5nOiB0b1N0cmluZyxcbiAgaXNTbHVnOiBfaXNTbHVnLmRlZmF1bHQsXG4gIGlzU3Ryb25nUGFzc3dvcmQ6IF9pc1N0cm9uZ1Bhc3N3b3JkLmRlZmF1bHQsXG4gIGlzVGF4SUQ6IF9pc1RheElELmRlZmF1bHQsXG4gIGlzRGF0ZTogX2lzRGF0ZS5kZWZhdWx0LFxuICBpc1ZBVDogX2lzVkFULmRlZmF1bHRcbn07XG52YXIgX2RlZmF1bHQgPSB2YWxpZGF0b3I7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29tbWFEZWNpbWFsID0gZXhwb3J0cy5kb3REZWNpbWFsID0gZXhwb3J0cy5mYXJzaUxvY2FsZXMgPSBleHBvcnRzLmFyYWJpY0xvY2FsZXMgPSBleHBvcnRzLmVuZ2xpc2hMb2NhbGVzID0gZXhwb3J0cy5kZWNpbWFsID0gZXhwb3J0cy5hbHBoYW51bWVyaWMgPSBleHBvcnRzLmFscGhhID0gdm9pZCAwO1xudmFyIGFscGhhID0ge1xuICAnZW4tVVMnOiAvXltBLVpdKyQvaSxcbiAgJ2F6LUFaJzogL15bQS1WWFlaw4fGj8SexLDEscOWxZ7DnF0rJC9pLFxuICAnYmctQkcnOiAvXlvQkC3Qr10rJC9pLFxuICAnY3MtQ1onOiAvXltBLVrDgcSMxI7DicSaw43Fh8OTxZjFoMWkw5rFrsOdxb1dKyQvaSxcbiAgJ2RhLURLJzogL15bQS1aw4bDmMOFXSskL2ksXG4gICdkZS1ERSc6IC9eW0EtWsOEw5bDnMOfXSskL2ksXG4gICdlbC1HUic6IC9eW86RLc+OXSskL2ksXG4gICdlcy1FUyc6IC9eW0EtWsOBw4nDjcORw5PDmsOcXSskL2ksXG4gICdmYS1JUic6IC9eW9in2KjZvtiq2KvYrNqG2K3Yrtiv2LDYsdiy2pjYs9i02LXYtti32LjYudi62YHZgtqp2q/ZhNmF2YbZiNmH24xdKyQvaSxcbiAgJ2ZyLUZSJzogL15bQS1aw4DDgsOGw4fDicOIw4rDi8OPw47DlMWSw5nDm8OcxbhdKyQvaSxcbiAgJ2l0LUlUJzogL15bQS1aw4DDicOIw4zDjsOTw5LDmV0rJC9pLFxuICAnbmItTk8nOiAvXltBLVrDhsOYw4VdKyQvaSxcbiAgJ25sLU5MJzogL15bQS1aw4HDicOLw4/Dk8OWw5zDml0rJC9pLFxuICAnbm4tTk8nOiAvXltBLVrDhsOYw4VdKyQvaSxcbiAgJ2h1LUhVJzogL15bQS1aw4HDicONw5PDlsWQw5rDnMWwXSskL2ksXG4gICdwbC1QTCc6IC9eW0EtWsSExIbEmMWaxYHFg8OTxbvFuV0rJC9pLFxuICAncHQtUFQnOiAvXltBLVrDg8OBw4DDgsOEw4fDicOKw4vDjcOPw5XDk8OUw5bDmsOcXSskL2ksXG4gICdydS1SVSc6IC9eW9CQLdCv0IFdKyQvaSxcbiAgJ3NsLVNJJzogL15bQS1axIzEhsSQxaDFvV0rJC9pLFxuICAnc2stU0snOiAvXltBLVrDgcSMxI7DicONxYfDk8WgxaTDmsOdxb3EucWUxL3DhMOUXSskL2ksXG4gICdzci1SU0BsYXRpbic6IC9eW0EtWsSMxIbFvcWgxJBdKyQvaSxcbiAgJ3NyLVJTJzogL15b0JAt0K/QgtCI0InQitCL0I9dKyQvaSxcbiAgJ3N2LVNFJzogL15bQS1aw4XDhMOWXSskL2ksXG4gICd0aC1USCc6IC9eW+C4gS3guZBcXHNdKyQvaSxcbiAgJ3RyLVRSJzogL15bQS1aw4fEnsSwxLHDlsWew5xdKyQvaSxcbiAgJ3VrLVVBJzogL15b0JAt0KnQrNCu0K/QhEnQh9KQ0ZZdKyQvaSxcbiAgJ3ZpLVZOJzogL15bQS1aw4DDgeG6oOG6osODw4LhuqbhuqThuqzhuqjhuqrEguG6sOG6ruG6tuG6suG6tMSQw4jDieG6uOG6uuG6vMOK4buA4bq+4buG4buC4buEw4zDjeG7iuG7iMSow5LDk+G7jOG7jsOVw5Thu5Lhu5Dhu5jhu5Thu5bGoOG7nOG7muG7ouG7nuG7oMOZw5rhu6Thu6bFqMav4buq4buo4buw4bus4buu4buyw53hu7Thu7bhu7hdKyQvaSxcbiAgJ2t1LUlRJzogL15b2KbYp9io2b7Yqtis2obYrdiu2K/YsdqV2LLamNiz2LTYudi62YHapNmC2qnar9mE2rXZhdmG2Yjbhtq+25XbjNuO2YrYt9ik2KvYotil2KPZg9i22LXYqdi42LBdKyQvaSxcbiAgYXI6IC9eW9ih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsF0rJC8sXG4gIGhlOiAvXlvXkC3Xql0rJC8sXG4gIGZhOiAvXlsn2KLYp9ih2KPYpNim2KjZvtiq2KvYrNqG2K3Yrtiv2LDYsdiy2pjYs9i02LXYtti32LjYudi62YHZgtqp2q/ZhNmF2YbZiNmH2KnbjCddKyQvaVxufTtcbmV4cG9ydHMuYWxwaGEgPSBhbHBoYTtcbnZhciBhbHBoYW51bWVyaWMgPSB7XG4gICdlbi1VUyc6IC9eWzAtOUEtWl0rJC9pLFxuICAnYXotQVonOiAvXlswLTlBLVZYWVrDh8aPxJ7EsMSxw5bFnsOcXSskL2ksXG4gICdiZy1CRyc6IC9eWzAtOdCQLdCvXSskL2ksXG4gICdjcy1DWic6IC9eWzAtOUEtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvV0rJC9pLFxuICAnZGEtREsnOiAvXlswLTlBLVrDhsOYw4VdKyQvaSxcbiAgJ2RlLURFJzogL15bMC05QS1aw4TDlsOcw59dKyQvaSxcbiAgJ2VsLUdSJzogL15bMC05zpEtz4ldKyQvaSxcbiAgJ2VzLUVTJzogL15bMC05QS1aw4HDicONw5HDk8Oaw5xdKyQvaSxcbiAgJ2ZyLUZSJzogL15bMC05QS1aw4DDgsOGw4fDicOIw4rDi8OPw47DlMWSw5nDm8OcxbhdKyQvaSxcbiAgJ2l0LUlUJzogL15bMC05QS1aw4DDicOIw4zDjsOTw5LDmV0rJC9pLFxuICAnaHUtSFUnOiAvXlswLTlBLVrDgcOJw43Dk8OWxZDDmsOcxbBdKyQvaSxcbiAgJ25iLU5PJzogL15bMC05QS1aw4bDmMOFXSskL2ksXG4gICdubC1OTCc6IC9eWzAtOUEtWsOBw4nDi8OPw5PDlsOcw5pdKyQvaSxcbiAgJ25uLU5PJzogL15bMC05QS1aw4bDmMOFXSskL2ksXG4gICdwbC1QTCc6IC9eWzAtOUEtWsSExIbEmMWaxYHFg8OTxbvFuV0rJC9pLFxuICAncHQtUFQnOiAvXlswLTlBLVrDg8OBw4DDgsOEw4fDicOKw4vDjcOPw5XDk8OUw5bDmsOcXSskL2ksXG4gICdydS1SVSc6IC9eWzAtOdCQLdCv0IFdKyQvaSxcbiAgJ3NsLVNJJzogL15bMC05QS1axIzEhsSQxaDFvV0rJC9pLFxuICAnc2stU0snOiAvXlswLTlBLVrDgcSMxI7DicONxYfDk8WgxaTDmsOdxb3EucWUxL3DhMOUXSskL2ksXG4gICdzci1SU0BsYXRpbic6IC9eWzAtOUEtWsSMxIbFvcWgxJBdKyQvaSxcbiAgJ3NyLVJTJzogL15bMC050JAt0K/QgtCI0InQitCL0I9dKyQvaSxcbiAgJ3N2LVNFJzogL15bMC05QS1aw4XDhMOWXSskL2ksXG4gICd0aC1USCc6IC9eW+C4gS3guZlcXHNdKyQvaSxcbiAgJ3RyLVRSJzogL15bMC05QS1aw4fEnsSwxLHDlsWew5xdKyQvaSxcbiAgJ3VrLVVBJzogL15bMC050JAt0KnQrNCu0K/QhEnQh9KQ0ZZdKyQvaSxcbiAgJ2t1LUlRJzogL15b2aDZodmi2aPZpNml2abZp9mo2akwLTnYptin2KjZvtiq2Kzahtit2K7Yr9ix2pXYstqY2LPYtNi52LrZgdqk2YLaqdqv2YTatdmF2YbZiNuG2r7blduM247Ziti32KTYq9ii2KXYo9mD2LbYtdip2LjYsF0rJC9pLFxuICAndmktVk4nOiAvXlswLTlBLVrDgMOB4bqg4bqiw4PDguG6puG6pOG6rOG6qOG6qsSC4bqw4bqu4bq24bqy4bq0xJDDiMOJ4bq44bq64bq8w4rhu4Dhur7hu4bhu4Lhu4TDjMON4buK4buIxKjDksOT4buM4buOw5XDlOG7kuG7kOG7mOG7lOG7lsag4buc4bua4bui4bue4bugw5nDmuG7pOG7psWoxq/hu6rhu6jhu7Dhu6zhu67hu7LDneG7tOG7tuG7uF0rJC9pLFxuICBhcjogL15b2aDZodmi2aPZpNml2abZp9mo2akwLTnYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBdKyQvLFxuICBoZTogL15bMC0515At16pdKyQvLFxuICBmYTogL15bJzAtOdii2KfYodij2KTYptio2b7Yqtir2Kzahtit2K7Yr9iw2LHYstqY2LPYtNi12LbYt9i42LnYutmB2YLaqdqv2YTZhdmG2YjZh9ip24zbsduy27PbtNu127bbt9u427nbsCddKyQvaVxufTtcbmV4cG9ydHMuYWxwaGFudW1lcmljID0gYWxwaGFudW1lcmljO1xudmFyIGRlY2ltYWwgPSB7XG4gICdlbi1VUyc6ICcuJyxcbiAgYXI6ICfZqydcbn07XG5leHBvcnRzLmRlY2ltYWwgPSBkZWNpbWFsO1xudmFyIGVuZ2xpc2hMb2NhbGVzID0gWydBVScsICdHQicsICdISycsICdJTicsICdOWicsICdaQScsICdaTSddO1xuZXhwb3J0cy5lbmdsaXNoTG9jYWxlcyA9IGVuZ2xpc2hMb2NhbGVzO1xuXG5mb3IgKHZhciBsb2NhbGUsIGkgPSAwOyBpIDwgZW5nbGlzaExvY2FsZXMubGVuZ3RoOyBpKyspIHtcbiAgbG9jYWxlID0gXCJlbi1cIi5jb25jYXQoZW5nbGlzaExvY2FsZXNbaV0pO1xuICBhbHBoYVtsb2NhbGVdID0gYWxwaGFbJ2VuLVVTJ107XG4gIGFscGhhbnVtZXJpY1tsb2NhbGVdID0gYWxwaGFudW1lcmljWydlbi1VUyddO1xuICBkZWNpbWFsW2xvY2FsZV0gPSBkZWNpbWFsWydlbi1VUyddO1xufSAvLyBTb3VyY2U6IGh0dHA6Ly93d3cubG9jYWxlcGxhbmV0LmNvbS9qYXZhL1xuXG5cbnZhciBhcmFiaWNMb2NhbGVzID0gWydBRScsICdCSCcsICdEWicsICdFRycsICdJUScsICdKTycsICdLVycsICdMQicsICdMWScsICdNQScsICdRTScsICdRQScsICdTQScsICdTRCcsICdTWScsICdUTicsICdZRSddO1xuZXhwb3J0cy5hcmFiaWNMb2NhbGVzID0gYXJhYmljTG9jYWxlcztcblxuZm9yICh2YXIgX2xvY2FsZSwgX2kgPSAwOyBfaSA8IGFyYWJpY0xvY2FsZXMubGVuZ3RoOyBfaSsrKSB7XG4gIF9sb2NhbGUgPSBcImFyLVwiLmNvbmNhdChhcmFiaWNMb2NhbGVzW19pXSk7XG4gIGFscGhhW19sb2NhbGVdID0gYWxwaGEuYXI7XG4gIGFscGhhbnVtZXJpY1tfbG9jYWxlXSA9IGFscGhhbnVtZXJpYy5hcjtcbiAgZGVjaW1hbFtfbG9jYWxlXSA9IGRlY2ltYWwuYXI7XG59XG5cbnZhciBmYXJzaUxvY2FsZXMgPSBbJ0lSJywgJ0FGJ107XG5leHBvcnRzLmZhcnNpTG9jYWxlcyA9IGZhcnNpTG9jYWxlcztcblxuZm9yICh2YXIgX2xvY2FsZTIsIF9pMiA9IDA7IF9pMiA8IGZhcnNpTG9jYWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gIF9sb2NhbGUyID0gXCJmYS1cIi5jb25jYXQoZmFyc2lMb2NhbGVzW19pMl0pO1xuICBhbHBoYW51bWVyaWNbX2xvY2FsZTJdID0gYWxwaGFudW1lcmljLmZhO1xuICBkZWNpbWFsW19sb2NhbGUyXSA9IGRlY2ltYWwuYXI7XG59IC8vIFNvdXJjZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRGVjaW1hbF9tYXJrXG5cblxudmFyIGRvdERlY2ltYWwgPSBbJ2FyLUVHJywgJ2FyLUxCJywgJ2FyLUxZJ107XG5leHBvcnRzLmRvdERlY2ltYWwgPSBkb3REZWNpbWFsO1xudmFyIGNvbW1hRGVjaW1hbCA9IFsnYmctQkcnLCAnY3MtQ1onLCAnZGEtREsnLCAnZGUtREUnLCAnZWwtR1InLCAnZW4tWk0nLCAnZXMtRVMnLCAnZnItQ0EnLCAnZnItRlInLCAnaWQtSUQnLCAnaXQtSVQnLCAna3UtSVEnLCAnaHUtSFUnLCAnbmItTk8nLCAnbm4tTk8nLCAnbmwtTkwnLCAncGwtUEwnLCAncHQtUFQnLCAncnUtUlUnLCAnc2wtU0knLCAnc3ItUlNAbGF0aW4nLCAnc3ItUlMnLCAnc3YtU0UnLCAndHItVFInLCAndWstVUEnLCAndmktVk4nXTtcbmV4cG9ydHMuY29tbWFEZWNpbWFsID0gY29tbWFEZWNpbWFsO1xuXG5mb3IgKHZhciBfaTMgPSAwOyBfaTMgPCBkb3REZWNpbWFsLmxlbmd0aDsgX2kzKyspIHtcbiAgZGVjaW1hbFtkb3REZWNpbWFsW19pM11dID0gZGVjaW1hbFsnZW4tVVMnXTtcbn1cblxuZm9yICh2YXIgX2k0ID0gMDsgX2k0IDwgY29tbWFEZWNpbWFsLmxlbmd0aDsgX2k0KyspIHtcbiAgZGVjaW1hbFtjb21tYURlY2ltYWxbX2k0XV0gPSAnLCc7XG59XG5cbmFscGhhWydmci1DQSddID0gYWxwaGFbJ2ZyLUZSJ107XG5hbHBoYW51bWVyaWNbJ2ZyLUNBJ10gPSBhbHBoYW51bWVyaWNbJ2ZyLUZSJ107XG5hbHBoYVsncHQtQlInXSA9IGFscGhhWydwdC1QVCddO1xuYWxwaGFudW1lcmljWydwdC1CUiddID0gYWxwaGFudW1lcmljWydwdC1QVCddO1xuZGVjaW1hbFsncHQtQlInXSA9IGRlY2ltYWxbJ3B0LVBUJ107IC8vIHNlZSAjODYyXG5cbmFscGhhWydwbC1QbCddID0gYWxwaGFbJ3BsLVBMJ107XG5hbHBoYW51bWVyaWNbJ3BsLVBsJ10gPSBhbHBoYW51bWVyaWNbJ3BsLVBMJ107XG5kZWNpbWFsWydwbC1QbCddID0gZGVjaW1hbFsncGwtUEwnXTsgLy8gc2VlICMxNDU1XG5cbmFscGhhWydmYS1BRiddID0gYWxwaGEuZmE7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBibGFja2xpc3Q7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGJsYWNrbGlzdChzdHIsIGNoYXJzKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKFwiW1wiLmNvbmNhdChjaGFycywgXCJdK1wiKSwgJ2cnKSwgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjb250YWlucztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF90b1N0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC90b1N0cmluZ1wiKSk7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsQ29udGFpbnNPcHRpb25zID0ge1xuICBpZ25vcmVDYXNlOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gY29udGFpbnMoc3RyLCBlbGVtLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bENvbnRhaW5zT3B0aW9ucyk7XG4gIHJldHVybiBvcHRpb25zLmlnbm9yZUNhc2UgPyBzdHIudG9Mb3dlckNhc2UoKS5pbmRleE9mKCgwLCBfdG9TdHJpbmcuZGVmYXVsdCkoZWxlbSkudG9Mb3dlckNhc2UoKSkgPj0gMCA6IHN0ci5pbmRleE9mKCgwLCBfdG9TdHJpbmcuZGVmYXVsdCkoZWxlbSkpID49IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGVxdWFscztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZXF1YWxzKHN0ciwgY29tcGFyaXNvbikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3RyID09PSBjb21wYXJpc29uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBlc2NhcGU7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGVzY2FwZShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC8nL2csICcmI3gyNzsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpLnJlcGxhY2UoL1xcLy9nLCAnJiN4MkY7JykucmVwbGFjZSgvXFxcXC9nLCAnJiN4NUM7JykucmVwbGFjZSgvYC9nLCAnJiM5NjsnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNBZnRlcjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF90b0RhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3RvRGF0ZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzQWZ0ZXIoc3RyKSB7XG4gIHZhciBkYXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBTdHJpbmcobmV3IERhdGUoKSk7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZhciBjb21wYXJpc29uID0gKDAsIF90b0RhdGUuZGVmYXVsdCkoZGF0ZSk7XG4gIHZhciBvcmlnaW5hbCA9ICgwLCBfdG9EYXRlLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiAhIShvcmlnaW5hbCAmJiBjb21wYXJpc29uICYmIG9yaWdpbmFsID4gY29tcGFyaXNvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQWxwaGE7XG5leHBvcnRzLmxvY2FsZXMgPSB2b2lkIDA7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKFwiLi9hbHBoYVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNBbHBoYShfc3RyKSB7XG4gIHZhciBsb2NhbGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdlbi1VUyc7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoX3N0cik7XG4gIHZhciBzdHIgPSBfc3RyO1xuICB2YXIgaWdub3JlID0gb3B0aW9ucy5pZ25vcmU7XG5cbiAgaWYgKGlnbm9yZSkge1xuICAgIGlmIChpZ25vcmUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKGlnbm9yZSwgJycpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlnbm9yZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJbXCIuY29uY2F0KGlnbm9yZS5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcXFxzXS9nLCAnXFxcXCQmJyksIFwiXVwiKSwgJ2cnKSwgJycpOyAvLyBlc2NhcGUgcmVnZXggZm9yIGlnbm9yZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lnbm9yZSBzaG91bGQgYmUgaW5zdGFuY2Ugb2YgYSBTdHJpbmcgb3IgUmVnRXhwJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxvY2FsZSBpbiBfYWxwaGEuYWxwaGEpIHtcbiAgICByZXR1cm4gX2FscGhhLmFscGhhW2xvY2FsZV0udGVzdChzdHIpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2NhbGUgJ1wiLmNvbmNhdChsb2NhbGUsIFwiJ1wiKSk7XG59XG5cbnZhciBsb2NhbGVzID0gT2JqZWN0LmtleXMoX2FscGhhLmFscGhhKTtcbmV4cG9ydHMubG9jYWxlcyA9IGxvY2FsZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0FscGhhbnVtZXJpYztcbmV4cG9ydHMubG9jYWxlcyA9IHZvaWQgMDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoXCIuL2FscGhhXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0FscGhhbnVtZXJpYyhzdHIpIHtcbiAgdmFyIGxvY2FsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ2VuLVVTJztcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcblxuICBpZiAobG9jYWxlIGluIF9hbHBoYS5hbHBoYW51bWVyaWMpIHtcbiAgICByZXR1cm4gX2FscGhhLmFscGhhbnVtZXJpY1tsb2NhbGVdLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9jYWxlICdcIi5jb25jYXQobG9jYWxlLCBcIidcIikpO1xufVxuXG52YXIgbG9jYWxlcyA9IE9iamVjdC5rZXlzKF9hbHBoYS5hbHBoYW51bWVyaWMpO1xuZXhwb3J0cy5sb2NhbGVzID0gbG9jYWxlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQXNjaWk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbnZhciBhc2NpaSA9IC9eW1xceDAwLVxceDdGXSskLztcbi8qIGVzbGludC1lbmFibGUgbm8tY29udHJvbC1yZWdleCAqL1xuXG5mdW5jdGlvbiBpc0FzY2lpKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gYXNjaWkudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0JJQztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzQklDUmVnID0gL15bQS16XXs0fVtBLXpdezJ9XFx3ezJ9KFxcd3szfSk/JC87XG5cbmZ1bmN0aW9uIGlzQklDKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gaXNCSUNSZWcudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0Jhc2UzMjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGJhc2UzMiA9IC9eW0EtWjItN10rPSokLztcblxuZnVuY3Rpb24gaXNCYXNlMzIoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZhciBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGlmIChsZW4gJSA4ID09PSAwICYmIGJhc2UzMi50ZXN0KHN0cikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNCYXNlNTg7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEFjY2VwdGVkIGNoYXJzIC0gMTIzNDU2Nzg5QUJDREVGR0ggSktMTU4gUFFSU1RVVldYWVphYmNkZWZnaGlqayBtbm9wcXJzdHV2d3h5elxudmFyIGJhc2U1OFJlZyA9IC9eW0EtSEotTlAtWmEta20tejEtOV0qJC87XG5cbmZ1bmN0aW9uIGlzQmFzZTU4KHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmIChiYXNlNThSZWcudGVzdChzdHIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQmFzZTY0O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG5vdEJhc2U2NCA9IC9bXkEtWjAtOStcXC89XS9pO1xudmFyIHVybFNhZmVCYXNlNjQgPSAvXltBLVowLTlfXFwtXSokL2k7XG52YXIgZGVmYXVsdEJhc2U2NE9wdGlvbnMgPSB7XG4gIHVybFNhZmU6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc0Jhc2U2NChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdEJhc2U2NE9wdGlvbnMpO1xuICB2YXIgbGVuID0gc3RyLmxlbmd0aDtcblxuICBpZiAob3B0aW9ucy51cmxTYWZlKSB7XG4gICAgcmV0dXJuIHVybFNhZmVCYXNlNjQudGVzdChzdHIpO1xuICB9XG5cbiAgaWYgKGxlbiAlIDQgIT09IDAgfHwgbm90QmFzZTY0LnRlc3Qoc3RyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBmaXJzdFBhZGRpbmdDaGFyID0gc3RyLmluZGV4T2YoJz0nKTtcbiAgcmV0dXJuIGZpcnN0UGFkZGluZ0NoYXIgPT09IC0xIHx8IGZpcnN0UGFkZGluZ0NoYXIgPT09IGxlbiAtIDEgfHwgZmlyc3RQYWRkaW5nQ2hhciA9PT0gbGVuIC0gMiAmJiBzdHJbbGVuIC0gMV0gPT09ICc9Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNCZWZvcmU7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfdG9EYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi90b0RhdGVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0JlZm9yZShzdHIpIHtcbiAgdmFyIGRhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIGNvbXBhcmlzb24gPSAoMCwgX3RvRGF0ZS5kZWZhdWx0KShkYXRlKTtcbiAgdmFyIG9yaWdpbmFsID0gKDAsIF90b0RhdGUuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuICEhKG9yaWdpbmFsICYmIGNvbXBhcmlzb24gJiYgb3JpZ2luYWwgPCBjb21wYXJpc29uKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNCb29sZWFuO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBbJ3RydWUnLCAnZmFsc2UnLCAnMScsICcwJ10uaW5kZXhPZihzdHIpID49IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQnRjQWRkcmVzcztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gc3VwcG9ydHMgQmVjaDMyIGFkZHJlc3Nlc1xudmFyIGJ0YyA9IC9eKGJjMXxbMTNdKVthLXpBLUhKLU5QLVowLTldezI1LDM5fSQvO1xuXG5mdW5jdGlvbiBpc0J0Y0FkZHJlc3Moc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBidGMudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0J5dGVMZW5ndGg7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXJlc3QtcGFyYW1zICovXG5mdW5jdGlvbiBpc0J5dGVMZW5ndGgoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZhciBtaW47XG4gIHZhciBtYXg7XG5cbiAgaWYgKF90eXBlb2Yob3B0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgbWluID0gb3B0aW9ucy5taW4gfHwgMDtcbiAgICBtYXggPSBvcHRpb25zLm1heDtcbiAgfSBlbHNlIHtcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogaXNCeXRlTGVuZ3RoKHN0ciwgbWluIFssIG1heF0pXG4gICAgbWluID0gYXJndW1lbnRzWzFdO1xuICAgIG1heCA9IGFyZ3VtZW50c1syXTtcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmNvZGVVUkkoc3RyKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICByZXR1cm4gbGVuID49IG1pbiAmJiAodHlwZW9mIG1heCA9PT0gJ3VuZGVmaW5lZCcgfHwgbGVuIDw9IG1heCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQ3JlZGl0Q2FyZDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xudmFyIGNyZWRpdENhcmQgPSAvXig/OjRbMC05XXsxMn0oPzpbMC05XXszLDZ9KT98NVsxLTVdWzAtOV17MTR9fCgyMjJbMS05XXwyMlszLTldWzAtOV18MlszLTZdWzAtOV17Mn18MjdbMDFdWzAtOV18MjcyMClbMC05XXsxMn18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMiwxNX18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9fDZbMjddWzAtOV17MTR9KSQvO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbmZ1bmN0aW9uIGlzQ3JlZGl0Q2FyZChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHNhbml0aXplZCA9IHN0ci5yZXBsYWNlKC9bLSBdKy9nLCAnJyk7XG5cbiAgaWYgKCFjcmVkaXRDYXJkLnRlc3Qoc2FuaXRpemVkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBzdW0gPSAwO1xuICB2YXIgZGlnaXQ7XG4gIHZhciB0bXBOdW07XG4gIHZhciBzaG91bGREb3VibGU7XG5cbiAgZm9yICh2YXIgaSA9IHNhbml0aXplZC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGRpZ2l0ID0gc2FuaXRpemVkLnN1YnN0cmluZyhpLCBpICsgMSk7XG4gICAgdG1wTnVtID0gcGFyc2VJbnQoZGlnaXQsIDEwKTtcblxuICAgIGlmIChzaG91bGREb3VibGUpIHtcbiAgICAgIHRtcE51bSAqPSAyO1xuXG4gICAgICBpZiAodG1wTnVtID49IDEwKSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW0gJSAxMCArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdW0gKz0gdG1wTnVtO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdW0gKz0gdG1wTnVtO1xuICAgIH1cblxuICAgIHNob3VsZERvdWJsZSA9ICFzaG91bGREb3VibGU7XG4gIH1cblxuICByZXR1cm4gISEoc3VtICUgMTAgPT09IDAgPyBzYW5pdGl6ZWQgOiBmYWxzZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQ3VycmVuY3k7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjdXJyZW5jeVJlZ2V4KG9wdGlvbnMpIHtcbiAgdmFyIGRlY2ltYWxfZGlnaXRzID0gXCJcXFxcZHtcIi5jb25jYXQob3B0aW9ucy5kaWdpdHNfYWZ0ZXJfZGVjaW1hbFswXSwgXCJ9XCIpO1xuICBvcHRpb25zLmRpZ2l0c19hZnRlcl9kZWNpbWFsLmZvckVhY2goZnVuY3Rpb24gKGRpZ2l0LCBpbmRleCkge1xuICAgIGlmIChpbmRleCAhPT0gMCkgZGVjaW1hbF9kaWdpdHMgPSBcIlwiLmNvbmNhdChkZWNpbWFsX2RpZ2l0cywgXCJ8XFxcXGR7XCIpLmNvbmNhdChkaWdpdCwgXCJ9XCIpO1xuICB9KTtcbiAgdmFyIHN5bWJvbCA9IFwiKFwiLmNvbmNhdChvcHRpb25zLnN5bWJvbC5yZXBsYWNlKC9cXFcvLCBmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBcIlxcXFxcIi5jb25jYXQobSk7XG4gIH0pLCBcIilcIikuY29uY2F0KG9wdGlvbnMucmVxdWlyZV9zeW1ib2wgPyAnJyA6ICc/JyksXG4gICAgICBuZWdhdGl2ZSA9ICctPycsXG4gICAgICB3aG9sZV9kb2xsYXJfYW1vdW50X3dpdGhvdXRfc2VwID0gJ1sxLTldXFxcXGQqJyxcbiAgICAgIHdob2xlX2RvbGxhcl9hbW91bnRfd2l0aF9zZXAgPSBcIlsxLTldXFxcXGR7MCwyfShcXFxcXCIuY29uY2F0KG9wdGlvbnMudGhvdXNhbmRzX3NlcGFyYXRvciwgXCJcXFxcZHszfSkqXCIpLFxuICAgICAgdmFsaWRfd2hvbGVfZG9sbGFyX2Ftb3VudHMgPSBbJzAnLCB3aG9sZV9kb2xsYXJfYW1vdW50X3dpdGhvdXRfc2VwLCB3aG9sZV9kb2xsYXJfYW1vdW50X3dpdGhfc2VwXSxcbiAgICAgIHdob2xlX2RvbGxhcl9hbW91bnQgPSBcIihcIi5jb25jYXQodmFsaWRfd2hvbGVfZG9sbGFyX2Ftb3VudHMuam9pbignfCcpLCBcIik/XCIpLFxuICAgICAgZGVjaW1hbF9hbW91bnQgPSBcIihcXFxcXCIuY29uY2F0KG9wdGlvbnMuZGVjaW1hbF9zZXBhcmF0b3IsIFwiKFwiKS5jb25jYXQoZGVjaW1hbF9kaWdpdHMsIFwiKSlcIikuY29uY2F0KG9wdGlvbnMucmVxdWlyZV9kZWNpbWFsID8gJycgOiAnPycpO1xuICB2YXIgcGF0dGVybiA9IHdob2xlX2RvbGxhcl9hbW91bnQgKyAob3B0aW9ucy5hbGxvd19kZWNpbWFsIHx8IG9wdGlvbnMucmVxdWlyZV9kZWNpbWFsID8gZGVjaW1hbF9hbW91bnQgOiAnJyk7IC8vIGRlZmF1bHQgaXMgbmVnYXRpdmUgc2lnbiBiZWZvcmUgc3ltYm9sLCBidXQgdGhlcmUgYXJlIHR3byBvdGhlciBvcHRpb25zIChiZXNpZGVzIHBhcmVucylcblxuICBpZiAob3B0aW9ucy5hbGxvd19uZWdhdGl2ZXMgJiYgIW9wdGlvbnMucGFyZW5zX2Zvcl9uZWdhdGl2ZXMpIHtcbiAgICBpZiAob3B0aW9ucy5uZWdhdGl2ZV9zaWduX2FmdGVyX2RpZ2l0cykge1xuICAgICAgcGF0dGVybiArPSBuZWdhdGl2ZTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMubmVnYXRpdmVfc2lnbl9iZWZvcmVfZGlnaXRzKSB7XG4gICAgICBwYXR0ZXJuID0gbmVnYXRpdmUgKyBwYXR0ZXJuO1xuICAgIH1cbiAgfSAvLyBTb3V0aCBBZnJpY2FuIFJhbmQsIGZvciBleGFtcGxlLCB1c2VzIFIgMTIzIChzcGFjZSkgYW5kIFItMTIzIChubyBzcGFjZSlcblxuXG4gIGlmIChvcHRpb25zLmFsbG93X25lZ2F0aXZlX3NpZ25fcGxhY2Vob2xkZXIpIHtcbiAgICBwYXR0ZXJuID0gXCIoICg/IVxcXFwtKSk/XCIuY29uY2F0KHBhdHRlcm4pO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMuYWxsb3dfc3BhY2VfYWZ0ZXJfc3ltYm9sKSB7XG4gICAgcGF0dGVybiA9IFwiID9cIi5jb25jYXQocGF0dGVybik7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5hbGxvd19zcGFjZV9hZnRlcl9kaWdpdHMpIHtcbiAgICBwYXR0ZXJuICs9ICcoICg/ISQpKT8nO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuc3ltYm9sX2FmdGVyX2RpZ2l0cykge1xuICAgIHBhdHRlcm4gKz0gc3ltYm9sO1xuICB9IGVsc2Uge1xuICAgIHBhdHRlcm4gPSBzeW1ib2wgKyBwYXR0ZXJuO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuYWxsb3dfbmVnYXRpdmVzKSB7XG4gICAgaWYgKG9wdGlvbnMucGFyZW5zX2Zvcl9uZWdhdGl2ZXMpIHtcbiAgICAgIHBhdHRlcm4gPSBcIihcXFxcKFwiLmNvbmNhdChwYXR0ZXJuLCBcIlxcXFwpfFwiKS5jb25jYXQocGF0dGVybiwgXCIpXCIpO1xuICAgIH0gZWxzZSBpZiAoIShvcHRpb25zLm5lZ2F0aXZlX3NpZ25fYmVmb3JlX2RpZ2l0cyB8fCBvcHRpb25zLm5lZ2F0aXZlX3NpZ25fYWZ0ZXJfZGlnaXRzKSkge1xuICAgICAgcGF0dGVybiA9IG5lZ2F0aXZlICsgcGF0dGVybjtcbiAgICB9XG4gIH0gLy8gZW5zdXJlIHRoZXJlJ3MgYSBkb2xsYXIgYW5kL29yIGRlY2ltYWwgYW1vdW50LCBhbmQgdGhhdFxuICAvLyBpdCBkb2Vzbid0IHN0YXJ0IHdpdGggYSBzcGFjZSBvciBhIG5lZ2F0aXZlIHNpZ24gZm9sbG93ZWQgYnkgYSBzcGFjZVxuXG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD8hLT8gKSg/PS4qXFxcXGQpXCIuY29uY2F0KHBhdHRlcm4sIFwiJFwiKSk7XG59XG5cbnZhciBkZWZhdWx0X2N1cnJlbmN5X29wdGlvbnMgPSB7XG4gIHN5bWJvbDogJyQnLFxuICByZXF1aXJlX3N5bWJvbDogZmFsc2UsXG4gIGFsbG93X3NwYWNlX2FmdGVyX3N5bWJvbDogZmFsc2UsXG4gIHN5bWJvbF9hZnRlcl9kaWdpdHM6IGZhbHNlLFxuICBhbGxvd19uZWdhdGl2ZXM6IHRydWUsXG4gIHBhcmVuc19mb3JfbmVnYXRpdmVzOiBmYWxzZSxcbiAgbmVnYXRpdmVfc2lnbl9iZWZvcmVfZGlnaXRzOiBmYWxzZSxcbiAgbmVnYXRpdmVfc2lnbl9hZnRlcl9kaWdpdHM6IGZhbHNlLFxuICBhbGxvd19uZWdhdGl2ZV9zaWduX3BsYWNlaG9sZGVyOiBmYWxzZSxcbiAgdGhvdXNhbmRzX3NlcGFyYXRvcjogJywnLFxuICBkZWNpbWFsX3NlcGFyYXRvcjogJy4nLFxuICBhbGxvd19kZWNpbWFsOiB0cnVlLFxuICByZXF1aXJlX2RlY2ltYWw6IGZhbHNlLFxuICBkaWdpdHNfYWZ0ZXJfZGVjaW1hbDogWzJdLFxuICBhbGxvd19zcGFjZV9hZnRlcl9kaWdpdHM6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc0N1cnJlbmN5KHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2N1cnJlbmN5X29wdGlvbnMpO1xuICByZXR1cm4gY3VycmVuY3lSZWdleChvcHRpb25zKS50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRGF0YVVSSTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZhbGlkTWVkaWFUeXBlID0gL15bYS16XStcXC9bYS16MC05XFwtXFwrXSskL2k7XG52YXIgdmFsaWRBdHRyaWJ1dGUgPSAvXlthLXpcXC1dKz1bYS16MC05XFwtXSskL2k7XG52YXIgdmFsaWREYXRhID0gL15bYS16MC05IVxcJCYnXFwoXFwpXFwqXFwrLDs9XFwtXFwuX346QFxcL1xcPyVcXHNdKiQvaTtcblxuZnVuY3Rpb24gaXNEYXRhVVJJKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgZGF0YSA9IHN0ci5zcGxpdCgnLCcpO1xuXG4gIGlmIChkYXRhLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgYXR0cmlidXRlcyA9IGRhdGEuc2hpZnQoKS50cmltKCkuc3BsaXQoJzsnKTtcbiAgdmFyIHNjaGVtZUFuZE1lZGlhVHlwZSA9IGF0dHJpYnV0ZXMuc2hpZnQoKTtcblxuICBpZiAoc2NoZW1lQW5kTWVkaWFUeXBlLnN1YnN0cigwLCA1KSAhPT0gJ2RhdGE6Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBtZWRpYVR5cGUgPSBzY2hlbWVBbmRNZWRpYVR5cGUuc3Vic3RyKDUpO1xuXG4gIGlmIChtZWRpYVR5cGUgIT09ICcnICYmICF2YWxpZE1lZGlhVHlwZS50ZXN0KG1lZGlhVHlwZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaSA9PT0gYXR0cmlidXRlcy5sZW5ndGggLSAxICYmIGF0dHJpYnV0ZXNbaV0udG9Mb3dlckNhc2UoKSA9PT0gJ2Jhc2U2NCcpIHsvLyBva1xuICAgIH0gZWxzZSBpZiAoIXZhbGlkQXR0cmlidXRlLnRlc3QoYXR0cmlidXRlc1tpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZGF0YS5sZW5ndGg7IF9pKyspIHtcbiAgICBpZiAoIXZhbGlkRGF0YS50ZXN0KGRhdGFbX2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0RhdGU7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0OyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyB0aHJvdyBfZTI7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UzKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMzsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbnZhciBkZWZhdWx0X2RhdGVfb3B0aW9ucyA9IHtcbiAgZm9ybWF0OiAnWVlZWS9NTS9ERCcsXG4gIGRlbGltaXRlcnM6IFsnLycsICctJ10sXG4gIHN0cmljdE1vZGU6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRm9ybWF0KGZvcm1hdCkge1xuICByZXR1cm4gLyheKHl7NH18eXsyfSlbXFwvLV0obXsxLDJ9KVtcXC8tXShkezEsMn0pJCl8KF4obXsxLDJ9KVtcXC8tXShkezEsMn0pW1xcLy1dKCh5ezR9fHl7Mn0pJCkpfCheKGR7MSwyfSlbXFwvLV0obXsxLDJ9KVtcXC8tXSgoeXs0fXx5ezJ9KSQpKS9naS50ZXN0KGZvcm1hdCk7XG59XG5cbmZ1bmN0aW9uIHppcChkYXRlLCBmb3JtYXQpIHtcbiAgdmFyIHppcHBlZEFyciA9IFtdLFxuICAgICAgbGVuID0gTWF0aC5taW4oZGF0ZS5sZW5ndGgsIGZvcm1hdC5sZW5ndGgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB6aXBwZWRBcnIucHVzaChbZGF0ZVtpXSwgZm9ybWF0W2ldXSk7XG4gIH1cblxuICByZXR1cm4gemlwcGVkQXJyO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUoaW5wdXQsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgIC8vIEFsbG93IGJhY2t3YXJkIGNvbXBhdGJpbGl0eSBmb3Igb2xkIGZvcm1hdCBpc0RhdGUoaW5wdXQgWywgZm9ybWF0XSlcbiAgICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KSh7XG4gICAgICBmb3JtYXQ6IG9wdGlvbnNcbiAgICB9LCBkZWZhdWx0X2RhdGVfb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9kYXRlX29wdGlvbnMpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgJiYgaXNWYWxpZEZvcm1hdChvcHRpb25zLmZvcm1hdCkpIHtcbiAgICB2YXIgZm9ybWF0RGVsaW1pdGVyID0gb3B0aW9ucy5kZWxpbWl0ZXJzLmZpbmQoZnVuY3Rpb24gKGRlbGltaXRlcikge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm9ybWF0LmluZGV4T2YoZGVsaW1pdGVyKSAhPT0gLTE7XG4gICAgfSk7XG4gICAgdmFyIGRhdGVEZWxpbWl0ZXIgPSBvcHRpb25zLnN0cmljdE1vZGUgPyBmb3JtYXREZWxpbWl0ZXIgOiBvcHRpb25zLmRlbGltaXRlcnMuZmluZChmdW5jdGlvbiAoZGVsaW1pdGVyKSB7XG4gICAgICByZXR1cm4gaW5wdXQuaW5kZXhPZihkZWxpbWl0ZXIpICE9PSAtMTtcbiAgICB9KTtcbiAgICB2YXIgZGF0ZUFuZEZvcm1hdCA9IHppcChpbnB1dC5zcGxpdChkYXRlRGVsaW1pdGVyKSwgb3B0aW9ucy5mb3JtYXQudG9Mb3dlckNhc2UoKS5zcGxpdChmb3JtYXREZWxpbWl0ZXIpKTtcbiAgICB2YXIgZGF0ZU9iaiA9IHt9O1xuXG4gICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGRhdGVBbmRGb3JtYXQpLFxuICAgICAgICBfc3RlcDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICB2YXIgX3N0ZXAkdmFsdWUgPSBfc2xpY2VkVG9BcnJheShfc3RlcC52YWx1ZSwgMiksXG4gICAgICAgICAgICBkYXRlV29yZCA9IF9zdGVwJHZhbHVlWzBdLFxuICAgICAgICAgICAgZm9ybWF0V29yZCA9IF9zdGVwJHZhbHVlWzFdO1xuXG4gICAgICAgIGlmIChkYXRlV29yZC5sZW5ndGggIT09IGZvcm1hdFdvcmQubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0ZU9ialtmb3JtYXRXb3JkLmNoYXJBdCgwKV0gPSBkYXRlV29yZDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKFwiXCIuY29uY2F0KGRhdGVPYmoubSwgXCIvXCIpLmNvbmNhdChkYXRlT2JqLmQsIFwiL1wiKS5jb25jYXQoZGF0ZU9iai55KSkuZ2V0RGF0ZSgpID09PSArZGF0ZU9iai5kO1xuICB9XG5cbiAgaWYgKCFvcHRpb25zLnN0cmljdE1vZGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgRGF0ZV0nICYmIGlzRmluaXRlKGlucHV0KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNEZWNpbWFsO1xuXG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9pbmNsdWRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9pbmNsdWRlc1wiKSk7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKFwiLi9hbHBoYVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZGVjaW1hbFJlZ0V4cChvcHRpb25zKSB7XG4gIHZhciByZWdFeHAgPSBuZXcgUmVnRXhwKFwiXlstK10/KFswLTldKyk/KFxcXFxcIi5jb25jYXQoX2FscGhhLmRlY2ltYWxbb3B0aW9ucy5sb2NhbGVdLCBcIlswLTlde1wiKS5jb25jYXQob3B0aW9ucy5kZWNpbWFsX2RpZ2l0cywgXCJ9KVwiKS5jb25jYXQob3B0aW9ucy5mb3JjZV9kZWNpbWFsID8gJycgOiAnPycsIFwiJFwiKSk7XG4gIHJldHVybiByZWdFeHA7XG59XG5cbnZhciBkZWZhdWx0X2RlY2ltYWxfb3B0aW9ucyA9IHtcbiAgZm9yY2VfZGVjaW1hbDogZmFsc2UsXG4gIGRlY2ltYWxfZGlnaXRzOiAnMSwnLFxuICBsb2NhbGU6ICdlbi1VUydcbn07XG52YXIgYmxhY2tsaXN0ID0gWycnLCAnLScsICcrJ107XG5cbmZ1bmN0aW9uIGlzRGVjaW1hbChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9kZWNpbWFsX29wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zLmxvY2FsZSBpbiBfYWxwaGEuZGVjaW1hbCkge1xuICAgIHJldHVybiAhKDAsIF9pbmNsdWRlcy5kZWZhdWx0KShibGFja2xpc3QsIHN0ci5yZXBsYWNlKC8gL2csICcnKSkgJiYgZGVjaW1hbFJlZ0V4cChvcHRpb25zKS50ZXN0KHN0cik7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvY2FsZSAnXCIuY29uY2F0KG9wdGlvbnMubG9jYWxlLCBcIidcIikpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0RpdmlzaWJsZUJ5O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX3RvRmxvYXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3RvRmxvYXRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0RpdmlzaWJsZUJ5KHN0ciwgbnVtKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiAoMCwgX3RvRmxvYXQuZGVmYXVsdCkoc3RyKSAlIHBhcnNlSW50KG51bSwgMTApID09PSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0VBTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBUaGUgbW9zdCBjb21tb25seSB1c2VkIEVBTiBzdGFuZGFyZCBpc1xuICogdGhlIHRoaXJ0ZWVuLWRpZ2l0IEVBTi0xMywgd2hpbGUgdGhlXG4gKiBsZXNzIGNvbW1vbmx5IHVzZWQgOC1kaWdpdCBFQU4tOCBiYXJjb2RlIHdhc1xuICogaW50cm9kdWNlZCBmb3IgdXNlIG9uIHNtYWxsIHBhY2thZ2VzLlxuICogRUFOIGNvbnNpc3RzIG9mOlxuICogR1MxIHByZWZpeCwgbWFudWZhY3R1cmVyIGNvZGUsIHByb2R1Y3QgY29kZSBhbmQgY2hlY2sgZGlnaXRcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZXJuYXRpb25hbF9BcnRpY2xlX051bWJlclxuICovXG5cbi8qKlxuICogRGVmaW5lIEVBTiBMZW5naHRzOyA4IGZvciBFQU4tODsgMTMgZm9yIEVBTi0xM1xuICogYW5kIFJlZ3VsYXIgRXhwcmVzc2lvbiBmb3IgdmFsaWQgRUFOcyAoRUFOLTgsIEVBTi0xMyksXG4gKiB3aXRoIGV4YWN0IG51bWJlcmljIG1hdGNoaW5nIG9mIDggb3IgMTMgZGlnaXRzIFswLTldXG4gKi9cbnZhciBMRU5HVEhfRUFOXzggPSA4O1xudmFyIHZhbGlkRWFuUmVnZXggPSAvXihcXGR7OH18XFxkezEzfSkkLztcbi8qKlxuICogR2V0IHBvc2l0aW9uIHdlaWdodCBnaXZlbjpcbiAqIEVBTiBsZW5ndGggYW5kIGRpZ2l0IGluZGV4L3Bvc2l0aW9uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblxuZnVuY3Rpb24gZ2V0UG9zaXRpb25XZWlnaHRUaHJvdWdoTGVuZ3RoQW5kSW5kZXgobGVuZ3RoLCBpbmRleCkge1xuICBpZiAobGVuZ3RoID09PSBMRU5HVEhfRUFOXzgpIHtcbiAgICByZXR1cm4gaW5kZXggJSAyID09PSAwID8gMyA6IDE7XG4gIH1cblxuICByZXR1cm4gaW5kZXggJSAyID09PSAwID8gMSA6IDM7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBFQU4gQ2hlY2sgRGlnaXRcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZXJuYXRpb25hbF9BcnRpY2xlX051bWJlciNDYWxjdWxhdGlvbl9vZl9jaGVja3N1bV9kaWdpdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBlYW5cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuXG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNoZWNrRGlnaXQoZWFuKSB7XG4gIHZhciBjaGVja3N1bSA9IGVhbi5zbGljZSgwLCAtMSkuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoY2hhciwgaW5kZXgpIHtcbiAgICByZXR1cm4gTnVtYmVyKGNoYXIpICogZ2V0UG9zaXRpb25XZWlnaHRUaHJvdWdoTGVuZ3RoQW5kSW5kZXgoZWFuLmxlbmd0aCwgaW5kZXgpO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGFydGlhbFN1bSkge1xuICAgIHJldHVybiBhY2MgKyBwYXJ0aWFsU3VtO1xuICB9LCAwKTtcbiAgdmFyIHJlbWFpbmRlciA9IDEwIC0gY2hlY2tzdW0gJSAxMDtcbiAgcmV0dXJuIHJlbWFpbmRlciA8IDEwID8gcmVtYWluZGVyIDogMDtcbn1cbi8qKlxuICogQ2hlY2sgaWYgc3RyaW5nIGlzIHZhbGlkIEVBTjpcbiAqIE1hdGNoZXMgRUFOLTgvRUFOLTEzIHJlZ2V4XG4gKiBIYXMgdmFsaWQgY2hlY2sgZGlnaXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRUFOKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgYWN0dWFsQ2hlY2tEaWdpdCA9IE51bWJlcihzdHIuc2xpY2UoLTEpKTtcbiAgcmV0dXJuIHZhbGlkRWFuUmVnZXgudGVzdChzdHIpICYmIGFjdHVhbENoZWNrRGlnaXQgPT09IGNhbGN1bGF0ZUNoZWNrRGlnaXQoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNFbWFpbDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9tZXJnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9tZXJnZVwiKSk7XG5cbnZhciBfaXNCeXRlTGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc0J5dGVMZW5ndGhcIikpO1xuXG52YXIgX2lzRlFETiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNGUUROXCIpKTtcblxudmFyIF9pc0lQID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc0lQXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxudmFyIGRlZmF1bHRfZW1haWxfb3B0aW9ucyA9IHtcbiAgYWxsb3dfZGlzcGxheV9uYW1lOiBmYWxzZSxcbiAgcmVxdWlyZV9kaXNwbGF5X25hbWU6IGZhbHNlLFxuICBhbGxvd191dGY4X2xvY2FsX3BhcnQ6IHRydWUsXG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICBibGFja2xpc3RlZF9jaGFyczogJycsXG4gIGlnbm9yZV9tYXhfbGVuZ3RoOiBmYWxzZVxufTtcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCAqL1xuXG52YXIgc3BsaXROYW1lQWRkcmVzcyA9IC9eKFteXFx4MDAtXFx4MUZcXHg3Ri1cXHg5RlxcY1hdKyk8KC4rKT4kL2k7XG52YXIgZW1haWxVc2VyUGFydCA9IC9eW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XSskL2k7XG52YXIgZ21haWxVc2VyUGFydCA9IC9eW2EtelxcZF0rJC87XG52YXIgcXVvdGVkRW1haWxVc2VyID0gL14oW1xcc1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2VdfChcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXSkpKiQvaTtcbnZhciBlbWFpbFVzZXJVdGY4UGFydCA9IC9eW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSskL2k7XG52YXIgcXVvdGVkRW1haWxVc2VyVXRmOCA9IC9eKFtcXHNcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdlXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXXwoXFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3ZlxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSokL2k7XG52YXIgZGVmYXVsdE1heEVtYWlsTGVuZ3RoID0gMjU0O1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbi8qIGVzbGludC1lbmFibGUgbm8tY29udHJvbC1yZWdleCAqL1xuXG4vKipcbiAqIFZhbGlkYXRlIGRpc3BsYXkgbmFtZSBhY2NvcmRpbmcgdG8gdGhlIFJGQzI4MjI6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyODIyI2FwcGVuZGl4LUEuMS4yXG4gKiBAcGFyYW0ge1N0cmluZ30gZGlzcGxheV9uYW1lXG4gKi9cblxuZnVuY3Rpb24gdmFsaWRhdGVEaXNwbGF5TmFtZShkaXNwbGF5X25hbWUpIHtcbiAgdmFyIHRyaW1fcXVvdGVzID0gZGlzcGxheV9uYW1lLm1hdGNoKC9eXCIoLispXCIkL2kpO1xuICB2YXIgZGlzcGxheV9uYW1lX3dpdGhvdXRfcXVvdGVzID0gdHJpbV9xdW90ZXMgPyB0cmltX3F1b3Rlc1sxXSA6IGRpc3BsYXlfbmFtZTsgLy8gZGlzcGxheSBuYW1lIHdpdGggb25seSBzcGFjZXMgaXMgbm90IHZhbGlkXG5cbiAgaWYgKCFkaXNwbGF5X25hbWVfd2l0aG91dF9xdW90ZXMudHJpbSgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIGNoZWNrIHdoZXRoZXIgZGlzcGxheSBuYW1lIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVyXG5cblxuICB2YXIgY29udGFpbnNfaWxsZWdhbCA9IC9bXFwuXCI7PD5dLy50ZXN0KGRpc3BsYXlfbmFtZV93aXRob3V0X3F1b3Rlcyk7XG5cbiAgaWYgKGNvbnRhaW5zX2lsbGVnYWwpIHtcbiAgICAvLyBpZiBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlcnMsXG4gICAgLy8gbXVzdCB0byBiZSBlbmNsb3NlZCBpbiBkb3VibGUtcXVvdGVzLCBvdGhlcndpc2UgaXQncyBub3QgYSB2YWxpZCBkaXNwbGF5IG5hbWVcbiAgICBpZiAoIXRyaW1fcXVvdGVzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyB0aGUgcXVvdGVzIGluIGRpc3BsYXkgbmFtZSBtdXN0IHN0YXJ0IHdpdGggY2hhcmFjdGVyIHN5bWJvbCBcXFxuXG5cbiAgICB2YXIgYWxsX3N0YXJ0X3dpdGhfYmFja19zbGFzaCA9IGRpc3BsYXlfbmFtZV93aXRob3V0X3F1b3Rlcy5zcGxpdCgnXCInKS5sZW5ndGggPT09IGRpc3BsYXlfbmFtZV93aXRob3V0X3F1b3Rlcy5zcGxpdCgnXFxcXFwiJykubGVuZ3RoO1xuXG4gICAgaWYgKCFhbGxfc3RhcnRfd2l0aF9iYWNrX3NsYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzRW1haWwoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfZW1haWxfb3B0aW9ucyk7XG5cbiAgaWYgKG9wdGlvbnMucmVxdWlyZV9kaXNwbGF5X25hbWUgfHwgb3B0aW9ucy5hbGxvd19kaXNwbGF5X25hbWUpIHtcbiAgICB2YXIgZGlzcGxheV9lbWFpbCA9IHN0ci5tYXRjaChzcGxpdE5hbWVBZGRyZXNzKTtcblxuICAgIGlmIChkaXNwbGF5X2VtYWlsKSB7XG4gICAgICB2YXIgZGlzcGxheV9uYW1lO1xuXG4gICAgICB2YXIgX2Rpc3BsYXlfZW1haWwgPSBfc2xpY2VkVG9BcnJheShkaXNwbGF5X2VtYWlsLCAzKTtcblxuICAgICAgZGlzcGxheV9uYW1lID0gX2Rpc3BsYXlfZW1haWxbMV07XG4gICAgICBzdHIgPSBfZGlzcGxheV9lbWFpbFsyXTtcblxuICAgICAgLy8gc29tZXRpbWVzIG5lZWQgdG8gdHJpbSB0aGUgbGFzdCBzcGFjZSB0byBnZXQgdGhlIGRpc3BsYXkgbmFtZVxuICAgICAgLy8gYmVjYXVzZSB0aGVyZSBtYXkgYmUgYSBzcGFjZSBiZXR3ZWVuIGRpc3BsYXkgbmFtZSBhbmQgZW1haWwgYWRkcmVzc1xuICAgICAgLy8gZWcuIG15bmFtZSA8YWRkcmVzc0BnbWFpbC5jb20+XG4gICAgICAvLyB0aGUgZGlzcGxheSBuYW1lIGlzIGBteW5hbWVgIGluc3RlYWQgb2YgYG15bmFtZSBgLCBzbyBuZWVkIHRvIHRyaW0gdGhlIGxhc3Qgc3BhY2VcbiAgICAgIGlmIChkaXNwbGF5X25hbWUuZW5kc1dpdGgoJyAnKSkge1xuICAgICAgICBkaXNwbGF5X25hbWUgPSBkaXNwbGF5X25hbWUuc3Vic3RyKDAsIGRpc3BsYXlfbmFtZS5sZW5ndGggLSAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWxpZGF0ZURpc3BsYXlOYW1lKGRpc3BsYXlfbmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXF1aXJlX2Rpc3BsYXlfbmFtZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghb3B0aW9ucy5pZ25vcmVfbWF4X2xlbmd0aCAmJiBzdHIubGVuZ3RoID4gZGVmYXVsdE1heEVtYWlsTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KCdAJyk7XG4gIHZhciBkb21haW4gPSBwYXJ0cy5wb3AoKTtcbiAgdmFyIHVzZXIgPSBwYXJ0cy5qb2luKCdAJyk7XG4gIHZhciBsb3dlcl9kb21haW4gPSBkb21haW4udG9Mb3dlckNhc2UoKTtcblxuICBpZiAob3B0aW9ucy5kb21haW5fc3BlY2lmaWNfdmFsaWRhdGlvbiAmJiAobG93ZXJfZG9tYWluID09PSAnZ21haWwuY29tJyB8fCBsb3dlcl9kb21haW4gPT09ICdnb29nbGVtYWlsLmNvbScpKSB7XG4gICAgLypcbiAgICAgIFByZXZpb3VzbHkgd2UgcmVtb3ZlZCBkb3RzIGZvciBnbWFpbCBhZGRyZXNzZXMgYmVmb3JlIHZhbGlkYXRpbmcuXG4gICAgICBUaGlzIHdhcyByZW1vdmVkIGJlY2F1c2UgaXQgYWxsb3dzIGBtdWx0aXBsZS4uZG90c0BnbWFpbC5jb21gXG4gICAgICB0byBiZSByZXBvcnRlZCBhcyB2YWxpZCwgYnV0IGl0IGlzIG5vdC5cbiAgICAgIEdtYWlsIG9ubHkgbm9ybWFsaXplcyBzaW5nbGUgZG90cywgcmVtb3ZpbmcgdGhlbSBmcm9tIGhlcmUgaXMgcG9pbnRsZXNzLFxuICAgICAgc2hvdWxkIGJlIGRvbmUgaW4gbm9ybWFsaXplRW1haWxcbiAgICAqL1xuICAgIHVzZXIgPSB1c2VyLnRvTG93ZXJDYXNlKCk7IC8vIFJlbW92aW5nIHN1Yi1hZGRyZXNzIGZyb20gdXNlcm5hbWUgYmVmb3JlIGdtYWlsIHZhbGlkYXRpb25cblxuICAgIHZhciB1c2VybmFtZSA9IHVzZXIuc3BsaXQoJysnKVswXTsgLy8gRG90cyBhcmUgbm90IGluY2x1ZGVkIGluIGdtYWlsIGxlbmd0aCByZXN0cmljdGlvblxuXG4gICAgaWYgKCEoMCwgX2lzQnl0ZUxlbmd0aC5kZWZhdWx0KSh1c2VybmFtZS5yZXBsYWNlKCcuJywgJycpLCB7XG4gICAgICBtaW46IDYsXG4gICAgICBtYXg6IDMwXG4gICAgfSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgX3VzZXJfcGFydHMgPSB1c2VybmFtZS5zcGxpdCgnLicpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdXNlcl9wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFnbWFpbFVzZXJQYXJ0LnRlc3QoX3VzZXJfcGFydHNbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAob3B0aW9ucy5pZ25vcmVfbWF4X2xlbmd0aCA9PT0gZmFsc2UgJiYgKCEoMCwgX2lzQnl0ZUxlbmd0aC5kZWZhdWx0KSh1c2VyLCB7XG4gICAgbWF4OiA2NFxuICB9KSB8fCAhKDAsIF9pc0J5dGVMZW5ndGguZGVmYXVsdCkoZG9tYWluLCB7XG4gICAgbWF4OiAyNTRcbiAgfSkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCEoMCwgX2lzRlFETi5kZWZhdWx0KShkb21haW4sIHtcbiAgICByZXF1aXJlX3RsZDogb3B0aW9ucy5yZXF1aXJlX3RsZFxuICB9KSkge1xuICAgIGlmICghb3B0aW9ucy5hbGxvd19pcF9kb21haW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoISgwLCBfaXNJUC5kZWZhdWx0KShkb21haW4pKSB7XG4gICAgICBpZiAoIWRvbWFpbi5zdGFydHNXaXRoKCdbJykgfHwgIWRvbWFpbi5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vQnJhY2tldGRvbWFpbiA9IGRvbWFpbi5zdWJzdHIoMSwgZG9tYWluLmxlbmd0aCAtIDIpO1xuXG4gICAgICBpZiAobm9CcmFja2V0ZG9tYWluLmxlbmd0aCA9PT0gMCB8fCAhKDAsIF9pc0lQLmRlZmF1bHQpKG5vQnJhY2tldGRvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh1c2VyWzBdID09PSAnXCInKSB7XG4gICAgdXNlciA9IHVzZXIuc2xpY2UoMSwgdXNlci5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gb3B0aW9ucy5hbGxvd191dGY4X2xvY2FsX3BhcnQgPyBxdW90ZWRFbWFpbFVzZXJVdGY4LnRlc3QodXNlcikgOiBxdW90ZWRFbWFpbFVzZXIudGVzdCh1c2VyKTtcbiAgfVxuXG4gIHZhciBwYXR0ZXJuID0gb3B0aW9ucy5hbGxvd191dGY4X2xvY2FsX3BhcnQgPyBlbWFpbFVzZXJVdGY4UGFydCA6IGVtYWlsVXNlclBhcnQ7XG4gIHZhciB1c2VyX3BhcnRzID0gdXNlci5zcGxpdCgnLicpO1xuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHVzZXJfcGFydHMubGVuZ3RoOyBfaTIrKykge1xuICAgIGlmICghcGF0dGVybi50ZXN0KHVzZXJfcGFydHNbX2kyXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAob3B0aW9ucy5ibGFja2xpc3RlZF9jaGFycykge1xuICAgIGlmICh1c2VyLnNlYXJjaChuZXcgUmVnRXhwKFwiW1wiLmNvbmNhdChvcHRpb25zLmJsYWNrbGlzdGVkX2NoYXJzLCBcIl0rXCIpLCAnZycpKSAhPT0gLTEpIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0VtcHR5O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bHRfaXNfZW1wdHlfb3B0aW9ucyA9IHtcbiAgaWdub3JlX3doaXRlc3BhY2U6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc0VtcHR5KHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2lzX2VtcHR5X29wdGlvbnMpO1xuICByZXR1cm4gKG9wdGlvbnMuaWdub3JlX3doaXRlc3BhY2UgPyBzdHIudHJpbSgpLmxlbmd0aCA6IHN0ci5sZW5ndGgpID09PSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0V0aGVyZXVtQWRkcmVzcztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGV0aCA9IC9eKDB4KVswLTlhLWZdezQwfSQvaTtcblxuZnVuY3Rpb24gaXNFdGhlcmV1bUFkZHJlc3Moc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBldGgudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0ZRRE47XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF9mcWRuX29wdGlvbnMgPSB7XG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICBhbGxvd191bmRlcnNjb3JlczogZmFsc2UsXG4gIGFsbG93X3RyYWlsaW5nX2RvdDogZmFsc2UsXG4gIGFsbG93X251bWVyaWNfdGxkOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNGUUROKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2ZxZG5fb3B0aW9ucyk7XG4gIC8qIFJlbW92ZSB0aGUgb3B0aW9uYWwgdHJhaWxpbmcgZG90IGJlZm9yZSBjaGVja2luZyB2YWxpZGl0eSAqL1xuXG4gIGlmIChvcHRpb25zLmFsbG93X3RyYWlsaW5nX2RvdCAmJiBzdHJbc3RyLmxlbmd0aCAtIDFdID09PSAnLicpIHtcbiAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnLicpO1xuICB2YXIgdGxkID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG5cbiAgaWYgKG9wdGlvbnMucmVxdWlyZV90bGQpIHtcbiAgICAvLyBkaXNhbGxvdyBmcWRucyB3aXRob3V0IHRsZFxuICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCEvXihbYS16XFx1MDBhMS1cXHVmZmZmXXsyLH18eG5bYS16MC05LV17Mix9KSQvaS50ZXN0KHRsZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIGRpc2FsbG93IHNwYWNlcyAmJiBzcGVjaWFsIGNoYXJhY2Vyc1xuXG5cbiAgICBpZiAoL1tcXHNcXHUyMDAyLVxcdTIwMEJcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHVGRUZGXFx1REI0MFxcdURDMjBcXHUwMEE5XFx1RkZGRF0vLnRlc3QodGxkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSAvLyByZWplY3QgbnVtZXJpYyBUTERzXG5cblxuICBpZiAoIW9wdGlvbnMuYWxsb3dfbnVtZXJpY190bGQgJiYgL15cXGQrJC8udGVzdCh0bGQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmV2ZXJ5KGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgaWYgKHBhcnQubGVuZ3RoID4gNjMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIS9eW2Etel9cXHUwMGExLVxcdWZmZmYwLTktXSskL2kudGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gZGlzYWxsb3cgZnVsbC13aWR0aCBjaGFyc1xuXG5cbiAgICBpZiAoL1tcXHVmZjAxLVxcdWZmNWVdLy50ZXN0KHBhcnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBkaXNhbGxvdyBwYXJ0cyBzdGFydGluZyBvciBlbmRpbmcgd2l0aCBoeXBoZW5cblxuXG4gICAgaWYgKC9eLXwtJC8udGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5hbGxvd191bmRlcnNjb3JlcyAmJiAvXy8udGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNGbG9hdDtcbmV4cG9ydHMubG9jYWxlcyA9IHZvaWQgMDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoXCIuL2FscGhhXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0Zsb2F0KHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGZsb2F0ID0gbmV3IFJlZ0V4cChcIl4oPzpbLStdKT8oPzpbMC05XSspPyg/OlxcXFxcIi5jb25jYXQob3B0aW9ucy5sb2NhbGUgPyBfYWxwaGEuZGVjaW1hbFtvcHRpb25zLmxvY2FsZV0gOiAnLicsIFwiWzAtOV0qKT8oPzpbZUVdW1xcXFwrXFxcXC1dPyg/OlswLTldKykpPyRcIikpO1xuXG4gIGlmIChzdHIgPT09ICcnIHx8IHN0ciA9PT0gJy4nIHx8IHN0ciA9PT0gJy0nIHx8IHN0ciA9PT0gJysnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChzdHIucmVwbGFjZSgnLCcsICcuJykpO1xuICByZXR1cm4gZmxvYXQudGVzdChzdHIpICYmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbWluJykgfHwgdmFsdWUgPj0gb3B0aW9ucy5taW4pICYmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbWF4JykgfHwgdmFsdWUgPD0gb3B0aW9ucy5tYXgpICYmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbHQnKSB8fCB2YWx1ZSA8IG9wdGlvbnMubHQpICYmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnZ3QnKSB8fCB2YWx1ZSA+IG9wdGlvbnMuZ3QpO1xufVxuXG52YXIgbG9jYWxlcyA9IE9iamVjdC5rZXlzKF9hbHBoYS5kZWNpbWFsKTtcbmV4cG9ydHMubG9jYWxlcyA9IGxvY2FsZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0Z1bGxXaWR0aDtcbmV4cG9ydHMuZnVsbFdpZHRoID0gdm9pZCAwO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZnVsbFdpZHRoID0gL1teXFx1MDAyMC1cXHUwMDdFXFx1RkY2MS1cXHVGRjlGXFx1RkZBMC1cXHVGRkRDXFx1RkZFOC1cXHVGRkVFMC05YS16QS1aXS87XG5leHBvcnRzLmZ1bGxXaWR0aCA9IGZ1bGxXaWR0aDtcblxuZnVuY3Rpb24gaXNGdWxsV2lkdGgoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBmdWxsV2lkdGgudGVzdChzdHIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNIU0w7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoc2xjb21tYSA9IC9eKGhzbClhP1xcKFxccyooKFxcK3xcXC0pPyhbMC05XSsoXFwuWzAtOV0rKT8oZShcXCt8XFwtKT9bMC05XSspP3xcXC5bMC05XSsoZShcXCt8XFwtKT9bMC05XSspPykpKGRlZ3xncmFkfHJhZHx0dXJufFxccyopKFxccyosXFxzKihcXCt8XFwtKT8oWzAtOV0rKFxcLlswLTldKyk/KGUoXFwrfFxcLSk/WzAtOV0rKT98XFwuWzAtOV0rKGUoXFwrfFxcLSk/WzAtOV0rKT8pJSl7Mn1cXHMqKCxcXHMqKChcXCt8XFwtKT8oWzAtOV0rKFxcLlswLTldKyk/KGUoXFwrfFxcLSk/WzAtOV0rKT98XFwuWzAtOV0rKGUoXFwrfFxcLSk/WzAtOV0rKT8pJT8pXFxzKik/XFwpJC9pO1xudmFyIGhzbHNwYWNlID0gL14oaHNsKWE/XFwoXFxzKigoXFwrfFxcLSk/KFswLTldKyhcXC5bMC05XSspPyhlKFxcK3xcXC0pP1swLTldKyk/fFxcLlswLTldKyhlKFxcK3xcXC0pP1swLTldKyk/KSkoZGVnfGdyYWR8cmFkfHR1cm58XFxzKShcXHMqKFxcK3xcXC0pPyhbMC05XSsoXFwuWzAtOV0rKT8oZShcXCt8XFwtKT9bMC05XSspP3xcXC5bMC05XSsoZShcXCt8XFwtKT9bMC05XSspPyklKXsyfVxccyooXFwvXFxzKigoXFwrfFxcLSk/KFswLTldKyhcXC5bMC05XSspPyhlKFxcK3xcXC0pP1swLTldKyk/fFxcLlswLTldKyhlKFxcK3xcXC0pP1swLTldKyk/KSU/KVxccyopP1xcKSQvaTtcblxuZnVuY3Rpb24gaXNIU0woc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBoc2xjb21tYS50ZXN0KHN0cikgfHwgaHNsc3BhY2UudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0hhbGZXaWR0aDtcbmV4cG9ydHMuaGFsZldpZHRoID0gdm9pZCAwO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaGFsZldpZHRoID0gL1tcXHUwMDIwLVxcdTAwN0VcXHVGRjYxLVxcdUZGOUZcXHVGRkEwLVxcdUZGRENcXHVGRkU4LVxcdUZGRUUwLTlhLXpBLVpdLztcbmV4cG9ydHMuaGFsZldpZHRoID0gaGFsZldpZHRoO1xuXG5mdW5jdGlvbiBpc0hhbGZXaWR0aChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIGhhbGZXaWR0aC50ZXN0KHN0cik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0hhc2g7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBsZW5ndGhzID0ge1xuICBtZDU6IDMyLFxuICBtZDQ6IDMyLFxuICBzaGExOiA0MCxcbiAgc2hhMjU2OiA2NCxcbiAgc2hhMzg0OiA5NixcbiAgc2hhNTEyOiAxMjgsXG4gIHJpcGVtZDEyODogMzIsXG4gIHJpcGVtZDE2MDogNDAsXG4gIHRpZ2VyMTI4OiAzMixcbiAgdGlnZXIxNjA6IDQwLFxuICB0aWdlcjE5MjogNDgsXG4gIGNyYzMyOiA4LFxuICBjcmMzMmI6IDhcbn07XG5cbmZ1bmN0aW9uIGlzSGFzaChzdHIsIGFsZ29yaXRobSkge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgaGFzaCA9IG5ldyBSZWdFeHAoXCJeW2EtZkEtRjAtOV17XCIuY29uY2F0KGxlbmd0aHNbYWxnb3JpdGhtXSwgXCJ9JFwiKSk7XG4gIHJldHVybiBoYXNoLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNIZXhDb2xvcjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhleGNvbG9yID0gL14jPyhbMC05QS1GXXszfXxbMC05QS1GXXs0fXxbMC05QS1GXXs2fXxbMC05QS1GXXs4fSkkL2k7XG5cbmZ1bmN0aW9uIGlzSGV4Q29sb3Ioc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBoZXhjb2xvci50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSGV4YWRlY2ltYWw7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoZXhhZGVjaW1hbCA9IC9eKDB4fDBoKT9bMC05QS1GXSskL2k7XG5cbmZ1bmN0aW9uIGlzSGV4YWRlY2ltYWwoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBoZXhhZGVjaW1hbC50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSUJBTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBMaXN0IG9mIGNvdW50cnkgY29kZXMgd2l0aFxuICogY29ycmVzcG9uZGluZyBJQkFOIHJlZ3VsYXIgZXhwcmVzc2lvblxuICogUmVmZXJlbmNlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbnRlcm5hdGlvbmFsX0JhbmtfQWNjb3VudF9OdW1iZXJcbiAqL1xudmFyIGliYW5SZWdleFRocm91Z2hDb3VudHJ5Q29kZSA9IHtcbiAgQUQ6IC9eKEFEWzAtOV17Mn0pXFxkezh9W0EtWjAtOV17MTJ9JC8sXG4gIEFFOiAvXihBRVswLTldezJ9KVxcZHszfVxcZHsxNn0kLyxcbiAgQUw6IC9eKEFMWzAtOV17Mn0pXFxkezh9W0EtWjAtOV17MTZ9JC8sXG4gIEFUOiAvXihBVFswLTldezJ9KVxcZHsxNn0kLyxcbiAgQVo6IC9eKEFaWzAtOV17Mn0pW0EtWjAtOV17NH1cXGR7MjB9JC8sXG4gIEJBOiAvXihCQVswLTldezJ9KVxcZHsxNn0kLyxcbiAgQkU6IC9eKEJFWzAtOV17Mn0pXFxkezEyfSQvLFxuICBCRzogL14oQkdbMC05XXsyfSlbQS1aXXs0fVxcZHs2fVtBLVowLTldezh9JC8sXG4gIEJIOiAvXihCSFswLTldezJ9KVtBLVpdezR9W0EtWjAtOV17MTR9JC8sXG4gIEJSOiAvXihCUlswLTldezJ9KVxcZHsyM31bQS1aXXsxfVtBLVowLTldezF9JC8sXG4gIEJZOiAvXihCWVswLTldezJ9KVtBLVowLTldezR9XFxkezIwfSQvLFxuICBDSDogL14oQ0hbMC05XXsyfSlcXGR7NX1bQS1aMC05XXsxMn0kLyxcbiAgQ1I6IC9eKENSWzAtOV17Mn0pXFxkezE4fSQvLFxuICBDWTogL14oQ1lbMC05XXsyfSlcXGR7OH1bQS1aMC05XXsxNn0kLyxcbiAgQ1o6IC9eKENaWzAtOV17Mn0pXFxkezIwfSQvLFxuICBERTogL14oREVbMC05XXsyfSlcXGR7MTh9JC8sXG4gIERLOiAvXihES1swLTldezJ9KVxcZHsxNH0kLyxcbiAgRE86IC9eKERPWzAtOV17Mn0pW0EtWl17NH1cXGR7MjB9JC8sXG4gIEVFOiAvXihFRVswLTldezJ9KVxcZHsxNn0kLyxcbiAgRUc6IC9eKEVHWzAtOV17Mn0pXFxkezI1fSQvLFxuICBFUzogL14oRVNbMC05XXsyfSlcXGR7MjB9JC8sXG4gIEZJOiAvXihGSVswLTldezJ9KVxcZHsxNH0kLyxcbiAgRk86IC9eKEZPWzAtOV17Mn0pXFxkezE0fSQvLFxuICBGUjogL14oRlJbMC05XXsyfSlcXGR7MTB9W0EtWjAtOV17MTF9XFxkezJ9JC8sXG4gIEdCOiAvXihHQlswLTldezJ9KVtBLVpdezR9XFxkezE0fSQvLFxuICBHRTogL14oR0VbMC05XXsyfSlbQS1aMC05XXsyfVxcZHsxNn0kLyxcbiAgR0k6IC9eKEdJWzAtOV17Mn0pW0EtWl17NH1bQS1aMC05XXsxNX0kLyxcbiAgR0w6IC9eKEdMWzAtOV17Mn0pXFxkezE0fSQvLFxuICBHUjogL14oR1JbMC05XXsyfSlcXGR7N31bQS1aMC05XXsxNn0kLyxcbiAgR1Q6IC9eKEdUWzAtOV17Mn0pW0EtWjAtOV17NH1bQS1aMC05XXsyMH0kLyxcbiAgSFI6IC9eKEhSWzAtOV17Mn0pXFxkezE3fSQvLFxuICBIVTogL14oSFVbMC05XXsyfSlcXGR7MjR9JC8sXG4gIElFOiAvXihJRVswLTldezJ9KVtBLVowLTldezR9XFxkezE0fSQvLFxuICBJTDogL14oSUxbMC05XXsyfSlcXGR7MTl9JC8sXG4gIElROiAvXihJUVswLTldezJ9KVtBLVpdezR9XFxkezE1fSQvLFxuICBJUjogL14oSVJbMC05XXsyfSkwXFxkezJ9MFxcZHsxOH0kLyxcbiAgSVM6IC9eKElTWzAtOV17Mn0pXFxkezIyfSQvLFxuICBJVDogL14oSVRbMC05XXsyfSlbQS1aXXsxfVxcZHsxMH1bQS1aMC05XXsxMn0kLyxcbiAgSk86IC9eKEpPWzAtOV17Mn0pW0EtWl17NH1cXGR7MjJ9JC8sXG4gIEtXOiAvXihLV1swLTldezJ9KVtBLVpdezR9W0EtWjAtOV17MjJ9JC8sXG4gIEtaOiAvXihLWlswLTldezJ9KVxcZHszfVtBLVowLTldezEzfSQvLFxuICBMQjogL14oTEJbMC05XXsyfSlcXGR7NH1bQS1aMC05XXsyMH0kLyxcbiAgTEM6IC9eKExDWzAtOV17Mn0pW0EtWl17NH1bQS1aMC05XXsyNH0kLyxcbiAgTEk6IC9eKExJWzAtOV17Mn0pXFxkezV9W0EtWjAtOV17MTJ9JC8sXG4gIExUOiAvXihMVFswLTldezJ9KVxcZHsxNn0kLyxcbiAgTFU6IC9eKExVWzAtOV17Mn0pXFxkezN9W0EtWjAtOV17MTN9JC8sXG4gIExWOiAvXihMVlswLTldezJ9KVtBLVpdezR9W0EtWjAtOV17MTN9JC8sXG4gIE1DOiAvXihNQ1swLTldezJ9KVxcZHsxMH1bQS1aMC05XXsxMX1cXGR7Mn0kLyxcbiAgTUQ6IC9eKE1EWzAtOV17Mn0pW0EtWjAtOV17MjB9JC8sXG4gIE1FOiAvXihNRVswLTldezJ9KVxcZHsxOH0kLyxcbiAgTUs6IC9eKE1LWzAtOV17Mn0pXFxkezN9W0EtWjAtOV17MTB9XFxkezJ9JC8sXG4gIE1SOiAvXihNUlswLTldezJ9KVxcZHsyM30kLyxcbiAgTVQ6IC9eKE1UWzAtOV17Mn0pW0EtWl17NH1cXGR7NX1bQS1aMC05XXsxOH0kLyxcbiAgTVU6IC9eKE1VWzAtOV17Mn0pW0EtWl17NH1cXGR7MTl9W0EtWl17M30kLyxcbiAgTkw6IC9eKE5MWzAtOV17Mn0pW0EtWl17NH1cXGR7MTB9JC8sXG4gIE5POiAvXihOT1swLTldezJ9KVxcZHsxMX0kLyxcbiAgUEs6IC9eKFBLWzAtOV17Mn0pW0EtWjAtOV17NH1cXGR7MTZ9JC8sXG4gIFBMOiAvXihQTFswLTldezJ9KVxcZHsyNH0kLyxcbiAgUFM6IC9eKFBTWzAtOV17Mn0pW0EtWjAtOV17NH1cXGR7MjF9JC8sXG4gIFBUOiAvXihQVFswLTldezJ9KVxcZHsyMX0kLyxcbiAgUUE6IC9eKFFBWzAtOV17Mn0pW0EtWl17NH1bQS1aMC05XXsyMX0kLyxcbiAgUk86IC9eKFJPWzAtOV17Mn0pW0EtWl17NH1bQS1aMC05XXsxNn0kLyxcbiAgUlM6IC9eKFJTWzAtOV17Mn0pXFxkezE4fSQvLFxuICBTQTogL14oU0FbMC05XXsyfSlcXGR7Mn1bQS1aMC05XXsxOH0kLyxcbiAgU0M6IC9eKFNDWzAtOV17Mn0pW0EtWl17NH1cXGR7MjB9W0EtWl17M30kLyxcbiAgU0U6IC9eKFNFWzAtOV17Mn0pXFxkezIwfSQvLFxuICBTSTogL14oU0lbMC05XXsyfSlcXGR7MTV9JC8sXG4gIFNLOiAvXihTS1swLTldezJ9KVxcZHsyMH0kLyxcbiAgU006IC9eKFNNWzAtOV17Mn0pW0EtWl17MX1cXGR7MTB9W0EtWjAtOV17MTJ9JC8sXG4gIFNWOiAvXihTVlswLTldezJ9KVtBLVowLTldezR9XFxkezIwfSQvLFxuICBUTDogL14oVExbMC05XXsyfSlcXGR7MTl9JC8sXG4gIFROOiAvXihUTlswLTldezJ9KVxcZHsyMH0kLyxcbiAgVFI6IC9eKFRSWzAtOV17Mn0pXFxkezV9W0EtWjAtOV17MTd9JC8sXG4gIFVBOiAvXihVQVswLTldezJ9KVxcZHs2fVtBLVowLTldezE5fSQvLFxuICBWQTogL14oVkFbMC05XXsyfSlcXGR7MTh9JC8sXG4gIFZHOiAvXihWR1swLTldezJ9KVtBLVowLTldezR9XFxkezE2fSQvLFxuICBYSzogL14oWEtbMC05XXsyfSlcXGR7MTZ9JC9cbn07XG4vKipcbiAqIENoZWNrIHdoZXRoZXIgc3RyaW5nIGhhcyBjb3JyZWN0IHVuaXZlcnNhbCBJQkFOIGZvcm1hdFxuICogVGhlIElCQU4gY29uc2lzdHMgb2YgdXAgdG8gMzQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMsIGFzIGZvbGxvd3M6XG4gKiBDb3VudHJ5IENvZGUgdXNpbmcgSVNPIDMxNjYtMSBhbHBoYS0yLCB0d28gbGV0dGVyc1xuICogY2hlY2sgZGlnaXRzLCB0d28gZGlnaXRzIGFuZFxuICogQmFzaWMgQmFuayBBY2NvdW50IE51bWJlciAoQkJBTiksIHVwIHRvIDMwIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLlxuICogTk9URTogUGVybWl0dGVkIElCQU4gY2hhcmFjdGVycyBhcmU6IGRpZ2l0cyBbMC05XSBhbmQgdGhlIDI2IGxhdGluIGFscGhhYmV0aWMgW0EtWl1cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gc3RyaW5nIHVuZGVyIHZhbGlkYXRpb25cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaGFzVmFsaWRJYmFuRm9ybWF0KHN0cikge1xuICAvLyBTdHJpcCB3aGl0ZSBzcGFjZXMgYW5kIGh5cGhlbnNcbiAgdmFyIHN0cmlwcGVkU3RyID0gc3RyLnJlcGxhY2UoL1tcXHNcXC1dKy9naSwgJycpLnRvVXBwZXJDYXNlKCk7XG4gIHZhciBpc29Db3VudHJ5Q29kZSA9IHN0cmlwcGVkU3RyLnNsaWNlKDAsIDIpLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiBpc29Db3VudHJ5Q29kZSBpbiBpYmFuUmVnZXhUaHJvdWdoQ291bnRyeUNvZGUgJiYgaWJhblJlZ2V4VGhyb3VnaENvdW50cnlDb2RlW2lzb0NvdW50cnlDb2RlXS50ZXN0KHN0cmlwcGVkU3RyKTtcbn1cbi8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHN0cmluZyBoYXMgdmFsaWQgSUJBTiBDaGVja3N1bVxuICAgKiBieSBwZXJmb3JtaW5nIGJhc2ljIG1vZC05NyBvcGVyYXRpb24gYW5kXG4gICAqIHRoZSByZW1haW5kZXIgc2hvdWxkIGVxdWFsIDFcbiAgICogLS0gU3RhcnQgYnkgcmVhcnJhbmdpbmcgdGhlIElCQU4gYnkgbW92aW5nIHRoZSBmb3VyIGluaXRpYWwgY2hhcmFjdGVycyB0byB0aGUgZW5kIG9mIHRoZSBzdHJpbmdcbiAgICogLS0gUmVwbGFjZSBlYWNoIGxldHRlciBpbiB0aGUgc3RyaW5nIHdpdGggdHdvIGRpZ2l0cywgQSAtPiAxMCwgQiA9IDExLCBaID0gMzVcbiAgICogLS0gSW50ZXJwcmV0IHRoZSBzdHJpbmcgYXMgYSBkZWNpbWFsIGludGVnZXIgYW5kXG4gICAqIC0tIGNvbXB1dGUgdGhlIHJlbWFpbmRlciBvbiBkaXZpc2lvbiBieSA5NyAobW9kIDk3KVxuICAgKiBSZWZlcmVuY2U6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ludGVybmF0aW9uYWxfQmFua19BY2NvdW50X051bWJlclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbmZ1bmN0aW9uIGhhc1ZhbGlkSWJhbkNoZWNrc3VtKHN0cikge1xuICB2YXIgc3RyaXBwZWRTdHIgPSBzdHIucmVwbGFjZSgvW15BLVowLTldKy9naSwgJycpLnRvVXBwZXJDYXNlKCk7IC8vIEtlZXAgb25seSBkaWdpdHMgYW5kIEEtWiBsYXRpbiBhbHBoYWJldGljXG5cbiAgdmFyIHJlYXJyYW5nZWQgPSBzdHJpcHBlZFN0ci5zbGljZSg0KSArIHN0cmlwcGVkU3RyLnNsaWNlKDAsIDQpO1xuICB2YXIgYWxwaGFDYXBzUmVwbGFjZWRXaXRoRGlnaXRzID0gcmVhcnJhbmdlZC5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAoY2hhcikge1xuICAgIHJldHVybiBjaGFyLmNoYXJDb2RlQXQoMCkgLSA1NTtcbiAgfSk7XG4gIHZhciByZW1haW5kZXIgPSBhbHBoYUNhcHNSZXBsYWNlZFdpdGhEaWdpdHMubWF0Y2goL1xcZHsxLDd9L2cpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2YWx1ZSkge1xuICAgIHJldHVybiBOdW1iZXIoYWNjICsgdmFsdWUpICUgOTc7XG4gIH0sICcnKTtcbiAgcmV0dXJuIHJlbWFpbmRlciA9PT0gMTtcbn1cblxuZnVuY3Rpb24gaXNJQkFOKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gaGFzVmFsaWRJYmFuRm9ybWF0KHN0cikgJiYgaGFzVmFsaWRJYmFuQ2hlY2tzdW0oc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJTUVJO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaW1laVJlZ2V4V2l0aG91dEh5cGVucyA9IC9eWzAtOV17MTV9JC87XG52YXIgaW1laVJlZ2V4V2l0aEh5cGVucyA9IC9eXFxkezJ9LVxcZHs2fS1cXGR7Nn0tXFxkezF9JC87XG5cbmZ1bmN0aW9uIGlzSU1FSShzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIGRlZmF1bHQgcmVnZXggZm9yIGNoZWNraW5nIGltZWkgaXMgdGhlIG9uZSB3aXRob3V0IGh5cGhlbnNcblxuICB2YXIgaW1laVJlZ2V4ID0gaW1laVJlZ2V4V2l0aG91dEh5cGVucztcblxuICBpZiAob3B0aW9ucy5hbGxvd19oeXBoZW5zKSB7XG4gICAgaW1laVJlZ2V4ID0gaW1laVJlZ2V4V2l0aEh5cGVucztcbiAgfVxuXG4gIGlmICghaW1laVJlZ2V4LnRlc3Qoc3RyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC8tL2csICcnKTtcbiAgdmFyIHN1bSA9IDAsXG4gICAgICBtdWwgPSAyLFxuICAgICAgbCA9IDE0O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGRpZ2l0ID0gc3RyLnN1YnN0cmluZyhsIC0gaSAtIDEsIGwgLSBpKTtcbiAgICB2YXIgdHAgPSBwYXJzZUludChkaWdpdCwgMTApICogbXVsO1xuXG4gICAgaWYgKHRwID49IDEwKSB7XG4gICAgICBzdW0gKz0gdHAgJSAxMCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bSArPSB0cDtcbiAgICB9XG5cbiAgICBpZiAobXVsID09PSAxKSB7XG4gICAgICBtdWwgKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbXVsIC09IDE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNoayA9ICgxMCAtIHN1bSAlIDEwKSAlIDEwO1xuXG4gIGlmIChjaGsgIT09IHBhcnNlSW50KHN0ci5zdWJzdHJpbmcoMTQsIDE1KSwgMTApKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVA7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuMTEuMy4gIEV4YW1wbGVzXG5cbiAgIFRoZSBmb2xsb3dpbmcgYWRkcmVzc2VzXG5cbiAgICAgICAgICAgICBmZTgwOjoxMjM0IChvbiB0aGUgMXN0IGxpbmsgb2YgdGhlIG5vZGUpXG4gICAgICAgICAgICAgZmYwMjo6NTY3OCAob24gdGhlIDV0aCBsaW5rIG9mIHRoZSBub2RlKVxuICAgICAgICAgICAgIGZmMDg6OjlhYmMgKG9uIHRoZSAxMHRoIG9yZ2FuaXphdGlvbiBvZiB0aGUgbm9kZSlcblxuICAgd291bGQgYmUgcmVwcmVzZW50ZWQgYXMgZm9sbG93czpcblxuICAgICAgICAgICAgIGZlODA6OjEyMzQlMVxuICAgICAgICAgICAgIGZmMDI6OjU2NzglNVxuICAgICAgICAgICAgIGZmMDg6OjlhYmMlMTBcblxuICAgKEhlcmUgd2UgYXNzdW1lIGEgbmF0dXJhbCB0cmFuc2xhdGlvbiBmcm9tIGEgem9uZSBpbmRleCB0byB0aGVcbiAgIDx6b25lX2lkPiBwYXJ0LCB3aGVyZSB0aGUgTnRoIHpvbmUgb2YgYW55IHNjb3BlIGlzIHRyYW5zbGF0ZWQgaW50b1xuICAgXCJOXCIuKVxuXG4gICBJZiB3ZSB1c2UgaW50ZXJmYWNlIG5hbWVzIGFzIDx6b25lX2lkPiwgdGhvc2UgYWRkcmVzc2VzIGNvdWxkIGFsc28gYmVcbiAgIHJlcHJlc2VudGVkIGFzIGZvbGxvd3M6XG5cbiAgICAgICAgICAgIGZlODA6OjEyMzQlbmUwXG4gICAgICAgICAgICBmZjAyOjo1Njc4JXB2YzEuM1xuICAgICAgICAgICAgZmYwODo6OWFiYyVpbnRlcmZhY2UxMFxuXG4gICB3aGVyZSB0aGUgaW50ZXJmYWNlIFwibmUwXCIgYmVsb25ncyB0byB0aGUgMXN0IGxpbmssIFwicHZjMS4zXCIgYmVsb25nc1xuICAgdG8gdGhlIDV0aCBsaW5rLCBhbmQgXCJpbnRlcmZhY2UxMFwiIGJlbG9uZ3MgdG8gdGhlIDEwdGggb3JnYW5pemF0aW9uLlxuICogKiAqL1xudmFyIGlwdjRNYXliZSA9IC9eKChbMC05XXxbMS05XVswLTldfDFbMC05XXsyfXwyWzAtNF1bMC05XXwyNVswLTVdKVxcLil7M30oWzAtOV18WzEtOV1bMC05XXwxWzAtOV17Mn18MlswLTRdWzAtOV18MjVbMC01XSkkLztcbnZhciBpcHY2QmxvY2sgPSAvXlswLTlBLUZdezEsNH0kL2k7XG5cbmZ1bmN0aW9uIGlzSVAoc3RyKSB7XG4gIHZhciB2ZXJzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmVyc2lvbiA9IFN0cmluZyh2ZXJzaW9uKTtcblxuICBpZiAoIXZlcnNpb24pIHtcbiAgICByZXR1cm4gaXNJUChzdHIsIDQpIHx8IGlzSVAoc3RyLCA2KTtcbiAgfSBlbHNlIGlmICh2ZXJzaW9uID09PSAnNCcpIHtcbiAgICBpZiAoIWlwdjRNYXliZS50ZXN0KHN0cikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy4nKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnRzWzNdIDw9IDI1NTtcbiAgfSBlbHNlIGlmICh2ZXJzaW9uID09PSAnNicpIHtcbiAgICB2YXIgYWRkcmVzc0FuZFpvbmUgPSBbc3RyXTsgLy8gaXB2NiBhZGRyZXNzZXMgY291bGQgaGF2ZSBzY29wZWQgYXJjaGl0ZWN0dXJlXG4gICAgLy8gYWNjb3JkaW5nIHRvIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM0MDA3I3NlY3Rpb24tMTFcblxuICAgIGlmIChzdHIuaW5jbHVkZXMoJyUnKSkge1xuICAgICAgYWRkcmVzc0FuZFpvbmUgPSBzdHIuc3BsaXQoJyUnKTtcblxuICAgICAgaWYgKGFkZHJlc3NBbmRab25lLmxlbmd0aCAhPT0gMikge1xuICAgICAgICAvLyBpdCBtdXN0IGJlIGp1c3QgdHdvIHBhcnRzXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhZGRyZXNzQW5kWm9uZVswXS5pbmNsdWRlcygnOicpKSB7XG4gICAgICAgIC8vIHRoZSBmaXJzdCBwYXJ0IG11c3QgYmUgdGhlIGFkZHJlc3NcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWRkcmVzc0FuZFpvbmVbMV0gPT09ICcnKSB7XG4gICAgICAgIC8vIHRoZSBzZWNvbmQgcGFydCBtdXN0IG5vdCBiZSBlbXB0eVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGJsb2NrcyA9IGFkZHJlc3NBbmRab25lWzBdLnNwbGl0KCc6Jyk7XG4gICAgdmFyIGZvdW5kT21pc3Npb25CbG9jayA9IGZhbHNlOyAvLyBtYXJrZXIgdG8gaW5kaWNhdGUgOjpcbiAgICAvLyBBdCBsZWFzdCBzb21lIE9TIGFjY2VwdCB0aGUgbGFzdCAzMiBiaXRzIG9mIGFuIElQdjYgYWRkcmVzc1xuICAgIC8vIChpLmUuIDIgb2YgdGhlIGJsb2NrcykgaW4gSVB2NCBub3RhdGlvbiwgYW5kIFJGQyAzNDkzIHNheXNcbiAgICAvLyB0aGF0ICc6OmZmZmY6YS5iLmMuZCcgaXMgdmFsaWQgZm9yIElQdjQtbWFwcGVkIElQdjYgYWRkcmVzc2VzLFxuICAgIC8vIGFuZCAnOjphLmIuYy5kJyBpcyBkZXByZWNhdGVkLCBidXQgYWxzbyB2YWxpZC5cblxuICAgIHZhciBmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgPSBpc0lQKGJsb2Nrc1tibG9ja3MubGVuZ3RoIC0gMV0sIDQpO1xuICAgIHZhciBleHBlY3RlZE51bWJlck9mQmxvY2tzID0gZm91bmRJUHY0VHJhbnNpdGlvbkJsb2NrID8gNyA6IDg7XG5cbiAgICBpZiAoYmxvY2tzLmxlbmd0aCA+IGV4cGVjdGVkTnVtYmVyT2ZCbG9ja3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIGluaXRpYWwgb3IgZmluYWwgOjpcblxuXG4gICAgaWYgKHN0ciA9PT0gJzo6Jykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChzdHIuc3Vic3RyKDAsIDIpID09PSAnOjonKSB7XG4gICAgICBibG9ja3Muc2hpZnQoKTtcbiAgICAgIGJsb2Nrcy5zaGlmdCgpO1xuICAgICAgZm91bmRPbWlzc2lvbkJsb2NrID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIDIpID09PSAnOjonKSB7XG4gICAgICBibG9ja3MucG9wKCk7XG4gICAgICBibG9ja3MucG9wKCk7XG4gICAgICBmb3VuZE9taXNzaW9uQmxvY2sgPSB0cnVlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAvLyB0ZXN0IGZvciBhIDo6IHdoaWNoIGNhbiBub3QgYmUgYXQgdGhlIHN0cmluZyBzdGFydC9lbmRcbiAgICAgIC8vIHNpbmNlIHRob3NlIGNhc2VzIGhhdmUgYmVlbiBoYW5kbGVkIGFib3ZlXG4gICAgICBpZiAoYmxvY2tzW2ldID09PSAnJyAmJiBpID4gMCAmJiBpIDwgYmxvY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKGZvdW5kT21pc3Npb25CbG9jaykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbXVsdGlwbGUgOjogaW4gYWRkcmVzc1xuICAgICAgICB9XG5cbiAgICAgICAgZm91bmRPbWlzc2lvbkJsb2NrID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZm91bmRJUHY0VHJhbnNpdGlvbkJsb2NrICYmIGkgPT09IGJsb2Nrcy5sZW5ndGggLSAxKSB7Ly8gaXQgaGFzIGJlZW4gY2hlY2tlZCBiZWZvcmUgdGhhdCB0aGUgbGFzdFxuICAgICAgICAvLyBibG9jayBpcyBhIHZhbGlkIElQdjQgYWRkcmVzc1xuICAgICAgfSBlbHNlIGlmICghaXB2NkJsb2NrLnRlc3QoYmxvY2tzW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kT21pc3Npb25CbG9jaykge1xuICAgICAgcmV0dXJuIGJsb2Nrcy5sZW5ndGggPj0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmxvY2tzLmxlbmd0aCA9PT0gZXhwZWN0ZWROdW1iZXJPZkJsb2NrcztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJUFJhbmdlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2lzSVAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzSVBcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc3VibmV0TWF5YmUgPSAvXlxcZHsxLDJ9JC87XG5cbmZ1bmN0aW9uIGlzSVBSYW5nZShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KCcvJyk7IC8vIHBhcnRzWzBdIC0+IGlwLCBwYXJ0c1sxXSAtPiBzdWJuZXRcblxuICBpZiAocGFydHMubGVuZ3RoICE9PSAyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFzdWJuZXRNYXliZS50ZXN0KHBhcnRzWzFdKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBEaXNhbGxvdyBwcmVjZWRpbmcgMCBpLmUuIDAxLCAwMiwgLi4uXG5cblxuICBpZiAocGFydHNbMV0ubGVuZ3RoID4gMSAmJiBwYXJ0c1sxXS5zdGFydHNXaXRoKCcwJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gKDAsIF9pc0lQLmRlZmF1bHQpKHBhcnRzWzBdLCA0KSAmJiBwYXJ0c1sxXSA8PSAzMiAmJiBwYXJ0c1sxXSA+PSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lTQk47XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc2JuMTBNYXliZSA9IC9eKD86WzAtOV17OX1YfFswLTldezEwfSkkLztcbnZhciBpc2JuMTNNYXliZSA9IC9eKD86WzAtOV17MTN9KSQvO1xudmFyIGZhY3RvciA9IFsxLCAzXTtcblxuZnVuY3Rpb24gaXNJU0JOKHN0cikge1xuICB2YXIgdmVyc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZlcnNpb24gPSBTdHJpbmcodmVyc2lvbik7XG5cbiAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIGlzSVNCTihzdHIsIDEwKSB8fCBpc0lTQk4oc3RyLCAxMyk7XG4gIH1cblxuICB2YXIgc2FuaXRpemVkID0gc3RyLnJlcGxhY2UoL1tcXHMtXSsvZywgJycpO1xuICB2YXIgY2hlY2tzdW0gPSAwO1xuICB2YXIgaTtcblxuICBpZiAodmVyc2lvbiA9PT0gJzEwJykge1xuICAgIGlmICghaXNibjEwTWF5YmUudGVzdChzYW5pdGl6ZWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgY2hlY2tzdW0gKz0gKGkgKyAxKSAqIHNhbml0aXplZC5jaGFyQXQoaSk7XG4gICAgfVxuXG4gICAgaWYgKHNhbml0aXplZC5jaGFyQXQoOSkgPT09ICdYJykge1xuICAgICAgY2hlY2tzdW0gKz0gMTAgKiAxMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tzdW0gKz0gMTAgKiBzYW5pdGl6ZWQuY2hhckF0KDkpO1xuICAgIH1cblxuICAgIGlmIChjaGVja3N1bSAlIDExID09PSAwKSB7XG4gICAgICByZXR1cm4gISFzYW5pdGl6ZWQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKHZlcnNpb24gPT09ICcxMycpIHtcbiAgICBpZiAoIWlzYm4xM01heWJlLnRlc3Qoc2FuaXRpemVkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICBjaGVja3N1bSArPSBmYWN0b3JbaSAlIDJdICogc2FuaXRpemVkLmNoYXJBdChpKTtcbiAgICB9XG5cbiAgICBpZiAoc2FuaXRpemVkLmNoYXJBdCgxMikgLSAoMTAgLSBjaGVja3N1bSAlIDEwKSAlIDEwID09PSAwKSB7XG4gICAgICByZXR1cm4gISFzYW5pdGl6ZWQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lTSU47XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc2luID0gL15bQS1aXXsyfVswLTlBLVpdezl9WzAtOV0kLztcblxuZnVuY3Rpb24gaXNJU0lOKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmICghaXNpbi50ZXN0KHN0cikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgY2hlY2tzdW1TdHIgPSBzdHIucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKGNoYXJhY3Rlcikge1xuICAgIHJldHVybiBwYXJzZUludChjaGFyYWN0ZXIsIDM2KTtcbiAgfSk7XG4gIHZhciBzdW0gPSAwO1xuICB2YXIgZGlnaXQ7XG4gIHZhciB0bXBOdW07XG4gIHZhciBzaG91bGREb3VibGUgPSB0cnVlO1xuXG4gIGZvciAodmFyIGkgPSBjaGVja3N1bVN0ci5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xuICAgIGRpZ2l0ID0gY2hlY2tzdW1TdHIuc3Vic3RyaW5nKGksIGkgKyAxKTtcbiAgICB0bXBOdW0gPSBwYXJzZUludChkaWdpdCwgMTApO1xuXG4gICAgaWYgKHNob3VsZERvdWJsZSkge1xuICAgICAgdG1wTnVtICo9IDI7XG5cbiAgICAgIGlmICh0bXBOdW0gPj0gMTApIHtcbiAgICAgICAgc3VtICs9IHRtcE51bSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdW0gKz0gdG1wTnVtO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdW0gKz0gdG1wTnVtO1xuICAgIH1cblxuICAgIHNob3VsZERvdWJsZSA9ICFzaG91bGREb3VibGU7XG4gIH1cblxuICByZXR1cm4gcGFyc2VJbnQoc3RyLnN1YnN0cihzdHIubGVuZ3RoIC0gMSksIDEwKSA9PT0gKDEwMDAwIC0gc3VtKSAlIDEwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lTTzMxNjYxQWxwaGEyO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2luY2x1ZGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2luY2x1ZGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gZnJvbSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fMzE2Ni0xX2FscGhhLTJcbnZhciB2YWxpZElTTzMxNjYxQWxwaGEyQ291bnRyaWVzQ29kZXMgPSBbJ0FEJywgJ0FFJywgJ0FGJywgJ0FHJywgJ0FJJywgJ0FMJywgJ0FNJywgJ0FPJywgJ0FRJywgJ0FSJywgJ0FTJywgJ0FUJywgJ0FVJywgJ0FXJywgJ0FYJywgJ0FaJywgJ0JBJywgJ0JCJywgJ0JEJywgJ0JFJywgJ0JGJywgJ0JHJywgJ0JIJywgJ0JJJywgJ0JKJywgJ0JMJywgJ0JNJywgJ0JOJywgJ0JPJywgJ0JRJywgJ0JSJywgJ0JTJywgJ0JUJywgJ0JWJywgJ0JXJywgJ0JZJywgJ0JaJywgJ0NBJywgJ0NDJywgJ0NEJywgJ0NGJywgJ0NHJywgJ0NIJywgJ0NJJywgJ0NLJywgJ0NMJywgJ0NNJywgJ0NOJywgJ0NPJywgJ0NSJywgJ0NVJywgJ0NWJywgJ0NXJywgJ0NYJywgJ0NZJywgJ0NaJywgJ0RFJywgJ0RKJywgJ0RLJywgJ0RNJywgJ0RPJywgJ0RaJywgJ0VDJywgJ0VFJywgJ0VHJywgJ0VIJywgJ0VSJywgJ0VTJywgJ0VUJywgJ0ZJJywgJ0ZKJywgJ0ZLJywgJ0ZNJywgJ0ZPJywgJ0ZSJywgJ0dBJywgJ0dCJywgJ0dEJywgJ0dFJywgJ0dGJywgJ0dHJywgJ0dIJywgJ0dJJywgJ0dMJywgJ0dNJywgJ0dOJywgJ0dQJywgJ0dRJywgJ0dSJywgJ0dTJywgJ0dUJywgJ0dVJywgJ0dXJywgJ0dZJywgJ0hLJywgJ0hNJywgJ0hOJywgJ0hSJywgJ0hUJywgJ0hVJywgJ0lEJywgJ0lFJywgJ0lMJywgJ0lNJywgJ0lOJywgJ0lPJywgJ0lRJywgJ0lSJywgJ0lTJywgJ0lUJywgJ0pFJywgJ0pNJywgJ0pPJywgJ0pQJywgJ0tFJywgJ0tHJywgJ0tIJywgJ0tJJywgJ0tNJywgJ0tOJywgJ0tQJywgJ0tSJywgJ0tXJywgJ0tZJywgJ0taJywgJ0xBJywgJ0xCJywgJ0xDJywgJ0xJJywgJ0xLJywgJ0xSJywgJ0xTJywgJ0xUJywgJ0xVJywgJ0xWJywgJ0xZJywgJ01BJywgJ01DJywgJ01EJywgJ01FJywgJ01GJywgJ01HJywgJ01IJywgJ01LJywgJ01MJywgJ01NJywgJ01OJywgJ01PJywgJ01QJywgJ01RJywgJ01SJywgJ01TJywgJ01UJywgJ01VJywgJ01WJywgJ01XJywgJ01YJywgJ01ZJywgJ01aJywgJ05BJywgJ05DJywgJ05FJywgJ05GJywgJ05HJywgJ05JJywgJ05MJywgJ05PJywgJ05QJywgJ05SJywgJ05VJywgJ05aJywgJ09NJywgJ1BBJywgJ1BFJywgJ1BGJywgJ1BHJywgJ1BIJywgJ1BLJywgJ1BMJywgJ1BNJywgJ1BOJywgJ1BSJywgJ1BTJywgJ1BUJywgJ1BXJywgJ1BZJywgJ1FBJywgJ1JFJywgJ1JPJywgJ1JTJywgJ1JVJywgJ1JXJywgJ1NBJywgJ1NCJywgJ1NDJywgJ1NEJywgJ1NFJywgJ1NHJywgJ1NIJywgJ1NJJywgJ1NKJywgJ1NLJywgJ1NMJywgJ1NNJywgJ1NOJywgJ1NPJywgJ1NSJywgJ1NTJywgJ1NUJywgJ1NWJywgJ1NYJywgJ1NZJywgJ1NaJywgJ1RDJywgJ1REJywgJ1RGJywgJ1RHJywgJ1RIJywgJ1RKJywgJ1RLJywgJ1RMJywgJ1RNJywgJ1ROJywgJ1RPJywgJ1RSJywgJ1RUJywgJ1RWJywgJ1RXJywgJ1RaJywgJ1VBJywgJ1VHJywgJ1VNJywgJ1VTJywgJ1VZJywgJ1VaJywgJ1ZBJywgJ1ZDJywgJ1ZFJywgJ1ZHJywgJ1ZJJywgJ1ZOJywgJ1ZVJywgJ1dGJywgJ1dTJywgJ1lFJywgJ1lUJywgJ1pBJywgJ1pNJywgJ1pXJ107XG5cbmZ1bmN0aW9uIGlzSVNPMzE2NjFBbHBoYTIoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiAoMCwgX2luY2x1ZGVzLmRlZmF1bHQpKHZhbGlkSVNPMzE2NjFBbHBoYTJDb3VudHJpZXNDb2Rlcywgc3RyLnRvVXBwZXJDYXNlKCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lTTzMxNjYxQWxwaGEzO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2luY2x1ZGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2luY2x1ZGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gZnJvbSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fMzE2Ni0xX2FscGhhLTNcbnZhciB2YWxpZElTTzMxNjYxQWxwaGEzQ291bnRyaWVzQ29kZXMgPSBbJ0FGRycsICdBTEEnLCAnQUxCJywgJ0RaQScsICdBU00nLCAnQU5EJywgJ0FHTycsICdBSUEnLCAnQVRBJywgJ0FURycsICdBUkcnLCAnQVJNJywgJ0FCVycsICdBVVMnLCAnQVVUJywgJ0FaRScsICdCSFMnLCAnQkhSJywgJ0JHRCcsICdCUkInLCAnQkxSJywgJ0JFTCcsICdCTFonLCAnQkVOJywgJ0JNVScsICdCVE4nLCAnQk9MJywgJ0JFUycsICdCSUgnLCAnQldBJywgJ0JWVCcsICdCUkEnLCAnSU9UJywgJ0JSTicsICdCR1InLCAnQkZBJywgJ0JESScsICdLSE0nLCAnQ01SJywgJ0NBTicsICdDUFYnLCAnQ1lNJywgJ0NBRicsICdUQ0QnLCAnQ0hMJywgJ0NITicsICdDWFInLCAnQ0NLJywgJ0NPTCcsICdDT00nLCAnQ09HJywgJ0NPRCcsICdDT0snLCAnQ1JJJywgJ0NJVicsICdIUlYnLCAnQ1VCJywgJ0NVVycsICdDWVAnLCAnQ1pFJywgJ0ROSycsICdESkknLCAnRE1BJywgJ0RPTScsICdFQ1UnLCAnRUdZJywgJ1NMVicsICdHTlEnLCAnRVJJJywgJ0VTVCcsICdFVEgnLCAnRkxLJywgJ0ZSTycsICdGSkknLCAnRklOJywgJ0ZSQScsICdHVUYnLCAnUFlGJywgJ0FURicsICdHQUInLCAnR01CJywgJ0dFTycsICdERVUnLCAnR0hBJywgJ0dJQicsICdHUkMnLCAnR1JMJywgJ0dSRCcsICdHTFAnLCAnR1VNJywgJ0dUTScsICdHR1knLCAnR0lOJywgJ0dOQicsICdHVVknLCAnSFRJJywgJ0hNRCcsICdWQVQnLCAnSE5EJywgJ0hLRycsICdIVU4nLCAnSVNMJywgJ0lORCcsICdJRE4nLCAnSVJOJywgJ0lSUScsICdJUkwnLCAnSU1OJywgJ0lTUicsICdJVEEnLCAnSkFNJywgJ0pQTicsICdKRVknLCAnSk9SJywgJ0tBWicsICdLRU4nLCAnS0lSJywgJ1BSSycsICdLT1InLCAnS1dUJywgJ0tHWicsICdMQU8nLCAnTFZBJywgJ0xCTicsICdMU08nLCAnTEJSJywgJ0xCWScsICdMSUUnLCAnTFRVJywgJ0xVWCcsICdNQUMnLCAnTUtEJywgJ01ERycsICdNV0knLCAnTVlTJywgJ01EVicsICdNTEknLCAnTUxUJywgJ01ITCcsICdNVFEnLCAnTVJUJywgJ01VUycsICdNWVQnLCAnTUVYJywgJ0ZTTScsICdNREEnLCAnTUNPJywgJ01ORycsICdNTkUnLCAnTVNSJywgJ01BUicsICdNT1onLCAnTU1SJywgJ05BTScsICdOUlUnLCAnTlBMJywgJ05MRCcsICdOQ0wnLCAnTlpMJywgJ05JQycsICdORVInLCAnTkdBJywgJ05JVScsICdORksnLCAnTU5QJywgJ05PUicsICdPTU4nLCAnUEFLJywgJ1BMVycsICdQU0UnLCAnUEFOJywgJ1BORycsICdQUlknLCAnUEVSJywgJ1BITCcsICdQQ04nLCAnUE9MJywgJ1BSVCcsICdQUkknLCAnUUFUJywgJ1JFVScsICdST1UnLCAnUlVTJywgJ1JXQScsICdCTE0nLCAnU0hOJywgJ0tOQScsICdMQ0EnLCAnTUFGJywgJ1NQTScsICdWQ1QnLCAnV1NNJywgJ1NNUicsICdTVFAnLCAnU0FVJywgJ1NFTicsICdTUkInLCAnU1lDJywgJ1NMRScsICdTR1AnLCAnU1hNJywgJ1NWSycsICdTVk4nLCAnU0xCJywgJ1NPTScsICdaQUYnLCAnU0dTJywgJ1NTRCcsICdFU1AnLCAnTEtBJywgJ1NETicsICdTVVInLCAnU0pNJywgJ1NXWicsICdTV0UnLCAnQ0hFJywgJ1NZUicsICdUV04nLCAnVEpLJywgJ1RaQScsICdUSEEnLCAnVExTJywgJ1RHTycsICdUS0wnLCAnVE9OJywgJ1RUTycsICdUVU4nLCAnVFVSJywgJ1RLTScsICdUQ0EnLCAnVFVWJywgJ1VHQScsICdVS1InLCAnQVJFJywgJ0dCUicsICdVU0EnLCAnVU1JJywgJ1VSWScsICdVWkInLCAnVlVUJywgJ1ZFTicsICdWTk0nLCAnVkdCJywgJ1ZJUicsICdXTEYnLCAnRVNIJywgJ1lFTScsICdaTUInLCAnWldFJ107XG5cbmZ1bmN0aW9uIGlzSVNPMzE2NjFBbHBoYTMoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiAoMCwgX2luY2x1ZGVzLmRlZmF1bHQpKHZhbGlkSVNPMzE2NjFBbHBoYTNDb3VudHJpZXNDb2Rlcywgc3RyLnRvVXBwZXJDYXNlKCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lTTzg2MDE7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8vIGZyb20gaHR0cDovL2dvby5nbC8wZWpISFdcbnZhciBpc284NjAxID0gL14oW1xcKy1dP1xcZHs0fSg/IVxcZHsyfVxcYikpKCgtPykoKDBbMS05XXwxWzAtMl0pKFxcMyhbMTJdXFxkfDBbMS05XXwzWzAxXSkpP3xXKFswLTRdXFxkfDVbMC0zXSkoLT9bMS03XSk/fCgwMFsxLTldfDBbMS05XVxcZHxbMTJdXFxkezJ9fDMoWzAtNV1cXGR8NlsxLTZdKSkpKFtUXFxzXSgoKFswMV1cXGR8MlswLTNdKSgoOj8pWzAtNV1cXGQpP3wyNDo/MDApKFtcXC4sXVxcZCsoPyE6KSk/KT8oXFwxN1swLTVdXFxkKFtcXC4sXVxcZCspPyk/KFt6Wl18KFtcXCstXSkoWzAxXVxcZHwyWzAtM10pOj8oWzAtNV1cXGQpPyk/KT8pPyQvOyAvLyBzYW1lIGFzIGFib3ZlLCBleGNlcHQgd2l0aCBhIHN0cmljdCAnVCcgc2VwYXJhdG9yIGJldHdlZW4gZGF0ZSBhbmQgdGltZVxuXG52YXIgaXNvODYwMVN0cmljdFNlcGFyYXRvciA9IC9eKFtcXCstXT9cXGR7NH0oPyFcXGR7Mn1cXGIpKSgoLT8pKCgwWzEtOV18MVswLTJdKShcXDMoWzEyXVxcZHwwWzEtOV18M1swMV0pKT98VyhbMC00XVxcZHw1WzAtM10pKC0/WzEtN10pP3woMDBbMS05XXwwWzEtOV1cXGR8WzEyXVxcZHsyfXwzKFswLTVdXFxkfDZbMS02XSkpKShbVF0oKChbMDFdXFxkfDJbMC0zXSkoKDo/KVswLTVdXFxkKT98MjQ6PzAwKShbXFwuLF1cXGQrKD8hOikpPyk/KFxcMTdbMC01XVxcZChbXFwuLF1cXGQrKT8pPyhbelpdfChbXFwrLV0pKFswMV1cXGR8MlswLTNdKTo/KFswLTVdXFxkKT8pPyk/KT8kLztcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuXG52YXIgaXNWYWxpZERhdGUgPSBmdW5jdGlvbiBpc1ZhbGlkRGF0ZShzdHIpIHtcbiAgLy8gc3RyIG11c3QgaGF2ZSBwYXNzZWQgdGhlIElTTzg2MDEgY2hlY2tcbiAgLy8gdGhpcyBjaGVjayBpcyBtZWFudCB0byBjYXRjaCBpbnZhbGlkIGRhdGVzXG4gIC8vIGxpa2UgMjAwOS0wMi0zMVxuICAvLyBmaXJzdCBjaGVjayBmb3Igb3JkaW5hbCBkYXRlc1xuICB2YXIgb3JkaW5hbE1hdGNoID0gc3RyLm1hdGNoKC9eKFxcZHs0fSktPyhcXGR7M30pKFsgVF17MX1cXC4qfCQpLyk7XG5cbiAgaWYgKG9yZGluYWxNYXRjaCkge1xuICAgIHZhciBvWWVhciA9IE51bWJlcihvcmRpbmFsTWF0Y2hbMV0pO1xuICAgIHZhciBvRGF5ID0gTnVtYmVyKG9yZGluYWxNYXRjaFsyXSk7IC8vIGlmIGlzIGxlYXAgeWVhclxuXG4gICAgaWYgKG9ZZWFyICUgNCA9PT0gMCAmJiBvWWVhciAlIDEwMCAhPT0gMCB8fCBvWWVhciAlIDQwMCA9PT0gMCkgcmV0dXJuIG9EYXkgPD0gMzY2O1xuICAgIHJldHVybiBvRGF5IDw9IDM2NTtcbiAgfVxuXG4gIHZhciBtYXRjaCA9IHN0ci5tYXRjaCgvKFxcZHs0fSktPyhcXGR7MCwyfSktPyhcXGQqKS8pLm1hcChOdW1iZXIpO1xuICB2YXIgeWVhciA9IG1hdGNoWzFdO1xuICB2YXIgbW9udGggPSBtYXRjaFsyXTtcbiAgdmFyIGRheSA9IG1hdGNoWzNdO1xuICB2YXIgbW9udGhTdHJpbmcgPSBtb250aCA/IFwiMFwiLmNvbmNhdChtb250aCkuc2xpY2UoLTIpIDogbW9udGg7XG4gIHZhciBkYXlTdHJpbmcgPSBkYXkgPyBcIjBcIi5jb25jYXQoZGF5KS5zbGljZSgtMikgOiBkYXk7IC8vIGNyZWF0ZSBhIGRhdGUgb2JqZWN0IGFuZCBjb21wYXJlXG5cbiAgdmFyIGQgPSBuZXcgRGF0ZShcIlwiLmNvbmNhdCh5ZWFyLCBcIi1cIikuY29uY2F0KG1vbnRoU3RyaW5nIHx8ICcwMScsIFwiLVwiKS5jb25jYXQoZGF5U3RyaW5nIHx8ICcwMScpKTtcblxuICBpZiAobW9udGggJiYgZGF5KSB7XG4gICAgcmV0dXJuIGQuZ2V0VVRDRnVsbFllYXIoKSA9PT0geWVhciAmJiBkLmdldFVUQ01vbnRoKCkgKyAxID09PSBtb250aCAmJiBkLmdldFVUQ0RhdGUoKSA9PT0gZGF5O1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBpc0lTTzg2MDEoc3RyKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIGNoZWNrID0gb3B0aW9ucy5zdHJpY3RTZXBhcmF0b3IgPyBpc284NjAxU3RyaWN0U2VwYXJhdG9yLnRlc3Qoc3RyKSA6IGlzbzg2MDEudGVzdChzdHIpO1xuICBpZiAoY2hlY2sgJiYgb3B0aW9ucy5zdHJpY3QpIHJldHVybiBpc1ZhbGlkRGF0ZShzdHIpO1xuICByZXR1cm4gY2hlY2s7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVNSQztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gc2VlIGh0dHA6Ly9pc3JjLmlmcGkub3JnL2VuL2lzcmMtc3RhbmRhcmQvY29kZS1zeW50YXhcbnZhciBpc3JjID0gL15bQS1aXXsyfVswLTlBLVpdezN9XFxkezJ9XFxkezV9JC87XG5cbmZ1bmN0aW9uIGlzSVNSQyhzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIGlzcmMudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lTU047XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc3NuID0gJ15cXFxcZHs0fS0/XFxcXGR7M31bXFxcXGRYXSQnO1xuXG5mdW5jdGlvbiBpc0lTU04oc3RyKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHRlc3RJc3NuID0gaXNzbjtcbiAgdGVzdElzc24gPSBvcHRpb25zLnJlcXVpcmVfaHlwaGVuID8gdGVzdElzc24ucmVwbGFjZSgnPycsICcnKSA6IHRlc3RJc3NuO1xuICB0ZXN0SXNzbiA9IG9wdGlvbnMuY2FzZV9zZW5zaXRpdmUgPyBuZXcgUmVnRXhwKHRlc3RJc3NuKSA6IG5ldyBSZWdFeHAodGVzdElzc24sICdpJyk7XG5cbiAgaWYgKCF0ZXN0SXNzbi50ZXN0KHN0cikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGlnaXRzID0gc3RyLnJlcGxhY2UoJy0nLCAnJykudG9VcHBlckNhc2UoKTtcbiAgdmFyIGNoZWNrc3VtID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRpZ2l0cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkaWdpdCA9IGRpZ2l0c1tpXTtcbiAgICBjaGVja3N1bSArPSAoZGlnaXQgPT09ICdYJyA/IDEwIDogK2RpZ2l0KSAqICg4IC0gaSk7XG4gIH1cblxuICByZXR1cm4gY2hlY2tzdW0gJSAxMSA9PT0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJZGVudGl0eUNhcmQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2YWxpZGF0b3JzID0ge1xuICBFUzogZnVuY3Rpb24gRVMoc3RyKSB7XG4gICAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgICB2YXIgRE5JID0gL15bMC05WC1aXVswLTldezd9W1RSV0FHTVlGUERYQk5KWlNRVkhMQ0tFXSQvO1xuICAgIHZhciBjaGFyc1ZhbHVlID0ge1xuICAgICAgWDogMCxcbiAgICAgIFk6IDEsXG4gICAgICBaOiAyXG4gICAgfTtcbiAgICB2YXIgY29udHJvbERpZ2l0cyA9IFsnVCcsICdSJywgJ1cnLCAnQScsICdHJywgJ00nLCAnWScsICdGJywgJ1AnLCAnRCcsICdYJywgJ0InLCAnTicsICdKJywgJ1onLCAnUycsICdRJywgJ1YnLCAnSCcsICdMJywgJ0MnLCAnSycsICdFJ107IC8vIHNhbml0aXplIHVzZXIgaW5wdXRcblxuICAgIHZhciBzYW5pdGl6ZWQgPSBzdHIudHJpbSgpLnRvVXBwZXJDYXNlKCk7IC8vIHZhbGlkYXRlIHRoZSBkYXRhIHN0cnVjdHVyZVxuXG4gICAgaWYgKCFETkkudGVzdChzYW5pdGl6ZWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyB2YWxpZGF0ZSB0aGUgY29udHJvbCBkaWdpdFxuXG5cbiAgICB2YXIgbnVtYmVyID0gc2FuaXRpemVkLnNsaWNlKDAsIC0xKS5yZXBsYWNlKC9bWCxZLFpdL2csIGZ1bmN0aW9uIChjaGFyKSB7XG4gICAgICByZXR1cm4gY2hhcnNWYWx1ZVtjaGFyXTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2FuaXRpemVkLmVuZHNXaXRoKGNvbnRyb2xEaWdpdHNbbnVtYmVyICUgMjNdKTtcbiAgfSxcbiAgSU46IGZ1bmN0aW9uIElOKHN0cikge1xuICAgIHZhciBETkkgPSAvXlsxLTldXFxkezN9XFxzP1xcZHs0fVxccz9cXGR7NH0kLzsgLy8gbXVsdGlwbGljYXRpb24gdGFibGVcblxuICAgIHZhciBkID0gW1swLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XSwgWzEsIDIsIDMsIDQsIDAsIDYsIDcsIDgsIDksIDVdLCBbMiwgMywgNCwgMCwgMSwgNywgOCwgOSwgNSwgNl0sIFszLCA0LCAwLCAxLCAyLCA4LCA5LCA1LCA2LCA3XSwgWzQsIDAsIDEsIDIsIDMsIDksIDUsIDYsIDcsIDhdLCBbNSwgOSwgOCwgNywgNiwgMCwgNCwgMywgMiwgMV0sIFs2LCA1LCA5LCA4LCA3LCAxLCAwLCA0LCAzLCAyXSwgWzcsIDYsIDUsIDksIDgsIDIsIDEsIDAsIDQsIDNdLCBbOCwgNywgNiwgNSwgOSwgMywgMiwgMSwgMCwgNF0sIFs5LCA4LCA3LCA2LCA1LCA0LCAzLCAyLCAxLCAwXV07IC8vIHBlcm11dGF0aW9uIHRhYmxlXG5cbiAgICB2YXIgcCA9IFtbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0sIFsxLCA1LCA3LCA2LCAyLCA4LCAzLCAwLCA5LCA0XSwgWzUsIDgsIDAsIDMsIDcsIDksIDYsIDEsIDQsIDJdLCBbOCwgOSwgMSwgNiwgMCwgNCwgMywgNSwgMiwgN10sIFs5LCA0LCA1LCAzLCAxLCAyLCA2LCA4LCA3LCAwXSwgWzQsIDIsIDgsIDYsIDUsIDcsIDMsIDksIDAsIDFdLCBbMiwgNywgOSwgMywgOCwgMCwgNiwgNCwgMSwgNV0sIFs3LCAwLCA0LCA2LCA5LCAxLCAzLCAyLCA1LCA4XV07IC8vIHNhbml0aXplIHVzZXIgaW5wdXRcblxuICAgIHZhciBzYW5pdGl6ZWQgPSBzdHIudHJpbSgpOyAvLyB2YWxpZGF0ZSB0aGUgZGF0YSBzdHJ1Y3R1cmVcblxuICAgIGlmICghRE5JLnRlc3Qoc2FuaXRpemVkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjID0gMDtcbiAgICB2YXIgaW52ZXJ0ZWRBcnJheSA9IHNhbml0aXplZC5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcnKS5tYXAoTnVtYmVyKS5yZXZlcnNlKCk7XG4gICAgaW52ZXJ0ZWRBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGkpIHtcbiAgICAgIGMgPSBkW2NdW3BbaSAlIDhdW3ZhbF1dO1xuICAgIH0pO1xuICAgIHJldHVybiBjID09PSAwO1xuICB9LFxuICBJVDogZnVuY3Rpb24gSVQoc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggIT09IDkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc3RyID09PSAnQ0EwMDAwMEFBJykgcmV0dXJuIGZhbHNlOyAvLyBodHRwczovL2l0Lndpa2lwZWRpYS5vcmcvd2lraS9DYXJ0YV9kJTI3aWRlbnRpdCVDMyVBMF9lbGV0dHJvbmljYV9pdGFsaWFuYVxuXG4gICAgcmV0dXJuIHN0ci5zZWFyY2goL0NbQS1aXVswLTldezV9W0EtWl17Mn0vaSkgPiAtMTtcbiAgfSxcbiAgTk86IGZ1bmN0aW9uIE5PKHN0cikge1xuICAgIHZhciBzYW5pdGl6ZWQgPSBzdHIudHJpbSgpO1xuICAgIGlmIChpc05hTihOdW1iZXIoc2FuaXRpemVkKSkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc2FuaXRpemVkLmxlbmd0aCAhPT0gMTEpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc2FuaXRpemVkID09PSAnMDAwMDAwMDAwMDAnKSByZXR1cm4gZmFsc2U7IC8vIGh0dHBzOi8vbm8ud2lraXBlZGlhLm9yZy93aWtpL0YlQzMlQjhkc2Vsc251bW1lclxuXG4gICAgdmFyIGYgPSBzYW5pdGl6ZWQuc3BsaXQoJycpLm1hcChOdW1iZXIpO1xuICAgIHZhciBrMSA9ICgxMSAtICgzICogZlswXSArIDcgKiBmWzFdICsgNiAqIGZbMl0gKyAxICogZlszXSArIDggKiBmWzRdICsgOSAqIGZbNV0gKyA0ICogZls2XSArIDUgKiBmWzddICsgMiAqIGZbOF0pICUgMTEpICUgMTE7XG4gICAgdmFyIGsyID0gKDExIC0gKDUgKiBmWzBdICsgNCAqIGZbMV0gKyAzICogZlsyXSArIDIgKiBmWzNdICsgNyAqIGZbNF0gKyA2ICogZls1XSArIDUgKiBmWzZdICsgNCAqIGZbN10gKyAzICogZls4XSArIDIgKiBrMSkgJSAxMSkgJSAxMTtcbiAgICBpZiAoazEgIT09IGZbOV0gfHwgazIgIT09IGZbMTBdKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gICdoZS1JTCc6IGZ1bmN0aW9uIGhlSUwoc3RyKSB7XG4gICAgdmFyIEROSSA9IC9eXFxkezl9JC87IC8vIHNhbml0aXplIHVzZXIgaW5wdXRcblxuICAgIHZhciBzYW5pdGl6ZWQgPSBzdHIudHJpbSgpOyAvLyB2YWxpZGF0ZSB0aGUgZGF0YSBzdHJ1Y3R1cmVcblxuICAgIGlmICghRE5JLnRlc3Qoc2FuaXRpemVkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBpZCA9IHNhbml0aXplZDtcbiAgICB2YXIgc3VtID0gMCxcbiAgICAgICAgaW5jTnVtO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpZC5sZW5ndGg7IGkrKykge1xuICAgICAgaW5jTnVtID0gTnVtYmVyKGlkW2ldKSAqIChpICUgMiArIDEpOyAvLyBNdWx0aXBseSBudW1iZXIgYnkgMSBvciAyXG5cbiAgICAgIHN1bSArPSBpbmNOdW0gPiA5ID8gaW5jTnVtIC0gOSA6IGluY051bTsgLy8gU3VtIHRoZSBkaWdpdHMgdXAgYW5kIGFkZCB0byB0b3RhbFxuICAgIH1cblxuICAgIHJldHVybiBzdW0gJSAxMCA9PT0gMDtcbiAgfSxcbiAgJ2FyLVROJzogZnVuY3Rpb24gYXJUTihzdHIpIHtcbiAgICB2YXIgRE5JID0gL15cXGR7OH0kLzsgLy8gc2FuaXRpemUgdXNlciBpbnB1dFxuXG4gICAgdmFyIHNhbml0aXplZCA9IHN0ci50cmltKCk7IC8vIHZhbGlkYXRlIHRoZSBkYXRhIHN0cnVjdHVyZVxuXG4gICAgaWYgKCFETkkudGVzdChzYW5pdGl6ZWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gICd6aC1DTic6IGZ1bmN0aW9uIHpoQ04oc3RyKSB7XG4gICAgdmFyIHByb3ZpbmNlc0FuZENpdGllcyA9IFsnMTEnLCAvLyDljJfkuqxcbiAgICAnMTInLCAvLyDlpKnmtKVcbiAgICAnMTMnLCAvLyDmsrPljJdcbiAgICAnMTQnLCAvLyDlsbHopb9cbiAgICAnMTUnLCAvLyDlhoXokpnlj6RcbiAgICAnMjEnLCAvLyDovr3lroFcbiAgICAnMjInLCAvLyDlkInmnpdcbiAgICAnMjMnLCAvLyDpu5HpvpnmsZ9cbiAgICAnMzEnLCAvLyDkuIrmtbdcbiAgICAnMzInLCAvLyDmsZ/oi49cbiAgICAnMzMnLCAvLyDmtZnmsZ9cbiAgICAnMzQnLCAvLyDlronlvr1cbiAgICAnMzUnLCAvLyDnpo/lu7pcbiAgICAnMzYnLCAvLyDmsZ/opb9cbiAgICAnMzcnLCAvLyDlsbHkuJxcbiAgICAnNDEnLCAvLyDmsrPljZdcbiAgICAnNDInLCAvLyDmuZbljJdcbiAgICAnNDMnLCAvLyDmuZbljZdcbiAgICAnNDQnLCAvLyDlub/kuJxcbiAgICAnNDUnLCAvLyDlub/opb9cbiAgICAnNDYnLCAvLyDmtbfljZdcbiAgICAnNTAnLCAvLyDph43luoZcbiAgICAnNTEnLCAvLyDlm5vlt51cbiAgICAnNTInLCAvLyDotLXlt55cbiAgICAnNTMnLCAvLyDkupHljZdcbiAgICAnNTQnLCAvLyDopb/ol49cbiAgICAnNjEnLCAvLyDpmZXopb9cbiAgICAnNjInLCAvLyDnlJjogoNcbiAgICAnNjMnLCAvLyDpnZLmtbdcbiAgICAnNjQnLCAvLyDlroHlpI9cbiAgICAnNjUnLCAvLyDmlrDnloZcbiAgICAnNzEnLCAvLyDlj7Dmub5cbiAgICAnODEnLCAvLyDpppnmuK9cbiAgICAnODInLCAvLyDmvrPpl6hcbiAgICAnOTEnIC8vIOWbveWkllxuICAgIF07XG4gICAgdmFyIHBvd2VycyA9IFsnNycsICc5JywgJzEwJywgJzUnLCAnOCcsICc0JywgJzInLCAnMScsICc2JywgJzMnLCAnNycsICc5JywgJzEwJywgJzUnLCAnOCcsICc0JywgJzInXTtcbiAgICB2YXIgcGFyaXR5Qml0ID0gWycxJywgJzAnLCAnWCcsICc5JywgJzgnLCAnNycsICc2JywgJzUnLCAnNCcsICczJywgJzInXTtcblxuICAgIHZhciBjaGVja0FkZHJlc3NDb2RlID0gZnVuY3Rpb24gY2hlY2tBZGRyZXNzQ29kZShhZGRyZXNzQ29kZSkge1xuICAgICAgcmV0dXJuIHByb3ZpbmNlc0FuZENpdGllcy5pbmNsdWRlcyhhZGRyZXNzQ29kZSk7XG4gICAgfTtcblxuICAgIHZhciBjaGVja0JpcnRoRGF5Q29kZSA9IGZ1bmN0aW9uIGNoZWNrQmlydGhEYXlDb2RlKGJpckRheUNvZGUpIHtcbiAgICAgIHZhciB5eXl5ID0gcGFyc2VJbnQoYmlyRGF5Q29kZS5zdWJzdHJpbmcoMCwgNCksIDEwKTtcbiAgICAgIHZhciBtbSA9IHBhcnNlSW50KGJpckRheUNvZGUuc3Vic3RyaW5nKDQsIDYpLCAxMCk7XG4gICAgICB2YXIgZGQgPSBwYXJzZUludChiaXJEYXlDb2RlLnN1YnN0cmluZyg2KSwgMTApO1xuICAgICAgdmFyIHhkYXRhID0gbmV3IERhdGUoeXl5eSwgbW0gLSAxLCBkZCk7XG5cbiAgICAgIGlmICh4ZGF0YSA+IG5ldyBEYXRlKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgfSBlbHNlIGlmICh4ZGF0YS5nZXRGdWxsWWVhcigpID09PSB5eXl5ICYmIHhkYXRhLmdldE1vbnRoKCkgPT09IG1tIC0gMSAmJiB4ZGF0YS5nZXREYXRlKCkgPT09IGRkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciBnZXRQYXJpdHlCaXQgPSBmdW5jdGlvbiBnZXRQYXJpdHlCaXQoaWRDYXJkTm8pIHtcbiAgICAgIHZhciBpZDE3ID0gaWRDYXJkTm8uc3Vic3RyaW5nKDAsIDE3KTtcbiAgICAgIHZhciBwb3dlciA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTc7IGkrKykge1xuICAgICAgICBwb3dlciArPSBwYXJzZUludChpZDE3LmNoYXJBdChpKSwgMTApICogcGFyc2VJbnQocG93ZXJzW2ldLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBtb2QgPSBwb3dlciAlIDExO1xuICAgICAgcmV0dXJuIHBhcml0eUJpdFttb2RdO1xuICAgIH07XG5cbiAgICB2YXIgY2hlY2tQYXJpdHlCaXQgPSBmdW5jdGlvbiBjaGVja1Bhcml0eUJpdChpZENhcmRObykge1xuICAgICAgcmV0dXJuIGdldFBhcml0eUJpdChpZENhcmRObykgPT09IGlkQ2FyZE5vLmNoYXJBdCgxNykudG9VcHBlckNhc2UoKTtcbiAgICB9O1xuXG4gICAgdmFyIGNoZWNrMTVJZENhcmRObyA9IGZ1bmN0aW9uIGNoZWNrMTVJZENhcmRObyhpZENhcmRObykge1xuICAgICAgdmFyIGNoZWNrID0gL15bMS05XVxcZHs3fSgoMFsxLTldKXwoMVswLTJdKSkoKDBbMS05XSl8KFsxLTJdWzAtOV0pfCgzWzAtMV0pKVxcZHszfSQvLnRlc3QoaWRDYXJkTm8pO1xuICAgICAgaWYgKCFjaGVjaykgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIGFkZHJlc3NDb2RlID0gaWRDYXJkTm8uc3Vic3RyaW5nKDAsIDIpO1xuICAgICAgY2hlY2sgPSBjaGVja0FkZHJlc3NDb2RlKGFkZHJlc3NDb2RlKTtcbiAgICAgIGlmICghY2hlY2spIHJldHVybiBmYWxzZTtcbiAgICAgIHZhciBiaXJEYXlDb2RlID0gXCIxOVwiLmNvbmNhdChpZENhcmROby5zdWJzdHJpbmcoNiwgMTIpKTtcbiAgICAgIGNoZWNrID0gY2hlY2tCaXJ0aERheUNvZGUoYmlyRGF5Q29kZSk7XG4gICAgICBpZiAoIWNoZWNrKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgdmFyIGNoZWNrMThJZENhcmRObyA9IGZ1bmN0aW9uIGNoZWNrMThJZENhcmRObyhpZENhcmRObykge1xuICAgICAgdmFyIGNoZWNrID0gL15bMS05XVxcZHs1fVsxLTldXFxkezN9KCgwWzEtOV0pfCgxWzAtMl0pKSgoMFsxLTldKXwoWzEtMl1bMC05XSl8KDNbMC0xXSkpXFxkezN9KFxcZHx4fFgpJC8udGVzdChpZENhcmRObyk7XG4gICAgICBpZiAoIWNoZWNrKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgYWRkcmVzc0NvZGUgPSBpZENhcmROby5zdWJzdHJpbmcoMCwgMik7XG4gICAgICBjaGVjayA9IGNoZWNrQWRkcmVzc0NvZGUoYWRkcmVzc0NvZGUpO1xuICAgICAgaWYgKCFjaGVjaykgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIGJpckRheUNvZGUgPSBpZENhcmROby5zdWJzdHJpbmcoNiwgMTQpO1xuICAgICAgY2hlY2sgPSBjaGVja0JpcnRoRGF5Q29kZShiaXJEYXlDb2RlKTtcbiAgICAgIGlmICghY2hlY2spIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBjaGVja1Bhcml0eUJpdChpZENhcmRObyk7XG4gICAgfTtcblxuICAgIHZhciBjaGVja0lkQ2FyZE5vID0gZnVuY3Rpb24gY2hlY2tJZENhcmRObyhpZENhcmRObykge1xuICAgICAgdmFyIGNoZWNrID0gL15cXGR7MTV9fChcXGR7MTd9KFxcZHx4fFgpKSQvLnRlc3QoaWRDYXJkTm8pO1xuICAgICAgaWYgKCFjaGVjaykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBpZiAoaWRDYXJkTm8ubGVuZ3RoID09PSAxNSkge1xuICAgICAgICByZXR1cm4gY2hlY2sxNUlkQ2FyZE5vKGlkQ2FyZE5vKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoZWNrMThJZENhcmRObyhpZENhcmRObyk7XG4gICAgfTtcblxuICAgIHJldHVybiBjaGVja0lkQ2FyZE5vKHN0cik7XG4gIH0sXG4gICd6aC1UVyc6IGZ1bmN0aW9uIHpoVFcoc3RyKSB7XG4gICAgdmFyIEFMUEhBQkVUX0NPREVTID0ge1xuICAgICAgQTogMTAsXG4gICAgICBCOiAxMSxcbiAgICAgIEM6IDEyLFxuICAgICAgRDogMTMsXG4gICAgICBFOiAxNCxcbiAgICAgIEY6IDE1LFxuICAgICAgRzogMTYsXG4gICAgICBIOiAxNyxcbiAgICAgIEk6IDM0LFxuICAgICAgSjogMTgsXG4gICAgICBLOiAxOSxcbiAgICAgIEw6IDIwLFxuICAgICAgTTogMjEsXG4gICAgICBOOiAyMixcbiAgICAgIE86IDM1LFxuICAgICAgUDogMjMsXG4gICAgICBROiAyNCxcbiAgICAgIFI6IDI1LFxuICAgICAgUzogMjYsXG4gICAgICBUOiAyNyxcbiAgICAgIFU6IDI4LFxuICAgICAgVjogMjksXG4gICAgICBXOiAzMixcbiAgICAgIFg6IDMwLFxuICAgICAgWTogMzEsXG4gICAgICBaOiAzM1xuICAgIH07XG4gICAgdmFyIHNhbml0aXplZCA9IHN0ci50cmltKCkudG9VcHBlckNhc2UoKTtcbiAgICBpZiAoIS9eW0EtWl1bMC05XXs5fSQvLnRlc3Qoc2FuaXRpemVkKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHNhbml0aXplZCkucmVkdWNlKGZ1bmN0aW9uIChzdW0sIG51bWJlciwgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB2YXIgY29kZSA9IEFMUEhBQkVUX0NPREVTW251bWJlcl07XG4gICAgICAgIHJldHVybiBjb2RlICUgMTAgKiA5ICsgTWF0aC5mbG9vcihjb2RlIC8gMTApO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDkpIHtcbiAgICAgICAgcmV0dXJuICgxMCAtIHN1bSAlIDEwIC0gTnVtYmVyKG51bWJlcikpICUgMTAgPT09IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdW0gKyBOdW1iZXIobnVtYmVyKSAqICg5IC0gaW5kZXgpO1xuICAgIH0sIDApO1xuICB9XG59O1xuXG5mdW5jdGlvbiBpc0lkZW50aXR5Q2FyZChzdHIsIGxvY2FsZSkge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmIChsb2NhbGUgaW4gdmFsaWRhdG9ycykge1xuICAgIHJldHVybiB2YWxpZGF0b3JzW2xvY2FsZV0oc3RyKTtcbiAgfSBlbHNlIGlmIChsb2NhbGUgPT09ICdhbnknKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHZhbGlkYXRvcnMpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb3R3YXJsb3N0L2lzdGFuYnVsL2Jsb2IvbWFzdGVyL2lnbm9yaW5nLWNvZGUtZm9yLWNvdmVyYWdlLm1kI2lnbm9yaW5nLWNvZGUtZm9yLWNvdmVyYWdlLXB1cnBvc2VzXG4gICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZVxuICAgICAgaWYgKHZhbGlkYXRvcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgdmFsaWRhdG9yID0gdmFsaWRhdG9yc1trZXldO1xuXG4gICAgICAgIGlmICh2YWxpZGF0b3Ioc3RyKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2NhbGUgJ1wiLmNvbmNhdChsb2NhbGUsIFwiJ1wiKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSW47XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfdG9TdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvdG9TdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIGlzSW4oc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZhciBpO1xuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob3B0aW9ucykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcblxuICAgIGZvciAoaSBpbiBvcHRpb25zKSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ290d2FybG9zdC9pc3RhbmJ1bC9ibG9iL21hc3Rlci9pZ25vcmluZy1jb2RlLWZvci1jb3ZlcmFnZS5tZCNpZ25vcmluZy1jb2RlLWZvci1jb3ZlcmFnZS1wdXJwb3Nlc1xuICAgICAgLy8gaXN0YW5idWwgaWdub3JlIGVsc2VcbiAgICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIGkpKSB7XG4gICAgICAgIGFycmF5W2ldID0gKDAsIF90b1N0cmluZy5kZWZhdWx0KShvcHRpb25zW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXkuaW5kZXhPZihzdHIpID49IDA7XG4gIH0gZWxzZSBpZiAoX3R5cGVvZihvcHRpb25zKSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShzdHIpO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBvcHRpb25zLmluZGV4T2Yoc3RyKSA+PSAwO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0ludDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGludCA9IC9eKD86Wy0rXT8oPzowfFsxLTldWzAtOV0qKSkkLztcbnZhciBpbnRMZWFkaW5nWmVyb2VzID0gL15bLStdP1swLTldKyQvO1xuXG5mdW5jdGlvbiBpc0ludChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEdldCB0aGUgcmVnZXggdG8gdXNlIGZvciB0ZXN0aW5nLCBiYXNlZCBvbiB3aGV0aGVyXG4gIC8vIGxlYWRpbmcgemVyb2VzIGFyZSBhbGxvd2VkIG9yIG5vdC5cblxuICB2YXIgcmVnZXggPSBvcHRpb25zLmhhc093blByb3BlcnR5KCdhbGxvd19sZWFkaW5nX3plcm9lcycpICYmICFvcHRpb25zLmFsbG93X2xlYWRpbmdfemVyb2VzID8gaW50IDogaW50TGVhZGluZ1plcm9lczsgLy8gQ2hlY2sgbWluL21heC9sdC9ndFxuXG4gIHZhciBtaW5DaGVja1Bhc3NlZCA9ICFvcHRpb25zLmhhc093blByb3BlcnR5KCdtaW4nKSB8fCBzdHIgPj0gb3B0aW9ucy5taW47XG4gIHZhciBtYXhDaGVja1Bhc3NlZCA9ICFvcHRpb25zLmhhc093blByb3BlcnR5KCdtYXgnKSB8fCBzdHIgPD0gb3B0aW9ucy5tYXg7XG4gIHZhciBsdENoZWNrUGFzc2VkID0gIW9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2x0JykgfHwgc3RyIDwgb3B0aW9ucy5sdDtcbiAgdmFyIGd0Q2hlY2tQYXNzZWQgPSAhb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnZ3QnKSB8fCBzdHIgPiBvcHRpb25zLmd0O1xuICByZXR1cm4gcmVnZXgudGVzdChzdHIpICYmIG1pbkNoZWNrUGFzc2VkICYmIG1heENoZWNrUGFzc2VkICYmIGx0Q2hlY2tQYXNzZWQgJiYgZ3RDaGVja1Bhc3NlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNKU09OO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgZGVmYXVsdF9qc29uX29wdGlvbnMgPSB7XG4gIGFsbG93X3ByaW1pdGl2ZXM6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc0pTT04oc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgdHJ5IHtcbiAgICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2pzb25fb3B0aW9ucyk7XG4gICAgdmFyIHByaW1pdGl2ZXMgPSBbXTtcblxuICAgIGlmIChvcHRpb25zLmFsbG93X3ByaW1pdGl2ZXMpIHtcbiAgICAgIHByaW1pdGl2ZXMgPSBbbnVsbCwgZmFsc2UsIHRydWVdO1xuICAgIH1cblxuICAgIHZhciBvYmogPSBKU09OLnBhcnNlKHN0cik7XG4gICAgcmV0dXJuIHByaW1pdGl2ZXMuaW5jbHVkZXMob2JqKSB8fCAhIW9iaiAmJiBfdHlwZW9mKG9iaikgPT09ICdvYmplY3QnO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLyogaWdub3JlICovXG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSldUO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2lzQmFzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNCYXNlNjRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0pXVChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIGRvdFNwbGl0ID0gc3RyLnNwbGl0KCcuJyk7XG4gIHZhciBsZW4gPSBkb3RTcGxpdC5sZW5ndGg7XG5cbiAgaWYgKGxlbiA+IDMgfHwgbGVuIDwgMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkb3RTcGxpdC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyckVsZW0pIHtcbiAgICByZXR1cm4gYWNjICYmICgwLCBfaXNCYXNlLmRlZmF1bHQpKGN1cnJFbGVtLCB7XG4gICAgICB1cmxTYWZlOiB0cnVlXG4gICAgfSk7XG4gIH0sIHRydWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0xhdExvbmc7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbGF0ID0gL15cXCg/WystXT8oOTAoXFwuMCspP3xbMS04XT9cXGQoXFwuXFxkKyk/KSQvO1xudmFyIGxvbmcgPSAvXlxccz9bKy1dPygxODAoXFwuMCspP3wxWzAtN11cXGQoXFwuXFxkKyk/fFxcZHsxLDJ9KFxcLlxcZCspPylcXCk/JC87XG52YXIgbGF0RE1TID0gL14oKFsxLThdP1xcZClcXEQrKFsxLTVdP1xcZHw2MClcXEQrKFsxLTVdP1xcZHw2MCkoXFwuXFxkKyk/fDkwXFxEKzBcXEQrMClcXEQrW05TbnNdPyQvaTtcbnZhciBsb25nRE1TID0gL15cXHMqKFsxLTddP1xcZHsxLDJ9XFxEKyhbMS01XT9cXGR8NjApXFxEKyhbMS01XT9cXGR8NjApKFxcLlxcZCspP3wxODBcXEQrMFxcRCswKVxcRCtbRVdld10/JC9pO1xudmFyIGRlZmF1bHRMYXRMb25nT3B0aW9ucyA9IHtcbiAgY2hlY2tETVM6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc0xhdExvbmcoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRMYXRMb25nT3B0aW9ucyk7XG4gIGlmICghc3RyLmluY2x1ZGVzKCcsJykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHBhaXIgPSBzdHIuc3BsaXQoJywnKTtcbiAgaWYgKHBhaXJbMF0uc3RhcnRzV2l0aCgnKCcpICYmICFwYWlyWzFdLmVuZHNXaXRoKCcpJykgfHwgcGFpclsxXS5lbmRzV2l0aCgnKScpICYmICFwYWlyWzBdLnN0YXJ0c1dpdGgoJygnKSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChvcHRpb25zLmNoZWNrRE1TKSB7XG4gICAgcmV0dXJuIGxhdERNUy50ZXN0KHBhaXJbMF0pICYmIGxvbmdETVMudGVzdChwYWlyWzFdKTtcbiAgfVxuXG4gIHJldHVybiBsYXQudGVzdChwYWlyWzBdKSAmJiBsb25nLnRlc3QocGFpclsxXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTGVuZ3RoO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1yZXN0LXBhcmFtcyAqL1xuZnVuY3Rpb24gaXNMZW5ndGgoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZhciBtaW47XG4gIHZhciBtYXg7XG5cbiAgaWYgKF90eXBlb2Yob3B0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgbWluID0gb3B0aW9ucy5taW4gfHwgMDtcbiAgICBtYXggPSBvcHRpb25zLm1heDtcbiAgfSBlbHNlIHtcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogaXNMZW5ndGgoc3RyLCBtaW4gWywgbWF4XSlcbiAgICBtaW4gPSBhcmd1bWVudHNbMV0gfHwgMDtcbiAgICBtYXggPSBhcmd1bWVudHNbMl07XG4gIH1cblxuICB2YXIgc3Vycm9nYXRlUGFpcnMgPSBzdHIubWF0Y2goL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0vZykgfHwgW107XG4gIHZhciBsZW4gPSBzdHIubGVuZ3RoIC0gc3Vycm9nYXRlUGFpcnMubGVuZ3RoO1xuICByZXR1cm4gbGVuID49IG1pbiAmJiAodHlwZW9mIG1heCA9PT0gJ3VuZGVmaW5lZCcgfHwgbGVuIDw9IG1heCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTG9jYWxlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbG9jYWxlUmVnID0gL15bQS16XXsyLDR9KFtfLV0oW0Etel17NH18W1xcZF17M30pKT8oW18tXShbQS16XXsyfXxbXFxkXXszfSkpPyQvO1xuXG5mdW5jdGlvbiBpc0xvY2FsZShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcblxuICBpZiAoc3RyID09PSAnZW5fVVNfUE9TSVgnIHx8IHN0ciA9PT0gJ2NhX0VTX1ZBTEVOQ0lBJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGxvY2FsZVJlZy50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTG93ZXJjYXNlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0xvd2VyY2FzZShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ciA9PT0gc3RyLnRvTG93ZXJDYXNlKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTUFDQWRkcmVzcztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG1hY0FkZHJlc3MgPSAvXihbMC05YS1mQS1GXVswLTlhLWZBLUZdOil7NX0oWzAtOWEtZkEtRl1bMC05YS1mQS1GXSkkLztcbnZhciBtYWNBZGRyZXNzTm9Db2xvbnMgPSAvXihbMC05YS1mQS1GXSl7MTJ9JC87XG52YXIgbWFjQWRkcmVzc1dpdGhIeXBoZW4gPSAvXihbMC05YS1mQS1GXVswLTlhLWZBLUZdLSl7NX0oWzAtOWEtZkEtRl1bMC05YS1mQS1GXSkkLztcbnZhciBtYWNBZGRyZXNzV2l0aFNwYWNlcyA9IC9eKFswLTlhLWZBLUZdWzAtOWEtZkEtRl1cXHMpezV9KFswLTlhLWZBLUZdWzAtOWEtZkEtRl0pJC87XG52YXIgbWFjQWRkcmVzc1dpdGhEb3RzID0gL14oWzAtOWEtZkEtRl17NH0pLihbMC05YS1mQS1GXXs0fSkuKFswLTlhLWZBLUZdezR9KSQvO1xuXG5mdW5jdGlvbiBpc01BQ0FkZHJlc3Moc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5ub19jb2xvbnMpIHtcbiAgICByZXR1cm4gbWFjQWRkcmVzc05vQ29sb25zLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIHJldHVybiBtYWNBZGRyZXNzLnRlc3Qoc3RyKSB8fCBtYWNBZGRyZXNzV2l0aEh5cGhlbi50ZXN0KHN0cikgfHwgbWFjQWRkcmVzc1dpdGhTcGFjZXMudGVzdChzdHIpIHx8IG1hY0FkZHJlc3NXaXRoRG90cy50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTUQ1O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbWQ1ID0gL15bYS1mMC05XXszMn0kLztcblxuZnVuY3Rpb24gaXNNRDUoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBtZDUudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc01hZ25ldFVSSTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG1hZ25ldFVSSSA9IC9ebWFnbmV0OlxcP3h0PXVybjpbYS16MC05XSs6W2EtejAtOV17MzIsNDB9JmRuPS4rJnRyPS4rJC9pO1xuXG5mdW5jdGlvbiBpc01hZ25ldFVSSSh1cmwpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkodXJsKTtcbiAgcmV0dXJuIG1hZ25ldFVSSS50ZXN0KHVybC50cmltKCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc01pbWVUeXBlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKlxuICBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIHN0cmluZyBtYXRjaGVzIHRvIGEgY29ycmVjdCBNZWRpYSB0eXBlIGZvcm1hdCAoTUlNRSB0eXBlKVxuXG4gIFRoaXMgZnVuY3Rpb24gb25seSBjaGVja3MgaXMgdGhlIHN0cmluZyBmb3JtYXQgZm9sbG93cyB0aGVcbiAgZXRhYmxpc2hlZCBydWxlcyBieSB0aGUgYWNjb3JkaW5nIFJGQyBzcGVjaWZpY2F0aW9ucy5cbiAgVGhpcyBmdW5jdGlvbiBzdXBwb3J0cyAnY2hhcnNldCcgaW4gdGV4dHVhbCBtZWRpYSB0eXBlc1xuICAoaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY2NTcpLlxuXG4gIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgY2hlY2sgYWdhaW5zdCBhbGwgdGhlIG1lZGlhIHR5cGVzIGxpc3RlZFxuICBieSB0aGUgSUFOQSAoaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvbWVkaWEtdHlwZXMueGh0bWwpXG4gIGJlY2F1c2Ugb2YgbGlnaHRuZXNzIHB1cnBvc2VzIDogaXQgd291bGQgcmVxdWlyZSB0byBpbmNsdWRlXG4gIGFsbCB0aGVzZSBNSU1FIHR5cGVzIGluIHRoaXMgbGlicmFpcnksIHdoaWNoIHdvdWxkIHdlaWdoIGl0XG4gIHNpZ25pZmljYW50bHkuIFRoaXMga2luZCBvZiBlZmZvcnQgbWF5YmUgaXMgbm90IHdvcnRoIGZvciB0aGUgdXNlIHRoYXRcbiAgdGhpcyBmdW5jdGlvbiBoYXMgaW4gdGhpcyBlbnRpcmUgbGlicmFpcnkuXG5cbiAgTW9yZSBpbmZvcm1hdGlvbnMgaW4gdGhlIFJGQyBzcGVjaWZpY2F0aW9ucyA6XG4gIC0gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIwNDVcbiAgLSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjA0NlxuICAtIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tMy4xLjEuMVxuICAtIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tMy4xLjEuNVxuKi9cbi8vIE1hdGNoIHNpbXBsZSBNSU1FIHR5cGVzXG4vLyBOQiA6XG4vLyAgIFN1YnR5cGUgbGVuZ3RoIG11c3Qgbm90IGV4Y2VlZCAxMDAgY2hhcmFjdGVycy5cbi8vICAgVGhpcyBydWxlIGRvZXMgbm90IGNvbXBseSB0byB0aGUgUkZDIHNwZWNzICh3aGF0IGlzIHRoZSBtYXggbGVuZ3RoID8pLlxudmFyIG1pbWVUeXBlU2ltcGxlID0gL14oYXBwbGljYXRpb258YXVkaW98Zm9udHxpbWFnZXxtZXNzYWdlfG1vZGVsfG11bHRpcGFydHx0ZXh0fHZpZGVvKVxcL1thLXpBLVowLTlcXC5cXC1cXCtdezEsMTAwfSQvaTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4vLyBIYW5kbGUgXCJjaGFyc2V0XCIgaW4gXCJ0ZXh0LypcIlxuXG52YXIgbWltZVR5cGVUZXh0ID0gL150ZXh0XFwvW2EtekEtWjAtOVxcLlxcLVxcK117MSwxMDB9O1xccz9jaGFyc2V0PShcIlthLXpBLVowLTlcXC5cXC1cXCtcXHNdezAsNzB9XCJ8W2EtekEtWjAtOVxcLlxcLVxcK117MCw3MH0pKFxccz9cXChbYS16QS1aMC05XFwuXFwtXFwrXFxzXXsxLDIwfVxcKSk/JC9pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbi8vIEhhbmRsZSBcImJvdW5kYXJ5XCIgaW4gXCJtdWx0aXBhcnQvKlwiXG5cbnZhciBtaW1lVHlwZU11bHRpcGFydCA9IC9ebXVsdGlwYXJ0XFwvW2EtekEtWjAtOVxcLlxcLVxcK117MSwxMDB9KDtcXHM/KGJvdW5kYXJ5fGNoYXJzZXQpPShcIlthLXpBLVowLTlcXC5cXC1cXCtcXHNdezAsNzB9XCJ8W2EtekEtWjAtOVxcLlxcLVxcK117MCw3MH0pKFxccz9cXChbYS16QS1aMC05XFwuXFwtXFwrXFxzXXsxLDIwfVxcKSk/KXswLDJ9JC9pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cblxuZnVuY3Rpb24gaXNNaW1lVHlwZShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIG1pbWVUeXBlU2ltcGxlLnRlc3Qoc3RyKSB8fCBtaW1lVHlwZVRleHQudGVzdChzdHIpIHx8IG1pbWVUeXBlTXVsdGlwYXJ0LnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNNb2JpbGVQaG9uZTtcbmV4cG9ydHMubG9jYWxlcyA9IHZvaWQgMDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xudmFyIHBob25lcyA9IHtcbiAgJ2FtLUFNJzogL14oXFwrPzM3NHwwKSgoMTB8Wzl8N11bMC05XSlcXGR7Nn0kfFsyLTRdXFxkezd9JCkvLFxuICAnYXItQUUnOiAvXigoXFwrPzk3MSl8MCk/NVswMjQ1NjhdXFxkezd9JC8sXG4gICdhci1CSCc6IC9eKFxcKz85NzMpPygzfDYpXFxkezd9JC8sXG4gICdhci1EWic6IC9eKFxcKz8yMTN8MCkoNXw2fDcpXFxkezh9JC8sXG4gICdhci1MQic6IC9eKFxcKz85NjEpPygoM3w4MSlcXGR7Nn18N1xcZHs3fSkkLyxcbiAgJ2FyLUVHJzogL14oKFxcKz8yMCl8MCk/MVswMTI1XVxcZHs4fSQvLFxuICAnYXItSVEnOiAvXihcXCs/OTY0fDApPzdbMC05XVxcZHs4fSQvLFxuICAnYXItSk8nOiAvXihcXCs/OTYyfDApPzdbNzg5XVxcZHs3fSQvLFxuICAnYXItS1cnOiAvXihcXCs/OTY1KVs1NjldXFxkezd9JC8sXG4gICdhci1MWSc6IC9eKChcXCs/MjE4KXwwKT8oOVsxLTZdXFxkezd9fFsxLThdXFxkezcsOX0pJC8sXG4gICdhci1NQSc6IC9eKD86KD86XFwrfDAwKTIxMnwwKVs1LTddXFxkezh9JC8sXG4gICdhci1TQSc6IC9eKCE/KFxcKz85NjYpfDApPzVcXGR7OH0kLyxcbiAgJ2FyLVNZJzogL14oIT8oXFwrPzk2Myl8MCk/OVxcZHs4fSQvLFxuICAnYXItVE4nOiAvXihcXCs/MjE2KT9bMjQ1OV1cXGR7N30kLyxcbiAgJ2F6LUFaJzogL14oXFwrOTk0fDApKDVbMDE1XXw3WzA3XXw5OSlcXGR7N30kLyxcbiAgJ2JzLUJBJzogL14oKCgoXFwrfDAwKTM4NzYpfDA2KSkoKChbMC0zXXxbNS02XSlcXGR7Nn0pfCg0XFxkezd9KSkkLyxcbiAgJ2JlLUJZJzogL14oXFwrPzM3NSk/KDI0fDI1fDI5fDMzfDQ0KVxcZHs3fSQvLFxuICAnYmctQkcnOiAvXihcXCs/MzU5fDApPzhbNzg5XVxcZHs3fSQvLFxuICAnYm4tQkQnOiAvXihcXCs/ODgwfDApMVsxMzQ1Njc4OV1bMC05XXs4fSQvLFxuICAnY2EtQUQnOiAvXihcXCszNzYpP1szNDZdXFxkezV9JC8sXG4gICdjcy1DWic6IC9eKFxcKz80MjApPyA/WzEtOV1bMC05XXsyfSA/WzAtOV17M30gP1swLTldezN9JC8sXG4gICdkYS1ESyc6IC9eKFxcKz80NSk/XFxzP1xcZHsyfVxccz9cXGR7Mn1cXHM/XFxkezJ9XFxzP1xcZHsyfSQvLFxuICAnZGUtREUnOiAvXihcXCs0OSk/MD9bMXwzXShbMHw1XVswLTQ1LTldXFxkfDYoWzIzXXwwXFxkPyl8NyhbMC01Ny05XXw2XFxkKSlcXGR7N30kLyxcbiAgJ2RlLUFUJzogL14oXFwrNDN8MClcXGR7MSw0fVxcZHszLDEyfSQvLFxuICAnZGUtQ0gnOiAvXihcXCs0MXwwKSg3WzUtOV0pXFxkezEsN30kLyxcbiAgJ2RlLUxVJzogL14oXFwrMzUyKT8oKDZcXGQxKVxcZHs2fSkkLyxcbiAgJ2VsLUdSJzogL14oXFwrPzMwfDApPyg2OVxcZHs4fSkkLyxcbiAgJ2VuLUFVJzogL14oXFwrPzYxfDApNFxcZHs4fSQvLFxuICAnZW4tR0InOiAvXihcXCs/NDR8MCk3XFxkezl9JC8sXG4gICdlbi1HRyc6IC9eKFxcKz80NHwwKTE0ODFcXGR7Nn0kLyxcbiAgJ2VuLUdIJzogL14oXFwrMjMzfDApKDIwfDUwfDI0fDU0fDI3fDU3fDI2fDU2fDIzfDI4KVxcZHs3fSQvLFxuICAnZW4tSEsnOiAvXihcXCs/ODUyWy1cXHNdPyk/WzQ1Njc4OV1cXGR7M31bLVxcc10/XFxkezR9JC8sXG4gICdlbi1NTyc6IC9eKFxcKz84NTNbLVxcc10/KT9bNl1cXGR7M31bLVxcc10/XFxkezR9JC8sXG4gICdlbi1JRSc6IC9eKFxcKz8zNTN8MCk4WzM1Njc4OV1cXGR7N30kLyxcbiAgJ2VuLUlOJzogL14oXFwrPzkxfDApP1s2Nzg5XVxcZHs5fSQvLFxuICAnZW4tS0UnOiAvXihcXCs/MjU0fDApKDd8MSlcXGR7OH0kLyxcbiAgJ2VuLU1UJzogL14oXFwrPzM1NnwwKT8oOTl8Nzl8Nzd8MjF8Mjd8MjJ8MjUpWzAtOV17Nn0kLyxcbiAgJ2VuLU1VJzogL14oXFwrPzIzMHwwKT9cXGR7OH0kLyxcbiAgJ2VuLU5HJzogL14oXFwrPzIzNHwwKT9bNzg5XVxcZHs5fSQvLFxuICAnZW4tTlonOiAvXihcXCs/NjR8MClbMjhdXFxkezcsOX0kLyxcbiAgJ2VuLVBLJzogL14oKFxcKzkyKXwoMDA5MikpLXswLDF9XFxkezN9LXswLDF9XFxkezd9JHxeXFxkezExfSR8XlxcZHs0fS1cXGR7N30kLyxcbiAgJ2VuLVBIJzogL14oMDl8XFwrNjM5KVxcZHs5fSQvLFxuICAnZW4tUlcnOiAvXihcXCs/MjUwfDApP1s3XVxcZHs4fSQvLFxuICAnZW4tU0cnOiAvXihcXCs2NSk/WzY4OV1cXGR7N30kLyxcbiAgJ2VuLVNMJzogL14oPzowfDk0fFxcKzk0KT8oNygwfDF8Mnw1fDZ8N3w4KSggfC0pP1xcZClcXGR7Nn0kLyxcbiAgJ2VuLVRaJzogL14oXFwrPzI1NXwwKT9bNjddXFxkezh9JC8sXG4gICdlbi1VRyc6IC9eKFxcKz8yNTZ8MCk/WzddXFxkezh9JC8sXG4gICdlbi1VUyc6IC9eKChcXCsxfDEpPyggfC0pPyk/KFxcKFsyLTldWzAtOV17Mn1cXCl8WzItOV1bMC05XXsyfSkoIHwtKT8oWzItOV1bMC05XXsyfSggfC0pP1swLTldezR9KSQvLFxuICAnZW4tWkEnOiAvXihcXCs/Mjd8MClcXGR7OX0kLyxcbiAgJ2VuLVpNJzogL14oXFwrPzI2KT8wOVs1NjddXFxkezd9JC8sXG4gICdlbi1aVyc6IC9eKFxcKzI2MylbMC05XXs5fSQvLFxuICAnZXMtQVInOiAvXlxcKz81NDkoMTF8WzIzNjhdXFxkKVxcZHs4fSQvLFxuICAnZXMtQk8nOiAvXihcXCs/NTkxKT8oNnw3KVxcZHs3fSQvLFxuICAnZXMtQ08nOiAvXihcXCs/NTcpPyhbMS04XXsxfXwzWzAtOV17Mn0pP1syLTldezF9XFxkezZ9JC8sXG4gICdlcy1DTCc6IC9eKFxcKz81NnwwKVsyLTldXFxkezF9XFxkezd9JC8sXG4gICdlcy1DUic6IC9eKFxcKzUwNik/WzItOF1cXGR7N30kLyxcbiAgJ2VzLURPJzogL14oXFwrPzEpPzhbMDI0XTlcXGR7N30kLyxcbiAgJ2VzLUhOJzogL14oXFwrPzUwNCk/Wzl8OF1cXGR7N30kLyxcbiAgJ2VzLUVDJzogL14oXFwrPzU5M3wwKShbMi03XXw5WzItOV0pXFxkezd9JC8sXG4gICdlcy1FUyc6IC9eKFxcKz8zNCk/WzZ8N11cXGR7OH0kLyxcbiAgJ2VzLVBFJzogL14oXFwrPzUxKT85XFxkezh9JC8sXG4gICdlcy1NWCc6IC9eKFxcKz81Mik/KDF8MDEpP1xcZHsxMCwxMX0kLyxcbiAgJ2VzLVBBJzogL14oXFwrPzUwNylcXGR7Nyw4fSQvLFxuICAnZXMtUFknOiAvXihcXCs/NTk1fDApOVs5ODc2XVxcZHs3fSQvLFxuICAnZXMtVVknOiAvXihcXCs1OTh8MCk5WzEtOV1bXFxkXXs2fSQvLFxuICAnZXQtRUUnOiAvXihcXCs/MzcyKT9cXHM/KDV8OFsxLTRdKVxccz8oWzAtOV1cXHM/KXs2LDd9JC8sXG4gICdmYS1JUic6IC9eKFxcKz85OFtcXC1cXHNdP3wwKTlbMC0zOV1cXGRbXFwtXFxzXT9cXGR7M31bXFwtXFxzXT9cXGR7NH0kLyxcbiAgJ2ZpLUZJJzogL14oXFwrPzM1OHwwKVxccz8oNCgwfDF8Mnw0fDV8Nik/fDUwKVxccz8oXFxkXFxzPyl7NCw4fVxcZCQvLFxuICAnZmotRkonOiAvXihcXCs/Njc5KT9cXHM/XFxkezN9XFxzP1xcZHs0fSQvLFxuICAnZm8tRk8nOiAvXihcXCs/Mjk4KT9cXHM/XFxkezJ9XFxzP1xcZHsyfVxccz9cXGR7Mn0kLyxcbiAgJ2ZyLUZSJzogL14oXFwrPzMzfDApWzY3XVxcZHs4fSQvLFxuICAnZnItR0YnOiAvXihcXCs/NTk0fDB8MDA1OTQpWzY3XVxcZHs4fSQvLFxuICAnZnItR1AnOiAvXihcXCs/NTkwfDB8MDA1OTApWzY3XVxcZHs4fSQvLFxuICAnZnItTVEnOiAvXihcXCs/NTk2fDB8MDA1OTYpWzY3XVxcZHs4fSQvLFxuICAnZnItUkUnOiAvXihcXCs/MjYyfDB8MDAyNjIpWzY3XVxcZHs4fSQvLFxuICAnaGUtSUwnOiAvXihcXCs5NzJ8MCkoWzIzNDg5XXw1WzAxMjM0NTY4OV18NzcpWzEtOV1cXGR7Nn0kLyxcbiAgJ2h1LUhVJzogL14oXFwrPzM2KSgyMHwzMHw3MClcXGR7N30kLyxcbiAgJ2lkLUlEJzogL14oXFwrPzYyfDApOCgxWzEyMzQ1Njc4OV18MlsxMjM4XXwzWzEyMzhdfDVbMTIzNTY3ODldfDdbNzhdfDlbNTY3ODldfDhbMTIzNDU2Nzg5XSkoW1xccz98XFxkXXs1LDExfSkkLyxcbiAgJ2l0LUlUJzogL14oXFwrPzM5KT9cXHM/M1xcZHsyfSA/XFxkezYsN30kLyxcbiAgJ2l0LVNNJzogL14oKFxcKzM3OCl8KDA1NDkpfChcXCszOTA1NDkpfChcXCszNzgwNTQ5KSk/NlxcZHs1LDl9JC8sXG4gICdqYS1KUCc6IC9eKFxcKzgxWyBcXC1dPyhcXCgwXFwpKT98MClbNjc4OV0wWyBcXC1dP1xcZHs0fVsgXFwtXT9cXGR7NH0kLyxcbiAgJ2thLUdFJzogL14oXFwrPzk5NSk/KDV8NzkpXFxkezd9JC8sXG4gICdray1LWic6IC9eKFxcKz83fDgpPzdcXGR7OX0kLyxcbiAgJ2tsLUdMJzogL14oXFwrPzI5OSk/XFxzP1xcZHsyfVxccz9cXGR7Mn1cXHM/XFxkezJ9JC8sXG4gICdrby1LUic6IC9eKChcXCs/ODIpWyBcXC1dPyk/MD8xKFswfDF8Nnw3fDh8OV17MX0pWyBcXC1dP1xcZHszLDR9WyBcXC1dP1xcZHs0fSQvLFxuICAnbHQtTFQnOiAvXihcXCszNzB8OClcXGR7OH0kLyxcbiAgJ21zLU1ZJzogL14oXFwrPzY/MDEpezF9KChbMDE0NV17MX0oXFwtfFxccyk/XFxkezcsOH0pfChbMjM2Nzg5XXsxfShcXHN8XFwtKT9cXGR7N30pKSQvLFxuICAnbmItTk8nOiAvXihcXCs/NDcpP1s0OV1cXGR7N30kLyxcbiAgJ25lLU5QJzogL14oXFwrPzk3Nyk/OVs3OF1cXGR7OH0kLyxcbiAgJ25sLUJFJzogL14oXFwrPzMyfDApND9cXGR7OH0kLyxcbiAgJ25sLU5MJzogL14oKChcXCt8MDApPzMxXFwoMFxcKSl8KChcXCt8MDApPzMxKXwwKTZ7MX1cXGR7OH0kLyxcbiAgJ25uLU5PJzogL14oXFwrPzQ3KT9bNDldXFxkezd9JC8sXG4gICdwbC1QTCc6IC9eKFxcKz80OCk/ID9bNS04XVxcZCA/XFxkezN9ID9cXGR7Mn0gP1xcZHsyfSQvLFxuICAncHQtQlInOiAvXigoXFwrPzU1XFwgP1sxLTldezJ9XFwgPyl8KFxcKz81NVxcID9cXChbMS05XXsyfVxcKVxcID8pfCgwWzEtOV17Mn1cXCA/KXwoXFwoWzEtOV17Mn1cXClcXCA/KXwoWzEtOV17Mn1cXCA/KSkoKFxcZHs0fVxcLT9cXGR7NH0pfCg5WzItOV17MX1cXGR7M31cXC0/XFxkezR9KSkkLyxcbiAgJ3B0LVBUJzogL14oXFwrPzM1MSk/OVsxMjM2XVxcZHs3fSQvLFxuICAncm8tUk8nOiAvXihcXCs/ND8wKVxccz83XFxkezJ9KFxcL3xcXHN8XFwufFxcLSk/XFxkezN9KFxcc3xcXC58XFwtKT9cXGR7M30kLyxcbiAgJ3J1LVJVJzogL14oXFwrPzd8OCk/OVxcZHs5fSQvLFxuICAnc2wtU0knOiAvXihcXCszODZcXHM/fDApKFxcZHsxfVxccz9cXGR7M31cXHM/XFxkezJ9XFxzP1xcZHsyfXxcXGR7Mn1cXHM/XFxkezN9XFxzP1xcZHszfSkkLyxcbiAgJ3NrLVNLJzogL14oXFwrPzQyMSk/ID9bMS05XVswLTldezJ9ID9bMC05XXszfSA/WzAtOV17M30kLyxcbiAgJ3NxLUFMJzogL14oXFwrMzU1fDApNls3ODldXFxkezZ9JC8sXG4gICdzci1SUyc6IC9eKFxcKzM4MTZ8MDYpWy0gXFxkXXs1LDl9JC8sXG4gICdzdi1TRSc6IC9eKFxcKz80NnwwKVtcXHNcXC1dPzdbXFxzXFwtXT9bMDIzNjldKFtcXHNcXC1dP1xcZCl7N30kLyxcbiAgJ3RoLVRIJzogL14oXFwrNjZ8NjZ8MClcXGR7OX0kLyxcbiAgJ3RyLVRSJzogL14oXFwrPzkwfDApPzVcXGR7OX0kLyxcbiAgJ3VrLVVBJzogL14oXFwrPzM4fDgpPzBcXGR7OX0kLyxcbiAgJ3V6LVVaJzogL14oXFwrPzk5OCk/KDZbMTI1LTc5XXw3WzEtNjldfDg4fDlcXGQpXFxkezd9JC8sXG4gICd2aS1WTic6IC9eKFxcKz84NHwwKSgoMyhbMi05XSkpfCg1KFsyNjg5XSkpfCg3KFswfDYtOV0pKXwoOChbMS02fDg5XSkpfCg5KFswLTldKSkpKFswLTldezd9KSQvLFxuICAnemgtQ04nOiAvXigoXFwrfDAwKTg2KT8xKFszNTY4XVswLTldfDRbNTc5XXw2WzY3XXw3WzAxMjM1Njc4XXw5WzAxMjM1Njc4OV0pWzAtOV17OH0kLyxcbiAgJ3poLVRXJzogL14oXFwrPzg4NlxcLT98MCk/OVxcZHs4fSQvXG59O1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG4vLyBhbGlhc2VzXG5cbnBob25lc1snZW4tQ0EnXSA9IHBob25lc1snZW4tVVMnXTtcbnBob25lc1snZnItQ0EnXSA9IHBob25lc1snZW4tQ0EnXTtcbnBob25lc1snZnItQkUnXSA9IHBob25lc1snbmwtQkUnXTtcbnBob25lc1snemgtSEsnXSA9IHBob25lc1snZW4tSEsnXTtcbnBob25lc1snemgtTU8nXSA9IHBob25lc1snZW4tTU8nXTtcbnBob25lc1snZ2EtSUUnXSA9IHBob25lc1snZW4tSUUnXTtcblxuZnVuY3Rpb24gaXNNb2JpbGVQaG9uZShzdHIsIGxvY2FsZSwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc3RyaWN0TW9kZSAmJiAhc3RyLnN0YXJ0c1dpdGgoJysnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGxvY2FsZSkpIHtcbiAgICByZXR1cm4gbG9jYWxlLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dvdHdhcmxvc3QvaXN0YW5idWwvYmxvYi9tYXN0ZXIvaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UubWQjaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UtcHVycG9zZXNcbiAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG4gICAgICBpZiAocGhvbmVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIHBob25lID0gcGhvbmVzW2tleV07XG5cbiAgICAgICAgaWYgKHBob25lLnRlc3Qoc3RyKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChsb2NhbGUgaW4gcGhvbmVzKSB7XG4gICAgcmV0dXJuIHBob25lc1tsb2NhbGVdLnRlc3Qoc3RyKTsgLy8gYWxpYXMgZmFsc2V5IGxvY2FsZSBhcyAnYW55J1xuICB9IGVsc2UgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSAnYW55Jykge1xuICAgIGZvciAodmFyIGtleSBpbiBwaG9uZXMpIHtcbiAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG4gICAgICBpZiAocGhvbmVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIHBob25lID0gcGhvbmVzW2tleV07XG5cbiAgICAgICAgaWYgKHBob25lLnRlc3Qoc3RyKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2NhbGUgJ1wiLmNvbmNhdChsb2NhbGUsIFwiJ1wiKSk7XG59XG5cbnZhciBsb2NhbGVzID0gT2JqZWN0LmtleXMocGhvbmVzKTtcbmV4cG9ydHMubG9jYWxlcyA9IGxvY2FsZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc01vbmdvSWQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfaXNIZXhhZGVjaW1hbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNIZXhhZGVjaW1hbFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzTW9uZ29JZChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuICgwLCBfaXNIZXhhZGVjaW1hbC5kZWZhdWx0KShzdHIpICYmIHN0ci5sZW5ndGggPT09IDI0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc011bHRpYnl0ZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCAqL1xudmFyIG11bHRpYnl0ZSA9IC9bXlxceDAwLVxceDdGXS87XG4vKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cblxuZnVuY3Rpb24gaXNNdWx0aWJ5dGUoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBtdWx0aWJ5dGUudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc051bWVyaWM7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKFwiLi9hbHBoYVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG51bWVyaWNOb1N5bWJvbHMgPSAvXlswLTldKyQvO1xuXG5mdW5jdGlvbiBpc051bWVyaWMoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5ub19zeW1ib2xzKSB7XG4gICAgcmV0dXJuIG51bWVyaWNOb1N5bWJvbHMudGVzdChzdHIpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeWystXT8oWzAtOV0qW1wiLmNvbmNhdCgob3B0aW9ucyB8fCB7fSkubG9jYWxlID8gX2FscGhhLmRlY2ltYWxbb3B0aW9ucy5sb2NhbGVdIDogJy4nLCBcIl0pP1swLTldKyRcIikpLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNPY3RhbDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG9jdGFsID0gL14oMG8pP1swLTddKyQvaTtcblxuZnVuY3Rpb24gaXNPY3RhbChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIG9jdGFsLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNQYXNzcG9ydE51bWJlcjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZWZlcmVuY2U6XG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvIC0tIFdpa2lwZWRpYVxuICogaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LTM2NS9jb21wbGlhbmNlL2V1LXBhc3Nwb3J0LW51bWJlciAtLSBFVSBQYXNzcG9ydCBOdW1iZXJcbiAqIGh0dHBzOi8vY291bnRyeWNvZGUub3JnLyAtLSBDb3VudHJ5IENvZGVzXG4gKi9cbnZhciBwYXNzcG9ydFJlZ2V4QnlDb3VudHJ5Q29kZSA9IHtcbiAgQU06IC9eW0EtWl17Mn1cXGR7N30kLyxcbiAgLy8gQVJNRU5JQVxuICBBUjogL15bQS1aXXszfVxcZHs2fSQvLFxuICAvLyBBUkdFTlRJTkFcbiAgQVQ6IC9eW0EtWl1cXGR7N30kLyxcbiAgLy8gQVVTVFJJQVxuICBBVTogL15bQS1aXVxcZHs3fSQvLFxuICAvLyBBVVNUUkFMSUFcbiAgQkU6IC9eW0EtWl17Mn1cXGR7Nn0kLyxcbiAgLy8gQkVMR0lVTVxuICBCRzogL15cXGR7OX0kLyxcbiAgLy8gQlVMR0FSSUFcbiAgQlk6IC9eW0EtWl17Mn1cXGR7N30kLyxcbiAgLy8gQkVMQVJVU1xuICBDQTogL15bQS1aXXsyfVxcZHs2fSQvLFxuICAvLyBDQU5BREFcbiAgQ0g6IC9eW0EtWl1cXGR7N30kLyxcbiAgLy8gU1dJVFpFUkxBTkRcbiAgQ046IC9eW0dFXVxcZHs4fSQvLFxuICAvLyBDSElOQSBbRz1PcmRpbmFyeSwgRT1FbGVjdHJvbmljXSBmb2xsb3dlZCBieSA4LWRpZ2l0c1xuICBDWTogL15bQS1aXShcXGR7Nn18XFxkezh9KSQvLFxuICAvLyBDWVBSVVNcbiAgQ1o6IC9eXFxkezh9JC8sXG4gIC8vIENaRUNIIFJFUFVCTElDXG4gIERFOiAvXltDRkdISktMTU5QUlRWV1hZWjAtOV17OX0kLyxcbiAgLy8gR0VSTUFOWVxuICBESzogL15cXGR7OX0kLyxcbiAgLy8gREVOTUFSS1xuICBEWjogL15cXGR7OX0kLyxcbiAgLy8gQUxHRVJJQVxuICBFRTogL14oW0EtWl1cXGR7N318W0EtWl17Mn1cXGR7N30pJC8sXG4gIC8vIEVTVE9OSUEgKEsgZm9sbG93ZWQgYnkgNy1kaWdpdHMpLCBlLXBhc3Nwb3J0cyBoYXZlIDIgVVBQRVJDQVNFIGZvbGxvd2VkIGJ5IDcgZGlnaXRzXG4gIEVTOiAvXltBLVowLTldezJ9KFtBLVowLTldPylcXGR7Nn0kLyxcbiAgLy8gU1BBSU5cbiAgRkk6IC9eW0EtWl17Mn1cXGR7N30kLyxcbiAgLy8gRklOTEFORFxuICBGUjogL15cXGR7Mn1bQS1aXXsyfVxcZHs1fSQvLFxuICAvLyBGUkFOQ0VcbiAgR0I6IC9eXFxkezl9JC8sXG4gIC8vIFVOSVRFRCBLSU5HRE9NXG4gIEdSOiAvXltBLVpdezJ9XFxkezd9JC8sXG4gIC8vIEdSRUVDRVxuICBIUjogL15cXGR7OX0kLyxcbiAgLy8gQ1JPQVRJQVxuICBIVTogL15bQS1aXXsyfShcXGR7Nn18XFxkezd9KSQvLFxuICAvLyBIVU5HQVJZXG4gIElFOiAvXltBLVowLTldezJ9XFxkezd9JC8sXG4gIC8vIElSRUxBTkRcbiAgSU46IC9eW0EtWl17MX0tP1xcZHs3fSQvLFxuICAvLyBJTkRJQVxuICBJUzogL14oQSlcXGR7N30kLyxcbiAgLy8gSUNFTEFORFxuICBJVDogL15bQS1aMC05XXsyfVxcZHs3fSQvLFxuICAvLyBJVEFMWVxuICBKUDogL15bQS1aXXsyfVxcZHs3fSQvLFxuICAvLyBKQVBBTlxuICBLUjogL15bTVNdXFxkezh9JC8sXG4gIC8vIFNPVVRIIEtPUkVBLCBSRVBVQkxJQyBPRiBLT1JFQSwgW1M9UFMgUGFzc3BvcnRzLCBNPVBNIFBhc3Nwb3J0c11cbiAgTFQ6IC9eW0EtWjAtOV17OH0kLyxcbiAgLy8gTElUSFVBTklBXG4gIExVOiAvXltBLVowLTldezh9JC8sXG4gIC8vIExVWEVNQlVSR1xuICBMVjogL15bQS1aMC05XXsyfVxcZHs3fSQvLFxuICAvLyBMQVRWSUFcbiAgTVQ6IC9eXFxkezd9JC8sXG4gIC8vIE1BTFRBXG4gIE5MOiAvXltBLVpdezJ9W0EtWjAtOV17Nn1cXGQkLyxcbiAgLy8gTkVUSEVSTEFORFNcbiAgUE86IC9eW0EtWl17Mn1cXGR7N30kLyxcbiAgLy8gUE9MQU5EXG4gIFBUOiAvXltBLVpdXFxkezZ9JC8sXG4gIC8vIFBPUlRVR0FMXG4gIFJPOiAvXlxcZHs4LDl9JC8sXG4gIC8vIFJPTUFOSUFcbiAgUlU6IC9eXFxkezJ9XFxkezJ9XFxkezZ9JC8sXG4gIC8vIFJVU1NJQU4gRkVERVJBVElPTlxuICBTRTogL15cXGR7OH0kLyxcbiAgLy8gU1dFREVOXG4gIFNMOiAvXihQKVtBLVpdXFxkezd9JC8sXG4gIC8vIFNMT1ZBTklBXG4gIFNLOiAvXlswLTlBLVpdXFxkezd9JC8sXG4gIC8vIFNMT1ZBS0lBXG4gIFRSOiAvXltBLVpdXFxkezh9JC8sXG4gIC8vIFRVUktFWVxuICBVQTogL15bQS1aXXsyfVxcZHs2fSQvLFxuICAvLyBVS1JBSU5FXG4gIFVTOiAvXlxcZHs5fSQvIC8vIFVOSVRFRCBTVEFURVNcblxufTtcbi8qKlxuICogQ2hlY2sgaWYgc3RyIGlzIGEgdmFsaWQgcGFzc3BvcnQgbnVtYmVyXG4gKiByZWxhdGl2ZSB0byBwcm92aWRlZCBJU08gQ291bnRyeSBDb2RlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb3VudHJ5Q29kZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc1Bhc3Nwb3J0TnVtYmVyKHN0ciwgY291bnRyeUNvZGUpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgLyoqIFJlbW92ZSBBbGwgV2hpdGVzcGFjZXMsIENvbnZlcnQgdG8gVVBQRVJDQVNFICovXG5cbiAgdmFyIG5vcm1hbGl6ZWRTdHIgPSBzdHIucmVwbGFjZSgvXFxzL2csICcnKS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gY291bnRyeUNvZGUudG9VcHBlckNhc2UoKSBpbiBwYXNzcG9ydFJlZ2V4QnlDb3VudHJ5Q29kZSAmJiBwYXNzcG9ydFJlZ2V4QnlDb3VudHJ5Q29kZVtjb3VudHJ5Q29kZV0udGVzdChub3JtYWxpemVkU3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNQb3J0O1xuXG52YXIgX2lzSW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc0ludFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzUG9ydChzdHIpIHtcbiAgcmV0dXJuICgwLCBfaXNJbnQuZGVmYXVsdCkoc3RyLCB7XG4gICAgbWluOiAwLFxuICAgIG1heDogNjU1MzVcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUG9zdGFsQ29kZTtcbmV4cG9ydHMubG9jYWxlcyA9IHZvaWQgMDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gY29tbW9uIHBhdHRlcm5zXG52YXIgdGhyZWVEaWdpdCA9IC9eXFxkezN9JC87XG52YXIgZm91ckRpZ2l0ID0gL15cXGR7NH0kLztcbnZhciBmaXZlRGlnaXQgPSAvXlxcZHs1fSQvO1xudmFyIHNpeERpZ2l0ID0gL15cXGR7Nn0kLztcbnZhciBwYXR0ZXJucyA9IHtcbiAgQUQ6IC9eQURcXGR7M30kLyxcbiAgQVQ6IGZvdXJEaWdpdCxcbiAgQVU6IGZvdXJEaWdpdCxcbiAgQVo6IC9eQVpcXGR7NH0kLyxcbiAgQkU6IGZvdXJEaWdpdCxcbiAgQkc6IGZvdXJEaWdpdCxcbiAgQlI6IC9eXFxkezV9LVxcZHszfSQvLFxuICBCWTogLzJbMS00XXsxfVxcZHs0fSQvLFxuICBDQTogL15bQUJDRUdISktMTU5QUlNUVlhZXVxcZFtBQkNFR0hKLU5QUlNUVi1aXVtcXHNcXC1dP1xcZFtBQkNFR0hKLU5QUlNUVi1aXVxcZCQvaSxcbiAgQ0g6IGZvdXJEaWdpdCxcbiAgQ046IC9eKDBbMS03XXwxWzAxMjM1Nl18MlswLTddfDNbMC02XXw0WzAtN118NVsxLTddfDZbMS03XXw3WzEtNV18OFsxMzQ1XXw5WzA5XSlcXGR7NH0kLyxcbiAgQ1o6IC9eXFxkezN9XFxzP1xcZHsyfSQvLFxuICBERTogZml2ZURpZ2l0LFxuICBESzogZm91ckRpZ2l0LFxuICBETzogZml2ZURpZ2l0LFxuICBEWjogZml2ZURpZ2l0LFxuICBFRTogZml2ZURpZ2l0LFxuICBFUzogL14oNVswLTJdezF9fFswLTRdezF9XFxkezF9KVxcZHszfSQvLFxuICBGSTogZml2ZURpZ2l0LFxuICBGUjogL15cXGR7Mn1cXHM/XFxkezN9JC8sXG4gIEdCOiAvXihnaXJcXHM/MGFhfFthLXpdezEsMn1cXGRbXFxkYS16XT9cXHM/KFxcZFthLXpdezJ9KT8pJC9pLFxuICBHUjogL15cXGR7M31cXHM/XFxkezJ9JC8sXG4gIEhSOiAvXihbMS01XVxcZHs0fSQpLyxcbiAgSFQ6IC9eSFRcXGR7NH0kLyxcbiAgSFU6IGZvdXJEaWdpdCxcbiAgSUQ6IGZpdmVEaWdpdCxcbiAgSUU6IC9eKD8hLiooPzpvKSlbQS16XVxcZFtcXGR3XVxcc1xcd3s0fSQvaSxcbiAgSUw6IC9eKFxcZHs1fXxcXGR7N30pJC8sXG4gIElOOiAvXigoPyExMHwyOXwzNXw1NHw1NXw2NXw2Nnw4Nnw4N3w4OHw4OSlbMS05XVswLTldezV9KSQvLFxuICBJUjogL1xcYig/IShcXGQpXFwxezN9KVsxMy05XXs0fVsxMzQ2LTldWzAxMy05XXs1fVxcYi8sXG4gIElTOiB0aHJlZURpZ2l0LFxuICBJVDogZml2ZURpZ2l0LFxuICBKUDogL15cXGR7M31cXC1cXGR7NH0kLyxcbiAgS0U6IGZpdmVEaWdpdCxcbiAgTEk6IC9eKDk0OFs1LTldfDk0OVswLTddKSQvLFxuICBMVDogL15MVFxcLVxcZHs1fSQvLFxuICBMVTogZm91ckRpZ2l0LFxuICBMVjogL15MVlxcLVxcZHs0fSQvLFxuICBNWDogZml2ZURpZ2l0LFxuICBNVDogL15bQS1aYS16XXszfVxcc3swLDF9XFxkezR9JC8sXG4gIE1ZOiBmaXZlRGlnaXQsXG4gIE5MOiAvXlxcZHs0fVxccz9bYS16XXsyfSQvaSxcbiAgTk86IGZvdXJEaWdpdCxcbiAgTlA6IC9eKDEwfDIxfDIyfDMyfDMzfDM0fDQ0fDQ1fDU2fDU3KVxcZHszfSR8Xig5NzcpJC9pLFxuICBOWjogZm91ckRpZ2l0LFxuICBQTDogL15cXGR7Mn1cXC1cXGR7M30kLyxcbiAgUFI6IC9eMDBbNjc5XVxcZHsyfShbIC1dXFxkezR9KT8kLyxcbiAgUFQ6IC9eXFxkezR9XFwtXFxkezN9PyQvLFxuICBSTzogc2l4RGlnaXQsXG4gIFJVOiBzaXhEaWdpdCxcbiAgU0E6IGZpdmVEaWdpdCxcbiAgU0U6IC9eWzEtOV1cXGR7Mn1cXHM/XFxkezJ9JC8sXG4gIFNHOiBzaXhEaWdpdCxcbiAgU0k6IGZvdXJEaWdpdCxcbiAgU0s6IC9eXFxkezN9XFxzP1xcZHsyfSQvLFxuICBUSDogZml2ZURpZ2l0LFxuICBUTjogZm91ckRpZ2l0LFxuICBUVzogL15cXGR7M30oXFxkezJ9KT8kLyxcbiAgVUE6IGZpdmVEaWdpdCxcbiAgVVM6IC9eXFxkezV9KC1cXGR7NH0pPyQvLFxuICBaQTogZm91ckRpZ2l0LFxuICBaTTogZml2ZURpZ2l0XG59O1xudmFyIGxvY2FsZXMgPSBPYmplY3Qua2V5cyhwYXR0ZXJucyk7XG5leHBvcnRzLmxvY2FsZXMgPSBsb2NhbGVzO1xuXG5mdW5jdGlvbiBpc1Bvc3RhbENvZGUoc3RyLCBsb2NhbGUpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcblxuICBpZiAobG9jYWxlIGluIHBhdHRlcm5zKSB7XG4gICAgcmV0dXJuIHBhdHRlcm5zW2xvY2FsZV0udGVzdChzdHIpO1xuICB9IGVsc2UgaWYgKGxvY2FsZSA9PT0gJ2FueScpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcGF0dGVybnMpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb3R3YXJsb3N0L2lzdGFuYnVsL2Jsb2IvbWFzdGVyL2lnbm9yaW5nLWNvZGUtZm9yLWNvdmVyYWdlLm1kI2lnbm9yaW5nLWNvZGUtZm9yLWNvdmVyYWdlLXB1cnBvc2VzXG4gICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZVxuICAgICAgaWYgKHBhdHRlcm5zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSBwYXR0ZXJuc1trZXldO1xuXG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3Qoc3RyKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2NhbGUgJ1wiLmNvbmNhdChsb2NhbGUsIFwiJ1wiKSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1JGQzMzMzk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIEJhc2VkIG9uIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMzM5I3NlY3Rpb24tNS42ICovXG52YXIgZGF0ZUZ1bGxZZWFyID0gL1swLTldezR9LztcbnZhciBkYXRlTW9udGggPSAvKDBbMS05XXwxWzAtMl0pLztcbnZhciBkYXRlTURheSA9IC8oWzEyXVxcZHwwWzEtOV18M1swMV0pLztcbnZhciB0aW1lSG91ciA9IC8oWzAxXVswLTldfDJbMC0zXSkvO1xudmFyIHRpbWVNaW51dGUgPSAvWzAtNV1bMC05XS87XG52YXIgdGltZVNlY29uZCA9IC8oWzAtNV1bMC05XXw2MCkvO1xudmFyIHRpbWVTZWNGcmFjID0gLyhcXC5bMC05XSspPy87XG52YXIgdGltZU51bU9mZnNldCA9IG5ldyBSZWdFeHAoXCJbLStdXCIuY29uY2F0KHRpbWVIb3VyLnNvdXJjZSwgXCI6XCIpLmNvbmNhdCh0aW1lTWludXRlLnNvdXJjZSkpO1xudmFyIHRpbWVPZmZzZXQgPSBuZXcgUmVnRXhwKFwiKFt6Wl18XCIuY29uY2F0KHRpbWVOdW1PZmZzZXQuc291cmNlLCBcIilcIikpO1xudmFyIHBhcnRpYWxUaW1lID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdCh0aW1lSG91ci5zb3VyY2UsIFwiOlwiKS5jb25jYXQodGltZU1pbnV0ZS5zb3VyY2UsIFwiOlwiKS5jb25jYXQodGltZVNlY29uZC5zb3VyY2UpLmNvbmNhdCh0aW1lU2VjRnJhYy5zb3VyY2UpKTtcbnZhciBmdWxsRGF0ZSA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoZGF0ZUZ1bGxZZWFyLnNvdXJjZSwgXCItXCIpLmNvbmNhdChkYXRlTW9udGguc291cmNlLCBcIi1cIikuY29uY2F0KGRhdGVNRGF5LnNvdXJjZSkpO1xudmFyIGZ1bGxUaW1lID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChwYXJ0aWFsVGltZS5zb3VyY2UpLmNvbmNhdCh0aW1lT2Zmc2V0LnNvdXJjZSkpO1xudmFyIHJmYzMzMzkgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGZ1bGxEYXRlLnNvdXJjZSwgXCJbIHRUXVwiKS5jb25jYXQoZnVsbFRpbWUuc291cmNlKSk7XG5cbmZ1bmN0aW9uIGlzUkZDMzMzOShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHJmYzMzMzkudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1JnYkNvbG9yO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcmdiQ29sb3IgPSAvXnJnYlxcKCgoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKSwpezJ9KFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXCkkLztcbnZhciByZ2JhQ29sb3IgPSAvXnJnYmFcXCgoKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSksKXszfSgwP1xcLlxcZHwxKFxcLjApP3wwKFxcLjApPylcXCkkLztcbnZhciByZ2JDb2xvclBlcmNlbnQgPSAvXnJnYlxcKCgoWzAtOV0lfFsxLTldWzAtOV0lfDEwMCUpLCl7Mn0oWzAtOV0lfFsxLTldWzAtOV0lfDEwMCUpXFwpLztcbnZhciByZ2JhQ29sb3JQZXJjZW50ID0gL15yZ2JhXFwoKChbMC05XSV8WzEtOV1bMC05XSV8MTAwJSksKXszfSgwP1xcLlxcZHwxKFxcLjApP3wwKFxcLjApPylcXCkvO1xuXG5mdW5jdGlvbiBpc1JnYkNvbG9yKHN0cikge1xuICB2YXIgaW5jbHVkZVBlcmNlbnRWYWx1ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKCFpbmNsdWRlUGVyY2VudFZhbHVlcykge1xuICAgIHJldHVybiByZ2JDb2xvci50ZXN0KHN0cikgfHwgcmdiYUNvbG9yLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIHJldHVybiByZ2JDb2xvci50ZXN0KHN0cikgfHwgcmdiYUNvbG9yLnRlc3Qoc3RyKSB8fCByZ2JDb2xvclBlcmNlbnQudGVzdChzdHIpIHx8IHJnYmFDb2xvclBlcmNlbnQudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1NlbVZlcjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9tdWx0aWxpbmVSZWdleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9tdWx0aWxpbmVSZWdleFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmVndWxhciBFeHByZXNzaW9uIHRvIG1hdGNoXG4gKiBzZW1hbnRpYyB2ZXJzaW9uaW5nIChTZW1WZXIpXG4gKiBidWlsdCBmcm9tIG11bHRpLWxpbmUsIG11bHRpLXBhcnRzIHJlZ2V4cFxuICogUmVmZXJlbmNlOiBodHRwczovL3NlbXZlci5vcmcvXG4gKi9cbnZhciBzZW1hbnRpY1ZlcnNpb25pbmdSZWdleCA9ICgwLCBfbXVsdGlsaW5lUmVnZXguZGVmYXVsdCkoWydeKDB8WzEtOV1cXFxcZCopXFxcXC4oMHxbMS05XVxcXFxkKilcXFxcLigwfFsxLTldXFxcXGQqKScsICcoPzotKCg/OjB8WzEtOV1cXFxcZCp8XFxcXGQqW2Etei1dWzAtOWEtei1dKikoPzpcXFxcLig/OjB8WzEtOV1cXFxcZCp8XFxcXGQqW2Etei1dWzAtOWEtei1dKikpKikpJywgJz8oPzpcXFxcKyhbMC05YS16LV0rKD86XFxcXC5bMC05YS16LV0rKSopKT8kJ10sICdpJyk7XG5cbmZ1bmN0aW9uIGlzU2VtVmVyKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc2VtYW50aWNWZXJzaW9uaW5nUmVnZXgudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1NsdWc7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjaGFyc2V0UmVnZXggPSAvXlteXFxzLV9dKD8hLio/Wy1fXXsyLH0pKFthLXowLTktXFxcXF17MSx9KVteXFxzXSpbXi1fXFxzXSQvO1xuXG5mdW5jdGlvbiBpc1NsdWcoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBjaGFyc2V0UmVnZXgudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1N0cm9uZ1Bhc3N3b3JkO1xuXG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHVwcGVyQ2FzZVJlZ2V4ID0gL15bQS1aXSQvO1xudmFyIGxvd2VyQ2FzZVJlZ2V4ID0gL15bYS16XSQvO1xudmFyIG51bWJlclJlZ2V4ID0gL15bMC05XSQvO1xudmFyIHN5bWJvbFJlZ2V4ID0gL15bLSMhJCVeJiooKV8rfH49YHt9XFxbXFxdOlwiOyc8Pj8sLlxcLyBdJC87XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIG1pbkxlbmd0aDogOCxcbiAgbWluTG93ZXJjYXNlOiAxLFxuICBtaW5VcHBlcmNhc2U6IDEsXG4gIG1pbk51bWJlcnM6IDEsXG4gIG1pblN5bWJvbHM6IDEsXG4gIHJldHVyblNjb3JlOiBmYWxzZSxcbiAgcG9pbnRzUGVyVW5pcXVlOiAxLFxuICBwb2ludHNQZXJSZXBlYXQ6IDAuNSxcbiAgcG9pbnRzRm9yQ29udGFpbmluZ0xvd2VyOiAxMCxcbiAgcG9pbnRzRm9yQ29udGFpbmluZ1VwcGVyOiAxMCxcbiAgcG9pbnRzRm9yQ29udGFpbmluZ051bWJlcjogMTAsXG4gIHBvaW50c0ZvckNvbnRhaW5pbmdTeW1ib2w6IDEwXG59O1xuLyogQ291bnRzIG51bWJlciBvZiBvY2N1cnJlbmNlcyBvZiBlYWNoIGNoYXIgaW4gYSBzdHJpbmdcbiAqIGNvdWxkIGJlIG1vdmVkIHRvIHV0aWwvID9cbiovXG5cbmZ1bmN0aW9uIGNvdW50Q2hhcnMoc3RyKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgQXJyYXkuZnJvbShzdHIpLmZvckVhY2goZnVuY3Rpb24gKGNoYXIpIHtcbiAgICB2YXIgY3VyVmFsID0gcmVzdWx0W2NoYXJdO1xuXG4gICAgaWYgKGN1clZhbCkge1xuICAgICAgcmVzdWx0W2NoYXJdICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtjaGFyXSA9IDE7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qIFJldHVybiBpbmZvcm1hdGlvbiBhYm91dCBhIHBhc3N3b3JkICovXG5cblxuZnVuY3Rpb24gYW5hbHl6ZVBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gIHZhciBjaGFyTWFwID0gY291bnRDaGFycyhwYXNzd29yZCk7XG4gIHZhciBhbmFseXNpcyA9IHtcbiAgICBsZW5ndGg6IHBhc3N3b3JkLmxlbmd0aCxcbiAgICB1bmlxdWVDaGFyczogT2JqZWN0LmtleXMoY2hhck1hcCkubGVuZ3RoLFxuICAgIHVwcGVyY2FzZUNvdW50OiAwLFxuICAgIGxvd2VyY2FzZUNvdW50OiAwLFxuICAgIG51bWJlckNvdW50OiAwLFxuICAgIHN5bWJvbENvdW50OiAwXG4gIH07XG4gIE9iamVjdC5rZXlzKGNoYXJNYXApLmZvckVhY2goZnVuY3Rpb24gKGNoYXIpIHtcbiAgICBpZiAodXBwZXJDYXNlUmVnZXgudGVzdChjaGFyKSkge1xuICAgICAgYW5hbHlzaXMudXBwZXJjYXNlQ291bnQgKz0gY2hhck1hcFtjaGFyXTtcbiAgICB9IGVsc2UgaWYgKGxvd2VyQ2FzZVJlZ2V4LnRlc3QoY2hhcikpIHtcbiAgICAgIGFuYWx5c2lzLmxvd2VyY2FzZUNvdW50ICs9IGNoYXJNYXBbY2hhcl07XG4gICAgfSBlbHNlIGlmIChudW1iZXJSZWdleC50ZXN0KGNoYXIpKSB7XG4gICAgICBhbmFseXNpcy5udW1iZXJDb3VudCArPSBjaGFyTWFwW2NoYXJdO1xuICAgIH0gZWxzZSBpZiAoc3ltYm9sUmVnZXgudGVzdChjaGFyKSkge1xuICAgICAgYW5hbHlzaXMuc3ltYm9sQ291bnQgKz0gY2hhck1hcFtjaGFyXTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYW5hbHlzaXM7XG59XG5cbmZ1bmN0aW9uIHNjb3JlUGFzc3dvcmQoYW5hbHlzaXMsIHNjb3JpbmdPcHRpb25zKSB7XG4gIHZhciBwb2ludHMgPSAwO1xuICBwb2ludHMgKz0gYW5hbHlzaXMudW5pcXVlQ2hhcnMgKiBzY29yaW5nT3B0aW9ucy5wb2ludHNQZXJVbmlxdWU7XG4gIHBvaW50cyArPSAoYW5hbHlzaXMubGVuZ3RoIC0gYW5hbHlzaXMudW5pcXVlQ2hhcnMpICogc2NvcmluZ09wdGlvbnMucG9pbnRzUGVyUmVwZWF0O1xuXG4gIGlmIChhbmFseXNpcy5sb3dlcmNhc2VDb3VudCA+IDApIHtcbiAgICBwb2ludHMgKz0gc2NvcmluZ09wdGlvbnMucG9pbnRzRm9yQ29udGFpbmluZ0xvd2VyO1xuICB9XG5cbiAgaWYgKGFuYWx5c2lzLnVwcGVyY2FzZUNvdW50ID4gMCkge1xuICAgIHBvaW50cyArPSBzY29yaW5nT3B0aW9ucy5wb2ludHNGb3JDb250YWluaW5nVXBwZXI7XG4gIH1cblxuICBpZiAoYW5hbHlzaXMubnVtYmVyQ291bnQgPiAwKSB7XG4gICAgcG9pbnRzICs9IHNjb3JpbmdPcHRpb25zLnBvaW50c0ZvckNvbnRhaW5pbmdOdW1iZXI7XG4gIH1cblxuICBpZiAoYW5hbHlzaXMuc3ltYm9sQ291bnQgPiAwKSB7XG4gICAgcG9pbnRzICs9IHNjb3JpbmdPcHRpb25zLnBvaW50c0ZvckNvbnRhaW5pbmdTeW1ib2w7XG4gIH1cblxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5mdW5jdGlvbiBpc1N0cm9uZ1Bhc3N3b3JkKHN0cikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIGFuYWx5c2lzID0gYW5hbHl6ZVBhc3N3b3JkKHN0cik7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlLmRlZmF1bHQpKG9wdGlvbnMgfHwge30sIGRlZmF1bHRPcHRpb25zKTtcblxuICBpZiAob3B0aW9ucy5yZXR1cm5TY29yZSkge1xuICAgIHJldHVybiBzY29yZVBhc3N3b3JkKGFuYWx5c2lzLCBvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBhbmFseXNpcy5sZW5ndGggPj0gb3B0aW9ucy5taW5MZW5ndGggJiYgYW5hbHlzaXMubG93ZXJjYXNlQ291bnQgPj0gb3B0aW9ucy5taW5Mb3dlcmNhc2UgJiYgYW5hbHlzaXMudXBwZXJjYXNlQ291bnQgPj0gb3B0aW9ucy5taW5VcHBlcmNhc2UgJiYgYW5hbHlzaXMubnVtYmVyQ291bnQgPj0gb3B0aW9ucy5taW5OdW1iZXJzICYmIGFuYWx5c2lzLnN5bWJvbENvdW50ID49IG9wdGlvbnMubWluU3ltYm9scztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNTdXJyb2dhdGVQYWlyO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc3Vycm9nYXRlUGFpciA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdLztcblxuZnVuY3Rpb24gaXNTdXJyb2dhdGVQYWlyKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3Vycm9nYXRlUGFpci50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNUYXhJRDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIGFsZ29yaXRobXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi91dGlsL2FsZ29yaXRobXNcIikpO1xuXG52YXIgX2lzRGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNEYXRlXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcbiAqIFRJTiBWYWxpZGF0aW9uXG4gKiBWYWxpZGF0ZXMgVGF4IElkZW50aWZpY2F0aW9uIE51bWJlcnMgKFRJTnMpIGZyb20gdGhlIFVTLCBFVSBtZW1iZXIgc3RhdGVzIGFuZCB0aGUgVW5pdGVkIEtpbmdkb20uXG4gKlxuICogRVUtVUs6XG4gKiBOYXRpb25hbCBUSU4gdmFsaWRpdHkgaXMgY2FsY3VsYXRlZCB1c2luZyBwdWJsaWMgYWxnb3JpdGhtcyBhcyBtYWRlIGF2YWlsYWJsZSBieSBERyBUQVhVRC5cbiAqXG4gKiBTZWUgYGh0dHBzOi8vZWMuZXVyb3BhLmV1L3RheGF0aW9uX2N1c3RvbXMvdGluL3NwZWNzL0ZTLVRJTiUyMEFsZ29yaXRobXMtUHVibGljLmRvY3hgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIFVTOlxuICogQW4gRW1wbG95ZXIgSWRlbnRpZmljYXRpb24gTnVtYmVyIChFSU4pLCBhbHNvIGtub3duIGFzIGEgRmVkZXJhbCBUYXggSWRlbnRpZmljYXRpb24gTnVtYmVyLFxuICogIGlzIHVzZWQgdG8gaWRlbnRpZnkgYSBidXNpbmVzcyBlbnRpdHkuXG4gKlxuICogTk9URVM6XG4gKiAgLSBQcmVmaXggNDcgaXMgYmVpbmcgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSB1c2VcbiAqICAtIFByZWZpeGVzIDI2LCAyNywgNDUsIDQ2IGFuZCA0NyB3ZXJlIHByZXZpb3VzbHkgYXNzaWduZWQgYnkgdGhlIFBoaWxhZGVscGhpYSBjYW1wdXMuXG4gKlxuICogU2VlIGBodHRwOi8vd3d3Lmlycy5nb3YvQnVzaW5lc3Nlcy9TbWFsbC1CdXNpbmVzc2VzLSYtU2VsZi1FbXBsb3llZC9Ib3ctRUlOcy1hcmUtQXNzaWduZWQtYW5kLVZhbGlkLUVJTi1QcmVmaXhlc2BcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG4vLyBMb2NhbGUgZnVuY3Rpb25zXG5cbi8qXG4gKiBiZy1CRyB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoRWRpbmVuIGdyYcW+ZGFuc2tpIG5vbWVyIChFR04v0JXQk9CdKSwgcGVyc29ucyBvbmx5KVxuICogQ2hlY2tzIGlmIGJpcnRoIGRhdGUgKGZpcnN0IHNpeCBkaWdpdHMpIGlzIHZhbGlkIGFuZCBjYWxjdWxhdGVzIGNoZWNrIChsYXN0KSBkaWdpdFxuICovXG5mdW5jdGlvbiBiZ0JnQ2hlY2sodGluKSB7XG4gIC8vIEV4dHJhY3QgZnVsbCB5ZWFyLCBub3JtYWxpemUgbW9udGggYW5kIGNoZWNrIGJpcnRoIGRhdGUgdmFsaWRpdHlcbiAgdmFyIGNlbnR1cnlfeWVhciA9IHRpbi5zbGljZSgwLCAyKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VJbnQodGluLnNsaWNlKDIsIDQpLCAxMCk7XG5cbiAgaWYgKG1vbnRoID4gNDApIHtcbiAgICBtb250aCAtPSA0MDtcbiAgICBjZW50dXJ5X3llYXIgPSBcIjIwXCIuY29uY2F0KGNlbnR1cnlfeWVhcik7XG4gIH0gZWxzZSBpZiAobW9udGggPiAyMCkge1xuICAgIG1vbnRoIC09IDIwO1xuICAgIGNlbnR1cnlfeWVhciA9IFwiMThcIi5jb25jYXQoY2VudHVyeV95ZWFyKTtcbiAgfSBlbHNlIHtcbiAgICBjZW50dXJ5X3llYXIgPSBcIjE5XCIuY29uY2F0KGNlbnR1cnlfeWVhcik7XG4gIH1cblxuICBpZiAobW9udGggPCAxMCkge1xuICAgIG1vbnRoID0gXCIwXCIuY29uY2F0KG1vbnRoKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gXCJcIi5jb25jYXQoY2VudHVyeV95ZWFyLCBcIi9cIikuY29uY2F0KG1vbnRoLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSg0LCA2KSk7XG5cbiAgaWYgKCEoMCwgX2lzRGF0ZS5kZWZhdWx0KShkYXRlLCAnWVlZWS9NTS9ERCcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIHNwbGl0IGRpZ2l0cyBpbnRvIGFuIGFycmF5IGZvciBmdXJ0aGVyIHByb2Nlc3NpbmdcblxuXG4gIHZhciBkaWdpdHMgPSB0aW4uc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBwYXJzZUludChhLCAxMCk7XG4gIH0pOyAvLyBDYWxjdWxhdGUgY2hlY2tzdW0gYnkgbXVsdGlwbHlpbmcgZGlnaXRzIHdpdGggZml4ZWQgdmFsdWVzXG5cbiAgdmFyIG11bHRpcF9sb29rdXAgPSBbMiwgNCwgOCwgNSwgMTAsIDksIDcsIDMsIDZdO1xuICB2YXIgY2hlY2tzdW0gPSAwO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbXVsdGlwX2xvb2t1cC5sZW5ndGg7IGkrKykge1xuICAgIGNoZWNrc3VtICs9IGRpZ2l0c1tpXSAqIG11bHRpcF9sb29rdXBbaV07XG4gIH1cblxuICBjaGVja3N1bSA9IGNoZWNrc3VtICUgMTEgPT09IDEwID8gMCA6IGNoZWNrc3VtICUgMTE7XG4gIHJldHVybiBjaGVja3N1bSA9PT0gZGlnaXRzWzldO1xufVxuLypcbiAqIGNzLUNaIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChSb2Ruw6kgxI3DrXNsbyAoUsSMKSwgcGVyc29ucyBvbmx5KVxuICogQ2hlY2tzIGlmIGJpcnRoIGRhdGUgKGZpcnN0IHNpeCBkaWdpdHMpIGlzIHZhbGlkIGFuZCBkaXZpc2liaWxpdHkgYnkgMTFcbiAqIE1hdGVyaWFsIG5vdCBpbiBERyBUQVhVRCBkb2N1bWVudCBzb3VyY2VkIGZyb206XG4gKiAtYGh0dHBzOi8vbG9yZW5jLmluZm8vM01BMzgxL292ZXJlbmktc3ByYXZub3N0aS1yb2RuZWhvLWNpc2xhLmh0bWBcbiAqIC1gaHR0cHM6Ly93d3cubXZjci5jei9jbGFuZWsvcmFkeS1hLXNsdXpieS1kb2t1bWVudHktcm9kbmUtY2lzbG8uYXNweGBcbiAqL1xuXG5cbmZ1bmN0aW9uIGNzQ3pDaGVjayh0aW4pIHtcbiAgdGluID0gdGluLnJlcGxhY2UoL1xcVy8sICcnKTsgLy8gRXh0cmFjdCBmdWxsIHllYXIgZnJvbSBUSU4gbGVuZ3RoXG5cbiAgdmFyIGZ1bGxfeWVhciA9IHBhcnNlSW50KHRpbi5zbGljZSgwLCAyKSwgMTApO1xuXG4gIGlmICh0aW4ubGVuZ3RoID09PSAxMCkge1xuICAgIGlmIChmdWxsX3llYXIgPCA1NCkge1xuICAgICAgZnVsbF95ZWFyID0gXCIyMFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdWxsX3llYXIgPSBcIjE5XCIuY29uY2F0KGZ1bGxfeWVhcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh0aW4uc2xpY2UoNikgPT09ICcwMDAnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBUaHJlZS16ZXJvIHNlcmlhbCBub3QgYXNzaWduZWQgYmVmb3JlIDE5NTRcblxuXG4gICAgaWYgKGZ1bGxfeWVhciA8IDU0KSB7XG4gICAgICBmdWxsX3llYXIgPSBcIjE5XCIuY29uY2F0KGZ1bGxfeWVhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gTm8gMThYWCB5ZWFycyBzZWVuIGluIGFueSBvZiB0aGUgcmVzb3VyY2VzXG4gICAgfVxuICB9IC8vIEFkZCBtaXNzaW5nIHplcm8gaWYgbmVlZGVkXG5cblxuICBpZiAoZnVsbF95ZWFyLmxlbmd0aCA9PT0gMykge1xuICAgIGZ1bGxfeWVhciA9IFtmdWxsX3llYXIuc2xpY2UoMCwgMiksICcwJywgZnVsbF95ZWFyLnNsaWNlKDIpXS5qb2luKCcnKTtcbiAgfSAvLyBFeHRyYWN0IG1vbnRoIGZyb20gVElOIGFuZCBub3JtYWxpemVcblxuXG4gIHZhciBtb250aCA9IHBhcnNlSW50KHRpbi5zbGljZSgyLCA0KSwgMTApO1xuXG4gIGlmIChtb250aCA+IDUwKSB7XG4gICAgbW9udGggLT0gNTA7XG4gIH1cblxuICBpZiAobW9udGggPiAyMCkge1xuICAgIC8vIE1vbnRoLXBsdXMtdHdlbnR5IHdhcyBvbmx5IGludHJvZHVjZWQgaW4gMjAwNFxuICAgIGlmIChwYXJzZUludChmdWxsX3llYXIsIDEwKSA8IDIwMDQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBtb250aCAtPSAyMDtcbiAgfVxuXG4gIGlmIChtb250aCA8IDEwKSB7XG4gICAgbW9udGggPSBcIjBcIi5jb25jYXQobW9udGgpO1xuICB9IC8vIENoZWNrIGRhdGUgdmFsaWRpdHlcblxuXG4gIHZhciBkYXRlID0gXCJcIi5jb25jYXQoZnVsbF95ZWFyLCBcIi9cIikuY29uY2F0KG1vbnRoLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSg0LCA2KSk7XG5cbiAgaWYgKCEoMCwgX2lzRGF0ZS5kZWZhdWx0KShkYXRlLCAnWVlZWS9NTS9ERCcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIFZlcmlmeSBkaXZpc2liaWxpdHkgYnkgMTFcblxuXG4gIGlmICh0aW4ubGVuZ3RoID09PSAxMCkge1xuICAgIGlmIChwYXJzZUludCh0aW4sIDEwKSAlIDExICE9PSAwKSB7XG4gICAgICAvLyBTb21lIG51bWJlcnMgdXAgdG8gYW5kIGluY2x1ZGluZyAxOTg1IGFyZSBzdGlsbCB2YWxpZCBpZlxuICAgICAgLy8gY2hlY2sgKGxhc3QpIGRpZ2l0IGVxdWFscyAwIGFuZCBtb2R1bG8gb2YgZmlyc3QgOSBkaWdpdHMgZXF1YWxzIDEwXG4gICAgICB2YXIgY2hlY2tkaWdpdCA9IHBhcnNlSW50KHRpbi5zbGljZSgwLCA5KSwgMTApICUgMTE7XG5cbiAgICAgIGlmIChwYXJzZUludChmdWxsX3llYXIsIDEwKSA8IDE5ODYgJiYgY2hlY2tkaWdpdCA9PT0gMTApIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KHRpbi5zbGljZSg5KSwgMTApICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKlxuICogZGUtQVQgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKEFiZ2FiZW5rb250b251bW1lciwgcGVyc29ucy9lbnRpdGllcylcbiAqIFZlcmlmeSBUSU4gdmFsaWRpdHkgYnkgY2FsbGluZyBsdWhuQ2hlY2soKVxuICovXG5cblxuZnVuY3Rpb24gZGVBdENoZWNrKHRpbikge1xuICByZXR1cm4gYWxnb3JpdGhtcy5sdWhuQ2hlY2sodGluKTtcbn1cbi8qXG4gKiBkZS1ERSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoU3RldWVyaWRlbnRpZmlrYXRpb25zbnVtbWVyIChTdGV1ZXItSWROci4pLCBwZXJzb25zIG9ubHkpXG4gKiBUZXN0cyBmb3Igc2luZ2xlIGR1cGxpY2F0ZS90cmlwbGljYXRlIHZhbHVlLCB0aGVuIGNhbGN1bGF0ZXMgSVNPIDcwNjQgY2hlY2sgKGxhc3QpIGRpZ2l0XG4gKiBQYXJ0aWFsIGltcGxlbWVudGF0aW9uIG9mIHNwZWMgKHNhbWUgcmVzdWx0IHdpdGggYm90aCBhbGdvcml0aG1zIGFsd2F5cylcbiAqL1xuXG5cbmZ1bmN0aW9uIGRlRGVDaGVjayh0aW4pIHtcbiAgLy8gU3BsaXQgZGlnaXRzIGludG8gYW4gYXJyYXkgZm9yIGZ1cnRoZXIgcHJvY2Vzc2luZ1xuICB2YXIgZGlnaXRzID0gdGluLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xuICB9KTsgLy8gRmlsbCBhcnJheSB3aXRoIHN0cmluZ3Mgb2YgbnVtYmVyIHBvc2l0aW9uc1xuXG4gIHZhciBvY2N1cmVuY2VzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWdpdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgb2NjdXJlbmNlcy5wdXNoKCcnKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGlnaXRzLmxlbmd0aCAtIDE7IGorKykge1xuICAgICAgaWYgKGRpZ2l0c1tpXSA9PT0gZGlnaXRzW2pdKSB7XG4gICAgICAgIG9jY3VyZW5jZXNbaV0gKz0gajtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gUmVtb3ZlIGRpZ2l0cyB3aXRoIG9uZSBvY2N1cmVuY2UgYW5kIHRlc3QgZm9yIG9ubHkgb25lIGR1cGxpY2F0ZS90cmlwbGljYXRlXG5cblxuICBvY2N1cmVuY2VzID0gb2NjdXJlbmNlcy5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5sZW5ndGggPiAxO1xuICB9KTtcblxuICBpZiAob2NjdXJlbmNlcy5sZW5ndGggIT09IDIgJiYgb2NjdXJlbmNlcy5sZW5ndGggIT09IDMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gSW4gY2FzZSBvZiB0cmlwbGljYXRlIHZhbHVlIG9ubHkgdHdvIGRpZ2l0cyBhcmUgYWxsb3dlZCBuZXh0IHRvIGVhY2ggb3RoZXJcblxuXG4gIGlmIChvY2N1cmVuY2VzWzBdLmxlbmd0aCA9PT0gMykge1xuICAgIHZhciB0cmlwX2xvY2F0aW9ucyA9IG9jY3VyZW5jZXNbMF0uc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbiAgICB9KTtcbiAgICB2YXIgcmVjdXJyZW50ID0gMDsgLy8gQW1vdW50IG9mIG5laWdoYm91ciBvY2N1cmVuY2VzXG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdHJpcF9sb2NhdGlvbnMubGVuZ3RoIC0gMTsgX2krKykge1xuICAgICAgaWYgKHRyaXBfbG9jYXRpb25zW19pXSArIDEgPT09IHRyaXBfbG9jYXRpb25zW19pICsgMV0pIHtcbiAgICAgICAgcmVjdXJyZW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlY3VycmVudCA9PT0gMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbGdvcml0aG1zLmlzbzcwNjRDaGVjayh0aW4pO1xufVxuLypcbiAqIGRrLURLIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChDUFItbnVtbWVyIChwZXJzb25udW1tZXIpLCBwZXJzb25zIG9ubHkpXG4gKiBDaGVja3MgaWYgYmlydGggZGF0ZSAoZmlyc3Qgc2l4IGRpZ2l0cykgaXMgdmFsaWQgYW5kIGFzc2lnbmVkIHRvIGNlbnR1cnkgKHNldmVudGgpIGRpZ2l0LFxuICogYW5kIGNhbGN1bGF0ZXMgY2hlY2sgKGxhc3QpIGRpZ2l0XG4gKi9cblxuXG5mdW5jdGlvbiBka0RrQ2hlY2sodGluKSB7XG4gIHRpbiA9IHRpbi5yZXBsYWNlKC9cXFcvLCAnJyk7IC8vIEV4dHJhY3QgeWVhciwgY2hlY2sgaWYgdmFsaWQgZm9yIGdpdmVuIGNlbnR1cnkgZGlnaXQgYW5kIGFkZCBjZW50dXJ5XG5cbiAgdmFyIHllYXIgPSBwYXJzZUludCh0aW4uc2xpY2UoNCwgNiksIDEwKTtcbiAgdmFyIGNlbnR1cnlfZGlnaXQgPSB0aW4uc2xpY2UoNiwgNyk7XG5cbiAgc3dpdGNoIChjZW50dXJ5X2RpZ2l0KSB7XG4gICAgY2FzZSAnMCc6XG4gICAgY2FzZSAnMSc6XG4gICAgY2FzZSAnMic6XG4gICAgY2FzZSAnMyc6XG4gICAgICB5ZWFyID0gXCIxOVwiLmNvbmNhdCh5ZWFyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnNCc6XG4gICAgY2FzZSAnOSc6XG4gICAgICBpZiAoeWVhciA8IDM3KSB7XG4gICAgICAgIHllYXIgPSBcIjIwXCIuY29uY2F0KHllYXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeWVhciA9IFwiMTlcIi5jb25jYXQoeWVhcik7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICh5ZWFyIDwgMzcpIHtcbiAgICAgICAgeWVhciA9IFwiMjBcIi5jb25jYXQoeWVhcik7XG4gICAgICB9IGVsc2UgaWYgKHllYXIgPiA1OCkge1xuICAgICAgICB5ZWFyID0gXCIxOFwiLmNvbmNhdCh5ZWFyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH0gLy8gQWRkIG1pc3NpbmcgemVybyBpZiBuZWVkZWRcblxuXG4gIGlmICh5ZWFyLmxlbmd0aCA9PT0gMykge1xuICAgIHllYXIgPSBbeWVhci5zbGljZSgwLCAyKSwgJzAnLCB5ZWFyLnNsaWNlKDIpXS5qb2luKCcnKTtcbiAgfSAvLyBDaGVjayBkYXRlIHZhbGlkaXR5XG5cblxuICB2YXIgZGF0ZSA9IFwiXCIuY29uY2F0KHllYXIsIFwiL1wiKS5jb25jYXQodGluLnNsaWNlKDIsIDQpLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSgwLCAyKSk7XG5cbiAgaWYgKCEoMCwgX2lzRGF0ZS5kZWZhdWx0KShkYXRlLCAnWVlZWS9NTS9ERCcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIFNwbGl0IGRpZ2l0cyBpbnRvIGFuIGFycmF5IGZvciBmdXJ0aGVyIHByb2Nlc3NpbmdcblxuXG4gIHZhciBkaWdpdHMgPSB0aW4uc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBwYXJzZUludChhLCAxMCk7XG4gIH0pO1xuICB2YXIgY2hlY2tzdW0gPSAwO1xuICB2YXIgd2VpZ2h0ID0gNDsgLy8gTXVsdGlwbHkgYnkgd2VpZ2h0IGFuZCBhZGQgdG8gY2hlY2tzdW1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgIGNoZWNrc3VtICs9IGRpZ2l0c1tpXSAqIHdlaWdodDtcbiAgICB3ZWlnaHQgLT0gMTtcblxuICAgIGlmICh3ZWlnaHQgPT09IDEpIHtcbiAgICAgIHdlaWdodCA9IDc7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tzdW0gJT0gMTE7XG5cbiAgaWYgKGNoZWNrc3VtID09PSAxKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrc3VtID09PSAwID8gZGlnaXRzWzldID09PSAwIDogZGlnaXRzWzldID09PSAxMSAtIGNoZWNrc3VtO1xufVxuLypcbiAqIGVsLUNZIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChBcml0aG1vcyBGb3JvbG9naWtvdSBNaXRyb291IChBRk0vzpHOps6cKSwgcGVyc29ucyBvbmx5KVxuICogVmVyaWZ5IFRJTiB2YWxpZGl0eSBieSBjYWxjdWxhdGluZyBBU0NJSSB2YWx1ZSBvZiBjaGVjayAobGFzdCkgY2hhcmFjdGVyXG4gKi9cblxuXG5mdW5jdGlvbiBlbEN5Q2hlY2sodGluKSB7XG4gIC8vIHNwbGl0IGRpZ2l0cyBpbnRvIGFuIGFycmF5IGZvciBmdXJ0aGVyIHByb2Nlc3NpbmdcbiAgdmFyIGRpZ2l0cyA9IHRpbi5zbGljZSgwLCA4KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbiAgfSk7XG4gIHZhciBjaGVja3N1bSA9IDA7IC8vIGFkZCBkaWdpdHMgaW4gZXZlbiBwbGFjZXNcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGRpZ2l0cy5sZW5ndGg7IGkgKz0gMikge1xuICAgIGNoZWNrc3VtICs9IGRpZ2l0c1tpXTtcbiAgfSAvLyBhZGQgZGlnaXRzIGluIG9kZCBwbGFjZXNcblxuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IGRpZ2l0cy5sZW5ndGg7IF9pMiArPSAyKSB7XG4gICAgaWYgKGRpZ2l0c1tfaTJdIDwgMikge1xuICAgICAgY2hlY2tzdW0gKz0gMSAtIGRpZ2l0c1tfaTJdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja3N1bSArPSAyICogKGRpZ2l0c1tfaTJdIC0gMikgKyA1O1xuXG4gICAgICBpZiAoZGlnaXRzW19pMl0gPiA0KSB7XG4gICAgICAgIGNoZWNrc3VtICs9IDI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hlY2tzdW0gJSAyNiArIDY1KSA9PT0gdGluLmNoYXJBdCg4KTtcbn1cbi8qXG4gKiBlbC1HUiB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoQXJpdGhtb3MgRm9yb2xvZ2lrb3UgTWl0cm9vdSAoQUZNL86RzqbOnCksIHBlcnNvbnMvZW50aXRpZXMpXG4gKiBWZXJpZnkgVElOIHZhbGlkaXR5IGJ5IGNhbGN1bGF0aW5nIGNoZWNrIChsYXN0KSBkaWdpdFxuICogQWxnb3JpdGhtIG5vdCBpbiBERyBUQVhVRCBkb2N1bWVudC0gc291cmNlZCBmcm9tOlxuICogLSBgaHR0cDovL2VwaXhlaXJpc2kuZ3IvJUNFJTlBJUNFJUExJUNFJTk5JUNFJUEzJUNFJTk5JUNFJTlDJUNFJTkxLSVDRSU5OCVDRSU5NSVDRSU5QyVDRSU5MSVDRSVBNCVDRSU5MS0lQ0UlQTYlQ0UlOUYlQ0UlQTElQ0UlOUYlQ0UlOUIlQ0UlOUYlQ0UlOTMlQ0UlOTklQ0UlOTElQ0UlQTMtJUNFJTlBJUNFJTkxJUNFJTk5LSVDRSU5QiVDRSU5RiVDRSU5MyVDRSU5OSVDRSVBMyVDRSVBNCVDRSU5OSVDRSU5QSVDRSU5NyVDRSVBMy8yMzc5MS8lQ0UlOTElQ0YlODElQ0UlQjklQ0UlQjglQ0UlQkMlQ0YlOEMlQ0YlODItJUNFJUE2JUNFJUJGJUNGJTgxJUNFJUJGJUNFJUJCJUNFJUJGJUNFJUIzJUNFJUI5JUNFJUJBJUNFJUJGJUNGJThELSVDRSU5QyVDRSVCNyVDRiU4NCVDRiU4MSVDRiU4RSVDRSVCRiVDRiU4NWBcbiAqL1xuXG5cbmZ1bmN0aW9uIGVsR3JDaGVjayh0aW4pIHtcbiAgLy8gc3BsaXQgZGlnaXRzIGludG8gYW4gYXJyYXkgZm9yIGZ1cnRoZXIgcHJvY2Vzc2luZ1xuICB2YXIgZGlnaXRzID0gdGluLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xuICB9KTtcbiAgdmFyIGNoZWNrc3VtID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGNoZWNrc3VtICs9IGRpZ2l0c1tpXSAqIE1hdGgucG93KDIsIDggLSBpKTtcbiAgfVxuXG4gIHJldHVybiBjaGVja3N1bSAlIDExID09PSBkaWdpdHNbOF07XG59XG4vKlxuICogZW4tR0IgdmFsaWRhdGlvbiBmdW5jdGlvbiAoc2hvdWxkIGdvIGhlcmUgaWYgbmVlZGVkKVxuICogKE5hdGlvbmFsIEluc3VyYW5jZSBOdW1iZXIgKE5JTk8pIG9yIFVuaXF1ZSBUYXhwYXllciBSZWZlcmVuY2UgKFVUUiksXG4gKiBwZXJzb25zL2VudGl0aWVzIHJlc3BlY3RpdmVseSlcbiAqL1xuXG4vKlxuICogZW4tSUUgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKFBlcnNvbmFsIFB1YmxpYyBTZXJ2aWNlIE51bWJlciAoUFBTIE5vKSwgcGVyc29ucyBvbmx5KVxuICogVmVyaWZ5IFRJTiB2YWxpZGl0eSBieSBjYWxjdWxhdGluZyBjaGVjayAoc2Vjb25kIHRvIGxhc3QpIGNoYXJhY3RlclxuICovXG5cblxuZnVuY3Rpb24gZW5JZUNoZWNrKHRpbikge1xuICB2YXIgY2hlY2tzdW0gPSBhbGdvcml0aG1zLnJldmVyc2VNdWx0aXBseUFuZFN1bSh0aW4uc3BsaXQoJycpLnNsaWNlKDAsIDcpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBwYXJzZUludChhLCAxMCk7XG4gIH0pLCA4KTtcblxuICBpZiAodGluLmxlbmd0aCA9PT0gOSAmJiB0aW5bOF0gIT09ICdXJykge1xuICAgIGNoZWNrc3VtICs9ICh0aW5bOF0uY2hhckNvZGVBdCgwKSAtIDY0KSAqIDk7XG4gIH1cblxuICBjaGVja3N1bSAlPSAyMztcblxuICBpZiAoY2hlY2tzdW0gPT09IDApIHtcbiAgICByZXR1cm4gdGluWzddLnRvVXBwZXJDYXNlKCkgPT09ICdXJztcbiAgfVxuXG4gIHJldHVybiB0aW5bN10udG9VcHBlckNhc2UoKSA9PT0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NCArIGNoZWNrc3VtKTtcbn0gLy8gVmFsaWQgVVMgSVJTIGNhbXB1cyBwcmVmaXhlc1xuXG5cbnZhciBlblVzQ2FtcHVzUHJlZml4ID0ge1xuICBhbmRvdmVyOiBbJzEwJywgJzEyJ10sXG4gIGF0bGFudGE6IFsnNjAnLCAnNjcnXSxcbiAgYXVzdGluOiBbJzUwJywgJzUzJ10sXG4gIGJyb29raGF2ZW46IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMTEnLCAnMTMnLCAnMTQnLCAnMTYnLCAnMjEnLCAnMjInLCAnMjMnLCAnMjUnLCAnMzQnLCAnNTEnLCAnNTInLCAnNTQnLCAnNTUnLCAnNTYnLCAnNTcnLCAnNTgnLCAnNTknLCAnNjUnXSxcbiAgY2luY2lubmF0aTogWyczMCcsICczMicsICczNScsICczNicsICczNycsICczOCcsICc2MSddLFxuICBmcmVzbm86IFsnMTUnLCAnMjQnXSxcbiAgaW50ZXJuZXQ6IFsnMjAnLCAnMjYnLCAnMjcnLCAnNDUnLCAnNDYnLCAnNDcnXSxcbiAga2Fuc2FzOiBbJzQwJywgJzQ0J10sXG4gIG1lbXBoaXM6IFsnOTQnLCAnOTUnXSxcbiAgb2dkZW46IFsnODAnLCAnOTAnXSxcbiAgcGhpbGFkZWxwaGlhOiBbJzMzJywgJzM5JywgJzQxJywgJzQyJywgJzQzJywgJzQ2JywgJzQ4JywgJzYyJywgJzYzJywgJzY0JywgJzY2JywgJzY4JywgJzcxJywgJzcyJywgJzczJywgJzc0JywgJzc1JywgJzc2JywgJzc3JywgJzgxJywgJzgyJywgJzgzJywgJzg0JywgJzg1JywgJzg2JywgJzg3JywgJzg4JywgJzkxJywgJzkyJywgJzkzJywgJzk4JywgJzk5J10sXG4gIHNiYTogWyczMSddXG59OyAvLyBSZXR1cm4gYW4gYXJyYXkgb2YgYWxsIFVTIElSUyBjYW1wdXMgcHJlZml4ZXNcblxuZnVuY3Rpb24gZW5Vc0dldFByZWZpeGVzKCkge1xuICB2YXIgcHJlZml4ZXMgPSBbXTtcblxuICBmb3IgKHZhciBsb2NhdGlvbiBpbiBlblVzQ2FtcHVzUHJlZml4KSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dvdHdhcmxvc3QvaXN0YW5idWwvYmxvYi9tYXN0ZXIvaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UubWQjaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UtcHVycG9zZXNcbiAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZVxuICAgIGlmIChlblVzQ2FtcHVzUHJlZml4Lmhhc093blByb3BlcnR5KGxvY2F0aW9uKSkge1xuICAgICAgcHJlZml4ZXMucHVzaC5hcHBseShwcmVmaXhlcywgX3RvQ29uc3VtYWJsZUFycmF5KGVuVXNDYW1wdXNQcmVmaXhbbG9jYXRpb25dKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByZWZpeGVzO1xufVxuLypcbiAqIGVuLVVTIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIFZlcmlmeSB0aGF0IHRoZSBUSU4gc3RhcnRzIHdpdGggYSB2YWxpZCBJUlMgY2FtcHVzIHByZWZpeFxuICovXG5cblxuZnVuY3Rpb24gZW5Vc0NoZWNrKHRpbikge1xuICByZXR1cm4gZW5Vc0dldFByZWZpeGVzKCkuaW5kZXhPZih0aW4uc3Vic3RyKDAsIDIpKSAhPT0gLTE7XG59XG4vKlxuICogZXMtRVMgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKERvY3VtZW50byBOYWNpb25hbCBkZSBJZGVudGlkYWQgKEROSSlcbiAqIG9yIE7Dum1lcm8gZGUgSWRlbnRpZmljYWNpw7NuIGRlIEV4dHJhbmplcm8gKE5JRSksIHBlcnNvbnMgb25seSlcbiAqIFZlcmlmeSBUSU4gdmFsaWRpdHkgYnkgY2FsY3VsYXRpbmcgY2hlY2sgKGxhc3QpIGNoYXJhY3RlclxuICovXG5cblxuZnVuY3Rpb24gZXNFc0NoZWNrKHRpbikge1xuICAvLyBTcGxpdCBjaGFyYWN0ZXJzIGludG8gYW4gYXJyYXkgZm9yIGZ1cnRoZXIgcHJvY2Vzc2luZ1xuICB2YXIgY2hhcnMgPSB0aW4udG9VcHBlckNhc2UoKS5zcGxpdCgnJyk7IC8vIFJlcGxhY2UgaW5pdGlhbCBsZXR0ZXIgaWYgbmVlZGVkXG5cbiAgaWYgKGlzTmFOKHBhcnNlSW50KGNoYXJzWzBdLCAxMCkpICYmIGNoYXJzLmxlbmd0aCA+IDEpIHtcbiAgICB2YXIgbGVhZF9yZXBsYWNlID0gMDtcblxuICAgIHN3aXRjaCAoY2hhcnNbMF0pIHtcbiAgICAgIGNhc2UgJ1knOlxuICAgICAgICBsZWFkX3JlcGxhY2UgPSAxO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnWic6XG4gICAgICAgIGxlYWRfcmVwbGFjZSA9IDI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cblxuICAgIGNoYXJzLnNwbGljZSgwLCAxLCBsZWFkX3JlcGxhY2UpOyAvLyBGaWxsIHdpdGggemVyb3MgaWYgc21hbGxlciB0aGFuIHByb3BlclxuICB9IGVsc2Uge1xuICAgIHdoaWxlIChjaGFycy5sZW5ndGggPCA5KSB7XG4gICAgICBjaGFycy51bnNoaWZ0KDApO1xuICAgIH1cbiAgfSAvLyBDYWxjdWxhdGUgY2hlY2tzdW0gYW5kIGNoZWNrIGFjY29yZGluZyB0byBsb29rdXBcblxuXG4gIHZhciBsb29rdXAgPSBbJ1QnLCAnUicsICdXJywgJ0EnLCAnRycsICdNJywgJ1knLCAnRicsICdQJywgJ0QnLCAnWCcsICdCJywgJ04nLCAnSicsICdaJywgJ1MnLCAnUScsICdWJywgJ0gnLCAnTCcsICdDJywgJ0snLCAnRSddO1xuICBjaGFycyA9IGNoYXJzLmpvaW4oJycpO1xuICB2YXIgY2hlY2tzdW0gPSBwYXJzZUludChjaGFycy5zbGljZSgwLCA4KSwgMTApICUgMjM7XG4gIHJldHVybiBjaGFyc1s4XSA9PT0gbG9va3VwW2NoZWNrc3VtXTtcbn1cbi8qXG4gKiBldC1FRSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoSXNpa3Vrb29kIChJSyksIHBlcnNvbnMgb25seSlcbiAqIENoZWNrcyBpZiBiaXJ0aCBkYXRlIChjZW50dXJ5IGRpZ2l0IGFuZCBzaXggZm9sbG93aW5nKSBpcyB2YWxpZCBhbmQgY2FsY3VsYXRlcyBjaGVjayAobGFzdCkgZGlnaXRcbiAqIE1hdGVyaWFsIG5vdCBpbiBERyBUQVhVRCBkb2N1bWVudCBzb3VyY2VkIGZyb206XG4gKiAtIGBodHRwczovL3d3dy5vZWNkLm9yZy90YXgvYXV0b21hdGljLWV4Y2hhbmdlL2Nycy1pbXBsZW1lbnRhdGlvbi1hbmQtYXNzaXN0YW5jZS90YXgtaWRlbnRpZmljYXRpb24tbnVtYmVycy9Fc3RvbmlhLVRJTi5wZGZgXG4gKi9cblxuXG5mdW5jdGlvbiBldEVlQ2hlY2sodGluKSB7XG4gIC8vIEV4dHJhY3QgeWVhciBhbmQgYWRkIGNlbnR1cnlcbiAgdmFyIGZ1bGxfeWVhciA9IHRpbi5zbGljZSgxLCAzKTtcbiAgdmFyIGNlbnR1cnlfZGlnaXQgPSB0aW4uc2xpY2UoMCwgMSk7XG5cbiAgc3dpdGNoIChjZW50dXJ5X2RpZ2l0KSB7XG4gICAgY2FzZSAnMSc6XG4gICAgY2FzZSAnMic6XG4gICAgICBmdWxsX3llYXIgPSBcIjE4XCIuY29uY2F0KGZ1bGxfeWVhcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJzMnOlxuICAgIGNhc2UgJzQnOlxuICAgICAgZnVsbF95ZWFyID0gXCIxOVwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgZnVsbF95ZWFyID0gXCIyMFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgYnJlYWs7XG4gIH0gLy8gQ2hlY2sgZGF0ZSB2YWxpZGl0eVxuXG5cbiAgdmFyIGRhdGUgPSBcIlwiLmNvbmNhdChmdWxsX3llYXIsIFwiL1wiKS5jb25jYXQodGluLnNsaWNlKDMsIDUpLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSg1LCA3KSk7XG5cbiAgaWYgKCEoMCwgX2lzRGF0ZS5kZWZhdWx0KShkYXRlLCAnWVlZWS9NTS9ERCcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIFNwbGl0IGRpZ2l0cyBpbnRvIGFuIGFycmF5IGZvciBmdXJ0aGVyIHByb2Nlc3NpbmdcblxuXG4gIHZhciBkaWdpdHMgPSB0aW4uc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBwYXJzZUludChhLCAxMCk7XG4gIH0pO1xuICB2YXIgY2hlY2tzdW0gPSAwO1xuICB2YXIgd2VpZ2h0ID0gMTsgLy8gTXVsdGlwbHkgYnkgd2VpZ2h0IGFuZCBhZGQgdG8gY2hlY2tzdW1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjaGVja3N1bSArPSBkaWdpdHNbaV0gKiB3ZWlnaHQ7XG4gICAgd2VpZ2h0ICs9IDE7XG5cbiAgICBpZiAod2VpZ2h0ID09PSAxMCkge1xuICAgICAgd2VpZ2h0ID0gMTtcbiAgICB9XG4gIH0gLy8gRG8gYWdhaW4gaWYgbW9kdWxvIDExIG9mIGNoZWNrc3VtIGlzIDEwXG5cblxuICBpZiAoY2hlY2tzdW0gJSAxMSA9PT0gMTApIHtcbiAgICBjaGVja3N1bSA9IDA7XG4gICAgd2VpZ2h0ID0gMztcblxuICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IDEwOyBfaTMrKykge1xuICAgICAgY2hlY2tzdW0gKz0gZGlnaXRzW19pM10gKiB3ZWlnaHQ7XG4gICAgICB3ZWlnaHQgKz0gMTtcblxuICAgICAgaWYgKHdlaWdodCA9PT0gMTApIHtcbiAgICAgICAgd2VpZ2h0ID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzdW0gJSAxMSA9PT0gMTApIHtcbiAgICAgIHJldHVybiBkaWdpdHNbMTBdID09PSAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGVja3N1bSAlIDExID09PSBkaWdpdHNbMTBdO1xufVxuLypcbiAqIGZpLUZJIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChIZW5raWzDtnR1bm51cyAoSEVUVSksIHBlcnNvbnMgb25seSlcbiAqIENoZWNrcyBpZiBiaXJ0aCBkYXRlIChmaXJzdCBzaXggZGlnaXRzIHBsdXMgY2VudHVyeSBzeW1ib2wpIGlzIHZhbGlkXG4gKiBhbmQgY2FsY3VsYXRlcyBjaGVjayAobGFzdCkgZGlnaXRcbiAqL1xuXG5cbmZ1bmN0aW9uIGZpRmlDaGVjayh0aW4pIHtcbiAgLy8gRXh0cmFjdCB5ZWFyIGFuZCBhZGQgY2VudHVyeVxuICB2YXIgZnVsbF95ZWFyID0gdGluLnNsaWNlKDQsIDYpO1xuICB2YXIgY2VudHVyeV9zeW1ib2wgPSB0aW4uc2xpY2UoNiwgNyk7XG5cbiAgc3dpdGNoIChjZW50dXJ5X3N5bWJvbCkge1xuICAgIGNhc2UgJysnOlxuICAgICAgZnVsbF95ZWFyID0gXCIxOFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICctJzpcbiAgICAgIGZ1bGxfeWVhciA9IFwiMTlcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGZ1bGxfeWVhciA9IFwiMjBcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICAgIGJyZWFrO1xuICB9IC8vIENoZWNrIGRhdGUgdmFsaWRpdHlcblxuXG4gIHZhciBkYXRlID0gXCJcIi5jb25jYXQoZnVsbF95ZWFyLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSgyLCA0KSwgXCIvXCIpLmNvbmNhdCh0aW4uc2xpY2UoMCwgMikpO1xuXG4gIGlmICghKDAsIF9pc0RhdGUuZGVmYXVsdCkoZGF0ZSwgJ1lZWVkvTU0vREQnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBDYWxjdWxhdGUgY2hlY2sgY2hhcmFjdGVyXG5cblxuICB2YXIgY2hlY2tzdW0gPSBwYXJzZUludCh0aW4uc2xpY2UoMCwgNikgKyB0aW4uc2xpY2UoNywgMTApLCAxMCkgJSAzMTtcblxuICBpZiAoY2hlY2tzdW0gPCAxMCkge1xuICAgIHJldHVybiBjaGVja3N1bSA9PT0gcGFyc2VJbnQodGluLnNsaWNlKDEwKSwgMTApO1xuICB9XG5cbiAgY2hlY2tzdW0gLT0gMTA7XG4gIHZhciBsZXR0ZXJzX2xvb2t1cCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnSCcsICdKJywgJ0snLCAnTCcsICdNJywgJ04nLCAnUCcsICdSJywgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycsICdYJywgJ1knXTtcbiAgcmV0dXJuIGxldHRlcnNfbG9va3VwW2NoZWNrc3VtXSA9PT0gdGluLnNsaWNlKDEwKTtcbn1cbi8qXG4gKiBmci9ubC1CRSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoTnVtw6lybyBuYXRpb25hbCAoTi5OLiksIHBlcnNvbnMgb25seSlcbiAqIENoZWNrcyBpZiBiaXJ0aCBkYXRlIChmaXJzdCBzaXggZGlnaXRzKSBpcyB2YWxpZCBhbmQgY2FsY3VsYXRlcyBjaGVjayAobGFzdCB0d28pIGRpZ2l0c1xuICovXG5cblxuZnVuY3Rpb24gZnJCZUNoZWNrKHRpbikge1xuICAvLyBaZXJvIG1vbnRoL2RheSB2YWx1ZSBpcyBhY2NlcHRhYmxlXG4gIGlmICh0aW4uc2xpY2UoMiwgNCkgIT09ICcwMCcgfHwgdGluLnNsaWNlKDQsIDYpICE9PSAnMDAnKSB7XG4gICAgLy8gRXh0cmFjdCBkYXRlIGZyb20gZmlyc3Qgc2l4IGRpZ2l0cyBvZiBUSU5cbiAgICB2YXIgZGF0ZSA9IFwiXCIuY29uY2F0KHRpbi5zbGljZSgwLCAyKSwgXCIvXCIpLmNvbmNhdCh0aW4uc2xpY2UoMiwgNCksIFwiL1wiKS5jb25jYXQodGluLnNsaWNlKDQsIDYpKTtcblxuICAgIGlmICghKDAsIF9pc0RhdGUuZGVmYXVsdCkoZGF0ZSwgJ1lZL01NL0REJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hlY2tzdW0gPSA5NyAtIHBhcnNlSW50KHRpbi5zbGljZSgwLCA5KSwgMTApICUgOTc7XG4gIHZhciBjaGVja2RpZ2l0cyA9IHBhcnNlSW50KHRpbi5zbGljZSg5LCAxMSksIDEwKTtcblxuICBpZiAoY2hlY2tzdW0gIT09IGNoZWNrZGlnaXRzKSB7XG4gICAgY2hlY2tzdW0gPSA5NyAtIHBhcnNlSW50KFwiMlwiLmNvbmNhdCh0aW4uc2xpY2UoMCwgOSkpLCAxMCkgJSA5NztcblxuICAgIGlmIChjaGVja3N1bSAhPT0gY2hlY2tkaWdpdHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qXG4gKiBmci1GUiB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoTnVtw6lybyBmaXNjYWwgZGUgcsOpZsOpcmVuY2UgKG51bcOpcm8gU1BJKSwgcGVyc29ucyBvbmx5KVxuICogVmVyaWZ5IFRJTiB2YWxpZGl0eSBieSBjYWxjdWxhdGluZyBjaGVjayAobGFzdCB0aHJlZSkgZGlnaXRzXG4gKi9cblxuXG5mdW5jdGlvbiBmckZyQ2hlY2sodGluKSB7XG4gIHRpbiA9IHRpbi5yZXBsYWNlKC9cXHMvZywgJycpO1xuICB2YXIgY2hlY2tzdW0gPSBwYXJzZUludCh0aW4uc2xpY2UoMCwgMTApLCAxMCkgJSA1MTE7XG4gIHZhciBjaGVja2RpZ2l0cyA9IHBhcnNlSW50KHRpbi5zbGljZSgxMCwgMTMpLCAxMCk7XG4gIHJldHVybiBjaGVja3N1bSA9PT0gY2hlY2tkaWdpdHM7XG59XG4vKlxuICogZnIvbGItTFUgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKG51bcOpcm8gZOKAmWlkZW50aWZpY2F0aW9uIHBlcnNvbm5lbGxlLCBwZXJzb25zIG9ubHkpXG4gKiBWZXJpZnkgYmlydGggZGF0ZSB2YWxpZGl0eSBhbmQgcnVuIEx1aG4gYW5kIFZlcmhvZWZmIGNoZWNrc1xuICovXG5cblxuZnVuY3Rpb24gZnJMdUNoZWNrKHRpbikge1xuICAvLyBFeHRyYWN0IGRhdGUgYW5kIGNoZWNrIHZhbGlkaXR5XG4gIHZhciBkYXRlID0gXCJcIi5jb25jYXQodGluLnNsaWNlKDAsIDQpLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSg0LCA2KSwgXCIvXCIpLmNvbmNhdCh0aW4uc2xpY2UoNiwgOCkpO1xuXG4gIGlmICghKDAsIF9pc0RhdGUuZGVmYXVsdCkoZGF0ZSwgJ1lZWVkvTU0vREQnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBSdW4gTHVobiBjaGVja1xuXG5cbiAgaWYgKCFhbGdvcml0aG1zLmx1aG5DaGVjayh0aW4uc2xpY2UoMCwgMTIpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBSZW1vdmUgTHVobiBjaGVjayBkaWdpdCBhbmQgcnVuIFZlcmhvZWZmIGNoZWNrXG5cblxuICByZXR1cm4gYWxnb3JpdGhtcy52ZXJob2VmZkNoZWNrKFwiXCIuY29uY2F0KHRpbi5zbGljZSgwLCAxMSkpLmNvbmNhdCh0aW5bMTJdKSk7XG59XG4vKlxuICogaHItSFIgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKE9zb2JuaSBpZGVudGlmaWthY2lqc2tpIGJyb2ogKE9JQiksIHBlcnNvbnMvZW50aXRpZXMpXG4gKiBWZXJpZnkgVElOIHZhbGlkaXR5IGJ5IGNhbGxpbmcgaXNvNzA2NENoZWNrKGRpZ2l0cylcbiAqL1xuXG5cbmZ1bmN0aW9uIGhySHJDaGVjayh0aW4pIHtcbiAgcmV0dXJuIGFsZ29yaXRobXMuaXNvNzA2NENoZWNrKHRpbik7XG59XG4vKlxuICogaHUtSFUgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKEFkw7Nhem9ub3PDrXTDsyBqZWwsIHBlcnNvbnMgb25seSlcbiAqIFZlcmlmeSBUSU4gdmFsaWRpdHkgYnkgY2FsY3VsYXRpbmcgY2hlY2sgKGxhc3QpIGRpZ2l0XG4gKi9cblxuXG5mdW5jdGlvbiBodUh1Q2hlY2sodGluKSB7XG4gIC8vIHNwbGl0IGRpZ2l0cyBpbnRvIGFuIGFycmF5IGZvciBmdXJ0aGVyIHByb2Nlc3NpbmdcbiAgdmFyIGRpZ2l0cyA9IHRpbi5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbiAgfSk7XG4gIHZhciBjaGVja3N1bSA9IDg7XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCA5OyBpKyspIHtcbiAgICBjaGVja3N1bSArPSBkaWdpdHNbaV0gKiAoaSArIDEpO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrc3VtICUgMTEgPT09IGRpZ2l0c1s5XTtcbn1cbi8qXG4gKiBsdC1MVCB2YWxpZGF0aW9uIGZ1bmN0aW9uIChzaG91bGQgZ28gaGVyZSBpZiBuZWVkZWQpXG4gKiAoQXNtZW5zIGtvZGFzLCBwZXJzb25zL2VudGl0aWVzIHJlc3BlY3RpdmVseSlcbiAqIEN1cnJlbnQgdmFsaWRhdGlvbiBjaGVjayBpcyBhbGlhcyBvZiBldEVlQ2hlY2stIHNhbWUgZm9ybWF0IGFwcGxpZXNcbiAqL1xuXG4vKlxuICogaXQtSVQgZmlyc3QvbGFzdCBuYW1lIHZhbGlkaXR5IGNoZWNrXG4gKiBBY2NlcHRzIGl0LUlUIFRJTi1lbmNvZGVkIG5hbWVzIGFzIGEgdGhyZWUtZWxlbWVudCBjaGFyYWN0ZXIgYXJyYXkgYW5kIGNoZWNrcyB0aGVpciB2YWxpZGl0eVxuICogRHVlIHRvIGxhY2sgb2YgY2xhcml0eSBiZXR3ZWVuIHJlc291cmNlcyAoXCJBcmUgb25seSBJdGFsaWFuIGNvbnNvbmFudHMgdXNlZD9cbiAqIFdoYXQgaGFwcGVucyBpZiBhIHBlcnNvbiBoYXMgWCBpbiB0aGVpciBuYW1lP1wiIGV0Yy4pIG9ubHkgdHdvIHRlc3QgY29uZGl0aW9uc1xuICogaGF2ZSBiZWVuIGltcGxlbWVudGVkOlxuICogVm93ZWxzIG1heSBvbmx5IGJlIGZvbGxvd2VkIGJ5IG90aGVyIHZvd2VscyBvciBhbiBYIGNoYXJhY3RlclxuICogYW5kIFggY2hhcmFjdGVycyBhZnRlciB2b3dlbHMgbWF5IG9ubHkgYmUgZm9sbG93ZWQgYnkgb3RoZXIgWCBjaGFyYWN0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gaXRJdE5hbWVDaGVjayhuYW1lKSB7XG4gIC8vIHRydWUgYXQgdGhlIGZpcnN0IG9jY3VyZW5jZSBvZiBhIHZvd2VsXG4gIHZhciB2b3dlbGZsYWcgPSBmYWxzZTsgLy8gdHJ1ZSBhdCB0aGUgZmlyc3Qgb2NjdXJlbmNlIG9mIGFuIFggQUZURVIgdm93ZWxcbiAgLy8gKHRvIHByb3Blcmx5IGhhbmRsZSBsYXN0IG5hbWVzIHdpdGggWCBhcyBjb25zb25hbnQpXG5cbiAgdmFyIHhmbGFnID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBpZiAoIXZvd2VsZmxhZyAmJiAvW0FFSU9VXS8udGVzdChuYW1lW2ldKSkge1xuICAgICAgdm93ZWxmbGFnID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCF4ZmxhZyAmJiB2b3dlbGZsYWcgJiYgbmFtZVtpXSA9PT0gJ1gnKSB7XG4gICAgICB4ZmxhZyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpID4gMCkge1xuICAgICAgaWYgKHZvd2VsZmxhZyAmJiAheGZsYWcpIHtcbiAgICAgICAgaWYgKCEvW0FFSU9VXS8udGVzdChuYW1lW2ldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoeGZsYWcpIHtcbiAgICAgICAgaWYgKCEvWC8udGVzdChuYW1lW2ldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLypcbiAqIGl0LUlUIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChDb2RpY2UgZmlzY2FsZSAoVElOLUlUKSwgcGVyc29ucyBvbmx5KVxuICogVmVyaWZ5IG5hbWUsIGJpcnRoIGRhdGUgYW5kIGNvZGljZSBjYXRhc3RhbGUgdmFsaWRpdHlcbiAqIGFuZCBjYWxjdWxhdGUgY2hlY2sgY2hhcmFjdGVyLlxuICogTWF0ZXJpYWwgbm90IGluIERHLVRBWFVEIGRvY3VtZW50IHNvdXJjZWQgZnJvbTpcbiAqIGBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JdGFsaWFuX2Zpc2NhbF9jb2RlYFxuICovXG5cblxuZnVuY3Rpb24gaXRJdENoZWNrKHRpbikge1xuICAvLyBDYXBpdGFsaXplIGFuZCBzcGxpdCBjaGFyYWN0ZXJzIGludG8gYW4gYXJyYXkgZm9yIGZ1cnRoZXIgcHJvY2Vzc2luZ1xuICB2YXIgY2hhcnMgPSB0aW4udG9VcHBlckNhc2UoKS5zcGxpdCgnJyk7IC8vIENoZWNrIGZpcnN0IGFuZCBsYXN0IG5hbWUgdmFsaWRpdHkgY2FsbGluZyBpdEl0TmFtZUNoZWNrKClcblxuICBpZiAoIWl0SXROYW1lQ2hlY2soY2hhcnMuc2xpY2UoMCwgMykpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFpdEl0TmFtZUNoZWNrKGNoYXJzLnNsaWNlKDMsIDYpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBDb252ZXJ0IGxldHRlcnMgaW4gbnVtYmVyIHNwYWNlcyBiYWNrIHRvIG51bWJlcnMgaWYgYW55XG5cblxuICB2YXIgbnVtYmVyX2xvY2F0aW9ucyA9IFs2LCA3LCA5LCAxMCwgMTIsIDEzLCAxNF07XG4gIHZhciBudW1iZXJfcmVwbGFjZSA9IHtcbiAgICBMOiAnMCcsXG4gICAgTTogJzEnLFxuICAgIE46ICcyJyxcbiAgICBQOiAnMycsXG4gICAgUTogJzQnLFxuICAgIFI6ICc1JyxcbiAgICBTOiAnNicsXG4gICAgVDogJzcnLFxuICAgIFU6ICc4JyxcbiAgICBWOiAnOSdcbiAgfTtcblxuICBmb3IgKHZhciBfaTQgPSAwLCBfbnVtYmVyX2xvY2F0aW9ucyA9IG51bWJlcl9sb2NhdGlvbnM7IF9pNCA8IF9udW1iZXJfbG9jYXRpb25zLmxlbmd0aDsgX2k0KyspIHtcbiAgICB2YXIgaSA9IF9udW1iZXJfbG9jYXRpb25zW19pNF07XG5cbiAgICBpZiAoY2hhcnNbaV0gaW4gbnVtYmVyX3JlcGxhY2UpIHtcbiAgICAgIGNoYXJzLnNwbGljZShpLCAxLCBudW1iZXJfcmVwbGFjZVtjaGFyc1tpXV0pO1xuICAgIH1cbiAgfSAvLyBFeHRyYWN0IG1vbnRoIGFuZCBkYXksIGFuZCBjaGVjayBkYXRlIHZhbGlkaXR5XG5cblxuICB2YXIgbW9udGhfcmVwbGFjZSA9IHtcbiAgICBBOiAnMDEnLFxuICAgIEI6ICcwMicsXG4gICAgQzogJzAzJyxcbiAgICBEOiAnMDQnLFxuICAgIEU6ICcwNScsXG4gICAgSDogJzA2JyxcbiAgICBMOiAnMDcnLFxuICAgIE06ICcwOCcsXG4gICAgUDogJzA5JyxcbiAgICBSOiAnMTAnLFxuICAgIFM6ICcxMScsXG4gICAgVDogJzEyJ1xuICB9O1xuICB2YXIgbW9udGggPSBtb250aF9yZXBsYWNlW2NoYXJzWzhdXTtcbiAgdmFyIGRheSA9IHBhcnNlSW50KGNoYXJzWzldICsgY2hhcnNbMTBdLCAxMCk7XG5cbiAgaWYgKGRheSA+IDQwKSB7XG4gICAgZGF5IC09IDQwO1xuICB9XG5cbiAgaWYgKGRheSA8IDEwKSB7XG4gICAgZGF5ID0gXCIwXCIuY29uY2F0KGRheSk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IFwiXCIuY29uY2F0KGNoYXJzWzZdKS5jb25jYXQoY2hhcnNbN10sIFwiL1wiKS5jb25jYXQobW9udGgsIFwiL1wiKS5jb25jYXQoZGF5KTtcblxuICBpZiAoISgwLCBfaXNEYXRlLmRlZmF1bHQpKGRhdGUsICdZWS9NTS9ERCcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIENhbGN1bGF0ZSBjaGVjayBjaGFyYWN0ZXIgYnkgYWRkaW5nIHVwIGV2ZW4gYW5kIG9kZCBjaGFyYWN0ZXJzIGFzIG51bWJlcnNcblxuXG4gIHZhciBjaGVja3N1bSA9IDA7XG5cbiAgZm9yICh2YXIgX2k1ID0gMTsgX2k1IDwgY2hhcnMubGVuZ3RoIC0gMTsgX2k1ICs9IDIpIHtcbiAgICB2YXIgY2hhcl90b19pbnQgPSBwYXJzZUludChjaGFyc1tfaTVdLCAxMCk7XG5cbiAgICBpZiAoaXNOYU4oY2hhcl90b19pbnQpKSB7XG4gICAgICBjaGFyX3RvX2ludCA9IGNoYXJzW19pNV0uY2hhckNvZGVBdCgwKSAtIDY1O1xuICAgIH1cblxuICAgIGNoZWNrc3VtICs9IGNoYXJfdG9faW50O1xuICB9XG5cbiAgdmFyIG9kZF9jb252ZXJ0ID0ge1xuICAgIC8vIE1hcHMgb2YgY2hhcmFjdGVycyBhdCBvZGQgcGxhY2VzXG4gICAgQTogMSxcbiAgICBCOiAwLFxuICAgIEM6IDUsXG4gICAgRDogNyxcbiAgICBFOiA5LFxuICAgIEY6IDEzLFxuICAgIEc6IDE1LFxuICAgIEg6IDE3LFxuICAgIEk6IDE5LFxuICAgIEo6IDIxLFxuICAgIEs6IDIsXG4gICAgTDogNCxcbiAgICBNOiAxOCxcbiAgICBOOiAyMCxcbiAgICBPOiAxMSxcbiAgICBQOiAzLFxuICAgIFE6IDYsXG4gICAgUjogOCxcbiAgICBTOiAxMixcbiAgICBUOiAxNCxcbiAgICBVOiAxNixcbiAgICBWOiAxMCxcbiAgICBXOiAyMixcbiAgICBYOiAyNSxcbiAgICBZOiAyNCxcbiAgICBaOiAyMyxcbiAgICAwOiAxLFxuICAgIDE6IDBcbiAgfTtcblxuICBmb3IgKHZhciBfaTYgPSAwOyBfaTYgPCBjaGFycy5sZW5ndGggLSAxOyBfaTYgKz0gMikge1xuICAgIHZhciBfY2hhcl90b19pbnQgPSAwO1xuXG4gICAgaWYgKGNoYXJzW19pNl0gaW4gb2RkX2NvbnZlcnQpIHtcbiAgICAgIF9jaGFyX3RvX2ludCA9IG9kZF9jb252ZXJ0W2NoYXJzW19pNl1dO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbXVsdGlwbGllciA9IHBhcnNlSW50KGNoYXJzW19pNl0sIDEwKTtcbiAgICAgIF9jaGFyX3RvX2ludCA9IDIgKiBtdWx0aXBsaWVyICsgMTtcblxuICAgICAgaWYgKG11bHRpcGxpZXIgPiA0KSB7XG4gICAgICAgIF9jaGFyX3RvX2ludCArPSAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrc3VtICs9IF9jaGFyX3RvX2ludDtcbiAgfVxuXG4gIGlmIChTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY2hlY2tzdW0gJSAyNikgIT09IGNoYXJzWzE1XSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLypcbiAqIGx2LUxWIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChQZXJzb25hcyBrb2RzIChQSyksIHBlcnNvbnMgb25seSlcbiAqIENoZWNrIHZhbGlkaXR5IG9mIGJpcnRoIGRhdGUgYW5kIGNhbGN1bGF0ZSBjaGVjayAobGFzdCkgZGlnaXRcbiAqIFN1cHBvcnQgb25seSBmb3Igb2xkIGZvcm1hdCBudW1iZXJzIChub3Qgc3RhcnRpbmcgd2l0aCAnMzInLCBpc3N1ZWQgYmVmb3JlIDIwMTcvMDcvMDEpXG4gKiBNYXRlcmlhbCBub3QgaW4gREcgVEFYVUQgZG9jdW1lbnQgc291cmNlZCBmcm9tOlxuICogYGh0dHBzOi8vYm9vdC5yaXRha2FmaWphLmx2L2ZvcnVtcy9pbmRleC5waHA/L3RvcGljLzg4MzE0LXBlcnNvbmFzLWtvZGEtYWxnb3JpdG1zLSVDNCU4RGVrc3VtbWEvYFxuICovXG5cblxuZnVuY3Rpb24gbHZMdkNoZWNrKHRpbikge1xuICB0aW4gPSB0aW4ucmVwbGFjZSgvXFxXLywgJycpOyAvLyBFeHRyYWN0IGRhdGUgZnJvbSBUSU5cblxuICB2YXIgZGF5ID0gdGluLnNsaWNlKDAsIDIpO1xuXG4gIGlmIChkYXkgIT09ICczMicpIHtcbiAgICAvLyBObyBkYXRlL2NoZWNrc3VtIGNoZWNrIGlmIG5ldyBmb3JtYXRcbiAgICB2YXIgbW9udGggPSB0aW4uc2xpY2UoMiwgNCk7XG5cbiAgICBpZiAobW9udGggIT09ICcwMCcpIHtcbiAgICAgIC8vIE5vIGRhdGUgY2hlY2sgaWYgdW5rbm93biBtb250aFxuICAgICAgdmFyIGZ1bGxfeWVhciA9IHRpbi5zbGljZSg0LCA2KTtcblxuICAgICAgc3dpdGNoICh0aW5bNl0pIHtcbiAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgZnVsbF95ZWFyID0gXCIxOFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgIGZ1bGxfeWVhciA9IFwiMTlcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGZ1bGxfeWVhciA9IFwiMjBcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH0gLy8gQ2hlY2sgZGF0ZSB2YWxpZGl0eVxuXG5cbiAgICAgIHZhciBkYXRlID0gXCJcIi5jb25jYXQoZnVsbF95ZWFyLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSgyLCA0KSwgXCIvXCIpLmNvbmNhdChkYXkpO1xuXG4gICAgICBpZiAoISgwLCBfaXNEYXRlLmRlZmF1bHQpKGRhdGUsICdZWVlZL01NL0REJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gLy8gQ2FsY3VsYXRlIGNoZWNrIGRpZ2l0XG5cblxuICAgIHZhciBjaGVja3N1bSA9IDExMDE7XG4gICAgdmFyIG11bHRpcF9sb29rdXAgPSBbMSwgNiwgMywgNywgOSwgMTAsIDUsIDgsIDQsIDJdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aW4ubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjaGVja3N1bSAtPSBwYXJzZUludCh0aW5baV0sIDEwKSAqIG11bHRpcF9sb29rdXBbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlSW50KHRpblsxMF0sIDEwKSA9PT0gY2hlY2tzdW0gJSAxMTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLypcbiAqIG10LU1UIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChJZGVudGl0eSBDYXJkIE51bWJlciBvciBVbmlxdWUgVGF4cGF5ZXIgUmVmZXJlbmNlLCBwZXJzb25zL2VudGl0aWVzKVxuICogVmVyaWZ5IElkZW50aXR5IENhcmQgTnVtYmVyIHN0cnVjdHVyZSAobm8gb3RoZXIgdGVzdHMgZm91bmQpXG4gKi9cblxuXG5mdW5jdGlvbiBtdE10Q2hlY2sodGluKSB7XG4gIGlmICh0aW4ubGVuZ3RoICE9PSA5KSB7XG4gICAgLy8gTm8gdGVzdHMgZm9yIFVUUlxuICAgIHZhciBjaGFycyA9IHRpbi50b1VwcGVyQ2FzZSgpLnNwbGl0KCcnKTsgLy8gRmlsbCB3aXRoIHplcm9zIGlmIHNtYWxsZXIgdGhhbiBwcm9wZXJcblxuICAgIHdoaWxlIChjaGFycy5sZW5ndGggPCA4KSB7XG4gICAgICBjaGFycy51bnNoaWZ0KDApO1xuICAgIH0gLy8gVmFsaWRhdGUgZm9ybWF0IGFjY29yZGluZyB0byBsYXN0IGNoYXJhY3RlclxuXG5cbiAgICBzd2l0Y2ggKHRpbls3XSkge1xuICAgICAgY2FzZSAnQSc6XG4gICAgICBjYXNlICdQJzpcbiAgICAgICAgaWYgKHBhcnNlSW50KGNoYXJzWzZdLCAxMCkgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBmaXJzdF9wYXJ0ID0gcGFyc2VJbnQoY2hhcnMuam9pbignJykuc2xpY2UoMCwgNSksIDEwKTtcblxuICAgICAgICAgIGlmIChmaXJzdF9wYXJ0ID4gMzIwMDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc2Vjb25kX3BhcnQgPSBwYXJzZUludChjaGFycy5qb2luKCcnKS5zbGljZSg1LCA3KSwgMTApO1xuXG4gICAgICAgICAgaWYgKGZpcnN0X3BhcnQgPT09IHNlY29uZF9wYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKlxuICogbmwtTkwgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKEJ1cmdlcnNlcnZpY2VudW1tZXIgKEJTTikgb3IgUmVjaHRzcGVyc29uZW4gU2FtZW53ZXJraW5nc3ZlcmJhbmRlbiBJbmZvcm1hdGllIE51bW1lciAoUlNJTiksXG4gKiBwZXJzb25zL2VudGl0aWVzIHJlc3BlY3RpdmVseSlcbiAqIFZlcmlmeSBUSU4gdmFsaWRpdHkgYnkgY2FsY3VsYXRpbmcgY2hlY2sgKGxhc3QpIGRpZ2l0ICh2YXJpYW50IG9mIE1PRCAxMSlcbiAqL1xuXG5cbmZ1bmN0aW9uIG5sTmxDaGVjayh0aW4pIHtcbiAgcmV0dXJuIGFsZ29yaXRobXMucmV2ZXJzZU11bHRpcGx5QW5kU3VtKHRpbi5zcGxpdCgnJykuc2xpY2UoMCwgOCkubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbiAgfSksIDkpICUgMTEgPT09IHBhcnNlSW50KHRpbls4XSwgMTApO1xufVxuLypcbiAqIHBsLVBMIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChQb3dzemVjaG55IEVsZWt0cm9uaWN6bnkgU3lzdGVtIEV3aWRlbmNqaSBMdWRub8WbY2kgKFBFU0VMKVxuICogb3IgTnVtZXIgaWRlbnR5ZmlrYWNqaSBwb2RhdGtvd2VqIChOSVApLCBwZXJzb25zL2VudGl0aWVzKVxuICogVmVyaWZ5IFRJTiB2YWxpZGl0eSBieSB2YWxpZGF0aW5nIGJpcnRoIGRhdGUgKFBFU0VMKSBhbmQgY2FsY3VsYXRpbmcgY2hlY2sgKGxhc3QpIGRpZ2l0XG4gKi9cblxuXG5mdW5jdGlvbiBwbFBsQ2hlY2sodGluKSB7XG4gIC8vIE5JUFxuICBpZiAodGluLmxlbmd0aCA9PT0gMTApIHtcbiAgICAvLyBDYWxjdWxhdGUgbGFzdCBkaWdpdCBieSBtdWx0aXBseWluZyB3aXRoIGxvb2t1cFxuICAgIHZhciBsb29rdXAgPSBbNiwgNSwgNywgMiwgMywgNCwgNSwgNiwgN107XG4gICAgdmFyIF9jaGVja3N1bSA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvb2t1cC5sZW5ndGg7IGkrKykge1xuICAgICAgX2NoZWNrc3VtICs9IHBhcnNlSW50KHRpbltpXSwgMTApICogbG9va3VwW2ldO1xuICAgIH1cblxuICAgIF9jaGVja3N1bSAlPSAxMTtcblxuICAgIGlmIChfY2hlY2tzdW0gPT09IDEwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jaGVja3N1bSA9PT0gcGFyc2VJbnQodGluWzldLCAxMCk7XG4gIH0gLy8gUEVTRUxcbiAgLy8gRXh0cmFjdCBmdWxsIHllYXIgdXNpbmcgbW9udGhcblxuXG4gIHZhciBmdWxsX3llYXIgPSB0aW4uc2xpY2UoMCwgMik7XG4gIHZhciBtb250aCA9IHBhcnNlSW50KHRpbi5zbGljZSgyLCA0KSwgMTApO1xuXG4gIGlmIChtb250aCA+IDgwKSB7XG4gICAgZnVsbF95ZWFyID0gXCIxOFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgIG1vbnRoIC09IDgwO1xuICB9IGVsc2UgaWYgKG1vbnRoID4gNjApIHtcbiAgICBmdWxsX3llYXIgPSBcIjIyXCIuY29uY2F0KGZ1bGxfeWVhcik7XG4gICAgbW9udGggLT0gNjA7XG4gIH0gZWxzZSBpZiAobW9udGggPiA0MCkge1xuICAgIGZ1bGxfeWVhciA9IFwiMjFcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICBtb250aCAtPSA0MDtcbiAgfSBlbHNlIGlmIChtb250aCA+IDIwKSB7XG4gICAgZnVsbF95ZWFyID0gXCIyMFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgIG1vbnRoIC09IDIwO1xuICB9IGVsc2Uge1xuICAgIGZ1bGxfeWVhciA9IFwiMTlcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgfSAvLyBBZGQgbGVhZGluZyB6ZXJvIHRvIG1vbnRoIGlmIG5lZWRlZFxuXG5cbiAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICBtb250aCA9IFwiMFwiLmNvbmNhdChtb250aCk7XG4gIH0gLy8gQ2hlY2sgZGF0ZSB2YWxpZGl0eVxuXG5cbiAgdmFyIGRhdGUgPSBcIlwiLmNvbmNhdChmdWxsX3llYXIsIFwiL1wiKS5jb25jYXQobW9udGgsIFwiL1wiKS5jb25jYXQodGluLnNsaWNlKDQsIDYpKTtcblxuICBpZiAoISgwLCBfaXNEYXRlLmRlZmF1bHQpKGRhdGUsICdZWVlZL01NL0REJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gQ2FsY3VsYXRlIGxhc3QgZGlnaXQgYnkgbXVsaXRwbHlpbmcgd2l0aCBvZGQgb25lLWRpZ2l0IG51bWJlcnMgZXhjZXB0IDVcblxuXG4gIHZhciBjaGVja3N1bSA9IDA7XG4gIHZhciBtdWx0aXBsaWVyID0gMTtcblxuICBmb3IgKHZhciBfaTcgPSAwOyBfaTcgPCB0aW4ubGVuZ3RoIC0gMTsgX2k3KyspIHtcbiAgICBjaGVja3N1bSArPSBwYXJzZUludCh0aW5bX2k3XSwgMTApICogbXVsdGlwbGllciAlIDEwO1xuICAgIG11bHRpcGxpZXIgKz0gMjtcblxuICAgIGlmIChtdWx0aXBsaWVyID4gMTApIHtcbiAgICAgIG11bHRpcGxpZXIgPSAxO1xuICAgIH0gZWxzZSBpZiAobXVsdGlwbGllciA9PT0gNSkge1xuICAgICAgbXVsdGlwbGllciArPSAyO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrc3VtID0gMTAgLSBjaGVja3N1bSAlIDEwO1xuICByZXR1cm4gY2hlY2tzdW0gPT09IHBhcnNlSW50KHRpblsxMF0sIDEwKTtcbn1cbi8qXG4gKiBwdC1QVCB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoTsO6bWVybyBkZSBpZGVudGlmaWNhw6fDo28gZmlzY2FsIChOSUYpLCBwZXJzb25zL2VudGl0aWVzKVxuICogVmVyaWZ5IFRJTiB2YWxpZGl0eSBieSBjYWxjdWxhdGluZyBjaGVjayAobGFzdCkgZGlnaXQgKHZhcmlhbnQgb2YgTU9EIDExKVxuICovXG5cblxuZnVuY3Rpb24gcHRQdENoZWNrKHRpbikge1xuICB2YXIgY2hlY2tzdW0gPSAxMSAtIGFsZ29yaXRobXMucmV2ZXJzZU11bHRpcGx5QW5kU3VtKHRpbi5zcGxpdCgnJykuc2xpY2UoMCwgOCkubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbiAgfSksIDkpICUgMTE7XG5cbiAgaWYgKGNoZWNrc3VtID4gOSkge1xuICAgIHJldHVybiBwYXJzZUludCh0aW5bOF0sIDEwKSA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBjaGVja3N1bSA9PT0gcGFyc2VJbnQodGluWzhdLCAxMCk7XG59XG4vKlxuICogcm8tUk8gdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKENvZCBOdW1lcmljIFBlcnNvbmFsIChDTlApIG9yIENvZCBkZSDDrm5yZWdpc3RyYXJlIGZpc2NhbMSDIChDSUYpLFxuICogcGVyc29ucyBvbmx5KVxuICogVmVyaWZ5IENOUCB2YWxpZGl0eSBieSBjYWxjdWxhdGluZyBjaGVjayAobGFzdCkgZGlnaXQgKHRlc3Qgbm90IGZvdW5kIGZvciBDSUYpXG4gKiBNYXRlcmlhbCBub3QgaW4gREcgVEFYVUQgZG9jdW1lbnQgc291cmNlZCBmcm9tOlxuICogYGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05hdGlvbmFsX2lkZW50aWZpY2F0aW9uX251bWJlciNSb21hbmlhYFxuICovXG5cblxuZnVuY3Rpb24gcm9Sb0NoZWNrKHRpbikge1xuICBpZiAodGluLnNsaWNlKDAsIDQpICE9PSAnOTAwMCcpIHtcbiAgICAvLyBObyB0ZXN0IGZvdW5kIGZvciB0aGlzIGZvcm1hdFxuICAgIC8vIEV4dHJhY3QgZnVsbCB5ZWFyIHVzaW5nIGNlbnR1cnkgZGlnaXQgaWYgcG9zc2libGVcbiAgICB2YXIgZnVsbF95ZWFyID0gdGluLnNsaWNlKDEsIDMpO1xuXG4gICAgc3dpdGNoICh0aW5bMF0pIHtcbiAgICAgIGNhc2UgJzEnOlxuICAgICAgY2FzZSAnMic6XG4gICAgICAgIGZ1bGxfeWVhciA9IFwiMTlcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJzMnOlxuICAgICAgY2FzZSAnNCc6XG4gICAgICAgIGZ1bGxfeWVhciA9IFwiMThcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJzUnOlxuICAgICAgY2FzZSAnNic6XG4gICAgICAgIGZ1bGxfeWVhciA9IFwiMjBcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfSAvLyBDaGVjayBkYXRlIHZhbGlkaXR5XG5cblxuICAgIHZhciBkYXRlID0gXCJcIi5jb25jYXQoZnVsbF95ZWFyLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSgzLCA1KSwgXCIvXCIpLmNvbmNhdCh0aW4uc2xpY2UoNSwgNykpO1xuXG4gICAgaWYgKGRhdGUubGVuZ3RoID09PSA4KSB7XG4gICAgICBpZiAoISgwLCBfaXNEYXRlLmRlZmF1bHQpKGRhdGUsICdZWS9NTS9ERCcpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoMCwgX2lzRGF0ZS5kZWZhdWx0KShkYXRlLCAnWVlZWS9NTS9ERCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBDYWxjdWxhdGUgY2hlY2sgZGlnaXRcblxuXG4gICAgdmFyIGRpZ2l0cyA9IHRpbi5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xuICAgIH0pO1xuICAgIHZhciBtdWx0aXBsaWVycyA9IFsyLCA3LCA5LCAxLCA0LCA2LCAzLCA1LCA4LCAyLCA3LCA5XTtcbiAgICB2YXIgY2hlY2tzdW0gPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdWx0aXBsaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hlY2tzdW0gKz0gZGlnaXRzW2ldICogbXVsdGlwbGllcnNbaV07XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrc3VtICUgMTEgPT09IDEwKSB7XG4gICAgICByZXR1cm4gZGlnaXRzWzEyXSA9PT0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlnaXRzWzEyXSA9PT0gY2hlY2tzdW0gJSAxMTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLypcbiAqIHNrLVNLIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChSb2Ruw6kgxI3DrXNsbyAoUsSMKSBvciBiZXp2w716bmFtb3bDqSBpZGVudGlmaWthxI1uw6kgxI3DrXNsbyAoQknEjCksIHBlcnNvbnMgb25seSlcbiAqIENoZWNrcyB2YWxpZGl0eSBvZiBwcmUtMTk1NCBiaXJ0aCBudW1iZXJzIChyb2Ruw6kgxI3DrXNsbykgb25seVxuICogRHVlIHRvIHRoZSBpbnRyb2R1Y3Rpb24gb2YgdGhlIHBzZXVkby1yYW5kb20gQknEjCBpdCBpcyBub3QgcG9zc2libGUgdG8gdGVzdFxuICogcG9zdC0xOTU0IGJpcnRoIG51bWJlcnMgd2l0aG91dCBrbm93aW5nIHdoZXRoZXIgdGhleSBhcmUgQknEjCBvciBSxIwgYmVmb3JlaGFuZFxuICovXG5cblxuZnVuY3Rpb24gc2tTa0NoZWNrKHRpbikge1xuICBpZiAodGluLmxlbmd0aCA9PT0gOSkge1xuICAgIHRpbiA9IHRpbi5yZXBsYWNlKC9cXFcvLCAnJyk7XG5cbiAgICBpZiAodGluLnNsaWNlKDYpID09PSAnMDAwJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gVGhyZWUtemVybyBzZXJpYWwgbm90IGFzc2lnbmVkIGJlZm9yZSAxOTU0XG4gICAgLy8gRXh0cmFjdCBmdWxsIHllYXIgZnJvbSBUSU4gbGVuZ3RoXG5cblxuICAgIHZhciBmdWxsX3llYXIgPSBwYXJzZUludCh0aW4uc2xpY2UoMCwgMiksIDEwKTtcblxuICAgIGlmIChmdWxsX3llYXIgPiA1Mykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChmdWxsX3llYXIgPCAxMCkge1xuICAgICAgZnVsbF95ZWFyID0gXCIxOTBcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnVsbF95ZWFyID0gXCIxOVwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgIH0gLy8gRXh0cmFjdCBtb250aCBmcm9tIFRJTiBhbmQgbm9ybWFsaXplXG5cblxuICAgIHZhciBtb250aCA9IHBhcnNlSW50KHRpbi5zbGljZSgyLCA0KSwgMTApO1xuXG4gICAgaWYgKG1vbnRoID4gNTApIHtcbiAgICAgIG1vbnRoIC09IDUwO1xuICAgIH1cblxuICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICBtb250aCA9IFwiMFwiLmNvbmNhdChtb250aCk7XG4gICAgfSAvLyBDaGVjayBkYXRlIHZhbGlkaXR5XG5cblxuICAgIHZhciBkYXRlID0gXCJcIi5jb25jYXQoZnVsbF95ZWFyLCBcIi9cIikuY29uY2F0KG1vbnRoLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSg0LCA2KSk7XG5cbiAgICBpZiAoISgwLCBfaXNEYXRlLmRlZmF1bHQpKGRhdGUsICdZWVlZL01NL0REJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qXG4gKiBzbC1TSSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoRGF2xI1uYSDFoXRldmlsa2EsIHBlcnNvbnMvZW50aXRpZXMpXG4gKiBWZXJpZnkgVElOIHZhbGlkaXR5IGJ5IGNhbGN1bGF0aW5nIGNoZWNrIChsYXN0KSBkaWdpdCAodmFyaWFudCBvZiBNT0QgMTEpXG4gKi9cblxuXG5mdW5jdGlvbiBzbFNpQ2hlY2sodGluKSB7XG4gIHZhciBjaGVja3N1bSA9IDExIC0gYWxnb3JpdGhtcy5yZXZlcnNlTXVsdGlwbHlBbmRTdW0odGluLnNwbGl0KCcnKS5zbGljZSgwLCA3KS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xuICB9KSwgOCkgJSAxMTtcblxuICBpZiAoY2hlY2tzdW0gPT09IDEwKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHRpbls3XSwgMTApID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrc3VtID09PSBwYXJzZUludCh0aW5bN10sIDEwKTtcbn1cbi8qXG4gKiBzdi1TRSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoUGVyc29ubnVtbWVyIG9yIHNhbW9yZG5pbmdzbnVtbWVyLCBwZXJzb25zIG9ubHkpXG4gKiBDaGVja3MgdmFsaWRpdHkgb2YgYmlydGggZGF0ZSBhbmQgY2FsbHMgbHVobkNoZWNrKCkgdG8gdmFsaWRhdGUgY2hlY2sgKGxhc3QpIGRpZ2l0XG4gKi9cblxuXG5mdW5jdGlvbiBzdlNlQ2hlY2sodGluKSB7XG4gIC8vIE1ha2UgY29weSBvZiBUSU4gYW5kIG5vcm1hbGl6ZSB0byB0d28tZGlnaXQgeWVhciBmb3JtXG4gIHZhciB0aW5fY29weSA9IHRpbi5zbGljZSgwKTtcblxuICBpZiAodGluLmxlbmd0aCA+IDExKSB7XG4gICAgdGluX2NvcHkgPSB0aW5fY29weS5zbGljZSgyKTtcbiAgfSAvLyBFeHRyYWN0IGRhdGUgb2YgYmlydGhcblxuXG4gIHZhciBmdWxsX3llYXIgPSAnJztcbiAgdmFyIG1vbnRoID0gdGluX2NvcHkuc2xpY2UoMiwgNCk7XG4gIHZhciBkYXkgPSBwYXJzZUludCh0aW5fY29weS5zbGljZSg0LCA2KSwgMTApO1xuXG4gIGlmICh0aW4ubGVuZ3RoID4gMTEpIHtcbiAgICBmdWxsX3llYXIgPSB0aW4uc2xpY2UoMCwgNCk7XG4gIH0gZWxzZSB7XG4gICAgZnVsbF95ZWFyID0gdGluLnNsaWNlKDAsIDIpO1xuXG4gICAgaWYgKHRpbi5sZW5ndGggPT09IDExICYmIGRheSA8IDYwKSB7XG4gICAgICAvLyBFeHRyYWN0IGZ1bGwgeWVhciBmcm9tIGNlbnRlbmFyaWFuIHN5bWJvbFxuICAgICAgLy8gU2hvdWxkIHdvcmsganVzdCBmaW5lIHVudGlsIHllYXIgMTAwMDAgb3Igc29cbiAgICAgIHZhciBjdXJyZW50X3llYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgIHZhciBjdXJyZW50X2NlbnR1cnkgPSBwYXJzZUludChjdXJyZW50X3llYXIuc2xpY2UoMCwgMiksIDEwKTtcbiAgICAgIGN1cnJlbnRfeWVhciA9IHBhcnNlSW50KGN1cnJlbnRfeWVhciwgMTApO1xuXG4gICAgICBpZiAodGluWzZdID09PSAnLScpIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KFwiXCIuY29uY2F0KGN1cnJlbnRfY2VudHVyeSkuY29uY2F0KGZ1bGxfeWVhciksIDEwKSA+IGN1cnJlbnRfeWVhcikge1xuICAgICAgICAgIGZ1bGxfeWVhciA9IFwiXCIuY29uY2F0KGN1cnJlbnRfY2VudHVyeSAtIDEpLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZ1bGxfeWVhciA9IFwiXCIuY29uY2F0KGN1cnJlbnRfY2VudHVyeSkuY29uY2F0KGZ1bGxfeWVhcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bGxfeWVhciA9IFwiXCIuY29uY2F0KGN1cnJlbnRfY2VudHVyeSAtIDEpLmNvbmNhdChmdWxsX3llYXIpO1xuXG4gICAgICAgIGlmIChjdXJyZW50X3llYXIgLSBwYXJzZUludChmdWxsX3llYXIsIDEwKSA8IDEwMCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBOb3JtYWxpemUgZGF5IGFuZCBjaGVjayBkYXRlIHZhbGlkaXR5XG5cblxuICBpZiAoZGF5ID4gNjApIHtcbiAgICBkYXkgLT0gNjA7XG4gIH1cblxuICBpZiAoZGF5IDwgMTApIHtcbiAgICBkYXkgPSBcIjBcIi5jb25jYXQoZGF5KTtcbiAgfVxuXG4gIHZhciBkYXRlID0gXCJcIi5jb25jYXQoZnVsbF95ZWFyLCBcIi9cIikuY29uY2F0KG1vbnRoLCBcIi9cIikuY29uY2F0KGRheSk7XG5cbiAgaWYgKGRhdGUubGVuZ3RoID09PSA4KSB7XG4gICAgaWYgKCEoMCwgX2lzRGF0ZS5kZWZhdWx0KShkYXRlLCAnWVkvTU0vREQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmICghKDAsIF9pc0RhdGUuZGVmYXVsdCkoZGF0ZSwgJ1lZWVkvTU0vREQnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhbGdvcml0aG1zLmx1aG5DaGVjayh0aW4ucmVwbGFjZSgvXFxXLywgJycpKTtcbn0gLy8gTG9jYWxlIGxvb2t1cCBvYmplY3RzXG5cbi8qXG4gKiBUYXggaWQgcmVnZXggZm9ybWF0cyBmb3IgdmFyaW91cyBsb2NhbGVzXG4gKlxuICogV2hlcmUgbm90IGV4cGxpY2l0bHkgc3BlY2lmaWVkIGluIERHLVRBWFVEIGRvY3VtZW50IGJvdGhcbiAqIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMgYXJlIGFjY2VwdGFibGUuXG4gKi9cblxuXG52YXIgdGF4SWRGb3JtYXQgPSB7XG4gICdiZy1CRyc6IC9eXFxkezEwfSQvLFxuICAnY3MtQ1onOiAvXlxcZHs2fVxcL3swLDF9XFxkezMsNH0kLyxcbiAgJ2RlLUFUJzogL15cXGR7OX0kLyxcbiAgJ2RlLURFJzogL15bMS05XVxcZHsxMH0kLyxcbiAgJ2RrLURLJzogL15cXGR7Nn0tezAsMX1cXGR7NH0kLyxcbiAgJ2VsLUNZJzogL15bMDldXFxkezd9W0EtWl0kLyxcbiAgJ2VsLUdSJzogL14oWzAtNF18WzctOV0pXFxkezh9JC8sXG4gICdlbi1HQic6IC9eXFxkezEwfSR8Xig/IUdCfE5LfFROfFpaKSg/IVtERklRVVZdKVtBLVpdKD8hW0RGSVFVVk9dKVtBLVpdXFxkezZ9W0FCQ0QgXSQvaSxcbiAgJ2VuLUlFJzogL15cXGR7N31bQS1XXVtBLUlXXXswLDF9JC9pLFxuICAnZW4tVVMnOiAvXlxcZHsyfVstIF17MCwxfVxcZHs3fSQvLFxuICAnZXMtRVMnOiAvXihcXGR7MCw4fXxbWFlaS0xNXVxcZHs3fSlbQS1ISi1OUC1UVi1aXSQvaSxcbiAgJ2V0LUVFJzogL15bMS02XVxcZHs2fSgwMFsxLTldfDBbMS05XVswLTldfFsxLTZdWzAtOV17Mn18NzBbMC05XXw3MTApXFxkJC8sXG4gICdmaS1GSSc6IC9eXFxkezZ9Wy0rQV1cXGR7M31bMC05QS1GSEotTlBSLVldJC9pLFxuICAnZnItQkUnOiAvXlxcZHsxMX0kLyxcbiAgJ2ZyLUZSJzogL15bMC0zXVxcZHsxMn0kfF5bMC0zXVxcZFxcc1xcZHsyfShcXHNcXGR7M30pezN9JC8sXG4gIC8vIENvbmZvcm1zIGJvdGggdG8gb2ZmaWNpYWwgc3BlYyBhbmQgcHJvdmlkZWQgZXhhbXBsZVxuICAnZnItTFUnOiAvXlxcZHsxM30kLyxcbiAgJ2hyLUhSJzogL15cXGR7MTF9JC8sXG4gICdodS1IVSc6IC9eOFxcZHs5fSQvLFxuICAnaXQtSVQnOiAvXltBLVpdezZ9W0wtTlAtVjAtOV17Mn1bQS1FSExNUFJTVF1bTC1OUC1WMC05XXsyfVtBLUlMTVpdW0wtTlAtVjAtOV17M31bQS1aXSQvaSxcbiAgJ2x2LUxWJzogL15cXGR7Nn0tezAsMX1cXGR7NX0kLyxcbiAgLy8gQ29uZm9ybXMgYm90aCB0byBERyBUQVhVRCBzcGVjIGFuZCBvcmlnaW5hbCByZXNlYXJjaFxuICAnbXQtTVQnOiAvXlxcZHszLDd9W0FQTUdMSEJaXSR8XihbMS04XSlcXDFcXGR7N30kL2ksXG4gICdubC1OTCc6IC9eXFxkezl9JC8sXG4gICdwbC1QTCc6IC9eXFxkezEwLDExfSQvLFxuICAncHQtUFQnOiAvXlxcZHs5fSQvLFxuICAncm8tUk8nOiAvXlxcZHsxM30kLyxcbiAgJ3NrLVNLJzogL15cXGR7Nn1cXC97MCwxfVxcZHszLDR9JC8sXG4gICdzbC1TSSc6IC9eWzEtOV1cXGR7N30kLyxcbiAgJ3N2LVNFJzogL14oXFxkezZ9Wy0rXXswLDF9XFxkezR9fCgxOHwxOXwyMClcXGR7Nn1bLStdezAsMX1cXGR7NH0pJC9cbn07IC8vIHRheElkRm9ybWF0IGxvY2FsZSBhbGlhc2VzXG5cbnRheElkRm9ybWF0WydsYi1MVSddID0gdGF4SWRGb3JtYXRbJ2ZyLUxVJ107XG50YXhJZEZvcm1hdFsnbHQtTFQnXSA9IHRheElkRm9ybWF0WydldC1FRSddO1xudGF4SWRGb3JtYXRbJ25sLUJFJ10gPSB0YXhJZEZvcm1hdFsnZnItQkUnXTsgLy8gQWxnb3JpdGhtaWMgdGF4IGlkIGNoZWNrIGZ1bmN0aW9ucyBmb3IgdmFyaW91cyBsb2NhbGVzXG5cbnZhciB0YXhJZENoZWNrID0ge1xuICAnYmctQkcnOiBiZ0JnQ2hlY2ssXG4gICdjcy1DWic6IGNzQ3pDaGVjayxcbiAgJ2RlLUFUJzogZGVBdENoZWNrLFxuICAnZGUtREUnOiBkZURlQ2hlY2ssXG4gICdkay1ESyc6IGRrRGtDaGVjayxcbiAgJ2VsLUNZJzogZWxDeUNoZWNrLFxuICAnZWwtR1InOiBlbEdyQ2hlY2ssXG4gICdlbi1JRSc6IGVuSWVDaGVjayxcbiAgJ2VuLVVTJzogZW5Vc0NoZWNrLFxuICAnZXMtRVMnOiBlc0VzQ2hlY2ssXG4gICdldC1FRSc6IGV0RWVDaGVjayxcbiAgJ2ZpLUZJJzogZmlGaUNoZWNrLFxuICAnZnItQkUnOiBmckJlQ2hlY2ssXG4gICdmci1GUic6IGZyRnJDaGVjayxcbiAgJ2ZyLUxVJzogZnJMdUNoZWNrLFxuICAnaHItSFInOiBockhyQ2hlY2ssXG4gICdodS1IVSc6IGh1SHVDaGVjayxcbiAgJ2l0LUlUJzogaXRJdENoZWNrLFxuICAnbHYtTFYnOiBsdkx2Q2hlY2ssXG4gICdtdC1NVCc6IG10TXRDaGVjayxcbiAgJ25sLU5MJzogbmxObENoZWNrLFxuICAncGwtUEwnOiBwbFBsQ2hlY2ssXG4gICdwdC1QVCc6IHB0UHRDaGVjayxcbiAgJ3JvLVJPJzogcm9Sb0NoZWNrLFxuICAnc2stU0snOiBza1NrQ2hlY2ssXG4gICdzbC1TSSc6IHNsU2lDaGVjayxcbiAgJ3N2LVNFJzogc3ZTZUNoZWNrXG59OyAvLyB0YXhJZENoZWNrIGxvY2FsZSBhbGlhc2VzXG5cbnRheElkQ2hlY2tbJ2xiLUxVJ10gPSB0YXhJZENoZWNrWydmci1MVSddO1xudGF4SWRDaGVja1snbHQtTFQnXSA9IHRheElkQ2hlY2tbJ2V0LUVFJ107XG50YXhJZENoZWNrWydubC1CRSddID0gdGF4SWRDaGVja1snZnItQkUnXTsgLy8gUmVnZXhlcyBmb3IgbG9jYWxlcyB3aGVyZSBjaGFyYWN0ZXJzIHNob3VsZCBiZSBvbWl0dGVkIGJlZm9yZSBjaGVja2luZyBmb3JtYXRcblxudmFyIGFsbHN5bWJvbHMgPSAvWy1cXFxcXFwvIUAjJCVcXF4mXFwqXFwoXFwpXFwrXFw9XFxbXFxdXSsvZztcbnZhciBzYW5pdGl6ZVJlZ2V4ZXMgPSB7XG4gICdkZS1BVCc6IGFsbHN5bWJvbHMsXG4gICdkZS1ERSc6IC9bXFwvXFxcXF0vZyxcbiAgJ2ZyLUJFJzogYWxsc3ltYm9sc1xufTsgLy8gc2FuaXRpemVSZWdleGVzIGxvY2FsZSBhbGlhc2VzXG5cbnNhbml0aXplUmVnZXhlc1snbmwtQkUnXSA9IHNhbml0aXplUmVnZXhlc1snZnItQkUnXTtcbi8qXG4gKiBWYWxpZGF0b3IgZnVuY3Rpb25cbiAqIFJldHVybiB0cnVlIGlmIHRoZSBwYXNzZWQgc3RyaW5nIGlzIGEgdmFsaWQgdGF4IGlkZW50aWZpY2F0aW9uIG51bWJlclxuICogZm9yIHRoZSBzcGVjaWZpZWQgbG9jYWxlLlxuICogVGhyb3cgYW4gZXJyb3IgZXhjZXB0aW9uIGlmIHRoZSBsb2NhbGUgaXMgbm90IHN1cHBvcnRlZC5cbiAqL1xuXG5mdW5jdGlvbiBpc1RheElEKHN0cikge1xuICB2YXIgbG9jYWxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnZW4tVVMnO1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpOyAvLyBDb3B5IFRJTiB0byBhdm9pZCByZXBsYWNlbWVudCBpZiBzYW5pdGl6ZWRcblxuICB2YXIgc3RyY29weSA9IHN0ci5zbGljZSgwKTtcblxuICBpZiAobG9jYWxlIGluIHRheElkRm9ybWF0KSB7XG4gICAgaWYgKGxvY2FsZSBpbiBzYW5pdGl6ZVJlZ2V4ZXMpIHtcbiAgICAgIHN0cmNvcHkgPSBzdHJjb3B5LnJlcGxhY2Uoc2FuaXRpemVSZWdleGVzW2xvY2FsZV0sICcnKTtcbiAgICB9XG5cbiAgICBpZiAoIXRheElkRm9ybWF0W2xvY2FsZV0udGVzdChzdHJjb3B5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChsb2NhbGUgaW4gdGF4SWRDaGVjaykge1xuICAgICAgcmV0dXJuIHRheElkQ2hlY2tbbG9jYWxlXShzdHJjb3B5KTtcbiAgICB9IC8vIEZhbGx0aHJvdWdoOyBub3QgYWxsIGxvY2FsZXMgaGF2ZSBhbGdvcml0aG1pYyBjaGVja3NcblxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvY2FsZSAnXCIuY29uY2F0KGxvY2FsZSwgXCInXCIpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNVUkw7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfaXNGUUROID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc0ZRRE5cIikpO1xuXG52YXIgX2lzSVAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzSVBcIikpO1xuXG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcbm9wdGlvbnMgZm9yIGlzVVJMIG1ldGhvZFxuXG5yZXF1aXJlX3Byb3RvY29sIC0gaWYgc2V0IGFzIHRydWUgaXNVUkwgd2lsbCByZXR1cm4gZmFsc2UgaWYgcHJvdG9jb2wgaXMgbm90IHByZXNlbnQgaW4gdGhlIFVSTFxucmVxdWlyZV92YWxpZF9wcm90b2NvbCAtIGlzVVJMIHdpbGwgY2hlY2sgaWYgdGhlIFVSTCdzIHByb3RvY29sIGlzIHByZXNlbnQgaW4gdGhlIHByb3RvY29scyBvcHRpb25cbnByb3RvY29scyAtIHZhbGlkIHByb3RvY29scyBjYW4gYmUgbW9kaWZpZWQgd2l0aCB0aGlzIG9wdGlvblxucmVxdWlyZV9ob3N0IC0gaWYgc2V0IGFzIGZhbHNlIGlzVVJMIHdpbGwgbm90IGNoZWNrIGlmIGhvc3QgaXMgcHJlc2VudCBpbiB0aGUgVVJMXG5yZXF1aXJlX3BvcnQgLSBpZiBzZXQgYXMgdHJ1ZSBpc1VSTCB3aWxsIGNoZWNrIGlmIHBvcnQgaXMgcHJlc2VudCBpbiB0aGUgVVJMXG5hbGxvd19wcm90b2NvbF9yZWxhdGl2ZV91cmxzIC0gaWYgc2V0IGFzIHRydWUgcHJvdG9jb2wgcmVsYXRpdmUgVVJMcyB3aWxsIGJlIGFsbG93ZWRcbnZhbGlkYXRlX2xlbmd0aCAtIGlmIHNldCBhcyBmYWxzZSBpc1VSTCB3aWxsIHNraXAgc3RyaW5nIGxlbmd0aCB2YWxpZGF0aW9uIChJRSBtYXhpbXVtIGlzIDIwODMpXG5cbiovXG52YXIgZGVmYXVsdF91cmxfb3B0aW9ucyA9IHtcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZnRwJ10sXG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICByZXF1aXJlX3Byb3RvY29sOiBmYWxzZSxcbiAgcmVxdWlyZV9ob3N0OiB0cnVlLFxuICByZXF1aXJlX3BvcnQ6IGZhbHNlLFxuICByZXF1aXJlX3ZhbGlkX3Byb3RvY29sOiB0cnVlLFxuICBhbGxvd191bmRlcnNjb3JlczogZmFsc2UsXG4gIGFsbG93X3RyYWlsaW5nX2RvdDogZmFsc2UsXG4gIGFsbG93X3Byb3RvY29sX3JlbGF0aXZlX3VybHM6IGZhbHNlLFxuICB2YWxpZGF0ZV9sZW5ndGg6IHRydWVcbn07XG52YXIgd3JhcHBlZF9pcHY2ID0gL15cXFsoW15cXF1dKylcXF0oPzo6KFswLTldKykpPyQvO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gY2hlY2tIb3N0KGhvc3QsIG1hdGNoZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG1hdGNoID0gbWF0Y2hlc1tpXTtcblxuICAgIGlmIChob3N0ID09PSBtYXRjaCB8fCBpc1JlZ0V4cChtYXRjaCkgJiYgbWF0Y2gudGVzdChob3N0KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1VSTCh1cmwsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkodXJsKTtcblxuICBpZiAoIXVybCB8fCAvW1xcczw+XS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHVybC5pbmRleE9mKCdtYWlsdG86JykgPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X3VybF9vcHRpb25zKTtcblxuICBpZiAob3B0aW9ucy52YWxpZGF0ZV9sZW5ndGggJiYgdXJsLmxlbmd0aCA+PSAyMDgzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHByb3RvY29sLCBhdXRoLCBob3N0LCBob3N0bmFtZSwgcG9ydCwgcG9ydF9zdHIsIHNwbGl0LCBpcHY2O1xuICBzcGxpdCA9IHVybC5zcGxpdCgnIycpO1xuICB1cmwgPSBzcGxpdC5zaGlmdCgpO1xuICBzcGxpdCA9IHVybC5zcGxpdCgnPycpO1xuICB1cmwgPSBzcGxpdC5zaGlmdCgpO1xuICBzcGxpdCA9IHVybC5zcGxpdCgnOi8vJyk7XG5cbiAgaWYgKHNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICBwcm90b2NvbCA9IHNwbGl0LnNoaWZ0KCkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChvcHRpb25zLnJlcXVpcmVfdmFsaWRfcHJvdG9jb2wgJiYgb3B0aW9ucy5wcm90b2NvbHMuaW5kZXhPZihwcm90b2NvbCkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZV9wcm90b2NvbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmICh1cmwuc3Vic3RyKDAsIDIpID09PSAnLy8nKSB7XG4gICAgaWYgKCFvcHRpb25zLmFsbG93X3Byb3RvY29sX3JlbGF0aXZlX3VybHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzcGxpdFswXSA9IHVybC5zdWJzdHIoMik7XG4gIH1cblxuICB1cmwgPSBzcGxpdC5qb2luKCc6Ly8nKTtcblxuICBpZiAodXJsID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCcvJyk7XG4gIHVybCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgaWYgKHVybCA9PT0gJycgJiYgIW9wdGlvbnMucmVxdWlyZV9ob3N0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzcGxpdCA9IHVybC5zcGxpdCgnQCcpO1xuXG4gIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgaWYgKG9wdGlvbnMuZGlzYWxsb3dfYXV0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGF1dGggPSBzcGxpdC5zaGlmdCgpO1xuXG4gICAgaWYgKGF1dGguaW5kZXhPZignOicpID09PSAtMSB8fCBhdXRoLmluZGV4T2YoJzonKSA+PSAwICYmIGF1dGguc3BsaXQoJzonKS5sZW5ndGggPiAyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaG9zdG5hbWUgPSBzcGxpdC5qb2luKCdAJyk7XG4gIHBvcnRfc3RyID0gbnVsbDtcbiAgaXB2NiA9IG51bGw7XG4gIHZhciBpcHY2X21hdGNoID0gaG9zdG5hbWUubWF0Y2god3JhcHBlZF9pcHY2KTtcblxuICBpZiAoaXB2Nl9tYXRjaCkge1xuICAgIGhvc3QgPSAnJztcbiAgICBpcHY2ID0gaXB2Nl9tYXRjaFsxXTtcbiAgICBwb3J0X3N0ciA9IGlwdjZfbWF0Y2hbMl0gfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBzcGxpdCA9IGhvc3RuYW1lLnNwbGl0KCc6Jyk7XG4gICAgaG9zdCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgICBpZiAoc3BsaXQubGVuZ3RoKSB7XG4gICAgICBwb3J0X3N0ciA9IHNwbGl0LmpvaW4oJzonKTtcbiAgICB9XG4gIH1cblxuICBpZiAocG9ydF9zdHIgIT09IG51bGwpIHtcbiAgICBwb3J0ID0gcGFyc2VJbnQocG9ydF9zdHIsIDEwKTtcblxuICAgIGlmICghL15bMC05XSskLy50ZXN0KHBvcnRfc3RyKSB8fCBwb3J0IDw9IDAgfHwgcG9ydCA+IDY1NTM1KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZV9wb3J0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCEoMCwgX2lzSVAuZGVmYXVsdCkoaG9zdCkgJiYgISgwLCBfaXNGUUROLmRlZmF1bHQpKGhvc3QsIG9wdGlvbnMpICYmICghaXB2NiB8fCAhKDAsIF9pc0lQLmRlZmF1bHQpKGlwdjYsIDYpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhvc3QgPSBob3N0IHx8IGlwdjY7XG5cbiAgaWYgKG9wdGlvbnMuaG9zdF93aGl0ZWxpc3QgJiYgIWNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3Rfd2hpdGVsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhvc3RfYmxhY2tsaXN0ICYmIGNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3RfYmxhY2tsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1VVSUQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB1dWlkID0ge1xuICAzOiAvXlswLTlBLUZdezh9LVswLTlBLUZdezR9LTNbMC05QS1GXXszfS1bMC05QS1GXXs0fS1bMC05QS1GXXsxMn0kL2ksXG4gIDQ6IC9eWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tNFswLTlBLUZdezN9LVs4OUFCXVswLTlBLUZdezN9LVswLTlBLUZdezEyfSQvaSxcbiAgNTogL15bMC05QS1GXXs4fS1bMC05QS1GXXs0fS01WzAtOUEtRl17M30tWzg5QUJdWzAtOUEtRl17M30tWzAtOUEtRl17MTJ9JC9pLFxuICBhbGw6IC9eWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17MTJ9JC9pXG59O1xuXG5mdW5jdGlvbiBpc1VVSUQoc3RyKSB7XG4gIHZhciB2ZXJzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnYWxsJztcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHBhdHRlcm4gPSB1dWlkW3ZlcnNpb25dO1xuICByZXR1cm4gcGF0dGVybiAmJiBwYXR0ZXJuLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNVcHBlcmNhc2U7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzVXBwZXJjYXNlKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3RyID09PSBzdHIudG9VcHBlckNhc2UoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNWQVQ7XG5leHBvcnRzLnZhdE1hdGNoZXJzID0gdm9pZCAwO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdmF0TWF0Y2hlcnMgPSB7XG4gIEdCOiAvXkdCKChcXGR7M30gXFxkezR9IChbMC04XVswLTldfDlbMC02XSkpfChcXGR7OX0gXFxkezN9KXwoKChHRFswLTRdKXwoSEFbNS05XSkpWzAtOV17Mn0pKSQvXG59O1xuZXhwb3J0cy52YXRNYXRjaGVycyA9IHZhdE1hdGNoZXJzO1xuXG5mdW5jdGlvbiBpc1ZBVChzdHIsIGNvdW50cnlDb2RlKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKGNvdW50cnlDb2RlKTtcblxuICBpZiAoY291bnRyeUNvZGUgaW4gdmF0TWF0Y2hlcnMpIHtcbiAgICByZXR1cm4gdmF0TWF0Y2hlcnNbY291bnRyeUNvZGVdLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY291bnRyeSBjb2RlOiAnXCIuY29uY2F0KGNvdW50cnlDb2RlLCBcIidcIikpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNWYXJpYWJsZVdpZHRoO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2lzRnVsbFdpZHRoID0gcmVxdWlyZShcIi4vaXNGdWxsV2lkdGhcIik7XG5cbnZhciBfaXNIYWxmV2lkdGggPSByZXF1aXJlKFwiLi9pc0hhbGZXaWR0aFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNWYXJpYWJsZVdpZHRoKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gX2lzRnVsbFdpZHRoLmZ1bGxXaWR0aC50ZXN0KHN0cikgJiYgX2lzSGFsZldpZHRoLmhhbGZXaWR0aC50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzV2hpdGVsaXN0ZWQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzV2hpdGVsaXN0ZWQoc3RyLCBjaGFycykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGZvciAodmFyIGkgPSBzdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoY2hhcnMuaW5kZXhPZihzdHJbaV0pID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsdHJpbTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbHRyaW0oc3RyLCBjaGFycykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpOyAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL1JlZ3VsYXJfRXhwcmVzc2lvbnMjRXNjYXBpbmdcblxuICB2YXIgcGF0dGVybiA9IGNoYXJzID8gbmV3IFJlZ0V4cChcIl5bXCIuY29uY2F0KGNoYXJzLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyksIFwiXStcIiksICdnJykgOiAvXlxccysvZztcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKHBhdHRlcm4sICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWF0Y2hlcztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbWF0Y2hlcyhzdHIsIHBhdHRlcm4sIG1vZGlmaWVycykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocGF0dGVybikgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgcGF0dGVybiA9IG5ldyBSZWdFeHAocGF0dGVybiwgbW9kaWZpZXJzKTtcbiAgfVxuXG4gIHJldHVybiBwYXR0ZXJuLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbm9ybWFsaXplRW1haWw7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF9ub3JtYWxpemVfZW1haWxfb3B0aW9ucyA9IHtcbiAgLy8gVGhlIGZvbGxvd2luZyBvcHRpb25zIGFwcGx5IHRvIGFsbCBlbWFpbCBhZGRyZXNzZXNcbiAgLy8gTG93ZXJjYXNlcyB0aGUgbG9jYWwgcGFydCBvZiB0aGUgZW1haWwgYWRkcmVzcy5cbiAgLy8gUGxlYXNlIG5vdGUgdGhpcyBtYXkgdmlvbGF0ZSBSRkMgNTMyMSBhcyBwZXIgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvOTgwODMzMi8xOTIwMjQpLlxuICAvLyBUaGUgZG9tYWluIGlzIGFsd2F5cyBsb3dlcmNhc2VkLCBhcyBwZXIgUkZDIDEwMzVcbiAgYWxsX2xvd2VyY2FzZTogdHJ1ZSxcbiAgLy8gVGhlIGZvbGxvd2luZyBjb252ZXJzaW9ucyBhcmUgc3BlY2lmaWMgdG8gR01haWxcbiAgLy8gTG93ZXJjYXNlcyB0aGUgbG9jYWwgcGFydCBvZiB0aGUgR01haWwgYWRkcmVzcyAoa25vd24gdG8gYmUgY2FzZS1pbnNlbnNpdGl2ZSlcbiAgZ21haWxfbG93ZXJjYXNlOiB0cnVlLFxuICAvLyBSZW1vdmVzIGRvdHMgZnJvbSB0aGUgbG9jYWwgcGFydCBvZiB0aGUgZW1haWwgYWRkcmVzcywgYXMgdGhhdCdzIGlnbm9yZWQgYnkgR01haWxcbiAgZ21haWxfcmVtb3ZlX2RvdHM6IHRydWUsXG4gIC8vIFJlbW92ZXMgdGhlIHN1YmFkZHJlc3MgKGUuZy4gXCIrZm9vXCIpIGZyb20gdGhlIGVtYWlsIGFkZHJlc3NcbiAgZ21haWxfcmVtb3ZlX3N1YmFkZHJlc3M6IHRydWUsXG4gIC8vIENvbnZlcnN0cyB0aGUgZ29vZ2xlbWFpbC5jb20gZG9tYWluIHRvIGdtYWlsLmNvbVxuICBnbWFpbF9jb252ZXJ0X2dvb2dsZW1haWxkb3Rjb206IHRydWUsXG4gIC8vIFRoZSBmb2xsb3dpbmcgY29udmVyc2lvbnMgYXJlIHNwZWNpZmljIHRvIE91dGxvb2suY29tIC8gV2luZG93cyBMaXZlIC8gSG90bWFpbFxuICAvLyBMb3dlcmNhc2VzIHRoZSBsb2NhbCBwYXJ0IG9mIHRoZSBPdXRsb29rLmNvbSBhZGRyZXNzIChrbm93biB0byBiZSBjYXNlLWluc2Vuc2l0aXZlKVxuICBvdXRsb29rZG90Y29tX2xvd2VyY2FzZTogdHJ1ZSxcbiAgLy8gUmVtb3ZlcyB0aGUgc3ViYWRkcmVzcyAoZS5nLiBcIitmb29cIikgZnJvbSB0aGUgZW1haWwgYWRkcmVzc1xuICBvdXRsb29rZG90Y29tX3JlbW92ZV9zdWJhZGRyZXNzOiB0cnVlLFxuICAvLyBUaGUgZm9sbG93aW5nIGNvbnZlcnNpb25zIGFyZSBzcGVjaWZpYyB0byBZYWhvb1xuICAvLyBMb3dlcmNhc2VzIHRoZSBsb2NhbCBwYXJ0IG9mIHRoZSBZYWhvbyBhZGRyZXNzIChrbm93biB0byBiZSBjYXNlLWluc2Vuc2l0aXZlKVxuICB5YWhvb19sb3dlcmNhc2U6IHRydWUsXG4gIC8vIFJlbW92ZXMgdGhlIHN1YmFkZHJlc3MgKGUuZy4gXCItZm9vXCIpIGZyb20gdGhlIGVtYWlsIGFkZHJlc3NcbiAgeWFob29fcmVtb3ZlX3N1YmFkZHJlc3M6IHRydWUsXG4gIC8vIFRoZSBmb2xsb3dpbmcgY29udmVyc2lvbnMgYXJlIHNwZWNpZmljIHRvIFlhbmRleFxuICAvLyBMb3dlcmNhc2VzIHRoZSBsb2NhbCBwYXJ0IG9mIHRoZSBZYW5kZXggYWRkcmVzcyAoa25vd24gdG8gYmUgY2FzZS1pbnNlbnNpdGl2ZSlcbiAgeWFuZGV4X2xvd2VyY2FzZTogdHJ1ZSxcbiAgLy8gVGhlIGZvbGxvd2luZyBjb252ZXJzaW9ucyBhcmUgc3BlY2lmaWMgdG8gaUNsb3VkXG4gIC8vIExvd2VyY2FzZXMgdGhlIGxvY2FsIHBhcnQgb2YgdGhlIGlDbG91ZCBhZGRyZXNzIChrbm93biB0byBiZSBjYXNlLWluc2Vuc2l0aXZlKVxuICBpY2xvdWRfbG93ZXJjYXNlOiB0cnVlLFxuICAvLyBSZW1vdmVzIHRoZSBzdWJhZGRyZXNzIChlLmcuIFwiK2Zvb1wiKSBmcm9tIHRoZSBlbWFpbCBhZGRyZXNzXG4gIGljbG91ZF9yZW1vdmVfc3ViYWRkcmVzczogdHJ1ZVxufTsgLy8gTGlzdCBvZiBkb21haW5zIHVzZWQgYnkgaUNsb3VkXG5cbnZhciBpY2xvdWRfZG9tYWlucyA9IFsnaWNsb3VkLmNvbScsICdtZS5jb20nXTsgLy8gTGlzdCBvZiBkb21haW5zIHVzZWQgYnkgT3V0bG9vay5jb20gYW5kIGl0cyBwcmVkZWNlc3NvcnNcbi8vIFRoaXMgbGlzdCBpcyBsaWtlbHkgaW5jb21wbGV0ZS5cbi8vIFBhcnRpYWwgcmVmZXJlbmNlOlxuLy8gaHR0cHM6Ly9ibG9ncy5vZmZpY2UuY29tLzIwMTMvMDQvMTcvb3V0bG9vay1jb20tZ2V0cy10d28tc3RlcC12ZXJpZmljYXRpb24tc2lnbi1pbi1ieS1hbGlhcy1hbmQtbmV3LWludGVybmF0aW9uYWwtZG9tYWlucy9cblxudmFyIG91dGxvb2tkb3Rjb21fZG9tYWlucyA9IFsnaG90bWFpbC5hdCcsICdob3RtYWlsLmJlJywgJ2hvdG1haWwuY2EnLCAnaG90bWFpbC5jbCcsICdob3RtYWlsLmNvLmlsJywgJ2hvdG1haWwuY28ubnonLCAnaG90bWFpbC5jby50aCcsICdob3RtYWlsLmNvLnVrJywgJ2hvdG1haWwuY29tJywgJ2hvdG1haWwuY29tLmFyJywgJ2hvdG1haWwuY29tLmF1JywgJ2hvdG1haWwuY29tLmJyJywgJ2hvdG1haWwuY29tLmdyJywgJ2hvdG1haWwuY29tLm14JywgJ2hvdG1haWwuY29tLnBlJywgJ2hvdG1haWwuY29tLnRyJywgJ2hvdG1haWwuY29tLnZuJywgJ2hvdG1haWwuY3onLCAnaG90bWFpbC5kZScsICdob3RtYWlsLmRrJywgJ2hvdG1haWwuZXMnLCAnaG90bWFpbC5mcicsICdob3RtYWlsLmh1JywgJ2hvdG1haWwuaWQnLCAnaG90bWFpbC5pZScsICdob3RtYWlsLmluJywgJ2hvdG1haWwuaXQnLCAnaG90bWFpbC5qcCcsICdob3RtYWlsLmtyJywgJ2hvdG1haWwubHYnLCAnaG90bWFpbC5teScsICdob3RtYWlsLnBoJywgJ2hvdG1haWwucHQnLCAnaG90bWFpbC5zYScsICdob3RtYWlsLnNnJywgJ2hvdG1haWwuc2snLCAnbGl2ZS5iZScsICdsaXZlLmNvLnVrJywgJ2xpdmUuY29tJywgJ2xpdmUuY29tLmFyJywgJ2xpdmUuY29tLm14JywgJ2xpdmUuZGUnLCAnbGl2ZS5lcycsICdsaXZlLmV1JywgJ2xpdmUuZnInLCAnbGl2ZS5pdCcsICdsaXZlLm5sJywgJ21zbi5jb20nLCAnb3V0bG9vay5hdCcsICdvdXRsb29rLmJlJywgJ291dGxvb2suY2wnLCAnb3V0bG9vay5jby5pbCcsICdvdXRsb29rLmNvLm56JywgJ291dGxvb2suY28udGgnLCAnb3V0bG9vay5jb20nLCAnb3V0bG9vay5jb20uYXInLCAnb3V0bG9vay5jb20uYXUnLCAnb3V0bG9vay5jb20uYnInLCAnb3V0bG9vay5jb20uZ3InLCAnb3V0bG9vay5jb20ucGUnLCAnb3V0bG9vay5jb20udHInLCAnb3V0bG9vay5jb20udm4nLCAnb3V0bG9vay5jeicsICdvdXRsb29rLmRlJywgJ291dGxvb2suZGsnLCAnb3V0bG9vay5lcycsICdvdXRsb29rLmZyJywgJ291dGxvb2suaHUnLCAnb3V0bG9vay5pZCcsICdvdXRsb29rLmllJywgJ291dGxvb2suaW4nLCAnb3V0bG9vay5pdCcsICdvdXRsb29rLmpwJywgJ291dGxvb2sua3InLCAnb3V0bG9vay5sdicsICdvdXRsb29rLm15JywgJ291dGxvb2sucGgnLCAnb3V0bG9vay5wdCcsICdvdXRsb29rLnNhJywgJ291dGxvb2suc2cnLCAnb3V0bG9vay5zaycsICdwYXNzcG9ydC5jb20nXTsgLy8gTGlzdCBvZiBkb21haW5zIHVzZWQgYnkgWWFob28gTWFpbFxuLy8gVGhpcyBsaXN0IGlzIGxpa2VseSBpbmNvbXBsZXRlXG5cbnZhciB5YWhvb19kb21haW5zID0gWydyb2NrZXRtYWlsLmNvbScsICd5YWhvby5jYScsICd5YWhvby5jby51aycsICd5YWhvby5jb20nLCAneWFob28uZGUnLCAneWFob28uZnInLCAneWFob28uaW4nLCAneWFob28uaXQnLCAneW1haWwuY29tJ107IC8vIExpc3Qgb2YgZG9tYWlucyB1c2VkIGJ5IHlhbmRleC5ydVxuXG52YXIgeWFuZGV4X2RvbWFpbnMgPSBbJ3lhbmRleC5ydScsICd5YW5kZXgudWEnLCAneWFuZGV4Lmt6JywgJ3lhbmRleC5jb20nLCAneWFuZGV4LmJ5JywgJ3lhLnJ1J107IC8vIHJlcGxhY2Ugc2luZ2xlIGRvdHMsIGJ1dCBub3QgbXVsdGlwbGUgY29uc2VjdXRpdmUgZG90c1xuXG5mdW5jdGlvbiBkb3RzUmVwbGFjZXIobWF0Y2gpIHtcbiAgaWYgKG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gbWF0Y2g7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUVtYWlsKGVtYWlsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfbm9ybWFsaXplX2VtYWlsX29wdGlvbnMpO1xuICB2YXIgcmF3X3BhcnRzID0gZW1haWwuc3BsaXQoJ0AnKTtcbiAgdmFyIGRvbWFpbiA9IHJhd19wYXJ0cy5wb3AoKTtcbiAgdmFyIHVzZXIgPSByYXdfcGFydHMuam9pbignQCcpO1xuICB2YXIgcGFydHMgPSBbdXNlciwgZG9tYWluXTsgLy8gVGhlIGRvbWFpbiBpcyBhbHdheXMgbG93ZXJjYXNlZCwgYXMgaXQncyBjYXNlLWluc2Vuc2l0aXZlIHBlciBSRkMgMTAzNVxuXG4gIHBhcnRzWzFdID0gcGFydHNbMV0udG9Mb3dlckNhc2UoKTtcblxuICBpZiAocGFydHNbMV0gPT09ICdnbWFpbC5jb20nIHx8IHBhcnRzWzFdID09PSAnZ29vZ2xlbWFpbC5jb20nKSB7XG4gICAgLy8gQWRkcmVzcyBpcyBHTWFpbFxuICAgIGlmIChvcHRpb25zLmdtYWlsX3JlbW92ZV9zdWJhZGRyZXNzKSB7XG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnNwbGl0KCcrJylbMF07XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZ21haWxfcmVtb3ZlX2RvdHMpIHtcbiAgICAgIC8vIHRoaXMgZG9lcyBub3QgcmVwbGFjZSBjb25zZWN1dGl2ZSBkb3RzIGxpa2UgZXhhbXBsZS4uZW1haWxAZ21haWwuY29tXG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcLisvZywgZG90c1JlcGxhY2VyKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnRzWzBdLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFsbF9sb3dlcmNhc2UgfHwgb3B0aW9ucy5nbWFpbF9sb3dlcmNhc2UpIHtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBwYXJ0c1sxXSA9IG9wdGlvbnMuZ21haWxfY29udmVydF9nb29nbGVtYWlsZG90Y29tID8gJ2dtYWlsLmNvbScgOiBwYXJ0c1sxXTtcbiAgfSBlbHNlIGlmIChpY2xvdWRfZG9tYWlucy5pbmRleE9mKHBhcnRzWzFdKSA+PSAwKSB7XG4gICAgLy8gQWRkcmVzcyBpcyBpQ2xvdWRcbiAgICBpZiAob3B0aW9ucy5pY2xvdWRfcmVtb3ZlX3N1YmFkZHJlc3MpIHtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0uc3BsaXQoJysnKVswXTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnRzWzBdLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFsbF9sb3dlcmNhc2UgfHwgb3B0aW9ucy5pY2xvdWRfbG93ZXJjYXNlKSB7XG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG91dGxvb2tkb3Rjb21fZG9tYWlucy5pbmRleE9mKHBhcnRzWzFdKSA+PSAwKSB7XG4gICAgLy8gQWRkcmVzcyBpcyBPdXRsb29rLmNvbVxuICAgIGlmIChvcHRpb25zLm91dGxvb2tkb3Rjb21fcmVtb3ZlX3N1YmFkZHJlc3MpIHtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0uc3BsaXQoJysnKVswXTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnRzWzBdLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFsbF9sb3dlcmNhc2UgfHwgb3B0aW9ucy5vdXRsb29rZG90Y29tX2xvd2VyY2FzZSkge1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh5YWhvb19kb21haW5zLmluZGV4T2YocGFydHNbMV0pID49IDApIHtcbiAgICAvLyBBZGRyZXNzIGlzIFlhaG9vXG4gICAgaWYgKG9wdGlvbnMueWFob29fcmVtb3ZlX3N1YmFkZHJlc3MpIHtcbiAgICAgIHZhciBjb21wb25lbnRzID0gcGFydHNbMF0uc3BsaXQoJy0nKTtcbiAgICAgIHBhcnRzWzBdID0gY29tcG9uZW50cy5sZW5ndGggPiAxID8gY29tcG9uZW50cy5zbGljZSgwLCAtMSkuam9pbignLScpIDogY29tcG9uZW50c1swXTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnRzWzBdLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFsbF9sb3dlcmNhc2UgfHwgb3B0aW9ucy55YWhvb19sb3dlcmNhc2UpIHtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoeWFuZGV4X2RvbWFpbnMuaW5kZXhPZihwYXJ0c1sxXSkgPj0gMCkge1xuICAgIGlmIChvcHRpb25zLmFsbF9sb3dlcmNhc2UgfHwgb3B0aW9ucy55YW5kZXhfbG93ZXJjYXNlKSB7XG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcGFydHNbMV0gPSAneWFuZGV4LnJ1JzsgLy8gYWxsIHlhbmRleCBkb21haW5zIGFyZSBlcXVhbCwgMXN0IHByZWZlcnJlZFxuICB9IGVsc2UgaWYgKG9wdGlvbnMuYWxsX2xvd2VyY2FzZSkge1xuICAgIC8vIEFueSBvdGhlciBhZGRyZXNzXG4gICAgcGFydHNbMF0gPSBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJ0AnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcnRyaW07XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHJ0cmltKHN0ciwgY2hhcnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTsgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9SZWd1bGFyX0V4cHJlc3Npb25zI0VzY2FwaW5nXG5cbiAgdmFyIHBhdHRlcm4gPSBjaGFycyA/IG5ldyBSZWdFeHAoXCJbXCIuY29uY2F0KGNoYXJzLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyksIFwiXSskXCIpLCAnZycpIDogL1xccyskL2c7XG4gIHJldHVybiBzdHIucmVwbGFjZShwYXR0ZXJuLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHN0cmlwTG93O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2JsYWNrbGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmxhY2tsaXN0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3RyaXBMb3coc3RyLCBrZWVwX25ld19saW5lcykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgY2hhcnMgPSBrZWVwX25ld19saW5lcyA/ICdcXFxceDAwLVxcXFx4MDlcXFxceDBCXFxcXHgwQ1xcXFx4MEUtXFxcXHgxRlxcXFx4N0YnIDogJ1xcXFx4MDAtXFxcXHgxRlxcXFx4N0YnO1xuICByZXR1cm4gKDAsIF9ibGFja2xpc3QuZGVmYXVsdCkoc3RyLCBjaGFycyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvQm9vbGVhbjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9Cb29sZWFuKHN0ciwgc3RyaWN0KSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKHN0cmljdCkge1xuICAgIHJldHVybiBzdHIgPT09ICcxJyB8fCAvXnRydWUkL2kudGVzdChzdHIpO1xuICB9XG5cbiAgcmV0dXJuIHN0ciAhPT0gJzAnICYmICEvXmZhbHNlJC9pLnRlc3Qoc3RyKSAmJiBzdHIgIT09ICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0b0RhdGU7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRvRGF0ZShkYXRlKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKGRhdGUpO1xuICBkYXRlID0gRGF0ZS5wYXJzZShkYXRlKTtcbiAgcmV0dXJuICFpc05hTihkYXRlKSA/IG5ldyBEYXRlKGRhdGUpIDogbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9GbG9hdDtcblxudmFyIF9pc0Zsb2F0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc0Zsb2F0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9GbG9hdChzdHIpIHtcbiAgaWYgKCEoMCwgX2lzRmxvYXQuZGVmYXVsdCkoc3RyKSkgcmV0dXJuIE5hTjtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9JbnQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRvSW50KHN0ciwgcmFkaXgpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHBhcnNlSW50KHN0ciwgcmFkaXggfHwgMTApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0cmltO1xuXG52YXIgX3J0cmltID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ydHJpbVwiKSk7XG5cbnZhciBfbHRyaW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2x0cmltXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdHJpbShzdHIsIGNoYXJzKSB7XG4gIHJldHVybiAoMCwgX3J0cmltLmRlZmF1bHQpKCgwLCBfbHRyaW0uZGVmYXVsdCkoc3RyLCBjaGFycyksIGNoYXJzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5lc2NhcGU7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHVuZXNjYXBlKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyZhbXA7L2csICcmJykucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpLnJlcGxhY2UoLyYjeDI3Oy9nLCBcIidcIikucmVwbGFjZSgvJmx0Oy9nLCAnPCcpLnJlcGxhY2UoLyZndDsvZywgJz4nKS5yZXBsYWNlKC8mI3gyRjsvZywgJy8nKS5yZXBsYWNlKC8mI3g1QzsvZywgJ1xcXFwnKS5yZXBsYWNlKC8mIzk2Oy9nLCAnYCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzbzcwNjRDaGVjayA9IGlzbzcwNjRDaGVjaztcbmV4cG9ydHMubHVobkNoZWNrID0gbHVobkNoZWNrO1xuZXhwb3J0cy5yZXZlcnNlTXVsdGlwbHlBbmRTdW0gPSByZXZlcnNlTXVsdGlwbHlBbmRTdW07XG5leHBvcnRzLnZlcmhvZWZmQ2hlY2sgPSB2ZXJob2VmZkNoZWNrO1xuXG4vKipcbiAqIEFsZ29yaXRobWljIHZhbGlkYXRpb24gZnVuY3Rpb25zXG4gKiBNYXkgYmUgdXNlZCBhcyBpcyBvciBpbXBsZW1lbnRlZCBpbiB0aGUgd29ya2Zsb3cgb2Ygb3RoZXIgdmFsaWRhdG9ycy5cbiAqL1xuXG4vKlxuICogSVNPIDcwNjQgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogQ2FsbGVkIHdpdGggYSBzdHJpbmcgb2YgbnVtYmVycyAoaW5jbC4gY2hlY2sgZGlnaXQpXG4gKiB0byB2YWxpZGF0ZSBhY2NvcmRpbmcgdG8gSVNPIDcwNjQgKE1PRCAxMSwgMTApLlxuICovXG5mdW5jdGlvbiBpc283MDY0Q2hlY2soc3RyKSB7XG4gIHZhciBjaGVja3ZhbHVlID0gMTA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY2hlY2t2YWx1ZSA9IChwYXJzZUludChzdHJbaV0sIDEwKSArIGNoZWNrdmFsdWUpICUgMTAgPT09IDAgPyAxMCAqIDIgJSAxMSA6IChwYXJzZUludChzdHJbaV0sIDEwKSArIGNoZWNrdmFsdWUpICUgMTAgKiAyICUgMTE7XG4gIH1cblxuICBjaGVja3ZhbHVlID0gY2hlY2t2YWx1ZSA9PT0gMSA/IDAgOiAxMSAtIGNoZWNrdmFsdWU7XG4gIHJldHVybiBjaGVja3ZhbHVlID09PSBwYXJzZUludChzdHJbMTBdLCAxMCk7XG59XG4vKlxuICogTHVobiAobW9kIDEwKSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiBDYWxsZWQgd2l0aCBhIHN0cmluZyBvZiBudW1iZXJzIChpbmNsLiBjaGVjayBkaWdpdClcbiAqIHRvIHZhbGlkYXRlIGFjY29yZGluZyB0byB0aGUgTHVobiBhbGdvcml0aG0uXG4gKi9cblxuXG5mdW5jdGlvbiBsdWhuQ2hlY2soc3RyKSB7XG4gIHZhciBjaGVja3N1bSA9IDA7XG4gIHZhciBzZWNvbmQgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKHNlY29uZCkge1xuICAgICAgdmFyIHByb2R1Y3QgPSBwYXJzZUludChzdHJbaV0sIDEwKSAqIDI7XG5cbiAgICAgIGlmIChwcm9kdWN0ID4gOSkge1xuICAgICAgICAvLyBzdW0gZGlnaXRzIG9mIHByb2R1Y3QgYW5kIGFkZCB0byBjaGVja3N1bVxuICAgICAgICBjaGVja3N1bSArPSBwcm9kdWN0LnRvU3RyaW5nKCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZUludChhLCAxMCk7XG4gICAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja3N1bSArPSBwcm9kdWN0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja3N1bSArPSBwYXJzZUludChzdHJbaV0sIDEwKTtcbiAgICB9XG5cbiAgICBzZWNvbmQgPSAhc2Vjb25kO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrc3VtICUgMTAgPT09IDA7XG59XG4vKlxuICogUmV2ZXJzZSBUSU4gbXVsdGlwbGljYXRpb24gYW5kIHN1bW1hdGlvbiBoZWxwZXIgZnVuY3Rpb25cbiAqIENhbGxlZCB3aXRoIGFuIGFycmF5IG9mIHNpbmdsZS1kaWdpdCBpbnRlZ2VycyBhbmQgYSBiYXNlIG11bHRpcGxpZXJcbiAqIHRvIGNhbGN1bGF0ZSB0aGUgc3VtIG9mIHRoZSBkaWdpdHMgbXVsdGlwbGllZCBpbiByZXZlcnNlLlxuICogTm9ybWFsbHkgdXNlZCBpbiB2YXJpYXRpb25zIG9mIE1PRCAxMSBhbGdvcml0aG1pYyBjaGVja3MuXG4gKi9cblxuXG5mdW5jdGlvbiByZXZlcnNlTXVsdGlwbHlBbmRTdW0oZGlnaXRzLCBiYXNlKSB7XG4gIHZhciB0b3RhbCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWdpdHMubGVuZ3RoOyBpKyspIHtcbiAgICB0b3RhbCArPSBkaWdpdHNbaV0gKiAoYmFzZSAtIGkpO1xuICB9XG5cbiAgcmV0dXJuIHRvdGFsO1xufVxuLypcbiAqIFZlcmhvZWZmIHZhbGlkYXRpb24gaGVscGVyIGZ1bmN0aW9uXG4gKiBDYWxsZWQgd2l0aCBhIHN0cmluZyBvZiBudW1iZXJzXG4gKiB0byB2YWxpZGF0ZSBhY2NvcmRpbmcgdG8gdGhlIFZlcmhvZWZmIGFsZ29yaXRobS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZlcmhvZWZmQ2hlY2soc3RyKSB7XG4gIHZhciBkX3RhYmxlID0gW1swLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XSwgWzEsIDIsIDMsIDQsIDAsIDYsIDcsIDgsIDksIDVdLCBbMiwgMywgNCwgMCwgMSwgNywgOCwgOSwgNSwgNl0sIFszLCA0LCAwLCAxLCAyLCA4LCA5LCA1LCA2LCA3XSwgWzQsIDAsIDEsIDIsIDMsIDksIDUsIDYsIDcsIDhdLCBbNSwgOSwgOCwgNywgNiwgMCwgNCwgMywgMiwgMV0sIFs2LCA1LCA5LCA4LCA3LCAxLCAwLCA0LCAzLCAyXSwgWzcsIDYsIDUsIDksIDgsIDIsIDEsIDAsIDQsIDNdLCBbOCwgNywgNiwgNSwgOSwgMywgMiwgMSwgMCwgNF0sIFs5LCA4LCA3LCA2LCA1LCA0LCAzLCAyLCAxLCAwXV07XG4gIHZhciBwX3RhYmxlID0gW1swLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XSwgWzEsIDUsIDcsIDYsIDIsIDgsIDMsIDAsIDksIDRdLCBbNSwgOCwgMCwgMywgNywgOSwgNiwgMSwgNCwgMl0sIFs4LCA5LCAxLCA2LCAwLCA0LCAzLCA1LCAyLCA3XSwgWzksIDQsIDUsIDMsIDEsIDIsIDYsIDgsIDcsIDBdLCBbNCwgMiwgOCwgNiwgNSwgNywgMywgOSwgMCwgMV0sIFsyLCA3LCA5LCAzLCA4LCAwLCA2LCA0LCAxLCA1XSwgWzcsIDAsIDQsIDYsIDksIDEsIDMsIDIsIDUsIDhdXTsgLy8gQ29weSAodG8gcHJldmVudCByZXBsYWNlbWVudCkgYW5kIHJldmVyc2VcblxuICB2YXIgc3RyX2NvcHkgPSBzdHIuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgdmFyIGNoZWNrc3VtID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cl9jb3B5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY2hlY2tzdW0gPSBkX3RhYmxlW2NoZWNrc3VtXVtwX3RhYmxlW2kgJSA4XVtwYXJzZUludChzdHJfY29weVtpXSwgMTApXV07XG4gIH1cblxuICByZXR1cm4gY2hlY2tzdW0gPT09IDA7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhc3NlcnRTdHJpbmc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gYXNzZXJ0U3RyaW5nKGlucHV0KSB7XG4gIHZhciBpc1N0cmluZyA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgfHwgaW5wdXQgaW5zdGFuY2VvZiBTdHJpbmc7XG5cbiAgaWYgKCFpc1N0cmluZykge1xuICAgIHZhciBpbnZhbGlkVHlwZSA9IF90eXBlb2YoaW5wdXQpO1xuXG4gICAgaWYgKGlucHV0ID09PSBudWxsKSBpbnZhbGlkVHlwZSA9ICdudWxsJztlbHNlIGlmIChpbnZhbGlkVHlwZSA9PT0gJ29iamVjdCcpIGludmFsaWRUeXBlID0gaW5wdXQuY29uc3RydWN0b3IubmFtZTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBzdHJpbmcgYnV0IHJlY2VpdmVkIGEgXCIuY29uY2F0KGludmFsaWRUeXBlKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyhhcnIsIHZhbCkge1xuICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGFyclZhbCkge1xuICAgIHJldHVybiB2YWwgPT09IGFyclZhbDtcbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBpbmNsdWRlcztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWVyZ2U7XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICB2YXIgb2JqID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGRlZmF1bHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9ialtrZXldID0gZGVmYXVsdHNba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBtdWx0aWxpbmVSZWdleHA7XG5cbi8qKlxuICogQnVpbGQgUmVnRXhwIG9iamVjdCBmcm9tIGFuIGFycmF5XG4gKiBvZiBtdWx0aXBsZS9tdWx0aS1saW5lIHJlZ2V4cCBwYXJ0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IHBhcnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gZmxhZ3NcbiAqIEByZXR1cm4ge29iamVjdH0gLSBSZWdFeHAgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIG11bHRpbGluZVJlZ2V4cChwYXJ0cywgZmxhZ3MpIHtcbiAgdmFyIHJlZ2V4cEFzU3RyaW5nTGl0ZXJhbCA9IHBhcnRzLmpvaW4oJycpO1xuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleHBBc1N0cmluZ0xpdGVyYWwsIGZsYWdzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9TdHJpbmc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gdG9TdHJpbmcoaW5wdXQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpID09PSAnb2JqZWN0JyAmJiBpbnB1dCAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQudG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlucHV0ID0gaW5wdXQudG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQgPSAnW29iamVjdCBPYmplY3RdJztcbiAgICB9XG4gIH0gZWxzZSBpZiAoaW5wdXQgPT09IG51bGwgfHwgdHlwZW9mIGlucHV0ID09PSAndW5kZWZpbmVkJyB8fCBpc05hTihpbnB1dCkgJiYgIWlucHV0Lmxlbmd0aCkge1xuICAgIGlucHV0ID0gJyc7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKGlucHV0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2hpdGVsaXN0O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB3aGl0ZWxpc3Qoc3RyLCBjaGFycykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChcIlteXCIuY29uY2F0KGNoYXJzLCBcIl0rXCIpLCAnZycpLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9