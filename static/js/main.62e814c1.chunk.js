/*! For license information please see main.62e814c1.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-responsive-virtual-grid-example"]=this["webpackJsonpreact-responsive-virtual-grid-example"]||[]).push([[0],{13:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(5),c=r.n(i),s=r(7),a=r(6),l=r(2),u=r.n(l);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function p(e,t){return e(t={exports:{}},t.exports),t.exports}var h="function"===typeof Symbol&&Symbol.for,y=h?Symbol.for("react.element"):60103,b=h?Symbol.for("react.portal"):60106,m=h?Symbol.for("react.fragment"):60107,w=h?Symbol.for("react.strict_mode"):60108,j=h?Symbol.for("react.profiler"):60114,v=h?Symbol.for("react.provider"):60109,O=h?Symbol.for("react.context"):60110,g=h?Symbol.for("react.async_mode"):60111,x=h?Symbol.for("react.concurrent_mode"):60111,S=h?Symbol.for("react.forward_ref"):60112,M=h?Symbol.for("react.suspense"):60113,R=h?Symbol.for("react.suspense_list"):60120,$=h?Symbol.for("react.memo"):60115,P=h?Symbol.for("react.lazy"):60116,E=h?Symbol.for("react.block"):60121,k=h?Symbol.for("react.fundamental"):60117,C=h?Symbol.for("react.responder"):60118,_=h?Symbol.for("react.scope"):60119;function I(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case y:switch(e=e.type){case g:case x:case m:case j:case w:case M:return e;default:switch(e=e&&e.$$typeof){case O:case S:case P:case $:case v:return e;default:return t}}case b:return t}}}function T(e){return I(e)===x}var L={AsyncMode:g,ConcurrentMode:x,ContextConsumer:O,ContextProvider:v,Element:y,ForwardRef:S,Fragment:m,Lazy:P,Memo:$,Portal:b,Profiler:j,StrictMode:w,Suspense:M,isAsyncMode:function(e){return T(e)||I(e)===g},isConcurrentMode:T,isContextConsumer:function(e){return I(e)===O},isContextProvider:function(e){return I(e)===v},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===y},isForwardRef:function(e){return I(e)===S},isFragment:function(e){return I(e)===m},isLazy:function(e){return I(e)===P},isMemo:function(e){return I(e)===$},isPortal:function(e){return I(e)===b},isProfiler:function(e){return I(e)===j},isStrictMode:function(e){return I(e)===w},isSuspense:function(e){return I(e)===M},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===m||e===x||e===j||e===w||e===M||e===R||"object"===typeof e&&null!==e&&(e.$$typeof===P||e.$$typeof===$||e.$$typeof===v||e.$$typeof===O||e.$$typeof===S||e.$$typeof===k||e.$$typeof===C||e.$$typeof===_||e.$$typeof===E)},typeOf:I},q=(p((function(e,t){0})),p((function(e){e.exports=L})),Object.getOwnPropertySymbols),F=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;function W(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(i){return!1}})()&&Object.assign;var V="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function A(e,t,r,n,o){}A.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function H(){}function N(){}N.resetWarningCache=H;var Y=p((function(e){e.exports=function(){function e(e,t,r,n,o,i){if(i!==V){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:N,resetWarningCache:H};return r.PropTypes=r,r}()})),B=function(e){var t=e.cell,r=e.total,o=e.rowOffset,i="object"===typeof window,c=function(){var e="object"===typeof window,t=Object(n.useMemo)((function(){return u()(32)}),[]);function r(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var o=Object(n.useState)(r),i=o[0],c=o[1];return Object(n.useEffect)((function(){if(!e)return!1;function n(){r()!==i&&t((function(){return c(r())}))}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),i}(),l=Object(a.a)(i&&window.ResizeObserver?{}:{polyfill:s.a}),d=l[0],p=l[1],h=Object(n.useState)({width:0,top:0}),y=h[0],b=h[1];Object(n.useLayoutEffect)((function(){var e,t;b({width:(null===(e=d.current)||void 0===e?void 0:e.offsetWidth)||0,top:(null===(t=d.current)||void 0===t?void 0:t.offsetTop)||0})}),[]);var m=Object(n.useMemo)((function(){var e={},n={},s={};return s.width=p.width||y.width,e.total=Math.floor(s.width/t.width),n.total=Math.ceil(r/e.total),s.top=Math.floor((p.top||y.top)+(i?window.scrollY:0)),s.height=n.total*t.height,e.height=s.height,e.width=Math.floor(s.width/Math.max(1,e.total)),n.height=t.height,n.width=s.width,{display:{cell:t,columns:e,rows:n,layout:s,total:r,rowOffset:o,viewport:{columns:f({},e,{total:e.total}),rows:f({},n,{total:Math.ceil(c.height/n.height)+o})}},style:{position:"relative",height:s.height+"px"}}}),[o,r,t.height,t.width,c.height,c.width,p.width,p.top,y.width,y.top]);return{display:m.display,style:m.style,ref:d}},D=function(e){var t=e.cell,r=e.total,o=e.viewportRowOffset,i=void 0===o?4:o,c=e.onRender,s=Math.max(2,2*Math.round(i/2)),a=B({cell:t,total:r,rowOffset:s}),l=a.display,f=a.style,d=a.ref,p=function(e){var t=e.layout,r=e.cell,o=e.rowOffset,i="object"===typeof window,c=Object(n.useRef)(),s=Object(n.useMemo)((function(){return u()(200)}),[]);c.current=function(){var e=i?Math.max(0,window.scrollY-t.top):0,n=Math.floor(e/r.height);return Math.max(0,n-o/2)};var a=Object(n.useState)(c.current),l=a[0],f=a[1],d=Object(n.useState)(!1),p=d[0],h=d[1];return Object(n.useEffect)((function(){if(!i)return!1;var e=function(){f(c.current()),h(!0),s((function(){return h(!1)}))};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),{firstRowIndex:l,scrolling:p}}(l),h=function(e){var t=e.firstRowIndex,r=e.scrolling,o=e.display,i=e.onRender,c=Object(n.useState)([]),s=c[0],a=c[1],l=Object(n.useMemo)((function(){return u()(200)}),[]);return Object(n.useMemo)((function(){for(var e={},n=t*o.columns.total,c=Math.min(o.total,n+o.viewport.rows.total*o.viewport.columns.total);n<c;n++){var u=Math.min(o.rows.total,Math.floor(n/o.columns.total)),f=n%o.columns.total;e[u+"-"+f]={key:u+"-"+f,index:n,scrolling:r,readyInViewport:!r||s.includes(u+"-"+f),style:{position:"absolute",height:o.rows.height,width:o.columns.width,transform:"translate3d("+f*o.columns.width+"px, "+u*o.rows.height+"px, 0px)"}}}return"function"===typeof i&&i(Object.values(e)),r?l((function(){return a(Object.keys(e))})):(l((function(){})),a(Object.keys(e))),Object.values(e)}),[t,o,i,r])}({firstRowIndex:p.firstRowIndex,scrolling:p.scrolling,display:l,onRender:c});return{container:{ref:d,style:f},children:h}},J=["child","childProps"],U=["key"],G=function(e){var t=e.child,r=e.childProps,n=void 0===r?{}:r,i=d(e,J),c=D(i),s=c.container,a=c.children;return o.a.createElement("div",s,a.map((function(e){var r=e.key,i=d(e,U);return o.a.createElement(t,f({},n,{key:r},i))})))};G.propTypes={cell:Y.shape({height:Y.number.isRequired,width:Y.number.isRequired}).isRequired,total:Y.number.isRequired,onRender:Y.func,viewportRowOffset:Y.number,render:Y.func.isRequired};var K=Object(n.memo)(G),Q=r(1);const X=e=>{let{style:t,index:r,readyInViewport:n,scrolling:o}=e;return Object(Q.jsx)("div",{style:{display:"flex",...t},children:Object(Q.jsxs)("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flex:1,backgroundColor:"gainsboro",margin:"1em"},children:[Object(Q.jsxs)("span",{style:{position:"absolute"},children:["Pcisum #",r,o?" - Scrolling":"",n?" - ReadyInViewport":""]}),Object(Q.jsx)("img",{src:"https://picsum.photos/id/".concat(r,"/304/160"),alt:"Pcisum #".concat(r).concat(o?" - Scrolling":""),style:{objectFit:"cover"},width:"100%",height:"100%",loading:"lazy"})]})})};var Z=e=>{let{...t}=e;return Object(Q.jsxs)("section",{children:[Object(Q.jsx)("header",{style:{height:"10em",background:"tan"},children:Object(Q.jsx)("h1",{children:"Header"})}),Object(Q.jsxs)("div",{style:{margin:"2em"},children:[Object(Q.jsx)("h2",{children:"Anywhere, in any Container"}),Object(Q.jsx)(K,{total:4e3,cell:{height:160,width:200},child:X,viewportRowOffset:10})]}),Object(Q.jsx)("footer",{style:{height:"10em",background:"thistle"},children:Object(Q.jsx)("p",{children:"Footer"})})]})};c.a.render(Object(Q.jsx)(Z,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.62e814c1.chunk.js.map