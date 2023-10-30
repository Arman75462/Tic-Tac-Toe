"use strict";

/* Selectors */
const body = document.querySelector("body");
const gameBoard = document.querySelector(".game-board");
const btnX = document.querySelector(".btn-x");
const btnO = document.querySelector(".btn-o");
const winnerMessage = document.querySelector(".winner-message");
const cell1 = document.querySelector(".grid-item1");
const cell2 = document.querySelector(".grid-item2");
const cell3 = document.querySelector(".grid-item3");
const cell4 = document.querySelector(".grid-item4");
const cell5 = document.querySelector(".grid-item5");
const cell6 = document.querySelector(".grid-item6");
const cell7 = document.querySelector(".grid-item7");
const cell8 = document.querySelector(".grid-item8");
const cell9 = document.querySelector(".grid-item9");

/* factory functio to create player object */
function createPlayer(letter, turn) {
  return {
    letter,
    turn,
  };
}
const playerX = createPlayer("x", true);
const playerO = createPlayer("o", false);

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

cell1.addEventListener("click", function () {
  if (!gameOver && cell1.textContent === "" && (playerO.turn || playerX.turn)) {
    if (playerO.turn) {
      cell1.textContent = playerO.letter;
      playerOTurn.push(playerO.letter);
      console.log(playerOTurn);
    } else if (playerX.turn) {
      cell1.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
      console.log(playerXTurn);
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
      console.log(playerOTurn);
    } else if (playerX.turn) {
      cell2.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
      console.log(playerXTurn);
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
      console.log(playerOTurn);
    } else if (playerX.turn) {
      cell3.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
      console.log(playerXTurn);
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
      console.log(playerOTurn);
    } else if (playerX.turn) {
      cell4.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
      console.log(playerXTurn);
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
      console.log(playerOTurn);
    } else if (playerX.turn) {
      cell5.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
      console.log(playerXTurn);
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
      console.log(playerOTurn);
    } else if (playerX.turn) {
      cell6.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
      console.log(playerXTurn);
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
      console.log(playerOTurn);
    } else if (playerX.turn) {
      cell7.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
      console.log(playerXTurn);
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
      console.log(playerOTurn);
    } else if (playerX.turn) {
      cell8.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
      console.log(playerXTurn);
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
      console.log(playerOTurn);
    } else if (playerX.turn) {
      cell9.textContent = playerX.letter;
      playerXTurn.push(playerX.letter);
      console.log(playerXTurn);
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
  }
}

function playerTurnStyle() {
  if (playerX.turn) {
    // Set the text-shadow property
    btnX.style.textShadow =
      "0 0 0.125em hsla(0, 0%, 100%, 0.3), 0 0 0.45em green";
    // Set the box-shadow property
    btnX.style.boxShadow = "inset 0 0 0.5em 0 green, 0 0 5em 1.5em green";
    // Set the color property
    btnX.style.color = "green";
    // Set the border property
    btnX.style.border = "0.125em solid green";

    // Set the text-shadow property
    btnO.style.textShadow =
      "0 0 0.125em hsla(0, 0%, 100%, 0.3), 0 0 0.45em red";
    // Set the box-shadow property
    btnO.style.boxShadow =
      "inset 0 0 0.5em 0 rgb(255, 0, 0), 0 0 5em 1.5em red";
    // Set the color property
    btnO.style.color = "red";
    // Set the border property
    btnO.style.border = "0.125em solid red";
  } else if (playerO.turn) {
    // Set the text-shadow property
    btnO.style.textShadow =
      "0 0 0.125em hsla(0, 0%, 100%, 0.3), 0 0 0.45em green";
    // Set the box-shadow property
    btnO.style.boxShadow = "inset 0 0 0.5em 0 green, 0 0 5em 1.5em green";
    // Set the color property
    btnO.style.color = "green";
    // Set the border property
    btnO.style.border = "0.125em solid green";

    // Set the text-shadow property
    btnX.style.textShadow =
      "0 0 0.125em hsla(0, 0%, 100%, 0.3), 0 0 0.45em red";
    // Set the box-shadow property
    btnX.style.boxShadow =
      "inset 0 0 0.5em 0 rgb(255, 0, 0), 0 0 5em 1.5em red";
    // Set the color property
    btnX.style.color = "red";
    // Set the border property
    btnX.style.border = "0.125em solid red";
  }
}
