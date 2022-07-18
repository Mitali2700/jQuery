//  <h1 align="center">jQuery</h1>


//$("h1").addClass("big-title");
//$("h1").text("Bye");
// Minifier.org - minify the JS and CSS code .

//$("button").text("Don't Click Me");
$("button").html("<em>Hey</em>")

//$("button").text("<em>Hey< /em>")      //Button O/P <em>Hey</em>

$("a").attr("href","https:/www.yahoo.com"); 


/************** Adding Eventlistener with jQuery *************/

// $("h1").click(function(){
//     $("h1").css("color","pink")
// });

/************** Adding Eventlistener with jQuery- for loop *************/

/*     JavaScript
for(var i=0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color ="purple";
    });
}
*/

// jQuery

// $("button").click(function(){
//     $("h1").css("color","purple");
// });

$("input").keypress(function(event){
    $("h1").text(event.key);
});

//$("h1").before("<button>New</button>")
// before, after  (top, bottom)
// prepend, append  (left,right)


//Whenever we click any of the button it will hide the h1
/*
$("button").on("click",function(){
    $("h1").hide();
});
*/

//$("h1").show();     It will make h1 reappear.

//Toggle
$("button").on("click",function(){
    $("h1").toggle();
});