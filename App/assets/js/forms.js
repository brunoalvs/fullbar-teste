!function(t){t(document).ready(function(){function e(e){var i=e.css("font-family"),n=e.css("font-size"),s=e.css("line-height");n&&a.css("font-size",n),i&&a.css("font-family",i),s&&a.css("line-height",s),"off"===e.attr("wrap")&&a.css("overflow-wrap","normal").css("white-space","pre"),a.text(e.val()+"\n");var o=a.html().replace(/\n/g,"<br>");a.html(o),e.is(":visible")?a.css("width",e.width()):a.css("width",t(window).width()/2),e.css("height",a.height())}Materialize.updateTextFields=function(){t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(e,i){var a=t(this);t(i).val().length>0||i.autofocus||void 0!==a.attr("placeholder")?a.siblings("label").addClass("active"):t(i)[0].validity?a.siblings("label").toggleClass("active",t(i)[0].validity.badInput===!0):a.siblings("label").removeClass("active")})};var i="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(document).on("change",i,function(){0===t(this).val().length&&void 0===t(this).attr("placeholder")||t(this).siblings("label").addClass("active"),validate_field(t(this))}),t(document).ready(function(){Materialize.updateTextFields()}),t(document).on("reset",function(e){var a=t(e.target);a.is("form")&&(a.find(i).removeClass("valid").removeClass("invalid"),a.find(i).each(function(){""===t(this).attr("value")&&t(this).siblings("label").removeClass("active")}),a.find("select.initialized").each(function(){var t=a.find("option[selected]").text();a.siblings("input.select-dropdown").val(t)}))}),t(document).on("focus",i,function(){t(this).siblings("label, .prefix").addClass("active")}),t(document).on("blur",i,function(){var e=t(this),i=".prefix";0===e.val().length&&e[0].validity.badInput!==!0&&void 0===e.attr("placeholder")&&(i+=", label"),e.siblings(i).removeClass("active"),validate_field(e)}),window.validate_field=function(t){var e=void 0!==t.attr("data-length"),i=parseInt(t.attr("data-length")),a=t.val().length;0===t.val().length&&t[0].validity.badInput===!1?t.hasClass("validate")&&(t.removeClass("valid"),t.removeClass("invalid")):t.hasClass("validate")&&(t.is(":valid")&&e&&a<=i||t.is(":valid")&&!e?(t.removeClass("invalid"),t.addClass("valid")):(t.removeClass("valid"),t.addClass("invalid")))};t(document).on("keyup.radio","input[type=radio], input[type=checkbox]",function(e){if(9===e.which){t(this).addClass("tabbed");return void t(this).one("blur",function(e){t(this).removeClass("tabbed")})}});var a=t(".hiddendiv").first();a.length||(a=t('<div class="hiddendiv common"></div>'),t("body").append(a));t(".materialize-textarea").each(function(){var i=t(this);i.val().length&&e(i)}),t("body").on("keyup keydown autoresize",".materialize-textarea",function(){e(t(this))}),t(document).on("change",'.file-field input[type="file"]',function(){for(var e=t(this).closest(".file-field"),i=e.find("input.file-path"),a=t(this)[0].files,n=[],s=0;s<a.length;s++)n.push(a[s].name);i.val(n.join(", ")),i.trigger("change")});var n="input[type=range]",s=!1;t(n).each(function(){var e=t('<span class="thumb"><span class="value"></span></span>');t(this).after(e)});t(document).on("change",n,function(e){var i=t(this).siblings(".thumb");i.find(".value").html(t(this).val());var a=t(this).attr("max"),n=t(this).width()-15,s=(t(this).parent(".range-field").outerWidth(),t(this).val()*(n/a));i.hasClass("active")||i.velocity({height:"30px",width:"30px",top:"-30px",marginLeft:"5px"},{duration:300,easing:"easeOutExpo"}),i.addClass("active").css("left",s)}),t(document).on("mousedown touchstart",n,function(e){var i=t(this).siblings(".thumb"),a=t(this).attr("max"),n=t(this).width()-15,o=(t(this).parent(".range-field").outerWidth(),t(this).val()*(n/a));i.length<=0&&(i=t('<span class="thumb"><span class="value"></span></span>'),t(this).after(i)),i.find(".value").html(t(this).val()),s=!0,t(this).addClass("active"),i.hasClass("active")||i.velocity({height:"30px",width:"30px",top:"-30px",marginLeft:"5px"},{duration:300,easing:"easeOutExpo"}),"input"!==e.type&&i.addClass("active").css("left",o)}),t(document).on("mouseup touchend",".range-field",function(){s=!1,t(this).removeClass("active")}),t(document).on("input mousemove touchmove",".range-field",function(e){var i=t(this).children(".thumb"),a=t(this).find(n),o=a.attr("max"),l=a.width()-15,r=(t(this).outerWidth(),a.val()*(l/o));s&&(i.hasClass("active")||i.velocity({height:"30px",width:"30px",top:"-30px",marginLeft:"5px"},{duration:300,easing:"easeOutExpo"}),i.addClass("active").css("left",r),i.find(".value").html(i.siblings(n).val()))}),t(document).on("mouseout touchleave",".range-field",function(){if(!s){var e=t(this).children(".thumb");e.hasClass("active")&&e.velocity({height:"0",width:"0",top:"10px",marginLeft:"15px"},{duration:100}),e.removeClass("active")}}),t.fn.autocomplete=function(e){var i={data:{},limit:1/0,onAutocomplete:null,minLength:1};return e=t.extend(i,e),this.each(function(){var i,a=t(this),n=e.data,s=0,o=-1,l=a.closest(".input-field");if(!t.isEmptyObject(n)){var r,d=t('<ul class="autocomplete-content dropdown-content"></ul>');l.length?(r=l.children(".autocomplete-content.dropdown-content").first(),r.length||l.append(d)):(r=a.next(".autocomplete-content.dropdown-content"),r.length||a.after(d)),r.length&&(d=r);var c=function(t,e){var i=e.find("img"),a=e.text().toLowerCase().indexOf(""+t.toLowerCase()),n=a+t.length-1,s=e.text().slice(0,a),o=e.text().slice(a,n+1),l=e.text().slice(n+1);e.html("<span>"+s+"<span class='highlight'>"+o+"</span>"+l+"</span>"),i.length&&e.prepend(i)},p=function(){o=-1,d.find(".active").removeClass("active")},h=function(){d.empty(),p(),i=void 0};a.off("blur.autocomplete").on("blur.autocomplete",function(){h()}),a.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete",function(o){s=0;var l=a.val().toLowerCase();if(13!==o.which&&38!==o.which&&40!==o.which){if(i!==l&&(h(),l.length>=e.minLength))for(var r in n)if(n.hasOwnProperty(r)&&r.toLowerCase().indexOf(l)!==-1&&r.toLowerCase()!==l){if(s>=e.limit)break;var p=t("<li></li>");n[r]?p.append('<img src="'+n[r]+'" class="right circle"><span>'+r+"</span>"):p.append("<span>"+r+"</span>"),d.append(p),c(l,p),s++}i=l}}),a.off("keydown.autocomplete").on("keydown.autocomplete",function(t){var e,i=t.which,a=d.children("li").length,n=d.children(".active").first();if(13===i&&o>=0)return e=d.children("li").eq(o),void(e.length&&(e.trigger("mousedown.autocomplete"),t.preventDefault()));38!==i&&40!==i||(t.preventDefault(),38===i&&o>0&&o--,40===i&&o<a-1&&o++,n.removeClass("active"),o>=0&&d.children("li").eq(o).addClass("active"))}),d.on("mousedown.autocomplete touchstart.autocomplete","li",function(){var i=t(this).text().trim();a.val(i),a.trigger("change"),h(),"function"==typeof e.onAutocomplete&&e.onAutocomplete.call(this,i)})}})}}),t.fn.material_select=function(e){function i(t,e,i){var n=t.indexOf(e),s=n===-1;return s?t.push(e):t.splice(n,1),i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(e).toggleClass("active"),i.find("option").eq(e).prop("selected",s),a(t,i),s}function a(t,e){for(var i="",a=0,n=t.length;a<n;a++){var s=e.find("option").eq(t[a]).text();i+=0===a?s:", "+s}""===i&&(i=e.find("option:disabled").eq(0).text()),e.siblings("input.select-dropdown").val(i)}t(this).each(function(){var a=t(this);if(!a.hasClass("browser-default")){var n=!!a.attr("multiple"),s=a.data("select-id");if(s&&(a.parent().find("span.caret").remove(),a.parent().find("input").remove(),a.unwrap(),t("ul#select-options-"+s).remove()),"destroy"===e)return void a.data("select-id",null).removeClass("initialized");var o=Materialize.guid();a.data("select-id",o);var l=t('<div class="select-wrapper"></div>');l.addClass(a.attr("class"));var r=t('<ul id="select-options-'+o+'" class="dropdown-content select-dropdown '+(n?"multiple-select-dropdown":"")+'"></ul>'),d=a.children("option, optgroup"),c=[],p=!1,h=a.find("option:selected").html()||a.find("option:first").html()||"",u=function(e,i,a){var s=i.is(":disabled")?"disabled ":"",o="optgroup-option"===a?"optgroup-option ":"",l=n?'<input type="checkbox"'+s+"/><label></label>":"",d=i.data("icon"),c=i.attr("class");if(d){var p="";return c&&(p=' class="'+c+'"'),r.append(t('<li class="'+s+o+'"><img alt="" src="'+d+'"'+p+"><span>"+l+i.html()+"</span></li>")),!0}r.append(t('<li class="'+s+o+'"><span>'+l+i.html()+"</span></li>"))};d.length&&d.each(function(){if(t(this).is("option"))n?u(0,t(this),"multiple"):u(0,t(this));else if(t(this).is("optgroup")){var e=t(this).children("option");r.append(t('<li class="optgroup"><span>'+t(this).attr("label")+"</span></li>")),e.each(function(){u(0,t(this),"optgroup-option")})}}),r.find("li:not(.optgroup)").each(function(s){t(this).click(function(o){if(!t(this).hasClass("disabled")&&!t(this).hasClass("optgroup")){var l=!0;n?(t('input[type="checkbox"]',this).prop("checked",function(t,e){return!e}),l=i(c,s,a),g.trigger("focus")):(r.find("li").removeClass("active"),t(this).toggleClass("active"),g.val(t(this).text())),m(r,t(this)),a.find("option").eq(s).prop("selected",l),a.trigger("change"),void 0!==e&&e()}o.stopPropagation()})}),a.wrap(l);var f=t('<span class="caret">&#9660;</span>');a.is(":disabled")&&f.addClass("disabled");var v=h.replace(/"/g,"&quot;"),g=t('<input type="text" class="select-dropdown" readonly="true" '+(a.is(":disabled")?"disabled":"")+' data-activates="select-options-'+o+'" value="'+v+'"/>');a.before(g),g.before(f),g.after(r),a.is(":disabled")||g.dropdown({hover:!1,closeOnClick:!1}),a.attr("tabindex")&&t(g[0]).attr("tabindex",a.attr("tabindex")),a.addClass("initialized"),g.on({focus:function(){if(t("ul.select-dropdown").not(r[0]).is(":visible")&&t("input.select-dropdown").trigger("close"),!r.is(":visible")){t(this).trigger("open",["focus"]);var e=t(this).val();n&&e.indexOf(",")>=0&&(e=e.split(",")[0]);var i=r.find("li").filter(function(){return t(this).text().toLowerCase()===e.toLowerCase()})[0];m(r,i,!0)}},click:function(t){t.stopPropagation()}}),g.on("blur",function(){n||t(this).trigger("close"),r.find("li.selected").removeClass("selected")}),r.hover(function(){p=!0},function(){p=!1}),t(window).on({click:function(){n&&(p||g.trigger("close"))}}),n&&a.find("option:selected:not(:disabled)").each(function(){var e=t(this).index();i(c,e,a),r.find("li").eq(e).find(":checkbox").prop("checked",!0)});var m=function(e,i,a){if(i){e.find("li.selected").removeClass("selected");var s=t(i);s.addClass("selected"),n&&!a||r.scrollTo(s)}},b=[],w=function(e){if(9==e.which)return void g.trigger("close");if(40==e.which&&!r.is(":visible"))return void g.trigger("open");if(13!=e.which||r.is(":visible")){e.preventDefault();var i=String.fromCharCode(e.which).toLowerCase(),a=[9,13,27,38,40];if(i&&a.indexOf(e.which)===-1){b.push(i);var s=b.join(""),o=r.find("li").filter(function(){return 0===t(this).text().toLowerCase().indexOf(s)})[0];o&&m(r,o)}if(13==e.which){var l=r.find("li.selected:not(.disabled)")[0];l&&(t(l).trigger("click"),n||g.trigger("close"))}40==e.which&&(o=r.find("li.selected").length?r.find("li.selected").next("li:not(.disabled)")[0]:r.find("li:not(.disabled)")[0],m(r,o)),27==e.which&&g.trigger("close"),38==e.which&&(o=r.find("li.selected").prev("li:not(.disabled)")[0])&&m(r,o),setTimeout(function(){b=[]},1e3)}};g.on("keydown",w)}})}}(jQuery);