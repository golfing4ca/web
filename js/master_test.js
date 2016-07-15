jQuery(document).ready(function($){
 
 /**
  * function to load a given css file 
  */ 
 loadCSS = function(href) {
     var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
     $("head").append(cssLink); 
 };

/**
 * function to load a given js file 
 */ 
 loadJS = function(src) {
     var jsLink = $("<script type='text/javascript' src='"+src+"'>");
     $("head").append(jsLink); 
 }; 
  
 // load the css file 
 loadCSS("//cdn.rawgit.com/golfing4ca/web/master/js/style.css");

 // load the js file 
 loadJS("//cdn.rawgit.com/golfing4ca/web/master/js/one.js");

});
