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
});