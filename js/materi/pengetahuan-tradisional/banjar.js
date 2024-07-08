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
                        Tradisional Banjar
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Sistem Pengobatan Bapidara</h2>
                        <p>
                            Bapidara adalah sistem pengobatan tradisional dari suku banjar. sistem pengobatan
                            tradisional ini merupakan sistem pengobatan tradisional yang telah dipraktikkan secara turun
                            temurun selama berabad-abad.
                        </p>

                        <h2>Pasar Terapung</h2>
                        <p>
                            Masyarakat Banjar di Kalimantan Selatan memiliki keterlekatan yang kuat dengan sungai.
                            Sungai bukan hanya sumber air, tetapi juga menjadi bagian kehidupan dan penghidupan bagi
                            masyarakat Suku Banjar. Sejarah masyarakat Banjar erat kaitannya dengan sungai, yang telah
                            menjadi jalur utama transportasi dan perdagangan sejak zaman dahulu kala. Permukiman
                            dibangun di sepanjang bantaran sungai, dimanfaatkan untuk berbagai kebutuhan hidup seperti
                            memasak, mencuci pakaian, dan lainnya. Banyak legenda dan cerita rakyat Banjar berlatar
                            belakang sungai, menceritakan asal-usul suku Banjar, pahlawan, dan nilai-nilai moral yang
                            dipegang teguh oleh masyarakat. Sungai juga menjadi tempat pelaksanaan berbagai upacara adat
                            masyarakat Banjar, seperti upacara Melabuh.
                        </p>
                        <p>
                            Dalam kehidupan sehari-hari, sungai menjadi jalur transportasi utama, terutama di daerah
                            pedesaan, dengan perahu tradisional seperti "jukung" dan "kelotok" yang digunakan untuk
                            mengangkut orang dan barang. Sungai juga menjadi sumber pencaharian utama bagi masyarakat
                            Banjar, terutama bagi mereka yang bekerja sebagai nelayan dan petani. Sungai kaya akan ikan
                            dan hasil pertanian yang ditanam di bantaran sungai, contohnya seperti di Pasar Terapung.
                            Selain itu, sungai menjadi sumber air utama untuk kebutuhan sehari-hari seperti mandi,
                            mencuci, dan memasak, serta mengairi sawah dan ladang. Sungai juga menjadi tempat rekreasi,
                            di mana masyarakat Banjar mandi, berenang, dan bermain di sungai untuk menyegarkan diri dan
                            bersantai.
                        </p>

                        <h2>Pamali Menyapu rumah di malam hari</h2>
                        <p>
                            Di dalam budaya Suku Banjar, terdapat pantangan menyapu rumah di malam hari. Tradisi ini
                            telah diwariskan turun-temurun dan masih banyak dipraktikkan hingga saat ini. Alasan utama
                            dibalik pantangan ini adalah kepercayaan bahwa menyapu rumah di malam hari dapat menarik
                            rezeki keluar rumah. Hal ini diyakini karena di malam hari, dipercaya bahwa energi negatif
                            dan makhluk halus lebih mudah masuk ke dalam rumah. Menyapu di malam hari dikhawatirkan
                            dapat mengganggu keseimbangan energi di dalam rumah dan membawa kesialan.
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
                    Tradisional Banjar</h1>
                    <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <iframe src="https://www.youtube.com/embed/s-thMVxcDCs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
      window.location.href = "/pengetahuan-tradisional.html";
    });
  }
});
