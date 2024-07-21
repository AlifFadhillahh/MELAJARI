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
                        Suku Banjar
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Basalamatan</h2>
                        <p>
                            Basalamatan adalah perayaan keci-kecilan yang diadakan dengan car mengundang keluarga dekat
                            dan masyarakat disekitar yang di dalam pelaksanaannya terselip juga batapung tawar.
                            basalamatan oleh masyarakat banjar biasanya diadakan jika baru memiliki rumah atau tempat
                            tinggal baru, alat transportasi dan lain-lain.
                        </p>

                        <h2>Malabuh</h2>
                        <p>
                            Ritual malabuh umumnya dilakukan oleh tokoh adat, yang sering disebut sebagai tukang tamba,
                            atau oleh keturunan keluarga yang bersangkutan. Prosesi ini dimulai dengan acara selamatan
                            di rumah, yang melibatkan pembacaan doa untuk memohon perlindungan dan berkat. Sebagian dari
                            sesaji makanan kemudian dibawa ke tepi sungai untuk dilabuh. Saat ditepi sungai, dilakukan
                            pembacaan tuturan ritual yang bertujuan untuk memanggil kehadiran buaya gaib. Sesaji
                            tersebut kemudian dilepaskan ke dalam sungai dengan cara memasukkan tangan ke dalam air
                            hingga siku, dengan gerakan yang mengingatkan pada menyodorkan makanan kepada buaya
                            tersebut. Proses ini tidak hanya merupakan penghormatan kepada buaya, tetapi juga merupakan
                            manifestasi dari hubungan spiritual yang dalam antara masyarakat Banjar dan alam sekitarnya.
                            Melalui ritual ini, mereka berharap untuk mendapatkan perlindungan dan berkah dari buaya
                            gaib dan memperkuat ikatan dengan leluhur dan tradisi nenek moyang mereka.
                            Pelaksanaan malabuh bervariasi tergantung pada adat dan kebiasaan yang diwariskan oleh nenek
                            moyang sebelumnya. Waktu pelaksanaannya juga berbeda-beda, ada yang ditentukan berdasarkan
                            bulan Hijriah seperti Muharram, Shafar, Rabiul Awal, atau Dzulhijjah, dan ada pula yang
                            mengikuti penanggalan bulan Masehi.
                        </p>

                        <h2>Piduduk</h2>
                        <p>
                            Menurut Mukhlis Maman budayawan Banjar, piduduk berarti mahar, alat pembayaran atau alat
                            barter, pada masa lalu masyarakat Banjar belum mengenal uang sebagai alat pembayaran. Uang
                            baru dikenal Masyarakat Banjar sebagai alat pembayaran sejak Belanda datang, maka dari itu
                            pada sebelumnya alat untuk pembayaran berupa barang (Maman, 2019). Tradisi piduduk selalu
                            ada ketika akan menjalani acara-acara hajatan, seperti acara perkawinan, mandi tujuh bulan
                            untuk perempuan hamil, baayun maulid, mandi pengantin, ketika akan mengadakan pertunjukan
                            tradisional Banjar, selamatan untuk membangun rumah, dan merias pengantin (Jamalie, 2014).
                            Dalam acara perkawinan adat masyarakat Banjar, piduduk merupakan salah satu tradisi yang
                            menjadi bagian sangat penting dan sebagai hidangan untuk roh-roh dan makhluk halus agar
                            kedua mempelai atau keluarga tidak diganggu oleh makhluk halus, selain itu supaya pengantin
                            tidak kesurupan ketika memakai baju pengantin adat Banjar. Piduduk disediakan sebelum acara
                            resepsi perkawinan dilangsungkan hingga selesai acara. Piduduk diletakkan di tempat tertentu
                            yang dijadikan pusat acara, seperti di bawah pelaminan, di ranjang pengantin atau di tempat
                            yang dinilai strategis oleh yang menyediakannya. Menurut kepercayaan masyarakat Banjar,
                            apabila piduduk tidak disediakan ketika akan melangsungkan acara perkawinan maka akan
                            membuat makhluk halus marah dan akan mengganggu acara perkawinan. Umumnya piduduk memiliki
                            tujuan, perangkat dan makna simbol yang berbeda-beda, seperti halnya piduduk untuk acara
                            bapalas bidan, yaitu upacarapemberkatan yang dilakukan oleh bidan (dukun beranak) terhadap
                            bayi dan ibunya.
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Ritus
                    Suku Banjar</h1>
                    <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <iframe src="https://www.youtube.com/embed/vVPCeAhisU0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
        "https://www.youtube.com/embed/vVPCeAhisU0",
        "https://www.youtube.com/embed/ieh3GfnW1Uc",
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
      window.location.href = "/ritus.php";
    });
  }
});
