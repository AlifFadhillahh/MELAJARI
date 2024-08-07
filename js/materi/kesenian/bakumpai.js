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
                        Suku Bakumpai
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Gamelan bakumpai</h2>
                        <h2>Sinoman</h2>
                        <h2>Hadrah</h2>
                        <h2>Karungut </h2>
                        <h2>Anyaman</h2>
                        <p>
                            Kalimantan Selatan sebagai daerah yang memiliki dataran rendah berair, seperti sungai, danau
                            dan rawa. Banyak ditumbuhi berbagai jenis tumbuhan liar di antaranya tanaman purun. Tanaman
                            purun tumbuh subur hamper di seluruh Kalimantan Selatan, khususnya di daerah Barito Kuala
                            pada suku dayak bakumpai. Selain dimanfaatkan untuk keperluan hidup sebagai bahan baku
                            anyaman, purun juga memiliki makna bagi perilaku manusia. Hal ini menunjukkan bahwa tumbuhan
                            ini sangat dekat dengan kehidupan sehari-hari dan memberikan inspirasi bagi kearifan budaya
                            masyarakat Kalimantan selatan.
                        </p>
                        <p>
                            Jenis purun yang tumbuh di Kalimantan Selatan terdiri atas purun danau dan purun tikus.
                            Tumbuhan purun oleh masyarakat Kalimantan Selatan telah dimanfaatkan sebagai kerajinan rumah
                            tangga antara lain sebagai tikar, tas, topi, bakul, sejadah, hiasan dinding dan aksesoris
                            lainnya.
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
                      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kesenian
                      Suku Bakumpai</h1>
                      <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                          <iframe src="https://www.youtube.com/embed/PUa7-LjIx84" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
        "https://www.youtube.com/embed/PUa7-LjIx84",
        "https://www.youtube.com/embed/xWkXabAytrE",
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
      window.location.href = "/index.php";
    });
  }

  // Tambahkan event listener untuk tombol back
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "/kesenian.php";
    });
  }
});
