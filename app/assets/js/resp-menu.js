$(document).ready(function(){var e=$("#resp-menu"),n=$(".menu"),i=$(".login");$(e).on("click",function(e){e.preventDefault(),n.slideToggle(),i.slideToggle()}),$(window).resize(function(){$(window).width()>959&&n.is(":hidden")&&(n.removeAttr("style"),i.removeAttr("style"))})});