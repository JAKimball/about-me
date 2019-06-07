'use strict';

// Question Counts (qCount...)
var qcOnlyJoking = 0;
var totalQuestionCount = qCountYesNo;
var correctResponseCount = 0;

var indexOfQuestion = 0;
var indexOfCorrectResponse = 1;
var indexOfYesReply = 2;
var indexOfNoReply = 3;
var indexOfNextIfY = 4;
var indexOfNextIfN = 5;

var questionAndAnswersList = [
  ['Question 1?', 'Y', 'Q1 Reply if Yes.', 'Q1 Reply if No', 2, 2],
  ['Question 2?', 'N', 'Q2 Reply if Yes.', 'Q2 Reply if No', 3, 3],
  ['Question 3?', 'Y', 'Q3 Reply if Yes.', 'Q3 Reply if No', 4, 4],
  ['Question 4?', 'N', 'Q4 Reply if Yes.', 'Q4 Reply if No', 5, 5],
  ['Question 5?', 'Y', 'Q5 Reply if Yes.', 'Q5 Reply if No', NaN, NaN],
  ['Question 6?', 'Y', 'Q6 Reply if Yes.', 'Q6 Reply if No', NaN, NaN],
  ['Question 7?', 'Y', 'Q7 Reply if Yes.', 'Q7 Reply if No', NaN, NaN]
];
var qCountYesNo = questionAndAnswersList.length;

console.log(questionAndAnswersList);

askName();
askYesNoQuestions();
askNumberGuessingGame();

// Ask and process the question and return the one-based number of the next questions to ask
function askYesNo(questionNumber1B) {
  var nextQuestion1B;

  while ((userResponse === 'Y' || userResponse === 'N') === false) {
    userResponse = prompt(
      '(Y/n) ' + questionAndAnswersList[questionNumber1B - 1][indexOfQuestion]
    ).toUpperCase(0);
    console.log('Response to Y/n Q' + (questionNumber1B) + ': ' + userResponse);
  }

  if (userResponse === questionAndAnswersList[questionNumber1B - 1][indexOfCorrectResponse]) {
    ++correctResponseCount;
  }

  if (userResponse === 'Y') {
    alert(questionAndAnswersList[questionNumber1B - 1][indexOfYesReply]);
    nextQuestion1B = questionAndAnswersList[questionNumber1B - 1][indexOfNextIfY];
  } else {
    alert(questionAndAnswersList[questionNumber1B - 1][indexOfNoReply]);
    nextQuestion1B = questionAndAnswersList[questionNumber1B - 1][indexOfNextIfN];
  }
  console.log('Final response to Y/n Q' + i + ': ' + userResponse);

  return nextQuestion1B;
}

function askYesNoQuestions() {
  var nextQuestion1B = 1; // The One-Based question number of the next question

  while (isNaN(nextQuestion1B) === false) {
    nextQuestion1B = askYesNo(nextQuestion1B);
  }
}

// Find out who is playing
// var promptWho = prompt('Welcome to my page.  What is your name?');
// console.log('Who: ' + promptWho);

function askName() {
  var promptWho = prompt('Welcome to my page.  What is your name?');
  console.log('Who: ' + promptWho);
}

// In a loop ask each of the Yes/No questions.
// Within that loop, use a nested loop to validate if response was Y or N.
var userResponse = '';
for (var i = 0; i < qCountYesNo; i++) {
  console.log(i + questionAndAnswersList[i][indexOfQuestion]);
  userResponse = '';

  while ((userResponse === 'Y' || userResponse === 'N') === false) {
    userResponse = prompt(
      '(Y/n) ' + questionAndAnswersList[i][indexOfQuestion]
    ).toUpperCase(0);
    console.log('Response to Y/n Q' + (i + 1) + ': ' + userResponse);
  }

  if (userResponse === 'Y') {
    alert(questionAndAnswersList[i][indexOfYesReply]);
  } else {
    alert(questionAndAnswersList[i][indexOfNoReply]);
  }
}

function askNumberGuessingGame() {
  // This one's not polite
  var fairGame = false;
  prompt('Guess which number I\'m thinking of!');
  prompt('No! Guess again!');
}
