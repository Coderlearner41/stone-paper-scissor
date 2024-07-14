let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const genComputerChoice = () => {
  let options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
  // rock, paper, scissors
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game was Draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWinner) => {
  if (userWinner) {
    console.log("you WIN !!");
    msg.innerText = "You WIN";
    msg.style.backgroundColor = "green";
    userScore++;
    uScore.innerText = userScore;
  } else {
    console.log("you LOSE!!");
    msg.innerText = "You LOSE";
    msg.style.backgroundColor = "red";
    compScore++;
    cScore.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  console.log("userChoice =", userChoice);
  //Generate computer choice
  const compChoice = genComputerChoice();
  console.log(`Comp choice = ${compChoice}`);

  if (userChoice === compChoice) {
    //Draw game
    drawGame();
    msg.innerText = ` ${userChoice} = ${compChoice}`;
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
    if (userWin) {
      msg.innerText = `You Win ${userChoice} wins over ${compChoice}`;
    } else {
      msg.innerText = `You LOSE ${compChoice} wins over ${userChoice}`;
    }
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
