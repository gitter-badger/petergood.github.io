/*
 * UWAGA!
 * W tym pliku ukaże się NAJGORSZY KIEDYKOLWIEK kod javascript.
 * @author: Peter (petergood) Nicholson
 */

$(document).ready(function() {

	/* time */
	var time = 0;

	var timeInterval;

	/* Beginning story */
	var story1 = new Array();
	story1[0] = "You are here because";
	story1[1] = "you don`t know how to use Google.";
	story1[2] = "After you complete this lesson";
	story1[3] = "you will know how to use";
	story1[4] = "the most popular search engine in the world!";
	story1[5] = "Good Luck!";

	/* Tutorial text */
	var instructions = new Array();
	instructions[0] = "First, launch the web browser";
	instructions[1] = "Now, navigate to http://google.com";
	instructions[2] = "Next, enter the search query and hit the search button!";
	instructions[3] = "After you have clicked the search button, Google will handle the rest!";

	/* The end story */
	var story2 = new Array();
	story2[0] = "Congratulations!";
	story2[1] = "You have completed the tutorial!";
	story2[2] = "Was it really so difficult?";
	story2[3] = "Now remember how to use Google";
	story2[4] = "and use it";
	story2[5] = "before you ask questions on the internet!";
	story2[6] = "Thanks!";

	/* INTRO */
	setTimeout(function() {
		$(".boot-screen").fadeIn(500, function() {
			setTimeout(function() {
				$(".boot-screen").fadeOut(500, function() {
					$(".boot-screen").html("<h1 style='position: relative; top: -25px'>Learn2Google</h1>");
						setTimeout(function() {
							$(".boot-screen").fadeIn(500, function() {
								setTimeout(function() {
									$(".boot-screen").fadeOut(500, function() {
										setTimeout(function() {
											/* Story1 loop */
											var count = -1;
											
											next();

											function next() {
												count++;
												$(".boot-screen").html(story1[count]);
												$(".boot-screen").fadeIn(500);

												setTimeout(function() {
													$(".boot-screen").fadeOut(500, function() {
														if (count > story1.length - 2) {
															//loop finished
															$(".container").fadeIn(500);
															timeInterval = setInterval(function() {
																time++;
															}, 1000);
														} else {
															next();
														}
													});
												}, 2000);
											}
										}, 500);
									});
								}, 1500);
						});
					}, 500);
				});
			}, 1000);
		});
	}, 500);

	/* Tutorial (instructions) step */
	var step = -1;
	stepUp();

	/* Step function */
	function stepUp() {
		step++;
		$(".instruction-holder").html(instructions[step]);
	}
	function resetStep() {
		step = -1;
		stepUp();
	}
	function setStep(s) {
		step = s - 1;
		$(".instruction-holder").html(instructions[step]);
	}

	setTimeout(function() {
		$(".instruction-holder").fadeIn(500);
	}, 200);

	/* LISTENERS */
	$(".icon-holder").click(function() {
		setTimeout(function() {
			$(".browser-holder").fadeIn(100, function() {
				stepUp();
			});
		}, 500);
	});

	$("#close-browser").click(function() {
		$(".browser-holder").fadeOut(100, function() {
			resetStep();
			$("#url-input").val("internet:home");
			$("#google").hide();
			$("#error").hide();
			$("#home-page").show();
		});
	});

	$("#go-button").click(function() {
		if ($("#url-input").val() != "http://google.com") {
			$("#google").hide();
			$("#home-page").hide();
			$("#error").show();
			setStep(2);
		} else {
			$("#error").hide();
			$("#home-page").hide();
			$("#google").show();
			stepUp();
		}

		if ($("#url-input").val() == "internet:home") {
			$("#google").hide();
			$("#error").hide();
			$("#home-page").show();
			setStep(2);
		}
	});

	$("#url-input").on("keydown", function(event) {
		if (event.keyCode == 13) {
			if ($("#url-input").val() != "http://google.com") {
				$("#google").hide();
				$("#home-page").hide();
				$("#error").show();
				setStep(2);
			} else {
				$("#error").hide();
				$("#home-page").hide();
				$("#google").show();
				stepUp();
			}
		}

		if ($("#url-input").val() == "internet:home") {
			$("#google").hide();
			$("#error").hide();
			$("#home-page").show();
			setStep(2);
		}
	});

	$("#url-input").on("click", function() {
		$(this).select();
	});

	var count2 = -1;

	function next2() {
		count2++;
		$(".boot-screen").html(story2[count2]);
		$(".boot-screen").fadeIn(500);

		setTimeout(function() {
			$(".boot-screen").fadeOut(500, function() {
				if (count2 > story2.length - 2) {
					//loop finished
					$("#time-info").html("You mastered Google in " + time + " seconds!");
					$("#the-end").fadeIn(500);
				} else {
					next2();
				}
			});
		}, 2000);
	}

	$("#google-input").on("keydown", function(event) {
		if (event.keyCode == 13) {
			stepUp();
			setTimeout(function() {
				$(".container").fadeOut(500, function() {
					next2();
					clearInterval(timeInterval);
				});
			}, 2000);
		}
	});

	$("#google-search").click(function() {
		stepUp();
		setTimeout(function() {
			$(".container").fadeOut(500, function() {
				next2();
				clearInterval(timeInterval);
			});
		}, 2000);
	});
});