"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[233],{2403:function(e,t,n){n.d(t,{Df:function(){return u},Dw:function(){return l},fh:function(){return p},m2:function(){return v},yo:function(){return d}});var r=n(5861),a=n(7757),s=n.n(a),c=n(3263),i=n(7596),o="067705c909e37a633e5abed845a3422c",u=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 3:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US"));case 3:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),i.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,r=n.data.cast,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&page=1&language='en-US'"));case 3:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},7233:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(9439),a="MoviesDetails_backText__IXhyn",s="MoviesDetails_addInfoWrapper__u+9aq",c="MoviesDetails_addInfoTitle__CnyOC",i="MoviesDetails_addInfoList__XC1qH",o="MoviesDetails_addInfoItem__smPYL",u="MoviesDetails_active__btt5F",l="MoviesDetails_inActive__gRcFX",p=n(2791),d=n(1087),v=n(7689),f=n(2403),h="InfoMovy_detailsWrapper__jMPVw",_="InfoMovy_detailsInnerWrapper__NXNI0",m="InfoMovy_detailsWrapperImg__v-i0N",x="InfoMovy_detailsImg__qA-hC",g="InfoMovy_detailsWrapperInfo__VTRLc",j="InfoMovy_detailsTitle__VA4j0",b="InfoMovy_detailsSpan__bHDcU",w="InfoMovy_detailsText__praFs",y=n(6359),N=n(184),I=function(e){var t=e.movie,n=t.title,r=t.poster_path,a=t.vote_average,s=t.overview,c=t.genres,i=t.release_date;return(0,N.jsx)("div",{className:h,children:(0,N.jsxs)("div",{className:_,children:[(0,N.jsx)("div",{className:m,children:(0,N.jsx)("img",{className:x,src:function(e){return null==e?y:"https://image.tmdb.org/t/p/w300".concat(e)}(r),alt:n,width:"300"})}),(0,N.jsxs)("div",{className:g,children:[(0,N.jsxs)("h1",{className:j,children:[n," ",(0,N.jsxs)("span",{className:b,children:["(","".concat(null===i||void 0===i?void 0:i.slice(0,4)),")"]})]}),(0,N.jsxs)("p",{className:w,children:[(0,N.jsx)("b",{children:" User score:"})," ",Math.round(a/10*100),"%"]}),(0,N.jsxs)("p",{className:w,children:[(0,N.jsx)("b",{children:"Overview:"})," ",s]}),(0,N.jsxs)("p",{className:w,children:[(0,N.jsx)("b",{children:"Genres:"})," ",null===c||void 0===c?void 0:c.map((function(e){return e.name})).join("/")]})]})]})})},k=function(){var e,t,n=(0,p.useState)([]),h=(0,r.Z)(n,2),_=h[0],m=h[1],x=(0,v.UO)().id,g=(0,v.TH)();if((0,p.useEffect)((function(){(0,f.fh)(x).then(m)}),[x]),x)return(0,N.jsxs)("div",{children:[(0,N.jsx)(d.rU,{to:null!==(e=null===(t=g.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",state:g,children:(0,N.jsx)("p",{className:a,children:"Go back"})}),_&&(0,N.jsx)(I,{movie:_}),(0,N.jsxs)("div",{className:s,children:[(0,N.jsx)("h2",{className:c,children:"Additional information"}),(0,N.jsxs)("ul",{className:i,children:[(0,N.jsx)("li",{className:o,children:(0,N.jsx)(d.OL,{to:"cast",className:function(e){var t=e.isActive;return"".concat(t?u:l)},children:"Cast"})}),(0,N.jsx)("li",{className:o,children:(0,N.jsx)(d.OL,{to:"reviews",className:function(e){var t=e.isActive;return"".concat(t?u:l)},children:"Reviews"})})]})]}),(0,N.jsx)(p.Suspense,{fallback:(0,N.jsx)("p",{children:"Please Wait"}),children:(0,N.jsx)(v.j3,{})})]})}},6359:function(e,t,n){e.exports=n.p+"static/media/notFoundImage.ee75b81b64ce001f06a2.jpg"}}]);
//# sourceMappingURL=233.7d1de536.chunk.js.map