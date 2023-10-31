"use strict";

/* Selectors */
const body = document.querySelector("body");
const playerXScore = document.querySelector(".player-x-score");
const playerOScore = document.querySelector(".player-o-score");
const cardX = document.querySelector(".card-x");
const cardO = document.querySelector(".card-o");
const winnerMessage = document.getElementById("message");
const restartGameButton = document.querySelector(".btn-restart-game");
const resetScoreButton = document.querySelector(".btn-reset-score");
const cell = document.querySelectorAll(".grid-item");
const cell1 = document.querySelector(".grid-item1");
const cell2 = document.querySelector(".grid-item2");
const cell3 = document.querySelector(".grid-item3");
const cell4 = document.querySelector(".grid-item4");
const cell5 = document.querySelector(".grid-item5");
const cell6 = document.querySelector(".grid-item6");
const cell7 = document.querySelector(".grid-item7");
const cell8 = document.querySelector(".grid-item8");
const cell9 = document.querySelector(".grid-item9");

/* Factory function to create player object */
function createPlayer(username, letter, turn, score) {
  return {
    username,
    letter,
    turn,
    score,
  };
}
const playerX = createPlayer("Player X", "X", true, 0);
const playerO = createPlayer("Player O", "O", false, 0);

/* Global varibales, arrays and objects */
let playerXTurn = [];
let playerOTurn = [];
let gameOver = false;

/* With this button, you can reset the game */
restartGameButton.addEventListener("click", function () {
  gameOver = false;

  cell1.textContent = "";
  cell2.textContent = "";
  cell3.textContent = "";
  cell4.textContent = "";
  cell5.textContent = "";
  cell6.textContent = "";
  cell7.textContent = "";
  cell8.textContent = "";
  cell9.textContent = "";
  winnerMessage.textContent = "";
  cardX.textContent = "X";
  cardO.textContent = "O";
});

/* With this button, you can reset the score AND reset the game */
resetScoreButton.addEventListener("click", function () {
  playerX.score = 0;
  playerO.score = 0;
  playerXScore.textContent = `Score: ${playerX.score}`;
  playerOScore.textContent = `Score: ${playerO.score}`;

  gameOver = false;

  cell1.textContent = "";
  cell2.textContent = "";
  cell3.textContent = "";
  cell4.textContent = "";
  cell5.textContent = "";
  cell6.textContent = "";
  cell7.textContent = "";
  cell8.textContent = "";
  cell9.textContent = "";
  winnerMessage.textContent = "";
  cardX.textContent = "X";
  cardO.textContent = "O";
});

/* Click event-listeners for all cells */
for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", function () {
    if (
      !gameOver &&
      cell[i].textContent === "" &&
      (playerO.turn || playerX.turn)
    ) {
      if (playerO.turn) {
        cell[i].textContent = playerO.letter;
        playerOTurn.push(playerO.letter);
      } else if (playerX.turn) {
        cell[i].textContent = playerX.letter;
        playerXTurn.push(playerX.letter);
      }
      checkWinner();
      playerTurnLogic();
      playerTurnStyle();
    }
  });
}

function checkWinner() {
  if (
    (cell1.textContent === playerX.letter &&
      cell2.textContent === playerX.letter &&
      cell3.textContent === playerX.letter) ||
    (cell4.textContent === playerX.letter &&
      cell5.textContent === playerX.letter &&
      cell6.textContent === playerX.letter) ||
    (cell7.textContent === playerX.letter &&
      cell8.textContent === playerX.letter &&
      cell9.textContent === playerX.letter)
  ) {
    handleWin(playerX);
  } else if (
    (cell1.textContent === playerX.letter &&
      cell4.textContent === playerX.letter &&
      cell7.textContent === playerX.letter) ||
    (cell2.textContent === playerX.letter &&
      cell5.textContent === playerX.letter &&
      cell8.textContent === playerX.letter) ||
    (cell3.textContent === playerX.letter &&
      cell6.textContent === playerX.letter &&
      cell9.textContent === playerX.letter)
  ) {
    handleWin(playerX);
  } else if (
    (cell1.textContent === playerX.letter &&
      cell5.textContent === playerX.letter &&
      cell9.textContent === playerX.letter) ||
    (cell3.textContent === playerX.letter &&
      cell5.textContent === playerX.letter &&
      cell7.textContent === playerX.letter)
  ) {
    handleWin(playerX);
  } else if (
    (cell1.textContent === playerO.letter &&
      cell2.textContent === playerO.letter &&
      cell3.textContent === playerO.letter) ||
    (cell4.textContent === playerO.letter &&
      cell5.textContent === playerO.letter &&
      cell6.textContent === playerO.letter) ||
    (cell7.textContent === playerO.letter &&
      cell8.textContent === playerO.letter &&
      cell9.textContent === playerO.letter)
  ) {
    handleWin(playerO);
  } else if (
    (cell1.textContent === playerO.letter &&
      cell4.textContent === playerO.letter &&
      cell7.textContent === playerO.letter) ||
    (cell2.textContent === playerO.letter &&
      cell5.textContent === playerO.letter &&
      cell8.textContent === playerO.letter) ||
    (cell3.textContent === playerO.letter &&
      cell6.textContent === playerO.letter &&
      cell9.textContent === playerO.letter)
  ) {
    handleWin(playerO);
  } else if (
    (cell1.textContent === playerO.letter &&
      cell5.textContent === playerO.letter &&
      cell9.textContent === playerO.letter) ||
    (cell3.textContent === playerO.letter &&
      cell5.textContent === playerO.letter &&
      cell7.textContent === playerO.letter)
  ) {
    handleWin(playerO);
  } else if (
    (cell1.textContent === playerO.letter ||
      cell1.textContent === playerX.letter) &&
    (cell2.textContent === playerO.letter ||
      cell2.textContent === playerX.letter) &&
    (cell3.textContent === playerO.letter ||
      cell3.textContent === playerX.letter) &&
    (cell4.textContent === playerO.letter ||
      cell4.textContent === playerX.letter) &&
    (cell5.textContent === playerO.letter ||
      cell5.textContent === playerX.letter) &&
    (cell6.textContent === playerO.letter ||
      cell6.textContent === playerX.letter) &&
    (cell7.textContent === playerO.letter ||
      cell7.textContent === playerX.letter) &&
    (cell8.textContent === playerO.letter ||
      cell8.textContent === playerX.letter) &&
    (cell9.textContent === playerO.letter ||
      cell9.textContent === playerX.letter)
  ) {
    winnerMessage.textContent = "It's a tie";
    winnerMessage.classList.remove("winner-message");
    winnerMessage.classList.add("tie-message");
  }
}

function handleWin(winner) {
  winnerMessage.textContent = `${winner.username} wins!!!`;
  winnerMessage.classList.add("winner-message");
  winnerMessage.classList.remove("tie-message");

  gameOver = true;
  winner.score = winner.score + 1;
  playerX.turn = false;
  playerO.turn = false;

  if (winner === playerX) {
    playerXScore.textContent = `Score: ${winner.score}`;
  } else if (winner === playerO) {
    playerOScore.textContent = `Score: ${winner.score}`;
  }
}

function playerTurnStyle() {
  if (playerX.turn) {
    cardX.style.textShadow =
      "0 0 0.125em hsla(0, 0%, 100%, 0.3), 0 0 0.45em green";
    cardX.style.boxShadow = "inset 0 0 0.5em 0 green, 0 0 5em 1.5em green";
    cardX.style.color = "green";
    cardX.style.border = "0.125em solid green";

    cardO.style.textShadow =
      "0 0 0.125em hsla(0, 0%, 100%, 0.3), 0 0 0.45em red";
    cardO.style.boxShadow =
      "inset 0 0 0.5em 0 rgb(255, 0, 0), 0 0 5em 1.5em red";
    cardO.style.color = "red";
    cardO.style.border = "0.125em solid red";
  } else if (playerO.turn) {
    cardO.style.textShadow =
      "0 0 0.125em hsla(0, 0%, 100%, 0.3), 0 0 0.45em green";
    cardO.style.boxShadow = "inset 0 0 0.5em 0 green, 0 0 5em 1.5em green";
    cardO.style.color = "green";
    cardO.style.border = "0.125em solid green";

    cardX.style.textShadow =
      "0 0 0.125em hsla(0, 0%, 100%, 0.3), 0 0 0.45em red";
    cardX.style.boxShadow =
      "inset 0 0 0.5em 0 rgb(255, 0, 0), 0 0 5em 1.5em red";
    cardX.style.color = "red";
    cardX.style.border = "0.125em solid red";
  }
}
playerTurnStyle();

function playerTurnLogic() {
  if (playerXTurn.includes(playerX.letter)) {
    playerX.turn = false;
    playerXTurn = [];
    playerO.turn = true;
  } else if (playerOTurn.includes(playerO.letter)) {
    playerO.turn = false;
    playerOTurn = [];
    playerX.turn = true;
  }
}
