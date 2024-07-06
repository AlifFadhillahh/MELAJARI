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
            Tradisional Banjar
        </h1>
        <div class="course-content-text"
            style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
            <h2>Kuntau</h2>
            <p>
                Kuntau adalah seni bela diri tradisional yang berasal dari suku Banjar di Kalimantan
                Selatan. Selain digunakan untuk membela diri, seni bela diri Kuntau juga sering ditampilkan
                dalam acara pernikahan, hajatan, dan event kebudayaan daerah. Menariknya, Kuntau tidak
                memiliki batasan umur; baik anak-anak, remaja, maupun dewasa dapat mempelajari kesenian
                tradisional ini. Perlombaan Kuntau juga diadakan di berbagai tingkatan, mulai dari tingkat
                kota hingga nasional, untuk melestarikan dan mempopulerkan seni bela diri ini di kalangan
                generasi muda di Kalimantan Selatan.
            </p>

            <h2>Balap Jukung</h2>
            <p>
                Balap jukung adalah perlombaan jukung atau perahu tradisional yang berlangsung di aliran
                sungai. Perlombaan ini merupakan salah satu tradisi yang khas dari suku Banjar di Kalimantan
                Selatan. Jadalah sampan kecil yang tidak bermesin dan memerlukan dayung atau galah agar bisa
                melaju di air. Jukung telah menjadi bagian hidup masyarakat Banjar sejak dulu, dan meskipun
                sekarang kita lebih sering melihatnya di wilayah-wilayah lain di Indonesia, seperti Bali dan
                Sumatera, asal-usulnya tetap terkait erat dengan suku Banjar. Jukung digunakan untuk
                berbagai keperluan, termasuk transportasi sehari-hari, perjalanan sungai, dan kegiatan
                budaya. Jukung bukan hanya alat transportasi, tetapi juga bagian penting dari identitas dan
                budaya orang Banjar. Melalui balap jukung, mereka memperlihatkan kekayaan alam dan kecintaan
                mereka pada sungai yang mengelilingi wilayah mereka.
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Olahraga
                    Tradisional Banjar</h1>
                    <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <iframe src="https://www.youtube.com/embed/3l0SNynVdug" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
        "https://www.youtube.com/embed/3l0SNynVdug",
        "https://www.youtube.com/embed/gr-jVr23iB4",
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
      window.location.href = "/olahraga-tradisional.html";
    });
  }
});
