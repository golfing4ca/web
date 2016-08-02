//Load Header
$(function(){

  $.get('partial.html', function(result){
    $result = $(result);
    
    $result.find('#content').appendTo('#new_content');
    $result.find('script').appendTo('#new_content');
  }, 'html');

});
