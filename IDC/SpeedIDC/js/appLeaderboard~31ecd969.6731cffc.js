(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appLeaderboard~31ecd969"],{"0b91":function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"e",(function(){return r})),a.d(e,"d",(function(){return n})),a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return l}));var s=a("a27e");function i(t){return Object(s["a"])({url:"app_store",params:t})}function r(t){return Object(s["a"])({url:"app_store/ranking_list",params:t})}function n(){return Object(s["a"])({url:"app_store/my_apps"})}function c(t){return Object(s["a"])({url:"app_store/favorite",params:t})}function l(t){return Object(s["a"])({url:"app_store/favorite/app/".concat(t),method:"delete"})}},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1e9d":function(t,e,a){t.exports=a.p+"img/leaderboard01.7a92f014.png"},"4de40":function(t,e,a){"use strict";var s=a("c74b"),i=a.n(s);i.a},"4f7c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"leaderboard"},[s("div",{staticClass:"leaderboard_title"},[t.isPhone?t._l(t.titleOptions,(function(e,a){return s("div",{key:a,staticClass:"phone_title_name"},[s("span",{class:{activeText:t.activeText===e.value},on:{click:function(a){t.activeText=e.value}}},[t._v(t._s(e.label))])])})):[s("div",{staticClass:"leaderboard_title_left"},[s("span",{staticClass:"title_name"},[t._v("总榜")]),s("span",{staticClass:"title_time"},[t._v("最后更新："+t._s(t.$moment().format("YYYY-MM-DD"))+" 10:00")])]),s("div",{staticClass:"leaderboard_title_center"},[s("span",{staticClass:"title_name"},[t._v("付费榜")]),s("span",{staticClass:"title_time"},[t._v("最后更新："+t._s(t.$moment().format("YYYY-MM-DD"))+" 10:00")])]),s("div",{staticClass:"leaderboard_title_right"},[s("span",{staticClass:"title_name"},[t._v("免费榜")]),s("span",{staticClass:"title_time"},[t._v("最后更新："+t._s(t.$moment().format("YYYY-MM-DD"))+" 10:00")])])]],2),s("div",{staticClass:"list_wrapper"},[1===t.activeText||4===t.activeText?s("div",{staticClass:"all_list"},t._l(t.pageData.total,(function(e,i){return s("div",{key:i,staticClass:"app_item_box"},[s("div",{staticClass:"item_box_left"},[t.isMiniPhone?[0===i?s("span",{staticClass:"rankingNumber",staticStyle:{color:"#f86465"}},[t._v("1")]):1===i?s("span",{staticClass:"rankingNumber",staticStyle:{color:"#f86465"}},[t._v("2")]):2===i?s("span",{staticClass:"rankingNumber",staticStyle:{color:"#f86465"}},[t._v("3")]):s("span",{staticClass:"rankingNumber"},[t._v(t._s(parseInt(i)+1))])]:[0===i?s("img",{attrs:{src:a("1e9d"),alt:""}}):1===i?s("img",{attrs:{src:a("5c30"),alt:""}}):2===i?s("img",{attrs:{src:a("51f6"),alt:""}}):s("span",{staticClass:"rankingNumber"},[t._v(t._s(parseInt(i)+1))])]],2),s("div",{staticClass:"app_item ",on:{click:function(a){return t.goInner(e.id)}}},[s("div",{staticClass:"app_item_wrapper"},[s("div",{staticClass:"app_item_left"},[s("el-image",{staticClass:"cursor-pointer",style:{width:"54px",height:"54px"},attrs:{src:e.icon[0],fit:"contain"}},[s("div",{staticClass:"flexc fz-12 color-999 w-100 h-100",staticStyle:{color:"#999"},attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("加载中...")]),s("div",{staticClass:"flexc fz-12 color-999 w-100 h-100",staticStyle:{color:"#999"},attrs:{slot:"error"},slot:"error"},[t._v("加载中...")])])],1),s("div",{staticClass:"app_item_center"},[s("span",{staticClass:"app_item_name"},[t._v(t._s(e.name))]),s("span",[s("el-rate",{attrs:{disabled:"","void-icon-class":"el-icon-star-on",colors:["#ffa000","#ffa000","#ffa000"],"void-color":"#e6e8f0","disabled-void-color":"#e6e8f0"},model:{value:e.app_score,callback:function(a){t.$set(e,"app_score",a)},expression:"item.app_score"}})],1)]),"free"===e.pay_type?s("div",{staticClass:"app_item_right"},[t._v(" "+t._s(e.pay_type_zh)+" ")]):s("div",{staticClass:"app_item_right"},[t._v(" "+t._s(e.currency.prefix)+" "+t._s(e.product_price)+" "+t._s(e.billingcycle_zh?"/"+e.billingcycle_zh:"")+" ")])]),s("div",{staticClass:"app_item_text"},[t._v(" "+t._s(e.info)+" ")])])])})),0):t._e(),2===t.activeText||4===t.activeText?s("div",{staticClass:"paid_list"},[t.pageLoading?s("Loading"):t._e(),t._l(t.pageData.charge,(function(e,i){return s("div",{key:i,staticClass:"app_item_box"},[s("div",{staticClass:"item_box_left"},[t.isMiniPhone?[0===i?s("span",{staticClass:"rankingNumber",staticStyle:{color:"#f86465"}},[t._v("1")]):1===i?s("span",{staticClass:"rankingNumber",staticStyle:{color:"#f86465"}},[t._v("2")]):2===i?s("span",{staticClass:"rankingNumber",staticStyle:{color:"#f86465"}},[t._v("3")]):s("span",{staticClass:"rankingNumber"},[t._v(t._s(parseInt(i)+1))])]:[0===i?s("img",{attrs:{src:a("1e9d"),alt:""}}):1===i?s("img",{attrs:{src:a("5c30"),alt:""}}):2===i?s("img",{attrs:{src:a("51f6"),alt:""}}):s("span",{staticClass:"rankingNumber"},[t._v(t._s(parseInt(i)+1))])]],2),s("div",{staticClass:"app_item ",on:{click:function(a){return t.goInner(e.id)}}},[s("div",{staticClass:"app_item_wrapper"},[s("div",{staticClass:"app_item_left"},[s("el-image",{staticClass:"cursor-pointer",style:{width:"54px",height:"54px"},attrs:{src:e.icon[0],fit:"contain"}},[s("div",{staticClass:"flexc fz-12 color-999 w-100 h-100",staticStyle:{color:"#999"},attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("加载中...")]),s("div",{staticClass:"flexc fz-12 color-999 w-100 h-100",staticStyle:{color:"#999"},attrs:{slot:"error"},slot:"error"},[t._v("加载中...")])])],1),s("div",{staticClass:"app_item_center"},[s("span",{staticClass:"app_item_name"},[t._v(t._s(e.name))]),s("span",[s("el-rate",{attrs:{disabled:"","void-icon-class":"el-icon-star-on",colors:["#ffa000","#ffa000","#ffa000"],"void-color":"#e6e8f0","disabled-void-color":"#e6e8f0"},model:{value:e.app_score,callback:function(a){t.$set(e,"app_score",a)},expression:"item.app_score"}})],1)]),"free"===e.pay_type?s("div",{staticClass:"app_item_right"},[t._v(" "+t._s(e.pay_type_zh)+" ")]):s("div",{staticClass:"app_item_right"},[t._v(" "+t._s(e.currency.prefix)+" "+t._s(e.product_price)+" "+t._s(e.billingcycle_zh?"/"+e.billingcycle_zh:"")+" ")])]),s("div",{staticClass:"app_item_text"},[t._v(" "+t._s(e.info)+" ")])])])}))],2):t._e(),3===t.activeText||4===t.activeText?s("div",{staticClass:"free_list"},t._l(t.pageData.free,(function(e,i){return s("div",{key:i,staticClass:"app_item_box"},[s("div",{staticClass:"item_box_left"},[t.isMiniPhone?[0===i?s("span",{staticClass:"rankingNumber",staticStyle:{color:"#f86465"}},[t._v("1")]):1===i?s("span",{staticClass:"rankingNumber",staticStyle:{color:"#f86465"}},[t._v("2")]):2===i?s("span",{staticClass:"rankingNumber",staticStyle:{color:"#f86465"}},[t._v("3")]):s("span",{staticClass:"rankingNumber"},[t._v(t._s(parseInt(i)+1))])]:[0===i?s("img",{attrs:{src:a("1e9d"),alt:""}}):1===i?s("img",{attrs:{src:a("5c30"),alt:""}}):2===i?s("img",{attrs:{src:a("51f6"),alt:""}}):s("span",{staticClass:"rankingNumber"},[t._v(t._s(parseInt(i)+1))])]],2),s("div",{staticClass:"app_item ",on:{click:function(a){return t.goInner(e.id)}}},[s("div",{staticClass:"app_item_wrapper"},[s("div",{staticClass:"app_item_left"},[s("el-image",{staticClass:"cursor-pointer",style:{width:"54px",height:"54px"},attrs:{src:e.icon[0],fit:"contain"}},[s("div",{staticClass:"flexc fz-12 color-999 w-100 h-100",staticStyle:{color:"#999"},attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("加载中...")]),s("div",{staticClass:"flexc fz-12 color-999 w-100 h-100",staticStyle:{color:"#999"},attrs:{slot:"error"},slot:"error"},[t._v("加载中...")])])],1),s("div",{staticClass:"app_item_center"},[s("span",{staticClass:"app_item_name"},[t._v(t._s(e.name))]),s("span",[s("el-rate",{attrs:{disabled:"","void-icon-class":"el-icon-star-on",colors:["#ffa000","#ffa000","#ffa000"],"void-color":"#e6e8f0","disabled-void-color":"#e6e8f0"},model:{value:e.app_score,callback:function(a){t.$set(e,"app_score",a)},expression:"item.app_score"}})],1)]),"free"===e.pay_type?s("div",{staticClass:"app_item_right"},[t._v(" "+t._s(e.pay_type_zh)+" ")]):s("div",{staticClass:"app_item_right"},[t._v(" "+t._s(e.currency.prefix)+" "+t._s(e.product_price)+" "+t._s(e.billingcycle_zh?"/"+e.billingcycle_zh:"")+" ")])]),s("div",{staticClass:"app_item_text"},[t._v(" "+t._s(e.info)+" ")])])])})),0):t._e()])])},i=[],r=(a("ac1f"),a("841c"),a("96cf"),a("1da1")),n=a("7ac2"),c=a("0b91"),l=a("2ef0"),o={components:{Loading:n["a"]},data:function(){return{pageLoading:!1,pageData:{},isPhone:!1,isMiniPhone:!1,activeText:1,titleOptions:[{label:"总榜",value:1},{label:"付费榜",value:2},{label:"免费榜",value:3}],clientWidth:document.body.clientWidth,search:{page:1,limit:50}}},created:function(){this.getList()},mounted:function(){var t=this;window.addEventListener("resize",this.resize),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("resize",t.resize)}))},methods:{resize:l.throttle((function(){this.clientWidth=document.body.clientWidth}),200),getList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.pageLoading=!0,e.next=3,Object(c["e"])(t.search);case 3:if(a=e.sent,s=a.data,200===s.status){e.next=8;break}return t.$message.error(s.msg),e.abrupt("return");case 8:t.pageLoading=!1,t.pageData=s.data;case 10:case"end":return e.stop()}}),e)})))()},goInner:function(t){this.$router.push({name:"appInner",query:{id:t}})}},computed:{},watch:{clientWidth:{handler:function(t){this.isPhone=t<1330,this.isMiniPhone=t<600,this.activeText=t>=1330?4:1},immediate:!0}}},p=o,d=(a("4de40"),a("2877")),_=Object(d["a"])(p,s,i,!1,null,"39a521dc",null);e["default"]=_.exports},"51f6":function(t,e,a){t.exports=a.p+"img/leaderboard03.79399306.png"},"5c30":function(t,e,a){t.exports=a.p+"img/leaderboard02.856c8791.png"},"7ac2":function(t,e,a){"use strict";var s=function(t,e){var a=e._c;return a("div",{},[a("svg",{staticStyle:{margin:"auto",background:"#fff",display:"block"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[a("g",[a("circle",{attrs:{cx:"73.801",cy:"68.263",fill:"#93dbe9",r:"3"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"spline",values:"0 50 50;360 50 50",times:"0;1",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",dur:"1.4925373134328357s",begin:"0s"}})],1),a("circle",{attrs:{cx:"68.263",cy:"73.801",fill:"#689cc5",r:"3"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"spline",values:"0 50 50;360 50 50",times:"0;1",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",dur:"1.4925373134328357s",begin:"-0.062s"}})],1),a("circle",{attrs:{cx:"61.481",cy:"77.716",fill:"#5e6fa3",r:"3"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"spline",values:"0 50 50;360 50 50",times:"0;1",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",dur:"1.4925373134328357s",begin:"-0.125s"}})],1),a("circle",{attrs:{cx:"53.916",cy:"79.743",fill:"#3b4368",r:"3"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"spline",values:"0 50 50;360 50 50",times:"0;1",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",dur:"1.4925373134328357s",begin:"-0.187s"}})],1),a("circle",{attrs:{cx:"46.084",cy:"79.743",fill:"#191d3a",r:"3"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"spline",values:"0 50 50;360 50 50",times:"0;1",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",dur:"1.4925373134328357s",begin:"-0.25s"}})],1),a("circle",{attrs:{cx:"38.519",cy:"77.716",fill:"#d9dbee",r:"3"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"spline",values:"0 50 50;360 50 50",times:"0;1",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",dur:"1.4925373134328357s",begin:"-0.312s"}})],1),a("circle",{attrs:{cx:"31.737",cy:"73.801",fill:"#b3b7e2",r:"3"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"spline",values:"0 50 50;360 50 50",times:"0;1",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",dur:"1.4925373134328357s",begin:"-0.375s"}})],1),a("circle",{attrs:{cx:"26.199",cy:"68.263",fill:"#93dbe9",r:"3"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"spline",values:"0 50 50;360 50 50",times:"0;1",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",dur:"1.4925373134328357s",begin:"-0.437s"}})],1),a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"spline",values:"0 50 50;0 50 50",times:"0;1",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",dur:"1.4925373134328357s"}})],1)])])},i=[],r={name:"Loading",data:function(){return{}},methods:{},computed:{},watch:{}},n=r,c=a("2877"),l=Object(c["a"])(n,s,i,!0,null,"0d4485ce",null);e["a"]=l.exports},"841c":function(t,e,a){"use strict";var s=a("d784"),i=a("825a"),r=a("1d80"),n=a("129f"),c=a("14c3");s("search",1,(function(t,e,a){return[function(e){var a=r(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a):new RegExp(e)[t](String(a))},function(t){var s=a(e,t,this);if(s.done)return s.value;var r=i(t),l=String(this),o=r.lastIndex;n(o,0)||(r.lastIndex=0);var p=c(r,l);return n(r.lastIndex,o)||(r.lastIndex=o),null===p?-1:p.index}]}))},c74b:function(t,e,a){}}]);