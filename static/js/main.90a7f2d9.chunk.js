(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t){!function(){var e,t=document.documentElement,n=window,c=n.scrollY||t.scrollTop,r=0,a=0,i=function(e,t){var n=document.getElementById("app-header");2===e&&t>70?(n.classList.add("hide"),a=e):1===e&&(n.classList.remove("hide"),a=e)};window.addEventListener("scroll",(function(){(e=n.scrollY||t.scrollTop)>c?r=2:e<c&&(r=1),r!==a&&i(r,e),c=e}))}()},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),i=n.n(a),s=(n(13),n(4)),o=n.n(s),l=n(8),d=n(2),u=n(7),p=(n(15),n(16),n.p+"static/media/Wunderflats logo.53b2670c.svg"),j=(n(17),n(0));var h=function(){return Object(j.jsxs)("header",{id:"app-header",className:"header-container",children:[Object(j.jsx)("div",{className:"blog-title",children:Object(j.jsx)("img",{src:p,className:"app-logo",alt:"logo"})}),Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("p",{className:"inner-text",children:"E"})})]})},m=(n(19),n(20),function(e){return Object(j.jsx)("button",{type:"button",id:e.id,className:"button-component ".concat(e.className),onClick:e.onClick,children:e.name})});var b=function(e){var t=e.titleText,n=e.titleDescription,c=e.buttonName,r=e.dispatch;return Object(j.jsx)("section",{className:"title-container",children:Object(j.jsxs)("section",{className:"title-section",children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("p",{children:t})}),Object(j.jsx)("div",{className:"number-search",children:Object(j.jsx)("p",{className:"inner-text",children:n})}),Object(j.jsx)("div",{className:"reload-button",children:Object(j.jsx)(m,{name:c,className:"black",onClick:function(){S(r)}})})]})})},f=(n(5),function(e){var t={},n=document.createElement("span");n.style.fontSize="18px",n.innerText=e,document.body.appendChild(n);var c=n.offsetWidth,r=n.offsetHeight;document.body.removeChild(n);var a=c>370?370/c:1,i=r>30?30/r:1,s=18*Math.min(a,i),o=Math.round(s)+"px";return t.fontSize=o,t}),x=function(e){var t=e.title,n=e.image,c=e.price;return Object(j.jsxs)("article",{className:"property-article",children:[Object(j.jsx)("img",{src:n,alt:t,className:"property-image"}),Object(j.jsx)("div",{className:"property-name",style:f(t),children:Object(j.jsx)("p",{children:t})}),Object(j.jsx)("div",{className:"property-price",children:Object(j.jsxs)("p",{children:[c,Object(j.jsxs)("span",{children:[" "," per month"]})]})})]})};var O=function(e){var t,n=e.propertyList;return Object(j.jsx)("section",{className:"listing-container",children:(t=n,null===t?Object(j.jsx)("div",{}):t.listings.map((function(e){return Object(j.jsx)(x,{title:e.title.en,image:e.image,price:(t=e.price,"\u20ac".concat(Intl.NumberFormat().format(t)))},e._id);var t})))})},v=function(e){var t=e.searchPlace;return Object(j.jsx)("div",{className:"loading",children:"Loading homes in ".concat(t,"...")})},g="Berlin",N="https://wunderflats-frontend-challenge-api.glitch.me/listings",y="ERROR_IN_FETCH",w="SUCCESS_IN_FETCH",L="Something went wrong",E="Please retry by clicking the button below",k="Try again",C={title:"Homes in ".concat(g),descrption:"More than 200 homes found",buttonName:"Reload results"};function T(){return(T=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.next=4,fetch(N,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:if(200!==(n=e.sent).status){e.next=9;break}return e.next=8,n.json();case 8:t=e.sent;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error while fetching the list ".concat(e.t0));case 14:return e.prev=14,e.abrupt("return",t);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))).apply(this,arguments)}function S(e){(function(){return T.apply(this,arguments)})().then((function(t){var n="",c=null;null===t?n=y:(n=w,c=t),e({type:n,payload:c})}))}var I={isLoaded:!1,propertyList:null,error:!1},R=function(e,t){switch(t.type){case w:return Object(d.a)(Object(d.a)({},e),{},{isLoaded:!0,propertyList:t.payload,error:!1});case y:return Object(d.a)(Object(d.a)({},e),{},{isLoaded:!0,propertyList:null,error:!0});default:return e}};function _(){var e=Object(c.useReducer)(R,I),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){return S(r),function(){}}),[]),Object(j.jsx)("div",{children:n.isLoaded?Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsx)(b,{titleText:n.error?L:C.title,titleDescription:n.error?E:C.descrption,buttonName:n.error?k:C.buttonName,dispatch:r}),Object(j.jsx)(O,{propertyList:n.propertyList})]}):Object(j.jsx)("div",{className:"main-container",children:Object(j.jsx)(v,{searchPlace:g})})})}var B=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsx)(_,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.90a7f2d9.chunk.js.map