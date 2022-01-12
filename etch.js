//Create 16 by 16 divs

let board = document.getElementById("board");
let row;
let column;
let iColumn = 16;
let jRow = 16;

function createGrid() {
  for (let j = 0; j < jRow; j++) {
    row = document.createElement("div");
    row.className = "flex-container";
    row.style.width = "100%";
    row.innerHTML = "";
    board.appendChild(row);

    for (let i = 0; i < iColumn; i++) {
      column = document.createElement("div");
      column.className = "flexBoxes";
      column.style.width = "100%";
      column.innerHTML = " ";
      row.appendChild(column);
    }
  }
}

createGrid();
let allBoxes = document.querySelectorAll(".flexBoxes");
let flexContainers = document.querySelectorAll(".flex-container");

//change color of boxes with hover Event

function createHoverBlack() {
  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("mouseover", function (e) {
      allBoxes[i].className = "flexBoxes_Hover";
    });
  }
}
//createHoverBlack();
//Color Button
let colorButton = document.getElementById("color");

function createHoverColor() {
  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("mouseover", function (e) {
      let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      allBoxes[i].style.backgroundColor = randomColor;
    });
  }
}

colorButton.addEventListener("click", createHoverColor);

//clear the grid and ask for new size

let resetButton = document.getElementById("reset");

function resetGrid() {
  iColumn = prompt("How many columns would you like this time?");
  jRow = prompt("How many rows would you like to have this time?");

  //remove divs that were created
  for (i = 0; i < allBoxes.length; i++) {
    allBoxes[i].remove();
  }
  for (i = 0; i < flexContainers.length; i++) {
    flexContainers[i].remove();
  }

  //create new Grid
  createGrid();
  allBoxes = document.querySelectorAll(".flexBoxes");
  flexContainers = document.querySelectorAll(".flex-container");
  createHoverBlack();
}

resetButton.addEventListener("click", resetGrid);
