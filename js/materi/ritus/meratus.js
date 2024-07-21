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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Ritus
      Suku Meratus
  </h1>
  <div class="course-content-text"
      style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
      <h2>Baharagu</h2>
      <p>
      </p>

      <h2>Upacara Pembukaan Lahan</h2>
      <p>
          Upacara pembukaan lahan merupakan ritual yang dilakukan secara individu di lahan
          masing-masing, yaitu dengan cara membakar lahan. dalam upacara pembukaan lahan ada istilah
          “baladang” yaitu kegiatan menjaga api secara gotong royong agar api tidak menyebar ke area
          hutan.
      </p>

      <h2>Aruh Halarat</h2>
      <p>
          Aru Halarat merupakan acara meminta izin kepada tuhan dan penunggu pohon guna keperluan
          bertani, di dalamnya terdapat acara “manyanggar” yang bertujuan meminta perlindungan ketika
          menebang pohon agar tidak terjadi hal-hal yang tidak diinginkan.
      </p>

      <h2>Manugal</h2>
      <p>
          Tradisi manugal merupakan acara menanam benih yang dilakukan oleh pemilik lahan bersama
          dengan keluarga ataupun tetangga terdekatnya. adapun cara menanamnya yakni dengan
          menggunakan tongkat (tugal) yang ditumbuk ke tanah sekitar 4-5 cm kemudian dimasukan sekitar
          4-6 biji benih di setiap lubang yang sudah ditugal kemudian diakhiri dengan makan bersama di
          pondok.
      </p>

      <h2>Aruh Basambu (Tolak bala)</h2>
      <p>
          Aruh basambu merupakan kegiatan yang dilakukan di balai adat, kegiatan ini dilakukan agar
          mendoakan padi yang ditanam tumbuh subur dan tidak terkena hama atau bencana, sekaligus
          mendoakan agar hasil panen berlimpah ruah. tetapi, kegiatan ini tidak dapat dilakukan jika
          beberapa orang di dusun tersebut belum melakukan manugal, sehingga harus menunggu semua
          warga per dusun selesai manugal baru bisa dilaksanakan tolak bala.
      </p>

      <h2>Aruh mahanyari</h2>
      <p>
          Aruh mahanyari merupakan perayaan yang dilakukan pasca panen di Balai adat selama satu malam
          yang bertujuan untuk memohon berkah, sekaligus mendoakan agar padi tersebut bisa menjadi
          penyambung kehidupan selama beberapa tahun mendatang. Sebelum dilakukannya aruh mahanyari
          baras tersebut tidak boleh dikonsumsi. aruh ini dikategorikan dalam aruh ganal (besar)
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
                      Rakyat Meratus</h1>
                      <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                          <iframe src="https://www.youtube.com/embed/4d_SsnDD4Cw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
      window.location.href = "/ritus.php";
    });
  }
});
