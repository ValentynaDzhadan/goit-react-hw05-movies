"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[676],{378:function(e,t,r){r.d(t,{Df:function(){return i},TP:function(){return p},tx:function(){return l},z8:function(){return v},zv:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(912),o="ecf1e97b02d331ed89fab73e637afa61",s="http://api.themoviedb.org/3",i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},639:function(e,t,r){r.d(t,{a:function(){return u}});var n=r(691),a="Loader_loaderContainer__UDDYf",c=r(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},810:function(e,t,r){r.d(t,{$:function(){return s}});var n=r(861),a=r(439),c=r(757),u=r.n(c),o=r(791),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=(0,o.useState)(null),c=(0,a.Z)(r,2),s=c[0],i=c[1],p=(0,o.useState)(!1),f=(0,a.Z)(p,2),l=f[0],v=f[1],h=(0,o.useState)(!1),d=(0,a.Z)(h,2),b=d[0],g=d[1];return(0,o.useEffect)((function(){if(e||t.length){var r=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),t.next=4,e();case 4:r=t.sent,i(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),g(!0);case 11:return t.prev=11,v(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();r()}}),t),{data:s,isError:b,isLoading:l}}},676:function(e,t,r){r.r(t),r.d(t,{Cast:function(){return f}});var n=r(378),a=r(810),c=r(683),u=r(184),o=function(e){var t=e.character,r=e.name,n=e.profile_path;return(0,u.jsxs)("li",{children:[n&&(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n),alt:r}),(0,u.jsx)("h2",{children:r}),(0,u.jsxs)("span",{children:["Character: ",t]})]})},s=function(e){var t=e.cast;return(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)(o,(0,c.Z)({},e),e.id)}))})},i=r(639),p=r(689),f=function(){console.log("Cast");var e=(0,p.UO)().movieId,t=(0,a.$)((function(){return(0,n.zv)(e)}),[e]),r=t.data,c=t.isError,o=t.isLoading;return c?(0,u.jsx)("p",{children:"Error"}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Movie Cast"}),o?(0,u.jsx)(i.a,{}):r&&(0,u.jsx)(s,{cast:r})]})}},683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=676.464c00b7.chunk.js.map