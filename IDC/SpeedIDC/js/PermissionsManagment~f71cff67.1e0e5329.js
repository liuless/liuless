(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PermissionsManagment~f71cff67"],{"224c":function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return o}));var a=n("a27e");function r(){return Object(a["a"])({url:"rbac",method:"get"})}function s(){return Object(a["a"])({url:"rbac/role_page",method:"get"})}function i(t){return Object(a["a"])({url:"rbac",method:"post",data:t})}function c(t){return Object(a["a"])({url:"rbac/"+t,method:"get"})}function l(t){return Object(a["a"])({url:"rbac/edit",method:"post",data:t})}function o(t){return Object(a["a"])({url:"rbac/"+t+"/",method:"delete"})}},"42e6":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h5",{staticClass:"mt-0"},[t._v("设置管理分组可以方便的调整每个管理员/客服在后台的权限")]),n("el-button",{attrs:{size:"small",icon:"el-icon-plus",type:"success"},on:{click:t.permissionsAdd}},[t._v("添加分组")]),n("el-table",{staticClass:"mt-10",staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData.filter((function(e){return!t.search||e.name.toLowerCase().includes(t.search.toLowerCase())}))}},[n("div",{attrs:{slot:"empty"},slot:"empty"},[!t.tableData.length&&t.tableLoading?n("span",[n("i",{staticClass:"el-icon-loading"}),t._v(" 正在加载 ... ")]):t._e(),t.tableData.length||t.tableLoading?t._e():n("span",[t._v("暂无数据")])]),n("el-table-column",{attrs:{label:"ID",prop:"id",width:"70",align:"center"}}),n("el-table-column",{attrs:{label:"分组名称",prop:"name"}}),n("el-table-column",{attrs:{label:"说明",prop:"remark"}}),n("el-table-column",{attrs:{label:"状态",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(" "+t._s(1===e.row.status?"正常":"禁用")+" ")])]}}])}),n("el-table-column",{attrs:{label:"组成员",prop:"user_login"}}),n("el-table-column",{attrs:{align:"left",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"span-primary",attrs:{size:"small",type:"text",icon:"el-icon-edit",disabled:1===e.row.id},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),n("el-button",{staticClass:"span-danger",attrs:{size:"small",type:"text",icon:"el-icon-delete",disabled:1===e.row.id},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)},r=[],s=(n("96cf"),n("1da1")),i=n("224c"),c={metaInfo:{title:"分组权限"},data:function(){return{tableLoading:!1,tableData:[],search:"",dialogFormVisible:!1,seleceArray:[],addFromData:{type:[]}}},methods:{handleEdit:function(t,e){this.$router.push({name:"permissionsEdit",query:{id:e.id}})},handleDelete:function(t,e){var n=this,a=e.id;this.$confirm("是否删除该分组?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.deletePermiss(a)})).catch((function(){}))},permissionsAdd:function(){this.$router.push({name:"permissionsEdit"})},getList:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tableLoading=!0,e.next=3,Object(i["e"])();case 3:if(n=e.sent,a=n.data,200===a.status){e.next=8;break}return t.$message.error(a.msg),e.abrupt("return");case 8:t.tableData=a.roles,t.tableLoading=!1;case 10:case"end":return e.stop()}}),e)})))()},deletePermiss:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(i["b"])(t);case 2:a=n.sent,r=a.data,204===r.status&&(e.getList(),e.$message({type:"success",message:"删除成功!"}));case 5:case"end":return n.stop()}}),n)})))()}},created:function(){this.getList()}},l=c,o=n("2877"),u=Object(o["a"])(l,a,r,!1,null,null,null);e["default"]=u.exports}}]);