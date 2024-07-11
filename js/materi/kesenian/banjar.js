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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kesenian
                        Suku Banjar
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Musik panting</h2>
                        <p>
                            Musik panting adalah seni musik tradisional dari Kalimantan Selatan, khususnya etnis Banjar.
                            Musik ini telah menjadi bagian penting dalam kehidupan masyarakat setempat selama
                            berabad-abad dan digunakan dalam berbagai upacara adat, perayaan, dan pertunjukan seni
                            tradisional. Nama "panting" masih menjadi misteri, tetapi musik ini telah menjadi simbol
                            budaya Banjar.
                        </p>
                        <p>
                            Instrumen musik panting terbuat dari bambu yang disusun untuk menghasilkan nada-nada indah,
                            termasuk gendang, gong, rebana, dan panting sebagai instrumen utama. Instrumen-instrumen ini
                            menciptakan harmoni yang mencerminkan kehidupan masyarakat Kalimantan Selatan yang hidup
                            berdampingan dengan alam.
                        </p>
                        <p>
                            Musik panting memainkan peran penting dalam upacara adat seperti pernikahan, pertunjukan
                            seni, dan upacara keagamaan di Kalimantan Selatan. Ia menjadi pengiring dalam tarian, drama,
                            dan pertunjukan seni lainnya, serta menjadi elemen kunci dalam mempertahankan seni
                            tradisional.
                        </p>

                        <h2>Kuriding</h2>
                        <p>
                            Kuriding adalah alat musik ritmis/perkusi yang dikategorikan sebagai idiophone. Alat ini
                            berbentuk persegi panjang kecil, dengan bagian dalam yang ditempelkan di mulut dan bagian
                            luar yang menghadap ke luar.
                        </p>

                        <h2>Sinoman hadrah</h2>
                        <p>
                            Hadrah berkembang di Kabupaten Banjar, khususnya Martapura. Sinoman Hadrah adalah
                            perkumpulan seni yang menyambut kehadiran seseorang atau kelompok yang dihormati.
                            Penampilannya melibatkan rebana, babun, ketipung, tamborens, bendera, dan payung besar
                            berhias. Pertunjukan ini biasanya dilakukan secara berkelompok dengan minimal 30 orang.
                        </p>

                        <h2>Andi-andi</h2>
                        <p>
                            Andi-andi adalah seni suara tradisional dari Kalimantan Selatan yang hanya melibatkan
                            penyanyi wanita tanpa alat musik. Nyanyiannya berkisah tentang kehidupan para raja di
                            Kalimantan.Seni ini dianggap hampir punah karena sudah lebih dari 20 tahun tidak dipentaskan
                            secara terbuka.
                        </p>

                        <h2>Air guci</h2>
                        <p>
                            Air Guci adalah kerajinan kain khas Banua Banjar yang sudah populer sejak ratusan tahun
                            lalu. Dahulu, kain ini hanya boleh dipakai oleh penguasa Kerajaan Banjar sebagai simbol
                            kehormatan Kesultanan Banjar. Kini, kesakralannya telah berkurang seiring perkembangan
                            zaman.
                        </p>

                        <h2>Kain Sasirangan</h2>
                        <p>
                            Sasirangan adalah kain khas Kalimantan Selatan yang dibuat dengan teknik tusuk jelujur,
                            diikat, dan dicelup. Dikenal sebagai batik sandang, kain ini memiliki motif tradisional khas
                            Kalimantan Selatan. Awalnya dikenal sebagai kain Langgundi, yang kemudian hanya digunakan
                            sebagai sarana pelengkap dalam terapi pengobatan alternatif. Nama "sasirangan" berasal dari
                            cara pembuatannya, yaitu dijelujur dan dicelup.
                        </p>

                        <h2>Kaukah</h2>
                        <h2>Batu permata</h2>
                    </div>
                `;
    });
  }

  // Tambahkan event listener untuk tombol video
  if (videoButton) {
    videoButton.addEventListener("click", function () {
      // Ganti isi konten dengan konten video
      courseContent.innerHTML = `
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kesenian
                    Suku Banjar</h1>
                    <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <iframe src="https://www.youtube.com/embed/0sVOPx03QdY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
        "https://www.youtube.com/embed/0sVOPx03QdY",
        "https://www.youtube.com/embed/BvrYyU_b3wQ",
        "https://www.youtube.com/embed/rsNh0Arm8B0",
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
      window.location.href = "/kesenian.html";
    });
  }
});
