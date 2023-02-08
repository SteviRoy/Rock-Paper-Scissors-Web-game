let userScore = 0;
let computerScore = 0;
let ties = 0;

while (true) {
// Get user choice
userChoice = prompt("Rock (R), Paper (P), or Scissors (S)?").toUpperCase();

// Check if the user input is valid
if (userChoice !== "R" && userChoice !== "P" && userChoice !== "S") {
    alert("Invalid choice! Try again.");
    continue;
  }

// Generate computer choice
computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "R";
  } else if (computerChoice <= 0.33) {
    computerChoice = "P";
  } else {
    computerChoice = "S";
  }

// Compare choices and update scores
  if (userChoice === computerChoice) {
    ties++;
    alert("Tie! Both chose " + userChoice);
  } else if (userChoice === "R" && computerChoice === "S") {
    userScore++;
    alert("You win! Rock crushes Scissors");
  } else if (userChoice === "P" && computerChoice === "R") {
    userScore++;
    alert("You win! Paper covers Rock");
  } else if (userChoice === "S" && computerChoice === "P") {
    userScore++;
    alert("You win! Scissors cuts Paper");
  } else {
    computerScore++;
    alert("You lose! " + computerChoice + " beats " + userChoice);
  }

// Display scores
  alert("Scores - You: " + userScore + " | Computer: " + computerScore + " | Ties: " + ties);

// Ask if user wants to play again
  if (!confirm("Do you want to play again?")) {
    break;
  }
}
