/*
* bootstrap-table - v1.11.0 - 2016-07-02
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2016 zhixin wen
* Licensed MIT License
*/
!function(){"undefined"!=typeof angular&&angular.module("bsTable",[]).constant("uiBsTables",{bsTables:{}}).directive("bsTableControl",["uiBsTables",function(a){function b(a){var b;return $.each(g,function(c,e){return e.$el.closest(d).has(a).length?(b=e,!0):void 0}),b}function c(){var a=this,b=a.$s.bsTableControl.state;a.$s.$applyAsync(function(){b.scroll=a.$el.bootstrapTable("getScrollPosition")})}var d=".bootstrap-table",e=".fixed-table-body",f=".search input",g=a.bsTables;return $(window).resize(function(){$.each(g,function(a,b){b.$el.bootstrapTable("resetView")})}),$(document).on("post-header.bs.table",d+" table",function(a){var f=b(a.target);f&&f.$el.closest(d).find(e).on("scroll",c.bind(f))}).on("sort.bs.table",d+" table",function(a,c,d){var e=b(a.target);if(e){var f=e.$s.bsTableControl.state;e.$s.$applyAsync(function(){f.sortName=c,f.sortOrder=d})}}).on("page-change.bs.table",d+" table",function(a,c,d){var e=b(a.target);if(e){var f=e.$s.bsTableControl.state;e.$s.$applyAsync(function(){f.pageNumber=c,f.pageSize=d})}}).on("search.bs.table",d+" table",function(a,c){var d=b(a.target);if(d){var e=d.$s.bsTableControl.state;d.$s.$applyAsync(function(){e.searchText=c})}}).on("focus blur",d+" "+f,function(a){var c=b(a.target);if(c){var d=c.$s.bsTableControl.state;c.$s.$applyAsync(function(){d.searchHasFocus=$(a.target).is(":focus")})}}),{restrict:"EA",scope:{bsTableControl:"="},link:function(a,b){g[a.$id]={$s:a,$el:b};a.instantiated=!1,a.$watch("bsTableControl.options",function(c){c||(c=a.bsTableControl.options={});var e=a.bsTableControl.state||{};a.instantiated&&b.bootstrapTable("destroy"),b.bootstrapTable(angular.extend(angular.copy(c),e)),a.instantiated=!0,"scroll"in e&&b.bootstrapTable("scrollTo",e.scroll),"searchHasFocus"in e&&b.closest(d).find(f).focus()},!0),a.$watch("bsTableControl.state",function(c){c||(c=a.bsTableControl.state={}),b.trigger("directive-updated.bs.table",[c])},!0),a.$on("$destroy",function(){delete g[a.$id]})}}}])}();