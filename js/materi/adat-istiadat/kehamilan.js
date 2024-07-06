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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kehamilan
      </h1>
      <div class="course-content-text"
          style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
          <h2>Badudus atau Mandi 7 Bulanan dalam Suku Banjar</h2>
          <p>
              Secara umum makna dari prosesi mandi tujuh bulan ini bermakna adalah agar dalam proses
              melahirkan nanti dapat berjalan dengan lancar dan selamat hal ini terlihat dari beberapa
              rangkaian proses yang dilakukan. Tradisi mandi 7 bulanan merupakan adat kebiasaan yang
              dilakukan secara turun temurun oleh masyarakat banjar khususnya ibu yang hamil anak pertama
              pada usia kandungan memasuki 7 bulan. Upacara 7 bulanan adalah sebagai bentuk syukur kepada
              allah karena sebentar lagi bayi yang dikandung akan lahir ke dunia. Upacara ini diharapkan
              bisa menjadi doa untuk anak yang dikandung agar selalu taat kepada allah dan bisa berbakti
              kepada kedua orang tuanya. Ketika upacara di gelar, si ibu yang akan dimandikan berada pada
              dalam pagar mayang untuk dimandikan. Setelah selesai mandi 7 bulanan si ibu yang hamil
              tersebut rambutnya di sisir, di rias, dan diberi pakaian yang bagus. Upacara ini diakhiri
              dengan bersalaman sambil mendoakan kepada si ibu yang mandi tersebut. Tradisi Mandi Tujuh
              Bulanan hingga saat ini masih tetap dilaksanakan dan berlaku bagi setiap wanita yang hamil
              anak pertama

          </p>

          <h2>Bakunut dan Mandui Baya dalam Suku Bakumpai</h2>
          <p>

              Bakunut dan Mandui Baya merupakan tradisi menujuh bulan kehamilan suku Bakumpai. Tradisi ini
              meliputi tiga tahap yaitu: tahap pertama Bakunut yang dilakukan oleh kerabat dan tetangga
              jiran ibu hamil yang mengandung tujuh bulan, rangkaian pembacaan doa dan ayat suci al-Qur’an
              bersama-sama. Tahap kedua yaitu proses mandi-mandi, prosesi mandi-mandi pada kehamilan 7
              bulan ini sama saja dengan pelaksanaan dan bahan yang digunakan pada tradisi bapapai
              (sebelum perkawinan), akan tetapi terdapat penambahan prosesi yakni, Mandui Baya (mandi
              baya) pada prosesi ini Wanita hamil diminta untuk duduk menghadap arah matahari tenggelam.
              Pada prosesi Mandui Baya ialah mandi dengan menyiram air Baya (air yang sebelumnya
              direndamkan bunga), mulai dari kepala sampai ujung kaki, pada saat air Baya tersebut disiram
              di kepala, wanita hamil tersebut diminta untuk meminum air Baya sebanyak 3 kali tegukan,
              tujuannya agar bayi yang dikandung dapat lahir dengan selamat dan sehat, dan proses lahiran
              nanti mudah diibaratkan seperti air yang mengalir tanpa hambatan.
          </p>

          <h2>Sarah Mantah dalam Suku Bakumpai</h2>
          <p>
              Umumnya Tradisi Sarah Mantah merupakan tradisi yang sama kegunaannya bakunut dan mandi baya.
              Namun terdapat perbedaan yakni, pada sarah mantah tidak menggunakan pagar mayang. Pada sarah
              matah rerumahan yang dibuat menggunakan tebu dan benang tidak ada. Umumnya sarah mantah
              dilaksanakan apabila yang punya hajatan tidak memiliki dana untuk melakukan bapagar mayang.
              Namun karena tradisi ini merupakan suatu keharusan dalam kehamilan 7 bulan maka diadakan
              sarah matah.
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
                  <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kehamilan</h1>
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
      window.location.href = "/index.html";
    });
  }

  // Tambahkan event listener untuk tombol back
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "/adat-istiadat.html";
    });
  }
});
