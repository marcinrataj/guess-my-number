'use strict';



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
} 

//Handling of click events
document.querySelector('.check').addEventListener
('click',function(){
  const guess = Number(document.querySelector
    ('.guess').value)
  console.log(guess ,typeof guess)

  if(!guess) {
  //   document.querySelector('.message').textContent = 
  //   'No Number 😲';
displayMessage('No Number 😲')
//When player wins
  } else if (guess === secretNumber) {
  document.querySelector('.message').textContent =
   '😎 Correct Number!';
  document.querySelector('.number').textContent = secretNumber;

//Background color and number size
  document.querySelector('body').style.
  backgroundColor = '#60b347'
  document.querySelector('.number').style.width =
   '30rem'

   if(score > highscore){
     highscore = score;
     document.querySelector('.highscore').textContent = highscore;
   }

   //When goes is wrong
} else if (guess !== secretNumber) {
  if (score > 1) {
    document.querySelector('.message').textContent 
    = guess > secretNumber ? '📈 To High!' : '📉 To Low!';
    displayMessage(guess > secretNumber ? '📈 To High!' : '📉 To Low!')
    score--;
    document.querySelector('.score').textContent =
     score;
  } else {
    // document.querySelector('.message').textContent 
    // = '😨 You lost the game';
    displayMessage('😨 You lost the game')
    document.querySelector('.score').textContent =
     0;
  }
//When guess is to high
// }else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//        '📈 To High!';
//       score--;
//       document.querySelector('.score').textContent =
//        score;
//     } else {
//       document.querySelector('.message').textContent 
//       = '😨 You lost the game';
//       document.querySelector('.score').textContent =
//        0;
//     }

//when guess is to low
//   } else if(guess < secretNumber) {
//       if(score > 1){
//         document.querySelector('.message').textContent = '📉 To Low!';
//         score--;
//         document.querySelector('.score').textContent = score;
//       }else{
//         document.querySelector('.message').textContent 
//         = '😨 You lost the game';
//         document.querySelector('.score').textContent = 0;
//       }
}
});

// When click 'again' button
document.querySelector('.again').addEventListener
('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent =
  // 'Start Guessing...';
  displayMessage('Start Guessing...')
  document.querySelector('.score').textContent = '?';
  document.querySelector('body').style.
  backgroundColor = '#222';
  document.querySelector('.number').style.width =
   '15rem';
})


