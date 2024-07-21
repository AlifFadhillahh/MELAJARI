import { sounds } from "../sounds.js";
import { findWordPuzzle } from "../gameAssets.js";

let currentPuzzle = 0;
let foundWords = new Set();
let selectedCells = [];
let gridSize = 12;
let grid = [];

const homeButton = document.getElementById("home-button");
const backButton = document.getElementById("back-button");

function createGridAndWords() {
  grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(""));
  console.log("Current Puzzle Index:", currentPuzzle);
  console.log(
    "Words for Current Puzzle (level0):",
    findWordPuzzle.level0[currentPuzzle].words
  );
  const words = findWordPuzzle.level0[currentPuzzle].words;

  words.forEach((word) => {
    let placed = false;
    while (!placed) {
      const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
      const startRow = Math.floor(Math.random() * gridSize);
      const startCol = Math.floor(Math.random() * gridSize);

      if (direction === "horizontal" && startCol + word.length <= gridSize) {
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          if (grid[startRow][startCol + i] !== "") {
            canPlace = false;
            break;
          }
        }
        if (canPlace) {
          for (let i = 0; i < word.length; i++) {
            grid[startRow][startCol + i] = word[i];
          }
          placed = true;
        }
      } else if (
        direction === "vertical" &&
        startRow + word.length <= gridSize
      ) {
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          if (grid[startRow + i][startCol] !== "") {
            canPlace = false;
            break;
          }
        }
        if (canPlace) {
          for (let i = 0; i < word.length; i++) {
            grid[startRow + i][startCol] = word[i];
          }
          placed = true;
        }
      }
    }
  });

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (grid[row][col] === "") {
        grid[row][col] = String.fromCharCode(
          65 + Math.floor(Math.random() * 26)
        );
      }
    }
  }

  return grid;
}

function createGrid(grid) {
  const gridContainer = document.getElementById("grid-container");
  gridContainer.innerHTML = "";

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const div = document.createElement("div");
      div.className = "grid-item";
      div.innerText = grid[i][j];
      div.dataset.row = i;
      div.dataset.col = j;
      div.onclick = () => selectCell(i, j);
      gridContainer.appendChild(div);
    }
  }
}

function createWordContainer(words) {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  words.forEach((word) => {
    const div = document.createElement("div");
    div.className = "word-item";
    div.dataset.word = word;
    div.innerText = "_ ".repeat(word.length);
    wordContainer.appendChild(div);
  });
}

function setHintMessage(hint) {
  const hintMessage = document.getElementById("hint-message");
  hintMessage.innerText = hint;
}

function selectCell(row, col) {
  if (selectedCells.length === 0 || selectedCells.length === 1) {
    const cell = document.querySelector(
      `.grid-item[data-row="${row}"][data-col="${col}"]`
    );
    cell.classList.add("selected");
    selectedCells.push({ row, col });

    if (selectedCells.length === 2) {
      const first = selectedCells[0];
      const last = selectedCells[1];

      if (first.row !== last.row && first.col !== last.col) {
        sounds["sfx_windows_error"].play();
        highlightInvalidSelection();
        setTimeout(() => {
          selectedCells.forEach(({ row, col }) => {
            const cell = document.querySelector(
              `.grid-item[data-row="${row}"][data-col="${col}"]`
            );
            cell.classList.remove("selected", "invalid-selection");
          });
          selectedCells = [];
        }, 1000);
      } else {
        checkSelectedCells();
      }
    }
  }
}

function checkSelectedCells() {
  const word = getSelectedWord();
  if (word) {
    sounds["benar1"].play();
    highlightWord(word);
    updateWordContainer(word);
  } else {
    sounds["salah2"].play();
    highlightInvalidSelection();
    setTimeout(() => {
      selectedCells.forEach(({ row, col }) => {
        const cell = document.querySelector(
          `.grid-item[data-row="${row}"][data-col="${col}"]`
        );
        cell.classList.remove("selected", "invalid-selection");
      });
      selectedCells = [];
    }, 1000);
  }

  if (foundWords.size === findWordPuzzle.level0[currentPuzzle].words.length) {
    sounds["sfx_celebrate_horn"].play();
    sounds["benar1"].play();
    document.getElementById("completion-message").style.display = "block";
    document.getElementById("retry-button").style.display = "inline-block";
    disableGrid();
  }
}

function getSelectedWord() {
  const { words } = findWordPuzzle.level0[currentPuzzle];
  let word = "";

  if (selectedCells.length === 2) {
    const first = selectedCells[0];
    const last = selectedCells[1];

    if (first.row === last.row) {
      const row = first.row;
      const start = Math.min(first.col, last.col);
      const end = Math.max(first.col, last.col);
      word = grid[row].slice(start, end + 1).join("");
      selectedCells = [];
      for (let i = start; i <= end; i++) {
        selectedCells.push({ row, col: i });
      }
    } else if (first.col === last.col) {
      const col = first.col;
      for (
        let i = Math.min(first.row, last.row);
        i <= Math.max(first.row, last.row);
        i++
      ) {
        word += grid[i][col];
        selectedCells.push({ row: i, col });
      }
    } else {
      selectedCells = [];
      return null;
    }

    word = word.toUpperCase();
    if (words.includes(word)) {
      return word;
    }
  }

  return null;
}

function highlightWord(word) {
  const first = selectedCells[0];
  const last = selectedCells[selectedCells.length - 1];

  if (first.row === last.row) {
    selectedCells.forEach(({ row, col }) => {
      const cell = document.querySelector(
        `.grid-item[data-row="${row}"][data-col="${col}"]`
      );
      cell.classList.add("selected-horizontal");
    });
  } else if (first.col === last.col) {
    selectedCells.forEach(({ row, col }) => {
      const cell = document.querySelector(
        `.grid-item[data-row="${row}"][data-col="${col}"]`
      );
      cell.classList.add("selected-vertical");
    });
  }

  foundWords.add(word);
  selectedCells = [];
}

function highlightInvalidSelection() {
  selectedCells.forEach(({ row, col }) => {
    const cell = document.querySelector(
      `.grid-item[data-row="${row}"][data-col="${col}"]`
    );
    cell.classList.add("invalid-selection");
  });
}

function updateWordContainer(word) {
  const wordItem = document.querySelector(`.word-item[data-word="${word}"]`);
  wordItem.innerText = word;
}

function disableGrid() {
  const cells = document.querySelectorAll(".grid-item");
  cells.forEach((cell) => {
    cell.onclick = null;
  });
}

function retryPuzzle() {
  currentPuzzle = 0;
  foundWords.clear();
  document.getElementById("completion-message").style.display = "none";
  document.getElementById("retry-button").style.display = "none";
  const grid = createGridAndWords();
  createGrid(grid);
  createWordContainer(findWordPuzzle.level0[currentPuzzle].words);
  setHintMessage(findWordPuzzle.level0[currentPuzzle].hint);
}

window.onload = () => {
  const grid = createGridAndWords();
  createGrid(grid);
  createWordContainer(findWordPuzzle.level0[currentPuzzle].words);
  setHintMessage(findWordPuzzle.level0[currentPuzzle].hint);
};

homeButton.addEventListener("click", function () {
  window.location.href = "../index.php";
});

backButton.addEventListener("click", function () {
  window.location.href = "../olahraga-tradisional.php";
});

window.retryPuzzle = retryPuzzle;
