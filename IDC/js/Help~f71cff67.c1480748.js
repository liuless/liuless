(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Help~f71cff67"],{"741b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news layout_card"},[a("div",{staticClass:"breadcrumb"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[a("i",{staticClass:"iconfont icon-wodegongdan"}),t._v(" "+t._s(t.$t("helpContent.pageTitle"))+" ")])],1)],1),a("div",{staticClass:"page-title"},[t._v(t._s(t.$t("helpContent.pageTitle")))]),a("div",[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:t.$t("helpContent.helpList"),name:"first"}},[a("el-row",{staticClass:"bigBox"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"cloud_server_info"},[a("div",{staticClass:"server_info_box"},[a("div",{staticClass:"info_box_tab"},[a("ul",t._l(t.typeArray,(function(e){return a("li",{key:e.id,on:{click:function(a){return t.getTypeList(e.id)}}},[a("span",{class:t.activeType===e.id?"box_tab_bottom":"",attrs:{title:e.title}},[t._v(t._s(e.title))])])})),0)])])])]),a("el-col",{attrs:{span:18,offset:2}},[a("el-table",{staticStyle:{width:"100%"},attrs:{height:t.$height-400,data:t.tableData,"header-row-class-name":"innerTableHeader","row-class-name":"innerTableRowClass","cell-class-name":"innerTableCellClass"}},[a("div",{attrs:{slot:"empty"},slot:"empty"},[!t.tableData.length&&t.tableLoading?a("span",[a("i",{staticClass:"el-icon-loading"}),t._v(" 正在加载 ... ")]):t._e(),t.tableData.length||t.tableLoading?t._e():a("span",[t._v("暂无数据")])]),a("el-table-column",{attrs:{prop:"title",label:t.$t("helpContent.helpTitle")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[a("el-link",{on:{click:function(a){return t.goToHelp(e.row)}}},[t._v(t._s(e.row.title))])],1)]}}])}),a("el-table-column",{attrs:{prop:"push_time",label:t.$t("helpContent.tableCreateTime"),width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(""===e.row.push_time?"-":t.$moment(1e3*e.row.push_time).format("YYYY-MM-DD HH:mm:ss"))+" ")])]}}])})],1),a("div",{staticClass:"news_pagination"},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage,layout:" total,sizes,prev,pager,next",total:t.total,"prev-text":t.$t("Previous"),"next-text":t.$t("Nextpage"),"page-size":t.limit,"page-sizes":[10,15,20,25],"pager-count":5},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)],1)],1)],1)])},r=[],i=(a("96cf"),a("1da1")),s=a("c1be"),l={metaInfo:function(){return{title:this.$t("helpContent.pageTitle"),htmlAttrs:{lang:this.$t("htmlAttrs.lang"),amp:!0}}},data:function(){return{activeName:"first",activeType:"",typeArray:[],tableData:[],total:0,currentPage:1,limit:20}},methods:{getTypeFunc:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,r,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={parent_id:2},e.next=3,Object(s["c"])(a);case 3:if(n=e.sent,r=n.data,200===r.status){if(null!==r.data&&""!==r.data){for(t.activeType=r.data[0].id,i=[],l=0;l<r.data.length;l++)i.push(r.data[l]);t.typeArray=i}}else t.$message.error(r.data.msg);t.getData();case 7:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tableLoading=!0,a={parent_id:t.activeType,page:t.currentPage,limit:t.limit},e.next=4,Object(s["b"])(a);case 4:n=e.sent,r=n.data,200!==r.status?(t.$message.error(r.msg),t.tableLoading=!1):(t.tableData=r.data.list,t.total=r.data.count,t.tableLoading=!1);case 7:case"end":return e.stop()}}),e)})))()},getTypeList:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.activeType=t,e.currentPage=1,e.getData();case 3:case"end":return a.stop()}}),a)})))()},handleCurrentChange:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.currentPage=t,n={parent_id:e.activeType,page:e.currentPage,limit:e.limit},a.next=4,Object(s["b"])(n);case 4:if(r=a.sent,i=r.data,200===i.status){a.next=8;break}return a.abrupt("return",!1);case 8:e.tableData=i.data.list;case 9:case"end":return a.stop()}}),a)})))()},handleSizeChange:function(t){this.limit=t,this.getData()},goToHelp:function(t){this.$router.push({name:"HelpDetails",query:{id:t.id}})}},created:function(){this.getTypeFunc()}},c=l,o=(a("8172"),a("2877")),u=Object(o["a"])(c,n,r,!1,null,"649a890e",null);e["default"]=u.exports},8172:function(t,e,a){"use strict";var n=a("ed74"),r=a.n(n);r.a},c1be:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return s}));var n=a("a27e");function r(t){return Object(n["a"])({url:"/news/catelist",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/news/list",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/news/content",params:{id:t}})}},ed74:function(t,e,a){}}]);