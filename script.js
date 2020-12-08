let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Task 3
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

// Task 8a gets distance between user and computer scores
const getAbsoluteDistance = (num1, num2) => num1 > num2 ? num1 - num2 : num2 - num1;

// Task 4 compares user and computer score against target
const compareGuesses = (humanScore, computerScore, target) => {
  if ((getAbsoluteDistance(humanScore - target)) < (getAbsoluteDistance(computerScore - target))) {
    return true
  } else {
    return false
  }
}
// Task 5 updates score based on who won
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } 
  
  else if (winner === 'computer') {
    computerScore++;
  }
}
// Task 6 upadates round number
const advanceRound = () => {
  currentRoundNumber++;
}
