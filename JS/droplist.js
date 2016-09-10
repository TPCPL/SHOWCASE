$(document).ready(function(){
    
    $(".ui-widget").css("padding", "0.5em");
    $(".ui-autocomplete").css("border", "2px solid #F37748");
    $(".ui-autocomplete").css("font-family", "Helvetica");
    $(".ui-autocomplete").css("font-size", "1.5em");
    $(".ui-autocomplete").css("max-height", "10em");   
    $(".ui-autocomplete").css("overflow", "auto");     
    $(".ui-autocomplete").css("background-color", "rgba(255,153,0,0.4)");     
    $(".ui-autocomplete").css("color", "#FFF");     
    $("input:text").focus(function() { $(this).select(); } );
    $("#search").autocomplete(
	{  
	    select: function(event, ui) {
	    	window.open("product/"+ui.item.value.replace(/ /g,'')+"/"+ui.item.value.replace(/ /g,'')+".html","_self");
	    }
	});
});