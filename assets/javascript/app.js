var userGuess = 0;
var correctCounter = 0;
var incorrectCounter = 0;
var timerInterval;
var timer = 20;

var questionsArray = [{
    question: "Question 1",
    answerList: ["option 1", "option 2", "option 3", "option 4"],
    answer: 1
}, {
    question: "Question 2",
    answerList: ["choice 1", "choice 2", "choice 3", "choice 4"],
    answer: 0
}]
console.log(questionsArray)

// -----------------------------------------------------------------------


//prevent the timer from speeding up
//START TIMER
function runTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(decrement, 1000);

}

//count down the timer
//if the counter reached 0, go the to results page
//alter "time's up"
//COUNTDOWN TIMER
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


// display 10 travia questions & answers
    // only allowed to pick one answer per question 
    // assign a value to each button (1-4)
// counters for correct answers & incorrect answers
//     if userGuess === correct answer {
//         correctCounter++
//     } else {
//         incorrectCounter++
//     }
function displayQuestions() {

    for (var i = 0; i < questionsArray.length; i++) {
    var question = $("<p>");
    question.addClass("triviaQuestion");
    question.text(questionsArray[i].question)
    $("#questions").append(question);

    var answerOptions = $("<button>");
    answerOptions.addClass("answerOptions");
    answerOptions.attr("data-answerOption", questionsArray[i].answerList[i]-1);
    answerOptions.text(questionsArray[i].answerList[i]);
    $("#questions").append(answerOptions);
}


}

// on click event for done button
    // hide questions
    // show results
// DONE BUTTON


//hide the questions 
//hide the timer
//add the correct answers & incorrect answer
//display correct answers & incorrect answers on the page
function endPage() {


}

// -----------------------------------------------------------------------
// start page with a start button 
// create an onclick event
    //hide start button
    //display the timer
    //run the timer funtion
    //display questions
    
//START BUTTON
$("#startBtn").on("click", function () {
    $("#startBtn").hide();
    $(".timer").text("Time Left: " + timer);
    runTimer();
    displayQuestions();

})

