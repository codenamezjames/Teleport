(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["af7ffb98"],{"00f0":function(t,e){function r(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}t.exports=r},"386d":function(t,e,r){"use strict";var n=r("cb7c"),a=r("83a1"),o=r("5f1b");r("214f")("search",1,function(t,e,r,i){return[function(r){var n=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,n):new RegExp(r)[e](String(n))},function(t){var e=i(r,t,this);if(e.done)return e.value;var s=n(t),c=String(this),u=s.lastIndex;a(u,0)||(s.lastIndex=0);var l=o(s,c);return a(s.lastIndex,u)||(s.lastIndex=u),null===l?-1:l.index}]})},5121:function(t,e){function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}t.exports=r},8027:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{attrs:{padding:""}},[r("div",{staticClass:"row items-end q-col-gutter-lg"},[r("div",{staticClass:"col"},[r("q-input",{attrs:{label:"Search"},model:{value:t.query.search,callback:function(e){t.$set(t.query,"search",e)},expression:"query.search"}})],1),r("div",{staticClass:"col-auto"},[r("q-btn",{attrs:{color:"primary",label:"Search"},on:{click:function(e){return t.runSearch()}}})],1)]),r("div",{staticClass:"q-pa-lg flex flex-center"},[r("q-pagination",{attrs:{max:t.pages,maxPages:9,directionLinks:!0},model:{value:t.query.page,callback:function(e){t.$set(t.query,"page",e)},expression:"query.page"}})],1),r("div",{staticClass:"row q-col-gutter-md q-mt-lg"},t._l(t.movies,function(e){return r("div",{key:e.id,staticClass:"col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-1"},[r("q-card",[r("q-card-section",[r("q-img",{style:e.scary?"filter: blur(20px);":"",attrs:{src:e.medium_cover_image,ratio:4/6,"placeholder-src":e.small_cover_image}})],1),r("q-card-section",[r("div",{staticClass:"text-body1 text-bold"},[t._v("\n            "+t._s(e.title)+"\n          ")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("strong",[t._v("Rating")]),t._v(": "+t._s(e.rating)+"\n            ")])]),r("div",{staticClass:"row q-col-gutter-md"},[r("div",{staticClass:"col"},[r("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"fas fa-eye"},on:{click:function(t){e.scary=!e.scary}}})],1),r("div",{staticClass:"col"},[e.yt_trailer_code?r("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"fas fa-play"},on:{click:function(r){return t.showYoutube(e)}}}):t._e()],1),r("div",{staticClass:"col"},[r("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"fas fa-magnet"},on:{click:function(r){return t.open(e.magLink)}}})],1)])])],1)],1)}),0),r("div",{staticClass:"q-pa-lg flex flex-center"},[r("q-pagination",{attrs:{max:t.pages,maxPages:9,directionLinks:!0},model:{value:t.query.page,callback:function(e){t.$set(t.query,"page",e)},expression:"query.page"}})],1),r("q-dialog",{attrs:{size:"md"},model:{value:t.showYoutubeDialog,callback:function(e){t.showYoutubeDialog=e},expression:"showYoutubeDialog"}},[r("q-card",{staticStyle:{"min-width":"700px","max-width":"80vw",height:"500px","max-height":"80vh"}},[r("q-bar",{staticClass:"flex justify-between bg-primary text-white"},[r("div",[t._v("\n            "+t._s(t.showYoutubeMovie.title)+"\n          ")]),r("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:function(e){t.showYoutubeDialog=!1}}})],1),t.showYoutubeMovie.yt_trailer_code?r("q-video",{staticStyle:{height:"calc(100% - 32px)"},attrs:{src:"https://www.youtube.com/embed/"+t.showYoutubeMovie.yt_trailer_code+"?rel=0"}}):t._e()],1)],1)],1)},a=[],o=(r("6762"),r("2fdb"),r("3c93")),i=r.n(o),s=(r("55dd"),r("386d"),r("deb5")),c=r.n(s),u=(r("96cf"),r("f44b")),l=r.n(u),p=(r("ac6a"),r("cadf"),r("8e72")),d=r.n(p),f=(r("7f7f"),r("28a5"),r("6b54"),Object.prototype.toString),h=Object.prototype.hasOwnProperty,m={};function g(t){return null===t?String(t):m[f.call(t)]||"object"}function v(t){if(!t||"object"!==g(t))return!1;if(t.constructor&&!h.call(t,"constructor")&&!h.call(t.constructor.prototype,"isPrototypeOf"))return!1;var e;for(e in t);return void 0===e||h.call(t,e)}function b(){var t,e,r,n,a,o,i=arguments[0]||{},s=1,c=arguments.length,u=!1;for("boolean"===typeof i&&(u=i,i=arguments[1]||{},s=2),Object(i)!==i&&"function"!==g(i)&&(i={}),c===s&&(i=this,s--);s<c;s++)if(null!==(t=arguments[s]))for(e in t)r=i[e],n=t[e],i!==n&&(u&&n&&(v(n)||(a="array"===g(n)))?(a?(a=!1,o=r&&"array"===g(r)?r:[]):o=r&&v(r)?r:{},i[e]=b(u,o,n)):void 0!==n&&(i[e]=n));return i}"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(function(t){m["[object "+t+"]"]=t.toLowerCase()});var y={name:"PageIndex",data:function(){return{query:b(!0,{search:null,page:1,limit:48},this.$route.query),showYoutubeDialog:!1,showYoutubeMovie:{},movieCount:0,trackers:["udp://open.demonii.com:1337/announce","udp://tracker.openbittorrent.com:80","udp://tracker.coppersurfer.tk:6969","udp://glotorrents.pw:6969/announce","udp://tracker.opentrackr.org:1337/announce","udp://torrent.gresille.org:80/announce","udp://p4p.arenabg.com:1337","udp://tracker.leechers-paradise.org:6969"],torrentBase:"magnet:?xt=urn:btih:TORRENT_HASH&dn=MOVIE_NAME",dontShowGenres:["horror"],moviesData:null}},computed:{movies:function(){return this.moviesData||d()(Array(this.query.limit).keys())},pages:function(){return Math.ceil(this.movieCount/this.query.limit)}},created:function(){var t=l()(c.a.mark(function t(){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.runSearch();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{showYoutube:function(t){this.showYoutubeDialog=!0,this.showYoutubeMovie=t},open:function(t){window.open(t,"_self")},runSearch:function(){var t=l()(c.a.mark(function t(){var e,r,n=this;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("https://yts.am/api/v2/list_movies.json",{params:{query_term:this.query.search,page:this.query.page,limit:this.query.limit}});case 2:e=t.sent,r=e.data.data,this.limit=r.limit,this.movieCount=r.movie_count,this.moviesData=r.movies.map(function(t){var e=t.torrents.sort(function(t,e){return t.size_bytes-e.size_bytes})[0];return i()({},t,{scary:(t.genres||[]).some(function(t){return n.dontShowGenres.includes(t.toLowerCase())}),magLink:"magnet:?xt=urn:btih:".concat(e.hash,"&dn=").concat(encodeURIComponent(t.title),"&tr=").concat(n.trackers.join("&tr="))})});case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},watch:{"query.page":function(){this.$router.push({name:"movies",query:{query_term:this.query.search,page:this.query.page,limit:this.query.limit}}),this.runSearch()}}},w=y,q=r("2877"),x=Object(q["a"])(w,n,a,!1,null,null,null);e["default"]=x.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8e72":function(t,e,r){var n=r("00f0"),a=r("b6b4"),o=r("5121");function i(t){return n(t)||a(t)||o()}t.exports=i},b6b4:function(t,e){function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}t.exports=r}}]);