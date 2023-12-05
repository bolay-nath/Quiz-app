const questions = [
    {
        question:"which bird is the national bird in the bangladesh",
        answer:[
            {text:"Moyna", correct: false},
            {text:"Doyal", correct: true},
            {text:"wood paker", correct: false},
            {text:"shalik", correct: false}
        ]
    },
    {
        question:"world most big animal name?",
        answer:[
            {text:"Elephant", correct: false},
            {text:"Shark", correct: false},
            {text:"whale", correct: true},
            {text:"lion", correct: false}
        ]
    },
    {
        question:"world richest person according to 2022?",
        answer:[
            {text:"Rook", correct: false},
            {text:"Elon masx", correct: true},
            {text:"Bill gates", correct: false},
            {text:"Jack ma", correct: false}
        ]
    },
    {
        question:"who are a prime minister in the bangladesh?",
        answer:[
            {text:"Khaleda Zia", correct: false},
            {text:"joy", correct: false},
            {text:"tarak jia", correct: false},
            {text:"sheikh hasina", correct: true}
        ]
    }
];

//declare the variable..
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-button');
const nextButton = document.getElementById('next-btn');
let current = 0;
let score = 0;

//the main function...
function showQuiz(){
    current = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    //the call back function showQuestion()...
    showQuestion()

}
// showQuestion() call the main work in this function...
function showQuestion(){
//in this function we call the reset() function..
// the reset()function work is reset/remove the firstChild in the button..
    reset()
    let currentQuestion = questions[current];
    let questionNo = current + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;
    
    // this line to style the option of the question...
    currentQuestion.answer.forEach(answers =>{
        const buttons = document.createElement('button');
        buttons.classList.add("btn");
        buttons.innerHTML = answers.text;
        answerButton.appendChild(buttons)
        if(answers.correct){
            buttons.dataset.correct = answers.correct;

        }
        buttons.addEventListener('click',selectAnswer);
    })
}
//reset function call...
function reset(){
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++
    }else{selectBtn.classList.add('incorrect')};
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    nextButton.style.display = 'block';
    
}
function showScore(){
    reset();
    questionElement.innerHTML = `your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play agin";
    nextButton.style.display = 'block'
}

function handelNextButton(){
    current++;
    if(current < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(current < questions.length){
        handelNextButton();

    }else{showQuiz()}
})

showQuiz();
