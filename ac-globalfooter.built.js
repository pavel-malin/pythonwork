/**
 * Created by root on 31.03.17.
 */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @copyright 2015 Apple Inc. All rights reserved.
 */
'use strict';

require('@marcom/ac-polyfills/Array/prototype.slice');
require('@marcom/ac-polyfills/Element/prototype.classList');

/** @ignore */
var classNameAdd = require('./className/add');

/**
 * @name module:ac-classlist.add
 *
 * @function
 *
 * @desc Adds one or more tokens to an Element's classList.
 *       Accounts for browsers without classList support.
 *
 * @param {Element} el
 *        The target Element
 *
 * @param {...String} token
 *        One or more classes to be added
 */
module.exports = function add() {
	var tokens = Array.prototype.slice.call(arguments);
	var el = tokens.shift(tokens);
	var i;

	if (el.classList && el.classList.add) {
		el.classList.add.apply(el.classList, tokens);
		return;
	}

	for (i = 0; i < tokens.length; i++) {
		classNameAdd(el, tokens[i]);
	}
};

// ac-classlist@1.3.0

},{"./className/add":2,"@marcom/ac-polyfills/Array/prototype.slice":13,"@marcom/ac-polyfills/Element/prototype.classList":14}],2:[function(require,module,exports){
/**
 * @copyright 2015 Apple Inc. All rights reserved.
 */
'use strict';

/** @ignore */
var classNameContains = require('./contains');

/**
 * @name module:ac-classlist/className.add
 *
 * @function
 *
 * @desc Adds a token to an Element's className
 *
 * @param {Element} el
 *        The target Element
 *
 * @param {String} token
 *        The class to be added
 */
module.exports = function add(el, token) {
	if (!classNameContains(el, token)) {
		el.className += ' ' + token;
	}
};

// ac-classlist@1.3.0

},{"./contains":3}],3:[function(require,module,exports){
/**
 * @copyright 2015 Apple Inc. All rights reserved.
 */
'use strict';

/** @ignore */
var getTokenRegExp = require('./getTokenRegExp');

/**
 * @name module:ac-classlist/className.contains
 *
 * @function
 *
 * @desc Checks if an Element's className contains a specific token
 *
 * @param {Element} el
 *        The target Element
 *
 * @param {String} token
 *        The token to be checked
 *
 * @returns {Boolean} `true` if className contains token, otherwise `false`
 */
module.exports = function classNameAdd(el, token) {
	return getTokenRegExp(token).test(el.className);
};


// ac-classlist@1.3.0

},{"./getTokenRegExp":4}],4:[function(require,module,exports){
/**
 * @copyright 2014 Apple Inc. All rights reserved.
 */
'use strict';

/**
 * @name getTokenRegExp
 * @memberOf module:ac-classlist/className
 *
 * @function
 * @private
 *
 * @desc Creates a RegExp that matches the token within a className.
 *
 * @returns {RegExp}
 */
module.exports = function getTokenRegExp(token) {
	return new RegExp('(\\s|^)' + token + '(\\s|$)');
};

// ac-classlist@1.3.0

},{}],5:[function(require,module,exports){
/**
 * @copyright 2015 Apple Inc. All rights reserved.
 */
'use strict';

/** @ignore */
var classNameContains = require('./contains');
var getTokenRegExp = require('./getTokenRegExp');

/**
 * @name module:ac-classlist/className.remove
 *
 * @function
 *
 * @desc Removes a token from an Element's className
 *
 * @param {Element} el
 *        The target Element
 *
 * @param {String} token
 *        The class to be removed
 */
module.exports = function remove(el, token) {
	if (classNameContains(el, token)) {
		el.className = el.className.replace(getTokenRegExp(token), '$1').trim();
	}
};


// ac-classlist@1.3.0

},{"./contains":3,"./getTokenRegExp":4}],6:[function(require,module,exports){
/**
 * @copyright 2015 Apple Inc. All rights reserved.
 */
'use strict';

require('@marcom/ac-polyfills/Array/prototype.slice');
require('@marcom/ac-polyfills/Element/prototype.classList');

/** @ignore */
var classNameRemove = require('./className/remove');

/**
 * @name module:ac-classlist.remove
 *
 * @function
 *
 * @desc Remove one or more tokens from an Element's classList.
 *       Accounts for browsers without classList support.
 *
 * @param {Element} el
 *        The target Element
 *
 * @param {...String} token
 *        One or more classes to be removed
 */
module.exports = function remove() {
	var tokens = Array.prototype.slice.call(arguments);
	var el = tokens.shift(tokens);
	var i;

	if (el.classList && el.classList.remove) {
		el.classList.remove.apply(el.classList, tokens);
		return;
	}

	for (i = 0; i < tokens.length; i++) {
		classNameRemove(el, tokens[i]);
	}
};

// ac-classlist@1.3.0

},{"./className/remove":5,"@marcom/ac-polyfills/Array/prototype.slice":13,"@marcom/ac-polyfills/Element/prototype.classList":14}],7:[function(require,module,exports){
/**
 * @copyright 2015 Apple Inc. All rights reserved.
 */
'use strict';

/** @ignore */
var defaults = require('@marcom/ac-object/defaults');
var CheckboxMenu = require('./internal/CheckboxMenu');

var DEFAULT_OPTIONS = {
	className: 'footer'
};

function Footer(el, options) {
	options = defaults(DEFAULT_OPTIONS, options || {});

	this.el = el;

	this._selectors = {
		wrapper: '.' + options.className,
		directory: options.directorySelector || '.' + options.className + '-directory',
		mini: options.miniSelector ||  '.' + options.className + '-mini'
	};

	this._initializeDirectory();
	this._initializeLangLink();
}

var proto = Footer.prototype;

proto._initializeDirectory = function () {
	this._directory = this.el.querySelector(this._selectors.directory);

	if (!this._directory) {
		return;
	}

	var checkboxes = this._directory.querySelectorAll(this._selectors.directory + '-column-section-state');
	var section;
	var anchorOpen;
	var anchorClose;

	for (var i = 0; i < checkboxes.length; i++) {
		section = checkboxes[i].nextElementSibling;
		anchorOpen = section.querySelector(this._selectors.directory + '-column-section-anchor-open');
		anchorClose = section.querySelector(this._selectors.directory + '-column-section-anchor-close');

		CheckboxMenu.create(checkboxes[i], anchorOpen, anchorClose);
	}
};

proto._initializeLangLink = function () {
	var current;
	var find;
	var replace;

	this._langLink = this.el.querySelector(this._selectors.mini + '-locale-lang');

	if (!this._langLink) {
		return;
	}

	// the current url
	current = window.location.pathname;

	// the current stageRootPath
	find = this._langLink.getAttribute('data-locale-current');

	// the replacement stageRootPath
	replace = this._langLink.pathname;

	if (current.indexOf(find) !== -1) {
		current = current.replace(find, replace);

		// pathname on IE is missing the leading slash
		if (current.charAt(0) !== '/') {
			current = '/' + current;
		}

		this._langLink.href = current;
	}
};

module.exports = Footer;

// ac-footer@2.0.0

},{"./internal/CheckboxMenu":8,"@marcom/ac-object/defaults":10}],8:[function(require,module,exports){
/**
 * @copyright 2015 Apple Inc. All rights reserved.
 */
'use strict';

function CheckboxMenu (el, anchorOpen, anchorClose) {
	this.el = el;
	this.anchorOpen = anchorOpen;
	this.anchorClose = anchorClose;

	this._lastOpen = this.el.checked;

	this.el.addEventListener('change', this.update.bind(this));
	this.anchorOpen.addEventListener('click', this._anchorOpenClick.bind(this));
	this.anchorClose.addEventListener('click', this._anchorCloseClick.bind(this));

	if (window.location.hash === '#' + el.id) {
		// remove hash in case user has a no-js link
		window.location.hash = '';
	}
}

CheckboxMenu.create = function (el, anchorOpen, anchorClose) {
	return new CheckboxMenu(el, anchorOpen, anchorClose);
};

var proto = CheckboxMenu.prototype;

proto.update = function () {
	var open = this.isOpen();

	if (open !== this._lastOpen) {
		this._lastOpen = open;
	}
};

proto.isOpen = function () {
	return this.el.checked;
};

proto.toggle = function () {
	if (this.isOpen()) {
		this.close();
	} else {
		this.open();
	}
};

proto.open = function () {
	if (!this.el.checked) {
		this.el.checked = true;
		this.update();
	}
};

proto.close = function () {
	if (this.el.checked) {
		this.el.checked = false;
		this.update();
	}
};

proto._anchorOpenClick = function (evt) {
	evt.preventDefault();
	this.open();
	this.anchorClose.focus();
};

proto._anchorCloseClick = function (evt) {
	evt.preventDefault();
	this.close();
	this.anchorOpen.focus();
};

module.exports = CheckboxMenu;

// ac-footer@2.0.0

},{}],9:[function(require,module,exports){
/**
 * @module ac-headjs
 * @copyright 2015 Apple Inc. All rights reserved.
 */
'use strict';

var addClass = require('@marcom/ac-classlist/add');
var removeClass = require('@marcom/ac-classlist/remove');
var extend = require('@marcom/ac-object/extend');

var FeatureDetect = function (targetElement, tests) {
	this._target = targetElement;
	this._tests = {};
	this.addTests(tests);
};

var proto = FeatureDetect.prototype;

proto.addTests = function (tests) {
	this._tests = extend(this._tests, tests || {});
};

proto._supports = function (feature) {
	if (typeof this._tests[feature] === 'undefined') {
		return false;
	}

	if (typeof this._tests[feature] === 'function') {
		// only run each test once
		this._tests[feature] = this._tests[feature]();
	}

	return this._tests[feature];
};

proto._addClass = function (feature, failure_prefix) {
	failure_prefix = failure_prefix || 'no-';

	if (this._supports(feature)) {
		addClass(this._target, feature);
	} else {
		addClass(this._target, failure_prefix + feature);
	}
};

proto.htmlClass = function () {
	var key;

	removeClass(this._target, 'no-js');
	addClass(this._target, 'js');

	for (key in this._tests) {
		if (this._tests.hasOwnProperty(key)) {
			this._addClass(key);
		}
	}
};

module.exports = FeatureDetect;

// ac-headjs@2.1.1

},{"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/remove":6,"@marcom/ac-object/extend":11}],10:[function(require,module,exports){
/**
 * @copyright 2014 Apple Inc. All rights reserved.
 */
'use strict';

/** @ignore */
var extend = require('./extend');

/**
 * @name module:ac-object.defaults
 *
 * @function
 *
 * @desc Combines defaults and options into a new object and returns it.
 *
 * @param {Object} defaultsObj
 *        The defaults object.
 *
 * @param {Object} options
 *        The options object.
 *
 * @returns {Object} An object resulting from the combination of defaults and options.
 */
module.exports = function defaults (defaultsObj, options) {
	if (typeof defaultsObj !== 'object'){
		throw new TypeError('defaults: must provide a defaults object');
	}
	options = options || {};
	if (typeof options !== 'object'){
		throw new TypeError('defaults: options must be a typeof object');
	}
	return extend({}, defaultsObj, options);
};

// ac-object@1.3.1

},{"./extend":11}],11:[function(require,module,exports){
/**
 * @copyright 2014 Apple Inc. All rights reserved.
 */
'use strict';

require('@marcom/ac-polyfills/Array/prototype.forEach');

/** @ignore */
var hasOwnProp = Object.prototype.hasOwnProperty;

/**
 * @name module:ac-object.extend
 *
 * @function
 *
 * @desc Add properties from one object into another. Not a deep copy.
 *
 * @param {Object} destination
 *        The object where the properties will end up. Properties in this Object
 *        that have the same key as properties in the source object will be
 *        overwritten with the source property’s value. If destination is not
 *        provided a blank object is created.
 *
 * @param {Object} source
 *        The properties to add / overwrite in the destination Object. An infinite
 *        number of source paramaters may be passed.
 *
 * @returns {Object} The extended object.
 */
module.exports = function extend () {
	var args;
	var dest;

	if (arguments.length < 2) {
		args = [{}, arguments[0]];
	} else {
		args = [].slice.call(arguments);
	}

	dest = args.shift();

	args.forEach(function (source) {
		if (source != null) {
			for (var property in source) {
				// Anything that does not prototype Object will not have this method
				if (hasOwnProp.call(source, property)) {
					dest[property] = source[property];
				}
			}
		}
	});

	return dest;
};

// ac-object@1.3.1

},{"@marcom/ac-polyfills/Array/prototype.forEach":12}],12:[function(require,module,exports){
if (!Array.prototype.forEach) {
/**
	Executes a provided function once per array element.
	@param callback {Function} Object to test against.
	@param thisObj {Object} What the callback method is bound to.
*/
	Array.prototype.forEach = function forEach(callback, thisObj) {
		var arrayObject = Object(this);
		// Mimic ES5 spec call for interanl method ToUint32()
		var i;
		var currentValue;

		if (typeof callback !== 'function') {
			throw new TypeError('No function object passed to forEach.');
		}

		var length = this.length

		for (i = 0; i < length; i += 1) {
			currentValue = arrayObject[i];
			callback.call(thisObj, currentValue, i, arrayObject);
		}
	};
}
// ac-polyfills@2.2.5

},{}],13:[function(require,module,exports){
/**
 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
 * (technically, since host objects have been implementation-dependent,
 * at least before ES6, IE hasn't needed to work this way).
 * Also works on strings, fixes IE < 9 to allow an explicit undefined
 * for the 2nd argument (as in Firefox), and prevents errors when
 * called on other DOM objects.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */
(function () {
    'use strict';
    var _slice = Array.prototype.slice;

    try {
        // Can't be used with DOM elements in IE < 9
        _slice.call(document.documentElement);
    } catch (e) { // Fails in IE < 9
        // This will work for genuine arrays, array-like objects,
        // NamedNodeMap (attributes, entities, notations),
        // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
        // and will not fail on other DOM objects (as do DOM elements in IE < 9)
        Array.prototype.slice = function (begin, end) {
            // IE < 9 gets unhappy with an undefined end argument
            end = (typeof end !== 'undefined') ? end : this.length;

            // For native Array objects, we use the native slice function
            if (Object.prototype.toString.call(this) === '[object Array]'){
                return _slice.call(this, begin, end);
            }

            // For array like object we handle it ourselves.
            var i, cloned = [],
                size, len = this.length;

            // Handle negative value for "begin"
            var start = begin || 0;
            start = (start >= 0) ? start: len + start;

            // Handle negative value for "end"
            var upTo = (end) ? end : len;
            if (end < 0) {
                upTo = len + end;
            }

            // Actual expected size of the slice
            size = upTo - start;

            if (size > 0) {
                cloned = new Array(size);
                if (this.charAt) {
                    for (i = 0; i < size; i++) {
                        cloned[i] = this.charAt(start + i);
                    }
                } else {
                    for (i = 0; i < size; i++) {
                        cloned[i] = this[start + i];
                    }
                }
            }

            return cloned;
        };
    }
}());
// ac-polyfills@2.2.5

},{}],14:[function(require,module,exports){
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 2014-07-23
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

if ("document" in self) {

// Full polyfill for browsers with no classList support
if (!("classList" in document.createElement("_"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (index !== -1) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	token += "";

	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		if (ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(self));

} else {
// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments[i];
					original.call(this, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	testElement = null;
}());

}

}

// ac-polyfills@2.2.5

},{}],15:[function(require,module,exports){
/**
 * @module ac-globalfooter
 * @copyright 2015 Apple Inc. All rights reserved.
 */
'use strict';

/** @ignore */
var GlobalFooter = require('./ac-globalfooter/GlobalFooter');
var el = document.getElementById('ac-globalfooter');

if (el) {
	module.exports = new GlobalFooter(el);
}

},{"./ac-globalfooter/GlobalFooter":16}],16:[function(require,module,exports){
/**
 * @copyright 2015 Apple Inc. All rights reserved.
 */
'use strict';

/** @ignore */
var Footer = require('@marcom/ac-footer/Footer');
var FeatureDetect = require('@marcom/ac-headjs/FeatureDetect');

/**
 * @constructor
 */
var GlobalFooter = function (el) {
	var featureDetect = new FeatureDetect(el);
	featureDetect.htmlClass();

	Footer.call(this, el, {
		className: 'ac-gf',
		miniSelector: '.ac-gf-footer'
	});

	this._initializeBuyStrip();
	this._initializeChatLink();
};

var superProto = Footer.prototype;
var proto = GlobalFooter.prototype = Object.create(superProto);
GlobalFooter.prototype.constructor = GlobalFooter;

proto._initializeBuyStrip = function () {
	var modules;
	var i;

	this._buystrip = document.querySelector('.ac-gf-buystrip');

	if (!this._buystrip) {
		return;
	}

	modules = this._buystrip.querySelectorAll('.ac-gf-buystrip-info-content');

	for (i = 0; i < modules.length; i++) {
		this._makeBlockLink(modules[i]);
	}
};

proto._initializeChatLink = function () {
	var parent;

	if (this._buystrip) {
		this._chatLink = this._buystrip.querySelector('.ac-gf-buystrip-info-cta-chat');

		if (this._chatLink) {
			parent = this._chatLink.parentNode;

			if (parent.href) {
				// account for `makeBlockLink`
				this._chatLink = parent;
			}

			this._onChatLinkClick = this._onChatLinkClick.bind(this);
			this._chatLink.addEventListener('click', this._onChatLinkClick);
		}
	}
};

proto._onChatLinkClick = function (evt) {
	evt.preventDefault();
	window.open(this._chatLink.href, 'chat', 'width=375,height=773');
};

proto._makeBlockLink = function (el) {
	var link;
	var cta;
	var block;
	var node;

	link = el.querySelector('a');

	if (!link) {
		return;
	}

	// create blocklink
	block = document.createElement('a');
	block.className = 'ac-gf-block';
	block.href = link.href;

	// create cta
	cta = document.createElement('span');
	cta.className = link.className + ' ac-gf-block-link';
	cta.innerHTML = link.innerHTML;

	// update parent, for caption.with-cta
	link.parentNode.className += ' with-cta';

	// DOM swap
	link.parentNode.replaceChild(cta, link);
	el.insertBefore(block, el.firstChild);

	while (el.childNodes.length > 1) {
		node = el.childNodes[1];

		if (node.href) {
			// leave out additional links
			break;
		}

		block.appendChild(node);
	}
};

module.exports = GlobalFooter;

},{"@marcom/ac-footer/Footer":7,"@marcom/ac-headjs/FeatureDetect":9}]},{},[15]);
