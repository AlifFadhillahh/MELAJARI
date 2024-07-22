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
    <title>Teknologi Tradisional - Rumah Adat</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Rumah Adat
                        Tiap Suku
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Rumah Adat Suku Banjar</h2>
                        <p>
                            Rumah Bubungan Tinggi, juga dikenal sebagai Rumah Baanjung, adalah rumah adat suku Banjar
                            yang terkenal dengan arsitekturnya yang unik dan filosofis. Rumah ini mencerminkan
                            nilai-nilai budaya, tradisi, dan filosofi masyarakat Banjar yang telah diwariskan
                            turun-temurun. Rumah Bubungan Tinggi memiliki bentuk yang khas, yaitu memanjang dengan atap
                            yang tinggi menjulang seperti tanduk kerbau. Pada masa lampau, Rumah Bubungan Tinggi juga
                            berfungsi sebagai benteng pertahanan. Struktur panggungnya yang tinggi dan atapnya yang
                            kokoh memberikan perlindungan dari serangan musuh ataupun hewan buas. Selain itu,
                            anjung-anjung digunakan untuk memantau situasi dan menyerang balik. Sedangkan kolong rumah
                            yang tinggi memiliki fungsi untuk menyimpan hasil panen. Bagi masyarakat yang tinggal di
                            tepi sungai, kolong Rumah Bubungan Tinggi juga menjadi tempat untuk menyimpan perahu.
                        </p>
                        <p>
                            Rumah Gajah Baliku adalah salah satu rumah adat suku Banjar yang terkenal dengan
                            arsitekturnya yang unik dan kaya makna. Rumah ini memiliki ciri khas bentuk atap yang
                            menyerupai gajah, yang mencerminkan nilai-nilai budaya dan filosofi masyarakat Banjar yang
                            telah diwariskan turun-temurun selama berabad-abad. Atap Rumah Gajah Baliku berbentuk
                            melengkung seperti punggung gajah dengan dua ujung runcing menyerupai gading gajah. Bentuk
                            atap ini menjadi ciri khas yang paling menonjol dari rumah adat ini.
                        </p>

                        <h2>Rumah Adat Suku Meratus</h2>
                        <p>
                            Pondok-pondok adalah rumah tradisional Suku Dayak Meratus di tengah hutan Pegunungan
                            Meratus, Kalimantan Selatan. Mereka mendiami pondok sederhana yang tidak hanya sebagai
                            tempat tinggal, tetapi juga simbol identitas, budaya, dan kearifan lokal. Pondok-pondok
                            dibangun dekat lahan pertanian di lereng perbukitan, terbuat dari kayu, bambu, dan daun
                            nipah. Biasanya berbentuk persegi panjang dengan atap daun nipah, pondok ini mencerminkan
                            kesederhanaan, keharmonisan dengan alam, dan kearifan lokal Suku Dayak Meratus. Mereka
                            dipindahkan jika ladang pertanian berpindah, menunjukkan ketahanan dan revitilisasi
                            arsitektur tradisional Suku Dayak Meratus yang penting.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/teknologi-tradisional/rumah-adat.js"></script>
</body>

</html>