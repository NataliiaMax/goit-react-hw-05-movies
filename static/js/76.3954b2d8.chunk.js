"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{2403:function(t,e,n){n.d(e,{Df:function(){return i},Dw:function(){return p},fh:function(){return l},m2:function(){return h},yo:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),s=n(3263),u=n(7596),o="067705c909e37a633e5abed845a3422c",i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 3:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(e,"&language=en-US"));case 3:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),u.Am.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n=t.sent,r=n.data.cast,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o,"&page=1&language='en-US'"));case 3:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},8076:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(9439),a=n(2791),c=n(7689),s=n(2403),u={castList:"Cast_castList__ARoWn",castItem:"Cast_castItem__-Jcfe",castImg:"Cast_castImg__T4WbF",castConteinerText:"Cast_castConteinerText__PmRrE"},o=n(6359),i=n(184),p=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],p=e[1],l=(0,c.UO)().id;return(0,a.useEffect)((function(){l&&(0,s.yo)(l).then(p)}),[l]),(0,i.jsx)("div",{className:u.castWrapper,children:(0,i.jsx)("ul",{className:u.castList,children:null===n||void 0===n?void 0:n.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return(0,i.jsxs)("li",{className:u.castItem,children:[(0,i.jsx)("img",{className:u.castImg,src:a?"https://image.tmdb.org/t/p/w500/".concat(a):o,alt:n,width:"100"}),(0,i.jsxs)("div",{className:u.castConteinerText,children:[(0,i.jsx)("p",{children:n}),(0,i.jsxs)("p",{children:["Character: ",r]})]})]},e)}))})})}},6359:function(t,e,n){t.exports=n.p+"static/media/notFoundImage.ee75b81b64ce001f06a2.jpg"}}]);
//# sourceMappingURL=76.3954b2d8.chunk.js.map