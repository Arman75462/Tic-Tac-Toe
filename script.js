"use strict";

/* Selectors */
const body = document.querySelector("body");
const gameBoard = document.querySelector(".game-board");
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
    body.textContent = "x Wins!!!";
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
    body.textContent = "x Wins!!!";
  } else if (
    (cell1.textContent === "x" &&
      cell5.textContent === "x" &&
      cell9.textContent === "x") ||
    (cell3.textContent === "x" &&
      cell5.textContent === "x" &&
      cell7.textContent === "x")
  ) {
    body.textContent = "x Wins!!!";
  }
}
