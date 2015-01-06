$(document).ready(function() {

    for (var i = 0; i < 150; i++) {
        var x = Math.floor((Math.random() * 1000) + 1);
        var y = Math.floor((Math.random() * 600) + -200);
        
        $("#star-container").append("<div class='star' style='margin-top: " + y + "px; margin-left: " + x + "px;'></div>");
    }
    
});