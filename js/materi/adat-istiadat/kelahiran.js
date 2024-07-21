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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kelahiran
      </h1>
      <div class="course-content-text"
          style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
          <h2>Bapukung dalam Suku Banjar</h2>
          <p>
              Bapukung adalah cara orang tua zaman dulu meletakkan bayi mereka untuk tidur dalam sebuah
              ayunan, posisi duduk, dengan punggung tegak lurus dan kaki ditekuk seperti jongkok hampir ke
              dada atau kaki lurus. Kemudian dibungkus dengan kain ayunan pada tubuh bayi dan dibalut
              dengan kain panjang dari leher hingga pinggul (dibungkus rapi agar bayi tidur dengan tenang
              dan nyaman), dimana posisi sang bayi seperti di dalam kandungan.

          </p>

          <h2>Bapalas Bidan dalam Suku Bakumpai</h2>
          <p>
              Pelaksanaan bapalas bidan, merupakan adat istiadat dari Suku Bakumpai yang dilakukan ketika
              bayi dalam kurun waktu berumur 40 hari dan tidak boleh lewat dari waktu tersebut. Seorang
              bayi yang baru lahir dinyatakan sebagai anak bidan sampai dilaksanakannya upacara bapalas
              bidan, yakni suatu upacara pemberkatan yang dilakukan oleh bidan terhadap si bayi dan
              ibunya. yakni memberi hadiah sebagai syarat (piduduk) berupa beras, gula merah, pisau,
              kelapa dan sedikit uang kepada bidan yang menolong. Terdapat 5 tahapan dalam pelaksanaan
              bapalas bidan antara lain; tahap pertama mampandui anak (memandikan bayi) dengan air yang
              dicampurkan kambat dan mayang ke dalamnya. Tahap kedua mahunjeng petak (menginjakkan kaki ke
              tanah) yang berisi koin (uang logam). Tahap ketiga proses manuyang anak (mengayunkan bayi)
              dengan menggunakan ayunan yang berlapis tiga kain sarung. Tahap keempat yaitu mengibas ayam
              pada ayunan bayi yang berfungsi secara simbolik untuk menghilangkan sial pada si anak
              (bayi). Tahap kelima proses Batapung tawar adalah acara semacam selamatan untuk menyambut
              kelahiran seorang anak.
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kelahiran</h1>
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
      window.location.href = "/index.php";
    });
  }

  // Tambahkan event listener untuk tombol back
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "/adat-istiadat.php";
    });
  }
});
