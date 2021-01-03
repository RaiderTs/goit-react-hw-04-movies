(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(77),i=a(65),r=a(1),c=a(0),o=a(3),s=a(11),u=a(66),l=a(112),g=a(78),m=a(109),p=Object(m.a)({root:{margin:"30px",display:"flex",justifyContent:"center","& .MuiPaginationItem-page.Mui-selected, & .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible,  & .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible":{backgroundColor:"#f7de03"},"& .MuiPaginationItem-root":{color:"#000000"},"& .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible":{opacity:"0.7"},"& .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible":{opacity:"1"},"& .MuiPagination-ul":{justifyContent:"center"}}}),d=a(18),f=a(82),j=a(89),b=a.n(j);function h(){var e,t=Object(o.i)().url,a=Object(c.useState)([]),m=Object(i.a)(a,2),j=m[0],h=m[1],O=Object(c.useState)({}),v=Object(i.a)(O,2),_=v[0],E=v[1],x=Object(c.useState)(g.a.PENDING),P=Object(i.a)(x,2),M=P[0],N=P[1],w=Object(c.useState)(0),y=Object(i.a)(w,2),k=y[0],I=y[1],S=Object(o.g)(),D=Object(o.f)(),C=p(),L=null!==(e=new URLSearchParams(S.search).get("page"))&&void 0!==e?e:1;return Object(c.useEffect)((function(){N(g.a.PENDING),Object(u.f)(L).then((function(e){var t=e.results,a=e.total_pages;h(t),I(a),N(g.a.RESOLVED)})).catch((function(e){E("Something went wrong. Try again."),N(g.a.REJECTED)}))}),[L]),M===g.a.PENDING?Object(r.jsx)(d.a,{}):M===g.a.REJECTED?Object(r.jsx)(f.a,{message:_.message}):M===g.a.RESOLVED?Object(r.jsx)(r.Fragment,{children:j&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:b.a.title,children:"Trending today"}),Object(r.jsx)("ul",{className:b.a.list,children:j.map((function(e){return Object(r.jsx)("li",{className:b.a.item,children:Object(r.jsxs)(s.b,{to:"".concat(t,"movies/").concat(e.id),className:b.a.link,children:[Object(r.jsx)("img",{className:b.a.image,src:u.a+e.poster_path,alt:e.title,width:"300",height:"450"}),Object(r.jsx)("p",{className:b.a.filmTitle,children:e.title})]})},e.id)}))}),k>1&&Object(r.jsx)(l.a,{className:C.root,count:10,onChange:function(e,t){D.push(Object(n.a)(Object(n.a)({},S),{},{search:"page=".concat(t)}))},page:Number(L),showFirstButton:!0,showLastButton:!0,size:"large",shape:"rounded",variant:"outlined"})]})}):void 0}},66:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"f",(function(){return g})),a.d(t,"e",(function(){return m})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return f}));var n=a(73),i=a.n(n),r=a(75),c="https://api.themoviedb.org/3",o="98821d28938ee5f201a6b9b7afe95fef",s="https://image.tmdb.org/t/p/w500";function u(){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(i.a.mark((function e(){var t,a,n,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,a);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return u("".concat(c,"/trending/movie/day?api_key=").concat(o,"&page=").concat(e))}function m(e){return u("".concat(c,"/search/movie?api_key=").concat(o,"&query=").concat(e))}function p(e){return u("".concat(c,"/movie/").concat(e,"?api_key=").concat(o))}function d(e){return u("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(o))}function f(e){return u("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(o))}},78:function(e,t,a){"use strict";t.a={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},80:function(e,t,a){e.exports={ErrorWrapper:"ErrorMovies_ErrorWrapper__3s5E9",text:"ErrorMovies_text__2tA6L"}},82:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(1),i=a.p+"static/media/\u2014Pngtree\u2014red gradient ring fork symbol_4609561.1589bf7d.png",r=a(80),c=a.n(r);var o=function(e){var t=e.message;return Object(n.jsxs)("div",{role:"alert",className:c.a.errorWrapper,children:[Object(n.jsx)("img",{src:i,width:"650",alt:"Error"}),Object(n.jsxs)("p",{text:t,className:c.a.text,children:["Sorry, something went wrong. Error: ",t]})]})}},89:function(e,t,a){e.exports={title:"HomePage_title__US0pS",list:"HomePage_list__1GWjW",item:"HomePage_item__SiILw",link:"HomePage_link__2Z9qG",image:"HomePage_image__2XJNC",filmTitle:"HomePage_filmTitle__3-3Mu"}}}]);
//# sourceMappingURL=HomePage.7e186ade.chunk.js.map