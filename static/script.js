// Keep track of the current question index
let currentQuestionIndex = 1;
let score = 0;

// Function to show the next question
function showNextQuestion() {
    // Increment the question index
    currentQuestionIndex++;

    // Hide the current question
    const currentQuestion = document.querySelector(`#question${currentQuestionIndex - 1}`);
    currentQuestion.style.display = 'none';

    // Show the next question if it exists
    const nextQuestion = document.querySelector(`#question${currentQuestionIndex}`);
    if (nextQuestion) {
        nextQuestion.style.display = 'block';
    } else {
        // If there are no more questions, show the final score
        showFinalScore();
    }
}

// Function to handle answer selection
function handleAnswer(answer) {
    if (answer === 'Real') {
        score++;
    }
    // Update score display
    document.getElementById('score').innerText = score;
    // Show next question
    showNextQuestion();
}

// Add event listener to all answer buttons
const answerButtons = document.querySelectorAll('.answer-btn');
answerButtons.forEach(button => {
    button.addEventListener('click', () => handleAnswer(button.innerText));
});

// Function to show the final score
function showFinalScore() {
    // Hide all questions
    const allQuestions = document.querySelectorAll('.question');
    allQuestions.forEach(question => {
        question.style.display = 'none';
    });

    // Show the final score
    const finalScore = document.querySelector('#final-score');
    finalScore.style.display = 'block';
}
