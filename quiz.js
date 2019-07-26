currentQuestion = 0;
function buildQuiz() {
	output = '<style>.quizAnswers { margin-bottom: 25px; } #' + htmlID + ' { max-width: 1000px; margin: 0 auto;}</style>';
	for (var i=0;i<quizStc.length;i++) {
		output = output + '<div class="quizQuestion" id="question' + i +'"><!-- <img alt="' + quizStc[i]["question"][0] + '" src="' + quizStc[i]["question"][1] + '" align="right" /> --><h3>Question ' + (i + 1) + ' of ' + quizStc.length + ': ' + quizStc[i]["question"][0] + '</h3><div class="quizAnswers">';
		for (var j=0;j<quizStc[i]["answers"].length;j++) {
			output = output + '<input name="question' + i + '" type="' + quizStc[i]["type"] + '" value="' + quizStc[i]["answers"][j][1] + '"> ' + quizStc[i]["answers"][j][0] + '</input><br />';
		}
		output = output + '<a onclick="saveAnswer(); currentQuestion++; changeQuestion();" class="button -small -blue -left -next' + i +'">Save and Next</a><br style="clear: both;" /></div>';
		if ( i > 0 ) {
			output = output + '<a onclick="saveAnswer(); currentQuestion--; changeQuestion();" class="button -small -blue -left -previous' + i + '">Previous</a>';
		}
		output = output + '<a onclick="saveAnswer(); currentQuestion++; changeQuestion();" class="button -small -blue -left -next' + i + '" style="display: none;">Next</a></div>';
	}
	output = output + '<div id="quizResults"></div>';
	$('#' + htmlID).html(output);
	changeQuestion();
}
function changeQuestion() {
	$('.quizQuestion').hide();
	$('#question'+currentQuestion).show();
	$('.-next'+(currentQuestion-1)).show();
		calculateResults();
}
function saveAnswer() {
	quizStc[currentQuestion]['response'] = [];
	$('#question' + currentQuestion + ' input').each(function() {
		if(this.checked) {
			quizStc[currentQuestion]['response'][quizStc[currentQuestion]['response'].length] = this.value.split(',');
		}
	});		
}
function calculateResults() {
	for (var i=0;i<currentQuestion;i++) {
		for (var j=0;j<quizStc[i]['response'].length;j++) {
			for (key in tally) {
				if (tally[key]['answers'].length == 0) {
					tally[key]['answers'] = [];
				}
				if (!Array.isArray(tally[key]['answers'][i])) {
					tally[key]['answers'][i] = [];
				}
				tally[key]['answers'][i][j] = quizStc[i]['response'][j][tally[key]['answerKey']];
				tally[key]['total'] = tally[key]['total'] + parseInt(quizStc[i]['response'][j][tally[key]['answerKey']]);
			}
		}
	}
	winner = { "total" : 0 , "type" : ''}
	for (personType in tally) {
		if (tally[personType]['total'] > winner['total']) {
			winner['total'] = tally[personType]['total'];
			winner['type'] = personType;
		}
	}
	if (currentQuestion>quizStc.length-1) {
		scoreOutput = '<style>div#quizResults img { float: right; margin-left: 25px; max-height: 300px; }</style><h2>Results:</h2>' + tally[winner['type']]['results']
		$('#quizResults').show().html(scoreOutput);
	}
}
function waitfor$() {
	if (!window.$) {
		setTimeout(waitfor$, 50);
	} else {
		buildQuiz();
	}
}
waitfor$();