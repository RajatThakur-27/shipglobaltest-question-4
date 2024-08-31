let randomNumber;
let attemptsLeft;

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 5;
    document.getElementById('feedback').textContent = 'Your guess is...';
    document.getElementById('guess-input').value = '';
    document.getElementById('attempts').textContent = `You have ${attemptsLeft} chances`;
    document.getElementById('check-button').style.display = 'inline-block';
    document.getElementById('restart-button').style.display = 'none';
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const feedbackElement = document.getElementById('feedback');
    const attemptsElement = document.getElementById('attempts');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedbackElement.textContent = 'Please enter a number between 1 and 100';
        return;
    }

    attemptsElement.textContent = `You have ${attemptsLeft} chances`;

    if (userGuess === randomNumber) {
        feedbackElement.textContent = 'Congratulations! You guessed it right!';
        endGame();
    } else if (userGuess > randomNumber) {
        feedbackElement.textContent = 'Your number is high';
    } else if (userGuess < randomNumber) {
        feedbackElement.textContent = 'Your number is low';
    }

    if (attemptsLeft <= 0) {
        feedbackElement.textContent = `Sorry, you've run out of chances! The number was ${randomNumber}.`;
        endGame();
    }
}

function endGame() {
    document.getElementById('check-button').style.display = 'none';
    document.getElementById('restart-button').style.display = 'inline-block';
}

function restartGame() {
    initializeGame();
}

window.onload = initializeGame;
