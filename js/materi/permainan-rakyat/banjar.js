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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Permainan
                        Rakyat Banjar
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Balogo</h2>
                        <p>
                            Permainan balogo diambil dari kata dasar "logo” dengan tambahan awalan "ba” (Bahasa Banjar),
                            yang berarti permainan yang mempergunakan alat logo. Permainan balogo dilakukan oleh
                            anak-anak laki usia Sekolah Dasar dan juga oleh anak-anak remaja. Tidak atau jarang sekali
                            dilakukan oleh anak-anak perempuan. Permainan ini biasanya dilakukan di halaman rumah, di
                            atas tanah keras yang datar yang memanjang, meskipun tidak terlalu luas.
                        </p>

                        <h2>Ba Cuk Cuk Bimbi</h2>
                        <p>
                            Permainan bacukcuk bimbi diambil dari kata dasar "cukcuk bimbi" dengan tambahan awalan kata
                            "ba" (Bahasa Banjar) yang berarti main cukcuk bimbi. Tidak jelas asal dan arti dari kata
                            cukcuk bimbi tersebut. Permainan biasanya dilakukan oleh paling sedikit oleh 3 orang anak
                            atau sampai 5 orang anak perempuan dalam usia Sekolah Dasar atau gadis remaja. Kadang-kadang
                            juga dimainkan oleh anak-anak laki dengan mengambil tempat di palatar rumah pada waktu siang
                            hari, bahkan kadang-kadang juga bisa pada malam hari.
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
                    Rakyat Banjar</h1>
                    <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <iframe src="https://www.youtube.com/embed/uITrESQEIs0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
        "https://www.youtube.com/embed/uITrESQEIs0",
        "https://www.youtube.com/embed/iBvuj-1famA",
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
      window.location.href = "/home.html";
    });
  }

  // Tambahkan event listener untuk tombol back
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "/permainan-rakyat.html";
    });
  }
});
