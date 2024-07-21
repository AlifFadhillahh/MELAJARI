<?php
session_start();
if (!isset($_SESSION['U'])) {
    header("location:login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kesenian - Banjar</title>
    <link rel="stylesheet" href="/css/per-materi.css">
    <link rel="stylesheet" href="/css/styles.css">
    <style>
        @font-face {
            font-family: 'Dayaknese';
            src: url('/assets/font/ARCO.ttf') format('truetype');
        }
    </style>
</head>

<body style="background-image: url('/assets/bg/Suku-Kalimantan.webp'); background-size: cover;">
    <div id="rotate-device-message">
        <p>Please rotate your device to landscape mode</p>
    </div>
    <img src="/assets/button/sound.webp" id="sound-button" class="nav-button"
        style="position: absolute; top: 10px; right: 10px; cursor: pointer; z-index: 1000;">
    <section class="materi-grid">
        <div class="button-container">
            <img src="/assets/button/back.webp" class="nav-button" id="back-button">
            <img src="/assets/button/home.webp" class="nav-button" id="home-button">
            <img src="/assets/button/fullscreen.webp" class="nav-button" id="fullscreen-button"
                onclick="toggleFullScreen()">
        </div>

        <div class="container">
            <aside>
                <div class="button-wrapper">
                    <img src="/assets/button/tombol.webp" id="materi-button">
                    <p>Materi</p>
                </div>
                <div class="button-wrapper">
                    <img src="/assets/button/tombol.webp" id="video-button">
                    <p>Video</p>
                </div>
            </aside>
            <div class="content-container">
                <div class="course-content" id="course-content">
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kesenian
                        Suku Banjar
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Musik panting</h2>
                        <p>
                            Musik panting adalah seni musik tradisional dari Kalimantan Selatan, khususnya etnis Banjar.
                            Musik ini telah menjadi bagian penting dalam kehidupan masyarakat setempat selama
                            berabad-abad dan digunakan dalam berbagai upacara adat, perayaan, dan pertunjukan seni
                            tradisional. Nama "panting" masih menjadi misteri, tetapi musik ini telah menjadi simbol
                            budaya Banjar.
                        </p>
                        <p>
                            Instrumen musik panting terbuat dari bambu yang disusun untuk menghasilkan nada-nada indah,
                            termasuk gendang, gong, rebana, dan panting sebagai instrumen utama. Instrumen-instrumen ini
                            menciptakan harmoni yang mencerminkan kehidupan masyarakat Kalimantan Selatan yang hidup
                            berdampingan dengan alam.
                        </p>
                        <p>
                            Musik panting memainkan peran penting dalam upacara adat seperti pernikahan, pertunjukan
                            seni, dan upacara keagamaan di Kalimantan Selatan. Ia menjadi pengiring dalam tarian, drama,
                            dan pertunjukan seni lainnya, serta menjadi elemen kunci dalam mempertahankan seni
                            tradisional.
                        </p>

                        <h2>Kuriding</h2>
                        <p>
                            Kuriding adalah alat musik ritmis/perkusi yang dikategorikan sebagai idiophone. Alat ini
                            berbentuk persegi panjang kecil, dengan bagian dalam yang ditempelkan di mulut dan bagian
                            luar yang menghadap ke luar.
                        </p>

                        <h2>Sinoman hadrah</h2>
                        <p>
                            Hadrah berkembang di Kabupaten Banjar, khususnya Martapura. Sinoman Hadrah adalah
                            perkumpulan seni yang menyambut kehadiran seseorang atau kelompok yang dihormati.
                            Penampilannya melibatkan rebana, babun, ketipung, tamborens, bendera, dan payung besar
                            berhias. Pertunjukan ini biasanya dilakukan secara berkelompok dengan minimal 30 orang.
                        </p>

                        <h2>Andi-andi</h2>
                        <p>
                            Andi-andi adalah seni suara tradisional dari Kalimantan Selatan yang hanya melibatkan
                            penyanyi wanita tanpa alat musik. Nyanyiannya berkisah tentang kehidupan para raja di
                            Kalimantan.Seni ini dianggap hampir punah karena sudah lebih dari 20 tahun tidak dipentaskan
                            secara terbuka.
                        </p>

                        <h2>Air guci</h2>
                        <p>
                            Air Guci adalah kerajinan kain khas Banua Banjar yang sudah populer sejak ratusan tahun
                            lalu. Dahulu, kain ini hanya boleh dipakai oleh penguasa Kerajaan Banjar sebagai simbol
                            kehormatan Kesultanan Banjar. Kini, kesakralannya telah berkurang seiring perkembangan
                            zaman.
                        </p>

                        <h2>Kain Sasirangan</h2>
                        <p>
                            Sasirangan adalah kain khas Kalimantan Selatan yang dibuat dengan teknik tusuk jelujur,
                            diikat, dan dicelup. Dikenal sebagai batik sandang, kain ini memiliki motif tradisional khas
                            Kalimantan Selatan. Awalnya dikenal sebagai kain Langgundi, yang kemudian hanya digunakan
                            sebagai sarana pelengkap dalam terapi pengobatan alternatif. Nama "sasirangan" berasal dari
                            cara pembuatannya, yaitu dijelujur dan dicelup.
                        </p>

                        <h2>Kaukah</h2>
                        <h2>Batu permata</h2>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/kesenian/banjar.js"></script>
</body>

</html>