document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card-container");
  const homeButton = document.getElementById("home-button");
  const backButton = document.getElementById("back-button");

  const cardsData = [
    {
      title: "Bahasa Suku Banjar",
      description: "",
      url: "https://repositori.kemdikbud.go.id/2888/1/Kamus%20Banjar%20-%20Indonesia%20%20%20%20%20-%20%20%20189h.pdf",
    },
    {
      title: "Bahasa Suku Meratus",
      description: "",
      url: "materi/bahasa/meratus.html",
    },
    {
      title: "Bahasa Suku Bakumpai",
      description: "",
      url: "https://repositori.kemdikbud.go.id/2874/1/Kamus%20Bahasa%20Indonesia%20Bakumpai%20II%20%20%20%20%20257a.pdf",
    },
    {
      title: "Evaluasi",
      description: "Tes pemahaman mu disini!",
      url: "game/bab7.html",
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
    window.location.href = "index.html";
  });

  backButton.addEventListener("click", function () {
    window.location.href = "materi.html";
  });
});
