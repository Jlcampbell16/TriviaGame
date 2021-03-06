var questionsArray = [
    {
        question: "Which animal has the longest lifespan?",
        answerList: ["Elephant", "Blue Whale", "Giant Tortoise", "Parrot"],
        answer: 2
    },
    {
        question: "How many times can a hummingbird flap its wings per second?",
        answerList: ["60", "80", "100", "120"],
        answer: 1
    },
    {
        question: "Which two parts of a giraffe’s body are about the same length?",
        answerList: ["Legs and ossicones", "Neck and tail", "Head and tail", "Ossicones and tail"],
        answer: 1
    },
    {
        question: "A large group of kangaroos is called?",
        answerList: ["A pack", "A quorum", "A herd", "A mob"],
        answer: 3
    },
    {
        question: "Which newborn baby whale can gain weight at the rate of 10lbs per hour?",
        answerList: ["Blue Whale", "Killer Whale", "Sperm Whale", "Humpback Whale"],
        answer: 0
    },
    {
        question: "Why is a flamingo pink?",
        answerList: ["They are born that way", "Sunburn", "From the shrimp and algae they eat", "Camouflage"],
        answer: 2
    },
    {
        question: "What do you call a baby Alpaca?",
        answerList: ["Kit", "Chick", "Calf", "Cria"],
        answer: 3
    },
    {
        question: "What is a rhino’s horn made of?",
        answerList: ["Tightly packed hair", "Bone", "Cartliage", "Ivory"],
        answer: 0
    }
];


var userGuess = "";
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;
var timerInterval;
var timer = 21;
var running = false;
var pick;
var newArray = [];
var holder = [];
var questionCount = questionsArray.length;
var index;



// -----------------------------------------------------------------------

$("#reset").hide();

//START BUTTON
$("#startBtn").on("click", function () {
    $("#startBtn").hide();
    runTimer();
    displayQuestions();
    for (var i = 0; i < questionsArray.length; i++) {
        holder.push(questionsArray[i]);
    }
});

//START TIMER
function runTimer() {
    clearInterval(timerInterval);
    if (!running) {
        timerInterval = setInterval(decrement, 1000);
        running = true;
    };
};


//COUNTDOWN TIMER
function decrement() {
    timer--;
    $("#timer").text("Time Left: " + timer);

    // if it reaches 0 
    if (timer === 0) {
        // clearInterval(timerInterval)
        stop();
        $("#answers").html("<p> Time is up!<br> The correct answer is: " + pick.answerList[pick.answer] + "</p>");
        unansweredCounter++;
        page();
    }
};

//TIMER STOP
function stop() {
    running = false;
    clearInterval(timerInterval);
};


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

    $("#questions").html("<h2>" + pick.question + "</h2>"); 
    for (var i = 0; i < pick.answerList.length; i++) {
        var userChoice = $("<div>");
        userChoice.addClass("answerChoice");
        userChoice.html(pick.answerList[i]);
        userChoice.attr("data-guessvalue", i);
        $("#answers").append(userChoice);
    };

    $(".answerChoice").on("click", function () {  //new class above
        userGuess = parseInt($(this).attr("data-guessvalue"));
        if (userGuess === pick.answer) {
            stop();
            correctCounter++;
            userGuess = "";
            $("#answers").html("<p>Correct!</p>");
            page();
        } else {
            stop();
            incorrectCounter++;
            userGuess = "";
            $("#answers").html("<p>Nice try!<br> The correct answer is: " + pick.answerList[pick.answer] + "</p>");
            page();
        }
        
    });
};

//hide the questions 
//hide the timer
//add the correct answers & incorrect answer
//display correct answers & incorrect answers on the page
function page() {
    newArray.push(pick);
    // questionsArray.splice(index, 1);

    var nextPage = setTimeout(function () {
        $("#answers").empty();
        timer = 21;
        

        if ((incorrectCounter + correctCounter + unansweredCounter) === questionCount) {
            $("#questions").empty();
            $("#questions").html("<h3> Game Over!</h3>");
            $("#answers").append("<h4> Correct: " + correctCounter + "</h4>");
            $("#answers").append("<h4> Incorrect: " + incorrectCounter + "</h4>");
            $("#answers").append("<h4> Unanswered: " + unansweredCounter + "</h4>");
            $("#reset").show();
            $("#timer").hide();
            correctCounter = 0;
            incorrectCounter = 0;
            unansweredCounter = 0;

        } else {
            runTimer();
            displayQuestions();
        }
    }, 3000);

};

// on click event for done button
// empty questions & nswers
// show results
// RESET BUTTON

$("#reset").on("click", function () {
    $("#reset").hide();
    $("#answers").empty();
    $("#questions").empty();
    for (var i = 0; i < holder.length; i++) {
        questionsArray.push(holder[i]);
    }
    runTimer();
    displayQuestions();
});
