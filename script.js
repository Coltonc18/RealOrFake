// Define an array to hold the quiz questions and answers
const quizQuestions = [
    {
        image: "question1.jpg",
        correctAnswer: "real"
    },
    {
        image: "question2.jpg",
        correctAnswer: "robot"
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

// Function to initialize the quiz
function initQuiz() {
    showQuestion();
}

// Function to display the current question
function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionImage = document.getElementById('question-image');
    questionImage.src = "images/" + currentQuestion.image;

    const realButton = document.getElementById('real-button');
    const robotButton = document.getElementById('robot-button');

    realButton.addEventListener('click', () => {
        checkAnswer('real');
    });

    robotButton.addEventListener('click', () => {
        checkAnswer('robot');
    });
}

// Function to check the user's answer
function checkAnswer(answer) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        score++;
    }

    // Move to the next question or show final score
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
}

// Function to display the final score
function showFinalScore() {
    const finalScoreElement = document.getElementById('final-score');
    finalScoreElement.textContent = score;
}

// Call the initQuiz function to start the quiz
initQuiz();
