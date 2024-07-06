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
                <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Pengetahuan
                Tradisional Bakumpai
            </h1>
            <div class="course-content-text"
                style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                <h2>Sistem Pengobatan Bahintuk</h2>
                <p>
                    Bahintuk adalah sistem pengobatan tradisional dari suku bakumpai. bahintuk di lakukan dengan
                    cara mengabil sedikit ramput di kepala lalu di tarik dengan perlahan lalu kencang hingga
                    berbunyi. umumnya bahintuk di lakukan secara langsung dari yang tukang hintuk kepada yang
                    sakit, akan tetapi jika yang sakit tidak bisa melakukan hintuk, maka bisa di gantikan dengan
                    kerabat dekat contohnya: suami bisa di gantikan dengan istri begitupun sebaliknya. akan
                    tetapi sebelum di wakilkan antara yang sakit dengan yang akan mewakilkan, yang mewakilkan
                    terlebih dahulu menempelkan kepadanya kepada yang sakit. Hal tersebut sebagai syarat dari
                    pengobatan tradisional bahintuk dari suku bakumpai apabila yang sakit tidak bisa menjalankan
                    tradisi bahi tuk tersebut.
                </p>

                <h2>Pantangan Pingit</h2>
                <p>
                    Segala Adat istiadat atau tradisi yang diwariskan secara turun temurun oleh nenek moyang
                    Suku Bakumpai merupakan suatu keharusan yang dilakukan oleh keturunannya karena ada suatu
                    istilah pada masyarakat suku dayak bakumpai adalah “Pamali ida tau ilihi jite akan syarat
                    auh uluh bakas batuh”. Makna dari perkataan ini yaitu jika amanat dan wasiat dari orang tua
                    dan para leluhur dilanggar, maka niscaya akan membawa akibat jika meninggalkan syarat
                    tersebut. Akibat tersebut diasumsikan sebagai hal buruk yang dapat menimpa kepada pasangan
                    pengantin kelak, keluarga pengantin dan lingkungannya atau masyarakat sekitarnya.
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
                      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Pengetahuan
                      Tradisional Bakumpai</h1>
                      <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                          <iframe src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
      window.location.href = "/home.html";
    });
  }

  // Tambahkan event listener untuk tombol back
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "/pengetahuan-tradisional.html";
    });
  }
});
