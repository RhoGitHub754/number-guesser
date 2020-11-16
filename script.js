let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}


const compareGuesses = (humanScore, computerScore, target) => {
  if ((Math.abs(humanScore - target)) < (Math.abs(computerScore - target))) {
    return true
  } else {
    return false
  }
}

let updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};

const advanceRound = () => {
  currentRoundNumber++;
}