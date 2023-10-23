let e;function t(e){return e&&e.__esModule?e.default:e}var n,r,o,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},l={},s=i.parcelRequire71f1;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},i.parcelRequire71f1=s),s.register;var c=s("bGt3w"),u=(s("dhdFe"),s("dhdFe"));const d=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,f=d.ReactCurrentDispatcher,h=()=>(0,u.useReducer)(()=>({}))[1],p=e=>()=>{let t=`Hook "${e}" no possible to using inside useBetween scope.`;throw console.error(t),Error(t)},m=(e,t)=>Object.is(e,t),g=(e,t)=>!e||!t||e.length!==t.length||e.some((e,n)=>!m(e,t[n])),b=new Map;let v=[],y=0,w=[],_=[],E=()=>{},O="undefined"==typeof window;const D=()=>{let e=y++;return v[e]=v[e]||{}},S={useState(e){let t=D(),n=E;return t.initialized||(t.state="function"==typeof e?e():e,t.set=e=>{if("function"==typeof e)return t.set(e(t.state));m(e,t.state)||(t.state=e,n())},t.initialized=!0),[t.state,t.set]},useReducer(e,t,n){let r=D(),o=E;return r.initialized||(r.state=n?n(t):t,r.dispatch=t=>{let n=e(r.state,t);m(n,r.state)||(r.state=n,o())},r.initialized=!0),[r.state,r.dispatch]},useEffect(e,t){if(O)return;let n=D();n.initialized?g(n.deps,t)&&(n.deps=t,w.push([n,t,e])):(n.deps=t,n.initialized=!0,w.push([n,t,e]))},useLayoutEffect(e,t){if(O)return;let n=D();n.initialized?g(n.deps,t)&&(n.deps=t,_.push([n,t,e])):(n.deps=t,n.initialized=!0,_.push([n,t,e]))},useCallback(e,t){let n=D();return n.initialized?g(n.deps,t)&&(n.deps=t,n.fn=e):(n.fn=e,n.deps=t,n.initialized=!0),n.fn},useMemo(e,t){let n=D();return n.initialized?g(n.deps,t)&&(n.deps=t,n.state=e()):(n.deps=t,n.state=e(),n.initialized=!0),n.state},useRef(e){let t=D();return t.initialized||(t.state={current:e},t.initialized=!0),t.state},useImperativeHandle(e,t,n){if(O)return;let r=D();r.initialized?g(r.deps,n)&&(r.deps=n,_.push([r,n,()=>{"function"==typeof e?e(t()):e.current=t()}])):(r.deps=n,r.initialized=!0,_.push([r,n,()=>{"function"==typeof e?e(t()):e.current=t()}]))}};["readContext","useContext","useDebugValue","useResponder","useDeferredValue","useTransition"].forEach(e=>S[e]=p(e));const k=(t,n)=>{let r;let o=[],i=[],a=[],l=!1;n&&n.mock&&(r=n.mock,l=!0);let s=()=>{i.slice().forEach(e=>e())},c=()=>{if(l)return;let n=f.current,i=[y,w,_,v,E],u=!1,d=!0;if(y=0,w=[],_=[],v=o,E=()=>{d?u=!0:c()},f.current=S,r=t(e),[_,w].forEach(e=>e.forEach(([e,t,n])=>{if(e.deps=t,e.unsub){let t=e.unsub;a=a.filter(e=>e!==t),t()}let r=n();"function"==typeof r?(a.push(r),e.unsub=r):e.unsub=null})),[y,w,_,v,E]=i,f.current=n,d=!1,!u){s();return}c()};return{init:()=>c(),get:()=>r,sub:e=>{-1===i.indexOf(e)&&i.push(e)},unsub:e=>{i=i.filter(t=>t!==e)},unsubs:()=>a,mock:e=>{l=!0,r=e,s()},unmock:()=>{l=!1,c()}}},T=e=>{let t=b.get(e);return t||(t=k(e),b.set(e,t),t.init()),t},x=e=>{let t=h(),n=T(e);return n.sub(t),(0,u.useEffect)(()=>(n.sub(t),()=>n.unsub(t)),[n,t]),n.get()};var M=s("4VdZE"),c=s("bGt3w"),N=s("hI9T1"),j=s("ffape"),u=(s("dhdFe"),s("dhdFe")),C=s("cleuf"),L=s("7B6NU"),P=s("3vwoC"),A=["className","children","inline","showDrawer","drawerOpen"];function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var R=function(e){var n=e.className,r=e.children,o=e.inline,i=e.showDrawer,a=e.drawerOpen,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,A),s=(0,u.useRef)(null),c=(0,P.default)(a);(0,u.useEffect)(function(){// if drawer was open but now closed, focus the toggle
c&&!a&&s.current&&s.current.focus()},[a]);var d=/*@__PURE__*/t(L)("ds-c-drawer__toggle",o&&"ds-c-drawer__toggle--inline",n);return /*@__PURE__*/t(u).createElement(C.default,I({className:d,inputRef:function(e){return s.current=e},onClick:i,variation:"ghost"},l),r)},L=s("7B6NU"),F=["children","className","showDrawer","helpDrawerOpen","icon"];function z(){return(z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var B=function(e){var n=e.children,r=e.className,o=e.showDrawer,i=e.helpDrawerOpen,a=e.icon,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,F);return /*@__PURE__*/t(u).createElement(R,z({className:/*@__PURE__*/t(L)(r,"ds-c-help-drawer__toggle"),drawerOpen:i,showDrawer:o},l),n," ",a)},u=(s("dhdFe"),s("dhdFe")),C=s("cleuf"),u=s("dhdFe"),H={},U=H={};function V(){throw Error("setTimeout has not been defined")}function K(){throw Error("clearTimeout has not been defined")}function q(e){if(n===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((n===V||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return n(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return n.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:V}catch(e){n=V}try{r="function"==typeof clearTimeout?clearTimeout:K}catch(e){r=K}}();var X=[],Y=!1,Z=-1;function G(){Y&&o&&(Y=!1,o.length?X=o.concat(X):Z=-1,X.length&&$())}function $(){if(!Y){var e=q(G);Y=!0;for(var t=X.length;t;){for(o=X,X=[];++Z<t;)o&&o[Z].run();Z=-1,t=X.length}o=null,Y=!1,function(e){if(r===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((r===K||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
r(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return r.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return r.call(this,e)}}}(e)}}// v8 likes predictible objects
function Q(e,t){this.fun=e,this.array=t}function W(){}function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}U.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];X.push(new Q(e,t)),1!==X.length||Y||q($)},Q.prototype.run=function(){this.fun.apply(null,this.array)},U.title="browser",U.browser=!0,U.env={},U.argv=[],U.version="",U.versions={},U.on=W,U.addListener=W,U.once=W,U.off=W,U.removeListener=W,U.removeAllListeners=W,U.emit=W,U.prependListener=W,U.prependOnceListener=W,U.listeners=function(e){return[]},U.binding=function(e){throw Error("process.binding is not supported")},U.cwd=function(){return"/"},U.chdir=function(e){throw Error("process.chdir is not supported")},U.umask=function(){return 0};/**
 * This polyfill comes from https://github.com/GoogleChrome/dialog-polyfill/, but
 * we need to wrap it in a function and conditionally call it so we can support
 * server-side rendering in downstream applications. Because our code doesn't have
 * insight into the context in which it is used, we need to avoid executing the
 * code in this module before determining whether the environment can support it
 * (that is, whether `window` is defined). The polyfill team will not fix it on
 * their end: https://github.com/GoogleChrome/dialog-polyfill/issues/169
 *//**
 * Define this outside and then fill it in inside our loadDialogPolyfill function
 */var ee={registerDialog:function(){},forceRegisterDialog:function(){}};"undefined"!=typeof window&&function(){// nb. This is for IE10 and lower _only_.
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
   */function r(e){// Find the actual focused element when the active element is inside a shadow root
for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}/**
   * @param {HTMLFormElement} el to check
   * @return {boolean} whether this form has method="dialog"
   */function o(e){return!!(e&&e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}/**
   * Determines if an element is attached to the DOM.
   * @param {Element} element to check
   * @return {boolean} whether the element is in DOM
   */function i(e){return e.isConnected||document.body.contains(e)}/**
   * @param {!Event} event
   * @return {?Element}
   */function a(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var n=ee.formSubmitter;if(!n){var r=e.target;n=("getRootNode"in r&&r.getRootNode()||document).activeElement}return n&&n.form===t?n:null}/**
   * @param {!Event} event
   */function l(e){if(!e.defaultPrevented){var t=/** @type {!HTMLFormElement} */e.target,r=ee.imagemapUseValue,o=a(e);null===r&&o&&(r=o.value);// There should always be a dialog as this handler is added specifically on them, but check just
// in case.
var i=n(t);i&&"dialog"===(o&&o.getAttribute("formmethod")||t.getAttribute("method"))&&(e.preventDefault(),null!=r?i.close(r):i.close())}}/**
   * @param {!HTMLDialogElement} dialog to upgrade
   * @constructor
   */function s(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",l,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window)new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]});else{// IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
// seem to fire even if the element was removed as part of a parent removal. Use the removed
// events to force downgrade (useful if removed/immediately added).
var t,n=!1,r=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),o=function(o){if(o.target===e){// not for a child element
var i="DOMNodeRemoved";n|=o.type.substr(0,i.length)===i,window.clearTimeout(t),t=window.setTimeout(r,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(t){e.addEventListener(t,o)})}// Note that the DOM is observed inside DialogManager while any dialog
// is being displayed as a modal, to catch modal removal from the DOM.
Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}/**
   * Installs global handlers, such as click listers and native method overrides. These are needed
   * even if a no dialog is registered, as they deal with <form method="dialog">.
   */if(e&&"object"!==J(e)||((e=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n}).prototype=window.Event.prototype),s.prototype=/** @type {HTMLDialogElement.prototype} */{get dialog(){return this.dialog_},/**
     * Maybe remove this dialog from the modal top layer. This is called when
     * a modal dialog may no longer be tenable, e.g., when the dialog is no
     * longer open or is no longer part of the DOM.
     */maybeHideModal:function(){this.dialog_.hasAttribute("open")&&i(this.dialog_)||this.downgradeModal()},/**
     * Remove this dialog from the modal top layer, leaving it as a non-modal.
     */downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),// Clear the backdrop and remove from the manager.
this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),ee.dm.removeDialog(this))},/**
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
var r=t.querySelector(n.join(", "));if(!r&&"attachShadow"in Element.prototype)for(var o=t.querySelectorAll("*"),i=0;i<o.length&&!(o[i].tagName&&o[i].shadowRoot&&(r=e(o[i].shadowRoot)));i++);return r}(this.dialog_)),r(document.activeElement),e&&e.focus()},/**
     * Sets the zIndex for the backdrop and dialog.
     *
     * @param {number} dialogZ
     * @param {number} backdropZ
     */updateZIndex:function(e,t){if(e<t)throw Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},/**
     * Shows the dialog. If the dialog is already open, this does nothing.
     */show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},/**
     * Show this dialog modally.
     */showModal:function(){if(this.dialog_.hasAttribute("open"))throw Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!i(this.dialog_))throw Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!ee.dm.pushDialog(this))throw Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");/**
   * @param {Element} el to check for stacking context
   * @return {boolean} whether this el or its parents creates a stacking context
   */(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(e,n){return!(void 0===t[e]||t[e]===n)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&((void 0===H?"undefined":J(H))==="object"&&J(H.env),1)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,ee.needsCentering(this.dialog_)?(ee.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,// Insert backdrop.
this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),// Focus on whatever inside the dialog.
this.focus_()},/**
     * Closes this HTMLDialogElement. This is optional vs clearing the open
     * attribute, however this fires a 'close' event.
     *
     * @param {string=} opt_returnValue to use as the returnValue
     */close:function(n){if(!this.dialog_.hasAttribute("open"))throw Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==n&&(this.dialog_.returnValue=n);// Triggering "close" event for any attached listeners on the <dialog>.
var r=new e("close",{bubbles:!1,cancelable:!1});t(this.dialog_,r)}},ee.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},ee.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],r=null;// Some browsers throw on cssRules.
try{r=n.cssRules}catch(e){// Do nothing
}if(r)for(var o=0;o<r.length;++o){var i=r[o],a=null;// Ignore errors on invalid selector texts.
try{a=document.querySelectorAll(i.selectorText)}catch(e){// Do nothing
}if(a&&/**
   * @param {!NodeList} nodeList to search
   * @param {Node} node to find
   * @return {boolean} whether node is inside nodeList
   */function(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}(a,e)){var l=i.style.getPropertyValue("top"),s=i.style.getPropertyValue("bottom");if(l&&"auto"!==l||s&&"auto"!==s)return!0}}}return!1},ee.needsCentering=function(e){return"absolute"===window.getComputedStyle(e).position&&("auto"===e.style.top||""===e.style.top)&&("auto"===e.style.bottom||""===e.style.bottom)&&!ee.isInlinePositionSetByStylesheet(e)},/**
   * @param {!Element} element to force upgrade
   */ee.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw Error("Failed to register dialog: The element is not a dialog.");new s(/** @type {!HTMLDialogElement} */e)},/**
   * @param {!Element} element to upgrade, if necessary
   */ee.registerDialog=function(e){e.showModal||ee.forceRegisterDialog(e)},/**
   * @constructor
   */ee.DialogManager=function(){/** @type {!Array<!dialogPolyfillInfo>} */this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);// The overlay is used to simulate how a modal dialog blocks the document.
// The blocking dialog is positioned on top of the overlay, and the rest of
// the dialogs on the pending dialog stack are positioned below it. In the
// actual implementation, the modal dialog stacking is controlled by the
// top layer, where z-index has no effect.
this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var n=[];t.forEach(function(e){for(var t,r=0;t=e.removedNodes[r];++r)t instanceof Element&&("dialog"===t.localName&&n.push(t),n=n.concat(t.querySelectorAll("dialog")))}),n.length&&e(n)}))},/**
   * Called on the first modal dialog being shown. Adds the overlay and related
   * handlers.
   */ee.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},/**
   * Called on the first modal dialog being removed, i.e., when no more modal
   * dialogs are visible.
   */ee.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},/**
   * Updates the stacking of all known dialogs.
   */ee.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var r=this.pendingDialogStack[0];r?(r.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},/**
   * @param {Element} candidate to check if contained or is the top-most modal dialog
   * @return {boolean} whether candidate is contained in top dialog
   */ee.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=n(e);){for(var t,r=0;t=this.pendingDialogStack[r];++r)if(t.dialog===e)return 0===r;// only valid if top-most
e=e.parentElement}return!1},ee.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),r(/** @type {Element} */t),void 0!==this.forwardTab_)){// move focus only from a tab key
var n=this.pendingDialogStack[0];return n.dialog.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}},ee.DialogManager.prototype.handleKey_=function(n){if(this.forwardTab_=void 0,27===n.keyCode){n.preventDefault(),n.stopPropagation();var r=new e("cancel",{bubbles:!1,cancelable:!0}),o=this.pendingDialogStack[0];o&&t(o.dialog,r)&&o.dialog.close()}else 9===n.keyCode&&(this.forwardTab_=!n.shiftKey)},/**
   * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
   * removed and immediately readded don't stay modal, they become normal.
   *
   * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
   */ee.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach(function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()})},/**
   * @param {!dialogPolyfillInfo} dpi
   * @return {boolean} whether the dialog was allowed
   */ee.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},/**
   * @param {!dialogPolyfillInfo} dpi
   */ee.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},ee.dm=new ee.DialogManager,ee.formSubmitter=null,ee.imagemapUseValue=null,void 0===window.HTMLDialogElement){/**
     * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
     * one that returns the correct value.
     */var c=document.createElement("form");if(c.setAttribute("method","dialog"),"dialog"!==c.method){var u=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(u){// nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
// and don't bother to update the element.
var d=u.get;u.get=function(){return o(this)?"dialog":d.call(this)};var f=u.set;/** @this {HTMLElement} */u.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):f.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",u)}}/**
     * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
     * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
     * document.activeElement.
     */document.addEventListener("click",function(e){if(ee.formSubmitter=null,ee.imagemapUseValue=null,!e.defaultPrevented){// e.g. a submit which prevents default submission
var t=/** @type {Element} */e.target;if("composedPath"in e&&(t=e.composedPath().shift()||t),t&&o(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if(!("input"===t.localName&&"image"===t.type))return;// this is a <input type="image">, which can submit forms
ee.imagemapUseValue=e.offsetX+","+e.offsetY}n(t)&&(ee.formSubmitter=t)}}},!1),/**
     * Global 'submit' handler. This handles submits of `method="dialog"` which are invalid, i.e.,
     * outside a dialog. They get prevented.
     */document.addEventListener("submit",function(e){var t=e.target;if(!n(t)){var r=a(e);"dialog"===(r&&r.getAttribute("formmethod")||t.getAttribute("method"))&&e.preventDefault()}// ignore, handle there
});/**
     * Replace the native HTMLFormElement.submit() method, as it won't fire the
     * submit event and give us a chance to respond.
     */var h=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!o(this))return h.call(this);var e=n(this);e&&e.close()}}}();var et=["children","exit","showModal","backdropClickExits","boundingBoxRef"];function en(){return(en=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var er=function(e){var n=e.children,r=e.exit,o=e.showModal,i=e.backdropClickExits,a=e.boundingBoxRef,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,et),s=(0,u.useRef)(null);return(// Register dialog with the polyfill if necessary
(0,u.useLayoutEffect)(function(){ee.registerDialog(s.current)}),// Open and close the dialog with the appropriate method on mount and unmount
(0,u.useEffect)(function(){var e=s.current;return o?e.showModal():e.show(),function(){e.close()}},[o]),// Bind and unbind cancel event listeners on mount and unmount
(0,u.useEffect)(function(){var e=s.current,t=function(e){e.preventDefault(),r()};return e.addEventListener("cancel",t),function(){e.removeEventListener("cancel",t)}},[r]),// Bind and unbind click event listeners on mount and unmount
(0,u.useEffect)(function(){if(i){var e=s.current,t=function(e){var t,n=(null!==(t=null==a?void 0:a.current)&&void 0!==t?t:s.current).getBoundingClientRect();n.top<=e.clientY&&e.clientY<=n.top+n.height&&n.left<=e.clientX&&e.clientX<=n.left+n.width||r()};return e.addEventListener("click",t),function(){e.removeEventListener("click",t)}}},[r,i]),/*@__PURE__*/t(u).createElement("dialog",en({ref:s},l),n))},L=s("7B6NU"),eo=s("1rUtr"),ei=s("Qa923"),ea=function(e){var n,r,o=(0,u.useRef)(null),i=(0,ei.default)("drawer--",e.headingId),a="h".concat(e.headingLevel);return /*@__PURE__*/t(u).createElement(er,{className:/*@__PURE__*/t(L)(e.className,"ds-c-drawer"),exit:e.onCloseClick,showModal:e.hasFocusTrap},/*@__PURE__*/t(u).createElement("div",{className:"ds-c-drawer__window",tabIndex:-1,"aria-labelledby":i},/*@__PURE__*/t(u).createElement("div",{className:"ds-c-drawer__header"},/*@__PURE__*/t(u).createElement(a,{id:i,className:"ds-c-drawer__header-heading",ref:function(t){o.current=t,e.headingRef&&(e.headingRef.current=t)}},e.heading),/*@__PURE__*/t(u).createElement(C.default,{"aria-label":null!==(n=e.ariaLabel)&&void 0!==n?n:(0,eo.t)("drawer.ariaLabel"),className:"ds-c-drawer__close-button",size:"small",onClick:e.onCloseClick,variation:e.closeButtonVariation},null!==(r=e.closeButtonText)&&void 0!==r?r:(0,eo.t)("drawer.closeButtonText"))),/*@__PURE__*/t(u).createElement("div",{className:/*@__PURE__*/t(L)("ds-c-drawer__body",{"ds-c-drawer--is-sticky":e.isHeaderSticky||e.isFooterSticky}),tabIndex:0},e.children),(e.footerTitle||e.footerBody)&&/*@__PURE__*/t(u).createElement("div",{className:"ds-c-drawer__footer"},/*@__PURE__*/t(u).createElement("h4",{className:"ds-c-drawer__footer-title"},e.footerTitle),/*@__PURE__*/t(u).createElement("div",{className:"ds-c-drawer__footer-body"},e.footerBody))))};ea.defaultProps={headingLevel:"3",hasFocusTrap:!1};var L=s("7B6NU"),el=s("bhkAn"),u=s("dhdFe"),es=s("g3glk"),ec=s("986fz");function eu(e){return(eu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ed(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ef(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var eh=["analytics","analyticsLabelOverride","analyticsEventTypeOverride","children","className"];function ep(){return(ep=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var em=function(e){e.analytics,e.analyticsLabelOverride,e.analyticsEventTypeOverride;var n=e.children,r=e.className,o=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,eh),i=function(e){var t,n,r,o,i,a=e.analytics,l=e.analyticsLabelOverride,s=e.onAnalyticsEvent,c=void 0===s?el.defaultAnalyticsFunction:s;function d(e,t){if(!0===a||(0,ec.helpDrawerSendsAnalytics)()&&!1!==a){var n=null!=l?l:e;if(!n){console.error("No content found for Dialog analytics event");return}c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ef(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!==eu(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==eu(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===eu(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ef(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({event_type:el.EventType.UI_INTERACTION,event_category:el.EventCategory.UI_COMPONENTS,event_label:n,event_extension:el.eventExtensionText,heading:n},t))}}return(function(e){if(Array.isArray(e))return e}((n=(t={componentName:"Dialog",onMount:function(e){d(e,{event_name:"help_drawer_opened",event_action:"opened help drawer"})},onUnmount:function(e){d(e,{event_name:"help_drawer_closed",event_action:"closed help drawer"})}}).componentName,r=t.onMount,o=t.onUnmount,i=[(0,u.useRef)(),(0,u.useRef)(),(0,u.useRef)()],// eslint-disable-next-line react-hooks/exhaustive-deps
// According to this lint rule, we need to include all the dependencies of this function in the
// dependency array. However, in order for this useEffect to only fire on first render, we would
// need to memoize the two callback functions. This is an unnecessary burden on the implementing
// class, and there isn't a good way to memoize the props we receive here because they *also*
// have dependencies that should be listed but are unknown. This assumes that the onMount and
// onUnmount do not have a reason to change between renders.
(0,u.useEffect)(function(){var e=(0,es.default)(i,n);return r(e),function(){o&&o(e)}},[]),i))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(i,1)||function(e,t){if(e){if("string"==typeof e)return ed(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ed(e,t)}}(i,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0]}(e);return /*@__PURE__*/t(u).createElement(ea,ep({className:/*@__PURE__*/t(L)(r,"ds-c-help-drawer"),headingRef:i},o),n)},eg=s("aXcvm"),eb=s("hCgaF"),u=s("dhdFe"),eo=s("1rUtr"),ev=s("2bj8b");function ey(){return(ey=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ew={className:"",viewBox:"0 0 16 16"};function e_(e){var n="ds-c-icon--info-circle-thin ".concat(e.className||"");return /*@__PURE__*/t(u).createElement(ev.SvgIcon,ey({title:(0,eo.t)("icons.infoCircle")},ew,e,{className:n}),/*@__PURE__*/t(u).createElement("path",{d:"M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm1-3.7V6.4H7v5.9h2zM7 4.9c0 .6.3.9 1 .9s1-.3 1-.9c0-.3-.1-.5-.2-.7-.2-.1-.5-.2-.8-.2-.3 0-.6.1-.8.2-.1.2-.2.4-.2.7z",fillRule:"nonzero"}))}var eE=function({drawerToggle:e,drawerHeading:t,drawerContent:n,drawerIndex:r,sharedDrawerState:o}){let{activeDrawer:i}=o(),{updateDrawers:a}=o();return/*#__PURE__*/(0,c.jsxs)(c.Fragment,{children:[/*#__PURE__*/(0,c.jsxs)(B,{helpDrawerOpen:i===r,showDrawer:()=>a(r),inline:!0,children:[e," ",/*#__PURE__*/(0,c.jsx)(e_,{ariaHidden:!0})]}),i===r&&/*#__PURE__*/(0,c.jsx)(em,{closeButtonText:/*#__PURE__*/(0,c.jsx)(eb.CloseIconThin,{className:"ds-u-font-size--lg"}),closeButtonVariation:"ghost",heading:t,onCloseClick:()=>a(null),headingLevel:2,children:(0,j.default)((0,N.decode)(n),{replace:({name:e,attribs:t,children:n})=>{if("span"===e&&"tooltip"===t.class)return(// to simulate the output of a standard tooltip in rich text fields.
/*#__PURE__*/(0,c.jsx)("span",{className:"tooltip","data-tooltip-id":t["data-tooltip-id"],children:/*#__PURE__*/(0,c.jsx)(eg.default,{className:"ds-c-tooltip__trigger-link",component:"button",placement:"auto",title:(0,j.default)(t["data-content"]),children:(0,j.default)(n[0].data)})}))}})})]})};// Since each drawer is added independently via react-dom,
// we set up a custom hook to handle managing the open/closed
// state of all drawers on the page. This makes it so that
// when a drawer is already open, and another is clicked open,
// the intital drawer closes.
// This is made possible by the 'useBetween' hook.
// See: https://github.com/betula/use-between.
const eO=()=>{// The default state is set to null, then updated to be the active
// drawer's index when the drawer is clicked open. When that state
// value changes to no longer match the drawer's index, it will
// close.
let[e,t]=(0,u.useState)(null),n=(0,u.useCallback)(e=>t(e),[]);return{activeDrawer:e,updateDrawers:n}},eD=()=>x(eO),eS=document.querySelectorAll(".help-drawer");eS.forEach((e,t)=>{let n=e.innerHTML.trim(),r=e.getAttribute("data-content"),o=e.getAttribute("data-title");(0,M.render)(/*#__PURE__*/(0,c.jsx)(eE,{drawerToggle:n,drawerContent:r,drawerHeading:o,drawerIndex:t,sharedDrawerState:eD}),e)});