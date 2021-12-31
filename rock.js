// Scores initialization

let playerScore = 0;
let computerScore = 0;

// computer select function

function computerPlay() {

  const options = ['rock', 'paper', 'scissors'];

  let alternatives = Math.floor(Math.random() * 3);

  return options[alternatives];
}


// player select function
function playerPlay() {

  const input = prompt('Please enter any of the following to play with computer: rock, paper, scissors');

  const option = input.toLowerCase();

  return option;
}




// play 1 single round
function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return 'It is a tie';
  }


  if (playerSelection === 'rock') {

    if (computerSelection === 'scissors') {
      playerScore++;
      return 'Player wins with rock';
    } else if (computerSelection === 'paper') {
      computerScore++;
      return 'Computer wins with paper'
    }
  }

  if (playerSelection === 'paper') {

    if (computerSelection === 'rock') {
      playerScore++;
      return 'Player wins with paper';
    } else if (computerSelection === 'scissors') {
      computerScore++;
      return 'Computer wins with scissors';
    }
  }

  if (playerSelection === 'scissors') {

    if (computerSelection === "paper") {
      playerScore++;
      return 'Player wins with scissors';
    } else if (computerSelection === 'rock') {
      computerScore++;
      return 'Computer wins with rock';
    }
  }

}

// console.log(playRound(playerSelection, computerSelection));


// game

function game() {
  for (i = 0; i <= 5; i++) {
    var playerSelection = playerPlay();
    var computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log('Computer: ' + computerSelection);
    console.log('Player: ' + playerSelection);
    console.log('Player: ' + playerScore);
    console.log('Computer: ' + computerScore);
  }
  console.log('Final Player: ' + playerScore);
  console.log('Final Computer: ' + computerScore);

}

game();



// const characters ='ROCKrock';

// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

// console.log(generateString(4));


// function generate() {
//     let length = document.getElementById("strlength").value;
//     const characters = 'abcdefghijklmnopqrstuvwxyz';
//     let result = ' ';
//     const charactersLength = characters.length;
//     for(let i = 0; i < length; i++) {
//         result += 
//         characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     document.getElementById("target").innerHTML = result
// }