(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["StandaloneServerInner~1d6b058e"],{"0bbec":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"chart_title_box"},[a("div",{staticClass:"title mr-20"},[t._v("用量统计图")]),a("div",[a("el-date-picker",{attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期时间"},on:{change:t.dateChange},model:{value:t.usedStartTime,callback:function(e){t.usedStartTime=e},expression:"usedStartTime"}}),t._v(" ~ "),a("el-date-picker",{attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期时间"},on:{change:t.dateChange},model:{value:t.usedEndTime,callback:function(e){t.usedEndTime=e},expression:"usedEndTime"}})],1)]),a("div",{staticClass:"chart_content_box",attrs:{id:"usedChartBox"}})])],1)],1)},o=[],s=(a("99af"),a("4160"),a("159b"),a("96cf"),a("1da1")),n=a("313e"),r=a.n(n),c=a("27fd"),l={data:function(){return{usedStartTime:void 0,usedEndTime:void 0,usedChart:null}},methods:{chartOption:function(){this.usedChart=r.a.init(document.getElementById("usedChartBox")),this.usedChart.setOption({backgroundColor:"#fff",title:{subtext:"",left:"center",textAlign:"left",subtextStyle:{lineHeight:400}},tooltip:{backgroundColor:"#fff",padding:[10,20,10,8],textStyle:{color:"#000",fontSize:12},trigger:"axis",axisPointer:{type:"line",lineStyle:{color:"#7dcb8f"}},formatter:function(t,e,a){var i="\n            <div>\n                <div>流量使用：".concat(t[0].value,"MB </div>\n                <div>").concat(t[0].axisValue,"</div>\n            </div>");return i},extraCssText:"box-shadow: 0px 4px 13px 1px rgba(1, 24, 167, 0.1);"},grid:{left:"80",top:20,x:70,x2:50,y2:80},xAxis:{offset:15,type:"category",data:[],boundaryGap:!1,axisTick:{show:!1},axisLine:{lineStyle:{type:"dashed",color:"#ddd",width:1}},axisLabel:{show:!0,textStyle:{color:"#999"}}},yAxis:{type:"value",splitLine:{show:!0,lineStyle:{color:"#ddd",type:"dashed"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,textStyle:{color:"#999"},formatter:"{value}MB"}},series:[{name:"用量",type:"line",smooth:!0,showSymbol:!0,symbol:"circle",symbolSize:3,data:[],areaStyle:{normal:{color:"#d4d1da",opacity:.2}},itemStyle:{normal:{color:"#0061ff"}},lineStyle:{normal:{width:4,shadowColor:"rgba(0,0,0,0.4)",shadowBlur:10,shadowOffsetY:10}}}]})},resize:function(){this.usedChart.resize()},getData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.usedChart.showLoading({text:"数据正在加载...",color:"#999",textStyle:{fontSize:30,color:"#444"},effectOption:{backgroundColor:"rgba(0, 0, 0, 0)"}}),e.next=3,Object(c["v"])(t.$route.query.id,t.usedStartTime,t.usedEndTime);case 3:if(a=e.sent,i=a.data,t.usedChart.hideLoading(),200===i.status){e.next=8;break}return e.abrupt("return",!1);case 8:o=[],s=[],(i.data||[]).forEach((function(t){o.push(t.time),s.push(t.value)})),t.usedChart.setOption({title:{subtext:o.length?"":"暂无数据"},xAxis:{data:o},series:[{data:s}]}),t.usedStartTime&&t.usedEndTime||i.data.length&&(t.usedStartTime=(new Date).getFullYear()+"-"+i.data[0].time,t.usedEndTime=(new Date).getFullYear()+"-"+i.data[i.data.length-1].time);case 13:case"end":return e.stop()}}),e)})))()},dateChange:function(){var t=new Date(this.usedStartTime).getTime(),e=new Date(this.usedEndTime).getTime();this.usedStartTime&&this.usedEndTime&&t<e&&this.getData()}},created:function(){},mounted:function(){var t=this;this.chartOption(),this.getData(),window.addEventListener("resize",this.resize),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("resize",t.resize)}))}},u=l,d=(a("61f7"),a("2877")),p=Object(d["a"])(u,i,o,!1,null,"87f3210e",null);e["a"]=p.exports},"1f35":function(t,e,a){"use strict";var i=a("4e1e"),o=a.n(i);o.a},"22e6":function(t,e,a){},"4e1e":function(t,e,a){},"5c67":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"standaloneserver_log"},[a("div",{staticClass:"standaloneserver_log_search"},[a("el-input",{attrs:{placeholder:t.$t("standaloneServer.placeholderSearch")},model:{value:t.search.input,callback:function(e){t.$set(t.search,"input",e)},expression:"search.input"}})],1),a("div",{staticClass:"standaloneserver_log_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{height:t.$height-450,data:t.tableData,"header-row-class-name":"innerTableHeader","row-class-name":"innerTableRowClass","cell-class-name":"innerTableCellClass"},on:{"sort-change":t.changeSort}},[a("div",{attrs:{slot:"empty"},slot:"empty"},[!t.tableData.length&&t.tableLoading?a("span",[a("i",{staticClass:"el-icon-loading"}),t._v(" 正在加载 ... ")]):t._e(),t.tableData.length||t.tableLoading?t._e():a("span",[t._v("暂无数据")])]),a("el-table-column",{attrs:{prop:"create_time",label:t.$t("standaloneServer.operatingTime"),align:"center",width:"180",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("div",[t._v(t._s(t.$moment(1e3*i.create_time).format("YYYY-MM-DD HH:mm:ss")))])]}}])}),a("el-table-column",{attrs:{prop:"description",label:t.$t("standaloneServer.operatingDetail")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("div",{domProps:{innerHTML:t._s(i.description)}})]}}])}),a("el-table-column",{attrs:{prop:"user",label:t.$t("standaloneServer.operator"),align:"center",width:"150",sortable:"custom"}}),a("el-table-column",{attrs:{prop:"ipaddr",label:t.$t("standaloneServer.ipAddress"),align:"center",width:"150",sortable:"custom"}})],1)],1),a("div",{staticClass:"standaloneserver_log_pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next","prev-text":t.$t("Previous"),"next-text":t.$t("Nextpage"),"current-page":t.page,"page-size":t.limit,total:t.total,"pager-count":5},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},o=[],s=(a("ac1f"),a("841c"),a("96cf"),a("1da1")),n=a("27fd"),r={data:function(){return{page:1,limit:20,total:0,orderby:"id",sort:"desc",search:{input:"",timer:null},tableData:[],tableLoading:!1}},methods:{getData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tableLoading=!0,e.next=3,Object(n["q"])(t.$route.query.id,t.page,t.limit,t.orderby,t.sort,t.search.input);case 3:if(a=e.sent,i=a.data,t.tableLoading=!1,200===i.status){e.next=9;break}return t.$message.error(i.msg),e.abrupt("return",!1);case 9:t.total=i.data.count,t.tableData=i.data.log_list;case 11:case"end":return e.stop()}}),e)})))()},handleSizeChange:function(t){this.limit=t,this.getData()},handleCurrentChange:function(t){this.page=t,this.getData()},changeSort:function(t){"descending"===t.order?(this.orderby=t.prop,this.sort="desc"):(this.orderby=t.prop,this.sort="asc"),this.getData()}},created:function(){this.getData()},watch:{"search.input":{handler:function(){var t=this;this.search.timer&&clearTimeout(this.search.timer),this.search.timer=setTimeout((function(){t.getData()}),200)},deep:!0}}},c=r,l=(a("1f35"),a("2877")),u=Object(l["a"])(c,i,o,!1,null,"0ea80434",null);e["a"]=u.exports},"61f7":function(t,e,a){"use strict";var i=a("b34a"),o=a.n(i);o.a},b174:function(t,e,a){"use strict";var i=a("22e6"),o=a.n(i);o.a},b34a:function(t,e,a){},b914:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box mt-20"},[a("el-row",{attrs:{gutter:30}},[t.baseData.host_data.allow_upgrade_product&&"1"===t.configStep?a("el-col",{staticClass:"upgrade_pro_mb20",attrs:{span:24}},[a("div",{staticClass:"upgrade_pro_box",class:{upgrade_pro_active:t.proMouseOver},on:{mouseover:t.prodMouseOver,mouseleave:t.prodMouseLeave}},["1"===t.proStep?a("el-row",{staticClass:"flexc pro_box_step1"},[a("el-col",{staticClass:"pro_box_label",attrs:{span:4}},[t._v("升降级")]),a("el-col",{staticClass:"pro_box_desc overflow-ellipsis",attrs:{span:16}},[t._v(" 操作系统版本可以升级亦可以降级, 从当前的版本升级到最新版本或恢复之前的旧版本 ")]),a("el-col",{staticClass:"flex-xend",staticStyle:{width:"100px"},attrs:{span:4}},[a("el-button",{staticClass:"pro_box_btn",attrs:{disabled:"1"!==t.configStep},on:{click:t.upgradeProClick}},[t._v("升降级")])],1)],1):t._e(),"2"===t.proStep||"3"===t.proStep?a("div",[a("div",{staticClass:"pro_box_titlebox"},[a("div",{staticStyle:{width:"150px"}},[t._v("升降级")]),a("div",{staticClass:"box_titlebox_desc overflow-ellipsis"}),a("span",{staticClass:"el-icon-circle-close fz-16 cursor-pointer",on:{click:function(e){t.proStep="1"}}})]),"2"===t.proStep?a("div",{staticClass:"pro_box_content mt-20"},[a("div",{staticStyle:{height:"500px",overflow:"auto"}},t._l(t.productList,(function(e,i){return a("el-row",{key:"pro"+i,staticClass:"pro_box_item cursor-pointer",class:{pro_box_item_active:t.upgradeSubmitData.pid===e.pid},style:{opacity:t.upgradeSubmitData.pid===e.pid?1:.5},nativeOn:{click:function(a){return t.proChange(e.pid)}}},[a("el-col",{staticClass:"pro_box_label overflow-ellipsis",attrs:{md:12}},[t.upgradeSubmitData.pid===e.pid?a("span",{staticClass:"iconfont icon-danxuanxuanzhong-copy mr-20",staticStyle:{color:"#2f54ea"}}):a("span",{staticClass:"iconfont icon-danxuanweixuanzhong mr-20"}),a("span",{staticClass:"overflow-ellipsis"},[t._v(t._s(e.host))])]),a("el-col",{staticClass:"pro_box_cycle ml-10",attrs:{md:12}},[a("el-select",{staticStyle:{width:"60%"},attrs:{size:"small",disabled:t.upgradeSubmitData.pid!==e.pid},on:{change:t.cycleChange},model:{value:e.billingcycle,callback:function(a){t.$set(e,"billingcycle",a)},expression:"proItem.billingcycle"}},t._l(e.cycle,(function(e,i){return a("el-option",{key:"cycle"+i,attrs:{label:t.currency.prefix+e.price+t.currency.suffix+" / "+e.billingcycle_zh+(Number(e.saleproducts)?"(客户折扣："+t.currency.prefix+Number(e.saleproducts).toFixed(2)+t.currency.suffix+")":""),value:e.billingcycle}})})),1)],1)],1)})),1),a("div",{staticClass:"box_content_btn flexc-v"},[a("el-button",{staticClass:"pro_box_pre flexc",on:{click:function(e){t.proStep="1"}}},[t._v("返回")]),a("el-button",{staticClass:"pro_box_next flexc",on:{click:t.proNextHandleClick}},[t._v("下一步")])],1)]):t._e(),"3"===t.proStep?a("div",{staticClass:"pro_box_content mt-20"},[a("div",{staticClass:"pro_box_label",staticStyle:{opacity:"0.5"}},[t._v(t._s(t.proPageData.old_host.host))]),a("div",{staticClass:"pro_box_label"},[t._v("新的产品: "+t._s(t.proPageData.des))]),a("div",{staticClass:"mb-40 fz-14"},[t._v(t._s(t.proPageData.currency.prefix)+" "+t._s(t.proPageData.amount)+" "+t._s(t.proPageData.suffix)+" "+t._s(t.proPageData.amount?"/":"")+" "+t._s(t.proPageData.billingcycle_zh))]),a("div",{staticClass:"pro_box_line"}),a("div",{staticClass:"pro_box_total"},[a("label",{staticClass:"mr-20"},[t._v("总计：")]),a("span",{staticStyle:{color:"#2f54ea"}},[t._v(t._s(t.proPageData.currency.prefix)+" "+t._s(t.proPageData.amount_total)+t._s(t.proPageData.suffix)+" "+t._s(t.proPageData.amount_total?"/":"")+" "+t._s(t.proPageData.billingcycle_zh))]),a("span",{staticClass:"fz-12 ml-10 color-999"},[t._v(t._s(t.proPageData.flag?"(客户折扣优惠)":""))])]),a("div",{staticClass:"pro_box_promo"},[a("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"如有优惠券或者优惠码请输入"},on:{change:t.promoChange},model:{value:t.promoCode,callback:function(e){t.promoCode=e},expression:"promoCode"}},[a("el-button",{attrs:{slot:"append"},on:{click:t.addProductCode},slot:"append"},[t._v("应用")])],1)],1),a("div",{staticClass:"box_content_btn flexc-v"},[a("el-button",{staticClass:"pro_box_back flexc",on:{click:t.proBack}},[t._v("返回")]),a("el-button",{staticClass:"pro_box_pay flexc",attrs:{loading:t.btnLoading},on:{click:function(e){return t.settle("pro")}}},[t._v("结算")])],1)]):t._e()]):t._e()],1)]):t._e(),t.baseData.host_data.allow_upgrade_config&&"1"===t.proStep?a("el-col",{class:{"mt-20":"1"===t.configStep},attrs:{span:24}},[a("div",{staticClass:"upgrade_config_box",class:{upgrade_config_active:t.configMouseOver},on:{mouseover:t.conMouseOver,mouseleave:t.conMouseLeave}},["1"===t.configStep?a("el-row",{staticClass:"flexc config_box_step1"},[a("el-col",{staticClass:"config_box_label",attrs:{span:4}},[t._v("升降级选项")]),a("el-col",{staticClass:"config_box_desc overflow-ellipsis",attrs:{span:16}},[t._v(" 对IP数量、操作系统位数、CPU核心数、内存大小等, 都可以选择升级或降级 ")]),a("el-col",{staticClass:"flex-xend",staticStyle:{width:"100px"},attrs:{span:4}},[a("el-button",{staticClass:"config_box_btn flexc",attrs:{disabled:"1"!==t.proStep},on:{click:t.upgradeConfigHandleClick}},[t._v("升降级选项")])],1)],1):t._e(),"2"===t.configStep||"3"===t.configStep?a("div",[a("div",{staticClass:"config_box_titlebox"},[a("div",{staticStyle:{width:"200px"}},[t._v("升降级选项")]),a("div",{staticClass:"box_titlebox_desc overflow-ellipsis"}),a("span",{staticClass:"el-icon-circle-close fz-16 cursor-pointer",on:{click:function(e){t.configStep="1"}}})]),"2"===t.configStep?a("div",{staticClass:"config_box_content mt-20"},[a("div",{staticClass:"box_content_item"},[a("div",{},t._l(t.configs,(function(e,i){return a("div",{key:"confignew"+i,staticClass:"mb-20 content_item_label"},[a("div",{staticClass:"flexc-v fl lh-20 mr-10"},[a("label",{staticStyle:{display:"inline-block",width:"60px"}},[t._v(t._s(e.option_name)+"：")]),[4,7,9,11,14,15,16,17,18,19].includes(e.option_type)?a("myInput",{attrs:{min:e.qty_minimum,max:e.qty_maximum},on:{change:t.changeConfigsData},model:{value:e.qty,callback:function(a){t.$set(e,"qty",a)},expression:"configItem.qty"}}):t._e(),4===e.option_type||15===e.option_type?a("span",[t._v("个")]):t._e(),7===e.option_type||16===e.option_type?a("span",[t._v(t._s(t.$t("cloudServer.core")))]):t._e(),9===e.option_type||17===e.option_type?a("span",[t._v("GB")]):t._e(),11===e.option_type||18===e.option_type?a("span",[t._v("Mbps")]):t._e(),14===e.option_type||19===e.option_type?a("span",[t._v("GB")]):t._e()],1),1===e.option_type?a("el-select",{attrs:{size:"mini",placeholder:t.$t("standaloneServer.pleaseSelect")},on:{change:t.changeConfigsData},model:{value:e.subid,callback:function(a){t.$set(e,"subid",a)},expression:"configItem.subid"}},t._l(e.sub,(function(t){return a("el-option",{key:t.id,attrs:{disabled:t.disabled,label:t.show_pricing,value:t.id}})})),1):t._e(),2===e.option_type?a("div",t._l(e.sub,(function(i,o){return a("el-radio",{key:"Radio"+o,attrs:{disabled:i.disabled,label:i.id},on:{change:t.changeConfigsData},model:{value:e.subid,callback:function(a){t.$set(e,"subid",a)},expression:"configItem.subid"}},[t._v(t._s(i.option_name))])})),1):t._e(),[6,8,10,13].includes(e.option_type)?a("myRadio",{staticClass:"mt-10",attrs:{radioData:e.sub},on:{change:t.changeConfigsData},model:{value:e.subid,callback:function(a){t.$set(e,"subid",a)},expression:"configItem.subid"}}):t._e(),[4,7,9,11,14,15,16,17,18,19].includes(e.option_type)?a("mySlider",{staticClass:"ml-5 mr-5 clearboth",attrs:{value:2,sliderData:e.sub,min:e.qty_minimum,max:e.qty_maximum},on:{change:t.changeConfigsData},model:{value:e.qty,callback:function(a){t.$set(e,"qty",a)},expression:"configItem.qty"}}):t._e()],1)})),0)]),a("div",{staticClass:"box_content_btn flexc-v"},[a("el-button",{staticClass:"config_box_pre flexc",on:{click:function(e){t.configStep="1"}}},[t._v("返回")]),a("el-button",{staticClass:"config_box_next flexc",attrs:{disabled:t.nextDisable},on:{click:t.configNextHandleClick}},[t._v("下一步")])],1)]):t._e(),"3"===t.configStep?a("div",{staticClass:"config_box_content mt-20"},[a("div",{staticClass:"config_box_step3 overflow-ellipsis"},[t._v(t._s(t.configPageData.name))]),a("div",{staticClass:"clearfix mb-20 config_box_oldconfig"},[a("ul",{staticClass:"pl-20"},t._l(t.configs,(function(e,i){return a("li",{key:"configold"+i,staticClass:"fl mr-50 mb-20"},[t._v(" "+t._s(e.option_name)+": "),[4,7,9,11,14,15,16,17,18,19].includes(e.option_type)?a("span",[t._v(" "+t._s(e.qty_zh)+" "),4===e.option_type||15===e.option_type?a("span",[t._v("个")]):t._e(),7===e.option_type||16===e.option_type?a("span",[t._v(t._s(t.$t("cloudServer.core")))]):t._e(),9===e.option_type||17===e.option_type?a("span",[t._v("GB")]):t._e(),11===e.option_type||18===e.option_type?a("span",[t._v("Mbps")]):t._e(),14===e.option_type||19===e.option_type?a("span",[t._v("GB")]):t._e()]):a("span",[t._v(t._s(e.suboption_name))])])})),0)]),a("div",{staticClass:"clearfix mb-20"},[a("ul",{staticClass:"pl-20"},t._l(t.configPageData.alloption,(function(e,i){return a("li",{key:i,staticClass:"fl mr-50 mb-20"},[t._v(" "+t._s(e.option_name)+": "),[4,7,9,11,14,15,16,17,18,19].includes(e.option_type)?a("span",{staticClass:"body_item_value"},[t._v(t._s(e.qty))]):a("span",{staticClass:"body_item_value"},[t._v(t._s(e.suboption_name))])])})),0)]),a("div",{staticClass:"mb-40 fz-14"},[t._v(t._s(t.configPageData.currency.prefix)+" "+t._s(t.configPageData.subtotal)+" "+t._s(t.configPageData.currency.suffix)+" "+t._s(t.configPageData.subtotal?"/":"")+" "+t._s(t.configPageData.billingcycle_zh))]),a("div",{staticClass:"config_box_line"}),a("div",{staticClass:"config_box_total"},[a("label",{staticClass:"mr-20 fz-14"},[t._v("总计")]),a("span",[t._v(t._s(t.configPageData.currency.prefix)+t._s(t.configPageData.total)+t._s(t.configPageData.currency.suffix)+" "+t._s(t.configPageData.total?"/":"")+" "+t._s(t.configPageData.billingcycle_zh))]),a("span",{staticClass:"fz-12 ml-10 color-999"},[t._v(t._s(t.configPageData.flag?"(客户折扣优惠)":""))])]),a("div",{staticClass:"config_box_promo"},[a("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"如有优惠券或者优惠码请输入"},on:{change:t.promoChange},model:{value:t.promoCode,callback:function(e){t.promoCode=e},expression:"promoCode"}},[a("el-button",{attrs:{slot:"append"},on:{click:t.addConfigCode},slot:"append"},[t._v("应用")])],1)],1),a("div",{staticClass:"box_content_btn flexc-v"},[a("el-button",{staticClass:"config_box_back flexc",on:{click:t.configBack}},[t._v("返回")]),a("el-button",{staticClass:"config_box_pay flexc",attrs:{loading:t.btnLoading},on:{click:function(e){return t.settle("config")}}},[t._v("结算")])],1)]):t._e()]):t._e()],1)]):t._e()],1),a("el-dialog",{attrs:{title:"提示",visible:t.settleDialogVis,width:"600px"},on:{"update:visible":function(e){t.settleDialogVis=e}}},[a("div",{staticClass:"force_off_tips mb-20"},[a("div",{staticClass:"mb-20"},[t._v("升降级需要服务器在关机状态下进行：")]),a("div",{staticClass:"mb-10"},[a("span",{staticClass:"red-point"}),t._v(" 为了避免数据丢失，实例将关机中断您的业务，请仔细确认。 ")]),a("div",[a("span",{staticClass:"red-point"}),t._v(" 强制关机可能会导致数据丢失或文件系统损坏，您也可以主动关机后再进行操作。 ")])]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.settleSure}},[t._v(t._s(t.$t("cloudServer.determine")))])],1)]),a("payNew",{ref:"control",on:{"pay-success":t.successCallBack}})],1)},o=[],s=(a("a623"),a("4160"),a("caad"),a("d81d"),a("d3b7"),a("ac1f"),a("25f0"),a("2532"),a("5319"),a("4c53"),a("159b"),a("96cf"),a("1da1")),n=a("a748"),r=a("42bc"),c=a("eb02"),l=a("4f32"),u=a("ecca"),d=a("2ef0"),p={mixins:[u["a"]],data:function(){return{proStep:"1",promo:"",cycle:"",proMouseOver:!1,configStep:"1",configMouseOver:!1,value1:"1",productList:[1],upgradeSubmitData:{hid:this.$route.query.id,pid:0,billingcycle:void 0,currencyid:void 0,promo_code:void 0},currency:void 0,toPayParams:{},proPageData:{old_host:{id:0,host:"",domain:""},currency:{id:0,code:"",prefix:"",suffix:""}},id:this.$route.query.id,configs:[1],configsInit:[],upgradeConfigSubmitData:{hid:this.$route.query.id,currencyid:void 0,promo_code:void 0,configoption:[]},nextDisable:!0,groupid:this.$route.query.groupid,configPageData:{alloption:[],currency:{id:1,code:"",prefix:"",suffix:""}},promoCode:"",btnLoading:!1,settleDialogVis:!1,settleType:"pro"}},props:{baseData:{}},components:{myRadio:n["default"],myInput:r["default"],mySlider:c["default"]},methods:{upgradeProClick:function(){this.proStep="2",this.proMouseOver=!1},prodMouseOver:function(){"1"===this.configStep&&"1"===this.proStep&&(this.proMouseOver=!0)},prodMouseLeave:function(){"1"===this.configStep&&"1"===this.proStep&&(this.proMouseOver=!1)},conMouseOver:function(){"1"===this.configStep&&"1"===this.proStep&&(this.configMouseOver=!0)},conMouseLeave:function(){"1"===this.configStep&&"1"===this.proStep&&(this.configMouseOver=!1)},upgradeConfigHandleClick:function(){this.configStep="2",this.configMouseOver=!1},getProStep2Data:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["C"])({hid:t.id,currencyid:void 0});case 2:a=e.sent,i=a.data,200!==i.status||((i.data.host||[]).forEach((function(t){t.billingcycle=t.cycle.length?t.cycle[0].billingcycle:void 0})),t.upgradeSubmitData.pid=i.data.host[0].pid,t.productList=i.data.host,t.currency=i.data.currency);case 5:case"end":return e.stop()}}),e)})))()},proChange:function(t){var e=this;this.upgradeSubmitData.pid=t,(this.productList||[]).forEach((function(a){a.pid===t&&a.cycle.length&&e.cycleChange(a.billingcycle)}))},cycleChange:function(t){var e=this;(this.productList||[]).forEach((function(a){(a.cycle||[]).forEach((function(a){t===a.billingcycle&&(e.upgradeSubmitData.billingcycle_zh=a.billingcycle_zh)}))}))},proNextHandleClick:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.upgradeSubmitData.currencyid=t.currency.id,(t.productList||[]).forEach((function(e){e.pid===t.upgradeSubmitData.pid&&(t.upgradeSubmitData.billingcycle=e.billingcycle,t.toPayParams.newHost=e)})),e.next=4,Object(l["E"])(t.upgradeSubmitData);case 4:a=e.sent,i=a.data,200!==i.status?t.$message.error(i.msg):(t.$emit("nextClick"),t.getProStep3Data(),t.proStep="3");case 7:case"end":return e.stop()}}),e)})))()},getProStep3Data:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["D"])({hid:t.id});case 2:a=e.sent,i=a.data,200!==i.status?t.$message.error(i.msg):(t.proPageData=i.data,t.promoCode=i.data.promo_code);case 5:case"end":return e.stop()}}),e)})))()},addProductCode:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["b"])({hid:t.id,pormo_code:t.promoCode});case 2:a=e.sent,i=a.data,200!==i.status?t.$message.error(i.msg):(t.$message.success(i.msg),t.getProStep3Data());case 5:case"end":return e.stop()}}),e)})))()},proUpgradePay:d.throttle(Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,t.next=3,Object(l["i"])({hid:this.proPageData.old_host.id});case 3:e=t.sent,a=e.data,200===a.status?this.$refs.control.main({id:a.data.invoiceid,name:this.$t("standaloneServer.upDown")}):1001===a.status?(this.$message.success(a.msg),this.$router.push({path:"/cloud-server",query:{groupid:this.groupid}})):this.$message.error(a.msg),this.btnLoading=!1;case 7:case"end":return t.stop()}}),t,this)}))),2e3),proBack:function(){this.proStep="2",this.getProStep2Data()},getConfigStep2Data:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["z"])({hid:t.id,currencyid:void 0});case 2:a=e.sent,i=a.data,200!==i.status||((i.data.host||[]).forEach((function(e){if(e.id=e.oid,e.disabled=!1,(e.sub||[]).forEach((function(t){t.disabled=!1})),5===e.option_type)for(var a in e.sub)e.sub[a].osName=a;else 12===e.option_type?(e.sub=t.objToArr(e.sub,"dataCenter"),(e.sub||[]).forEach((function(t){var a=t.area.map((function(t){return t.id}));a.includes(e.subid)?(t.active=!0,t.areaId=e.subid):t.active=!1,t.noarea=!0,(t.area||[]).forEach((function(e){""===e.area?e.area_zh="无配置区域":t.noarea=!1}))}))):[4,7,9,11,14,15,16,17,18,19].includes(e.option_type)&&(e.qty_zh=e.qty)})),t.originalData={option:i.data.host,link:i.data.links.map((function(t){for(var e in t.sub_id){var a=t.sub_id[e];a.qty_minimum=parseInt(a.qty_minimum),a.qty_maximum=parseInt(a.qty_maximum)}return t}))},t.configs=i.data.host,t.configsInit=JSON.parse(JSON.stringify(i.data.host)),t.osSelectChange(void 0,!0));case 5:case"end":return e.stop()}}),e)})))()},changeConfigsData:function(){var t=this;this.configsInit.forEach((function(e){t.configs.forEach((function(t){e.id===t.id&&([4,7,9,11,14,15,16,17,18,19].includes(t.option_type)?t.nextDisable=e.qty===t.qty:t.nextDisable=e.subid===t.subid)}))})),this.nextDisable=this.configs.every((function(t){return t.nextDisable})),this.clearOption()},objToArr:function(t,e){var a=[];for(var i in t)"dataCenter"===e?(t[i].id=this.guid(),t[i].active=!1,t[i].city=i,t[i].areaId=void 0):t[i].osName=i,a.push(t[i]);return a},guid:function(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,a="x"===t?e:3&e|8;return a.toString(16)}))},osSelectChange:function(t,e){var a=this;(this.configs||[]).forEach((function(i){if(5!==i.option_type)return!1;var o=function(o){t===o&&(i.subid=i.sub[o].child[0].id,i.osVersionOptions=i.sub[o].child),e?(i.sub[o].child||[]).forEach((function(t){i.subid===t.id&&(i.osName=o,i.osVersionOptions=i.sub[o].child)})):a.nextDisable=!1};for(var s in i.sub)o(s)}))},configNextHandleClick:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.upgradeConfigSubmitData.configoption=[],(t.configs||[]).forEach((function(e){[4,7,9,11,14,15,16,17,18,19].includes(e.option_type)?t.upgradeConfigSubmitData.configoption[e.oid]=e.qty:t.upgradeConfigSubmitData.configoption[e.oid]=e.subid})),e.next=4,Object(l["B"])(t.$qs.stringify(t.upgradeConfigSubmitData));case 4:a=e.sent,i=a.data,200!==i.status?t.$message.error(i.msg):(t.$emit("nextClick"),t.getConfigStep3Data(),t.configStep="3");case 7:case"end":return e.stop()}}),e)})))()},getConfigStep3Data:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["A"])({hid:t.id});case 2:a=e.sent,i=a.data,200!==i.status?t.$message.error(i.msg):(t.configPageData=i.data,t.promoCode=i.data.promo_code);case 5:case"end":return e.stop()}}),e)})))()},promoChange:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.promoCode){e.next=6;break}return e.next=3,Object(l["x"])({hid:t.id});case 3:a=e.sent,i=a.data,200!==i.status?t.$message.error(i.msg):(t.$message.success(i.msg),t.getConfigStep3Data());case 6:case"end":return e.stop()}}),e)})))()},addConfigCode:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["a"])({hid:t.id,pormo_code:t.promoCode});case 2:a=e.sent,i=a.data,200!==i.status?t.$message.error(i.msg):(t.$message.success(i.msg),t.getConfigStep3Data());case 5:case"end":return e.stop()}}),e)})))()},configUpgradePay:d.throttle(Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a in e={hid:this.id},e.configoption=[],this.configPageData.alloption)4===this.configPageData.alloption[a].option_type?e.configoption[this.configPageData.alloption[a].id]=this.configPageData.alloption[a].qty:e.configoption[this.configPageData.alloption[a].id]=this.configPageData.alloption[a].suboption_id;return this.btnLoading=!0,t.next=6,Object(l["h"])(this.$qs.stringify(e));case 6:i=t.sent,o=i.data,200===o.status?this.$refs.control.main({id:o.data.invoiceid,name:this.$t("standaloneServer.upDownOptions")}):1001===o.status?(this.$message.success(o.msg),this.$router.push({path:"/cloud-server",query:{groupid:this.groupid}})):this.$message.error(o.msg),this.btnLoading=!1;case 10:case"end":return t.stop()}}),t,this)}))),2e3),successCallBack:function(t){t&&this.$router.push({path:"/cloud-server",query:{groupid:this.groupid}})},configBack:function(){this.configStep="2",this.getConfigStep2Data()},settle:function(t){this.settleType=t,this.settleDialogVis=!0},settleSure:function(){this.settleDialogVis=!1,"pro"===this.settleType?this.proUpgradePay():this.configUpgradePay()}},created:function(){this.getProStep2Data(),this.getConfigStep2Data()}},g=p,f=(a("b174"),a("2877")),h=Object(f["a"])(g,i,o,!1,null,"2f3ce124",null);e["a"]=h.exports}}]);