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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Perkawinan
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Adat Istiadat perkawinan dalam Suku Banjar</h2>
                        <p>
                            Dalam masyarakat sukubangsa Banjar apabila anak laki-laki sudah dewasa dan mampu berusaha
                            untuk mencari hidup, biasanya segera dicarikan jodohnya. Pemilihan jodoh oleh orang tua ini
                            adalah si anak tidak keliru mempersunting gadis untuk dijadikan istri sebagai teman hidup
                            dalam rumah tangga. Karena itu menurut adat istiadat perkawinan orang Banjar ada suatu
                            proses yang dilalui sebelum perkawinan. Adat itu meliputi beberapa kegiatan yang disebut
                            basasuluh, badatang, bapapayuan, maatar patalian, baantaran jujuran dan bakakawinan itu
                            sendiri.

                        </p>

                        <h2>Adat Istiadat Perkawinan dalam Suku Bakumpai</h2>
                        <p>Pada adat istiadat perkawinan Suku Bakumpai, terdapat tradisi mandi pengantin atau (Bapapai).
                            Bapapai bermaknakan sebagai proses kehidupan yang dilaksanakan sebelum pengantin suku Dayak
                            Bakumpai menempuh kehidupan yang baru. Arti “papai” dalam bahasa Indonesia artinya percik,
                            dalam pelaksanaan mandi-mandi pengantin terdapat prosesi memercik-memercikkan air
                            menggunakan bunga mayang pinang kepada calon pengantin dan orang yang hadir pada acara ini.
                            Prosesi ini melibatkan tempat mandi pagar mayang berbentuk bangunan persegi panjang dengan
                            berbagai hiasan dan bahan. Setelah persiapan selesai, pengantin dimandikan dengan
                            memercikkan kembang mayang di atas kepala pengantin yang ditutupi dengan kain putih,
                            dilanjutkan dengan mengguyurkan berbagai air seraya membaca sholawat nabi.
                        </p>
                        <p>
                            Prosesi berikutnya adalah 7 bidadari mengelilingi pengantin sembari memegang benang kuning
                            yang dibentuk seperti lingkaran yang selanjutnya pengantin harus melangkah 7 kali pada
                            benang kuning yang diletakkan di bawah kemudian dilakukan gerakan dari bawah ke atas atau
                            kepala kemudian hal tersebut diulangi sebanyak 7 kali dimana pada saat langkah ke-7
                            pengantin akan menginjak telur ayam. Prosesi terakhir yaitu ditapung tawari dengan minyak
                            likat dikelilingi oleh 7 bidadari yang memandikan tadi, setelah itu menyalakan lilin
                            mengelilingkan cermin dan lilin sebanyak tujuh kali pada pengantin yang dilakukan secara
                            bergantian oleh 7 bidadari, menyisir rambut pengantin dan memberikan pupur basah atau bedak
                            basah sembari membaca sholawat nabi. Prosesi inti dari acara tapung tawar ini adalah
                            pembacaan doa yang dipimpin oleh seorang yang menjadi tetua suku atau kampung.
                        </p>

                        <h2>Adat Perkawinan Suku Dayak Meratus
                        </h2>
                        <p>
                            Baruji adalah proses tawar menawar pada saat akan melaksanakan adat jujuran pada pernikahan
                            suku dayak meratus. Adapun jujuran merupakan salah satu tradisi unik pada masyarakat meratus
                            karena paling banyak mendapat perhatian khalayak (Koentjaraningrat, 2002). Keunikan yang
                            tercermin pada pelaksanaan adat jujuran tampak pada proses tawar menawar ( Baruji ). Secara
                            sepintas proses tawar menawar tersebut sesungguhnya tidak elok dipandang, karena dapat
                            mempengaruhi kondisi fisik pengantin yang pada awalnya sudah mantap untuk membentuk keluarga
                            yang sakinah bisa menjadi kecewa karena tidak kecil kemungkinan bahwa perkawinan yang mereka
                            rencanakan bisa batal hanya karena terjadi ketidaksepakatan dalam menetapkan adat jujuran.
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
              <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Perkawinan</h1>
              <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                  <iframe src="https://www.youtube.com/embed/9dh3iLXPgOA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
        "https://www.youtube.com/embed/9dh3iLXPgOA",
        "https://www.youtube.com/embed/-tIqwWfVN1I",
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
      window.location.href = "/adat-istiadat.php";
    });
  }
});
