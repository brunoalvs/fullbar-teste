!function(e){e.Package?Materialize={}:e.Materialize={}}(window),function(e){for(var t=0,n=["webkit","moz"],i=e.requestAnimationFrame,a=e.cancelAnimationFrame,r=n.length;--r>=0&&!i;)i=e[n[r]+"RequestAnimationFrame"],a=e[n[r]+"CancelRequestAnimationFrame"];i&&a||(i=function(e){var n=+Date.now(),i=Math.max(t+16,n);return setTimeout(function(){e(t=i)},i-n)},a=clearTimeout),e.requestAnimationFrame=i,e.cancelAnimationFrame=a}(window),Materialize.objectSelectorString=function(e){return((e.prop("tagName")||"")+(e.attr("id")||"")+(e.attr("class")||"")).replace(/\s/g,"")},Materialize.guid=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}(),Materialize.escapeHash=function(e){return e.replace(/(:|\.|\[|\]|,|=)/g,"\\$1")},Materialize.elementOrParentIsFixed=function(e){var t=$(e),n=t.add(t.parents()),i=!1;return n.each(function(){if("fixed"===$(this).css("position"))return i=!0,!1}),i};var getTime=Date.now||function(){return(new Date).getTime()};Materialize.throttle=function(e,t,n){var i,a,r,o=null,u=0;n||(n={});var l=function(){u=n.leading===!1?0:getTime(),o=null,r=e.apply(i,a),i=a=null};return function(){var c=getTime();u||n.leading!==!1||(u=c);var m=t-(c-u);return i=this,a=arguments,m<=0?(clearTimeout(o),o=null,u=c,r=e.apply(i,a),i=a=null):o||n.trailing===!1||(o=setTimeout(l,m)),r}};var Vel;Vel=jQuery?jQuery.Velocity:$?$.Velocity:Velocity;