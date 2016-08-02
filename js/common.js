//Load Header
$(function(){

  $.get('//golfing4ca.org/__menu', function(result){
    $result = $(result);
    
    //$result.find('link').appendTo('head');
    //$result.find('style').appendTo('head');
    $result.find('script').appendTo('head');
    //$result.find('body').appendTo('#header');
  }, 'html');

});
