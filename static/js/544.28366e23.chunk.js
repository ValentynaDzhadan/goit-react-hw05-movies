"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{378:function(e,r,t){t.d(r,{Df:function(){return s},TP:function(){return p},tx:function(){return l},z8:function(){return v},zv:function(){return f}});var n=t(861),c=t(757),a=t.n(c),o=t(912),u="ecf1e97b02d331ed89fab73e637afa61",i="http://api.themoviedb.org/3",s=function(){var e=(0,n.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"/movie/").concat(r,"?api_key=").concat(u,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"/movie/").concat(r,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"/movie/").concat(r,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(r));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},639:function(e,r,t){t.d(r,{a:function(){return o}});var n=t(691),c="Loader_loaderContainer__UDDYf",a=t(184),o=function(){return(0,a.jsx)("div",{className:c,children:(0,a.jsx)(n.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},431:function(e,r,t){t.d(r,{O:function(){return i}});var n=t(683),c=t(87),a=t(689),o=t(184),u=function(e){var r=e.id,t=e.title,n=(0,a.TH)();return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{state:{from:n},to:"/movies/".concat(r),children:(0,o.jsx)("h3",{children:t})})})},i=function(e){var r=e.movies;return(0,o.jsx)("ul",{children:r.map((function(e){return(0,o.jsx)(u,(0,n.Z)({},e),e.id)}))})}},810:function(e,r,t){t.d(r,{$:function(){return i}});var n=t(861),c=t(439),a=t(757),o=t.n(a),u=t(791),i=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=(0,u.useState)(null),a=(0,c.Z)(t,2),i=a[0],s=a[1],p=(0,u.useState)(!1),f=(0,c.Z)(p,2),l=f[0],v=f[1],d=(0,u.useState)(!1),h=(0,c.Z)(d,2),b=h[0],g=h[1];return(0,u.useEffect)((function(){if(e||r.length){var t=function(){var r=(0,n.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,v(!0),r.next=4,e();case 4:t=r.sent,s(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),g(!0);case 11:return r.prev=11,v(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();t()}}),r),{data:i,isError:b,isLoading:l}}},544:function(e,r,t){t.r(r),t.d(r,{Home:function(){return i}});var n=t(378),c=t(639),a=t(810),o=t(431),u=t(184),i=function(){console.log("Home");var e=(0,a.$)(n.Df),r=e.data,t=e.isError,i=e.isLoading;return t?(0,u.jsx)("p",{children:"Error"}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Trending Movies"}),i?(0,u.jsx)(c.a,{}):r&&(0,u.jsx)(o.O,{movies:r})]})}},683:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.d(r,{Z:function(){return a}})}}]);
//# sourceMappingURL=544.28366e23.chunk.js.map