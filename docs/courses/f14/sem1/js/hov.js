var myAppend = function() {
    var toAppend = "";
    for (var i=1; i<=15; i++) {
        toAppend = toAppend + 'input:checked ~ #week' + i + ' {max-height: ' + $("#inner" + i).height() + 'px;}\n';
    }
        $("#addedStyle").html(toAppend);
    };
$(document).ready(function() {
    $("head").append('<style type="text/css" id="addedStyle"></style>');
    myAppend();
    $("#expand").click(function() {
        $("input").prop("checked", true);
    });
    $("#contract").click(function() {
        $("input").prop("checked", false);
    });
    $(window).load(function() {
        setTimeout(function() {
            $('input').prop('checked', true);
            //$('html, body').animate({scrollTop: $(document).height()}, 'slow');
        }, 750);
    });
    $(window).resize(myAppend);
});