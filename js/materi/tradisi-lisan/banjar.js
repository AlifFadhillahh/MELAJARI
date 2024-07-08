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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Tradisi Lisan
                        Suku Banjar
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Madihin</h2>
                        <p>
                            Madihin merupakan kesenian tradisional suku banjar. Kesenian madihin diperkirakan awal
                            keberadaannya di daerah Tawia Hulu Sungai Selatan. Tokoh yang disebut mempunyai peran dalam
                            proses penyebaran dan perkembangluasan kesenian ini adalah Dulah Nyangnyang. Pemain yang
                            memainkan kesenian madihin ini dalam bahasa Banjar disebut dengan pamadihinan. Madihin ini
                            diambil dari kata yang berasal dari bahasa arab yaitu madah, yang mana memiliki arti atau
                            makna nasehat. (Thaha, 2014). Dalam madihin terdapat dua unsur utama yaitu pertama adalah
                            unsur musik terdiri dari instrumen dan vokalitas, instrumen berupa alat musik iringan
                            madihin yang disebut tarbang. Dalam bahasa banjar alat musik tersebut tergolong sejenis
                            rebana berukuran sedang, dimana berfungsi sebagai pembawa ritmis dalam musik ini, dalam
                            pembukaan madihin tarbang dimainkan sebagai pembuka pertunjukan madihin. Selain instrumen
                            dalam madihin terdapat juga unsur vokalitas yang terdiri dari naskah syair dalam madihin,
                            notasi madihin bersifat pengulangan, dan kebermaknaan lirik madihin ini yang membuat
                            keunikan tersendiri dalam pertunjukannya.
                        </p>

                        <h2>Balamut</h2>
                        <p>
                            Balamut, atau Lamut, adalah seni tradisi lisan bercerita rakyat yang berasal dari Kalimantan
                            Selatan. Tradisi ini telah ada sejak lama dan diwariskan turun-temurun dalam masyarakat
                            Banjar. Balamut biasanya dipentaskan pada malam hari, ditemani alunan musik tradisional dan
                            disuguhkan kepada para pendengar. Balamut merupakan salah satu kekayaan budaya tak benda
                            yang dimiliki oleh Kalimantan Selatan. Tradisi ini memiliki nilai sejarah, budaya, dan
                            pendidikan yang tinggi. Oleh karena itu, Balamut perlu terus dilestarikan dan dikembangkan
                            agar dapat menjadi warisan budaya yang berharga bagi generasi penerus.
                        </p>

                        <h2>Mamanda</h2>
                        <p>
                            Kesenian tradisional khas Kalimantan Selatan lainnya yaitu Mamanda. Mamanda merupakan seni
                            pentas teater tradisional Banjar. Menceritakan kisah-kisah kehidupan masyarakat terdahulu,
                            perjuangan kemerdekaan, kritik sosial
                            dan politik yang berkembang. Kesenian Mamanda memiliki nilai komunikasi yang relevan untuk
                            meningkatkan etika komunikasi. Setiap karya sastra tentunya memiliki nilai-nilai,
                            seperti nilai budaya, nilai humor, nilai moral, nilai sosial, nilai religius, nilai nilal
                            kal karakter, al dan lain-lain. Nilai-nilai dalam karya sastra mampu memberikan kontribusi
                            kebaikan kebajikan hidup hidup untuk menjadi lebih baik
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Tradisi Lisan
                    Suku Banjar</h1>
                    <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <iframe src="https://www.youtube.com/embed/gGiY1eGXFqI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
        "https://www.youtube.com/embed/gGiY1eGXFqI",
        "https://www.youtube.com/embed/gO2O9alT4pE",
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
      window.location.href = "/tradisi-lisan.html";
    });
  }
});
