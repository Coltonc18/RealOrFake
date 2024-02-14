// Define an array to hold the questions
const questions = [
    { type: 'image', content: 'images/question1.jpg', correctAnswer: 'real' },
    { type: 'image', content: 'images/question2.jpg', correctAnswer: 'real' },
    { type: 'video', content: 'https://www.youtube.com/embed/yVEhrIMc-ps', correctAnswer: 'robot' },
    { type: 'image', content: 'images/question4.jpg', correctAnswer: 'robot' },
    { type: 'image', content: 'images/question5.jpg', correctAnswer: 'real' },
    { type: 'video', content: 'https://www.youtube.com/embed/VIDEO_ID_HERE', correctAnswer: 'real' },
    { type: 'video', content: 'https://www.youtube.com/embed/VIDEO_ID_HERE', correctAnswer: 'robot' },
    { type: 'video', content: 'https://www.youtube.com/embed/VIDEO_ID_HERE', correctAnswer: 'real' },
    { type: 'video', content: 'https://www.youtube.com/embed/VIDEO_ID_HERE', correctAnswer: 'robot' },
    { type: 'video', content: 'https://www.youtube.com/embed/VIDEO_ID_HERE', correctAnswer: 'real' }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question
// Function to display the current question
function displayQuestion(index) {
    const questionContainer = document.getElementById('questions-container');
    questionContainer.innerHTML = ''; // Clear previous question

    const questionData = questions[index];

    // Create question element
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    if (questionData.type === 'intro') {
        // Display introduction text
        questionElement.innerHTML = `
            <h2>Instructions</h2>
            <p>${questionData.content}</p>
            <button id="next-btn" class="answer-btn">Next</button>
        `;
        const nextButton = questionElement.querySelector('#next-btn');
        nextButton.addEventListener('click', showNextQuestion);
    } else if (questionData.type === 'image') {
        // Display image question
        questionElement.innerHTML = `
            <h2>Question ${index + 1}</h2>
            <img src="${questionData.content}" alt="Question Image">
            <div class="options">
                <button id="real-btn" class="answer-btn">Real</button>
                <button id="robot-btn" class="answer-btn">Robot</button>
            </div>
        `;
        const realButton = questionElement.querySelector('#real-btn');
        const robotButton = questionElement.querySelector('#robot-btn');
        realButton.addEventListener('click', () => handleAnswer('real'));
        robotButton.addEventListener('click', () => handleAnswer('robot'));
    } else if (questionData.type === 'video') {
        // Display video question
        questionElement.innerHTML = `
            <h2>Question ${index + 1}</h2>
            <iframe width="560" height="315" src="${questionData.content}" frameborder="0" allowfullscreen></iframe>
            <div class="options">
                <button id="real-btn" class="answer-btn">Real</button>
                <button id="robot-btn" class="answer-btn">Robot</button>
            </div>
        `;
        const realButton = questionElement.querySelector('#real-btn');
        const robotButton = questionElement.querySelector('#robot-btn');
        realButton.addEventListener('click', () => handleAnswer('real'));
        robotButton.addEventListener('click', () => handleAnswer('robot'));
    }

    questionContainer.appendChild(questionElement);
}


// Function to handle answer selection
function handleAnswer(selectedAnswer) {
    const questionData = questions[currentQuestionIndex];
    const correctAnswer = questionData.correctAnswer;

    if (selectedAnswer === correctAnswer) {
        console.log('Correct!');
        score++;
    } else {
        console.log('Incorrect!');
        // Add your scoring logic here
    }

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        console.log('Quiz completed!'); // Quiz completed
        displayScore();
    }
}

// Function to display the score
function displayScore() {
    // Display the score to the user
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.textContent = `Your score: ${score} out of ${questions.length}`;
    scoreContainer.style.display = 'block';
}

// Function to show the next question
function showNextQuestion() {
    document.getElementById('introduction').style.display = 'none';
    document.getElementById('questions-container').style.display = 'block';
    displayQuestion(currentQuestionIndex);
}

document.getElementById('next-btn').addEventListener('click', showNextQuestion);
