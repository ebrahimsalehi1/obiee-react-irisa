(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/dompurify/dist/purify.js":
/*!***********************************************!*\
  !*** ./node_modules/dompurify/dist/purify.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);

  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);

  var regExpTest = unapply(RegExp.prototype.test);

  var typeErrorCreate = unconstruct(TypeError);

  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }

  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }

  /* Add properties to a lookup table */
  function addToSet(set, array) {
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;
    while (l--) {
      var element = array[l];
      if (typeof element === 'string') {
        var lcElement = stringToLowerCase(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }

  /* Shallow clone an object */
  function clone(object) {
    var newObject = create(null);

    var property = void 0;
    for (property in object) {
      if (apply(hasOwnProperty, object, [property])) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }

  var html = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

  // SVG
  var svg = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern']);

  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

  var mathMl = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

  var text = freeze(['#text']);

  var html$1 = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns']);

  var svg$1 = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

  var mathMl$1 = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  // eslint-disable-next-line unicorn/better-regex
  var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };

  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */
  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    }

    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';
    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html$$1) {
          return html$$1;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '2.2.2';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;

      return DOMPurify;
    }

    var originalDocument = window.document;

    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        Text = window.Text,
        Comment = window.Comment,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
    var emptyHTML = trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML('') : '';

    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        getElementsByTagName = _document.getElementsByTagName,
        createDocumentFragment = _document.createDocumentFragment;
    var importNode = originalDocument.importNode;


    var documentMode = {};
    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;

    var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
        ERB_EXPR$$1 = ERB_EXPR,
        DATA_ATTR$$1 = DATA_ATTR,
        ARIA_ATTR$$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));

    /* Allowed attribute names */
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    var FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    var FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    var ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    var ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    var ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    var SAFE_FOR_TEMPLATES = false;

    /* Decide if document with <html>... should be returned */
    var WHOLE_DOCUMENT = false;

    /* Track whether config is already set on this instance of DOMPurify. */
    var SET_CONFIG = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    var FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    var RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */
    var RETURN_DOM_FRAGMENT = false;

    /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
     * `Node` is imported into the current `Document`. If this flag is not enabled the
     * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
     * DOMPurify.
     *
     * This defaults to `true` starting DOMPurify 2.2.0. Note that setting it to `false`
     * might cause XSS from attacks hidden in closed shadowroots in case the browser
     * supports Declarative Shadow: DOM https://web.dev/declarative-shadow-dom/
     */
    var RETURN_DOM_IMPORT = true;

    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */
    var RETURN_TRUSTED_TYPE = false;

    /* Output should be free from DOM clobbering attacks? */
    var SANITIZE_DOM = true;

    /* Keep element content when removing element? */
    var KEEP_CONTENT = true;

    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */
    var IN_PLACE = false;

    /* Allow usage of profiles like html, svg and mathMl */
    var USE_PROFILES = {};

    /* Tags to ignore content of when KEEP_CONTENT is true */
    var FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

    /* Tags that are safe for data: URIs */
    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

    /* Attributes safe for values like "javascript:" */
    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

    /* Keep a reference to config to pass to hooks */
    var CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    var formElement = document.createElement('form');

    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity
    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }

      /* Shield configuration object from tampering */
      if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
        cfg = {};
      }

      /* Shield configuration object from prototype pollution */
      cfg = clone(cfg);

      /* Set configuration parameters */
      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT !== false; // Default true
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
      IN_PLACE = cfg.IN_PLACE || false; // Default false
      IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }

      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html);
          addToSet(ALLOWED_ATTR, html$1);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl);
          addToSet(ALLOWED_ATTR, mathMl$1);
          addToSet(ALLOWED_ATTR, xml);
        }
      }

      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
      }

      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }

      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }

      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }

      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */
    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, { element: node });
      try {
        node.parentNode.removeChild(node);
      } catch (_) {
        node.outerHTML = emptyHTML;
      }
    };

    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */
    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name);
    };

    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */
    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc = void 0;
      var leadingWhitespace = void 0;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /* Use the DOMParser API by default, fallback later if needs be */
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, 'text/html');
      } catch (_) {}

      /* Use createHTMLDocument in case DOMParser is not available */
      if (!doc || !doc.documentElement) {
        doc = implementation.createHTMLDocument('');
        var _doc = doc,
            body = _doc.body;

        body.parentNode.removeChild(body.parentNode.firstElementChild);
        body.outerHTML = dirtyPayload;
      }

      if (dirty && leadingWhitespace) {
        doc.body.insertBefore(document.createTextNode(leadingWhitespace), doc.body.childNodes[0] || null);
      }

      /* Work on whole document or just its body */
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
    };

    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */
    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
        return NodeFilter.FILTER_ACCEPT;
      }, false);
    };

    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */
    var _isClobbered = function _isClobbered(elm) {
      if (elm instanceof Text || elm instanceof Comment) {
        return false;
      }

      if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string') {
        return true;
      }

      return false;
    };

    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */
    var _isNode = function _isNode(object) {
      return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? object instanceof Node : object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */
    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */
    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content = void 0;

      /* Execute a hook if present */
      _executeHook('beforeSanitizeElements', currentNode, null);

      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Check if tagname contains Unicode */
      if (stringMatch(currentNode.nodeName, /[\u0080-\uFFFF]/)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Now let's check the element's type and name */
      var tagName = stringToLowerCase(currentNode.nodeName);

      /* Execute a hook if present */
      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });

      /* Take care of an mXSS pattern using p, br inside svg, math */
      if ((tagName === 'svg' || tagName === 'math') && currentNode.querySelectorAll('p, br, form, table').length !== 0) {
        _forceRemove(currentNode);
        return true;
      }

      /* Detect mXSS attempts abusing namespace confusion */
      if (!_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[!/\w]/g, currentNode.innerHTML) && regExpTest(/<[!/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Keep content except for bad-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
          try {
            var htmlToInsert = currentNode.innerHTML;
            currentNode.insertAdjacentHTML('AfterEnd', trustedTypesPolicy ? trustedTypesPolicy.createHTML(htmlToInsert) : htmlToInsert);
          } catch (_) {}
        }

        _forceRemove(currentNode);
        return true;
      }

      /* Remove in case a noscript/noembed XSS is suspected */
      if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$$1, ' ');
        content = stringReplace(content, ERB_EXPR$$1, ' ');
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
          currentNode.textContent = content;
        }
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };

    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity
    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }

      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        return false;

        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if (!value) ; else {
        return false;
      }

      return true;
    };

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */
    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr = void 0;
      var value = void 0;
      var lcName = void 0;
      var l = void 0;
      /* Execute a hook if present */
      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;

      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;

      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;

        value = stringTrim(attr.value);
        lcName = stringToLowerCase(name);

        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */
        if (hookEvent.forceKeepAttr) {
          continue;
        }

        /* Remove attribute */
        _removeAttribute(name, currentNode);

        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          continue;
        }

        /* Work around a security issue in jQuery 3.0 */
        if (regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$$1, ' ');
          value = stringReplace(value, ERB_EXPR$$1, ' ');
        }

        /* Is `value` valid for this attribute? */
        var lcTag = currentNode.nodeName.toLowerCase();
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }

        /* Handle invalid data-* attribute set by try-catching it */
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */
    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode = void 0;
      var shadowIterator = _createIterator(fragment);

      /* Execute a hook if present */
      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);

        /* Sanitize tags and elements */
        if (_sanitizeElements(shadowNode)) {
          continue;
        }

        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(shadowNode);
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty, cfg) {
      var body = void 0;
      var importedNode = void 0;
      var currentNode = void 0;
      var oldNode = void 0;
      var returnNode = void 0;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      if (!dirty) {
        dirty = '<!-->';
      }

      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        // eslint-disable-next-line no-negated-condition
        if (typeof dirty.toString !== 'function') {
          throw typeErrorCreate('toString is not a function');
        } else {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        }
      }

      /* Check we can run. Otherwise fall back or ignore */
      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }

      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }

      /* Clean up removed elements */
      DOMPurify.removed = [];

      /* Check if dirty is correctly typed for IN_PLACE */
      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) ; else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }

        /* Initialize the document to work on */
        body = _initDocument(dirty);

        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : emptyHTML;
        }
      }

      /* Remove first element node (ours) if FORCE_BODY is set */
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }

      /* Get node iterator */
      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }

        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }

        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;

      /* If we sanitized `dirty` in-place, return it. */
      if (IN_PLACE) {
        return dirty;
      }

      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (RETURN_DOM_IMPORT) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

      /* Sanitize final string template-safe */
      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };

    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */
    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);
      SET_CONFIG = true;
    };

    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };

    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */
    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = stringToLowerCase(tag);
      var lcName = stringToLowerCase(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };

    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };

    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     */
    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        arrayPop(hooks[entryPoint]);
      }
    };

    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */
    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };

    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */
    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L3NyYy90YWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb21wdXJpZnkvc3JjL2F0dHJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb21wdXJpZnkvc3JjL3JlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L3NyYy9wdXJpZnkuanMiXSwibmFtZXMiOlsiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsImlzRnJvemVuIiwiZnJlZXplIiwic2VhbCIsImNyZWF0ZSIsIlJlZmxlY3QiLCJhcHBseSIsImNvbnN0cnVjdCIsImZ1biIsInRoaXNWYWx1ZSIsImFyZ3MiLCJ4IiwiRnVuYyIsImFycmF5Rm9yRWFjaCIsInVuYXBwbHkiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJhcnJheVBvcCIsInBvcCIsImFycmF5UHVzaCIsInB1c2giLCJzdHJpbmdUb0xvd2VyQ2FzZSIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwic3RyaW5nTWF0Y2giLCJtYXRjaCIsInN0cmluZ1JlcGxhY2UiLCJyZXBsYWNlIiwic3RyaW5nSW5kZXhPZiIsImluZGV4T2YiLCJzdHJpbmdUcmltIiwidHJpbSIsInJlZ0V4cFRlc3QiLCJSZWdFeHAiLCJ0ZXN0IiwidHlwZUVycm9yQ3JlYXRlIiwidW5jb25zdHJ1Y3QiLCJUeXBlRXJyb3IiLCJmdW5jIiwidGhpc0FyZyIsImFkZFRvU2V0Iiwic2V0IiwiYXJyYXkiLCJsIiwibGVuZ3RoIiwiZWxlbWVudCIsImxjRWxlbWVudCIsImNsb25lIiwib2JqZWN0IiwibmV3T2JqZWN0IiwicHJvcGVydHkiLCJodG1sIiwic3ZnIiwic3ZnRmlsdGVycyIsIm1hdGhNbCIsInRleHQiLCJ4bWwiLCJNVVNUQUNIRV9FWFBSIiwiRVJCX0VYUFIiLCJEQVRBX0FUVFIiLCJBUklBX0FUVFIiLCJJU19BTExPV0VEX1VSSSIsIklTX1NDUklQVF9PUl9EQVRBIiwiQVRUUl9XSElURVNQQUNFIiwiZ2V0R2xvYmFsIiwid2luZG93IiwiX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSIsInRydXN0ZWRUeXBlcyIsImRvY3VtZW50IiwiY3JlYXRlUG9saWN5Iiwic3VmZml4IiwiQVRUUl9OQU1FIiwiY3VycmVudFNjcmlwdCIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInBvbGljeU5hbWUiLCJjcmVhdGVIVE1MIiwiXyIsImNvbnNvbGUiLCJ3YXJuIiwiY3JlYXRlRE9NUHVyaWZ5IiwiRE9NUHVyaWZ5Iiwicm9vdCIsInZlcnNpb24iLCJWRVJTSU9OIiwicmVtb3ZlZCIsIm5vZGVUeXBlIiwiaXNTdXBwb3J0ZWQiLCJvcmlnaW5hbERvY3VtZW50IiwiRG9jdW1lbnRGcmFnbWVudCIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJOb2RlIiwiTm9kZUZpbHRlciIsIk5hbWVkTm9kZU1hcCIsIk1vek5hbWVkQXR0ck1hcCIsIlRleHQiLCJDb21tZW50IiwiRE9NUGFyc2VyIiwidGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwiY29udGVudCIsIm93bmVyRG9jdW1lbnQiLCJ0cnVzdGVkVHlwZXNQb2xpY3kiLCJlbXB0eUhUTUwiLCJSRVRVUk5fVFJVU1RFRF9UWVBFIiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVOb2RlSXRlcmF0b3IiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpbXBvcnROb2RlIiwiZG9jdW1lbnRNb2RlIiwiaG9va3MiLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJFWFBSRVNTSU9OUyIsIkFMTE9XRURfVEFHUyIsIkRFRkFVTFRfQUxMT1dFRF9UQUdTIiwiVEFHUyIsIkFMTE9XRURfQVRUUiIsIkRFRkFVTFRfQUxMT1dFRF9BVFRSIiwiQVRUUlMiLCJGT1JCSURfVEFHUyIsIkZPUkJJRF9BVFRSIiwiQUxMT1dfQVJJQV9BVFRSIiwiQUxMT1dfREFUQV9BVFRSIiwiQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMiLCJTQUZFX0ZPUl9URU1QTEFURVMiLCJXSE9MRV9ET0NVTUVOVCIsIlNFVF9DT05GSUciLCJGT1JDRV9CT0RZIiwiUkVUVVJOX0RPTSIsIlJFVFVSTl9ET01fRlJBR01FTlQiLCJSRVRVUk5fRE9NX0lNUE9SVCIsIlNBTklUSVpFX0RPTSIsIktFRVBfQ09OVEVOVCIsIklOX1BMQUNFIiwiVVNFX1BST0ZJTEVTIiwiRk9SQklEX0NPTlRFTlRTIiwiREFUQV9VUklfVEFHUyIsIkRFRkFVTFRfREFUQV9VUklfVEFHUyIsIlVSSV9TQUZFX0FUVFJJQlVURVMiLCJERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMiLCJDT05GSUciLCJmb3JtRWxlbWVudCIsIl9wYXJzZUNvbmZpZyIsImNmZyIsIkFERF9VUklfU0FGRV9BVFRSIiwiQUREX0RBVEFfVVJJX1RBR1MiLCJBTExPV0VEX1VSSV9SRUdFWFAiLCJBRERfVEFHUyIsIkFERF9BVFRSIiwidGFibGUiLCJ0Ym9keSIsIl9mb3JjZVJlbW92ZSIsIm5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJvdXRlckhUTUwiLCJfcmVtb3ZlQXR0cmlidXRlIiwibmFtZSIsImF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJmcm9tIiwicmVtb3ZlQXR0cmlidXRlIiwiX2luaXREb2N1bWVudCIsImRpcnR5IiwiZG9jIiwibGVhZGluZ1doaXRlc3BhY2UiLCJtYXRjaGVzIiwiZGlydHlQYXlsb2FkIiwicGFyc2VGcm9tU3RyaW5nIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImZpcnN0RWxlbWVudENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZE5vZGVzIiwiY2FsbCIsIl9jcmVhdGVJdGVyYXRvciIsIlNIT1dfRUxFTUVOVCIsIlNIT1dfQ09NTUVOVCIsIlNIT1dfVEVYVCIsIkZJTFRFUl9BQ0NFUFQiLCJfaXNDbG9iYmVyZWQiLCJlbG0iLCJub2RlTmFtZSIsInRleHRDb250ZW50IiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsIm5hbWVzcGFjZVVSSSIsIl9pc05vZGUiLCJfZXhlY3V0ZUhvb2siLCJlbnRyeVBvaW50IiwiY3VycmVudE5vZGUiLCJkYXRhIiwiaG9vayIsIl9zYW5pdGl6ZUVsZW1lbnRzIiwidGFnTmFtZSIsImFsbG93ZWRUYWdzIiwicXVlcnlTZWxlY3RvckFsbCIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50SFRNTCIsImh0bWxUb0luc2VydCIsImNsb25lTm9kZSIsIl9pc1ZhbGlkQXR0cmlidXRlIiwibGNUYWciLCJsY05hbWUiLCJ2YWx1ZSIsIl9zYW5pdGl6ZUF0dHJpYnV0ZXMiLCJhdHRyIiwiaG9va0V2ZW50IiwiYXR0ck5hbWUiLCJhdHRyVmFsdWUiLCJrZWVwQXR0ciIsImFsbG93ZWRBdHRyaWJ1dGVzIiwiZm9yY2VLZWVwQXR0ciIsInVuZGVmaW5lZCIsInNldEF0dHJpYnV0ZU5TIiwiX3Nhbml0aXplU2hhZG93RE9NIiwiZnJhZ21lbnQiLCJzaGFkb3dOb2RlIiwic2hhZG93SXRlcmF0b3IiLCJuZXh0Tm9kZSIsInNhbml0aXplIiwiaW1wb3J0ZWROb2RlIiwib2xkTm9kZSIsInJldHVybk5vZGUiLCJ0b1N0cmluZyIsInRvU3RhdGljSFRNTCIsImFwcGVuZENoaWxkIiwiZmlyc3RDaGlsZCIsIm5vZGVJdGVyYXRvciIsInNlcmlhbGl6ZWRIVE1MIiwic2V0Q29uZmlnIiwiY2xlYXJDb25maWciLCJpc1ZhbGlkQXR0cmlidXRlIiwidGFnIiwiYWRkSG9vayIsImhvb2tGdW5jdGlvbiIsInJlbW92ZUhvb2siLCJyZW1vdmVIb29rcyIsInJlbW92ZUFsbEhvb2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBUUEsaUJBQTZDQyxPQUE3Q0Q7TUFBZ0JFLGlCQUE2QkQsT0FBN0JDO01BQWdCQyxXQUFhRixPQUFiRTtNQUVsQ0MsU0FBeUJILE9BQXpCRztNQUFRQyxPQUFpQkosT0FBakJJO01BQU1DLFNBQVdMLE9BQVhLOzthQUNPLE9BQU9DLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0NBO01BQXZEQztNQUFPQzs7RUFFYixJQUFJLENBQUNELEtBQUwsRUFBWTtFQUNWQSxVQUFRLGVBQVVFLEdBQVYsRUFBZUMsU0FBZixFQUEwQkMsSUFBMUIsRUFBZ0M7RUFDdEMsV0FBT0YsSUFBSUYsS0FBSixDQUFVRyxTQUFWLEVBQXFCQyxJQUFyQixDQUFQO0VBQ0QsR0FGRDtFQUdEOztFQUVELElBQUksQ0FBQ1IsTUFBTCxFQUFhO0VBQ1hBLFdBQVMsZ0JBQVVTLENBQVYsRUFBYTtFQUNwQixXQUFPQSxDQUFQO0VBQ0QsR0FGRDtFQUdEOztFQUVELElBQUksQ0FBQ1IsSUFBTCxFQUFXO0VBQ1RBLFNBQU8sY0FBVVEsQ0FBVixFQUFhO0VBQ2xCLFdBQU9BLENBQVA7RUFDRCxHQUZEO0VBR0Q7O0VBRUQsSUFBSSxDQUFDSixTQUFMLEVBQWdCO0VBQ2RBLGNBQVksbUJBQVVLLElBQVYsRUFBZ0JGLElBQWhCLEVBQXNCO0VBQ2hDLDhDQUFXRSxJQUFYLG1DQUFtQkYsSUFBbkI7RUFDRCxHQUZEO0VBR0Q7O0VBRUQsSUFBTUcsZUFBZUMsUUFBUUMsTUFBTUMsU0FBTixDQUFnQkMsT0FBeEIsQ0FBckI7QUFDQSxFQUNBLElBQU1DLFdBQVdKLFFBQVFDLE1BQU1DLFNBQU4sQ0FBZ0JHLEdBQXhCLENBQWpCO0VBQ0EsSUFBTUMsWUFBWU4sUUFBUUMsTUFBTUMsU0FBTixDQUFnQkssSUFBeEIsQ0FBbEI7QUFDQTtFQUVBLElBQU1DLG9CQUFvQlIsUUFBUVMsT0FBT1AsU0FBUCxDQUFpQlEsV0FBekIsQ0FBMUI7RUFDQSxJQUFNQyxjQUFjWCxRQUFRUyxPQUFPUCxTQUFQLENBQWlCVSxLQUF6QixDQUFwQjtFQUNBLElBQU1DLGdCQUFnQmIsUUFBUVMsT0FBT1AsU0FBUCxDQUFpQlksT0FBekIsQ0FBdEI7RUFDQSxJQUFNQyxnQkFBZ0JmLFFBQVFTLE9BQU9QLFNBQVAsQ0FBaUJjLE9BQXpCLENBQXRCO0VBQ0EsSUFBTUMsYUFBYWpCLFFBQVFTLE9BQU9QLFNBQVAsQ0FBaUJnQixJQUF6QixDQUFuQjs7RUFFQSxJQUFNQyxhQUFhbkIsUUFBUW9CLE9BQU9sQixTQUFQLENBQWlCbUIsSUFBekIsQ0FBbkI7O0VBRUEsSUFBTUMsa0JBQWtCQyxZQUFZQyxTQUFaLENBQXhCOztBQUVBLEVBQU8sU0FBU3hCLE9BQVQsQ0FBaUJ5QixJQUFqQixFQUF1QjtFQUM1QixTQUFPLFVBQUNDLE9BQUQ7RUFBQSxzQ0FBYTlCLElBQWI7RUFBYUEsVUFBYjtFQUFBOztFQUFBLFdBQXNCSixNQUFNaUMsSUFBTixFQUFZQyxPQUFaLEVBQXFCOUIsSUFBckIsQ0FBdEI7RUFBQSxHQUFQO0VBQ0Q7O0FBRUQsRUFBTyxTQUFTMkIsV0FBVCxDQUFxQkUsSUFBckIsRUFBMkI7RUFDaEMsU0FBTztFQUFBLHVDQUFJN0IsSUFBSjtFQUFJQSxVQUFKO0VBQUE7O0VBQUEsV0FBYUgsVUFBVWdDLElBQVYsRUFBZ0I3QixJQUFoQixDQUFiO0VBQUEsR0FBUDtFQUNEOztFQUVEO0FBQ0EsRUFBTyxTQUFTK0IsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUJDLEtBQXZCLEVBQThCO0VBQ25DLE1BQUkzQyxjQUFKLEVBQW9CO0VBQ2xCO0VBQ0E7RUFDQTtFQUNBQSxtQkFBZTBDLEdBQWYsRUFBb0IsSUFBcEI7RUFDRDs7RUFFRCxNQUFJRSxJQUFJRCxNQUFNRSxNQUFkO0VBQ0EsU0FBT0QsR0FBUCxFQUFZO0VBQ1YsUUFBSUUsVUFBVUgsTUFBTUMsQ0FBTixDQUFkO0VBQ0EsUUFBSSxPQUFPRSxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0VBQy9CLFVBQU1DLFlBQVl6QixrQkFBa0J3QixPQUFsQixDQUFsQjtFQUNBLFVBQUlDLGNBQWNELE9BQWxCLEVBQTJCO0VBQ3pCO0VBQ0EsWUFBSSxDQUFDN0MsU0FBUzBDLEtBQVQsQ0FBTCxFQUFzQjtFQUNwQkEsZ0JBQU1DLENBQU4sSUFBV0csU0FBWDtFQUNEOztFQUVERCxrQkFBVUMsU0FBVjtFQUNEO0VBQ0Y7O0VBRURMLFFBQUlJLE9BQUosSUFBZSxJQUFmO0VBQ0Q7O0VBRUQsU0FBT0osR0FBUDtFQUNEOztFQUVEO0FBQ0EsRUFBTyxTQUFTTSxLQUFULENBQWVDLE1BQWYsRUFBdUI7RUFDNUIsTUFBTUMsWUFBWTlDLE9BQU8sSUFBUCxDQUFsQjs7RUFFQSxNQUFJK0MsaUJBQUo7RUFDQSxPQUFLQSxRQUFMLElBQWlCRixNQUFqQixFQUF5QjtFQUN2QixRQUFJM0MsTUFBTVIsY0FBTixFQUFzQm1ELE1BQXRCLEVBQThCLENBQUNFLFFBQUQsQ0FBOUIsQ0FBSixFQUErQztFQUM3Q0QsZ0JBQVVDLFFBQVYsSUFBc0JGLE9BQU9FLFFBQVAsQ0FBdEI7RUFDRDtFQUNGOztFQUVELFNBQU9ELFNBQVA7RUFDRDs7RUM3Rk0sSUFBTUUsT0FBT2xELE9BQU8sQ0FDekIsR0FEeUIsRUFFekIsTUFGeUIsRUFHekIsU0FIeUIsRUFJekIsU0FKeUIsRUFLekIsTUFMeUIsRUFNekIsU0FOeUIsRUFPekIsT0FQeUIsRUFRekIsT0FSeUIsRUFTekIsR0FUeUIsRUFVekIsS0FWeUIsRUFXekIsS0FYeUIsRUFZekIsS0FaeUIsRUFhekIsT0FieUIsRUFjekIsWUFkeUIsRUFlekIsTUFmeUIsRUFnQnpCLElBaEJ5QixFQWlCekIsUUFqQnlCLEVBa0J6QixRQWxCeUIsRUFtQnpCLFNBbkJ5QixFQW9CekIsUUFwQnlCLEVBcUJ6QixNQXJCeUIsRUFzQnpCLE1BdEJ5QixFQXVCekIsS0F2QnlCLEVBd0J6QixVQXhCeUIsRUF5QnpCLFNBekJ5QixFQTBCekIsTUExQnlCLEVBMkJ6QixVQTNCeUIsRUE0QnpCLElBNUJ5QixFQTZCekIsV0E3QnlCLEVBOEJ6QixLQTlCeUIsRUErQnpCLFNBL0J5QixFQWdDekIsS0FoQ3lCLEVBaUN6QixRQWpDeUIsRUFrQ3pCLEtBbEN5QixFQW1DekIsS0FuQ3lCLEVBb0N6QixJQXBDeUIsRUFxQ3pCLElBckN5QixFQXNDekIsU0F0Q3lCLEVBdUN6QixJQXZDeUIsRUF3Q3pCLFVBeEN5QixFQXlDekIsWUF6Q3lCLEVBMEN6QixRQTFDeUIsRUEyQ3pCLE1BM0N5QixFQTRDekIsUUE1Q3lCLEVBNkN6QixNQTdDeUIsRUE4Q3pCLElBOUN5QixFQStDekIsSUEvQ3lCLEVBZ0R6QixJQWhEeUIsRUFpRHpCLElBakR5QixFQWtEekIsSUFsRHlCLEVBbUR6QixJQW5EeUIsRUFvRHpCLE1BcER5QixFQXFEekIsUUFyRHlCLEVBc0R6QixRQXREeUIsRUF1RHpCLElBdkR5QixFQXdEekIsTUF4RHlCLEVBeUR6QixHQXpEeUIsRUEwRHpCLEtBMUR5QixFQTJEekIsT0EzRHlCLEVBNER6QixLQTVEeUIsRUE2RHpCLEtBN0R5QixFQThEekIsT0E5RHlCLEVBK0R6QixRQS9EeUIsRUFnRXpCLElBaEV5QixFQWlFekIsTUFqRXlCLEVBa0V6QixLQWxFeUIsRUFtRXpCLE1BbkV5QixFQW9FekIsU0FwRXlCLEVBcUV6QixNQXJFeUIsRUFzRXpCLFVBdEV5QixFQXVFekIsT0F2RXlCLEVBd0V6QixLQXhFeUIsRUF5RXpCLE1BekV5QixFQTBFekIsSUExRXlCLEVBMkV6QixVQTNFeUIsRUE0RXpCLFFBNUV5QixFQTZFekIsUUE3RXlCLEVBOEV6QixHQTlFeUIsRUErRXpCLFNBL0V5QixFQWdGekIsS0FoRnlCLEVBaUZ6QixVQWpGeUIsRUFrRnpCLEdBbEZ5QixFQW1GekIsSUFuRnlCLEVBb0Z6QixJQXBGeUIsRUFxRnpCLE1BckZ5QixFQXNGekIsR0F0RnlCLEVBdUZ6QixNQXZGeUIsRUF3RnpCLFNBeEZ5QixFQXlGekIsUUF6RnlCLEVBMEZ6QixRQTFGeUIsRUEyRnpCLE9BM0Z5QixFQTRGekIsUUE1RnlCLEVBNkZ6QixRQTdGeUIsRUE4RnpCLE1BOUZ5QixFQStGekIsUUEvRnlCLEVBZ0d6QixRQWhHeUIsRUFpR3pCLE9Bakd5QixFQWtHekIsS0FsR3lCLEVBbUd6QixTQW5HeUIsRUFvR3pCLEtBcEd5QixFQXFHekIsT0FyR3lCLEVBc0d6QixPQXRHeUIsRUF1R3pCLElBdkd5QixFQXdHekIsVUF4R3lCLEVBeUd6QixVQXpHeUIsRUEwR3pCLE9BMUd5QixFQTJHekIsSUEzR3lCLEVBNEd6QixPQTVHeUIsRUE2R3pCLE1BN0d5QixFQThHekIsSUE5R3lCLEVBK0d6QixPQS9HeUIsRUFnSHpCLElBaEh5QixFQWlIekIsR0FqSHlCLEVBa0h6QixJQWxIeUIsRUFtSHpCLEtBbkh5QixFQW9IekIsT0FwSHlCLEVBcUh6QixLQXJIeUIsQ0FBUCxDQUFiOztFQXdIUDtBQUNBLEVBQU8sSUFBTW1ELE1BQU1uRCxPQUFPLENBQ3hCLEtBRHdCLEVBRXhCLEdBRndCLEVBR3hCLFVBSHdCLEVBSXhCLGFBSndCLEVBS3hCLGNBTHdCLEVBTXhCLGNBTndCLEVBT3hCLGVBUHdCLEVBUXhCLGtCQVJ3QixFQVN4QixPQVR3QixFQVV4QixRQVZ3QixFQVd4QixRQVh3QixFQVl4QixVQVp3QixFQWF4QixNQWJ3QixFQWN4QixNQWR3QixFQWV4QixTQWZ3QixFQWdCeEIsUUFoQndCLEVBaUJ4QixNQWpCd0IsRUFrQnhCLEdBbEJ3QixFQW1CeEIsT0FuQndCLEVBb0J4QixVQXBCd0IsRUFxQnhCLE9BckJ3QixFQXNCeEIsT0F0QndCLEVBdUJ4QixNQXZCd0IsRUF3QnhCLGdCQXhCd0IsRUF5QnhCLFFBekJ3QixFQTBCeEIsTUExQndCLEVBMkJ4QixVQTNCd0IsRUE0QnhCLE9BNUJ3QixFQTZCeEIsTUE3QndCLEVBOEJ4QixTQTlCd0IsRUErQnhCLFNBL0J3QixFQWdDeEIsVUFoQ3dCLEVBaUN4QixnQkFqQ3dCLEVBa0N4QixNQWxDd0IsRUFtQ3hCLE1BbkN3QixFQW9DeEIsT0FwQ3dCLEVBcUN4QixRQXJDd0IsRUFzQ3hCLFFBdEN3QixFQXVDeEIsTUF2Q3dCLEVBd0N4QixVQXhDd0IsRUF5Q3hCLE9BekN3QixFQTBDeEIsTUExQ3dCLEVBMkN4QixPQTNDd0IsRUE0Q3hCLE9BNUN3QixFQTZDeEIsTUE3Q3dCLEVBOEN4QixPQTlDd0IsQ0FBUCxDQUFaOztBQWlEUCxFQUFPLElBQU1vRCxhQUFhcEQsT0FBTyxDQUMvQixTQUQrQixFQUUvQixlQUYrQixFQUcvQixxQkFIK0IsRUFJL0IsYUFKK0IsRUFLL0Isa0JBTCtCLEVBTS9CLG1CQU4rQixFQU8vQixtQkFQK0IsRUFRL0IsZ0JBUitCLEVBUy9CLFNBVCtCLEVBVS9CLFNBVitCLEVBVy9CLFNBWCtCLEVBWS9CLFNBWitCLEVBYS9CLFNBYitCLEVBYy9CLGdCQWQrQixFQWUvQixTQWYrQixFQWdCL0IsYUFoQitCLEVBaUIvQixjQWpCK0IsRUFrQi9CLFVBbEIrQixFQW1CL0IsY0FuQitCLEVBb0IvQixvQkFwQitCLEVBcUIvQixhQXJCK0IsRUFzQi9CLFFBdEIrQixFQXVCL0IsY0F2QitCLENBQVAsQ0FBbkI7O0FBMEJQLEVBQU8sSUFBTXFELFNBQVNyRCxPQUFPLENBQzNCLE1BRDJCLEVBRTNCLFVBRjJCLEVBRzNCLFFBSDJCLEVBSTNCLFNBSjJCLEVBSzNCLE9BTDJCLEVBTTNCLFFBTjJCLEVBTzNCLElBUDJCLEVBUTNCLFlBUjJCLEVBUzNCLGVBVDJCLEVBVTNCLElBVjJCLEVBVzNCLElBWDJCLEVBWTNCLE9BWjJCLEVBYTNCLFNBYjJCLEVBYzNCLFVBZDJCLEVBZTNCLE9BZjJCLEVBZ0IzQixNQWhCMkIsRUFpQjNCLElBakIyQixFQWtCM0IsUUFsQjJCLEVBbUIzQixPQW5CMkIsRUFvQjNCLFFBcEIyQixFQXFCM0IsTUFyQjJCLEVBc0IzQixNQXRCMkIsRUF1QjNCLFNBdkIyQixFQXdCM0IsUUF4QjJCLEVBeUIzQixLQXpCMkIsRUEwQjNCLE9BMUIyQixFQTJCM0IsS0EzQjJCLEVBNEIzQixRQTVCMkIsRUE2QjNCLFlBN0IyQixDQUFQLENBQWY7O0FBZ0NQLEVBQU8sSUFBTXNELE9BQU90RCxPQUFPLENBQUMsT0FBRCxDQUFQLENBQWI7O0VDcE9BLElBQU1rRCxTQUFPbEQsT0FBTyxDQUN6QixRQUR5QixFQUV6QixRQUZ5QixFQUd6QixPQUh5QixFQUl6QixLQUp5QixFQUt6QixnQkFMeUIsRUFNekIsY0FOeUIsRUFPekIsc0JBUHlCLEVBUXpCLFVBUnlCLEVBU3pCLFlBVHlCLEVBVXpCLFNBVnlCLEVBV3pCLFFBWHlCLEVBWXpCLFNBWnlCLEVBYXpCLGFBYnlCLEVBY3pCLGFBZHlCLEVBZXpCLFNBZnlCLEVBZ0J6QixNQWhCeUIsRUFpQnpCLE9BakJ5QixFQWtCekIsT0FsQnlCLEVBbUJ6QixPQW5CeUIsRUFvQnpCLE1BcEJ5QixFQXFCekIsU0FyQnlCLEVBc0J6QixVQXRCeUIsRUF1QnpCLGNBdkJ5QixFQXdCekIsUUF4QnlCLEVBeUJ6QixhQXpCeUIsRUEwQnpCLFVBMUJ5QixFQTJCekIsVUEzQnlCLEVBNEJ6QixTQTVCeUIsRUE2QnpCLEtBN0J5QixFQThCekIsVUE5QnlCLEVBK0J6Qix5QkEvQnlCLEVBZ0N6Qix1QkFoQ3lCLEVBaUN6QixVQWpDeUIsRUFrQ3pCLFdBbEN5QixFQW1DekIsU0FuQ3lCLEVBb0N6QixjQXBDeUIsRUFxQ3pCLE1BckN5QixFQXNDekIsS0F0Q3lCLEVBdUN6QixTQXZDeUIsRUF3Q3pCLFFBeEN5QixFQXlDekIsUUF6Q3lCLEVBMEN6QixNQTFDeUIsRUEyQ3pCLE1BM0N5QixFQTRDekIsVUE1Q3lCLEVBNkN6QixJQTdDeUIsRUE4Q3pCLFdBOUN5QixFQStDekIsV0EvQ3lCLEVBZ0R6QixPQWhEeUIsRUFpRHpCLE1BakR5QixFQWtEekIsT0FsRHlCLEVBbUR6QixNQW5EeUIsRUFvRHpCLE1BcER5QixFQXFEekIsU0FyRHlCLEVBc0R6QixNQXREeUIsRUF1RHpCLEtBdkR5QixFQXdEekIsS0F4RHlCLEVBeUR6QixXQXpEeUIsRUEwRHpCLE9BMUR5QixFQTJEekIsUUEzRHlCLEVBNER6QixLQTVEeUIsRUE2RHpCLFdBN0R5QixFQThEekIsVUE5RHlCLEVBK0R6QixPQS9EeUIsRUFnRXpCLE1BaEV5QixFQWlFekIsU0FqRXlCLEVBa0V6QixZQWxFeUIsRUFtRXpCLFFBbkV5QixFQW9FekIsTUFwRXlCLEVBcUV6QixTQXJFeUIsRUFzRXpCLFNBdEV5QixFQXVFekIsYUF2RXlCLEVBd0V6QixhQXhFeUIsRUF5RXpCLFFBekV5QixFQTBFekIsU0ExRXlCLEVBMkV6QixTQTNFeUIsRUE0RXpCLFlBNUV5QixFQTZFekIsVUE3RXlCLEVBOEV6QixLQTlFeUIsRUErRXpCLFVBL0V5QixFQWdGekIsS0FoRnlCLEVBaUZ6QixVQWpGeUIsRUFrRnpCLE1BbEZ5QixFQW1GekIsTUFuRnlCLEVBb0Z6QixTQXBGeUIsRUFxRnpCLFlBckZ5QixFQXNGekIsT0F0RnlCLEVBdUZ6QixVQXZGeUIsRUF3RnpCLE9BeEZ5QixFQXlGekIsTUF6RnlCLEVBMEZ6QixPQTFGeUIsRUEyRnpCLE1BM0Z5QixFQTRGekIsU0E1RnlCLEVBNkZ6QixPQTdGeUIsRUE4RnpCLEtBOUZ5QixFQStGekIsUUEvRnlCLEVBZ0d6QixNQWhHeUIsRUFpR3pCLE9Bakd5QixFQWtHekIsU0FsR3lCLEVBbUd6QixVQW5HeUIsRUFvR3pCLE9BcEd5QixFQXFHekIsV0FyR3lCLEVBc0d6QixNQXRHeUIsRUF1R3pCLFFBdkd5QixFQXdHekIsUUF4R3lCLEVBeUd6QixPQXpHeUIsRUEwR3pCLE9BMUd5QixFQTJHekIsT0EzR3lCLENBQVAsQ0FBYjs7QUE4R1AsRUFBTyxJQUFNbUQsUUFBTW5ELE9BQU8sQ0FDeEIsZUFEd0IsRUFFeEIsWUFGd0IsRUFHeEIsVUFId0IsRUFJeEIsb0JBSndCLEVBS3hCLFFBTHdCLEVBTXhCLGVBTndCLEVBT3hCLGVBUHdCLEVBUXhCLFNBUndCLEVBU3hCLGVBVHdCLEVBVXhCLGdCQVZ3QixFQVd4QixPQVh3QixFQVl4QixNQVp3QixFQWF4QixJQWJ3QixFQWN4QixPQWR3QixFQWV4QixNQWZ3QixFQWdCeEIsZUFoQndCLEVBaUJ4QixXQWpCd0IsRUFrQnhCLFdBbEJ3QixFQW1CeEIsT0FuQndCLEVBb0J4QixxQkFwQndCLEVBcUJ4Qiw2QkFyQndCLEVBc0J4QixlQXRCd0IsRUF1QnhCLGlCQXZCd0IsRUF3QnhCLElBeEJ3QixFQXlCeEIsSUF6QndCLEVBMEJ4QixHQTFCd0IsRUEyQnhCLElBM0J3QixFQTRCeEIsSUE1QndCLEVBNkJ4QixpQkE3QndCLEVBOEJ4QixXQTlCd0IsRUErQnhCLFNBL0J3QixFQWdDeEIsU0FoQ3dCLEVBaUN4QixLQWpDd0IsRUFrQ3hCLFVBbEN3QixFQW1DeEIsV0FuQ3dCLEVBb0N4QixLQXBDd0IsRUFxQ3hCLE1BckN3QixFQXNDeEIsY0F0Q3dCLEVBdUN4QixXQXZDd0IsRUF3Q3hCLFFBeEN3QixFQXlDeEIsYUF6Q3dCLEVBMEN4QixhQTFDd0IsRUEyQ3hCLGVBM0N3QixFQTRDeEIsYUE1Q3dCLEVBNkN4QixXQTdDd0IsRUE4Q3hCLGtCQTlDd0IsRUErQ3hCLGNBL0N3QixFQWdEeEIsWUFoRHdCLEVBaUR4QixjQWpEd0IsRUFrRHhCLGFBbER3QixFQW1EeEIsSUFuRHdCLEVBb0R4QixJQXBEd0IsRUFxRHhCLElBckR3QixFQXNEeEIsSUF0RHdCLEVBdUR4QixZQXZEd0IsRUF3RHhCLFVBeER3QixFQXlEeEIsZUF6RHdCLEVBMER4QixtQkExRHdCLEVBMkR4QixRQTNEd0IsRUE0RHhCLE1BNUR3QixFQTZEeEIsSUE3RHdCLEVBOER4QixpQkE5RHdCLEVBK0R4QixJQS9Ed0IsRUFnRXhCLEtBaEV3QixFQWlFeEIsR0FqRXdCLEVBa0V4QixJQWxFd0IsRUFtRXhCLElBbkV3QixFQW9FeEIsSUFwRXdCLEVBcUV4QixJQXJFd0IsRUFzRXhCLFNBdEV3QixFQXVFeEIsV0F2RXdCLEVBd0V4QixZQXhFd0IsRUF5RXhCLFVBekV3QixFQTBFeEIsTUExRXdCLEVBMkV4QixjQTNFd0IsRUE0RXhCLGdCQTVFd0IsRUE2RXhCLGNBN0V3QixFQThFeEIsa0JBOUV3QixFQStFeEIsZ0JBL0V3QixFQWdGeEIsT0FoRndCLEVBaUZ4QixZQWpGd0IsRUFrRnhCLFlBbEZ3QixFQW1GeEIsY0FuRndCLEVBb0Z4QixjQXBGd0IsRUFxRnhCLGFBckZ3QixFQXNGeEIsYUF0RndCLEVBdUZ4QixrQkF2RndCLEVBd0Z4QixXQXhGd0IsRUF5RnhCLEtBekZ3QixFQTBGeEIsTUExRndCLEVBMkZ4QixPQTNGd0IsRUE0RnhCLFFBNUZ3QixFQTZGeEIsTUE3RndCLEVBOEZ4QixLQTlGd0IsRUErRnhCLE1BL0Z3QixFQWdHeEIsWUFoR3dCLEVBaUd4QixRQWpHd0IsRUFrR3hCLFVBbEd3QixFQW1HeEIsU0FuR3dCLEVBb0d4QixPQXBHd0IsRUFxR3hCLFFBckd3QixFQXNHeEIsYUF0R3dCLEVBdUd4QixRQXZHd0IsRUF3R3hCLFVBeEd3QixFQXlHeEIsYUF6R3dCLEVBMEd4QixNQTFHd0IsRUEyR3hCLFlBM0d3QixFQTRHeEIscUJBNUd3QixFQTZHeEIsa0JBN0d3QixFQThHeEIsY0E5R3dCLEVBK0d4QixRQS9Hd0IsRUFnSHhCLGVBaEh3QixFQWlIeEIscUJBakh3QixFQWtIeEIsZ0JBbEh3QixFQW1IeEIsR0FuSHdCLEVBb0h4QixJQXBId0IsRUFxSHhCLElBckh3QixFQXNIeEIsUUF0SHdCLEVBdUh4QixNQXZId0IsRUF3SHhCLE1BeEh3QixFQXlIeEIsYUF6SHdCLEVBMEh4QixXQTFId0IsRUEySHhCLFNBM0h3QixFQTRIeEIsUUE1SHdCLEVBNkh4QixRQTdId0IsRUE4SHhCLE9BOUh3QixFQStIeEIsTUEvSHdCLEVBZ0l4QixpQkFoSXdCLEVBaUl4QixrQkFqSXdCLEVBa0l4QixrQkFsSXdCLEVBbUl4QixjQW5Jd0IsRUFvSXhCLGFBcEl3QixFQXFJeEIsY0FySXdCLEVBc0l4QixhQXRJd0IsRUF1SXhCLFlBdkl3QixFQXdJeEIsY0F4SXdCLEVBeUl4QixrQkF6SXdCLEVBMEl4QixtQkExSXdCLEVBMkl4QixnQkEzSXdCLEVBNEl4QixpQkE1SXdCLEVBNkl4QixtQkE3SXdCLEVBOEl4QixnQkE5SXdCLEVBK0l4QixRQS9Jd0IsRUFnSnhCLGNBaEp3QixFQWlKeEIsT0FqSndCLEVBa0p4QixjQWxKd0IsRUFtSnhCLGdCQW5Kd0IsRUFvSnhCLFVBcEp3QixFQXFKeEIsU0FySndCLEVBc0p4QixTQXRKd0IsRUF1SnhCLFdBdkp3QixFQXdKeEIsYUF4SndCLEVBeUp4QixpQkF6SndCLEVBMEp4QixnQkExSndCLEVBMkp4QixZQTNKd0IsRUE0SnhCLE1BNUp3QixFQTZKeEIsSUE3SndCLEVBOEp4QixJQTlKd0IsRUErSnhCLFNBL0p3QixFQWdLeEIsUUFoS3dCLEVBaUt4QixTQWpLd0IsRUFrS3hCLFlBbEt3QixFQW1LeEIsU0FuS3dCLEVBb0t4QixZQXBLd0IsRUFxS3hCLGVBckt3QixFQXNLeEIsZUF0S3dCLEVBdUt4QixPQXZLd0IsRUF3S3hCLGNBeEt3QixFQXlLeEIsTUF6S3dCLEVBMEt4QixjQTFLd0IsRUEyS3hCLGtCQTNLd0IsRUE0S3hCLGtCQTVLd0IsRUE2S3hCLEdBN0t3QixFQThLeEIsSUE5S3dCLEVBK0t4QixJQS9Ld0IsRUFnTHhCLE9BaEx3QixFQWlMeEIsR0FqTHdCLEVBa0x4QixJQWxMd0IsRUFtTHhCLElBbkx3QixFQW9MeEIsR0FwTHdCLEVBcUx4QixZQXJMd0IsQ0FBUCxDQUFaOztBQXdMUCxFQUFPLElBQU1xRCxXQUFTckQsT0FBTyxDQUMzQixRQUQyQixFQUUzQixhQUYyQixFQUczQixPQUgyQixFQUkzQixVQUoyQixFQUszQixPQUwyQixFQU0zQixjQU4yQixFQU8zQixhQVAyQixFQVEzQixZQVIyQixFQVMzQixZQVQyQixFQVUzQixPQVYyQixFQVczQixLQVgyQixFQVkzQixTQVoyQixFQWEzQixjQWIyQixFQWMzQixVQWQyQixFQWUzQixPQWYyQixFQWdCM0IsT0FoQjJCLEVBaUIzQixRQWpCMkIsRUFrQjNCLE1BbEIyQixFQW1CM0IsSUFuQjJCLEVBb0IzQixTQXBCMkIsRUFxQjNCLFFBckIyQixFQXNCM0IsZUF0QjJCLEVBdUIzQixRQXZCMkIsRUF3QjNCLFFBeEIyQixFQXlCM0IsZ0JBekIyQixFQTBCM0IsV0ExQjJCLEVBMkIzQixVQTNCMkIsRUE0QjNCLGFBNUIyQixFQTZCM0IsU0E3QjJCLEVBOEIzQixTQTlCMkIsRUErQjNCLGVBL0IyQixFQWdDM0IsVUFoQzJCLEVBaUMzQixVQWpDMkIsRUFrQzNCLE1BbEMyQixFQW1DM0IsVUFuQzJCLEVBb0MzQixVQXBDMkIsRUFxQzNCLFlBckMyQixFQXNDM0IsU0F0QzJCLEVBdUMzQixRQXZDMkIsRUF3QzNCLFFBeEMyQixFQXlDM0IsYUF6QzJCLEVBMEMzQixlQTFDMkIsRUEyQzNCLHNCQTNDMkIsRUE0QzNCLFdBNUMyQixFQTZDM0IsV0E3QzJCLEVBOEMzQixZQTlDMkIsRUErQzNCLFVBL0MyQixFQWdEM0IsZ0JBaEQyQixFQWlEM0IsZ0JBakQyQixFQWtEM0IsV0FsRDJCLEVBbUQzQixTQW5EMkIsRUFvRDNCLE9BcEQyQixFQXFEM0IsT0FyRDJCLENBQVAsQ0FBZjs7QUF3RFAsRUFBTyxJQUFNdUQsTUFBTXZELE9BQU8sQ0FDeEIsWUFEd0IsRUFFeEIsUUFGd0IsRUFHeEIsYUFId0IsRUFJeEIsV0FKd0IsRUFLeEIsYUFMd0IsQ0FBUCxDQUFaOztFQzlWUDtBQUNBLEVBQU8sSUFBTXdELGdCQUFnQnZELEtBQUssMkJBQUwsQ0FBdEI7QUFDUCxFQUFPLElBQU13RCxXQUFXeEQsS0FBSyx1QkFBTCxDQUFqQjtBQUNQLEVBQU8sSUFBTXlELFlBQVl6RCxLQUFLLDRCQUFMLENBQWxCO0FBQ1AsRUFBTyxJQUFNMEQsWUFBWTFELEtBQUssZ0JBQUwsQ0FBbEI7QUFDUCxFQUFPLElBQU0yRCxpQkFBaUIzRCxLQUM1Qix1RkFENEI7RUFBQSxDQUF2QjtBQUdQLEVBQU8sSUFBTTRELG9CQUFvQjVELEtBQUssdUJBQUwsQ0FBMUI7QUFDUCxFQUFPLElBQU02RCxrQkFBa0I3RCxLQUM3Qiw2REFENkI7RUFBQSxDQUF4Qjs7Ozs7O0VDUVAsSUFBTThELFlBQVksU0FBWkEsU0FBWTtFQUFBLFNBQU8sT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQyxJQUFoQyxHQUF1Q0EsTUFBOUM7RUFBQSxDQUFsQjs7RUFFQTs7Ozs7Ozs7RUFRQSxJQUFNQyw0QkFBNEIsU0FBNUJBLHlCQUE0QixDQUFVQyxZQUFWLEVBQXdCQyxRQUF4QixFQUFrQztFQUNsRSxNQUNFLFFBQU9ELFlBQVAseUNBQU9BLFlBQVAsT0FBd0IsUUFBeEIsSUFDQSxPQUFPQSxhQUFhRSxZQUFwQixLQUFxQyxVQUZ2QyxFQUdFO0VBQ0EsV0FBTyxJQUFQO0VBQ0Q7O0VBRUQ7RUFDQTtFQUNBO0VBQ0EsTUFBSUMsU0FBUyxJQUFiO0VBQ0EsTUFBTUMsWUFBWSx1QkFBbEI7RUFDQSxNQUNFSCxTQUFTSSxhQUFULElBQ0FKLFNBQVNJLGFBQVQsQ0FBdUJDLFlBQXZCLENBQW9DRixTQUFwQyxDQUZGLEVBR0U7RUFDQUQsYUFBU0YsU0FBU0ksYUFBVCxDQUF1QkUsWUFBdkIsQ0FBb0NILFNBQXBDLENBQVQ7RUFDRDs7RUFFRCxNQUFNSSxhQUFhLGVBQWVMLFNBQVMsTUFBTUEsTUFBZixHQUF3QixFQUF2QyxDQUFuQjs7RUFFQSxNQUFJO0VBQ0YsV0FBT0gsYUFBYUUsWUFBYixDQUEwQk0sVUFBMUIsRUFBc0M7RUFDM0NDLGdCQUQyQyxzQkFDaEN6QixPQURnQyxFQUMxQjtFQUNmLGVBQU9BLE9BQVA7RUFDRDtFQUgwQyxLQUF0QyxDQUFQO0VBS0QsR0FORCxDQU1FLE9BQU8wQixDQUFQLEVBQVU7RUFDVjtFQUNBO0VBQ0E7RUFDQUMsWUFBUUMsSUFBUixDQUNFLHlCQUF5QkosVUFBekIsR0FBc0Msd0JBRHhDO0VBR0EsV0FBTyxJQUFQO0VBQ0Q7RUFDRixDQXJDRDs7RUF1Q0EsU0FBU0ssZUFBVCxHQUErQztFQUFBLE1BQXRCZixNQUFzQix1RUFBYkQsV0FBYTs7RUFDN0MsTUFBTWlCLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxJQUFEO0VBQUEsV0FBVUYsZ0JBQWdCRSxJQUFoQixDQUFWO0VBQUEsR0FBbEI7O0VBRUE7Ozs7RUFJQUQsWUFBVUUsT0FBVixHQUFvQkMsT0FBcEI7O0VBRUE7Ozs7RUFJQUgsWUFBVUksT0FBVixHQUFvQixFQUFwQjs7RUFFQSxNQUFJLENBQUNwQixNQUFELElBQVcsQ0FBQ0EsT0FBT0csUUFBbkIsSUFBK0JILE9BQU9HLFFBQVAsQ0FBZ0JrQixRQUFoQixLQUE2QixDQUFoRSxFQUFtRTtFQUNqRTtFQUNBO0VBQ0FMLGNBQVVNLFdBQVYsR0FBd0IsS0FBeEI7O0VBRUEsV0FBT04sU0FBUDtFQUNEOztFQUVELE1BQU1PLG1CQUFtQnZCLE9BQU9HLFFBQWhDOztFQXZCNkMsTUF5QnZDQSxRQXpCdUMsR0F5QjFCSCxNQXpCMEIsQ0F5QnZDRyxRQXpCdUM7RUFBQSxNQTJCM0NxQixnQkEzQjJDLEdBb0N6Q3hCLE1BcEN5QyxDQTJCM0N3QixnQkEzQjJDO0VBQUEsTUE0QjNDQyxtQkE1QjJDLEdBb0N6Q3pCLE1BcEN5QyxDQTRCM0N5QixtQkE1QjJDO0VBQUEsTUE2QjNDQyxJQTdCMkMsR0FvQ3pDMUIsTUFwQ3lDLENBNkIzQzBCLElBN0IyQztFQUFBLE1BOEIzQ0MsVUE5QjJDLEdBb0N6QzNCLE1BcEN5QyxDQThCM0MyQixVQTlCMkM7RUFBQSw2QkFvQ3pDM0IsTUFwQ3lDLENBK0IzQzRCLFlBL0IyQztFQUFBLE1BK0IzQ0EsWUEvQjJDLHdDQStCNUI1QixPQUFPNEIsWUFBUCxJQUF1QjVCLE9BQU82QixlQS9CRjtFQUFBLE1BZ0MzQ0MsSUFoQzJDLEdBb0N6QzlCLE1BcEN5QyxDQWdDM0M4QixJQWhDMkM7RUFBQSxNQWlDM0NDLE9BakMyQyxHQW9DekMvQixNQXBDeUMsQ0FpQzNDK0IsT0FqQzJDO0VBQUEsTUFrQzNDQyxTQWxDMkMsR0FvQ3pDaEMsTUFwQ3lDLENBa0MzQ2dDLFNBbEMyQztFQUFBLE1BbUMzQzlCLFlBbkMyQyxHQW9DekNGLE1BcEN5QyxDQW1DM0NFLFlBbkMyQzs7RUFzQzdDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFDQSxNQUFJLE9BQU91QixtQkFBUCxLQUErQixVQUFuQyxFQUErQztFQUM3QyxRQUFNUSxXQUFXOUIsU0FBUytCLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7RUFDQSxRQUFJRCxTQUFTRSxPQUFULElBQW9CRixTQUFTRSxPQUFULENBQWlCQyxhQUF6QyxFQUF3RDtFQUN0RGpDLGlCQUFXOEIsU0FBU0UsT0FBVCxDQUFpQkMsYUFBNUI7RUFDRDtFQUNGOztFQUVELE1BQU1DLHFCQUFxQnBDLDBCQUN6QkMsWUFEeUIsRUFFekJxQixnQkFGeUIsQ0FBM0I7RUFJQSxNQUFNZSxZQUNKRCxzQkFBc0JFLG1CQUF0QixHQUNJRixtQkFBbUIxQixVQUFuQixDQUE4QixFQUE5QixDQURKLEdBRUksRUFITjs7RUF2RDZDLGtCQWlFekNSLFFBakV5QztFQUFBLE1BNkQzQ3FDLGNBN0QyQyxhQTZEM0NBLGNBN0QyQztFQUFBLE1BOEQzQ0Msa0JBOUQyQyxhQThEM0NBLGtCQTlEMkM7RUFBQSxNQStEM0NDLG9CQS9EMkMsYUErRDNDQSxvQkEvRDJDO0VBQUEsTUFnRTNDQyxzQkFoRTJDLGFBZ0UzQ0Esc0JBaEUyQztFQUFBLE1Ba0VyQ0MsVUFsRXFDLEdBa0V0QnJCLGdCQWxFc0IsQ0FrRXJDcUIsVUFsRXFDOzs7RUFvRTdDLE1BQUlDLGVBQWUsRUFBbkI7RUFDQSxNQUFJO0VBQ0ZBLG1CQUFlL0QsTUFBTXFCLFFBQU4sRUFBZ0IwQyxZQUFoQixHQUErQjFDLFNBQVMwQyxZQUF4QyxHQUF1RCxFQUF0RTtFQUNELEdBRkQsQ0FFRSxPQUFPakMsQ0FBUCxFQUFVOztFQUVaLE1BQUlrQyxRQUFRLEVBQVo7O0VBRUE7OztFQUdBOUIsWUFBVU0sV0FBVixHQUNFa0Isa0JBQ0EsT0FBT0EsZUFBZU8sa0JBQXRCLEtBQTZDLFdBRDdDLElBRUFGLGlCQUFpQixDQUhuQjs7RUE5RTZDLE1Bb0YzQ3JELGdCQXBGMkMsR0EwRnpDd0QsYUExRnlDO0VBQUEsTUFxRjNDdkQsV0FyRjJDLEdBMEZ6Q3VELFFBMUZ5QztFQUFBLE1Bc0YzQ3RELFlBdEYyQyxHQTBGekNzRCxTQTFGeUM7RUFBQSxNQXVGM0NyRCxZQXZGMkMsR0EwRnpDcUQsU0ExRnlDO0VBQUEsTUF3RjNDbkQsb0JBeEYyQyxHQTBGekNtRCxpQkExRnlDO0VBQUEsTUF5RjNDbEQsa0JBekYyQyxHQTBGekNrRCxlQTFGeUM7RUFBQSxNQTRGdkNwRCxpQkE1RnVDLEdBNEZwQm9ELGNBNUZvQjs7RUE4RjdDOzs7OztFQUtBOztFQUNBLE1BQUlDLGVBQWUsSUFBbkI7RUFDQSxNQUFNQyx1QkFBdUIzRSxTQUFTLEVBQVQsaUNBQ3hCNEUsSUFEd0Isd0JBRXhCQSxHQUZ3Qix3QkFHeEJBLFVBSHdCLHdCQUl4QkEsTUFKd0Isd0JBS3hCQSxJQUx3QixHQUE3Qjs7RUFRQTtFQUNBLE1BQUlDLGVBQWUsSUFBbkI7RUFDQSxNQUFNQyx1QkFBdUI5RSxTQUFTLEVBQVQsaUNBQ3hCK0UsTUFEd0Isd0JBRXhCQSxLQUZ3Qix3QkFHeEJBLFFBSHdCLHdCQUl4QkEsR0FKd0IsR0FBN0I7O0VBT0E7RUFDQSxNQUFJQyxjQUFjLElBQWxCOztFQUVBO0VBQ0EsTUFBSUMsY0FBYyxJQUFsQjs7RUFFQTtFQUNBLE1BQUlDLGtCQUFrQixJQUF0Qjs7RUFFQTtFQUNBLE1BQUlDLGtCQUFrQixJQUF0Qjs7RUFFQTtFQUNBLE1BQUlDLDBCQUEwQixLQUE5Qjs7RUFFQTs7O0VBR0EsTUFBSUMscUJBQXFCLEtBQXpCOztFQUVBO0VBQ0EsTUFBSUMsaUJBQWlCLEtBQXJCOztFQUVBO0VBQ0EsTUFBSUMsYUFBYSxLQUFqQjs7RUFFQTs7RUFFQSxNQUFJQyxhQUFhLEtBQWpCOztFQUVBOzs7O0VBSUEsTUFBSUMsYUFBYSxLQUFqQjs7RUFFQTs7RUFFQSxNQUFJQyxzQkFBc0IsS0FBMUI7O0VBRUE7Ozs7Ozs7OztFQVNBLE1BQUlDLG9CQUFvQixJQUF4Qjs7RUFFQTs7RUFFQSxNQUFJM0Isc0JBQXNCLEtBQTFCOztFQUVBO0VBQ0EsTUFBSTRCLGVBQWUsSUFBbkI7O0VBRUE7RUFDQSxNQUFJQyxlQUFlLElBQW5COztFQUVBOztFQUVBLE1BQUlDLFdBQVcsS0FBZjs7RUFFQTtFQUNBLE1BQUlDLGVBQWUsRUFBbkI7O0VBRUE7RUFDQSxNQUFNQyxrQkFBa0JoRyxTQUFTLEVBQVQsRUFBYSxDQUNuQyxnQkFEbUMsRUFFbkMsT0FGbUMsRUFHbkMsVUFIbUMsRUFJbkMsTUFKbUMsRUFLbkMsZUFMbUMsRUFNbkMsTUFObUMsRUFPbkMsUUFQbUMsRUFRbkMsTUFSbUMsRUFTbkMsSUFUbUMsRUFVbkMsSUFWbUMsRUFXbkMsSUFYbUMsRUFZbkMsSUFabUMsRUFhbkMsT0FibUMsRUFjbkMsU0FkbUMsRUFlbkMsVUFmbUMsRUFnQm5DLFdBaEJtQyxFQWlCbkMsUUFqQm1DLEVBa0JuQyxPQWxCbUMsRUFtQm5DLEtBbkJtQyxFQW9CbkMsVUFwQm1DLEVBcUJuQyxPQXJCbUMsRUFzQm5DLE9BdEJtQyxFQXVCbkMsT0F2Qm1DLEVBd0JuQyxLQXhCbUMsQ0FBYixDQUF4Qjs7RUEyQkE7RUFDQSxNQUFJaUcsZ0JBQWdCLElBQXBCO0VBQ0EsTUFBTUMsd0JBQXdCbEcsU0FBUyxFQUFULEVBQWEsQ0FDekMsT0FEeUMsRUFFekMsT0FGeUMsRUFHekMsS0FIeUMsRUFJekMsUUFKeUMsRUFLekMsT0FMeUMsRUFNekMsT0FOeUMsQ0FBYixDQUE5Qjs7RUFTQTtFQUNBLE1BQUltRyxzQkFBc0IsSUFBMUI7RUFDQSxNQUFNQyw4QkFBOEJwRyxTQUFTLEVBQVQsRUFBYSxDQUMvQyxLQUQrQyxFQUUvQyxPQUYrQyxFQUcvQyxLQUgrQyxFQUkvQyxJQUorQyxFQUsvQyxPQUwrQyxFQU0vQyxNQU4rQyxFQU8vQyxTQVArQyxFQVEvQyxhQVIrQyxFQVMvQyxTQVQrQyxFQVUvQyxPQVYrQyxFQVcvQyxPQVgrQyxFQVkvQyxPQVorQyxFQWEvQyxPQWIrQyxDQUFiLENBQXBDOztFQWdCQTtFQUNBLE1BQUlxRyxTQUFTLElBQWI7O0VBRUE7RUFDQTs7RUFFQSxNQUFNQyxjQUFjMUUsU0FBUytCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBcEI7O0VBRUE7Ozs7O0VBS0E7RUFDQSxNQUFNNEMsZUFBZSxTQUFmQSxZQUFlLENBQVVDLEdBQVYsRUFBZTtFQUNsQyxRQUFJSCxVQUFVQSxXQUFXRyxHQUF6QixFQUE4QjtFQUM1QjtFQUNEOztFQUVEO0VBQ0EsUUFBSSxDQUFDQSxHQUFELElBQVEsUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxPQUFlLFFBQTNCLEVBQXFDO0VBQ25DQSxZQUFNLEVBQU47RUFDRDs7RUFFRDtFQUNBQSxVQUFNakcsTUFBTWlHLEdBQU4sQ0FBTjs7RUFFQTtFQUNBOUIsbUJBQ0Usa0JBQWtCOEIsR0FBbEIsR0FDSXhHLFNBQVMsRUFBVCxFQUFhd0csSUFBSTlCLFlBQWpCLENBREosR0FFSUMsb0JBSE47RUFJQUUsbUJBQ0Usa0JBQWtCMkIsR0FBbEIsR0FDSXhHLFNBQVMsRUFBVCxFQUFhd0csSUFBSTNCLFlBQWpCLENBREosR0FFSUMsb0JBSE47RUFJQXFCLDBCQUNFLHVCQUF1QkssR0FBdkIsR0FDSXhHLFNBQVNPLE1BQU02RiwyQkFBTixDQUFULEVBQTZDSSxJQUFJQyxpQkFBakQsQ0FESixHQUVJTCwyQkFITjtFQUlBSCxvQkFDRSx1QkFBdUJPLEdBQXZCLEdBQ0l4RyxTQUFTTyxNQUFNMkYscUJBQU4sQ0FBVCxFQUF1Q00sSUFBSUUsaUJBQTNDLENBREosR0FFSVIscUJBSE47RUFJQWxCLGtCQUFjLGlCQUFpQndCLEdBQWpCLEdBQXVCeEcsU0FBUyxFQUFULEVBQWF3RyxJQUFJeEIsV0FBakIsQ0FBdkIsR0FBdUQsRUFBckU7RUFDQUMsa0JBQWMsaUJBQWlCdUIsR0FBakIsR0FBdUJ4RyxTQUFTLEVBQVQsRUFBYXdHLElBQUl2QixXQUFqQixDQUF2QixHQUF1RCxFQUFyRTtFQUNBYyxtQkFBZSxrQkFBa0JTLEdBQWxCLEdBQXdCQSxJQUFJVCxZQUE1QixHQUEyQyxLQUExRDtFQUNBYixzQkFBa0JzQixJQUFJdEIsZUFBSixLQUF3QixLQUExQyxDQWpDa0M7RUFrQ2xDQyxzQkFBa0JxQixJQUFJckIsZUFBSixLQUF3QixLQUExQyxDQWxDa0M7RUFtQ2xDQyw4QkFBMEJvQixJQUFJcEIsdUJBQUosSUFBK0IsS0FBekQsQ0FuQ2tDO0VBb0NsQ0MseUJBQXFCbUIsSUFBSW5CLGtCQUFKLElBQTBCLEtBQS9DLENBcENrQztFQXFDbENDLHFCQUFpQmtCLElBQUlsQixjQUFKLElBQXNCLEtBQXZDLENBckNrQztFQXNDbENHLGlCQUFhZSxJQUFJZixVQUFKLElBQWtCLEtBQS9CLENBdENrQztFQXVDbENDLDBCQUFzQmMsSUFBSWQsbUJBQUosSUFBMkIsS0FBakQsQ0F2Q2tDO0VBd0NsQ0Msd0JBQW9CYSxJQUFJYixpQkFBSixLQUEwQixLQUE5QyxDQXhDa0M7RUF5Q2xDM0IsMEJBQXNCd0MsSUFBSXhDLG1CQUFKLElBQTJCLEtBQWpELENBekNrQztFQTBDbEN3QixpQkFBYWdCLElBQUloQixVQUFKLElBQWtCLEtBQS9CLENBMUNrQztFQTJDbENJLG1CQUFlWSxJQUFJWixZQUFKLEtBQXFCLEtBQXBDLENBM0NrQztFQTRDbENDLG1CQUFlVyxJQUFJWCxZQUFKLEtBQXFCLEtBQXBDLENBNUNrQztFQTZDbENDLGVBQVdVLElBQUlWLFFBQUosSUFBZ0IsS0FBM0IsQ0E3Q2tDO0VBOENsQ3pFLHdCQUFpQm1GLElBQUlHLGtCQUFKLElBQTBCdEYsaUJBQTNDO0VBQ0EsUUFBSWdFLGtCQUFKLEVBQXdCO0VBQ3RCRix3QkFBa0IsS0FBbEI7RUFDRDs7RUFFRCxRQUFJTyxtQkFBSixFQUF5QjtFQUN2QkQsbUJBQWEsSUFBYjtFQUNEOztFQUVEO0VBQ0EsUUFBSU0sWUFBSixFQUFrQjtFQUNoQnJCLHFCQUFlMUUsU0FBUyxFQUFULGlDQUFpQjRFLElBQWpCLEdBQWY7RUFDQUMscUJBQWUsRUFBZjtFQUNBLFVBQUlrQixhQUFhcEYsSUFBYixLQUFzQixJQUExQixFQUFnQztFQUM5QlgsaUJBQVMwRSxZQUFULEVBQXVCRSxJQUF2QjtFQUNBNUUsaUJBQVM2RSxZQUFULEVBQXVCRSxNQUF2QjtFQUNEOztFQUVELFVBQUlnQixhQUFhbkYsR0FBYixLQUFxQixJQUF6QixFQUErQjtFQUM3QlosaUJBQVMwRSxZQUFULEVBQXVCRSxHQUF2QjtFQUNBNUUsaUJBQVM2RSxZQUFULEVBQXVCRSxLQUF2QjtFQUNBL0UsaUJBQVM2RSxZQUFULEVBQXVCRSxHQUF2QjtFQUNEOztFQUVELFVBQUlnQixhQUFhbEYsVUFBYixLQUE0QixJQUFoQyxFQUFzQztFQUNwQ2IsaUJBQVMwRSxZQUFULEVBQXVCRSxVQUF2QjtFQUNBNUUsaUJBQVM2RSxZQUFULEVBQXVCRSxLQUF2QjtFQUNBL0UsaUJBQVM2RSxZQUFULEVBQXVCRSxHQUF2QjtFQUNEOztFQUVELFVBQUlnQixhQUFhakYsTUFBYixLQUF3QixJQUE1QixFQUFrQztFQUNoQ2QsaUJBQVMwRSxZQUFULEVBQXVCRSxNQUF2QjtFQUNBNUUsaUJBQVM2RSxZQUFULEVBQXVCRSxRQUF2QjtFQUNBL0UsaUJBQVM2RSxZQUFULEVBQXVCRSxHQUF2QjtFQUNEO0VBQ0Y7O0VBRUQ7RUFDQSxRQUFJeUIsSUFBSUksUUFBUixFQUFrQjtFQUNoQixVQUFJbEMsaUJBQWlCQyxvQkFBckIsRUFBMkM7RUFDekNELHVCQUFlbkUsTUFBTW1FLFlBQU4sQ0FBZjtFQUNEOztFQUVEMUUsZUFBUzBFLFlBQVQsRUFBdUI4QixJQUFJSSxRQUEzQjtFQUNEOztFQUVELFFBQUlKLElBQUlLLFFBQVIsRUFBa0I7RUFDaEIsVUFBSWhDLGlCQUFpQkMsb0JBQXJCLEVBQTJDO0VBQ3pDRCx1QkFBZXRFLE1BQU1zRSxZQUFOLENBQWY7RUFDRDs7RUFFRDdFLGVBQVM2RSxZQUFULEVBQXVCMkIsSUFBSUssUUFBM0I7RUFDRDs7RUFFRCxRQUFJTCxJQUFJQyxpQkFBUixFQUEyQjtFQUN6QnpHLGVBQVNtRyxtQkFBVCxFQUE4QkssSUFBSUMsaUJBQWxDO0VBQ0Q7O0VBRUQ7RUFDQSxRQUFJWixZQUFKLEVBQWtCO0VBQ2hCbkIsbUJBQWEsT0FBYixJQUF3QixJQUF4QjtFQUNEOztFQUVEO0VBQ0EsUUFBSVksY0FBSixFQUFvQjtFQUNsQnRGLGVBQVMwRSxZQUFULEVBQXVCLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsQ0FBdkI7RUFDRDs7RUFFRDtFQUNBLFFBQUlBLGFBQWFvQyxLQUFqQixFQUF3QjtFQUN0QjlHLGVBQVMwRSxZQUFULEVBQXVCLENBQUMsT0FBRCxDQUF2QjtFQUNBLGFBQU9NLFlBQVkrQixLQUFuQjtFQUNEOztFQUVEO0VBQ0E7RUFDQSxRQUFJdEosTUFBSixFQUFZO0VBQ1ZBLGFBQU8rSSxHQUFQO0VBQ0Q7O0VBRURILGFBQVNHLEdBQVQ7RUFDRCxHQS9IRDs7RUFpSUE7Ozs7O0VBS0EsTUFBTVEsZUFBZSxTQUFmQSxZQUFlLENBQVVDLElBQVYsRUFBZ0I7RUFDbkN0SSxjQUFVOEQsVUFBVUksT0FBcEIsRUFBNkIsRUFBRXhDLFNBQVM0RyxJQUFYLEVBQTdCO0VBQ0EsUUFBSTtFQUNGQSxXQUFLQyxVQUFMLENBQWdCQyxXQUFoQixDQUE0QkYsSUFBNUI7RUFDRCxLQUZELENBRUUsT0FBTzVFLENBQVAsRUFBVTtFQUNWNEUsV0FBS0csU0FBTCxHQUFpQnJELFNBQWpCO0VBQ0Q7RUFDRixHQVBEOztFQVNBOzs7Ozs7RUFNQSxNQUFNc0QsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBVUMsSUFBVixFQUFnQkwsSUFBaEIsRUFBc0I7RUFDN0MsUUFBSTtFQUNGdEksZ0JBQVU4RCxVQUFVSSxPQUFwQixFQUE2QjtFQUMzQjBFLG1CQUFXTixLQUFLTyxnQkFBTCxDQUFzQkYsSUFBdEIsQ0FEZ0I7RUFFM0JHLGNBQU1SO0VBRnFCLE9BQTdCO0VBSUQsS0FMRCxDQUtFLE9BQU81RSxDQUFQLEVBQVU7RUFDVjFELGdCQUFVOEQsVUFBVUksT0FBcEIsRUFBNkI7RUFDM0IwRSxtQkFBVyxJQURnQjtFQUUzQkUsY0FBTVI7RUFGcUIsT0FBN0I7RUFJRDs7RUFFREEsU0FBS1MsZUFBTCxDQUFxQkosSUFBckI7RUFDRCxHQWREOztFQWdCQTs7Ozs7O0VBTUEsTUFBTUssZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVQyxLQUFWLEVBQWlCO0VBQ3JDO0VBQ0EsUUFBSUMsWUFBSjtFQUNBLFFBQUlDLDBCQUFKOztFQUVBLFFBQUl0QyxVQUFKLEVBQWdCO0VBQ2RvQyxjQUFRLHNCQUFzQkEsS0FBOUI7RUFDRCxLQUZELE1BRU87RUFDTDtFQUNBLFVBQU1HLFVBQVUvSSxZQUFZNEksS0FBWixFQUFtQixhQUFuQixDQUFoQjtFQUNBRSwwQkFBb0JDLFdBQVdBLFFBQVEsQ0FBUixDQUEvQjtFQUNEOztFQUVELFFBQU1DLGVBQWVsRSxxQkFDakJBLG1CQUFtQjFCLFVBQW5CLENBQThCd0YsS0FBOUIsQ0FEaUIsR0FFakJBLEtBRko7RUFHQTtFQUNBLFFBQUk7RUFDRkMsWUFBTSxJQUFJcEUsU0FBSixHQUFnQndFLGVBQWhCLENBQWdDRCxZQUFoQyxFQUE4QyxXQUE5QyxDQUFOO0VBQ0QsS0FGRCxDQUVFLE9BQU8zRixDQUFQLEVBQVU7O0VBRVo7RUFDQSxRQUFJLENBQUN3RixHQUFELElBQVEsQ0FBQ0EsSUFBSUssZUFBakIsRUFBa0M7RUFDaENMLFlBQU01RCxlQUFlTyxrQkFBZixDQUFrQyxFQUFsQyxDQUFOO0VBRGdDLGlCQUVmcUQsR0FGZTtFQUFBLFVBRXhCTSxJQUZ3QixRQUV4QkEsSUFGd0I7O0VBR2hDQSxXQUFLakIsVUFBTCxDQUFnQkMsV0FBaEIsQ0FBNEJnQixLQUFLakIsVUFBTCxDQUFnQmtCLGlCQUE1QztFQUNBRCxXQUFLZixTQUFMLEdBQWlCWSxZQUFqQjtFQUNEOztFQUVELFFBQUlKLFNBQVNFLGlCQUFiLEVBQWdDO0VBQzlCRCxVQUFJTSxJQUFKLENBQVNFLFlBQVQsQ0FDRXpHLFNBQVMwRyxjQUFULENBQXdCUixpQkFBeEIsQ0FERixFQUVFRCxJQUFJTSxJQUFKLENBQVNJLFVBQVQsQ0FBb0IsQ0FBcEIsS0FBMEIsSUFGNUI7RUFJRDs7RUFFRDtFQUNBLFdBQU9wRSxxQkFBcUJxRSxJQUFyQixDQUEwQlgsR0FBMUIsRUFBK0J2QyxpQkFBaUIsTUFBakIsR0FBMEIsTUFBekQsRUFBaUUsQ0FBakUsQ0FBUDtFQUNELEdBdENEOztFQXdDQTs7Ozs7O0VBTUEsTUFBTW1ELGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBVS9GLElBQVYsRUFBZ0I7RUFDdEMsV0FBT3dCLG1CQUFtQnNFLElBQW5CLENBQ0w5RixLQUFLbUIsYUFBTCxJQUFzQm5CLElBRGpCLEVBRUxBLElBRkssRUFHTFUsV0FBV3NGLFlBQVgsR0FBMEJ0RixXQUFXdUYsWUFBckMsR0FBb0R2RixXQUFXd0YsU0FIMUQsRUFJTCxZQUFNO0VBQ0osYUFBT3hGLFdBQVd5RixhQUFsQjtFQUNELEtBTkksRUFPTCxLQVBLLENBQVA7RUFTRCxHQVZEOztFQVlBOzs7Ozs7RUFNQSxNQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBVUMsR0FBVixFQUFlO0VBQ2xDLFFBQUlBLGVBQWV4RixJQUFmLElBQXVCd0YsZUFBZXZGLE9BQTFDLEVBQW1EO0VBQ2pELGFBQU8sS0FBUDtFQUNEOztFQUVELFFBQ0UsT0FBT3VGLElBQUlDLFFBQVgsS0FBd0IsUUFBeEIsSUFDQSxPQUFPRCxJQUFJRSxXQUFYLEtBQTJCLFFBRDNCLElBRUEsT0FBT0YsSUFBSTVCLFdBQVgsS0FBMkIsVUFGM0IsSUFHQSxFQUFFNEIsSUFBSUcsVUFBSixZQUEwQjdGLFlBQTVCLENBSEEsSUFJQSxPQUFPMEYsSUFBSXJCLGVBQVgsS0FBK0IsVUFKL0IsSUFLQSxPQUFPcUIsSUFBSUksWUFBWCxLQUE0QixVQUw1QixJQU1BLE9BQU9KLElBQUlLLFlBQVgsS0FBNEIsUUFQOUIsRUFRRTtFQUNBLGFBQU8sSUFBUDtFQUNEOztFQUVELFdBQU8sS0FBUDtFQUNELEdBbEJEOztFQW9CQTs7Ozs7O0VBTUEsTUFBTUMsVUFBVSxTQUFWQSxPQUFVLENBQVU3SSxNQUFWLEVBQWtCO0VBQ2hDLFdBQU8sUUFBTzJDLElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBaEIsR0FDSDNDLGtCQUFrQjJDLElBRGYsR0FFSDNDLFVBQ0UsUUFBT0EsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQURwQixJQUVFLE9BQU9BLE9BQU9zQyxRQUFkLEtBQTJCLFFBRjdCLElBR0UsT0FBT3RDLE9BQU93SSxRQUFkLEtBQTJCLFFBTGpDO0VBTUQsR0FQRDs7RUFTQTs7Ozs7Ozs7RUFRQSxNQUFNTSxlQUFlLFNBQWZBLFlBQWUsQ0FBVUMsVUFBVixFQUFzQkMsV0FBdEIsRUFBbUNDLElBQW5DLEVBQXlDO0VBQzVELFFBQUksQ0FBQ2xGLE1BQU1nRixVQUFOLENBQUwsRUFBd0I7RUFDdEI7RUFDRDs7RUFFRG5MLGlCQUFhbUcsTUFBTWdGLFVBQU4sQ0FBYixFQUFnQyxVQUFDRyxJQUFELEVBQVU7RUFDeENBLFdBQUtsQixJQUFMLENBQVUvRixTQUFWLEVBQXFCK0csV0FBckIsRUFBa0NDLElBQWxDLEVBQXdDcEQsTUFBeEM7RUFDRCxLQUZEO0VBR0QsR0FSRDs7RUFVQTs7Ozs7Ozs7OztFQVVBLE1BQU1zRCxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFVSCxXQUFWLEVBQXVCO0VBQy9DLFFBQUk1RixnQkFBSjs7RUFFQTtFQUNBMEYsaUJBQWEsd0JBQWIsRUFBdUNFLFdBQXZDLEVBQW9ELElBQXBEOztFQUVBO0VBQ0EsUUFBSVYsYUFBYVUsV0FBYixDQUFKLEVBQStCO0VBQzdCeEMsbUJBQWF3QyxXQUFiO0VBQ0EsYUFBTyxJQUFQO0VBQ0Q7O0VBRUQ7RUFDQSxRQUFJeEssWUFBWXdLLFlBQVlSLFFBQXhCLEVBQWtDLGlCQUFsQyxDQUFKLEVBQTBEO0VBQ3hEaEMsbUJBQWF3QyxXQUFiO0VBQ0EsYUFBTyxJQUFQO0VBQ0Q7O0VBRUQ7RUFDQSxRQUFNSSxVQUFVL0ssa0JBQWtCMkssWUFBWVIsUUFBOUIsQ0FBaEI7O0VBRUE7RUFDQU0saUJBQWEscUJBQWIsRUFBb0NFLFdBQXBDLEVBQWlEO0VBQy9DSSxzQkFEK0M7RUFFL0NDLG1CQUFhbkY7RUFGa0MsS0FBakQ7O0VBS0E7RUFDQSxRQUNFLENBQUNrRixZQUFZLEtBQVosSUFBcUJBLFlBQVksTUFBbEMsS0FDQUosWUFBWU0sZ0JBQVosQ0FBNkIsb0JBQTdCLEVBQW1EMUosTUFBbkQsS0FBOEQsQ0FGaEUsRUFHRTtFQUNBNEcsbUJBQWF3QyxXQUFiO0VBQ0EsYUFBTyxJQUFQO0VBQ0Q7O0VBRUQ7RUFDQSxRQUNFLENBQUNILFFBQVFHLFlBQVlwQixpQkFBcEIsQ0FBRCxLQUNDLENBQUNpQixRQUFRRyxZQUFZNUYsT0FBcEIsQ0FBRCxJQUNDLENBQUN5RixRQUFRRyxZQUFZNUYsT0FBWixDQUFvQndFLGlCQUE1QixDQUZILEtBR0E1SSxXQUFXLFVBQVgsRUFBdUJnSyxZQUFZTyxTQUFuQyxDQUhBLElBSUF2SyxXQUFXLFVBQVgsRUFBdUJnSyxZQUFZUCxXQUFuQyxDQUxGLEVBTUU7RUFDQWpDLG1CQUFhd0MsV0FBYjtFQUNBLGFBQU8sSUFBUDtFQUNEOztFQUVEO0VBQ0EsUUFBSSxDQUFDOUUsYUFBYWtGLE9BQWIsQ0FBRCxJQUEwQjVFLFlBQVk0RSxPQUFaLENBQTlCLEVBQW9EO0VBQ2xEO0VBQ0EsVUFDRS9ELGdCQUNBLENBQUNHLGdCQUFnQjRELE9BQWhCLENBREQsSUFFQSxPQUFPSixZQUFZUSxrQkFBbkIsS0FBMEMsVUFINUMsRUFJRTtFQUNBLFlBQUk7RUFDRixjQUFNQyxlQUFlVCxZQUFZTyxTQUFqQztFQUNBUCxzQkFBWVEsa0JBQVosQ0FDRSxVQURGLEVBRUVsRyxxQkFDSUEsbUJBQW1CMUIsVUFBbkIsQ0FBOEI2SCxZQUE5QixDQURKLEdBRUlBLFlBSk47RUFNRCxTQVJELENBUUUsT0FBTzVILENBQVAsRUFBVTtFQUNiOztFQUVEMkUsbUJBQWF3QyxXQUFiO0VBQ0EsYUFBTyxJQUFQO0VBQ0Q7O0VBRUQ7RUFDQSxRQUNFLENBQUNJLFlBQVksVUFBWixJQUEwQkEsWUFBWSxTQUF2QyxLQUNBcEssV0FBVyxzQkFBWCxFQUFtQ2dLLFlBQVlPLFNBQS9DLENBRkYsRUFHRTtFQUNBL0MsbUJBQWF3QyxXQUFiO0VBQ0EsYUFBTyxJQUFQO0VBQ0Q7O0VBRUQ7RUFDQSxRQUFJbkUsc0JBQXNCbUUsWUFBWTFHLFFBQVosS0FBeUIsQ0FBbkQsRUFBc0Q7RUFDcEQ7RUFDQWMsZ0JBQVU0RixZQUFZUCxXQUF0QjtFQUNBckYsZ0JBQVUxRSxjQUFjMEUsT0FBZCxFQUF1QjNDLGdCQUF2QixFQUFzQyxHQUF0QyxDQUFWO0VBQ0EyQyxnQkFBVTFFLGNBQWMwRSxPQUFkLEVBQXVCMUMsV0FBdkIsRUFBaUMsR0FBakMsQ0FBVjtFQUNBLFVBQUlzSSxZQUFZUCxXQUFaLEtBQTRCckYsT0FBaEMsRUFBeUM7RUFDdkNqRixrQkFBVThELFVBQVVJLE9BQXBCLEVBQTZCLEVBQUV4QyxTQUFTbUosWUFBWVUsU0FBWixFQUFYLEVBQTdCO0VBQ0FWLG9CQUFZUCxXQUFaLEdBQTBCckYsT0FBMUI7RUFDRDtFQUNGOztFQUVEO0VBQ0EwRixpQkFBYSx1QkFBYixFQUFzQ0UsV0FBdEMsRUFBbUQsSUFBbkQ7O0VBRUEsV0FBTyxLQUFQO0VBQ0QsR0FoR0Q7O0VBa0dBOzs7Ozs7OztFQVFBO0VBQ0EsTUFBTVcsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBVUMsS0FBVixFQUFpQkMsTUFBakIsRUFBeUJDLEtBQXpCLEVBQWdDO0VBQ3hEO0VBQ0EsUUFDRTFFLGlCQUNDeUUsV0FBVyxJQUFYLElBQW1CQSxXQUFXLE1BRC9CLE1BRUNDLFNBQVMxSSxRQUFULElBQXFCMEksU0FBU2hFLFdBRi9CLENBREYsRUFJRTtFQUNBLGFBQU8sS0FBUDtFQUNEOztFQUVEOzs7O0VBSUEsUUFBSW5CLG1CQUFtQjNGLFdBQVcyQixZQUFYLEVBQXNCa0osTUFBdEIsQ0FBdkIsRUFBc0QsQ0FBdEQsTUFFTyxJQUFJbkYsbUJBQW1CMUYsV0FBVzRCLFlBQVgsRUFBc0JpSixNQUF0QixDQUF2QixFQUFzRCxDQUF0RCxNQUdBLElBQUksQ0FBQ3hGLGFBQWF3RixNQUFiLENBQUQsSUFBeUJwRixZQUFZb0YsTUFBWixDQUE3QixFQUFrRDtFQUN2RCxhQUFPLEtBQVA7O0VBRUE7RUFDRCxLQUpNLE1BSUEsSUFBSWxFLG9CQUFvQmtFLE1BQXBCLENBQUosRUFBaUMsQ0FBakMsTUFJQSxJQUNMN0ssV0FBVzZCLGlCQUFYLEVBQTJCbkMsY0FBY29MLEtBQWQsRUFBcUIvSSxrQkFBckIsRUFBc0MsRUFBdEMsQ0FBM0IsQ0FESyxFQUVMLENBRkssTUFNQSxJQUNMLENBQUM4SSxXQUFXLEtBQVgsSUFBb0JBLFdBQVcsWUFBL0IsSUFBK0NBLFdBQVcsTUFBM0QsS0FDQUQsVUFBVSxRQURWLElBRUFoTCxjQUFja0wsS0FBZCxFQUFxQixPQUFyQixNQUFrQyxDQUZsQyxJQUdBckUsY0FBY21FLEtBQWQsQ0FKSyxFQUtMLENBTEssTUFVQSxJQUNMaEYsMkJBQ0EsQ0FBQzVGLFdBQVc4QixvQkFBWCxFQUE4QnBDLGNBQWNvTCxLQUFkLEVBQXFCL0ksa0JBQXJCLEVBQXNDLEVBQXRDLENBQTlCLENBRkksRUFHTCxDQUhLLE1BT0EsSUFBSSxDQUFDK0ksS0FBTCxFQUFZLENBQVosTUFHQTtFQUNMLGFBQU8sS0FBUDtFQUNEOztFQUVELFdBQU8sSUFBUDtFQUNELEdBMUREOztFQTREQTs7Ozs7Ozs7OztFQVVBLE1BQU1DLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQVVmLFdBQVYsRUFBdUI7RUFDakQsUUFBSWdCLGFBQUo7RUFDQSxRQUFJRixjQUFKO0VBQ0EsUUFBSUQsZUFBSjtFQUNBLFFBQUlsSyxVQUFKO0VBQ0E7RUFDQW1KLGlCQUFhLDBCQUFiLEVBQXlDRSxXQUF6QyxFQUFzRCxJQUF0RDs7RUFOaUQsUUFRekNOLFVBUnlDLEdBUTFCTSxXQVIwQixDQVF6Q04sVUFSeUM7O0VBVWpEOztFQUNBLFFBQUksQ0FBQ0EsVUFBTCxFQUFpQjtFQUNmO0VBQ0Q7O0VBRUQsUUFBTXVCLFlBQVk7RUFDaEJDLGdCQUFVLEVBRE07RUFFaEJDLGlCQUFXLEVBRks7RUFHaEJDLGdCQUFVLElBSE07RUFJaEJDLHlCQUFtQmhHO0VBSkgsS0FBbEI7RUFNQTFFLFFBQUkrSSxXQUFXOUksTUFBZjs7RUFFQTtFQUNBLFdBQU9ELEdBQVAsRUFBWTtFQUNWcUssYUFBT3RCLFdBQVcvSSxDQUFYLENBQVA7RUFEVSxrQkFFcUJxSyxJQUZyQjtFQUFBLFVBRUZsRCxJQUZFLFNBRUZBLElBRkU7RUFBQSxVQUVJOEIsWUFGSixTQUVJQSxZQUZKOztFQUdWa0IsY0FBUWhMLFdBQVdrTCxLQUFLRixLQUFoQixDQUFSO0VBQ0FELGVBQVN4TCxrQkFBa0J5SSxJQUFsQixDQUFUOztFQUVBO0VBQ0FtRCxnQkFBVUMsUUFBVixHQUFxQkwsTUFBckI7RUFDQUksZ0JBQVVFLFNBQVYsR0FBc0JMLEtBQXRCO0VBQ0FHLGdCQUFVRyxRQUFWLEdBQXFCLElBQXJCO0VBQ0FILGdCQUFVSyxhQUFWLEdBQTBCQyxTQUExQixDQVZVO0VBV1Z6QixtQkFBYSx1QkFBYixFQUFzQ0UsV0FBdEMsRUFBbURpQixTQUFuRDtFQUNBSCxjQUFRRyxVQUFVRSxTQUFsQjtFQUNBO0VBQ0EsVUFBSUYsVUFBVUssYUFBZCxFQUE2QjtFQUMzQjtFQUNEOztFQUVEO0VBQ0F6RCx1QkFBaUJDLElBQWpCLEVBQXVCa0MsV0FBdkI7O0VBRUE7RUFDQSxVQUFJLENBQUNpQixVQUFVRyxRQUFmLEVBQXlCO0VBQ3ZCO0VBQ0Q7O0VBRUQ7RUFDQSxVQUFJcEwsV0FBVyxNQUFYLEVBQW1COEssS0FBbkIsQ0FBSixFQUErQjtFQUM3QmpELHlCQUFpQkMsSUFBakIsRUFBdUJrQyxXQUF2QjtFQUNBO0VBQ0Q7O0VBRUQ7RUFDQSxVQUFJbkUsa0JBQUosRUFBd0I7RUFDdEJpRixnQkFBUXBMLGNBQWNvTCxLQUFkLEVBQXFCckosZ0JBQXJCLEVBQW9DLEdBQXBDLENBQVI7RUFDQXFKLGdCQUFRcEwsY0FBY29MLEtBQWQsRUFBcUJwSixXQUFyQixFQUErQixHQUEvQixDQUFSO0VBQ0Q7O0VBRUQ7RUFDQSxVQUFNa0osUUFBUVosWUFBWVIsUUFBWixDQUFxQmpLLFdBQXJCLEVBQWQ7RUFDQSxVQUFJLENBQUNvTCxrQkFBa0JDLEtBQWxCLEVBQXlCQyxNQUF6QixFQUFpQ0MsS0FBakMsQ0FBTCxFQUE4QztFQUM1QztFQUNEOztFQUVEO0VBQ0EsVUFBSTtFQUNGLFlBQUlsQixZQUFKLEVBQWtCO0VBQ2hCSSxzQkFBWXdCLGNBQVosQ0FBMkI1QixZQUEzQixFQUF5QzlCLElBQXpDLEVBQStDZ0QsS0FBL0M7RUFDRCxTQUZELE1BRU87RUFDTDtFQUNBZCxzQkFBWUwsWUFBWixDQUF5QjdCLElBQXpCLEVBQStCZ0QsS0FBL0I7RUFDRDs7RUFFRDdMLGlCQUFTZ0UsVUFBVUksT0FBbkI7RUFDRCxPQVRELENBU0UsT0FBT1IsQ0FBUCxFQUFVO0VBQ2I7O0VBRUQ7RUFDQWlILGlCQUFhLHlCQUFiLEVBQXdDRSxXQUF4QyxFQUFxRCxJQUFyRDtFQUNELEdBbkZEOztFQXFGQTs7Ozs7RUFLQSxNQUFNeUIscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBVUMsUUFBVixFQUFvQjtFQUM3QyxRQUFJQyxtQkFBSjtFQUNBLFFBQU1DLGlCQUFpQjNDLGdCQUFnQnlDLFFBQWhCLENBQXZCOztFQUVBO0VBQ0E1QixpQkFBYSx5QkFBYixFQUF3QzRCLFFBQXhDLEVBQWtELElBQWxEOztFQUVBLFdBQVFDLGFBQWFDLGVBQWVDLFFBQWYsRUFBckIsRUFBaUQ7RUFDL0M7RUFDQS9CLG1CQUFhLHdCQUFiLEVBQXVDNkIsVUFBdkMsRUFBbUQsSUFBbkQ7O0VBRUE7RUFDQSxVQUFJeEIsa0JBQWtCd0IsVUFBbEIsQ0FBSixFQUFtQztFQUNqQztFQUNEOztFQUVEO0VBQ0EsVUFBSUEsV0FBV3ZILE9BQVgsWUFBOEJYLGdCQUFsQyxFQUFvRDtFQUNsRGdJLDJCQUFtQkUsV0FBV3ZILE9BQTlCO0VBQ0Q7O0VBRUQ7RUFDQTJHLDBCQUFvQlksVUFBcEI7RUFDRDs7RUFFRDtFQUNBN0IsaUJBQWEsd0JBQWIsRUFBdUM0QixRQUF2QyxFQUFpRCxJQUFqRDtFQUNELEdBM0JEOztFQTZCQTs7Ozs7OztFQU9BO0VBQ0F6SSxZQUFVNkksUUFBVixHQUFxQixVQUFVMUQsS0FBVixFQUFpQnBCLEdBQWpCLEVBQXNCO0VBQ3pDLFFBQUkyQixhQUFKO0VBQ0EsUUFBSW9ELHFCQUFKO0VBQ0EsUUFBSS9CLG9CQUFKO0VBQ0EsUUFBSWdDLGdCQUFKO0VBQ0EsUUFBSUMsbUJBQUo7RUFDQTs7O0VBR0EsUUFBSSxDQUFDN0QsS0FBTCxFQUFZO0VBQ1ZBLGNBQVEsT0FBUjtFQUNEOztFQUVEO0VBQ0EsUUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQTZCLENBQUN5QixRQUFRekIsS0FBUixDQUFsQyxFQUFrRDtFQUNoRDtFQUNBLFVBQUksT0FBT0EsTUFBTThELFFBQWIsS0FBMEIsVUFBOUIsRUFBMEM7RUFDeEMsY0FBTS9MLGdCQUFnQiw0QkFBaEIsQ0FBTjtFQUNELE9BRkQsTUFFTztFQUNMaUksZ0JBQVFBLE1BQU04RCxRQUFOLEVBQVI7RUFDQSxZQUFJLE9BQU85RCxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0VBQzdCLGdCQUFNakksZ0JBQWdCLGlDQUFoQixDQUFOO0VBQ0Q7RUFDRjtFQUNGOztFQUVEO0VBQ0EsUUFBSSxDQUFDOEMsVUFBVU0sV0FBZixFQUE0QjtFQUMxQixVQUNFLFFBQU90QixPQUFPa0ssWUFBZCxNQUErQixRQUEvQixJQUNBLE9BQU9sSyxPQUFPa0ssWUFBZCxLQUErQixVQUZqQyxFQUdFO0VBQ0EsWUFBSSxPQUFPL0QsS0FBUCxLQUFpQixRQUFyQixFQUErQjtFQUM3QixpQkFBT25HLE9BQU9rSyxZQUFQLENBQW9CL0QsS0FBcEIsQ0FBUDtFQUNEOztFQUVELFlBQUl5QixRQUFRekIsS0FBUixDQUFKLEVBQW9CO0VBQ2xCLGlCQUFPbkcsT0FBT2tLLFlBQVAsQ0FBb0IvRCxNQUFNUixTQUExQixDQUFQO0VBQ0Q7RUFDRjs7RUFFRCxhQUFPUSxLQUFQO0VBQ0Q7O0VBRUQ7RUFDQSxRQUFJLENBQUNyQyxVQUFMLEVBQWlCO0VBQ2ZnQixtQkFBYUMsR0FBYjtFQUNEOztFQUVEO0VBQ0EvRCxjQUFVSSxPQUFWLEdBQW9CLEVBQXBCOztFQUVBO0VBQ0EsUUFBSSxPQUFPK0UsS0FBUCxLQUFpQixRQUFyQixFQUErQjtFQUM3QjlCLGlCQUFXLEtBQVg7RUFDRDs7RUFFRCxRQUFJQSxRQUFKLEVBQWMsQ0FBZCxNQUVPLElBQUk4QixpQkFBaUJ6RSxJQUFyQixFQUEyQjtFQUNoQzs7RUFFQWdGLGFBQU9SLGNBQWMsU0FBZCxDQUFQO0VBQ0E0RCxxQkFBZXBELEtBQUt0RSxhQUFMLENBQW1CUSxVQUFuQixDQUE4QnVELEtBQTlCLEVBQXFDLElBQXJDLENBQWY7RUFDQSxVQUFJMkQsYUFBYXpJLFFBQWIsS0FBMEIsQ0FBMUIsSUFBK0J5SSxhQUFhdkMsUUFBYixLQUEwQixNQUE3RCxFQUFxRTtFQUNuRTtFQUNBYixlQUFPb0QsWUFBUDtFQUNELE9BSEQsTUFHTyxJQUFJQSxhQUFhdkMsUUFBYixLQUEwQixNQUE5QixFQUFzQztFQUMzQ2IsZUFBT29ELFlBQVA7RUFDRCxPQUZNLE1BRUE7RUFDTDtFQUNBcEQsYUFBS3lELFdBQUwsQ0FBaUJMLFlBQWpCO0VBQ0Q7RUFDRixLQWRNLE1BY0E7RUFDTDtFQUNBLFVBQ0UsQ0FBQzlGLFVBQUQsSUFDQSxDQUFDSixrQkFERCxJQUVBLENBQUNDLGNBRkQ7RUFHQTtFQUNBc0MsWUFBTXZJLE9BQU4sQ0FBYyxHQUFkLE1BQXVCLENBQUMsQ0FMMUIsRUFNRTtFQUNBLGVBQU95RSxzQkFBc0JFLG1CQUF0QixHQUNIRixtQkFBbUIxQixVQUFuQixDQUE4QndGLEtBQTlCLENBREcsR0FFSEEsS0FGSjtFQUdEOztFQUVEO0VBQ0FPLGFBQU9SLGNBQWNDLEtBQWQsQ0FBUDs7RUFFQTtFQUNBLFVBQUksQ0FBQ08sSUFBTCxFQUFXO0VBQ1QsZUFBTzFDLGFBQWEsSUFBYixHQUFvQjFCLFNBQTNCO0VBQ0Q7RUFDRjs7RUFFRDtFQUNBLFFBQUlvRSxRQUFRM0MsVUFBWixFQUF3QjtFQUN0QndCLG1CQUFhbUIsS0FBSzBELFVBQWxCO0VBQ0Q7O0VBRUQ7RUFDQSxRQUFNQyxlQUFlckQsZ0JBQWdCM0MsV0FBVzhCLEtBQVgsR0FBbUJPLElBQW5DLENBQXJCOztFQUVBO0VBQ0EsV0FBUXFCLGNBQWNzQyxhQUFhVCxRQUFiLEVBQXRCLEVBQWdEO0VBQzlDO0VBQ0EsVUFBSTdCLFlBQVkxRyxRQUFaLEtBQXlCLENBQXpCLElBQThCMEcsZ0JBQWdCZ0MsT0FBbEQsRUFBMkQ7RUFDekQ7RUFDRDs7RUFFRDtFQUNBLFVBQUk3QixrQkFBa0JILFdBQWxCLENBQUosRUFBb0M7RUFDbEM7RUFDRDs7RUFFRDtFQUNBLFVBQUlBLFlBQVk1RixPQUFaLFlBQStCWCxnQkFBbkMsRUFBcUQ7RUFDbkRnSSwyQkFBbUJ6QixZQUFZNUYsT0FBL0I7RUFDRDs7RUFFRDtFQUNBMkcsMEJBQW9CZixXQUFwQjs7RUFFQWdDLGdCQUFVaEMsV0FBVjtFQUNEOztFQUVEZ0MsY0FBVSxJQUFWOztFQUVBO0VBQ0EsUUFBSTFGLFFBQUosRUFBYztFQUNaLGFBQU84QixLQUFQO0VBQ0Q7O0VBRUQ7RUFDQSxRQUFJbkMsVUFBSixFQUFnQjtFQUNkLFVBQUlDLG1CQUFKLEVBQXlCO0VBQ3ZCK0YscUJBQWFySCx1QkFBdUJvRSxJQUF2QixDQUE0QkwsS0FBS3RFLGFBQWpDLENBQWI7O0VBRUEsZUFBT3NFLEtBQUswRCxVQUFaLEVBQXdCO0VBQ3RCO0VBQ0FKLHFCQUFXRyxXQUFYLENBQXVCekQsS0FBSzBELFVBQTVCO0VBQ0Q7RUFDRixPQVBELE1BT087RUFDTEoscUJBQWF0RCxJQUFiO0VBQ0Q7O0VBRUQsVUFBSXhDLGlCQUFKLEVBQXVCO0VBQ3JCOzs7Ozs7O0VBT0E4RixxQkFBYXBILFdBQVdtRSxJQUFYLENBQWdCeEYsZ0JBQWhCLEVBQWtDeUksVUFBbEMsRUFBOEMsSUFBOUMsQ0FBYjtFQUNEOztFQUVELGFBQU9BLFVBQVA7RUFDRDs7RUFFRCxRQUFJTSxpQkFBaUJ6RyxpQkFBaUI2QyxLQUFLZixTQUF0QixHQUFrQ2UsS0FBSzRCLFNBQTVEOztFQUVBO0VBQ0EsUUFBSTFFLGtCQUFKLEVBQXdCO0VBQ3RCMEcsdUJBQWlCN00sY0FBYzZNLGNBQWQsRUFBOEI5SyxnQkFBOUIsRUFBNkMsR0FBN0MsQ0FBakI7RUFDQThLLHVCQUFpQjdNLGNBQWM2TSxjQUFkLEVBQThCN0ssV0FBOUIsRUFBd0MsR0FBeEMsQ0FBakI7RUFDRDs7RUFFRCxXQUFPNEMsc0JBQXNCRSxtQkFBdEIsR0FDSEYsbUJBQW1CMUIsVUFBbkIsQ0FBOEIySixjQUE5QixDQURHLEdBRUhBLGNBRko7RUFHRCxHQTVLRDs7RUE4S0E7Ozs7OztFQU1BdEosWUFBVXVKLFNBQVYsR0FBc0IsVUFBVXhGLEdBQVYsRUFBZTtFQUNuQ0QsaUJBQWFDLEdBQWI7RUFDQWpCLGlCQUFhLElBQWI7RUFDRCxHQUhEOztFQUtBOzs7OztFQUtBOUMsWUFBVXdKLFdBQVYsR0FBd0IsWUFBWTtFQUNsQzVGLGFBQVMsSUFBVDtFQUNBZCxpQkFBYSxLQUFiO0VBQ0QsR0FIRDs7RUFLQTs7Ozs7Ozs7OztFQVVBOUMsWUFBVXlKLGdCQUFWLEdBQTZCLFVBQVVDLEdBQVYsRUFBZTNCLElBQWYsRUFBcUJGLEtBQXJCLEVBQTRCO0VBQ3ZEO0VBQ0EsUUFBSSxDQUFDakUsTUFBTCxFQUFhO0VBQ1hFLG1CQUFhLEVBQWI7RUFDRDs7RUFFRCxRQUFNNkQsUUFBUXZMLGtCQUFrQnNOLEdBQWxCLENBQWQ7RUFDQSxRQUFNOUIsU0FBU3hMLGtCQUFrQjJMLElBQWxCLENBQWY7RUFDQSxXQUFPTCxrQkFBa0JDLEtBQWxCLEVBQXlCQyxNQUF6QixFQUFpQ0MsS0FBakMsQ0FBUDtFQUNELEdBVEQ7O0VBV0E7Ozs7Ozs7RUFPQTdILFlBQVUySixPQUFWLEdBQW9CLFVBQVU3QyxVQUFWLEVBQXNCOEMsWUFBdEIsRUFBb0M7RUFDdEQsUUFBSSxPQUFPQSxZQUFQLEtBQXdCLFVBQTVCLEVBQXdDO0VBQ3RDO0VBQ0Q7O0VBRUQ5SCxVQUFNZ0YsVUFBTixJQUFvQmhGLE1BQU1nRixVQUFOLEtBQXFCLEVBQXpDO0VBQ0E1SyxjQUFVNEYsTUFBTWdGLFVBQU4sQ0FBVixFQUE2QjhDLFlBQTdCO0VBQ0QsR0FQRDs7RUFTQTs7Ozs7OztFQU9BNUosWUFBVTZKLFVBQVYsR0FBdUIsVUFBVS9DLFVBQVYsRUFBc0I7RUFDM0MsUUFBSWhGLE1BQU1nRixVQUFOLENBQUosRUFBdUI7RUFDckI5SyxlQUFTOEYsTUFBTWdGLFVBQU4sQ0FBVDtFQUNEO0VBQ0YsR0FKRDs7RUFNQTs7Ozs7O0VBTUE5RyxZQUFVOEosV0FBVixHQUF3QixVQUFVaEQsVUFBVixFQUFzQjtFQUM1QyxRQUFJaEYsTUFBTWdGLFVBQU4sQ0FBSixFQUF1QjtFQUNyQmhGLFlBQU1nRixVQUFOLElBQW9CLEVBQXBCO0VBQ0Q7RUFDRixHQUpEOztFQU1BOzs7OztFQUtBOUcsWUFBVStKLGNBQVYsR0FBMkIsWUFBWTtFQUNyQ2pJLFlBQVEsRUFBUjtFQUNELEdBRkQ7O0VBSUEsU0FBTzlCLFNBQVA7RUFDRDs7QUFFRCxlQUFlRCxpQkFBZiIsImZpbGUiOiIzLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGhhc093blByb3BlcnR5LCBzZXRQcm90b3R5cGVPZiwgaXNGcm96ZW4gfSA9IE9iamVjdDtcblxubGV0IHsgZnJlZXplLCBzZWFsLCBjcmVhdGUgfSA9IE9iamVjdDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5sZXQgeyBhcHBseSwgY29uc3RydWN0IH0gPSB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVmbGVjdDtcblxuaWYgKCFhcHBseSkge1xuICBhcHBseSA9IGZ1bmN0aW9uIChmdW4sIHRoaXNWYWx1ZSwgYXJncykge1xuICAgIHJldHVybiBmdW4uYXBwbHkodGhpc1ZhbHVlLCBhcmdzKTtcbiAgfTtcbn1cblxuaWYgKCFmcmVlemUpIHtcbiAgZnJlZXplID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cblxuaWYgKCFzZWFsKSB7XG4gIHNlYWwgPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuXG5pZiAoIWNvbnN0cnVjdCkge1xuICBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoRnVuYywgYXJncykge1xuICAgIHJldHVybiBuZXcgRnVuYyguLi5hcmdzKTtcbiAgfTtcbn1cblxuY29uc3QgYXJyYXlGb3JFYWNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUuZm9yRWFjaCk7XG5jb25zdCBhcnJheUluZGV4T2YgPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5pbmRleE9mKTtcbmNvbnN0IGFycmF5UG9wID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucG9wKTtcbmNvbnN0IGFycmF5UHVzaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuY29uc3QgYXJyYXlTbGljZSA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnNsaWNlKTtcblxuY29uc3Qgc3RyaW5nVG9Mb3dlckNhc2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudG9Mb3dlckNhc2UpO1xuY29uc3Qgc3RyaW5nTWF0Y2ggPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUubWF0Y2gpO1xuY29uc3Qgc3RyaW5nUmVwbGFjZSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbmNvbnN0IHN0cmluZ0luZGV4T2YgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZik7XG5jb25zdCBzdHJpbmdUcmltID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xuXG5jb25zdCByZWdFeHBUZXN0ID0gdW5hcHBseShSZWdFeHAucHJvdG90eXBlLnRlc3QpO1xuXG5jb25zdCB0eXBlRXJyb3JDcmVhdGUgPSB1bmNvbnN0cnVjdChUeXBlRXJyb3IpO1xuXG5leHBvcnQgZnVuY3Rpb24gdW5hcHBseShmdW5jKSB7XG4gIHJldHVybiAodGhpc0FyZywgLi4uYXJncykgPT4gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmNvbnN0cnVjdChmdW5jKSB7XG4gIHJldHVybiAoLi4uYXJncykgPT4gY29uc3RydWN0KGZ1bmMsIGFyZ3MpO1xufVxuXG4vKiBBZGQgcHJvcGVydGllcyB0byBhIGxvb2t1cCB0YWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvU2V0KHNldCwgYXJyYXkpIHtcbiAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgLy8gTWFrZSAnaW4nIGFuZCB0cnV0aHkgY2hlY2tzIGxpa2UgQm9vbGVhbihzZXQuY29uc3RydWN0b3IpXG4gICAgLy8gaW5kZXBlbmRlbnQgb2YgYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiBPYmplY3QucHJvdG90eXBlLlxuICAgIC8vIFByZXZlbnQgcHJvdG90eXBlIHNldHRlcnMgZnJvbSBpbnRlcmNlcHRpbmcgc2V0IGFzIGEgdGhpcyB2YWx1ZS5cbiAgICBzZXRQcm90b3R5cGVPZihzZXQsIG51bGwpO1xuICB9XG5cbiAgbGV0IGwgPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsLS0pIHtcbiAgICBsZXQgZWxlbWVudCA9IGFycmF5W2xdO1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGxjRWxlbWVudCA9IHN0cmluZ1RvTG93ZXJDYXNlKGVsZW1lbnQpO1xuICAgICAgaWYgKGxjRWxlbWVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICAvLyBDb25maWcgcHJlc2V0cyAoZS5nLiB0YWdzLmpzLCBhdHRycy5qcykgYXJlIGltbXV0YWJsZS5cbiAgICAgICAgaWYgKCFpc0Zyb3plbihhcnJheSkpIHtcbiAgICAgICAgICBhcnJheVtsXSA9IGxjRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQgPSBsY0VsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0W2VsZW1lbnRdID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzZXQ7XG59XG5cbi8qIFNoYWxsb3cgY2xvbmUgYW4gb2JqZWN0ICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUob2JqZWN0KSB7XG4gIGNvbnN0IG5ld09iamVjdCA9IGNyZWF0ZShudWxsKTtcblxuICBsZXQgcHJvcGVydHk7XG4gIGZvciAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKGFwcGx5KGhhc093blByb3BlcnR5LCBvYmplY3QsIFtwcm9wZXJ0eV0pKSB7XG4gICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqZWN0O1xufVxuXG5leHBvcnQge1xuICAvLyBBcnJheVxuICBhcnJheUZvckVhY2gsXG4gIGFycmF5SW5kZXhPZixcbiAgYXJyYXlQb3AsXG4gIGFycmF5UHVzaCxcbiAgYXJyYXlTbGljZSxcbiAgLy8gT2JqZWN0XG4gIGZyZWV6ZSxcbiAgaGFzT3duUHJvcGVydHksXG4gIGlzRnJvemVuLFxuICBzZXRQcm90b3R5cGVPZixcbiAgc2VhbCxcbiAgLy8gUmVnRXhwXG4gIHJlZ0V4cFRlc3QsXG4gIC8vIFN0cmluZ1xuICBzdHJpbmdJbmRleE9mLFxuICBzdHJpbmdNYXRjaCxcbiAgc3RyaW5nUmVwbGFjZSxcbiAgc3RyaW5nVG9Mb3dlckNhc2UsXG4gIHN0cmluZ1RyaW0sXG4gIC8vIEVycm9yc1xuICB0eXBlRXJyb3JDcmVhdGUsXG59O1xuIiwiaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBodG1sID0gZnJlZXplKFtcbiAgJ2EnLFxuICAnYWJicicsXG4gICdhY3JvbnltJyxcbiAgJ2FkZHJlc3MnLFxuICAnYXJlYScsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2F1ZGlvJyxcbiAgJ2InLFxuICAnYmRpJyxcbiAgJ2JkbycsXG4gICdiaWcnLFxuICAnYmxpbmsnLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2JyJyxcbiAgJ2J1dHRvbicsXG4gICdjYW52YXMnLFxuICAnY2FwdGlvbicsXG4gICdjZW50ZXInLFxuICAnY2l0ZScsXG4gICdjb2RlJyxcbiAgJ2NvbCcsXG4gICdjb2xncm91cCcsXG4gICdjb250ZW50JyxcbiAgJ2RhdGEnLFxuICAnZGF0YWxpc3QnLFxuICAnZGQnLFxuICAnZGVjb3JhdG9yJyxcbiAgJ2RlbCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RmbicsXG4gICdkaWFsb2cnLFxuICAnZGlyJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdlbGVtZW50JyxcbiAgJ2VtJyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2ZvbnQnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZCcsXG4gICdoZWFkZXInLFxuICAnaGdyb3VwJyxcbiAgJ2hyJyxcbiAgJ2h0bWwnLFxuICAnaScsXG4gICdpbWcnLFxuICAnaW5wdXQnLFxuICAnaW5zJyxcbiAgJ2tiZCcsXG4gICdsYWJlbCcsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbWFpbicsXG4gICdtYXAnLFxuICAnbWFyaycsXG4gICdtYXJxdWVlJyxcbiAgJ21lbnUnLFxuICAnbWVudWl0ZW0nLFxuICAnbWV0ZXInLFxuICAnbmF2JyxcbiAgJ25vYnInLFxuICAnb2wnLFxuICAnb3B0Z3JvdXAnLFxuICAnb3B0aW9uJyxcbiAgJ291dHB1dCcsXG4gICdwJyxcbiAgJ3BpY3R1cmUnLFxuICAncHJlJyxcbiAgJ3Byb2dyZXNzJyxcbiAgJ3EnLFxuICAncnAnLFxuICAncnQnLFxuICAncnVieScsXG4gICdzJyxcbiAgJ3NhbXAnLFxuICAnc2VjdGlvbicsXG4gICdzZWxlY3QnLFxuICAnc2hhZG93JyxcbiAgJ3NtYWxsJyxcbiAgJ3NvdXJjZScsXG4gICdzcGFjZXInLFxuICAnc3BhbicsXG4gICdzdHJpa2UnLFxuICAnc3Ryb25nJyxcbiAgJ3N0eWxlJyxcbiAgJ3N1YicsXG4gICdzdW1tYXJ5JyxcbiAgJ3N1cCcsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0ZW1wbGF0ZScsXG4gICd0ZXh0YXJlYScsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aW1lJyxcbiAgJ3RyJyxcbiAgJ3RyYWNrJyxcbiAgJ3R0JyxcbiAgJ3UnLFxuICAndWwnLFxuICAndmFyJyxcbiAgJ3ZpZGVvJyxcbiAgJ3dicicsXG5dKTtcblxuLy8gU1ZHXG5leHBvcnQgY29uc3Qgc3ZnID0gZnJlZXplKFtcbiAgJ3N2ZycsXG4gICdhJyxcbiAgJ2FsdGdseXBoJyxcbiAgJ2FsdGdseXBoZGVmJyxcbiAgJ2FsdGdseXBoaXRlbScsXG4gICdhbmltYXRlY29sb3InLFxuICAnYW5pbWF0ZW1vdGlvbicsXG4gICdhbmltYXRldHJhbnNmb3JtJyxcbiAgJ2F1ZGlvJyxcbiAgJ2NhbnZhcycsXG4gICdjaXJjbGUnLFxuICAnY2xpcHBhdGgnLFxuICAnZGVmcycsXG4gICdkZXNjJyxcbiAgJ2VsbGlwc2UnLFxuICAnZmlsdGVyJyxcbiAgJ2ZvbnQnLFxuICAnZycsXG4gICdnbHlwaCcsXG4gICdnbHlwaHJlZicsXG4gICdoa2VybicsXG4gICdpbWFnZScsXG4gICdsaW5lJyxcbiAgJ2xpbmVhcmdyYWRpZW50JyxcbiAgJ21hcmtlcicsXG4gICdtYXNrJyxcbiAgJ21ldGFkYXRhJyxcbiAgJ21wYXRoJyxcbiAgJ3BhdGgnLFxuICAncGF0dGVybicsXG4gICdwb2x5Z29uJyxcbiAgJ3BvbHlsaW5lJyxcbiAgJ3JhZGlhbGdyYWRpZW50JyxcbiAgJ3JlY3QnLFxuICAnc3RvcCcsXG4gICdzdHlsZScsXG4gICdzd2l0Y2gnLFxuICAnc3ltYm9sJyxcbiAgJ3RleHQnLFxuICAndGV4dHBhdGgnLFxuICAndGl0bGUnLFxuICAndHJlZicsXG4gICd0c3BhbicsXG4gICd2aWRlbycsXG4gICd2aWV3JyxcbiAgJ3ZrZXJuJyxcbl0pO1xuXG5leHBvcnQgY29uc3Qgc3ZnRmlsdGVycyA9IGZyZWV6ZShbXG4gICdmZUJsZW5kJyxcbiAgJ2ZlQ29sb3JNYXRyaXgnLFxuICAnZmVDb21wb25lbnRUcmFuc2ZlcicsXG4gICdmZUNvbXBvc2l0ZScsXG4gICdmZUNvbnZvbHZlTWF0cml4JyxcbiAgJ2ZlRGlmZnVzZUxpZ2h0aW5nJyxcbiAgJ2ZlRGlzcGxhY2VtZW50TWFwJyxcbiAgJ2ZlRGlzdGFudExpZ2h0JyxcbiAgJ2ZlRmxvb2QnLFxuICAnZmVGdW5jQScsXG4gICdmZUZ1bmNCJyxcbiAgJ2ZlRnVuY0cnLFxuICAnZmVGdW5jUicsXG4gICdmZUdhdXNzaWFuQmx1cicsXG4gICdmZU1lcmdlJyxcbiAgJ2ZlTWVyZ2VOb2RlJyxcbiAgJ2ZlTW9ycGhvbG9neScsXG4gICdmZU9mZnNldCcsXG4gICdmZVBvaW50TGlnaHQnLFxuICAnZmVTcGVjdWxhckxpZ2h0aW5nJyxcbiAgJ2ZlU3BvdExpZ2h0JyxcbiAgJ2ZlVGlsZScsXG4gICdmZVR1cmJ1bGVuY2UnLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBtYXRoTWwgPSBmcmVlemUoW1xuICAnbWF0aCcsXG4gICdtZW5jbG9zZScsXG4gICdtZXJyb3InLFxuICAnbWZlbmNlZCcsXG4gICdtZnJhYycsXG4gICdtZ2x5cGgnLFxuICAnbWknLFxuICAnbWxhYmVsZWR0cicsXG4gICdtbXVsdGlzY3JpcHRzJyxcbiAgJ21uJyxcbiAgJ21vJyxcbiAgJ21vdmVyJyxcbiAgJ21wYWRkZWQnLFxuICAnbXBoYW50b20nLFxuICAnbXJvb3QnLFxuICAnbXJvdycsXG4gICdtcycsXG4gICdtc3BhY2UnLFxuICAnbXNxcnQnLFxuICAnbXN0eWxlJyxcbiAgJ21zdWInLFxuICAnbXN1cCcsXG4gICdtc3Vic3VwJyxcbiAgJ210YWJsZScsXG4gICdtdGQnLFxuICAnbXRleHQnLFxuICAnbXRyJyxcbiAgJ211bmRlcicsXG4gICdtdW5kZXJvdmVyJyxcbl0pO1xuXG5leHBvcnQgY29uc3QgdGV4dCA9IGZyZWV6ZShbJyN0ZXh0J10pO1xuIiwiaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBodG1sID0gZnJlZXplKFtcbiAgJ2FjY2VwdCcsXG4gICdhY3Rpb24nLFxuICAnYWxpZ24nLFxuICAnYWx0JyxcbiAgJ2F1dG9jYXBpdGFsaXplJyxcbiAgJ2F1dG9jb21wbGV0ZScsXG4gICdhdXRvcGljdHVyZWlucGljdHVyZScsXG4gICdhdXRvcGxheScsXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2JnY29sb3InLFxuICAnYm9yZGVyJyxcbiAgJ2NhcHR1cmUnLFxuICAnY2VsbHBhZGRpbmcnLFxuICAnY2VsbHNwYWNpbmcnLFxuICAnY2hlY2tlZCcsXG4gICdjaXRlJyxcbiAgJ2NsYXNzJyxcbiAgJ2NsZWFyJyxcbiAgJ2NvbG9yJyxcbiAgJ2NvbHMnLFxuICAnY29sc3BhbicsXG4gICdjb250cm9scycsXG4gICdjb250cm9sc2xpc3QnLFxuICAnY29vcmRzJyxcbiAgJ2Nyb3Nzb3JpZ2luJyxcbiAgJ2RhdGV0aW1lJyxcbiAgJ2RlY29kaW5nJyxcbiAgJ2RlZmF1bHQnLFxuICAnZGlyJyxcbiAgJ2Rpc2FibGVkJyxcbiAgJ2Rpc2FibGVwaWN0dXJlaW5waWN0dXJlJyxcbiAgJ2Rpc2FibGVyZW1vdGVwbGF5YmFjaycsXG4gICdkb3dubG9hZCcsXG4gICdkcmFnZ2FibGUnLFxuICAnZW5jdHlwZScsXG4gICdlbnRlcmtleWhpbnQnLFxuICAnZmFjZScsXG4gICdmb3InLFxuICAnaGVhZGVycycsXG4gICdoZWlnaHQnLFxuICAnaGlkZGVuJyxcbiAgJ2hpZ2gnLFxuICAnaHJlZicsXG4gICdocmVmbGFuZycsXG4gICdpZCcsXG4gICdpbnB1dG1vZGUnLFxuICAnaW50ZWdyaXR5JyxcbiAgJ2lzbWFwJyxcbiAgJ2tpbmQnLFxuICAnbGFiZWwnLFxuICAnbGFuZycsXG4gICdsaXN0JyxcbiAgJ2xvYWRpbmcnLFxuICAnbG9vcCcsXG4gICdsb3cnLFxuICAnbWF4JyxcbiAgJ21heGxlbmd0aCcsXG4gICdtZWRpYScsXG4gICdtZXRob2QnLFxuICAnbWluJyxcbiAgJ21pbmxlbmd0aCcsXG4gICdtdWx0aXBsZScsXG4gICdtdXRlZCcsXG4gICduYW1lJyxcbiAgJ25vc2hhZGUnLFxuICAnbm92YWxpZGF0ZScsXG4gICdub3dyYXAnLFxuICAnb3BlbicsXG4gICdvcHRpbXVtJyxcbiAgJ3BhdHRlcm4nLFxuICAncGxhY2Vob2xkZXInLFxuICAncGxheXNpbmxpbmUnLFxuICAncG9zdGVyJyxcbiAgJ3ByZWxvYWQnLFxuICAncHViZGF0ZScsXG4gICdyYWRpb2dyb3VwJyxcbiAgJ3JlYWRvbmx5JyxcbiAgJ3JlbCcsXG4gICdyZXF1aXJlZCcsXG4gICdyZXYnLFxuICAncmV2ZXJzZWQnLFxuICAncm9sZScsXG4gICdyb3dzJyxcbiAgJ3Jvd3NwYW4nLFxuICAnc3BlbGxjaGVjaycsXG4gICdzY29wZScsXG4gICdzZWxlY3RlZCcsXG4gICdzaGFwZScsXG4gICdzaXplJyxcbiAgJ3NpemVzJyxcbiAgJ3NwYW4nLFxuICAnc3JjbGFuZycsXG4gICdzdGFydCcsXG4gICdzcmMnLFxuICAnc3Jjc2V0JyxcbiAgJ3N0ZXAnLFxuICAnc3R5bGUnLFxuICAnc3VtbWFyeScsXG4gICd0YWJpbmRleCcsXG4gICd0aXRsZScsXG4gICd0cmFuc2xhdGUnLFxuICAndHlwZScsXG4gICd1c2VtYXAnLFxuICAndmFsaWduJyxcbiAgJ3ZhbHVlJyxcbiAgJ3dpZHRoJyxcbiAgJ3htbG5zJyxcbl0pO1xuXG5leHBvcnQgY29uc3Qgc3ZnID0gZnJlZXplKFtcbiAgJ2FjY2VudC1oZWlnaHQnLFxuICAnYWNjdW11bGF0ZScsXG4gICdhZGRpdGl2ZScsXG4gICdhbGlnbm1lbnQtYmFzZWxpbmUnLFxuICAnYXNjZW50JyxcbiAgJ2F0dHJpYnV0ZW5hbWUnLFxuICAnYXR0cmlidXRldHlwZScsXG4gICdhemltdXRoJyxcbiAgJ2Jhc2VmcmVxdWVuY3knLFxuICAnYmFzZWxpbmUtc2hpZnQnLFxuICAnYmVnaW4nLFxuICAnYmlhcycsXG4gICdieScsXG4gICdjbGFzcycsXG4gICdjbGlwJyxcbiAgJ2NsaXBwYXRodW5pdHMnLFxuICAnY2xpcC1wYXRoJyxcbiAgJ2NsaXAtcnVsZScsXG4gICdjb2xvcicsXG4gICdjb2xvci1pbnRlcnBvbGF0aW9uJyxcbiAgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsXG4gICdjb2xvci1wcm9maWxlJyxcbiAgJ2NvbG9yLXJlbmRlcmluZycsXG4gICdjeCcsXG4gICdjeScsXG4gICdkJyxcbiAgJ2R4JyxcbiAgJ2R5JyxcbiAgJ2RpZmZ1c2Vjb25zdGFudCcsXG4gICdkaXJlY3Rpb24nLFxuICAnZGlzcGxheScsXG4gICdkaXZpc29yJyxcbiAgJ2R1cicsXG4gICdlZGdlbW9kZScsXG4gICdlbGV2YXRpb24nLFxuICAnZW5kJyxcbiAgJ2ZpbGwnLFxuICAnZmlsbC1vcGFjaXR5JyxcbiAgJ2ZpbGwtcnVsZScsXG4gICdmaWx0ZXInLFxuICAnZmlsdGVydW5pdHMnLFxuICAnZmxvb2QtY29sb3InLFxuICAnZmxvb2Qtb3BhY2l0eScsXG4gICdmb250LWZhbWlseScsXG4gICdmb250LXNpemUnLFxuICAnZm9udC1zaXplLWFkanVzdCcsXG4gICdmb250LXN0cmV0Y2gnLFxuICAnZm9udC1zdHlsZScsXG4gICdmb250LXZhcmlhbnQnLFxuICAnZm9udC13ZWlnaHQnLFxuICAnZngnLFxuICAnZnknLFxuICAnZzEnLFxuICAnZzInLFxuICAnZ2x5cGgtbmFtZScsXG4gICdnbHlwaHJlZicsXG4gICdncmFkaWVudHVuaXRzJyxcbiAgJ2dyYWRpZW50dHJhbnNmb3JtJyxcbiAgJ2hlaWdodCcsXG4gICdocmVmJyxcbiAgJ2lkJyxcbiAgJ2ltYWdlLXJlbmRlcmluZycsXG4gICdpbicsXG4gICdpbjInLFxuICAnaycsXG4gICdrMScsXG4gICdrMicsXG4gICdrMycsXG4gICdrNCcsXG4gICdrZXJuaW5nJyxcbiAgJ2tleXBvaW50cycsXG4gICdrZXlzcGxpbmVzJyxcbiAgJ2tleXRpbWVzJyxcbiAgJ2xhbmcnLFxuICAnbGVuZ3RoYWRqdXN0JyxcbiAgJ2xldHRlci1zcGFjaW5nJyxcbiAgJ2tlcm5lbG1hdHJpeCcsXG4gICdrZXJuZWx1bml0bGVuZ3RoJyxcbiAgJ2xpZ2h0aW5nLWNvbG9yJyxcbiAgJ2xvY2FsJyxcbiAgJ21hcmtlci1lbmQnLFxuICAnbWFya2VyLW1pZCcsXG4gICdtYXJrZXItc3RhcnQnLFxuICAnbWFya2VyaGVpZ2h0JyxcbiAgJ21hcmtlcnVuaXRzJyxcbiAgJ21hcmtlcndpZHRoJyxcbiAgJ21hc2tjb250ZW50dW5pdHMnLFxuICAnbWFza3VuaXRzJyxcbiAgJ21heCcsXG4gICdtYXNrJyxcbiAgJ21lZGlhJyxcbiAgJ21ldGhvZCcsXG4gICdtb2RlJyxcbiAgJ21pbicsXG4gICduYW1lJyxcbiAgJ251bW9jdGF2ZXMnLFxuICAnb2Zmc2V0JyxcbiAgJ29wZXJhdG9yJyxcbiAgJ29wYWNpdHknLFxuICAnb3JkZXInLFxuICAnb3JpZW50JyxcbiAgJ29yaWVudGF0aW9uJyxcbiAgJ29yaWdpbicsXG4gICdvdmVyZmxvdycsXG4gICdwYWludC1vcmRlcicsXG4gICdwYXRoJyxcbiAgJ3BhdGhsZW5ndGgnLFxuICAncGF0dGVybmNvbnRlbnR1bml0cycsXG4gICdwYXR0ZXJudHJhbnNmb3JtJyxcbiAgJ3BhdHRlcm51bml0cycsXG4gICdwb2ludHMnLFxuICAncHJlc2VydmVhbHBoYScsXG4gICdwcmVzZXJ2ZWFzcGVjdHJhdGlvJyxcbiAgJ3ByaW1pdGl2ZXVuaXRzJyxcbiAgJ3InLFxuICAncngnLFxuICAncnknLFxuICAncmFkaXVzJyxcbiAgJ3JlZngnLFxuICAncmVmeScsXG4gICdyZXBlYXRjb3VudCcsXG4gICdyZXBlYXRkdXInLFxuICAncmVzdGFydCcsXG4gICdyZXN1bHQnLFxuICAncm90YXRlJyxcbiAgJ3NjYWxlJyxcbiAgJ3NlZWQnLFxuICAnc2hhcGUtcmVuZGVyaW5nJyxcbiAgJ3NwZWN1bGFyY29uc3RhbnQnLFxuICAnc3BlY3VsYXJleHBvbmVudCcsXG4gICdzcHJlYWRtZXRob2QnLFxuICAnc3RhcnRvZmZzZXQnLFxuICAnc3RkZGV2aWF0aW9uJyxcbiAgJ3N0aXRjaHRpbGVzJyxcbiAgJ3N0b3AtY29sb3InLFxuICAnc3RvcC1vcGFjaXR5JyxcbiAgJ3N0cm9rZS1kYXNoYXJyYXknLFxuICAnc3Ryb2tlLWRhc2hvZmZzZXQnLFxuICAnc3Ryb2tlLWxpbmVjYXAnLFxuICAnc3Ryb2tlLWxpbmVqb2luJyxcbiAgJ3N0cm9rZS1taXRlcmxpbWl0JyxcbiAgJ3N0cm9rZS1vcGFjaXR5JyxcbiAgJ3N0cm9rZScsXG4gICdzdHJva2Utd2lkdGgnLFxuICAnc3R5bGUnLFxuICAnc3VyZmFjZXNjYWxlJyxcbiAgJ3N5c3RlbWxhbmd1YWdlJyxcbiAgJ3RhYmluZGV4JyxcbiAgJ3RhcmdldHgnLFxuICAndGFyZ2V0eScsXG4gICd0cmFuc2Zvcm0nLFxuICAndGV4dC1hbmNob3InLFxuICAndGV4dC1kZWNvcmF0aW9uJyxcbiAgJ3RleHQtcmVuZGVyaW5nJyxcbiAgJ3RleHRsZW5ndGgnLFxuICAndHlwZScsXG4gICd1MScsXG4gICd1MicsXG4gICd1bmljb2RlJyxcbiAgJ3ZhbHVlcycsXG4gICd2aWV3Ym94JyxcbiAgJ3Zpc2liaWxpdHknLFxuICAndmVyc2lvbicsXG4gICd2ZXJ0LWFkdi15JyxcbiAgJ3ZlcnQtb3JpZ2luLXgnLFxuICAndmVydC1vcmlnaW4teScsXG4gICd3aWR0aCcsXG4gICd3b3JkLXNwYWNpbmcnLFxuICAnd3JhcCcsXG4gICd3cml0aW5nLW1vZGUnLFxuICAneGNoYW5uZWxzZWxlY3RvcicsXG4gICd5Y2hhbm5lbHNlbGVjdG9yJyxcbiAgJ3gnLFxuICAneDEnLFxuICAneDInLFxuICAneG1sbnMnLFxuICAneScsXG4gICd5MScsXG4gICd5MicsXG4gICd6JyxcbiAgJ3pvb21hbmRwYW4nLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBtYXRoTWwgPSBmcmVlemUoW1xuICAnYWNjZW50JyxcbiAgJ2FjY2VudHVuZGVyJyxcbiAgJ2FsaWduJyxcbiAgJ2JldmVsbGVkJyxcbiAgJ2Nsb3NlJyxcbiAgJ2NvbHVtbnNhbGlnbicsXG4gICdjb2x1bW5saW5lcycsXG4gICdjb2x1bW5zcGFuJyxcbiAgJ2Rlbm9tYWxpZ24nLFxuICAnZGVwdGgnLFxuICAnZGlyJyxcbiAgJ2Rpc3BsYXknLFxuICAnZGlzcGxheXN0eWxlJyxcbiAgJ2VuY29kaW5nJyxcbiAgJ2ZlbmNlJyxcbiAgJ2ZyYW1lJyxcbiAgJ2hlaWdodCcsXG4gICdocmVmJyxcbiAgJ2lkJyxcbiAgJ2xhcmdlb3AnLFxuICAnbGVuZ3RoJyxcbiAgJ2xpbmV0aGlja25lc3MnLFxuICAnbHNwYWNlJyxcbiAgJ2xxdW90ZScsXG4gICdtYXRoYmFja2dyb3VuZCcsXG4gICdtYXRoY29sb3InLFxuICAnbWF0aHNpemUnLFxuICAnbWF0aHZhcmlhbnQnLFxuICAnbWF4c2l6ZScsXG4gICdtaW5zaXplJyxcbiAgJ21vdmFibGVsaW1pdHMnLFxuICAnbm90YXRpb24nLFxuICAnbnVtYWxpZ24nLFxuICAnb3BlbicsXG4gICdyb3dhbGlnbicsXG4gICdyb3dsaW5lcycsXG4gICdyb3dzcGFjaW5nJyxcbiAgJ3Jvd3NwYW4nLFxuICAncnNwYWNlJyxcbiAgJ3JxdW90ZScsXG4gICdzY3JpcHRsZXZlbCcsXG4gICdzY3JpcHRtaW5zaXplJyxcbiAgJ3NjcmlwdHNpemVtdWx0aXBsaWVyJyxcbiAgJ3NlbGVjdGlvbicsXG4gICdzZXBhcmF0b3InLFxuICAnc2VwYXJhdG9ycycsXG4gICdzdHJldGNoeScsXG4gICdzdWJzY3JpcHRzaGlmdCcsXG4gICdzdXBzY3JpcHRzaGlmdCcsXG4gICdzeW1tZXRyaWMnLFxuICAndm9mZnNldCcsXG4gICd3aWR0aCcsXG4gICd4bWxucycsXG5dKTtcblxuZXhwb3J0IGNvbnN0IHhtbCA9IGZyZWV6ZShbXG4gICd4bGluazpocmVmJyxcbiAgJ3htbDppZCcsXG4gICd4bGluazp0aXRsZScsXG4gICd4bWw6c3BhY2UnLFxuICAneG1sbnM6eGxpbmsnLFxuXSk7XG4iLCJpbXBvcnQgeyBzZWFsIH0gZnJvbSAnLi91dGlscyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL2JldHRlci1yZWdleFxuZXhwb3J0IGNvbnN0IE1VU1RBQ0hFX0VYUFIgPSBzZWFsKC9cXHtcXHtbXFxzXFxTXSp8W1xcc1xcU10qXFx9XFx9L2dtKTsgLy8gU3BlY2lmeSB0ZW1wbGF0ZSBkZXRlY3Rpb24gcmVnZXggZm9yIFNBRkVfRk9SX1RFTVBMQVRFUyBtb2RlXG5leHBvcnQgY29uc3QgRVJCX0VYUFIgPSBzZWFsKC88JVtcXHNcXFNdKnxbXFxzXFxTXSolPi9nbSk7XG5leHBvcnQgY29uc3QgREFUQV9BVFRSID0gc2VhbCgvXmRhdGEtW1xcLVxcdy5cXHUwMEI3LVxcdUZGRkZdLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbmV4cG9ydCBjb25zdCBBUklBX0FUVFIgPSBzZWFsKC9eYXJpYS1bXFwtXFx3XSskLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbmV4cG9ydCBjb25zdCBJU19BTExPV0VEX1VSSSA9IHNlYWwoXG4gIC9eKD86KD86KD86ZnxodCl0cHM/fG1haWx0b3x0ZWx8Y2FsbHRvfGNpZHx4bXBwKTp8W15hLXpdfFthLXorLlxcLV0rKD86W15hLXorLlxcLTpdfCQpKS9pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbik7XG5leHBvcnQgY29uc3QgSVNfU0NSSVBUX09SX0RBVEEgPSBzZWFsKC9eKD86XFx3K3NjcmlwdHxkYXRhKTovaSk7XG5leHBvcnQgY29uc3QgQVRUUl9XSElURVNQQUNFID0gc2VhbChcbiAgL1tcXHUwMDAwLVxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMjlcXHUyMDVGXFx1MzAwMF0vZyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbik7XG4iLCJpbXBvcnQgKiBhcyBUQUdTIGZyb20gJy4vdGFncyc7XG5pbXBvcnQgKiBhcyBBVFRSUyBmcm9tICcuL2F0dHJzJztcbmltcG9ydCAqIGFzIEVYUFJFU1NJT05TIGZyb20gJy4vcmVnZXhwJztcbmltcG9ydCB7XG4gIGFkZFRvU2V0LFxuICBjbG9uZSxcbiAgZnJlZXplLFxuICBhcnJheUZvckVhY2gsXG4gIGFycmF5UG9wLFxuICBhcnJheVB1c2gsXG4gIHN0cmluZ01hdGNoLFxuICBzdHJpbmdSZXBsYWNlLFxuICBzdHJpbmdUb0xvd2VyQ2FzZSxcbiAgc3RyaW5nSW5kZXhPZixcbiAgc3RyaW5nVHJpbSxcbiAgcmVnRXhwVGVzdCxcbiAgdHlwZUVycm9yQ3JlYXRlLFxufSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZ2V0R2xvYmFsID0gKCkgPT4gKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5vLW9wIHBvbGljeSBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gKiBEb24ndCBleHBvcnQgdGhpcyBmdW5jdGlvbiBvdXRzaWRlIHRoaXMgbW9kdWxlIVxuICogQHBhcmFtIHs/VHJ1c3RlZFR5cGVQb2xpY3lGYWN0b3J5fSB0cnVzdGVkVHlwZXMgVGhlIHBvbGljeSBmYWN0b3J5LlxuICogQHBhcmFtIHtEb2N1bWVudH0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IG9iamVjdCAodG8gZGV0ZXJtaW5lIHBvbGljeSBuYW1lIHN1ZmZpeClcbiAqIEByZXR1cm4gez9UcnVzdGVkVHlwZVBvbGljeX0gVGhlIHBvbGljeSBjcmVhdGVkIChvciBudWxsLCBpZiBUcnVzdGVkIFR5cGVzXG4gKiBhcmUgbm90IHN1cHBvcnRlZCkuXG4gKi9cbmNvbnN0IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kgPSBmdW5jdGlvbiAodHJ1c3RlZFR5cGVzLCBkb2N1bWVudCkge1xuICBpZiAoXG4gICAgdHlwZW9mIHRydXN0ZWRUeXBlcyAhPT0gJ29iamVjdCcgfHxcbiAgICB0eXBlb2YgdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEFsbG93IHRoZSBjYWxsZXJzIHRvIGNvbnRyb2wgdGhlIHVuaXF1ZSBwb2xpY3kgbmFtZVxuICAvLyBieSBhZGRpbmcgYSBkYXRhLXR0LXBvbGljeS1zdWZmaXggdG8gdGhlIHNjcmlwdCBlbGVtZW50IHdpdGggdGhlIERPTVB1cmlmeS5cbiAgLy8gUG9saWN5IGNyZWF0aW9uIHdpdGggZHVwbGljYXRlIG5hbWVzIHRocm93cyBpbiBUcnVzdGVkIFR5cGVzLlxuICBsZXQgc3VmZml4ID0gbnVsbDtcbiAgY29uc3QgQVRUUl9OQU1FID0gJ2RhdGEtdHQtcG9saWN5LXN1ZmZpeCc7XG4gIGlmIChcbiAgICBkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmXG4gICAgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5oYXNBdHRyaWJ1dGUoQVRUUl9OQU1FKVxuICApIHtcbiAgICBzdWZmaXggPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LmdldEF0dHJpYnV0ZShBVFRSX05BTUUpO1xuICB9XG5cbiAgY29uc3QgcG9saWN5TmFtZSA9ICdkb21wdXJpZnknICsgKHN1ZmZpeCA/ICcjJyArIHN1ZmZpeCA6ICcnKTtcblxuICB0cnkge1xuICAgIHJldHVybiB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KHBvbGljeU5hbWUsIHtcbiAgICAgIGNyZWF0ZUhUTUwoaHRtbCkge1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyBQb2xpY3kgY3JlYXRpb24gZmFpbGVkIChtb3N0IGxpa2VseSBhbm90aGVyIERPTVB1cmlmeSBzY3JpcHQgaGFzXG4gICAgLy8gYWxyZWFkeSBydW4pLiBTa2lwIGNyZWF0aW5nIHRoZSBwb2xpY3ksIGFzIHRoaXMgd2lsbCBvbmx5IGNhdXNlIGVycm9yc1xuICAgIC8vIGlmIFRUIGFyZSBlbmZvcmNlZC5cbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnVHJ1c3RlZFR5cGVzIHBvbGljeSAnICsgcG9saWN5TmFtZSArICcgY291bGQgbm90IGJlIGNyZWF0ZWQuJ1xuICAgICk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTVB1cmlmeSh3aW5kb3cgPSBnZXRHbG9iYWwoKSkge1xuICBjb25zdCBET01QdXJpZnkgPSAocm9vdCkgPT4gY3JlYXRlRE9NUHVyaWZ5KHJvb3QpO1xuXG4gIC8qKlxuICAgKiBWZXJzaW9uIGxhYmVsLCBleHBvc2VkIGZvciBlYXNpZXIgY2hlY2tzXG4gICAqIGlmIERPTVB1cmlmeSBpcyB1cCB0byBkYXRlIG9yIG5vdFxuICAgKi9cbiAgRE9NUHVyaWZ5LnZlcnNpb24gPSBWRVJTSU9OO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBlbGVtZW50cyB0aGF0IERPTVB1cmlmeSByZW1vdmVkIGR1cmluZyBzYW5pdGF0aW9uLlxuICAgKiBFbXB0eSBpZiBub3RoaW5nIHdhcyByZW1vdmVkLlxuICAgKi9cbiAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICBpZiAoIXdpbmRvdyB8fCAhd2luZG93LmRvY3VtZW50IHx8IHdpbmRvdy5kb2N1bWVudC5ub2RlVHlwZSAhPT0gOSkge1xuICAgIC8vIE5vdCBydW5uaW5nIGluIGEgYnJvd3NlciwgcHJvdmlkZSBhIGZhY3RvcnkgZnVuY3Rpb25cbiAgICAvLyBzbyB0aGF0IHlvdSBjYW4gcGFzcyB5b3VyIG93biBXaW5kb3dcbiAgICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBET01QdXJpZnk7XG4gIH1cblxuICBjb25zdCBvcmlnaW5hbERvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4gIGxldCB7IGRvY3VtZW50IH0gPSB3aW5kb3c7XG4gIGNvbnN0IHtcbiAgICBEb2N1bWVudEZyYWdtZW50LFxuICAgIEhUTUxUZW1wbGF0ZUVsZW1lbnQsXG4gICAgTm9kZSxcbiAgICBOb2RlRmlsdGVyLFxuICAgIE5hbWVkTm9kZU1hcCA9IHdpbmRvdy5OYW1lZE5vZGVNYXAgfHwgd2luZG93Lk1vek5hbWVkQXR0ck1hcCxcbiAgICBUZXh0LFxuICAgIENvbW1lbnQsXG4gICAgRE9NUGFyc2VyLFxuICAgIHRydXN0ZWRUeXBlcyxcbiAgfSA9IHdpbmRvdztcblxuICAvLyBBcyBwZXIgaXNzdWUgIzQ3LCB0aGUgd2ViLWNvbXBvbmVudHMgcmVnaXN0cnkgaXMgaW5oZXJpdGVkIGJ5IGFcbiAgLy8gbmV3IGRvY3VtZW50IGNyZWF0ZWQgdmlhIGNyZWF0ZUhUTUxEb2N1bWVudC4gQXMgcGVyIHRoZSBzcGVjXG4gIC8vIChodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvY3VzdG9tLyNjcmVhdGluZy1hbmQtcGFzc2luZy1yZWdpc3RyaWVzKVxuICAvLyBhIG5ldyBlbXB0eSByZWdpc3RyeSBpcyB1c2VkIHdoZW4gY3JlYXRpbmcgYSB0ZW1wbGF0ZSBjb250ZW50cyBvd25lclxuICAvLyBkb2N1bWVudCwgc28gd2UgdXNlIHRoYXQgYXMgb3VyIHBhcmVudCBkb2N1bWVudCB0byBlbnN1cmUgbm90aGluZ1xuICAvLyBpcyBpbmhlcml0ZWQuXG4gIGlmICh0eXBlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBpZiAodGVtcGxhdGUuY29udGVudCAmJiB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgIGRvY3VtZW50ID0gdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRydXN0ZWRUeXBlc1BvbGljeSA9IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3koXG4gICAgdHJ1c3RlZFR5cGVzLFxuICAgIG9yaWdpbmFsRG9jdW1lbnRcbiAgKTtcbiAgY29uc3QgZW1wdHlIVE1MID1cbiAgICB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRVxuICAgICAgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTCgnJylcbiAgICAgIDogJyc7XG5cbiAgY29uc3Qge1xuICAgIGltcGxlbWVudGF0aW9uLFxuICAgIGNyZWF0ZU5vZGVJdGVyYXRvcixcbiAgICBnZXRFbGVtZW50c0J5VGFnTmFtZSxcbiAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50LFxuICB9ID0gZG9jdW1lbnQ7XG4gIGNvbnN0IHsgaW1wb3J0Tm9kZSB9ID0gb3JpZ2luYWxEb2N1bWVudDtcblxuICBsZXQgZG9jdW1lbnRNb2RlID0ge307XG4gIHRyeSB7XG4gICAgZG9jdW1lbnRNb2RlID0gY2xvbmUoZG9jdW1lbnQpLmRvY3VtZW50TW9kZSA/IGRvY3VtZW50LmRvY3VtZW50TW9kZSA6IHt9O1xuICB9IGNhdGNoIChfKSB7fVxuXG4gIGxldCBob29rcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBFeHBvc2Ugd2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgcnVubmluZyB0aGUgZnVsbCBET01QdXJpZnkuXG4gICAqL1xuICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPVxuICAgIGltcGxlbWVudGF0aW9uICYmXG4gICAgdHlwZW9mIGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBkb2N1bWVudE1vZGUgIT09IDk7XG5cbiAgY29uc3Qge1xuICAgIE1VU1RBQ0hFX0VYUFIsXG4gICAgRVJCX0VYUFIsXG4gICAgREFUQV9BVFRSLFxuICAgIEFSSUFfQVRUUixcbiAgICBJU19TQ1JJUFRfT1JfREFUQSxcbiAgICBBVFRSX1dISVRFU1BBQ0UsXG4gIH0gPSBFWFBSRVNTSU9OUztcblxuICBsZXQgeyBJU19BTExPV0VEX1VSSSB9ID0gRVhQUkVTU0lPTlM7XG5cbiAgLyoqXG4gICAqIFdlIGNvbnNpZGVyIHRoZSBlbGVtZW50cyBhbmQgYXR0cmlidXRlcyBiZWxvdyB0byBiZSBzYWZlLiBJZGVhbGx5XG4gICAqIGRvbid0IGFkZCBhbnkgbmV3IG9uZXMgYnV0IGZlZWwgZnJlZSB0byByZW1vdmUgdW53YW50ZWQgb25lcy5cbiAgICovXG5cbiAgLyogYWxsb3dlZCBlbGVtZW50IG5hbWVzICovXG4gIGxldCBBTExPV0VEX1RBR1MgPSBudWxsO1xuICBjb25zdCBERUZBVUxUX0FMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBbXG4gICAgLi4uVEFHUy5odG1sLFxuICAgIC4uLlRBR1Muc3ZnLFxuICAgIC4uLlRBR1Muc3ZnRmlsdGVycyxcbiAgICAuLi5UQUdTLm1hdGhNbCxcbiAgICAuLi5UQUdTLnRleHQsXG4gIF0pO1xuXG4gIC8qIEFsbG93ZWQgYXR0cmlidXRlIG5hbWVzICovXG4gIGxldCBBTExPV0VEX0FUVFIgPSBudWxsO1xuICBjb25zdCBERUZBVUxUX0FMTE9XRURfQVRUUiA9IGFkZFRvU2V0KHt9LCBbXG4gICAgLi4uQVRUUlMuaHRtbCxcbiAgICAuLi5BVFRSUy5zdmcsXG4gICAgLi4uQVRUUlMubWF0aE1sLFxuICAgIC4uLkFUVFJTLnhtbCxcbiAgXSk7XG5cbiAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gdGFncyAob3ZlcnJpZGVzIEFMTE9XRURfVEFHUy9BRERfVEFHUykgKi9cbiAgbGV0IEZPUkJJRF9UQUdTID0gbnVsbDtcblxuICAvKiBFeHBsaWNpdGx5IGZvcmJpZGRlbiBhdHRyaWJ1dGVzIChvdmVycmlkZXMgQUxMT1dFRF9BVFRSL0FERF9BVFRSKSAqL1xuICBsZXQgRk9SQklEX0FUVFIgPSBudWxsO1xuXG4gIC8qIERlY2lkZSBpZiBBUklBIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cbiAgbGV0IEFMTE9XX0FSSUFfQVRUUiA9IHRydWU7XG5cbiAgLyogRGVjaWRlIGlmIGN1c3RvbSBkYXRhIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cbiAgbGV0IEFMTE9XX0RBVEFfQVRUUiA9IHRydWU7XG5cbiAgLyogRGVjaWRlIGlmIHVua25vd24gcHJvdG9jb2xzIGFyZSBva2F5ICovXG4gIGxldCBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGZhbHNlO1xuXG4gIC8qIE91dHB1dCBzaG91bGQgYmUgc2FmZSBmb3IgY29tbW9uIHRlbXBsYXRlIGVuZ2luZXMuXG4gICAqIFRoaXMgbWVhbnMsIERPTVB1cmlmeSByZW1vdmVzIGRhdGEgYXR0cmlidXRlcywgbXVzdGFjaGVzIGFuZCBFUkJcbiAgICovXG4gIGxldCBTQUZFX0ZPUl9URU1QTEFURVMgPSBmYWxzZTtcblxuICAvKiBEZWNpZGUgaWYgZG9jdW1lbnQgd2l0aCA8aHRtbD4uLi4gc2hvdWxkIGJlIHJldHVybmVkICovXG4gIGxldCBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xuXG4gIC8qIFRyYWNrIHdoZXRoZXIgY29uZmlnIGlzIGFscmVhZHkgc2V0IG9uIHRoaXMgaW5zdGFuY2Ugb2YgRE9NUHVyaWZ5LiAqL1xuICBsZXQgU0VUX0NPTkZJRyA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhbGwgZWxlbWVudHMgKGUuZy4gc3R5bGUsIHNjcmlwdCkgbXVzdCBiZSBjaGlsZHJlbiBvZlxuICAgKiBkb2N1bWVudC5ib2R5LiBCeSBkZWZhdWx0LCBicm93c2VycyBtaWdodCBtb3ZlIHRoZW0gdG8gZG9jdW1lbnQuaGVhZCAqL1xuICBsZXQgRk9SQ0VfQk9EWSA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhIERPTSBgSFRNTEJvZHlFbGVtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAqIHN0cmluZyAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKS5cbiAgICogSWYgYFdIT0xFX0RPQ1VNRU5UYCBpcyBlbmFibGVkIGEgYEhUTUxIdG1sRWxlbWVudGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkXG4gICAqL1xuICBsZXQgUkVUVVJOX0RPTSA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhIERPTSBgRG9jdW1lbnRGcmFnbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgKiBzdHJpbmcgIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpICovXG4gIGxldCBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gZmFsc2U7XG5cbiAgLyogSWYgYFJFVFVSTl9ET01gIG9yIGBSRVRVUk5fRE9NX0ZSQUdNRU5UYCBpcyBlbmFibGVkLCBkZWNpZGUgaWYgdGhlIHJldHVybmVkIERPTVxuICAgKiBgTm9kZWAgaXMgaW1wb3J0ZWQgaW50byB0aGUgY3VycmVudCBgRG9jdW1lbnRgLiBJZiB0aGlzIGZsYWcgaXMgbm90IGVuYWJsZWQgdGhlXG4gICAqIGBOb2RlYCB3aWxsIGJlbG9uZyAoaXRzIG93bmVyRG9jdW1lbnQpIHRvIGEgZnJlc2ggYEhUTUxEb2N1bWVudGAsIGNyZWF0ZWQgYnlcbiAgICogRE9NUHVyaWZ5LlxuICAgKlxuICAgKiBUaGlzIGRlZmF1bHRzIHRvIGB0cnVlYCBzdGFydGluZyBET01QdXJpZnkgMi4yLjAuIE5vdGUgdGhhdCBzZXR0aW5nIGl0IHRvIGBmYWxzZWBcbiAgICogbWlnaHQgY2F1c2UgWFNTIGZyb20gYXR0YWNrcyBoaWRkZW4gaW4gY2xvc2VkIHNoYWRvd3Jvb3RzIGluIGNhc2UgdGhlIGJyb3dzZXJcbiAgICogc3VwcG9ydHMgRGVjbGFyYXRpdmUgU2hhZG93OiBET00gaHR0cHM6Ly93ZWIuZGV2L2RlY2xhcmF0aXZlLXNoYWRvdy1kb20vXG4gICAqL1xuICBsZXQgUkVUVVJOX0RPTV9JTVBPUlQgPSB0cnVlO1xuXG4gIC8qIFRyeSB0byByZXR1cm4gYSBUcnVzdGVkIFR5cGUgb2JqZWN0IGluc3RlYWQgb2YgYSBzdHJpbmcsIHJldHVybiBhIHN0cmluZyBpblxuICAgKiBjYXNlIFRydXN0ZWQgVHlwZXMgYXJlIG5vdCBzdXBwb3J0ZWQgICovXG4gIGxldCBSRVRVUk5fVFJVU1RFRF9UWVBFID0gZmFsc2U7XG5cbiAgLyogT3V0cHV0IHNob3VsZCBiZSBmcmVlIGZyb20gRE9NIGNsb2JiZXJpbmcgYXR0YWNrcz8gKi9cbiAgbGV0IFNBTklUSVpFX0RPTSA9IHRydWU7XG5cbiAgLyogS2VlcCBlbGVtZW50IGNvbnRlbnQgd2hlbiByZW1vdmluZyBlbGVtZW50PyAqL1xuICBsZXQgS0VFUF9DT05URU5UID0gdHJ1ZTtcblxuICAvKiBJZiBhIGBOb2RlYCBpcyBwYXNzZWQgdG8gc2FuaXRpemUoKSwgdGhlbiBwZXJmb3JtcyBzYW5pdGl6YXRpb24gaW4tcGxhY2UgaW5zdGVhZFxuICAgKiBvZiBpbXBvcnRpbmcgaXQgaW50byBhIG5ldyBEb2N1bWVudCBhbmQgcmV0dXJuaW5nIGEgc2FuaXRpemVkIGNvcHkgKi9cbiAgbGV0IElOX1BMQUNFID0gZmFsc2U7XG5cbiAgLyogQWxsb3cgdXNhZ2Ugb2YgcHJvZmlsZXMgbGlrZSBodG1sLCBzdmcgYW5kIG1hdGhNbCAqL1xuICBsZXQgVVNFX1BST0ZJTEVTID0ge307XG5cbiAgLyogVGFncyB0byBpZ25vcmUgY29udGVudCBvZiB3aGVuIEtFRVBfQ09OVEVOVCBpcyB0cnVlICovXG4gIGNvbnN0IEZPUkJJRF9DT05URU5UUyA9IGFkZFRvU2V0KHt9LCBbXG4gICAgJ2Fubm90YXRpb24teG1sJyxcbiAgICAnYXVkaW8nLFxuICAgICdjb2xncm91cCcsXG4gICAgJ2Rlc2MnLFxuICAgICdmb3JlaWdub2JqZWN0JyxcbiAgICAnaGVhZCcsXG4gICAgJ2lmcmFtZScsXG4gICAgJ21hdGgnLFxuICAgICdtaScsXG4gICAgJ21uJyxcbiAgICAnbW8nLFxuICAgICdtcycsXG4gICAgJ210ZXh0JyxcbiAgICAnbm9lbWJlZCcsXG4gICAgJ25vZnJhbWVzJyxcbiAgICAncGxhaW50ZXh0JyxcbiAgICAnc2NyaXB0JyxcbiAgICAnc3R5bGUnLFxuICAgICdzdmcnLFxuICAgICd0ZW1wbGF0ZScsXG4gICAgJ3RoZWFkJyxcbiAgICAndGl0bGUnLFxuICAgICd2aWRlbycsXG4gICAgJ3htcCcsXG4gIF0pO1xuXG4gIC8qIFRhZ3MgdGhhdCBhcmUgc2FmZSBmb3IgZGF0YTogVVJJcyAqL1xuICBsZXQgREFUQV9VUklfVEFHUyA9IG51bGw7XG4gIGNvbnN0IERFRkFVTFRfREFUQV9VUklfVEFHUyA9IGFkZFRvU2V0KHt9LCBbXG4gICAgJ2F1ZGlvJyxcbiAgICAndmlkZW8nLFxuICAgICdpbWcnLFxuICAgICdzb3VyY2UnLFxuICAgICdpbWFnZScsXG4gICAgJ3RyYWNrJyxcbiAgXSk7XG5cbiAgLyogQXR0cmlidXRlcyBzYWZlIGZvciB2YWx1ZXMgbGlrZSBcImphdmFzY3JpcHQ6XCIgKi9cbiAgbGV0IFVSSV9TQUZFX0FUVFJJQlVURVMgPSBudWxsO1xuICBjb25zdCBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMgPSBhZGRUb1NldCh7fSwgW1xuICAgICdhbHQnLFxuICAgICdjbGFzcycsXG4gICAgJ2ZvcicsXG4gICAgJ2lkJyxcbiAgICAnbGFiZWwnLFxuICAgICduYW1lJyxcbiAgICAncGF0dGVybicsXG4gICAgJ3BsYWNlaG9sZGVyJyxcbiAgICAnc3VtbWFyeScsXG4gICAgJ3RpdGxlJyxcbiAgICAndmFsdWUnLFxuICAgICdzdHlsZScsXG4gICAgJ3htbG5zJyxcbiAgXSk7XG5cbiAgLyogS2VlcCBhIHJlZmVyZW5jZSB0byBjb25maWcgdG8gcGFzcyB0byBob29rcyAqL1xuICBsZXQgQ09ORklHID0gbnVsbDtcblxuICAvKiBJZGVhbGx5LCBkbyBub3QgdG91Y2ggYW55dGhpbmcgYmVsb3cgdGhpcyBsaW5lICovXG4gIC8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cblxuICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAvKipcbiAgICogX3BhcnNlQ29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gY2ZnIG9wdGlvbmFsIGNvbmZpZyBsaXRlcmFsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBjb25zdCBfcGFyc2VDb25maWcgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgaWYgKENPTkZJRyAmJiBDT05GSUcgPT09IGNmZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHRhbXBlcmluZyAqL1xuICAgIGlmICghY2ZnIHx8IHR5cGVvZiBjZmcgIT09ICdvYmplY3QnKSB7XG4gICAgICBjZmcgPSB7fTtcbiAgICB9XG5cbiAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSBwcm90b3R5cGUgcG9sbHV0aW9uICovXG4gICAgY2ZnID0gY2xvbmUoY2ZnKTtcblxuICAgIC8qIFNldCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cbiAgICBBTExPV0VEX1RBR1MgPVxuICAgICAgJ0FMTE9XRURfVEFHUycgaW4gY2ZnXG4gICAgICAgID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX1RBR1MpXG4gICAgICAgIDogREVGQVVMVF9BTExPV0VEX1RBR1M7XG4gICAgQUxMT1dFRF9BVFRSID1cbiAgICAgICdBTExPV0VEX0FUVFInIGluIGNmZ1xuICAgICAgICA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9BVFRSKVxuICAgICAgICA6IERFRkFVTFRfQUxMT1dFRF9BVFRSO1xuICAgIFVSSV9TQUZFX0FUVFJJQlVURVMgPVxuICAgICAgJ0FERF9VUklfU0FGRV9BVFRSJyBpbiBjZmdcbiAgICAgICAgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMpLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIpXG4gICAgICAgIDogREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTO1xuICAgIERBVEFfVVJJX1RBR1MgPVxuICAgICAgJ0FERF9EQVRBX1VSSV9UQUdTJyBpbiBjZmdcbiAgICAgICAgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX0RBVEFfVVJJX1RBR1MpLCBjZmcuQUREX0RBVEFfVVJJX1RBR1MpXG4gICAgICAgIDogREVGQVVMVF9EQVRBX1VSSV9UQUdTO1xuICAgIEZPUkJJRF9UQUdTID0gJ0ZPUkJJRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9UQUdTKSA6IHt9O1xuICAgIEZPUkJJRF9BVFRSID0gJ0ZPUkJJRF9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9BVFRSKSA6IHt9O1xuICAgIFVTRV9QUk9GSUxFUyA9ICdVU0VfUFJPRklMRVMnIGluIGNmZyA/IGNmZy5VU0VfUFJPRklMRVMgOiBmYWxzZTtcbiAgICBBTExPV19BUklBX0FUVFIgPSBjZmcuQUxMT1dfQVJJQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgQUxMT1dfREFUQV9BVFRSID0gY2ZnLkFMTE9XX0RBVEFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTID0gY2ZnLkFMTE9XX1VOS05PV05fUFJPVE9DT0xTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgU0FGRV9GT1JfVEVNUExBVEVTID0gY2ZnLlNBRkVfRk9SX1RFTVBMQVRFUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIFdIT0xFX0RPQ1VNRU5UID0gY2ZnLldIT0xFX0RPQ1VNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgUkVUVVJOX0RPTSA9IGNmZy5SRVRVUk5fRE9NIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGNmZy5SRVRVUk5fRE9NX0ZSQUdNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgUkVUVVJOX0RPTV9JTVBPUlQgPSBjZmcuUkVUVVJOX0RPTV9JTVBPUlQgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICBSRVRVUk5fVFJVU1RFRF9UWVBFID0gY2ZnLlJFVFVSTl9UUlVTVEVEX1RZUEUgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBGT1JDRV9CT0RZID0gY2ZnLkZPUkNFX0JPRFkgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBTQU5JVElaRV9ET00gPSBjZmcuU0FOSVRJWkVfRE9NICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgS0VFUF9DT05URU5UID0gY2ZnLktFRVBfQ09OVEVOVCAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIElOX1BMQUNFID0gY2ZnLklOX1BMQUNFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgSVNfQUxMT1dFRF9VUkkgPSBjZmcuQUxMT1dFRF9VUklfUkVHRVhQIHx8IElTX0FMTE9XRURfVVJJO1xuICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgIEFMTE9XX0RBVEFfQVRUUiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICBSRVRVUk5fRE9NID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBQYXJzZSBwcm9maWxlIGluZm8gKi9cbiAgICBpZiAoVVNFX1BST0ZJTEVTKSB7XG4gICAgICBBTExPV0VEX1RBR1MgPSBhZGRUb1NldCh7fSwgWy4uLlRBR1MudGV4dF0pO1xuICAgICAgQUxMT1dFRF9BVFRSID0gW107XG4gICAgICBpZiAoVVNFX1BST0ZJTEVTLmh0bWwgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBUQUdTLmh0bWwpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIEFUVFJTLmh0bWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2ZyA9PT0gdHJ1ZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFRBR1Muc3ZnKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBBVFRSUy5zdmcpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIEFUVFJTLnhtbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChVU0VfUFJPRklMRVMuc3ZnRmlsdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFRBR1Muc3ZnRmlsdGVycyk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgQVRUUlMuc3ZnKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBBVFRSUy54bWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTLm1hdGhNbCA9PT0gdHJ1ZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFRBR1MubWF0aE1sKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBBVFRSUy5tYXRoTWwpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIEFUVFJTLnhtbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogTWVyZ2UgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG4gICAgaWYgKGNmZy5BRERfVEFHUykge1xuICAgICAgaWYgKEFMTE9XRURfVEFHUyA9PT0gREVGQVVMVF9BTExPV0VEX1RBR1MpIHtcbiAgICAgICAgQUxMT1dFRF9UQUdTID0gY2xvbmUoQUxMT1dFRF9UQUdTKTtcbiAgICAgIH1cblxuICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBjZmcuQUREX1RBR1MpO1xuICAgIH1cblxuICAgIGlmIChjZmcuQUREX0FUVFIpIHtcbiAgICAgIGlmIChBTExPV0VEX0FUVFIgPT09IERFRkFVTFRfQUxMT1dFRF9BVFRSKSB7XG4gICAgICAgIEFMTE9XRURfQVRUUiA9IGNsb25lKEFMTE9XRURfQVRUUik7XG4gICAgICB9XG5cbiAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgY2ZnLkFERF9BVFRSKTtcbiAgICB9XG5cbiAgICBpZiAoY2ZnLkFERF9VUklfU0FGRV9BVFRSKSB7XG4gICAgICBhZGRUb1NldChVUklfU0FGRV9BVFRSSUJVVEVTLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIpO1xuICAgIH1cblxuICAgIC8qIEFkZCAjdGV4dCBpbiBjYXNlIEtFRVBfQ09OVEVOVCBpcyBzZXQgdG8gdHJ1ZSAqL1xuICAgIGlmIChLRUVQX0NPTlRFTlQpIHtcbiAgICAgIEFMTE9XRURfVEFHU1snI3RleHQnXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyogQWRkIGh0bWwsIGhlYWQgYW5kIGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgV0hPTEVfRE9DVU1FTlQgaXMgdHJ1ZSAqL1xuICAgIGlmIChXSE9MRV9ET0NVTUVOVCkge1xuICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBbJ2h0bWwnLCAnaGVhZCcsICdib2R5J10pO1xuICAgIH1cblxuICAgIC8qIEFkZCB0Ym9keSB0byBBTExPV0VEX1RBR1MgaW4gY2FzZSB0YWJsZXMgYXJlIHBlcm1pdHRlZCwgc2VlICMyODYsICMzNjUgKi9cbiAgICBpZiAoQUxMT1dFRF9UQUdTLnRhYmxlKSB7XG4gICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsndGJvZHknXSk7XG4gICAgICBkZWxldGUgRk9SQklEX1RBR1MudGJvZHk7XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBmdXJ0aGVyIG1hbmlwdWxhdGlvbiBvZiBjb25maWd1cmF0aW9uLlxuICAgIC8vIE5vdCBhdmFpbGFibGUgaW4gSUU4LCBTYWZhcmkgNSwgZXRjLlxuICAgIGlmIChmcmVlemUpIHtcbiAgICAgIGZyZWV6ZShjZmcpO1xuICAgIH1cblxuICAgIENPTkZJRyA9IGNmZztcbiAgfTtcblxuICAvKipcbiAgICogX2ZvcmNlUmVtb3ZlXG4gICAqXG4gICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgKi9cbiAgY29uc3QgX2ZvcmNlUmVtb3ZlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHsgZWxlbWVudDogbm9kZSB9KTtcbiAgICB0cnkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIG5vZGUub3V0ZXJIVE1MID0gZW1wdHlIVE1MO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogX3JlbW92ZUF0dHJpYnV0ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgYW4gQXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBhIERPTSBub2RlXG4gICAqL1xuICBjb25zdCBfcmVtb3ZlQXR0cmlidXRlID0gZnVuY3Rpb24gKG5hbWUsIG5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgIGF0dHJpYnV0ZTogbm9kZS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpLFxuICAgICAgICBmcm9tOiBub2RlLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgIGF0dHJpYnV0ZTogbnVsbCxcbiAgICAgICAgZnJvbTogbm9kZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfaW5pdERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZGlydHkgYSBzdHJpbmcgb2YgZGlydHkgbWFya3VwXG4gICAqIEByZXR1cm4ge0RvY3VtZW50fSBhIERPTSwgZmlsbGVkIHdpdGggdGhlIGRpcnR5IG1hcmt1cFxuICAgKi9cbiAgY29uc3QgX2luaXREb2N1bWVudCA9IGZ1bmN0aW9uIChkaXJ0eSkge1xuICAgIC8qIENyZWF0ZSBhIEhUTUwgZG9jdW1lbnQgKi9cbiAgICBsZXQgZG9jO1xuICAgIGxldCBsZWFkaW5nV2hpdGVzcGFjZTtcblxuICAgIGlmIChGT1JDRV9CT0RZKSB7XG4gICAgICBkaXJ0eSA9ICc8cmVtb3ZlPjwvcmVtb3ZlPicgKyBkaXJ0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogSWYgRk9SQ0VfQk9EWSBpc24ndCB1c2VkLCBsZWFkaW5nIHdoaXRlc3BhY2UgbmVlZHMgdG8gYmUgcHJlc2VydmVkIG1hbnVhbGx5ICovXG4gICAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nTWF0Y2goZGlydHksIC9eW1xcclxcblxcdCBdKy8pO1xuICAgICAgbGVhZGluZ1doaXRlc3BhY2UgPSBtYXRjaGVzICYmIG1hdGNoZXNbMF07XG4gICAgfVxuXG4gICAgY29uc3QgZGlydHlQYXlsb2FkID0gdHJ1c3RlZFR5cGVzUG9saWN5XG4gICAgICA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KVxuICAgICAgOiBkaXJ0eTtcbiAgICAvKiBVc2UgdGhlIERPTVBhcnNlciBBUEkgYnkgZGVmYXVsdCwgZmFsbGJhY2sgbGF0ZXIgaWYgbmVlZHMgYmUgKi9cbiAgICB0cnkge1xuICAgICAgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhkaXJ0eVBheWxvYWQsICd0ZXh0L2h0bWwnKTtcbiAgICB9IGNhdGNoIChfKSB7fVxuXG4gICAgLyogVXNlIGNyZWF0ZUhUTUxEb2N1bWVudCBpbiBjYXNlIERPTVBhcnNlciBpcyBub3QgYXZhaWxhYmxlICovXG4gICAgaWYgKCFkb2MgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGRvYyA9IGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgnJyk7XG4gICAgICBjb25zdCB7IGJvZHkgfSA9IGRvYztcbiAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgYm9keS5vdXRlckhUTUwgPSBkaXJ0eVBheWxvYWQ7XG4gICAgfVxuXG4gICAgaWYgKGRpcnR5ICYmIGxlYWRpbmdXaGl0ZXNwYWNlKSB7XG4gICAgICBkb2MuYm9keS5pbnNlcnRCZWZvcmUoXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxlYWRpbmdXaGl0ZXNwYWNlKSxcbiAgICAgICAgZG9jLmJvZHkuY2hpbGROb2Rlc1swXSB8fCBudWxsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8qIFdvcmsgb24gd2hvbGUgZG9jdW1lbnQgb3IganVzdCBpdHMgYm9keSAqL1xuICAgIHJldHVybiBnZXRFbGVtZW50c0J5VGFnTmFtZS5jYWxsKGRvYywgV0hPTEVfRE9DVU1FTlQgPyAnaHRtbCcgOiAnYm9keScpWzBdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfY3JlYXRlSXRlcmF0b3JcbiAgICpcbiAgICogQHBhcmFtICB7RG9jdW1lbnR9IHJvb3QgZG9jdW1lbnQvZnJhZ21lbnQgdG8gY3JlYXRlIGl0ZXJhdG9yIGZvclxuICAgKiBAcmV0dXJuIHtJdGVyYXRvcn0gaXRlcmF0b3IgaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0IF9jcmVhdGVJdGVyYXRvciA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vZGVJdGVyYXRvci5jYWxsKFxuICAgICAgcm9vdC5vd25lckRvY3VtZW50IHx8IHJvb3QsXG4gICAgICByb290LFxuICAgICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19URVhULFxuICAgICAgKCkgPT4ge1xuICAgICAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogX2lzQ2xvYmJlcmVkXG4gICAqXG4gICAqIEBwYXJhbSAge05vZGV9IGVsbSBlbGVtZW50IHRvIGNoZWNrIGZvciBjbG9iYmVyaW5nIGF0dGFja3NcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjbG9iYmVyZWQsIGZhbHNlIGlmIHNhZmVcbiAgICovXG4gIGNvbnN0IF9pc0Nsb2JiZXJlZCA9IGZ1bmN0aW9uIChlbG0pIHtcbiAgICBpZiAoZWxtIGluc3RhbmNlb2YgVGV4dCB8fCBlbG0gaW5zdGFuY2VvZiBDb21tZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGVsbS5ub2RlTmFtZSAhPT0gJ3N0cmluZycgfHxcbiAgICAgIHR5cGVvZiBlbG0udGV4dENvbnRlbnQgIT09ICdzdHJpbmcnIHx8XG4gICAgICB0eXBlb2YgZWxtLnJlbW92ZUNoaWxkICE9PSAnZnVuY3Rpb24nIHx8XG4gICAgICAhKGVsbS5hdHRyaWJ1dGVzIGluc3RhbmNlb2YgTmFtZWROb2RlTWFwKSB8fFxuICAgICAgdHlwZW9mIGVsbS5yZW1vdmVBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHxcbiAgICAgIHR5cGVvZiBlbG0uc2V0QXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8XG4gICAgICB0eXBlb2YgZWxtLm5hbWVzcGFjZVVSSSAhPT0gJ3N0cmluZydcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogX2lzTm9kZVxuICAgKlxuICAgKiBAcGFyYW0gIHtOb2RlfSBvYmogb2JqZWN0IHRvIGNoZWNrIHdoZXRoZXIgaXQncyBhIERPTSBub2RlXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgb2JqZWN0IGlzIGEgRE9NIG5vZGVcbiAgICovXG4gIGNvbnN0IF9pc05vZGUgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBOb2RlID09PSAnb2JqZWN0J1xuICAgICAgPyBvYmplY3QgaW5zdGFuY2VvZiBOb2RlXG4gICAgICA6IG9iamVjdCAmJlxuICAgICAgICAgIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgdHlwZW9mIG9iamVjdC5ub2RlVHlwZSA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICB0eXBlb2Ygb2JqZWN0Lm5vZGVOYW1lID09PSAnc3RyaW5nJztcbiAgfTtcblxuICAvKipcbiAgICogX2V4ZWN1dGVIb29rXG4gICAqIEV4ZWN1dGUgdXNlciBjb25maWd1cmFibGUgaG9va3NcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50ICBOYW1lIG9mIHRoZSBob29rJ3MgZW50cnkgcG9pbnRcbiAgICogQHBhcmFtICB7Tm9kZX0gY3VycmVudE5vZGUgbm9kZSB0byB3b3JrIG9uIHdpdGggdGhlIGhvb2tcbiAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIGFkZGl0aW9uYWwgaG9vayBwYXJhbWV0ZXJzXG4gICAqL1xuICBjb25zdCBfZXhlY3V0ZUhvb2sgPSBmdW5jdGlvbiAoZW50cnlQb2ludCwgY3VycmVudE5vZGUsIGRhdGEpIHtcbiAgICBpZiAoIWhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXJyYXlGb3JFYWNoKGhvb2tzW2VudHJ5UG9pbnRdLCAoaG9vaykgPT4ge1xuICAgICAgaG9vay5jYWxsKERPTVB1cmlmeSwgY3VycmVudE5vZGUsIGRhdGEsIENPTkZJRyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9zYW5pdGl6ZUVsZW1lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAqIEBwcm90ZWN0IHRleHRDb250ZW50XG4gICAqIEBwcm90ZWN0IHJlbW92ZUNoaWxkXG4gICAqXG4gICAqIEBwYXJhbSAgIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBjaGVjayBmb3IgcGVybWlzc2lvbiB0byBleGlzdFxuICAgKiBAcmV0dXJuICB7Qm9vbGVhbn0gdHJ1ZSBpZiBub2RlIHdhcyBraWxsZWQsIGZhbHNlIGlmIGxlZnQgYWxpdmVcbiAgICovXG4gIGNvbnN0IF9zYW5pdGl6ZUVsZW1lbnRzID0gZnVuY3Rpb24gKGN1cnJlbnROb2RlKSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgLyogQ2hlY2sgaWYgZWxlbWVudCBpcyBjbG9iYmVyZWQgb3IgY2FuIGNsb2JiZXIgKi9cbiAgICBpZiAoX2lzQ2xvYmJlcmVkKGN1cnJlbnROb2RlKSkge1xuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIENoZWNrIGlmIHRhZ25hbWUgY29udGFpbnMgVW5pY29kZSAqL1xuICAgIGlmIChzdHJpbmdNYXRjaChjdXJyZW50Tm9kZS5ub2RlTmFtZSwgL1tcXHUwMDgwLVxcdUZGRkZdLykpIHtcbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBOb3cgbGV0J3MgY2hlY2sgdGhlIGVsZW1lbnQncyB0eXBlIGFuZCBuYW1lICovXG4gICAgY29uc3QgdGFnTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKGN1cnJlbnROb2RlLm5vZGVOYW1lKTtcblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUVsZW1lbnQnLCBjdXJyZW50Tm9kZSwge1xuICAgICAgdGFnTmFtZSxcbiAgICAgIGFsbG93ZWRUYWdzOiBBTExPV0VEX1RBR1MsXG4gICAgfSk7XG5cbiAgICAvKiBUYWtlIGNhcmUgb2YgYW4gbVhTUyBwYXR0ZXJuIHVzaW5nIHAsIGJyIGluc2lkZSBzdmcsIG1hdGggKi9cbiAgICBpZiAoXG4gICAgICAodGFnTmFtZSA9PT0gJ3N2ZycgfHwgdGFnTmFtZSA9PT0gJ21hdGgnKSAmJlxuICAgICAgY3VycmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgncCwgYnIsIGZvcm0sIHRhYmxlJykubGVuZ3RoICE9PSAwXG4gICAgKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogRGV0ZWN0IG1YU1MgYXR0ZW1wdHMgYWJ1c2luZyBuYW1lc3BhY2UgY29uZnVzaW9uICovXG4gICAgaWYgKFxuICAgICAgIV9pc05vZGUoY3VycmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQpICYmXG4gICAgICAoIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudCkgfHxcbiAgICAgICAgIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkpICYmXG4gICAgICByZWdFeHBUZXN0KC88WyEvXFx3XS9nLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpICYmXG4gICAgICByZWdFeHBUZXN0KC88WyEvXFx3XS9nLCBjdXJyZW50Tm9kZS50ZXh0Q29udGVudClcbiAgICApIHtcbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBSZW1vdmUgZWxlbWVudCBpZiBhbnl0aGluZyBmb3JiaWRzIGl0cyBwcmVzZW5jZSAqL1xuICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAvKiBLZWVwIGNvbnRlbnQgZXhjZXB0IGZvciBiYWQtbGlzdGVkIGVsZW1lbnRzICovXG4gICAgICBpZiAoXG4gICAgICAgIEtFRVBfQ09OVEVOVCAmJlxuICAgICAgICAhRk9SQklEX0NPTlRFTlRTW3RhZ05hbWVdICYmXG4gICAgICAgIHR5cGVvZiBjdXJyZW50Tm9kZS5pbnNlcnRBZGphY2VudEhUTUwgPT09ICdmdW5jdGlvbidcbiAgICAgICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGh0bWxUb0luc2VydCA9IGN1cnJlbnROb2RlLmlubmVySFRNTDtcbiAgICAgICAgICBjdXJyZW50Tm9kZS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAnQWZ0ZXJFbmQnLFxuICAgICAgICAgICAgdHJ1c3RlZFR5cGVzUG9saWN5XG4gICAgICAgICAgICAgID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoaHRtbFRvSW5zZXJ0KVxuICAgICAgICAgICAgICA6IGh0bWxUb0luc2VydFxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG5cbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBSZW1vdmUgaW4gY2FzZSBhIG5vc2NyaXB0L25vZW1iZWQgWFNTIGlzIHN1c3BlY3RlZCAqL1xuICAgIGlmIChcbiAgICAgICh0YWdOYW1lID09PSAnbm9zY3JpcHQnIHx8IHRhZ05hbWUgPT09ICdub2VtYmVkJykgJiZcbiAgICAgIHJlZ0V4cFRlc3QoLzxcXC9ubyhzY3JpcHR8ZW1iZWQpL2ksIGN1cnJlbnROb2RlLmlubmVySFRNTClcbiAgICApIHtcbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBTYW5pdGl6ZSBlbGVtZW50IGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMgJiYgY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgIC8qIEdldCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudCAqL1xuICAgICAgY29udGVudCA9IGN1cnJlbnROb2RlLnRleHRDb250ZW50O1xuICAgICAgY29udGVudCA9IHN0cmluZ1JlcGxhY2UoY29udGVudCwgTVVTVEFDSEVfRVhQUiwgJyAnKTtcbiAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIEVSQl9FWFBSLCAnICcpO1xuICAgICAgaWYgKGN1cnJlbnROb2RlLnRleHRDb250ZW50ICE9PSBjb250ZW50KSB7XG4gICAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwgeyBlbGVtZW50OiBjdXJyZW50Tm9kZS5jbG9uZU5vZGUoKSB9KTtcbiAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogX2lzVmFsaWRBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBsY1RhZyBMb3dlcmNhc2UgdGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjTmFtZSBMb3dlcmNhc2UgYXR0cmlidXRlIG5hbWUuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgY29uc3QgX2lzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAobGNUYWcsIGxjTmFtZSwgdmFsdWUpIHtcbiAgICAvKiBNYWtlIHN1cmUgYXR0cmlidXRlIGNhbm5vdCBjbG9iYmVyICovXG4gICAgaWYgKFxuICAgICAgU0FOSVRJWkVfRE9NICYmXG4gICAgICAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJlxuICAgICAgKHZhbHVlIGluIGRvY3VtZW50IHx8IHZhbHVlIGluIGZvcm1FbGVtZW50KVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qIEFsbG93IHZhbGlkIGRhdGEtKiBhdHRyaWJ1dGVzOiBBdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFmdGVyIFwiLVwiXG4gICAgICAgIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kb20uaHRtbCNlbWJlZGRpbmctY3VzdG9tLW5vbi12aXNpYmxlLWRhdGEtd2l0aC10aGUtZGF0YS0qLWF0dHJpYnV0ZXMpXG4gICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgV2UgZG9uJ3QgbmVlZCB0byBjaGVjayB0aGUgdmFsdWU7IGl0J3MgYWx3YXlzIFVSSSBzYWZlLiAqL1xuICAgIGlmIChBTExPV19EQVRBX0FUVFIgJiYgcmVnRXhwVGVzdChEQVRBX0FUVFIsIGxjTmFtZSkpIHtcbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICB9IGVsc2UgaWYgKEFMTE9XX0FSSUFfQVRUUiAmJiByZWdFeHBUZXN0KEFSSUFfQVRUUiwgbGNOYW1lKSkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogT3RoZXJ3aXNlLCBjaGVjayB0aGUgbmFtZSBpcyBwZXJtaXR0ZWQgKi9cbiAgICB9IGVsc2UgaWYgKCFBTExPV0VEX0FUVFJbbGNOYW1lXSB8fCBGT1JCSURfQVRUUltsY05hbWVdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8qIENoZWNrIHZhbHVlIGlzIHNhZmUuIEZpcnN0LCBpcyBhdHRyIGluZXJ0PyBJZiBzbywgaXMgc2FmZSAqL1xuICAgIH0gZWxzZSBpZiAoVVJJX1NBRkVfQVRUUklCVVRFU1tsY05hbWVdKSB7XG4gICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBpcyBzYWZlXG4gICAgICAvKiBDaGVjayBubyBzY3JpcHQsIGRhdGEgb3IgdW5rbm93biBwb3NzaWJseSB1bnNhZmUgVVJJXG4gICAgICAgIHVubGVzcyB3ZSBrbm93IFVSSSB2YWx1ZXMgYXJlIHNhZmUgZm9yIHRoYXQgYXR0cmlidXRlICovXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHJlZ0V4cFRlc3QoSVNfQUxMT1dFRF9VUkksIHN0cmluZ1JlcGxhY2UodmFsdWUsIEFUVFJfV0hJVEVTUEFDRSwgJycpKVxuICAgICkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogS2VlcCBpbWFnZSBkYXRhIFVSSXMgYWxpdmUgaWYgc3JjL3hsaW5rOmhyZWYgaXMgYWxsb3dlZCAqL1xuICAgICAgLyogRnVydGhlciBwcmV2ZW50IGdhZGdldCBYU1MgZm9yIGR5bmFtaWNhbGx5IGJ1aWx0IHNjcmlwdCB0YWdzICovXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChsY05hbWUgPT09ICdzcmMnIHx8IGxjTmFtZSA9PT0gJ3hsaW5rOmhyZWYnIHx8IGxjTmFtZSA9PT0gJ2hyZWYnKSAmJlxuICAgICAgbGNUYWcgIT09ICdzY3JpcHQnICYmXG4gICAgICBzdHJpbmdJbmRleE9mKHZhbHVlLCAnZGF0YTonKSA9PT0gMCAmJlxuICAgICAgREFUQV9VUklfVEFHU1tsY1RhZ11cbiAgICApIHtcbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgIC8qIEFsbG93IHVua25vd24gcHJvdG9jb2xzOiBUaGlzIHByb3ZpZGVzIHN1cHBvcnQgZm9yIGxpbmtzIHRoYXRcbiAgICAgICAgYXJlIGhhbmRsZWQgYnkgcHJvdG9jb2wgaGFuZGxlcnMgd2hpY2ggbWF5IGJlIHVua25vd24gYWhlYWQgb2ZcbiAgICAgICAgdGltZSwgZS5nLiBmYjosIHNwb3RpZnk6ICovXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTICYmXG4gICAgICAhcmVnRXhwVGVzdChJU19TQ1JJUFRfT1JfREFUQSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFLCAnJykpXG4gICAgKSB7XG4gICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBpcyBzYWZlXG4gICAgICAvKiBDaGVjayBmb3IgYmluYXJ5IGF0dHJpYnV0ZXMgKi9cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZWdhdGVkLWNvbmRpdGlvblxuICAgIH0gZWxzZSBpZiAoIXZhbHVlKSB7XG4gICAgICAvLyBCaW5hcnkgYXR0cmlidXRlcyBhcmUgc2FmZSBhdCB0aGlzIHBvaW50XG4gICAgICAvKiBBbnl0aGluZyBlbHNlLCBwcmVzdW1lIHVuc2FmZSwgZG8gbm90IGFkZCBpdCBiYWNrICovXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogX3Nhbml0aXplQXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdCBhdHRyaWJ1dGVzXG4gICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAqIEBwcm90ZWN0IHJlbW92ZUF0dHJpYnV0ZVxuICAgKiBAcHJvdGVjdCBzZXRBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7Tm9kZX0gY3VycmVudE5vZGUgdG8gc2FuaXRpemVcbiAgICovXG4gIGNvbnN0IF9zYW5pdGl6ZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoY3VycmVudE5vZGUpIHtcbiAgICBsZXQgYXR0cjtcbiAgICBsZXQgdmFsdWU7XG4gICAgbGV0IGxjTmFtZTtcbiAgICBsZXQgbDtcbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IGN1cnJlbnROb2RlO1xuXG4gICAgLyogQ2hlY2sgaWYgd2UgaGF2ZSBhdHRyaWJ1dGVzOyBpZiBub3Qgd2UgbWlnaHQgaGF2ZSBhIHRleHQgbm9kZSAqL1xuICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhvb2tFdmVudCA9IHtcbiAgICAgIGF0dHJOYW1lOiAnJyxcbiAgICAgIGF0dHJWYWx1ZTogJycsXG4gICAgICBrZWVwQXR0cjogdHJ1ZSxcbiAgICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiBBTExPV0VEX0FUVFIsXG4gICAgfTtcbiAgICBsID0gYXR0cmlidXRlcy5sZW5ndGg7XG5cbiAgICAvKiBHbyBiYWNrd2FyZHMgb3ZlciBhbGwgYXR0cmlidXRlczsgc2FmZWx5IHJlbW92ZSBiYWQgb25lcyAqL1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgY29uc3QgeyBuYW1lLCBuYW1lc3BhY2VVUkkgfSA9IGF0dHI7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RyaW0oYXR0ci52YWx1ZSk7XG4gICAgICBsY05hbWUgPSBzdHJpbmdUb0xvd2VyQ2FzZShuYW1lKTtcblxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgaG9va0V2ZW50LmF0dHJOYW1lID0gbGNOYW1lO1xuICAgICAgaG9va0V2ZW50LmF0dHJWYWx1ZSA9IHZhbHVlO1xuICAgICAgaG9va0V2ZW50LmtlZXBBdHRyID0gdHJ1ZTtcbiAgICAgIGhvb2tFdmVudC5mb3JjZUtlZXBBdHRyID0gdW5kZWZpbmVkOyAvLyBBbGxvd3MgZGV2ZWxvcGVycyB0byBzZWUgdGhpcyBpcyBhIHByb3BlcnR5IHRoZXkgY2FuIHNldFxuICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVBdHRyaWJ1dGUnLCBjdXJyZW50Tm9kZSwgaG9va0V2ZW50KTtcbiAgICAgIHZhbHVlID0gaG9va0V2ZW50LmF0dHJWYWx1ZTtcbiAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuICAgICAgaWYgKGhvb2tFdmVudC5mb3JjZUtlZXBBdHRyKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBSZW1vdmUgYXR0cmlidXRlICovXG4gICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTtcblxuICAgICAgLyogRGlkIHRoZSBob29rcyBhcHByb3ZlIG9mIHRoZSBhdHRyaWJ1dGU/ICovXG4gICAgICBpZiAoIWhvb2tFdmVudC5rZWVwQXR0cikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogV29yayBhcm91bmQgYSBzZWN1cml0eSBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXG4gICAgICBpZiAocmVnRXhwVGVzdCgvXFwvPi9pLCB2YWx1ZSkpIHtcbiAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBTYW5pdGl6ZSBhdHRyaWJ1dGUgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgTVVTVEFDSEVfRVhQUiwgJyAnKTtcbiAgICAgICAgdmFsdWUgPSBzdHJpbmdSZXBsYWNlKHZhbHVlLCBFUkJfRVhQUiwgJyAnKTtcbiAgICAgIH1cblxuICAgICAgLyogSXMgYHZhbHVlYCB2YWxpZCBmb3IgdGhpcyBhdHRyaWJ1dGU/ICovXG4gICAgICBjb25zdCBsY1RhZyA9IGN1cnJlbnROb2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIV9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogSGFuZGxlIGludmFsaWQgZGF0YS0qIGF0dHJpYnV0ZSBzZXQgYnkgdHJ5LWNhdGNoaW5nIGl0ICovXG4gICAgICB0cnkge1xuICAgICAgICBpZiAobmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyogRmFsbGJhY2sgdG8gc2V0QXR0cmlidXRlKCkgZm9yIGJyb3dzZXItdW5yZWNvZ25pemVkIG5hbWVzcGFjZXMgZS5nLiBcIngtc2NoZW1hXCIuICovXG4gICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFycmF5UG9wKERPTVB1cmlmeS5yZW1vdmVkKTtcbiAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgfVxuXG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9zYW5pdGl6ZVNoYWRvd0RPTVxuICAgKlxuICAgKiBAcGFyYW0gIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnbWVudCB0byBpdGVyYXRlIG92ZXIgcmVjdXJzaXZlbHlcbiAgICovXG4gIGNvbnN0IF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIChmcmFnbWVudCkge1xuICAgIGxldCBzaGFkb3dOb2RlO1xuICAgIGNvbnN0IHNoYWRvd0l0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKGZyYWdtZW50KTtcblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuXG4gICAgd2hpbGUgKChzaGFkb3dOb2RlID0gc2hhZG93SXRlcmF0b3IubmV4dE5vZGUoKSkpIHtcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplU2hhZG93Tm9kZScsIHNoYWRvd05vZGUsIG51bGwpO1xuXG4gICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKHNoYWRvd05vZGUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBEZWVwIHNoYWRvdyBET00gZGV0ZWN0ZWQgKi9cbiAgICAgIGlmIChzaGFkb3dOb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShzaGFkb3dOb2RlLmNvbnRlbnQpO1xuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cbiAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoc2hhZG93Tm9kZSk7XG4gICAgfVxuXG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcbiAgfTtcblxuICAvKipcbiAgICogU2FuaXRpemVcbiAgICogUHVibGljIG1ldGhvZCBwcm92aWRpbmcgY29yZSBzYW5pdGF0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8Tm9kZX0gZGlydHkgc3RyaW5nIG9yIERPTSBub2RlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgRE9NUHVyaWZ5LnNhbml0aXplID0gZnVuY3Rpb24gKGRpcnR5LCBjZmcpIHtcbiAgICBsZXQgYm9keTtcbiAgICBsZXQgaW1wb3J0ZWROb2RlO1xuICAgIGxldCBjdXJyZW50Tm9kZTtcbiAgICBsZXQgb2xkTm9kZTtcbiAgICBsZXQgcmV0dXJuTm9kZTtcbiAgICAvKiBNYWtlIHN1cmUgd2UgaGF2ZSBhIHN0cmluZyB0byBzYW5pdGl6ZS5cbiAgICAgIERPIE5PVCByZXR1cm4gZWFybHksIGFzIHRoaXMgd2lsbCByZXR1cm4gdGhlIHdyb25nIHR5cGUgaWZcbiAgICAgIHRoZSB1c2VyIGhhcyByZXF1ZXN0ZWQgYSBET00gb2JqZWN0IHJhdGhlciB0aGFuIGEgc3RyaW5nICovXG4gICAgaWYgKCFkaXJ0eSkge1xuICAgICAgZGlydHkgPSAnPCEtLT4nO1xuICAgIH1cblxuICAgIC8qIFN0cmluZ2lmeSwgaW4gY2FzZSBkaXJ0eSBpcyBhbiBvYmplY3QgKi9cbiAgICBpZiAodHlwZW9mIGRpcnR5ICE9PSAnc3RyaW5nJyAmJiAhX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZWdhdGVkLWNvbmRpdGlvblxuICAgICAgaWYgKHR5cGVvZiBkaXJ0eS50b1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ3RvU3RyaW5nIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXJ0eSA9IGRpcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCdkaXJ0eSBpcyBub3QgYSBzdHJpbmcsIGFib3J0aW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBDaGVjayB3ZSBjYW4gcnVuLiBPdGhlcndpc2UgZmFsbCBiYWNrIG9yIGlnbm9yZSAqL1xuICAgIGlmICghRE9NUHVyaWZ5LmlzU3VwcG9ydGVkKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnb2JqZWN0JyB8fFxuICAgICAgICB0eXBlb2Ygd2luZG93LnRvU3RhdGljSFRNTCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9pc05vZGUoZGlydHkpKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkub3V0ZXJIVE1MKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlydHk7XG4gICAgfVxuXG4gICAgLyogQXNzaWduIGNvbmZpZyB2YXJzICovXG4gICAgaWYgKCFTRVRfQ09ORklHKSB7XG4gICAgICBfcGFyc2VDb25maWcoY2ZnKTtcbiAgICB9XG5cbiAgICAvKiBDbGVhbiB1cCByZW1vdmVkIGVsZW1lbnRzICovXG4gICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgIC8qIENoZWNrIGlmIGRpcnR5IGlzIGNvcnJlY3RseSB0eXBlZCBmb3IgSU5fUExBQ0UgKi9cbiAgICBpZiAodHlwZW9mIGRpcnR5ID09PSAnc3RyaW5nJykge1xuICAgICAgSU5fUExBQ0UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgIC8qIE5vIHNwZWNpYWwgaGFuZGxpbmcgbmVjZXNzYXJ5IGZvciBpbi1wbGFjZSBzYW5pdGl6YXRpb24gKi9cbiAgICB9IGVsc2UgaWYgKGRpcnR5IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgLyogSWYgZGlydHkgaXMgYSBET00gZWxlbWVudCwgYXBwZW5kIHRvIGFuIGVtcHR5IGRvY3VtZW50IHRvIGF2b2lkXG4gICAgICAgICBlbGVtZW50cyBiZWluZyBzdHJpcHBlZCBieSB0aGUgcGFyc2VyICovXG4gICAgICBib2R5ID0gX2luaXREb2N1bWVudCgnPCEtLS0tPicpO1xuICAgICAgaW1wb3J0ZWROb2RlID0gYm9keS5vd25lckRvY3VtZW50LmltcG9ydE5vZGUoZGlydHksIHRydWUpO1xuICAgICAgaWYgKGltcG9ydGVkTm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBpbXBvcnRlZE5vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAvKiBOb2RlIGlzIGFscmVhZHkgYSBib2R5LCB1c2UgYXMgaXMgKi9cbiAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgIH0gZWxzZSBpZiAoaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1ub2RlLWFwcGVuZFxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGltcG9ydGVkTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIEV4aXQgZGlyZWN0bHkgaWYgd2UgaGF2ZSBub3RoaW5nIHRvIGRvICovXG4gICAgICBpZiAoXG4gICAgICAgICFSRVRVUk5fRE9NICYmXG4gICAgICAgICFTQUZFX0ZPUl9URU1QTEFURVMgJiZcbiAgICAgICAgIVdIT0xFX0RPQ1VNRU5UICYmXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xuICAgICAgICBkaXJ0eS5pbmRleE9mKCc8JykgPT09IC0xXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlc1BvbGljeSAmJiBSRVRVUk5fVFJVU1RFRF9UWVBFXG4gICAgICAgICAgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSlcbiAgICAgICAgICA6IGRpcnR5O1xuICAgICAgfVxuXG4gICAgICAvKiBJbml0aWFsaXplIHRoZSBkb2N1bWVudCB0byB3b3JrIG9uICovXG4gICAgICBib2R5ID0gX2luaXREb2N1bWVudChkaXJ0eSk7XG5cbiAgICAgIC8qIENoZWNrIHdlIGhhdmUgYSBET00gbm9kZSBmcm9tIHRoZSBkYXRhICovXG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgcmV0dXJuIFJFVFVSTl9ET00gPyBudWxsIDogZW1wdHlIVE1MO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFJlbW92ZSBmaXJzdCBlbGVtZW50IG5vZGUgKG91cnMpIGlmIEZPUkNFX0JPRFkgaXMgc2V0ICovXG4gICAgaWYgKGJvZHkgJiYgRk9SQ0VfQk9EWSkge1xuICAgICAgX2ZvcmNlUmVtb3ZlKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLyogR2V0IG5vZGUgaXRlcmF0b3IgKi9cbiAgICBjb25zdCBub2RlSXRlcmF0b3IgPSBfY3JlYXRlSXRlcmF0b3IoSU5fUExBQ0UgPyBkaXJ0eSA6IGJvZHkpO1xuXG4gICAgLyogTm93IHN0YXJ0IGl0ZXJhdGluZyBvdmVyIHRoZSBjcmVhdGVkIGRvY3VtZW50ICovXG4gICAgd2hpbGUgKChjdXJyZW50Tm9kZSA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSkge1xuICAgICAgLyogRml4IElFJ3Mgc3RyYW5nZSBiZWhhdmlvciB3aXRoIG1hbmlwdWxhdGVkIHRleHROb2RlcyAjODkgKi9cbiAgICAgIGlmIChjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMyAmJiBjdXJyZW50Tm9kZSA9PT0gb2xkTm9kZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgIGlmIChfc2FuaXRpemVFbGVtZW50cyhjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFNoYWRvdyBET00gZGV0ZWN0ZWQsIHNhbml0aXplIGl0ICovXG4gICAgICBpZiAoY3VycmVudE5vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKGN1cnJlbnROb2RlLmNvbnRlbnQpO1xuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cbiAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpO1xuXG4gICAgICBvbGROb2RlID0gY3VycmVudE5vZGU7XG4gICAgfVxuXG4gICAgb2xkTm9kZSA9IG51bGw7XG5cbiAgICAvKiBJZiB3ZSBzYW5pdGl6ZWQgYGRpcnR5YCBpbi1wbGFjZSwgcmV0dXJuIGl0LiAqL1xuICAgIGlmIChJTl9QTEFDRSkge1xuICAgICAgcmV0dXJuIGRpcnR5O1xuICAgIH1cblxuICAgIC8qIFJldHVybiBzYW5pdGl6ZWQgc3RyaW5nIG9yIERPTSAqL1xuICAgIGlmIChSRVRVUk5fRE9NKSB7XG4gICAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICByZXR1cm5Ob2RlID0gY3JlYXRlRG9jdW1lbnRGcmFnbWVudC5jYWxsKGJvZHkub3duZXJEb2N1bWVudCk7XG5cbiAgICAgICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1ub2RlLWFwcGVuZFxuICAgICAgICAgIHJldHVybk5vZGUuYXBwZW5kQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuTm9kZSA9IGJvZHk7XG4gICAgICB9XG5cbiAgICAgIGlmIChSRVRVUk5fRE9NX0lNUE9SVCkge1xuICAgICAgICAvKlxuICAgICAgICAgIEFkb3B0Tm9kZSgpIGlzIG5vdCB1c2VkIGJlY2F1c2UgaW50ZXJuYWwgc3RhdGUgaXMgbm90IHJlc2V0XG4gICAgICAgICAgKGUuZy4gdGhlIHBhc3QgbmFtZXMgbWFwIG9mIGEgSFRNTEZvcm1FbGVtZW50KSwgdGhpcyBpcyBzYWZlXG4gICAgICAgICAgaW4gdGhlb3J5IGJ1dCB3ZSB3b3VsZCByYXRoZXIgbm90IHJpc2sgYW5vdGhlciBhdHRhY2sgdmVjdG9yLlxuICAgICAgICAgIFRoZSBzdGF0ZSB0aGF0IGlzIGNsb25lZCBieSBpbXBvcnROb2RlKCkgaXMgZXhwbGljaXRseSBkZWZpbmVkXG4gICAgICAgICAgYnkgdGhlIHNwZWNzLlxuICAgICAgICAqL1xuICAgICAgICByZXR1cm5Ob2RlID0gaW1wb3J0Tm9kZS5jYWxsKG9yaWdpbmFsRG9jdW1lbnQsIHJldHVybk5vZGUsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0dXJuTm9kZTtcbiAgICB9XG5cbiAgICBsZXQgc2VyaWFsaXplZEhUTUwgPSBXSE9MRV9ET0NVTUVOVCA/IGJvZHkub3V0ZXJIVE1MIDogYm9keS5pbm5lckhUTUw7XG5cbiAgICAvKiBTYW5pdGl6ZSBmaW5hbCBzdHJpbmcgdGVtcGxhdGUtc2FmZSAqL1xuICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgTVVTVEFDSEVfRVhQUiwgJyAnKTtcbiAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgRVJCX0VYUFIsICcgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydXN0ZWRUeXBlc1BvbGljeSAmJiBSRVRVUk5fVFJVU1RFRF9UWVBFXG4gICAgICA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKHNlcmlhbGl6ZWRIVE1MKVxuICAgICAgOiBzZXJpYWxpemVkSFRNTDtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIG1ldGhvZCB0byBzZXQgdGhlIGNvbmZpZ3VyYXRpb24gb25jZVxuICAgKiBzZXRDb25maWdcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGNmZyBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKi9cbiAgRE9NUHVyaWZ5LnNldENvbmZpZyA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICBfcGFyc2VDb25maWcoY2ZnKTtcbiAgICBTRVRfQ09ORklHID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgdGhlIGNvbmZpZ3VyYXRpb25cbiAgICogY2xlYXJDb25maWdcbiAgICpcbiAgICovXG4gIERPTVB1cmlmeS5jbGVhckNvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBDT05GSUcgPSBudWxsO1xuICAgIFNFVF9DT05GSUcgPSBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhbiBhdHRyaWJ1dGUgdmFsdWUgaXMgdmFsaWQuXG4gICAqIFVzZXMgbGFzdCBzZXQgY29uZmlnLCBpZiBhbnkuIE90aGVyd2lzZSwgdXNlcyBjb25maWcgZGVmYXVsdHMuXG4gICAqIGlzVmFsaWRBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0YWcgVGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGF0dHIgQXR0cmlidXRlIG5hbWUuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gT3RoZXJ3aXNlLCByZXR1cm5zIGZhbHNlLlxuICAgKi9cbiAgRE9NUHVyaWZ5LmlzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAodGFnLCBhdHRyLCB2YWx1ZSkge1xuICAgIC8qIEluaXRpYWxpemUgc2hhcmVkIGNvbmZpZyB2YXJzIGlmIG5lY2Vzc2FyeS4gKi9cbiAgICBpZiAoIUNPTkZJRykge1xuICAgICAgX3BhcnNlQ29uZmlnKHt9KTtcbiAgICB9XG5cbiAgICBjb25zdCBsY1RhZyA9IHN0cmluZ1RvTG93ZXJDYXNlKHRhZyk7XG4gICAgY29uc3QgbGNOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UoYXR0cik7XG4gICAgcmV0dXJuIF9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkSG9va1xuICAgKiBQdWJsaWMgbWV0aG9kIHRvIGFkZCBET01QdXJpZnkgaG9va3NcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIGFkZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rRnVuY3Rpb24gZnVuY3Rpb24gdG8gZXhlY3V0ZVxuICAgKi9cbiAgRE9NUHVyaWZ5LmFkZEhvb2sgPSBmdW5jdGlvbiAoZW50cnlQb2ludCwgaG9va0Z1bmN0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBob29rRnVuY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBob29rc1tlbnRyeVBvaW50XSA9IGhvb2tzW2VudHJ5UG9pbnRdIHx8IFtdO1xuICAgIGFycmF5UHVzaChob29rc1tlbnRyeVBvaW50XSwgaG9va0Z1bmN0aW9uKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlSG9va1xuICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhIERPTVB1cmlmeSBob29rIGF0IGEgZ2l2ZW4gZW50cnlQb2ludFxuICAgKiAocG9wcyBpdCBmcm9tIHRoZSBzdGFjayBvZiBob29rcyBpZiBtb3JlIGFyZSBwcmVzZW50KVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2sgdG8gcmVtb3ZlXG4gICAqL1xuICBET01QdXJpZnkucmVtb3ZlSG9vayA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgaWYgKGhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICBhcnJheVBvcChob29rc1tlbnRyeVBvaW50XSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVIb29rc1xuICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhbGwgRE9NUHVyaWZ5IGhvb2tzIGF0IGEgZ2l2ZW4gZW50cnlQb2ludFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rcyB0byByZW1vdmVcbiAgICovXG4gIERPTVB1cmlmeS5yZW1vdmVIb29rcyA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgaWYgKGhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICBob29rc1tlbnRyeVBvaW50XSA9IFtdO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlQWxsSG9va3NcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rc1xuICAgKlxuICAgKi9cbiAgRE9NUHVyaWZ5LnJlbW92ZUFsbEhvb2tzID0gZnVuY3Rpb24gKCkge1xuICAgIGhvb2tzID0ge307XG4gIH07XG5cbiAgcmV0dXJuIERPTVB1cmlmeTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRE9NUHVyaWZ5KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9