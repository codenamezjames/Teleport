(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4afc61d1"],{"00f0":function(t,e){function r(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}t.exports=r},"2f21":function(t,e,r){"use strict";var n=r("79e5");t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},"386d":function(t,e,r){"use strict";var n=r("cb7c"),o=r("83a1"),i=r("5f1b");r("214f")("search",1,function(t,e,r,a){return[function(r){var n=t(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,n):new RegExp(r)[e](String(n))},function(t){var e=a(r,t,this);if(e.done)return e.value;var s=n(t),c=String(this),u=s.lastIndex;o(u,0)||(s.lastIndex=0);var l=i(s,c);return o(s.lastIndex,u)||(s.lastIndex=u),null===l?-1:l.index}]})},5121:function(t,e){function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}t.exports=r},"55dd":function(t,e,r){"use strict";var n=r("5ca1"),o=r("d8e8"),i=r("4bf8"),a=r("79e5"),s=[].sort,c=[1,2,3];n(n.P+n.F*(a(function(){c.sort(void 0)})||!a(function(){c.sort(null)})||!r("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),o(t))}})},8027:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{attrs:{padding:""}},[r("div",{staticClass:"row items-end q-col-gutter-lg"},[r("div",{staticClass:"col"},[r("q-input",{attrs:{label:"Search"},model:{value:t.query.search,callback:function(e){t.$set(t.query,"search",e)},expression:"query.search"}})],1),r("div",{staticClass:"col-auto"},[r("q-btn",{attrs:{color:"primary",label:"Search"},on:{click:function(e){return t.runSearch()}}})],1)]),r("div",{staticClass:"q-pa-lg flex flex-center"},[r("q-pagination",{attrs:{max:t.pages,maxPages:9,directionLinks:!0},model:{value:t.query.page,callback:function(e){t.$set(t.query,"page",e)},expression:"query.page"}})],1),r("div",{staticClass:"row q-col-gutter-md q-mt-lg"},t._l(t.movies,function(e){return r("div",{key:e.id,staticClass:"col-xs-12 col-sm-4 col-md-3 col-lg-2 col-xl-1"},[r("q-card",[r("q-card-section",[r("q-img",{style:e.scary?"filter: blur(20px);":"",attrs:{src:e.medium_cover_image,ratio:4/6,"placeholder-src":e.small_cover_image}})],1),r("q-card-section",[r("div",{staticClass:"text-body1 text-bold"},[t._v("\n            "+t._s(e.title)+"\n          ")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("strong",[t._v("Rating")]),t._v(": "+t._s(e.rating)+"\n            ")])]),r("div",{staticClass:"row q-col-gutter-md"},[r("div",{staticClass:"col"},[r("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"fas fa-eye"},on:{click:function(t){e.scary=!e.scary}}})],1),r("div",{staticClass:"col"},[e.yt_trailer_code?r("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"fas fa-play"},on:{click:function(r){return t.showYoutube(e)}}}):t._e()],1),r("div",{staticClass:"col"},[r("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"fas fa-magnet"},on:{click:function(r){return t.open(e.magLink)}}})],1)])])],1)],1)}),0),r("div",{staticClass:"q-pa-lg flex flex-center"},[r("q-pagination",{attrs:{max:t.pages,maxPages:9,directionLinks:!0},model:{value:t.query.page,callback:function(e){t.$set(t.query,"page",e)},expression:"query.page"}})],1),r("q-dialog",{attrs:{size:"md"},model:{value:t.showYoutubeDialog,callback:function(e){t.showYoutubeDialog=e},expression:"showYoutubeDialog"}},[r("q-card",{staticStyle:{"min-width":"700px","max-width":"80vw",height:"500px","max-height":"80vh"}},[r("q-bar",{staticClass:"flex justify-between bg-primary text-white"},[r("div",[t._v("\n            "+t._s(t.showYoutubeMovie.title)+"\n          ")]),r("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:function(e){t.showYoutubeDialog=!1}}})],1),t.showYoutubeMovie.yt_trailer_code?r("q-video",{staticStyle:{height:"calc(100% - 32px)"},attrs:{src:"https://www.youtube.com/embed/"+t.showYoutubeMovie.yt_trailer_code+"?rel=0"}}):t._e()],1)],1)],1)},o=[],i=(r("6762"),r("2fdb"),r("3c93")),a=r.n(i),s=(r("55dd"),r("386d"),r("deb5")),c=r.n(s),u=(r("96cf"),r("f44b")),l=r.n(u),f=(r("ac6a"),r("cadf"),r("8e72")),d=r.n(f),p=(r("7f7f"),r("28a5"),r("6b54"),Object.prototype.toString),h=Object.prototype.hasOwnProperty,m={};function v(t){return null===t?String(t):m[p.call(t)]||"object"}function g(t){if(!t||"object"!==v(t))return!1;if(t.constructor&&!h.call(t,"constructor")&&!h.call(t.constructor.prototype,"isPrototypeOf"))return!1;var e;for(e in t);return void 0===e||h.call(t,e)}function y(){var t,e,r,n,o,i,a=arguments[0]||{},s=1,c=arguments.length,u=!1;for("boolean"===typeof a&&(u=a,a=arguments[1]||{},s=2),Object(a)!==a&&"function"!==v(a)&&(a={}),c===s&&(a=this,s--);s<c;s++)if(null!==(t=arguments[s]))for(e in t)r=a[e],n=t[e],a!==n&&(u&&n&&(g(n)||(o="array"===v(n)))?(o?(o=!1,i=r&&"array"===v(r)?r:[]):i=r&&g(r)?r:{},a[e]=y(u,i,n)):void 0!==n&&(a[e]=n));return a}"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(function(t){m["[object "+t+"]"]=t.toLowerCase()});var b={name:"PageIndex",data:function(){return{query:y(!0,{search:null,page:1,limit:48},this.$route.query),showYoutubeDialog:!1,showYoutubeMovie:{},movieCount:0,trackers:["udp://open.demonii.com:1337/announce","udp://tracker.openbittorrent.com:80","udp://tracker.coppersurfer.tk:6969","udp://glotorrents.pw:6969/announce","udp://tracker.opentrackr.org:1337/announce","udp://torrent.gresille.org:80/announce","udp://p4p.arenabg.com:1337","udp://tracker.leechers-paradise.org:6969"],torrentBase:"magnet:?xt=urn:btih:TORRENT_HASH&dn=MOVIE_NAME",dontShowGenres:["horror"],moviesData:null}},computed:{movies:function(){return this.moviesData||d()(Array(this.query.limit).keys())},pages:function(){return Math.ceil(this.movieCount/this.query.limit)}},created:function(){var t=l()(c.a.mark(function t(){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.runSearch();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{showYoutube:function(t){this.showYoutubeDialog=!0,this.showYoutubeMovie=t},open:function(t){window.open(t,"_self")},runSearch:function(){var t=l()(c.a.mark(function t(){var e,r,n=this;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("https://yts.am/api/v2/list_movies.json",{params:{query_term:this.query.search,page:this.query.page,limit:this.query.limit}});case 2:e=t.sent,r=e.data.data,this.limit=r.limit,this.movieCount=r.movie_count,this.moviesData=r.movies.map(function(t){var e=t.torrents.sort(function(t,e){return t.size_bytes-e.size_bytes})[0];return a()({},t,{scary:t.genres.some(function(t){return n.dontShowGenres.includes(t.toLowerCase())}),magLink:"magnet:?xt=urn:btih:".concat(e.hash,"&dn=").concat(encodeURIComponent(t.title),"&tr=").concat(n.trackers.join("&tr="))})});case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},watch:{"query.page":function(){this.$router.push({name:"movies",query:{query_term:this.query.search,page:this.query.page,limit:this.query.limit}}),this.runSearch()}}},w=b,q=r("2877"),x=Object(q["a"])(w,n,o,!1,null,null,null);e["default"]=x.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8e72":function(t,e,r){var n=r("00f0"),o=r("b6b4"),i=r("5121");function a(t){return n(t)||o(t)||i()}t.exports=a},b6b4:function(t,e){function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}t.exports=r}}]);