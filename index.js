var readlineSync = require('readline-sync');

//Questions
var questions = [{
  Question : "What is my favorite color? ",
  Answer : "black"
},
{
  Question : "What is my Birth date (only date)? ",
  Answer : "28"
},

{
  Question : "Whare i live? ",
  Answer : "surat"
},
{
  Question : "Which is my favorite food? ",
  Answer : "panipuri"
},

{
  Question : "Which is my favorite place? ",
  Answer : "College"
},

{
  Question : "Which is my favorite cricketer? ",
  Answer : " A B De villiers"
},

{
  Question : "what is my favorite song artist? ",
  Answer : "arijit singh"
},

{
  Question : "Which is my favorite movie? ",
  Answer : "3 idiots"
},

{
  Question : "which is my favorite programming language? ",
  Answer : "javascript"
},

{
  Question : "which mobile phone i use? ",
  Answer : "mi"
}
]


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score += 1;
  }

  else {
    console.log("Wrong!");
    score -= 1;
  }

  console.log(`Current score : ${score}`);
}


//High score function
const highScore = [
{
  name : "raju",
  score : 9
},

{
  name : "baburav",
  score : 8
}
]

function checkHighScore(score, name) {
  for(var i = 0; i < highScore.length; i++){
    if(highScore[i].score < score){
      console.log('congratulations you are on high score board');
      highScore.push({name:name, score : score});
      break;
    }
  }
}

//main
var userName = readlineSync.question("May i have your name? ");

var score = 0;
console.log(`Welcome ${userName} DO YOU KNOW Jay?`);
console.log( " ");
console.log( " ");


// call function
for(var i = 0; i< questions.length; i++) {
  var curruntQuestion = questions[i];

  play(curruntQuestion.Question, curruntQuestion.Answer);
  console.log( " ");
  
}

console.log(`Your Final Score Is ${score}`);
console.log( " ");
console.log( " ");

checkHighScore(score, userName);

for(var i = 0; i<highScore.length; i++) {
  console.log("----------HIGH SCORE BOARD----------");
  console.log("Name : ", highScore[i].name);
  console.log("Score : ", highScore[i].score);
  console.log("-----------------------------------------------------");


}