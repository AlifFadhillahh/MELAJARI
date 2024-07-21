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
    <title>Permainan Rakyat - Banjar</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Permainan
                        Rakyat Banjar
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Balogo</h2>
                        <p>
                            Permainan balogo diambil dari kata dasar "logo” dengan tambahan awalan "ba” (Bahasa Banjar),
                            yang berarti permainan yang mempergunakan alat logo. Permainan balogo dilakukan oleh
                            anak-anak laki usia Sekolah Dasar dan juga oleh anak-anak remaja. Tidak atau jarang sekali
                            dilakukan oleh anak-anak perempuan. Permainan ini biasanya dilakukan di halaman rumah, di
                            atas tanah keras yang datar yang memanjang, meskipun tidak terlalu luas.
                        </p>

                        <h2>Ba Cuk Cuk Bimbi</h2>
                        <p>
                            Permainan bacukcuk bimbi diambil dari kata dasar "cukcuk bimbi" dengan tambahan awalan kata
                            "ba" (Bahasa Banjar) yang berarti main cukcuk bimbi. Tidak jelas asal dan arti dari kata
                            cukcuk bimbi tersebut. Permainan biasanya dilakukan oleh paling sedikit oleh 3 orang anak
                            atau sampai 5 orang anak perempuan dalam usia Sekolah Dasar atau gadis remaja. Kadang-kadang
                            juga dimainkan oleh anak-anak laki dengan mengambil tempat di palatar rumah pada waktu siang
                            hari, bahkan kadang-kadang juga bisa pada malam hari.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/permainan-rakyat/banjar.js"></script>
</body>

</html>