$(document).ready(function(){
    var search = $('#search');
    search.focusin(function(){
      $('#search-bar').css('max-width', '470px');
    });
    
    search.focusout(function(){
      $('#search-bar').css('max-width', '460px');
    });
});