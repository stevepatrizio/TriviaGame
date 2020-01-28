$(document).ready(function(){
  
    // event listeners
    $("#remaining-time").hide();
    $("#start").on('click', TriviaQuestions.startGame);
   // $(document).on('click' , '.option', TriviaQuestions.guessCheck);

})

  // Declare variables
  var triviaCorrect = 0;
  var triviaWrong = 0;
  var triviaNotAnswered = 0;
  var myQuestionIndex = 0;
  var myAnswerIndex = 0;

  var TriviaQuestions = [
{
    question: "Complete this statement: A day that will live in____!",
    questionChoice:  ["History", "Peace", "Outer Space","Infamy"],
    answer: "Infamy"
},

{
    question: "What is another name for Saint Nicholas?",
    questionChoice:  ["Very Large Man", "Mr Jiggles", "Bugs Bunny", "Santa Claus"],
    answer: "Santa Claus"
},

{
    question: "Name the last three presidents to be impeached?",
    questionChoice:  ["Washington/Lincoln/Adams", "Jefferson/Bush/Carter", "Nixon/Clinton/Trunp", "Harding/Harrison/Cleveland"],
    answer: "Nixon/Clinton/Trunp"
},

{
    question: "What is the definition of SCUBA?",
    questionChoice:  ["Scooby Doo", "Scrub Bath", "I have no idea", "Self-contained underwater breathing apparatus"],
    answer: "Self-contained underwater breathing apparatus"
},

{
    question: "What does REDRUM mean?",
    questionChoice:  ["Spicy hot Captain Morgan, Red Runner", "Read the Rum bottle labels", "Murder spelled backwards"],
    answer: "Murder spelled backwards"
}
]

function renderQuestion() {
    // If there are still more questions, render the next one.
    // if (myQuestionIndex <= (questions.length - 1)) {
    //   document.querySelector("#question").innerHTML = question[myQuestionIndex].question;
    // }
    // // If there aren't, render the end game screen.
    // else {
    //   document.querySelector("#question").innerHTML = "Game Over!";
    // }
    
    for (i=0; i < TriviaQuestions.length; i++){
        console.log("Hello");
    }
}

// renderQuestion();


  
