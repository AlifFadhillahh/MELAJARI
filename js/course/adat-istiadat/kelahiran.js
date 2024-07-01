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
      <h1 class="course-title">Bapukung dalam Suku Banjar</h1>
                    <div class="course-content-text">
                        Bapukung adalah cara orang tua zaman dulu meletakkan bayi mereka untuk tidur dalam sebuah
                        ayunan, posisi duduk, dengan punggung tegak lurus dan kaki ditekuk seperti jongkok hampir ke
                        dada atau kaki lurus. Kemudian dibungkus dengan kain ayunan pada tubuh bayi dan dibalut dengan
                        kain panjang dari leher hingga pinggul (dibungkus rapi agar bayi tidur dengan tenang dan
                        nyaman), dimana posisi sang bayi seperti di dalam kandungan.


                    </div>

                    <h1 class="course-title">Bapalas Bidan dalam Suku Bakumpai</h1>
                    <div class="course-content-text">Pelaksanaan bapalas bidan, merupakan adat istiadat dari Suku
                        Bakumpai yang dilakukan ketika bayi dalam kurun waktu berumur 40 hari dan tidak boleh lewat dari
                        waktu tersebut. Seorang bayi yang baru lahir dinyatakan sebagai anak bidan sampai
                        dilaksanakannya upacara bapalas bidan, yakni suatu upacara pemberkatan yang dilakukan oleh bidan
                        terhadap si bayi dan ibunya. yakni memberi hadiah sebagai syarat (piduduk) berupa beras, gula
                        merah, pisau, kelapa dan sedikit uang kepada bidan yang menolong. Terdapat 5 tahapan dalam
                        pelaksanaan bapalas bidan antara lain; tahap pertama mampandui anak (memandikan bayi) dengan air
                        yang dicampurkan kambat dan mayang ke dalamnya. Tahap kedua mahunjeng petak (menginjakkan kaki
                        ke tanah) yang berisi koin (uang logam). Tahap ketiga proses manuyang anak (mengayunkan bayi)
                        dengan menggunakan ayunan yang berlapis tiga kain sarung. Tahap keempat yaitu mengibas ayam pada
                        ayunan bayi yang berfungsi secara simbolik untuk menghilangkan sial pada si anak (bayi). Tahap
                        kelima proses Batapung tawar adalah acara semacam selamatan untuk menyambut kelahiran seorang
                        anak.</div>
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
                      <iframe src="https://www.youtube.com/embed/c87TFuoVMck" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
