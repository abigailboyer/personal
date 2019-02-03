

$(document).ready(function(){
  $('#contactToggle').click(function(){
    if($('#contactContent').css('display') === 'none') {
      $('#contactContent').show(200);
    } else {
      $('#contactContent').hide(200);
    }
  });

  $('#portfolioToggle').click(function(){
    if($('#portfolioContent').css('display') === 'none') {
      $('#portfolioContent').show(200);
    } else {
      $('#portfolioContent').hide(200);
    }
  });
});
