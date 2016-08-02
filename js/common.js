//Load Header
$(function(){

  $.get('/__menu', function(result){
    $result = $(result);
    
    $result.find('body').appendTo('#header');
    $result.find('script').appendTo('#header');
  }, 'html');

});
