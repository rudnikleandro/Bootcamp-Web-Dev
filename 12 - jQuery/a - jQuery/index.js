//jQuery slideup, slidedown and animate example
$("button").click(function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});


/*

//jQuery animate example, limit to numerical values
$("button").click(function() {
    $("h1").animate({margin: "20"});
});

//jQuery example h1 effect
$("button").click(function() {
    $("h1").slideToggle();
});

//jQuery example h1 effect
$("button").click(function() {
    $("h1").slideUp();
    $("h1").slideDown();
});

//jQuery example h1 effect
$("button").click(function() {
    $("h1").fadeToggle();
});


//jQuery example change h1 text mouseover
$("h1").on("mouseover", function() {
    $("h1").css( "color", "purple")
})


//jQuery example change h1 text using input
$("input").keypress(function(event) {
    $("h1").text(event.key);
});


// jQuery example to change button color
$("button").click(function() {
    $("h1").css("color", "purple");
});

 
// JavaScript example to change button color:
for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
}

*/