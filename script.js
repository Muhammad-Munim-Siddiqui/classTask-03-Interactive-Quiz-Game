var questions = [
    {
        Question : "What is  5 + 5 ?",
        Options : [2,10,6,3],
        Answer : 1
    },
    {
        Question: "what is 2 - 2",
        Options: [2,8,0,3],
        Answer: 2
    },
    {
        Question: "what is 1 + 1?",
        Options: [1,2,3,0],
        Answer: 1
    },
    {
        Question: "what is 2 x 2?",
        Options: [2,4,1,0],
        Answer: 1
    },
    {
        Question: "what is (10 + 2) - 2?",
        Options: [12,14,10,0],
        Answer: 2
    }
] 
var score = 0;
var questionIndex = 0;
function Question(){
    var questionElement = document.getElementById("question");
    questionElement.textContent = questions[questionIndex].Question;
    document.getElementById("choice1").textContent = questions[questionIndex].Options[0]
    document.getElementById("choice2").textContent = questions[questionIndex].Options[1]
    document.getElementById("choice3").textContent = questions[questionIndex].Options[2]
    document.getElementById("choice4").textContent = questions[questionIndex].Options[3]
    document.getElementById("score").textContent = score
}
function answerCheck(selectedOptionIndex) {
    if (questions[questionIndex].Answer === selectedOptionIndex) {
        alert("You Got It Right!")
        score++;
    }
    else{
        alert("You Got It Wrong!")
    }
}

function nextQuestion() {
    questionIndex++
    if (questionIndex >= questions.length) {
        questionIndex = 0;
    }
    Question()
}
Question()