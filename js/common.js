//this function includes all necessary js files for the application
function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

/* include any js files here */
include('//ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js');
include('//rawgit.com/golfing4ca/s3ShareIt/master/js/s3ShareIt.js');

/*
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js" data-pagecloud-original-type="text/javascript" type="disabled" data-runtime-script="true"></script>

<script src="//rawgit.com/golfing4ca/s3ShareIt/master/js/s3ShareIt.js" type="disabled" data-runtime-script="true"></script>
*/
