const playButton = document.getElementById("play-button");
const exitButton = document.getElementById("exit-button");

playButton.addEventListener("click", function () {
  window.location.href = "introduction.php";
});

exitButton.addEventListener("click", function () {
  window.location.href = "logout.php";
});
