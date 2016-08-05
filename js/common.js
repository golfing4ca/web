/*Load Common Scripts
<HEAD>: document.head.appendChild(node);
<BODY>: document.body.appendChild(node);
*/
/*
//jQuery
var node = document.createElement('script');
    node.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js";
    document.body.appendChild(node);
*/
//Navigation Header
var node = document.createElement('script');
    node.type = type="text/javascript";
    node.src = "//cdn.golfing4ca.org/golfing4ca/s3ShareIt/master/js/s3ShareIt.js";
    document.body.appendChild(node);
var node = document.createElement('script');
    node.type = type="text/javascript";
    node.src = "https://s3.amazonaws.com/menumaker/menumaker.min.js";
    document.body.appendChild(node);
