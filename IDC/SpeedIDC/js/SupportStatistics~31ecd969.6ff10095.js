(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SupportStatistics~31ecd969"],{"02ad":function(t,e,r){},"057f":function(t,e,r){var n=r("fc6a"),a=r("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return a(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?c(t):a(n(t))}},"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3");var n=r("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1dde":function(t,e,r){var n=r("d039"),a=r("b622"),i=r("2d00"),o=a("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2909:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("6b75");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=r("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return a(t)||i(t)||Object(o["a"])(t)||c()}},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,a=r("69f3"),i=r("7dd0"),o="String Iterator",c=a.set,s=a.getterFor(o);i(String,"String",(function(t){c(this,{type:o,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,a=e.index;return a>=r.length?{value:void 0,done:!0}:(t=n(r,a),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),a=r("7b0b"),i=r("9bdd"),o=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,l,f,d,p,b=a(t),h="function"==typeof this?this:Array,g=arguments.length,v=g>1?arguments[1]:void 0,m=void 0!==v,y=u(b),S=0;if(m&&(v=n(v,g>2?arguments[2]:void 0,2)),void 0==y||h==Array&&o(y))for(e=c(b.length),r=new h(e);e>S;S++)p=m?v(b[S],S):b[S],s(r,S,p);else for(f=y.call(b),d=f.next,r=new h;!(l=d.call(f)).done;S++)p=m?i(f,v,[l.value,S],!0):l.value,s(r,S,p);return r.length=S,r}},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},"746f":function(t,e,r){var n=r("428f"),a=r("5135"),i=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});a(e,t)||o(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),a=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?a.f(t,o,i(0,r)):t[o]=r}},"841c":function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("1d80"),o=r("129f"),c=r("14c3");n("search",1,(function(t,e,r){return[function(e){var r=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=a(t),s=String(this),u=i.lastIndex;o(u,0)||(i.lastIndex=0);var l=c(i,s);return o(i.lastIndex,u)||(i.lastIndex=u),null===l?-1:l.index}]}))},a4d3:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("d066"),o=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),d=r("e8b5"),p=r("861d"),b=r("825a"),h=r("7b0b"),g=r("fc6a"),v=r("c04e"),m=r("5c6c"),y=r("7c73"),S=r("df75"),w=r("241c"),O=r("057f"),_=r("7418"),k=r("06cf"),j=r("9bf2"),x=r("d1e7"),A=r("9112"),L=r("6eeb"),C=r("5692"),z=r("f772"),T=r("d012"),$=r("90e3"),I=r("b622"),P=r("e538"),E=r("746f"),D=r("d44e"),N=r("69f3"),J=r("b727").forEach,R=z("hidden"),F="Symbol",H="prototype",M=I("toPrimitive"),B=N.set,Q=N.getterFor(F),U=Object[H],W=a.Symbol,q=i("JSON","stringify"),G=k.f,K=j.f,V=O.f,X=x.f,Y=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),rt=C("wks"),nt=a.QObject,at=!nt||!nt[H]||!nt[H].findChild,it=c&&l((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=G(U,e);n&&delete U[e],K(t,e,r),n&&t!==U&&K(U,e,n)}:K,ot=function(t,e){var r=Y[t]=y(W[H]);return B(r,{type:F,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},st=function(t,e,r){t===U&&st(Z,e,r),b(t);var n=v(e,!0);return b(r),f(Y,n)?(r.enumerable?(f(t,R)&&t[R][n]&&(t[R][n]=!1),r=y(r,{enumerable:m(0,!1)})):(f(t,R)||K(t,R,m(1,{})),t[R][n]=!0),it(t,n,r)):K(t,n,r)},ut=function(t,e){b(t);var r=g(e),n=S(r).concat(bt(r));return J(n,(function(e){c&&!ft.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===U&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,R)&&this[R][e])||r)},dt=function(t,e){var r=g(t),n=v(e,!0);if(r!==U||!f(Y,n)||f(Z,n)){var a=G(r,n);return!a||!f(Y,n)||f(r,R)&&r[R][n]||(a.enumerable=!0),a}},pt=function(t){var e=V(g(t)),r=[];return J(e,(function(t){f(Y,t)||f(T,t)||r.push(t)})),r},bt=function(t){var e=t===U,r=V(e?Z:g(t)),n=[];return J(r,(function(t){!f(Y,t)||e&&!f(U,t)||n.push(Y[t])})),n};if(s||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),r=function(t){this===U&&r.call(Z,t),f(this,R)&&f(this[R],e)&&(this[R][e]=!1),it(this,e,m(1,t))};return c&&at&&it(U,e,{configurable:!0,set:r}),ot(e,t)},L(W[H],"toString",(function(){return Q(this).tag})),L(W,"withoutSetter",(function(t){return ot($(t),t)})),x.f=ft,j.f=st,k.f=dt,w.f=O.f=pt,_.f=bt,P.f=function(t){return ot(I(t),t)},c&&(K(W[H],"description",{configurable:!0,get:function(){return Q(this).description}}),o||L(U,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:W}),J(S(rt),(function(t){E(t)})),n({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:l((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(h(t))}}),q){var ht=!s||l((function(){var t=W();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,a=[t],i=1;while(arguments.length>i)a.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),a[1]=e,q.apply(null,a)}})}W[H][M]||A(W[H],M,W[H].valueOf),D(W,F),T[R]=!0},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:a})},ce18:function(t,e,r){"use strict";var n=r("02ad"),a=r.n(n);a.a},d28b:function(t,e,r){var n=r("746f");n("iterator")},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,i=r("1dde"),o=r("ae40"),c=i("map"),s=o("map");n({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("e260"),o=r("9112"),c=r("b622"),s=c("iterator"),u=c("toStringTag"),l=i.values;for(var f in a){var d=n[f],p=d&&d.prototype;if(p){if(p[s]!==l)try{o(p,s,l)}catch(h){p[s]=l}if(p[u]||o(p,u,f),a[f])for(var b in i)if(p[b]!==i[b])try{o(p,b,i[b])}catch(h){p[b]=i[b]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),o=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),l=i.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var p=d.prototype=l.prototype;p.constructor=d;var b=p.toString,h="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=b.call(t);if(o(f,t))return"";var r=h?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e859:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("h5",{staticClass:"mt-0"},[t._v("统计各工单处理人处理的工单数量及评分情况，默认统计当前月数据，可通过查询获取更多信息")]),r("div",{staticClass:"search_box mt-10 mb-20"},[r("el-date-picker",{style:{width:"300px"},attrs:{size:"small",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"timestamp"},on:{clear:t.resetSearch},model:{value:t.dateSelect,callback:function(e){t.dateSelect=e},expression:"dateSelect"}}),r("el-button",{attrs:{type:"primary",size:"small",loading:t.searchLoading},on:{click:t.searchHandle}},[t._v("查询")]),r("el-button",{attrs:{size:"small",loading:t.resetLoading},on:{click:t.resetSearch}},[t._v("重置")])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"sort-change":t.sortChange}},[r("div",{attrs:{slot:"empty"},slot:"empty"},[!t.tableData.length&&t.tableLoading?r("span",[r("i",{staticClass:"el-icon-loading"}),t._v(" 正在加载 ... ")]):t._e(),t.tableData.length||t.tableLoading?t._e():r("span",[t._v("暂无数据")])]),r("el-table-column",{attrs:{prop:"user_login",label:"处理人"}}),r("el-table-column",{attrs:{prop:"ticket_count",label:"处理工单数",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[t._v(" "+t._s(r.ticket_close)+"/"+t._s(r.ticket_count)+" ")]}}])}),r("el-table-column",{attrs:{prop:"ticket_star_sum",label:"总分",sortable:""}}),r("el-table-column",{attrs:{prop:"ticket_star_1",label:"1分",align:"center",width:"75",sortable:""}}),r("el-table-column",{attrs:{prop:"ticket_star_2",label:"2分",align:"center",width:"75",sortable:""}}),r("el-table-column",{attrs:{prop:"ticket_star_3",label:"3分",align:"center",width:"75",sortable:""}}),r("el-table-column",{attrs:{prop:"ticket_star_4",label:"4分",align:"center",width:"75",sortable:""}}),r("el-table-column",{attrs:{prop:"ticket_star_5",label:"5分",align:"center",width:"75",sortable:""}})],1),r("el-pagination",{staticClass:"mt-10",attrs:{"current-page":t.search.page,"page-sizes":[10,15,20,25,50,100],"page-size":t.search.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.getTicketStatistics,"update:currentPage":function(e){return t.$set(t.search,"page",e)},"update:current-page":function(e){return t.$set(t.search,"page",e)},"update:pageSize":function(e){return t.$set(t.search,"limit",e)},"update:page-size":function(e){return t.$set(t.search,"limit",e)}}})],1)},a=[],i=(r("d81d"),r("a9e3"),r("ac1f"),r("841c"),r("96cf"),r("1da1")),o=r("2909"),c=r("a27e");function s(t){return Object(c["a"])({url:"ticket_statistics",params:t})}var u={data:function(){return{tableLoading:!1,resetLoading:!1,searchLoading:!1,tableData:[],search:{page:1,limit:Number(localStorage.getItem("limit"))||50,order:"id",sort:"desc",start:0,end:0},total:0,dateSelect:[]}},created:function(){this.getTicketStatistics()},mounted:function(){},methods:{searchHandle:function(){var t,e,r=(this.dateSelect||[]).map((function(t){return t/1e3}));r.length?(t=Object(o["a"])(r),this.search.start=t[0],this.search.end=t[1]):(e=[0,0],this.search.start=e[0],this.search.end=e[1]),this.getTicketStatistics()},handleSizeChange:function(t){this.search.page=1,this.getTicketStatistics()},sortChange:function(t,e,r){this.search.order=t.prop,this.search.sort="ascending"===t.order?"asc":"desc",this.getTicketStatistics()},resetSearch:function(){this.resetLoading=!0,Object.assign(this.search,this.$options.data().search),this.dateSelect=this.$options.data().dateSelect,this.getTicketStatistics()},getTicketStatistics:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tableLoading=!0,t.searchLoading=!0,e.next=4,s(t.search);case 4:if(r=e.sent,n=r.data,200===n.status){e.next=12;break}return t.$message.error(n.msg),t.searchLoading=!1,t.resetLoading=!1,t.tableLoading=!1,e.abrupt("return");case 12:t.tableData=n.data.list,t.searchLoading=!1,t.resetLoading=!1,t.tableLoading=!1;case 16:case"end":return e.stop()}}),e)})))()}},computed:{},watch:{}},l=u,f=(r("ce18"),r("2877")),d=Object(f["a"])(l,n,a,!1,null,"73abbf27",null);e["default"]=d.exports},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),o=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),l=r("b622"),f=r("1dde"),d=r("ae40"),p=f("slice"),b=d("slice",{ACCESSORS:!0,0:0,1:2}),h=l("species"),g=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!p||!b},{slice:function(t,e){var r,n,l,f=s(this),d=c(f.length),p=o(t,d),b=o(void 0===e?d:e,d);if(i(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return g.call(f,p,b);for(n=new(void 0===r?Array:r)(v(b-p,0)),l=0;p<b;p++,l++)p in f&&u(n,l,f[p]);return n.length=l,n}})}}]);