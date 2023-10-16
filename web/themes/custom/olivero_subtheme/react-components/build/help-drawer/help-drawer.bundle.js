function e(e){return e&&e.__esModule?e.default:e}var t,n,o,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},l=r.parcelRequire71f1;null==l&&((l=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequire71f1=l),l.register;var s=l("bGt3w"),c=l("4VdZE"),s=l("bGt3w"),d=l("dhdFe"),u=l("hI9T1"),f=l("ffape"),d=(l("dhdFe"),l("dhdFe")),h=l("cleuf"),p=l("7B6NU"),m=l("3vwoC"),g=["className","children","inline","showDrawer","drawerOpen"];function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var v=function(t){var n=t.className,o=t.children,r=t.inline,i=t.showDrawer,a=t.drawerOpen,l=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(t,g),s=(0,d.useRef)(null),c=(0,m.default)(a);(0,d.useEffect)(function(){// if drawer was open but now closed, focus the toggle
c&&!a&&s.current&&s.current.focus()},[a]);var u=/*@__PURE__*/e(p)("ds-c-drawer__toggle",r&&"ds-c-drawer__toggle--inline",n);return /*@__PURE__*/e(d).createElement(h.default,b({className:u,inputRef:function(e){return s.current=e},onClick:i,variation:"ghost"},l),o)},p=l("7B6NU"),y=["children","className","showDrawer","helpDrawerOpen","icon"];function w(){return(w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var _=function(t){var n=t.children,o=t.className,r=t.showDrawer,i=t.helpDrawerOpen,a=t.icon,l=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(t,y);return /*@__PURE__*/e(d).createElement(v,w({className:/*@__PURE__*/e(p)(o,"ds-c-help-drawer__toggle"),drawerOpen:i,showDrawer:r},l),n," ",a)},d=(l("dhdFe"),l("dhdFe")),h=l("cleuf"),d=l("dhdFe"),E={},O=E={};function D(){throw Error("setTimeout has not been defined")}function S(){throw Error("clearTimeout has not been defined")}function k(e){if(t===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((t===D||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return t(e,0)}catch(n){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return t.call(null,e,0)}catch(n){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:D}catch(e){t=D}try{n="function"==typeof clearTimeout?clearTimeout:S}catch(e){n=S}}();var T=[],x=!1,M=-1;function N(){x&&o&&(x=!1,o.length?T=o.concat(T):M=-1,T.length&&j())}function j(){if(!x){var e=k(N);x=!0;for(var t=T.length;t;){for(o=T,T=[];++M<t;)o&&o[M].run();M=-1,t=T.length}o=null,x=!1,function(e){if(n===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((n===S||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
n(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return n.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return n.call(this,e)}}}(e)}}// v8 likes predictible objects
function P(e,t){this.fun=e,this.array=t}function L(){}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}O.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];T.push(new P(e,t)),1!==T.length||x||k(j)},P.prototype.run=function(){this.fun.apply(null,this.array)},O.title="browser",O.browser=!0,O.env={},O.argv=[],O.version="",O.versions={},O.on=L,O.addListener=L,O.once=L,O.off=L,O.removeListener=L,O.removeAllListeners=L,O.emit=L,O.prependListener=L,O.prependOnceListener=L,O.listeners=function(e){return[]},O.binding=function(e){throw Error("process.binding is not supported")},O.cwd=function(){return"/"},O.chdir=function(e){throw Error("process.chdir is not supported")},O.umask=function(){return 0};/**
 * This polyfill comes from https://github.com/GoogleChrome/dialog-polyfill/, but
 * we need to wrap it in a function and conditionally call it so we can support
 * server-side rendering in downstream applications. Because our code doesn't have
 * insight into the context in which it is used, we need to avoid executing the
 * code in this module before determining whether the environment can support it
 * (that is, whether `window` is defined). The polyfill team will not fix it on
 * their end: https://github.com/GoogleChrome/dialog-polyfill/issues/169
 *//**
 * Define this outside and then fill it in inside our loadDialogPolyfill function
 */var C={registerDialog:function(){},forceRegisterDialog:function(){}};"undefined"!=typeof window&&function(){// nb. This is for IE10 and lower _only_.
var e=window.CustomEvent;/**
   * Dispatches the passed event to both an "on<type>" handler as well as via the
   * normal dispatch operation. Does not bubble.
   *
   * @param {!EventTarget} target
   * @param {!Event} event
   * @return {boolean}
   */function t(e,t){var n="on"+t.type.toLowerCase();return"function"==typeof e[n]&&e[n](t),e.dispatchEvent(t)}/**
   * Finds the nearest <dialog> from the passed element.
   *
   * @param {Element} el to search from
   * @return {HTMLDialogElement} dialog found
   */function n(e){for(;e;){if("dialog"===e.localName)return /** @type {HTMLDialogElement} */e;e=e.parentElement?e.parentElement:e.parentNode?e.parentNode.host:null}return null}/**
   * Blur the specified element, as long as it's not the HTML body element.
   * This works around an IE9/10 bug - blurring the body causes Windows to
   * blur the whole application.
   *
   * @param {Element} el to blur
   */function o(e){// Find the actual focused element when the active element is inside a shadow root
for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}/**
   * @param {HTMLFormElement} el to check
   * @return {boolean} whether this form has method="dialog"
   */function r(e){return!!(e&&e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}/**
   * Determines if an element is attached to the DOM.
   * @param {Element} element to check
   * @return {boolean} whether the element is in DOM
   */function i(e){return e.isConnected||document.body.contains(e)}/**
   * @param {!Event} event
   * @return {?Element}
   */function a(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var n=C.formSubmitter;if(!n){var o=e.target;n=("getRootNode"in o&&o.getRootNode()||document).activeElement}return n&&n.form===t?n:null}/**
   * @param {!Event} event
   */function l(e){if(!e.defaultPrevented){var t=/** @type {!HTMLFormElement} */e.target,o=C.imagemapUseValue,r=a(e);null===o&&r&&(o=r.value);// There should always be a dialog as this handler is added specifically on them, but check just
// in case.
var i=n(t);i&&"dialog"===(r&&r.getAttribute("formmethod")||t.getAttribute("method"))&&(e.preventDefault(),null!=o?i.close(o):i.close())}}/**
   * @param {!HTMLDialogElement} dialog to upgrade
   * @constructor
   */function s(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",l,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window)new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]});else{// IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
// seem to fire even if the element was removed as part of a parent removal. Use the removed
// events to force downgrade (useful if removed/immediately added).
var t,n=!1,o=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),r=function(r){if(r.target===e){// not for a child element
var i="DOMNodeRemoved";n|=r.type.substr(0,i.length)===i,window.clearTimeout(t),t=window.setTimeout(o,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(t){e.addEventListener(t,r)})}// Note that the DOM is observed inside DialogManager while any dialog
// is being displayed as a modal, to catch modal removal from the DOM.
Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}/**
   * Installs global handlers, such as click listers and native method overrides. These are needed
   * even if a no dialog is registered, as they deal with <form method="dialog">.
   */if(e&&"object"!==A(e)||((e=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n}).prototype=window.Event.prototype),s.prototype=/** @type {HTMLDialogElement.prototype} */{get dialog(){return this.dialog_},/**
     * Maybe remove this dialog from the modal top layer. This is called when
     * a modal dialog may no longer be tenable, e.g., when the dialog is no
     * longer open or is no longer part of the DOM.
     */maybeHideModal:function(){this.dialog_.hasAttribute("open")&&i(this.dialog_)||this.downgradeModal()},/**
     * Remove this dialog from the modal top layer, leaving it as a non-modal.
     */downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),// Clear the backdrop and remove from the manager.
this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),C.dm.removeDialog(this))},/**
     * @param {boolean} value whether to open or close this dialog
     */setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},/**
     * Handles mouse events ('mouseup', 'mousedown', 'click') on the fake .backdrop element, redirecting them as if
     * they were on the dialog itself.
     *
     * @param {!Event} e to redirect
     */backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{// Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
// focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
// would not be needed - clicks would move the implicit cursor there.
var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},/**
     * Focuses on the first focusable element within the dialog. This will always blur the current
     * focus, even if nothing within the dialog is found.
     */focus_:function(){// Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=/**
   * @param {!DocumentFragment|!Element} hostElement
   * @return {?Element}
   */function e(t){var n=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});// TODO(samthor): tabindex values that are not numeric are not focusable.
n.push('[tabindex]:not([disabled]):not([tabindex=""])');// tabindex != "", not disabled
var o=t.querySelector(n.join(", "));if(!o&&"attachShadow"in Element.prototype)for(var r=t.querySelectorAll("*"),i=0;i<r.length&&!(r[i].tagName&&r[i].shadowRoot&&(o=e(r[i].shadowRoot)));i++);return o}(this.dialog_)),o(document.activeElement),e&&e.focus()},/**
     * Sets the zIndex for the backdrop and dialog.
     *
     * @param {number} dialogZ
     * @param {number} backdropZ
     */updateZIndex:function(e,t){if(e<t)throw Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},/**
     * Shows the dialog. If the dialog is already open, this does nothing.
     */show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},/**
     * Show this dialog modally.
     */showModal:function(){if(this.dialog_.hasAttribute("open"))throw Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!i(this.dialog_))throw Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!C.dm.pushDialog(this))throw Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");/**
   * @param {Element} el to check for stacking context
   * @return {boolean} whether this el or its parents creates a stacking context
   */(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(e,n){return!(void 0===t[e]||t[e]===n)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&((void 0===E?"undefined":A(E))==="object"&&A(E.env),1)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,C.needsCentering(this.dialog_)?(C.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,// Insert backdrop.
this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),// Focus on whatever inside the dialog.
this.focus_()},/**
     * Closes this HTMLDialogElement. This is optional vs clearing the open
     * attribute, however this fires a 'close' event.
     *
     * @param {string=} opt_returnValue to use as the returnValue
     */close:function(n){if(!this.dialog_.hasAttribute("open"))throw Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==n&&(this.dialog_.returnValue=n);// Triggering "close" event for any attached listeners on the <dialog>.
var o=new e("close",{bubbles:!1,cancelable:!1});t(this.dialog_,o)}},C.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},C.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],o=null;// Some browsers throw on cssRules.
try{o=n.cssRules}catch(e){// Do nothing
}if(o)for(var r=0;r<o.length;++r){var i=o[r],a=null;// Ignore errors on invalid selector texts.
try{a=document.querySelectorAll(i.selectorText)}catch(e){// Do nothing
}if(a&&/**
   * @param {!NodeList} nodeList to search
   * @param {Node} node to find
   * @return {boolean} whether node is inside nodeList
   */function(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}(a,e)){var l=i.style.getPropertyValue("top"),s=i.style.getPropertyValue("bottom");if(l&&"auto"!==l||s&&"auto"!==s)return!0}}}return!1},C.needsCentering=function(e){return"absolute"===window.getComputedStyle(e).position&&("auto"===e.style.top||""===e.style.top)&&("auto"===e.style.bottom||""===e.style.bottom)&&!C.isInlinePositionSetByStylesheet(e)},/**
   * @param {!Element} element to force upgrade
   */C.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw Error("Failed to register dialog: The element is not a dialog.");new s(/** @type {!HTMLDialogElement} */e)},/**
   * @param {!Element} element to upgrade, if necessary
   */C.registerDialog=function(e){e.showModal||C.forceRegisterDialog(e)},/**
   * @constructor
   */C.DialogManager=function(){/** @type {!Array<!dialogPolyfillInfo>} */this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);// The overlay is used to simulate how a modal dialog blocks the document.
// The blocking dialog is positioned on top of the overlay, and the rest of
// the dialogs on the pending dialog stack are positioned below it. In the
// actual implementation, the modal dialog stacking is controlled by the
// top layer, where z-index has no effect.
this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var n=[];t.forEach(function(e){for(var t,o=0;t=e.removedNodes[o];++o)t instanceof Element&&("dialog"===t.localName&&n.push(t),n=n.concat(t.querySelectorAll("dialog")))}),n.length&&e(n)}))},/**
   * Called on the first modal dialog being shown. Adds the overlay and related
   * handlers.
   */C.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},/**
   * Called on the first modal dialog being removed, i.e., when no more modal
   * dialogs are visible.
   */C.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},/**
   * Updates the stacking of all known dialogs.
   */C.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var o=this.pendingDialogStack[0];o?(o.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},/**
   * @param {Element} candidate to check if contained or is the top-most modal dialog
   * @return {boolean} whether candidate is contained in top dialog
   */C.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=n(e);){for(var t,o=0;t=this.pendingDialogStack[o];++o)if(t.dialog===e)return 0===o;// only valid if top-most
e=e.parentElement}return!1},C.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),o(/** @type {Element} */t),void 0!==this.forwardTab_)){// move focus only from a tab key
var n=this.pendingDialogStack[0];return n.dialog.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}},C.DialogManager.prototype.handleKey_=function(n){if(this.forwardTab_=void 0,27===n.keyCode){n.preventDefault(),n.stopPropagation();var o=new e("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&t(r.dialog,o)&&r.dialog.close()}else 9===n.keyCode&&(this.forwardTab_=!n.shiftKey)},/**
   * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
   * removed and immediately readded don't stay modal, they become normal.
   *
   * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
   */C.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach(function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()})},/**
   * @param {!dialogPolyfillInfo} dpi
   * @return {boolean} whether the dialog was allowed
   */C.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},/**
   * @param {!dialogPolyfillInfo} dpi
   */C.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},C.dm=new C.DialogManager,C.formSubmitter=null,C.imagemapUseValue=null,void 0===window.HTMLDialogElement){/**
     * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
     * one that returns the correct value.
     */var c=document.createElement("form");if(c.setAttribute("method","dialog"),"dialog"!==c.method){var d=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(d){// nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
// and don't bother to update the element.
var u=d.get;d.get=function(){return r(this)?"dialog":u.call(this)};var f=d.set;/** @this {HTMLElement} */d.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):f.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",d)}}/**
     * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
     * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
     * document.activeElement.
     */document.addEventListener("click",function(e){if(C.formSubmitter=null,C.imagemapUseValue=null,!e.defaultPrevented){// e.g. a submit which prevents default submission
var t=/** @type {Element} */e.target;if("composedPath"in e&&(t=e.composedPath().shift()||t),t&&r(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if(!("input"===t.localName&&"image"===t.type))return;// this is a <input type="image">, which can submit forms
C.imagemapUseValue=e.offsetX+","+e.offsetY}n(t)&&(C.formSubmitter=t)}}},!1),/**
     * Global 'submit' handler. This handles submits of `method="dialog"` which are invalid, i.e.,
     * outside a dialog. They get prevented.
     */document.addEventListener("submit",function(e){var t=e.target;if(!n(t)){var o=a(e);"dialog"===(o&&o.getAttribute("formmethod")||t.getAttribute("method"))&&e.preventDefault()}// ignore, handle there
});/**
     * Replace the native HTMLFormElement.submit() method, as it won't fire the
     * submit event and give us a chance to respond.
     */var h=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!r(this))return h.call(this);var e=n(this);e&&e.close()}}}();var I=["children","exit","showModal","backdropClickExits","boundingBoxRef"];function F(){return(F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var R=function(t){var n=t.children,o=t.exit,r=t.showModal,i=t.backdropClickExits,a=t.boundingBoxRef,l=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(t,I),s=(0,d.useRef)(null);return(// Register dialog with the polyfill if necessary
(0,d.useLayoutEffect)(function(){C.registerDialog(s.current)}),// Open and close the dialog with the appropriate method on mount and unmount
(0,d.useEffect)(function(){var e=s.current;return r?e.showModal():e.show(),function(){e.close()}},[r]),// Bind and unbind cancel event listeners on mount and unmount
(0,d.useEffect)(function(){var e=s.current,t=function(e){e.preventDefault(),o()};return e.addEventListener("cancel",t),function(){e.removeEventListener("cancel",t)}},[o]),// Bind and unbind click event listeners on mount and unmount
(0,d.useEffect)(function(){if(i){var e=s.current,t=function(e){var t,n=(null!==(t=null==a?void 0:a.current)&&void 0!==t?t:s.current).getBoundingClientRect();n.top<=e.clientY&&e.clientY<=n.top+n.height&&n.left<=e.clientX&&e.clientX<=n.left+n.width||o()};return e.addEventListener("click",t),function(){e.removeEventListener("click",t)}}},[o,i]),/*@__PURE__*/e(d).createElement("dialog",F({ref:s},l),n))},p=l("7B6NU"),B=l("1rUtr"),H=l("Qa923"),U=function(t){var n,o,r=(0,d.useRef)(null),i=(0,H.default)("drawer--",t.headingId),a="h".concat(t.headingLevel);return /*@__PURE__*/e(d).createElement(R,{className:/*@__PURE__*/e(p)(t.className,"ds-c-drawer"),exit:t.onCloseClick,showModal:t.hasFocusTrap},/*@__PURE__*/e(d).createElement("div",{className:"ds-c-drawer__window",tabIndex:-1,"aria-labelledby":i},/*@__PURE__*/e(d).createElement("div",{className:"ds-c-drawer__header"},/*@__PURE__*/e(d).createElement(a,{id:i,className:"ds-c-drawer__header-heading",ref:function(e){r.current=e,t.headingRef&&(t.headingRef.current=e)}},t.heading),/*@__PURE__*/e(d).createElement(h.default,{"aria-label":null!==(n=t.ariaLabel)&&void 0!==n?n:(0,B.t)("drawer.ariaLabel"),className:"ds-c-drawer__close-button",size:"small",onClick:t.onCloseClick,variation:t.closeButtonVariation},null!==(o=t.closeButtonText)&&void 0!==o?o:(0,B.t)("drawer.closeButtonText"))),/*@__PURE__*/e(d).createElement("div",{className:/*@__PURE__*/e(p)("ds-c-drawer__body",{"ds-c-drawer--is-sticky":t.isHeaderSticky||t.isFooterSticky}),tabIndex:0},t.children),(t.footerTitle||t.footerBody)&&/*@__PURE__*/e(d).createElement("div",{className:"ds-c-drawer__footer"},/*@__PURE__*/e(d).createElement("h4",{className:"ds-c-drawer__footer-title"},t.footerTitle),/*@__PURE__*/e(d).createElement("div",{className:"ds-c-drawer__footer-body"},t.footerBody))))};U.defaultProps={headingLevel:"3",hasFocusTrap:!1};var p=l("7B6NU"),z=l("bhkAn"),d=l("dhdFe"),V=l("g3glk"),K=l("986fz");function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}var Z=["analytics","analyticsLabelOverride","analyticsEventTypeOverride","children","className"];function G(){return(G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var Q=function(t){t.analytics,t.analyticsLabelOverride,t.analyticsEventTypeOverride;var n=t.children,o=t.className,r=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(t,Z),i=function(e){var t,n,o,r,i,a=e.analytics,l=e.analyticsLabelOverride,s=e.onAnalyticsEvent,c=void 0===s?z.defaultAnalyticsFunction:s;function u(e,t){if(!0===a||(0,K.helpDrawerSendsAnalytics)()&&!1!==a){var n=null!=l?l:e;if(!n){console.error("No content found for Dialog analytics event");return}c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach(function(t){var o,r;o=t,r=n[t],(o=function(e){var t=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==q(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===q(t)?t:String(t)}(o))in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({event_type:z.EventType.UI_INTERACTION,event_category:z.EventCategory.UI_COMPONENTS,event_label:n,event_extension:z.eventExtensionText,heading:n},t))}}return(function(e){if(Array.isArray(e))return e}((n=(t={componentName:"Dialog",onMount:function(e){u(e,{event_name:"help_drawer_opened",event_action:"opened help drawer"})},onUnmount:function(e){u(e,{event_name:"help_drawer_closed",event_action:"closed help drawer"})}}).componentName,o=t.onMount,r=t.onUnmount,i=[(0,d.useRef)(),(0,d.useRef)(),(0,d.useRef)()],// eslint-disable-next-line react-hooks/exhaustive-deps
// According to this lint rule, we need to include all the dependencies of this function in the
// dependency array. However, in order for this useEffect to only fire on first render, we would
// need to memoize the two callback functions. This is an unnecessary burden on the implementing
// class, and there isn't a good way to memoize the props we receive here because they *also*
// have dependencies that should be listed but are unknown. This assumes that the onMount and
// onUnmount do not have a reason to change between renders.
(0,d.useEffect)(function(){var e=(0,V.default)(i,n);return o(e),function(){r&&r(e)}},[]),i))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,r=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return l}}(i,1)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}}(i,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0]}(t);return /*@__PURE__*/e(d).createElement(U,G({className:/*@__PURE__*/e(p)(o,"ds-c-help-drawer"),headingRef:i},r),n)},$=l("aXcvm"),J=l("hCgaF"),W=function({toggle:e,drawer_heading:t,drawer_content:n}){let[o,r]=(0,d.useState)(!1);return/*#__PURE__*/(0,s.jsxs)(s.Fragment,{children:[/*#__PURE__*/(0,s.jsxs)(_,{helpDrawerOpen:o,showDrawer:()=>r(!0),inline:!0,children:[e," ",/*#__PURE__*/(0,s.jsx)("i",{className:"far fa-info-circle","aria-hidden":"true"})]}),o&&/*#__PURE__*/(0,s.jsx)(Q,{closeButtonText:/*#__PURE__*/(0,s.jsx)(J.CloseIconThin,{className:"ds-u-font-size--lg"}),closeButtonVariation:"ghost",heading:t,onCloseClick:()=>r(!1),hasFocusTrap:!0,headingLevel:2,children:(0,f.default)((0,u.decode)(n),{replace:({name:e,attribs:t,children:n})=>{if("span"===e&&"tooltip"===t.class)return(// to simulate the output of a standard tooltip in rich text fields.
/*#__PURE__*/(0,s.jsx)("span",{className:"tooltip","data-tooltip-id":t["data-tooltip-id"],children:/*#__PURE__*/(0,s.jsx)($.default,{className:"ds-c-tooltip__trigger-link",component:"a",placement:"auto",title:(0,f.default)((0,u.decode)(t["data-content"])),children:(0,f.default)(n[0].data)})}))}})})]})};const ee=document.querySelectorAll(".help-drawer");ee.forEach(e=>{let t=e.innerHTML.trim(),n=e.getAttribute("data-content"),o=e.getAttribute("data-title");(0,c.render)(/*#__PURE__*/(0,s.jsx)(W,{toggle:t,drawer_content:n,drawer_heading:o}),e)});