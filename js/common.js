/*Load Common Scripts
<HEAD>: document.head.appendChild(node);
<BODY>: document.body.appendChild(node);
*/
$(function(common$) {
console.log( "loading common js" );
/*
//jQuery
var node = document.createElement('script');
    node.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js";
    document.body.appendChild(node);
*/
//Navigation Header
common$('head').append('<script src="https://cdn.golfing4ca.org/golfing4ca/s3ShareIt/master/js/s3ShareIt.js"></script>');
common$('head').append('<script src="https://s3.amazonaws.com/menumaker/menumaker.min.js"></script>');
common$('head').append('<script src="https://load.sumome.com/" data-sumo-site-id="12ee2b1c2563d228da54eed4f7s09ff32f5aea5ecba20d58c66580fea4d1cdf70" async="async"></script>');
});
