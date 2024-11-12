let allchoice = document.querySelectorAll(".im");
let yourScore = document.querySelector("#yscore");
let compScore = document.querySelector("#cscore");
let messageBox = document.querySelector("#message-box");

let yourCurrent = 0;
let computerCurrent = 0;

const colMap = {
  paper: "#c38edc",
  rock: "#f083a2",
  scissor: "#7facff",
};

const arr = ["paper", "rock", "scissor"];
const randomValue = () => {
  let idx = Math.floor(Math.random() * 3);
  return idx;
};

const winner = (you, comp) => {
  if (you == comp) {
    return -1;
  } else {
    if (you == "paper") {
      return comp == "scissor" ? false : true;
    } else if (you == "rock") {
      return comp == "paper" ? false : true;
    } else {
      return comp == "paper" ? true : false;
    }
  }
};

allchoice.forEach((btn) => {
  btn.addEventListener("click", () => {
    let yourChoice = btn.getAttribute("id");
    let computerChoice = arr[randomValue()];
    let gameWinner = winner(yourChoice, computerChoice);
    if (gameWinner == -1) {
      messageBox.innerHTML = "Match Drawn, Play Again!";
      document.querySelector(".message").style.backgroundColor = " #081b31";
    } else if (gameWinner) {
      yourCurrent++;
      yourScore.innerHTML = yourCurrent;
      messageBox.innerHTML = `Your ${
        yourChoice.charAt(0).toUpperCase() + yourChoice.slice(1)
      } beats computer's ${computerChoice}`;
      document.querySelector(".message").style.backgroundColor =
        colMap[yourChoice];
    } else {
      computerCurrent++;
      compScore.innerHTML = computerCurrent;
      messageBox.innerHTML = `${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats your ${yourChoice}`;
      document.querySelector(".message").style.backgroundColor =
        colMap[computerChoice];
    }
  });
});
