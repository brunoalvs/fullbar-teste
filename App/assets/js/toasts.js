Materialize.toast=function(e,n,t,a){t=t||"";var i=document.getElementById("toast-container");null===i&&(i=document.createElement("div"),i.id="toast-container",document.body.appendChild(i));var o=function(e){var n=document.createElement("div");if(n.classList.add("toast"),t)for(var i=t.split(" "),o=0,l=i.length;o<l;o++)n.classList.add(i[o]);("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)?n.appendChild(e):e instanceof jQuery?n.appendChild(e[0]):n.innerHTML=e;var s=new Hammer(n,{prevent_default:!1});return s.on("pan",function(e){var t=e.deltaX;n.classList.contains("panning")||n.classList.add("panning");var a=1-Math.abs(t/80);a<0&&(a=0),Vel(n,{left:t,opacity:a},{duration:50,queue:!1,easing:"easeOutQuad"})}),s.on("panend",function(e){var t=e.deltaX;Math.abs(t)>80?Vel(n,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof a&&a(),n.parentNode.removeChild(n)}}):(n.classList.remove("panning"),Vel(n,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),n}(e);e&&i.appendChild(o),o.style.opacity=0,Vel(o,{translateY:"-35px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var l,s=n;null!=s&&(l=setInterval(function(){null===o.parentNode&&window.clearInterval(l),o.classList.contains("panning")||(s-=20),s<=0&&(Vel(o,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof a&&a(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(l))},20))};