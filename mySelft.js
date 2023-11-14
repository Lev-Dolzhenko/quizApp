const Questions = [{
	q: "What is capital of India?",
	a: [{ text: "Gandhinagar", isCorrect: false },
	{ text: "Surat", isCorrect: false },
	{ text: "Delhi", isCorrect: true },
	{ text: "Mumbai", isCorrect: false }
	]

},
{
	q: "What is the capital of Thailand?",
	a: [{ text: "Lampang", isCorrect: false, isSelected: false },
	{ text: "Phuket", isCorrect: false },
	{ text: "Ayutthaya", isCorrect: false },
	{ text: "Bangkok", isCorrect: true }
	]

},
{
	q: "What is the capital of Gujarat",
	a: [{ text: "Surat", isCorrect: false },
	{ text: "Vadodara", isCorrect: false },
	{ text: "Gandhinagar", isCorrect: true },
	{ text: "Rajkot", isCorrect: false }
	]

}

]


let currQuestion = 0;
let score = 0;

function loadQuestions() {
    let question = document.getElementById('ques');
    let opt = document.getElementById('opt');

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = '';

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        let choiceDiv = document.createElement('div');
        let choice = document.createElement('input');
        let choiceLabel = document.createElement('label');
        let choicQuestion = document.createElement('p');

        choiceDiv.classList.add('question-block')
        choiceDiv.id = i;

        choice.type = 'radio';
        choice.name = 'answer';
        choice.value = i;

        // choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicQuestion.textContent = Questions[currQuestion].a[i].text;

        choiceLabel.appendChild(choiceDiv);
        choiceDiv.appendChild(choicQuestion);
        choiceDiv.appendChild(choice);
        opt.appendChild(choiceLabel);
    }
}

loadQuestions();

function loadScore() {
    let Totalscore = document.getElementById('score');
    Totalscore.textContent = `Вы набрали ${score} баллов из ${Questions.length}`;
    Totalscore.classList.add('totalScore');
}

function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQuestions();
    } else {
        document.getElementById('opt').remove();
        document.getElementById('ques').remove();
        document.getElementById('btn').remove();
        loadScore();
    }
}

function checkAnswer() {
	let selectedAnswer = parseInt(document.querySelector('input[name = "answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAnswer].isCorrect) {
    score++;
    console.log("Correct")
    nextQuestion();
    } else {
        nextQuestion();
    }
}

