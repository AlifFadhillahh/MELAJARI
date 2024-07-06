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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kematian
      </h1>
      <div class="course-content-text"
          style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
          <h2>Adat Istiadat Kematian dalam Suku Banjar</h2>
          <p>
              Pada masyarakat sukubangsa Banjar di Kalimantan Selatan terdapat serangkaian upacara yang
              berkaitan dengan kematian. Apabila dalam suatu kampung diketahui ada yang meninggal dunia,
              maka seluruh warga kampung membantu apa yang dapat dibantu untuk keluarga yang ditimpa
              musibah. Mereka datang melayat dengan masing-masing memberi sumbangan sebagai tanda berduka
              cita, baik berupa uang maupun bahan-bahan makanan. Seseorang yang meninggal pada waktu sore
              atau malam hari, pemakamannya dilakukan esok harinya. Atau karena menunggu ahli waris yang
              kebetulan berada di luar daerah terpaksa harus menunggunya. Namun waktu menunggu ini
              biasanya paling lama setengah hari (sekitar empat belas jam). Karena menurut ajaran agama
              (Islam) makin cepat jenazah dikuburkan semakin baik. Apabila mayat baru dapat dikuburkan
              setelah kedatangan ahli warisnya, maka malam harinya dilakukan upacara menjagai (menunggu)
              mayat. Dalam acara itu dilaksanakan pembacaan ayat-ayat suci Al Quran atau Surah Yassin
              secara bergantian yang pahalanya diberikan kepada orang yang meninggal.

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
                <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kematian</h1>
                <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                    <iframe src="https://www.youtube.com/embed/fgQ6wUTI7fE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
        "https://www.youtube.com/embed/fgQ6wUTI7fE",
        "https://www.youtube.com/embed/wE3uX1Df4AA",
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
