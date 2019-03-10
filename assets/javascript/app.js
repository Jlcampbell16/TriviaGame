var questionsArray = [
    {
        question: "Question 1",
        answerList: ["Q1-option 1", "Q1-option 2", "Q1-option 3", "Q1-option 4"],
        answer: 1
    },
    {
        question: "Question 2",
        answerList: ["Q2-choice 1", "Q2-choice 2", "Q2-choice 3", "Q2-choice 4"],
        answer: 0
    },
    {
        question: "Question 3",
        answerList: ["Q3-option 1", "Q3-option 2", "Q3-option 3", "Q3-option 4"],
        answer: 1
    },
    {
        question: "Question 4",
        answerList: ["Q4-option 1", "Q4-option 2", "Q4-option 3", "Q4-option 4"],
        answer: 1
    },
    {
        question: "Question 5",
        answerList: ["Q5-option 1", "Q5-option 2", "Q5-option 3", "Q5-option 4"],
        answer: 1
    },]


var userGuess = "";
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;
var timerInterval;
var timer = 20;
var running = false;
var pick;
var newArray = [];
var holder = [];
var questionCount = questionsArray.length;
var index;


console.log(questionsArray)

// -----------------------------------------------------------------------
// RESET BUTTON




// start page with a start button 
// create an onclick event
//hide start button
//display the timer
//run the timer funtion
//display questions
//START BUTTON
$("#startBtn").on("click", function () {
    $("#startBtn").hide();
    runTimer();
    displayQuestions();
    for (var i = 0; i < questionsArray.length; i++) {
        holder.push(questionsArray[i]);
    }

})

//run timer
//clear it each time
//START TIMER
function runTimer() {
    // clearInterval(timerInterval);
    if (!running) {
        timerInterval = setInterval(decrement, 1000);
        running = true;
    }

}

//count down the timer
//if the counter reached 0, go the to results page
//alter "time's up"
//COUNTDOWN TIMER
function decrement() {
    timer--;
    $("#timer").text("Time Left: " + timer);

    // if it reaches 0 
    if (timer === 0) {
        // clearInterval(timerInterval)
        stop();
        alert("Your time is up!");
        $("#answers").html("<p> The correct answer is: " + pick.answerList[pick.answer] + "</p>");
        incorrectCounter++;
        endPage();
    }
}

//TIMER STOP
function stop() {
    running = false;
    clearInterval(timerInterval)
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
    index = Math.floor(Math.random() * questionsArray.length);
    pick = questionsArray[index];

    $("#questions").html("<h2>" + pick.question + "</h2>")  //PICK.QUESTION? 
    for (var i = 0; i < pick.answerList.length; i++) {
        var userChoice = $("<div>");
        userChoice.addClass("answerChoice");
        userChoice.html(pick.answerList[i]);
        userChoice.attr("data-guessvalue", i);
        $("#answers").append(userChoice);
    }

    $(".answerChoice").on("click", function () {  //new class above
        userGuess = parseInt($(this).attr("data-guessvalue"));
        if (userGuess === pick.answer) {
            stop()
            correctCounter++;
            userGuess = "";
            $("#answers").html("<p>Correct!</p>");
            endPage()
        } else {
            stop()
            incorrectCounter++;
            userGuess = "";
            $("#answers").html("<p>Wrong! The correct answer is: " + pick.answerList[pick.answer] + "</p>");
            endPage();
        }
    })
}
//hide the questions 
//hide the timer
//add the correct answers & incorrect answer
//display correct answers & incorrect answers on the page
function endPage() {

    newArray.push(pick);
    questionsArray.splice(index, 1);

    // var endPage = setTimeout(function () {
        // $("#answers").empty();
        // timer = 20;


        if ((incorrectCounter + correctCounter + unansweredCounter) === questionCount.length) {
            $("#questions").empty();
            $("#questions").html("<h3> Game Over!</h3>");
            $("#answers").append("<h4> correct: " + correctCounter + "</h4>");
            $("#answers").append("<h4> Incorrect: " + incorrectCounter + "</h4>");
            $("#answers").append("<h4> Unanswered: " + unansweredCounter + "</h4>");
            $("#reset").show();
            correctCounter = 0;
            incorrectCounter = 0;
            unansweredCounter = 0;
        } else {
            runTimer();
            displayQuestions();
        }
    // }, 2000)
}

// on click event for done button
// hide questions
// show results
// DONE BUTTON
function reset () {
$("#reset").on("click", function () {
    $("#reset").hide();
    $("#answers").empty();
    $("#questions").empty();
    for (var i = 0; i < holder.length; i++) {
        questionsArray.push(holder[i]);
    }
    runTimer();
    displayQuestions();
})
}


reset ();
// $("#startBtn").hide();
