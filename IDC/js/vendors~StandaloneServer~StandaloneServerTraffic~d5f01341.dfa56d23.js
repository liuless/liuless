(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendors~StandaloneServer~StandaloneServerTraffic~d5f01341"],{"15ad":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i("f999");var n=1e3,r=60*n,a=60*r,o=24*a,s=7*o,h=30*o,c=365*o,l={second:{value:n,format:"HH:mm:ss"},miniute:{value:r,format:"HH:mm"},hour:{value:a,format:"HH"},day:{value:o,format:"YYYY-MM-DD"},week:{value:s,format:"YYYY-MM-DD"},month:{value:h,format:"YYYY-MM"},year:{value:c,format:"YYYY"}}},"37f6":function(t,e,i){"use strict";var n=i("8937"),r=["start","process","end","reset"],a=function(){function t(t){var e=this.getDefaultCfg();Object(n["assign"])(this,e,t),this.canvas=this.view.canvas,this._eventHandlers=[],this._bindEvents()}return t.prototype.getDefaultCfg=function(){return{startEvent:"mousedown",processEvent:"mousemove",endEvent:"mouseup",resetEvent:"dblclick"}},t.prototype._start=function(t){this.preStart(t),this.start(t),this.afterStart(t)},t.prototype.preStart=function(t){},t.prototype.afterStart=function(t){},t.prototype._process=function(t){this.preProcess(t),this.process(t),this.afterProcess(t)},t.prototype.preProcess=function(t){},t.prototype.process=function(t){},t.prototype.afterProcess=function(t){},t.prototype._end=function(t){this.preEnd(t),this.end(t),this.afterEnd(t)},t.prototype.preEnd=function(t){},t.prototype.end=function(t){},t.prototype.afterEnd=function(t){},t.prototype._reset=function(t){this.preReset(t),this.reset(t),this.afterReset(t)},t.prototype.preReset=function(t){},t.prototype.reset=function(t){},t.prototype.afterReset=function(t){},t.prototype._bindEvents=function(){var t=this;Object(n["each"])(r,(function(e){var i=t[e+"Event"],r=Object(n["wrapBehavior"])(t,"_"+e);t.view.on(i,r),t._eventHandlers.push({type:i,handler:r})}))},t.prototype._unbindEvents=function(){var t=this,e=this._eventHandlers;Object(n["each"])(e,(function(e){t.view.off(e.type,e.handler)}))},t.prototype.destroy=function(){this._unbindEvents(),this._reset()},t}();e["a"]=a},"3e88":function(t,e,i){"use strict";var n=i("fd7e"),r=i("9ab4"),a=i("f999"),o=i("843c"),s=i("8937"),h=function(t,e,i,n,r){var a=n[0],o=n[1];void 0===r&&(r=!1);var h=Object(s["groupBy"])(i,t),c=r?e.slice(e.length-o,e.length-a):e.slice(a,o);return Object(s["flatten"])(Object(s["map"])(c,(function(t){return h[t]||[]})))},c=4,l=8,d=32,u=20,f=999,p=function(t){void 0===t&&(t={});var e=Object(r["__assign"])({type:"horizontal",categorySize:d,width:l,height:l,padding:[0,0,0,0]},t);return t.padding||(e.padding="horizontal"===e.type?[c,0,c,0]:[0,c,0,c]),e},g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onChangeFn=Object(s["throttle"])(e.onChange.bind(e),20,{leading:!0}),e}return Object(r["__extends"])(e,t),e.getInteractionRange=function(t,e){var i=p(e),n=i.padding,r=n[0],a=n[1],s=n[2],h=n[3];return"horizontal"===i.type?new o["a"](t.minX,t.maxY-i.height-r-s,t.width,i.height+r+s):new o["a"](t.maxX-i.width-h-a,t.minY,i.width+h+a,t.height)},e.prototype.render=function(){var t=this,e=this.view;this.ratio=0,this.thumbOffset=0,e.on("afterrender",(function(){var e=t.view.padding;Object(s["isEqual"])([0,0,0,0],e)||(t.trackLen?t.renderScrollbar():(t.measureScrollBar(),t.changeViewData(t.getScrollRange(),!0)))}))},e.prototype.start=function(){},e.prototype.clear=function(){this.scrollbar&&(this.scrollbar.destroy(),this.scrollbar=null),this.container&&(this.container.remove(!0),this.container=null),this.trackLen=null,this.thumbLen=null},e.prototype.renderScrollbar=function(){var t=p(this.getInteractionConfig()),e=this.getRange(),i="vertical"!==t.type,n=this.view.coordinateBBox,r=t.padding,o=r[0],s=r[3],h=i?{x:n.minX+s,y:e.minY+o}:{x:e.minX+s,y:n.minY+o};this.scrollbar?(this.scrollbar.update({trackLen:this.trackLen,thumbLen:this.thumbLen,thumbOffset:this.thumbOffset,x:h.x,y:h.y}),this.scrollbar.render()):(this.container=this.canvas.addGroup(),this.scrollbar=new a["l"]({container:this.container,x:h.x,y:h.y,isHorizontal:i,trackLen:this.trackLen,thumbLen:this.thumbLen,thumbOffset:this.ratio*this.trackLen}),this.scrollbar.init(),this.scrollbar.render(),this.scrollbar.get("group").set("zIndex",f),this.scrollbar.on("scrollchange",this.onChangeFn))},e.prototype.measureScrollBar=function(){var t=p(this.getInteractionConfig()),e=t.padding,i=e[0],n=e[1],r=e[2],a=e[3],o="vertical"!==t.type,h=this.view.coordinateBBox,c=this.view.getXScale(),l=this.view.getYScales();this.cnt=c.values.length,this.xScaleCfg={field:c.field,values:c.values||[]},this.yScalesCfg=Object(s["map"])(l,(function(t){return{field:t.field,type:t.type,min:t.min,max:t.max,ticks:t.ticks,formatter:t.formatter}})),this.step=Math.floor((o?h.width:h.height)/t.categorySize),this.trackLen=o?h.width-a-n:h.height-i-r,this.thumbLen=Math.max(this.trackLen*Object(s["clamp"])(this.step/c.values.length,0,1),u)},e.prototype.getScrollRange=function(){var t=Math.floor((this.cnt-this.step)*Object(s["clamp"])(this.ratio,0,1)),e=Math.min(t+this.step,this.cnt);return[t,e]},e.prototype.changeViewData=function(t,e){var i=this,n=t[0],a=t[1],o=p(this.getInteractionConfig()),c=this.getViewLayer(),l=c.options.meta,d=c.getData(),u=h(this.xScaleCfg.field,this.xScaleCfg.values,d,[n,a],"vertical"===o.type);this.yScalesCfg.forEach((function(t){var e=Object(s["get"])(l,t.field)||{};i.view.scale(t.field,Object(r["__assign"])(Object(r["__assign"])({formatter:t.formatter},e),{type:t.type,min:t.min,max:t.max}))})),e?(this.view.data(u),this.view.render()):this.view.changeData(u)},e.prototype.onChange=function(t){var e=t.ratio,i=t.thumbOffset;this.ratio=e,this.thumbOffset=i;var n=this.view.getOptions().animate;this.view.animate(!1),this.changeViewData(this.getScrollRange()),this.view.animate(n),this.renderScrollbar()},e}(n["a"]),m=g,v=4,y=16,b=function(t){void 0===t&&(t={});var e=Object(r["__assign"])({type:"horizontal",start:0,end:1,width:void 0,height:void 0,padding:[0,0,0,0],backgroundStyle:{},foregroundStyle:{},handlerStyle:{},textStyle:{},trendCfg:{}},t);t.padding||(e.padding="horizontal"===e.type?[v,0,v,0]:[0,v,0,v]),t.height||(e.height=y),t.width||(e.width=y);var i=Object(s["clamp"])(Math.min(e.start,e.end),0,1),n=Object(s["clamp"])(Math.max(e.start,e.end),0,1);return e.start=i,e.end=n,e},w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onChangeFn=Object(s["throttle"])(e.onChange.bind(e),20,{leading:!0}),e}return Object(r["__extends"])(e,t),e.getInteractionRange=function(t,e){var i=b(e),n=i.padding||[0,0,0,0],r=n[0],a=n[1],s=n[2],h=n[3];if("horizontal"===i.type){var c=new o["a"](t.minX,t.maxY-i.height-r-s,t.width,i.height+r+s);return c}return new o["a"](t.maxX-i.width-h-a,t.minY,i.width+h+a,t.height)},e.prototype.render=function(){var t=this,e=this.getViewLayer(),i=this.view,n=b(this.getInteractionConfig());this.curStart=n.start,this.curEnd=n.end,this.xScaleCfg=void 0;var r=function(){if(!Object(s["isEmpty"])(e.options.data))if(t.xScaleCfg)t.renderSlider();else{var n=i.getXScale();t.xScaleCfg={field:n.field,values:n.values||[]},i.data(t.getSliderData(t.curStart,t.curEnd)),i.render()}};i.on(a["p"].AFTER_PAINT,r),this.addDisposable((function(){return i.off(a["p"].AFTER_PAINT,r)})),i.on(a["p"].AFTER_RENDER,r),this.addDisposable((function(){return i.off(a["p"].AFTER_RENDER,r)}))},e.prototype.start=function(){},e.prototype.clear=function(){this.slider&&(this.slider.destroy(),this.slider=null),this.container&&(this.container.remove(!0),this.container=null)},e.prototype.renderSlider=function(){this.slider?(this.slider.update(this.getSliderConfig()),this.slider.render()):(this.container=this.canvas.addGroup(),this.slider=new a["m"](Object(r["__assign"])(Object(r["__assign"])({},this.getSliderConfig()),{container:this.container})),this.slider.init(),this.slider.render(),this.slider.on("sliderchange",this.onChangeFn))},e.prototype.getSliderConfig=function(){var t=this.view,e=t.coordinateBBox,i=this.getRange(),n=b(this.getInteractionConfig()),a=n||{},o=a.padding,s=void 0===o?[0,0,0,0]:o,h=a.backgroundStyle,c=a.foregroundStyle,l=a.handlerStyle,d=a.textStyle,u=a.trendCfg,f=void 0===u?{}:u,p=s[0],g=s[1],m=s[2],v=s[3],y=this.getSliderMinMaxText(this.curStart,this.curEnd),w=y.minText,O=y.maxText,_={x:e.minX+v,y:i.minY+p,width:e.width-v-g,height:i.height-p-m,start:this.curStart,end:this.curEnd,minText:w,maxText:O,backgroundStyle:h,foregroundStyle:c,handlerStyle:l,textStyle:d,trendCfg:Object(r["__assign"])(Object(r["__assign"])({isArea:!1,smooth:!1},f),{data:this.getSliderTrendData()})};return _},e.prototype.getSliderTrendData=function(){var t=this.getViewLayer().options,e=t.data,i=t.yField;return Object(s["map"])(e,(function(t){return t[i]}))},e.prototype.getSliderData=function(t,e){var i=this.getViewLayer().getData(),n=Object(s["size"])(this.xScaleCfg.values),r=Math.round(t*n),a=Math.max(r+1,Math.round(e*n));return h(this.xScaleCfg.field,this.xScaleCfg.values,i,[r,a])},e.prototype.getSliderMinMaxText=function(t,e){var i=this.getViewLayer().options,n=i.data,r=void 0===n?[]:n,a=i.xField,o=Object(s["size"])(r),h=Math.round(t*o),c=Math.max(h+1,Math.round(e*o)),l=r.slice(h,c);return{minText:l.length>0?Object(s["head"])(l)[a]:"",maxText:l.length>0?Object(s["last"])(l)[a]:""}},e.prototype.onChange=function(t){var e=this.view,i=Object(s["clamp"])(Math.min(t[0],t[1]),0,1),n=Object(s["clamp"])(Math.max(t[0],t[1]),0,1),r=this.getSliderData(i,n),a=this.getSliderMinMaxText(i,n),o=a.minText,h=a.maxText;this.curStart=i,this.curEnd=n,this.slider.update({start:i,end:n,minText:o,maxText:h}),this.slider.render();var c=e.getOptions().animate;e.animate(!1),e.changeData(r),e.animate(c)},e}(n["a"]),O=w,_=i("8b04"),x=40;function S(t){return Object(r["__assign"])({loop:!1,auto:!0,height:x,padding:[0,20,0,0],speed:2},t)}var T=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onChangeFn=Object(s["throttle"])(e.onChange.bind(e),20,{leading:!0}),e}return Object(r["__extends"])(e,t),e.getInteractionRange=function(t,e){var i=S(e),n=i.padding[0],r=i.padding[2];return new o["a"](t.minX,t.maxY-i.height-n-r,t.width,i.height+n+r)},e.prototype.setAnimate=function(t){var e=this.view.geometries;this.view.animate(t),e.forEach((function(e){e.animate(t)}))},e.prototype.start=function(){},e.prototype.renderTimeLine=function(){var t=this;this.config=S(this.getInteractionConfig());var e=this.view.viewBBox,i=this.config,n=i.loop,a=i.padding,o=i.speed,h=a[0],c=a[1],l=a[2],d=a[3],u=this.getRange(),f=this.getTicks(),p=e.width-d-c,g={x:e.minX+d,y:u.tl.y+h,width:p,height:u.height-h-l,loop:n,ticks:f,speed:o,defaultCurrentTick:f[0]};this.timeline?Object(s["isEqual"])(g,this.timeLineConfig)||(this.timeLineConfig=g,this.timeline.update(g)):(this.container=this.canvas.addGroup(),this.timeline=new _["a"](Object(r["__assign"])({container:this.container},g)),this.timeline.on("timelinestart",(function(){t.originAnimation=t.view.getOptions().animate,t.setAnimate(!0)})),this.timeline.on("timelineend",(function(){t.setAnimate(t.originAnimation)})),this.timeline.on("timelinechange",this.onChangeFn),this.timeline.on("timelineupdate",this.onChange.bind(this)),this.view.data(this.getFilterData(f[0])),this.timeLineConfig=g)},e.prototype.onChange=function(t){var e=this.getFilterData(t);this.view.changeData(e)},e.prototype.getFilterData=function(t){var e=this.config.field,i=this.getViewLayer().options.data;return i.filter((function(i){return i[e]===t}))},e.prototype.getTicks=function(){var t=this.config.field,e=this.getViewLayer().options.data;return Object(s["uniq"])(e.map((function(e){return e[t]})))},e.prototype.render=function(){var t=this;this.firstRender=!0,this.view.on(a["p"].BEFORE_RENDER,(function(){t.renderTimeLine()})),this.view.on(a["p"].BEFORE_PAINT,(function(){t.renderTimeLine()})),this.view.on(a["p"].AFTER_PAINT,(function(){t.config.auto&&t.firstRender&&(t.timeline.isPlay=!0,t.timeline.changePlayStatus()),t.firstRender=!1})),this.view.on(a["p"].AFTER_RENDER,(function(){t.config.auto&&t.firstRender&&(t.timeline.isPlay=!0,t.timeline.changePlayStatus()),t.firstRender=!1}))},e.prototype.clear=function(){this.timeline&&(this.timeline.destroy(),this.timeline=null),this.container&&(this.container.remove(!0),this.container=null)},e}(n["a"]),C=T;n["a"].registerInteraction("slider",O),n["a"].registerInteraction("scrollbar",m),n["a"].registerInteraction("timeline",C);e["a"]=n["a"]},"99afe":function(t,e,i){"use strict";i("15ad"),i("d1f8"),i("25ee"),i("24b8");var n=i("4531");i.d(e,"a",(function(){return n["a"]}));i("1505"),i("15db"),i("3305"),i("b6a6"),i("4f23"),i("f02d"),i("ac2e"),i("4625"),i("7884"),i("b7cb"),i("faa7"),i("2feb"),i("b3f7"),i("5649")},fd7e:function(t,e,i){"use strict";var n=i("9ab4"),r=i("8937"),a=i("37f6"),o=function(t){function e(e,i,n,r){var a=t.call(this,e)||this;return a.viewLayer=i,a.interactionRange=n,a.interactionConfig=r,a.disposables=[],a.render(),a}return Object(n["__extends"])(e,t),e.registerInteraction=function(t,i){e.GLOBAL_INTERACTION_MAP[t]=i},e.registerPlotInteraction=function(t,i,n){e.PLOT_INTERACTION_MAP[t]||(e.PLOT_INTERACTION_MAP[t]={}),e.PLOT_INTERACTION_MAP[t][i]=n},e.getInteraction=function(t,i){return i&&e.PLOT_INTERACTION_MAP[i]&&e[i][t]?e.PLOT_INTERACTION_MAP[i][t]:e.GLOBAL_INTERACTION_MAP[t]},e.getInteractionRange=function(t,e){},e.prototype.destroy=function(){Object(r["each"])(this.disposables,(function(t){t()})),this.disposables=[],this.clear(),t.prototype.destroy.call(this)},e.prototype.getViewLayer=function(){return this.viewLayer},e.prototype.getRange=function(){return this.interactionRange},e.prototype.getInteractionConfig=function(){return this.interactionConfig},e.prototype.addDisposable=function(t){this.disposables.push(t)},e.prototype.render=function(){},e.GLOBAL_INTERACTION_MAP={},e.PLOT_INTERACTION_MAP={},e}(a["a"]);e["a"]=o}}]);