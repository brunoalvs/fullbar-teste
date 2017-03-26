!function(e){"function"==typeof define&&define.amd?define(["picker","jquery"],e):"object"==typeof exports?module.exports=e(require("./picker.js"),require("jquery")):e(Picker,jQuery)}(function(e,t){function a(e,t){var a=this,n=e.$node[0],i=n.value,r=e.$node.data("value"),o=r||i,s=r?t.formatSubmit:t.format,l=function(){return n.currentStyle?"rtl"==n.currentStyle.direction:"rtl"==getComputedStyle(e.$root[0]).direction};a.settings=t,a.$node=e.$node,a.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},a.item={},a.item.clear=null,a.item.disable=(t.disable||[]).slice(0),a.item.enable=-function(e){return e[0]===!0?e.shift():-1}(a.item.disable),a.set("min",t.min).set("max",t.max).set("now"),o?a.set("select",o,{format:s}):a.set("select",null).set("highlight",a.item.now),a.key={40:7,38:-7,39:function(){return l()?-1:1},37:function(){return l()?1:-1},go:function(e){var t=a.item.highlight,n=new Date(t.year,t.month,t.date+e);a.set("highlight",n,{interval:e}),this.render()}},e.on("render",function(){e.$root.find("."+t.klass.selectMonth).on("change",function(){var a=this.value;a&&(e.set("highlight",[e.get("view").year,a,e.get("highlight").date]),e.$root.find("."+t.klass.selectMonth).trigger("focus"))}),e.$root.find("."+t.klass.selectYear).on("change",function(){var a=this.value;a&&(e.set("highlight",[a,e.get("view").month,e.get("highlight").date]),e.$root.find("."+t.klass.selectYear).trigger("focus"))})},1).on("open",function(){var n="";a.disabled(a.get("now"))&&(n=":not(."+t.klass.buttonToday+")"),e.$root.find("button"+n+", select").attr("disabled",!1)},1).on("close",function(){e.$root.find("button, select").attr("disabled",!0)},1)}var n=e._;a.prototype.set=function(e,t,a){var n=this,i=n.item;return null===t?("clear"==e&&(e="select"),i[e]=t,n):(i["enable"==e?"disable":"flip"==e?"enable":e]=n.queue[e].split(" ").map(function(i){return t=n[i](e,t,a)}).pop(),"select"==e?n.set("highlight",i.select,a):"highlight"==e?n.set("view",i.highlight,a):e.match(/^(flip|min|max|disable|enable)$/)&&(i.select&&n.disabled(i.select)&&n.set("select",i.select,a),i.highlight&&n.disabled(i.highlight)&&n.set("highlight",i.highlight,a)),n)},a.prototype.get=function(e){return this.item[e]},a.prototype.create=function(e,a,i){var r,o=this;return a=void 0===a?e:a,a==-(1/0)||a==1/0?r=a:t.isPlainObject(a)&&n.isInteger(a.pick)?a=a.obj:t.isArray(a)?(a=new Date(a[0],a[1],a[2]),a=n.isDate(a)?a:o.create().obj):a=n.isInteger(a)||n.isDate(a)?o.normalize(new Date(a),i):o.now(e,a,i),{year:r||a.getFullYear(),month:r||a.getMonth(),date:r||a.getDate(),day:r||a.getDay(),obj:r||a,pick:r||a.getTime()}},a.prototype.createRange=function(e,a){var i=this,r=function(e){return e===!0||t.isArray(e)||n.isDate(e)?i.create(e):e};return n.isInteger(e)||(e=r(e)),n.isInteger(a)||(a=r(a)),n.isInteger(e)&&t.isPlainObject(a)?e=[a.year,a.month,a.date+e]:n.isInteger(a)&&t.isPlainObject(e)&&(a=[e.year,e.month,e.date+a]),{from:r(e),to:r(a)}},a.prototype.withinRange=function(e,t){return e=this.createRange(e.from,e.to),t.pick>=e.from.pick&&t.pick<=e.to.pick},a.prototype.overlapRanges=function(e,t){var a=this;return e=a.createRange(e.from,e.to),t=a.createRange(t.from,t.to),a.withinRange(e,t.from)||a.withinRange(e,t.to)||a.withinRange(t,e.from)||a.withinRange(t,e.to)},a.prototype.now=function(e,t,a){return t=new Date,a&&a.rel&&t.setDate(t.getDate()+a.rel),this.normalize(t,a)},a.prototype.navigate=function(e,a,n){var i,r,o,s,l=t.isArray(a),d=t.isPlainObject(a),c=this.item.view;if(l||d){for(d?(r=a.year,o=a.month,s=a.date):(r=+a[0],o=+a[1],s=+a[2]),n&&n.nav&&c&&c.month!==o&&(r=c.year,o=c.month),i=new Date(r,o+(n&&n.nav?n.nav:0),1),r=i.getFullYear(),o=i.getMonth();new Date(r,o,s).getMonth()!==o;)s-=1;a=[r,o,s]}return a},a.prototype.normalize=function(e){return e.setHours(0,0,0,0),e},a.prototype.measure=function(e,t){var a=this;return t?"string"==typeof t?t=a.parse(e,t):n.isInteger(t)&&(t=a.now(e,t,{rel:t})):t="min"==e?-(1/0):1/0,t},a.prototype.viewset=function(e,t){return this.create([t.year,t.month,1])},a.prototype.validate=function(e,a,i){var r,o,s,l,d=this,c=a,u=i&&i.interval?i.interval:1,h=d.item.enable===-1,y=d.item.min,m=d.item.max,p=h&&d.item.disable.filter(function(e){if(t.isArray(e)){var i=d.create(e).pick;i<a.pick?r=!0:i>a.pick&&(o=!0)}return n.isInteger(e)}).length;if((!i||!i.nav)&&(!h&&d.disabled(a)||h&&d.disabled(a)&&(p||r||o)||!h&&(a.pick<=y.pick||a.pick>=m.pick)))for(h&&!p&&(!o&&u>0||!r&&u<0)&&(u*=-1);d.disabled(a)&&(Math.abs(u)>1&&(a.month<c.month||a.month>c.month)&&(a=c,u=u>0?1:-1),a.pick<=y.pick?(s=!0,u=1,a=d.create([y.year,y.month,y.date+(a.pick===y.pick?0:-1)])):a.pick>=m.pick&&(l=!0,u=-1,a=d.create([m.year,m.month,m.date+(a.pick===m.pick?0:1)])),!s||!l);)a=d.create([a.year,a.month,a.date+u]);return a},a.prototype.disabled=function(e){var a=this,i=a.item.disable.filter(function(i){return n.isInteger(i)?e.day===(a.settings.firstDay?i:i-1)%7:t.isArray(i)||n.isDate(i)?e.pick===a.create(i).pick:t.isPlainObject(i)?a.withinRange(i,e):void 0});return i=i.length&&!i.filter(function(e){return t.isArray(e)&&"inverted"==e[3]||t.isPlainObject(e)&&e.inverted}).length,a.item.enable===-1?!i:i||e.pick<a.item.min.pick||e.pick>a.item.max.pick},a.prototype.parse=function(e,t,a){var i=this,r={};return t&&"string"==typeof t?(a&&a.format||(a=a||{},a.format=i.settings.format),i.formats.toArray(a.format).map(function(e){var a=i.formats[e],o=a?n.trigger(a,i,[t,r]):e.replace(/^!/,"").length;a&&(r[e]=t.substr(0,o)),t=t.substr(o)}),[r.yyyy||r.yy,+(r.mm||r.m)-1,r.dd||r.d]):t},a.prototype.formats=function(){function e(e,t,a){var n=e.match(/\w+/)[0];return a.mm||a.m||(a.m=t.indexOf(n)+1),n.length}function t(e){return e.match(/\w+/)[0].length}return{d:function(e,t){return e?n.digits(e):t.date},dd:function(e,t){return e?2:n.lead(t.date)},ddd:function(e,a){return e?t(e):this.settings.weekdaysShort[a.day]},dddd:function(e,a){return e?t(e):this.settings.weekdaysFull[a.day]},m:function(e,t){return e?n.digits(e):t.month+1},mm:function(e,t){return e?2:n.lead(t.month+1)},mmm:function(t,a){var n=this.settings.monthsShort;return t?e(t,n,a):n[a.month]},mmmm:function(t,a){var n=this.settings.monthsFull;return t?e(t,n,a):n[a.month]},yy:function(e,t){return e?2:(""+t.year).slice(2)},yyyy:function(e,t){return e?4:t.year},toArray:function(e){return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(e,t){var a=this;return a.formats.toArray(e).map(function(e){return n.trigger(a.formats[e],a,[0,t])||e.replace(/^!/,"")}).join("")}}}(),a.prototype.isDateExact=function(e,a){var i=this;return n.isInteger(e)&&n.isInteger(a)||"boolean"==typeof e&&"boolean"==typeof a?e===a:(n.isDate(e)||t.isArray(e))&&(n.isDate(a)||t.isArray(a))?i.create(e).pick===i.create(a).pick:!(!t.isPlainObject(e)||!t.isPlainObject(a))&&(i.isDateExact(e.from,a.from)&&i.isDateExact(e.to,a.to))},a.prototype.isDateOverlap=function(e,a){var i=this,r=i.settings.firstDay?1:0;return n.isInteger(e)&&(n.isDate(a)||t.isArray(a))?(e=e%7+r)===i.create(a).day+1:n.isInteger(a)&&(n.isDate(e)||t.isArray(e))?(a=a%7+r)===i.create(e).day+1:!(!t.isPlainObject(e)||!t.isPlainObject(a))&&i.overlapRanges(e,a)},a.prototype.flipEnable=function(e){var t=this.item;t.enable=e||(t.enable==-1?1:-1)},a.prototype.deactivate=function(e,a){var i=this,r=i.item.disable.slice(0);return"flip"==a?i.flipEnable():a===!1?(i.flipEnable(1),r=[]):a===!0?(i.flipEnable(-1),r=[]):a.map(function(e){for(var a,o=0;o<r.length;o+=1)if(i.isDateExact(e,r[o])){a=!0;break}a||(n.isInteger(e)||n.isDate(e)||t.isArray(e)||t.isPlainObject(e)&&e.from&&e.to)&&r.push(e)}),r},a.prototype.activate=function(e,a){var i=this,r=i.item.disable,o=r.length;return"flip"==a?i.flipEnable():a===!0?(i.flipEnable(1),r=[]):a===!1?(i.flipEnable(-1),r=[]):a.map(function(e){var a,s,l,d;for(l=0;l<o;l+=1){if(s=r[l],i.isDateExact(s,e)){a=r[l]=null,d=!0;break}if(i.isDateOverlap(s,e)){t.isPlainObject(e)?(e.inverted=!0,a=e):t.isArray(e)?(a=e,a[3]||a.push("inverted")):n.isDate(e)&&(a=[e.getFullYear(),e.getMonth(),e.getDate(),"inverted"]);break}}if(a)for(l=0;l<o;l+=1)if(i.isDateExact(r[l],e)){r[l]=null;break}if(d)for(l=0;l<o;l+=1)if(i.isDateOverlap(r[l],e)){r[l]=null;break}a&&r.push(a)}),r.filter(function(e){return null!=e})},a.prototype.nodes=function(e){var t=this,a=t.settings,i=t.item,r=i.now,o=i.select,s=i.highlight,l=i.view,d=i.disable,c=i.min,u=i.max,h=function(e,t){return a.firstDay&&(e.push(e.shift()),t.push(t.shift())),n.node("thead",n.node("tr",n.group({min:0,max:6,i:1,node:"th",item:function(n){return[e[n],a.klass.weekdays,'scope=col title="'+t[n]+'"']}})))}((a.showWeekdaysFull?a.weekdaysFull:a.weekdaysLetter).slice(0),a.weekdaysFull.slice(0)),y=function(e){return n.node("div"," ",a.klass["nav"+(e?"Next":"Prev")]+(e&&l.year>=u.year&&l.month>=u.month||!e&&l.year<=c.year&&l.month<=c.month?" "+a.klass.navDisabled:""),"data-nav="+(e||-1)+" "+n.ariaAttr({role:"button",controls:t.$node[0].id+"_table"})+' title="'+(e?a.labelMonthNext:a.labelMonthPrev)+'"')},m=function(i){var r=a.showMonthsShort?a.monthsShort:a.monthsFull;return"short_months"==i&&(r=a.monthsShort),a.selectMonths&&void 0==i?n.node("select",n.group({min:0,max:11,i:1,node:"option",item:function(e){return[r[e],0,"value="+e+(l.month==e?" selected":"")+(l.year==c.year&&e<c.month||l.year==u.year&&e>u.month?" disabled":"")]}}),a.klass.selectMonth+" browser-default",(e?"":"disabled")+" "+n.ariaAttr({controls:t.$node[0].id+"_table"})+' title="'+a.labelMonthSelect+'"'):"short_months"==i?null!=o?n.node("div",r[o.month]):n.node("div",r[l.month]):n.node("div",r[l.month],a.klass.month)},p=function(i){var r=l.year,o=a.selectYears===!0?5:~~(a.selectYears/2);if(o){var s=c.year,d=u.year,h=r-o,y=r+o;if(s>h&&(y+=s-h,h=s),d<y){var m=h-s,p=y-d;h-=m>p?p:m,y=d}if(a.selectYears&&void 0==i)return n.node("select",n.group({min:h,max:y,i:1,node:"option",item:function(e){return[e,0,"value="+e+(r==e?" selected":"")]}}),a.klass.selectYear+" browser-default",(e?"":"disabled")+" "+n.ariaAttr({controls:t.$node[0].id+"_table"})+' title="'+a.labelYearSelect+'"')}return"raw"==i?n.node("div",r):n.node("div",r,a.klass.year)};return createDayLabel=function(){return null!=o?n.node("div",o.date):n.node("div",r.date)},createWeekdayLabel=function(){var e;return e=null!=o?o.day:r.day,a.weekdaysFull[e]},n.node("div",n.node("div",createWeekdayLabel(),"picker__weekday-display")+n.node("div",m("short_months"),a.klass.month_display)+n.node("div",createDayLabel(),a.klass.day_display)+n.node("div",p("raw"),a.klass.year_display),a.klass.date_display)+n.node("div",n.node("div",(a.selectYears,m()+p()+y()+y(1)),a.klass.header)+n.node("table",h+n.node("tbody",n.group({min:0,max:5,i:1,node:"tr",item:function(e){var i=a.firstDay&&0===t.create([l.year,l.month,1]).day?-7:0;return[n.group({min:7*e-l.day+i+1,max:function(){return this.min+7-1},i:1,node:"td",item:function(e){e=t.create([l.year,l.month,e+(a.firstDay?1:0)]);var i=o&&o.pick==e.pick,h=s&&s.pick==e.pick,y=d&&t.disabled(e)||e.pick<c.pick||e.pick>u.pick,m=n.trigger(t.formats.toString,t,[a.format,e]);return[n.node("div",e.date,function(t){return t.push(l.month==e.month?a.klass.infocus:a.klass.outfocus),r.pick==e.pick&&t.push(a.klass.now),i&&t.push(a.klass.selected),h&&t.push(a.klass.highlighted),y&&t.push(a.klass.disabled),t.join(" ")}([a.klass.day]),"data-pick="+e.pick+" "+n.ariaAttr({role:"gridcell",label:m,selected:!(!i||t.$node.val()!==m)||null,activedescendant:!!h||null,disabled:!!y||null})),"",n.ariaAttr({role:"presentation"})]}})]}})),a.klass.table,'id="'+t.$node[0].id+'_table" '+n.ariaAttr({role:"grid",controls:t.$node[0].id,readonly:!0})),a.klass.calendar_container)+n.node("div",n.node("button",a.today,"btn-flat picker__today","type=button data-pick="+r.pick+(e&&!t.disabled(r)?"":" disabled")+" "+n.ariaAttr({controls:t.$node[0].id}))+n.node("button",a.clear,"btn-flat picker__clear","type=button data-clear=1"+(e?"":" disabled")+" "+n.ariaAttr({controls:t.$node[0].id}))+n.node("button",a.close,"btn-flat picker__close","type=button data-close=true "+(e?"":" disabled")+" "+n.ariaAttr({controls:t.$node[0].id})),a.klass.footer)},a.defaults=function(e){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:e+"table",header:e+"header",date_display:e+"date-display",day_display:e+"day-display",month_display:e+"month-display",year_display:e+"year-display",calendar_container:e+"calendar-container",navPrev:e+"nav--prev",navNext:e+"nav--next",navDisabled:e+"nav--disabled",month:e+"month",year:e+"year",selectMonth:e+"select--month",selectYear:e+"select--year",weekdays:e+"weekday",day:e+"day",disabled:e+"day--disabled",selected:e+"day--selected",highlighted:e+"day--highlighted",now:e+"day--today",infocus:e+"day--infocus",outfocus:e+"day--outfocus",footer:e+"footer",buttonClear:e+"button--clear",buttonToday:e+"button--today",buttonClose:e+"button--close"}}}(e.klasses().picker+"__"),e.extend("pickadate",a)});