(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["08eae86c"],{a763:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col",staticStyle:{"max-width":"320px"}},[e.show.image?a("q-img",{attrs:{src:e.base+e.show.image}}):e._e()],1),a("div",{staticClass:"col"},[a("div",{staticClass:"text-h4"},[e._v("\n        "+e._s(e.show.name)+"\n      ")]),a("div",{staticClass:"text-body1"},[e._v("\n        "+e._s(e.show.description)+"\n      ")])])]),a("q-table",{staticClass:"full-width",attrs:{"binary-state-sort":"",flat:"",data:e.show.episodes,columns:e.columns,"row-key":"uid",loading:e.loading,pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-left",fn:function(){return[a("q-btn",{class:{spin:e.loading},attrs:{disabled:e.loading,color:"primary",icon:"fas fa-sync",size:"sm",round:""},on:{click:e.refresh}}),a("q-tooltip",[e._v("Get new show data")])]},proxy:!0},{key:"body-cell-sizes",fn:function(t){return[a("q-td",{staticStyle:{width:"100%"}},[a("div",{staticClass:"row q-col-gutter-sm no-wrap"},e._l(t.row.sizes,function(t){return a("div",{key:t.mag,staticClass:"col-auto"},[a("q-btn",{attrs:{dense:"",type:"a",href:t.mag,flat:"",icon:"fas fa-magnet"}}),a("q-tooltip",[e._v("\n              "+e._s(t.size)+"\n            ")])],1)}),0)])]}}])})],1)},n=[],i=a("deb5"),r=a.n(i),o=(a("96cf"),a("f44b")),l=a.n(o),c=a("e975"),d=a.n(c),p={created:function(){var e=l()(r.a.mark(function e(){var t,a,s;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$route.params,a=t.id,s=t.title,e.next=3,this.$store.dispatch("data/getShow",{id:a,title:s});case 3:this.show=e.sent,this.loading=!1;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),data:function(){return{pagination:{sortBy:"seasonEp",descending:!1,page:1,rowsPerPage:50},base:"https://eztv.io",loading:!0,show:{episodes:[]},columns:[{name:"seasonEp",required:!0,label:"Season Episode",align:"left",field:"seasonEp",sortable:!0,sort:d.a},{name:"name",required:!0,label:"Name",align:"left",field:"name",sortable:!0},{name:"sizes",label:"",align:"left",field:"sizes",sortable:!0,sort:d.a},{name:"released",label:"Released",align:"left",field:"released",sortable:!0,sort:d.a},{name:"seeds",label:"Seeds",align:"left",field:"seeds",sortable:!0,sort:d.a}]}},methods:{refresh:function(){var e=l()(r.a.mark(function e(){var t,a,s;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,t=this.$route.params,a=t.id,s=t.title,e.next=4,this.$store.dispatch("data/getShow",{id:a,title:s,force:!0});case 4:this.show=e.sent,this.loading=!1;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},u=p,f=a("2877"),h=Object(f["a"])(u,s,n,!1,null,"6222db05",null);t["default"]=h.exports},e975:function(e,t){e.exports=function e(t,a){"use strict";var s,n,i=/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,r=/(^[ ]*|[ ]*$)/g,o=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,l=/^0x[0-9a-f]+$/i,c=/^0/,d=function(t){return e.insensitive&&(""+t).toLowerCase()||""+t},p=d(t).replace(r,"")||"",u=d(a).replace(r,"")||"",f=p.replace(i,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),h=u.replace(i,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),w=parseInt(p.match(l),16)||1!==f.length&&p.match(o)&&Date.parse(p),g=parseInt(u.match(l),16)||w&&u.match(o)&&Date.parse(u)||null;if(g){if(w<g)return-1;if(w>g)return 1}for(var m=0,b=Math.max(f.length,h.length);m<b;m++){if(s=!(f[m]||"").match(c)&&parseFloat(f[m])||f[m]||0,n=!(h[m]||"").match(c)&&parseFloat(h[m])||h[m]||0,isNaN(s)!==isNaN(n))return isNaN(s)?1:-1;if(typeof s!==typeof n&&(s+="",n+=""),s<n)return-1;if(s>n)return 1}return 0}}}]);