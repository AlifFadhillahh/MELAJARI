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
      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kesenian
                        Suku Meratus
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Kungkurung</h2>
                        <p>
                            Kungkurung merupakan alat musik idiophone yaitu alat musik yang sumber bunyinya berasal dari
                            alat musik itu sendiri. Kungkurung umumnya merupakan sebuah alat yang di gunakan untuk
                            kegiatan manugal. Manugal adalah kegiatan menanam benih padi tahunan, yang dimana dalam
                            prosesi manugal terdapat musik kungkurung. Peranan kungkurung sebagai alat teknologi
                            masyarakat dalam memberi lubang ke tanah dan dimasukan biji benih padi. Kungkurung
                            dihentakan oleh setiap orang yang melaksanakan gotong royong pada tradisi manugal secara
                            bergantian ke tanah sehingga menghasilkan bunyi yang beralunan dan harmonis.
                        </p>

                        <h2>Gandang</h2>
                        <p>
                            Gandang dayak merupakan salah satu jenis allat musik yang termasuk ke dalam golongan alat
                            musik ritmis. Menurut Mansyur (dalam jurnal: Pelataran Seni) Hal.88 alat musik ritmis adalah
                            alat musik yang tidak mempunyai nada dan berfungsi sebagai pembentuk ritme Gandang dayak
                            adalah alat musik tradisional yang berjenis membranopbone, yaitu alat musik yang sumber
                            bunyinya berasal dari membran (kulit) atau selaput yang direntangkan. Gandang dayak terbuat
                            dari kayu Sungsuling, bentuknya bulat, panjang, dan pada bagian dalam kayu dipahat hingga
                            berlobang sampai tembus mulai sisi kanan ke sisi kiri gandang, Gandang dayak sengaja dibuat
                            berongga di dalamnya agar bisa menghasilkan suara ketika dipukul. Di tengah-tengah kayu
                            dibuat lobang kecil untuk menaruh pamuknl wlin (pemukul gendang) dan di kedua sisi gandang
                            dayak dibungkus dengan kulit enjangan atau kijang antuk menutupi rongga kayu. Kulit
                            menjangam akan diikat menggunakan simþai (anyaman khas suku dayak) yang terbuat dari paikat
                            (rotan) sampai benar-benar kuat dan kencang, Di sisi-sisi simpai diberi pasak-
                        </p>

                        <h2>Anyaman</h2>
                        <p>
                            Anyaman merupakan kerajinan tangan Kalimantan Selatan. Akan tetapi pada suku dayak meratus,
                            anyaman dibuat berbahan baku berupa bambu. Jenis bambu yang biasa dipergunakan adalah bambu
                            tali (paring tali), karena jenis ini memiliki kelenturan serat yang baik dan tidak mudah
                            pecah. Bahan baku ini ada yang bisa didapat secara langsung di hutan sekitar desa pengrajin
                            dan ada juga yang dibeli dari pemasok/masyarakat sekitar hutan pegunungan meratus. Sedangkan
                            produk bambu yang bukan anyaman, dipergunakan berbagai jenis bambu (paring), antara lain
                            paring banar, paring haur, paring buluh dan paring tamiang. Langkah awal pembuatannya
                            dimulai dengan mempersiapkan bahan baku berupa bambu yang baik, sesuai jenis barang yang
                            akan dibuat. Kemudian dikeringkan, tanpa ada proses pewarnaan. Jika barang yang akan
                            dihasilkan berupa peralatan perikanan seperti hampang (perangkap ikan), cukup memotong bambu
                            sesuai dengan ukuran yang diinginkan. Begitu pula dengan barang-barang lainnya, seperti
                            tangguk, lukah dan lain-lain. Secara umum pembuatannya hampir sama, hanya saja model atau
                            variasi bentuk kreasi yang membedakannya (ada lurus, melingkar, setengah lingkaran).
                        </p>
                        <h2>Babangsai</h2>
                        <h2>Bakanjar</h2>
                    </div>
                  `;
    });
  }

  // Tambahkan event listener untuk tombol video
  if (videoButton) {
    videoButton.addEventListener("click", function () {
      // Ganti isi konten dengan konten video
      courseContent.innerHTML = `
                      <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kesenian
                      Suku Meratus</h1>
                      <div class="course-content-text" style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                          <iframe src="https://www.youtube.com/embed/C1MUIjb3StY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 75%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></iframe>
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
        "https://www.youtube.com/embed/C1MUIjb3StY",
        "https://www.youtube.com/embed/WnAgZL_36Og",
        "https://www.youtube.com/embed/TsGtTCR7QrM",
        "https://www.youtube.com/embed/Je0AZDYrD3Q",
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
      window.location.href = "/kesenian.html";
    });
  }
});
