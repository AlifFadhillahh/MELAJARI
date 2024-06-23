document.addEventListener("DOMContentLoaded", function () {
  // Menambahkan event listener untuk kartu
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const link = this.getAttribute("data-link");
      window.location.href = link;
    });
    card.style.cursor = "pointer";
  });

  // Menambahkan event listener untuk tombol home
  const homeButton = document.getElementById("home-button");
  if (homeButton) {
    homeButton.addEventListener("click", function () {
      window.location.href = "home.html";
    });
  }

  // Menambahkan event listener untuk tombol back
  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "course.html";
    });
  }
});
