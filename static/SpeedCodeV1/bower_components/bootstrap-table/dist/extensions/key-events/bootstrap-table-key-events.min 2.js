/*
* bootstrap-table - v1.11.0 - 2016-07-02
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2016 zhixin wen
* Licensed MIT License
*/
!function(a){"use strict";a.extend(a.fn.bootstrapTable.defaults,{keyEvents:!1});var b=a.fn.bootstrapTable.Constructor,c=b.prototype.init;b.prototype.init=function(){c.apply(this,Array.prototype.slice.apply(arguments)),this.initKeyEvents()},b.prototype.initKeyEvents=function(){if(this.options.keyEvents){var b=this;a(document).off("keydown").on("keydown",function(c){var d=b.$toolbar.find(".search input"),e=b.$toolbar.find('button[name="refresh"]'),f=b.$toolbar.find('button[name="toggle"]'),g=b.$toolbar.find('button[name="paginationSwitch"]');if(document.activeElement===d.get(0)||!a.contains(document.activeElement,b.$toolbar.get(0)))return!0;switch(c.keyCode){case 83:if(!b.options.search)return;return d.focus(),!1;case 82:if(!b.options.showRefresh)return;return e.click(),!1;case 84:if(!b.options.showToggle)return;return f.click(),!1;case 80:if(!b.options.showPaginationSwitch)return;return g.click(),!1;case 37:if(!b.options.pagination)return;return b.prevPage(),!1;case 39:if(!b.options.pagination)return;return void b.nextPage()}})}}}(jQuery);