System.register([],(function(t,n){return{execute:function(){t((()=>{var t={722:(t,n,e)=>{const r=e(905).R;n.s=function(t){if(t||(t=1),!e.y.meta||!e.y.meta.url)throw console.error("__system_context__",e.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");e.p=r(e.y.meta.url,t)}},905:(t,n,e)=>{n.R=function(t,n){var e=document.createElement("a");e.href=t;for(var r="/"===e.pathname[0]?e.pathname:"/"+e.pathname,o=0,i=r.length;o!==n&&i>=0;)"/"===r[--i]&&o++;if(o!==n)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+n+") is greater than the number of directories ("+o+") in the URL path "+t);var u=r.slice(0,i+1);return e.protocol+"//"+e.host+u};Number.isInteger}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.y=n,r.d=(t,n)=>{for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.p="";var o={};return(0,r(722).s)(1),(()=>{"use strict";r.r(o),r.d(o,{pluginRoutes:()=>Ct});var t=Object.freeze({__proto__:null,get start(){return It},get ensureJQuerySupport(){return pt},get setBootstrapMaxTime(){return K},get setMountMaxTime(){return H},get setUnmountMaxTime(){return Q},get setUnloadMaxTime(){return V},get registerApplication(){return Tt},get unregisterApplication(){return At},get getMountedApps(){return bt},get getAppStatus(){return Pt},get unloadApplication(){return zt},get checkActivityFunctions(){return St},get getAppNames(){return Ot},get pathToActiveWhen(){return _t},get navigateToUrl(){return rt},get triggerAppChange(){return Mt},get addErrorHandler(){return s},get removeErrorHandler(){return f},get mountRootParcel(){return C},get NOT_LOADED(){return h},get LOADING_SOURCE_CODE(){return m},get NOT_BOOTSTRAPPED(){return d},get BOOTSTRAPPING(){return v},get NOT_MOUNTED(){return w},get MOUNTING(){return g},get UPDATING(){return E},get LOAD_ERROR(){return O},get MOUNTED(){return y},get UNMOUNTING(){return b},get SKIP_BECAUSE_BROKEN(){return P}});function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var i=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{}).CustomEvent,u=function(){try{var t=new i("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?i:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e},a=[];function c(t,n,e){var r=p(t,n,e);a.length?a.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function s(t){if("function"!=typeof t)throw Error(l(28,!1));a.push(t)}function f(t){if("function"!=typeof t)throw Error(l(29,!1));var n=!1;return a=a.filter((function(e){var r=e===t;return n=n||r,!r})),n}function l(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return"single-spa minified message #".concat(t,": ").concat(n?n+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function p(t,n,e){var r,o="".concat(N(n)," '").concat(A(n),"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(l(30,!1,n.status,A(n)));try{r=Error(o+JSON.stringify(t))}catch(n){r=t}}return r.appOrParcelName=A(n),n.status=e,r}var h="NOT_LOADED",m="LOADING_SOURCE_CODE",d="NOT_BOOTSTRAPPED",v="BOOTSTRAPPING",w="NOT_MOUNTED",g="MOUNTING",y="MOUNTED",E="UPDATING",b="UNMOUNTING",O="LOAD_ERROR",P="SKIP_BECAUSE_BROKEN";function T(t){return t.status===y}function S(t){try{return t.activeWhen(window.location)}catch(n){return c(n,t,P),!1}}function A(t){return t.name}function z(t){return Boolean(t.unmountThisParcel)}function N(t){return z(t)?"parcel":"application"}function W(){for(var t=arguments.length-1;t>0;t--)for(var n in arguments[t])"__proto__"!==n&&(arguments[t-1][n]=arguments[t][n]);return arguments[0]}function _(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function j(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!_(n,(function(t){return"function"!=typeof t}))));var n}function D(t,n){var e=t[n]||[];0===(e=Array.isArray(e)?e:[e]).length&&(e=[function(){return Promise.resolve()}]);var r=N(t),o=A(t);return function(t){return e.reduce((function(e,i,u){return e.then((function(){var e=i(t);return U(e)?e:Promise.reject(l(15,!1,r,o,n,u))}))}),Promise.resolve())}}function U(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function M(t,n){return Promise.resolve().then((function(){return t.status!==d?t:(t.status=v,t.bootstrap?q(t,"bootstrap").then(e).catch((function(e){if(n)throw p(e,t,P);return c(e,t,P),t})):Promise.resolve().then(e))}));function e(){return t.status=w,t}}function L(t,n){return Promise.resolve().then((function(){if(t.status!==y)return t;t.status=b;var e=Object.keys(t.parcels).map((function(n){return t.parcels[n].unmountThisParcel()}));return Promise.all(e).then(r,(function(e){return r().then((function(){var r=Error(e.message);if(n)throw p(r,t,P);c(r,t,P)}))})).then((function(){return t}));function r(){return q(t,"unmount").then((function(){t.status=w})).catch((function(e){if(n)throw p(e,t,P);c(e,t,P)}))}}))}var x=!1,R=!1;function I(t,n){return Promise.resolve().then((function(){return t.status!==w?t:(x||(window.dispatchEvent(new u("single-spa:before-first-mount")),x=!0),q(t,"mount").then((function(){return t.status=y,R||(window.dispatchEvent(new u("single-spa:first-mount")),R=!0),t})).catch((function(e){return t.status=y,L(t,!0).then(r,r);function r(){if(n)throw p(e,t,P);return c(e,t,P),t}})))}))}var B=0,G={parcels:{}};function C(){return k.apply(G,arguments)}function k(t,e){var r=this;if(!t||"object"!==n(t)&&"function"!=typeof t)throw Error(l(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(l(3,!1,n(t.name)));if("object"!==n(e))throw Error(l(4,!1,name,n(e)));if(!e.domElement)throw Error(l(5,!1,name));var o,i=B++,u="function"==typeof t,a=u?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:u?m:d,customProps:e,parentName:A(r),unmountThisParcel:function(){return g.then((function(){if(c.status!==y)throw Error(l(6,!1,name,c.status));return L(c,!0)})).then((function(t){return c.parentName&&delete r.parcels[c.id],t})).then((function(t){return f(t),t})).catch((function(t){throw c.status=P,h(t),t}))}};r.parcels[i]=c;var s=a();if(!s||"function"!=typeof s.then)throw Error(l(7,!1));var f,h,v=(s=s.then((function(t){if(!t)throw Error(l(8,!1));var n=t.name||"parcel-".concat(i);if(Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!j(t.bootstrap))throw Error(l(9,!1,n));if(!j(t.mount))throw Error(l(10,!1,n));if(!j(t.unmount))throw Error(l(11,!1,n));if(t.update&&!j(t.update))throw Error(l(12,!1,n));var e=D(t,"bootstrap"),r=D(t,"mount"),u=D(t,"unmount");c.status=d,c.name=n,c.bootstrap=e,c.mount=r,c.unmount=u,c.timeouts=X(t.timeouts),t.update&&(c.update=D(t,"update"),o.update=function(t){return c.customProps=t,$(function(t){return Promise.resolve().then((function(){if(t.status!==y)throw Error(l(32,!1,A(t)));return t.status=E,q(t,"update").then((function(){return t.status=y,t})).catch((function(n){throw p(n,t,P)}))}))}(c))})}))).then((function(){return M(c,!0)})),g=v.then((function(){return I(c,!0)})),b=new Promise((function(t,n){f=t,h=n}));return o={mount:function(){return $(Promise.resolve().then((function(){if(c.status!==w)throw Error(l(13,!1,name,c.status));return r.parcels[i]=c,I(c)})))},unmount:function(){return $(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:$(s),bootstrapPromise:$(v),mountPromise:$(g),unmountPromise:$(b)}}function $(t){return t.then((function(){return null}))}function F(e){var r=A(e),o="function"==typeof e.customProps?e.customProps(r,window.location):e.customProps;("object"!==n(o)||null===o||Array.isArray(o))&&(o={},console.warn(l(40,!1),r,o));var i=W({},o,{name:r,mountParcel:k.bind(e),singleSpa:t});return z(e)&&(i.unmountSelf=e.unmountThisParcel),i}var J={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function K(t,n,e){if("number"!=typeof t||t<=0)throw Error(l(16,!1));J.bootstrap={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function H(t,n,e){if("number"!=typeof t||t<=0)throw Error(l(17,!1));J.mount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function Q(t,n,e){if("number"!=typeof t||t<=0)throw Error(l(18,!1));J.unmount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function V(t,n,e){if("number"!=typeof t||t<=0)throw Error(l(19,!1));J.unload={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function q(t,n){var e=t.timeouts[n],r=e.warningMillis,o=N(t);return new Promise((function(i,u){var a=!1,c=!1;t[n](F(t)).then((function(t){a=!0,i(t)})).catch((function(t){a=!0,u(t)})),setTimeout((function(){return f(1)}),r),setTimeout((function(){return f(!0)}),e.millis);var s=l(31,!1,n,o,A(t),e.millis);function f(t){if(!a)if(!0===t)c=!0,e.dieOnTimeout?u(Error(s)):console.error(s);else if(!c){var n=t,o=n*r;console.warn(s),o+r<e.millis&&setTimeout((function(){return f(n+1)}),r)}}}))}function X(t){var n={};for(var e in J)n[e]=W({},J[e],t&&t[e]||{});return n}function Y(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==h&&t.status!==O?t:(t.status=m,t.loadPromise=Promise.resolve().then((function(){var o=t.loadApp(F(t));if(!U(o))throw r=!0,Error(l(33,!1,A(t)));return o.then((function(r){var o;t.loadErrorTime=null,"object"!==n(e=r)&&(o=34),Object.prototype.hasOwnProperty.call(e,"bootstrap")&&!j(e.bootstrap)&&(o=35),j(e.mount)||(o=36),j(e.unmount)||(o=37);var i=N(e);if(o){var u;try{u=JSON.stringify(e)}catch(t){}return console.error(l(o,!1,i,A(t),u),e),c(void 0,t,P),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=W({},t.devtools.overlays,e.devtools.overlays)),t.status=d,t.bootstrap=D(e,"bootstrap"),t.mount=D(e,"mount"),t.unmount=D(e,"unmount"),t.unload=D(e,"unload"),t.timeouts=X(e.timeouts),delete t.loadPromise,t}))})).catch((function(n){var e;return delete t.loadPromise,r?e=P:(e=O,t.loadErrorTime=(new Date).getTime()),c(n,t,e),t})));var e,r}))}var Z,tt="undefined"!=typeof window,nt={hashchange:[],popstate:[]},et=["hashchange","popstate"];function rt(t){var n;if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(l(14,!1));n=t.currentTarget.href,t.preventDefault()}var e=ft(window.location.href),r=ft(n);0===n.indexOf("#")?window.location.hash=r.hash:e.host!==r.host&&r.host?window.location.href=n:r.pathname===e.pathname&&r.search===e.search?window.location.hash=r.hash:window.history.pushState(null,null,n)}function ot(t){var n=this;if(t){var e=t[0].type;et.indexOf(e)>=0&&nt[e].forEach((function(e){try{e.apply(n,t)}catch(t){setTimeout((function(){throw t}))}}))}}function it(){Lt([],arguments)}function ut(t,n){return function(){var e=window.location.href,r=t.apply(this,arguments),o=window.location.href;return Z&&e===o||(Bt()?window.dispatchEvent(at(window.history.state,n)):Lt([])),r}}function at(t,n){var e;try{e=new PopStateEvent("popstate",{state:t})}catch(n){(e=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t)}return e.singleSpa=!0,e.singleSpaTrigger=n,e}if(tt){window.addEventListener("hashchange",it),window.addEventListener("popstate",it);var ct=window.addEventListener,st=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&et.indexOf(t)>=0)||_(nt[t],(function(t){return t===n})))return ct.apply(this,arguments);nt[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&et.indexOf(t)>=0))return st.apply(this,arguments);nt[t]=nt[t].filter((function(t){return t!==n}))},window.history.pushState=ut(window.history.pushState,"pushState"),window.history.replaceState=ut(window.history.replaceState,"replaceState"),window.singleSpaNavigate?console.warn(l(41,!1)):window.singleSpaNavigate=rt}function ft(t){var n=document.createElement("a");return n.href=t,n}var lt=!1;function pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!lt){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return ht.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return ht.call(this,e,window.removeEventListener,t,n,arguments)},lt=!0}}function ht(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach((function(t){et.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))})),""===e.trim()?this:t.apply(this,o))}var mt={};function dt(t){return Promise.resolve().then((function(){var n=mt[A(t)];if(!n)return t;if(t.status===h)return vt(t,n),t;if("UNLOADING"===t.status)return n.promise.then((function(){return t}));if(t.status!==w&&t.status!==O)return t;var e=t.status===O?Promise.resolve():q(t,"unload");return t.status="UNLOADING",e.then((function(){return vt(t,n),t})).catch((function(e){return function(t,n,e){delete mt[A(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,c(e,t,P),n.reject(e)}(t,n,e),t}))}))}function vt(t,n){delete mt[A(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=h,n.resolve()}function wt(t,n,e,r){mt[A(t)]={app:t,resolve:e,reject:r},Object.defineProperty(mt[A(t)],"promise",{get:n})}function gt(t){return mt[t]}var yt=[];function Et(){var t=[],n=[],e=[],r=[],o=(new Date).getTime();return yt.forEach((function(i){var u=i.status!==P&&S(i);switch(i.status){case O:u&&o-i.loadErrorTime>=200&&e.push(i);break;case h:case m:u&&e.push(i);break;case d:case w:!u&&gt(A(i))?t.push(i):u&&r.push(i);break;case y:u||n.push(i)}})),{appsToUnload:t,appsToUnmount:n,appsToLoad:e,appsToMount:r}}function bt(){return yt.filter(T).map(A)}function Ot(){return yt.map(A)}function Pt(t){var n=_(yt,(function(n){return A(n)===t}));return n?n.status:null}function Tt(t,e,r,o){var i=function(t,e,r,o){var i,u={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"===n(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(l(39,!1));var e=["name","app","activeWhen","customProps"],r=Object.keys(t).reduce((function(t,n){return e.indexOf(n)>=0?t:t.concat(n)}),[]);if(0!==r.length)throw Error(l(38,!1,e.join(", "),r.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(l(20,!1));if("object"!==n(t.app)&&"function"!=typeof t.app)throw Error(l(20,!1));var o=function(t){return"string"==typeof t||"function"==typeof t};if(!(o(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(o)))throw Error(l(24,!1));if(!Wt(t.customProps))throw Error(l(22,!1))}(t),u.name=t.name,u.loadApp=t.app,u.activeWhen=t.activeWhen,u.customProps=t.customProps):(function(t,n,e,r){if("string"!=typeof t||0===t.length)throw Error(l(20,!1));if(!n)throw Error(l(23,!1));if("function"!=typeof e)throw Error(l(24,!1));if(!Wt(r))throw Error(l(22,!1))}(t,e,r,o),u.name=t,u.loadApp=e,u.activeWhen=r,u.customProps=o),u.loadApp="function"!=typeof(i=u.loadApp)?function(){return Promise.resolve(i)}:i,u.customProps=function(t){return t||{}}(u.customProps),u.activeWhen=function(t){var n=Array.isArray(t)?t:[t];return n=n.map((function(t){return"function"==typeof t?t:_t(t)})),function(t){return n.some((function(n){return n(t)}))}}(u.activeWhen),u}(t,e,r,o);if(-1!==Ot().indexOf(i.name))throw Error(l(21,!1,i.name));yt.push(W({loadErrorTime:null,status:h,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),tt&&(pt(),Lt())}function St(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return yt.filter((function(n){return n.activeWhen(t)})).map(A)}function At(t){if(0===yt.filter((function(n){return A(n)===t})).length)throw Error(l(25,!1,t));return zt(t).then((function(){var n=yt.map(A).indexOf(t);yt.splice(n,1)}))}function zt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(l(26,!1));var e=_(yt,(function(n){return A(n)===t}));if(!e)throw Error(l(27,!1,t));var r,o=gt(A(e));if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,n){wt(e,(function(){return i}),t,n)}));return i}return o?(r=o.promise,Nt(e,o.resolve,o.reject)):r=new Promise((function(t,n){wt(e,(function(){return r}),t,n),Nt(e,t,n)})),r}function Nt(t,n,e){L(t).then(dt).then((function(){n(),setTimeout((function(){Lt()}))})).catch(e)}function Wt(t){return!t||"function"==typeof t||"object"===n(t)&&null!==t&&!Array.isArray(t)}function _t(t,n){var e=function(t,n){var e=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(var i=0;i<t.length;i++){var u=t[i];(!r&&":"===u||r&&"/"===u)&&a(i)}return a(t.length),new RegExp(o,"i");function a(i){var u=t.slice(e,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":u,i===t.length)if(r)n&&(o+="$");else{var a=n?"":".*";o="/"===o.charAt(o.length-1)?"".concat(o).concat(a,"$"):"".concat(o,"(/").concat(a,")?(#.*)?$")}r=!r,e=i}}(t,n);return function(t){var n=t.origin;n||(n="".concat(t.protocol,"//").concat(t.host));var r=t.href.replace(n,"").replace(t.search,"").split("?")[0];return e.test(r)}}var jt=!1,Dt=[],Ut=tt&&window.location.href;function Mt(){return Lt()}function Lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(jt)return new Promise((function(t,e){Dt.push({resolve:t,reject:e,eventArguments:n})}));var r,o=Et(),i=o.appsToUnload,a=o.appsToUnmount,c=o.appsToLoad,s=o.appsToMount,f=!1,l=Ut,p=Ut=window.location.href;return Bt()?(jt=!0,r=i.concat(c,a,s),v()):(r=c,d());function m(){f=!0}function d(){return Promise.resolve().then((function(){var t=c.map(Y);return Promise.all(t).then(E).then((function(){return[]})).catch((function(t){throw E(),t}))}))}function v(){return Promise.resolve().then((function(){if(window.dispatchEvent(new u(0===r.length?"single-spa:before-no-app-change":"single-spa:before-app-change",b(!0))),window.dispatchEvent(new u("single-spa:before-routing-event",b(!0,{cancelNavigation:m}))),f)return window.dispatchEvent(new u("single-spa:before-mount-routing-event",b(!0))),g(),void rt(l);var n=i.map(dt),e=a.map(L).map((function(t){return t.then(dt)})).concat(n),o=Promise.all(e);o.then((function(){window.dispatchEvent(new u("single-spa:before-mount-routing-event",b(!0)))}));var p=c.map((function(t){return Y(t).then((function(t){return xt(t,o)}))})),h=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return xt(t,o)}));return o.catch((function(t){throw E(),t})).then((function(){return E(),Promise.all(p.concat(h)).catch((function(n){throw t.forEach((function(t){return t.reject(n)})),n})).then(g)}))}))}function g(){var n=bt();t.forEach((function(t){return t.resolve(n)}));try{var e=0===r.length?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new u(e,b())),window.dispatchEvent(new u("single-spa:routing-event",b()))}catch(t){setTimeout((function(){throw t}))}if(jt=!1,Dt.length>0){var o=Dt;Dt=[],Lt(o)}return n}function E(){t.forEach((function(t){ot(t.eventArguments)})),ot(n)}function b(){var t,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0],u=arguments.length>1?arguments[1]:void 0,m={},d=(e(t={},y,[]),e(t,w,[]),e(t,h,[]),e(t,P,[]),t);o?(c.concat(s).forEach((function(t,n){g(t,y)})),i.forEach((function(t){g(t,h)})),a.forEach((function(t){g(t,w)}))):r.forEach((function(t){g(t)}));var v={detail:{newAppStatuses:m,appsByNewStatus:d,totalAppChanges:r.length,originalEvent:null==n?void 0:n[0],oldUrl:l,newUrl:p,navigationIsCanceled:f}};return u&&W(v.detail,u),v;function g(t,n){var e=A(t);n=n||Pt(e),m[e]=n,(d[n]=d[n]||[]).push(e)}}}function xt(t,n){return S(t)?M(t).then((function(t){return n.then((function(){return S(t)?I(t):t}))})):n.then((function(){return t}))}var Rt=!1;function It(t){var n;Rt=!0,t&&t.urlRerouteOnly&&(n=t.urlRerouteOnly,Z=n),tt&&Lt()}function Bt(){return Rt}tt&&setTimeout((function(){Rt||console.warn(l(1,!1))}),5e3);var Gt={getRawAppData:function(){return[].concat(yt)},reroute:Lt,NOT_LOADED:h,toLoadPromise:Y,toBootstrapPromise:M,unregisterApplication:At};tt&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Gt);var Ct=[function(t){return t.pathname.startsWith("/chess")},function(t){return t.pathname.startsWith("/sales")},function(t){return t.pathname.startsWith("/music")},function(t){return t.pathname.startsWith("/deadlines")},function(t){return t.pathname.startsWith("/goals")},function(t){return t.pathname.startsWith("/dm")},function(t){return t.pathname.startsWith("/noticeboard")},function(t){return t.pathname.startsWith("/companyfiles")},function(t){return t.pathname.startsWith("/calendar")}];Tt({name:"@zuri/topbar",app:function(){return System.import("@zuri/topbar")},activeWhen:["/home"].concat(Ct)}),Tt({name:"@zuri/sidebar",app:function(){return System.import("@zuri/sidebar")},activeWhen:["/home"].concat(Ct)}),Tt({name:"@zuri/control",app:function(){return System.import("@zuri/control")},activeWhen:["/"]}),Tt({name:"@zuri/zuri-plugin-chessboard",app:function(){return System.import("@zuri/zuri-plugin-chessboard")},activeWhen:[function(t){return t.pathname.startsWith("/chess")}]}),Tt({name:"@zuri/zuri-plugin-company-sales-prospects",app:function(){return System.import("@zuri/zuri-plugin-company-sales-prospects")},activeWhen:[function(t){return t.pathname.startsWith("/sales")}]}),Tt({name:"@zuri/zuri-plugin-music",app:function(){return System.import("@zuri/zuri-plugin-music")},activeWhen:[function(t){return t.pathname.startsWith("/music")}]}),Tt({name:"@zuri/zuri-plugin-deadlines",app:function(){return System.import("@zuri/zuri-plugin-deadlines")},activeWhen:[function(t){return t.pathname.startsWith("/deadlines")}]}),Tt({name:"@zuri/zuri-plugin-company-goals",app:function(){return System.import("@zuri/zuri-plugin-company-goals")},activeWhen:[function(t){return t.pathname.startsWith("/goals")}]}),Tt({name:"@zuri/zuri-plugin-todo",app:function(){return System.import("@zuri/zuri-plugin-todo")},activeWhen:[function(t){return t.pathname.startsWith("/todo")}]}),Tt({name:"@zuri/zuri-plugin-dm",app:function(){return System.import("@zuri/zuri-plugin-dm")},activeWhen:[function(t){return t.pathname.startsWith("/dm")}]}),Tt({name:"@zuri/zuri-plugin-noticeboard",app:function(){return System.import("@zuri/zuri-plugin-noticeboard")},activeWhen:[function(t){return t.pathname.startsWith("/noticeboard")}]}),Tt({name:"@zuri/zuri-plugin-companyfiles",app:function(){return System.import("@zuri/zuri-plugin-companyfiles")},activeWhen:[function(t){return t.pathname.startsWith("/companyfiles")}]}),Tt({name:"@zuri/zuri-plugin-calendar",app:function(){return System.import("@zuri/zuri-plugin-calendar")},activeWhen:[function(t){return t.pathname.startsWith("/calendar")}]}),It({urlRerouteOnly:!0})})(),o})())}}}));
//# sourceMappingURL=zuri-root-config.js.map