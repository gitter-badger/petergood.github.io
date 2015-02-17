var user = {
	"username": "",
	"uid": "",
	"position": 0
};

var open = [ 5, 10, 15, 20, 30 ];

var firebase = new Firebase("https://gamepeter.firebaseio.com/");

function setUserDetails(new_username) {
	user.username = new_username;
	user.uid = Math.floor((Math.random() * 9999) + 1);
	$("#info").show();

	firebase.push({ "type": "new_user", "username": user.username, "uid": user.uid });
}

function showQuestion(open) {
	$("#info").hide();

	if (!open) {
		var question_index = Math.floor((Math.random() * questions.closed.length) + 0);

		$("#question-holder .question-title").html(questions.closed[question_index].title);
		for (var i = 0; i < questions.closed[question_index].answers.length; i++) {
			if (questions.closed[question_index].answers[i].correct) {
				$("#question-holder .answer-holder").append("<div class='answer' onclick='answerOK()'>" + questions.closed[question_index].answers[i].content + "</div>");
			} else {
				$("#question-holder .answer-holder").append("<div class='answer' onclick='answerWrong()'>" + questions.closed[question_index].answers[i].content + "</div>");
			}
		}

		$("#question-holder").show();
	} else {
		var question_index = Math.floor((Math.random() * questions.open.length) + 0);
		$("#question-holder .question-title").html(questions.open[question_index].title);
		$("#question-holder .answer-holder").append("<input type='text' class='answer-input' placeholder='Odpowiedź (np. 10, 1.5)' />");
		$("#question-holder .answer-holder").append("<button style='padding: 3px' onclick='verifyClosedQuestion(" + question_index + ")'>Odpowiedz</button>");

		$("#question-holder").show();
	}
}

function answerOK() {
	user.position++;
	$("#question-holder").hide();
	$("#question-holder .question-title").html("");
	$("#question-holder .answer-holder").html("");
	$("#info").show();

	if (user.position == 35) {
		firebase.push({ "type": "show_winner", "username": user.username });
	} else {
		firebase.push({ "type": "question_answer", "uid": user.uid, "correct": true, "position": user.position });
	}
}

function answerWrong() {
	if (user.position > 0) {
		user.position--;
	}
	$("#question-holder").hide();
	$("#question-holder .question-title").html("");
	$("#question-holder .answer-holder").html("");
	$("#info").show();
	firebase.push({ "type": "question_answer", "uid": user.uid, "correct": false, "position": user.position });
}

function verifyClosedQuestion(question_index) {
	var answer = questions.open[question_index].answer;
	var value = $("#question-holder .answer-holder .answer-input").val();

	if (answer != value) {
		if (user.position > 0) {
			user.position--;
		}
		firebase.push({ "type": "question_answer", "uid": user.uid, "correct": false, "position": user.position });
	} else {
		user.position++;
		if (user.position == 35) {
			firebase.push({ "type": "show_winner", "username": user.username });
		} else {
			firebase.push({ "type": "question_answer", "uid": user.uid, "correct": true, "position": user.position });
		}
	}

	$("#question-holder").hide();
	$("#info").show();
}

firebase.on('child_added', function(childSnapshot, prevChildName) {

	var data = childSnapshot.val();

	if (data.type == "question") {
		console.log("test");

		if (data.uid == user.uid) {

			if (open.indexOf(user.position) > -1) {
				showQuestion(true);
			} else {
				showQuestion(false);
			}
		}
	}

});