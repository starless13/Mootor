(function(){var b=window.document;var a=(function(){a=function(c){return new a.fn(c)};a.fn=function(e){var c=typeof e,d;if(c==="string"){if(e.indexOf("#")>-1){e=e.replace("#","");d=b.getElementById(e)}else{if(e.indexOf(".")>-1){e=e.replace(".","");d=b.getElementsByClassName(e)}}}else{if(c==="object"){d=e}}this.el=(function(){return d}());this.query=(function(){return e}());return this};a.fn.prototype=a.prototype={ready:function(c){a.ready(c,this.el)},show:function(d){var c=typeof d==="object"?d:this.el;if(c!==undefined){c.style.display="block"}},hide:function(d){var c=typeof d==="object"?d:this.el;if(c!==undefined){c.style.display="none"}},bind:function(c,d){this.el.onclick=function(){return false};this.el.addEventListener(c,d,false)},unbind:function(c,d){this.el.removeEventListener(c,d,false)},setClass:function(c){this.el.className+=" "+c},hasClass:function(c){return(this.el.className.indexOf(c)!==0)},removeClass:function(c){this.el.className=this.el.className.replace(" "+c,"")}};a.extend=function(e,d){var c;if(d===undefined){d=a.prototype}for(c in e){if(e.hasOwnProperty(c)){d[c]=e[c]}}};a.extend({ready:function(f,e){if(e===b){e=window}if(e===window){var d=false,c;c=function(g){if(d){return}if(g.type==="readystatechange"&&window.document.readyState!=="complete"){return}f.call(window.document);d=true};if(e!==undefined&&a.context.addEventListener){e.addEventListener("DOM-ContentLoaded",c,false);e.addEventListener("readystatechange",c,false);e.addEventListener("load",c,false)}}else{e.onload=f}},context:{addEventListener:false},view:{clientH:0,clientW:0,hide:function(){var c=b.createElement("style");c.innerHTML="body * {display: none}";b.head.appendChild(c);a.view.styles=c},show:function(){b.head.removeChild(a.view.styles)}}},a);if(window.addEventListener){a.context.addEventListener=true}else{a.context.addEventListener=false}a.ready(function(){var d=b.documentElement.clientWidth,c=b.documentElement.clientHeight;a.view.clientH=(function(){return c}());a.view.clientW=(function(){return d}());a.view.show()},b);a.view.hide();return a}());if(!window.$||typeof($)!=="function"){window.$=a}(function(d){var c,f,e;d.extend({gestures:{list:[]}},d);c=function(g){if(g.id!==""&&g.rel!==undefined){return g.id}else{if(g.rel!==undefined){return g.rel}else{if(typeof g==="object"){return g}}}};f=function(g){var k=d.gestures.list,j=g.type,i=g.fn,l=g.callback,h=c(i.el);if(k[h]===undefined){k[h]={event:[]};i.bind("mousedown",i);i.bind("mouseup",i);i.bind("touchstart",i);i.bind("touchend",i)}if(k[h].event[j]===undefined){k[h].event[j]=[]}k[h].event[j].push(l)};e=function(j,h){var g;if(h!==undefined){for(g=0;g<h.length;g++){if(h[g].handleGesture!==undefined){h[g].handleGesture(j)}else{h[g](j)}}}};d.Gesture={onTapEnd:function(g){f({fn:this,callback:g,type:"onTapEnd"})},onTapStart:function(g){f({fn:this,callback:g,type:"onTapStart"})},onTapHold:function(g){f({fn:this,callback:g,type:"onTapHold"})},onDragStart:function(g){f({fn:this,callback:g,type:"onDragStart"})},onDragMove:function(g){f({fn:this,callback:g,type:"onDragMove"})},onDragEnd:function(g){f({fn:this,callback:g,type:"onDragEnd"})},handleEvent:function(n){var j=c(this.el),m={el:this.el},i=d.gestures.list[j],h=new Date(),l,k;n.preventDefault();if(n.clientX||n.clientY){l=n.clientX;k=n.clientY}else{try{l=n.touches[0].clientX;k=n.touches[0].clientY}catch(g){}}if(n.type==="mousedown"||n.type==="touchstart"){this.bind("mousemove",this);this.bind("touchmove",this);i.event.time=h.getTime();i.event.isDraggingY=0;i.event.mousedown=true;i.event.tapped=false;i.event.startX=l;i.event.startY=k;window.setTimeout(function(){if(i.event.mousedown===true){m.type="tapHold";e(m,i.event.onTapHold)}},500);if(i.event.onTapStart!==undefined){m.type="tapStart";e(m,i.event.onTapStart)}}if(n.type==="mousemove"||n.type==="touchmove"){m.lastY=i.event.y;m.lastX=i.event.x;i.event.y=m.y=k;i.event.x=m.x=l;m.distanceFromOriginY=k-i.event.startY;m.distanceFromOriginX=l-i.event.startX;if(i.event.isDraggingY===0){if((k-i.event.startY)>10){i.event.isDraggingY=1;m.type="dragStart";e(m,i.event.onDragStart)}else{if((k-i.event.startY)<-10){i.event.isDraggingY=-1;m.type="dragStart";e(m,i.event.onDragStart)}}}else{m.type="dragMove";e(m,i.event.onDragMove)}}if(n.type==="mouseup"||n.type==="touchend"){if(i.event.tapped===false){this.unbind("mousemove",this);this.unbind("touchmove",this);i.event.tapped=true;m.time=h.getTime()-i.event.time;i.event.mousedown=false}if(i.event.isDraggingY!==0){m.type="dragEnd";i.event.isDraggingY=0;e(m,i.event.onDragEnd)}else{m.type="tapEnd";e(m,i.event.onTapEnd)}}}};d.extend(d.Gesture)}(a));(function(c){c.Fx={translate:function(i,e,f){var h=e.x,d=e.y,g;g=f.transitionDuration;i.style.transitionProperty="webkit-transform";if(g!==undefined&&g>0){i.style.webkitTransitionDuration=g+"s";i.style.webkitTransitionTimingFunction="ease-out"}else{this.clean(i)}i.style.webkitTransform="translate3d("+h+"px,"+d+"px, 0)";if(f.callback){window.setTimeout(f.callback,g*1000)}},clean:function(d){d.style.webkitTransitionDuration="";d.style.webkitTransitionTimingFunction=""}};c.extend(c.Fx)}(a));(function(c,e){var f=c.Fx,g,d;g=function(h){h.style.width=c.view.clientW+"px"};d=function(k){var l,h,j;this.el=k.el;this.navClass=k.nav_class!==undefined?k.nav_class:"nav";this.panelClass=k.panel_class!==undefined?k.panel_class:"panel";this.headerId=k.header_id!==undefined?k.header_id:"header";this.hiddenClass=k.hidden_class!==undefined?k.hidden_class:"hidden";this.margin=k.panel_margin!==undefined?k.panel_margin:40;this.width=k.width!==undefined?k.width:c.view.clientW;this.height=k.height!==undefined?k.height:c.view.clientH;this.x=0;this.y=0;this.current=0;this.back=0;this.panels=[];this.header=this.header.init(this);this.isMoving=false;this.direction=0;this.history=[];j=this.el.getElementsByClassName(this.panelClass);this.count=j.length;for(l=j.length;l--;){this.panels[l]={el:j[l]};h=this.panels[l];h.anchors=h.el.getElementsByClassName(this.navClass);h.hidden=h.el.getElementsByClassName(this.hiddenClass)}e(this.el).onDragMove(this);e(this.el).onDragEnd(this);if(b.body.style.overflow!=="hidden"){b.body.style.overflow="hidden"}this.init();return this};d.prototype={handleGesture:function(h){switch(h.type){case"dragMove":this.move(h);break;case"dragEnd":this.check(h);break}},header:{init:function(h){var i={};i.el=b.getElementById(h.headerId);if(i.el){h.nav(i);g(i.el);h.top=i.el.offsetHeight;h.height=c.view.clientH-h.top;h.el.style.marginTop=h.top+"px";return i}}},nav:function(h){h.anchors=h.el.getElementsByClassName(this.navClass)},init:function(){var o,l,m,n=this,h,k,p,r,q;o=function(i){n.direction=0;e(i.el).removeClass("active");if(n.isMoving===false){n.set(i.el.rel)}return false};k=function(i){e(i.el).setClass("active")};p=function(){for(m=h.anchors.length;m--;){e(h.anchors[m]).removeClass("active")}};for(m=this.count;m--;){h=this.panels[m];if(this.width===undefined){g(h.el)}else{h.el.style.width=this.width+"px"}h.el.style.overflow="hidden";if(m>0){h.el.style.left=-((this.width+this.margin)*4)+"px";h.el.style.top="0px"}else{h.el.style.left="0px"}h.height=h.el.offsetHeight;if(this.height>h.height){h.el.style.height=this.height+"px";h.height=this.height}for(l=h.anchors.length;l--;){if(h.anchors[l].rel!==""){e(h.anchors[l]).onTapStart(k);e(h.anchors[l]).onTapEnd(p);e(h.anchors[l]).onDragEnd(p);e(h.anchors[l]).onTapEnd(o)}}}if(this.header){q=function(){n.goBack()};for(m=this.header.anchors.length;m--;){r=this.header.anchors[m];if(r.rel==="back"){e(r).onTapEnd(q)}}}},move:function(h){if(h.isDraggingY!==0){this.isMoving=true;this.y=this.y+(h.y-h.lastY);this.translate({el:this.panels[this.current].el,y:this.y})}},check:function(j){var i=this.panels[this.current],k=i.height-this.height,h;h=function(){f.clean(i.el)};if(j.isDraggingY!==0){this.isMoving=false;if(this.y>=0||k<-this.y){if(this.y>0){this.y=0}else{this.y=-(i.height-this.height)}this.translate({y:this.y,el:i.el,duration:0.5,callback:h})}}},set:function(h){var j;for(j=this.count;j--;){if(this.panels[j].el.id===h){this.back=this.current;if(this.direction===0){this.history.push(this.current)}this.current=j;this.load()}}},translate:function(h){if(h.duration===undefined){h.duration=0}if(h.callback===undefined){h.callback=function(){}}if(h.y===undefined){h.y=0}if(h.x===undefined){h.x=0}if(h.duration===undefined){h.duration=0}f.translate(h.el,{y:h.y,x:h.x},{transitionDuration:h.duration,callback:h.callback})},hide:function(h){var j;for(j=h.hidden.length;j--;){e(h.hidden[j]).hide()}},show:function(h){var j;for(j=h.hidden.length;j--;){e(h.hidden[j]).show()}},load:function(){var h,l,n,p=this.back,q=this.show,j=this.translate,k,o,i=this.el,m=false;h=this.panels[this.current];n=this.panels[this.back];this.hide(h);this.hide(n);e(h.el).show();l=function(){q(h);e(n.el).hide()};o=this.width+this.margin;if(this.current!==0){if(this.back===0){h.el.style.left=o+"px"}else{j({el:i});n.el.style.left="0px";if(this.direction!==0){o=-o}h.el.style.left=o+"px"}}else{if(this.back!==0){j({el:i,x:-o});n.el.style.left=o+"px";h.el.style.left="0px";o=0}}this.side===1?this.side=0:this.side=1;window.setTimeout(function(){j({el:i,duration:0.5,x:-o,callback:l})},10)},goBack:function(){this.direction=-1;this.back=this.history.pop();this.set(this.panels[this.back].el.id)}};c.Nav={nav:function(h){if(typeof h!=="object"){h={}}h.el=this.el;return new d(h)}};c.extend(c.Nav)}(a,$))}(window));