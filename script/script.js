'use strict';
// console.log(
//     (document.querySelector('.message').textContent = '🎉Correct Number!')
// );
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    //When there is no input
    if (!guess) {
        displayMessage('⛔No Number');
        //When the player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //If guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low!');
            score--;
        } else {
            displayMessage('💥You Lost The Game!');
            // document.querySelector('.score').textContent = 0;
        }
    }
    //if guess is too low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉Too Low!';
    //         score--;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You Lost The Game!';
    //     }
    // }
    document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
});