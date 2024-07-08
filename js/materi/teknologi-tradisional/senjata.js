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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Senjata
      Tradisional Tiap Suku
  </h1>
  <div class="course-content-text"
      style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
      <h2>Senjata Tradisional Suku Banjar</h2>
      <p>
          Parang Nabur adalah senjata tradisional suku Banjar yang terkenal dengan keunikan dan
          sejarahnya yang panjang. Senjata ini tidak hanya digunakan sebagai alat untuk bertani,
          tetapi juga memiliki peran penting dalam budaya dan tradisi masyarakat Banjar. Parang Nabur
          memiliki bentuk yang khas, yaitu melengkung seperti bulan sabit dengan ujung yang tajam.
          Bentuk ini membuatnya ideal untuk menebas dan memotong. Parang Nabur biasanya terbuat dari
          besi baja yang kuat dan tahan lama, sedangkan gagangnya terbuat dari kayu yang nyaman
          digenggam.
      </p>
      <p>
          Keris Baliung adalah senjata tradisional suku Banjar yang terkenal dengan bentuknya yang
          unik dan aura mistisnya. Senjata ini tidak hanya digunakan sebagai alat untuk bertarung,
          tetapi juga memiliki nilai spiritual dan magis yang tinggi bagi masyarakat Banjar. Keris
          Baliung memiliki bentuk yang khas, yaitu menyerupai kapak dengan bilah yang melengkung dan
          ujung yang tajam. Bentuk ini membuatnya ideal untuk menebas, menusuk, dan bahkan menangkis
          serangan. Keris Baliung biasanya terbuat dari besi baja yang kuat dan tahan lama. Bilahnya
          sering dihiasi dengan ukiran-ukiran yang rumit dan indah, yang melambangkan kekuatan,
          keberanian, dan status sosial pemiliknya.
      </p>
      <p>
          Sarapang adalah senjata tradisional suku Banjar yang terkenal dengan bentuknya yang unik dan
          daya mematikannya yang tinggi. Senjata ini umumnya digunakan untuk berburu, namun senjata
          ini juga pernah digunakan sebagai senjata untuk berperang pada masa peperangan. Senjata ini
          memiliki nilai budaya dan spiritual yang tinggi bagi masyarakat Banjar. Sarapang memiliki
          bentuk yang khas, yaitu menyerupai trisula dengan tiga atau empat mata tombak yang tajam.
          Bentuk ini membuatnya ideal untuk menusuk dan menyobek lawan. Sarapang biasanya terbuat dari
          besi baja yang kuat dan tahan lama. Matanya dibuat dengan cara menempa dan mengasah besi
          dengan hati-hati, menghasilkan ujung yang tajam dan mematikan.
      </p>

      <h2>Senjata Tradisional Suku Bakumpai</h2>
      <p>
          Lonjo adalah senjata tradisional yang dipegang erat oleh para pejuang Dayak Kalimantan,
          bukan hanya sebagai tombak biasa, melainkan representasi dari ketahanan, keterampilan, dan
          kebanggaan masyarakat yang telah lama mendiami pulau tersebut. Mata tombak lonjo terbuat
          dari besi atau baja berkualitas tinggi, ditempa dengan teknik khusus untuk menghasilkan
          ketajaman luar biasa, dengan variasi bentuk tergantung sub-suku Dayak pembuatnya, seperti
          lonjo mandau, lonjo sumpit, dan lonjo ilang. Gagang lonjo biasanya terbuat dari kayu ulin
          atau kayu belian yang kuat dan tahan lama, dihiasi dengan ukiran bermakna simbolis yang
          merepresentasikan kekuatan, keberanian, atau motif spiritual. Panjang lonjo yang bisa
          mencapai 3 meter memberikan keuntungan jangkauan luas dan gaya serangan variatif,
          memungkinkan pejuang Dayak untuk menyerang lawan dari jarak yang lebih aman serta
          melancarkan serangan tusuk langsung maupun serangan menyapu.
      </p>

      <h2>Senjata Tradisional Suku Meratus</h2>
      <p>
          Mandau adalah pusaka budaya yang dihormati dan dibanggakan oleh Suku Dayak di Kalimantan.
          Lebih dari sekadar alat pertahanan dan perburuan, Mandau melambangkan identitas, status
          sosial, dan nilai-nilai luhur. Sejak zaman prasejarah, Mandau telah menjadi simbol
          keberanian, keadilan, dan kearifan lokal, dengan desain khas yang mencerminkan kelincahan
          dan kekuatan. Terbuat dari besi atau baja dengan hulu dan sarung dari kayu ulin, gaharu,
          atau meranti, Mandau dihiasi dengan ukiran simbolis. Terdapat berbagai jenis Mandau seperti
          Mandau Balang, Pamat, dan Sandung, masing-masing dengan fungsi berbeda. Pembuatan Mandau
          adalah proses sakral yang diwariskan turun-temurun.
      </p>
      <p>
          Sumpit, alat berburu yang juga sarat makna, telah ada sejak 3.000 tahun lalu. Terbuat dari
          bambu, kayu, atau besi, sumpit terdiri dari batang, anak sumpit, dan sarung. Sumpit
          digunakan untuk berburu, pertahanan diri, upacara adat, dan simbol budaya, melambangkan
          keberanian, ketepatan, dan keharmonisan dengan alam. Pembuatan dan penggunaan sumpit
          memerlukan keahlian yang diwariskan dari generasi ke generasi.
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
                        <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Senjata
                        Tradisional Tiap Suku</h1>
                        <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                            <iframe src="https://www.youtube.com/embed/Pz2PV_eTqnE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
        "https://www.youtube.com/embed/Pz2PV_eTqnE",
        "https://www.youtube.com/embed/gbtU40x9t7A",
        "https://www.youtube.com/embed/osic0tRBC7g",
        "https://www.youtube.com/embed/H7XaXkFb3lQ",
        "https://www.youtube.com/embed/Zs77T1i7q28",
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
