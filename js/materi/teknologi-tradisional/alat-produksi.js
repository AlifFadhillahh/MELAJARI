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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Alat Produksi
      Tiap Suku
  </h1>
  <div class="course-content-text"
      style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
      <h2>Alat Produksi Suku Banjar</h2>
      <p>
          Ranggaman, sebuah alat tradisional dari bahasa Banjar yang berarti "alat untuk memotong",
          adalah instrumen penting dalam panen padi di Indonesia. Terbuat dari bambu dengan gigi-gigi
          tajam di bagian bawahnya, ranggaman digunakan untuk memisahkan batang padi dengan cepat dan
          efisien. Dua orang biasanya memegang ranggaman dan menariknya di antara dua baris padi,
          memotong batangnya tepat di pangkalnya untuk memudahkan proses panen. Meskipun lebih lambat
          dan membutuhkan lebih banyak tenaga daripada mesin pemanen padi modern, ranggaman tetap
          menjadi pilihan utama di daerah-daerah terpencil yang tidak mudah dijangkau oleh teknologi
          modern.
      </p>
      <p>
          Kompa Benih, atau kipas sortir, adalah alat tradisional lain yang memainkan peran penting
          dalam panen padi di pedalaman Suku Banjar. Alat ini digunakan untuk memisahkan gabah berisi
          (berisi beras) dari gabah kosong dengan menggunakan prinsip aerodinamika. Gabah kosong yang
          lebih ringan akan tertiup oleh angin, sementara gabah berisi yang lebih berat akan tetap di
          dalam wadah. Kompa benih telah menjadi bagian integral dari budaya dan tradisi masyarakat
          agraris di Indonesia, menunjukkan kearifan lokal dalam memanfaatkan sumber daya alam untuk
          keberlanjutan pertanian.
      </p>

      <h2>Alat Produksi Suku Bakumpai</h2>
      <p>
          Tatanjuk adalah alat tradisional dari masyarakat Bakumpai di Kalimantan Selatan yang
          digunakan untuk membuat lubang di tanah sebelum menanam bibit padi. Alat ini umumnya
          digunakan baik di lahan dataran tinggi maupun dataran rendah, membedakan cara pertanian dan
          peralatan yang digunakan oleh petani. Meskipun memiliki variasi nama seperti tutujah atau
          asak, fungsi dasar tatanjuk tetap sama, yaitu sebagai alat untuk menyiapkan tanah untuk
          penanaman bibit.
      </p>
      <p>
          Anai-anai, yang juga dikenal sebagai ranggaman, adalah alat tradisional lain dari suku
          Bakumpai yang digunakan untuk memanen padi. Terbuat dari bambu dengan gigi-gigi tajam,
          anai-anai digunakan dengan cara ditarik di antara dua baris padi untuk memotong batang padi
          tepat di pangkalnya. Meskipun alat ini dikenal dengan berbagai nama di berbagai daerah,
          seperti ranggaman, fungsi dan cara penggunaannya tetap konsisten dalam memudahkan proses
          panen padi secara tradisional.
      </p>

      <h2>Alat Produksi Suku Meratus</h2>
      <p>
          Bambu adalah sumber daya alam yang sangat vital dan serbaguna bagi masyarakat Dayak Meratus.
          Mereka menggunakan bambu untuk berbagai keperluan dalam kehidupan sehari-hari, mulai dari
          membangun rumah dan infrastruktur seperti jembatan, hingga membuat peralatan rumah tangga
          seperti piring, sendok, dan keranjang. Bambu juga diolah menjadi alat-alat berburu,
          memancing, dan pertanian yang kokoh dan efektif. Selain itu, bambu menjadi media ekspresi
          seni dan budaya, digunakan untuk membuat kerajinan tangan indah serta alat musik tradisional
          seperti suling dan angklung, yang memperkaya warisan seni dan tradisi mereka.
      </p>
      <p>
          Ani-ani, sebuah alat tradisional untuk memanen padi, juga terbuat dari bambu. Alat ini
          dirancang dengan ujung yang tajam untuk memudahkan pemotongan padi dengan cara dimasukkan
          jari jempol ke dalamnya. Ani-ani adalah contoh bagaimana bambu digunakan secara praktis dan
          efisien dalam aktivitas pertanian tradisional, memperlihatkan keterampilan serta kreativitas
          masyarakat Dayak Meratus dalam memanfaatkan sumber daya alam yang tersedia di sekitar
          mereka.
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
                          <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Alat Produksi
                          Tiap Suku</h1>
                          <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                              <iframe src="https://www.youtube.com/embed/2tKIMEjWwfE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
        "https://www.youtube.com/embed/2tKIMEjWwfE",
        "https://www.youtube.com/embed/QdENmp3ijqI",
        "https://www.youtube.com/embed/0JcrLPy21hI",
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
      window.location.href = "/teknologi-tradisional.php";
    });
  }
});
