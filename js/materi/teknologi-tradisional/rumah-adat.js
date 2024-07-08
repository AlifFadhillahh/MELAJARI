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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Rumah Adat
      Tiap Suku
  </h1>
  <div class="course-content-text"
      style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
      <h2>Rumah Adat Suku Banjar</h2>
      <p>
          Rumah Bubungan Tinggi, juga dikenal sebagai Rumah Baanjung, adalah rumah adat suku Banjar
          yang terkenal dengan arsitekturnya yang unik dan filosofis. Rumah ini mencerminkan
          nilai-nilai budaya, tradisi, dan filosofi masyarakat Banjar yang telah diwariskan
          turun-temurun. Rumah Bubungan Tinggi memiliki bentuk yang khas, yaitu memanjang dengan atap
          yang tinggi menjulang seperti tanduk kerbau. Pada masa lampau, Rumah Bubungan Tinggi juga
          berfungsi sebagai benteng pertahanan. Struktur panggungnya yang tinggi dan atapnya yang
          kokoh memberikan perlindungan dari serangan musuh ataupun hewan buas. Selain itu,
          anjung-anjung digunakan untuk memantau situasi dan menyerang balik. Sedangkan kolong rumah
          yang tinggi memiliki fungsi untuk menyimpan hasil panen. Bagi masyarakat yang tinggal di
          tepi sungai, kolong Rumah Bubungan Tinggi juga menjadi tempat untuk menyimpan perahu.
      </p>
      <p>
          Rumah Gajah Baliku adalah salah satu rumah adat suku Banjar yang terkenal dengan
          arsitekturnya yang unik dan kaya makna. Rumah ini memiliki ciri khas bentuk atap yang
          menyerupai gajah, yang mencerminkan nilai-nilai budaya dan filosofi masyarakat Banjar yang
          telah diwariskan turun-temurun selama berabad-abad. Atap Rumah Gajah Baliku berbentuk
          melengkung seperti punggung gajah dengan dua ujung runcing menyerupai gading gajah. Bentuk
          atap ini menjadi ciri khas yang paling menonjol dari rumah adat ini.
      </p>

      <h2>Rumah Adat Suku Meratus</h2>
      <p>
          Pondok-pondok adalah rumah tradisional Suku Dayak Meratus di tengah hutan Pegunungan
          Meratus, Kalimantan Selatan. Mereka mendiami pondok sederhana yang tidak hanya sebagai
          tempat tinggal, tetapi juga simbol identitas, budaya, dan kearifan lokal. Pondok-pondok
          dibangun dekat lahan pertanian di lereng perbukitan, terbuat dari kayu, bambu, dan daun
          nipah. Biasanya berbentuk persegi panjang dengan atap daun nipah, pondok ini mencerminkan
          kesederhanaan, keharmonisan dengan alam, dan kearifan lokal Suku Dayak Meratus. Mereka
          dipindahkan jika ladang pertanian berpindah, menunjukkan ketahanan dan revitilisasi
          arsitektur tradisional Suku Dayak Meratus yang penting.
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
                          <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Rumah Adat
                          Tiap Suku</h1>
                          <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                              <iframe src="https://www.youtube.com/embed/UIRPgtEZ9MQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
                              <div class="pagination" style="text-align: center; margin-top: 20px;">
                                  <img src="/assets/button/left-arrow.webp" class="pagination-button" id="prev-video" style="margin-right: 10px; cursor: pointer;">
                                  <img src="/assets/button/right-arrow.webp" class="pagination-button" id="next-video" style="cursor: pointer;">
                              </div>
                          </div>
                      `;

      const prevVideoButton = document.getElementById("prev-video");
      const nextVideoButton = document.getElementById("next-video");

      let currentVideoIndex = 0;
      const videoUrls = [
        "https://www.youtube.com/embed/UIRPgtEZ9MQ",
        "https://www.youtube.com/embed/bZPOnLbHmNg",
        "https://www.youtube.com/embed/JnEm2gcai0Q",
        "https://www.youtube.com/embed/9enP-m4F3ZM",
      ];

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
      window.location.href = "/teknologi-tradisional.html";
    });
  }
});
