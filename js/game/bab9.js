import { sounds } from "../sounds.js";
import { imagePuzzle } from "../gameAssets.js";

document.addEventListener("DOMContentLoaded", () => {
  const puzzleContainer = document.getElementById("puzzle-container");
  const completionMessage = document.getElementById("completion-message");
  const nextButton = document.getElementById("next-button");
  const retryButton = document.getElementById("retry-button");

  let currentPuzzleIndex = 0;
  let pieces = [];
  let puzzlesCompleted = 0; // Variable to track number of completed puzzles

  const homeButton = document.getElementById("home-button");
  const backButton = document.getElementById("back-button");

  // Load the first puzzle pieces
  loadPuzzle(imagePuzzle.level0[currentPuzzleIndex]);

  let selectedPiece = null;

  puzzleContainer.addEventListener("click", (e) => {
    const target = e.target;

    if (
      target.classList.contains("puzzle-piece") &&
      !puzzleContainer.classList.contains("completed")
    ) {
      if (!selectedPiece) {
        selectedPiece = target;
        target.style.border = "2px solid red";
      } else {
        swapPieces(selectedPiece, target);
        selectedPiece.style.border = "1px solid #ccc";
        selectedPiece = null;
        checkPuzzleCompletion();
      }
    }
  });

  function loadPuzzle(puzzle) {
    puzzleContainer.innerHTML = ""; // Clear previous puzzle pieces
    pieces = []; // Reset the pieces array

    puzzle.pieces.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Puzzle Piece ${index + 1}`;
      img.className = "puzzle-piece";
      img.id = `piece-${index + 1}`;
      pieces.push(img);
      puzzleContainer.appendChild(img);
    });

    // Shuffle pieces randomly
    const shuffledPieces = Array.from(pieces).sort(() => Math.random() - 0.5);

    // Append shuffled pieces to the container
    shuffledPieces.forEach((piece) => puzzleContainer.appendChild(piece));

    // Reset state
    completionMessage.innerText = "";
    nextButton.style.display = "none";
    retryButton.style.display = "none"; // Hide retry button initially
    puzzleContainer.classList.remove("completed");
  }

  function swapPieces(piece1, piece2) {
    const temp = document.createElement("div");
    piece1.parentNode.insertBefore(temp, piece1);
    piece2.parentNode.insertBefore(piece1, piece2);
    temp.parentNode.insertBefore(piece2, temp);
    temp.parentNode.removeChild(temp);
  }

  function checkPuzzleCompletion() {
    const currentPieces = Array.from(puzzleContainer.children);
    let isCorrect = true;

    for (let i = 0; i < currentPieces.length; i++) {
      const pieceId = currentPieces[i].id;
      const correctId = `piece-${i + 1}`;
      if (pieceId !== correctId) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      sounds["sfx_celebrate_horn"].play();
      sounds["kobo"].play();
      completionMessage.innerText = "Congratulation!";
      puzzleContainer.classList.add("completed");
      pieces.forEach((piece) => piece.classList.add("completed"));

      puzzlesCompleted++; // Increment completed puzzles count

      if (puzzlesCompleted === 2) {
        nextButton.style.display = "none"; // Hide next button after completing last puzzle
        retryButton.style.display = "inline-block"; // Show retry button after completing 2 puzzles
      } else {
        nextButton.style.display = "inline-block"; // Show next button if there are more puzzles
        retryButton.style.display = "none"; // Hide retry button if not completed all puzzles
      }
    }
  }

  window.nextPuzzle = function () {
    currentPuzzleIndex++;
    if (currentPuzzleIndex < imagePuzzle.level0.length) {
      loadPuzzle(imagePuzzle.level0[currentPuzzleIndex]);
    } else {
      alert("No more puzzles available.");
    }
  };

  window.retryPuzzle = function () {
    currentPuzzleIndex = 0; // Reset puzzle index to start over
    puzzlesCompleted = 0; // Reset completed puzzles count
    loadPuzzle(imagePuzzle.level0[currentPuzzleIndex]); // Reload the first puzzle
    nextButton.style.display = "inline-block"; // Show next button again
    retryButton.style.display = "none"; // Hide retry button again
  };

  homeButton.addEventListener("click", function () {
    window.location.href = "../index.html";
  });

  backButton.addEventListener("click", function () {
    window.location.href = "../teknologi-tradisional.html";
  });
});
