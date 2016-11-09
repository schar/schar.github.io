$(document).ready(function() {
    $("li ul").hide();
    $("strong").click(function() {
        $(this).next("ul").toggle();
    });
    $("#exp").click(function() {
        $("ul").show();
    });
    $("#con").click(function() {
        $("li ul").hide();
    });
    $("div div").hover(function(){
        $(this).addClass("white");
    }, function(){ 
        $(this).removeClass("white");
    }).click(function(){
        $(this).removeClass("white");
    });
});