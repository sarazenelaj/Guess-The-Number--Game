'use strict';

let secretNo = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;
console.log(secretNo);
//document.querySelector('.number').textContent=secretNo;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '🙅🏻‍♀️ No Number!';
  } else if (guess === secretNo) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNo;
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
  } else if (guess > secretNo) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 📈 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game!Try again !';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNo) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 📉';
      score--;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game!Try again !';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function (){
  score=20;  
  secretNo = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
