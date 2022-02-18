// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dnoWj":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "c9b2bbcd379dd93c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hD4hw":[function(require,module,exports) {
// var css = require('sheetify')
var choo = require('choo');
// css('tachyons')
var app = choo({
    hash: true
});
app.use(require('choo-devtools')());
app.use(require('./stores/links'));
app.route('/', require('./views/main'));
app.route('/index.html', require('./views/main'));
app.route('#images', require('./views/images'));
app.route('/*', require('./views/404'));
module.exports = app.mount('body');

},{"choo":"3N7UU","choo-devtools":"8vY63","./stores/links":"7jhMD","./views/main":"8O5wI","./views/images":"fPsCu","./views/404":"hiyek"}],"3N7UU":[function(require,module,exports) {
var scrollToAnchor = require('scroll-to-anchor');
var documentReady = require('document-ready');
var nanotiming = require('nanotiming');
var nanorouter = require('nanorouter');
var nanomorph = require('nanomorph');
var nanoquery = require('nanoquery');
var nanohref = require('nanohref');
var nanoraf = require('nanoraf');
var nanobus = require('nanobus');
var assert = require('assert');
var Cache = require('./component/cache');
module.exports = Choo;
var HISTORY_OBJECT = {
};
function Choo(opts) {
    var timing = nanotiming('choo.constructor');
    if (!(this instanceof Choo)) return new Choo(opts);
    opts = opts || {
    };
    assert.equal(typeof opts, 'object', 'choo: opts should be type object');
    var self = this;
    // define events used by choo
    this._events = {
        DOMCONTENTLOADED: 'DOMContentLoaded',
        DOMTITLECHANGE: 'DOMTitleChange',
        REPLACESTATE: 'replaceState',
        PUSHSTATE: 'pushState',
        NAVIGATE: 'navigate',
        POPSTATE: 'popState',
        RENDER: 'render'
    };
    // properties for internal use only
    this._historyEnabled = opts.history === undefined ? true : opts.history;
    this._hrefEnabled = opts.href === undefined ? true : opts.href;
    this._hashEnabled = opts.hash === undefined ? false : opts.hash;
    this._hasWindow = typeof window !== 'undefined';
    this._cache = opts.cache;
    this._loaded = false;
    this._stores = [
        ondomtitlechange
    ];
    this._tree = null;
    // state
    var _state = {
        events: this._events,
        components: {
        }
    };
    if (this._hasWindow) {
        this.state = window.initialState ? Object.assign({
        }, window.initialState, _state) : _state;
        delete window.initialState;
    } else this.state = _state;
    // properties that are part of the API
    this.router = nanorouter({
        curry: true
    });
    this.emitter = nanobus('choo.emit');
    this.emit = this.emitter.emit.bind(this.emitter);
    // listen for title changes; available even when calling .toString()
    if (this._hasWindow) this.state.title = document.title;
    function ondomtitlechange(state) {
        self.emitter.prependListener(self._events.DOMTITLECHANGE, function(title) {
            assert.equal(typeof title, 'string', 'events.DOMTitleChange: title should be type string');
            state.title = title;
            if (self._hasWindow) document.title = title;
        });
    }
    timing();
}
Choo.prototype.route = function(route, handler) {
    var routeTiming = nanotiming("choo.route('" + route + "')");
    assert.equal(typeof route, 'string', 'choo.route: route should be type string');
    assert.equal(typeof handler, 'function', 'choo.handler: route should be type function');
    this.router.on(route, handler);
    routeTiming();
};
Choo.prototype.use = function(cb) {
    assert.equal(typeof cb, 'function', 'choo.use: cb should be type function');
    var self = this;
    this._stores.push(function(state) {
        var msg = 'choo.use';
        msg = cb.storeName ? msg + '(' + cb.storeName + ')' : msg;
        var endTiming = nanotiming(msg);
        cb(state, self.emitter, self);
        endTiming();
    });
};
Choo.prototype.start = function() {
    assert.equal(typeof window, 'object', 'choo.start: window was not found. .start() must be called in a browser, use .toString() if running in Node');
    var startTiming = nanotiming('choo.start');
    var self = this;
    if (this._historyEnabled) {
        this.emitter.prependListener(this._events.NAVIGATE, function() {
            self._matchRoute(self.state);
            if (self._loaded) {
                self.emitter.emit(self._events.RENDER);
                setTimeout(scrollToAnchor.bind(null, window.location.hash), 0);
            }
        });
        this.emitter.prependListener(this._events.POPSTATE, function() {
            self.emitter.emit(self._events.NAVIGATE);
        });
        this.emitter.prependListener(this._events.PUSHSTATE, function(href) {
            assert.equal(typeof href, 'string', 'events.pushState: href should be type string');
            window.history.pushState(HISTORY_OBJECT, null, href);
            self.emitter.emit(self._events.NAVIGATE);
        });
        this.emitter.prependListener(this._events.REPLACESTATE, function(href) {
            assert.equal(typeof href, 'string', 'events.replaceState: href should be type string');
            window.history.replaceState(HISTORY_OBJECT, null, href);
            self.emitter.emit(self._events.NAVIGATE);
        });
        window.onpopstate = function() {
            self.emitter.emit(self._events.POPSTATE);
        };
        if (self._hrefEnabled) nanohref(function(location) {
            var href = location.href;
            var hash = location.hash;
            if (href === window.location.href) {
                if (!self._hashEnabled && hash) scrollToAnchor(hash);
                return;
            }
            self.emitter.emit(self._events.PUSHSTATE, href);
        });
    }
    this._setCache(this.state);
    this._matchRoute(this.state);
    this._stores.forEach(function(initStore) {
        initStore(self.state);
    });
    this._tree = this._prerender(this.state);
    assert.ok(this._tree, 'choo.start: no valid DOM node returned for location ' + this.state.href);
    this.emitter.prependListener(self._events.RENDER, nanoraf(function() {
        var renderTiming = nanotiming('choo.render');
        var newTree = self._prerender(self.state);
        assert.ok(newTree, 'choo.render: no valid DOM node returned for location ' + self.state.href);
        assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.render: The target node <' + self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' + newTree.nodeName.toLowerCase() + '>.');
        var morphTiming = nanotiming('choo.morph');
        nanomorph(self._tree, newTree);
        morphTiming();
        renderTiming();
    }));
    documentReady(function() {
        self.emitter.emit(self._events.DOMCONTENTLOADED);
        self._loaded = true;
    });
    startTiming();
    return this._tree;
};
Choo.prototype.mount = function mount(selector) {
    var mountTiming = nanotiming("choo.mount('" + selector + "')");
    if (typeof window !== 'object') {
        assert.ok(typeof selector === 'string', 'choo.mount: selector should be type String');
        this.selector = selector;
        mountTiming();
        return this;
    }
    assert.ok(typeof selector === 'string' || typeof selector === 'object', 'choo.mount: selector should be type String or HTMLElement');
    var self = this;
    documentReady(function() {
        var renderTiming = nanotiming('choo.render');
        var newTree = self.start();
        if (typeof selector === 'string') self._tree = document.querySelector(selector);
        else self._tree = selector;
        assert.ok(self._tree, 'choo.mount: could not query selector: ' + selector);
        assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.mount: The target node <' + self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' + newTree.nodeName.toLowerCase() + '>.');
        var morphTiming = nanotiming('choo.morph');
        nanomorph(self._tree, newTree);
        morphTiming();
        renderTiming();
    });
    mountTiming();
};
Choo.prototype.toString = function(location, state) {
    state = state || {
    };
    state.components = state.components || {
    };
    state.events = Object.assign({
    }, state.events, this._events);
    assert.notEqual(typeof window, 'object', 'choo.mount: window was found. .toString() must be called in Node, use .start() or .mount() if running in the browser');
    assert.equal(typeof location, 'string', 'choo.toString: location should be type string');
    assert.equal(typeof state, 'object', 'choo.toString: state should be type object');
    this._setCache(state);
    this._matchRoute(state, location);
    this.emitter.removeAllListeners();
    this._stores.forEach(function(initStore) {
        initStore(state);
    });
    var html = this._prerender(state);
    assert.ok(html, 'choo.toString: no valid value returned for the route ' + location);
    assert(!Array.isArray(html), 'choo.toString: return value was an array for the route ' + location);
    return typeof html.outerHTML === 'string' ? html.outerHTML : html.toString();
};
Choo.prototype._matchRoute = function(state, locationOverride) {
    var location, queryString;
    if (locationOverride) {
        location = locationOverride.replace(/\?.+$/, '').replace(/\/$/, '');
        if (!this._hashEnabled) location = location.replace(/#.+$/, '');
        queryString = locationOverride;
    } else {
        location = window.location.pathname.replace(/\/$/, '');
        if (this._hashEnabled) location += window.location.hash.replace(/^#/, '/');
        queryString = window.location.search;
    }
    var matched = this.router.match(location);
    this._handler = matched.cb;
    state.href = location;
    state.query = nanoquery(queryString);
    state.route = matched.route;
    state.params = matched.params;
};
Choo.prototype._prerender = function(state) {
    var routeTiming = nanotiming("choo.prerender('" + state.route + "')");
    var res = this._handler(state, this.emit);
    routeTiming();
    return res;
};
Choo.prototype._setCache = function(state) {
    var cache = new Cache(state, this.emitter.emit.bind(this.emitter), this._cache);
    state.cache = renderComponent;
    function renderComponent(Component, id) {
        assert.equal(typeof Component, 'function', 'choo.state.cache: Component should be type function');
        var args = [];
        for(var i = 0, len = arguments.length; i < len; i++)args.push(arguments[i]);
        return cache.render.apply(cache, args);
    }
    // When the state gets stringified, make sure `state.cache` isn't
    // stringified too.
    renderComponent.toJSON = function() {
        return null;
    };
};

},{"scroll-to-anchor":"fu8fe","document-ready":"c5qth","nanotiming":"bCrSz","nanorouter":"HSfEC","nanomorph":"9Ocgg","nanoquery":"OF44b","nanohref":"5SRvG","nanoraf":"k95aj","nanobus":"g37Sw","assert":"bGavs","./component/cache":"eVplY"}],"fu8fe":[function(require,module,exports) {
module.exports = scrollToAnchor;
function scrollToAnchor(anchor, options) {
    if (anchor) try {
        var el = document.querySelector(anchor);
        if (el) el.scrollIntoView(options);
    } catch (e) {
    }
}

},{}],"c5qth":[function(require,module,exports) {
'use strict';
module.exports = ready;
function ready(callback) {
    if (typeof document === 'undefined') throw new Error('document-ready only runs in the browser');
    var state = document.readyState;
    if (state === 'complete' || state === 'interactive') return setTimeout(callback, 0);
    document.addEventListener('DOMContentLoaded', function onLoad() {
        callback();
    });
}

},{}],"bCrSz":[function(require,module,exports) {
var scheduler = require('nanoscheduler')();
var assert = require('assert');
var perf;
nanotiming.disabled = true;
try {
    perf = window.performance;
    nanotiming.disabled = window.localStorage.DISABLE_NANOTIMING === 'true' || !perf.mark;
} catch (e1) {
}
module.exports = nanotiming;
function nanotiming(name) {
    assert.equal(typeof name, 'string', 'nanotiming: name should be type string');
    if (nanotiming.disabled) return noop;
    var uuid = (perf.now() * 10000).toFixed() % Number.MAX_SAFE_INTEGER;
    var startName = 'start-' + uuid + '-' + name;
    perf.mark(startName);
    function end(cb) {
        var endName = 'end-' + uuid + '-' + name;
        perf.mark(endName);
        scheduler.push(function() {
            var err = null;
            try {
                var measureName = name + ' [' + uuid + ']';
                perf.measure(measureName, startName, endName);
                perf.clearMarks(startName);
                perf.clearMarks(endName);
            } catch (e) {
                err = e;
            }
            if (cb) cb(err, name);
        });
    }
    end.uuid = uuid;
    return end;
}
function noop(cb) {
    if (cb) scheduler.push(function() {
        cb(new Error('nanotiming: performance API unavailable'));
    });
}

},{"nanoscheduler":"5d5rY","assert":"bGavs"}],"5d5rY":[function(require,module,exports) {
var assert = require('assert');
var hasWindow1 = typeof window !== 'undefined';
function createScheduler() {
    var scheduler;
    if (hasWindow1) {
        if (!window._nanoScheduler) window._nanoScheduler = new NanoScheduler(true);
        scheduler = window._nanoScheduler;
    } else scheduler = new NanoScheduler();
    return scheduler;
}
function NanoScheduler(hasWindow) {
    this.hasWindow = hasWindow;
    this.hasIdle = this.hasWindow && window.requestIdleCallback;
    this.method = this.hasIdle ? window.requestIdleCallback.bind(window) : this.setTimeout;
    this.scheduled = false;
    this.queue = [];
}
NanoScheduler.prototype.push = function(cb) {
    assert.equal(typeof cb, 'function', 'nanoscheduler.push: cb should be type function');
    this.queue.push(cb);
    this.schedule();
};
NanoScheduler.prototype.schedule = function() {
    if (this.scheduled) return;
    this.scheduled = true;
    var self = this;
    this.method(function(idleDeadline) {
        var cb;
        while(self.queue.length && idleDeadline.timeRemaining() > 0){
            cb = self.queue.shift();
            cb(idleDeadline);
        }
        self.scheduled = false;
        if (self.queue.length) self.schedule();
    });
};
NanoScheduler.prototype.setTimeout = function(cb) {
    setTimeout(cb, 0, {
        timeRemaining: function() {
            return 1;
        }
    });
};
module.exports = createScheduler;

},{"assert":"bGavs"}],"bGavs":[function(require,module,exports) {
assert.notEqual = notEqual;
assert.notOk = notOk;
assert.equal = equal;
assert.ok = assert;
module.exports = assert;
function equal(a, b, m) {
    assert(a == b, m) // eslint-disable-line eqeqeq
    ;
}
function notEqual(a, b, m) {
    assert(a != b, m) // eslint-disable-line eqeqeq
    ;
}
function notOk(t, m) {
    assert(!t, m);
}
function assert(t, m) {
    if (!t) throw new Error(m || 'AssertionError');
}

},{}],"HSfEC":[function(require,module,exports) {
var assert = require('assert');
var wayfarer = require('wayfarer');
// electron support
var isLocalFile = /file:\/\//.test(typeof window === 'object' && window.location && window.location.origin);
/* eslint-disable no-useless-escape */ var electron = '^(file:\/\/|\/)(.*\.html?\/?)?';
var protocol = '^(http(s)?(:\/\/))?(www\.)?';
var domain = '[a-zA-Z0-9-_\.]+(:[0-9]{1,5})?(\/{1})?';
var qs = '[\?].*$';
/* eslint-enable no-useless-escape */ var stripElectron = new RegExp(electron);
var prefix = new RegExp(protocol + domain);
var normalize = new RegExp('#');
var suffix = new RegExp(qs);
module.exports = Nanorouter;
function Nanorouter(opts) {
    if (!(this instanceof Nanorouter)) return new Nanorouter(opts);
    opts = opts || {
    };
    this.router = wayfarer(opts.default || '/404');
}
Nanorouter.prototype.on = function(routename, listener) {
    assert.equal(typeof routename, 'string');
    routename = routename.replace(/^[#/]/, '');
    this.router.on(routename, listener);
};
Nanorouter.prototype.emit = function(routename) {
    assert.equal(typeof routename, 'string');
    routename = pathname(routename, isLocalFile);
    return this.router.emit(routename);
};
Nanorouter.prototype.match = function(routename) {
    assert.equal(typeof routename, 'string');
    routename = pathname(routename, isLocalFile);
    return this.router.match(routename);
};
// replace everything in a route but the pathname and hash
function pathname(routename, isElectron) {
    if (isElectron) routename = routename.replace(stripElectron, '');
    else routename = routename.replace(prefix, '');
    return decodeURI(routename.replace(suffix, '').replace(normalize, '/'));
}

},{"assert":"bGavs","wayfarer":"gCrKw"}],"gCrKw":[function(require,module,exports) {
/* eslint-disable node/no-deprecated-api */ var assert = require('assert');
var trie = require('./trie');
module.exports = Wayfarer;
// create a router
// str -> obj
function Wayfarer(dft1) {
    if (!(this instanceof Wayfarer)) return new Wayfarer(dft1);
    var _default = (dft1 || '').replace(/^\//, '');
    var _trie = trie();
    emit._trie = _trie;
    emit.on = on;
    emit.emit = emit;
    emit.match = match;
    emit._wayfarer = true;
    // define a route
    // (str, fn) -> obj
    function on(route, cb) {
        assert.equal(typeof route, 'string');
        assert.equal(typeof cb, 'function');
        route = route || '/';
        if (cb._wayfarer && cb._trie) {
            _trie.mount(route, cb._trie.trie);
        } else {
            var node = _trie.create(route);
            node.cb = cb;
            node.route = route;
        }
        return emit;
    }
    // match and call a route
    // (str, obj?) -> null
    function emit(route) {
        var matched = match(route);
        var args = new Array(arguments.length);
        args[0] = matched.params;
        for(var i = 1; i < args.length; i++){
            args[i] = arguments[i];
        }
        return matched.cb.apply(matched.cb, args);
    }
    function match(route) {
        assert.notEqual(route, undefined, "'route' must be defined");
        var matched = _trie.match(route);
        if (matched && matched.cb) return new Route(matched);
        var dft = _trie.match(_default);
        if (dft && dft.cb) return new Route(dft);
        throw new Error("route '" + route + "' did not match");
    }
    function Route(matched) {
        this.cb = matched.cb;
        this.route = matched.route;
        this.params = matched.params;
    }
    return emit;
}

},{"assert":"bGavs","./trie":"3qcLx"}],"3qcLx":[function(require,module,exports) {
/* eslint-disable node/no-deprecated-api */ var assert = require('assert');
module.exports = Trie;
// create a new trie
// null -> obj
function Trie() {
    if (!(this instanceof Trie)) return new Trie();
    this.trie = {
        nodes: {
        }
    };
}
// create a node on the trie at route
// and return a node
// str -> obj
Trie.prototype.create = function(route) {
    assert.equal(typeof route, 'string', 'route should be a string');
    // strip leading '/' and split routes
    var routes = route.replace(/^\//, '').split('/');
    function createNode(index, trie) {
        var thisRoute = has(routes, index) && routes[index];
        if (thisRoute === false) return trie;
        var node = null;
        if (/^:|^\*/.test(thisRoute)) {
            // if node is a name match, set name and append to ':' node
            if (!has(trie.nodes, '$$')) {
                node = {
                    nodes: {
                    }
                };
                trie.nodes.$$ = node;
            } else node = trie.nodes.$$;
            if (thisRoute[0] === '*') trie.wildcard = true;
            trie.name = thisRoute.replace(/^:|^\*/, '');
        } else if (!has(trie.nodes, thisRoute)) {
            node = {
                nodes: {
                }
            };
            trie.nodes[thisRoute] = node;
        } else node = trie.nodes[thisRoute];
        // we must recurse deeper
        return createNode(index + 1, node);
    }
    return createNode(0, this.trie);
};
// match a route on the trie
// and return the node
// str -> obj
Trie.prototype.match = function(route) {
    assert.equal(typeof route, 'string', 'route should be a string');
    var routes = route.replace(/^\//, '').split('/');
    var params = {
    };
    function search(index, trie) {
        // either there's no match, or we're done searching
        if (trie === undefined) return undefined;
        var thisRoute = routes[index];
        if (thisRoute === undefined) return trie;
        if (has(trie.nodes, thisRoute)) // match regular routes first
        return search(index + 1, trie.nodes[thisRoute]);
        else if (trie.name) {
            // match named routes
            try {
                params[trie.name] = decodeURIComponent(thisRoute);
            } catch (e) {
                return search(index, undefined);
            }
            return search(index + 1, trie.nodes.$$);
        } else if (trie.wildcard) {
            // match wildcards
            try {
                params.wildcard = decodeURIComponent(routes.slice(index).join('/'));
            } catch (e) {
                return search(index, undefined);
            }
            // return early, or else search may keep recursing through the wildcard
            return trie.nodes.$$;
        } else // no matches found
        return search(index + 1);
    }
    var node = search(0, this.trie);
    if (!node) return undefined;
    node = Object.assign({
    }, node);
    node.params = params;
    return node;
};
// mount a trie onto a node at route
// (str, obj) -> null
Trie.prototype.mount = function(route, trie) {
    assert.equal(typeof route, 'string', 'route should be a string');
    assert.equal(typeof trie, 'object', 'trie should be a object');
    var split = route.replace(/^\//, '').split('/');
    var node = null;
    var key1 = null;
    if (split.length === 1) {
        key1 = split[0];
        node = this.create(key1);
    } else {
        var head = split.join('/');
        key1 = split[0];
        node = this.create(head);
    }
    Object.assign(node.nodes, trie.nodes);
    if (trie.name) node.name = trie.name;
    // delegate properties from '/' to the new node
    // '/' cannot be reached once mounted
    if (node.nodes['']) {
        Object.keys(node.nodes['']).forEach(function(key) {
            if (key === 'nodes') return;
            node[key] = node.nodes[''][key];
        });
        Object.assign(node.nodes, node.nodes[''].nodes);
        delete node.nodes[''].nodes;
    }
};
function has(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
}

},{"assert":"bGavs"}],"9Ocgg":[function(require,module,exports) {
var assert = require('nanoassert');
var morph = require('./lib/morph');
var TEXT_NODE = 3;
// var DEBUG = false
module.exports = nanomorph;
// Morph one tree into another tree
//
// no parent
//   -> same: diff and walk children
//   -> not same: replace and return
// old node doesn't exist
//   -> insert new node
// new node doesn't exist
//   -> delete old node
// nodes are not the same
//   -> diff nodes and apply patch to old node
// nodes are the same
//   -> walk all child nodes and append to old node
function nanomorph(oldTree, newTree, options) {
    // if (DEBUG) {
    //   console.log(
    //   'nanomorph\nold\n  %s\nnew\n  %s',
    //   oldTree && oldTree.outerHTML,
    //   newTree && newTree.outerHTML
    // )
    // }
    assert.equal(typeof oldTree, 'object', 'nanomorph: oldTree should be an object');
    assert.equal(typeof newTree, 'object', 'nanomorph: newTree should be an object');
    if (options && options.childrenOnly) {
        updateChildren(newTree, oldTree);
        return oldTree;
    }
    assert.notEqual(newTree.nodeType, 11, 'nanomorph: newTree should have one root node (which is not a DocumentFragment)');
    return walk(newTree, oldTree);
}
// Walk and morph a dom tree
function walk(newNode, oldNode) {
    // if (DEBUG) {
    //   console.log(
    //   'walk\nold\n  %s\nnew\n  %s',
    //   oldNode && oldNode.outerHTML,
    //   newNode && newNode.outerHTML
    // )
    // }
    if (!oldNode) return newNode;
    else if (!newNode) return null;
    else if (newNode.isSameNode && newNode.isSameNode(oldNode)) return oldNode;
    else if (newNode.tagName !== oldNode.tagName || getComponentId(newNode) !== getComponentId(oldNode)) return newNode;
    else {
        morph(newNode, oldNode);
        updateChildren(newNode, oldNode);
        return oldNode;
    }
}
function getComponentId(node) {
    return node.dataset ? node.dataset.nanomorphComponentId : undefined;
}
// Update the children of elements
// (obj, obj) -> null
function updateChildren(newNode, oldNode) {
    // if (DEBUG) {
    //   console.log(
    //   'updateChildren\nold\n  %s\nnew\n  %s',
    //   oldNode && oldNode.outerHTML,
    //   newNode && newNode.outerHTML
    // )
    // }
    var oldChild, newChild, morphed, oldMatch;
    // The offset is only ever increased, and used for [i - offset] in the loop
    var offset = 0;
    for(var i = 0;; i++){
        oldChild = oldNode.childNodes[i];
        newChild = newNode.childNodes[i - offset];
        // if (DEBUG) {
        //   console.log(
        //   '===\n- old\n  %s\n- new\n  %s',
        //   oldChild && oldChild.outerHTML,
        //   newChild && newChild.outerHTML
        // )
        // }
        // Both nodes are empty, do nothing
        if (!oldChild && !newChild) break;
        else if (!newChild) {
            oldNode.removeChild(oldChild);
            i--;
        // There is no old child, add new
        } else if (!oldChild) {
            oldNode.appendChild(newChild);
            offset++;
        // Both nodes are the same, morph
        } else if (same(newChild, oldChild)) {
            morphed = walk(newChild, oldChild);
            if (morphed !== oldChild) {
                oldNode.replaceChild(morphed, oldChild);
                offset++;
            }
        // Both nodes do not share an ID or a placeholder, try reorder
        } else {
            oldMatch = null;
            // Try and find a similar node somewhere in the tree
            for(var j = i; j < oldNode.childNodes.length; j++)if (same(oldNode.childNodes[j], newChild)) {
                oldMatch = oldNode.childNodes[j];
                break;
            }
            // If there was a node with the same ID or placeholder in the old list
            if (oldMatch) {
                morphed = walk(newChild, oldMatch);
                if (morphed !== oldMatch) offset++;
                oldNode.insertBefore(morphed, oldChild);
            // It's safe to morph two nodes in-place if neither has an ID
            } else if (!newChild.id && !oldChild.id) {
                morphed = walk(newChild, oldChild);
                if (morphed !== oldChild) {
                    oldNode.replaceChild(morphed, oldChild);
                    offset++;
                }
            // Insert the node at the index if we couldn't morph or find a matching node
            } else {
                oldNode.insertBefore(newChild, oldChild);
                offset++;
            }
        }
    }
}
function same(a, b) {
    if (a.id) return a.id === b.id;
    if (a.isSameNode) return a.isSameNode(b);
    if (a.tagName !== b.tagName) return false;
    if (a.type === TEXT_NODE) return a.nodeValue === b.nodeValue;
    return false;
}

},{"nanoassert":"bGavs","./lib/morph":"7IStB"}],"7IStB":[function(require,module,exports) {
var events = require('./events');
var eventsLength = events.length;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
module.exports = morph;
// diff elements and apply the resulting patch to the old node
// (obj, obj) -> null
function morph(newNode, oldNode) {
    var nodeType = newNode.nodeType;
    var nodeName = newNode.nodeName;
    if (nodeType === ELEMENT_NODE) copyAttrs(newNode, oldNode);
    if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
        if (oldNode.nodeValue !== newNode.nodeValue) oldNode.nodeValue = newNode.nodeValue;
    }
    // Some DOM nodes are weird
    // https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
    if (nodeName === 'INPUT') updateInput(newNode, oldNode);
    else if (nodeName === 'OPTION') updateOption(newNode, oldNode);
    else if (nodeName === 'TEXTAREA') updateTextarea(newNode, oldNode);
    copyEvents(newNode, oldNode);
}
function copyAttrs(newNode, oldNode) {
    var oldAttrs = oldNode.attributes;
    var newAttrs = newNode.attributes;
    var attrNamespaceURI = null;
    var attrValue = null;
    var fromValue = null;
    var attrName = null;
    var attr = null;
    for(var i = newAttrs.length - 1; i >= 0; --i){
        attr = newAttrs[i];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;
        attrValue = attr.value;
        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName);
            if (fromValue !== attrValue) oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
        } else if (!oldNode.hasAttribute(attrName)) oldNode.setAttribute(attrName, attrValue);
        else {
            fromValue = oldNode.getAttribute(attrName);
            if (fromValue !== attrValue) {
                // apparently values are always cast to strings, ah well
                if (attrValue === 'null' || attrValue === 'undefined') oldNode.removeAttribute(attrName);
                else oldNode.setAttribute(attrName, attrValue);
            }
        }
    }
    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    for(var j = oldAttrs.length - 1; j >= 0; --j){
        attr = oldAttrs[j];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;
            if (attrNamespaceURI) {
                attrName = attr.localName || attrName;
                if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) oldNode.removeAttributeNS(attrNamespaceURI, attrName);
            } else if (!newNode.hasAttributeNS(null, attrName)) oldNode.removeAttribute(attrName);
        }
    }
}
function copyEvents(newNode, oldNode) {
    for(var i = 0; i < eventsLength; i++){
        var ev = events[i];
        if (newNode[ev]) oldNode[ev] = newNode[ev] // update existing element
        ;
        else if (oldNode[ev]) oldNode[ev] = undefined // remove it from existing element
        ;
    }
}
function updateOption(newNode, oldNode) {
    updateAttribute(newNode, oldNode, 'selected');
}
// The "value" attribute is special for the <input> element since it sets the
// initial value. Changing the "value" attribute without changing the "value"
// property will have no effect since it is only used to the set the initial
// value. Similar for the "checked" attribute, and "disabled".
function updateInput(newNode, oldNode) {
    var newValue = newNode.value;
    var oldValue = oldNode.value;
    updateAttribute(newNode, oldNode, 'checked');
    updateAttribute(newNode, oldNode, 'disabled');
    // The "indeterminate" property can not be set using an HTML attribute.
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
    if (newNode.indeterminate !== oldNode.indeterminate) oldNode.indeterminate = newNode.indeterminate;
    // Persist file value since file inputs can't be changed programatically
    if (oldNode.type === 'file') return;
    if (newValue !== oldValue) {
        oldNode.setAttribute('value', newValue);
        oldNode.value = newValue;
    }
    if (newValue === 'null') {
        oldNode.value = '';
        oldNode.removeAttribute('value');
    }
    if (!newNode.hasAttributeNS(null, 'value')) oldNode.removeAttribute('value');
    else if (oldNode.type === 'range') // this is so elements like slider move their UI thingy
    oldNode.value = newValue;
}
function updateTextarea(newNode, oldNode) {
    var newValue = newNode.value;
    if (newValue !== oldNode.value) oldNode.value = newValue;
    if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
        // Needed for IE. Apparently IE sets the placeholder as the
        // node value and vise versa. This ignores an empty update.
        if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) return;
        oldNode.firstChild.nodeValue = newValue;
    }
}
function updateAttribute(newNode, oldNode, name) {
    if (newNode[name] !== oldNode[name]) {
        oldNode[name] = newNode[name];
        if (newNode[name]) oldNode.setAttribute(name, '');
        else oldNode.removeAttribute(name);
    }
}

},{"./events":"aOVYd"}],"aOVYd":[function(require,module,exports) {
module.exports = [
    // attribute events (can be set with attributes)
    'onclick',
    'ondblclick',
    'onmousedown',
    'onmouseup',
    'onmouseover',
    'onmousemove',
    'onmouseout',
    'onmouseenter',
    'onmouseleave',
    'ontouchcancel',
    'ontouchend',
    'ontouchmove',
    'ontouchstart',
    'ondragstart',
    'ondrag',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondrop',
    'ondragend',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onunload',
    'onabort',
    'onerror',
    'onresize',
    'onscroll',
    'onselect',
    'onchange',
    'onsubmit',
    'onreset',
    'onfocus',
    'onblur',
    'oninput',
    'onanimationend',
    'onanimationiteration',
    'onanimationstart',
    // other common events
    'oncontextmenu',
    'onfocusin',
    'onfocusout'
];

},{}],"OF44b":[function(require,module,exports) {
var reg = /([^?=&]+)(=([^&]*))?/g;
var assert = require('assert');
module.exports = qs;
function qs(url) {
    assert.equal(typeof url, 'string', 'nanoquery: url should be type string');
    var obj = {
    };
    url.replace(/^.*\?/, '').replace(reg, function(a0, a1, a2, a3) {
        var value = decodeURIComponent(a3);
        var key = decodeURIComponent(a1);
        if (obj.hasOwnProperty(key)) {
            if (Array.isArray(obj[key])) obj[key].push(value);
            else obj[key] = [
                obj[key],
                value
            ];
        } else obj[key] = value;
    });
    return obj;
}

},{"assert":"bGavs"}],"5SRvG":[function(require,module,exports) {
var assert = require('assert');
var safeExternalLink = /(noopener|noreferrer) (noopener|noreferrer)/;
var protocolLink = /^[\w-_]+:/;
module.exports = href;
function href(cb, root) {
    assert.notEqual(typeof window, 'undefined', 'nanohref: expected window to exist');
    root = root || window.document;
    assert.equal(typeof cb, 'function', 'nanohref: cb should be type function');
    assert.equal(typeof root, 'object', 'nanohref: root should be type object');
    window.addEventListener('click', function(e) {
        if (e.button && e.button !== 0 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.defaultPrevented) return;
        var anchor = function traverse(node) {
            if (!node || node === root) return;
            if (node.localName !== 'a' || node.href === undefined) return traverse(node.parentNode);
            return node;
        }(e.target);
        if (!anchor) return;
        if (window.location.protocol !== anchor.protocol || window.location.hostname !== anchor.hostname || window.location.port !== anchor.port || anchor.hasAttribute('data-nanohref-ignore') || anchor.hasAttribute('download') || anchor.getAttribute('target') === '_blank' && safeExternalLink.test(anchor.getAttribute('rel')) || protocolLink.test(anchor.getAttribute('href'))) return;
        e.preventDefault();
        cb(anchor);
    });
}

},{"assert":"bGavs"}],"k95aj":[function(require,module,exports) {
'use strict';
var assert = require('assert');
module.exports = nanoraf;
// Only call RAF when needed
// (fn, fn?) -> fn
function nanoraf(render, raf) {
    assert.equal(typeof render, 'function', 'nanoraf: render should be a function');
    assert.ok(typeof raf === 'function' || typeof raf === 'undefined', 'nanoraf: raf should be a function or undefined');
    if (!raf) raf = window.requestAnimationFrame;
    var redrawScheduled = false;
    var args = null;
    return function frame() {
        if (args === null && !redrawScheduled) {
            redrawScheduled = true;
            raf(function redraw() {
                redrawScheduled = false;
                var length = args.length;
                var _args = new Array(length);
                for(var i = 0; i < length; i++)_args[i] = args[i];
                render.apply(render, _args);
                args = null;
            });
        }
        args = arguments;
    };
}

},{"assert":"bGavs"}],"g37Sw":[function(require,module,exports) {
var splice = require('remove-array-items');
var nanotiming = require('nanotiming');
var assert = require('assert');
module.exports = Nanobus;
function Nanobus(name) {
    if (!(this instanceof Nanobus)) return new Nanobus(name);
    this._name = name || 'nanobus';
    this._starListeners = [];
    this._listeners = {
    };
}
Nanobus.prototype.emit = function(eventName) {
    assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.emit: eventName should be type string or symbol');
    var data = [];
    for(var i = 1, len = arguments.length; i < len; i++)data.push(arguments[i]);
    var emitTiming = nanotiming(this._name + "('" + eventName.toString() + "')");
    var listeners = this._listeners[eventName];
    if (listeners && listeners.length > 0) this._emit(this._listeners[eventName], data);
    if (this._starListeners.length > 0) this._emit(this._starListeners, eventName, data, emitTiming.uuid);
    emitTiming();
    return this;
};
Nanobus.prototype.on = Nanobus.prototype.addListener = function(eventName, listener) {
    assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.on: eventName should be type string or symbol');
    assert.equal(typeof listener, 'function', 'nanobus.on: listener should be type function');
    if (eventName === '*') this._starListeners.push(listener);
    else {
        if (!this._listeners[eventName]) this._listeners[eventName] = [];
        this._listeners[eventName].push(listener);
    }
    return this;
};
Nanobus.prototype.prependListener = function(eventName, listener) {
    assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.prependListener: eventName should be type string or symbol');
    assert.equal(typeof listener, 'function', 'nanobus.prependListener: listener should be type function');
    if (eventName === '*') this._starListeners.unshift(listener);
    else {
        if (!this._listeners[eventName]) this._listeners[eventName] = [];
        this._listeners[eventName].unshift(listener);
    }
    return this;
};
Nanobus.prototype.once = function(eventName, listener) {
    assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.once: eventName should be type string or symbol');
    assert.equal(typeof listener, 'function', 'nanobus.once: listener should be type function');
    var self = this;
    this.on(eventName, once);
    function once() {
        listener.apply(self, arguments);
        self.removeListener(eventName, once);
    }
    return this;
};
Nanobus.prototype.prependOnceListener = function(eventName, listener) {
    assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.prependOnceListener: eventName should be type string or symbol');
    assert.equal(typeof listener, 'function', 'nanobus.prependOnceListener: listener should be type function');
    var self = this;
    this.prependListener(eventName, once);
    function once() {
        listener.apply(self, arguments);
        self.removeListener(eventName, once);
    }
    return this;
};
Nanobus.prototype.removeListener = function(eventName, listener1) {
    assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.removeListener: eventName should be type string or symbol');
    assert.equal(typeof listener1, 'function', 'nanobus.removeListener: listener should be type function');
    if (eventName === '*') {
        this._starListeners = this._starListeners.slice();
        return remove(this._starListeners, listener1);
    } else {
        if (typeof this._listeners[eventName] !== 'undefined') this._listeners[eventName] = this._listeners[eventName].slice();
        return remove(this._listeners[eventName], listener1);
    }
    function remove(arr, listener) {
        if (!arr) return;
        var index = arr.indexOf(listener);
        if (index !== -1) {
            splice(arr, index, 1);
            return true;
        }
    }
};
Nanobus.prototype.removeAllListeners = function(eventName) {
    if (eventName) {
        if (eventName === '*') this._starListeners = [];
        else this._listeners[eventName] = [];
    } else {
        this._starListeners = [];
        this._listeners = {
        };
    }
    return this;
};
Nanobus.prototype.listeners = function(eventName) {
    var listeners = eventName !== '*' ? this._listeners[eventName] : this._starListeners;
    var ret = [];
    if (listeners) {
        var ilength = listeners.length;
        for(var i = 0; i < ilength; i++)ret.push(listeners[i]);
    }
    return ret;
};
Nanobus.prototype._emit = function(arr, eventName, data, uuid) {
    if (typeof arr === 'undefined') return;
    if (arr.length === 0) return;
    if (data === undefined) {
        data = eventName;
        eventName = null;
    }
    if (eventName) {
        if (uuid !== undefined) data = [
            eventName
        ].concat(data, uuid);
        else data = [
            eventName
        ].concat(data);
    }
    var length = arr.length;
    for(var i = 0; i < length; i++){
        var listener = arr[i];
        listener.apply(listener, data);
    }
};

},{"remove-array-items":"lNKlK","nanotiming":"bCrSz","assert":"bGavs"}],"lNKlK":[function(require,module,exports) {
'use strict';
/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */ module.exports = function removeItems(arr, startIdx, removeCount) {
    var i, length = arr.length;
    if (startIdx >= length || removeCount === 0) return;
    removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
    var len = length - removeCount;
    for(i = startIdx; i < len; ++i)arr[i] = arr[i + removeCount];
    arr.length = len;
};

},{}],"eVplY":[function(require,module,exports) {
var assert = require('assert');
var LRU = require('nanolru');
module.exports = ChooComponentCache;
function ChooComponentCache(state, emit, lru) {
    assert.ok(this instanceof ChooComponentCache, 'ChooComponentCache should be created with `new`');
    assert.equal(typeof state, 'object', 'ChooComponentCache: state should be type object');
    assert.equal(typeof emit, 'function', 'ChooComponentCache: emit should be type function');
    if (typeof lru === 'number') this.cache = new LRU(lru);
    else this.cache = lru || new LRU(100);
    this.state = state;
    this.emit = emit;
}
// Get & create component instances.
ChooComponentCache.prototype.render = function(Component, id) {
    assert.equal(typeof Component, 'function', 'ChooComponentCache.render: Component should be type function');
    assert.ok(typeof id === 'string' || typeof id === 'number', 'ChooComponentCache.render: id should be type string or type number');
    var el = this.cache.get(id);
    if (!el) {
        var args = [];
        for(var i = 2, len = arguments.length; i < len; i++)args.push(arguments[i]);
        args.unshift(Component, id, this.state, this.emit);
        el = newCall.apply(newCall, args);
        this.cache.set(id, el);
    }
    return el;
};
// Because you can't call `new` and `.apply()` at the same time. This is a mad
// hack, but hey it works so we gonna go for it. Whoop.
function newCall(Cls) {
    return new (Cls.bind.apply(Cls, arguments)) // eslint-disable-line
    ;
}

},{"assert":"bGavs","nanolru":"caQIP"}],"caQIP":[function(require,module,exports) {
module.exports = LRU;
function LRU(opts) {
    if (!(this instanceof LRU)) return new LRU(opts);
    if (typeof opts === 'number') opts = {
        max: opts
    };
    if (!opts) opts = {
    };
    this.cache = {
    };
    this.head = this.tail = null;
    this.length = 0;
    this.max = opts.max || 1000;
    this.maxAge = opts.maxAge || 0;
}
Object.defineProperty(LRU.prototype, 'keys', {
    get: function() {
        return Object.keys(this.cache);
    }
});
LRU.prototype.clear = function() {
    this.cache = {
    };
    this.head = this.tail = null;
    this.length = 0;
};
LRU.prototype.remove = function(key) {
    if (typeof key !== 'string') key = '' + key;
    if (!this.cache.hasOwnProperty(key)) return;
    var element = this.cache[key];
    delete this.cache[key];
    this._unlink(key, element.prev, element.next);
    return element.value;
};
LRU.prototype._unlink = function(key, prev, next) {
    this.length--;
    if (this.length === 0) this.head = this.tail = null;
    else {
        if (this.head === key) {
            this.head = prev;
            this.cache[this.head].next = null;
        } else if (this.tail === key) {
            this.tail = next;
            this.cache[this.tail].prev = null;
        } else {
            this.cache[prev].next = next;
            this.cache[next].prev = prev;
        }
    }
};
LRU.prototype.peek = function(key) {
    if (!this.cache.hasOwnProperty(key)) return;
    var element = this.cache[key];
    if (!this._checkAge(key, element)) return;
    return element.value;
};
LRU.prototype.set = function(key, value) {
    if (typeof key !== 'string') key = '' + key;
    var element;
    if (this.cache.hasOwnProperty(key)) {
        element = this.cache[key];
        element.value = value;
        if (this.maxAge) element.modified = Date.now();
        // If it's already the head, there's nothing more to do:
        if (key === this.head) return value;
        this._unlink(key, element.prev, element.next);
    } else {
        element = {
            value: value,
            modified: 0,
            next: null,
            prev: null
        };
        if (this.maxAge) element.modified = Date.now();
        this.cache[key] = element;
        // Eviction is only possible if the key didn't already exist:
        if (this.length === this.max) this.evict();
    }
    this.length++;
    element.next = null;
    element.prev = this.head;
    if (this.head) this.cache[this.head].next = key;
    this.head = key;
    if (!this.tail) this.tail = key;
    return value;
};
LRU.prototype._checkAge = function(key, element) {
    if (this.maxAge && Date.now() - element.modified > this.maxAge) {
        this.remove(key);
        return false;
    }
    return true;
};
LRU.prototype.get = function(key) {
    if (typeof key !== 'string') key = '' + key;
    if (!this.cache.hasOwnProperty(key)) return;
    var element = this.cache[key];
    if (!this._checkAge(key, element)) return;
    if (this.head !== key) {
        if (key === this.tail) {
            this.tail = element.next;
            this.cache[this.tail].prev = null;
        } else // Set prev.next -> element.next:
        this.cache[element.prev].next = element.next;
        // Set element.next.prev -> element.prev:
        this.cache[element.next].prev = element.prev;
        // Element is the new head
        this.cache[this.head].next = key;
        element.prev = this.head;
        element.next = null;
        this.head = key;
    }
    return element.value;
};
LRU.prototype.evict = function() {
    if (!this.tail) return;
    this.remove(this.tail);
};

},{}],"8vY63":[function(require,module,exports) {
var EventEmitter = require('events').EventEmitter;
var storage = require('./lib/storage');
var logger = require('./lib/logger');
var debug = require('./lib/debug');
var copy = require('./lib/copy');
var help = require('./lib/help');
var perf = require('./lib/perf');
var log = require('./lib/log');
var getAllRoutes = require('wayfarer/get-all-routes');
module.exports = expose;
function expose(opts) {
    opts = opts || {
    };
    store.storeName = 'choo-devtools';
    function store(state, emitter, app) {
        var localEmitter = new EventEmitter();
        if (typeof window !== 'undefined') {
            logger(state, emitter, opts);
        }
        emitter.on('DOMContentLoaded', function() {
            if (typeof window === 'undefined') return;
            window.choo = {
            };
            window.choo.state = state;
            window.choo.emit = function() {
                emitter.emit.apply(emitter, arguments);
            };
            window.choo.on = function(eventName, listener) {
                emitter.on(eventName, listener);
            };
            debug(state, emitter, app, localEmitter);
            log(state, emitter, app, localEmitter);
            perf(state, emitter, app, localEmitter);
            window.choo.copy = copy;
            if (app.router && app.router.router) {
                window.choo.routes = Object.keys(getAllRoutes(app.router.router));
            }
            storage();
            help();
        });
    }
    return store;
}

},{"events":"4jW6b","./lib/storage":"eu34b","./lib/logger":"9aazy","./lib/debug":"d4afu","./lib/copy":"6zQH0","./lib/help":"bdwPo","./lib/perf":"6qQd3","./lib/log":"g5hBP","wayfarer/get-all-routes":"1N2ak"}],"4jW6b":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== 'function') throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === 'error';
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === 'function') ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit('newListener', type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === 'function') // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
        }
    } else if (typeof list !== 'function') {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === 'function') this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === 'function') return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === 'function') return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === 'function') emitter.removeListener('error', errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== 'error') addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === 'function') // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"eu34b":[function(require,module,exports) {
var pretty = require('prettier-bytes');
module.exports = storage;
function storage() {
    Object.defineProperty(window.choo, 'storage', {
        get: get,
        set: noop
    });
    function get() {
        if (navigator.storage) {
            navigator.storage.estimate().then(function(estimate) {
                var value = (estimate.usage / estimate.quota).toFixed();
                clr('Max storage:', fmt(estimate.quota));
                clr('Storage used:', fmt(estimate.usage) + ' (' + value + '%)');
                navigator.storage.persisted().then(function(bool) {
                    var val = bool ? 'enabled' : 'disabled';
                    clr('Persistent storage:', val);
                });
            });
            return 'Calculating storage quota…';
        } else {
            var protocol = window.location.protocol;
            return /https/.test(protocol) ? "The Storage API is unavailable in this browser. We're sorry!" : 'The Storage API is unavailable. Serving this site over HTTPS might help enable it!';
        }
    }
}
function clr(msg, arg) {
    var color = '#cc99cc';
    console.log('%c' + msg, 'color: ' + color, arg);
}
function fmt(num) {
    return pretty(num).replace(' ', '');
}
function noop() {
}

},{"prettier-bytes":"3GiPQ"}],"3GiPQ":[function(require,module,exports) {
module.exports = prettierBytes;
function prettierBytes(num) {
    if (typeof num !== 'number' || isNaN(num)) throw new TypeError('Expected a number, got ' + typeof num);
    var neg = num < 0;
    var units = [
        'B',
        'KB',
        'MB',
        'GB',
        'TB',
        'PB',
        'EB',
        'ZB',
        'YB'
    ];
    if (neg) num = -num;
    if (num < 1) return (neg ? '-' : '') + num + ' B';
    var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1);
    num = Number(num / Math.pow(1000, exponent));
    var unit = units[exponent];
    if (num >= 10 || num % 1 === 0) // Do not show decimals when the number is two-digit, or if the number has no
    // decimal component.
    return (neg ? '-' : '') + num.toFixed(0) + ' ' + unit;
    else return (neg ? '-' : '') + num.toFixed(1) + ' ' + unit;
}

},{}],"9aazy":[function(require,module,exports) {
var scheduler = require('nanoscheduler')();
var nanologger = require('nanologger');
var Hooks = require('choo-hooks');
module.exports = logger1;
function logger1(state, emitter, opts) {
    var initialRender = true;
    var hooks = Hooks(emitter);
    var log = nanologger('choo');
    hooks.on('log:debug', logger('debug'));
    hooks.on('log:info', logger('info'));
    hooks.on('log:warn', logger('warn'));
    hooks.on('log:error', logger('error'));
    hooks.on('log:fatal', logger('fatal'));
    hooks.on('event', function(eventName, data, timing) {
        if (opts.filter && !opts.filter(eventName, data, timing)) return;
        if (timing) {
            var duration = timing.duration.toFixed();
            var level = duration < 50 ? 'info' : 'warn';
            if (data !== undefined) logger(level)(eventName, data, duration + 'ms');
            else logger(level)(eventName, duration + 'ms');
        } else if (data !== undefined) logger('info')(eventName, data);
        else logger('info')(eventName);
    });
    hooks.on('unhandled', function(eventName, data) {
        logger('error')('No listeners for ' + eventName);
    });
    hooks.on('DOMContentLoaded', function(timing) {
        if (!timing) return logger('info')('DOMContentLoaded');
        var level = timing.interactive < 1000 ? 'info' : 'warn';
        logger(level)('DOMContentLoaded', timing.interactive + 'ms to interactive');
    });
    hooks.on('render', function(timings) {
        if (!timings || !timings.render) return logger('info')('render');
        var duration = timings.render.duration.toFixed();
        var msg = 'render';
        if (initialRender) {
            initialRender = false;
            msg = 'initial ' + msg;
        }
        // each frame has 10ms available for userland stuff
        var fps = Math.min((600 / duration).toFixed(), 60);
        if (fps === 60) logger('info')(msg, fps + 'fps', duration + 'ms');
        else {
            var times = {
                render: timings.render.duration.toFixed() + 'ms'
            };
            if (timings.morph) times.morph = timings.morph.duration.toFixed() + 'ms';
            logger('warn')(msg, fps + 'fps', duration + 'ms', times);
        }
    });
    hooks.on('resource-timing-buffer-full', function() {
        logger('error')("The browser's Resource Resource timing buffer is full. Cannot store any more timing information");
    });
    hooks.start();
    function logger(level) {
        return function() {
            var args = [];
            for(var i = 0, len = arguments.length; i < len; i++)args.push(arguments[i]);
            scheduler.push(function() {
                log[level].apply(log, args);
            });
        };
    }
}

},{"nanoscheduler":"5d5rY","nanologger":"htPsH","choo-hooks":"h2QXM"}],"htPsH":[function(require,module,exports) {
var assert = require('assert');
var emojis = {
    trace: '🔍',
    debug: '🐛',
    info: '✨',
    warn: '⚠️',
    error: '🚨',
    fatal: '💀'
};
var levels = {
    trace: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60
};
var defaultColors = {
    foreground: '#d3c0c8',
    background: '#2d2d2d',
    black: '#2d2d2d',
    red: '#f2777a',
    green: '#99cc99',
    yellow: '#ffcc66',
    blue: '#6699cc',
    magenta: '#cc99cc',
    cyan: '#66cccc',
    white: '#d3d0c8',
    brightBlack: '#747369'
};
module.exports = Nanologger;
function Nanologger(name, opts) {
    opts = opts || {
    };
    if (!(this instanceof Nanologger)) return new Nanologger(name, opts);
    assert.equal(typeof opts, 'object', 'nanologger: opts should be type object');
    this._name = name || '';
    this._colors = Object.assign({
    }, defaultColors, opts.colors || {
    });
    try {
        this.logLevel = window.localStorage.getItem('logLevel') || 'info';
    } catch (e) {
        this.logLevel = 'info';
    }
    this._logLevel = levels[this.logLevel];
}
Nanologger.prototype.trace = function() {
    var args = [
        'trace'
    ];
    for(var i = 0, len = arguments.length; i < len; i++)args.push(arguments[i]);
    this._print.apply(this, args);
};
Nanologger.prototype.debug = function() {
    var args = [
        'debug'
    ];
    for(var i = 0, len = arguments.length; i < len; i++)args.push(arguments[i]);
    this._print.apply(this, args);
};
Nanologger.prototype.info = function() {
    var args = [
        'info'
    ];
    for(var i = 0, len = arguments.length; i < len; i++)args.push(arguments[i]);
    this._print.apply(this, args);
};
Nanologger.prototype.warn = function() {
    var args = [
        'warn'
    ];
    for(var i = 0, len = arguments.length; i < len; i++)args.push(arguments[i]);
    this._print.apply(this, args);
};
Nanologger.prototype.error = function() {
    var args = [
        'error'
    ];
    for(var i = 0, len = arguments.length; i < len; i++)args.push(arguments[i]);
    this._print.apply(this, args);
};
Nanologger.prototype.fatal = function() {
    var args = [
        'fatal'
    ];
    for(var i = 0, len = arguments.length; i < len; i++)args.push(arguments[i]);
    this._print.apply(this, args);
};
Nanologger.prototype._print = function(level) {
    if (levels[level] < this._logLevel) return;
    var time = getTimeStamp();
    var emoji = emojis[level];
    var name = this._name || 'unknown';
    var msgColor = level === 'error' || level.fatal ? this._colors.red : level === 'warn' ? this._colors.yellow : this._colors.green;
    var objs = [];
    var args = [
        null
    ];
    var msg = '%c%s ' + emoji + ' %c%s';
    args.push(color1(this._colors.brightBlack), time);
    args.push(color1(this._colors.magenta), name);
    for(var i = 1, len = arguments.length; i < len; i++){
        var arg = arguments[i];
        if (typeof arg === 'string') {
            if (i === 1) {
                // first string argument is in color
                msg += ' %c%s';
                args.push(color1(msgColor));
                args.push(arg);
            } else if (/ms$/.test(arg)) {
                // arguments finishing with 'ms', grey out
                msg += ' %c%s';
                args.push(color1(this._colors.brightBlack));
                args.push(arg);
            } else {
                // normal colors
                msg += ' %c%s';
                args.push(color1(this._colors.white));
                args.push(arg);
            }
        } else if (typeof arg === 'number') {
            msg += ' %c%d';
            args.push(color1(this._colors.magenta));
            args.push(arg);
        } else objs.push(arg);
    }
    args[0] = msg;
    objs.forEach(function(obj) {
        args.push(obj);
    });
    // In IE/Edge console functions don't inherit from Function.prototype
    // so this is necessary to get all the args applied.
    Function.prototype.apply.apply(console.log, [
        console,
        args
    ]);
};
function color1(color) {
    return 'color: ' + color + ';';
}
function getTimeStamp() {
    var date = new Date();
    var hours = pad(date.getHours().toString());
    var minutes = pad(date.getMinutes().toString());
    var seconds = pad(date.getSeconds().toString());
    return hours + ':' + minutes + ':' + seconds;
}
function pad(str) {
    return str.length !== 2 ? 0 + str : str;
}

},{"assert":"dod7R"}],"dod7R":[function(require,module,exports) {
var process = require("process");
// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var _require = require('./internal/errors'), _require$codes = _require.codes, ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE, ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
var AssertionError = require('./internal/assert/assertion_error');
var _require2 = require('util/'), inspect = _require2.inspect;
var _require$types = require('util/').types, isPromise = _require$types.isPromise, isRegExp = _require$types.isRegExp;
var objectAssign = Object.assign ? Object.assign : require('es6-object-assign').assign;
var objectIs = Object.is ? Object.is : require('object-is');
var errorCache = new Map();
var isDeepEqual;
var isDeepStrictEqual;
var parseExpressionAt;
var findNodeAround;
var decoder;
function lazyLoadComparison() {
    var comparison = require('./internal/util/comparisons');
    isDeepEqual = comparison.isDeepEqual;
    isDeepStrictEqual = comparison.isDeepStrictEqual;
} // Escape control characters but not \n and \t to keep the line breaks and
// indentation intact.
// eslint-disable-next-line no-control-regex
var escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
var meta = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    '\\b',
    '',
    '',
    "\\u000b",
    '\\f',
    '',
    "\\u000e",
    "\\u000f",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001a",
    "\\u001b",
    "\\u001c",
    "\\u001d",
    "\\u001e",
    "\\u001f"
];
var escapeFn = function escapeFn(str) {
    return meta[str.charCodeAt(0)];
};
var warned = false; // The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.
var assert = module.exports = ok;
var NO_EXCEPTION_SENTINEL = {
}; // All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function innerFail(obj) {
    if (obj.message instanceof Error) throw obj.message;
    throw new AssertionError(obj);
}
function fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) internalMessage = 'Failed';
    else if (argsLen === 1) {
        message = actual;
        actual = undefined;
    } else {
        if (warned === false) {
            warned = true;
            var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
            warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", 'DeprecationWarning', 'DEP0094');
        }
        if (argsLen === 2) operator = '!=';
    }
    if (message instanceof Error) throw message;
    var errArgs = {
        actual: actual,
        expected: expected,
        operator: operator === undefined ? 'fail' : operator,
        stackStartFn: stackStartFn || fail
    };
    if (message !== undefined) errArgs.message = message;
    var err = new AssertionError(errArgs);
    if (internalMessage) {
        err.message = internalMessage;
        err.generatedMessage = true;
    }
    throw err;
}
assert.fail = fail; // The AssertionError is defined in internal/error.
assert.AssertionError = AssertionError;
function innerOk(fn, argLen, value, message) {
    if (!value) {
        var generatedMessage = false;
        if (argLen === 0) {
            generatedMessage = true;
            message = 'No value argument passed to `assert.ok()`';
        } else if (message instanceof Error) throw message;
        var err = new AssertionError({
            actual: value,
            expected: true,
            message: message,
            operator: '==',
            stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
    }
} // Pure assertion tests whether a value is truthy, as determined
// by !!value.
function ok() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    innerOk.apply(void 0, [
        ok,
        args.length
    ].concat(args));
}
assert.ok = ok; // The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */ assert.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
     // eslint-disable-next-line eqeqeq
    if (actual != expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: '==',
        stackStartFn: equal
    });
}; // The non-equality assertion tests for whether two objects are not
// equal with !=.
assert.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
     // eslint-disable-next-line eqeqeq
    if (actual == expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: '!=',
        stackStartFn: notEqual
    });
}; // The equivalence assertion tests a deep equality relation.
assert.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'deepEqual',
        stackStartFn: deepEqual
    });
}; // The non-equivalence assertion tests for any deep inequality.
assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'notDeepEqual',
        stackStartFn: notDeepEqual
    });
};
/* eslint-enable */ assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'deepStrictEqual',
        stackStartFn: deepStrictEqual
    });
};
assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'notDeepStrictEqual',
        stackStartFn: notDeepStrictEqual
    });
}
assert.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (!objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'strictEqual',
        stackStartFn: strictEqual
    });
};
assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'notStrictEqual',
        stackStartFn: notStrictEqual
    });
};
var Comparison1 = function Comparison(obj, keys, actual) {
    var _this = this;
    _classCallCheck(this, Comparison);
    keys.forEach(function(key) {
        if (key in obj) {
            if (actual !== undefined && typeof actual[key] === 'string' && isRegExp(obj[key]) && obj[key].test(actual[key])) _this[key] = actual[key];
            else _this[key] = obj[key];
        }
    });
};
function compareExceptionKey(actual, expected, key, message, keys, fn) {
    if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
        if (!message) {
            // Create placeholder objects to create a nice output.
            var a = new Comparison1(actual, keys);
            var b = new Comparison1(expected, keys, actual);
            var err = new AssertionError({
                actual: a,
                expected: b,
                operator: 'deepStrictEqual',
                stackStartFn: fn
            });
            err.actual = actual;
            err.expected = expected;
            err.operator = fn.name;
            throw err;
        }
        innerFail({
            actual: actual,
            expected: expected,
            message: message,
            operator: fn.name,
            stackStartFn: fn
        });
    }
}
function expectedException(actual, expected, msg, fn) {
    if (typeof expected !== 'function') {
        if (isRegExp(expected)) return expected.test(actual); // assert.doesNotThrow does not accept objects.
        if (arguments.length === 2) throw new ERR_INVALID_ARG_TYPE('expected', [
            'Function',
            'RegExp'
        ], expected);
         // Handle primitives properly.
        if (_typeof(actual) !== 'object' || actual === null) {
            var err = new AssertionError({
                actual: actual,
                expected: expected,
                message: msg,
                operator: 'deepStrictEqual',
                stackStartFn: fn
            });
            err.operator = fn.name;
            throw err;
        }
        var keys = Object.keys(expected); // Special handle errors to make sure the name and the message are compared
        // as well.
        if (expected instanceof Error) keys.push('name', 'message');
        else if (keys.length === 0) throw new ERR_INVALID_ARG_VALUE('error', expected, 'may not be an empty object');
        if (isDeepEqual === undefined) lazyLoadComparison();
        keys.forEach(function(key) {
            if (typeof actual[key] === 'string' && isRegExp(expected[key]) && expected[key].test(actual[key])) return;
            compareExceptionKey(actual, expected, key, msg, keys, fn);
        });
        return true;
    } // Guard instanceof against arrow functions as they don't have a prototype.
    if (expected.prototype !== undefined && actual instanceof expected) return true;
    if (Error.isPrototypeOf(expected)) return false;
    return expected.call({
    }, actual) === true;
}
function getActual(fn) {
    if (typeof fn !== 'function') throw new ERR_INVALID_ARG_TYPE('fn', 'Function', fn);
    try {
        fn();
    } catch (e) {
        return e;
    }
    return NO_EXCEPTION_SENTINEL;
}
function checkIsPromise(obj) {
    // Accept native ES6 promises and promises that are implemented in a similar
    // way. Do not accept thenables that use a function as `obj` and that have no
    // `catch` handler.
    // TODO: thenables are checked up until they have the correct methods,
    // but according to documentation, the `then` method should receive
    // the `fulfill` and `reject` arguments as well or it may be never resolved.
    return isPromise(obj) || obj !== null && _typeof(obj) === 'object' && typeof obj.then === 'function' && typeof obj.catch === 'function';
}
function waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
        var resultPromise;
        if (typeof promiseFn === 'function') {
            // Return a rejected promise if `promiseFn` throws synchronously.
            resultPromise = promiseFn(); // Fail in case no promise is returned.
            if (!checkIsPromise(resultPromise)) throw new ERR_INVALID_RETURN_VALUE('instance of Promise', 'promiseFn', resultPromise);
        } else if (checkIsPromise(promiseFn)) resultPromise = promiseFn;
        else throw new ERR_INVALID_ARG_TYPE('promiseFn', [
            'Function',
            'Promise'
        ], promiseFn);
        return Promise.resolve().then(function() {
            return resultPromise;
        }).then(function() {
            return NO_EXCEPTION_SENTINEL;
        }).catch(function(e) {
            return e;
        });
    });
}
function expectsError(stackStartFn, actual, error, message) {
    if (typeof error === 'string') {
        if (arguments.length === 4) throw new ERR_INVALID_ARG_TYPE('error', [
            'Object',
            'Error',
            'Function',
            'RegExp'
        ], error);
        if (_typeof(actual) === 'object' && actual !== null) {
            if (actual.message === error) throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error message \"".concat(actual.message, "\" is identical to the message."));
        } else if (actual === error) throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error \"".concat(actual, "\" is identical to the message."));
        message = error;
        error = undefined;
    } else if (error != null && _typeof(error) !== 'object' && typeof error !== 'function') throw new ERR_INVALID_ARG_TYPE('error', [
        'Object',
        'Error',
        'Function',
        'RegExp'
    ], error);
    if (actual === NO_EXCEPTION_SENTINEL) {
        var details = '';
        if (error && error.name) details += " (".concat(error.name, ")");
        details += message ? ": ".concat(message) : '.';
        var fnType = stackStartFn.name === 'rejects' ? 'rejection' : 'exception';
        innerFail({
            actual: undefined,
            expected: error,
            operator: stackStartFn.name,
            message: "Missing expected ".concat(fnType).concat(details),
            stackStartFn: stackStartFn
        });
    }
    if (error && !expectedException(actual, error, message, stackStartFn)) throw actual;
}
function expectsNoError(stackStartFn, actual, error, message) {
    if (actual === NO_EXCEPTION_SENTINEL) return;
    if (typeof error === 'string') {
        message = error;
        error = undefined;
    }
    if (!error || expectedException(actual, error)) {
        var details = message ? ": ".concat(message) : '.';
        var fnType = stackStartFn.name === 'doesNotReject' ? 'rejection' : 'exception';
        innerFail({
            actual: actual,
            expected: error,
            operator: stackStartFn.name,
            message: "Got unwanted ".concat(fnType).concat(details, "\n") + "Actual message: \"".concat(actual && actual.message, "\""),
            stackStartFn: stackStartFn
        });
    }
    throw actual;
}
assert.throws = function throws(promiseFn) {
    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
    expectsError.apply(void 0, [
        throws,
        getActual(promiseFn)
    ].concat(args));
};
assert.rejects = function rejects(promiseFn) {
    for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
    return waitForActual(promiseFn).then(function(result) {
        return expectsError.apply(void 0, [
            rejects,
            result
        ].concat(args));
    });
};
assert.doesNotThrow = function doesNotThrow(fn) {
    for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++)args[_key4 - 1] = arguments[_key4];
    expectsNoError.apply(void 0, [
        doesNotThrow,
        getActual(fn)
    ].concat(args));
};
assert.doesNotReject = function doesNotReject(fn) {
    for(var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++)args[_key5 - 1] = arguments[_key5];
    return waitForActual(fn).then(function(result) {
        return expectsNoError.apply(void 0, [
            doesNotReject,
            result
        ].concat(args));
    });
};
assert.ifError = function ifError(err) {
    if (err !== null && err !== undefined) {
        var message = 'ifError got unwanted exception: ';
        if (_typeof(err) === 'object' && typeof err.message === 'string') {
            if (err.message.length === 0 && err.constructor) message += err.constructor.name;
            else message += err.message;
        } else message += inspect(err);
        var newErr = new AssertionError({
            actual: err,
            expected: null,
            operator: 'ifError',
            message: message,
            stackStartFn: ifError
        }); // Make sure we actually have a stack trace!
        var origStack = err.stack;
        if (typeof origStack === 'string') {
            // This will remove any duplicated frames from the error frames taken
            // from within `ifError` and add the original error frames to the newly
            // created ones.
            var tmp2 = origStack.split('\n');
            tmp2.shift(); // Filter all frames existing in err.stack.
            var tmp1 = newErr.stack.split('\n');
            for(var i = 0; i < tmp2.length; i++){
                // Find the first occurrence of the frame.
                var pos = tmp1.indexOf(tmp2[i]);
                if (pos !== -1) {
                    // Only keep new frames.
                    tmp1 = tmp1.slice(0, pos);
                    break;
                }
            }
            newErr.stack = "".concat(tmp1.join('\n'), "\n").concat(tmp2.join('\n'));
        }
        throw newErr;
    }
}; // Expose a strict only variant of assert
function strict() {
    for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)args[_key6] = arguments[_key6];
    innerOk.apply(void 0, [
        strict,
        args.length
    ].concat(args));
}
assert.strict = objectAssign(strict, assert, {
    equal: assert.strictEqual,
    deepEqual: assert.deepStrictEqual,
    notEqual: assert.notStrictEqual,
    notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

},{"process":"h1waS","./internal/errors":"2yHSB","./internal/assert/assertion_error":"iaUgZ","util/":"gQcxw","es6-object-assign":"8py8z","object-is":"jyhzj","./internal/util/comparisons":"2Alac"}],"h1waS":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"2yHSB":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/errors.js
// https://github.com/nodejs/node/commit/3b044962c48fe313905877a96b5d0894a5404f6f
/* eslint node-core/documented-errors: "error" */ /* eslint node-core/alphabetize-errors: "error" */ /* eslint node-core/prefer-util-format-errors: "error" */ 'use strict'; // The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var codes = {
}; // Lazy loaded
var assert;
var util;
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError1 = /*#__PURE__*/ function(_Base) {
        _inherits(NodeError, _Base);
        function NodeError(arg1, arg2, arg3) {
            var _this;
            _classCallCheck(this, NodeError);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeError).call(this, getMessage(arg1, arg2, arg3)));
            _this.code = code;
            return _this;
        }
        return NodeError;
    }(Base);
    codes[code] = NodeError1;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== 'number') start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType('ERR_AMBIGUOUS_ARGUMENT', 'The "%s" argument is ambiguous. %s', TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function(name, expected, actual) {
    if (assert === undefined) assert = require('../assert');
    assert(typeof name === 'string', "'name' must be a string"); // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === 'string' && startsWith(expected, 'not ')) {
        determiner = 'must not be';
        expected = expected.replace(/^not /, '');
    } else determiner = 'must be';
    var msg;
    if (endsWith(name, ' argument')) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    else {
        var type = includes(name, '.') ? 'property' : 'argument';
        msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    } // TODO(BridgeAR): Improve the output by showing `null` and similar.
    msg += ". Received type ".concat(_typeof(actual));
    return msg;
}, TypeError);
createErrorType('ERR_INVALID_ARG_VALUE', function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is invalid';
    if (util === undefined) util = require('util/');
    var inspected = util.inspect(value);
    if (inspected.length > 128) inspected = "".concat(inspected.slice(0, 128), "...");
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
}, TypeError, RangeError);
createErrorType('ERR_INVALID_RETURN_VALUE', function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) type = "instance of ".concat(value.constructor.name);
    else type = "type ".concat(_typeof(value));
    return "Expected ".concat(input, " to be returned from the \"").concat(name, "\"") + " function but got ".concat(type, ".");
}, TypeError);
createErrorType('ERR_MISSING_ARGS', function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    if (assert === undefined) assert = require('../assert');
    assert(args.length > 0, 'At least one arg needs to be specified');
    var msg = 'The ';
    var len = args.length;
    args = args.map(function(a) {
        return "\"".concat(a, "\"");
    });
    switch(len){
        case 1:
            msg += "".concat(args[0], " argument");
            break;
        case 2:
            msg += "".concat(args[0], " and ").concat(args[1], " arguments");
            break;
        default:
            msg += args.slice(0, len - 1).join(', ');
            msg += ", and ".concat(args[len - 1], " arguments");
            break;
    }
    return "".concat(msg, " must be specified");
}, TypeError);
module.exports.codes = codes;

},{"../assert":"dod7R","util/":"gQcxw"}],"gQcxw":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {
    };
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
    if (!isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push(inspect(arguments[i]));
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%') return '%';
        if (i >= len) return x;
        switch(x){
            case '%s':
                return String(args[i++]);
            case '%d':
                return Number(args[i++]);
            case '%j':
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return '[Circular]';
                }
            default:
                return x;
        }
    });
    for(var x1 = args[i]; i < len; x1 = args[++i])if (isNull(x1) || !isObject(x1)) str += ' ' + x1;
    else str += ' ' + inspect(x1);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
    if (typeof process !== 'undefined' && process.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof process === 'undefined') return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (process.throwDeprecation) throw new Error(msg);
            else if (process.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var debugs = {
};
var debugEnvRegex = /^$/;
var debugEnv;
exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
            var pid = process.pid;
            debugs[set] = function() {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else debugs[set] = function() {
        };
    }
    return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    exports._extend(ctx, opts);
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
    'bold': [
        1,
        22
    ],
    'italic': [
        3,
        23
    ],
    'underline': [
        4,
        24
    ],
    'inverse': [
        7,
        27
    ],
    'white': [
        37,
        39
    ],
    'grey': [
        90,
        39
    ],
    'black': [
        30,
        39
    ],
    'blue': [
        34,
        39
    ],
    'cyan': [
        36,
        39
    ],
    'green': [
        32,
        39
    ],
    'magenta': [
        35,
        39
    ],
    'red': [
        31,
        39
    ],
    'yellow': [
        33,
        39
    ]
};
// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
};
function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
    else return str;
}
function stylizeNoColor(str, styleType) {
    return str;
}
function arrayToHash(array) {
    var hash = {
    };
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) return formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if (isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
        if (isError(value)) return formatError(value);
    }
    var base = '', array = false, braces = [
        '{',
        '}'
    ];
    // Make Array say that they are Array
    if (isArray(value)) {
        array = true;
        braces = [
            '[',
            ']'
        ];
    }
    // Make functions say that they are functions
    if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if (isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if (isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if (isError(value)) base = ' ' + formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        else return ctx.stylize('[Object]', 'special');
    }
    ctx.seen.push(value);
    var output;
    if (array) output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
    if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if (isNumber(value)) return ctx.stylize('' + value, 'number');
    if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if (isNull(value)) return ctx.stylize('null', 'null');
}
function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push('');
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize('[Getter/Setter]', 'special');
        else str = ctx.stylize('[Getter]', 'special');
    } else if (desc.set) str = ctx.stylize('[Setter]', 'special');
    if (!hasOwnProperty(visibleKeys, key)) name = '[' + key + ']';
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null);
            else str = formatValue(ctx, desc.value, recurseTimes - 1);
            if (str.indexOf('\n') > -1) {
                if (array) str = str.split('\n').map(function(line) {
                    return '  ' + line;
                }).join('\n').substr(2);
                else str = '\n' + str.split('\n').map(function(line) {
                    return '   ' + line;
                }).join('\n');
            }
        } else str = ctx.stylize('[Circular]', 'special');
    }
    if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) return str;
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, 'name');
        } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, 'string');
        }
    }
    return name + ': ' + str;
}
function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = require('./support/types');
function isArray(ar) {
    return Array.isArray(ar);
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === 'number';
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === 'string';
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
exports.types.isDate = isDate;
function isError(e) {
    return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;
function isFunction(arg) {
    return typeof arg === 'function';
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');
function objectToString(o) {
    return Object.prototype.toString.call(o);
}
function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
// 26 Feb 16:19:34
function timestamp() {
    var d = new Date();
    var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
    ].join(':');
    return [
        d.getDate(),
        months[d.getMonth()],
        time
    ].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
    console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */ exports.inherits = require('inherits');
exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
exports.promisify = function promisify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== 'function') throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }
    function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
        });
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        args.push(function(err, value) {
            if (err) promiseReject(err);
            else promiseResolve(value);
        });
        try {
            original.apply(this, args);
        } catch (err) {
            promiseReject(err);
        }
        return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};
exports.promisify.custom = kCustomPromisifiedSymbol;
function callbackifyOnRejected(reason, cb) {
    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
    // Because `null` is a special error value in callbacks which means "no error
    // occurred", we error-wrap so the callback consumer can distinguish between
    // "the promise rejected with null" or "the promise fulfilled with undefined".
    if (!reason) {
        var newReason = new Error('Promise was rejected with a falsy value');
        newReason.reason = reason;
        reason = newReason;
    }
    return cb(reason);
}
function callbackify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified() {
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        var maybeCb = args.pop();
        if (typeof maybeCb !== 'function') throw new TypeError('The last argument must be of type Function');
        var self = this;
        var cb = function() {
            return maybeCb.apply(self, arguments);
        };
        // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)
        original.apply(this, args).then(function(ret) {
            process.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
    return callbackified;
}
exports.callbackify = callbackify;

},{"process":"h1waS","./support/types":"60OYD","./support/isBuffer":"lHpqu","inherits":"6Aodc"}],"60OYD":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';
var isArgumentsObject = require('is-arguments');
var isGeneratorFunction = require('is-generator-function');
var whichTypedArray = require('which-typed-array');
var isTypedArray = require('is-typed-array');
function uncurryThis(f) {
    return f.call.bind(f);
}
var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';
var ObjectToString = uncurryThis(Object.prototype.toString);
var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);
if (BigIntSupported) var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
if (SymbolSupported) var symbolValue = uncurryThis(Symbol.prototype.valueOf);
function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== 'object') return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
    return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && typeof input === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
}
exports.isPromise = isPromise;
function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return isTypedArray(value) || isDataView(value);
}
exports.isArrayBufferView = isArrayBufferView;
function isUint8Array(value) {
    return whichTypedArray(value) === 'Uint8Array';
}
exports.isUint8Array = isUint8Array;
function isUint8ClampedArray(value) {
    return whichTypedArray(value) === 'Uint8ClampedArray';
}
exports.isUint8ClampedArray = isUint8ClampedArray;
function isUint16Array(value) {
    return whichTypedArray(value) === 'Uint16Array';
}
exports.isUint16Array = isUint16Array;
function isUint32Array(value) {
    return whichTypedArray(value) === 'Uint32Array';
}
exports.isUint32Array = isUint32Array;
function isInt8Array(value) {
    return whichTypedArray(value) === 'Int8Array';
}
exports.isInt8Array = isInt8Array;
function isInt16Array(value) {
    return whichTypedArray(value) === 'Int16Array';
}
exports.isInt16Array = isInt16Array;
function isInt32Array(value) {
    return whichTypedArray(value) === 'Int32Array';
}
exports.isInt32Array = isInt32Array;
function isFloat32Array(value) {
    return whichTypedArray(value) === 'Float32Array';
}
exports.isFloat32Array = isFloat32Array;
function isFloat64Array(value) {
    return whichTypedArray(value) === 'Float64Array';
}
exports.isFloat64Array = isFloat64Array;
function isBigInt64Array(value) {
    return whichTypedArray(value) === 'BigInt64Array';
}
exports.isBigInt64Array = isBigInt64Array;
function isBigUint64Array(value) {
    return whichTypedArray(value) === 'BigUint64Array';
}
exports.isBigUint64Array = isBigUint64Array;
function isMapToString(value) {
    return ObjectToString(value) === '[object Map]';
}
isMapToString.working = typeof Map !== 'undefined' && isMapToString(new Map());
function isMap(value) {
    if (typeof Map === 'undefined') return false;
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
}
exports.isMap = isMap;
function isSetToString(value) {
    return ObjectToString(value) === '[object Set]';
}
isSetToString.working = typeof Set !== 'undefined' && isSetToString(new Set());
function isSet(value) {
    if (typeof Set === 'undefined') return false;
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
}
exports.isSet = isSet;
function isWeakMapToString(value) {
    return ObjectToString(value) === '[object WeakMap]';
}
isWeakMapToString.working = typeof WeakMap !== 'undefined' && isWeakMapToString(new WeakMap());
function isWeakMap(value) {
    if (typeof WeakMap === 'undefined') return false;
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;
function isWeakSetToString(value) {
    return ObjectToString(value) === '[object WeakSet]';
}
isWeakSetToString.working = typeof WeakSet !== 'undefined' && isWeakSetToString(new WeakSet());
function isWeakSet(value) {
    return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;
function isArrayBufferToString(value) {
    return ObjectToString(value) === '[object ArrayBuffer]';
}
isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && isArrayBufferToString(new ArrayBuffer());
function isArrayBuffer(value) {
    if (typeof ArrayBuffer === 'undefined') return false;
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;
function isDataViewToString(value) {
    return ObjectToString(value) === '[object DataView]';
}
isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function isDataView(value) {
    if (typeof DataView === 'undefined') return false;
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
}
exports.isDataView = isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === '[object SharedArrayBuffer]';
}
function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === 'undefined') return false;
    if (typeof isSharedArrayBufferToString.working === 'undefined') isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;
function isAsyncFunction(value) {
    return ObjectToString(value) === '[object AsyncFunction]';
}
exports.isAsyncFunction = isAsyncFunction;
function isMapIterator(value) {
    return ObjectToString(value) === '[object Map Iterator]';
}
exports.isMapIterator = isMapIterator;
function isSetIterator(value) {
    return ObjectToString(value) === '[object Set Iterator]';
}
exports.isSetIterator = isSetIterator;
function isGeneratorObject(value) {
    return ObjectToString(value) === '[object Generator]';
}
exports.isGeneratorObject = isGeneratorObject;
function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === '[object WebAssembly.Module]';
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;
function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;
function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;
function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;
function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;
function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
}
exports.isBoxedPrimitive = isBoxedPrimitive;
function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== 'undefined' && (isArrayBuffer(value) || isSharedArrayBuffer(value));
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;
[
    'isProxy',
    'isExternal',
    'isModuleNamespaceObject'
].forEach(function(method) {
    Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
            throw new Error(method + ' is not supported in userland');
        }
    });
});

},{"is-arguments":"dekRw","is-generator-function":"9gHF3","which-typed-array":"iiqO1","is-typed-array":"drBx4"}],"dekRw":[function(require,module,exports) {
'use strict';
var hasToStringTag = require('has-tostringtag/shams')();
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) return false;
    return $toString(value) === '[object Arguments]';
};
var isLegacyArguments = function isArguments(value) {
    if (isStandardArguments(value)) return true;
    return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && $toString(value) !== '[object Array]' && $toString(value.callee) === '[object Function]';
};
var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"has-tostringtag/shams":"1Muns","call-bind/callBound":"03Cve"}],"1Muns":[function(require,module,exports) {
'use strict';
var hasSymbols = require('has-symbols/shams');
module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};

},{"has-symbols/shams":"g86PA"}],"g86PA":[function(require,module,exports) {
'use strict';
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') return false;
    if (typeof Symbol.iterator === 'symbol') return true;
    var obj = {
    };
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') return false;
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') return false;
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"03Cve":[function(require,module,exports) {
'use strict';
var GetIntrinsic = require('get-intrinsic');
var callBind = require('./');
var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) return callBind(intrinsic);
    return intrinsic;
};

},{"get-intrinsic":"jhaK5","./":"knSnl"}],"jhaK5":[function(require,module,exports) {
'use strict';
var undefined;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {
    }
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) try {
    $gOPD({
    }, '');
} catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
}
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require('has-symbols')();
var getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
}; // eslint-disable-line no-proto
var needsEval = {
};
var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%eval%': eval,
    '%EvalError%': EvalError,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': RangeError,
    '%ReferenceError%': ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};
var doEval1 = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') value = getEvalledConstructor('async function () {}');
    else if (name === '%GeneratorFunction%') value = getEvalledConstructor('function* () {}');
    else if (name === '%AsyncGeneratorFunction%') value = getEvalledConstructor('async function* () {}');
    else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) value = fn.prototype;
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = require('function-bind');
var hasOwn = require('has');
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    else if (last === '%' && first !== '%') throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval1(intrinsicName);
        if (typeof value === 'undefined' && !allowMissing) throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) throw new $TypeError('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') throw new $TypeError('"allowMissing" argument must be a boolean');
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) throw new $SyntaxError('property names with quotes must have matching quotes');
        if (part === 'constructor' || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"has-symbols":"fftzN","function-bind":"josvm","has":"fDH0U"}],"fftzN":[function(require,module,exports) {
'use strict';
var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');
module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') return false;
    if (typeof Symbol !== 'function') return false;
    if (typeof origSymbol('foo') !== 'symbol') return false;
    if (typeof Symbol('bar') !== 'symbol') return false;
    return hasSymbolSham();
};

},{"./shams":"g86PA"}],"josvm":[function(require,module,exports) {
'use strict';
var implementation = require('./implementation');
module.exports = Function.prototype.bind || implementation;

},{"./implementation":"6OGKy"}],"6OGKy":[function(require,module,exports) {
'use strict';
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return this;
        } else return target.apply(that, args.concat(slice.call(arguments)));
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs.push('$' + i);
    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"fDH0U":[function(require,module,exports) {
'use strict';
var bind = require('function-bind');
module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":"josvm"}],"knSnl":[function(require,module,exports) {
'use strict';
var bind = require('function-bind');
var GetIntrinsic = require('get-intrinsic');
var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');
if ($defineProperty) try {
    $defineProperty({
    }, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);
    if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, 'length');
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $defineProperty(func, 'length', {
            value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, 'apply', {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"function-bind":"josvm","get-intrinsic":"jhaK5"}],"9gHF3":[function(require,module,exports) {
'use strict';
var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = require('has-tostringtag/shams')();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
    if (!hasToStringTag) return false;
    try {
        return Function('return function*() {}')();
    } catch (e) {
    }
};
var GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== 'function') return false;
    if (isFnRegex.test(fnToStr.call(fn))) return true;
    if (!hasToStringTag) {
        var str = toStr.call(fn);
        return str === '[object GeneratorFunction]';
    }
    if (!getProto) return false;
    if (typeof GeneratorFunction === 'undefined') {
        var generatorFunc = getGeneratorFunc();
        GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    }
    return getProto(fn) === GeneratorFunction;
};

},{"has-tostringtag/shams":"1Muns"}],"iiqO1":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var forEach = require('foreach');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $slice = callBound('String.prototype.slice');
var toStrTags = {
};
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    if (typeof g[typedArray] === 'function') {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
                var superProto = getPrototypeOf(proto);
                descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
        }
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!foundName) try {
            var name = getter.call(value);
            if (name === typedArray) foundName = name;
        } catch (e) {
        }
    });
    return foundName;
};
var isTypedArray = require('is-typed-array');
module.exports = function whichTypedArray(value) {
    if (!isTypedArray(value)) return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) return $slice($toString(value), 8, -1);
    return tryTypedArrays(value);
};

},{"foreach":"9KuSd","available-typed-arrays":"jumeb","call-bind/callBound":"03Cve","has-tostringtag/shams":"1Muns","es-abstract/helpers/getOwnPropertyDescriptor":"2mrQm","is-typed-array":"drBx4"}],"9KuSd":[function(require,module,exports) {
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;
module.exports = function forEach(obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') throw new TypeError('iterator must be a function');
    var l = obj.length;
    if (l === +l) for(var i = 0; i < l; i++)fn.call(ctx, obj[i], i, obj);
    else {
        for(var k in obj)if (hasOwn.call(obj, k)) fn.call(ctx, obj[k], k, obj);
    }
};

},{}],"jumeb":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var possibleNames = [
    'BigInt64Array',
    'BigUint64Array',
    'Float32Array',
    'Float64Array',
    'Int16Array',
    'Int32Array',
    'Int8Array',
    'Uint16Array',
    'Uint32Array',
    'Uint8Array',
    'Uint8ClampedArray'
];
var g = typeof globalThis === 'undefined' ? global : globalThis;
module.exports = function availableTypedArrays() {
    var out = [];
    for(var i = 0; i < possibleNames.length; i++)if (typeof g[possibleNames[i]] === 'function') out[out.length] = possibleNames[i];
    return out;
};

},{}],"2mrQm":[function(require,module,exports) {
'use strict';
var GetIntrinsic = require('get-intrinsic');
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
if ($gOPD) try {
    $gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"get-intrinsic":"jhaK5"}],"drBx4":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var forEach = require('foreach');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {
};
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray] = descriptor.get;
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!anyTrue) try {
            anyTrue = getter.call(value) === typedArray;
        } catch (e) {
        }
    });
    return anyTrue;
};
module.exports = function isTypedArray(value) {
    if (!value || typeof value !== 'object') return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $slice($toString(value), 8, -1);
        return $indexOf(typedArrays, tag) > -1;
    }
    if (!gOPD) return false;
    return tryTypedArrays(value);
};

},{"foreach":"9KuSd","available-typed-arrays":"jumeb","call-bind/callBound":"03Cve","has-tostringtag/shams":"1Muns","es-abstract/helpers/getOwnPropertyDescriptor":"2mrQm"}],"lHpqu":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

},{}],"6Aodc":[function(require,module,exports) {
if (typeof Object.create === 'function') // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"iaUgZ":[function(require,module,exports) {
var process = require("process");
// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c
'use strict';
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class1);
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent1, args1, Class2) {
    if (isNativeReflectConstruct()) _construct = Reflect.construct;
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o1, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o1, p1);
}
function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o2);
}
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
var _require = require('util/'), inspect = _require.inspect;
var _require2 = require('../errors'), ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function repeat(str, count) {
    count = Math.floor(count);
    if (str.length == 0 || count == 0) return '';
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while(count){
        str += str;
        count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
}
var blue = '';
var green = '';
var red = '';
var white = '';
var kReadableOperator = {
    deepStrictEqual: 'Expected values to be strictly deep-equal:',
    strictEqual: 'Expected values to be strictly equal:',
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: 'Expected values to be loosely deep-equal:',
    equal: 'Expected values to be loosely equal:',
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: 'Values identical but not reference-equal:'
}; // Comparing short primitives should just show === / !== instead of using the
// diff.
var kMaxShortLength = 10;
function copyError(source) {
    var keys = Object.keys(source);
    var target = Object.create(Object.getPrototypeOf(source));
    keys.forEach(function(key) {
        target[key] = source[key];
    });
    Object.defineProperty(target, 'message', {
        value: source.message
    });
    return target;
}
function inspectValue(val) {
    // The util.inspect default values could be changed. This makes sure the
    // error messages contain the necessary information nevertheless.
    return inspect(val, {
        compact: false,
        customInspect: false,
        depth: 1000,
        maxArrayLength: Infinity,
        // Assert compares only enumerable properties (with a few exceptions).
        showHidden: false,
        // Having a long line as error is better than wrapping the line for
        // comparison for now.
        // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
        // have meta information about the inspected properties (i.e., know where
        // in what line the property starts and ends).
        breakLength: Infinity,
        // Assert does not detect proxies currently.
        showProxy: false,
        sorted: true,
        // Inspect getters as we also check them when comparing entries.
        getters: true
    });
}
function createErrDiff(actual, expected, operator) {
    var other = '';
    var res = '';
    var lastPos = 0;
    var end = '';
    var skipped = false;
    var actualInspected = inspectValue(actual);
    var actualLines = actualInspected.split('\n');
    var expectedLines = inspectValue(expected).split('\n');
    var i = 0;
    var indicator = ''; // In case both values are objects explicitly mark them as not reference equal
    // for the `strictEqual` operator.
    if (operator === 'strictEqual' && _typeof(actual) === 'object' && _typeof(expected) === 'object' && actual !== null && expected !== null) operator = 'strictEqualObject';
     // If "actual" and "expected" fit on a single line and they are not strictly
    // equal, check further special handling.
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
        var inputLength = actualLines[0].length + expectedLines[0].length; // If the character length of "actual" and "expected" together is less than
        // kMaxShortLength and if neither is an object and at least one of them is
        // not `zero`, use the strict equal comparison to visualize the output.
        if (inputLength <= kMaxShortLength) {
            if ((_typeof(actual) !== 'object' || actual === null) && (_typeof(expected) !== 'object' || expected === null) && (actual !== 0 || expected !== 0)) // -0 === +0
            return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        } else if (operator !== 'strictEqualObject') {
            // If the stderr is a tty and the input length is lower than the current
            // columns per line, add a mismatch indicator below the output. If it is
            // not a tty, use a default value of 80 characters.
            var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
            if (inputLength < maxLength) {
                while(actualLines[0][i] === expectedLines[0][i])i++;
                 // Ignore the first characters.
                if (i > 2) {
                    // Add position indicator for the first mismatch in case it is a
                    // single line and the input length is less than the column length.
                    indicator = "\n  ".concat(repeat(' ', i), "^");
                    i = 0;
                }
            }
        }
    } // Remove all ending lines that match (this optimizes the output for
    // readability by reducing the number of total changed lines).
    var a = actualLines[actualLines.length - 1];
    var b = expectedLines[expectedLines.length - 1];
    while(a === b){
        if (i++ < 2) end = "\n  ".concat(a).concat(end);
        else other = a;
        actualLines.pop();
        expectedLines.pop();
        if (actualLines.length === 0 || expectedLines.length === 0) break;
        a = actualLines[actualLines.length - 1];
        b = expectedLines[expectedLines.length - 1];
    }
    var maxLines = Math.max(actualLines.length, expectedLines.length); // Strict equal with identical objects that are not identical by reference.
    // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
    if (maxLines === 0) {
        // We have to get the result again. The lines were all removed before.
        var _actualLines = actualInspected.split('\n'); // Only remove lines in case it makes sense to collapse those.
        // TODO: Accept env to always show the full error.
        if (_actualLines.length > 30) {
            _actualLines[26] = "".concat(blue, "...").concat(white);
            while(_actualLines.length > 27)_actualLines.pop();
        }
        return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join('\n'), "\n");
    }
    if (i > 3) {
        end = "\n".concat(blue, "...").concat(white).concat(end);
        skipped = true;
    }
    if (other !== '') {
        end = "\n  ".concat(other).concat(end);
        other = '';
    }
    var printedLines = 0;
    var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
    var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
    for(i = 0; i < maxLines; i++){
        // Only extra expected lines exist
        var cur = i - lastPos;
        if (actualLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(expectedLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(expectedLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the expected line to the cache.
            other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
            printedLines++; // Only extra actual lines exist
        } else if (expectedLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(actualLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(actualLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the actual line to the result.
            res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
            printedLines++; // Lines diverge
        } else {
            var expectedLine = expectedLines[i];
            var actualLine = actualLines[i]; // If the lines diverge, specifically check for lines that only diverge by
            // a trailing comma. In that case it is actually identical and we should
            // mark it as such.
            var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ',') || actualLine.slice(0, -1) !== expectedLine); // If the expected line has a trailing comma but is otherwise identical,
            // add a comma at the end of the actual line. Otherwise the output could
            // look weird as in:
            //
            //   [
            //     1         // No comma at the end!
            // +   2
            //   ]
            //
            if (divergingLines && endsWith(expectedLine, ',') && expectedLine.slice(0, -1) === actualLine) {
                divergingLines = false;
                actualLine += ',';
            }
            if (divergingLines) {
                // If the last diverging line is more than one line above and the
                // current line is at least line three, add some of the former lines and
                // also add dots to indicate skipped entries.
                if (cur > 1 && i > 2) {
                    if (cur > 4) {
                        res += "\n".concat(blue, "...").concat(white);
                        skipped = true;
                    } else if (cur > 3) {
                        res += "\n  ".concat(actualLines[i - 2]);
                        printedLines++;
                    }
                    res += "\n  ".concat(actualLines[i - 1]);
                    printedLines++;
                } // Mark the current line as the last diverging one.
                lastPos = i; // Add the actual line to the result and cache the expected diverging
                // line so consecutive diverging lines show up as +++--- and not +-+-+-.
                res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
                other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
                printedLines += 2; // Lines are identical
            } else {
                // Add all cached information to the result before adding other things
                // and reset the cache.
                res += other;
                other = ''; // If the last diverging line is exactly one line above or if it is the
                // very first line, add the line to the result.
                if (cur === 1 || i === 0) {
                    res += "\n  ".concat(actualLine);
                    printedLines++;
                }
            }
        } // Inspected object to big (Show ~20 rows max)
        if (printedLines > 20 && i < maxLines - 2) return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
    }
    return "".concat(msg).concat(skipped ? skippedMsg : '', "\n").concat(res).concat(other).concat(end).concat(indicator);
}
var AssertionError1 = /*#__PURE__*/ function(_Error) {
    _inherits(AssertionError, _Error);
    function AssertionError(options) {
        var _this;
        _classCallCheck(this, AssertionError);
        if (_typeof(options) !== 'object' || options === null) throw new ERR_INVALID_ARG_TYPE('options', 'Object', options);
        var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
        var actual = options.actual, expected = options.expected;
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        if (message != null) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, String(message)));
        else {
            if (process.stderr && process.stderr.isTTY) {
                // Reset on each call to make sure we handle dynamically set environment
                // variables correct.
                if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
                    blue = "\x1B[34m";
                    green = "\x1B[32m";
                    white = "\x1B[39m";
                    red = "\x1B[31m";
                } else {
                    blue = '';
                    green = '';
                    white = '';
                    red = '';
                }
            } // Prevent the error stack from being visible by duplicating the error
            // in a very close way to the original in case both sides are actually
            // instances of Error.
            if (_typeof(actual) === 'object' && actual !== null && _typeof(expected) === 'object' && expected !== null && 'stack' in actual && actual instanceof Error && 'stack' in expected && expected instanceof Error) {
                actual = copyError(actual);
                expected = copyError(expected);
            }
            if (operator === 'deepStrictEqual' || operator === 'strictEqual') _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, createErrDiff(actual, expected, operator)));
            else if (operator === 'notDeepStrictEqual' || operator === 'notStrictEqual') {
                // In case the objects are equal but the operator requires unequal, show
                // the first object and say A equals B
                var base = kReadableOperator[operator];
                var res = inspectValue(actual).split('\n'); // In case "actual" is an object, it should not be reference equal.
                if (operator === 'notStrictEqual' && _typeof(actual) === 'object' && actual !== null) base = kReadableOperator.notStrictEqualObject;
                 // Only remove lines in case it makes sense to collapse those.
                // TODO: Accept env to always show the full error.
                if (res.length > 30) {
                    res[26] = "".concat(blue, "...").concat(white);
                    while(res.length > 27)res.pop();
                } // Only print a single input.
                if (res.length === 1) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, " ").concat(res[0])));
                else _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, "\n\n").concat(res.join('\n'), "\n")));
            } else {
                var _res = inspectValue(actual);
                var other = '';
                var knownOperators = kReadableOperator[operator];
                if (operator === 'notDeepEqual' || operator === 'notEqual') {
                    _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
                    if (_res.length > 1024) _res = "".concat(_res.slice(0, 1021), "...");
                } else {
                    other = "".concat(inspectValue(expected));
                    if (_res.length > 512) _res = "".concat(_res.slice(0, 509), "...");
                    if (other.length > 512) other = "".concat(other.slice(0, 509), "...");
                    if (operator === 'deepEqual' || operator === 'equal') _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
                    else other = " ".concat(operator, " ").concat(other);
                }
                _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(_res).concat(other)));
            }
        }
        Error.stackTraceLimit = limit;
        _this.generatedMessage = !message;
        Object.defineProperty(_assertThisInitialized(_this), 'name', {
            value: 'AssertionError [ERR_ASSERTION]',
            enumerable: false,
            writable: true,
            configurable: true
        });
        _this.code = 'ERR_ASSERTION';
        _this.actual = actual;
        _this.expected = expected;
        _this.operator = operator;
        if (Error.captureStackTrace) // eslint-disable-next-line no-restricted-syntax
        Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
         // Create error message including the error code in the name.
        _this.stack; // Reset the name.
        _this.name = 'AssertionError';
        return _possibleConstructorReturn(_this);
    }
    _createClass(AssertionError, [
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
            }
        },
        {
            key: inspect.custom,
            value: function value(recurseTimes, ctx) {
                // This limits the `actual` and `expected` property default inspection to
                // the minimum depth. Otherwise those values would be too verbose compared
                // to the actual error message which contains a combined view of these two
                // input values.
                return inspect(this, _objectSpread({
                }, ctx, {
                    customInspect: false,
                    depth: 0
                }));
            }
        }
    ]);
    return AssertionError;
}(_wrapNativeSuper(Error));
module.exports = AssertionError1;

},{"process":"h1waS","util/":"gQcxw","../errors":"2yHSB"}],"8py8z":[function(require,module,exports) {
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */ 'use strict';
function assign(target, firstSource) {
    if (target === undefined || target === null) throw new TypeError('Cannot convert first argument to object');
    var to = Object(target);
    for(var i = 1; i < arguments.length; i++){
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) continue;
        var keysArray = Object.keys(Object(nextSource));
        for(var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++){
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
        }
    }
    return to;
}
function polyfill() {
    if (!Object.assign) Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: assign
    });
}
module.exports = {
    assign: assign,
    polyfill: polyfill
};

},{}],"jyhzj":[function(require,module,exports) {
'use strict';
var define = require('define-properties');
var callBind = require('call-bind');
var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');
var polyfill = callBind(getPolyfill(), Object);
define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"define-properties":"il5bF","call-bind":"knSnl","./implementation":"8lZ3R","./polyfill":"aa29m","./shim":"9uYYQ"}],"il5bF":[function(require,module,exports) {
'use strict';
var keys = require('object-keys');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;
var isFunction = function(fn) {
    return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};
var arePropertyDescriptorsSupported = function() {
    var obj = {
    };
    try {
        origDefineProperty(obj, 'x', {
            enumerable: false,
            value: obj
        });
        // eslint-disable-next-line no-unused-vars, no-restricted-syntax
        for(var _ in obj)return false;
        return obj.x === obj;
    } catch (e) {
        return false;
    }
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();
var defineProperty = function(object, name, value, predicate) {
    if (name in object && (!isFunction(predicate) || !predicate())) return;
    if (supportsDescriptors) origDefineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value: value,
        writable: true
    });
    else object[name] = value;
};
var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {
    };
    var props = keys(map);
    if (hasSymbols) props = concat.call(props, Object.getOwnPropertySymbols(map));
    for(var i = 0; i < props.length; i += 1)defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;

},{"object-keys":"duoEY"}],"duoEY":[function(require,module,exports) {
'use strict';
var slice = Array.prototype.slice;
var isArgs = require('./isArguments');
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : require('./implementation');
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys(object) {
            if (isArgs(object)) return originalKeys(slice.call(object));
            return originalKeys(object);
        };
    } else Object.keys = keysShim;
    return Object.keys || keysShim;
};
module.exports = keysShim;

},{"./isArguments":"5OmI1","./implementation":"6kjzC"}],"5OmI1":[function(require,module,exports) {
'use strict';
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
    return isArgs;
};

},{}],"6kjzC":[function(require,module,exports) {
'use strict';
var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = require('./isArguments'); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, 'toString');
    var hasProtoEnumBug = isEnumerable.call(function() {
    }, 'prototype');
    var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === 'undefined') return false;
        for(var k in window)try {
            if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e) {
            return true;
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === 'undefined' || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === 'object';
        var isFunction = toStr.call(object) === '[object Function]';
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === '[object String]';
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError('Object.keys called on a non-object');
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === 'prototype') && has.call(object, name)) theKeys.push(String(name));
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k)if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = keysShim;

},{"./isArguments":"5OmI1"}],"8lZ3R":[function(require,module,exports) {
'use strict';
var numberIsNaN = function(value) {
    return value !== value;
};
module.exports = function is(a, b) {
    if (a === 0 && b === 0) return 1 / a === 1 / b;
    if (a === b) return true;
    if (numberIsNaN(a) && numberIsNaN(b)) return true;
    return false;
};

},{}],"aa29m":[function(require,module,exports) {
'use strict';
var implementation = require('./implementation');
module.exports = function getPolyfill() {
    return typeof Object.is === 'function' ? Object.is : implementation;
};

},{"./implementation":"8lZ3R"}],"9uYYQ":[function(require,module,exports) {
'use strict';
var getPolyfill = require('./polyfill');
var define = require('define-properties');
module.exports = function shimObjectIs() {
    var polyfill = getPolyfill();
    define(Object, {
        is: polyfill
    }, {
        is: function testObjectIs() {
            return Object.is !== polyfill;
        }
    });
    return polyfill;
};

},{"./polyfill":"aa29m","define-properties":"il5bF"}],"2Alac":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/comparisons.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
var regexFlagsSupported = /a/g.flags !== undefined;
var arrayFromSet = function arrayFromSet(set) {
    var array = [];
    set.forEach(function(value) {
        return array.push(value);
    });
    return array;
};
var arrayFromMap = function arrayFromMap(map) {
    var array = [];
    map.forEach(function(value, key) {
        return array.push([
            key,
            value
        ]);
    });
    return array;
};
var objectIs = Object.is ? Object.is : require('object-is');
var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
};
var numberIsNaN = Number.isNaN ? Number.isNaN : require('is-nan');
function uncurryThis(f) {
    return f.call.bind(f);
}
var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
var objectToString = uncurryThis(Object.prototype.toString);
var _require$types = require('util/').types, isAnyArrayBuffer = _require$types.isAnyArrayBuffer, isArrayBufferView = _require$types.isArrayBufferView, isDate = _require$types.isDate, isMap = _require$types.isMap, isRegExp = _require$types.isRegExp, isSet = _require$types.isSet, isNativeError = _require$types.isNativeError, isBoxedPrimitive = _require$types.isBoxedPrimitive, isNumberObject = _require$types.isNumberObject, isStringObject = _require$types.isStringObject, isBooleanObject = _require$types.isBooleanObject, isBigIntObject = _require$types.isBigIntObject, isSymbolObject = _require$types.isSymbolObject, isFloat32Array = _require$types.isFloat32Array, isFloat64Array = _require$types.isFloat64Array;
function isNonIndex(key) {
    if (key.length === 0 || key.length > 10) return true;
    for(var i = 0; i < key.length; i++){
        var code = key.charCodeAt(i);
        if (code < 48 || code > 57) return true;
    } // The maximum size for an array is 2 ** 32 -1.
    return key.length === 10 && key >= Math.pow(2, 32);
}
function getOwnNonIndexProperties(value) {
    return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
} // Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function compare(a, b) {
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
}
var ONLY_ENUMERABLE = undefined;
var kStrict = true;
var kLoose = false;
var kNoIterator = 0;
var kIsArray = 1;
var kIsSet = 2;
var kIsMap = 3; // Check if they have the same source and flags
function areSimilarRegExps(a, b) {
    return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
}
function areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    for(var offset = 0; offset < a.byteLength; offset++){
        if (a[offset] !== b[offset]) return false;
    }
    return true;
}
function areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
}
function areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
}
function isEqualBoxedPrimitive(val1, val2) {
    if (isNumberObject(val1)) return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    if (isStringObject(val1)) return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    if (isBooleanObject(val1)) return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    if (isBigIntObject(val1)) return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
} // Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.
function innerDeepEqual(val1, val2, strict, memos) {
    // All identical values are equivalent, as determined by ===.
    if (val1 === val2) {
        if (val1 !== 0) return true;
        return strict ? objectIs(val1, val2) : true;
    } // Check more closely if val1 and val2 are equal.
    if (strict) {
        if (_typeof(val1) !== 'object') return typeof val1 === 'number' && numberIsNaN(val1) && numberIsNaN(val2);
        if (_typeof(val2) !== 'object' || val1 === null || val2 === null) return false;
        if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) return false;
    } else {
        if (val1 === null || _typeof(val1) !== 'object') {
            if (val2 === null || _typeof(val2) !== 'object') // eslint-disable-next-line eqeqeq
            return val1 == val2;
            return false;
        }
        if (val2 === null || _typeof(val2) !== 'object') return false;
    }
    var val1Tag = objectToString(val1);
    var val2Tag = objectToString(val2);
    if (val1Tag !== val2Tag) return false;
    if (Array.isArray(val1)) {
        // Check for sparse arrays and general fast path
        if (val1.length !== val2.length) return false;
        var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (keys1.length !== keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
    } // [browserify] This triggers on certain types in IE (Map/Set) so we don't
    // wan't to early return out of the rest of the checks. However we can check
    // if the second value is one of these values and the first isn't.
    if (val1Tag === '[object Object]') {
        // return keyCheck(val1, val2, strict, memos, kNoIterator);
        if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) return false;
    }
    if (isDate(val1)) {
        if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) return false;
    } else if (isRegExp(val1)) {
        if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) return false;
    } else if (isNativeError(val1) || val1 instanceof Error) {
        // Do not compare the stack as it might differ even though the error itself
        // is otherwise identical.
        if (val1.message !== val2.message || val1.name !== val2.name) return false;
    } else if (isArrayBufferView(val1)) {
        if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
            if (!areSimilarFloatArrays(val1, val2)) return false;
        } else if (!areSimilarTypedArrays(val1, val2)) return false;
         // Buffer.compare returns true, so val1.length === val2.length. If they both
        // only contain numeric keys, we don't need to exam further than checking
        // the symbols.
        var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (_keys.length !== _keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
    } else if (isSet(val1)) {
        if (!isSet(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsSet);
    } else if (isMap(val1)) {
        if (!isMap(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsMap);
    } else if (isAnyArrayBuffer(val1)) {
        if (!areEqualArrayBuffers(val1, val2)) return false;
    } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) return false;
    return keyCheck(val1, val2, strict, memos, kNoIterator);
}
function getEnumerables(val, keys) {
    return keys.filter(function(k) {
        return propertyIsEnumerable(val, k);
    });
}
function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
    // For all remaining Object pairs, including Array, objects and Maps,
    // equivalence is determined by having:
    // a) The same number of owned enumerable properties
    // b) The same set of keys/indexes (although not necessarily the same order)
    // c) Equivalent values for every corresponding key/index
    // d) For Sets and Maps, equal contents
    // Note: this accounts for both named and indexed properties on Arrays.
    if (arguments.length === 5) {
        aKeys = Object.keys(val1);
        var bKeys = Object.keys(val2); // The pair must have the same number of owned properties.
        if (aKeys.length !== bKeys.length) return false;
    } // Cheap key test
    var i = 0;
    for(; i < aKeys.length; i++){
        if (!hasOwnProperty(val2, aKeys[i])) return false;
    }
    if (strict && arguments.length === 5) {
        var symbolKeysA = objectGetOwnPropertySymbols(val1);
        if (symbolKeysA.length !== 0) {
            var count = 0;
            for(i = 0; i < symbolKeysA.length; i++){
                var key = symbolKeysA[i];
                if (propertyIsEnumerable(val1, key)) {
                    if (!propertyIsEnumerable(val2, key)) return false;
                    aKeys.push(key);
                    count++;
                } else if (propertyIsEnumerable(val2, key)) return false;
            }
            var symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) return false;
        } else {
            var _symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) return false;
        }
    }
    if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) return true;
     // Use memos to handle cycles.
    if (memos === undefined) memos = {
        val1: new Map(),
        val2: new Map(),
        position: 0
    };
    else {
        // We prevent up to two map.has(x) calls by directly retrieving the value
        // and checking for undefined. The map can only contain numbers, so it is
        // safe to check for undefined only.
        var val2MemoA = memos.val1.get(val1);
        if (val2MemoA !== undefined) {
            var val2MemoB = memos.val2.get(val2);
            if (val2MemoB !== undefined) return val2MemoA === val2MemoB;
        }
        memos.position++;
    }
    memos.val1.set(val1, memos.position);
    memos.val2.set(val2, memos.position);
    var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
}
function setHasEqualElement(set, val1, strict, memo) {
    // Go looking.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var val2 = setValues[i];
        if (innerDeepEqual(val1, val2, strict, memo)) {
            // Remove the matching element to make sure we do not check that again.
            set.delete(val2);
            return true;
        }
    }
    return false;
} // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
function findLooseMatchingPrimitives(prim) {
    switch(_typeof(prim)){
        case 'undefined':
            return null;
        case 'object':
            // Only pass in null as object!
            return undefined;
        case 'symbol':
            return false;
        case 'string':
            prim = +prim;
        // Loose equal entries exist only if the string is possible to convert to
        // a regular number and not NaN.
        // Fall through
        case 'number':
            if (numberIsNaN(prim)) return false;
    }
    return true;
}
function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    return b.has(altValue) && !a.has(altValue);
}
function mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    var curB = b.get(altValue);
    if (curB === undefined && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) return false;
    return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
}
function setEquiv(a, b, strict, memo) {
    // This is a lazily initiated Set of entries which have to be compared
    // pairwise.
    var set = null;
    var aValues = arrayFromSet(a);
    for(var i = 0; i < aValues.length; i++){
        var val = aValues[i]; // Note: Checking for the objects first improves the performance for object
        // heavy sets but it is a minor slow down for primitives. As they are fast
        // to check this improves the worst case scenario instead.
        if (_typeof(val) === 'object' && val !== null) {
            if (set === null) set = new Set();
             // If the specified value doesn't exist in the second set its an not null
            // object (or non strict only: a not matching primitive) we'll need to go
            // hunting for something thats deep-(strict-)equal to it. To make this
            // O(n log n) complexity we have to copy these values in a new set first.
            set.add(val);
        } else if (!b.has(val)) {
            if (strict) return false; // Fast path to detect missing string, symbol, undefined and null values.
            if (!setMightHaveLoosePrim(a, b, val)) return false;
            if (set === null) set = new Set();
            set.add(val);
        }
    }
    if (set !== null) {
        var bValues = arrayFromSet(b);
        for(var _i = 0; _i < bValues.length; _i++){
            var _val = bValues[_i]; // We have to check if a primitive value is already
            // matching and only if it's not, go hunting for it.
            if (_typeof(_val) === 'object' && _val !== null) {
                if (!setHasEqualElement(set, _val, strict, memo)) return false;
            } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    // To be able to handle cases like:
    //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
    // ... we need to consider *all* matching keys, not just the first we find.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var key2 = setValues[i];
        if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
            set.delete(key2);
            return true;
        }
    }
    return false;
}
function mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = arrayFromMap(a);
    for(var i = 0; i < aEntries.length; i++){
        var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
        if (_typeof(key) === 'object' && key !== null) {
            if (set === null) set = new Set();
            set.add(key);
        } else {
            // By directly retrieving the value we prevent another b.has(key) check in
            // almost all possible cases.
            var item2 = b.get(key);
            if (item2 === undefined && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
                if (strict) return false; // Fast path to detect missing string, symbol, undefined and null
                // keys.
                if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
                if (set === null) set = new Set();
                set.add(key);
            }
        }
    }
    if (set !== null) {
        var bEntries = arrayFromMap(b);
        for(var _i2 = 0; _i2 < bEntries.length; _i2++){
            var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), key = _bEntries$_i[0], item = _bEntries$_i[1];
            if (_typeof(key) === 'object' && key !== null) {
                if (!mapHasEqualEntry(set, a, key, item, strict, memo)) return false;
            } else if (!strict && (!a.has(key) || !innerDeepEqual(a.get(key), item, false, memo)) && !mapHasEqualEntry(set, a, key, item, false, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function objEquiv(a, b, strict, keys, memos, iterationType) {
    // Sets and maps don't have their entries accessible via normal object
    // properties.
    var i = 0;
    if (iterationType === kIsSet) {
        if (!setEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsMap) {
        if (!mapEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsArray) for(; i < a.length; i++){
        if (hasOwnProperty(a, i)) {
            if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) return false;
        } else if (hasOwnProperty(b, i)) return false;
        else {
            // Array is sparse.
            var keysA = Object.keys(a);
            for(; i < keysA.length; i++){
                var key = keysA[i];
                if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) return false;
            }
            if (keysA.length !== Object.keys(b).length) return false;
            return true;
        }
    }
     // The pair must have equivalent values for every corresponding key.
    // Possibly expensive deep test:
    for(i = 0; i < keys.length; i++){
        var _key = keys[i];
        if (!innerDeepEqual(a[_key], b[_key], strict, memos)) return false;
    }
    return true;
}
function isDeepEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kLoose);
}
function isDeepStrictEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kStrict);
}
module.exports = {
    isDeepEqual: isDeepEqual,
    isDeepStrictEqual: isDeepStrictEqual
};

},{"object-is":"jyhzj","is-nan":"53b87","util/":"gQcxw"}],"53b87":[function(require,module,exports) {
'use strict';
var callBind = require('call-bind');
var define = require('define-properties');
var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');
var polyfill = callBind(getPolyfill(), Number);
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"call-bind":"knSnl","define-properties":"il5bF","./implementation":"iaDV5","./polyfill":"ifGx5","./shim":"ipZTA"}],"iaDV5":[function(require,module,exports) {
'use strict';
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function isNaN(value) {
    return value !== value;
};

},{}],"ifGx5":[function(require,module,exports) {
'use strict';
var implementation = require('./implementation');
module.exports = function getPolyfill() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')) return Number.isNaN;
    return implementation;
};

},{"./implementation":"iaDV5"}],"ipZTA":[function(require,module,exports) {
'use strict';
var define = require('define-properties');
var getPolyfill = require('./polyfill');
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function shimNumberIsNaN() {
    var polyfill = getPolyfill();
    define(Number, {
        isNaN: polyfill
    }, {
        isNaN: function testIsNaN() {
            return Number.isNaN !== polyfill;
        }
    });
    return polyfill;
};

},{"define-properties":"il5bF","./polyfill":"ifGx5"}],"h2QXM":[function(require,module,exports) {
var onPerformance = require('on-performance');
var scheduler = require('nanoscheduler')();
var assert = require('assert');
module.exports = ChooHooks;
function ChooHooks(emitter) {
    if (!(this instanceof ChooHooks)) return new ChooHooks(emitter);
    assert.equal(typeof emitter, 'object');
    this.hasWindow = typeof window !== 'undefined';
    this.hasIdleCallback = this.hasWindow && window.requestIdleCallback;
    this.hasPerformance = this.hasWindow && window.performance && window.performance.getEntriesByName;
    this.emitter = emitter;
    this.listeners = {
    };
    this.buffer = {
        render: {
        },
        events: {
        }
    };
}
ChooHooks.prototype.on = function(name, handler) {
    this.listeners[name] = handler;
};
ChooHooks.prototype.start = function() {
    var self = this;
    if (this.hasPerformance) window.performance.onresourcetimingbufferfull = function() {
        var listener = self.listeners['resource-timing-buffer-full'];
        if (listener) listener();
    };
    // TODO also handle log events
    onPerformance(function(timing) {
        if (!timing) return;
        if (timing.entryType !== 'measure') return;
        var eventName = timing.name;
        if (/choo\.morph/.test(eventName)) self.buffer.render.morph = timing;
        else if (/choo\.route/.test(eventName)) self.buffer.render.route = timing;
        else if (/choo\.render/.test(eventName)) self.buffer.render.render = timing;
        else if (/choo\.emit/.test(eventName) && !/log:/.test(eventName)) {
            var eventListener = self.listeners['event'];
            if (eventListener) {
                var timingName = eventName.match(/choo\.emit\('(.*)'\)/)[1];
                if (timingName === 'render' || timingName === 'DOMContentLoaded') return;
                var traceId = eventName.match(/\[(\d+)\]/)[1];
                var data = self.buffer.events[traceId];
                self.buffer.events[traceId] = null;
                eventListener(timingName, data, timing);
            }
        }
        var rBuf = self.buffer.render;
        if (rBuf.render && rBuf.route && rBuf.morph) {
            var renderListener = self.listeners['render'];
            if (!renderListener) return;
            var timings = {
            };
            while(self.buffer.render.length){
                var _timing = self.buffer.render.pop();
                var name = _timing.name;
                if (/choo\.render/.test(name)) timings.render = _timing;
                else if (/choo\.morph/.test(name)) timings.morph = _timing;
                else timings.route = _timing;
            }
            rBuf.render = rBuf.route = rBuf.morph = void 0;
            renderListener(timings);
        }
    });
    // Check if there's timings without any listeners
    // and trigger the DOMContentLoaded event.
    // If the timing API is not available, we handle all events here
    this.emitter.on('*', function(eventName, data, uuid) {
        var logLevel = /^log:(\w{4,5})/.exec(eventName);
        if (!self.hasPerformance && eventName === 'render') {
            // Render
            var renderListener = self.listeners['render'];
            if (renderListener) renderListener();
        } else if (eventName === 'DOMContentLoaded') // DOMContentLoaded
        self._emitLoaded();
        else if (logLevel) {
            logLevel = logLevel[1];
            // Log:*
            var logListener = self.listeners['log:' + logLevel];
            if (logListener) logListener.apply(null, Array.prototype.slice.call(arguments, 0, arguments.length - 1));
        } else if (!self.emitter.listeners(eventName).length) {
            // Unhandled
            var unhandledListener = self.listeners['unhandled'];
            if (unhandledListener) unhandledListener(eventName, data);
        } else if (eventName !== 'render') // *
        {
            if (self.hasPerformance) self.buffer.events[uuid] = data;
        }
    });
};
// compute and log time till interactive when DOMContentLoaded event fires
ChooHooks.prototype._emitLoaded = function() {
    var self = this;
    scheduler.push(function clear() {
        var listener = self.listeners['DOMContentLoaded'];
        var timing = self.hasWindow && window.performance && window.performance.timing;
        if (listener && timing) listener({
            interactive: timing.domInteractive - timing.navigationStart,
            loaded: timing.domContentLoadedEventEnd - timing.navigationStart
        });
    });
};

},{"on-performance":"4QX8P","nanoscheduler":"5d5rY","assert":"dod7R"}],"4QX8P":[function(require,module,exports) {
var scheduler = require('nanoscheduler')();
var assert = require('assert');
var entryTypes = [
    'frame',
    'measure',
    'navigation',
    'resource',
    'longtask'
];
module.exports = onPerformance;
function onPerformance(cb1) {
    assert.equal(typeof cb1, 'function', 'on-performance: cb should be type function');
    var PerformanceObserver = typeof window !== 'undefined' && window.PerformanceObserver;
    if (!PerformanceObserver) return;
    // Enable singleton.
    if (window._onperformance) {
        window._onperformance.push(cb1);
        return stop;
    }
    window._onperformance = [
        cb1
    ];
    var observer = new PerformanceObserver(parseEntries);
    setTimeout(function() {
        parseEntries(window.performance);
        observer.observe({
            entryTypes: entryTypes
        });
    }, 0);
    function stop() {
        window._onperformance.splice(window._onperformance.indexOf(cb1), 1);
    }
    function parseEntries(list) {
        list.getEntries().forEach(function(entry) {
            scheduler.push(function() {
                clear(entry);
                window._onperformance.forEach(function(cb) {
                    cb(entry);
                });
            });
        });
    }
    // Navigation, longtask and frame don't have a clear method (yet)
    // Resource timings can only be cleared in bulk
    // see: https://developer.mozilla.org/en-US/docs/Web/API/Performance/clearMeasures
    function clear(entry) {
        var type = entry.entryType;
        if (type === 'measure') window.performance.clearMeasures(entry.name);
        else if (type === 'resource') window.performance.clearResourceTimings();
    }
    return stop;
}

},{"nanoscheduler":"5d5rY","assert":"bGavs"}],"d4afu":[function(require,module,exports) {
/* eslint-disable node/no-deprecated-api */ var onChange = require('object-change-callsite');
var nanologger = require('nanologger');
var assert = require('assert');
var enabledMessage = 'Debugging enabled. To disable run: `choo.debug = false`';
var disabledMessage = 'Debugging disabled. We hope it was helpful! 🙌';
module.exports = debug;
function debug(state, emitter, app, localEmitter) {
    var log = nanologger('choo-devtools');
    var enabled = window.localStorage.logLevel === 'debug';
    if (enabled) log.info(enabledMessage);
    state = onChange(state, function(attr, value, callsite) {
        if (!enabled) return;
        callsite = callsite.split('\n')[1].replace(/^ +/, '');
        log.info('state.' + attr, value, '\n' + callsite);
    });
    app.state = state;
    Object.defineProperty(window.choo, 'debug', {
        get: function() {
            window.localStorage.logLevel = 'debug';
            localEmitter.emit('debug', true);
            enabled = true;
            return enabledMessage;
        },
        set: function(bool) {
            assert.equal(typeof bool, 'boolean', 'choo-devtools.debug: bool should be type boolean');
            window.localStorage.logLevel = bool ? 'debug' : 'info';
            enabled = bool;
            localEmitter.emit('debug', enabled);
            if (enabled) log.info(enabledMessage);
            else log.info(disabledMessage);
        }
    });
}

},{"object-change-callsite":"8vtPL","nanologger":"htPsH","assert":"dod7R"}],"8vtPL":[function(require,module,exports) {
var assert = require('assert');
module.exports = objectChangeCallsite;
function objectChangeCallsite(target1, callback) {
    assert.equal(typeof target1, 'object', 'object-change-callsite: target should be type object');
    assert.equal(typeof callback, 'function', 'object-change-callsite: callback should be type function');
    return new Proxy(target1, {
        set: function(obj, prop, value) {
            var err = new Error();
            var trace = strip(err.stack);
            callback(prop, value, trace);
            obj[prop] = value;
            return true;
        },
        deleteProperty: function(target, prop) {
            var err = new Error();
            var trace = strip(err.stack);
            callback(prop, undefined, trace);
            if (prop in target) {
                delete target[prop];
                return true;
            }
            return false;
        }
    });
}
function strip(str) {
    var arr = str.split('\n');
    arr = arr.length > 2 ? arr.slice(2) : arr;
    arr[0] = arr[0].replace(/^ {4}at /, '');
    return '\n' + arr.join('\n');
}

},{"assert":"dod7R"}],"6zQH0":[function(require,module,exports) {
var stateCopy = require('state-copy');
var pluck = require('plucker');
module.exports = copy;
function copy(state) {
    var isStateString = state && typeof state === 'string';
    var isChooPath = isStateString && arguments.length === 1 && state.indexOf('state.') === 0;
    if (!state || typeof state === 'function') state = window.choo.state;
    if (isChooPath) [].push.call(arguments, {
        state: window.choo.state
    });
    stateCopy(isStateString ? pluck.apply(this, arguments) : state);
}

},{"state-copy":"d9HZp","plucker":"cJsZR"}],"d9HZp":[function(require,module,exports) {
var fastSafeStringify = require('fast-safe-stringify');
var copy = require('clipboard-copy');
function tryStringify(obj) {
    try {
        return JSON.stringify(obj);
    } catch (e) {
    }
}
function stateCopy(obj) {
    var str = tryStringify(obj) || fastSafeStringify(obj);
    copy(str);
}
module.exports = stateCopy;

},{"fast-safe-stringify":"fKCHW","clipboard-copy":"g2ATI"}],"fKCHW":[function(require,module,exports) {
module.exports = stringify;
stringify.default = stringify;
stringify.stable = deterministicStringify;
stringify.stableStringify = deterministicStringify;
var LIMIT_REPLACE_NODE = '[...]';
var CIRCULAR_REPLACE_NODE = '[Circular]';
var arr = [];
var replacerStack = [];
function defaultOptions() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}
// Regular stringify
function stringify(obj, replacer, spacer, options) {
    if (typeof options === 'undefined') options = defaultOptions();
    decirc(obj, '', 0, [], undefined, 0, options);
    var res;
    try {
        if (replacerStack.length === 0) res = JSON.stringify(obj, replacer, spacer);
        else res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
    } catch (_) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally{
        while(arr.length !== 0){
            var part = arr.pop();
            if (part.length === 4) Object.defineProperty(part[0], part[1], part[3]);
            else part[0][part[1]] = part[2];
        }
    }
    return res;
}
function setReplace(replace, val, k, parent) {
    var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
    if (propertyDescriptor.get !== undefined) {
        if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, {
                value: replace
            });
            arr.push([
                parent,
                k,
                val,
                propertyDescriptor
            ]);
        } else replacerStack.push([
            val,
            k,
            replace
        ]);
    } else {
        parent[k] = replace;
        arr.push([
            parent,
            k,
            val
        ]);
    }
}
function decirc(val, k, edgeIndex, stack, parent, depth, options) {
    depth += 1;
    var i;
    if (typeof val === 'object' && val !== null) {
        for(i = 0; i < stack.length; i++)if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.depthLimit !== 'undefined' && depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.edgesLimit !== 'undefined' && edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        stack.push(val);
        // Optimize for Arrays. Big arrays could kill the performance otherwise!
        if (Array.isArray(val)) for(i = 0; i < val.length; i++)decirc(val[i], i, i, stack, val, depth, options);
        else {
            var keys = Object.keys(val);
            for(i = 0; i < keys.length; i++){
                var key = keys[i];
                decirc(val[key], key, i, stack, val, depth, options);
            }
        }
        stack.pop();
    }
}
// Stable-stringify
function compareFunction(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
function deterministicStringify(obj, replacer, spacer, options) {
    if (typeof options === 'undefined') options = defaultOptions();
    var tmp = deterministicDecirc(obj, '', 0, [], undefined, 0, options) || obj;
    var res;
    try {
        if (replacerStack.length === 0) res = JSON.stringify(tmp, replacer, spacer);
        else res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
    } catch (_) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally{
        // Ensure that we restore the object as it was.
        while(arr.length !== 0){
            var part = arr.pop();
            if (part.length === 4) Object.defineProperty(part[0], part[1], part[3]);
            else part[0][part[1]] = part[2];
        }
    }
    return res;
}
function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options) {
    depth += 1;
    var i;
    if (typeof val === 'object' && val !== null) {
        for(i = 0; i < stack.length; i++)if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
            return;
        }
        try {
            if (typeof val.toJSON === 'function') return;
        } catch (_) {
            return;
        }
        if (typeof options.depthLimit !== 'undefined' && depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.edgesLimit !== 'undefined' && edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        stack.push(val);
        // Optimize for Arrays. Big arrays could kill the performance otherwise!
        if (Array.isArray(val)) for(i = 0; i < val.length; i++)deterministicDecirc(val[i], i, i, stack, val, depth, options);
        else {
            // Create a temporary object in the required way
            var tmp = {
            };
            var keys = Object.keys(val).sort(compareFunction);
            for(i = 0; i < keys.length; i++){
                var key = keys[i];
                deterministicDecirc(val[key], key, i, stack, val, depth, options);
                tmp[key] = val[key];
            }
            if (typeof parent !== 'undefined') {
                arr.push([
                    parent,
                    k,
                    val
                ]);
                parent[k] = tmp;
            } else return tmp;
        }
        stack.pop();
    }
}
// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function replaceGetterValues(replacer) {
    replacer = typeof replacer !== 'undefined' ? replacer : function(k, v) {
        return v;
    };
    return function(key, val) {
        if (replacerStack.length > 0) for(var i = 0; i < replacerStack.length; i++){
            var part = replacerStack[i];
            if (part[1] === key && part[0] === val) {
                val = part[2];
                replacerStack.splice(i, 1);
                break;
            }
        }
        return replacer.call(this, key, val);
    };
}

},{}],"g2ATI":[function(require,module,exports) {
/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* global DOMException */ module.exports = clipboardCopy;
function clipboardCopy(text) {
    // Use the Async Clipboard API when available. Requires a secure browsing
    // context (i.e. HTTPS)
    if (navigator.clipboard) return navigator.clipboard.writeText(text).catch(function(err) {
        throw err !== undefined ? err : new DOMException('The request is not allowed', 'NotAllowedError');
    });
    // ...Otherwise, use document.execCommand() fallback
    // Put the text to copy into a <span>
    var span = document.createElement('span');
    span.textContent = text;
    // Preserve consecutive spaces and newlines
    span.style.whiteSpace = 'pre';
    span.style.webkitUserSelect = 'auto';
    span.style.userSelect = 'all';
    // Add the <span> to the page
    document.body.appendChild(span);
    // Make a selection object representing the range of text selected by the user
    var selection = window.getSelection();
    var range = window.document.createRange();
    selection.removeAllRanges();
    range.selectNode(span);
    selection.addRange(range);
    // Copy text to the clipboard
    var success = false;
    try {
        success = window.document.execCommand('copy');
    } catch (err) {
        console.log('error', err);
    }
    // Cleanup
    selection.removeAllRanges();
    window.document.body.removeChild(span);
    return success ? Promise.resolve() : Promise.reject(new DOMException('The request is not allowed', 'NotAllowedError'));
}

},{}],"cJsZR":[function(require,module,exports) {
module.exports = plucker;
function plucker(path, object) {
    return arguments.length >= 2 ? pluck(path)(object) : pluck(path);
}
function pluck(path) {
    path = typeof path === 'string' ? String(path).trim().split('.') : path;
    if (path.length < 2) {
        path = path[0];
        return pluckSingle;
    } else {
        var l = path.length;
        return pluckPath;
    }
    function pluckSingle(object) {
        return object[path];
    }
    function pluckPath(object) {
        for(var i = 0; i < l; i++){
            if (typeof object === 'undefined') break;
            object = object[path[i]];
        }
        return object;
    }
}

},{}],"bdwPo":[function(require,module,exports) {
module.exports = help;
function help() {
    Object.defineProperty(window.choo, 'help', {
        get: get,
        set: noop
    });
    function get() {
        setTimeout(function() {
            print('copy', 'Serialize the current state to the clipboard.');
            print('debug', 'Enable Choo debug mode.');
            print('emit', 'Emit an event in the Choo emitter.');
            print('help', 'Print usage information.');
            print('log', 'Print the last 150 events emitted.');
            print('on', 'Listen for an event in the Choo emitter.');
            print('once', 'Listen for an event once in the Choo emitter.');
            print('perf', 'Print out performance metrics');
            print('state', 'Print the Choo state object.');
            print('storage', 'Print browser storage information.');
        }, 0);
        return 'Choo command overview';
    }
}
function print(cmd, desc) {
    var color = '#cc99cc';
    console.log('  %cchoo.' + cmd, 'color: ' + color, '— ' + desc);
}
function noop() {
}

},{}],"6qQd3":[function(require,module,exports) {
var onPerformance = require('on-performance');
var BAR = '█';
module.exports = perf;
function perf(state, emitter, app, localEmitter) {
    var stats = {
    };
    window.choo.perf = {
    };
    // Print all events
    var all = new Perf(stats, 'all');
    Object.defineProperty(window.choo.perf, 'all', {
        get: all.get.bind(all),
        set: noop
    });
    // Print only Choo core events
    var core = new Perf(stats, 'core', function(name) {
        return /^choo/.test(name);
    });
    Object.defineProperty(window.choo.perf, 'core', {
        get: core.get.bind(core),
        set: noop
    });
    // Print component data
    var components = new Perf(stats, 'components', function(name) {
        return !/^choo/.test(name) && !/^bankai/.test(name);
    });
    Object.defineProperty(window.choo.perf, 'components', {
        get: components.get.bind(components),
        set: noop
    });
    // Print choo userland events (event emitter)
    var events = new Perf(stats, 'events', function(name) {
        return /^choo\.emit/.test(name);
    }, function(name) {
        return name.replace(/^choo\.emit\('/, '').replace(/'\)$/, '');
    });
    Object.defineProperty(window.choo.perf, 'events', {
        get: events.get.bind(events),
        set: noop
    });
    onPerformance(function(entry) {
        if (entry.entryType !== 'measure') return;
        var name = entry.name.replace(/ .*$/, '');
        if (!stats[name]) stats[name] = {
            name: name,
            count: 0,
            entries: []
        };
        var stat = stats[name];
        stat.count += 1;
        stat.entries.push(entry.duration);
    });
}
// Create a new Perf instance by passing it a filter
function Perf(stats, name1, filter, rename) {
    this.stats = stats;
    this.name = name1;
    this.filter = filter || function() {
        return true;
    };
    this.rename = rename || function(name) {
        return name;
    };
}
// Compute a table of performance entries based on a filter
Perf.prototype.get = function() {
    var filtered = Object.keys(this.stats).filter(this.filter);
    var self = this;
    var maxTime = 0;
    var maxMedian = 0;
    var fmt = filtered.map(function(key) {
        var stat = self.stats[key];
        var totalTime = Number(stat.entries.reduce(function(time, entry) {
            return time + entry;
        }, 0).toFixed(2));
        if (totalTime > maxTime) maxTime = totalTime;
        var median = getMedian(stat.entries);
        if (median > maxMedian) maxMedian = median;
        var name = self.rename(stat.name);
        return new PerfEntry(name, totalTime, median, stat.count);
    });
    var barLength = 10;
    fmt.forEach(function(entry) {
        var totalTime = entry['Total Time (ms)'];
        var median = entry['Median (ms)'];
        entry[' '] = createBar(totalTime / maxTime * 100 / barLength);
        entry['  '] = createBar(median / maxMedian * 100 / barLength);
    });
    function createBar(len) {
        var str = '';
        for(var i = 0, max = Math.round(len); i < max; i++)str += BAR;
        return str;
    }
    var res = fmt.sort(function(a, b) {
        return b['Total Time (ms)'] - a['Total Time (ms)'];
    });
    console.table(res);
    return "Showing performance events for '" + this.name + "'";
};
// An entry for the performance timeline.
function PerfEntry(name, totalTime, median, count) {
    this.Name = name;
    this['Total Time (ms)'] = totalTime;
    this[' '] = 0;
    this['Median (ms)'] = median;
    this['  '] = 0;
    this['Total Count'] = count;
}
// Get the median from an array of numbers.
function getMedian(args) {
    if (!args.length) return 0;
    var numbers = args.slice(0).sort(function(a, b) {
        return a - b;
    });
    var middle = Math.floor(numbers.length / 2);
    var isEven = numbers.length % 2 === 0;
    var res = isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
    return Number(res.toFixed(2));
}
// Do nothing.
function noop() {
}

},{"on-performance":"4QX8P"}],"g5hBP":[function(require,module,exports) {
var removeItems = require('remove-array-items');
var scheduler = require('nanoscheduler')();
var nanologger = require('nanologger');
var _log = nanologger('choo');
var clone = require('clone');
var MAX_HISTORY_LENGTH = 150 // How many items we should keep around
;
module.exports = log;
function log(state1, emitter, app, localEmitter) {
    var shouldDebug = window.localStorage.logLevel === 'debug';
    var history = [];
    var i = 0;
    var shouldWarn = true;
    localEmitter.on('debug', function(bool) {
        shouldDebug = bool;
    });
    window.choo._history = history;
    window.choo.history = showHistory;
    Object.defineProperty(window.choo, 'log', {
        get: showHistory,
        set: noop
    });
    Object.defineProperty(window.choo, 'history', {
        get: showHistory,
        set: noop
    });
    emitter.on('*', function(name, data) {
        i += 1;
        var entry = new Event(name, data, state1);
        history.push(entry);
        scheduler.push(function() {
            var length = history.length;
            if (length > MAX_HISTORY_LENGTH) removeItems(history, 0, length - MAX_HISTORY_LENGTH);
        });
    });
    function showHistory() {
        setTimeout(function() {
            console.table(history);
        }, 0);
        var events = i === 1 ? 'event' : 'events';
        var msg = i + ' ' + events + ' recorded, showing the last ' + MAX_HISTORY_LENGTH + '.';
        if (shouldDebug === false) msg += ' Enable state capture by calling `choo.debug`.';
        else msg += ' Disable state capture by calling `choo.debug = false`.';
        return msg;
    }
    function Event(name, data, state) {
        this.name = name;
        this.data = data === undefined ? '<no data>' : data;
        this.state = shouldDebug ? tryClone(state) : '<disabled>';
    }
    function tryClone(state) {
        try {
            var _state = clone(state);
            if (!shouldWarn) shouldWarn = true;
            return _state;
        } catch (ex) {
            if (shouldWarn) {
                _log.warn('Could not clone your app state. Make sure to have a serializable state so it can be cloned');
                shouldWarn = false;
            }
            return '<unserializable>';
        }
    }
}
function noop() {
}

},{"remove-array-items":"kY6DV","nanoscheduler":"5d5rY","nanologger":"htPsH","clone":"fjlev"}],"kY6DV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */ function removeItems(arr, startIdx, removeCount) {
    var i, length = arr.length;
    if (startIdx >= length || removeCount <= 0 || startIdx < 0) return;
    removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
    var len = length - removeCount;
    for(i = startIdx; i < len; ++i)arr[i] = arr[i + removeCount];
    arr.length = len;
}
exports.default = removeItems;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fN3AC"}],"fN3AC":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fjlev":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
var clone1 = function() {
    function _instanceof(obj, type) {
        return type != null && obj instanceof type;
    }
    var nativeMap;
    try {
        nativeMap = Map;
    } catch (_) {
        // maybe a reference error because no `Map`. Give it a dummy value that no
        // value will ever be an instanceof.
        nativeMap = function() {
        };
    }
    var nativeSet;
    try {
        nativeSet = Set;
    } catch (_1) {
        nativeSet = function() {
        };
    }
    var nativePromise;
    try {
        nativePromise = Promise;
    } catch (_2) {
        nativePromise = function() {
        };
    }
    /**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/ function clone(parent1, circular, depth1, prototype, includeNonEnumerable) {
        if (typeof circular === 'object') {
            depth1 = circular.depth;
            prototype = circular.prototype;
            includeNonEnumerable = circular.includeNonEnumerable;
            circular = circular.circular;
        }
        // maintain two arrays for circular references, where corresponding parents
        // and children have the same index
        var allParents = [];
        var allChildren = [];
        var useBuffer = typeof Buffer != 'undefined';
        if (typeof circular == 'undefined') circular = true;
        if (typeof depth1 == 'undefined') depth1 = Infinity;
        // recurse this function so we don't reset allParents and allChildren
        function _clone(parent, depth) {
            // cloning null always returns null
            if (parent === null) return null;
            if (depth === 0) return parent;
            var child;
            var proto;
            if (typeof parent != 'object') return parent;
            if (_instanceof(parent, nativeMap)) child = new nativeMap();
            else if (_instanceof(parent, nativeSet)) child = new nativeSet();
            else if (_instanceof(parent, nativePromise)) child = new nativePromise(function(resolve, reject) {
                parent.then(function(value) {
                    resolve(_clone(value, depth - 1));
                }, function(err) {
                    reject(_clone(err, depth - 1));
                });
            });
            else if (clone.__isArray(parent)) child = [];
            else if (clone.__isRegExp(parent)) {
                child = new RegExp(parent.source, __getRegExpFlags(parent));
                if (parent.lastIndex) child.lastIndex = parent.lastIndex;
            } else if (clone.__isDate(parent)) child = new Date(parent.getTime());
            else if (useBuffer && Buffer.isBuffer(parent)) {
                if (Buffer.allocUnsafe) // Node.js >= 4.5.0
                child = Buffer.allocUnsafe(parent.length);
                else // Older Node.js versions
                child = new Buffer(parent.length);
                parent.copy(child);
                return child;
            } else if (_instanceof(parent, Error)) child = Object.create(parent);
            else if (typeof prototype == 'undefined') {
                proto = Object.getPrototypeOf(parent);
                child = Object.create(proto);
            } else {
                child = Object.create(prototype);
                proto = prototype;
            }
            if (circular) {
                var index = allParents.indexOf(parent);
                if (index != -1) return allChildren[index];
                allParents.push(parent);
                allChildren.push(child);
            }
            if (_instanceof(parent, nativeMap)) parent.forEach(function(value, key) {
                var keyChild = _clone(key, depth - 1);
                var valueChild = _clone(value, depth - 1);
                child.set(keyChild, valueChild);
            });
            if (_instanceof(parent, nativeSet)) parent.forEach(function(value) {
                var entryChild = _clone(value, depth - 1);
                child.add(entryChild);
            });
            for(var i in parent){
                var attrs;
                if (proto) attrs = Object.getOwnPropertyDescriptor(proto, i);
                if (attrs && attrs.set == null) continue;
                child[i] = _clone(parent[i], depth - 1);
            }
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(parent);
                for(var i = 0; i < symbols.length; i++){
                    // Don't need to worry about cloning a symbol because it is a primitive,
                    // like a number or string.
                    var symbol = symbols[i];
                    var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
                    if (descriptor && !descriptor.enumerable && !includeNonEnumerable) continue;
                    child[symbol] = _clone(parent[symbol], depth - 1);
                    if (!descriptor.enumerable) Object.defineProperty(child, symbol, {
                        enumerable: false
                    });
                }
            }
            if (includeNonEnumerable) {
                var allPropertyNames = Object.getOwnPropertyNames(parent);
                for(var i = 0; i < allPropertyNames.length; i++){
                    var propertyName = allPropertyNames[i];
                    var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
                    if (descriptor && descriptor.enumerable) continue;
                    child[propertyName] = _clone(parent[propertyName], depth - 1);
                    Object.defineProperty(child, propertyName, {
                        enumerable: false
                    });
                }
            }
            return child;
        }
        return _clone(parent1, depth1);
    }
    /**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */ clone.clonePrototype = function clonePrototype(parent) {
        if (parent === null) return null;
        var c = function() {
        };
        c.prototype = parent;
        return new c();
    };
    // private utility functions
    function __objToStr(o) {
        return Object.prototype.toString.call(o);
    }
    clone.__objToStr = __objToStr;
    function __isDate(o) {
        return typeof o === 'object' && __objToStr(o) === '[object Date]';
    }
    clone.__isDate = __isDate;
    function __isArray(o) {
        return typeof o === 'object' && __objToStr(o) === '[object Array]';
    }
    clone.__isArray = __isArray;
    function __isRegExp(o) {
        return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
    }
    clone.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
        var flags = '';
        if (re.global) flags += 'g';
        if (re.ignoreCase) flags += 'i';
        if (re.multiline) flags += 'm';
        return flags;
    }
    clone.__getRegExpFlags = __getRegExpFlags;
    return clone;
}();
if (typeof module === 'object' && module.exports) module.exports = clone1;

},{"buffer":"6WfUi"}],"6WfUi":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require('base64-js');
var ieee754 = require('ieee754');
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength1(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength1(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength1;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i1;
    if (dir) {
        var foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 256))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while(++i < byteLength && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"base64-js":"gv9Lp","ieee754":"2qB7d"}],"gv9Lp":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i1 = 0, len1 = code.length; i1 < len1; ++i1){
    lookup[i1] = code[i1];
    revLookup[code.charCodeAt(i1)] = i1;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"2qB7d":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"1N2ak":[function(require,module,exports) {
/* eslint-disable node/no-deprecated-api */ var assert = require('assert');
module.exports = getAllRoutes;
var transform = function(trie, previous) {
    var prev = previous || '/';
    var routes = {
    };
    var nodes = trie.nodes;
    Object.keys(nodes).forEach(function(key) {
        var path = (prev === '/' ? prev : prev + '/') + (key === '$$' ? ':' + trie.name : key);
        var cb = nodes[key].cb;
        if (cb !== undefined) routes[path] = cb;
        if (Object.keys(nodes[key].nodes).length !== 0) {
            var obj = transform(nodes[key], path);
            Object.keys(obj).forEach(function(r) {
                routes[r] = obj[r];
            });
        }
    });
    return routes;
};
// walk a wayfarer trie
// (obj, fn) -> null
function getAllRoutes(router) {
    assert.equal(typeof router, 'function', 'wayfarer.getAllRoutes: router should be an function');
    var trie = router._trie;
    assert.equal(typeof trie, 'object', 'wayfarer.getAllRoutes: trie should be an object');
    var tree = trie.trie;
    return transform(tree);
}

},{"assert":"bGavs"}],"7jhMD":[function(require,module,exports) {
var Airtable = require('airtable');
// read-only API key from rhizomaticode
var base = new Airtable({
    apiKey: 'keyRHmFMa5W4S4TUJ'
}).base('app1AzaEIEVOFm3nN');
module.exports = store;
function store(state, emitter) {
    state.links = [];
    state.tags = [];
    window.addEventListener('resize', ()=>{
        emitter.emit('render');
    });
    emitter.on('navigate', ()=>{
        console.log(`Navigated to ${state.route}`);
    });
    emitter.on('toggle tag', (tag)=>{
        const index = state.tags.indexOf(tag);
        if (index > -1) state.tags.splice(index, 1);
        else state.tags.push(tag);
        emitter.emit('render');
    });
    base('Links').select({
        // Selecting the first 50 records in Grid view:
        // maxRecords: 1000,
        pageSize: 100,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        state.links = state.links.concat(records.map((record)=>record.fields
        ));
        console.log('records', records, state.links);
        fetchNextPage();
        emitter.emit(state.events.RENDER);
    }, function done(err) {
        if (err) {
            console.error(err);
            return;
        }
    });
//   const DATA_URL = `${window.location.origin}/json`
//   fetch(DATA_URL)
//   .then(response => response.json())
//   .then(data => {
//     state.links = data 
//     console.log(state.links)
//     emitter.emit(state.events.RENDER)
//   });
}

},{"airtable":"8AWZ4"}],"8AWZ4":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var base_1 = __importDefault(require("./base"));
var record_1 = __importDefault(require("./record"));
var table_1 = __importDefault(require("./table"));
var airtable_error_1 = __importDefault(require("./airtable_error"));
var Airtable1 = function() {
    function Airtable(opts) {
        if (opts === void 0) opts = {
        };
        var defaultConfig = Airtable.default_config();
        var apiVersion = opts.apiVersion || Airtable.apiVersion || defaultConfig.apiVersion;
        Object.defineProperties(this, {
            _apiKey: {
                value: opts.apiKey || Airtable.apiKey || defaultConfig.apiKey
            },
            _apiVersion: {
                value: apiVersion
            },
            _apiVersionMajor: {
                value: apiVersion.split('.')[0]
            },
            _customHeaders: {
                value: opts.customHeaders || {
                }
            },
            _endpointUrl: {
                value: opts.endpointUrl || Airtable.endpointUrl || defaultConfig.endpointUrl
            },
            _noRetryIfRateLimited: {
                value: opts.noRetryIfRateLimited || Airtable.noRetryIfRateLimited || defaultConfig.noRetryIfRateLimited
            },
            _requestTimeout: {
                value: opts.requestTimeout || Airtable.requestTimeout || defaultConfig.requestTimeout
            }
        });
        if (!this._apiKey) throw new Error('An API key is required to connect to Airtable');
    }
    Airtable.prototype.base = function(baseId) {
        return base_1.default.createFunctor(this, baseId);
    };
    Airtable.default_config = function() {
        return {
            endpointUrl: 'https://api.airtable.com',
            apiVersion: '0.1.0',
            apiKey: undefined,
            noRetryIfRateLimited: false,
            requestTimeout: 300000
        };
    };
    Airtable.configure = function(_a) {
        var apiKey = _a.apiKey, endpointUrl = _a.endpointUrl, apiVersion = _a.apiVersion, noRetryIfRateLimited = _a.noRetryIfRateLimited, requestTimeout = _a.requestTimeout;
        Airtable.apiKey = apiKey;
        Airtable.endpointUrl = endpointUrl;
        Airtable.apiVersion = apiVersion;
        Airtable.noRetryIfRateLimited = noRetryIfRateLimited;
        Airtable.requestTimeout = requestTimeout;
    };
    Airtable.base = function(baseId) {
        return new Airtable().base(baseId);
    };
    Airtable.Base = base_1.default;
    Airtable.Record = record_1.default;
    Airtable.Table = table_1.default;
    Airtable.Error = airtable_error_1.default;
    return Airtable;
}();
module.exports = Airtable1;

},{"./base":"3XbTT","./record":"lzyhR","./table":"3R1sT","./airtable_error":"gQpWT"}],"3XbTT":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var get_1 = __importDefault(require("lodash/get"));
var isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
var keys_1 = __importDefault(require("lodash/keys"));
var fetch_1 = __importDefault(require("./fetch"));
var abort_controller_1 = __importDefault(require("./abort-controller"));
var object_to_query_param_string_1 = __importDefault(require("./object_to_query_param_string"));
var airtable_error_1 = __importDefault(require("./airtable_error"));
var table_1 = __importDefault(require("./table"));
var http_headers_1 = __importDefault(require("./http_headers"));
var run_action_1 = __importDefault(require("./run_action"));
var package_version_1 = __importDefault(require("./package_version"));
var exponential_backoff_with_jitter_1 = __importDefault(require("./exponential_backoff_with_jitter"));
var userAgent = "Airtable.js/" + package_version_1.default;
var Base1 = function() {
    function Base(airtable, baseId) {
        this._airtable = airtable;
        this._id = baseId;
    }
    Base.prototype.table = function(tableName) {
        return new table_1.default(this, null, tableName);
    };
    Base.prototype.makeRequest = function(options) {
        var _this = this;
        var _a;
        if (options === void 0) options = {
        };
        var method = get_1.default(options, 'method', 'GET').toUpperCase();
        var url = this._airtable._endpointUrl + "/v" + this._airtable._apiVersionMajor + "/" + this._id + get_1.default(options, 'path', '/') + "?" + object_to_query_param_string_1.default(get_1.default(options, 'qs', {
        }));
        var controller = new abort_controller_1.default();
        var headers = this._getRequestHeaders(Object.assign({
        }, this._airtable._customHeaders, (_a = options.headers) !== null && _a !== void 0 ? _a : {
        }));
        var requestOptions = {
            method: method,
            headers: headers,
            signal: controller.signal
        };
        if ('body' in options && _canRequestMethodIncludeBody(method)) requestOptions.body = JSON.stringify(options.body);
        var timeout = setTimeout(function() {
            controller.abort();
        }, this._airtable._requestTimeout);
        return new Promise(function(resolve, reject) {
            fetch_1.default(url, requestOptions).then(function(resp) {
                clearTimeout(timeout);
                if (resp.status === 429 && !_this._airtable._noRetryIfRateLimited) {
                    var numAttempts_1 = get_1.default(options, '_numAttempts', 0);
                    var backoffDelayMs = exponential_backoff_with_jitter_1.default(numAttempts_1);
                    setTimeout(function() {
                        var newOptions = __assign(__assign({
                        }, options), {
                            _numAttempts: numAttempts_1 + 1
                        });
                        _this.makeRequest(newOptions).then(resolve).catch(reject);
                    }, backoffDelayMs);
                } else resp.json().then(function(body) {
                    var err = _this._checkStatusForError(resp.status, body) || _getErrorForNonObjectBody(resp.status, body);
                    if (err) reject(err);
                    else resolve({
                        statusCode: resp.status,
                        headers: resp.headers,
                        body: body
                    });
                }).catch(function() {
                    var err = _getErrorForNonObjectBody(resp.status);
                    reject(err);
                });
            }).catch(function(err) {
                clearTimeout(timeout);
                err = new airtable_error_1.default('CONNECTION_ERROR', err.message, null);
                reject(err);
            });
        });
    };
    /**
     * @deprecated This method is deprecated.
     */ Base.prototype.runAction = function(method, path, queryParams, bodyData, callback) {
        run_action_1.default(this, method, path, queryParams, bodyData, callback, 0);
    };
    Base.prototype._getRequestHeaders = function(headers) {
        var result = new http_headers_1.default();
        result.set('Authorization', "Bearer " + this._airtable._apiKey);
        result.set('User-Agent', userAgent);
        result.set('Content-Type', 'application/json');
        for(var _i = 0, _a = keys_1.default(headers); _i < _a.length; _i++){
            var headerKey = _a[_i];
            result.set(headerKey, headers[headerKey]);
        }
        return result.toJSON();
    };
    Base.prototype._checkStatusForError = function(statusCode, body) {
        var _a = (body !== null && body !== void 0 ? body : {
            error: {
            }
        }).error, error = _a === void 0 ? {
        } : _a;
        var type = error.type, message = error.message;
        if (statusCode === 401) return new airtable_error_1.default('AUTHENTICATION_REQUIRED', 'You should provide valid api key to perform this operation', statusCode);
        else if (statusCode === 403) return new airtable_error_1.default('NOT_AUTHORIZED', 'You are not authorized to perform this operation', statusCode);
        else if (statusCode === 404) return new airtable_error_1.default('NOT_FOUND', message !== null && message !== void 0 ? message : 'Could not find what you are looking for', statusCode);
        else if (statusCode === 413) return new airtable_error_1.default('REQUEST_TOO_LARGE', 'Request body is too large', statusCode);
        else if (statusCode === 422) return new airtable_error_1.default(type !== null && type !== void 0 ? type : 'UNPROCESSABLE_ENTITY', message !== null && message !== void 0 ? message : 'The operation cannot be processed', statusCode);
        else if (statusCode === 429) return new airtable_error_1.default('TOO_MANY_REQUESTS', 'You have made too many requests in a short period of time. Please retry your request later', statusCode);
        else if (statusCode === 500) return new airtable_error_1.default('SERVER_ERROR', 'Try again. If the problem persists, contact support.', statusCode);
        else if (statusCode === 503) return new airtable_error_1.default('SERVICE_UNAVAILABLE', 'The service is temporarily unavailable. Please retry shortly.', statusCode);
        else if (statusCode >= 400) return new airtable_error_1.default(type !== null && type !== void 0 ? type : 'UNEXPECTED_ERROR', message !== null && message !== void 0 ? message : 'An unexpected error occurred', statusCode);
        else return null;
    };
    Base.prototype.doCall = function(tableName) {
        return this.table(tableName);
    };
    Base.prototype.getId = function() {
        return this._id;
    };
    Base.createFunctor = function(airtable, baseId) {
        var base = new Base(airtable, baseId);
        var baseFn = function(tableName) {
            return base.doCall(tableName);
        };
        baseFn._base = base;
        baseFn.table = base.table.bind(base);
        baseFn.makeRequest = base.makeRequest.bind(base);
        baseFn.runAction = base.runAction.bind(base);
        baseFn.getId = base.getId.bind(base);
        return baseFn;
    };
    return Base;
}();
function _canRequestMethodIncludeBody(method) {
    return method !== 'GET' && method !== 'DELETE';
}
function _getErrorForNonObjectBody(statusCode, body) {
    if (isPlainObject_1.default(body)) return null;
    else return new airtable_error_1.default('UNEXPECTED_ERROR', 'The response from Airtable was invalid JSON. Please try again soon.', statusCode);
}
module.exports = Base1;

},{"lodash/get":"clerP","lodash/isPlainObject":"h6x4F","lodash/keys":"eaJtd","./fetch":"aDDKj","./abort-controller":"hCaUe","./object_to_query_param_string":"7RWDU","./airtable_error":"gQpWT","./table":"3R1sT","./http_headers":"4Ay1Y","./run_action":"5KMiu","./package_version":"dw8kL","./exponential_backoff_with_jitter":"6LQ7o"}],"clerP":[function(require,module,exports) {
var baseGet = require('./_baseGet');
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */ function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}
module.exports = get;

},{"./_baseGet":"b6MyZ"}],"b6MyZ":[function(require,module,exports) {
var castPath = require('./_castPath'), toKey = require('./_toKey');
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */ function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while(object != null && index < length)object = object[toKey(path[index++])];
    return index && index == length ? object : undefined;
}
module.exports = baseGet;

},{"./_castPath":"cqdrS","./_toKey":"89PZK"}],"cqdrS":[function(require,module,exports) {
var isArray = require('./isArray'), isKey = require('./_isKey'), stringToPath = require('./_stringToPath'), toString = require('./toString');
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */ function castPath(value, object) {
    if (isArray(value)) return value;
    return isKey(value, object) ? [
        value
    ] : stringToPath(toString(value));
}
module.exports = castPath;

},{"./isArray":"1lGqs","./_isKey":"5iiGH","./_stringToPath":"760gh","./toString":"l5Kz2"}],"1lGqs":[function(require,module,exports) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;

},{}],"5iiGH":[function(require,module,exports) {
var isArray = require('./isArray'), isSymbol = require('./isSymbol');
/** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */ function isKey(value, object) {
    if (isArray(value)) return false;
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) return true;
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
module.exports = isKey;

},{"./isArray":"1lGqs","./isSymbol":"f0BSD"}],"f0BSD":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;

},{"./_baseGetTag":"3ojMs","./isObjectLike":"hleYb"}],"3ojMs":[function(require,module,exports) {
var Symbol = require('./_Symbol'), getRawTag = require('./_getRawTag'), objectToString = require('./_objectToString');
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

},{"./_Symbol":"bW0KX","./_getRawTag":"19N3n","./_objectToString":"9Bucd"}],"bW0KX":[function(require,module,exports) {
var root = require('./_root');
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;

},{"./_root":"8zAA7"}],"8zAA7":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

},{"./_freeGlobal":"dD1YD"}],"dD1YD":[function(require,module,exports) {
var global = arguments[3];
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

},{}],"19N3n":[function(require,module,exports) {
var Symbol = require('./_Symbol');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
module.exports = getRawTag;

},{"./_Symbol":"bW0KX"}],"9Bucd":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;

},{}],"hleYb":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
module.exports = isObjectLike;

},{}],"760gh":[function(require,module,exports) {
var memoizeCapped = require('./_memoizeCapped');
/** Used to match property names within property paths. */ var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */ ) result.push('');
    string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
});
module.exports = stringToPath;

},{"./_memoizeCapped":"exwwg"}],"exwwg":[function(require,module,exports) {
var memoize = require('./memoize');
/** Used as the maximum memoize cache size. */ var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */ function memoizeCapped(func) {
    var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
        return key;
    });
    var cache = result.cache;
    return result;
}
module.exports = memoizeCapped;

},{"./memoize":"7TP6e"}],"7TP6e":[function(require,module,exports) {
var MapCache = require('./_MapCache');
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') throw new TypeError(FUNC_ERROR_TEXT);
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = MapCache;
module.exports = memoize;

},{"./_MapCache":"5qwo9"}],"5qwo9":[function(require,module,exports) {
var mapCacheClear = require('./_mapCacheClear'), mapCacheDelete = require('./_mapCacheDelete'), mapCacheGet = require('./_mapCacheGet'), mapCacheHas = require('./_mapCacheHas'), mapCacheSet = require('./_mapCacheSet');
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

},{"./_mapCacheClear":"eiIz6","./_mapCacheDelete":"b9yVg","./_mapCacheGet":"7jvdG","./_mapCacheHas":"6drfv","./_mapCacheSet":"lU4h2"}],"eiIz6":[function(require,module,exports) {
var Hash = require('./_Hash'), ListCache = require('./_ListCache'), Map = require('./_Map');
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
    };
}
module.exports = mapCacheClear;

},{"./_Hash":"hJ1uN","./_ListCache":"69shJ","./_Map":"4FQwO"}],"hJ1uN":[function(require,module,exports) {
var hashClear = require('./_hashClear'), hashDelete = require('./_hashDelete'), hashGet = require('./_hashGet'), hashHas = require('./_hashHas'), hashSet = require('./_hashSet');
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

},{"./_hashClear":"hWpOz","./_hashDelete":"2NzEu","./_hashGet":"4JPrG","./_hashHas":"2R7qp","./_hashSet":"greAx"}],"hWpOz":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {
    };
    this.size = 0;
}
module.exports = hashClear;

},{"./_nativeCreate":"eh01b"}],"eh01b":[function(require,module,exports) {
var getNative = require('./_getNative');
/* Built-in method references that are verified to be native. */ var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

},{"./_getNative":"e1jQb"}],"e1jQb":[function(require,module,exports) {
var baseIsNative = require('./_baseIsNative'), getValue = require('./_getValue');
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;

},{"./_baseIsNative":"4EX6F","./_getValue":"6o3AP"}],"4EX6F":[function(require,module,exports) {
var isFunction = require('./isFunction'), isMasked = require('./_isMasked'), isObject = require('./isObject'), toSource = require('./_toSource');
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
module.exports = baseIsNative;

},{"./isFunction":"1GLcK","./_isMasked":"62g03","./isObject":"bPn8O","./_toSource":"9Hb80"}],"1GLcK":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObject = require('./isObject');
/** `Object#toString` result references. */ var asyncTag = '[object AsyncFunction]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;

},{"./_baseGetTag":"3ojMs","./isObject":"bPn8O"}],"bPn8O":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;

},{}],"62g03":[function(require,module,exports) {
var coreJsData = require('./_coreJsData');
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
module.exports = isMasked;

},{"./_coreJsData":"fYhOG"}],"fYhOG":[function(require,module,exports) {
var root = require('./_root');
/** Used to detect overreaching core-js shims. */ var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

},{"./_root":"8zAA7"}],"9Hb80":[function(require,module,exports) {
/** Used for built-in method references. */ var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {
        }
        try {
            return func + '';
        } catch (e1) {
        }
    }
    return '';
}
module.exports = toSource;

},{}],"6o3AP":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
module.exports = getValue;

},{}],"2NzEu":[function(require,module,exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = hashDelete;

},{}],"4JPrG":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;

},{"./_nativeCreate":"eh01b"}],"2R7qp":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
module.exports = hashHas;

},{"./_nativeCreate":"eh01b"}],"greAx":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
module.exports = hashSet;

},{"./_nativeCreate":"eh01b"}],"69shJ":[function(require,module,exports) {
var listCacheClear = require('./_listCacheClear'), listCacheDelete = require('./_listCacheDelete'), listCacheGet = require('./_listCacheGet'), listCacheHas = require('./_listCacheHas'), listCacheSet = require('./_listCacheSet');
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

},{"./_listCacheClear":"3q4mU","./_listCacheDelete":"5rKXm","./_listCacheGet":"eGYzB","./_listCacheHas":"5YU3c","./_listCacheSet":"79caV"}],"3q4mU":[function(require,module,exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
module.exports = listCacheClear;

},{}],"5rKXm":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
module.exports = listCacheDelete;

},{"./_assocIndexOf":"cDUsW"}],"cDUsW":[function(require,module,exports) {
var eq = require('./eq');
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
module.exports = assocIndexOf;

},{"./eq":"cAkrV"}],"cAkrV":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
module.exports = eq;

},{}],"eGYzB":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;

},{"./_assocIndexOf":"cDUsW"}],"5YU3c":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;

},{"./_assocIndexOf":"cDUsW"}],"79caV":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
module.exports = listCacheSet;

},{"./_assocIndexOf":"cDUsW"}],"4FQwO":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var Map = getNative(root, 'Map');
module.exports = Map;

},{"./_getNative":"e1jQb","./_root":"8zAA7"}],"b9yVg":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = mapCacheDelete;

},{"./_getMapData":"6CPU3"}],"6CPU3":[function(require,module,exports) {
var isKeyable = require('./_isKeyable');
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
module.exports = getMapData;

},{"./_isKeyable":"l4mx7"}],"l4mx7":[function(require,module,exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
module.exports = isKeyable;

},{}],"7jvdG":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;

},{"./_getMapData":"6CPU3"}],"6drfv":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;

},{"./_getMapData":"6CPU3"}],"lU4h2":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
module.exports = mapCacheSet;

},{"./_getMapData":"6CPU3"}],"l5Kz2":[function(require,module,exports) {
var baseToString = require('./_baseToString');
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? '' : baseToString(value);
}
module.exports = toString;

},{"./_baseToString":"Ma2AR"}],"Ma2AR":[function(require,module,exports) {
var Symbol = require('./_Symbol'), arrayMap = require('./_arrayMap'), isArray = require('./isArray'), isSymbol = require('./isSymbol');
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') return value;
    if (isArray(value)) // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
    if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : '';
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = baseToString;

},{"./_Symbol":"bW0KX","./_arrayMap":"ec8fY","./isArray":"1lGqs","./isSymbol":"f0BSD"}],"ec8fY":[function(require,module,exports) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length)result[index] = iteratee(array[index], index, array);
    return result;
}
module.exports = arrayMap;

},{}],"89PZK":[function(require,module,exports) {
var isSymbol = require('./isSymbol');
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) return value;
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = toKey;

},{"./isSymbol":"f0BSD"}],"h6x4F":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), getPrototype = require('./_getPrototype'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var objectTag = '[object Object]';
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
    var proto = getPrototype(value);
    if (proto === null) return true;
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;

},{"./_baseGetTag":"3ojMs","./_getPrototype":"dqvo5","./isObjectLike":"hleYb"}],"dqvo5":[function(require,module,exports) {
var overArg = require('./_overArg');
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

},{"./_overArg":"iEpDu"}],"iEpDu":[function(require,module,exports) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;

},{}],"eaJtd":[function(require,module,exports) {
var arrayLikeKeys = require('./_arrayLikeKeys'), baseKeys = require('./_baseKeys'), isArrayLike = require('./isArrayLike');
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
module.exports = keys;

},{"./_arrayLikeKeys":"3iLNZ","./_baseKeys":"8kGTZ","./isArrayLike":"1kNlj"}],"3iLNZ":[function(require,module,exports) {
var baseTimes = require('./_baseTimes'), isArguments = require('./isArguments'), isArray = require('./isArray'), isBuffer = require('./isBuffer'), isIndex = require('./_isIndex'), isTypedArray = require('./isTypedArray');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
module.exports = arrayLikeKeys;

},{"./_baseTimes":"jDDbp","./isArguments":"kLexX","./isArray":"1lGqs","./isBuffer":"bZqmA","./_isIndex":"jDBbX","./isTypedArray":"c7vOD"}],"jDDbp":[function(require,module,exports) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
module.exports = baseTimes;

},{}],"kLexX":[function(require,module,exports) {
var baseIsArguments = require('./_baseIsArguments'), isObjectLike = require('./isObjectLike');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

},{"./_baseIsArguments":"49tGY","./isObjectLike":"hleYb"}],"49tGY":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;

},{"./_baseGetTag":"3ojMs","./isObjectLike":"hleYb"}],"bZqmA":[function(require,module,exports) {
var root = require('./_root'), stubFalse = require('./stubFalse');
/** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

},{"./_root":"8zAA7","./stubFalse":"hHp5I"}],"hHp5I":[function(require,module,exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = stubFalse;

},{}],"jDBbX":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
module.exports = isIndex;

},{}],"c7vOD":[function(require,module,exports) {
var baseIsTypedArray = require('./_baseIsTypedArray'), baseUnary = require('./_baseUnary'), nodeUtil = require('./_nodeUtil');
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

},{"./_baseIsTypedArray":"a68Ul","./_baseUnary":"7XZ3H","./_nodeUtil":"32GuS"}],"a68Ul":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isLength = require('./isLength'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {
};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;

},{"./_baseGetTag":"3ojMs","./isLength":"klTMW","./isObjectLike":"hleYb"}],"klTMW":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;

},{}],"7XZ3H":[function(require,module,exports) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
module.exports = baseUnary;

},{}],"32GuS":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');
/** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {
    }
}();
module.exports = nodeUtil;

},{"./_freeGlobal":"dD1YD"}],"8kGTZ":[function(require,module,exports) {
var isPrototype = require('./_isPrototype'), nativeKeys = require('./_nativeKeys');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != 'constructor') result.push(key);
    return result;
}
module.exports = baseKeys;

},{"./_isPrototype":"23Agj","./_nativeKeys":"1Qynx"}],"23Agj":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
module.exports = isPrototype;

},{}],"1Qynx":[function(require,module,exports) {
var overArg = require('./_overArg');
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

},{"./_overArg":"iEpDu"}],"1kNlj":[function(require,module,exports) {
var isFunction = require('./isFunction'), isLength = require('./isLength');
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;

},{"./isFunction":"1GLcK","./isLength":"klTMW"}],"aDDKj":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
// istanbul ignore file
var node_fetch_1 = __importDefault(require("node-fetch"));
module.exports = typeof window === 'undefined' ? node_fetch_1.default : window.fetch.bind(window);

},{"node-fetch":"6qoUZ"}],"6qoUZ":[function(require,module,exports) {
"use strict";

},{}],"hCaUe":[function(require,module,exports) {
"use strict";
// istanbul ignore file
var AbortController;
if (typeof window === 'undefined') AbortController = require('abort-controller');
else if ('signal' in new Request('')) AbortController = window.AbortController;
else {
    /* eslint-disable @typescript-eslint/no-var-requires */ var polyfill = require('abortcontroller-polyfill/dist/cjs-ponyfill');
    /* eslint-enable @typescript-eslint/no-var-requires */ AbortController = polyfill.AbortController;
}
module.exports = AbortController;

},{"abort-controller":"6qoUZ","abortcontroller-polyfill/dist/cjs-ponyfill":"4eP0T"}],"4eP0T":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function _get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
    else _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver);
        return desc.value;
    };
    return _get(target1, property1, receiver1 || target1);
}
var Emitter1 = /*#__PURE__*/ function() {
    function Emitter() {
        _classCallCheck(this, Emitter);
        Object.defineProperty(this, 'listeners', {
            value: {
            },
            writable: true,
            configurable: true
        });
    }
    _createClass(Emitter, [
        {
            key: "addEventListener",
            value: function addEventListener(type, callback, options) {
                if (!(type in this.listeners)) this.listeners[type] = [];
                this.listeners[type].push({
                    callback: callback,
                    options: options
                });
            }
        },
        {
            key: "removeEventListener",
            value: function removeEventListener(type, callback) {
                if (!(type in this.listeners)) return;
                var stack = this.listeners[type];
                for(var i = 0, l = stack.length; i < l; i++)if (stack[i].callback === callback) {
                    stack.splice(i, 1);
                    return;
                }
            }
        },
        {
            key: "dispatchEvent",
            value: function dispatchEvent(event) {
                if (!(event.type in this.listeners)) return;
                var stack = this.listeners[event.type];
                var stackToCall = stack.slice();
                for(var i = 0, l = stackToCall.length; i < l; i++){
                    var listener = stackToCall[i];
                    try {
                        listener.callback.call(this, event);
                    } catch (e) {
                        Promise.resolve().then(function() {
                            throw e;
                        });
                    }
                    if (listener.options && listener.options.once) this.removeEventListener(event.type, listener.callback);
                }
                return !event.defaultPrevented;
            }
        }
    ]);
    return Emitter;
}();
var AbortSignal1 = /*#__PURE__*/ function(_Emitter) {
    _inherits(AbortSignal, _Emitter);
    var _super = _createSuper(AbortSignal);
    function AbortSignal() {
        var _this;
        _classCallCheck(this, AbortSignal);
        _this = _super.call(this); // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
        // constructor has failed to run, then "this.listeners" will still be undefined and then we call
        // the parent constructor directly instead as a workaround. For general details, see babel bug:
        // https://github.com/babel/babel/issues/3041
        // This hack was added as a fix for the issue described here:
        // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042
        if (!_this.listeners) Emitter1.call(_assertThisInitialized(_this));
         // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
        // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl
        Object.defineProperty(_assertThisInitialized(_this), 'aborted', {
            value: false,
            writable: true,
            configurable: true
        });
        Object.defineProperty(_assertThisInitialized(_this), 'onabort', {
            value: null,
            writable: true,
            configurable: true
        });
        return _this;
    }
    _createClass(AbortSignal, [
        {
            key: "toString",
            value: function toString() {
                return '[object AbortSignal]';
            }
        },
        {
            key: "dispatchEvent",
            value: function dispatchEvent(event) {
                if (event.type === 'abort') {
                    this.aborted = true;
                    if (typeof this.onabort === 'function') this.onabort.call(this, event);
                }
                _get(_getPrototypeOf(AbortSignal.prototype), "dispatchEvent", this).call(this, event);
            }
        }
    ]);
    return AbortSignal;
}(Emitter1);
var AbortController1 = /*#__PURE__*/ function() {
    function AbortController() {
        _classCallCheck(this, AbortController);
        // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
        // we want Object.keys(new AbortController()) to be [] for compat with the native impl
        Object.defineProperty(this, 'signal', {
            value: new AbortSignal1(),
            writable: true,
            configurable: true
        });
    }
    _createClass(AbortController, [
        {
            key: "abort",
            value: function abort() {
                var event;
                try {
                    event = new Event('abort');
                } catch (e) {
                    if (typeof document !== 'undefined') {
                        if (!document.createEvent) {
                            // For Internet Explorer 8:
                            event = document.createEventObject();
                            event.type = 'abort';
                        } else {
                            // For Internet Explorer 11:
                            event = document.createEvent('Event');
                            event.initEvent('abort', false, false);
                        }
                    } else // Fallback where document isn't available:
                    event = {
                        type: 'abort',
                        bubbles: false,
                        cancelable: false
                    };
                }
                this.signal.dispatchEvent(event);
            }
        },
        {
            key: "toString",
            value: function toString() {
                return '[object AbortController]';
            }
        }
    ]);
    return AbortController;
}();
if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    // These are necessary to make sure that we get correct output for:
    // Object.prototype.toString.call(new AbortController())
    AbortController1.prototype[Symbol.toStringTag] = 'AbortController';
    AbortSignal1.prototype[Symbol.toStringTag] = 'AbortSignal';
}
function polyfillNeeded(self) {
    if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
        console.log('__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill');
        return true;
    } // Note that the "unfetch" minimal fetch polyfill defines fetch() without
    // defining window.Request, and this polyfill need to work on top of unfetch
    // so the below feature detection needs the !self.AbortController part.
    // The Request.prototype check is also needed because Safari versions 11.1.2
    // up to and including 12.1.x has a window.AbortController present but still
    // does NOT correctly implement abortable fetch:
    // https://bugs.webkit.org/show_bug.cgi?id=174980#c2
    return typeof self.Request === 'function' && !self.Request.prototype.hasOwnProperty('signal') || !self.AbortController;
}
/**
 * Note: the "fetch.Request" default value is available for fetch imported from
 * the "node-fetch" package and not in browsers. This is OK since browsers
 * will be importing umd-polyfill.js from that path "self" is passed the
 * decorator so the default value will not be used (because browsers that define
 * fetch also has Request). One quirky setup where self.fetch exists but
 * self.Request does not is when the "unfetch" minimal fetch polyfill is used
 * on top of IE11; for this case the browser will try to use the fetch.Request
 * default value which in turn will be undefined but then then "if (Request)"
 * will ensure that you get a patched fetch but still no Request (as expected).
 * @param {fetch, Request = fetch.Request}
 * @returns {fetch: abortableFetch, Request: AbortableRequest}
 */ function abortableFetchDecorator(patchTargets) {
    if ('function' === typeof patchTargets) patchTargets = {
        fetch: patchTargets
    };
    var _patchTargets = patchTargets, fetch = _patchTargets.fetch, _patchTargets$Request = _patchTargets.Request, NativeRequest = _patchTargets$Request === void 0 ? fetch.Request : _patchTargets$Request, NativeAbortController = _patchTargets.AbortController, _patchTargets$__FORCE = _patchTargets.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL, __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL = _patchTargets$__FORCE === void 0 ? false : _patchTargets$__FORCE;
    if (!polyfillNeeded({
        fetch: fetch,
        Request: NativeRequest,
        AbortController: NativeAbortController,
        __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
    })) return {
        fetch: fetch,
        Request: Request
    };
    var Request = NativeRequest; // Note that the "unfetch" minimal fetch polyfill defines fetch() without
    // defining window.Request, and this polyfill need to work on top of unfetch
    // hence we only patch it if it's available. Also we don't patch it if signal
    // is already available on the Request prototype because in this case support
    // is present and the patching below can cause a crash since it assigns to
    // request.signal which is technically a read-only property. This latter error
    // happens when you run the main5.js node-fetch example in the repo
    // "abortcontroller-polyfill-examples". The exact error is:
    //   request.signal = init.signal;
    //   ^
    // TypeError: Cannot set property signal of #<Request> which has only a getter
    if (Request && !Request.prototype.hasOwnProperty('signal') || __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
        Request = function Request(input, init) {
            var signal;
            if (init && init.signal) {
                signal = init.signal; // Never pass init.signal to the native Request implementation when the polyfill has
                // been installed because if we're running on top of a browser with a
                // working native AbortController (i.e. the polyfill was installed due to
                // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
                // fake AbortSignal to the native fetch will trigger:
                // TypeError: Failed to construct 'Request': member signal is not of type AbortSignal.
                delete init.signal;
            }
            var request = new NativeRequest(input, init);
            if (signal) Object.defineProperty(request, 'signal', {
                writable: false,
                enumerable: false,
                configurable: true,
                value: signal
            });
            return request;
        };
        Request.prototype = NativeRequest.prototype;
    }
    var realFetch = fetch;
    var abortableFetch = function abortableFetch(input, init) {
        var signal = Request && Request.prototype.isPrototypeOf(input) ? input.signal : init ? init.signal : undefined;
        if (signal) {
            var abortError;
            try {
                abortError = new DOMException('Aborted', 'AbortError');
            } catch (err) {
                // IE 11 does not support calling the DOMException constructor, use a
                // regular error object on it instead.
                abortError = new Error('Aborted');
                abortError.name = 'AbortError';
            } // Return early if already aborted, thus avoiding making an HTTP request
            if (signal.aborted) return Promise.reject(abortError);
             // Turn an event into a promise, reject it once `abort` is dispatched
            var cancellation = new Promise(function(_, reject) {
                signal.addEventListener('abort', function() {
                    return reject(abortError);
                }, {
                    once: true
                });
            });
            if (init && init.signal) // Never pass .signal to the native implementation when the polyfill has
            // been installed because if we're running on top of a browser with a
            // working native AbortController (i.e. the polyfill was installed due to
            // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
            // fake AbortSignal to the native fetch will trigger:
            // TypeError: Failed to execute 'fetch' on 'Window': member signal is not of type AbortSignal.
            delete init.signal;
             // Return the fastest promise (don't need to wait for request to finish)
            return Promise.race([
                cancellation,
                realFetch(input, init)
            ]);
        }
        return realFetch(input, init);
    };
    return {
        fetch: abortableFetch,
        Request: Request
    };
}
exports.AbortController = AbortController1;
exports.AbortSignal = AbortSignal1;
exports.abortableFetch = abortableFetchDecorator;

},{}],"7RWDU":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var isArray_1 = __importDefault(require("lodash/isArray"));
var isNil_1 = __importDefault(require("lodash/isNil"));
var keys_1 = __importDefault(require("lodash/keys"));
/* eslint-enable @typescript-eslint/no-explicit-any */ // Adapted from jQuery.param:
// https://github.com/jquery/jquery/blob/2.2-stable/src/serialize.js
function buildParams(prefix, obj, addFn) {
    if (isArray_1.default(obj)) // Serialize array item.
    for(var index = 0; index < obj.length; index++){
        var value = obj[index];
        if (/\[\]$/.test(prefix)) // Treat each array item as a scalar.
        addFn(prefix, value);
        else // Item is non-scalar (array or object), encode its numeric index.
        buildParams(prefix + "[" + (typeof value === 'object' && value !== null ? index : '') + "]", value, addFn);
    }
    else if (typeof obj === 'object') // Serialize object item.
    for(var _i = 0, _a = keys_1.default(obj); _i < _a.length; _i++){
        var key = _a[_i];
        var value = obj[key];
        buildParams(prefix + "[" + key + "]", value, addFn);
    }
    else // Serialize scalar item.
    addFn(prefix, obj);
}
function objectToQueryParamString(obj) {
    var parts = [];
    var addFn = function(key, value) {
        value = isNil_1.default(value) ? '' : value;
        parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
    };
    for(var _i = 0, _a = keys_1.default(obj); _i < _a.length; _i++){
        var key1 = _a[_i];
        var value1 = obj[key1];
        buildParams(key1, value1, addFn);
    }
    return parts.join('&').replace(/%20/g, '+');
}
module.exports = objectToQueryParamString;

},{"lodash/isArray":"1lGqs","lodash/isNil":"jHI2u","lodash/keys":"eaJtd"}],"jHI2u":[function(require,module,exports) {
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */ function isNil(value) {
    return value == null;
}
module.exports = isNil;

},{}],"gQpWT":[function(require,module,exports) {
"use strict";
var AirtableError1 = function() {
    function AirtableError(error, message, statusCode) {
        this.error = error;
        this.message = message;
        this.statusCode = statusCode;
    }
    AirtableError.prototype.toString = function() {
        return [
            this.message,
            '(',
            this.error,
            ')',
            this.statusCode ? "[Http code " + this.statusCode + "]" : '', 
        ].join('');
    };
    return AirtableError;
}();
module.exports = AirtableError1;

},{}],"3R1sT":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
var deprecate_1 = __importDefault(require("./deprecate"));
var query_1 = __importDefault(require("./query"));
var record_1 = __importDefault(require("./record"));
var callback_to_promise_1 = __importDefault(require("./callback_to_promise"));
var Table1 = function() {
    function Table(base, tableId, tableName) {
        if (!tableId && !tableName) throw new Error('Table name or table ID is required');
        this._base = base;
        this.id = tableId;
        this.name = tableName;
        // Public API
        this.find = callback_to_promise_1.default(this._findRecordById, this);
        this.select = this._selectRecords.bind(this);
        this.create = callback_to_promise_1.default(this._createRecords, this);
        this.update = callback_to_promise_1.default(this._updateRecords.bind(this, false), this);
        this.replace = callback_to_promise_1.default(this._updateRecords.bind(this, true), this);
        this.destroy = callback_to_promise_1.default(this._destroyRecord, this);
        // Deprecated API
        this.list = deprecate_1.default(this._listRecords.bind(this), 'table.list', 'Airtable: `list()` is deprecated. Use `select()` instead.');
        this.forEach = deprecate_1.default(this._forEachRecord.bind(this), 'table.forEach', 'Airtable: `forEach()` is deprecated. Use `select()` instead.');
    }
    Table.prototype._findRecordById = function(recordId, done) {
        var record = new record_1.default(this, recordId);
        record.fetch(done);
    };
    Table.prototype._selectRecords = function(params) {
        if (params === void 0) params = {
        };
        if (arguments.length > 1) console.warn("Airtable: `select` takes only one parameter, but it was given " + arguments.length + " parameters. Use `eachPage` or `firstPage` to fetch records.");
        if (isPlainObject_1.default(params)) {
            var validationResults = query_1.default.validateParams(params);
            if (validationResults.errors.length) {
                var formattedErrors = validationResults.errors.map(function(error) {
                    return "  * " + error;
                });
                throw new Error("Airtable: invalid parameters for `select`:\n" + formattedErrors.join('\n'));
            }
            if (validationResults.ignoredKeys.length) console.warn("Airtable: the following parameters to `select` will be ignored: " + validationResults.ignoredKeys.join(', '));
            return new query_1.default(this, validationResults.validParams);
        } else throw new Error('Airtable: the parameter for `select` should be a plain object or undefined.');
    };
    Table.prototype._urlEncodedNameOrId = function() {
        return this.id || encodeURIComponent(this.name);
    };
    Table.prototype._createRecords = function(recordsData, optionalParameters, done) {
        var _this = this;
        var isCreatingMultipleRecords = Array.isArray(recordsData);
        if (!done) {
            done = optionalParameters;
            optionalParameters = {
            };
        }
        var requestData;
        if (isCreatingMultipleRecords) requestData = __assign({
            records: recordsData
        }, optionalParameters);
        else requestData = __assign({
            fields: recordsData
        }, optionalParameters);
        this._base.runAction('post', "/" + this._urlEncodedNameOrId() + "/", {
        }, requestData, function(err, resp, body) {
            if (err) {
                done(err);
                return;
            }
            var result;
            if (isCreatingMultipleRecords) result = body.records.map(function(record) {
                return new record_1.default(_this, record.id, record);
            });
            else result = new record_1.default(_this, body.id, body);
            done(null, result);
        });
    };
    Table.prototype._updateRecords = function(isDestructiveUpdate, recordsDataOrRecordId, recordDataOrOptsOrDone, optsOrDone, done) {
        var _this = this;
        var opts;
        if (Array.isArray(recordsDataOrRecordId)) {
            var recordsData = recordsDataOrRecordId;
            opts = isPlainObject_1.default(recordDataOrOptsOrDone) ? recordDataOrOptsOrDone : {
            };
            done = optsOrDone || recordDataOrOptsOrDone;
            var method = isDestructiveUpdate ? 'put' : 'patch';
            var requestData = __assign({
                records: recordsData
            }, opts);
            this._base.runAction(method, "/" + this._urlEncodedNameOrId() + "/", {
            }, requestData, function(err, resp, body) {
                if (err) {
                    done(err);
                    return;
                }
                var result = body.records.map(function(record) {
                    return new record_1.default(_this, record.id, record);
                });
                done(null, result);
            });
        } else {
            var recordId = recordsDataOrRecordId;
            var recordData = recordDataOrOptsOrDone;
            opts = isPlainObject_1.default(optsOrDone) ? optsOrDone : {
            };
            done = done || optsOrDone;
            var record1 = new record_1.default(this, recordId);
            if (isDestructiveUpdate) record1.putUpdate(recordData, opts, done);
            else record1.patchUpdate(recordData, opts, done);
        }
    };
    Table.prototype._destroyRecord = function(recordIdsOrId, done) {
        var _this = this;
        if (Array.isArray(recordIdsOrId)) {
            var queryParams = {
                records: recordIdsOrId
            };
            this._base.runAction('delete', "/" + this._urlEncodedNameOrId(), queryParams, null, function(err, response, results) {
                if (err) {
                    done(err);
                    return;
                }
                var records = results.records.map(function(_a) {
                    var id = _a.id;
                    return new record_1.default(_this, id, null);
                });
                done(null, records);
            });
        } else {
            var record = new record_1.default(this, recordIdsOrId);
            record.destroy(done);
        }
    };
    Table.prototype._listRecords = function(limit, offset, opts, done) {
        var _this = this;
        if (!done) {
            done = opts;
            opts = {
            };
        }
        var listRecordsParameters = __assign({
            limit: limit,
            offset: offset
        }, opts);
        this._base.runAction('get', "/" + this._urlEncodedNameOrId() + "/", listRecordsParameters, null, function(err, response, results) {
            if (err) {
                done(err);
                return;
            }
            var records = results.records.map(function(recordJson) {
                return new record_1.default(_this, null, recordJson);
            });
            done(null, records, results.offset);
        });
    };
    Table.prototype._forEachRecord = function(opts, callback, done) {
        var _this = this;
        if (arguments.length === 2) {
            done = callback;
            callback = opts;
            opts = {
            };
        }
        var limit = Table.__recordsPerPageForIteration || 100;
        var offset = null;
        var nextPage = function() {
            _this._listRecords(limit, offset, opts, function(err, page, newOffset) {
                if (err) {
                    done(err);
                    return;
                }
                for(var index = 0; index < page.length; index++)callback(page[index]);
                if (newOffset) {
                    offset = newOffset;
                    nextPage();
                } else done();
            });
        };
        nextPage();
    };
    return Table;
}();
module.exports = Table1;

},{"lodash/isPlainObject":"h6x4F","./deprecate":"2khsQ","./query":"4qotK","./record":"lzyhR","./callback_to_promise":"dCDKs"}],"2khsQ":[function(require,module,exports) {
"use strict";
var didWarnForDeprecation = {
};
/**
 * Convenience function for marking a function as deprecated.
 *
 * Will emit a warning the first time that function is called.
 *
 * @param fn the function to mark as deprecated.
 * @param key a unique key identifying the function.
 * @param message the warning message.
 *
 * @return a wrapped function
 */ function deprecate(fn, key, message) {
    return function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (!didWarnForDeprecation[key]) {
            didWarnForDeprecation[key] = true;
            console.warn(message);
        }
        fn.apply(this, args);
    };
}
module.exports = deprecate;

},{}],"4qotK":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var isFunction_1 = __importDefault(require("lodash/isFunction"));
var keys_1 = __importDefault(require("lodash/keys"));
var record_1 = __importDefault(require("./record"));
var callback_to_promise_1 = __importDefault(require("./callback_to_promise"));
var has_1 = __importDefault(require("./has"));
var query_params_1 = require("./query_params");
/**
 * Builds a query object. Won't fetch until `firstPage` or
 * or `eachPage` is called.
 *
 * Params should be validated prior to being passed to Query
 * with `Query.validateParams`.
 */ var Query1 = function() {
    function Query(table, params) {
        this._table = table;
        this._params = params;
        this.firstPage = callback_to_promise_1.default(firstPage, this);
        this.eachPage = callback_to_promise_1.default(eachPage, this, 1);
        this.all = callback_to_promise_1.default(all, this);
    }
    /**
     * Validates the parameters for passing to the Query constructor.
     *
     * @params {object} params parameters to validate
     *
     * @return an object with two keys:
     *  validParams: the object that should be passed to the constructor.
     *  ignoredKeys: a list of keys that will be ignored.
     *  errors: a list of error messages.
     */ Query.validateParams = function(params) {
        var validParams = {
        };
        var ignoredKeys = [];
        var errors = [];
        for(var _i = 0, _a = keys_1.default(params); _i < _a.length; _i++){
            var key = _a[_i];
            var value = params[key];
            if (has_1.default(Query.paramValidators, key)) {
                var validator = Query.paramValidators[key];
                var validationResult = validator(value);
                if (validationResult.pass) validParams[key] = value;
                else errors.push(validationResult.error);
            } else ignoredKeys.push(key);
        }
        return {
            validParams: validParams,
            ignoredKeys: ignoredKeys,
            errors: errors
        };
    };
    Query.paramValidators = query_params_1.paramValidators;
    return Query;
}();
/**
 * Fetches the first page of results for the query asynchronously,
 * then calls `done(error, records)`.
 */ function firstPage(done) {
    if (!isFunction_1.default(done)) throw new Error('The first parameter to `firstPage` must be a function');
    this.eachPage(function(records) {
        done(null, records);
    }, function(error) {
        done(error, null);
    });
}
/**
 * Fetches each page of results for the query asynchronously.
 *
 * Calls `pageCallback(records, fetchNextPage)` for each
 * page. You must call `fetchNextPage()` to fetch the next page of
 * results.
 *
 * After fetching all pages, or if there's an error, calls
 * `done(error)`.
 */ function eachPage(pageCallback, done) {
    var _this = this;
    if (!isFunction_1.default(pageCallback)) throw new Error('The first parameter to `eachPage` must be a function');
    if (!isFunction_1.default(done) && done !== void 0) throw new Error('The second parameter to `eachPage` must be a function or undefined');
    var path = "/" + this._table._urlEncodedNameOrId();
    var params = __assign({
    }, this._params);
    var inner = function() {
        _this._table._base.runAction('get', path, params, null, function(err, response, result) {
            if (err) done(err, null);
            else {
                var next = void 0;
                if (result.offset) {
                    params.offset = result.offset;
                    next = inner;
                } else next = function() {
                    done(null);
                };
                var records = result.records.map(function(recordJson) {
                    return new record_1.default(_this._table, null, recordJson);
                });
                pageCallback(records, next);
            }
        });
    };
    inner();
}
/**
 * Fetches all pages of results asynchronously. May take a long time.
 */ function all(done) {
    if (!isFunction_1.default(done)) throw new Error('The first parameter to `all` must be a function');
    var allRecords = [];
    this.eachPage(function(pageRecords, fetchNextPage) {
        allRecords.push.apply(allRecords, pageRecords);
        fetchNextPage();
    }, function(err) {
        if (err) done(err, null);
        else done(null, allRecords);
    });
}
module.exports = Query1;

},{"lodash/isFunction":"1GLcK","lodash/keys":"eaJtd","./record":"lzyhR","./callback_to_promise":"dCDKs","./has":"hR46G","./query_params":"9obSk"}],"lzyhR":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var callback_to_promise_1 = __importDefault(require("./callback_to_promise"));
var Record1 = function() {
    function Record(table, recordId, recordJson) {
        this._table = table;
        this.id = recordId || recordJson.id;
        this.setRawJson(recordJson);
        this.save = callback_to_promise_1.default(save, this);
        this.patchUpdate = callback_to_promise_1.default(patchUpdate, this);
        this.putUpdate = callback_to_promise_1.default(putUpdate, this);
        this.destroy = callback_to_promise_1.default(destroy, this);
        this.fetch = callback_to_promise_1.default(fetch, this);
        this.updateFields = this.patchUpdate;
        this.replaceFields = this.putUpdate;
    }
    Record.prototype.getId = function() {
        return this.id;
    };
    Record.prototype.get = function(columnName) {
        return this.fields[columnName];
    };
    Record.prototype.set = function(columnName, columnValue) {
        this.fields[columnName] = columnValue;
    };
    Record.prototype.setRawJson = function(rawJson) {
        this._rawJson = rawJson;
        this.fields = this._rawJson && this._rawJson.fields || {
        };
    };
    return Record;
}();
function save(done) {
    this.putUpdate(this.fields, done);
}
function patchUpdate(cellValuesByName, opts, done) {
    var _this = this;
    if (!done) {
        done = opts;
        opts = {
        };
    }
    var updateBody = __assign({
        fields: cellValuesByName
    }, opts);
    this._table._base.runAction('patch', "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {
    }, updateBody, function(err, response, results) {
        if (err) {
            done(err);
            return;
        }
        _this.setRawJson(results);
        done(null, _this);
    });
}
function putUpdate(cellValuesByName, opts, done) {
    var _this = this;
    if (!done) {
        done = opts;
        opts = {
        };
    }
    var updateBody = __assign({
        fields: cellValuesByName
    }, opts);
    this._table._base.runAction('put', "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {
    }, updateBody, function(err, response, results) {
        if (err) {
            done(err);
            return;
        }
        _this.setRawJson(results);
        done(null, _this);
    });
}
function destroy(done) {
    var _this = this;
    this._table._base.runAction('delete', "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {
    }, null, function(err) {
        if (err) {
            done(err);
            return;
        }
        done(null, _this);
    });
}
function fetch(done) {
    var _this = this;
    this._table._base.runAction('get', "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {
    }, null, function(err, response, results) {
        if (err) {
            done(err);
            return;
        }
        _this.setRawJson(results);
        done(null, _this);
    });
}
module.exports = Record1;

},{"./callback_to_promise":"dCDKs"}],"dCDKs":[function(require,module,exports) {
"use strict";
/**
 * Given a function fn that takes a callback as its last argument, returns
 * a new version of the function that takes the callback optionally. If
 * the function is not called with a callback for the last argument, the
 * function will return a promise instead.
 */ /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */ function callbackToPromise(fn, context, callbackArgIndex) {
    if (callbackArgIndex === void 0) callbackArgIndex = void 0;
    /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */ return function() {
        var callArgs = [];
        for(var _i = 0; _i < arguments.length; _i++)callArgs[_i] = arguments[_i];
        var thisCallbackArgIndex;
        if (callbackArgIndex === void 0) // istanbul ignore next
        thisCallbackArgIndex = callArgs.length > 0 ? callArgs.length - 1 : 0;
        else thisCallbackArgIndex = callbackArgIndex;
        var callbackArg = callArgs[thisCallbackArgIndex];
        if (typeof callbackArg === 'function') {
            fn.apply(context, callArgs);
            return void 0;
        } else {
            var args_1 = [];
            // If an explicit callbackArgIndex is set, but the function is called
            // with too few arguments, we want to push undefined onto args so that
            // our constructed callback ends up at the right index.
            var argLen = Math.max(callArgs.length, thisCallbackArgIndex);
            for(var i = 0; i < argLen; i++)args_1.push(callArgs[i]);
            return new Promise(function(resolve, reject) {
                args_1.push(function(err, result) {
                    if (err) reject(err);
                    else resolve(result);
                });
                fn.apply(context, args_1);
            });
        }
    };
}
module.exports = callbackToPromise;

},{}],"hR46G":[function(require,module,exports) {
"use strict";
/* eslint-enable @typescript-eslint/no-explicit-any */ function has(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
}
module.exports = has;

},{}],"9obSk":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.paramValidators = void 0;
var typecheck_1 = __importDefault(require("./typecheck"));
var isString_1 = __importDefault(require("lodash/isString"));
var isNumber_1 = __importDefault(require("lodash/isNumber"));
var isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
exports.paramValidators = {
    fields: typecheck_1.default(typecheck_1.default.isArrayOf(isString_1.default), 'the value for `fields` should be an array of strings'),
    filterByFormula: typecheck_1.default(isString_1.default, 'the value for `filterByFormula` should be a string'),
    maxRecords: typecheck_1.default(isNumber_1.default, 'the value for `maxRecords` should be a number'),
    pageSize: typecheck_1.default(isNumber_1.default, 'the value for `pageSize` should be a number'),
    offset: typecheck_1.default(isNumber_1.default, 'the value for `offset` should be a number'),
    sort: typecheck_1.default(typecheck_1.default.isArrayOf(function(obj) {
        return isPlainObject_1.default(obj) && isString_1.default(obj.field) && (obj.direction === void 0 || [
            'asc',
            'desc'
        ].includes(obj.direction));
    }), "the value for `sort` should be an array of sort objects. Each sort object must have a string `field` value, and an optional `direction` value that is \"asc\" or \"desc\"."),
    view: typecheck_1.default(isString_1.default, 'the value for `view` should be a string'),
    cellFormat: typecheck_1.default(function(cellFormat) {
        return isString_1.default(cellFormat) && [
            'json',
            'string'
        ].includes(cellFormat);
    }, 'the value for `cellFormat` should be "json" or "string"'),
    timeZone: typecheck_1.default(isString_1.default, 'the value for `timeZone` should be a string'),
    userLocale: typecheck_1.default(isString_1.default, 'the value for `userLocale` should be a string')
};

},{"./typecheck":"4lYba","lodash/isString":"aRdOU","lodash/isNumber":"a5Bu7","lodash/isPlainObject":"h6x4F"}],"4lYba":[function(require,module,exports) {
"use strict";
/* eslint-enable @typescript-eslint/no-explicit-any */ function check(fn, error) {
    return function(value) {
        if (fn(value)) return {
            pass: true
        };
        else return {
            pass: false,
            error: error
        };
    };
}
check.isOneOf = function isOneOf(options) {
    return options.includes.bind(options);
};
check.isArrayOf = function(itemValidator) {
    return function(value) {
        return Array.isArray(value) && value.every(itemValidator);
    };
};
module.exports = check;

},{}],"aRdOU":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isArray = require('./isArray'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var stringTag = '[object String]';
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */ function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
}
module.exports = isString;

},{"./_baseGetTag":"3ojMs","./isArray":"1lGqs","./isObjectLike":"hleYb"}],"a5Bu7":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var numberTag = '[object Number]';
/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */ function isNumber(value) {
    return typeof value == 'number' || isObjectLike(value) && baseGetTag(value) == numberTag;
}
module.exports = isNumber;

},{"./_baseGetTag":"3ojMs","./isObjectLike":"hleYb"}],"4Ay1Y":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var keys_1 = __importDefault(require("lodash/keys"));
var isBrowser = typeof window !== 'undefined';
var HttpHeaders1 = function() {
    function HttpHeaders() {
        this._headersByLowercasedKey = {
        };
    }
    HttpHeaders.prototype.set = function(headerKey, headerValue) {
        var lowercasedKey = headerKey.toLowerCase();
        if (lowercasedKey === 'x-airtable-user-agent') {
            lowercasedKey = 'user-agent';
            headerKey = 'User-Agent';
        }
        this._headersByLowercasedKey[lowercasedKey] = {
            headerKey: headerKey,
            headerValue: headerValue
        };
    };
    HttpHeaders.prototype.toJSON = function() {
        var result = {
        };
        for(var _i = 0, _a = keys_1.default(this._headersByLowercasedKey); _i < _a.length; _i++){
            var lowercasedKey = _a[_i];
            var headerDefinition = this._headersByLowercasedKey[lowercasedKey];
            var headerKey = void 0;
            /* istanbul ignore next */ if (isBrowser && lowercasedKey === 'user-agent') // Some browsers do not allow overriding the user agent.
            // https://github.com/Airtable/airtable.js/issues/52
            headerKey = 'X-Airtable-User-Agent';
            else headerKey = headerDefinition.headerKey;
            result[headerKey] = headerDefinition.headerValue;
        }
        return result;
    };
    return HttpHeaders;
}();
module.exports = HttpHeaders1;

},{"lodash/keys":"eaJtd"}],"5KMiu":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var exponential_backoff_with_jitter_1 = __importDefault(require("./exponential_backoff_with_jitter"));
var object_to_query_param_string_1 = __importDefault(require("./object_to_query_param_string"));
var package_version_1 = __importDefault(require("./package_version"));
var fetch_1 = __importDefault(require("./fetch"));
var abort_controller_1 = __importDefault(require("./abort-controller"));
var userAgent = "Airtable.js/" + package_version_1.default;
function runAction(base, method, path, queryParams, bodyData, callback, numAttempts) {
    var url = base._airtable._endpointUrl + "/v" + base._airtable._apiVersionMajor + "/" + base._id + path + "?" + object_to_query_param_string_1.default(queryParams);
    var headers = {
        authorization: "Bearer " + base._airtable._apiKey,
        'x-api-version': base._airtable._apiVersion,
        'x-airtable-application-id': base.getId(),
        'content-type': 'application/json'
    };
    var isBrowser = typeof window !== 'undefined';
    // Some browsers do not allow overriding the user agent.
    // https://github.com/Airtable/airtable.js/issues/52
    if (isBrowser) headers['x-airtable-user-agent'] = userAgent;
    else headers['User-Agent'] = userAgent;
    var controller = new abort_controller_1.default();
    var normalizedMethod = method.toUpperCase();
    var options = {
        method: normalizedMethod,
        headers: headers,
        signal: controller.signal
    };
    if (bodyData !== null) {
        if (normalizedMethod === 'GET' || normalizedMethod === 'HEAD') console.warn('body argument to runAction are ignored with GET or HEAD requests');
        else options.body = JSON.stringify(bodyData);
    }
    var timeout = setTimeout(function() {
        controller.abort();
    }, base._airtable._requestTimeout);
    fetch_1.default(url, options).then(function(resp) {
        clearTimeout(timeout);
        if (resp.status === 429 && !base._airtable._noRetryIfRateLimited) {
            var backoffDelayMs = exponential_backoff_with_jitter_1.default(numAttempts);
            setTimeout(function() {
                runAction(base, method, path, queryParams, bodyData, callback, numAttempts + 1);
            }, backoffDelayMs);
        } else resp.json().then(function(body) {
            var error = base._checkStatusForError(resp.status, body);
            // Ensure Response interface matches interface from
            // `request` Response object
            var r = {
            };
            Object.keys(resp).forEach(function(property) {
                r[property] = resp[property];
            });
            r.body = body;
            r.statusCode = resp.status;
            callback(error, r, body);
        }).catch(function() {
            callback(base._checkStatusForError(resp.status));
        });
    }).catch(function(error) {
        clearTimeout(timeout);
        callback(error);
    });
}
module.exports = runAction;

},{"./exponential_backoff_with_jitter":"6LQ7o","./object_to_query_param_string":"7RWDU","./package_version":"dw8kL","./fetch":"aDDKj","./abort-controller":"hCaUe"}],"6LQ7o":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var internal_config_json_1 = __importDefault(require("./internal_config.json"));
// "Full Jitter" algorithm taken from https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/
function exponentialBackoffWithJitter(numberOfRetries) {
    var rawBackoffTimeMs = internal_config_json_1.default.INITIAL_RETRY_DELAY_IF_RATE_LIMITED * Math.pow(2, numberOfRetries);
    var clippedBackoffTimeMs = Math.min(internal_config_json_1.default.MAX_RETRY_DELAY_IF_RATE_LIMITED, rawBackoffTimeMs);
    var jitteredBackoffTimeMs = Math.random() * clippedBackoffTimeMs;
    return jitteredBackoffTimeMs;
}
module.exports = exponentialBackoffWithJitter;

},{"./internal_config.json":"cpFbc"}],"cpFbc":[function(require,module,exports) {
module.exports = JSON.parse("{\"INITIAL_RETRY_DELAY_IF_RATE_LIMITED\":5000,\"MAX_RETRY_DELAY_IF_RATE_LIMITED\":600000}");

},{}],"dw8kL":[function(require,module,exports) {
"use strict";
module.exports = undefined;

},{}],"8O5wI":[function(require,module,exports) {
var html = require('choo/html');
var TITLE = 'garden-frontend - main';
module.exports = view;
const tagEl = (tags)=>tags ? html`<span>${tags.map((tag)=>html`<span class="bg-light-gray ma1">${tag}</span>`
    )}` : ''
;
const dateEl = (d)=>d && d.length > 0 ? `(${d.slice(0, 4)})` : ''
;
const entry = (link)=>html`<div class="mv2"><a href="${link.Link}" target="_blank">${link.Title} </a>  <span class="f7">${dateEl(link['Date Created'])} ${link["Short Description"]} ${tagEl(link["Tags"])} </span></div>`
;
const groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {
    });
};
const listTags = (links)=>{
    const allTags = links.reduce((prev, next)=>prev.concat(next.Tags)
    , []);
    return allTags.filter((item, index)=>allTags.indexOf(item) === index
    );
};
function view(state, emit) {
    if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE);
    const categories = groupBy(state.links, "Category");
    const containsTag = state.tags.length > 0 ? (link)=>{
        console.log(link);
        let b = false;
        if (Array.isArray(link.Tags)) link.Tags.forEach((tag)=>{
            if (state.tags.indexOf(tag) > -1) b = true;
        });
        return b;
    } : ()=>true
    ;
    console.log('categories', categories);
    function handleClick() {
        emit('clicks:add', 1);
    }
    return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
       <div>
        ${listTags(state.links).map((tag)=>html`<div class="dib pa1 ma1 ${state.tags.indexOf(tag) > -1 ? "bg-light-green" : "bg-light-gray"} pointer dim" onclick=${()=>emit('toggle tag', tag)
        }>${tag}</div>`
    )}
       </div>
       <div>
        ${Object.entries(categories).map(([key, links])=>html`<h4>${key}</h4>${links.filter(containsTag).map((link)=>entry(link)
        )}`
    )}
      </main>
    </body>
  `;
}
function parseMarkdown(markdownText) {
    const htmlText = markdownText.replace(/^### (.*$)/gim, '<h3>$1</h3>').replace(/^## (.*$)/gim, '<h2>$1</h2>').replace(/^# (.*$)/gim, '<h1>$1</h1>').replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>').replace(/\*\*(.*)\*\*/gim, '<b>$1</b>').replace(/\*(.*)\*/gim, '<i>$1</i>').replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />").replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>");
    //	.replace(/\n$/gim, '<br />')
    const span = html`<span class="f6"></span>`;
    span.innerHTML = htmlText.trim();
    return span;
}

},{"choo/html":"4faw0"}],"4faw0":[function(require,module,exports) {
module.exports = require('nanohtml');

},{"nanohtml":"2fG6E"}],"2fG6E":[function(require,module,exports) {
module.exports = require('./dom')(document);

},{"./dom":"lXPGR"}],"lXPGR":[function(require,module,exports) {
'use strict';
var hyperx = require('hyperx');
var appendChild = require('./append-child');
var SVG_TAGS = require('./svg-tags');
var BOOL_PROPS = require('./bool-props');
// Props that need to be set directly rather than with el.setAttribute()
var DIRECT_PROPS = require('./direct-props');
var SVGNS = 'http://www.w3.org/2000/svg';
var XLINKNS = 'http://www.w3.org/1999/xlink';
var COMMENT_TAG = '!--';
module.exports = function(document) {
    function nanoHtmlCreateElement(tag, props, children) {
        var el;
        // If an svg tag, it needs a namespace
        if (SVG_TAGS.indexOf(tag) !== -1) props.namespace = SVGNS;
        // If we are using a namespace
        var ns = false;
        if (props.namespace) {
            ns = props.namespace;
            delete props.namespace;
        }
        // If we are extending a builtin element
        var isCustomElement = false;
        if (props.is) {
            isCustomElement = props.is;
            delete props.is;
        }
        // Create the element
        if (ns) {
            if (isCustomElement) el = document.createElementNS(ns, tag, {
                is: isCustomElement
            });
            else el = document.createElementNS(ns, tag);
        } else if (tag === COMMENT_TAG) return document.createComment(props.comment);
        else if (isCustomElement) el = document.createElement(tag, {
            is: isCustomElement
        });
        else el = document.createElement(tag);
        // Create the properties
        for(var p in props)if (props.hasOwnProperty(p)) {
            var key = p.toLowerCase();
            var val = props[p];
            // Normalize className
            if (key === 'classname') {
                key = 'class';
                p = 'class';
            }
            // The for attribute gets transformed to htmlFor, but we just set as for
            if (p === 'htmlFor') p = 'for';
            // If a property is boolean, set itself to the key
            if (BOOL_PROPS.indexOf(key) !== -1) {
                if (String(val) === 'true') val = key;
                else if (String(val) === 'false') continue;
            }
            // If a property prefers being set directly vs setAttribute
            if (key.slice(0, 2) === 'on' || DIRECT_PROPS.indexOf(key) !== -1) el[p] = val;
            else if (ns) {
                if (p === 'xlink:href') el.setAttributeNS(XLINKNS, p, val);
                else if (/^xmlns($|:)/i.test(p)) ;
                else el.setAttributeNS(null, p, val);
            } else el.setAttribute(p, val);
        }
        appendChild(el, children);
        return el;
    }
    function createFragment(nodes) {
        var fragment = document.createDocumentFragment();
        for(var i = 0; i < nodes.length; i++){
            if (nodes[i] == null) continue;
            if (Array.isArray(nodes[i])) fragment.appendChild(createFragment(nodes[i]));
            else {
                if (typeof nodes[i] === 'string') nodes[i] = document.createTextNode(nodes[i]);
                fragment.appendChild(nodes[i]);
            }
        }
        return fragment;
    }
    var exports = hyperx(nanoHtmlCreateElement, {
        comments: true,
        createFragment: createFragment
    });
    exports.default = exports;
    exports.createComment = nanoHtmlCreateElement;
    return exports;
};

},{"hyperx":"gJewC","./append-child":"22L2M","./svg-tags":"hRQwC","./bool-props":"g5WEI","./direct-props":"akhAp"}],"gJewC":[function(require,module,exports) {
var attrToProp = require('hyperscript-attribute-to-property');
var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4;
var ATTR_KEY = 5, ATTR_KEY_W = 6;
var ATTR_VALUE_W = 7, ATTR_VALUE = 8;
var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10;
var ATTR_EQ = 11, ATTR_BREAK = 12;
var COMMENT = 13;
module.exports = function(h, opts) {
    if (!opts) opts = {
    };
    var concat = opts.concat || function(a, b) {
        return String(a) + String(b);
    };
    if (opts.attrToProp !== false) h = attrToProp(h);
    function strfn(x) {
        if (typeof x === 'function') return x;
        else if (typeof x === 'string') return x;
        else if (x && typeof x === 'object') return x;
        else if (x === null || x === undefined) return x;
        else return concat('', x);
    }
    return function(strings) {
        var state = TEXT, reg = '';
        var arglen = arguments.length;
        var parts = [];
        for(var i1 = 0; i1 < strings.length; i1++)if (i1 < arglen - 1) {
            var arg = arguments[i1 + 1];
            var p = parse(strings[i1]);
            var xstate = state;
            if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE;
            if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE;
            if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE;
            if (xstate === ATTR) xstate = ATTR_KEY;
            if (xstate === OPEN) {
                if (reg === '/') {
                    p.push([
                        OPEN,
                        '/',
                        arg
                    ]);
                    reg = '';
                } else p.push([
                    OPEN,
                    arg
                ]);
            } else if (xstate === COMMENT && opts.comments) reg += String(arg);
            else if (xstate !== COMMENT) p.push([
                VAR,
                xstate,
                arg
            ]);
            parts.push.apply(parts, p);
        } else parts.push.apply(parts, parse(strings[i1]));
        var tree = [
            null,
            {
            },
            []
        ];
        var stack = [
            [
                tree,
                -1
            ]
        ];
        for(var i1 = 0; i1 < parts.length; i1++){
            var cur = stack[stack.length - 1][0];
            var p = parts[i1], s = p[0];
            if (s === OPEN && /^\//.test(p[1])) {
                var ix = stack[stack.length - 1][1];
                if (stack.length > 1) {
                    stack.pop();
                    stack[stack.length - 1][0][2][ix] = h(cur[0], cur[1], cur[2].length ? cur[2] : undefined);
                }
            } else if (s === OPEN) {
                var c = [
                    p[1],
                    {
                    },
                    []
                ];
                cur[2].push(c);
                stack.push([
                    c,
                    cur[2].length - 1
                ]);
            } else if (s === ATTR_KEY || s === VAR && p[1] === ATTR_KEY) {
                var key = '';
                var copyKey;
                for(; i1 < parts.length; i1++){
                    if (parts[i1][0] === ATTR_KEY) key = concat(key, parts[i1][1]);
                    else if (parts[i1][0] === VAR && parts[i1][1] === ATTR_KEY) {
                        if (typeof parts[i1][2] === 'object' && !key) {
                            for(copyKey in parts[i1][2])if (parts[i1][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) cur[1][copyKey] = parts[i1][2][copyKey];
                        } else key = concat(key, parts[i1][2]);
                    } else break;
                }
                if (parts[i1][0] === ATTR_EQ) i1++;
                var j = i1;
                for(; i1 < parts.length; i1++){
                    if (parts[i1][0] === ATTR_VALUE || parts[i1][0] === ATTR_KEY) {
                        if (!cur[1][key]) cur[1][key] = strfn(parts[i1][1]);
                        else parts[i1][1] === "" || (cur[1][key] = concat(cur[1][key], parts[i1][1]));
                    } else if (parts[i1][0] === VAR && (parts[i1][1] === ATTR_VALUE || parts[i1][1] === ATTR_KEY)) {
                        if (!cur[1][key]) cur[1][key] = strfn(parts[i1][2]);
                        else parts[i1][2] === "" || (cur[1][key] = concat(cur[1][key], parts[i1][2]));
                    } else {
                        if (key.length && !cur[1][key] && i1 === j && (parts[i1][0] === CLOSE || parts[i1][0] === ATTR_BREAK)) // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
                        // empty string is falsy, not well behaved value in browser
                        cur[1][key] = key.toLowerCase();
                        if (parts[i1][0] === CLOSE) i1--;
                        break;
                    }
                }
            } else if (s === ATTR_KEY) cur[1][p[1]] = true;
            else if (s === VAR && p[1] === ATTR_KEY) cur[1][p[2]] = true;
            else if (s === CLOSE) {
                if (selfClosing(cur[0]) && stack.length) {
                    var ix = stack[stack.length - 1][1];
                    stack.pop();
                    stack[stack.length - 1][0][2][ix] = h(cur[0], cur[1], cur[2].length ? cur[2] : undefined);
                }
            } else if (s === VAR && p[1] === TEXT) {
                if (p[2] === undefined || p[2] === null) p[2] = '';
                else if (!p[2]) p[2] = concat('', p[2]);
                if (Array.isArray(p[2][0])) cur[2].push.apply(cur[2], p[2]);
                else cur[2].push(p[2]);
            } else if (s === TEXT) cur[2].push(p[1]);
            else if (s === ATTR_EQ || s === ATTR_BREAK) ;
            else throw new Error('unhandled: ' + s);
        }
        if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) tree[2].shift();
        if (tree[2].length > 2 || tree[2].length === 2 && /\S/.test(tree[2][1])) {
            if (opts.createFragment) return opts.createFragment(tree[2]);
            throw new Error('multiple root elements must be wrapped in an enclosing tag');
        }
        if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string' && Array.isArray(tree[2][0][2])) tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2]);
        function parse(str) {
            var res = [];
            if (state === ATTR_VALUE_W) state = ATTR;
            for(var i = 0; i < str.length; i++){
                var c = str.charAt(i);
                if (state === TEXT && c === '<') {
                    if (reg.length) res.push([
                        TEXT,
                        reg
                    ]);
                    reg = '';
                    state = OPEN;
                } else if (c === '>' && !quot(state) && state !== COMMENT) {
                    if (state === OPEN && reg.length) {
                        res.push([
                            OPEN,
                            reg
                        ]);
                    } else if (state === ATTR_KEY) {
                        res.push([
                            ATTR_KEY,
                            reg
                        ]);
                    } else if (state === ATTR_VALUE && reg.length) {
                        res.push([
                            ATTR_VALUE,
                            reg
                        ]);
                    }
                    res.push([
                        CLOSE
                    ]);
                    reg = '';
                    state = TEXT;
                } else if (state === COMMENT && /-$/.test(reg) && c === '-') {
                    if (opts.comments) {
                        res.push([
                            ATTR_VALUE,
                            reg.substr(0, reg.length - 1)
                        ]);
                    }
                    reg = '';
                    state = TEXT;
                } else if (state === OPEN && /^!--$/.test(reg)) {
                    if (opts.comments) {
                        res.push([
                            OPEN,
                            reg
                        ], [
                            ATTR_KEY,
                            'comment'
                        ], [
                            ATTR_EQ
                        ]);
                    }
                    reg = c;
                    state = COMMENT;
                } else if (state === TEXT || state === COMMENT) {
                    reg += c;
                } else if (state === OPEN && c === '/' && reg.length) {
                // no-op, self closing tag without a space <br/>
                } else if (state === OPEN && /\s/.test(c)) {
                    if (reg.length) {
                        res.push([
                            OPEN,
                            reg
                        ]);
                    }
                    reg = '';
                    state = ATTR;
                } else if (state === OPEN) {
                    reg += c;
                } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
                    state = ATTR_KEY;
                    reg = c;
                } else if (state === ATTR && /\s/.test(c)) {
                    if (reg.length) res.push([
                        ATTR_KEY,
                        reg
                    ]);
                    res.push([
                        ATTR_BREAK
                    ]);
                } else if (state === ATTR_KEY && /\s/.test(c)) {
                    res.push([
                        ATTR_KEY,
                        reg
                    ]);
                    reg = '';
                    state = ATTR_KEY_W;
                } else if (state === ATTR_KEY && c === '=') {
                    res.push([
                        ATTR_KEY,
                        reg
                    ], [
                        ATTR_EQ
                    ]);
                    reg = '';
                    state = ATTR_VALUE_W;
                } else if (state === ATTR_KEY) {
                    reg += c;
                } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
                    res.push([
                        ATTR_EQ
                    ]);
                    state = ATTR_VALUE_W;
                } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
                    res.push([
                        ATTR_BREAK
                    ]);
                    if (/[\w-]/.test(c)) {
                        reg += c;
                        state = ATTR_KEY;
                    } else state = ATTR;
                } else if (state === ATTR_VALUE_W && c === '"') {
                    state = ATTR_VALUE_DQ;
                } else if (state === ATTR_VALUE_W && c === "'") {
                    state = ATTR_VALUE_SQ;
                } else if (state === ATTR_VALUE_DQ && c === '"') {
                    res.push([
                        ATTR_VALUE,
                        reg
                    ], [
                        ATTR_BREAK
                    ]);
                    reg = '';
                    state = ATTR;
                } else if (state === ATTR_VALUE_SQ && c === "'") {
                    res.push([
                        ATTR_VALUE,
                        reg
                    ], [
                        ATTR_BREAK
                    ]);
                    reg = '';
                    state = ATTR;
                } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
                    state = ATTR_VALUE;
                    i--;
                } else if (state === ATTR_VALUE && /\s/.test(c)) {
                    res.push([
                        ATTR_VALUE,
                        reg
                    ], [
                        ATTR_BREAK
                    ]);
                    reg = '';
                    state = ATTR;
                } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ) {
                    reg += c;
                }
            }
            if (state === TEXT && reg.length) {
                res.push([
                    TEXT,
                    reg
                ]);
                reg = '';
            } else if (state === ATTR_VALUE && reg.length) {
                res.push([
                    ATTR_VALUE,
                    reg
                ]);
                reg = '';
            } else if (state === ATTR_VALUE_DQ && reg.length) {
                res.push([
                    ATTR_VALUE,
                    reg
                ]);
                reg = '';
            } else if (state === ATTR_VALUE_SQ && reg.length) {
                res.push([
                    ATTR_VALUE,
                    reg
                ]);
                reg = '';
            } else if (state === ATTR_KEY) {
                res.push([
                    ATTR_KEY,
                    reg
                ]);
                reg = '';
            }
            return res;
        }
        return tree[2][0];
    };
};
function quot(state) {
    return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ;
}
var closeRE = RegExp('^(' + [
    'area',
    'base',
    'basefont',
    'bgsound',
    'br',
    'col',
    'command',
    'embed',
    'frame',
    'hr',
    'img',
    'input',
    'isindex',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
    '!--',
    // SVG TAGS
    'animate',
    'animateTransform',
    'circle',
    'cursor',
    'desc',
    'ellipse',
    'feBlend',
    'feColorMatrix',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'font-face-format',
    'font-face-name',
    'font-face-uri',
    'glyph',
    'glyphRef',
    'hkern',
    'image',
    'line',
    'missing-glyph',
    'mpath',
    'path',
    'polygon',
    'polyline',
    'rect',
    'set',
    'stop',
    'tref',
    'use',
    'view',
    'vkern'
].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$');
function selfClosing(tag) {
    return closeRE.test(tag);
}

},{"hyperscript-attribute-to-property":"bytuN"}],"bytuN":[function(require,module,exports) {
module.exports = attributeToProperty;
var transform = {
    'class': 'className',
    'for': 'htmlFor',
    'http-equiv': 'httpEquiv'
};
function attributeToProperty(h) {
    return function(tagName, attrs, children) {
        for(var attr in attrs)if (attr in transform) {
            attrs[transform[attr]] = attrs[attr];
            delete attrs[attr];
        }
        return h(tagName, attrs, children);
    };
}

},{}],"22L2M":[function(require,module,exports) {
'use strict';
var trailingNewlineRegex = /\n[\s]+$/;
var leadingNewlineRegex = /^\n[\s]+/;
var trailingSpaceRegex = /[\s]+$/;
var leadingSpaceRegex = /^[\s]+/;
var multiSpaceRegex = /[\n\s]+/g;
var TEXT_TAGS = [
    'a',
    'abbr',
    'b',
    'bdi',
    'bdo',
    'br',
    'cite',
    'data',
    'dfn',
    'em',
    'i',
    'kbd',
    'mark',
    'q',
    'rp',
    'rt',
    'rtc',
    'ruby',
    's',
    'amp',
    'small',
    'span',
    'strong',
    'sub',
    'sup',
    'time',
    'u',
    'var',
    'wbr'
];
var VERBATIM_TAGS = [
    'code',
    'pre',
    'textarea'
];
module.exports = function appendChild(el, childs) {
    if (!Array.isArray(childs)) return;
    var nodeName = el.nodeName.toLowerCase();
    var hadText = false;
    var value, leader;
    for(var i = 0, len = childs.length; i < len; i++){
        var node = childs[i];
        if (Array.isArray(node)) {
            appendChild(el, node);
            continue;
        }
        if (typeof node === 'number' || typeof node === 'boolean' || typeof node === 'function' || node instanceof Date || node instanceof RegExp) node = node.toString();
        var lastChild = el.childNodes[el.childNodes.length - 1];
        // Iterate over text nodes
        if (typeof node === 'string') {
            hadText = true;
            // If we already had text, append to the existing text
            if (lastChild && lastChild.nodeName === '#text') lastChild.nodeValue += node;
            else {
                node = el.ownerDocument.createTextNode(node);
                el.appendChild(node);
                lastChild = node;
            }
            // If this is the last of the child nodes, make sure we close it out
            // right
            if (i === len - 1) {
                hadText = false;
                // Trim the child text nodes if the current node isn't a
                // node where whitespace matters.
                if (TEXT_TAGS.indexOf(nodeName) === -1 && VERBATIM_TAGS.indexOf(nodeName) === -1) {
                    value = lastChild.nodeValue.replace(leadingNewlineRegex, '').replace(trailingSpaceRegex, '').replace(trailingNewlineRegex, '').replace(multiSpaceRegex, ' ');
                    if (value === '') el.removeChild(lastChild);
                    else lastChild.nodeValue = value;
                } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
                    // The very first node in the list should not have leading
                    // whitespace. Sibling text nodes should have whitespace if there
                    // was any.
                    leader = i === 0 ? '' : ' ';
                    value = lastChild.nodeValue.replace(leadingNewlineRegex, leader).replace(leadingSpaceRegex, ' ').replace(trailingSpaceRegex, '').replace(trailingNewlineRegex, '').replace(multiSpaceRegex, ' ');
                    lastChild.nodeValue = value;
                }
            }
        // Iterate over DOM nodes
        } else if (node && node.nodeType) {
            // If the last node was a text node, make sure it is properly closed out
            if (hadText) {
                hadText = false;
                // Trim the child text nodes if the current node isn't a
                // text node or a code node
                if (TEXT_TAGS.indexOf(nodeName) === -1 && VERBATIM_TAGS.indexOf(nodeName) === -1) {
                    value = lastChild.nodeValue.replace(leadingNewlineRegex, '').replace(trailingNewlineRegex, ' ').replace(multiSpaceRegex, ' ');
                    // Remove empty text nodes, append otherwise
                    if (value === '') el.removeChild(lastChild);
                    else lastChild.nodeValue = value;
                // Trim the child nodes but preserve the appropriate whitespace
                } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
                    value = lastChild.nodeValue.replace(leadingSpaceRegex, ' ').replace(leadingNewlineRegex, '').replace(trailingNewlineRegex, ' ').replace(multiSpaceRegex, ' ');
                    lastChild.nodeValue = value;
                }
            }
            // Store the last nodename
            var _nodeName = node.nodeName;
            if (_nodeName) nodeName = _nodeName.toLowerCase();
            // Append the node to the DOM
            el.appendChild(node);
        }
    }
};

},{}],"hRQwC":[function(require,module,exports) {
'use strict';
module.exports = [
    'svg',
    'altGlyph',
    'altGlyphDef',
    'altGlyphItem',
    'animate',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'circle',
    'clipPath',
    'color-profile',
    'cursor',
    'defs',
    'desc',
    'ellipse',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'font',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-src',
    'font-face-uri',
    'foreignObject',
    'g',
    'glyph',
    'glyphRef',
    'hkern',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'metadata',
    'missing-glyph',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'set',
    'stop',
    'switch',
    'symbol',
    'text',
    'textPath',
    'title',
    'tref',
    'tspan',
    'use',
    'view',
    'vkern'
];

},{}],"g5WEI":[function(require,module,exports) {
'use strict';
module.exports = [
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'defaultchecked',
    'defer',
    'disabled',
    'formnovalidate',
    'hidden',
    'ismap',
    'loop',
    'multiple',
    'muted',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected'
];

},{}],"akhAp":[function(require,module,exports) {
'use strict';
module.exports = [
    'indeterminate'
];

},{}],"fPsCu":[function(require,module,exports) {
var html = require('choo/html');
var TITLE = 'garden-frontend - main';
module.exports = view;
const tagEl = (tags)=>html`<span>${tags.map((tag)=>html`<span class="bg-light-gray ma1">${tag}</span>`
    )}`
;
const entry = (link)=>html`<div class="dib w5 mv2" >
${link.Image ? link.Image.map((image)=>html`<img src="${image.thumbnails.large.url}"></img>`
    ) : ''}
<a href="${link.Link}" target="_blank">${link.Title} </a> ${parseMarkdown(link.Description)} 
</div>`
;
const rand = (min = 0, max = 1)=>min + Math.random() * (max - min)
;
const floatingImage = (link)=>link.Image ? html`<div 
  class="bg-light-gray" 
  style="
    position: absolute; 
    top:${Math.random() * window.innerHeight}px; 
    left:${Math.random() * (window.innerWidth - 200)}px; 
    box-shadow: 2px 2px 20px black;
    transition: all 1s;
    width:${rand(100, 350)}px;
  ">
  <img style="" src="${link.Image[0].thumbnails.large.url}"/>
  <div class="f7">${link.Title}</div>
</div>` : ''
;
//style="position: absolute; top:${Math.random() * window.innerHight}px; left:${Math.random() * window.innerWidth}px"
//  <div class="flex flex-wrap">
function view(state, emit) {
    if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE);
    function handleClick() {
        emit('clicks:add', 1);
    }
    return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
       <h4>hydra garden of links</h4>
      
        ${state.links.sort((a, b)=>Math.random
    ).map(floatingImage)}
      </main>
    </body>
  `;
}
function parseMarkdown(markdownText) {
    const htmlText = markdownText.replace(/^### (.*$)/gim, '<h3>$1</h3>').replace(/^## (.*$)/gim, '<h2>$1</h2>').replace(/^# (.*$)/gim, '<h1>$1</h1>').replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>').replace(/\*\*(.*)\*\*/gim, '<b>$1</b>').replace(/\*(.*)\*/gim, '<i>$1</i>').replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />").replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>");
    //	.replace(/\n$/gim, '<br />')
    const span = html`<span class="f7"></span>`;
    span.innerHTML = htmlText.trim();
    return span;
}

},{"choo/html":"4faw0"}],"hiyek":[function(require,module,exports) {
var html = require('choo/html');
var TITLE = 'garden-frontend - route not found';
module.exports = view;
function view(state, emit) {
    if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE);
    return html`
    <body class="sans-serif pa3">
      <h1>Route not found.</h1>
      <a class="pt2" href="/">Back to main.</a>
    </body>
  `;
}

},{"choo/html":"4faw0"}]},["dnoWj","hD4hw"], "hD4hw", "parcelRequire0636")

//# sourceMappingURL=index.379dd93c.js.map
