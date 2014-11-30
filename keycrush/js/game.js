var boxes = [];
var clock;
var time = 60;
var points = 0;
var isGameRunning = false;

function dropDown() {
	boxes[2] = boxes[1];
	boxes[1] = boxes[0];
	boxes[0] = Math.floor((Math.random() * 3) + 1);
	points++;
	updatePoints();
	draw();
}

function draw() {
	for (var a = 0; a <= 3; a++) {
		for (var b = 0; b <= 3; b++) {
			$("div[x='" + a + "'][y='" + b + "']").css({ "backgroundColor": "white" });
		}
	}

	$("div[x='" + boxes[2] + "'][y='1']").css({ "backgroundColor": "black" });
	$("div[x='" + boxes[1] + "'][y='2']").css({ "backgroundColor": "black" });
	$("div[x='" + boxes[0] + "'][y='3']").css({ "backgroundColor": "black" });
}

function init() {
	clock = setInterval(function() {
		time -= 1;
		if (time <= 0) {
			gameOver();
		}
		updateClock();
	}, 1000);

	boxes[0] = Math.floor((Math.random() * 3) + 1);
	boxes[1] = Math.floor((Math.random() * 3) + 1);
	boxes[2] = Math.floor((Math.random() * 3) + 1);
	draw();
	isGameRunning = true;
}

function reset() {
	boxes[0] = 0;
	boxes[1] = 0;
	boxes[2] = 0;
	points = 0;
	isGameOver = false;
	time = 60;
}

function check(key) {
	if (boxes[2] == key) {
		return true;
	} else {
		return false;
	}
}

function updateClock() {
	$("#clock").html(time);
}

function updatePoints() {
	$("#points").html(points);
}

function removeTime(amount) {
	time -= amount;
	if (time <= 0) {
		gameOver();
	}
	updateClock();
}

function gameOver() {
	//$(".gameover-overlay").fadeIn(500);
	isGameRunning = false;
	$("#final-score").html(points);
	$("#game").fadeOut(2000, function() {
		$(".gameover-menu").show();
		$(".gameover-menu").addClass("animated-classic bounceIn");
	});
	clearInterval(clock);
}

function showErr() {
	$(".grid-holder").removeClass("animated shake");
	$(".grid-holder").finish();
	$('.grid-holder').addClass('animated shake');
	$('.grid-holder').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('.grid-holder').removeClass('animated shake');
	});
	$(".err-body").finish();
	$(".err-body").show();
	$(".err-body").fadeOut(1000);
	$(".err-overlay").finish();
	$(".err-overlay").show();
	$(".err-overlay").fadeOut(3000);
}

$(document).ready(function() {
	//init();
});