$(document).ready(function(){
    
    var bw = $('body').width();
    var bh = $('body').height();
    $('.list-image').css('width','90%');
    var cw = $('.list-image').width();
    $('.list-image').css('height',cw);
       
    
});


function openData(id){
    $(`#data-${id}`).slideDown(500);
    var bw = $('body').width();
    var bh = $('body').height();
    $('.list-image').css('width','90%');
    var cw = $('.list-image').width();
    $('.list-image').css('height',cw);
}; 

function closeData(id){
    $(`#${id.substring(0,id.length-2)}`).slideUp(500);
}; 