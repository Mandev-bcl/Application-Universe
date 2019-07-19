$(function(){
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){
  $('#popin').click(function(){
    $('code').hide();
  });
});

$(document).ready(function(){
  $('#showMore').ready(function(){
    $('.voir').hide();
  });
});

$(document).ready(function(){
  $('#showMore').click(function(){
    $('.voir').show("3000")
  });
});
