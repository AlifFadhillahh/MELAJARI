document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen button dan konten course-content
  const materiButton = document.getElementById("materi-button");
  const videoButton = document.getElementById("video-button");
  const courseContent = document.getElementById("course-content");
  const homeButton = document.getElementById("home-button");
  const backButton = document.getElementById("back-button");

  // Tambahkan event listener untuk tombol materi
  if (materiButton) {
    materiButton.addEventListener("click", function () {
      // Ganti isi konten dengan konten materi
      courseContent.innerHTML = `
              <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Olahraga
              Tradisional Meratus
          </h1>
          <div class="course-content-text"
              style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
              <h2>Membolang</h2>
              <p>
                  Membolang merupakan tradisi bermain unik yang biasa dilakukan oleh anak-anak di suku
                  meratus, khususnya di daerah Kalimantan. Permainan ini melatih ketangkasan, kekompakan, dan
                  sportivitas anak-anak. Selain itu, membolang juga menjadi sarana untuk melestarikan budaya
                  dan tradisi leluhur. Membolang merupakan tradisi turun-temurun yang diwariskan oleh leluhur
                  Suku Meratus. Permainan ini bukan hanya untuk bersenang-senang, tetapi juga untuk melatih
                  keahlian dan menanamkan nilai-nilai budaya kepada anak-anak. Tradisi ini mencerminkan
                  kearifan lokal Suku Meratus dalam memanfaatkan alam dan menjaga kelestariannya.

              </p>
          </div>
                  `;
    });
  }

  // Tambahkan event listener untuk tombol video
  if (videoButton) {
    videoButton.addEventListener("click", function () {
      // Ganti isi konten dengan konten video
      courseContent.innerHTML = `
                      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Permainan
                      Rakyat Meratus</h1>
                      <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                          <iframe src="https://www.youtube.com/embed/JdUh-fdwr2c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
                          <div class="pagination" style="text-align: center; margin-top: 20px;">
                              <img src="/assets/button/left-arrow.webp" class="pagination-button" id="prev-video" style="margin-right: 10px; cursor: pointer;">
                              <img src="/assets/button/right-arrow.webp" class="pagination-button" id="next-video" style="cursor: pointer;">
                          </div>
                      </div>
                  `;

      const prevVideoButton = document.getElementById("prev-video");
      const nextVideoButton = document.getElementById("next-video");

      let currentVideoIndex = 0;
      const videoUrls = [];

      const updateVideo = () => {
        const iframe = courseContent.querySelector("iframe");
        iframe.src = videoUrls[currentVideoIndex];
      };

      if (prevVideoButton) {
        prevVideoButton.addEventListener("click", () => {
          if (currentVideoIndex > 0) {
            currentVideoIndex--;
            updateVideo();
          }
        });
      }

      if (nextVideoButton) {
        nextVideoButton.addEventListener("click", () => {
          if (currentVideoIndex < videoUrls.length - 1) {
            currentVideoIndex++;
            updateVideo();
          }
        });
      }
    });
  }

  // Tambahkan event listener untuk tombol home
  if (homeButton) {
    homeButton.addEventListener("click", function () {
      window.location.href = "/index.html";
    });
  }

  // Tambahkan event listener untuk tombol back
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "/permainan-rakyat.html";
    });
  }
});
