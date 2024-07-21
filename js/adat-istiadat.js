document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card-container");
  const homeButton = document.getElementById("home-button");
  const backButton = document.getElementById("back-button");

  const cardsData = [
    {
      title: "Perkawinan",
      description: "Budaya Perkawinan dalam berbagai budaya",
      url: "materi/adat-istiadat/perkawinan.php",
    },
    {
      title: "Kematian",
      description: "Budaya Kematian dalam berbagai budaya",
      url: "materi/adat-istiadat/kematian.php",
    },
    {
      title: "Kehamilan",
      description: "Budaya Kehamilan dalam berbagai budaya",
      url: "materi/adat-istiadat/kehamilan.php",
    },
    {
      title: "Kelahiran",
      description: "Budaya Kelahiran dalam berbagai budaya",
      url: "materi/adat-istiadat/kelahiran.php",
    },
    {
      title: "Evaluasi",
      description: "Tes pemahaman mu disini!",
      url: "game/bab1.php",
    },
  ];

  cardsData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.innerHTML = `
      <img src="/assets/button/latar.webp" alt="${card.title}">
      <div class="content">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
      </div>
    `;

    cardElement.addEventListener("click", () => {
      window.location.href = card.url;
    });

    cardContainer.appendChild(cardElement);
  });

  homeButton.addEventListener("click", function () {
    window.location.href = "index.php";
  });

  backButton.addEventListener("click", function () {
    window.location.href = "materi.php";
  });
});
