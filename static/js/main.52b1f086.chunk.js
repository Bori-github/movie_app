(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{58:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(29),i=s.n(c),r=s(8),o=s(2),l=s(18),j=s.n(l),m=s(30),u=s(11),d=s(12),b=s(14),h=s(13),p=s(31),v=s.n(p),O=(s(58),s(1));var x=function(e){var t=e.id,s=e.year,n=e.title,a=e.title_long,c=e.summary,i=e.poster,o=e.genres;return Object(O.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:n,title_long:a,summary:c,poster:i,genres:o}},children:Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:i,alt:n,title:n}),Object(O.jsxs)("div",{className:"movie__info",children:[Object(O.jsx)("h3",{className:"movie__title",children:n}),Object(O.jsx)("h5",{className:"movie__year",children:s}),Object(O.jsx)("ul",{className:"genres",children:o.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[c.slice(0,180),"..."]})]})]})})},_=(s(65),function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(j.a.mark((function t(){var s,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:s.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,title_long:e.title_long,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component)),f=_;s(66);var g=function(){return Object(O.jsxs)("div",{className:"about__container",children:[Object(O.jsx)("p",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(O.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},y=(s(67),function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(O.jsxs)("div",{className:"detail__container",children:[Object(O.jsx)("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),Object(O.jsxs)("div",{className:"detail__info",children:[Object(O.jsx)("h3",{className:"detail__title",children:e.state.title_long}),Object(O.jsx)("ul",{className:"detail__genres",children:e.state.genres.map((function(e,t){return Object(O.jsx)("li",{children:e},t)}))}),Object(O.jsx)("p",{className:"detail__summary",children:e.state.summary})]})]}):null}}]),s}(a.a.Component)),N=y;s(68);var w=function(){return Object(O.jsxs)("nav",{className:"nav",children:[Object(O.jsx)(r.b,{to:"/",children:"Home"}),Object(O.jsx)(r.b,{to:"/about",children:"About"})]})};var k=function(){return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(w,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(o.a,{path:"/about",component:g}),Object(O.jsx)(o.a,{path:"/movie/:id",component:N})]})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.52b1f086.chunk.js.map