"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936,854],{2403:function(e,t,r){r.d(t,{Df:function(){return i},Dw:function(){return l},fh:function(){return p},m2:function(){return m},yo:function(){return h}});var n=r(5861),a=r(7757),c=r.n(a),o=r(3263),s=r(7596),u="067705c909e37a633e5abed845a3422c",i=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u));case 3:return t=e.sent,r=t.data.results,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(t,"&language=en-US"));case 3:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),s.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return r=e.sent,n=r.data.cast,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u,"&page=1&language='en-US'"));case 3:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},854:function(e,t,r){r.r(t);var n=r(643),a=r(184);t.default=function(){return(0,a.jsx)(n.Z1,{height:"100",width:"100",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})}},4936:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(9439),a={homePageName:"Home_homePageName__9S4ee",homePageList:"Home_homePageList__ZIxn+",homePageItem:"Home_homePageItem__93hyh",homePageLink:"Home_homePageLink__7MXWy",homePageTitle:"Home_homePageTitle__twyYJ"},c=r(1087),o=r(7689),s=r(2791),u=r(2403),i=r(854),l=r(184),p=function(){var e=(0,s.useState)([]),t=(0,n.Z)(e,2),r=t[0],p=t[1],h=(0,o.TH)();return(0,s.useEffect)((function(){(0,u.Df)().then(p)}),[]),(0,l.jsxs)("div",{className:a.homePageContainer,children:[(0,l.jsx)("h1",{className:a.homePageName,children:"Trending today"}),!r&&(0,l.jsx)(i.default,{}),r&&(0,l.jsx)("ul",{className:a.homePageList,children:r.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return(0,l.jsx)("li",{className:a.homePageItem,children:(0,l.jsxs)(c.rU,{to:"/movies/".concat(t),state:h,className:a.homePageLink,children:[(0,l.jsx)("h4",{className:a.homePageTitle,children:r}),(0,l.jsx)("img",{className:a.homePageImage,src:"https://image.tmdb.org/t/p/w780".concat(n),alt:r,width:"200"})]})},t)}))})]})}}}]);
//# sourceMappingURL=936.528ebe7f.chunk.js.map