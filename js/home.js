const playButton = document.getElementById("play-button");
const exitButton = document.getElementById("exit-button");

playButton.addEventListener("click", function () {
  window.location.href = "introduction.html";
});

exitButton.addEventListener("click", function () {
  window.location.href = "landing-page.html";
});
