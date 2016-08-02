//Load Header
$(function(){

  $.get('/__menu', function(result){
    $result = $(result);
    
    $result.find('link').appendTo('#header');
    $result.find('style').appendTo('#header');
    $result.find('script').appendTo('#header');
    $result.find('body').appendTo('#header');
  }, 'html');

});
