var firebase = new Firebase("https://gamepeter.firebaseio.com/");
var join_allowed = true;
	var user_count = 0;
	var iterate_count = 0;
	var users = {
		"user_list": [
			{
				"username": "",
				"uid": "",
				position: 0
			},
			{
				"username": "",
				"uid": "",
				position: 0
			},
			{
				"username": "",
				"uid": "",
				position: 0
			}
		]
	};

function sendQuestion() {
	if (iterate_count == 3) {
		iterate_count = 0;
	}

	firebase.push({ "type": "question", "uid": users.user_list[iterate_count].uid });
	$(".user-container").css({ "backgroundColor": "white" });
	$("#" + users.user_list[iterate_count].uid).css({ "backgroundColor": "darkgray" });
	iterate_count++;

	console.log("sent");
}

function resetGame() {
	firebase.remove(function(err) {
		location.reload();
	});
}

function showWinner(username) {
	$(".container").hide();
	$(".winner").show();
	$(".winner .username").html(username);
	$("body").css({ "backgroundColor": "#80CC99" });
}

$(document).ready(function() {
	firebase.on('child_added', function(childSnapshot, prevChildName) {
	  
		var data = childSnapshot.val();

		if (data.type == "new_user") {
			if (user_count <= 2) {
				users.user_list[user_count].username = data.username;
				users.user_list[user_count].uid = data.uid;
				console.log("user added");

				$(".container").append("<div class='user-container' id='" + data.uid + "'><div class='username'>" + data.username + "</div><div class='score'>0</div><div style='clear: both'></div></div>");

				user_count++;

				if (user_count == 3 && join_allowed) {
					join_allowed = false;

					$("#start-game").show();
				}
			}
		}

		if (data.type == "question_answer") {
			if (data.correct) {
				console.log("got correct");

				$("#" + data.uid).css({ "backgroundColor": "green" });

				setTimeout(function() {
					console.log("sasd");
					$("#" + data.uid).css({ "backgroundColor": "white" });
					sendQuestion();
				}, 5000);
			} else {
				console.log("got wrong");

				$("#" + data.uid).css({ "backgroundColor": "red" });

				setTimeout(function() {
					console.log("sasd");
					$("#" + data.uid).css({ "backgroundColor": "white" });
					sendQuestion();
				}, 5000);
			}

			$("#" + data.uid + " .score").html(data.position);
		}

		if (data.type == "show_winner") {
			showWinner(data.username);
		}

	});
});