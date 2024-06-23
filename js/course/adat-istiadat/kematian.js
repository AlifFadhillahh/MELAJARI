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
                  <h1 class="course-title">Kematian</h1>
                  <p class="course-content-text">Pada masyarakat sukubangsa Banjar di Kalimantan Selatan terdapat
                  serangkaian upacara yang berkaitan dengan kematian. Apabila dalam suatu kampung diketahui ada
                  yang meninggal dunia, maka seluruh warga kampung membantu apa yang dapat dibantu untuk keluarga
                  yang ditimpa musibah. Mereka datang melayat dengan masing-masing memberi sumbangan sebagai tanda
                  berduka cita, baik berupa uang maupun bahan-bahan makanan. Seseorang yang meninggal pada waktu
                  sore atau malam hari, pemakamannya dilakukan esok harinya. Atau karena menunggu ahli waris yang
                  kebetulan berada di luar daerah terpaksa harus menunggunya. Namun waktu menunggu ini biasanya
                  paling lama setengah hari (sekitar empat belas jam). Karena menurut ajaran agama (Islam) makin
                  cepat jenazah dikuburkan semakin baik. Apabila mayat baru dapat dikuburkan setelah kedatangan
                  ahli warisnya, maka malam harinya dilakukan upacara menjagai (menunggu) mayat. Dalam acara itu
                  dilaksanakan pembacaan ayat-ayat suci Al Quran atau Surah Yassin secara bergantian yang
                  pahalanya diberikan kepada orang yang meninggal.</p>
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
