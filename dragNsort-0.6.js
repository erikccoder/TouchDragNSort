(function(a,b){"use strict";function e(b,c,d){function A(){for(var b=0;q>b;b++){if(r[b]={x:0,y:0,width:0,height:0},o[b])for(var c in i)o[b].style[c]=i[c];I(o[b],k.childClassName)}if(B(),m)for(var c in j)m.style[c]=j[c];s=a(m,{drag_lock_to_axis:!0}).on("touch dragleft dragright release",O),m.addEventListener("webkitTransitionEnd",y,!1),m.addEventListener("msTransitionEnd",y,!1),m.addEventListener("oTransitionEnd",y,!1),m.addEventListener("otransitionend",y,!1),m.addEventListener("transitionend",y,!1)}function B(){p=m.getBoundingClientRect();for(var a,i,b=0,c=p.right-p.left,d=0,j=k.margins[e],l=0;q>l;l++)a=o[l].getBoundingClientRect(),d=a.right-a.left,i=l?r[l-1].x+r[l-1].width+k.margins[h]+k.margins[f]:k.margins[h],r[l].width=d,r[l].height=a.bottom-a.top,b=b>=r[l].height?b:r[l].height,d+i>c&&(i=k.margins[h],j+=b+k.margins[e]+k.margins[g]),r[l].x=i,r[l].y=j,F(l,0);m.style.height=r[q-1].y+b+k.margins[g]+"px"}function C(a){v||0>a.propertyName.search("transform")||t==a.target&&(t=u=!1,D(),d.call(this,{elements:o}))}function D(){for(var a,b=0;q>b;b++)for(var c=b+1;q>c;c++)r[b].x>r[c].x&&(a=o[c],o[c]=o[b],o[b]=a,a=r[c],r[c]=r[b],r[b]=a)}function E(a,b,c,d){var e=o[a],f=e&&e.style;f&&(f.webkitTransitionDuration=f.MozTransitionDuration=f.msTransitionDuration=f.OTransitionDuration=f.transitionDuration=(c?c:0===c?0:k.translateSpeed)+"ms",f.webkitTransform="translate("+b+"px, "+d+"px) "+"translateZ(0)",f.msTransform=f.MozTransform=f.OTransform="translateX("+b+"px) translateY("+d+"px)")}function F(a,b){E(a,r[a].x,b,r[a].y)}function G(a,b){return a.className&&a.className.match(RegExp("(\\s|^)"+b+"(\\s|$)"))}function H(a,b){if(G(a,b)){var c=RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c,"")}}function I(a,b){G(a,b)||(a.className+=" "+b)}function J(a){return G(a,k.childClassName)?a:a.parentNode&&a.parentNode!=m?J(a.parentNode):void 0}function K(a){for(var b=-1,c=0;o.length>c;c++)o[c]==a&&(b=c);return b}function L(a,b,c,d,e,f,g,h){return c+g>2*Math.abs(a-e)&&d+h>2*Math.abs(b-f)}function M(a,b){for(var c=0;q>c;c++)if(a!=c&&L(b,r[a].y,r[a].width+k.collideOffsetPx,r[a].height,r[c].x,r[c].y,r[c].width+k.collideOffsetPx,r[c].height))return c;return-1}function N(a,b){var c=r[a].x,d=r[b].x;d>c?(r[b].x=c,r[a].x+=r[b].width+k.margins[1]):(r[a].x=d,r[b].x+=r[a].width+k.margins[1])}function O(a){if(a.target!=m)switch(a.type){case"touch":v=!0,t=J(a.target),I(t,k.draggingClassName),u=K(t),w=r[u].x,x=r[u].y;break;case"dragright":case"dragleft":if(!v)return;a.gesture.preventDefault();var b=w+a.gesture.deltaX;E(u,b,0,x);var c=M(u,b);c>-1&&(N(u,c),F(c));break;case"release":H(t,k.draggingClassName),F(u),v=!1}}var p,s,t,u,v,w,x,e=0,f=1,g=2,h=3,i={position:"absolute"},j={position:"relative"},k={childClassName:"e-grid",draggingClassName:"dragging",translateSpeed:300,collideOffsetPx:-60,margins:[0,10,10,0]},l=document,m=l.getElementById(b),n=m.children,o=function(){for(var a=[],b=0;n.length>b;b++)a.push(n[b]);return a}(),q=o.length,r=Array(q),y={handleEvent:function(a){switch(a.type){case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":C(a)}k.stopPropagation&&a.stopPropagation()}};for(var z in c)k[z]=c[z];return A(),{update:B}}var d={horizontally:function(a,b,c){return"function"==typeof b?e(a,null,b):e(a,b,c)}};b.DragNSort=d})(Hammer,window);