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
      <h1 class="course-title">Badudus atau Mandi 7 Bulanan dalam Suku Banjar</h1>
                    <div class="course-content-text">
                        Secara umum makna dari prosesi mandi tujuh bulan ini bermakna adalah agar dalam proses
                        melahirkan nanti dapat berjalan dengan lancar dan selamat hal ini terlihat dari beberapa
                        rangkaian proses yang dilakukan. Tradisi mandi 7 bulanan merupakan adat kebiasaan yang dilakukan
                        secara turun temurun oleh masyarakat banjar khususnya ibu yang hamil anak pertama pada usia
                        kandungan memasuki 7 bulan. Upacara 7 bulanan adalah sebagai bentuk
                        syukur kepada allah karena sebentar lagi bayi yang dikandung akan lahir ke dunia. Upacara ini
                        diharapkan bisa menjadi doa untuk anak yang dikandung agar selalu taat kepada allah dan bisa
                        berbakti kepada kedua orang tuanya. Ketika upacara di gelar, si ibu yang akan dimandikan berada
                        pada dalam pagar mayang untuk dimandikan. Setelah selesai mandi 7 bulanan si ibu yang hamil
                        tersebut rambutnya di sisir, di rias, dan diberi pakaian yang bagus. Upacara ini diakhiri dengan
                        bersalaman sambil mendoakan kepada si ibu yang mandi tersebut. Tradisi Mandi Tujuh Bulanan
                        hingga saat ini masih tetap dilaksanakan dan berlaku bagi setiap wanita yang hamil anak pertama.
                    </div>

                    <h1 class="course-title">Adat Istiadat Kematian dalam Suku Bakumpai</h1>
                    <div class="course-content-text">Bakunut dan Mandui Baya merupakan tradisi menujuh bulan kehamilan
                        suku Bakumpai. Tradisi ini meliputi tiga tahap yaitu: tahap pertama Bakunut yang dilakukan oleh
                        kerabat dan tetangga jiran ibu hamil yang mengandung tujuh bulan, rangkaian pembacaan doa dan
                        ayat suci al-Qur'an bersama-sama. Tahap kedua yaitu proses mandi-mandi, prosesi mandi-mandi pada
                        kehamilan 7 bulan ini sama saja dengan pelaksanaan dan bahan yang digunakan pada tradisi bapapai
                        (sebelum perkawinan), akan tetapi terdapat penambahan prosesi yakni, Mandui Baya (mandi baya)
                        pada prosesi ini Wanita hamil diminta untuk duduk menghadap arah matahari tenggelam. Pada
                        prosesi Mandui Baya ialah mandi dengan menyiram air Baya (air yang sebelumnya direndamkan
                        bunga), mulai dari kepala sampai ujung kaki, pada saat air Baya tersebut disiram di kepala,
                        wanita hamil tersebut diminta untuk meminum air Baya sebanyak 3 kali tegukan, tujuannya agar
                        bayi yang dikandung dapat lahir dengan selamat dan sehat, dan proses lahiran nanti mudah
                        diibaratkan seperti air yang mengalir tanpa hambatan. </div>

                    <div class="course-content-text">Tradisi Sarah Mantah merupakan upacara kehamilan 7 bulan yang
                        serupa dengan Bakunut dan Mandui Baya, namun tanpa pagar mayang dan biasanya dilakukan apabila
                        tidak memiliki dana cukup. Upacara ini tetap diadakan sebagai bentuk keharusan dalam kehamilan 7
                        bulan.</div>
              `;
    });
  }

  // Tambahkan event listener untuk tombol video
  if (videoButton) {
    videoButton.addEventListener("click", function () {
      // Ganti isi konten dengan konten video
      courseContent.innerHTML = `
                  <h1 class="course-title">Kematian</h1>
                  <div class="video-container">
                      <iframe src="https://www.youtube.com/embed/-tIqwWfVN1I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
              `;
    });
  }

  // Tambahkan event listener untuk tombol home
  if (homeButton) {
    homeButton.addEventListener("click", function () {
      window.location.href = "../../home.html";
    });
  }

  // Tambahkan event listener untuk tombol back
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "../../adat-istiadat.html";
    });
  }
});
