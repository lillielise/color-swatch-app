(this["webpackJsonpcolor-swatches"]=this["webpackJsonpcolor-swatches"]||[]).push([[0],{13:function(e,t,a){"use strict";var n=a(6),r=a(0),_=a.n(r),o=a(2),c=a(7),l=(a(29),function(e){return _.a.createElement("div",{className:"content-container"},e.currentColors.map((function(t,a){return _.a.createElement(o.b,{key:a,id:e.detailsView?"swatch-detail-view":"",className:"swatches",to:{pathname:"/details",state:{comingFromSelected:!0,colorSelected:t}}},_.a.createElement("div",{className:"color-display",style:{backgroundColor:"".concat(t)}}),_.a.createElement("p",{className:"color-name"},t))})))});a(35);var i=function(e){var t,a,n=(null===(t=e.location)||void 0===t?void 0:null===(a=t.state)||void 0===a?void 0:a.comingFromSelected)?[e.location.state.colorSelected]:[function(){var t=Math.floor(Math.random()*e.colors.length);return e.colors[t]}()];return _.a.createElement("div",{className:"detail-view-container"},_.a.createElement(l,{id:"swatch-detail-view",detailsView:!0,currentColors:n}),_.a.createElement(o.b,{id:"clear-button",onClick:function(){return e.callback()},to:{pathname:"/",state:{comingFromClear:!0}}},"Clear"))},u=(a(36),function(e){return _.a.createElement("div",{className:"top-nav"},_.a.createElement("h1",null,"Color Swatches"),_.a.createElement("input",{id:"search-button",type:"text",placeholder:"Search",onChange:function(t){if("/details"!==window.location.pathname){var a=t.target.value,n=[];e.originalHexColors.forEach((function(e){e.includes(a)&&n.push(e)})),e.callback(n)}},onKeyPress:function(e){if("Enter"===e.key){var t=e.target.value;!0===function(e){return/^#(?:[0-9a-fA-F]{6})$/.test(e)}(t)?p.push({pathname:"/details",state:{comingFromSelected:!0,colorSelected:t}}):alert("Please Enter a Valid Hex Code example: #03badd")}}}))}),s=a(21),E=(a(38),function(e){for(var t=[],a=Math.ceil(e.totalColors/e.colorsPerPage),o=Object(r.useState)(1),c=Object(n.a)(o,2),l=c[0],i=c[1],u=0;u<a;u++)t.push(u+1);return t.length&&!t.includes(l)&&(i(1),e.paginate(1)),t.length&&!t.includes(l)&&(i(1),e.paginate(1)),_.a.createElement("nav",null,_.a.createElement("ul",{id:"page-numbers"},t.map((function(t){return _.a.createElement("li",{id:l===t?"current-page":"",className:"page-number",key:t,onClick:function(){e.paginate(t),i(t)}},t)}))))});var m=function(e){var t=Object(r.useState)(1),a=Object(n.a)(t,2),o=a[0],c=a[1],i=Object(r.useState)(12),u=Object(n.a)(i,1)[0],s=o*u,m=s-u,d=e.colors.slice(m,s);return _.a.createElement("div",null,_.a.createElement(l,{currentColors:d}),_.a.createElement(E,{colorsPerPage:u,totalColors:e.colors.length,paginate:function(e){c(e)}}))};function d(e){var t=0,a=0,n=0;4===e.length?(t="0x"+e[1]+e[1],a="0x"+e[2]+e[2],n="0x"+e[3]+e[3]):7===e.length&&(t="0x"+e[1]+e[2],a="0x"+e[3]+e[4],n="0x"+e[5]+e[6]),t/=255,a/=255,n/=255;var r=Math.min(t,a,n),_=Math.max(t,a,n),o=_-r,c=0,l=0;return c=0===o?0:_===t?(a-n)/o%6:_===a?(n-t)/o+2:(t-a)/o+4,(c=Math.round(60*c))<0&&(c+=360),l=(_+r)/2,[c,+(100*(0===o?0:o/(1-Math.abs(2*l-1)))).toFixed(1),l=+(100*l).toFixed(1)]}function O(e){var t,a=d(e)[0],n=d(e)[1],r=d(e)[2];return(a>=0&&a<=5||a>340)&&n>50&&r>20&&r<60&&(t="red"),a>=50&&a<=70&&n>50&&r>20&&r<60&&(t="yellow"),a>=110&&a<=130&&n>50&&r>20&&r<60&&(t="green"),a>=170&&a<=190&&n>50&&r>20&&r<60&&(t="cyan"),a>=230&&a<=250&&n>50&&r>20&&r<60&&(t="blue"),a>=290&&a<=310&&n>50&&r>20&&r<60&&(t="magenta"),t}a(39);var f=a(22),M=a.n(f);a.d(t,"b",(function(){return p}));var p=M()();t.a=function(e){var t=function(){for(var e=[0,1,2,3,4,5,5,7,8,9,"a","b","c","d","e","f"],t=[],a={};t.length<300;){for(var n="#";n.length<7;)n+=e[Math.floor(Math.random()*e.length)];t.includes(n)||(t.push(n),a[O(n)]?a[O(n)].push(n):void 0!==O(n)&&(a[O(n)]=[n]))}return[t,a]}(),a=Object(r.useState)(t[0]),l=Object(n.a)(a,1)[0],E=Object(r.useState)(t[1]),d=Object(n.a)(E,1)[0],f=Object(r.useState)(l),M=Object(n.a)(f,2),P=M[0],C=M[1];function D(){C(l)}function h(e){C(e)}return e.comingFromClear&&C(l),_.a.createElement("div",{id:"main-container"},_.a.createElement(o.a,null,_.a.createElement(c.b,{history:p},_.a.createElement(u,{callback:h,originalHexColors:l}),_.a.createElement(s.a,{callback:h,originalColorObject:d}),_.a.createElement(c.c,null,_.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return _.a.createElement(m,Object.assign({},e,{colors:P}))}}),_.a.createElement(c.a,{exact:!0,path:"/details",render:function(e){return _.a.createElement(i,Object.assign({},e,{callback:D,colors:P}))}})))))}},21:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_SideNav_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(37),_SideNav_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_SideNav_css__WEBPACK_IMPORTED_MODULE_2__),_App__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),SideNav=function SideNav(props){function updateColors(colorFamily){props.callback(eval("props.originalColorObject.".concat(colorFamily)))}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"side-nav"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"side-nav-list"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.b,{to:{pathname:"/details",state:{comingFromSelected:!1}},id:"random-color-button"},"Random Color"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.b,{onClick:function(){return updateColors("red")},to:{pathname:"/",state:{comingFromSelected:!1}}},"Red"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.b,{onClick:function(){return updateColors("yellow")},to:{pathname:"/",state:{comingFromSelected:!1}}},"Yellow"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.b,{onClick:function(){return updateColors("green")},to:{pathname:"/",state:{comingFromSelected:!1}}},"Green"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.b,{onClick:function(){return updateColors("cyan")},to:{pathname:"/",state:{comingFromSelected:!1}}},"Cyan"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.b,{onClick:function(){return updateColors("blue")},to:{pathname:"/",state:{comingFromSelected:!1}}},"Blue"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.b,{onClick:function(){return updateColors("magenta")},to:{pathname:"/",state:{comingFromSelected:!1}}},"Magenta"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"side-nav-mobile"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"side-nav-list"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.b,{to:{pathname:"/details",state:{comingFromSelected:!1}},id:"random-color-button"},"Random Color"))))};__webpack_exports__.a=SideNav},23:function(e,t,a){e.exports=a(43)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),_=a(18),o=a.n(_),c=(a(28),a(13));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.fc2de095.chunk.js.map