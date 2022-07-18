//  <h1 align="center">jQuery</h1>


//$("h1").addClass("big-title");
//$("h1").text("Bye");
// Minifier.org - minify the JS and CSS code .

//$("button").text("Don't Click Me");
$("button").html("<em>Hey</em>")

//$("button").text("<em>Hey< /em>")      //Button O/P <em>Hey</em>

$("a").attr("href","https:/www.yahoo.com"); 


/************** Adding Eventlistener with jQuery *************/

$("h1").click(function(){
    $("h1").css("color","pink")
});

