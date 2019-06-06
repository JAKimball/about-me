'use strict';

var questionAndAnswersList = [
  ['Question 1?', 'Q1 Reply if Yes.', 'Q1 Reply if No'],
  ['Question 2?', 'Q2 Reply if Yes.', 'Q2 Reply if No'],
  ['Question 3?', 'Q3 Reply if Yes.', 'Q3 Reply if No'],
  ['Question 4?', 'Q4 Reply if Yes.', 'Q4 Reply if No'],
  ['Question 5?', 'Q5 Reply if Yes.', 'Q5 Reply if No'],
];
var indexOfQuestion = 0;
var indexOfYesReply = 1;
var indexOfNoReply = 2;


console.log(questionAndAnswersList);

var simpleArray = [1,2,3];
var saLen = simpleArray.length;

// Question Counts (qCount...)
var qcOnlyJoking = 0;
var qCountYesNo = questionAndAnswersList.length;
var totalQuestionCount = qCountYesNo;
var correctResponseCount = 0;

// Find out who is playing
var promptWho = prompt('Welcome to my page.  What is your name?');
console.log('Who: ' + promptWho);

// In a loop ask each of the Yes/No questions.
// Within that loop, use a nested loop to validate if response was Y or N.
var userResponse = '';
for (var i = 0 ; i < qCountYesNo; i++) {
  console.log (i + questionAndAnswersList[i][indexOfQuestion]);
  userResponse = '';

  while ((userResponse === 'Y' || userResponse === 'N') === false) {
    userResponse = prompt('(Y/n) ' + questionAndAnswersList[i][indexOfQuestion]).toUpperCase[0];
    console.log('Response to Y/n Q' + i + ': ' + userResponse);
    
  }

  console.log('Final response to Y/n Q' + i + ': ' + userResponse);
}

// This one's not right
var fairGame = false;
prompt('Guess which number I\'m thinking of!');
prompt('No! Guess again!');

// for (var guessCount = 4; guessCount > 0 ; ++guessCount) {}
