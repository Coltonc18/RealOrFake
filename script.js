// Define an array to hold the questions
const questions = [
    { type: 'image', content: 'images/question1.jpg', correctAnswer: 'real' },
    { type: 'image', content: 'images/question2.jpg', correctAnswer: 'fake' },
    { type: 'video', content: 'https://www.youtube.com/embed/CArR7dIrZII', correctAnswer: 'fake' },
    { type: 'image', content: 'images/question4.jpg', correctAnswer: 'fake' },
    { type: 'image', content: 'images/question5.jpg', correctAnswer: 'fake' },
    { type: 'video', content: 'https://www.youtube.com/embed/4_YmiTZgNKI', correctAnswer: 'real' },
    { type: 'video', content: 'https://www.youtube.com/embed/xfMWbTliJmg', correctAnswer: 'fake' },
    { type: 'image', content: 'images/question8.jpg', correctAnswer: 'real' },
    { type: 'video', content: 'https://www.youtube.com/embed/eDZgGrXpZgc', correctAnswer: 'real' },
    { type: 'video', content: 'https://www.youtube.com/embed/6wnSKUBnfQE', correctAnswer: 'real' },
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

    if (questionData.type === 'image') {
        // Display image question
        questionElement.innerHTML = `
            <h2>Question ${index + 1}</h2>
            <p> Is this a real image? </p>
            <img src="${questionData.content}" alt="Question Image">
            <div class="options">
                <button id="real-btn" class="answer-btn">Real</button>
                <button id="fake-btn" class="answer-btn">Fake</button>
            </div>
        `;
        const realButton = questionElement.querySelector('#real-btn');
        const fakeButton = questionElement.querySelector('#fake-btn');
        realButton.addEventListener('click', () => handleAnswer('real'));
        fakeButton.addEventListener('click', () => handleAnswer('fake'));
    } else if (questionData.type === 'video') {
        // Display video question
        questionElement.innerHTML = `
            <h2>Question ${index + 1}</h2>
            <p> Is the following video real or fake? </p>

            <iframe width="560" height="315" src="${questionData.content}" frameborder="0" allowfullscreen></iframe>

            <div class="options">
                <button id="real-btn" class="answer-btn">Real</button>
                <button id="fake-btn" class="answer-btn">Fake</button>
            </div>
        `;
        const realButton = questionElement.querySelector('#real-btn');
        const fakeButton = questionElement.querySelector('#fake-btn');
        realButton.addEventListener('click', () => handleAnswer('real'));
        fakeButton.addEventListener('click', () => handleAnswer('fake'));
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
    scoreContainer.textContent = `Congrats! You've completed the quiz. Your score: ${score} out of ${questions.length}`;
    scoreContainer.style.display = 'block';
}

// Function to show the next question
function showNextQuestion() {
    document.getElementById('introduction').style.display = 'none';
    document.getElementById('questions-container').style.display = 'block';
    displayQuestion(currentQuestionIndex);
}

document.getElementById('next-btn').addEventListener('click', showNextQuestion);
