document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card-container");
  const homeButton = document.getElementById("home-button");
  const backButton = document.getElementById("back-button");

  const cardsData = [
    {
      title: "Pengetahuan Tradsional Banjar",
      description: "",
      url: "materi/pengetahuan-tradisional/banjar.html",
    },
    {
      title: "Pengetahuan Tradsional Meratus",
      description: "",
      url: "materi/pengetahuan-tradisional/meratus.html",
    },
    {
      title: "Pengetahuan Tradsional Bakumpai",
      description: "",
      url: "materi/pengetahuan-tradisional/bakumpai.html",
    },
    {
      title: "Evaluasi",
      description: "Tes pemahaman mu disini!",
      url: "game/bab6.html",
    },
  ];

  cardsData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.innerHTML = `
        <img src="/assets/button/latar.png" alt="${card.title}">
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
    window.location.href = "home.html";
  });

  backButton.addEventListener("click", function () {
    window.location.href = "materi.html";
  });
});
