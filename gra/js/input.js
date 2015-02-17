$(document).ready(function() {

	$("#login-button").on("click", function() {
		var username = $("#username").val();

		if (username.length == 0) {
			$("#username").css({ "border": "1px solid red" });
		} else {
			$("#login").hide();
			setUserDetails(username);
		}
	});

	$("#start-game").click(function() {
		$("#start-game").hide();
		$("#reset-game").show();
		sendQuestion();
	});

	$("#reset-game").click(function() {
		resetGame();
	});

});