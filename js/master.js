jQuery.cachedScript = function( url, options ) {

    // Allow user to set any option except for dataType, cache, and url
    options = $.extend( options || {}, {
        dataType: "script",
        cache: false,
        url: url
    });

    // Use $.ajax() since it is more flexible than $.getScript
    // Return the jqXHR object so we can chain callbacks
    return jQuery.ajax( options );
};

// Usage
$.cachedScript( "//ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js" ).done(function( script, textStatus ) {
    console.log( textStatus );
});
$.cachedScript( "//rawgit.com/golfing4ca/s3ShareIt/master/js/s3ShareIt.js" ).done(function( script, textStatus ) {
    console.log( textStatus );
});

/* include any js files here
include('//ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js');
include('//rawgit.com/golfing4ca/s3ShareIt/master/js/s3ShareIt.js');

/*
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js" data-pagecloud-original-type="text/javascript" type="disabled" data-runtime-script="true"></script>

<script src="//rawgit.com/golfing4ca/s3ShareIt/master/js/s3ShareIt.js" type="disabled" data-runtime-script="true"></script>
*/
