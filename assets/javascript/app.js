// create a start page with a start button 
// counter counting down  - 120 seconds
// prevent timer speeding up
//     if the timer runs out end the game and display correct & incorrect
// create an onclick event to remove the start page and display the Q&A
//     10 travia questions 
//     10 radial button answers - assign a value to each button (1-4)
//     only allowed to pick one answer per question 
// done button
// counters for correct answers & incorrect answers
//     if userGuess === correct answer {
//         correctCounter++
//     } else {
//         incorrectCounter++
//     }

var userGuess = 0;
var correctCounter = 0;
var incorrectCounter = 0;
var timerInterval;
var timer = 20;

var triviaQuestions = [{
    question: "Question 1",
    answerList: ["option 1", "option 2", "option 3", "option 4"],
    answer: 1
}, {
    question: "Question 2",
    answerList: ["choice 1", "choice 2", "choice 3", "choice 4"],
    answer: 0
}]
// -----------------------------------------------------------------------

//start button 
$("#startBtn").on("click", function () {
    $("#startBtn").hide();
    $(".timer").text("Time Left: " + timer);
    displayQuestions();
    runTimer();

})

//start timer
function runTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(decrement, 1000);

}

//countdown timer
function decrement() {
    timer--;
    $(".timer").text("Time Left: " + timer);

    // stop timer if it reaches 0 
    if (timer === 0) {
        clearInterval(timerInterval)
        endPage();
        alert("Your time is up!");
        incorrectCounter++;
    }
}

function displayQuestions() {
    var newForm = $("<form>");
    var submitBtn = $("<button>").addClass("btn btn-primary").attr("id", "submitBtn").attr("type", "submit").text("Submit");
    var newDiv = $("<div>");
    var newPar = $("<p>");
    
    //RADIO BUTTON
    var RadioBtn = $("<button>"); 
        RadioBtn.addClass("form-check-input");
        RadioBtn.attr("type", "radio");
        RadioBtn.attr("name", "inlineRadio1");
        RadioBtn.html("<button>")
    
    
    // <input class= type="radio" name="inlineRadio1" value="2">
    
    //RADIO LABEL - TEXT NEXT TO 
    var RadioLabel = $("<label>"); 
        RadioLabel.addClass("form-check-label");
        RadioLabel.attr("for", "inlineRadio1");

    {/* <label class="form-check-label" for="inlineRadio1">3</label> */ }

    for (var i = 0; i < triviaQuestions.length; i++) {
        newPar.text(triviaQuestions[i].question);
        newForm.append(newPar);
        newPar = $("<p>");

        // RadioBtn.html(triviaQuestions[i].answerList);
        // newForm.append(RadioBtn);
        // RadioBtn = $("<input>");

        RadioLabel.text(triviaQuestions[i].answerList);
        newForm.append(RadioLabel);
        RadioLabel = $("<label>");


        //follow this pattern for the other attrib. 
    }

    $(".test").append(newForm.append(submitBtn));


}

function endPage() {


}




// -----------------------------------------------------------------------


