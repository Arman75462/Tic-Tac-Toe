"use strict";

/* Selectors */
const body = document.querySelector("body");
const gameBoard = document.querySelector(".game-board");
const btnX = document.querySelector(".btn-x");
const btnO = document.querySelector(".btn-o");
const winnerMessage = document.querySelector(".winner-message");
const cells = document.querySelectorAll(".grid-item");
const cell1 = document.querySelector(".grid-item1");
const cell2 = document.querySelector(".grid-item2");
const cell3 = document.querySelector(".grid-item3");
const cell4 = document.querySelector(".grid-item4");
const cell5 = document.querySelector(".grid-item5");
const cell6 = document.querySelector(".grid-item6");
const cell7 = document.querySelector(".grid-item7");
const cell8 = document.querySelector(".grid-item8");
const cell9 = document.querySelector(".grid-item9");

cell1.addEventListener("click", function () {
  cell1.textContent = "x";
  checkWinner();
});

cell2.addEventListener("click", function () {
  cell2.textContent = "x";
  checkWinner();
});

cell3.addEventListener("click", function () {
  cell3.textContent = "x";
  checkWinner();
});

cell4.addEventListener("click", function () {
  cell4.textContent = "x";
  checkWinner();
});

cell5.addEventListener("click", function () {
  cell5.textContent = "x";
  checkWinner();
});

cell6.addEventListener("click", function () {
  cell6.textContent = "x";
  checkWinner();
});

cell7.addEventListener("click", function () {
  cell7.textContent = "x";
  checkWinner();
});

cell8.addEventListener("click", function () {
  cell8.textContent = "x";
  checkWinner();
});

cell9.addEventListener("click", function () {
  cell9.textContent = "x";
  checkWinner();
});

/* factory functio to create player object */
function createPlayer(letter, turn) {
  return {
    letter,
    turn,
  };
}

const playerX = createPlayer("x", false);
const playerO = createPlayer("o", true);

function checkWinner() {
  if (
    (cell1.textContent === "x" &&
      cell2.textContent === "x" &&
      cell3.textContent === "x") ||
    (cell4.textContent === "x" &&
      cell5.textContent === "x" &&
      cell6.textContent === "x") ||
    (cell7.textContent === "x" &&
      cell8.textContent === "x" &&
      cell9.textContent === "x")
  ) {
    winnerMessage.textContent = "Player X Wins!!!";
  } else if (
    (cell1.textContent === "x" &&
      cell4.textContent === "x" &&
      cell7.textContent === "x") ||
    (cell2.textContent === "x" &&
      cell5.textContent === "x" &&
      cell8.textContent === "x") ||
    (cell3.textContent === "x" &&
      cell6.textContent === "x" &&
      cell9.textContent === "x")
  ) {
    winnerMessage.textContent = "Player X Wins!!!";
  } else if (
    (cell1.textContent === "x" &&
      cell5.textContent === "x" &&
      cell9.textContent === "x") ||
    (cell3.textContent === "x" &&
      cell5.textContent === "x" &&
      cell7.textContent === "x")
  ) {
    winnerMessage.textContent = "Player X Wins!!!";
  }
}

function playerTurn() {
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

playerTurn();
