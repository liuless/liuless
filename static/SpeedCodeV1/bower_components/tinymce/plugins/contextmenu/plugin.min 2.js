tinymce.PluginManager.add("contextmenu",function(e){var t,n=e.settings.contextmenu_never_use_native,r=function(e){return e.ctrlKey&&!n},i=function(){return tinymce.Env.mac&&tinymce.Env.webkit};e.on("mousedown",function(t){i()&&2===t.button&&!r(t)&&e.selection.isCollapsed()&&e.once("contextmenu",function(t){e.selection.placeCaretAt(t.clientX,t.clientY)})}),e.on("contextmenu",function(n){var i;if(!r(n)){if(n.preventDefault(),i=e.settings.contextmenu||"link image inserttable | cell row column deletetable",t)t.show();else{var o=[];tinymce.each(i.split(/[ ,]/),function(t){var n=e.menuItems[t];"|"==t&&(n={text:t}),n&&(n.shortcut="",o.push(n))});for(var a=0;a<o.length;a++)"|"==o[a].text&&(0!==a&&a!=o.length-1||o.splice(a,1));t=new tinymce.ui.Menu({items:o,context:"contextmenu",classes:"contextmenu"}).renderTo(),e.on("remove",function(){t.remove(),t=null})}var s={x:n.pageX,y:n.pageY};e.inline||(s=tinymce.DOM.getPos(e.getContentAreaContainer()),s.x+=n.clientX,s.y+=n.clientY),t.moveTo(s.x,s.y)}})});