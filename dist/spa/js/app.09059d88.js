(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"1b68":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getTvList",function(){return R});var a={};n.r(a),n.d(a,"SET_TV_LIST",function(){return Y}),n.d(a,"UPDATE_TV_SHOW",function(){return Z});var i={};n.r(i),n.d(i,"getTvShowList",function(){return de}),n.d(i,"getShow",function(){return he});var o=n("deb5"),s=n.n(o),u=(n("96cf"),n("f44b")),c=n.n(u),p=(n("7d6e"),n("e54f"),n("573e"),n("1b68"),n("7e6d"),n("2b0e")),d=n("b05d"),f=n("4d5a"),h=n("9898"),l=n("f09f"),v=n("d847"),m=n("6ac0"),b=n("24e8"),w=n("a370"),g=n("3b16"),x=n("f2cc"),y=n("068f"),Q=n("27f9"),S=n("c7a0"),T=n("2ea3"),k=n("eaac"),L=n("db86"),_=n("65c6"),E=n("05c0"),q=n("6ac5"),z=n("9c40"),V=n("0016"),I=n("497d"),P=n("6ab5"),B=n("033f"),C=n("e208"),M=n("714f"),$=n("7f67"),D=n("2a19");p["a"].use(d["a"],{config:{},components:{QLayout:f["a"],QHeader:h["a"],QCard:l["a"],QBar:v["a"],QVideo:m["a"],QDialog:b["a"],QCardSection:w["a"],QPagination:g["a"],QDrawer:x["a"],QImg:y["a"],QInput:Q["a"],QPageContainer:S["a"],QPage:T["a"],QTable:k["a"],QTd:L["a"],QToolbar:_["a"],QTooltip:E["a"],QToolbarTitle:q["a"],QBtn:z["a"],QIcon:V["a"],QList:I["a"],QItem:P["a"],QItemSection:B["a"],QItemLabel:C["a"]},directives:{Ripple:M["a"],ClosePopup:$["a"]},plugins:{Notify:D["a"]}});var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},j=[],A={name:"App"},H=A,J=n("2877"),N=Object(J["a"])(H,O,j,!1,null,null,null),U=N.exports,W=n("2f62"),F=n("0e44"),G={tvShowList:[]};function R(e){return e.tvShowList}n("7f7f");var K=n("51f5"),X=n.n(K);function Y(e,t){e.tvShowList=t}function Z(e,t){var n=X()(e.tvShowList,function(e){return e.name===t.name});p["a"].set(e.tvShowList,n,t)}n("28a5"),n("b54a"),n("7514");var ee=n("1157"),te=n.n(ee),ne=n("bc3a"),re=n.n(ne),ae=n("0644"),ie=n.n(ae),oe=n("c707"),se=n.n(oe),ue=te.a,ce={MB:1e3,GB:1e6};function pe(e){var t=/<body\s?[^>]*>((.|\n)*?)<\/body>/gim.exec(e);if(!t[1])throw new Error("Cant Parse Body");return"<div>".concat(t[1],"</div>")}function de(e){return fe.apply(this,arguments)}function fe(){return fe=c()(s.a.mark(function e(t){var n,r,a,i,o,u,c,p,d=arguments;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,a=d.length>1&&void 0!==d[1]&&d[1],r.tvShowList.length&&!a){e.next=12;break}return e.next=5,re()({url:"https://eztv.io/showlist/"});case 5:return i=e.sent,o=i.data,u=ue(pe(o)),c=u.find('tr[name="hover"]#1').closest("tbody").find('tr[name="hover"]'),p=c.map(function(){return{uid:Math.random(),link:ue(this).find("td:eq(0) a").attr("href"),name:ue.trim(ue(this).find("td:eq(0) a").text()),airing:ue.trim(ue(this).find("td:eq(1)").text()),rating:ue.trim(ue(this).find("td:eq(2) b").text()),votes:/(\d+)/g.exec(ue.trim(ue(this).find("td:eq(2) span").text()))[0]}}).get(),n("SET_TV_LIST",p),e.abrupt("return",r.tvShowList);case 12:return e.abrupt("return",r.tvShowList);case 13:case"end":return e.stop()}},e)})),fe.apply(this,arguments)}function he(e,t){return le.apply(this,arguments)}function le(){return le=c()(s.a.mark(function e(t,n){var r,a,i,o,u,c,p,d,f,h,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,a=t.state,i=n.id,o=n.title,u=n.force,u=!0,c="/shows/".concat(i,"/").concat(o,"/"),p=ie()(a.tvShowList.filter(function(e){return e.link===c})[0]),p.episodes&&!u){e.next=19;break}return e.next=8,re()({url:"https://eztv.io".concat(c)});case 8:return d=e.sent,f=d.data,h=ue(pe(f)),l=h.find('.forum_thread_header:contains("Episode Name")').closest("tbody").find('tr[name="hover"]'),p.image=h.find(".show_info_main_logo img").attr("src"),p.description=ue.trim(h.find('[itemprop="description"]:eq(0)').text()),p.episodes=l.map(function(){var e=ue.trim(ue(this).find("td:eq(1)").text()),t=ue.trim(ue(this).find("td:eq(3)").text()),n=t.split(" "),r=+n[0]*+ce[n[1]],a=/(\d{1,2}).+?(\d{1,2})/gim.exec(e),i=+a[1],o=+a[2],s="S".concat(("0"+i).slice(-2),"E").concat(("0"+o).slice(-2));return{uid:Math.random(),name:e,sizes:[{bytes:r,size:t,mag:ue(this).find("td:eq(2) .magnet").attr("href")}],released:ue.trim(ue(this).find("td:eq(4)").text()),seeds:ue.trim(ue(this).find("td:eq(5)").text()),seasonEp:s,season:i,episode:o}}).get().reduce(function(e,t,n,r){var a=X()(e,{seasonEp:t.seasonEp});return-1===a?e.push(t):(e[a].sizes.push({bytes:t.sizes[0].bytes,size:t.sizes[0].size,mag:t.sizes[0].mag}),e[a].sizes=se()(e[a].sizes,["bytes"])),e},[]),p.episodes=se()(p.episodes,["season","episode"]),p.episodes=p.episodes.reduce(function(e,t,n,r){var a=r[n-1];if(a){var i=a.episode-t.episode;i<-1&&e.push({uid:Math.random(),name:"Missing Episode",sizes:[],seasonEp:"S".concat(("0"+t.season).slice(-2),"E").concat(("0"+(t.episode-1)).slice(-2))})}return e.push(t),e},[]),r("UPDATE_TV_SHOW",p),e.abrupt("return",p);case 19:return e.abrupt("return",p);case 20:case"end":return e.stop()}},e)})),le.apply(this,arguments)}var ve={namespaced:!0,getters:r,mutations:a,actions:i,state:G};p["a"].use(W["a"]);var me=function(){var e=new W["a"].Store({plugins:[Object(F["a"])({paths:["data"]})],modules:{data:ve},strict:!1});return e},be=n("8c4f"),we=n("4328"),ge=n.n(we);function xe(e){if(/^(\d+|\d*\.\d+)$/.test(e))return parseFloat(e);var t={true:!0,false:!1,null:null,undefined:void 0};return e in t?t[e]:e}var ye=[{path:"/",redirect:"/movies"},{path:"/",component:function(){return n.e("2d22c0ff").then(n.bind(null,"f241"))},children:[{name:"movies",path:"/movies",component:function(){return n.e("af7ffb98").then(n.bind(null,"8027"))}},{name:"tv",path:"tv",component:function(){return n.e("090fdd80").then(n.bind(null,"7a10"))}},{name:"tv-show",path:"tv/shows/:id/:title",component:function(){return n.e("08eae86c").then(n.bind(null,"a763"))}}]}];ye.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var Qe=ye;p["a"].use(be["a"]);var Se=function(){var e=new be["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:Qe,parseQuery:function(e){return ge.a.parse(e,{decoder:xe})},stringifyQuery:function(e){var t=ge.a.stringify(e);return t?"?"+t:""},mode:"hash",base:""});return e},Te=function(){var e="function"===typeof me?me({Vue:p["a"]}):me,t="function"===typeof Se?Se({Vue:p["a"],store:e}):Se;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(U)}};return{app:n,store:e,router:t}},ke=function(){var e=c()(s.a.mark(function e(t){var n;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=re.a;case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Le=function(){var e=c()(s.a.mark(function e(t){var n;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$jQuery=te.a;case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),_e=Te(),Ee=_e.app,qe=_e.store,ze=_e.router;function Ve(){return Ie.apply(this,arguments)}function Ie(){return Ie=c()(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=[ke,Le],n=0;case 2:if(!(n<t.length)){e.next=20;break}if("function"===typeof t[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,t[n]({app:Ee,router:ze,store:qe,Vue:p["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new p["a"](Ee);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),Ie.apply(this,arguments)}Ve()},"7e6d":function(e,t,n){}},[[0,"runtime","vendor"]]]);