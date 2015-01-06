$(document).ready(function() {

    $(".list-item").click(function() {
        var id = $(this).attr("yt-id");
        $("#yt-holder").html("<iframe src='http://youtube.com/embed/" + id + "?autoplay=1'></iframe>");
    });

});