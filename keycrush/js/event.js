$(document).ready(function() {
	$("html").keydown(function(event) {
		if (isGameRunning) {
			if (event.which == 81) {
				$("#q").css({ "top": "1px" });
			}

			if (event.which == 87) {
				$("#w").css({ "top": "1px" });
			}

			if (event.which == 69) {
				$("#e").css({ "top": "1px" });
			}
		}
	});

	$("html").keyup(function(event) {
		if (isGameRunning) {
			if (event.which == 81) {
				$("#q").css({ "top": "0px" });

				if (check(1)) {
					dropDown();
				} else {
					removeTime(10);
					showErr();
				}
			}

			if (event.which == 87) {
				$("#w").css({ "top": "0px" });
				
				if (check(2)) {
					dropDown();
				} else {
					removeTime(10);
					showErr();
				}
			}

			if (event.which == 69) {
				$("#e").css({ "top": "0px" });
				
				if (check(3)) {
					dropDown();
				} else {
					removeTime(10);
					showErr();
				}
			}
		}
	});

	$("#restart").click(function() {
		$(".gameover-menu").fadeOut(1, function() {
			setTimeout(function() {
				$(".gameover-menu").removeClass("animated-classic bounceIn");
				$(".grid-holder").removeClass("animated shake");
				$(".grid-holer").finish();
				$("#game").fadeIn(500);
				reset();
				init();
			}, 1000);
		});
	});

	$("#start").click(function() {
		$("#menu").fadeOut(1, function() {
			setTimeout(function() {
				$("#game").fadeIn(500);
				reset();
				init();
			}, 1000);
		});
	});

	$("#main-menu").click(function() {
		$(".gameover-menu").fadeOut(1, function() {
			$("#menu").removeClass("animated-classic bounceIn");
			$("#menu").show();
			$("#menu").addClass("animated-classic bounceIn");
		});
	});

	$("#about").click(function() {
		$("#main").fadeOut(1, function() {
			$("#about-menu").removeClass("animated-classic bounceIn");
			$("#about-menu").show();
			$("#about-menu").addClass("animated-classic bounceIn");
		});
	});

	$("#back").click(function() {
		$("#about-menu").fadeOut(1, function() {
			$("#main").removeClass("animated-classic bounceIn");
			$("#main").show();
			$("#main").addClass("animated-classic bounceIn");
		});
	})
});