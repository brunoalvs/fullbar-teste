!function(t){var e={init:function(e){var i={duration:200,dist:-100,shift:0,padding:0,fullWidth:!1,indicators:!1,noWrap:!1,onCycleTo:null};e=t.extend(i,e);var n=Materialize.objectSelectorString(t(this));return this.each(function(i){function a(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function r(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function s(t){return t>=T?t%T:t<0?s(T+t%T):t}function o(i){var n,a,r,o,l,c,d,u=w;if(x="number"==typeof i?i:x,w=Math.floor((x+z/2)/z),r=x-w*z,o=r<0?1:-1,l=-o*r*2/z,a=T>>1,e.fullWidth?d="translateX(0)":(d="translateX("+(A[0].clientWidth-g)/2+"px) ",d+="translateY("+(A[0].clientHeight-m)/2+"px)"),j){var f=w%T,h=H.find(".indicator-item.active");h.index()!==f&&(h.removeClass("active"),H.find(".indicator-item").eq(f).addClass("active"))}for((!e.noWrap||w>=0&&w<T)&&(c=v[s(w)],t(c).hasClass("active")||(A.find(".carousel-item").removeClass("active"),t(c).addClass("active")),c.style[X]=d+" translateX("+-r/2+"px) translateX("+o*e.shift*l*n+"px) translateZ("+e.dist*l+"px)",c.style.zIndex=0,e.fullWidth?tweenedOpacity=1:tweenedOpacity=1-.2*l,c.style.opacity=tweenedOpacity,c.style.display="block"),n=1;n<=a;++n)e.fullWidth?(zTranslation=e.dist,tweenedOpacity=n===a&&r<0?1-l:1):(zTranslation=e.dist*(2*n+l*o),tweenedOpacity=1-.2*(2*n+l*o)),(!e.noWrap||w+n<T)&&(c=v[s(w+n)],c.style[X]=d+" translateX("+(e.shift+(z*n-r)/2)+"px) translateZ("+zTranslation+"px)",c.style.zIndex=-n,c.style.opacity=tweenedOpacity,c.style.display="block"),e.fullWidth?(zTranslation=e.dist,tweenedOpacity=n===a&&r>0?1-l:1):(zTranslation=e.dist*(2*n-l*o),tweenedOpacity=1-.2*(2*n-l*o)),(!e.noWrap||w-n>=0)&&(c=v[s(w-n)],c.style[X]=d+" translateX("+(-e.shift+(-z*n-r)/2)+"px) translateZ("+zTranslation+"px)",c.style.zIndex=-n,c.style.opacity=tweenedOpacity,c.style.display="block");if((!e.noWrap||w>=0&&w<T)&&(c=v[s(w)],c.style[X]=d+" translateX("+-r/2+"px) translateX("+o*e.shift*l+"px) translateZ("+e.dist*l+"px)",c.style.zIndex=0,e.fullWidth?tweenedOpacity=1:tweenedOpacity=1-.2*l,c.style.opacity=tweenedOpacity,c.style.display="block"),u!==w&&"function"==typeof e.onCycleTo){var p=A.find(".carousel-item").eq(s(w));e.onCycleTo.call(this,p,k)}}function l(){var t,e,i,n;t=Date.now(),e=t-E,E=t,i=x-P,P=x,n=1e3*i/(1+e),D=.8*n+.2*D}function c(){var t,i;O&&(t=Date.now()-E,i=O*Math.exp(-t/e.duration),i>2||i<-2?(o(C-i),requestAnimationFrame(c)):o(C))}function d(i){if(k)return i.preventDefault(),i.stopPropagation(),!1;if(!e.fullWidth){var n=t(i.target).closest(".carousel-item").index();0!==w%T-n&&(i.preventDefault(),i.stopPropagation()),u(n)}}function u(t){var i=w%T-t;e.noWrap||(i<0?Math.abs(i+T)<Math.abs(i)&&(i+=T):i>0&&Math.abs(i-T)<i&&(i-=T)),i<0?A.trigger("carouselNext",[Math.abs(i)]):i>0&&A.trigger("carouselPrev",[i])}function f(t){t.preventDefault(),W=!0,k=!1,I=!1,b=a(t),M=r(t),D=O=0,P=x,E=Date.now(),clearInterval(L),L=setInterval(l,100)}function h(t){var e,i;if(W)if(e=a(t),y=r(t),i=b-e,Math.abs(M-y)<30&&!I)(i>2||i<-2)&&(k=!0,b=e,o(x+i));else{if(k)return t.preventDefault(),t.stopPropagation(),!1;I=!0}if(k)return t.preventDefault(),t.stopPropagation(),!1}function p(t){if(W)return W=!1,clearInterval(L),C=x,(D>10||D<-10)&&(O=.9*D,C=x+O),C=Math.round(C/z)*z,e.noWrap&&(C>=z*(T-1)?C=z*(T-1):C<0&&(C=0)),O=C-x,E=Date.now(),requestAnimationFrame(c),k&&(t.preventDefault(),t.stopPropagation()),!1}var v,g,m,x,w,W,z,T,b,M,O,C,D,X,P,E,L,k,I,q=n+i,H=t('<ul class="indicators"></ul>'),A=t(this),j=A.attr("data-indicators")||e.indicators;if(A.hasClass("initialized"))return t(this).trigger("carouselNext",[1e-6]),!0;if(e.fullWidth){e.dist=0;var F=A.find(".carousel-item img").first();F.length?imageHeight=F.on("load",function(){A.css("height",t(this).height())}):(imageHeight=A.find(".carousel-item").first().height(),A.css("height",imageHeight)),j&&A.find(".carousel-fixed-item").addClass("with-indicators")}A.addClass("initialized"),W=!1,x=C=0,v=[],g=A.find(".carousel-item").first().innerWidth(),m=A.find(".carousel-item").first().innerHeight(),z=2*g+e.padding,A.find(".carousel-item").each(function(e){if(v.push(t(this)[0]),j){var i=t('<li class="indicator-item"></li>');0===e&&i.addClass("active"),i.click(function(e){e.stopPropagation(),u(t(this).index())}),H.append(i)}}),j&&A.append(H),T=v.length,X="transform",["webkit","Moz","O","ms"].every(function(t){var e=t+"Transform";return void 0===document.body.style[e]||(X=e,!1)}),t(window).off("resize."+q).on("resize."+q,function(){e.fullWidth?(g=A.find(".carousel-item").first().innerWidth(),m=A.find(".carousel-item").first().innerHeight(),z=2*g+e.padding,x=2*w*g,C=x):o()}),function(){void 0!==window.ontouchstart&&(A[0].addEventListener("touchstart",f),A[0].addEventListener("touchmove",h),A[0].addEventListener("touchend",p)),A[0].addEventListener("mousedown",f),A[0].addEventListener("mousemove",h),A[0].addEventListener("mouseup",p),A[0].addEventListener("mouseleave",p),A[0].addEventListener("click",d)}(),o(x),t(this).on("carouselNext",function(t,e){void 0===e&&(e=1),C=z*Math.round(x/z)+z*e,x!==C&&(O=C-x,E=Date.now(),requestAnimationFrame(c))}),t(this).on("carouselPrev",function(t,e){void 0===e&&(e=1),C=z*Math.round(x/z)-z*e,x!==C&&(O=C-x,E=Date.now(),requestAnimationFrame(c))}),t(this).on("carouselSet",function(t,e){void 0===e&&(e=0),u(e)})})},next:function(e){t(this).trigger("carouselNext",[e])},prev:function(e){t(this).trigger("carouselPrev",[e])},set:function(e){t(this).trigger("carouselSet",[e])}};t.fn.carousel=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.carousel"):e.init.apply(this,arguments)}}(jQuery);