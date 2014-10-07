/*
 * W tym pliku ukaże się najgorszy kod JS w historii! (1,000,000)
 * @author: Peter Nicholson
 */

$(document).ready(function() {
	$("#start").click(function() {
		$(this).fadeOut(100, function() {
			setTimeout(function() {
				$("#million").fadeOut(200, function() {
					setTimeout(function() {
						$("#home").hide();
						$("#history").fadeIn(function() {
							setTimeout(function() {
								$(".box").each(function() {
									$(this).fadeIn(500);
								});

								$("#zero").fadeIn(500);
							}, 500);
						});
					}, 1000);
				});
			}, 1000);
		});
	});

	$(".box").click(function() {
		var src = $(this).attr("target");
		$(".overlay-page").show();
		$(".browser").fadeIn(500);
		$(".browser iframe").attr("src", src);
	});

	$(".browser iframe").load(function() {
		$(".browser iframe").show();
		$(".browser #loading").fadeOut(500);
	});

	$(document).mouseup(function (e) {
	    var container = $(".browser");

	    if (!container.is(e.target)
	        && container.has(e.target).length === 0)  {
	        $(".browser iframe").hide();
	    	$(".browser iframe").attr("src", "");
			$(".browser").fadeOut(500, function() {
				$(".overlay-page").hide();
				$(".browser #loading").show();
			});
	    }
	});
});