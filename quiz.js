/*
Ask at least 5 questions
Keep track of questions answered correctly
Provide final message stating questions answered right
rank the player gold, silver, bronze
gold 5 right
silver 3-4
bronze 1-2
no crown 0
*/

// score is 0 to start
var score = 0;

// first question
var questionOne = prompt("Does a Boolean have true and false values?");

// update score
if (questionOne.toUpperCase() === "YES" || questionOne.toUpperCase() === "Y") {
  score += 1;
  alert("Correct!");
}

// second question
var questionTwo = prompt("Can infinite || and && be used?");

// update score
if (questionTwo.toUpperCase() === "YES" || questionTwo.toUpperCase() === "Y") {
  score += 1;
  alert("Correct!");
}

// third question
var questionThree = prompt("Is a '3' considered a number in JavaScript?");

// update score
if (questionThree.toUpperCase() === "NO" || questionThree.toUpperCase() === "N") {
  score += 1;
  alert("Correct!");
}

// fourth question
var questionFour = prompt("Is this the 4th question on the quiz?");

// update score
if (questionFour.toUpperCase() === "YES" || questionFour.toUpperCase() === "Y") {
  score += 1;
  alert("Correct!");
}

// fifth question
var questionFive = prompt("Is Shade the best thing ever?");

// update score
if (questionFive.toUpperCase() === "YES" || questionFive.toUpperCase() === "Y") {
  score += 1;
  alert("Correct!");
}

// print out the score amount
document.write("<br>");
document.write('<h2>You scored ' + score + ' right! Your rank is below:</h2>');

// find the rank and print it

if (score === 5) {
  document.write("<h2>You've won the Gold Crown! WOW!</h2>");
} else if (score >= 3) {
  document.write("<h2>You've won the Silver Crown! Try harder next time!</h2>");
} else if (score >= 1 ) {
  document.write("<h2>You've won the Bronze Crown! Try again?</h2>");
} else {
  document.write("<h2>Well... No crown for you. Try again!</h2>");
}