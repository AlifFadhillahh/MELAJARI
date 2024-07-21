const homeButton = document.getElementById("home-button");
const backButton = document.getElementById("back-button");

homeButton.addEventListener("click", function () {
  window.location.href = "index.php";
});

backButton.addEventListener("click", function () {
  window.location.href = "introduction.php";
});
