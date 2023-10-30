"use strict";

/* Selectors */
const body = document.querySelector("body");
const gameBoard = document.querySelector(".game-board");
const playerXScore = document.querySelector(".player-x-score");
const playerOScore = document.querySelector(".player-o-score");
const cardX = document.querySelector(".card-x");
const cardO = document.querySelector(".card-o");
const winnerMessage = document.querySelector(".winner-message");
const restartGameButton = document.querySelector(".btn-restart-game");
const resetScoreButton = document.querySelector(".btn-reset-score");
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
function createPlayer(letter, turn, score) {
  return {
    letter,
    turn,
    score,
  };
}
const playerX = createPlayer("x", true, 0);
const playerO = createPlayer("o", false, 0);

let playerXTurn = [];
let playerOTurn = [];
let gameOver = false;

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

restartGameButton.addEventListener("click", function () {
  gameOver = false;
  playerXTurn = [];
  playerOTurn = [];

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
});

resetScoreButton.addEventListener("click", function () {
  playerX.score = 0;
  playerO.score = 0;
  playerXScore.textContent = `Score: ${playerX.score}`;
  playerOScore.textContent = `Score: ${playerO.score}`;

  gameOver = false;
  playerXTurn = [];
  playerOTurn = [];

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
});

cell1.addEventListener("click", function () {
  if (!gameOver && cell1.textContent === "" && (playerO.turn || playerX.turn)) {
    if (playerO.turn) {
      cell1.textContent = playerO.letter;
      playerOTurn.push(playerO.letter);
    } else if (playerX.turn) {
      cell1.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
    }
    checkWinner();
    playerTurnLogic();
    playerTurnStyle();
  }
});

cell2.addEventListener("click", function () {
  if (!gameOver && cell2.textContent === "" && (playerO.turn || playerX.turn)) {
    if (playerO.turn) {
      cell2.textContent = playerO.letter;
      playerOTurn.push(playerO.letter);
    } else if (playerX.turn) {
      cell2.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
    }
    checkWinner();
    playerTurnLogic();
    playerTurnStyle();
  }
});

cell3.addEventListener("click", function () {
  if (!gameOver && cell3.textContent === "" && (playerO.turn || playerX.turn)) {
    if (playerO.turn) {
      cell3.textContent = playerO.letter;
      playerOTurn.push(playerO.letter);
    } else if (playerX.turn) {
      cell3.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
    }
    checkWinner();
    playerTurnLogic();
    playerTurnStyle();
  }
});

cell4.addEventListener("click", function () {
  if (!gameOver && cell4.textContent === "" && (playerO.turn || playerX.turn)) {
    if (playerO.turn) {
      cell4.textContent = playerO.letter;
      playerOTurn.push(playerO.letter);
    } else if (playerX.turn) {
      cell4.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
    }
    checkWinner();
    playerTurnLogic();
    playerTurnStyle();
  }
});

cell5.addEventListener("click", function () {
  if (!gameOver && cell5.textContent === "" && (playerO.turn || playerX.turn)) {
    if (playerO.turn) {
      cell5.textContent = playerO.letter;
      playerOTurn.push(playerO.letter);
    } else if (playerX.turn) {
      cell5.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
    }
    checkWinner();
    playerTurnLogic();
    playerTurnStyle();
  }
});

cell6.addEventListener("click", function () {
  if (!gameOver && cell6.textContent === "" && (playerO.turn || playerX.turn)) {
    if (playerO.turn) {
      cell6.textContent = playerO.letter;
      playerOTurn.push(playerO.letter);
    } else if (playerX.turn) {
      cell6.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
    }
    checkWinner();
    playerTurnLogic();
    playerTurnStyle();
  }
});

cell7.addEventListener("click", function () {
  if (!gameOver && cell7.textContent === "" && (playerO.turn || playerX.turn)) {
    if (playerO.turn) {
      cell7.textContent = playerO.letter;
      playerOTurn.push(playerO.letter);
    } else if (playerX.turn) {
      cell7.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
    }
    checkWinner();
    playerTurnLogic();
    playerTurnStyle();
  }
});

cell8.addEventListener("click", function () {
  if (!gameOver && cell8.textContent === "" && (playerO.turn || playerX.turn)) {
    if (playerO.turn) {
      cell8.textContent = playerO.letter;
      playerOTurn.push(playerO.letter);
    } else if (playerX.turn) {
      cell8.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
    }
    checkWinner();
    playerTurnLogic();
    playerTurnStyle();
  }
});

cell9.addEventListener("click", function () {
  if (!gameOver && cell9.textContent === "" && (playerO.turn || playerX.turn)) {
    if (playerO.turn) {
      cell9.textContent = playerO.letter;
      playerOTurn.push(playerO.letter);
    } else if (playerX.turn) {
      cell9.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
    }
    checkWinner();
    playerTurnLogic();
    playerTurnStyle();
  }
});

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
    winnerMessage.textContent = "Player X Wins!!!";
    gameOver = true;
    playerX.score = playerX.score + 1;
    playerXScore.textContent = `Score: ${playerX.score}`;
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
    winnerMessage.textContent = "Player X Wins!!!";
    gameOver = true;
    playerX.score = playerX.score + 1;
    playerXScore.textContent = `Score: ${playerX.score}`;
  } else if (
    (cell1.textContent === playerX.letter &&
      cell5.textContent === playerX.letter &&
      cell9.textContent === playerX.letter) ||
    (cell3.textContent === playerX.letter &&
      cell5.textContent === playerX.letter &&
      cell7.textContent === playerX.letter)
  ) {
    winnerMessage.textContent = "Player X Wins!!!";
    gameOver = true;
    playerX.score = playerX.score + 1;
    playerXScore.textContent = `Score: ${playerX.score}`;
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
    winnerMessage.textContent = "Player O Wins!!!";
    gameOver = true;
    playerO.score = playerO.score + 1;
    playerOScore.textContent = `Score: ${playerO.score}`;
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
    winnerMessage.textContent = "Player O Wins!!!";
    gameOver = true;
    playerO.score = playerO.score + 1;
    playerOScore.textContent = `Score: ${playerO.score}`;
  } else if (
    (cell1.textContent === playerO.letter &&
      cell5.textContent === playerO.letter &&
      cell9.textContent === playerO.letter) ||
    (cell3.textContent === playerO.letter &&
      cell5.textContent === playerO.letter &&
      cell7.textContent === playerO.letter)
  ) {
    winnerMessage.textContent = "Player O Wins!!!";
    gameOver = true;
    playerO.score = playerO.score + 1;
    playerOScore.textContent = `Score: ${playerO.score}`;
  }
}

function playerTurnStyle() {
  if (playerX.turn) {
    // Set the text-shadow property
    cardX.style.textShadow =
      "0 0 0.125em hsla(0, 0%, 100%, 0.3), 0 0 0.45em green";
    // Set the box-shadow property
    cardX.style.boxShadow = "inset 0 0 0.5em 0 green, 0 0 5em 1.5em green";
    // Set the color property
    cardX.style.color = "green";
    // Set the border property
    cardX.style.border = "0.125em solid green";

    // Set the text-shadow property
    cardO.style.textShadow =
      "0 0 0.125em hsla(0, 0%, 100%, 0.3), 0 0 0.45em red";
    // Set the box-shadow property
    cardO.style.boxShadow =
      "inset 0 0 0.5em 0 rgb(255, 0, 0), 0 0 5em 1.5em red";
    // Set the color property
    cardO.style.color = "red";
    // Set the border property
    cardO.style.border = "0.125em solid red";
  } else if (playerO.turn) {
    // Set the text-shadow property
    cardO.style.textShadow =
      "0 0 0.125em hsla(0, 0%, 100%, 0.3), 0 0 0.45em green";
    // Set the box-shadow property
    cardO.style.boxShadow = "inset 0 0 0.5em 0 green, 0 0 5em 1.5em green";
    // Set the color property
    cardO.style.color = "green";
    // Set the border property
    cardO.style.border = "0.125em solid green";

    // Set the text-shadow property
    cardX.style.textShadow =
      "0 0 0.125em hsla(0, 0%, 100%, 0.3), 0 0 0.45em red";
    // Set the box-shadow property
    cardX.style.boxShadow =
      "inset 0 0 0.5em 0 rgb(255, 0, 0), 0 0 5em 1.5em red";
    // Set the color property
    cardX.style.color = "red";
    // Set the border property
    cardX.style.border = "0.125em solid red";
  }
}
