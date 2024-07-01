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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Perkawinan</h1>
      <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
          Dalam masyarakat sukubangsa Banjar apabila
          anak laki-laki sudah dewasa dan mampu
          berusaha untuk mencari hidup, biasanya segera
          dicarikan jodohnya. Pemilihan jodoh oleh orang
          tua ini adalah si anak tidak keliru
          mempersunting gadis untuk dijadikan istri
          sebagai teman hidup dalam rumah tangga.
          Karena itu menurut adat istiadat perkawinan
          orang Banjar ada suatu proses yang dilalui
          sebelum perkawinan. Adat itu meliputi beberapa
          kegiatan yang disebut basasuluh, badatang,
          bapapayuan, maatar patalian, baantaran jujuran
          dan bakakawinan itu sendiri.</div>
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
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
                </div>
            `;
    });
  }

  // Tambahkan event listener untuk tombol home
  if (homeButton) {
    homeButton.addEventListener("click", function () {
      window.location.href = "../home.html";
    });
  }

  // Tambahkan event listener untuk tombol back
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "../adat-istiadat.html";
    });
  }
});
