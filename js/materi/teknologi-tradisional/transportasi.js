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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Transportasi
      Tradisional Tiap Suku
  </h1>
  <div class="course-content-text"
      style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
      <h2>Transportasi Tradisional Suku Banjar</h2>
      <p>
          Jukung, atau perahu, adalah alat transportasi tradisional suku Banjar yang terkenal dengan
          keunikan desain dan peran pentingnya dalam kehidupan masyarakat. Jukung telah digunakan
          selama berabad-abad untuk berbagai keperluan, mulai dari perdagangan, transportasi hingga
          kegiatan sehari-hari seperti memancing dan bertani. Jukung memiliki bentuk yang memanjang
          dan ramping dengan bagian depan dan belakang yang runcing. Bentuk ini membuatnya ideal untuk
          bergerak di air yang tenang maupun bergelombang. Jukung biasanya terbuat dari kayu ulin,
          sejenis kayu keras yang tahan air dan tahan lama. Kayu ulin dipilih karena menurut Orang
          Banjar semakin kayu ulin terkena air maka semakin kuat kayu tersebut.
      </p>

      <h2>Transportasi Tradisional Suku Meratus</h2>
      <p>
          Di tengah hamparan sungai-sungai besar di Kalimantan, Suku Dayak telah memanfaatkan rakit
          sebagai alat transportasi utama selama berabad-abad. Rakit bukan hanya sekadar perahu
          sederhana, tetapi juga menjadi simbol kedekatan mereka dengan alam dan sungai yang menjadi
          urat nadi kehidupan mereka. Bukti arkeologis menunjukkan penggunaan rakit sejak 3.000 tahun
          lalu, berkaitan erat dengan budaya maritim mereka. Rakit terbuat dari bahan-bahan alami
          seperti bambu, kayu keras, rotan, dan daun untuk atap. Bentuk dan ukuran rakit bervariasi
          tergantung fungsinya, dari memancing hingga mengangkut hasil panen atau barang dagangan.
          Pembuatan rakit memerlukan keterampilan khusus, dengan bambu atau kayu dipotong dan diikat
          dengan rotan. Rakit digerakkan dengan mendayung, menggunakan arus sungai, atau layar.
          Fungsinya meliputi transportasi, perdagangan, berburu, memancing, dan digunakan dalam ritual
          adat.
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
                          <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Transportasi
                          Tradisional Tiap Suku</h1>
                          <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                              <iframe src="https://www.youtube.com/embed/EH9RnhSzQho" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
        "https://www.youtube.com/embed/EH9RnhSzQho",
        "https://www.youtube.com/embed/AwZN9ou121E",
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
