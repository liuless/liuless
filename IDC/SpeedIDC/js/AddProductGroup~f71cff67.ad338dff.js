(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AddProductGroup~f71cff67"],{"07c1":function(t,r,e){t.exports=e.p+"img/order2.f608c900.png"},"0be3":function(t,r,e){},"63db":function(t,r,e){var a={"./order0.png":"a6ea","./order1.png":"baaf","./order2.png":"07c1"};function o(t){var r=n(t);return e(r)}function n(t){if(!e.o(a,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=n,t.exports=o,o.id="63db"},"676d":function(t,r,e){"use strict";var a=e("0be3"),o=e.n(a);o.a},9493:function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"addgroup"},[t.id?a("h2",[t._v("编辑商品分组")]):a("h2",[t._v("创建商品分组")]),a("el-divider"),a("div",{staticClass:"addgroup_form"},[a("el-row",[a("el-col",{staticClass:"from-box",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form",{ref:"addGroupFormRef",attrs:{model:t.addGroupForm,"label-width":"120px",rules:t.addGroupFormRules}},[a("el-form-item",{attrs:{label:"创建类型",placeholder:"请选择"}},[a("el-select",{attrs:{size:"small",disabled:Boolean(t.id)},model:{value:t.createType,callback:function(r){t.createType=r},expression:"createType"}},[a("el-option",{attrs:{value:"1",label:"商品分组"}}),a("el-option",{attrs:{value:"2",label:"一级分组"}})],1)],1),"1"===t.createType?a("div",[a("el-form-item",{attrs:{label:"一级分组",prop:"gid",placeholder:"请选择"}},[a("el-select",{attrs:{size:"small"},model:{value:t.addGroupForm.gid,callback:function(r){t.$set(t.addGroupForm,"gid",r)},expression:"addGroupForm.gid"}},t._l(t.firstGroups,(function(t,r){return a("el-option",{key:"firstgroup"+r,attrs:{value:t.id,label:t.name}})})),1)],1),a("el-form-item",{attrs:{label:"商品组名称",prop:"name"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入商品组名称"},model:{value:t.addGroupForm.name,callback:function(r){t.$set(t.addGroupForm,"name",r)},expression:"addGroupForm.name"}})],1),a("el-form-item",{attrs:{label:"商品组标题"}},[a("el-input",{attrs:{size:"small",placeholder:"例如：选择您的完美的计划"},model:{value:t.addGroupForm.headline,callback:function(r){t.$set(t.addGroupForm,"headline",r)},expression:"addGroupForm.headline"}})],1),a("el-form-item",{attrs:{label:"商品组标语"}},[a("el-input",{attrs:{size:"small",placeholder:"例如：凭我们30天退款保证,您千万不要错过!"},model:{value:t.addGroupForm.tagline,callback:function(r){t.$set(t.addGroupForm,"tagline",r)},expression:"addGroupForm.tagline"}})],1),a("el-form-item",{attrs:{label:"订购表格模板"}},[a("el-radio-group",{model:{value:t.defaultPage,callback:function(r){t.defaultPage=r},expression:"defaultPage"}},[a("el-radio",{attrs:{label:0}},[t._v("系统默认")]),a("el-radio",{attrs:{label:1}},[t._v("自定义")])],1)],1),1===t.defaultPage?a("el-form-item",{attrs:{label:"",prop:"order_frm_tpl"}},[a("el-radio-group",{model:{value:t.addGroupForm.order_frm_tpl,callback:function(r){t.$set(t.addGroupForm,"order_frm_tpl",r)},expression:"addGroupForm.order_frm_tpl"}},[a("el-radio",{attrs:{label:0}},[t._v("默认")]),a("el-radio",{attrs:{label:1}},[t._v("省份地区")])],1),a("div",[a("img",{staticClass:"order_page_img",attrs:{src:e("63db")("./order"+t.formData.order_page_style+".png"),alt:""}})])],1):t._e()],1):t._e(),"2"===t.createType?a("div",[a("el-form-item",{attrs:{label:"分组组名称",prop:"name"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入商品组名称"},model:{value:t.addGroupForm.name,callback:function(r){t.$set(t.addGroupForm,"name",r)},expression:"addGroupForm.name"}})],1)],1):t._e(),a("el-form-item",{attrs:{label:"是否隐藏"}},[a("el-radio",{attrs:{label:1},model:{value:t.addGroupForm.hidden,callback:function(r){t.$set(t.addGroupForm,"hidden",r)},expression:"addGroupForm.hidden"}},[t._v("隐藏")]),a("el-radio",{attrs:{label:0},model:{value:t.addGroupForm.hidden,callback:function(r){t.$set(t.addGroupForm,"hidden",r)},expression:"addGroupForm.hidden"}},[t._v("不隐藏")])],1)],1)],1)],1)],1),a("div",{staticClass:"addgroup_btns"},[a("el-row",[a("el-col",{staticClass:"text-cent",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-button",{attrs:{size:"small",type:"primary",loading:t.btnLoading},on:{click:t.saveSubmit}},[t._v("保存更改")]),a("el-button",{attrs:{size:"small"},on:{click:t.goBack}},[t._v("返回")]),a("el-button",{attrs:{size:"small"},on:{click:t.cancel}},[t._v("取消更改")])],1)],1)],1)],1)},o=[],n=(e("b0c0"),e("96cf"),e("1da1")),d=e("f421"),u={metaInfo:{title:"商品设置"},data:function(){return{prePage:this.$route.query.prePage,id:void 0,activeGatewayOption:[],defaultPage:0,addGroupForm:{name:"",headline:"",tagline:"",order_frm_tpl:0,gateways:[],hidden:0,gid:void 0},addGroupFormRules:{name:[{required:!0,message:"请输入分组名",trigger:"blur"}],gateways:[{type:"array",required:!0,message:"请至少选择一个可用付款接口",trigger:"change"}],gid:[{required:!0,message:"请选择一级分组",trigger:"change"}]},btnLoading:!1,createType:this.$route.query.type||"1",firstGroups:[]}},methods:{getId:function(){this.id=this.$route.query.id},getData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var e,a,o,n,u,i,c,s,p,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t.id){r.next=30;break}if("1"!==t.createType){r.next=20;break}return r.next=4,Object(d["w"])(t.id);case 4:if(e=r.sent,a=e.data,200===a.status){r.next=8;break}return r.abrupt("return",!1);case 8:for(o in t.addGroupForm.name=a.data.productgroup.name,t.addGroupForm.headline=a.data.productgroup.headline,t.addGroupForm.tagline=a.data.productgroup.tagline,t.addGroupForm.order_frm_tpl=a.data.productgroup.order_frm_tpl,t.addGroupForm.gateways=a.data.allgateways,t.addGroupForm.hidden=a.data.productgroup.hidden,t.addGroupForm.gid=a.data.productgroup.gid,t.firstGroups=a.data.firstGroups,t.addGroupForm.order_frm_tpl=a.data.default_page,a.data.activeGatewayArr)n={key:o,value:a.data.activeGatewayArr[o]},t.activeGatewayOption.push(n);r.next=28;break;case 20:return r.next=22,Object(d["o"])({id:t.id});case 22:if(u=r.sent,i=u.data,200===i.status){r.next=26;break}return r.abrupt("return",!1);case 26:t.addGroupForm.name=i.data.productfirstgroup.name,t.addGroupForm.hidden=i.data.productfirstgroup.hidden;case 28:r.next=40;break;case 30:return r.next=32,Object(d["w"])();case 32:if(c=r.sent,s=c.data,200===s.status){r.next=36;break}return r.abrupt("return",!1);case 36:for(p in s.data.activeGatewayArr)l={key:p,value:s.data.activeGatewayArr[p]},t.activeGatewayOption.push(l);t.firstGroups=s.data.firstGroups,t.addGroupForm.gid=s.data.firstGroups.length?s.data.firstGroups[0].id:void 0,t.addGroupForm.order_frm_tpl=s.data.default_page;case 40:case"end":return r.stop()}}),r)})))()},saveSubmit:function(){var t=this;this.$refs.addGroupFormRef.validate(function(){var r=Object(n["a"])(regeneratorRuntime.mark((function r(e){var a,o,n,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e){r.next=2;break}return r.abrupt("return",!1);case 2:if("1"!==t.createType){r.next=15;break}return"custom"===t.prePage?t.addGroupForm.type=1:"dcim"===t.prePage?t.addGroupForm.type=2:t.addGroupForm.type=3,t.id&&(t.addGroupForm.id=t.id),0===t.defaultPage&&(t.addGroupForm.order_frm_tpl=t.defaultPage),t.btnLoading=!0,r.next=9,Object(d["p"])(t.addGroupForm);case 9:a=r.sent,o=a.data,200!==o.status?t.$message.error(o.msg):(t.$message.success(o.msg),"dcim"===t.prePage?t.$router.push("/dcim-product"):"dcimcloud"===t.prePage?t.$router.push("/zjmfcloud-product"):t.$router.push("/product-server")),t.btnLoading=!1,r.next=23;break;case 15:return t.id&&(t.addGroupForm.id=t.id),t.btnLoading=!0,r.next=19,Object(d["B"])(t.addGroupForm);case 19:n=r.sent,u=n.data,200!==u.status?t.$message.error(u.msg):(t.$message.success(u.msg),"dcim"===t.prePage?t.$router.push("/dcim-product"):"dcimcloud"===t.prePage?t.$router.push("/zjmfcloud-product"):t.$router.push("/product-server")),t.btnLoading=!1;case 23:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())},cancel:function(){this.$refs.addGroupFormRef.resetFields()},goBack:function(){this.$router.go(-1)}},created:function(){this.$route.query.id&&this.getId(),this.getData()}},i=u,c=(e("676d"),e("2877")),s=Object(c["a"])(i,a,o,!1,null,"0fbe0b0f",null);r["default"]=s.exports},a6ea:function(t,r,e){t.exports=e.p+"img/order0.42a7f474.png"},baaf:function(t,r,e){t.exports=e.p+"img/order1.9ba96351.png"},f421:function(t,r,e){"use strict";e.d(r,"x",(function(){return o})),e.d(r,"w",(function(){return n})),e.d(r,"p",(function(){return d})),e.d(r,"l",(function(){return u})),e.d(r,"m",(function(){return i})),e.d(r,"s",(function(){return c})),e.d(r,"c",(function(){return s})),e.d(r,"t",(function(){return p})),e.d(r,"q",(function(){return l})),e.d(r,"h",(function(){return m})),e.d(r,"a",(function(){return f})),e.d(r,"k",(function(){return g})),e.d(r,"u",(function(){return b})),e.d(r,"F",(function(){return _})),e.d(r,"E",(function(){return h})),e.d(r,"z",(function(){return v})),e.d(r,"C",(function(){return G})),e.d(r,"y",(function(){return F})),e.d(r,"v",(function(){return O})),e.d(r,"A",(function(){return j})),e.d(r,"D",(function(){return x})),e.d(r,"o",(function(){return y})),e.d(r,"B",(function(){return k})),e.d(r,"i",(function(){return w})),e.d(r,"e",(function(){return $})),e.d(r,"d",(function(){return P})),e.d(r,"b",(function(){return z})),e.d(r,"j",(function(){return R})),e.d(r,"n",(function(){return T})),e.d(r,"r",(function(){return q})),e.d(r,"f",(function(){return C})),e.d(r,"g",(function(){return L}));var a=e("a27e");function o(t){return Object(a["a"])({url:"product_list_page",params:t})}function n(t){return Object(a["a"])({url:"edit_product_group_page",params:{id:t}})}function d(t){return Object(a["a"])({url:"save_product_group",method:"post",data:t})}function u(t){return Object(a["a"])({url:"del_product_group",params:{id:t}})}function i(t){return Object(a["a"])({url:"del_product",params:{id:t}})}function c(t){return Object(a["a"])({url:"add_product_page",params:t})}function s(t){return Object(a["a"])({url:"create_product",method:"post",data:t})}function p(t){return Object(a["a"])({url:"edit_product_page/".concat(t)})}function l(t){return Object(a["a"])({url:"edit_product",method:"post",data:t})}function m(t){return Object(a["a"])({url:"product_duplicate",method:"post",data:t})}function f(t){return Object(a["a"])({url:"product_downloadcats",method:"post",data:t})}function g(t){return Object(a["a"])({url:"product_del_custom",method:"post",data:t})}function b(t){return Object(a["a"])({url:"provision/".concat(t)})}function _(t){return Object(a["a"])({url:"update_productsort",method:"post",data:t})}function h(t){return Object(a["a"])({url:"update_groupsort",method:"post",data:t})}function v(t){return Object(a["a"])({url:"get_upstream_products",params:t})}function G(t){return Object(a["a"])({url:"product/sync_product_info",method:"post",data:t})}function F(t){return Object(a["a"])({url:"product/get_upstream_price",params:t})}function O(t){return Object(a["a"])({url:"product_selectcates",params:{productid:t}})}function j(t){return Object(a["a"])({url:"product_manage_downloads",method:"post",data:t})}function x(t){return Object(a["a"])({url:"update_firstgroupsort",method:"post",data:t})}function y(t){return Object(a["a"])({url:"edit_product_first_group_page",params:t})}function k(t){return Object(a["a"])({url:"save_product_first_group",method:"post",data:t})}function w(t){return Object(a["a"])({url:"del_product_first_group",params:t})}function $(t){return Object(a["a"])({url:"advanced_options/page",params:t})}function P(t){return Object(a["a"])({url:"advanced_options/create",method:"post",data:t})}function z(t){return Object(a["a"])({url:"advanced_options/addcondition",method:"post",data:t})}function R(t){return Object(a["a"])({url:"advanced_options/deletecondition",method:"delete",params:t})}function T(t){return Object(a["a"])({url:"advanced_options/deleteresult",method:"delete",params:t})}function q(t){return Object(a["a"])({url:"edit_stock",method:"post",data:t})}function C(){return Object(a["a"])({url:"options/config_options_check_os"})}function L(t){return Object(a["a"])({url:"options/config_options_check_os/".concat(t),method:"post"})}}}]);