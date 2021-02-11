(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendors~StandaloneServer~StandaloneServerTraffic~6617f3d3"],{"050e":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("9ab4"),i=r("dc1b");e.Attribute=i.default;var a={},s=function(t){return a[t.toLowerCase()]};e.getAttribute=s;var u=function(t,e){if(s(t))throw new Error("Attribute type '"+t+"' existed.");a[t.toLowerCase()]=e};e.registerAttribute=u,n.__exportStar(r("f813"),e)},"17b6":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DEFAULT_Y=0,e.MARGIN_RATIO=.5,e.DODGE_RATIO=.5,e.GAP=.05},"1b08":function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r("8937"),i=function(t,e){return Object(n["isString"])(e)?e:t.invert(t.scale(e))},a=function(){function t(t){this.names=[],this.scales=[],this.linear=!1,this.values=[],this.callback=function(){return[]},this._parseCfg(t)}return t.prototype.mapping=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=e.map((function(e,r){return t._toOriginParam(e,t.scales[r])}));return this.callback.apply(this,n)},t.prototype.getLinearValue=function(t){var e=this.values.length-1,r=Math.floor(e*t),n=e*t-r,i=this.values[r],a=r===e?i:this.values[r+1];return i+(a-i)*n},t.prototype.getNames=function(){for(var t=this.scales,e=this.names,r=Math.min(t.length,e.length),n=[],i=0;i<r;i+=1)n.push(e[i]);return n},t.prototype.getFields=function(){return this.scales.map((function(t){return t.field}))},t.prototype.getScale=function(t){return this.scales[this.names.indexOf(t)]},t.prototype.defaultCallback=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 0===e.length?this.values:e.map((function(e,r){var n=t.scales[r];return"identity"===n.type?n.values[0]:t._getAttributeValue(n,e)}))},t.prototype._parseCfg=function(t){var e=this,r=t.type,i=void 0===r?"base":r,a=t.names,s=void 0===a?[]:a,u=t.scales,o=void 0===u?[]:u,c=t.values,l=void 0===c?[]:c,p=t.callback;this.type=i,this.scales=o,this.values=l,this.names=s,this.callback=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(p){var i=p.apply(void 0,t);if(!Object(n["isNil"])(i))return[i]}return e.defaultCallback.apply(e,t)}},t.prototype._getAttributeValue=function(t,e){if(t.isCategory&&!this.linear){var r=t.translate(e);return this.values[r%this.values.length]}var n=t.scale(e);return this.getLinearValue(n)},t.prototype._toOriginParam=function(t,e){return e.isLinear?t:Object(n["isArray"])(t)?t.map((function(t){return i(e,t)})):i(e,t)},t}(),s=a,u=r("9ab4"),o=r("e945"),c=function(t){function e(e){var r=t.call(this,e)||this;return r.type="color",r.names=["color"],Object(n["isString"])(r.values)&&(r.linear=!0),r.gradient=o["default"].gradient(r.values),r}return Object(u["__extends"])(e,t),e.prototype.getLinearValue=function(t){return this.gradient(t)},e}(s),l=c,p=function(t){function e(e){var r=t.call(this,e)||this;return r.type="opacity",r.names=["opacity"],r}return Object(u["__extends"])(e,t),e}(s),f=p,h=function(t){function e(e){var r=t.call(this,e)||this;return r.names=["x","y"],r.type="position",r}return Object(u["__extends"])(e,t),e.prototype.mapping=function(t,e){var r=this.scales,i=r[0],a=r[1];return Object(n["isNil"])(t)||Object(n["isNil"])(e)?[]:[Object(n["isArray"])(t)?t.map((function(t){return i.scale(t)})):i.scale(t),Object(n["isArray"])(e)?e.map((function(t){return a.scale(t)})):a.scale(e)]},e}(s),d=h,v=function(t){function e(e){var r=t.call(this,e)||this;return r.type="shape",r.names=["shape"],r}return Object(u["__extends"])(e,t),e.prototype.getLinearValue=function(t){var e=Math.round((this.values.length-1)*t);return this.values[e]},e}(s),y=v,g=function(t){function e(e){var r=t.call(this,e)||this;return r.type="size",r.names=["size"],r}return Object(u["__extends"])(e,t),e}(s),m=g,j=(r("f2fb"),{}),b=function(t){return j[t.toLowerCase()]},_=function(t,e){if(b(t))throw new Error("Attribute type '"+t+"' existed.");j[t.toLowerCase()]=e};_("Color",l),_("Opacity",f),_("Position",d),_("Shape",y),_("Size",m)},2892:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("8937"),i=r("17b6"),a=function(){function t(t){var e=t.xField,r=t.yField,n=t.adjustNames,i=void 0===n?["x","y"]:n;this.adjustNames=i,this.xField=e,this.yField=r}return t.prototype.isAdjust=function(t){return this.adjustNames.indexOf(t)>=0},t.prototype.getAdjustRange=function(t,e,r){var n,i,a=this.yField,s=r.indexOf(e),u=r.length;return!a&&this.isAdjust("y")?(n=0,i=1):u>1?(n=r[0===s?0:s-1],i=r[s===u-1?u-1:s+1],0!==s?n+=(e-n)/2:n-=(i-e)/2,s!==u-1?i-=(i-e)/2:i+=(e-r[u-2])/2):(n=0===e?0:e-.5,i=0===e?1:e+.5),{pre:n,next:i}},t.prototype.adjustData=function(t,e){var r=this,i=this.getDimValues(e);n.each(t,(function(t,e){n.each(i,(function(n,i){r.adjustDim(i,n,t,e)}))}))},t.prototype.groupData=function(t,e){return n.each(t,(function(t){void 0===t[e]&&(t[e]=i.DEFAULT_Y)})),n.groupBy(t,e)},t.prototype.adjustDim=function(t,e,r,n){},t.prototype.getDimValues=function(t){var e=this,r=e.xField,a=e.yField,s={},u=[];if(r&&this.isAdjust("x")&&u.push(r),a&&this.isAdjust("y")&&u.push(a),u.forEach((function(e){s[e]=n.valuesOfKey(t,e).sort((function(t,e){return t-e}))})),!a&&this.isAdjust("y")){var o="y";s[o]=[i.DEFAULT_Y,1]}return s},t}();e.default=a},dc1b:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("8937"),i=function(t,e){return n.isString(e)?e:t.invert(t.scale(e))},a=function(){function t(t){this.names=[],this.scales=[],this.linear=!1,this.values=[],this.callback=function(){return[]},this._parseCfg(t)}return t.prototype.mapping=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=e.map((function(e,r){return t._toOriginParam(e,t.scales[r])}));return this.callback.apply(this,n)},t.prototype.getLinearValue=function(t){var e=this.values.length-1,r=Math.floor(e*t),n=e*t-r,i=this.values[r],a=r===e?i:this.values[r+1];return i+(a-i)*n},t.prototype.getNames=function(){for(var t=this.scales,e=this.names,r=Math.min(t.length,e.length),n=[],i=0;i<r;i+=1)n.push(e[i]);return n},t.prototype.getFields=function(){return this.scales.map((function(t){return t.field}))},t.prototype.getScale=function(t){return this.scales[this.names.indexOf(t)]},t.prototype.defaultCallback=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 0===e.length?this.values:e.map((function(e,r){var n=t.scales[r];return"identity"===n.type?n.values[0]:t._getAttributeValue(n,e)}))},t.prototype._parseCfg=function(t){var e=this,r=t.type,i=void 0===r?"base":r,a=t.names,s=void 0===a?[]:a,u=t.scales,o=void 0===u?[]:u,c=t.values,l=void 0===c?[]:c,p=t.callback;this.type=i,this.scales=o,this.values=l,this.names=s,this.callback=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(p){var i=p.apply(void 0,t);if(!n.isNil(i))return[i]}return e.defaultCallback.apply(e,t)}},t.prototype._getAttributeValue=function(t,e){if(t.isCategory&&!this.linear){var r=t.translate(e);return this.values[r%this.values.length]}var n=t.scale(e);return this.getLinearValue(n)},t.prototype._toOriginParam=function(t,e){return e.isLinear?t:n.isArray(t)?t.map((function(t){return i(e,t)})):i(e,t)},t}();e.default=a},dc4d:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("2892");e.Adjust=n.default;var i={},a=function(t){return i[t.toLowerCase()]};e.getAdjust=a;var s=function(t,e){if(a(t))throw new Error("Adjust type '"+t+"' existed.");i[t.toLowerCase()]=e};e.registerAdjust=s},eecd:function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var n=r("8937"),i=0,a=.5,s=.5,u=.05,o=function(){function t(t){var e=t.xField,r=t.yField,n=t.adjustNames,i=void 0===n?["x","y"]:n;this.adjustNames=i,this.xField=e,this.yField=r}return t.prototype.isAdjust=function(t){return this.adjustNames.indexOf(t)>=0},t.prototype.getAdjustRange=function(t,e,r){var n,i,a=this.yField,s=r.indexOf(e),u=r.length;return!a&&this.isAdjust("y")?(n=0,i=1):u>1?(n=r[0===s?0:s-1],i=r[s===u-1?u-1:s+1],0!==s?n+=(e-n)/2:n-=(i-e)/2,s!==u-1?i-=(i-e)/2:i+=(e-r[u-2])/2):(n=0===e?0:e-.5,i=0===e?1:e+.5),{pre:n,next:i}},t.prototype.adjustData=function(t,e){var r=this,i=this.getDimValues(e);n["each"](t,(function(t,e){n["each"](i,(function(n,i){r.adjustDim(i,n,t,e)}))}))},t.prototype.groupData=function(t,e){return n["each"](t,(function(t){void 0===t[e]&&(t[e]=i)})),n["groupBy"](t,e)},t.prototype.adjustDim=function(t,e,r,n){},t.prototype.getDimValues=function(t){var e=this,r=e.xField,a=e.yField,s={},u=[];if(r&&this.isAdjust("x")&&u.push(r),a&&this.isAdjust("y")&&u.push(a),u.forEach((function(e){s[e]=n["valuesOfKey"](t,e).sort((function(t,e){return t-e}))})),!a&&this.isAdjust("y")){var o="y";s[o]=[i,1]}return s},t}(),c=o,l={},p=function(t){return l[t.toLowerCase()]},f=function(t,e){if(p(t))throw new Error("Adjust type '"+t+"' existed.");l[t.toLowerCase()]=e},h=r("9ab4"),d=function(t){function e(e){var r=t.call(this,e)||this;r.cacheMap={},r.adjustDataArray=[],r.mergeData=[];var n=e.marginRatio,i=void 0===n?a:n,u=e.dodgeRatio,o=void 0===u?s:u,c=e.dodgeBy;return r.marginRatio=i,r.dodgeRatio=o,r.dodgeBy=c,r}return Object(h["__extends"])(e,t),e.prototype.process=function(t){var e=n["clone"](t),r=n["flatten"](e),i=this.dodgeBy,a=i?n["group"](r,i):e;return this.cacheMap={},this.adjustDataArray=a,this.mergeData=r,this.adjustData(a,r),this.adjustDataArray=[],this.mergeData=[],e},e.prototype.adjustDim=function(t,e,r,i){var a=this,s=this.getDistribution(t),u=this.groupData(r,t);return n["each"](u,(function(r,u){var o;o=1===e.length?{pre:e[0]-1,next:e[0]+1}:a.getAdjustRange(t,parseFloat(u),e),n["each"](r,(function(e){var r=e[t],n=s[r],u=n.indexOf(i);e[t]=a.getDodgeOffset(o,u,n.length)}))})),[]},e.prototype.getDodgeOffset=function(t,e,r){var n=this,i=n.dodgeRatio,a=n.marginRatio,s=t.pre,u=t.next,o=u-s,c=o*i/r,l=a*c,p=.5*(o-r*c-(r-1)*l)+((e+1)*c+e*l)-.5*c-.5*o;return(s+u)/2+p},e.prototype.getDistribution=function(t){var e=this.adjustDataArray,r=this.cacheMap,i=r[t];return i||(i={},n["each"](e,(function(e,r){var a=n["valuesOfKey"](e,t);a.length||a.push(0),n["each"](a,(function(t){i[t]||(i[t]=[]),i[t].push(r)}))})),r[t]=i),i},e}(c),v=d;function y(t,e){return(e-t)*Math.random()+t}var g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(h["__extends"])(e,t),e.prototype.process=function(t){var e=n["clone"](t),r=n["flatten"](e);return this.adjustData(e,r),e},e.prototype.adjustDim=function(t,e,r){var i=this,a=this.groupData(r,t);return n["each"](a,(function(r,n){return i.adjustGroup(r,t,parseFloat(n),e)}))},e.prototype.getAdjustOffset=function(t){var e=t.pre,r=t.next,n=(r-e)*u;return y(e+n,r-n)},e.prototype.adjustGroup=function(t,e,r,i){var a=this,s=this.getAdjustRange(e,r,i);return n["each"](t,(function(t){t[e]=a.getAdjustOffset(s)})),t},e}(c),m=g,j=n["Cache"],b=function(t){function e(e){var r=t.call(this,e)||this,n=e.adjustNames,i=void 0===n?["y"]:n,a=e.height,s=void 0===a?NaN:a,u=e.size,o=void 0===u?10:u,c=e.reverseOrder,l=void 0!==c&&c;return r.adjustNames=i,r.height=s,r.size=o,r.reverseOrder=l,r}return Object(h["__extends"])(e,t),e.prototype.process=function(t){var e=this,r=e.yField,n=e.reverseOrder,i=r?this.processStack(t):this.processOneDimStack(t);return n?this.reverse(i):i},e.prototype.reverse=function(t){return t.slice(0).reverse()},e.prototype.processStack=function(t){var e=this,r=e.xField,i=e.yField,a=e.reverseOrder,s=a?this.reverse(t):t,u=new j,o=new j;return s.map((function(t){return t.map((function(t){var e,a=n["get"](t,r,0),s=n["get"](t,i),c=a.toString();if(s=n["isArray"](s)?s[1]:s,!n["isNil"](s)){var l=s>=0?u:o;l.has(c)||l.set(c,0);var p=l.get(c),f=s+p;return l.set(c,f),Object(h["__assign"])(Object(h["__assign"])({},t),(e={},e[i]=[p,f],e))}return t}))}))},e.prototype.processOneDimStack=function(t){var e=this,r=this,n=r.xField,i=r.height,a=r.reverseOrder,s="y",u=a?this.reverse(t):t,o=new j;return u.map((function(t){return t.map((function(t){var r,a=e.size,u=t[n],c=2*a/i;o.has(u)||o.set(u,c/2);var l=o.get(u);return o.set(u,l+c),Object(h["__assign"])(Object(h["__assign"])({},t),(r={},r[s]=l,r))}))}))},e}(c),_=b,O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(h["__extends"])(e,t),e.prototype.process=function(t){var e=n["flatten"](t),r=this,i=r.xField,a=r.yField,s=this.getXValuesMaxMap(e),u=Math.max.apply(Math,Object.keys(s).map((function(t){return s[t]})));return n["map"](t,(function(t){return n["map"](t,(function(t){var e,r,o=t[a],c=t[i];if(n["isArray"](o)){var l=(u-s[c])/2;return Object(h["__assign"])(Object(h["__assign"])({},t),(e={},e[a]=n["map"](o,(function(t){return l+t})),e))}var p=(u-o)/2;return Object(h["__assign"])(Object(h["__assign"])({},t),(r={},r[a]=[p,o+p],r))}))}))},e.prototype.getXValuesMaxMap=function(t){var e=this,r=this,i=r.xField,a=r.yField,s=n["groupBy"](t,(function(t){return t[i]}));return n["mapValues"](s,(function(t){return e.getDimMaxValue(t,a)}))},e.prototype.getDimMaxValue=function(t,e){var r=n["map"](t,(function(t){return n["get"](t,e,[])})),i=n["flatten"](r);return Math.max.apply(Math,i)},e}(c),x=O;f("Dodge",v),f("Jitter",m),f("Stack",_),f("Symmetric",x)},f813:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("f2fb");e.Scale=n.Scale}}]);