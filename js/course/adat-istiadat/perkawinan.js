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
                <h1 class="course-title">Perkawinan</h1>
                <p class="course-content-text">Dalam masyarakat sukubangsa Banjar apabila
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
                dan bakakawinan itu sendiri.</p>
            `;
    });
  }

  // Tambahkan event listener untuk tombol video
  if (videoButton) {
    videoButton.addEventListener("click", function () {
      // Ganti isi konten dengan konten video
      courseContent.innerHTML = `
                <h1 class="course-title">Perkawinan</h1>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
