import { sounds } from "../sounds.js";
import { wordPuzzle } from "../gameAssets.js";

document.addEventListener("DOMContentLoaded", () => {
  let currentWordIndex = 0;
  let draggedChar = null;
  let source = null;

  const homeButton = document.getElementById("home-button");
  const backButton = document.getElementById("back-button");

  function initializePuzzle() {
    const puzzle = wordPuzzle.level1[currentWordIndex];
    const word = puzzle.word.toUpperCase();
    const hint = puzzle.hint;
    const shuffledChars = shuffleArray(word.split(""));
    const wordContainer = document.getElementById("word-container");
    const charContainer = document.getElementById("char-container");
    const hintMessage = document.getElementById("hint-message");
    const completionMessage = document.getElementById("completion-message");
    const nextButton = document.getElementById("next-button");
    const retryButton = document.getElementById("retry-button");

    wordContainer.innerHTML = "";
    charContainer.innerHTML = "";
    hintMessage.textContent = `Hint: ${hint}`;
    completionMessage.textContent = "";
    completionMessage.className = "completion-message";
    nextButton.style.display = "none";
    retryButton.style.display = "none";

    word.split("").forEach(() => {
      const dropBox = document.createElement("div");
      dropBox.classList.add("drop-box");
      dropBox.addEventListener("dragover", (event) => event.preventDefault());
      dropBox.addEventListener("dragstart", handleDragStartWithinWordContainer);
      dropBox.addEventListener("drop", handleDrop);
      dropBox.addEventListener("touchstart", handleTouchStart);
      dropBox.addEventListener("touchend", handleTouchEnd);
      wordContainer.appendChild(dropBox);
    });

    shuffledChars.forEach((char) => {
      const charBox = document.createElement("div");
      charBox.classList.add("char-box");
      charBox.textContent = char;
      charBox.setAttribute("draggable", true);
      charBox.addEventListener("dragstart", handleDragStart);
      charBox.addEventListener("dragend", handleDragEnd);
      charBox.addEventListener("touchstart", handleTouchStart);
      charBox.addEventListener("touchmove", handleTouchMove);
      charBox.addEventListener("touchend", handleTouchEnd);
      charContainer.appendChild(charBox);
    });
  }

  function handleDragStartWithinWordContainer(event) {
    draggedChar = event.target.textContent;
    source = event.target.parentElement.id;
    event.dataTransfer.setData("text/plain", draggedChar);
  }

  function handleDragStart(event) {
    draggedChar = event.target.textContent;
    source = event.target.parentElement.id;
    event.dataTransfer.setData("text/plain", draggedChar);
    setTimeout(() => {
      event.target.classList.add("hide");
    }, 0);
  }

  function handleDragEnd(event) {
    event.target.classList.remove("hide");
  }

  function handleDrop(event) {
    event.preventDefault();
    if (!draggedChar) return;

    const target = event.target;
    if (target.classList.contains("drop-box")) {
      const existingChar = target.textContent;

      if (existingChar !== draggedChar) {
        if (source === "word-container") {
          const originalBox = Array.from(
            document.querySelectorAll(".drop-box")
          ).find((box) => box.textContent === draggedChar);
          if (originalBox) originalBox.textContent = "";
        } else if (source === "char-container") {
          const charBox = document.querySelector(`.char-box.hide`);
          if (charBox) charBox.remove();
        }

        const dropBoxes = document.querySelectorAll(".drop-box");
        dropBoxes.forEach((box) => {
          if (box.textContent === "") {
            box.classList.remove("filled");
          }
        });

        target.textContent = draggedChar;
        target.classList.add("filled");

        if (existingChar) {
          const charBox = document.createElement("div");
          charBox.classList.add("char-box");
          charBox.textContent = existingChar;
          charBox.setAttribute("draggable", true);
          charBox.addEventListener("dragstart", handleDragStart);
          charBox.addEventListener("dragend", handleDragEnd);
          charBox.addEventListener("touchstart", handleTouchStart);
          charBox.addEventListener("touchmove", handleTouchMove);
          charBox.addEventListener("touchend", handleTouchEnd);
          document.getElementById("char-container").appendChild(charBox);
        }
      }

      checkCompletion();
    }
    draggedChar = null;
  }

  function handleTouchStart(event) {
    const touch = event.touches[0];
    draggedChar = event.target.textContent;
    source = event.target.parentElement.id;
    event.target.classList.add("hide");
  }

  function handleTouchMove(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);

    if (target && target.classList.contains("drop-box")) {
      target.classList.add("drop-target");
    }
  }

  function handleTouchEnd(event) {
    const touch = event.changedTouches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);

    if (target && target.classList.contains("drop-box")) {
      handleDrop({ target, preventDefault: () => {} });
    }

    document
      .querySelectorAll(".drop-target")
      .forEach((el) => el.classList.remove("drop-target"));
    const charBox = document.querySelector(".char-box.hide");
    if (charBox) charBox.classList.remove("hide");
  }

  function checkCompletion() {
    const dropBoxes = document.querySelectorAll(".drop-box");
    const currentWord = Array.from(dropBoxes)
      .map((box) => box.textContent)
      .join("");
    const isComplete = Array.from(dropBoxes).every(
      (box) => box.textContent !== ""
    );
    const completionMessage = document.getElementById("completion-message");
    const nextButton = document.getElementById("next-button");
    const retryButton = document.getElementById("retry-button");

    if (isComplete) {
      if (
        currentWord === wordPuzzle.level1[currentWordIndex].word.toUpperCase()
      ) {
        sounds["sfx_celebrate_horn"].play();
        sounds["kobo"].play();
        completionMessage.textContent = "Congratulations!";
        if (completionMessage.classList.contains("error")) {
          completionMessage.classList.remove("error");
        }
        completionMessage.classList.add("success");
        nextButton.style.display = "block";
        retryButton.style.display = "none";
        disableDragAndDrop();
      } else {
        sounds["sfx_windows_error"].play();
        completionMessage.textContent = "Try Again!";
        if (completionMessage.classList.contains("success")) {
          completionMessage.classList.remove("success");
        }
        completionMessage.classList.add("error");
        nextButton.style.display = "none";
        retryButton.style.display = "block";
        setTimeout(() => {
          resetPuzzle();
        }, 1000);
      }
    }
  }

  function disableDragAndDrop() {
    const charBoxes = document.querySelectorAll(".char-box");
    const dropBoxes = document.querySelectorAll(".drop-box");
    charBoxes.forEach((box) => box.setAttribute("draggable", false));
    dropBoxes.forEach((box) => {
      box.removeEventListener("dragover", (event) => event.preventDefault());
      box.removeEventListener("drop", handleDrop);
      box.removeEventListener("touchstart", handleTouchStart);
      box.removeEventListener("touchend", handleTouchEnd);
    });
  }

  function resetPuzzle() {
    const charContainer = document.getElementById("char-container");
    const dropBoxes = document.querySelectorAll(".drop-box");

    dropBoxes.forEach((box) => {
      if (box.textContent) {
        const charBox = document.createElement("div");
        charBox.classList.add("char-box");
        charBox.textContent = box.textContent;
        charBox.setAttribute("draggable", true);
        charBox.addEventListener("dragstart", handleDragStart);
        charBox.addEventListener("dragend", handleDragEnd);
        charBox.addEventListener("touchstart", handleTouchStart);
        charBox.addEventListener("touchmove", handleTouchMove);
        charBox.addEventListener("touchend", handleTouchEnd);
        charContainer.appendChild(charBox);
        box.textContent = "";
        box.classList.remove("filled");
      }
    });
  }

  window.retryPuzzle = function () {
    currentWordIndex = 0; // Reset indeks kata ke 0
    const nextButton = document.getElementById("next-button");
    const retryButton = document.getElementById("retry-button");
    const completionMessage = document.getElementById("completion-message");

    initializePuzzle(); // Inisialisasi ulang puzzle

    nextButton.style.display = "none"; // Sembunyikan tombol Next
    retryButton.style.display = "none"; // Sembunyikan tombol Retry
    completionMessage.textContent = ""; // Hapus pesan "Congratulations!" atau "Try Again!"
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  window.nextPuzzle = function () {
    currentWordIndex++;
    const nextButton = document.getElementById("next-button");
    const retryButton = document.getElementById("retry-button");
    const completionMessage = document.getElementById("completion-message");

    if (currentWordIndex < wordPuzzle.level1.length) {
      initializePuzzle();
      nextButton.style.display = "none";
      retryButton.style.display = "none";
      completionMessage.textContent = "";
    } else {
      nextButton.style.display = "none";
      retryButton.style.display = "block";
      completionMessage.textContent = "";
    }
  };

  homeButton.addEventListener("click", function () {
    window.location.href = "../index.php";
  });

  backButton.addEventListener("click", function () {
    window.location.href = "../tradisi-lisan.php";
  });

  initializePuzzle();
});
